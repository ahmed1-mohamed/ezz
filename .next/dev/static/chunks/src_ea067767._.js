(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function useAdActions() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "2a5aeac2d8e258e983fa8dae5602bc414ddfaeb2c2c2b709606129ab5728b941") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a5aeac2d8e258e983fa8dae5602bc414ddfaeb2c2c2b709606129ab5728b941";
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
    if ($[6] !== t) {
        t2 = (error)=>{
            const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractErrorMessage"])(error, t("ads.messages.createFailed"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
                id: "ad-action-toast"
            });
        };
        $[6] = t;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== t0 || $[9] !== t1 || $[10] !== t2) {
        t3 = {
            mutationFn: t0,
            onSuccess: t1,
            onError: t2
        };
        $[8] = t0;
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t3);
    let t4;
    if ($[12] !== session?.user?.accessToken) {
        t4 = async (t5)=>{
            const { adId, formData: formData_0 } = t5;
            const token_0 = session?.user?.accessToken;
            if (!token_0) {
                throw new Error("Not authenticated");
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].updateAd(adId, formData_0, token_0);
        };
        $[12] = session?.user?.accessToken;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== queryClient || $[15] !== t) {
        t5 = async ()=>{
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
        $[14] = queryClient;
        $[15] = t;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] !== t) {
        t6 = (error_0)=>{
            const errorMessage_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractErrorMessage"])(error_0, t("ads.messages.updateFailed"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage_0, {
                id: "ad-action-toast"
            });
        };
        $[17] = t;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== t4 || $[20] !== t5 || $[21] !== t6) {
        t7 = {
            mutationFn: t4,
            onSuccess: t5,
            onError: t6
        };
        $[19] = t4;
        $[20] = t5;
        $[21] = t6;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t7);
    let t8;
    if ($[23] !== session?.user?.accessToken) {
        t8 = async (adId_0)=>{
            const token_1 = session?.user?.accessToken;
            if (!token_1) {
                throw new Error("Not authenticated");
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].deleteAd(adId_0);
        };
        $[23] = session?.user?.accessToken;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    let t9;
    if ($[25] !== queryClient) {
        t9 = async (deletedAdId)=>{
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
        $[25] = queryClient;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] !== queryClient || $[28] !== t) {
        t10 = (error_1, _vars, context)=>{
            if (context?.previousAdsQueries) {
                context.previousAdsQueries.forEach({
                    "useAdActions[<anonymous> > context.previousAdsQueries.forEach()]": (t11)=>{
                        const [queryKey, data] = t11;
                        queryClient.setQueryData(queryKey, data);
                    }
                }["useAdActions[<anonymous> > context.previousAdsQueries.forEach()]"]);
            }
            const errorMessage_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractErrorMessage"])(error_1, t("ads.messages.deleteFailed"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage_1, {
                id: "ad-action-toast"
            });
        };
        $[27] = queryClient;
        $[28] = t;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== t) {
        t11 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("ads.messages.deleteSuccess"), {
                id: "ad-action-toast"
            });
        };
        $[30] = t;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] !== queryClient) {
        t12 = async ()=>{
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
        $[32] = queryClient;
        $[33] = t12;
    } else {
        t12 = $[33];
    }
    let t13;
    if ($[34] !== t10 || $[35] !== t11 || $[36] !== t12 || $[37] !== t8 || $[38] !== t9) {
        t13 = {
            mutationFn: t8,
            onMutate: t9,
            onError: t10,
            onSuccess: t11,
            onSettled: t12
        };
        $[34] = t10;
        $[35] = t11;
        $[36] = t12;
        $[37] = t8;
        $[38] = t9;
        $[39] = t13;
    } else {
        t13 = $[39];
    }
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t13);
    let t14;
    if ($[40] !== session?.user?.accessToken) {
        t14 = async (t15)=>{
            const { adId: adId_1, status } = t15;
            const token_2 = session?.user?.accessToken;
            if (!token_2) {
                throw new Error("Not authenticated");
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].toggleStatus(adId_1, status);
        };
        $[40] = session?.user?.accessToken;
        $[41] = t14;
    } else {
        t14 = $[41];
    }
    let t15;
    if ($[42] !== queryClient) {
        t15 = async (t16)=>{
            const { adId: adId_2, status: status_0 } = t16;
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
        $[42] = queryClient;
        $[43] = t15;
    } else {
        t15 = $[43];
    }
    let t16;
    if ($[44] !== queryClient || $[45] !== t) {
        t16 = (error_2, _vars_0, context_0)=>{
            if (context_0?.previousAdsQueries) {
                context_0.previousAdsQueries.forEach({
                    "useAdActions[<anonymous> > context_0.previousAdsQueries.forEach()]": (t17)=>{
                        const [queryKey_0, data_0] = t17;
                        queryClient.setQueryData(queryKey_0, data_0);
                    }
                }["useAdActions[<anonymous> > context_0.previousAdsQueries.forEach()]"]);
            }
            const errorMessage_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractErrorMessage"])(error_2, t("ads.messages.statusUpdateFailed"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage_2, {
                id: "ad-action-toast"
            });
        };
        $[44] = queryClient;
        $[45] = t;
        $[46] = t16;
    } else {
        t16 = $[46];
    }
    let t17;
    if ($[47] !== t) {
        t17 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("ads.messages.statusUpdateSuccess"), {
                id: "ad-action-toast"
            });
        };
        $[47] = t;
        $[48] = t17;
    } else {
        t17 = $[48];
    }
    let t18;
    if ($[49] !== queryClient) {
        t18 = async ()=>{
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
        $[49] = queryClient;
        $[50] = t18;
    } else {
        t18 = $[50];
    }
    let t19;
    if ($[51] !== t14 || $[52] !== t15 || $[53] !== t16 || $[54] !== t17 || $[55] !== t18) {
        t19 = {
            mutationFn: t14,
            onMutate: t15,
            onError: t16,
            onSuccess: t17,
            onSettled: t18
        };
        $[51] = t14;
        $[52] = t15;
        $[53] = t16;
        $[54] = t17;
        $[55] = t18;
        $[56] = t19;
    } else {
        t19 = $[56];
    }
    const toggleStatusMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t19);
    let t20;
    if ($[57] !== createMutation.isPending || $[58] !== createMutation.mutateAsync || $[59] !== deleteMutation.isPending || $[60] !== deleteMutation.mutateAsync || $[61] !== toggleStatusMutation.isPending || $[62] !== toggleStatusMutation.mutateAsync || $[63] !== updateMutation.isPending || $[64] !== updateMutation.mutateAsync) {
        t20 = {
            createAd: createMutation.mutateAsync,
            updateAd: updateMutation.mutateAsync,
            deleteAd: deleteMutation.mutateAsync,
            toggleAdStatus: toggleStatusMutation.mutateAsync,
            isCreating: createMutation.isPending,
            isUpdating: updateMutation.isPending,
            isDeleting: deleteMutation.isPending,
            isTogglingStatus: toggleStatusMutation.isPending
        };
        $[57] = createMutation.isPending;
        $[58] = createMutation.mutateAsync;
        $[59] = deleteMutation.isPending;
        $[60] = deleteMutation.mutateAsync;
        $[61] = toggleStatusMutation.isPending;
        $[62] = toggleStatusMutation.mutateAsync;
        $[63] = updateMutation.isPending;
        $[64] = updateMutation.mutateAsync;
        $[65] = t20;
    } else {
        t20 = $[65];
    }
    return t20;
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
function AdBasicInfoCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "ef6a8f4d515d61c31a130a1213efaf3552ce760b020440adaea689f6702ac6c5") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ef6a8f4d515d61c31a130a1213efaf3552ce760b020440adaea689f6702ac6c5";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { register, control, formState: t0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t0;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t1);
    const [ownerType, setOwnerType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("admin");
    const t2 = isAr ? "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629" : "Basic Information";
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
                children: t2
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
                lineNumber: 46,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 *" : "Ad Name *";
    let t5;
    if ($[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-2 font-semibold text-sm text-gray-900 dark:text-gray-100",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = isAr ? "\u0645\u062B\u0627\u0644: \u062D\u0645\u0644\u0629 \u0625\u0639\u0645\u0627\u0631 \u0627\u0644\u0635\u064A\u0641\u064A\u0629" : "e.g., Luxury Beachfront Villas Campaign";
    const t7 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Name is required";
    let t8;
    if ($[7] !== isAr) {
        t8 = (val)=>val && val.trim().length >= 2 || (isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062D\u0631\u0641\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644" : "Ad Name must be at least 2 characters");
        $[7] = isAr;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] !== register || $[10] !== t7 || $[11] !== t8) {
        t9 = register("campaignName", {
            required: t7,
            validate: t8
        });
        $[9] = register;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const t10 = errors.campaignName ? "border-red-500 focus:ring-2 focus:ring-red-500/30 focus:border-red-500" : "border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500";
    let t11;
    if ($[13] !== t10) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full bg-white dark:bg-neutral-800/60 border h-11 text-sm rounded-lg px-3 outline-none transition-colors", t10);
        $[13] = t10;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t11 || $[16] !== t6 || $[17] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            placeholder: t6,
            ...t9,
            className: t11
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[15] = t11;
        $[16] = t6;
        $[17] = t9;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== errors.campaignName) {
        t13 = errors.campaignName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 font-medium",
            children: errors.campaignName.message
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 105,
            columnNumber: 34
        }, this);
        $[19] = errors.campaignName;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t12 || $[22] !== t13 || $[23] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t13;
        $[23] = t5;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    const t15 = isAr ? "\u0645\u0627\u0644\u0643 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Owner";
    let t16;
    if ($[25] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "font-semibold text-sm text-gray-900 dark:text-gray-100",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[25] = t15;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "AdBasicInfoCard[<button>.onClick]": ()=>setOwnerType("admin")
        })["AdBasicInfoCard[<button>.onClick]"];
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    const t18 = ownerType === "admin" ? "bg-teal-700 text-white border-teal-700 shadow-sm" : "bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border-gray-200 dark:border-neutral-800 hover:border-gray-300";
    let t19;
    if ($[28] !== t18) {
        t19 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-center", t18);
        $[28] = t18;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    const t20 = isAr ? "\u0627\u0644\u0623\u062F\u0645\u0646" : "Admin";
    let t21;
    if ($[30] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-bold text-base",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[30] = t20;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    const t22 = ownerType === "admin" ? "text-teal-100" : "text-gray-500 dark:text-neutral-400";
    let t23;
    if ($[32] !== t22) {
        t23 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs mt-0.5", t22);
        $[32] = t22;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    const t24 = isAr ? "\u0623\u0648\u0644\u0648\u064A\u0629 \u0623\u0639\u0644\u0649 \u062F\u0627\u0626\u0645\u0627\u064B" : "Always highest priority";
    let t25;
    if ($[34] !== t23 || $[35] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t23,
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[34] = t23;
        $[35] = t24;
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] !== t19 || $[38] !== t21 || $[39] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t17,
            className: t19,
            children: [
                t21,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[37] = t19;
        $[38] = t21;
        $[39] = t25;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "AdBasicInfoCard[<button>.onClick]": ()=>setOwnerType("developer")
        })["AdBasicInfoCard[<button>.onClick]"];
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    const t28 = ownerType === "developer" ? "bg-teal-700 text-white border-teal-700 shadow-sm" : "bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border-gray-200 dark:border-neutral-800 hover:border-gray-300";
    let t29;
    if ($[42] !== t28) {
        t29 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-center", t28);
        $[42] = t28;
        $[43] = t29;
    } else {
        t29 = $[43];
    }
    const t30 = isAr ? "\u0645\u0637\u0648\u0631 \u0639\u0642\u0627\u0631\u064A" : "Real Estate Developer";
    let t31;
    if ($[44] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-bold text-base",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[44] = t30;
        $[45] = t31;
    } else {
        t31 = $[45];
    }
    const t32 = ownerType === "developer" ? "text-teal-100" : "text-gray-500 dark:text-neutral-400";
    let t33;
    if ($[46] !== t32) {
        t33 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs mt-0.5", t32);
        $[46] = t32;
        $[47] = t33;
    } else {
        t33 = $[47];
    }
    const t34 = isAr ? "\u064A\u0638\u0647\u0631 \u0628\u0639\u062F \u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u062F\u0645\u0646" : "Appears after admin ads";
    let t35;
    if ($[48] !== t33 || $[49] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t33,
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[48] = t33;
        $[49] = t34;
        $[50] = t35;
    } else {
        t35 = $[50];
    }
    let t36;
    if ($[51] !== t29 || $[52] !== t31 || $[53] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t27,
            className: t29,
            children: [
                t31,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[51] = t29;
        $[52] = t31;
        $[53] = t35;
        $[54] = t36;
    } else {
        t36 = $[54];
    }
    let t37;
    if ($[55] !== t26 || $[56] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [
                t26,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[55] = t26;
        $[56] = t36;
        $[57] = t37;
    } else {
        t37 = $[57];
    }
    let t38;
    if ($[58] !== t16 || $[59] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t16,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[58] = t16;
        $[59] = t37;
        $[60] = t38;
    } else {
        t38 = $[60];
    }
    let t39;
    if ($[61] !== t14 || $[62] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-6",
            children: [
                t14,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[61] = t14;
        $[62] = t38;
        $[63] = t39;
    } else {
        t39 = $[63];
    }
    let t40;
    if ($[64] !== t3 || $[65] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-basic-info-card",
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t3,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdBasicInfoCard.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[64] = t3;
        $[65] = t39;
        $[66] = t40;
    } else {
        t40 = $[66];
    }
    return t40;
}
_s(AdBasicInfoCard, "3jaXeQIIoApe4Qg/zScSlos3utk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm shadow-none ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 dark:text-slate-200 text-left [&>span]:truncate [&>span]:block [&>span]:w-full", error && "border-red-500 focus:ring-red-500 text-red-900", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50 shrink-0 ml-2"
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-gray-100 dark:focus:bg-slate-700 focus:text-accent-foreground dark:focus:text-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-slate-200", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(76);
    if ($[0] !== "4203600582bf0f39f56946f8ab548c30129334968cd786bafe6c29423a6e4fa9") {
        for(let $i = 0; $i < 76; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4203600582bf0f39f56946f8ab548c30129334968cd786bafe6c29423a6e4fa9";
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
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            {
                value: "banner",
                title: "Banner",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"]
            },
            {
                value: "card",
                title: "Card",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
            },
            {
                value: "native",
                title: "Native",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__["LayoutTemplate"]
            },
            {
                value: "pop_up",
                title: "Pop-up",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__["AppWindow"]
            }
        ];
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const AD_TYPES = t7;
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = [
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
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const PLATFORM_OPTIONS = t8;
    let t9;
    if ($[11] !== clearErrors || $[12] !== setValue) {
        t9 = ({
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
        $[11] = clearErrors;
        $[12] = setValue;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const selectLocation = t9;
    let t10;
    if ($[14] !== isAr || $[15] !== selectedPlatform) {
        t10 = ({
            "AdPlacementCard[getPlatformBadge]": ()=>{
                if (selectedPlatform === "web") {
                    return isAr ? "\u0648\u064A\u0628" : "Web";
                }
                return isAr ? "\u062A\u0637\u0628\u064A\u0642" : "App";
            }
        })["AdPlacementCard[getPlatformBadge]"];
        $[14] = isAr;
        $[15] = selectedPlatform;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    const getPlatformBadge = t10;
    const t11 = isAr ? "\u0646\u0648\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Type";
    let t12;
    if ($[17] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    const t13 = isAr ? "\u0644\u0643\u0644 \u0646\u0648\u0639 \u0623\u0645\u0627\u0643\u0646 \u0639\u0631\u0636 \u0648\u062D\u0642\u0648\u0644 \u0645\u062E\u062A\u0644\u0641\u0629" : "Each type has different display placements and fields";
    let t14;
    if ($[19] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[19] = t13;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t12 || $[22] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-4",
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t14;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== selectedType || $[25] !== setValue) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3.5 sm:p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer space-y-2", isSelected ? "border-teal-600 bg-teal-50/80 dark:bg-teal-950/40 text-teal-950 dark:text-teal-100 ring-2 ring-teal-600 shadow-xs" : "border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-gray-300 dark:hover:border-neutral-700 text-gray-700 dark:text-gray-300"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-lg", isSelected ? "text-teal-600 dark:text-teal-400" : "text-gray-400 dark:text-neutral-500"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5 sm:w-6 sm:h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                        lineNumber: 281,
                                        columnNumber: 628
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 281,
                                    columnNumber: 501
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-sm sm:text-base text-gray-900 dark:text-white",
                                        children: adType.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                        lineNumber: 281,
                                        columnNumber: 681
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 281,
                                    columnNumber: 676
                                }, this)
                            ]
                        }, adType.value, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 276,
                            columnNumber: 20
                        }, this);
                    }
                }["AdPlacementCard[AD_TYPES.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                lineNumber: 272,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[24] = selectedType;
        $[25] = setValue;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== t15 || $[28] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[27] = t15;
        $[28] = t16;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    const t18 = isAr ? "\u0627\u0644\u0645\u0646\u0635\u0629" : "Platform";
    let t19;
    if ($[30] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                lineNumber: 302,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[30] = t18;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== isAr || $[33] !== selectedPlatform || $[34] !== setValue) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
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
                            lineNumber: 313,
                            columnNumber: 20
                        }, this);
                    }
                }["AdPlacementCard[PLATFORM_OPTIONS.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                lineNumber: 310,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[32] = isAr;
        $[33] = selectedPlatform;
        $[34] = setValue;
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== t19 || $[37] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = t20;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    const t22 = isAr ? "\u0645\u0643\u0627\u0646 \u0627\u0644\u0639\u0631\u0636" : "Display Placement";
    let t23;
    if ($[39] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[39] = t22;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[41] = t24;
    } else {
        t24 = $[41];
    }
    let t25;
    if ($[42] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[42] = t23;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    const t26 = isAr ? "\u0627\u0644\u0623\u0645\u0627\u0643\u0646 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u062A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0629 \u0648\u0646\u0648\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646. \u0644\u0643\u0644 \u0645\u0643\u0627\u0646 \u0633\u0639\u0629 \u0642\u0635\u0648\u0649 \u2014 \u0639\u0646\u062F \u0627\u0645\u062A\u0644\u0627\u0626\u0647 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u064A\u0647." : "Available locations depend on platform and ad type. Each place has a maximum capacity.";
    let t27;
    if ($[44] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[44] = t26;
        $[45] = t27;
    } else {
        t27 = $[45];
    }
    let t28;
    if ($[46] !== errors.location || $[47] !== isAr) {
        t28 = errors.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 font-semibold mt-1",
            children: String(errors.location.message || (isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0643\u0627\u0646 \u0627\u0644\u0639\u0631\u0636" : "Please select a display location"))
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 372,
            columnNumber: 30
        }, this);
        $[46] = errors.location;
        $[47] = isAr;
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] !== t25 || $[50] !== t27 || $[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-4",
            children: [
                t25,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[49] = t25;
        $[50] = t27;
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== getPlatformBadge || $[54] !== isAr || $[55] !== selectLocation || $[56] !== selectedLocations) {
        t30 = LOCATION_OPTIONS.map({
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
                                            lineNumber: 404,
                                            columnNumber: 583
                                        }, this),
                                        isSelected_1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 404,
                                            columnNumber: 645
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 404,
                                    columnNumber: 481
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 dark:text-neutral-400 font-normal",
                                    children: isAr ? loc.descAr : loc.descEn
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 404,
                                    columnNumber: 723
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
                                        children: isAr ? `متاح ${loc.available} من ${loc.total}` : `${loc.available} of ${loc.total} available`
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                        lineNumber: 404,
                                        columnNumber: 839
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 404,
                                    columnNumber: 834
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 404,
                            columnNumber: 441
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 flex flex-col items-end gap-1.5 ms-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 font-mono font-medium",
                                    children: loc.id
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 404,
                                    columnNumber: 1184
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300",
                                    children: getPlatformBadge()
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 404,
                                    columnNumber: 1336
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 404,
                            columnNumber: 1121
                        }, this)
                    ]
                }, loc.id, true, {
                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                    lineNumber: 402,
                    columnNumber: 16
                }, this);
            }
        }["AdPlacementCard[LOCATION_OPTIONS.map()]"]);
        $[53] = getPlatformBadge;
        $[54] = isAr;
        $[55] = selectLocation;
        $[56] = selectedLocations;
        $[57] = t30;
    } else {
        t30 = $[57];
    }
    let t31;
    if ($[58] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[58] = t30;
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    let t32;
    if ($[60] !== isAr || $[61] !== selectedType || $[62] !== setValue || $[63] !== t || $[64] !== watch) {
        t32 = selectedType === "pop_up" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4 bg-gray-50 dark:bg-neutral-800/40 rounded-xl border border-gray-100 dark:border-neutral-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "flex items-center gap-1 mb-1.5 font-medium text-xs text-gray-700 dark:text-gray-300",
                            children: [
                                t("ads.createStepOne.popUpDimensions") || (isAr ? "\u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0645\u0646\u0628\u062B\u0642\u0629" : "Width"),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    className: "h-3.5 w-3.5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 425,
                                    columnNumber: 492
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 425,
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
                                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0631\u0636"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                        lineNumber: 429,
                                        columnNumber: 175
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 429,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "small",
                                            children: "صغير (Small)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 429,
                                            columnNumber: 293
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "medium",
                                            children: "متوسط (Medium)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 429,
                                            columnNumber: 344
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "large",
                                            children: "كبير (Large)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 429,
                                            columnNumber: 398
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "full",
                                            children: "كامل العرض (Full Width)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 429,
                                            columnNumber: 449
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 429,
                                    columnNumber: 278
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 425,
                            columnNumber: 552
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                    lineNumber: 425,
                    columnNumber: 196
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "flex items-center gap-1 mb-1.5 font-medium text-xs text-gray-700 dark:text-gray-300",
                            children: [
                                t("ads.createStepOne.position") || (isAr ? "\u0627\u0644\u0645\u0648\u0636\u0639" : "Position"),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    className: "h-3.5 w-3.5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 429,
                                    columnNumber: 747
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 429,
                            columnNumber: 546
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
                                        placeholder: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0636\u0639"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                        lineNumber: 433,
                                        columnNumber: 175
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 433,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_left",
                                            children: "أعلى اليسار (Top Left)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 433,
                                            columnNumber: 299
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "top_right",
                                            children: "أعلى اليمين (Top Right)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 433,
                                            columnNumber: 363
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "center",
                                            children: "المنتصف (Center)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 433,
                                            columnNumber: 429
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_left",
                                            children: "أسفل اليسار (Bottom Left)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 433,
                                            columnNumber: 485
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "bottom_right",
                                            children: "أسفل اليمين (Bottom Right)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                            lineNumber: 433,
                                            columnNumber: 555
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                                    lineNumber: 433,
                                    columnNumber: 284
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                            lineNumber: 429,
                            columnNumber: 807
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
                    lineNumber: 429,
                    columnNumber: 541
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 425,
            columnNumber: 40
        }, this);
        $[60] = isAr;
        $[61] = selectedType;
        $[62] = setValue;
        $[63] = t;
        $[64] = watch;
        $[65] = t32;
    } else {
        t32 = $[65];
    }
    let t33;
    if ($[66] !== t31 || $[67] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-4",
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[66] = t31;
        $[67] = t32;
        $[68] = t33;
    } else {
        t33 = $[68];
    }
    let t34;
    if ($[69] !== t29 || $[70] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-placement-card",
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t29,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[69] = t29;
        $[70] = t33;
        $[71] = t34;
    } else {
        t34 = $[71];
    }
    let t35;
    if ($[72] !== t17 || $[73] !== t21 || $[74] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t17,
                t21,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdPlacementCard.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[72] = t17;
        $[73] = t21;
        $[74] = t34;
        $[75] = t35;
    } else {
        t35 = $[75];
    }
    return t35;
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function AdCreativeContentCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "de1b047ca34ad366485f0197ba02d2556db747090bdddf54abc4281aaabd0b2a") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "de1b047ca34ad366485f0197ba02d2556db747090bdddf54abc4281aaabd0b2a";
    }
    const { adImagePreview, handleImageUpload, handleRemoveImage } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
            lineNumber: 51,
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
            lineNumber: 59,
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
                lineNumber: 66,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 66,
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
    let t10;
    if ($[10] !== adImagePreview || $[11] !== handleRemoveImage || $[12] !== isAr || $[13] !== setValue) {
        t10 = adImagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group max-w-md w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: adImagePreview,
                    alt: "Ad Preview",
                    className: "max-h-60 mx-auto object-contain rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 83,
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
                    className: "absolute top-2 right-2 p-1.5 rounded-full bg-red-600 text-white opacity-90 hover:opacity-100 transition-opacity shadow-md cursor-pointer",
                    title: isAr ? "\u062D\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629" : "Remove Image",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                        lineNumber: 91,
                        columnNumber: 292
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 83,
                    columnNumber: 233
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 83,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 rounded-full bg-gray-50 dark:bg-neutral-800 text-gray-400 mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                        className: "w-8 h-8 stroke-[1.5]"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                        lineNumber: 91,
                        columnNumber: 421
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 91,
                    columnNumber: 337
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200",
                    children: isAr ? "\u0627\u0636\u063A\u0637 \u0644\u0644\u0631\u0641\u0639 \u0623\u0648 \u0627\u0633\u062D\u0628 \u0648\u0623\u0641\u0644\u062A" : "Click to upload or drag and drop"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 91,
                    columnNumber: 473
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-gray-400 dark:text-neutral-500 mt-1",
                    children: isAr ? "PNG, JPG (\u0646\u0633\u0628\u0629 16:9 \u0645\u0641\u0636\u0644\u0629)" : "PNG, JPG (16:9 aspect ratio preferred)"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
                    lineNumber: 91,
                    columnNumber: 732
                }, this)
            ]
        }, void 0, true);
        $[10] = adImagePreview;
        $[11] = handleRemoveImage;
        $[12] = isAr;
        $[13] = setValue;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== handleImageUpload) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "ad-image-upload-input",
            type: "file",
            accept: "image/png, image/jpeg, image/webp",
            className: "hidden",
            onChange: handleImageUpload
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[15] = handleImageUpload;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10 || $[18] !== t11 || $[19] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            onClick: _AdCreativeContentCardDivOnClick,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
        $[19] = t9;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== imageError) {
        t13 = imageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 font-semibold mt-2",
            children: imageError
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 120,
            columnNumber: 25
        }, this);
        $[21] = imageError;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t12 || $[24] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t13;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t14 || $[27] !== t3 || $[28] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-creative-card",
            className: t3,
            children: [
                t7,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdCreativeContentCard.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t3;
        $[28] = t7;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    return t15;
}
_s(AdCreativeContentCard, "D8HWN6DJQ5dyXo2DXdNlDb7bIXg=", false, function() {
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
function AdNativeContentCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "a7f8420b79be41215cba0b8c41525067115407ad2beab94136c466aba1da122a") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7f8420b79be41215cba0b8c41525067115407ad2beab94136c466aba1da122a";
    }
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
                lineNumber: 41,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 41,
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
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = isAr ? "\u0639\u0646\u0648\u0627\u0646 \u062C\u0630\u0651\u0627\u0628 \u0644\u0644\u0625\u0639\u0644\u0627\u0646" : "Catchy headline for the ad";
    const t6 = isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Title is required";
    let t7;
    if ($[5] !== register || $[6] !== t6) {
        t7 = register("title", {
            required: t6
        });
        $[5] = register;
        $[6] = t6;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const t8 = errors.title ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700";
    let t9;
    if ($[8] !== t8) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white dark:bg-neutral-800/60 border h-11 text-xs sm:text-sm rounded-lg", t8);
        $[8] = t8;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] !== t5 || $[11] !== t7 || $[12] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t5,
            ...t7,
            className: t9
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 80,
            columnNumber: 11
        }, this);
        $[10] = t5;
        $[11] = t7;
        $[12] = t9;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== errors.title) {
        t11 = errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 font-medium",
            children: errors.title.message
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 90,
            columnNumber: 27
        }, this);
        $[14] = errors.title;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t10 || $[17] !== t11 || $[18] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
        $[18] = t4;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    const t13 = isAr ? "\u0627\u0644\u0648\u0635\u0641" : "Description";
    let t14;
    if ($[20] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-2 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[20] = t13;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    const t15 = isAr ? "\u0648\u0635\u0641 \u0645\u062E\u062A\u0635\u0631 \u064A\u0638\u0647\u0631 \u0623\u0633\u0641\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646" : "Short description displayed below the headline";
    let t16;
    if ($[22] !== register) {
        t16 = register("description");
        $[22] = register;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== t15 || $[25] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t15,
            ...t16,
            className: "bg-white dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 h-11 text-xs sm:text-sm rounded-lg"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t16;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== t14 || $[28] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[27] = t14;
        $[28] = t17;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    const t19 = isAr ? "\u0646\u0635 \u0632\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 (CTA)" : "Call-to-Action Button Text (CTA)";
    let t20;
    if ($[30] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-2 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[30] = t19;
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    const t21 = isAr ? "\u0645\u062B\u0627\u0644: \u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F" : "e.g., Learn More";
    let t22;
    if ($[32] !== register) {
        t22 = register("ctaButtonText");
        $[32] = register;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    let t23;
    if ($[34] !== t21 || $[35] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: t21,
            ...t22,
            className: "bg-white dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 h-11 text-xs sm:text-sm rounded-lg"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[34] = t21;
        $[35] = t22;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] !== t20 || $[38] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[37] = t20;
        $[38] = t23;
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    let t25;
    if ($[40] !== t12 || $[41] !== t18 || $[42] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-5",
            children: [
                t12,
                t18,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[40] = t12;
        $[41] = t18;
        $[42] = t24;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] !== t2 || $[45] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-native-card",
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl animate-in fade-in-50 duration-200",
            children: [
                t2,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdNativeContentCard.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[44] = t2;
        $[45] = t25;
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    return t26;
}
_s(AdNativeContentCard, "AlDgQ0lv7TLyhbj5gVFu19dgX/Q=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-countries-select.ts [app-client] (ecmascript)");
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
function SearchableSelect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "2bf5f312bb5356ffbae833d00cd073b1418a5b614bea6717c5f0e40df3e07527") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bf5f312bb5356ffbae833d00cd073b1418a5b614bea6717c5f0e40df3e07527";
    }
    const { value, onChange, options, placeholder, searchPlaceholder, loading, emptyText, isAr, disabled } = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    bb0: {
        if (!search.trim()) {
            t1 = options;
            break bb0;
        }
        let t2;
        if ($[1] !== options || $[2] !== search) {
            const s = search.toLowerCase().trim();
            t2 = options.filter({
                "SearchableSelect[options.filter()]": (opt)=>opt.name.toLowerCase().includes(s) || opt.id.toString().includes(s)
            }["SearchableSelect[options.filter()]"]);
            $[1] = options;
            $[2] = search;
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
            lineNumber: 127,
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
            lineNumber: 136,
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
                lineNumber: 143,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 143,
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
            lineNumber: 153,
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
            lineNumber: 169,
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
                lineNumber: 180,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 178,
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
            lineNumber: 188,
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
                    lineNumber: 197,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 197,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 197,
            columnNumber: 21
        }, this) : filteredOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-center text-xs text-gray-500",
            children: emptyText
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 197,
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
                            lineNumber: 206,
                            columnNumber: 394
                        }, this),
                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 ms-2"
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 206,
                            columnNumber: 455
                        }, this)
                    ]
                }, opt_1.id, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 200,
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
            lineNumber: 221,
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
            lineNumber: 229,
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
            lineNumber: 238,
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
_s(SearchableSelect, "OZaGxERzP9ofb5uNopqkD73Mc9A=");
_c = SearchableSelect;
function AdTargetLinksCard(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(167);
    if ($[0] !== "2bf5f312bb5356ffbae833d00cd073b1418a5b614bea6717c5f0e40df3e07527") {
        for(let $i = 0; $i < 167; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bf5f312bb5356ffbae833d00cd073b1418a5b614bea6717c5f0e40df3e07527";
    }
    const { id: t1 } = t0;
    const id = t1 === undefined ? "" : t1;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { register, control, setValue, clearErrors, formState: t2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { errors } = t2;
    const country = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "country"
    }) || "Egypt";
    let t3;
    if ($[1] !== control) {
        t3 = {
            control,
            name: "developerId"
        };
        $[1] = control;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const developerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t3);
    const linkTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "linkTo"
    }) || "PROJECTS";
    let t4;
    if ($[3] !== control) {
        t4 = {
            control,
            name: "projectId"
        };
        $[3] = control;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const projectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(t4);
    const [openDevPopover, setOpenDevPopover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [devSearchInput, setDevSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { developers, projects, properties, projectsLoading, propertiesLoading, developersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$edit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdEditData"])(id, true, country, developerId, linkTo);
    let t5;
    bb0: {
        if (!devSearchInput.trim()) {
            t5 = developers;
            break bb0;
        }
        let t6;
        if ($[5] !== devSearchInput || $[6] !== developers) {
            const s = devSearchInput.toLowerCase().trim();
            t6 = developers.filter({
                "AdTargetLinksCard[developers.filter()]": (d)=>d.name.toLowerCase().includes(s) || d.id.toString().includes(s)
            }["AdTargetLinksCard[developers.filter()]"]);
            $[5] = devSearchInput;
            $[6] = developers;
            $[7] = t6;
        } else {
            t6 = $[7];
        }
        t5 = t6;
    }
    const filteredDevs = t5;
    let t6;
    if ($[8] !== developerId || $[9] !== developers) {
        let t7;
        if ($[11] !== developerId) {
            t7 = ({
                "AdTargetLinksCard[developers.find()]": (d_0)=>d_0.id?.toString() === developerId?.toString()
            })["AdTargetLinksCard[developers.find()]"];
            $[11] = developerId;
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        t6 = developers.find(t7);
        $[8] = developerId;
        $[9] = developers;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const selectedDeveloper = t6;
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
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
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const DESTINATIONS = t7;
    const { countries, isLoading: isCountriesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$countries$2d$select$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountriesSelect"])();
    let t8;
    if ($[14] !== clearErrors || $[15] !== setValue) {
        t8 = ({
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
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    const handleDestinationChange = t8;
    const t9 = errors.developerId ? "border-red-400 dark:border-red-900/60" : "border-gray-200 dark:border-neutral-800";
    let t10;
    if ($[17] !== t9) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shadow-sm border bg-white dark:bg-neutral-900 rounded-xl transition-colors", t9);
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "h-5 w-5 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    const t12 = isAr ? "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A" : "Select Real Estate Developer";
    let t13;
    if ($[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 436,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    const t14 = isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B \u0644\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0644\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647" : "Select a developer first to filter their projects and properties";
    let t15;
    if ($[22] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[22] = t14;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t13 || $[25] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 453,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t15;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    const t17 = isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A" : "Real Estate Developer";
    let t18;
    if ($[27] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== developers.length || $[30] !== isAr) {
        t19 = developers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-teal-600 dark:text-teal-400 font-medium",
            children: isAr ? `${developers.length} مطور متاح` : `${developers.length} developers available`
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 471,
            columnNumber: 36
        }, this);
        $[29] = developers.length;
        $[30] = isAr;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t18 || $[33] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[32] = t18;
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    const t21 = errors.developerId ? "border-red-500 ring-1 ring-red-500" : "border-gray-200 dark:border-neutral-700";
    let t22;
    if ($[35] !== t21) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full justify-between bg-white dark:bg-neutral-800 h-11 text-xs sm:text-sm font-normal rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 text-start px-3", t21);
        $[35] = t21;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    const t23 = !selectedDeveloper && "text-gray-400 dark:text-neutral-500";
    let t24;
    if ($[37] !== t23) {
        t24 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("truncate", t23);
        $[37] = t23;
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    const t25 = selectedDeveloper ? selectedDeveloper.name : developersLoading ? isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading developers..." : isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A..." : "Select Developer...";
    let t26;
    if ($[39] !== t24 || $[40] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t24,
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, this);
        $[39] = t24;
        $[40] = t25;
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    let t27;
    if ($[42] !== developersLoading) {
        t27 = developersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "h-4 w-4 shrink-0 text-gray-400 animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 517,
            columnNumber: 31
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4 shrink-0 text-gray-400 opacity-70"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 517,
            columnNumber: 101
        }, this);
        $[42] = developersLoading;
        $[43] = t27;
    } else {
        t27 = $[43];
    }
    let t28;
    if ($[44] !== t22 || $[45] !== t26 || $[46] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "outline",
                className: t22,
                children: [
                    t26,
                    t27
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                lineNumber: 525,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[44] = t22;
        $[45] = t26;
        $[46] = t27;
        $[47] = t28;
    } else {
        t28 = $[47];
    }
    let t29;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-4 w-4 text-gray-400 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        $[48] = t29;
    } else {
        t29 = $[48];
    }
    let t30;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = ({
            "AdTargetLinksCard[<input>.onChange]": (e)=>setDevSearchInput(e.target.value)
        })["AdTargetLinksCard[<input>.onChange]"];
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    const t31 = isAr ? "\u0627\u0643\u062A\u0628 \u0644\u0644\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645..." : "Type to search by name...";
    let t32;
    if ($[50] !== devSearchInput || $[51] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: devSearchInput,
            onChange: t30,
            placeholder: t31,
            className: "w-full bg-transparent border-none text-xs sm:text-sm outline-hidden text-gray-900 dark:text-white placeholder:text-gray-400",
            autoFocus: true
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 552,
            columnNumber: 11
        }, this);
        $[50] = devSearchInput;
        $[51] = t31;
        $[52] = t32;
    } else {
        t32 = $[52];
    }
    let t33;
    if ($[53] !== devSearchInput) {
        t33 = devSearchInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "AdTargetLinksCard[<button>.onClick]": ()=>setDevSearchInput("")
            }["AdTargetLinksCard[<button>.onClick]"],
            className: "text-gray-400 hover:text-gray-600 p-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-3.5 h-3.5"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                lineNumber: 563,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 561,
            columnNumber: 29
        }, this);
        $[53] = devSearchInput;
        $[54] = t33;
    } else {
        t33 = $[54];
    }
    let t34;
    if ($[55] !== t32 || $[56] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 px-3 py-2.5",
            children: [
                t29,
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 571,
            columnNumber: 11
        }, this);
        $[55] = t32;
        $[56] = t33;
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    let t35;
    if ($[58] !== developerId || $[59] !== developersLoading || $[60] !== filteredDevs || $[61] !== isAr || $[62] !== setValue) {
        t35 = developersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center p-6 text-xs text-gray-400 gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-4 h-4 animate-spin text-teal-600"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 580,
                    columnNumber: 113
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 580,
                    columnNumber: 171
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 580,
            columnNumber: 31
        }, this) : filteredDevs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-center text-xs text-gray-500",
            children: isAr ? "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0637\u0648\u0631\u064A\u0646" : "No developers found"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 580,
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
                            lineNumber: 595,
                            columnNumber: 392
                        }, this),
                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 ms-2"
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 595,
                            columnNumber: 451
                        }, this)
                    ]
                }, dev.id, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 583,
                    columnNumber: 16
                }, this);
            }
        }["AdTargetLinksCard[filteredDevs.map()]"]);
        $[58] = developerId;
        $[59] = developersLoading;
        $[60] = filteredDevs;
        $[61] = isAr;
        $[62] = setValue;
        $[63] = t35;
    } else {
        t35 = $[63];
    }
    let t36;
    if ($[64] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-64 overflow-y-auto p-1.5 space-y-0.5",
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 609,
            columnNumber: 11
        }, this);
        $[64] = t35;
        $[65] = t36;
    } else {
        t36 = $[65];
    }
    let t37;
    if ($[66] !== t34 || $[67] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
            className: "w-[var(--radix-popover-trigger-width)] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-lg z-50",
            align: "start",
            children: [
                t34,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[66] = t34;
        $[67] = t36;
        $[68] = t37;
    } else {
        t37 = $[68];
    }
    let t38;
    if ($[69] !== openDevPopover || $[70] !== t28 || $[71] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
            open: openDevPopover,
            onOpenChange: setOpenDevPopover,
            children: [
                t28,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        $[69] = openDevPopover;
        $[70] = t28;
        $[71] = t37;
        $[72] = t38;
    } else {
        t38 = $[72];
    }
    let t39;
    if ($[73] !== selectedDeveloper || $[74] !== setValue) {
        t39 = selectedDeveloper && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between px-3 py-2 rounded-lg bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 636,
                            columnNumber: 220
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold text-teal-800 dark:text-teal-200 truncate",
                            children: selectedDeveloper.name
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 636,
                            columnNumber: 291
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 636,
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
                        lineNumber: 645,
                        columnNumber: 142
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 636,
                    columnNumber: 410
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 636,
            columnNumber: 32
        }, this);
        $[73] = selectedDeveloper;
        $[74] = setValue;
        $[75] = t39;
    } else {
        t39 = $[75];
    }
    let t40;
    if ($[76] !== errors.developerId) {
        t40 = errors.developerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 font-semibold mt-1",
            children: errors.developerId.message
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 654,
            columnNumber: 33
        }, this);
        $[76] = errors.developerId;
        $[77] = t40;
    } else {
        t40 = $[77];
    }
    let t41;
    if ($[78] !== t20 || $[79] !== t38 || $[80] !== t39 || $[81] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-3",
            children: [
                t20,
                t38,
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 662,
            columnNumber: 11
        }, this);
        $[78] = t20;
        $[79] = t38;
        $[80] = t39;
        $[81] = t40;
        $[82] = t41;
    } else {
        t41 = $[82];
    }
    let t42;
    if ($[83] !== t10 || $[84] !== t16 || $[85] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-developer-card",
            className: t10,
            children: [
                t16,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 673,
            columnNumber: 11
        }, this);
        $[83] = t10;
        $[84] = t16;
        $[85] = t41;
        $[86] = t42;
    } else {
        t42 = $[86];
    }
    const t43 = errors.projectId || errors.ctaUrl ? "border-red-400 dark:border-red-900/60" : "border-gray-200 dark:border-neutral-800";
    let t44;
    if ($[87] !== t43) {
        t44 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shadow-sm border bg-white dark:bg-neutral-900 rounded-xl transition-colors", t43);
        $[87] = t43;
        $[88] = t44;
    } else {
        t44 = $[88];
    }
    const t45 = isAr ? "\u0648\u062C\u0647\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Ad Destination";
    let t46;
    if ($[89] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 693,
            columnNumber: 11
        }, this);
        $[89] = t45;
        $[90] = t46;
    } else {
        t46 = $[90];
    }
    const t47 = isAr ? "\u0645\u0627\u0630\u0627 \u064A\u062D\u062F\u062B \u0639\u0646\u062F \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u061F \u0627\u0631\u0628\u0637\u0647 \u0628\u0639\u0646\u0635\u0631 \u062F\u0627\u062E\u0644\u064A \u0623\u0648 \u0628\u0631\u0627\u0628\u0637 \u062E\u0627\u0631\u062C\u064A." : "What happens when the ad is clicked? Link it to an internal item or external link.";
    let t48;
    if ($[91] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 702,
            columnNumber: 11
        }, this);
        $[91] = t47;
        $[92] = t48;
    } else {
        t48 = $[92];
    }
    let t49;
    if ($[93] !== t46 || $[94] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: [
                t46,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 710,
            columnNumber: 11
        }, this);
        $[93] = t46;
        $[94] = t48;
        $[95] = t49;
    } else {
        t49 = $[95];
    }
    let t50;
    if ($[96] !== handleDestinationChange || $[97] !== isAr || $[98] !== linkTo) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 722,
                        columnNumber: 18
                    }, this);
                }
            }["AdTargetLinksCard[DESTINATIONS.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 719,
            columnNumber: 11
        }, this);
        $[96] = handleDestinationChange;
        $[97] = isAr;
        $[98] = linkTo;
        $[99] = t50;
    } else {
        t50 = $[99];
    }
    let t51;
    if ($[100] !== clearErrors || $[101] !== developerId || $[102] !== errors.projectId || $[103] !== isAr || $[104] !== linkTo || $[105] !== projectId || $[106] !== projects || $[107] !== projectsLoading || $[108] !== setValue) {
        t51 = linkTo === "PROJECTS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 736,
                                    columnNumber: 359
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 736,
                            columnNumber: 116
                        }, this),
                        projects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-teal-600 dark:text-teal-400 font-medium",
                            children: isAr ? `${projects.length} مشروع` : `${projects.length} projects`
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 736,
                            columnNumber: 591
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 736,
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
                    lineNumber: 736,
                    columnNumber: 743
                }, this),
                errors.projectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 font-semibold mt-1",
                    children: errors.projectId.message
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 744,
                    columnNumber: 1056
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 736,
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
        $[109] = t51;
    } else {
        t51 = $[109];
    }
    let t52;
    if ($[110] !== clearErrors || $[111] !== developerId || $[112] !== errors.projectId || $[113] !== isAr || $[114] !== linkTo || $[115] !== projectId || $[116] !== properties || $[117] !== propertiesLoading || $[118] !== setValue) {
        t52 = linkTo === "PROPERTIES" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 760,
                                    columnNumber: 405
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 760,
                            columnNumber: 118
                        }, this),
                        properties.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-teal-600 dark:text-teal-400 font-medium",
                            children: isAr ? `${properties.length} وحدة` : `${properties.length} properties`
                        }, void 0, false, {
                            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                            lineNumber: 760,
                            columnNumber: 639
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 760,
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
                    lineNumber: 760,
                    columnNumber: 796
                }, this),
                errors.projectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 font-semibold mt-1",
                    children: errors.projectId.message
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 768,
                    columnNumber: 1092
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 760,
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
        $[119] = t52;
    } else {
        t52 = $[119];
    }
    let t53;
    if ($[120] !== clearErrors || $[121] !== errors.projectId || $[122] !== isAr || $[123] !== linkTo || $[124] !== register) {
        t53 = linkTo === "EXPERT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                    className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                    children: isAr ? "\u0627\u0628\u062D\u062B \u0648\u0627\u062E\u062A\u0631 \u0627\u0644\u062E\u0628\u064A\u0631 *" : "Search & Select Expert *"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 784,
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
                    lineNumber: 784,
                    columnNumber: 290
                }, this),
                errors.projectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-red-500 font-semibold mt-1",
                    children: errors.projectId.message
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 786,
                    columnNumber: 227
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 784,
            columnNumber: 34
        }, this);
        $[120] = clearErrors;
        $[121] = errors.projectId;
        $[122] = isAr;
        $[123] = linkTo;
        $[124] = register;
        $[125] = t53;
    } else {
        t53 = $[125];
    }
    let t54;
    if ($[126] !== clearErrors || $[127] !== errors.ctaUrl || $[128] !== isAr || $[129] !== linkTo || $[130] !== register || $[131] !== setValue) {
        t54 = linkTo === "URL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                    className: "text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200",
                    children: isAr ? "\u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u062E\u0627\u0631\u062C\u064A (URL) *" : "External Link (URL) *"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 798,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    placeholder: "https://example.com/promotions",
                    ...register("ctaUrl", {
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
                    lineNumber: 798,
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
            lineNumber: 798,
            columnNumber: 31
        }, this);
        $[126] = clearErrors;
        $[127] = errors.ctaUrl;
        $[128] = isAr;
        $[129] = linkTo;
        $[130] = register;
        $[131] = setValue;
        $[132] = t54;
    } else {
        t54 = $[132];
    }
    let t55;
    if ($[133] !== t51 || $[134] !== t52 || $[135] !== t53 || $[136] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-1 space-y-4",
            children: [
                t51,
                t52,
                t53,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 818,
            columnNumber: 11
        }, this);
        $[133] = t51;
        $[134] = t52;
        $[135] = t53;
        $[136] = t54;
        $[137] = t55;
    } else {
        t55 = $[137];
    }
    let t56;
    if ($[138] !== t50 || $[139] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-5",
            children: [
                t50,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 829,
            columnNumber: 11
        }, this);
        $[138] = t50;
        $[139] = t55;
        $[140] = t56;
    } else {
        t56 = $[140];
    }
    let t57;
    if ($[141] !== t44 || $[142] !== t49 || $[143] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-destination-card",
            className: t44,
            children: [
                t49,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 838,
            columnNumber: 11
        }, this);
        $[141] = t44;
        $[142] = t49;
        $[143] = t56;
        $[144] = t57;
    } else {
        t57 = $[144];
    }
    const t58 = isAr ? "\u0627\u0644\u062F\u0648\u0644 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629" : "Target Countries";
    let t59;
    if ($[145] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-white",
            children: t58
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 849,
            columnNumber: 11
        }, this);
        $[145] = t58;
        $[146] = t59;
    } else {
        t59 = $[146];
    }
    const t60 = isAr ? "\u064A\u0645\u0643\u0646 \u0627\u062E\u062A\u064A\u0627\u0631 \u0623\u0643\u062B\u0631 \u0645\u0646 \u062F\u0648\u0644\u0629" : "Select target countries";
    let t61;
    if ($[147] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
            className: "text-xs sm:text-sm text-gray-500 dark:text-neutral-400",
            children: t60
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 858,
            columnNumber: 11
        }, this);
        $[147] = t60;
        $[148] = t61;
    } else {
        t61 = $[148];
    }
    let t62;
    if ($[149] !== t59 || $[150] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: [
                t59,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 866,
            columnNumber: 11
        }, this);
        $[149] = t59;
        $[150] = t61;
        $[151] = t62;
    } else {
        t62 = $[151];
    }
    let t63;
    if ($[152] !== countries || $[153] !== country || $[154] !== isAr || $[155] !== isCountriesLoading || $[156] !== setValue) {
        t63 = isCountriesLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-4 h-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 875,
                    columnNumber: 95
                }, this),
                isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading countries..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 875,
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
                        lineNumber: 883,
                        columnNumber: 460
                    }, this)
                }, c.country_id, false, {
                    fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                    lineNumber: 878,
                    columnNumber: 16
                }, this);
            }
        }["AdTargetLinksCard[countries.map()]"]);
        $[152] = countries;
        $[153] = country;
        $[154] = isAr;
        $[155] = isCountriesLoading;
        $[156] = setValue;
        $[157] = t63;
    } else {
        t63 = $[157];
    }
    let t64;
    if ($[158] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: t63
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
                lineNumber: 897,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 897,
            columnNumber: 11
        }, this);
        $[158] = t63;
        $[159] = t64;
    } else {
        t64 = $[159];
    }
    let t65;
    if ($[160] !== t62 || $[161] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t62,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 905,
            columnNumber: 11
        }, this);
        $[160] = t62;
        $[161] = t64;
        $[162] = t65;
    } else {
        t65 = $[162];
    }
    let t66;
    if ($[163] !== t42 || $[164] !== t57 || $[165] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t42,
                t57,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdTargetLinksCard.tsx",
            lineNumber: 914,
            columnNumber: 11
        }, this);
        $[163] = t42;
        $[164] = t57;
        $[165] = t65;
        $[166] = t66;
    } else {
        t66 = $[166];
    }
    return t66;
}
_s1(AdTargetLinksCard, "ycM6bBWYDaK70fbYeGlPgxrz3g4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
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
    if ($[0] !== "3916c01af0456ccff40ef306d1c8a14a2cca5b2977d4df9d7ec8bc5bea2ccb47") {
        for(let $i = 0; $i < 55; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3916c01af0456ccff40ef306d1c8a14a2cca5b2977d4df9d7ec8bc5bea2ccb47";
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
function AdSchedulingCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(84);
    if ($[0] !== "427c7c6cb645bea91fa536d503da885dc39521e40f0f6da529a01ba880ee66fa") {
        for(let $i = 0; $i < 84; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "427c7c6cb645bea91fa536d503da885dc39521e40f0f6da529a01ba880ee66fa";
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
                lineNumber: 52,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 52,
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
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u0645\u0637\u0644\u0648\u0628" : "Start date is required";
    let t7;
    if ($[7] !== isAr || $[8] !== watch) {
        t7 = (val)=>{
            const end = watch("endDate");
            if (!end) {
                return true;
            }
            return new Date(val) <= new Date(end) || (isAr ? "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u0642\u0628\u0644 \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621" : "Start must be before or equal to end");
        };
        $[7] = isAr;
        $[8] = watch;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== register || $[11] !== t6 || $[12] !== t7) {
        t8 = register("startDate", {
            required: t6,
            validate: t7,
            deps: [
                "endDate"
            ]
        });
        $[10] = register;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const t9 = `bg-white dark:bg-neutral-800/60 pl-10 h-11 text-xs sm:text-sm rounded-lg ${errors.startDate ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700"}`;
    let t10;
    if ($[14] !== t8 || $[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "startDate",
            type: "date",
            ...t8,
            className: t9
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[14] = t8;
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== errors.startDate) {
        t13 = errors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 font-medium",
            children: errors.startDate.message
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 124,
            columnNumber: 31
        }, this);
        $[20] = errors.startDate;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t12 || $[23] !== t13 || $[24] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t13;
        $[24] = t5;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    const t15 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 *" : "End Date *";
    let t16;
    if ($[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-1.5 font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300",
            htmlFor: "endDate",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    const t17 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0645\u0637\u0644\u0648\u0628" : "End date is required";
    let t18;
    if ($[28] !== isAr || $[29] !== watch) {
        t18 = (val_0)=>{
            if (!val_0) {
                return isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0645\u0637\u0644\u0648\u0628" : "End date is required";
            }
            const start = watch("startDate");
            if (!start) {
                return true;
            }
            return new Date(start) <= new Date(val_0) || (isAr ? "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0628\u0639\u062F \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621" : "End must be after or equal to start");
        };
        $[28] = isAr;
        $[29] = watch;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== register || $[32] !== t17 || $[33] !== t18) {
        t19 = register("endDate", {
            required: t17,
            validate: t18,
            deps: [
                "startDate"
            ]
        });
        $[31] = register;
        $[32] = t17;
        $[33] = t18;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    const t20 = `bg-white dark:bg-neutral-800/60 pl-10 h-11 text-xs sm:text-sm rounded-lg ${errors.endDate ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700"}`;
    const t21 = startDateVal || undefined;
    let t22;
    if ($[35] !== t19 || $[36] !== t20 || $[37] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "endDate",
            type: "date",
            ...t19,
            className: t20,
            min: t21
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[35] = t19;
        $[36] = t20;
        $[37] = t21;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[40] = t22;
        $[41] = t24;
    } else {
        t24 = $[41];
    }
    let t25;
    if ($[42] !== errors.endDate) {
        t25 = errors.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1 font-medium",
            children: errors.endDate.message
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 211,
            columnNumber: 29
        }, this);
        $[42] = errors.endDate;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] !== t16 || $[45] !== t24 || $[46] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[44] = t16;
        $[45] = t24;
        $[46] = t25;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] !== t14 || $[49] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t14,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[48] = t14;
        $[49] = t26;
        $[50] = t27;
    } else {
        t27 = $[50];
    }
    const t28 = isAr ? "\u0627\u0644\u062D\u0627\u0644\u0629" : "Status";
    let t29;
    if ($[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "flex items-center gap-1 mb-1.5 font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== setValue) {
        t30 = ({
            "AdSchedulingCard[<Select>.onValueChange]": (val_1)=>setValue("status", val_1, {
                    shouldDirty: true
                })
        })["AdSchedulingCard[<Select>.onValueChange]"];
        $[53] = setValue;
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    const t31 = isAr ? "\u0645\u0633\u0648\u062F\u0651\u0629" : "Draft";
    let t32;
    if ($[55] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "bg-white dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 h-11 text-xs sm:text-sm rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t31
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
                lineNumber: 260,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[55] = t31;
        $[56] = t32;
    } else {
        t32 = $[56];
    }
    const t33 = isAr ? "\u0645\u0633\u0648\u062F\u0651\u0629" : "Draft";
    let t34;
    if ($[57] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "draft",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[57] = t33;
        $[58] = t34;
    } else {
        t34 = $[58];
    }
    const t35 = isAr ? "\u0646\u0634\u0637" : "Active";
    let t36;
    if ($[59] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "active",
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[59] = t35;
        $[60] = t36;
    } else {
        t36 = $[60];
    }
    const t37 = isAr ? "\u0645\u0648\u0642\u0648\u0641 \u0645\u0624\u0642\u062A\u0627\u064B" : "Paused";
    let t38;
    if ($[61] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "paused",
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[61] = t37;
        $[62] = t38;
    } else {
        t38 = $[62];
    }
    const t39 = isAr ? "\u0645\u0646\u062A\u0647\u064A" : "Ended";
    let t40;
    if ($[63] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "ended",
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[63] = t39;
        $[64] = t40;
    } else {
        t40 = $[64];
    }
    let t41;
    if ($[65] !== t34 || $[66] !== t36 || $[67] !== t38 || $[68] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t34,
                t36,
                t38,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[65] = t34;
        $[66] = t36;
        $[67] = t38;
        $[68] = t40;
        $[69] = t41;
    } else {
        t41 = $[69];
    }
    let t42;
    if ($[70] !== status || $[71] !== t30 || $[72] !== t32 || $[73] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: status,
            onValueChange: t30,
            children: [
                t32,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[70] = status;
        $[71] = t30;
        $[72] = t32;
        $[73] = t41;
        $[74] = t42;
    } else {
        t42 = $[74];
    }
    let t43;
    if ($[75] !== t29 || $[76] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t29,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[75] = t29;
        $[76] = t42;
        $[77] = t43;
    } else {
        t43 = $[77];
    }
    let t44;
    if ($[78] !== t27 || $[79] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "space-y-5",
            children: [
                t27,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[78] = t27;
        $[79] = t43;
        $[80] = t44;
    } else {
        t44 = $[80];
    }
    let t45;
    if ($[81] !== t3 || $[82] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            id: "ad-scheduling-card",
            className: "shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl",
            children: [
                t3,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/form/AdSchedulingCard.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[81] = t3;
        $[82] = t44;
        $[83] = t45;
    } else {
        t45 = $[83];
    }
    return t45;
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
function CreateAdForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "0c72cfb8fbc433d880b2858db18a7fa53af15d52061b42dc09fd1ac7d7e71afa") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c72cfb8fbc433d880b2858db18a7fa53af15d52061b42dc09fd1ac7d7e71afa";
    }
    const { routePrefix } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { createAd, isCreating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"])();
    const [adImage, setAdImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adImagePreview, setAdImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleImageUpload = {
        "CreateAdForm[handleImageUpload]": (e)=>{
            const file = e.target.files?.[0];
            if (file) {
                if (file.size > 2097152) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "\u062D\u062C\u0645 \u0627\u0644\u0635\u0648\u0631\u0629 \u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 2 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A" : "Image size must not exceed 2MB");
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
    const methods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(t2);
    const { handleSubmit } = methods;
    const validateForm = {
        "CreateAdForm[validateForm]": (data)=>{
            let isValid = true;
            let firstErrorElementId = null;
            const trimmedName = (data.campaignName || "").trim();
            if (!trimmedName) {
                methods.setError("campaignName", {
                    type: "required",
                    message: isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad Name is required"
                });
                isValid = false;
                firstErrorElementId = "ad-basic-info-card";
            } else {
                if (trimmedName.length < 2) {
                    methods.setError("campaignName", {
                        type: "minLength",
                        message: isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062D\u0631\u0641\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644" : "Ad Name must be at least 2 characters"
                    });
                    isValid = false;
                    firstErrorElementId = "ad-basic-info-card";
                }
            }
            if (!data.type) {
                methods.setError("type", {
                    type: "required",
                    message: isAr ? "\u0646\u0648\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad type is required"
                });
                isValid = false;
                if (!firstErrorElementId) {
                    firstErrorElementId = "ad-placement-card";
                }
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
                if (!firstErrorElementId) {
                    firstErrorElementId = "ad-placement-card";
                }
            }
            if (!data.country) {
                methods.setError("country", {
                    type: "required",
                    message: isAr ? "\u0627\u0644\u062F\u0648\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" : "Target country is required"
                });
                isValid = false;
                if (!firstErrorElementId) {
                    firstErrorElementId = "ad-placement-card";
                }
            }
            if (!adImage) {
                methods.setError("image", {
                    type: "required",
                    message: isAr ? "\u0635\u0648\u0631\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628\u0629 *" : "Ad image is required *"
                });
                isValid = false;
                if (!firstErrorElementId) {
                    firstErrorElementId = "ad-creative-card";
                }
            }
            if (data.type === "native" && (!data.title || !data.title.trim())) {
                methods.setError("title", {
                    type: "required",
                    message: isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u0637\u0644\u0648\u0628" : "Ad title is required"
                });
                isValid = false;
                if (!firstErrorElementId) {
                    firstErrorElementId = "ad-native-card";
                }
            }
            if (data.linkTo === "PROJECTS") {
                if (!data.developerId) {
                    methods.setError("developerId", {
                        type: "required",
                        message: isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639" : "Please select a developer first"
                    });
                    isValid = false;
                    if (!firstErrorElementId) {
                        firstErrorElementId = "ad-developer-card";
                    }
                }
                if (!data.projectId) {
                    methods.setError("projectId", {
                        type: "required",
                        message: isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0645\u0631\u062A\u0628\u0637 \u0628\u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Please select a project"
                    });
                    isValid = false;
                    if (!firstErrorElementId) {
                        firstErrorElementId = "ad-destination-card";
                    }
                }
            } else {
                if (data.linkTo === "PROPERTIES") {
                    if (!data.developerId) {
                        methods.setError("developerId", {
                            type: "required",
                            message: isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0637\u0648\u0631 \u0623\u0648\u0644\u0627\u064B \u0644\u0639\u0631\u0636 \u0627\u0644\u0648\u062D\u062F\u0627\u062A" : "Please select a developer first"
                        });
                        isValid = false;
                        if (!firstErrorElementId) {
                            firstErrorElementId = "ad-developer-card";
                        }
                    }
                    if (!data.projectId) {
                        methods.setError("projectId", {
                            type: "required",
                            message: isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0648\u062D\u062F\u0629 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629" : "Please select a property"
                        });
                        isValid = false;
                        if (!firstErrorElementId) {
                            firstErrorElementId = "ad-destination-card";
                        }
                    }
                } else {
                    if (data.linkTo === "EXPERT") {
                        if (!data.projectId || !data.projectId.trim()) {
                            methods.setError("projectId", {
                                type: "required",
                                message: isAr ? "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0623\u0648 \u0645\u0639\u0631\u0641 \u0627\u0644\u062E\u0628\u064A\u0631" : "Please enter expert name or ID"
                            });
                            isValid = false;
                            if (!firstErrorElementId) {
                                firstErrorElementId = "ad-destination-card";
                            }
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
                                if (!firstErrorElementId) {
                                    firstErrorElementId = "ad-destination-card";
                                }
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
                if (!firstErrorElementId) {
                    firstErrorElementId = "ad-scheduling-card";
                }
            }
            if (!data.endDate) {
                methods.setError("endDate", {
                    type: "required",
                    message: isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0645\u0637\u0644\u0648\u0628" : "End date is required"
                });
                isValid = false;
                if (!firstErrorElementId) {
                    firstErrorElementId = "ad-scheduling-card";
                }
            } else {
                if (data.startDate && new Date(data.endDate) < new Date(data.startDate)) {
                    methods.setError("endDate", {
                        type: "validate",
                        message: isAr ? "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0628\u0639\u062F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621" : "End date must be after or equal to start date"
                    });
                    isValid = false;
                    if (!firstErrorElementId) {
                        firstErrorElementId = "ad-scheduling-card";
                    }
                }
            }
            if (!isValid) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "\u064A\u0631\u062C\u0649 \u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0648\u062A\u0635\u062D\u064A\u062D \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629" : "Please fill in all required fields");
                if (firstErrorElementId) {
                    const el = document.getElementById(firstErrorElementId);
                    if (el) {
                        el.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }
                return false;
            }
            return true;
        }
    }["CreateAdForm[validateForm]"];
    let t3;
    if ($[3] !== isAr) {
        t3 = ({
            "CreateAdForm[onInvalid]": (errors)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "\u064A\u0631\u062C\u0649 \u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0648\u062A\u0635\u062D\u064A\u062D \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629" : "Please fill in all required fields");
                const errorKeys = Object.keys(errors);
                if (errorKeys.length > 0) {
                    const firstKey = errorKeys[0];
                    const cardMap = {
                        campaignName: "ad-basic-info-card",
                        location: "ad-placement-card",
                        country: "ad-placement-card",
                        type: "ad-placement-card",
                        platform: "ad-placement-card",
                        image: "ad-creative-card",
                        image_url: "ad-creative-card",
                        title: "ad-native-card",
                        developerId: "ad-developer-card",
                        projectId: "ad-destination-card",
                        ctaUrl: "ad-destination-card",
                        startDate: "ad-scheduling-card",
                        endDate: "ad-scheduling-card"
                    };
                    const elementId = cardMap[firstKey];
                    if (elementId) {
                        document.getElementById(elementId)?.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }
            }
        })["CreateAdForm[onInvalid]"];
        $[3] = isAr;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const onInvalid = t3;
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
            } catch (t4) {
                const error = t4;
                console.error("Error creating ad:", error);
            }
        }
    }["CreateAdForm[onSubmit]"];
    let t5;
    if ($[5] !== routePrefix || $[6] !== router) {
        t5 = ({
            "CreateAdForm[<button>.onClick]": ()=>router.push(`${routePrefix}/ads`)
        })["CreateAdForm[<button>.onClick]"];
        $[5] = routePrefix;
        $[6] = router;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const t6 = `w-4 h-4 ${isAr ? "" : "rotate-180"}`;
    let t7;
    if ($[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: t6
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 486,
            columnNumber: 10
        }, this);
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = isAr ? "\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A" : "Back to Ads";
    let t9;
    if ($[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 495,
            columnNumber: 10
        }, this);
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== t5 || $[13] !== t7 || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t5,
            className: "inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[12] = t5;
        $[13] = t7;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const t11 = isAr ? "\u0625\u0646\u0634\u0627\u0621 \u0625\u0639\u0644\u0627\u0646 \u062C\u062F\u064A\u062F" : "Create New Ad";
    let t12;
    if ($[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 514,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t10 || $[19] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 pt-2",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t12;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdBasicInfoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdBasicInfoCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdPlacementCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdPlacementCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[21] = t14;
        $[22] = t15;
    } else {
        t14 = $[21];
        t15 = $[22];
    }
    let t16;
    let t17;
    let t18;
    let t19;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdNativeContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdNativeContentCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 545,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdTargetLinksCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdTargetLinksCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 546,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdPriorityCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdPriorityCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdSchedulingCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdSchedulingCard"], {}, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[23] = t16;
        $[24] = t17;
        $[25] = t18;
        $[26] = t19;
    } else {
        t16 = $[23];
        t17 = $[24];
        t18 = $[25];
        t19 = $[26];
    }
    const t20 = "flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-neutral-800";
    let t21;
    if ($[27] !== routePrefix || $[28] !== router) {
        t21 = ({
            "CreateAdForm[<Button>.onClick]": ()=>router.push(`${routePrefix}/ads`)
        })["CreateAdForm[<Button>.onClick]"];
        $[27] = routePrefix;
        $[28] = router;
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    const t22 = isAr ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel";
    let t23;
    if ($[30] !== t21 || $[31] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: t21,
            className: "px-6 py-2.5 h-11 text-sm font-semibold rounded-xl border-gray-200 dark:border-neutral-700 cursor-pointer",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[30] = t21;
        $[31] = t22;
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"];
    const t24 = "button";
    const t25 = "bg-teal-700 hover:bg-teal-800 text-white px-8 py-2.5 h-11 text-sm font-bold rounded-xl shadow-xs gap-2 cursor-pointer";
    const t26 = handleSubmit(onSubmit, onInvalid);
    let t27;
    if ($[33] !== isCreating) {
        t27 = isCreating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 587,
            columnNumber: 25
        }, this);
        $[33] = isCreating;
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    const t28 = isCreating ? isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0646\u0634\u0631..." : "Publishing..." : isAr ? "\u0646\u0634\u0631 \u0627\u0644\u0625\u0639\u0644\u0627\u0646" : "Publish Ad";
    let t29;
    if ($[35] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 596,
            columnNumber: 11
        }, this);
        $[35] = t28;
        $[36] = t29;
    } else {
        t29 = $[36];
    }
    let t30;
    if ($[37] !== T0 || $[38] !== isCreating || $[39] !== t26 || $[40] !== t27 || $[41] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            type: t24,
            className: t25,
            onClick: t26,
            disabled: isCreating,
            children: [
                t27,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 604,
            columnNumber: 11
        }, this);
        $[37] = T0;
        $[38] = isCreating;
        $[39] = t26;
        $[40] = t27;
        $[41] = t29;
        $[42] = t30;
    } else {
        t30 = $[42];
    }
    let t31;
    if ($[43] !== t23 || $[44] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20,
            children: [
                t23,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, this);
        $[43] = t23;
        $[44] = t30;
        $[45] = t31;
    } else {
        t31 = $[45];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
        ...methods,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-6 max-w-6xl mx-auto space-y-6",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        t14,
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$form$2f$AdCreativeContentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdCreativeContentCard"], {
                            adImagePreview: adImagePreview,
                            handleImageUpload: handleImageUpload,
                            handleRemoveImage: handleRemoveImage
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
                            lineNumber: 623,
                            columnNumber: 135
                        }, this),
                        t16,
                        t17,
                        t18,
                        t19,
                        t31
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
                    lineNumber: 623,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
            lineNumber: 623,
            columnNumber: 37
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/ads/create/CreateAdForm.tsx",
        lineNumber: 623,
        columnNumber: 10
    }, this);
}
_s(CreateAdForm, "tRmXHMWdEnITHRBr4Bk2qb6cOA4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
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
    if ($[0] !== "8cfb3d0748112b45fe68c078881cc0bdaf90dd988ba59a079d272a70bed733c9") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8cfb3d0748112b45fe68c078881cc0bdaf90dd988ba59a079d272a70bed733c9";
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

//# sourceMappingURL=src_ea067767._.js.map