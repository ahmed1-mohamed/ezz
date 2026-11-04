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
"[project]/src/hooks/use-ad-actions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdActions",
    ()=>useAdActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/ads.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-errors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/toast-config.ts [app-client] (ecmascript)");
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
function useAdActions() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "aa22058cdcb7e9556cc60e1b7b793651c9bc5c80f58340abbcba229829e64c37") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aa22058cdcb7e9556cc60e1b7b793651c9bc5c80f58340abbcba229829e64c37";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== session?.user?.accessToken) {
        t0 = async (formData)=>{
            const token = session?.user?.accessToken;
            if (!token) {
                throw new Error("Not authenticated");
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].createAd(formData, token);
        };
        $[1] = session?.user?.accessToken;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== queryClient || $[4] !== t) {
        t1 = async ()=>{
            await queryClient.invalidateQueries({
                queryKey: [
                    "ads"
                ]
            });
            await queryClient.invalidateQueries({
                queryKey: [
                    "adsTotals"
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("ads.messages.createSuccess"), {
                id: "ad-action-toast"
            });
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
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t2);
    let t3;
    if ($[9] !== session?.user?.accessToken) {
        t3 = async (t4)=>{
            const { adId, formData: formData_0 } = t4;
            const token_0 = session?.user?.accessToken;
            if (!token_0) {
                throw new Error("Not authenticated");
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].updateAd(adId, formData_0, token_0);
        };
        $[9] = session?.user?.accessToken;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== queryClient || $[12] !== t) {
        t4 = async ()=>{
            await queryClient.invalidateQueries({
                queryKey: [
                    "ads"
                ]
            });
            await queryClient.invalidateQueries({
                queryKey: [
                    "adsTotals"
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("ads.messages.updateSuccess"), {
                id: "ad-action-toast"
            });
        };
        $[11] = queryClient;
        $[12] = t;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== t3 || $[15] !== t4) {
        t5 = {
            mutationFn: t3,
            onSuccess: t4
        };
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t5);
    let t6;
    if ($[17] !== session?.user?.accessToken) {
        t6 = async (adId_0)=>{
            const token_1 = session?.user?.accessToken;
            if (!token_1) {
                throw new Error("Not authenticated");
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].deleteAd(adId_0);
        };
        $[17] = session?.user?.accessToken;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== queryClient) {
        t7 = async (deletedAdId)=>{
            await queryClient.cancelQueries({
                queryKey: [
                    "ads"
                ]
            });
            const previousAdsQueries = queryClient.getQueriesData({
                queryKey: [
                    "ads"
                ]
            });
            queryClient.setQueriesData({
                queryKey: [
                    "ads"
                ]
            }, {
                "useAdActions[<anonymous> > queryClient.setQueriesData()]": (old)=>{
                    if (!old) {
                        return old;
                    }
                    const filterList = {
                        "useAdActions[<anonymous> > queryClient.setQueriesData() > filterList]": (list)=>list.filter({
                                "useAdActions[<anonymous> > queryClient.setQueriesData() > filterList > list.filter()]": (item)=>String(item.creative_id || item.id) !== String(deletedAdId)
                            }["useAdActions[<anonymous> > queryClient.setQueriesData() > filterList > list.filter()]"])
                    }["useAdActions[<anonymous> > queryClient.setQueriesData() > filterList]"];
                    if (Array.isArray(old)) {
                        return filterList(old);
                    }
                    if (Array.isArray(old.data)) {
                        return {
                            ...old,
                            data: filterList(old.data)
                        };
                    }
                    return old;
                }
            }["useAdActions[<anonymous> > queryClient.setQueriesData()]"]);
            return {
                previousAdsQueries
            };
        };
        $[19] = queryClient;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    let t8;
    if ($[21] !== queryClient || $[22] !== t) {
        t8 = (error, _vars, context)=>{
            if (context?.previousAdsQueries) {
                context.previousAdsQueries.forEach({
                    "useAdActions[<anonymous> > context.previousAdsQueries.forEach()]": (t9)=>{
                        const [queryKey, data] = t9;
                        queryClient.setQueryData(queryKey, data);
                    }
                }["useAdActions[<anonymous> > context.previousAdsQueries.forEach()]"]);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiErrorMessage"])(error, t, t("ads.messages.deleteFailed")), {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ERROR_TOAST_ID"]
            });
        };
        $[21] = queryClient;
        $[22] = t;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== t) {
        t9 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("ads.messages.deleteSuccess"), {
                id: "ad-action-toast"
            });
        };
        $[24] = t;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] !== queryClient) {
        t10 = async ()=>{
            await queryClient.invalidateQueries({
                queryKey: [
                    "ads"
                ]
            });
            await queryClient.invalidateQueries({
                queryKey: [
                    "adsTotals"
                ]
            });
        };
        $[26] = queryClient;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] !== t10 || $[29] !== t6 || $[30] !== t7 || $[31] !== t8 || $[32] !== t9) {
        t11 = {
            mutationFn: t6,
            onMutate: t7,
            onError: t8,
            onSuccess: t9,
            onSettled: t10
        };
        $[28] = t10;
        $[29] = t6;
        $[30] = t7;
        $[31] = t8;
        $[32] = t9;
        $[33] = t11;
    } else {
        t11 = $[33];
    }
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t11);
    let t12;
    if ($[34] !== session?.user?.accessToken) {
        t12 = async (t13)=>{
            const { adId: adId_1, status } = t13;
            const token_2 = session?.user?.accessToken;
            if (!token_2) {
                throw new Error("Not authenticated");
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].toggleStatus(adId_1, status);
        };
        $[34] = session?.user?.accessToken;
        $[35] = t12;
    } else {
        t12 = $[35];
    }
    let t13;
    if ($[36] !== queryClient) {
        t13 = async (t14)=>{
            const { adId: adId_2, status: status_0 } = t14;
            await queryClient.cancelQueries({
                queryKey: [
                    "ads"
                ]
            });
            const previousAdsQueries_0 = queryClient.getQueriesData({
                queryKey: [
                    "ads"
                ]
            });
            queryClient.setQueriesData({
                queryKey: [
                    "ads"
                ]
            }, {
                "useAdActions[<anonymous> > queryClient.setQueriesData()]": (old_0)=>{
                    if (!old_0) {
                        return old_0;
                    }
                    const updateList = {
                        "useAdActions[<anonymous> > queryClient.setQueriesData() > updateList]": (list_0)=>list_0.map({
                                "useAdActions[<anonymous> > queryClient.setQueriesData() > updateList > list_0.map()]": (item_0)=>{
                                    if (String(item_0.creative_id || item_0.id) === String(adId_2)) {
                                        return {
                                            ...item_0,
                                            status: status_0,
                                            is_active: status_0 === "active"
                                        };
                                    }
                                    return item_0;
                                }
                            }["useAdActions[<anonymous> > queryClient.setQueriesData() > updateList > list_0.map()]"])
                    }["useAdActions[<anonymous> > queryClient.setQueriesData() > updateList]"];
                    if (Array.isArray(old_0)) {
                        return updateList(old_0);
                    }
                    if (Array.isArray(old_0.data)) {
                        return {
                            ...old_0,
                            data: updateList(old_0.data)
                        };
                    }
                    return old_0;
                }
            }["useAdActions[<anonymous> > queryClient.setQueriesData()]"]);
            return {
                previousAdsQueries: previousAdsQueries_0
            };
        };
        $[36] = queryClient;
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    let t14;
    if ($[38] !== queryClient || $[39] !== t) {
        t14 = (error_0, _vars_0, context_0)=>{
            if (context_0?.previousAdsQueries) {
                context_0.previousAdsQueries.forEach({
                    "useAdActions[<anonymous> > context_0.previousAdsQueries.forEach()]": (t15)=>{
                        const [queryKey_0, data_0] = t15;
                        queryClient.setQueryData(queryKey_0, data_0);
                    }
                }["useAdActions[<anonymous> > context_0.previousAdsQueries.forEach()]"]);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiErrorMessage"])(error_0, t, t("ads.messages.statusUpdateFailed")), {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ERROR_TOAST_ID"]
            });
        };
        $[38] = queryClient;
        $[39] = t;
        $[40] = t14;
    } else {
        t14 = $[40];
    }
    let t15;
    if ($[41] !== t) {
        t15 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("ads.messages.statusUpdateSuccess"), {
                id: "ad-action-toast"
            });
        };
        $[41] = t;
        $[42] = t15;
    } else {
        t15 = $[42];
    }
    let t16;
    if ($[43] !== queryClient) {
        t16 = async ()=>{
            await queryClient.invalidateQueries({
                queryKey: [
                    "ads"
                ]
            });
            await queryClient.invalidateQueries({
                queryKey: [
                    "adsTotals"
                ]
            });
        };
        $[43] = queryClient;
        $[44] = t16;
    } else {
        t16 = $[44];
    }
    let t17;
    if ($[45] !== t12 || $[46] !== t13 || $[47] !== t14 || $[48] !== t15 || $[49] !== t16) {
        t17 = {
            mutationFn: t12,
            onMutate: t13,
            onError: t14,
            onSuccess: t15,
            onSettled: t16
        };
        $[45] = t12;
        $[46] = t13;
        $[47] = t14;
        $[48] = t15;
        $[49] = t16;
        $[50] = t17;
    } else {
        t17 = $[50];
    }
    const toggleStatusMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t17);
    let t18;
    if ($[51] !== createMutation.isPending || $[52] !== createMutation.mutateAsync || $[53] !== deleteMutation.isPending || $[54] !== deleteMutation.mutateAsync || $[55] !== toggleStatusMutation.isPending || $[56] !== toggleStatusMutation.mutateAsync || $[57] !== updateMutation.isPending || $[58] !== updateMutation.mutateAsync) {
        t18 = {
            createAd: createMutation.mutateAsync,
            updateAd: updateMutation.mutateAsync,
            deleteAd: deleteMutation.mutateAsync,
            toggleAdStatus: toggleStatusMutation.mutateAsync,
            isCreating: createMutation.isPending,
            isUpdating: updateMutation.isPending,
            isDeleting: deleteMutation.isPending,
            isTogglingStatus: toggleStatusMutation.isPending
        };
        $[51] = createMutation.isPending;
        $[52] = createMutation.mutateAsync;
        $[53] = deleteMutation.isPending;
        $[54] = deleteMutation.mutateAsync;
        $[55] = toggleStatusMutation.isPending;
        $[56] = toggleStatusMutation.mutateAsync;
        $[57] = updateMutation.isPending;
        $[58] = updateMutation.mutateAsync;
        $[59] = t18;
    } else {
        t18 = $[59];
    }
    return t18;
}
_s(useAdActions, "+NqgNsfA6yQ9c6mTJLlmlwVLRYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
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
"[project]/src/features/ads/components/form/AdBasicInfoCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdBasicInfoCard",
    ()=>AdBasicInfoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
;
function AdBasicInfoCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "030ac25cb80e95c826f3ec195b8e1775a42e25f8b0ff7435ee613ecb56948464") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "030ac25cb80e95c826f3ec195b8e1775a42e25f8b0ff7435ee613ecb56948464";
    }
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { register, formState: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t0;
    const [ownerType, setOwnerType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("admin");
    const t1 = isAr ? "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629" : "Basic Information";
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
                lineNumber: 36,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 *" : "Ad Name *";
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-2 font-semibold text-sm text-gray-900 dark:text-gray-100",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = isAr ? "\u0645\u062B\u0627\u0644: \u062D\u0645\u0644\u0629 \u0625\u0639\u0645\u0627\u0631 \u0627\u0644\u0635\u064A\u0641\u064A\u0629" : "e.g., Luxury Beachfront Villas Campaign";
    const t6 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Name is required";
    let t7;
    if ($[5] !== isAr || $[6] !== t) {
        t7 = (val)=>{
            const trimmed = (val || "").trim();
            if (trimmed.length < 2) {
                return isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062D\u0631\u0641\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644" : "Ad Name must be at least 2 characters";
            }
            if (trimmed.length > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_NAME_MAX_LENGTH"]) {
                return t("validation.max_length", {
                    max: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_NAME_MAX_LENGTH"]
                });
            }
            return true;
        };
        $[5] = isAr;
        $[6] = t;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== register || $[9] !== t6 || $[10] !== t7) {
        t8 = register("campaignName", {
            required: t6,
            validate: t7
        });
        $[8] = register;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = !!errors.campaignName;
    const t10 = errors.campaignName ? "border-red-500 focus:ring-2 focus:ring-red-500/30 focus:border-red-500" : "border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500";
    let t11;
    if ($[12] !== t10) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full bg-white dark:bg-neutral-800/60 border h-11 text-sm rounded-lg px-3 outline-none transition-colors", t10);
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t11 || $[15] !== t5 || $[16] !== t8 || $[17] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            placeholder: t5,
            ...t8,
            "aria-invalid": t9,
            className: t11
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t5;
        $[16] = t8;
        $[17] = t9;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    const t13 = errors.campaignName?.message;
    let t14;
    if ($[19] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t13,
            className: "font-medium"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[19] = t13;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t12 || $[22] !== t14 || $[23] !== t4) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t14;
        $[23] = t4;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    const t16 = isAr ? "\u0645\u0627\u0644\u0643 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Owner";
    let t17;
    if ($[25] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "font-semibold text-sm text-gray-900 dark:text-gray-100",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[25] = t16;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "AdBasicInfoCard[<button>.onClick]": ()=>setOwnerType("admin")
        })["AdBasicInfoCard[<button>.onClick]"];
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    const t19 = ownerType === "admin" ? "bg-teal-700 text-white border-teal-700 shadow-sm" : "bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border-gray-200 dark:border-neutral-800 hover:border-gray-300";
    let t20;
    if ($[28] !== t19) {
        t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-center", t19);
        $[28] = t19;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    const t21 = isAr ? "\u0627\u0644\u0623\u062F\u0645\u0646" : "Admin";
    let t22;
    if ($[30] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-bold text-base",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[30] = t21;
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    const t23 = ownerType === "admin" ? "text-teal-100" : "text-gray-500 dark:text-neutral-400";
    let t24;
    if ($[32] !== t23) {
        t24 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs mt-0.5", t23);
        $[32] = t23;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    const t25 = isAr ? "\u0623\u0648\u0644\u0648\u064A\u0629 \u0623\u0639\u0644\u0649 \u062F\u0627\u0626\u0645\u0627\u064B" : "Always highest priority";
    let t26;
    if ($[34] !== t24 || $[35] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t24,
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[34] = t24;
        $[35] = t25;
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] !== t20 || $[38] !== t22 || $[39] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t18,
            className: t20,
            children: [
                t22,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[37] = t20;
        $[38] = t22;
        $[39] = t26;
        $[40] = t27;
    } else {
        t27 = $[40];
    }
    let t28;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "AdBasicInfoCard[<button>.onClick]": ()=>setOwnerType("developer")
        })["AdBasicInfoCard[<button>.onClick]"];
        $[41] = t28;
    } else {
        t28 = $[41];
    }
    const t29 = ownerType === "developer" ? "bg-teal-700 text-white border-teal-700 shadow-sm" : "bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border-gray-200 dark:border-neutral-800 hover:border-gray-300";
    let t30;
    if ($[42] !== t29) {
        t30 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-center", t29);
        $[42] = t29;
        $[43] = t30;
    } else {
        t30 = $[43];
    }
    const t31 = isAr ? "\u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A" : "Real Estate Developer";
    let t32;
    if ($[44] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-bold text-base",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[44] = t31;
        $[45] = t32;
    } else {
        t32 = $[45];
    }
    const t33 = ownerType === "developer" ? "text-teal-100" : "text-gray-500 dark:text-neutral-400";
    let t34;
    if ($[46] !== t33) {
        t34 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs mt-0.5", t33);
        $[46] = t33;
        $[47] = t34;
    } else {
        t34 = $[47];
    }
    const t35 = isAr ? "\u064A\u0638\u0647\u0631 \u0628\u0639\u062F \u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u062F\u0645\u0646" : "Appears after admin ads";
    let t36;
    if ($[48] !== t34 || $[49] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t34,
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[48] = t34;
        $[49] = t35;
        $[50] = t36;
    } else {
        t36 = $[50];
    }
    let t37;
    if ($[51] !== t30 || $[52] !== t32 || $[53] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t28,
            className: t30,
            children: [
                t32,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[51] = t30;
        $[52] = t32;
        $[53] = t36;
        $[54] = t37;
    } else {
        t37 = $[54];
    }
    let t38;
    if ($[55] !== t27 || $[56] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [
                t27,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[55] = t27;
        $[56] = t37;
        $[57] = t38;
    } else {
        t38 = $[57];
    }
    let t39;
    if ($[58] !== t17 || $[59] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t17,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[58] = t17;
        $[59] = t38;
        $[60] = t39;
    } else {
        t39 = $[60];
    }
    let t40;
    if ($[61] !== t15 || $[62] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-6",
            children: [
                t15,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[61] = t15;
        $[62] = t39;
        $[63] = t40;
    } else {
        t40 = $[63];
    }
    let t41;
    if ($[64] !== t2 || $[65] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-basic-info-card",
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t2,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[64] = t2;
        $[65] = t40;
        $[66] = t41;
    } else {
        t41 = $[66];
    }
    return t41;
}
_s(AdBasicInfoCard, "x5b7PqaiJV3M4LH8uoKll4JdFEs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
_c = AdBasicInfoCard;
var _c;
__turbopack_context__.k.register(_c, "AdBasicInfoCard");
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
"[project]/src/features/ads/components/form/AdPlacementCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdPlacementCard",
    ()=>AdPlacementCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-template.js [app-client] (ecmascript) <export default as LayoutTemplate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/app-window.js [app-client] (ecmascript) <export default as AppWindow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
;
;
const LOCATION_OPTIONS = [
    {
        id: "home",
        nameAr: "الصفحة الرئيسية (Home)",
        nameEn: "Home page (home)",
        descAr: "الصفحة الرئيسية بالكامل",
        descEn: "Home page",
        available: 15,
        total: 20
    },
    {
        id: "home_top",
        nameAr: "الصفحة الرئيسية — أعلى (Home Top)",
        nameEn: "Top section of home page (home_top)",
        descAr: "الجزء العلوي من الصفحة الرئيسية",
        descEn: "Top section of home page",
        available: 15,
        total: 20
    },
    {
        id: "home_bottom",
        nameAr: "الصفحة الرئيسية — أسفل (Home Bottom)",
        nameEn: "Bottom section of home page (home_bottom)",
        descAr: "الجزء السفلي من الصفحة الرئيسية",
        descEn: "Bottom section of home page",
        available: 15,
        total: 20
    },
    {
        id: "featured_cards",
        nameAr: "قسم البطاقات المميزة (Featured Cards)",
        nameEn: "Featured cards section (featured_cards)",
        descAr: "قسم البطاقات المميزة في الموقع",
        descEn: "Featured cards section",
        available: 10,
        total: 20
    },
    {
        id: "project_listing",
        nameAr: "صفحة قائمة المشاريع (Project Listing)",
        nameEn: "Project listing page (project_listing)",
        descAr: "صفحة عرض واستكشاف المشاريع",
        descEn: "Project listing page",
        available: 17,
        total: 20
    },
    {
        id: "unit_listing",
        nameAr: "صفحة قائمة الوحدات (Unit Listing)",
        nameEn: "Unit listing page (unit_listing)",
        descAr: "صفحة عرض واستكشاف الوحدات والعقارات",
        descEn: "Unit listing page",
        available: 12,
        total: 20
    },
    {
        id: "developer_listing",
        nameAr: "صفحة قائمة المطورين (Developer Listing)",
        nameEn: "Developer listing page (developer_listing)",
        descAr: "صفحة عرض واستكشاف المطورين العقاريين",
        descEn: "Developer listing page",
        available: 8,
        total: 20
    },
    {
        id: "expert_listing",
        nameAr: "صفحة قائمة الخبراء (Expert Listing)",
        nameEn: "Expert listing page (expert_listing)",
        descAr: "صفحة عرض واستكشاف الخبراء العقاريين",
        descEn: "Expert listing page",
        available: 19,
        total: 20
    },
    {
        id: "podcast_listing",
        nameAr: "صفحة قائمة البودكاست (Podcast Listing)",
        nameEn: "Podcast listing page (podcast_listing)",
        descAr: "صفحة استكشاف وحلقات البودكاست",
        descEn: "Podcast listing page",
        available: 14,
        total: 20
    }
];
function AdPlacementCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(103);
    if ($[0] !== "b68bd8bdbc6dc17bf2068b5755933df33a26e979a1d891a653f22f585dff73d3") {
        for(let $i = 0; $i < 103; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b68bd8bdbc6dc17bf2068b5755933df33a26e979a1d891a653f22f585dff73d3";
    }
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { watch, setValue, control, formState: t0, clearErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t0;
    const t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "type"
    }) || "banner";
    let t2;
    if ($[1] !== t1) {
        t2 = t1.toLowerCase();
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const selectedType = t2;
    const t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "platform"
    }) || "all";
    let t4;
    if ($[3] !== t3) {
        t4 = t3.toLowerCase();
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const selectedPlatform = t4;
    let t5;
    if ($[5] !== control) {
        t5 = {
            control,
            name: "location"
        };
        $[5] = control;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const rawLocations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t5);
    let t6;
    if ($[7] !== rawLocations) {
        t6 = Array.isArray(rawLocations) ? rawLocations : rawLocations ? [
            rawLocations
        ] : [];
        $[7] = rawLocations;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const selectedLocations = t6;
    let t7;
    if ($[9] !== t) {
        t7 = t("ads.filters.banner");
        $[9] = t;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t7) {
        t8 = {
            value: "banner",
            title: t7,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"]
        };
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t) {
        t9 = t("ads.filters.card");
        $[13] = t;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t9) {
        t10 = {
            value: "card",
            title: t9,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
        };
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t) {
        t11 = t("ads.filters.native");
        $[17] = t;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11) {
        t12 = {
            value: "native",
            title: t11,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__["LayoutTemplate"]
        };
        $[19] = t11;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t) {
        t13 = t("ads.filters.popUp");
        $[21] = t;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t13) {
        t14 = {
            value: "pop_up",
            title: t13,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__["AppWindow"]
        };
        $[23] = t13;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t10 || $[26] !== t12 || $[27] !== t14 || $[28] !== t8) {
        t15 = [
            t8,
            t10,
            t12,
            t14
        ];
        $[25] = t10;
        $[26] = t12;
        $[27] = t14;
        $[28] = t8;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    const AD_TYPES = t15;
    let t16;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = [
            {
                value: "all",
                labelAr: "\u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0644\u062A\u0637\u0628\u064A\u0642",
                labelEn: "Web & App"
            },
            {
                value: "web",
                labelAr: "\u0627\u0644\u0645\u0648\u0642\u0639",
                labelEn: "Website"
            },
            {
                value: "mobile",
                labelAr: "\u0627\u0644\u062A\u0637\u0628\u064A\u0642",
                labelEn: "Mobile App"
            }
        ];
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    const PLATFORM_OPTIONS = t16;
    let t17;
    if ($[31] !== clearErrors || $[32] !== setValue) {
        t17 = ({
            "AdPlacementCard[selectLocation]": (locId)=>{
                setValue("location", [
                    locId
                ], {
                    shouldDirty: true,
                    shouldValidate: true,
                    shouldTouch: true
                });
                clearErrors("location");
            }
        })["AdPlacementCard[selectLocation]"];
        $[31] = clearErrors;
        $[32] = setValue;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    const selectLocation = t17;
    let t18;
    if ($[34] !== isAr || $[35] !== selectedPlatform) {
        t18 = ({
            "AdPlacementCard[getPlatformBadge]": ()=>{
                if (selectedPlatform === "web") {
                    return isAr ? "\u0648\u064A\u0628" : "Web";
                }
                return isAr ? "\u062A\u0637\u0628\u064A\u0642" : "App";
            }
        })["AdPlacementCard[getPlatformBadge]"];
        $[34] = isAr;
        $[35] = selectedPlatform;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    const getPlatformBadge = t18;
    const t19 = isAr ? "\u0646\u0648\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Type";
    let t20;
    if ($[37] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[37] = t19;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    const t21 = isAr ? "\u0644\u0643\u0644 \u0646\u0648\u0639 \u0623\u0645\u0627\u0643\u0646 \u0639\u0631\u0636 \u0648\u062D\u0642\u0648\u0644 \u0645\u062E\u062A\u0644\u0641\u0629" : "Each type has different display placements and fields";
    let t22;
    if ($[39] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[39] = t21;
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    let t23;
    if ($[41] !== t20 || $[42] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-4",
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[41] = t20;
        $[42] = t22;
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    let t24;
    if ($[44] !== AD_TYPES || $[45] !== errors.type || $[46] !== selectedType || $[47] !== setValue) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: AD_TYPES.map({
                "AdPlacementCard[AD_TYPES.map()]": (adType)=>{
                    const isSelected = selectedType === adType.value;
                    const Icon = adType.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "AdPlacementCard[AD_TYPES.map() > <button>.onClick]": ()=>setValue("type", adType.value, {
                                    shouldDirty: true,
                                    shouldValidate: true
                                })
                        }["AdPlacementCard[AD_TYPES.map() > <button>.onClick]"],
                        "aria-invalid": !!errors.type || undefined,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3.5 sm:p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer space-y-2", isSelected ? "border-teal-600 bg-teal-50/80 dark:bg-teal-950/40 text-teal-950 dark:text-teal-100 ring-2 ring-teal-600 shadow-xs" : "border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-gray-300 dark:hover:border-neutral-700 text-gray-700 dark:text-gray-300"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-lg", isSelected ? "text-teal-600 dark:text-teal-400" : "text-gray-400 dark:text-neutral-500"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-5 h-5 sm:w-6 sm:h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 350,
                                    columnNumber: 668
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                lineNumber: 350,
                                columnNumber: 541
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-bold text-sm sm:text-base text-gray-900 dark:text-white",
                                    children: adType.title
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 350,
                                    columnNumber: 721
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                lineNumber: 350,
                                columnNumber: 716
                            }, this)
                        ]
                    }, adType.value, true, {
                        fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                        lineNumber: 345,
                        columnNumber: 18
                    }, this);
                }
            }["AdPlacementCard[AD_TYPES.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[44] = AD_TYPES;
        $[45] = errors.type;
        $[46] = selectedType;
        $[47] = setValue;
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    const t25 = errors.type?.message;
    let t26;
    if ($[49] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t25,
            className: "font-semibold"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[49] = t25;
        $[50] = t26;
    } else {
        t26 = $[50];
    }
    let t27;
    if ($[51] !== t24 || $[52] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[51] = t24;
        $[52] = t26;
        $[53] = t27;
    } else {
        t27 = $[53];
    }
    let t28;
    if ($[54] !== t23 || $[55] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t23,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[54] = t23;
        $[55] = t27;
        $[56] = t28;
    } else {
        t28 = $[56];
    }
    const t29 = isAr ? "\u0627\u0644\u0645\u0646\u0635\u0629" : "Platform";
    let t30;
    if ($[57] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
                children: t29
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                lineNumber: 391,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[57] = t29;
        $[58] = t30;
    } else {
        t30 = $[58];
    }
    let t31;
    if ($[59] !== isAr || $[60] !== selectedPlatform || $[61] !== setValue) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2.5",
                children: PLATFORM_OPTIONS.map({
                    "AdPlacementCard[PLATFORM_OPTIONS.map()]": (plat)=>{
                        const isSelected_0 = selectedPlatform === plat.value;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "AdPlacementCard[PLATFORM_OPTIONS.map() > <button>.onClick]": ()=>setValue("platform", plat.value, {
                                        shouldDirty: true,
                                        shouldValidate: true
                                    })
                            }["AdPlacementCard[PLATFORM_OPTIONS.map() > <button>.onClick]"],
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border", isSelected_0 ? "bg-teal-700 text-white border-teal-700 shadow-sm" : "bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-neutral-700 hover:border-gray-300"),
                            children: isAr ? plat.labelAr : plat.labelEn
                        }, plat.value, false, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 402,
                            columnNumber: 20
                        }, this);
                    }
                }["AdPlacementCard[PLATFORM_OPTIONS.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                lineNumber: 399,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[59] = isAr;
        $[60] = selectedPlatform;
        $[61] = setValue;
        $[62] = t31;
    } else {
        t31 = $[62];
    }
    let t32;
    if ($[63] !== t30 || $[64] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[63] = t30;
        $[64] = t31;
        $[65] = t32;
    } else {
        t32 = $[65];
    }
    const t33 = isAr ? "\u0645\u0643\u0627\u0646 \u0627\u0644\u0639\u0631\u0636" : "Display Placement";
    let t34;
    if ($[66] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[66] = t33;
        $[67] = t34;
    } else {
        t34 = $[67];
    }
    let t35;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[68] = t35;
    } else {
        t35 = $[68];
    }
    let t36;
    if ($[69] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[69] = t34;
        $[70] = t36;
    } else {
        t36 = $[70];
    }
    const t37 = isAr ? "\u0627\u0644\u0623\u0645\u0627\u0643\u0646 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u062A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0629 \u0648\u0646\u0648\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646. \u0644\u0643\u0644 \u0645\u0643\u0627\u0646 \u0633\u0639\u0629 \u0642\u0635\u0648\u0649 \u2014 \u0639\u0646\u062F \u0627\u0645\u062A\u0644\u0627\u0626\u0647 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u064A\u0647." : "Available locations depend on platform and ad type. Each place has a maximum capacity.";
    let t38;
    if ($[71] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 453,
            columnNumber: 11
        }, this);
        $[71] = t37;
        $[72] = t38;
    } else {
        t38 = $[72];
    }
    let t39;
    if ($[73] !== t36 || $[74] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-4",
            children: [
                t36,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[73] = t36;
        $[74] = t38;
        $[75] = t39;
    } else {
        t39 = $[75];
    }
    let t40;
    if ($[76] !== errors.location || $[77] !== getPlatformBadge || $[78] !== isAr || $[79] !== selectLocation || $[80] !== selectedLocations) {
        t40 = LOCATION_OPTIONS.map({
            "AdPlacementCard[LOCATION_OPTIONS.map()]": (loc)=>{
                const isSelected_1 = selectedLocations.some({
                    "AdPlacementCard[LOCATION_OPTIONS.map() > selectedLocations.some()]": (s)=>{
                        const normalized = (s || "").toLowerCase().trim().replace(/\s+/g, "_");
                        if (loc.id === "unit_listing") {
                            return normalized === "unit_listing" || normalized === "property_listing";
                        }
                        return normalized === loc.id;
                    }
                }["AdPlacementCard[LOCATION_OPTIONS.map() > selectedLocations.some()]"]);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "AdPlacementCard[LOCATION_OPTIONS.map() > <button>.onClick]": ()=>selectLocation(loc.id)
                    }["AdPlacementCard[LOCATION_OPTIONS.map() > <button>.onClick]"],
                    "aria-invalid": !!errors.location || undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3.5 sm:p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer select-none text-start w-full", isSelected_1 ? "border-teal-700 bg-teal-50/60 dark:bg-teal-950/40 ring-2 ring-teal-700 shadow-xs" : "border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-gray-300 dark:hover:border-neutral-700"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5 text-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-bold text-sm sm:text-base text-gray-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isAr ? loc.nameAr : loc.nameEn
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 483,
                                            columnNumber: 629
                                        }, this),
                                        isSelected_1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 483,
                                            columnNumber: 691
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 483,
                                    columnNumber: 527
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 dark:text-neutral-400 font-normal",
                                    children: isAr ? loc.descAr : loc.descEn
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 483,
                                    columnNumber: 769
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
                                        children: isAr ? `متاح ${loc.available} من ${loc.total}` : `${loc.available} of ${loc.total} available`
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                        lineNumber: 483,
                                        columnNumber: 885
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 483,
                                    columnNumber: 880
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 483,
                            columnNumber: 487
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 flex flex-col items-end gap-1.5 ms-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 font-mono font-medium",
                                    children: loc.id
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 483,
                                    columnNumber: 1230
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300",
                                    children: getPlatformBadge()
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 483,
                                    columnNumber: 1382
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 483,
                            columnNumber: 1167
                        }, this)
                    ]
                }, loc.id, true, {
                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                    lineNumber: 481,
                    columnNumber: 16
                }, this);
            }
        }["AdPlacementCard[LOCATION_OPTIONS.map()]"]);
        $[76] = errors.location;
        $[77] = getPlatformBadge;
        $[78] = isAr;
        $[79] = selectLocation;
        $[80] = selectedLocations;
        $[81] = t40;
    } else {
        t40 = $[81];
    }
    let t41;
    if ($[82] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
            children: t40
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 497,
            columnNumber: 11
        }, this);
        $[82] = t40;
        $[83] = t41;
    } else {
        t41 = $[83];
    }
    let t42;
    if ($[84] !== errors.location || $[85] !== isAr) {
        t42 = errors.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: String(errors.location.message || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0643\u0627\u0646 \u0627\u0644\u0639\u0631\u0636" : "Please select a display location")),
            className: "font-semibold"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 505,
            columnNumber: 30
        }, this);
        $[84] = errors.location;
        $[85] = isAr;
        $[86] = t42;
    } else {
        t42 = $[86];
    }
    let t43;
    if ($[87] !== selectedType || $[88] !== setValue || $[89] !== t || $[90] !== watch) {
        t43 = selectedType === "pop_up" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4 bg-gray-50 dark:bg-neutral-800/40 rounded-xl border border-gray-100 dark:border-neutral-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "flex items-center gap-1 mb-1.5 font-medium text-xs text-gray-700 dark:text-gray-300",
                            children: [
                                t("ads.createStepOne.popUpDimensions"),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    className: "h-3.5 w-3.5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 514,
                                    columnNumber: 345
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 514,
                            columnNumber: 201
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: watch("width"),
                            onValueChange: {
                                "AdPlacementCard[<Select>.onValueChange]": (val)=>setValue("width", val, {
                                        shouldDirty: true
                                    })
                            }["AdPlacementCard[<Select>.onValueChange]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: "bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 h-10 text-xs sm:text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: t("ads.createStepOne.selectWidth")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                        lineNumber: 518,
                                        columnNumber: 175
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 518,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "small",
                                            children: t("ads.form.widthSmall")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 518,
                                            columnNumber: 270
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "medium",
                                            children: t("ads.form.widthMedium")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 518,
                                            columnNumber: 335
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "large",
                                            children: t("ads.form.widthLarge")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 518,
                                            columnNumber: 402
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "full",
                                            children: t("ads.form.widthFull")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 518,
                                            columnNumber: 467
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 518,
                                    columnNumber: 255
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 514,
                            columnNumber: 405
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                    lineNumber: 514,
                    columnNumber: 196
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "flex items-center gap-1 mb-1.5 font-medium text-xs text-gray-700 dark:text-gray-300",
                            children: [
                                t("ads.createStepOne.position"),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    className: "h-3.5 w-3.5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 518,
                                    columnNumber: 703
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 518,
                            columnNumber: 566
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            value: watch("position"),
                            onValueChange: {
                                "AdPlacementCard[<Select>.onValueChange]": (val_0)=>setValue("position", val_0, {
                                        shouldDirty: true
                                    })
                            }["AdPlacementCard[<Select>.onValueChange]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: "bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 h-10 text-xs sm:text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: t("ads.createStepOne.selectPosition")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                        lineNumber: 522,
                                        columnNumber: 175
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 522,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_left",
                                            children: t("ads.createStepOne.posTopLeft")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 522,
                                            columnNumber: 273
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_right",
                                            children: t("ads.createStepOne.posTopRight")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 522,
                                            columnNumber: 350
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "center",
                                            children: t("ads.form.positionCenter")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 522,
                                            columnNumber: 429
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_left",
                                            children: t("ads.createStepOne.posBottomLeft")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 522,
                                            columnNumber: 499
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_right",
                                            children: t("ads.createStepOne.posBottomRight")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 522,
                                            columnNumber: 582
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 522,
                                    columnNumber: 258
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 518,
                            columnNumber: 763
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                    lineNumber: 518,
                    columnNumber: 561
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 514,
            columnNumber: 40
        }, this);
        $[87] = selectedType;
        $[88] = setValue;
        $[89] = t;
        $[90] = watch;
        $[91] = t43;
    } else {
        t43 = $[91];
    }
    let t44;
    if ($[92] !== t41 || $[93] !== t42 || $[94] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-4",
            children: [
                t41,
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[92] = t41;
        $[93] = t42;
        $[94] = t43;
        $[95] = t44;
    } else {
        t44 = $[95];
    }
    let t45;
    if ($[96] !== t39 || $[97] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-placement-card",
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t39,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        $[96] = t39;
        $[97] = t44;
        $[98] = t45;
    } else {
        t45 = $[98];
    }
    let t46;
    if ($[99] !== t28 || $[100] !== t32 || $[101] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t28,
                t32,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 552,
            columnNumber: 11
        }, this);
        $[99] = t28;
        $[100] = t32;
        $[101] = t45;
        $[102] = t46;
    } else {
        t46 = $[102];
    }
    return t46;
}
_s(AdPlacementCard, "mMr2zVuK0Lgrs3c0tpzexcrNUiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = AdPlacementCard;
var _c;
__turbopack_context__.k.register(_c, "AdPlacementCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/form/AdCreativeContentCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdCreativeContentCard",
    ()=>AdCreativeContentCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
function AdCreativeContentCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "b9de6f308fe76867e5c5d58930497e1ce23c424b8e04ac4160a7c9850f34a95a") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9de6f308fe76867e5c5d58930497e1ce23c424b8e04ac4160a7c9850f34a95a";
    }
    const { adImagePreview, handleImageUpload, handleRemoveImage } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { setValue, formState: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t1;
    const imageError = (errors.image || errors.image_url)?.message;
    const t2 = imageError ? "border-red-400 dark:border-red-900/60" : "border-gray-200 dark:border-neutral-800";
    let t3;
    if ($[1] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shadow-sm border bg-white dark:bg-neutral-900 rounded-xl transition-colors", t2);
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const t4 = isAr ? "\u0635\u0648\u0631\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Image";
    let t5;
    if ($[3] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[3] = t4;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1",
                children: [
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                lineNumber: 68,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const t8 = imageError ? "border-red-500 bg-red-50/20 dark:bg-red-950/10 hover:bg-red-50/30" : "border-gray-200 dark:border-neutral-700 hover:bg-gray-50/80 dark:hover:bg-neutral-800/40";
    let t9;
    if ($[8] !== t8) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-2 border-dashed rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative", t8);
        $[8] = t8;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    const t10 = !!imageError || undefined;
    let t11;
    if ($[10] !== adImagePreview || $[11] !== handleRemoveImage || $[12] !== isAr || $[13] !== setValue || $[14] !== t) {
        t11 = adImagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group max-w-md w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: adImagePreview,
                    alt: t("ads.form.adPreview"),
                    className: "max-h-60 mx-auto object-contain rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 86,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "AdCreativeContentCard[<button>.onClick]": (e)=>{
                            e.stopPropagation();
                            setValue("image_url", "");
                            if (handleRemoveImage) {
                                handleRemoveImage();
                            }
                        }
                    }["AdCreativeContentCard[<button>.onClick]"],
                    className: "absolute top-2 end-2 p-1.5 rounded-full bg-red-600 text-white opacity-90 hover:opacity-100 transition-opacity shadow-md cursor-pointer",
                    title: isAr ? "\u062D\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629" : "Remove Image",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                        lineNumber: 94,
                        columnNumber: 290
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 86,
                    columnNumber: 246
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 86,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 rounded-full bg-gray-50 dark:bg-neutral-800 text-gray-400 mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                        className: "w-8 h-8 stroke-[1.5]"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                        lineNumber: 94,
                        columnNumber: 419
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 94,
                    columnNumber: 335
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200",
                    children: isAr ? "\u0627\u0636\u063A\u0637 \u0644\u0644\u0631\u0641\u0639 \u0623\u0648 \u0627\u0633\u062D\u0628 \u0648\u0623\u0641\u0644\u062A" : "Click to upload or drag and drop"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 94,
                    columnNumber: 471
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-gray-400 dark:text-neutral-500 mt-1",
                    children: isAr ? "PNG, JPG (\u0646\u0633\u0628\u0629 16:9 \u0645\u0641\u0636\u0644\u0629)" : "PNG, JPG (16:9 aspect ratio preferred)"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 94,
                    columnNumber: 730
                }, this)
            ]
        }, void 0, true);
        $[10] = adImagePreview;
        $[11] = handleRemoveImage;
        $[12] = isAr;
        $[13] = setValue;
        $[14] = t;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== handleImageUpload) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "ad-image-upload-input",
            type: "file",
            accept: "image/png, image/jpeg, image/webp",
            className: "hidden",
            onChange: handleImageUpload
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[16] = handleImageUpload;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t10 || $[19] !== t11 || $[20] !== t12 || $[21] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            "aria-invalid": t10,
            onClick: _AdCreativeContentCardDivOnClick,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t11;
        $[20] = t12;
        $[21] = t9;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== imageError) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: imageError,
            className: "font-semibold mt-2"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[23] = imageError;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t13 || $[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t15 || $[29] !== t3 || $[30] !== t7) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-creative-card",
            className: t3,
            children: [
                t7,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t3;
        $[30] = t7;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    return t16;
}
_s(AdCreativeContentCard, "NeyRjehsPt1YS0YvCJkCNBMxu5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
_c = AdCreativeContentCard;
function _AdCreativeContentCardDivOnClick() {
    return document.getElementById("ad-image-upload-input")?.click();
}
var _c;
__turbopack_context__.k.register(_c, "AdCreativeContentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/form/AdNativeContentCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdNativeContentCard",
    ()=>AdNativeContentCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
;
function AdNativeContentCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "32f354fd9713e74edee9c495fd8736e52bc54fe9812fc1bdf9d14340c642b631") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "32f354fd9713e74edee9c495fd8736e52bc54fe9812fc1bdf9d14340c642b631";
    }
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { register, control, formState: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t0;
    const type = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "type"
    }) || "banner").toLowerCase();
    if (type !== "native") {
        return null;
    }
    const t1 = isAr ? "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0627\u0644\u0623\u0635\u0644\u064A" : "Native Ad Content";
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
                lineNumber: 43,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const t3 = isAr ? "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 *" : "Title *";
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-2 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = isAr ? "\u0639\u0646\u0648\u0627\u0646 \u062C\u0630\u0651\u0627\u0628 \u0644\u0644\u0625\u0639\u0644\u0627\u0646" : "Catchy headline for the ad";
    let t6;
    if ($[5] !== isAr || $[6] !== t) {
        t6 = (val)=>{
            const trimmed = (val || "").trim();
            if (!trimmed) {
                return isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Title is required";
            }
            if (trimmed.length > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_TITLE_MAX_LENGTH"]) {
                return t("validation.max_length", {
                    max: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_TITLE_MAX_LENGTH"]
                });
            }
            return true;
        };
        $[5] = isAr;
        $[6] = t;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== register || $[9] !== t6) {
        t7 = register("title", {
            validate: t6
        });
        $[8] = register;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const t8 = !!errors.title;
    const t9 = errors.title ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700";
    let t10;
    if ($[11] !== t9) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white dark:bg-neutral-800/60 border h-11 text-xs sm:text-sm rounded-lg", t9);
        $[11] = t9;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== t10 || $[14] !== t5 || $[15] !== t7 || $[16] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t5,
            ...t7,
            "aria-invalid": t8,
            className: t10
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t5;
        $[15] = t7;
        $[16] = t8;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    const t12 = errors.title?.message;
    let t13;
    if ($[18] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t12,
            className: "font-medium"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== t11 || $[21] !== t13 || $[22] !== t4) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t13;
        $[22] = t4;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    const t15 = isAr ? "\u0627\u0644\u0648\u0635\u0641" : "Description";
    let t16;
    if ($[24] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-2 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    const t17 = isAr ? "\u0648\u0635\u0641 \u0645\u062E\u062A\u0635\u0631 \u064A\u0638\u0647\u0631 \u0623\u0633\u0641\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646" : "Short description displayed below the headline";
    let t18;
    if ($[26] !== register || $[27] !== t) {
        t18 = register("description", {
            maxLength: {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_DESCRIPTION_MAX_LENGTH"],
                message: t("validation.max_length", {
                    max: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_DESCRIPTION_MAX_LENGTH"]
                })
            }
        });
        $[26] = register;
        $[27] = t;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    const t19 = !!errors.description;
    const t20 = errors.description ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700";
    let t21;
    if ($[29] !== t20) {
        t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white dark:bg-neutral-800/60 border h-11 text-xs sm:text-sm rounded-lg", t20);
        $[29] = t20;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== t17 || $[32] !== t18 || $[33] !== t19 || $[34] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t17,
            ...t18,
            "aria-invalid": t19,
            className: t21
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[31] = t17;
        $[32] = t18;
        $[33] = t19;
        $[34] = t21;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    const t23 = errors.description?.message;
    let t24;
    if ($[36] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t23,
            className: "font-medium"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[36] = t23;
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    let t25;
    if ($[38] !== t16 || $[39] !== t22 || $[40] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[38] = t16;
        $[39] = t22;
        $[40] = t24;
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    const t26 = isAr ? "\u0646\u0635 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 (CTA)" : "Call-to-Action Button Text (CTA)";
    let t27;
    if ($[42] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-2 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[42] = t26;
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    const t28 = isAr ? "\u0645\u062B\u0627\u0644: \u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F" : "e.g., Learn More";
    let t29;
    if ($[44] !== register || $[45] !== t) {
        t29 = register("ctaButtonText", {
            maxLength: {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_CTA_LABEL_MAX_LENGTH"],
                message: t("validation.max_length", {
                    max: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_CTA_LABEL_MAX_LENGTH"]
                })
            }
        });
        $[44] = register;
        $[45] = t;
        $[46] = t29;
    } else {
        t29 = $[46];
    }
    const t30 = !!errors.ctaButtonText;
    const t31 = errors.ctaButtonText ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700";
    let t32;
    if ($[47] !== t31) {
        t32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white dark:bg-neutral-800/60 border h-11 text-xs sm:text-sm rounded-lg", t31);
        $[47] = t31;
        $[48] = t32;
    } else {
        t32 = $[48];
    }
    let t33;
    if ($[49] !== t28 || $[50] !== t29 || $[51] !== t30 || $[52] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t28,
            ...t29,
            "aria-invalid": t30,
            className: t32
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[49] = t28;
        $[50] = t29;
        $[51] = t30;
        $[52] = t32;
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    const t34 = errors.ctaButtonText?.message;
    let t35;
    if ($[54] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t34,
            className: "font-medium"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[54] = t34;
        $[55] = t35;
    } else {
        t35 = $[55];
    }
    let t36;
    if ($[56] !== t27 || $[57] !== t33 || $[58] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                t33,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[56] = t27;
        $[57] = t33;
        $[58] = t35;
        $[59] = t36;
    } else {
        t36 = $[59];
    }
    let t37;
    if ($[60] !== t14 || $[61] !== t25 || $[62] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-5",
            children: [
                t14,
                t25,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[60] = t14;
        $[61] = t25;
        $[62] = t36;
        $[63] = t37;
    } else {
        t37 = $[63];
    }
    let t38;
    if ($[64] !== t2 || $[65] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-native-card",
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl animate-in fade-in-50 duration-200",
            children: [
                t2,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[64] = t2;
        $[65] = t37;
        $[66] = t38;
    } else {
        t38 = $[66];
    }
    return t38;
}
_s(AdNativeContentCard, "HMwR1JUXd0aRqWDmTG5HdR2Lx0M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = AdNativeContentCard;
var _c;
__turbopack_context__.k.register(_c, "AdNativeContentCard");
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
"[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEARCH_DEBOUNCE_MS",
    ()=>SEARCH_DEBOUNCE_MS,
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SEARCH_DEBOUNCE_MS = 300;
function useDebounce(value, t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "7bfb8253cd3f2186ed2b51176bb19c940bb9912cd70bb174b367711127bc5539") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7bfb8253cd3f2186ed2b51176bb19c940bb9912cd70bb174b367711127bc5539";
    }
    const delay = t0 === undefined ? SEARCH_DEBOUNCE_MS : t0;
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    let t1;
    let t2;
    if ($[1] !== delay || $[2] !== value) {
        t1 = ({
            "useDebounce[useEffect()]": ()=>{
                const timer = setTimeout({
                    "useDebounce[useEffect() > setTimeout()]": ()=>{
                        setDebouncedValue(value);
                    }
                }["useDebounce[useEffect() > setTimeout()]"], delay);
                return ()=>clearTimeout(timer);
            }
        })["useDebounce[useEffect()]"];
        t2 = [
            value,
            delay
        ];
        $[1] = delay;
        $[2] = value;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return debouncedValue;
}
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
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
function useCountriesSelect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a9c9b4939bbc25986efd74fec13a9329eaff5a90285f9f0725a94e49b7c789e3") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9c9b4939bbc25986efd74fec13a9329eaff5a90285f9f0725a94e49b7c789e3";
    }
    const enabled = t0 === undefined ? true : t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "countries",
            "select"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = !!token && enabled;
    let t3;
    if ($[2] !== t2) {
        t3 = {
            queryKey: t1,
            queryFn: _temp,
            enabled: t2,
            staleTime: 300000
        };
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const { data: t4, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
    let t5;
    if ($[4] !== t4) {
        t5 = t4 === undefined ? [] : t4;
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const countries = t5;
    let t6;
    if ($[6] !== countries || $[7] !== isLoading) {
        t6 = {
            countries,
            isLoading
        };
        $[6] = countries;
        $[7] = isLoading;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
}
_s(useCountriesSelect, "B/ZTsKZMTDSYCX2b7SeLXY6jync=", false, function() {
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
"[project]/src/features/ads/components/form/AdTargetLinksCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdTargetLinksCard",
    ()=>AdTargetLinksCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$edit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-ad-edit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-countries-select.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/utils/ad-form-validation.ts [app-client] (ecmascript)");
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
function SearchableSelect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "cf49dd1697d3c1ce608a9b4364f6dc86333dad049185a6e0f3c74db1c117c218") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf49dd1697d3c1ce608a9b4364f6dc86333dad049185a6e0f3c74db1c117c218";
    }
    const { value, onChange, options, placeholder, searchPlaceholder, loading, emptyText, isAr, disabled } = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(search);
    let t1;
    bb0: {
        if (!debouncedSearch.trim()) {
            t1 = options;
            break bb0;
        }
        let t2;
        if ($[1] !== debouncedSearch || $[2] !== options) {
            const s = debouncedSearch.toLowerCase().trim();
            t2 = options.filter({
                "SearchableSelect[options.filter()]": (opt)=>opt.name.toLowerCase().includes(s) || opt.id.toString().includes(s)
            }["SearchableSelect[options.filter()]"]);
            $[1] = debouncedSearch;
            $[2] = options;
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        t1 = t2;
    }
    const filteredOptions = t1;
    let t2;
    if ($[4] !== options || $[5] !== value) {
        let t3;
        if ($[7] !== value) {
            t3 = ({
                "SearchableSelect[options.find()]": (opt_0)=>opt_0.id.toString() === value?.toString()
            })["SearchableSelect[options.find()]"];
            $[7] = value;
            $[8] = t3;
        } else {
            t3 = $[8];
        }
        t2 = options.find(t3);
        $[4] = options;
        $[5] = value;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const selectedOption = t2;
    const t3 = open && !disabled;
    let t4;
    if ($[9] !== disabled) {
        t4 = ({
            "SearchableSelect[<Popover>.onOpenChange]": (o)=>!disabled && setOpen(o)
        })["SearchableSelect[<Popover>.onOpenChange]"];
        $[9] = disabled;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-50 dark:hover:bg-neutral-800";
    let t6;
    if ($[11] !== t5) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full justify-between bg-white dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 h-11 text-xs sm:text-sm font-normal rounded-lg text-start px-3", t5);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = !selectedOption && "text-gray-400 dark:text-neutral-500";
    let t8;
    if ($[13] !== t7) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("truncate", t7);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const t9 = selectedOption ? selectedOption.name : placeholder;
    let t10;
    if ($[15] !== t8 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t8,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[15] = t8;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4 shrink-0 text-gray-400 opacity-70"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== disabled || $[20] !== t10 || $[21] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "outline",
                role: "combobox",
                disabled: disabled,
                className: t6,
                children: [
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                lineNumber: 144,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[19] = disabled;
        $[20] = t10;
        $[21] = t6;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-4 w-4 text-gray-400 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "SearchableSelect[<input>.onChange]": (e)=>setSearch(e.target.value)
        })["SearchableSelect[<input>.onChange]"];
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== search || $[26] !== searchPlaceholder) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: search,
            onChange: t14,
            placeholder: searchPlaceholder,
            className: "w-full bg-transparent border-none text-xs sm:text-sm outline-hidden text-gray-900 dark:text-white placeholder:text-gray-400",
            autoFocus: true
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[25] = search;
        $[26] = searchPlaceholder;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== search) {
        t16 = search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "SearchableSelect[<button>.onClick]": ()=>setSearch("")
            }["SearchableSelect[<button>.onClick]"],
            className: "text-gray-400 hover:text-gray-600 p-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-3.5 h-3.5"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                lineNumber: 181,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 179,
            columnNumber: 21
        }, this);
        $[28] = search;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== t15 || $[31] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 px-3 py-2.5",
            children: [
                t13,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[30] = t15;
        $[31] = t16;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== emptyText || $[34] !== filteredOptions || $[35] !== isAr || $[36] !== loading || $[37] !== onChange || $[38] !== value) {
        t18 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center p-6 text-xs text-gray-400 gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-4 h-4 animate-spin text-teal-600"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 198,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 198,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 198,
            columnNumber: 21
        }, this) : filteredOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-center text-xs text-gray-500",
            children: emptyText
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 198,
            columnNumber: 310
        }, this) : filteredOptions.map({
            "SearchableSelect[filteredOptions.map()]": (opt_1)=>{
                const isSelected = opt_1.id.toString() === value?.toString();
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "SearchableSelect[filteredOptions.map() > <button>.onClick]": ()=>{
                            onChange(opt_1.id.toString());
                            setOpen(false);
                            setSearch("");
                        }
                    }["SearchableSelect[filteredOptions.map() > <button>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-start flex items-center justify-between px-3 py-2.5 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer", isSelected ? "bg-teal-50 dark:bg-teal-950/50 text-teal-900 dark:text-teal-200 font-semibold" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate",
                            children: opt_1.name
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 207,
                            columnNumber: 394
                        }, this),
                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 ms-2"
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 207,
                            columnNumber: 455
                        }, this)
                    ]
                }, opt_1.id, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 201,
                    columnNumber: 16
                }, this);
            }
        }["SearchableSelect[filteredOptions.map()]"]);
        $[33] = emptyText;
        $[34] = filteredOptions;
        $[35] = isAr;
        $[36] = loading;
        $[37] = onChange;
        $[38] = value;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-64 overflow-y-auto p-1.5 space-y-0.5",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[40] = t18;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] !== t17 || $[43] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
            className: "w-[var(--radix-popover-trigger-width)] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-lg z-50",
            align: "start",
            children: [
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[42] = t17;
        $[43] = t19;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t12 || $[46] !== t20 || $[47] !== t3 || $[48] !== t4) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
            open: t3,
            onOpenChange: t4,
            children: [
                t12,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[45] = t12;
        $[46] = t20;
        $[47] = t3;
        $[48] = t4;
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    return t21;
}
_s(SearchableSelect, "drUg510UTnwwrRHlxgp9Q31Stos=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
    ];
});
_c = SearchableSelect;
function AdTargetLinksCard() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(173);
    if ($[0] !== "cf49dd1697d3c1ce608a9b4364f6dc86333dad049185a6e0f3c74db1c117c218") {
        for(let $i = 0; $i < 173; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf49dd1697d3c1ce608a9b4364f6dc86333dad049185a6e0f3c74db1c117c218";
    }
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { register, control, setValue, clearErrors, formState: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t0;
    const country = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "country"
    }) || "Egypt";
    let t1;
    if ($[1] !== control) {
        t1 = {
            control,
            name: "developerId"
        };
        $[1] = control;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const developerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t1);
    const linkTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "linkTo"
    }) || "PROJECTS";
    let t2;
    if ($[3] !== control) {
        t2 = {
            control,
            name: "projectId"
        };
        $[3] = control;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t2);
    const [openDevPopover, setOpenDevPopover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [devSearchInput, setDevSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const debouncedDevSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(devSearchInput);
    const { developers, projects, properties, projectsLoading, propertiesLoading, developersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$edit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdEditData"])(null, true, country, developerId, linkTo);
    let t3;
    bb0: {
        if (!debouncedDevSearch.trim()) {
            t3 = developers;
            break bb0;
        }
        let t4;
        if ($[5] !== debouncedDevSearch || $[6] !== developers) {
            const s = debouncedDevSearch.toLowerCase().trim();
            t4 = developers.filter({
                "AdTargetLinksCard[developers.filter()]": (d)=>d.name.toLowerCase().includes(s) || d.id.toString().includes(s)
            }["AdTargetLinksCard[developers.filter()]"]);
            $[5] = debouncedDevSearch;
            $[6] = developers;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        t3 = t4;
    }
    const filteredDevs = t3;
    let t4;
    if ($[8] !== developerId || $[9] !== developers) {
        let t5;
        if ($[11] !== developerId) {
            t5 = ({
                "AdTargetLinksCard[developers.find()]": (d_0)=>d_0.id?.toString() === developerId?.toString()
            })["AdTargetLinksCard[developers.find()]"];
            $[11] = developerId;
            $[12] = t5;
        } else {
            t5 = $[12];
        }
        t4 = developers.find(t5);
        $[8] = developerId;
        $[9] = developers;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const selectedDeveloper = t4;
    let t5;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            {
                value: "PROJECTS",
                labelAr: "\u0645\u0634\u0631\u0648\u0639",
                labelEn: "Project"
            },
            {
                value: "PROPERTIES",
                labelAr: "\u0648\u062D\u062F\u0629 \u0639\u0642\u0627\u0631\u064A\u0629",
                labelEn: "Property / Unit"
            },
            {
                value: "EXPERT",
                labelAr: "\u062E\u0628\u064A\u0631",
                labelEn: "Expert"
            },
            {
                value: "URL",
                labelAr: "\u0631\u0627\u0628\u0637 \u062E\u0627\u0631\u062C\u064A",
                labelEn: "External Link"
            }
        ];
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const DESTINATIONS = t5;
    const { countries, isLoading: isCountriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountriesSelect"])();
    let t6;
    if ($[14] !== clearErrors || $[15] !== setValue) {
        t6 = ({
            "AdTargetLinksCard[handleDestinationChange]": (val)=>{
                setValue("linkTo", val, {
                    shouldDirty: true,
                    shouldValidate: true
                });
                setValue("projectId", "", {
                    shouldDirty: true
                });
                clearErrors("projectId");
                clearErrors("developerId");
                clearErrors("ctaUrl");
                if (val !== "URL") {
                    setValue("ctaUrl", "", {
                        shouldDirty: true
                    });
                    setValue("cta_url", "", {
                        shouldDirty: true
                    });
                }
            }
        })["AdTargetLinksCard[handleDestinationChange]"];
        $[14] = clearErrors;
        $[15] = setValue;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    const handleDestinationChange = t6;
    const t7 = errors.developerId ? "border-red-400 dark:border-red-900/60" : "border-gray-200 dark:border-neutral-800";
    let t8;
    if ($[17] !== t7) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shadow-sm border bg-white dark:bg-neutral-900 rounded-xl transition-colors", t7);
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "h-5 w-5 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 427,
            columnNumber: 10
        }, this);
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const t10 = isAr ? "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A" : "Select Real Estate Developer";
    let t11;
    if ($[20] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 435,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    const t12 = isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B \u0644\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647" : "Select a developer first to filter their projects and properties";
    let t13;
    if ($[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t11 || $[25] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    const t15 = isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A" : "Real Estate Developer";
    let t16;
    if ($[27] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 462,
            columnNumber: 11
        }, this);
        $[27] = t15;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== developers.length || $[30] !== isAr) {
        t17 = developers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-teal-600 dark:text-teal-400 font-medium",
            children: isAr ? `${developers.length} مطور متاح` : `${developers.length} developers available`
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 470,
            columnNumber: 36
        }, this);
        $[29] = developers.length;
        $[30] = isAr;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== t16 || $[33] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[32] = t16;
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    const t19 = errors.developerId ? "border-red-500 ring-1 ring-red-500" : "border-gray-200 dark:border-neutral-700";
    let t20;
    if ($[35] !== t19) {
        t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full justify-between bg-white dark:bg-neutral-800 h-11 text-xs sm:text-sm font-normal rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 text-start px-3", t19);
        $[35] = t19;
        $[36] = t20;
    } else {
        t20 = $[36];
    }
    const t21 = !selectedDeveloper && "text-gray-400 dark:text-neutral-500";
    let t22;
    if ($[37] !== t21) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("truncate", t21);
        $[37] = t21;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    const t23 = selectedDeveloper ? selectedDeveloper.name : developersLoading ? isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading developers..." : isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A..." : "Select Developer...";
    let t24;
    if ($[39] !== t22 || $[40] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t22,
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[39] = t22;
        $[40] = t23;
        $[41] = t24;
    } else {
        t24 = $[41];
    }
    let t25;
    if ($[42] !== developersLoading) {
        t25 = developersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "h-4 w-4 shrink-0 text-gray-400 animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 516,
            columnNumber: 31
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4 shrink-0 text-gray-400 opacity-70"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 516,
            columnNumber: 101
        }, this);
        $[42] = developersLoading;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] !== t20 || $[45] !== t24 || $[46] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "outline",
                className: t20,
                children: [
                    t24,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                lineNumber: 524,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[44] = t20;
        $[45] = t24;
        $[46] = t25;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-4 w-4 text-gray-400 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, this);
        $[48] = t27;
    } else {
        t27 = $[48];
    }
    let t28;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "AdTargetLinksCard[<input>.onChange]": (e)=>setDevSearchInput(e.target.value)
        })["AdTargetLinksCard[<input>.onChange]"];
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    const t29 = isAr ? "\u0627\u0643\u062A\u0628 \u0644\u0644\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645..." : "Type to search by name...";
    let t30;
    if ($[50] !== devSearchInput || $[51] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: devSearchInput,
            onChange: t28,
            placeholder: t29,
            className: "w-full bg-transparent border-none text-xs sm:text-sm outline-hidden text-gray-900 dark:text-white placeholder:text-gray-400",
            autoFocus: true
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[50] = devSearchInput;
        $[51] = t29;
        $[52] = t30;
    } else {
        t30 = $[52];
    }
    let t31;
    if ($[53] !== devSearchInput) {
        t31 = devSearchInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "AdTargetLinksCard[<button>.onClick]": ()=>setDevSearchInput("")
            }["AdTargetLinksCard[<button>.onClick]"],
            className: "text-gray-400 hover:text-gray-600 p-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-3.5 h-3.5"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                lineNumber: 562,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 560,
            columnNumber: 29
        }, this);
        $[53] = devSearchInput;
        $[54] = t31;
    } else {
        t31 = $[54];
    }
    let t32;
    if ($[55] !== t30 || $[56] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 px-3 py-2.5",
            children: [
                t27,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 570,
            columnNumber: 11
        }, this);
        $[55] = t30;
        $[56] = t31;
        $[57] = t32;
    } else {
        t32 = $[57];
    }
    let t33;
    if ($[58] !== developerId || $[59] !== developersLoading || $[60] !== filteredDevs || $[61] !== isAr || $[62] !== setValue) {
        t33 = developersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center p-6 text-xs text-gray-400 gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-4 h-4 animate-spin text-teal-600"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 579,
                    columnNumber: 113
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 579,
                    columnNumber: 171
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 579,
            columnNumber: 31
        }, this) : filteredDevs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-center text-xs text-gray-500",
            children: isAr ? "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0637\u0648\u0631\u064A\u0646" : "No developers found"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 579,
            columnNumber: 317
        }, this) : filteredDevs.map({
            "AdTargetLinksCard[filteredDevs.map()]": (dev)=>{
                const isSelected = dev.id.toString() === developerId?.toString();
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "AdTargetLinksCard[filteredDevs.map() > <button>.onClick]": ()=>{
                            setValue("developerId", dev.id.toString(), {
                                shouldDirty: true,
                                shouldValidate: true
                            });
                            setValue("projectId", "", {
                                shouldDirty: true
                            });
                            setOpenDevPopover(false);
                            setDevSearchInput("");
                        }
                    }["AdTargetLinksCard[filteredDevs.map() > <button>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-start flex items-center justify-between px-3 py-2.5 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer", isSelected ? "bg-teal-50 dark:bg-teal-950/50 text-teal-900 dark:text-teal-200 font-semibold" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate",
                            children: dev.name
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 594,
                            columnNumber: 392
                        }, this),
                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 ms-2"
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 594,
                            columnNumber: 451
                        }, this)
                    ]
                }, dev.id, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 582,
                    columnNumber: 16
                }, this);
            }
        }["AdTargetLinksCard[filteredDevs.map()]"]);
        $[58] = developerId;
        $[59] = developersLoading;
        $[60] = filteredDevs;
        $[61] = isAr;
        $[62] = setValue;
        $[63] = t33;
    } else {
        t33 = $[63];
    }
    let t34;
    if ($[64] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-64 overflow-y-auto p-1.5 space-y-0.5",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, this);
        $[64] = t33;
        $[65] = t34;
    } else {
        t34 = $[65];
    }
    let t35;
    if ($[66] !== t32 || $[67] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
            className: "w-[var(--radix-popover-trigger-width)] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-lg z-50",
            align: "start",
            children: [
                t32,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, this);
        $[66] = t32;
        $[67] = t34;
        $[68] = t35;
    } else {
        t35 = $[68];
    }
    let t36;
    if ($[69] !== openDevPopover || $[70] !== t26 || $[71] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
            open: openDevPopover,
            onOpenChange: setOpenDevPopover,
            children: [
                t26,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 625,
            columnNumber: 11
        }, this);
        $[69] = openDevPopover;
        $[70] = t26;
        $[71] = t35;
        $[72] = t36;
    } else {
        t36 = $[72];
    }
    let t37;
    if ($[73] !== selectedDeveloper || $[74] !== setValue) {
        t37 = selectedDeveloper && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-3 py-2 rounded-lg bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 635,
                            columnNumber: 220
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold text-teal-800 dark:text-teal-200 truncate",
                            children: selectedDeveloper.name
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 635,
                            columnNumber: 291
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 635,
                    columnNumber: 179
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "AdTargetLinksCard[<button>.onClick]": ()=>{
                            setValue("developerId", "", {
                                shouldDirty: true
                            });
                            setValue("projectId", "", {
                                shouldDirty: true
                            });
                        }
                    }["AdTargetLinksCard[<button>.onClick]"],
                    className: "text-teal-400 hover:text-red-500 transition-colors p-0.5 shrink-0 cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                        lineNumber: 644,
                        columnNumber: 142
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 635,
                    columnNumber: 410
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 635,
            columnNumber: 32
        }, this);
        $[73] = selectedDeveloper;
        $[74] = setValue;
        $[75] = t37;
    } else {
        t37 = $[75];
    }
    let t38;
    if ($[76] !== errors.developerId) {
        t38 = errors.developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 font-semibold mt-1",
            children: errors.developerId.message
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 653,
            columnNumber: 33
        }, this);
        $[76] = errors.developerId;
        $[77] = t38;
    } else {
        t38 = $[77];
    }
    let t39;
    if ($[78] !== t18 || $[79] !== t36 || $[80] !== t37 || $[81] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-3",
            children: [
                t18,
                t36,
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 661,
            columnNumber: 11
        }, this);
        $[78] = t18;
        $[79] = t36;
        $[80] = t37;
        $[81] = t38;
        $[82] = t39;
    } else {
        t39 = $[82];
    }
    let t40;
    if ($[83] !== t14 || $[84] !== t39 || $[85] !== t8) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-developer-card",
            className: t8,
            children: [
                t14,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[83] = t14;
        $[84] = t39;
        $[85] = t8;
        $[86] = t40;
    } else {
        t40 = $[86];
    }
    const t41 = errors.projectId || errors.ctaUrl ? "border-red-400 dark:border-red-900/60" : "border-gray-200 dark:border-neutral-800";
    let t42;
    if ($[87] !== t41) {
        t42 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shadow-sm border bg-white dark:bg-neutral-900 rounded-xl transition-colors", t41);
        $[87] = t41;
        $[88] = t42;
    } else {
        t42 = $[88];
    }
    const t43 = isAr ? "\u0648\u062C\u0647\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Destination";
    let t44;
    if ($[89] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 692,
            columnNumber: 11
        }, this);
        $[89] = t43;
        $[90] = t44;
    } else {
        t44 = $[90];
    }
    const t45 = isAr ? "\u0645\u0627\u0630\u0627 \u064A\u062D\u062F\u062B \u0639\u0646\u062F \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u061F \u0627\u0631\u0628\u0637\u0647 \u0628\u0639\u0646\u0635\u0631 \u062F\u0627\u062E\u0644\u064A \u0623\u0648 \u0628\u0631\u0627\u0628\u0637 \u062E\u0627\u0631\u062C\u064A." : "What happens when the ad is clicked? Link it to an internal item or external link.";
    let t46;
    if ($[91] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 701,
            columnNumber: 11
        }, this);
        $[91] = t45;
        $[92] = t46;
    } else {
        t46 = $[92];
    }
    let t47;
    if ($[93] !== t44 || $[94] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: [
                t44,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 709,
            columnNumber: 11
        }, this);
        $[93] = t44;
        $[94] = t46;
        $[95] = t47;
    } else {
        t47 = $[95];
    }
    let t48;
    if ($[96] !== handleDestinationChange || $[97] !== isAr || $[98] !== linkTo) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-2",
            children: DESTINATIONS.map({
                "AdTargetLinksCard[DESTINATIONS.map()]": (dest)=>{
                    const isSelected_0 = linkTo === dest.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "AdTargetLinksCard[DESTINATIONS.map() > <button>.onClick]": ()=>handleDestinationChange(dest.value)
                        }["AdTargetLinksCard[DESTINATIONS.map() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border", isSelected_0 ? "bg-teal-700 text-white border-teal-700 shadow-sm" : "bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-neutral-700 hover:border-gray-300"),
                        children: isAr ? dest.labelAr : dest.labelEn
                    }, dest.value, false, {
                        fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                        lineNumber: 721,
                        columnNumber: 18
                    }, this);
                }
            }["AdTargetLinksCard[DESTINATIONS.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 718,
            columnNumber: 11
        }, this);
        $[96] = handleDestinationChange;
        $[97] = isAr;
        $[98] = linkTo;
        $[99] = t48;
    } else {
        t48 = $[99];
    }
    let t49;
    if ($[100] !== clearErrors || $[101] !== developerId || $[102] !== errors.projectId || $[103] !== isAr || $[104] !== linkTo || $[105] !== projectId || $[106] !== projects || $[107] !== projectsLoading || $[108] !== setValue) {
        t49 = linkTo === "PROJECTS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                            children: [
                                isAr ? "\u0627\u0628\u062D\u062B \u0648\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 *" : "Search & Select Project *",
                                !developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ms-2 text-xs font-normal text-amber-500",
                                    children: isAr ? "(\u0627\u062E\u062A\u0631 \u0645\u0637\u0648\u0631\u0627\u064B \u0623\u0648\u0644\u0627\u064B)" : "(select developer first)"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                                    lineNumber: 735,
                                    columnNumber: 359
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 735,
                            columnNumber: 116
                        }, this),
                        projects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-teal-600 dark:text-teal-400 font-medium",
                            children: isAr ? `${projects.length} مشروع` : `${projects.length} projects`
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 735,
                            columnNumber: 591
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 735,
                    columnNumber: 65
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchableSelect, {
                    value: projectId,
                    onChange: {
                        "AdTargetLinksCard[<SearchableSelect>.onChange]": (val_0)=>{
                            setValue("projectId", val_0, {
                                shouldDirty: true,
                                shouldValidate: true
                            });
                            clearErrors("projectId");
                        }
                    }["AdTargetLinksCard[<SearchableSelect>.onChange]"],
                    options: projects,
                    placeholder: !developerId ? isAr ? "\u0627\u062E\u062A\u0631 \u0645\u0637\u0648\u0631\u0627\u064B \u0623\u0648\u0644\u0627\u064B..." : "Select a developer first..." : projectsLoading ? isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading projects..." : isAr ? "\u0627\u062E\u062A\u0631 \u0645\u0634\u0631\u0648\u0639..." : "Select Project...",
                    searchPlaceholder: isAr ? "\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0631\u0642\u0645..." : "Search by name or ID...",
                    loading: projectsLoading,
                    emptyText: !developerId ? isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B" : "Please select a developer first" : isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0637\u0627\u0628\u0642\u0629" : "No matching projects found",
                    isAr: isAr,
                    disabled: !developerId
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 735,
                    columnNumber: 743
                }, this),
                errors.projectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 font-semibold mt-1",
                    children: errors.projectId.message
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 743,
                    columnNumber: 1056
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 735,
            columnNumber: 36
        }, this);
        $[100] = clearErrors;
        $[101] = developerId;
        $[102] = errors.projectId;
        $[103] = isAr;
        $[104] = linkTo;
        $[105] = projectId;
        $[106] = projects;
        $[107] = projectsLoading;
        $[108] = setValue;
        $[109] = t49;
    } else {
        t49 = $[109];
    }
    let t50;
    if ($[110] !== clearErrors || $[111] !== developerId || $[112] !== errors.projectId || $[113] !== isAr || $[114] !== linkTo || $[115] !== projectId || $[116] !== properties || $[117] !== propertiesLoading || $[118] !== setValue) {
        t50 = linkTo === "PROPERTIES" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                            children: [
                                isAr ? "\u0627\u0628\u062D\u062B \u0648\u0627\u062E\u062A\u0631 \u0627\u0644\u0648\u062D\u062F\u0629 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629 *" : "Search & Select Property *",
                                !developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ms-2 text-xs font-normal text-amber-500",
                                    children: isAr ? "(\u0627\u062E\u062A\u0631 \u0645\u0637\u0648\u0631\u0627\u064B \u0623\u0648\u0644\u0627\u064B)" : "(select developer first)"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                                    lineNumber: 759,
                                    columnNumber: 405
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 759,
                            columnNumber: 118
                        }, this),
                        properties.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-teal-600 dark:text-teal-400 font-medium",
                            children: isAr ? `${properties.length} وحدة` : `${properties.length} properties`
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 759,
                            columnNumber: 639
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 759,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchableSelect, {
                    value: projectId,
                    onChange: {
                        "AdTargetLinksCard[<SearchableSelect>.onChange]": (val_1)=>{
                            setValue("projectId", val_1, {
                                shouldDirty: true,
                                shouldValidate: true
                            });
                            clearErrors("projectId");
                        }
                    }["AdTargetLinksCard[<SearchableSelect>.onChange]"],
                    options: properties,
                    placeholder: !developerId ? isAr ? "\u0627\u062E\u062A\u0631 \u0645\u0637\u0648\u0631\u0627\u064B \u0623\u0648\u0644\u0627\u064B..." : "Select a developer first..." : propertiesLoading ? isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading properties..." : isAr ? "\u0627\u062E\u062A\u0631 \u0648\u062D\u062F\u0629 \u0639\u0642\u0627\u0631\u064A\u0629..." : "Select Property...",
                    searchPlaceholder: isAr ? "\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0631\u0642\u0645..." : "Search by name or ID...",
                    loading: propertiesLoading,
                    emptyText: !developerId ? isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B" : "Please select a developer first" : isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0648\u062D\u062F\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629" : "No matching properties found",
                    isAr: isAr,
                    disabled: !developerId
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 759,
                    columnNumber: 796
                }, this),
                errors.projectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 font-semibold mt-1",
                    children: errors.projectId.message
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 767,
                    columnNumber: 1092
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 759,
            columnNumber: 38
        }, this);
        $[110] = clearErrors;
        $[111] = developerId;
        $[112] = errors.projectId;
        $[113] = isAr;
        $[114] = linkTo;
        $[115] = projectId;
        $[116] = properties;
        $[117] = propertiesLoading;
        $[118] = setValue;
        $[119] = t50;
    } else {
        t50 = $[119];
    }
    let t51;
    if ($[120] !== clearErrors || $[121] !== errors.projectId || $[122] !== isAr || $[123] !== linkTo || $[124] !== register) {
        t51 = linkTo === "EXPERT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                    className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                    children: isAr ? "\u0627\u0628\u062D\u062B \u0648\u0627\u062E\u062A\u0631 \u0627\u0644\u062E\u0628\u064A\u0631 *" : "Search & Select Expert *"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 783,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    placeholder: isAr ? "\u0623\u062F\u062E\u0644 \u0645\u0639\u0631\u0641 \u0623\u0648 \u0627\u0633\u0645 \u0627\u0644\u062E\u0628\u064A\u0631" : "Enter expert name or ID",
                    ...register("projectId", {
                        onChange: ()=>clearErrors("projectId")
                    }),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white dark:bg-neutral-800/60 h-11 text-xs sm:text-sm rounded-lg", errors.projectId ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700")
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 783,
                    columnNumber: 290
                }, this),
                errors.projectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 font-semibold mt-1",
                    children: errors.projectId.message
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 785,
                    columnNumber: 227
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 783,
            columnNumber: 34
        }, this);
        $[120] = clearErrors;
        $[121] = errors.projectId;
        $[122] = isAr;
        $[123] = linkTo;
        $[124] = register;
        $[125] = t51;
    } else {
        t51 = $[125];
    }
    let t52;
    if ($[126] !== clearErrors || $[127] !== errors.ctaUrl || $[128] !== isAr || $[129] !== linkTo || $[130] !== register || $[131] !== setValue || $[132] !== t) {
        t52 = linkTo === "URL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                    className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                    children: isAr ? "\u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u062E\u0627\u0631\u062C\u064A (URL) *" : "External Link (URL) *"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 797,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    placeholder: "https://example.com/promotions",
                    dir: "ltr",
                    inputMode: "url",
                    "aria-invalid": !!errors.ctaUrl,
                    ...register("ctaUrl", {
                        validate: (val_2)=>!val_2?.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidAdUrl"])(val_2) || t("ads.createStepTwo.ctaUrlInvalid"),
                        onChange: (e_0)=>{
                            setValue("cta_url", e_0.target.value, {
                                shouldDirty: true
                            });
                            clearErrors("ctaUrl");
                        }
                    }),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white dark:bg-neutral-800/60 h-11 text-xs sm:text-sm rounded-lg", errors.ctaUrl ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700")
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 797,
                    columnNumber: 277
                }, this),
                errors.ctaUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 font-semibold mt-1",
                    children: errors.ctaUrl.message
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 805,
                    columnNumber: 221
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 797,
            columnNumber: 31
        }, this);
        $[126] = clearErrors;
        $[127] = errors.ctaUrl;
        $[128] = isAr;
        $[129] = linkTo;
        $[130] = register;
        $[131] = setValue;
        $[132] = t;
        $[133] = t52;
    } else {
        t52 = $[133];
    }
    let t53;
    if ($[134] !== t49 || $[135] !== t50 || $[136] !== t51 || $[137] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-1 space-y-4",
            children: [
                t49,
                t50,
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 819,
            columnNumber: 11
        }, this);
        $[134] = t49;
        $[135] = t50;
        $[136] = t51;
        $[137] = t52;
        $[138] = t53;
    } else {
        t53 = $[138];
    }
    let t54;
    if ($[139] !== t48 || $[140] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-5",
            children: [
                t48,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 830,
            columnNumber: 11
        }, this);
        $[139] = t48;
        $[140] = t53;
        $[141] = t54;
    } else {
        t54 = $[141];
    }
    let t55;
    if ($[142] !== t42 || $[143] !== t47 || $[144] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-destination-card",
            className: t42,
            children: [
                t47,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 839,
            columnNumber: 11
        }, this);
        $[142] = t42;
        $[143] = t47;
        $[144] = t54;
        $[145] = t55;
    } else {
        t55 = $[145];
    }
    const t56 = isAr ? "\u0627\u0644\u062F\u0648\u0644 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629" : "Target Countries";
    let t57;
    if ($[146] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
            children: t56
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 850,
            columnNumber: 11
        }, this);
        $[146] = t56;
        $[147] = t57;
    } else {
        t57 = $[147];
    }
    const t58 = isAr ? "\u064A\u0645\u0643\u0646 \u0627\u062E\u062A\u064A\u0627\u0631 \u0623\u0643\u062B\u0631 \u0645\u0646 \u062F\u0648\u0644\u0629" : "Select target countries";
    let t59;
    if ($[148] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t58
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 859,
            columnNumber: 11
        }, this);
        $[148] = t58;
        $[149] = t59;
    } else {
        t59 = $[149];
    }
    let t60;
    if ($[150] !== t57 || $[151] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: [
                t57,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 867,
            columnNumber: 11
        }, this);
        $[150] = t57;
        $[151] = t59;
        $[152] = t60;
    } else {
        t60 = $[152];
    }
    let t61;
    if ($[153] !== countries || $[154] !== country || $[155] !== isAr || $[156] !== isCountriesLoading || $[157] !== setValue) {
        t61 = isCountriesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-4 h-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 876,
                    columnNumber: 95
                }, this),
                isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading countries..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 876,
            columnNumber: 32
        }, this) : countries.map({
            "AdTargetLinksCard[countries.map()]": (c)=>{
                const isSelected_1 = country === c.country_id.toString();
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "AdTargetLinksCard[countries.map() > <button>.onClick]": ()=>setValue("country", c.country_id.toString(), {
                                shouldDirty: true,
                                shouldValidate: true
                            })
                    }["AdTargetLinksCard[countries.map() > <button>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border flex items-center gap-2", isSelected_1 ? "border-teal-600 bg-teal-50/80 dark:bg-teal-950/40 text-teal-900 dark:text-teal-100 ring-2 ring-teal-600 shadow-xs" : "bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-neutral-700 hover:border-gray-300"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: c.country_name
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                        lineNumber: 884,
                        columnNumber: 460
                    }, this)
                }, c.country_id, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 879,
                    columnNumber: 16
                }, this);
            }
        }["AdTargetLinksCard[countries.map()]"]);
        $[153] = countries;
        $[154] = country;
        $[155] = isAr;
        $[156] = isCountriesLoading;
        $[157] = setValue;
        $[158] = t61;
    } else {
        t61 = $[158];
    }
    let t62;
    if ($[159] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-3",
            children: t61
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 898,
            columnNumber: 11
        }, this);
        $[159] = t61;
        $[160] = t62;
    } else {
        t62 = $[160];
    }
    const t63 = errors.country?.message;
    let t64;
    if ($[161] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t63,
            className: "font-semibold"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 907,
            columnNumber: 11
        }, this);
        $[161] = t63;
        $[162] = t64;
    } else {
        t64 = $[162];
    }
    let t65;
    if ($[163] !== t62 || $[164] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: [
                t62,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 915,
            columnNumber: 11
        }, this);
        $[163] = t62;
        $[164] = t64;
        $[165] = t65;
    } else {
        t65 = $[165];
    }
    let t66;
    if ($[166] !== t60 || $[167] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t60,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 924,
            columnNumber: 11
        }, this);
        $[166] = t60;
        $[167] = t65;
        $[168] = t66;
    } else {
        t66 = $[168];
    }
    let t67;
    if ($[169] !== t40 || $[170] !== t55 || $[171] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t40,
                t55,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 933,
            columnNumber: 11
        }, this);
        $[169] = t40;
        $[170] = t55;
        $[171] = t66;
        $[172] = t67;
    } else {
        t67 = $[172];
    }
    return t67;
}
_s1(AdTargetLinksCard, "3SGKplyoO3zLvB6YdJBs0/sePLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$edit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdEditData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountriesSelect"]
    ];
});
_c1 = AdTargetLinksCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "SearchableSelect");
__turbopack_context__.k.register(_c1, "AdTargetLinksCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/form/AdPriorityCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdPriorityCard",
    ()=>AdPriorityCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
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
function AdPriorityCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(55);
    if ($[0] !== "271f6a538854ffee42475cdc06902ca6105964083f4ac5a8bcfeec7028c2a15d") {
        for(let $i = 0; $i < 55; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "271f6a538854ffee42475cdc06902ca6105964083f4ac5a8bcfeec7028c2a15d";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { control, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const priority = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "priority"
    }) || 1;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                value: "1",
                labelAr: "1 (\u0627\u0644\u0623\u0639\u0644\u0649)",
                labelEn: "1 (Highest)"
            },
            {
                value: "2",
                labelAr: "2",
                labelEn: "2"
            },
            {
                value: "3",
                labelAr: "3",
                labelEn: "3"
            },
            {
                value: "4",
                labelAr: "4",
                labelEn: "4"
            },
            {
                value: "5",
                labelAr: "5 (\u0645\u062A\u0648\u0633\u0637)",
                labelEn: "5 (Medium)"
            },
            {
                value: "6",
                labelAr: "6",
                labelEn: "6"
            },
            {
                value: "7",
                labelAr: "7",
                labelEn: "7"
            },
            {
                value: "8",
                labelAr: "8",
                labelEn: "8"
            },
            {
                value: "9",
                labelAr: "9",
                labelEn: "9"
            },
            {
                value: "10",
                labelAr: "10 (\u0627\u0644\u0623\u062F\u0646\u0649)",
                labelEn: "10 (Lowest)"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const PRIORITY_OPTIONS = t0;
    const t1 = isAr ? "\u0623\u0648\u0644\u0648\u064A\u0629 \u0627\u0644\u0638\u0647\u0648\u0631" : "Display Priority";
    let t2;
    if ($[2] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = isAr ? "\u0645\u0646 1 (\u0627\u0644\u0623\u0639\u0644\u0649) \u0625\u0644\u0649 10 (\u0627\u0644\u0623\u062F\u0646\u0649). \u062F\u0627\u062E\u0644 \u0646\u0641\u0633 \u0627\u0644\u0645\u0643\u0627\u0646\u060C \u064A\u064F\u0631\u062A\u0651\u064E\u0628 \u0627\u0644\u0638\u0647\u0648\u0631 \u062D\u0633\u0628 \u0627\u0644\u0645\u0627\u0644\u0643 \u0623\u0648\u0644\u0627\u064B \u062B\u0645 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629." : "From 1 (Highest) to 10 (Lowest). Within the same location, display is ordered by owner first, then priority.";
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t2 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== priority) {
        t6 = priority.toString();
        $[9] = priority;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== setValue) {
        t7 = ({
            "AdPriorityCard[<Select>.onValueChange]": (val)=>setValue("priority", parseInt(val), {
                    shouldDirty: true
                })
        })["AdPriorityCard[<Select>.onValueChange]"];
        $[11] = setValue;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = isAr ? "1 (\u0627\u0644\u0623\u0639\u0644\u0649)" : "1 (Highest)";
    let t9;
    if ($[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 h-11 text-xs sm:text-sm rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t8
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
                lineNumber: 126,
                columnNumber: 144
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== isAr) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: PRIORITY_OPTIONS.map({
                "AdPriorityCard[PRIORITY_OPTIONS.map()]": (opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: opt.value,
                        children: isAr ? opt.labelAr : opt.labelEn
                    }, opt.value, false, {
                        fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
                        lineNumber: 135,
                        columnNumber: 58
                    }, this)
            }["AdPriorityCard[PRIORITY_OPTIONS.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[15] = isAr;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t6 || $[19] !== t7 || $[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                value: t6,
                onValueChange: t7,
                children: [
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
                lineNumber: 144,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t6;
        $[19] = t7;
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    const t12 = isAr ? "\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0639\u0631\u0636 \u062F\u0627\u062E\u0644 \u0646\u0641\u0633 \u0627\u0644\u0645\u0643\u0627\u0646" : "Display order within the same location";
    let t13;
    if ($[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-bold text-xs sm:text-sm text-teal-900 dark:text-teal-200",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white text-[11px] font-bold shrink-0",
            children: "1"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    const t15 = isAr ? "\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u062F\u0645\u0646" : "Admin ads";
    let t16;
    if ($[25] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "text-gray-900 dark:text-white",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[25] = t15;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    const t17 = isAr ? "\u062A\u0638\u0647\u0631 \u0623\u0648\u0644\u0627\u064B \u062F\u0627\u0626\u0645\u0627\u064B." : "always appear first.";
    let t18;
    if ($[27] !== t16 || $[28] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t16,
                        " ",
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
                    lineNumber: 181,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[27] = t16;
        $[28] = t17;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white text-[11px] font-bold shrink-0",
            children: "2"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    const t20 = isAr ? "\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0637\u0648\u0651\u0631\u064A\u0646" : "Developer ads";
    let t21;
    if ($[31] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "text-gray-900 dark:text-white",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[31] = t20;
        $[32] = t21;
    } else {
        t21 = $[32];
    }
    const t22 = isAr ? "\u0628\u0639\u062F\u0647\u0627." : "next.";
    let t23;
    if ($[33] !== t21 || $[34] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t21,
                        " ",
                        t22
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
                    lineNumber: 207,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[33] = t21;
        $[34] = t22;
        $[35] = t23;
    } else {
        t23 = $[35];
    }
    let t24;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center w-5 h-5 rounded-full bg-neutral-600 text-white text-[11px] font-bold shrink-0",
            children: "3"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    const t25 = isAr ? "\u062F\u0627\u062E\u0644 \u0643\u0644 \u0645\u062C\u0645\u0648\u0639\u0629:" : "Within each group:";
    const t26 = isAr ? "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 1 \u2190 10." : "Priority 1 \u2192 10.";
    let t27;
    if ($[37] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "text-gray-900 dark:text-white",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[37] = t26;
        $[38] = t27;
    } else {
        t27 = $[38];
    }
    let t28;
    if ($[39] !== t25 || $[40] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t25,
                        " ",
                        t27
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
                    lineNumber: 233,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[39] = t25;
        $[40] = t27;
        $[41] = t28;
    } else {
        t28 = $[41];
    }
    let t29;
    if ($[42] !== t18 || $[43] !== t23 || $[44] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300",
            children: [
                t18,
                t23,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[42] = t18;
        $[43] = t23;
        $[44] = t28;
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    let t30;
    if ($[46] !== t13 || $[47] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-5 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 space-y-2.5",
            children: [
                t13,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[46] = t13;
        $[47] = t29;
        $[48] = t30;
    } else {
        t30 = $[48];
    }
    let t31;
    if ($[49] !== t11 || $[50] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-4",
            children: [
                t11,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[49] = t11;
        $[50] = t30;
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    let t32;
    if ($[52] !== t31 || $[53] !== t5) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t5,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPriorityCard.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[52] = t31;
        $[53] = t5;
        $[54] = t32;
    } else {
        t32 = $[54];
    }
    return t32;
}
_s(AdPriorityCard, "ijPdRyXBasiU9FP1NM3F08vDixM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = AdPriorityCard;
var _c;
__turbopack_context__.k.register(_c, "AdPriorityCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/form/AdSchedulingCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdSchedulingCard",
    ()=>AdSchedulingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
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
;
;
function AdSchedulingCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(86);
    if ($[0] !== "a8dd2df9a0e1d258207bb86eec51d49f0b34128374ea342eaa1ecf91346ae520") {
        for(let $i = 0; $i < 86; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a8dd2df9a0e1d258207bb86eec51d49f0b34128374ea342eaa1ecf91346ae520";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { register, watch, setValue, control, formState: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t0;
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "status"
    }) || "draft";
    let t1;
    if ($[1] !== control) {
        t1 = {
            control,
            name: "startDate"
        };
        $[1] = control;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const startDateVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t1);
    const t2 = isAr ? "\u0627\u0644\u062C\u062F\u0648\u0644\u0629" : "Scheduling";
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
                children: t2
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
                lineNumber: 53,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 *" : "Start Date *";
    let t5;
    if ($[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-1.5 font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300",
            htmlFor: "startDate",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = !!errors.startDate;
    const t7 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u0645\u0637\u0644\u0648\u0628" : "Start date is required";
    let t8;
    if ($[7] !== isAr || $[8] !== watch) {
        t8 = (val)=>{
            const end = watch("endDate");
            if (!end) {
                return true;
            }
            return new Date(val) <= new Date(end) || (isAr ? "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u0642\u0628\u0644 \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621" : "Start must be before or equal to end");
        };
        $[7] = isAr;
        $[8] = watch;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== register || $[11] !== t7 || $[12] !== t8) {
        t9 = register("startDate", {
            required: t7,
            validate: t8,
            deps: [
                "endDate"
            ]
        });
        $[10] = register;
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const t10 = `bg-white dark:bg-neutral-800/60 ps-10 h-11 text-xs sm:text-sm rounded-lg ${errors.startDate ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700"}`;
    let t11;
    if ($[14] !== t10 || $[15] !== t6 || $[16] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "startDate",
            type: "date",
            error: t6,
            ...t9,
            className: t10
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t6;
        $[16] = t9;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    const t14 = errors.startDate?.message;
    let t15;
    if ($[21] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t14,
            className: "font-medium"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[21] = t14;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== t13 || $[24] !== t15 || $[25] !== t5) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t15;
        $[25] = t5;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    const t17 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 *" : "End Date *";
    let t18;
    if ($[27] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-1.5 font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300",
            htmlFor: "endDate",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    const t19 = !!errors.endDate;
    const t20 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0645\u0637\u0644\u0648\u0628" : "End date is required";
    let t21;
    if ($[29] !== isAr || $[30] !== watch) {
        t21 = (val_0)=>{
            if (!val_0) {
                return isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0645\u0637\u0644\u0648\u0628" : "End date is required";
            }
            const start = watch("startDate");
            if (!start) {
                return true;
            }
            return new Date(start) <= new Date(val_0) || (isAr ? "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0628\u0639\u062F \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621" : "End must be after or equal to start");
        };
        $[29] = isAr;
        $[30] = watch;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== register || $[33] !== t20 || $[34] !== t21) {
        t22 = register("endDate", {
            required: t20,
            validate: t21,
            deps: [
                "startDate"
            ]
        });
        $[32] = register;
        $[33] = t20;
        $[34] = t21;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    const t23 = `bg-white dark:bg-neutral-800/60 ps-10 h-11 text-xs sm:text-sm rounded-lg ${errors.endDate ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700"}`;
    const t24 = startDateVal || undefined;
    let t25;
    if ($[36] !== t19 || $[37] !== t22 || $[38] !== t23 || $[39] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "endDate",
            type: "date",
            error: t19,
            ...t22,
            className: t23,
            min: t24
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = t22;
        $[38] = t23;
        $[39] = t24;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    let t27;
    if ($[42] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[42] = t25;
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    const t28 = errors.endDate?.message;
    let t29;
    if ($[44] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            message: t28,
            className: "font-medium"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[44] = t28;
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    let t30;
    if ($[46] !== t18 || $[47] !== t27 || $[48] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t27,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[46] = t18;
        $[47] = t27;
        $[48] = t29;
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    let t31;
    if ($[50] !== t16 || $[51] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t16,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[50] = t16;
        $[51] = t30;
        $[52] = t31;
    } else {
        t31 = $[52];
    }
    const t32 = isAr ? "\u0627\u0644\u062D\u0627\u0644\u0629" : "Status";
    let t33;
    if ($[53] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-1.5 font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[53] = t32;
        $[54] = t33;
    } else {
        t33 = $[54];
    }
    let t34;
    if ($[55] !== setValue) {
        t34 = ({
            "AdSchedulingCard[<Select>.onValueChange]": (val_1)=>setValue("status", val_1, {
                    shouldDirty: true
                })
        })["AdSchedulingCard[<Select>.onValueChange]"];
        $[55] = setValue;
        $[56] = t34;
    } else {
        t34 = $[56];
    }
    const t35 = isAr ? "\u0645\u0633\u0648\u062F\u0651\u0629" : "Draft";
    let t36;
    if ($[57] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 h-11 text-xs sm:text-sm rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t35
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
                lineNumber: 267,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[57] = t35;
        $[58] = t36;
    } else {
        t36 = $[58];
    }
    const t37 = isAr ? "\u0645\u0633\u0648\u062F\u0651\u0629" : "Draft";
    let t38;
    if ($[59] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "draft",
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[59] = t37;
        $[60] = t38;
    } else {
        t38 = $[60];
    }
    const t39 = isAr ? "\u0646\u0634\u0637" : "Active";
    let t40;
    if ($[61] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "active",
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[61] = t39;
        $[62] = t40;
    } else {
        t40 = $[62];
    }
    const t41 = isAr ? "\u0645\u0648\u0642\u0648\u0641 \u0645\u0624\u0642\u062A\u0627\u064B" : "Paused";
    let t42;
    if ($[63] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "paused",
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[63] = t41;
        $[64] = t42;
    } else {
        t42 = $[64];
    }
    const t43 = isAr ? "\u0645\u0646\u062A\u0647\u064A" : "Ended";
    let t44;
    if ($[65] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "ended",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[65] = t43;
        $[66] = t44;
    } else {
        t44 = $[66];
    }
    let t45;
    if ($[67] !== t38 || $[68] !== t40 || $[69] !== t42 || $[70] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t38,
                t40,
                t42,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[67] = t38;
        $[68] = t40;
        $[69] = t42;
        $[70] = t44;
        $[71] = t45;
    } else {
        t45 = $[71];
    }
    let t46;
    if ($[72] !== status || $[73] !== t34 || $[74] !== t36 || $[75] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: status,
            onValueChange: t34,
            children: [
                t36,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[72] = status;
        $[73] = t34;
        $[74] = t36;
        $[75] = t45;
        $[76] = t46;
    } else {
        t46 = $[76];
    }
    let t47;
    if ($[77] !== t33 || $[78] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[77] = t33;
        $[78] = t46;
        $[79] = t47;
    } else {
        t47 = $[79];
    }
    let t48;
    if ($[80] !== t31 || $[81] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-5",
            children: [
                t31,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[80] = t31;
        $[81] = t47;
        $[82] = t48;
    } else {
        t48 = $[82];
    }
    let t49;
    if ($[83] !== t3 || $[84] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-scheduling-card",
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t3,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[83] = t3;
        $[84] = t48;
        $[85] = t49;
    } else {
        t49 = $[85];
    }
    return t49;
}
_s(AdSchedulingCard, "aG+j0rE4f28HTwLvyvF5LhinKY8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = AdSchedulingCard;
var _c;
__turbopack_context__.k.register(_c, "AdSchedulingCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/ads/create/CreateAdForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateAdForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-form.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-ad-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdBasicInfoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/form/AdBasicInfoCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdPlacementCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/form/AdPlacementCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdCreativeContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/form/AdCreativeContentCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdNativeContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/form/AdNativeContentCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdTargetLinksCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/form/AdTargetLinksCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdPriorityCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/form/AdPriorityCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdSchedulingCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/form/AdSchedulingCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
;
;
function CreateAdForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "fde5e36370926bf608eec5f7e254df511c23874fca1978daa07b952398d6cde5") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fde5e36370926bf608eec5f7e254df511c23874fca1978daa07b952398d6cde5";
    }
    const { routePrefix } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { createAd, isCreating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"])();
    const [adImage, setAdImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adImagePreview, setAdImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleImageUpload = {
        "CreateAdForm[handleImageUpload]": (e)=>{
            const file = e.target.files?.[0];
            e.target.value = "";
            if (file) {
                const imageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAdImageError"])(file, t);
                if (imageError) {
                    methods.setError("image", {
                        type: "validate",
                        message: imageError
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(imageError, {
                        id: "create-ad-image-toast"
                    });
                    return;
                }
                setAdImage(file);
                methods.clearErrors("image");
                methods.clearErrors("image_url");
                methods.setValue("image_url", file.name, {
                    shouldDirty: true
                });
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    setAdImagePreview(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    }["CreateAdForm[handleImageUpload]"];
    const handleRemoveImage = {
        "CreateAdForm[handleRemoveImage]": ()=>{
            setAdImage(null);
            setAdImagePreview("");
            methods.setValue("image_url", "", {
                shouldDirty: true
            });
            methods.setError("image", {
                type: "required",
                message: isAr ? "\u0635\u0648\u0631\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628\u0629 *" : "Ad image is required *"
            });
        }
    }["CreateAdForm[handleRemoveImage]"];
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Date().toISOString().split("T");
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const today = t1[0];
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            defaultValues: {
                campaignName: "",
                title: "",
                type: "banner",
                platform: "all",
                location: [
                    "home_top"
                ],
                country: "1",
                startDate: today,
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
                cta_url: "",
                width: "medium",
                position: "bottom_right",
                developerId: ""
            },
            mode: "onTouched"
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const methods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(t2);
    const { handleSubmit, formState: t3 } = methods;
    const { errors } = t3;
    const validateForm = {
        "CreateAdForm[validateForm]": (data)=>{
            let isValid = true;
            const trimmedName = (data.campaignName || "").trim();
            if (!trimmedName) {
                methods.setError("campaignName", {
                    type: "required",
                    message: isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Name is required"
                });
                isValid = false;
            } else {
                if (trimmedName.length < 2) {
                    methods.setError("campaignName", {
                        type: "minLength",
                        message: isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062D\u0631\u0641\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644" : "Ad Name must be at least 2 characters"
                    });
                    isValid = false;
                }
            }
            if (!data.type) {
                methods.setError("type", {
                    type: "required",
                    message: isAr ? "\u0646\u0648\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad type is required"
                });
                isValid = false;
            }
            const locArray = Array.isArray(data.location) ? data.location.filter(Boolean) : data.location ? [
                data.location
            ] : [];
            if (!locArray || locArray.length === 0 || !locArray[0]) {
                methods.setError("location", {
                    type: "required",
                    message: isAr ? "\u0645\u0643\u0627\u0646 \u0627\u0644\u0639\u0631\u0636 \u0645\u0637\u0644\u0648\u0628" : "Display location is required"
                });
                isValid = false;
            }
            if (!data.country) {
                methods.setError("country", {
                    type: "required",
                    message: isAr ? "\u0627\u0644\u062F\u0648\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" : "Target country is required"
                });
                isValid = false;
            }
            if (!adImage) {
                methods.setError("image", {
                    type: "required",
                    message: isAr ? "\u0635\u0648\u0631\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628\u0629 *" : "Ad image is required *"
                });
                isValid = false;
            }
            if (data.type === "native" && (!data.title || !data.title.trim())) {
                methods.setError("title", {
                    type: "required",
                    message: isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad title is required"
                });
                isValid = false;
            }
            if (data.linkTo === "PROJECTS") {
                if (!data.developerId) {
                    methods.setError("developerId", {
                        type: "required",
                        message: isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639" : "Please select a developer first"
                    });
                    isValid = false;
                }
                if (!data.projectId) {
                    methods.setError("projectId", {
                        type: "required",
                        message: isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0631\u062A\u0628\u0637 \u0628\u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Please select a project"
                    });
                    isValid = false;
                }
            } else {
                if (data.linkTo === "PROPERTIES") {
                    if (!data.developerId) {
                        methods.setError("developerId", {
                            type: "required",
                            message: isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B \u0644\u0639\u0631\u0636 \u0627\u0644\u0648\u062D\u062F\u0627\u062A" : "Please select a developer first"
                        });
                        isValid = false;
                    }
                    if (!data.projectId) {
                        methods.setError("projectId", {
                            type: "required",
                            message: isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0648\u062D\u062F\u0629 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629" : "Please select a property"
                        });
                        isValid = false;
                    }
                } else {
                    if (data.linkTo === "EXPERT") {
                        if (!data.projectId || !data.projectId.trim()) {
                            methods.setError("projectId", {
                                type: "required",
                                message: isAr ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0623\u0648 \u0645\u0639\u0631\u0641 \u0627\u0644\u062E\u0628\u064A\u0631" : "Please enter expert name or ID"
                            });
                            isValid = false;
                        }
                    } else {
                        if (data.linkTo === "URL") {
                            const extUrl = (data.ctaUrl || data.cta_url || "").trim();
                            if (!extUrl) {
                                methods.setError("ctaUrl", {
                                    type: "required",
                                    message: isAr ? "\u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0645\u0637\u0644\u0648\u0628" : "External URL is required"
                                });
                                isValid = false;
                            }
                        }
                    }
                }
            }
            if (!data.startDate) {
                methods.setError("startDate", {
                    type: "required",
                    message: isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u0645\u0637\u0644\u0648\u0628" : "Start date is required"
                });
                isValid = false;
            }
            if (!data.endDate) {
                methods.setError("endDate", {
                    type: "required",
                    message: isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0645\u0637\u0644\u0648\u0628" : "End date is required"
                });
                isValid = false;
            } else {
                if (data.startDate && new Date(data.endDate) < new Date(data.startDate)) {
                    methods.setError("endDate", {
                        type: "validate",
                        message: isAr ? "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0628\u0639\u062F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621" : "End date must be after or equal to start date"
                    });
                    isValid = false;
                }
            }
            if (!isValid) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "\u064A\u0631\u062C\u0649 \u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0648\u062A\u0635\u062D\u064A\u062D \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629" : "Please fill in all required fields");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollToFirstInvalidField"])();
                return false;
            }
            return true;
        }
    }["CreateAdForm[validateForm]"];
    let t4;
    if ($[3] !== isAr) {
        t4 = ({
            "CreateAdForm[onInvalid]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "\u064A\u0631\u062C\u0649 \u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0648\u062A\u0635\u062D\u064A\u062D \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629" : "Please fill in all required fields");
            }
        })["CreateAdForm[onInvalid]"];
        $[3] = isAr;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const onInvalid = t4;
    const onSubmit = {
        "CreateAdForm[onSubmit]": async (data_0)=>{
            if (!validateForm(data_0)) {
                return;
            }
            const locArray_0 = Array.isArray(data_0.location) ? data_0.location.filter(Boolean) : data_0.location ? [
                data_0.location
            ] : [];
            const formData = new FormData();
            const campaignName = data_0.campaignName && data_0.campaignName.trim() || data_0.title.trim();
            formData.append("campaign[name]", campaignName);
            formData.append("campaign[title]", campaignName);
            formData.append("campaign[start_at]", data_0.startDate);
            if (data_0.endDate) {
                formData.append("campaign[end_at]", data_0.endDate);
            }
            formData.append("campaign[daily_cap_credits]", "");
            formData.append("campaign[status]", data_0.status || "active");
            if (data_0.developerId) {
                const devId = parseInt(data_0.developerId);
                if (!isNaN(devId)) {
                    formData.append("campaign[developer_id]", devId.toString());
                }
            }
            formData.append("placement[platform]", data_0.platform.toLowerCase().replace(" only", ""));
            const normalizeLocation = _CreateAdFormOnSubmitNormalizeLocation;
            formData.append("placement[location]", normalizeLocation(locArray_0[0]));
            formData.append("placement[format]", data_0.type.toLowerCase());
            formData.append("placement[billing_unit]", data_0.billing_unit || "impression");
            if (data_0.type === "pop_up") {
                formData.append("placement[width]", data_0.width || "medium");
                formData.append("placement[position]", data_0.position || "bottom_right");
            }
            const parsedCountry = parseInt(data_0.country);
            const countryId = !isNaN(parsedCountry) ? parsedCountry : data_0.country === "Egypt" ? 1 : data_0.country === "UAE" ? 2 : data_0.country === "Oman" ? 3 : 1;
            formData.append("country_id", countryId.toString());
            let externalUrl = (data_0.ctaUrl || data_0.cta_url || "").trim();
            if (externalUrl && !/^https?:\/\//i.test(externalUrl)) {
                externalUrl = `https://${externalUrl}`;
            }
            if (data_0.linkTo === "URL") {
                formData.append("cta_url", externalUrl);
            } else {
                if (data_0.linkTo && data_0.linkTo !== "NONE") {
                    formData.append("entity_type", data_0.linkTo);
                    if (data_0.linkTo === "DEVELOPER" && data_0.developerId) {
                        const id = parseInt(data_0.developerId);
                        if (!isNaN(id)) {
                            formData.append("entity_id", id.toString());
                        }
                    } else {
                        if (data_0.projectId) {
                            const id_0 = parseInt(data_0.projectId);
                            if (!isNaN(id_0)) {
                                formData.append("entity_id", id_0.toString());
                            }
                        }
                    }
                    if (externalUrl) {
                        formData.append("cta_url", externalUrl);
                    }
                } else {
                    if (externalUrl) {
                        formData.append("cta_url", externalUrl);
                    }
                }
            }
            const creativeTitle = data_0.title && data_0.title.trim() || campaignName;
            const creativeSubtitle = data_0.description && data_0.description.trim() || "";
            formData.append("title", creativeTitle);
            formData.append("subtitle", creativeSubtitle);
            if (data_0.ctaButtonText) {
                formData.append("cta_label", data_0.ctaButtonText.trim());
            }
            formData.append("weight", (data_0.priority || 1).toString());
            if (adImage) {
                formData.append("image_url", adImage);
                formData.append("image", adImage);
            }
            ;
            try {
                await createAd(formData);
                router.push(`${routePrefix}/ads`);
            } catch (t5) {
                const error = t5;
                const { summary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$form$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyApiFormErrors"])(error, {
                    setError: methods.setError,
                    getValues: methods.getValues,
                    t,
                    fieldMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$utils$2f$ad$2d$form$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AD_FIELD_MAP"],
                    fallbackMessage: t("ads.messages.createFailed")
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(summary, {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$toast$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ERROR_TOAST_ID"]
                });
            }
        }
    }["CreateAdForm[onSubmit]"];
    let t6;
    if ($[5] !== routePrefix || $[6] !== router) {
        t6 = ({
            "CreateAdForm[<button>.onClick]": ()=>router.push(`${routePrefix}/ads`)
        })["CreateAdForm[<button>.onClick]"];
        $[5] = routePrefix;
        $[6] = router;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = `w-4 h-4 ${isAr ? "" : "rotate-180"}`;
    let t8;
    if ($[8] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: t7
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 436,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const t9 = isAr ? "\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A" : "Back to Ads";
    let t10;
    if ($[10] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[10] = t9;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== t10 || $[13] !== t6 || $[14] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t6,
            className: "inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 453,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t6;
        $[14] = t8;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    const t12 = isAr ? "\u0625\u0646\u0634\u0627\u0621 \u0625\u0639\u0644\u0627\u0646 \u062C\u062F\u064A\u062F" : "Create New Ad";
    let t13;
    if ($[16] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 464,
            columnNumber: 11
        }, this);
        $[16] = t12;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== t11 || $[19] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "create-ad-form-top",
            className: "space-y-2 pt-2",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t13;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    let t16;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdBasicInfoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdBasicInfoCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 482,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdPlacementCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdPlacementCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 483,
            columnNumber: 11
        }, this);
        $[21] = t15;
        $[22] = t16;
    } else {
        t15 = $[21];
        t16 = $[22];
    }
    let t17;
    let t18;
    let t19;
    let t20;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdNativeContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdNativeContentCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 495,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdTargetLinksCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdTargetLinksCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdPriorityCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdPriorityCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 497,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdSchedulingCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdSchedulingCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[23] = t17;
        $[24] = t18;
        $[25] = t19;
        $[26] = t20;
    } else {
        t17 = $[23];
        t18 = $[24];
        t19 = $[25];
        t20 = $[26];
    }
    const t21 = "flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-neutral-800";
    let t22;
    if ($[27] !== routePrefix || $[28] !== router) {
        t22 = ({
            "CreateAdForm[<Button>.onClick]": ()=>router.push(`${routePrefix}/ads`)
        })["CreateAdForm[<Button>.onClick]"];
        $[27] = routePrefix;
        $[28] = router;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    const t23 = isAr ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel";
    let t24;
    if ($[30] !== isCreating || $[31] !== t22 || $[32] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: t22,
            disabled: isCreating,
            className: "px-6 py-2.5 h-11 text-sm font-semibold rounded-xl border-gray-200 dark:border-neutral-700 cursor-pointer",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[30] = isCreating;
        $[31] = t22;
        $[32] = t23;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"];
    const t25 = "button";
    const t26 = "bg-teal-700 hover:bg-teal-800 text-white px-8 py-2.5 h-11 text-sm font-bold rounded-xl shadow-xs gap-2 cursor-pointer";
    const t27 = handleSubmit(onSubmit, onInvalid);
    let t28;
    if ($[34] !== isCreating) {
        t28 = isCreating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 538,
            columnNumber: 25
        }, this);
        $[34] = isCreating;
        $[35] = t28;
    } else {
        t28 = $[35];
    }
    const t29 = isCreating ? isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0646\u0634\u0631..." : "Publishing..." : isAr ? "\u0646\u0634\u0631 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Publish Ad";
    let t30;
    if ($[36] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[36] = t29;
        $[37] = t30;
    } else {
        t30 = $[37];
    }
    let t31;
    if ($[38] !== T0 || $[39] !== isCreating || $[40] !== t27 || $[41] !== t28 || $[42] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            type: t25,
            className: t26,
            onClick: t27,
            disabled: isCreating,
            children: [
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[38] = T0;
        $[39] = isCreating;
        $[40] = t27;
        $[41] = t28;
        $[42] = t30;
        $[43] = t31;
    } else {
        t31 = $[43];
    }
    let t32;
    if ($[44] !== t24 || $[45] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t21,
            children: [
                t24,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 567,
            columnNumber: 11
        }, this);
        $[44] = t24;
        $[45] = t31;
        $[46] = t32;
    } else {
        t32 = $[46];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
        ...methods,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-6 max-w-6xl mx-auto space-y-6",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormErrorAlert"], {
                            message: errors.root?.server?.message
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
                            lineNumber: 574,
                            columnNumber: 125
                        }, this),
                        t15,
                        t16,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdCreativeContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdCreativeContentCard"], {
                            adImagePreview: adImagePreview,
                            handleImageUpload: handleImageUpload,
                            handleRemoveImage: handleRemoveImage
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
                            lineNumber: 574,
                            columnNumber: 192
                        }, this),
                        t17,
                        t18,
                        t19,
                        t20,
                        t32
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
                    lineNumber: 574,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 574,
            columnNumber: 37
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
        lineNumber: 574,
        columnNumber: 10
    }, this);
}
_s(CreateAdForm, "+AYbiF7rqeeY+JVysNOrp6sd+5I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$form$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = CreateAdForm;
function _CreateAdFormOnSubmitNormalizeLocation(loc) {
    const l = (loc || "").toLowerCase().trim().replace(/\s+/g, "_");
    if (l === "home") {
        return "home";
    }
    if (l === "home_top" || l === "web_home") {
        return "home_top";
    }
    if (l === "home_bottom") {
        return "home_bottom";
    }
    if (l === "featured_cards") {
        return "featured_cards";
    }
    if (l === "project_listing" || l === "explore_projects" || l === "projects") {
        return "project_listing";
    }
    if (l === "unit_listing" || l === "units" || l === "property_listing" || l === "explore_properties" || l === "properties") {
        return "unit_listing";
    }
    if (l === "developer_listing" || l === "explore_developers" || l === "developers") {
        return "developer_listing";
    }
    if (l === "expert_listing" || l === "explore_experts" || l === "experts") {
        return "expert_listing";
    }
    if (l === "podcast_listing" || l === "podcast" || l === "podcasts") {
        return "podcast_listing";
    }
    return l;
}
var _c;
__turbopack_context__.k.register(_c, "CreateAdForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/ads/create/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateAdPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$ads$2f$create$2f$CreateAdForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/ads/create/CreateAdForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CreateAdPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "146ed0b48ca1b0252b605f757efd2fcd5f63f6cd4462f611223f4a8e85b81f91") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "146ed0b48ca1b0252b605f757efd2fcd5f63f6cd4462f611223f4a8e85b81f91";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    let t0;
    if ($[1] !== routePrefix) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$ads$2f$create$2f$CreateAdForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            routePrefix: routePrefix
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/page.client.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = routePrefix;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
}
_s(CreateAdPage, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = CreateAdPage;
var _c;
__turbopack_context__.k.register(_c, "CreateAdPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_466ea628._.js.map