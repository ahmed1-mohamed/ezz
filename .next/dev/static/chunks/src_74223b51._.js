(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/hooks/use-dashboardAdminAds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDashboardAdminAdsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/ads.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useDashboardAdminAdsData(t0, t1, filters, t2) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "7f40ba509f9b73f07fff898950ea71a673aedf01fb6f799945721a438ad26f70") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7f40ba509f9b73f07fff898950ea71a673aedf01fb6f799945721a438ad26f70";
    }
    const page = t0 === undefined ? 1 : t0;
    const limit = t1 === undefined ? 15 : t1;
    const enabled = t2 === undefined ? true : t2;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const t3 = filters?.status;
    const t4 = filters?.platform;
    const t5 = filters?.format;
    const t6 = filters?.search;
    let t7;
    if ($[1] !== limit || $[2] !== page || $[3] !== t3 || $[4] !== t4 || $[5] !== t5 || $[6] !== t6) {
        t7 = [
            "ads",
            page,
            limit,
            t3,
            t4,
            t5,
            t6
        ];
        $[1] = limit;
        $[2] = page;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== filters || $[9] !== limit || $[10] !== page) {
        t8 = async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].getAds(page, limit, filters);
            if (!res) {
                return {
                    data: [],
                    total: 0
                };
            }
            let items = [];
            let total;
            if (Array.isArray(res)) {
                items = res;
                total = res.length;
            } else {
                if (Array.isArray(res.data)) {
                    items = res.data;
                    total = res.total ?? res.meta?.total ?? res.pagination?.total ?? res.count;
                } else {
                    if (res.data && Array.isArray(res.data.data)) {
                        items = res.data.data;
                        total = res.data.total ?? res.data.meta?.total ?? res.total;
                    } else {
                        if (Array.isArray(res.ads)) {
                            items = res.ads;
                            total = res.total ?? res.meta?.total;
                        } else {
                            if (res.data && typeof res.data === "object") {
                                items = Object.values(res.data);
                                total = res.total ?? items.length;
                            }
                        }
                    }
                }
            }
            return {
                data: items,
                total: total ?? (typeof res.total === "number" ? res.total : undefined),
                meta: res.meta ?? res.data?.meta,
                raw: res
            };
        };
        $[8] = filters;
        $[9] = limit;
        $[10] = page;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = !!token && enabled;
    let t10;
    if ($[12] !== t7 || $[13] !== t8 || $[14] !== t9) {
        t10 = {
            queryKey: t7,
            queryFn: t8,
            retry: 1,
            enabled: t9,
            staleTime: 300000,
            gcTime: 600000,
            placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
        };
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const adsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t10);
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = [
            "adsTotals"
        ];
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    const t12 = !!token;
    let t13;
    if ($[17] !== t12) {
        t13 = {
            queryKey: t11,
            queryFn: _temp,
            retry: 1,
            enabled: t12,
            staleTime: 300000,
            gcTime: 600000,
            placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
        };
        $[17] = t12;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const totalsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t13);
    let t14;
    if ($[19] !== adsData || $[20] !== totalsData) {
        t14 = {
            adsData,
            totalsData,
            isLoading: adsData.isLoading,
            isFetching: adsData.isFetching,
            isError: adsData.isError
        };
        $[19] = adsData;
        $[20] = totalsData;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    return t14;
}
_s(useDashboardAdminAdsData, "aP9MaZEjlU76RtOFl8upACYwHKw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
async function _temp() {
    const res_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].getAdsTotals();
    if (!res_0) {
        return {};
    }
    if (res_0.data && typeof res_0.data === "object") {
        return res_0.data.data || res_0.data;
    }
    return res_0;
}
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
"[project]/src/hooks/use-url-filters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUrlFilters",
    ()=>useUrlFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useUrlFilters(defaultValues) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const defaultValuesStr = JSON.stringify(defaultValues);
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useUrlFilters.useMemo[filters]": ()=>{
            const current = {
                ...defaultValues
            };
            Object.keys(defaultValues).forEach({
                "useUrlFilters.useMemo[filters]": (key)=>{
                    const val = searchParams?.get(key);
                    if (val !== null) {
                        if (typeof defaultValues[key] === "number") {
                            current[key] = Number(val);
                        } else {
                            current[key] = val;
                        }
                    }
                }
            }["useUrlFilters.useMemo[filters]"]);
            return current;
        }
    }["useUrlFilters.useMemo[filters]"], [
        searchParams,
        defaultValuesStr
    ]);
    const setFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUrlFilters.useCallback[setFilter]": (key_0, value)=>{
            const currentQuery = searchParams?.toString() || "";
            const params = new URLSearchParams(currentQuery);
            if (value === defaultValues[key_0] || value === "") {
                params.delete(key_0);
            } else {
                params.set(key_0, String(value));
            }
            if (key_0 !== "page" && defaultValues.page !== undefined) {
                params.delete("page");
            }
            if (params.toString() === currentQuery) return;
            const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ""}`;
            router.push(newUrl, {
                scroll: false
            });
        }
    }["useUrlFilters.useCallback[setFilter]"], [
        pathname,
        router,
        searchParams,
        defaultValuesStr
    ]);
    const setFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUrlFilters.useCallback[setFilters]": (newFilters)=>{
            const currentQuery_0 = searchParams?.toString() || "";
            const params_0 = new URLSearchParams(currentQuery_0);
            let changedFilters = false;
            Object.keys(newFilters).forEach({
                "useUrlFilters.useCallback[setFilters]": (key_1)=>{
                    if (key_1 !== "page") changedFilters = true;
                    const value_0 = newFilters[key_1];
                    if (value_0 === defaultValues[key_1] || value_0 === "" || value_0 === undefined) {
                        params_0.delete(key_1);
                    } else {
                        params_0.set(key_1, String(value_0));
                    }
                }
            }["useUrlFilters.useCallback[setFilters]"]);
            if (changedFilters && defaultValues.page !== undefined && !newFilters.hasOwnProperty("page")) {
                params_0.delete("page");
            }
            if (params_0.toString() === currentQuery_0) return;
            const newUrl_0 = `${pathname}${params_0.toString() ? `?${params_0.toString()}` : ""}`;
            router.push(newUrl_0, {
                scroll: false
            });
        }
    }["useUrlFilters.useCallback[setFilters]"], [
        pathname,
        router,
        searchParams,
        defaultValuesStr
    ]);
    return {
        filters,
        setFilter,
        setFilters
    };
}
_s(useUrlFilters, "DXs7p5M8XsricQ9kWYKH8oiWEY8=", false, function() {
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
"[project]/src/features/ads/components/AdsPageHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdsPageHeader",
    ()=>AdsPageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
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
const TableSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/table/table-settings.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.TableSettings), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/table/table-settings.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = TableSettings;
function AdsPageHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(85);
    if ($[0] !== "17f673932ef66f4dbf78c098b4b55c2f2ee6e23ca65de308488995d4604d3f0d") {
        for(let $i = 0; $i < 85; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "17f673932ef66f4dbf78c098b4b55c2f2ee6e23ca65de308488995d4604d3f0d";
    }
    const { totalAds: t1, activeAds: t2, tableSettings, onCreateAd, onExportExcel, onExportPdf } = t0;
    const totalAds = t1 === undefined ? 0 : t1;
    const activeAds = t2 === undefined ? 0 : t2;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const t3 = isAr ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl tracking-tight";
    let t4;
    if ($[1] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-gray-900 dark:text-white", t3);
        $[1] = t3;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    if ($[3] !== t) {
        t5 = t("ads.title");
        $[3] = t;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] !== t4 || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = isAr ? "text-sm font-semibold" : "text-xs";
    let t8;
    if ($[8] !== t7) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 mt-1 text-gray-500 dark:text-gray-400 font-medium", t7);
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t) {
        t9 = t("ads.title").toLowerCase();
        $[10] = t;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== t9 || $[13] !== totalAds) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                totalAds,
                " ",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 90,
            columnNumber: 11
        }, this);
        $[12] = t9;
        $[13] = totalAds;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== activeAds || $[16] !== t) {
        t11 = activeAds !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
                    lineNumber: 99,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-teal-700 dark:text-teal-400 font-semibold",
                    children: [
                        activeAds,
                        " ",
                        t("ads.active")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
                    lineNumber: 99,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true);
        $[15] = activeAds;
        $[16] = t;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t10 || $[19] !== t11 || $[20] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t11;
        $[20] = t8;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t12 || $[23] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t6;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    const t14 = isAr ? "text-xs font-semibold" : "text-xs";
    let t15;
    if ($[25] !== t14) {
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("gap-1.5 h-8 px-3 font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-xs", t14);
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "h-3.5 w-3.5 shrink-0 text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t) {
        t17 = t("tableSettings.export");
        $[28] = t;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "truncate",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[30] = t17;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== t15 || $[33] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: t15,
                children: [
                    t16,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
                lineNumber: 159,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[32] = t15;
        $[33] = t18;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    const t20 = isAr ? "text-xs font-medium" : "text-xs";
    let t21;
    if ($[35] !== t20) {
        t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800", t20);
        $[35] = t20;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
            className: "h-3.5 w-3.5 me-2 text-emerald-600"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    if ($[38] !== t) {
        t23 = t("tableSettings.exportExcel");
        $[38] = t;
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[40] = t23;
        $[41] = t24;
    } else {
        t24 = $[41];
    }
    let t25;
    if ($[42] !== onExportExcel || $[43] !== t21 || $[44] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
            onClick: onExportExcel,
            className: t21,
            children: [
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[42] = onExportExcel;
        $[43] = t21;
        $[44] = t24;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    const t26 = isAr ? "text-xs font-medium" : "text-xs";
    let t27;
    if ($[46] !== t26) {
        t27 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800", t26);
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "h-3.5 w-3.5 me-2 text-red-600"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] !== t) {
        t29 = t("tableSettings.exportPdf");
        $[49] = t;
        $[50] = t29;
    } else {
        t29 = $[50];
    }
    let t30;
    if ($[51] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[51] = t29;
        $[52] = t30;
    } else {
        t30 = $[52];
    }
    let t31;
    if ($[53] !== onExportPdf || $[54] !== t27 || $[55] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
            onClick: onExportPdf,
            className: t27,
            children: [
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[53] = onExportPdf;
        $[54] = t27;
        $[55] = t30;
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] !== t25 || $[58] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
            align: "end",
            className: "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
            children: [
                t25,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[57] = t25;
        $[58] = t31;
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] !== t19 || $[61] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
            children: [
                t19,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[60] = t19;
        $[61] = t32;
        $[62] = t33;
    } else {
        t33 = $[62];
    }
    let t34;
    if ($[63] !== onExportExcel || $[64] !== onExportPdf || $[65] !== tableSettings) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableSettings, {
            settings: tableSettings,
            onExportExcel: onExportExcel,
            onExportPdf: onExportPdf
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[63] = onExportExcel;
        $[64] = onExportPdf;
        $[65] = tableSettings;
        $[66] = t34;
    } else {
        t34 = $[66];
    }
    const t35 = isAr ? "text-xs font-semibold" : "text-xs";
    let t36;
    if ($[67] !== t35) {
        t36 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("gap-1.5 h-8 px-3 font-medium bg-teal-600 hover:bg-teal-700 text-white shadow-xs rounded-md", t35);
        $[67] = t35;
        $[68] = t36;
    } else {
        t36 = $[68];
    }
    let t37;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "h-3.5 w-3.5 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[69] = t37;
    } else {
        t37 = $[69];
    }
    let t38;
    if ($[70] !== t) {
        t38 = t("ads.createAd");
        $[70] = t;
        $[71] = t38;
    } else {
        t38 = $[71];
    }
    let t39;
    if ($[72] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[72] = t38;
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    let t40;
    if ($[74] !== onCreateAd || $[75] !== t36 || $[76] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onCreateAd,
            className: t36,
            children: [
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[74] = onCreateAd;
        $[75] = t36;
        $[76] = t39;
        $[77] = t40;
    } else {
        t40 = $[77];
    }
    let t41;
    if ($[78] !== t33 || $[79] !== t34 || $[80] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-2 w-full sm:w-auto",
            children: [
                t33,
                t34,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[78] = t33;
        $[79] = t34;
        $[80] = t40;
        $[81] = t41;
    } else {
        t41 = $[81];
    }
    let t42;
    if ($[82] !== t13 || $[83] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
            children: [
                t13,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[82] = t13;
        $[83] = t41;
        $[84] = t42;
    } else {
        t42 = $[84];
    }
    return t42;
}
_s(AdsPageHeader, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdsPageHeader;
var _c, _c1;
__turbopack_context__.k.register(_c, "TableSettings");
__turbopack_context__.k.register(_c1, "AdsPageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/AdsLoadingState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdsLoadingState",
    ()=>AdsLoadingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-errors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AdsLoadingState(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "6a95abf95339097bbd6253cba4d04c0a47b161b32a90721de5aecf1ef8ac3773") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6a95abf95339097bbd6253cba4d04c0a47b161b32a90721de5aecf1ef8ac3773";
    }
    const { isLoading, isError, error, onRetry } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (isLoading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
                children: [
                    1,
                    2,
                    3,
                    4
                ].map(_AdsLoadingStateAnonymous)
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 34,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        let t2;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-[240px] max-w-xl h-9 bg-gray-100 dark:bg-neutral-800 rounded-lg"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 41,
                columnNumber: 12
            }, this);
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        let t3;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 w-full",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 sm:flex sm:items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 w-full sm:w-[140px] bg-gray-100 dark:bg-neutral-800 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                                lineNumber: 48,
                                columnNumber: 168
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 w-full sm:w-[150px] bg-gray-100 dark:bg-neutral-800 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                                lineNumber: 48,
                                columnNumber: 254
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 w-full sm:w-[140px] bg-gray-100 dark:bg-neutral-800 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                                lineNumber: 48,
                                columnNumber: 340
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 48,
                        columnNumber: 104
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 48,
                columnNumber: 12
            }, this);
            $[3] = t3;
        } else {
            t3 = $[3];
        }
        let t4;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-10 bg-gray-50 dark:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800 flex items-center px-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-4 bg-gray-200 dark:bg-neutral-700 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 55,
                        columnNumber: 146
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-28 bg-gray-200 dark:bg-neutral-700 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 55,
                        columnNumber: 213
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded hidden sm:block"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 55,
                        columnNumber: 281
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 55,
                        columnNumber: 365
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-20 bg-gray-200 dark:bg-neutral-700 rounded hidden lg:block"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 55,
                        columnNumber: 449
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ms-auto h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 55,
                        columnNumber: 533
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 55,
                columnNumber: 12
            }, this);
            $[4] = t4;
        } else {
            t4 = $[4];
        }
        let t5;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 w-full animate-pulse",
                children: [
                    t1,
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden",
                        children: [
                            t4,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-100 dark:divide-neutral-800",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ].map(_AdsLoadingStateAnonymous2)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                                lineNumber: 62,
                                columnNumber: 192
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 62,
                        columnNumber: 68
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 62,
                columnNumber: 12
            }, this);
            $[5] = t5;
        } else {
            t5 = $[5];
        }
        return t5;
    }
    if (isError) {
        let t1;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                className: "h-5 w-5 text-red-500"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 72,
                columnNumber: 12
            }, this);
            $[6] = t1;
        } else {
            t1 = $[6];
        }
        let t2;
        if ($[7] !== t) {
            t2 = t("ads.errorLabel");
            $[7] = t;
            $[8] = t2;
        } else {
            t2 = $[8];
        }
        let t3;
        if ($[9] !== t2) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: t2
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 87,
                columnNumber: 12
            }, this);
            $[9] = t2;
            $[10] = t3;
        } else {
            t3 = $[10];
        }
        let t4;
        if ($[11] !== error || $[12] !== t) {
            t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiErrorMessage"])(error, t, t("ads.failedLoad"));
            $[11] = error;
            $[12] = t;
            $[13] = t4;
        } else {
            t4 = $[13];
        }
        let t5;
        if ($[14] !== t3 || $[15] !== t4) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-800",
                        children: [
                            t3,
                            " ",
                            t4
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 104,
                        columnNumber: 57
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 104,
                columnNumber: 12
            }, this);
            $[14] = t3;
            $[15] = t4;
            $[16] = t5;
        } else {
            t5 = $[16];
        }
        let t6;
        if ($[17] !== t) {
            t6 = t("ads.messages.tryAgain");
            $[17] = t;
            $[18] = t6;
        } else {
            t6 = $[18];
        }
        let t7;
        if ($[19] !== onRetry || $[20] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: onRetry,
                className: "mt-2 border-red-200 text-red-700 hover:bg-red-100",
                children: t6
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 121,
                columnNumber: 12
            }, this);
            $[19] = onRetry;
            $[20] = t6;
            $[21] = t7;
        } else {
            t7 = $[21];
        }
        let t8;
        if ($[22] !== t5 || $[23] !== t7) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-red-200 bg-red-50 p-4",
                children: [
                    t5,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 130,
                columnNumber: 12
            }, this);
            $[22] = t5;
            $[23] = t7;
            $[24] = t8;
        } else {
            t8 = $[24];
        }
        return t8;
    }
    return null;
}
_s(AdsLoadingState, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = AdsLoadingState;
function _AdsLoadingStateAnonymous2(row) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-14 px-4 flex items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 w-4 bg-gray-100 dark:bg-neutral-800 rounded"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 142,
                columnNumber: 71
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3.5 w-44 bg-gray-200 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 142,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 w-24 bg-gray-100 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 142,
                        columnNumber: 252
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 142,
                columnNumber: 138
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 w-16 bg-gray-100 dark:bg-neutral-800 rounded hidden sm:block"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 142,
                columnNumber: 328
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 w-14 bg-gray-100 dark:bg-neutral-800 rounded hidden md:block"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 142,
                columnNumber: 412
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3.5 w-12 bg-gray-100 dark:bg-neutral-800 rounded hidden lg:block"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 142,
                columnNumber: 496
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3.5 w-12 bg-gray-100 dark:bg-neutral-800 rounded hidden lg:block"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 142,
                columnNumber: 582
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 w-14 bg-gray-200 dark:bg-neutral-800 rounded"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 142,
                columnNumber: 668
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1.5 ms-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-7 w-7 bg-gray-100 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 142,
                        columnNumber: 771
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-7 w-7 bg-gray-100 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 142,
                        columnNumber: 838
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 142,
                columnNumber: 736
            }, this)
        ]
    }, row, true, {
        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
        lineNumber: 142,
        columnNumber: 10
    }, this);
}
function _AdsLoadingStateAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg p-4 shadow-xs flex flex-col justify-between h-[108px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-20 bg-gray-200 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 145,
                        columnNumber: 227
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 w-8 bg-gray-100 dark:bg-neutral-800 rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 145,
                        columnNumber: 295
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 145,
                columnNumber: 176
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-28 bg-gray-200 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 145,
                        columnNumber: 405
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 w-16 bg-gray-100 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 145,
                        columnNumber: 473
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 145,
                columnNumber: 371
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
        lineNumber: 145,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AdsLoadingState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/AdsStatCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdsStatCards",
    ()=>AdsStatCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AdsStatCards(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "51198534c72e371ea163ae40e14b4892f7080a241c2fc8b8f9110ccff48aef18") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51198534c72e371ea163ae40e14b4892f7080a241c2fc8b8f9110ccff48aef18";
    }
    const { stats } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    if (stats.length === 0) {
        return null;
    }
    let t1;
    if ($[1] !== isAr || $[2] !== stats || $[3] !== t) {
        let t2;
        if ($[5] !== isAr || $[6] !== t) {
            t2 = ({
                "AdsStatCards[stats.map()]": (stat, index)=>{
                    const Icon = stat.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg p-4 shadow-xs hover:border-gray-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-500 dark:text-gray-400", isAr ? "text-[13px] sm:text-sm font-bold tracking-normal" : "text-[11px] font-semibold uppercase tracking-wider"),
                                        children: stat.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/AdsStatCards.tsx",
                                        lineNumber: 43,
                                        columnNumber: 296
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-2 rounded-lg shrink-0 ${stat.trendUp ? "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400" : "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "h-4 w-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/AdsStatCards.tsx",
                                            lineNumber: 43,
                                            columnNumber: 677
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/AdsStatCards.tsx",
                                        lineNumber: 43,
                                        columnNumber: 486
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ads/components/AdsStatCards.tsx",
                                lineNumber: 43,
                                columnNumber: 245
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold text-gray-900 dark:text-white", isAr ? "text-2xl sm:text-3xl" : "text-2xl tracking-tight"),
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/ads/components/AdsStatCards.tsx",
                                        lineNumber: 43,
                                        columnNumber: 748
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1 font-medium", isAr ? "text-xs sm:text-[13px] font-semibold" : "text-[11px]", stat.trendUp ? "text-teal-600 dark:text-teal-400" : "text-red-600 dark:text-red-400"),
                                        children: [
                                            stat.trend,
                                            " ",
                                            t("ads.totals.fromLastMonth")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/ads/components/AdsStatCards.tsx",
                                        lineNumber: 43,
                                        columnNumber: 888
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/ads/components/AdsStatCards.tsx",
                                lineNumber: 43,
                                columnNumber: 726
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/features/ads/components/AdsStatCards.tsx",
                        lineNumber: 43,
                        columnNumber: 18
                    }, this);
                }
            })["AdsStatCards[stats.map()]"];
            $[5] = isAr;
            $[6] = t;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        t1 = stats.map(t2);
        $[1] = isAr;
        $[2] = stats;
        $[3] = t;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[8] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsStatCards.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    return t2;
}
_s(AdsStatCards, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = AdsStatCards;
var _c;
__turbopack_context__.k.register(_c, "AdsStatCards");
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
    if ($[0] !== "5d1f5835347b5200240e082587d3472feb02ffaa8c0140cc17c6b996d7f6ec6e") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5d1f5835347b5200240e082587d3472feb02ffaa8c0140cc17c6b996d7f6ec6e";
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
"[project]/src/features/ads/components/AdsFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdsFilters",
    ()=>AdsFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SearchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SearchInput.tsx [app-client] (ecmascript)");
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
const AdsFilters = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(function AdsFilters(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(172);
    if ($[0] !== "b3ba6a8c430b1ab22557feae2e96f7d07fe928659c2685ffbdf79b3f04bf7580") {
        for(let $i = 0; $i < 172; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b3ba6a8c430b1ab22557feae2e96f7d07fe928659c2685ffbdf79b3f04bf7580";
    }
    const { searchQuery, onSearchChange, statusFilter, onStatusChange, platformFilter, onPlatformChange, typeFilter, onTypeChange } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let T0;
    let T1;
    let itemClass;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[1] !== isAr || $[2] !== onPlatformChange || $[3] !== onSearchChange || $[4] !== onStatusChange || $[5] !== onTypeChange || $[6] !== platformFilter || $[7] !== searchQuery || $[8] !== statusFilter || $[9] !== t || $[10] !== typeFilter) {
        const triggerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-9 bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-200 shadow-xs", isAr ? "text-[13px] font-medium" : "text-xs");
        const t9 = isAr ? "text-[13px]" : "text-xs";
        let t10;
        if ($[22] !== t9) {
            t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800", t9);
            $[22] = t9;
            $[23] = t10;
        } else {
            t10 = $[23];
        }
        itemClass = t10;
        t7 = "flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 w-full";
        let t11;
        if ($[24] !== t) {
            t11 = t("ads.filters.search");
            $[24] = t;
            $[25] = t11;
        } else {
            t11 = $[25];
        }
        if ($[26] !== onSearchChange || $[27] !== searchQuery || $[28] !== t11) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-[240px] max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SearchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchInput"], {
                    value: searchQuery,
                    onChange: onSearchChange,
                    placeholder: t11,
                    className: "w-full"
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                    lineNumber: 75,
                    columnNumber: 59
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 75,
                columnNumber: 12
            }, this);
            $[26] = onSearchChange;
            $[27] = searchQuery;
            $[28] = t11;
            $[29] = t8;
        } else {
            t8 = $[29];
        }
        t4 = "grid grid-cols-3 sm:flex sm:items-center gap-2 w-full lg:w-auto";
        const t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(triggerClass, "sm:w-[140px]");
        let t13;
        if ($[30] !== t) {
            t13 = t("ads.filters.status");
            $[30] = t;
            $[31] = t13;
        } else {
            t13 = $[31];
        }
        let t14;
        if ($[32] !== t13) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t13
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this);
            $[32] = t13;
            $[33] = t14;
        } else {
            t14 = $[33];
        }
        let t15;
        if ($[34] !== t) {
            t15 = t("ads.filters.allStatus");
            $[34] = t;
            $[35] = t15;
        } else {
            t15 = $[35];
        }
        let t16;
        if ($[36] !== itemClass || $[37] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "all",
                className: itemClass,
                children: t15
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this);
            $[36] = itemClass;
            $[37] = t15;
            $[38] = t16;
        } else {
            t16 = $[38];
        }
        let t17;
        if ($[39] !== t) {
            t17 = t("ads.status.active");
            $[39] = t;
            $[40] = t17;
        } else {
            t17 = $[40];
        }
        let t18;
        if ($[41] !== itemClass || $[42] !== t17) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "active",
                className: itemClass,
                children: t17
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this);
            $[41] = itemClass;
            $[42] = t17;
            $[43] = t18;
        } else {
            t18 = $[43];
        }
        let t19;
        if ($[44] !== t) {
            t19 = t("ads.status.paused");
            $[44] = t;
            $[45] = t19;
        } else {
            t19 = $[45];
        }
        let t20;
        if ($[46] !== itemClass || $[47] !== t19) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "paused",
                className: itemClass,
                children: t19
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 145,
                columnNumber: 13
            }, this);
            $[46] = itemClass;
            $[47] = t19;
            $[48] = t20;
        } else {
            t20 = $[48];
        }
        let t21;
        if ($[49] !== t) {
            t21 = t("ads.status.draft");
            $[49] = t;
            $[50] = t21;
        } else {
            t21 = $[50];
        }
        let t22;
        if ($[51] !== itemClass || $[52] !== t21) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "draft",
                className: itemClass,
                children: t21
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this);
            $[51] = itemClass;
            $[52] = t21;
            $[53] = t22;
        } else {
            t22 = $[53];
        }
        let t23;
        if ($[54] !== t) {
            t23 = t("ads.status.ended");
            $[54] = t;
            $[55] = t23;
        } else {
            t23 = $[55];
        }
        let t24;
        if ($[56] !== itemClass || $[57] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "ended",
                className: itemClass,
                children: t23
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 179,
                columnNumber: 13
            }, this);
            $[56] = itemClass;
            $[57] = t23;
            $[58] = t24;
        } else {
            t24 = $[58];
        }
        let t25;
        if ($[59] !== t16 || $[60] !== t18 || $[61] !== t20 || $[62] !== t22 || $[63] !== t24) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                className: "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
                children: [
                    t16,
                    t18,
                    t20,
                    t22,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, this);
            $[59] = t16;
            $[60] = t18;
            $[61] = t20;
            $[62] = t22;
            $[63] = t24;
            $[64] = t25;
        } else {
            t25 = $[64];
        }
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: statusFilter,
            onValueChange: onStatusChange,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                    className: t12,
                    children: t14
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                    lineNumber: 198,
                    columnNumber: 70
                }, this),
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 198,
            columnNumber: 10
        }, this);
        const t26 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(triggerClass, "sm:w-[150px]");
        let t27;
        if ($[65] !== t) {
            t27 = t("ads.filters.platform");
            $[65] = t;
            $[66] = t27;
        } else {
            t27 = $[66];
        }
        let t28;
        if ($[67] !== t27) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t27
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 210,
                columnNumber: 13
            }, this);
            $[67] = t27;
            $[68] = t28;
        } else {
            t28 = $[68];
        }
        let t29;
        if ($[69] !== t) {
            t29 = t("ads.filters.allPlatforms");
            $[69] = t;
            $[70] = t29;
        } else {
            t29 = $[70];
        }
        let t30;
        if ($[71] !== itemClass || $[72] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "all",
                className: itemClass,
                children: t29
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 226,
                columnNumber: 13
            }, this);
            $[71] = itemClass;
            $[72] = t29;
            $[73] = t30;
        } else {
            t30 = $[73];
        }
        let t31;
        if ($[74] !== t) {
            t31 = t("ads.filters.mobile");
            $[74] = t;
            $[75] = t31;
        } else {
            t31 = $[75];
        }
        let t32;
        if ($[76] !== itemClass || $[77] !== t31) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "mobile",
                className: itemClass,
                children: t31
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this);
            $[76] = itemClass;
            $[77] = t31;
            $[78] = t32;
        } else {
            t32 = $[78];
        }
        let t33;
        if ($[79] !== t) {
            t33 = t("ads.filters.web");
            $[79] = t;
            $[80] = t33;
        } else {
            t33 = $[80];
        }
        let t34;
        if ($[81] !== itemClass || $[82] !== t33) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "web",
                className: itemClass,
                children: t33
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 260,
                columnNumber: 13
            }, this);
            $[81] = itemClass;
            $[82] = t33;
            $[83] = t34;
        } else {
            t34 = $[83];
        }
        let t35;
        if ($[84] !== t) {
            t35 = t("ads.filters.android");
            $[84] = t;
            $[85] = t35;
        } else {
            t35 = $[85];
        }
        let t36;
        if ($[86] !== itemClass || $[87] !== t35) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "android",
                className: itemClass,
                children: t35
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 277,
                columnNumber: 13
            }, this);
            $[86] = itemClass;
            $[87] = t35;
            $[88] = t36;
        } else {
            t36 = $[88];
        }
        let t37;
        if ($[89] !== t) {
            t37 = t("ads.filters.ios");
            $[89] = t;
            $[90] = t37;
        } else {
            t37 = $[90];
        }
        let t38;
        if ($[91] !== itemClass || $[92] !== t37) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "ios",
                className: itemClass,
                children: t37
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 294,
                columnNumber: 13
            }, this);
            $[91] = itemClass;
            $[92] = t37;
            $[93] = t38;
        } else {
            t38 = $[93];
        }
        let t39;
        if ($[94] !== t30 || $[95] !== t32 || $[96] !== t34 || $[97] !== t36 || $[98] !== t38) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                className: "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
                children: [
                    t30,
                    t32,
                    t34,
                    t36,
                    t38
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 303,
                columnNumber: 13
            }, this);
            $[94] = t30;
            $[95] = t32;
            $[96] = t34;
            $[97] = t36;
            $[98] = t38;
            $[99] = t39;
        } else {
            t39 = $[99];
        }
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: platformFilter,
            onValueChange: onPlatformChange,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                    className: t26,
                    children: t28
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                    lineNumber: 313,
                    columnNumber: 74
                }, this),
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 313,
            columnNumber: 10
        }, this);
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"];
        t2 = typeFilter;
        t3 = onTypeChange;
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"];
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(triggerClass, "sm:w-[140px]");
        $[1] = isAr;
        $[2] = onPlatformChange;
        $[3] = onSearchChange;
        $[4] = onStatusChange;
        $[5] = onTypeChange;
        $[6] = platformFilter;
        $[7] = searchQuery;
        $[8] = statusFilter;
        $[9] = t;
        $[10] = typeFilter;
        $[11] = T0;
        $[12] = T1;
        $[13] = itemClass;
        $[14] = t1;
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
        $[20] = t7;
        $[21] = t8;
    } else {
        T0 = $[11];
        T1 = $[12];
        itemClass = $[13];
        t1 = $[14];
        t2 = $[15];
        t3 = $[16];
        t4 = $[17];
        t5 = $[18];
        t6 = $[19];
        t7 = $[20];
        t8 = $[21];
    }
    let t9;
    if ($[100] !== t) {
        t9 = t("ads.filters.format");
        $[100] = t;
        $[101] = t9;
    } else {
        t9 = $[101];
    }
    let t10;
    if ($[102] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            placeholder: t9
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[102] = t9;
        $[103] = t10;
    } else {
        t10 = $[103];
    }
    let t11;
    if ($[104] !== T0 || $[105] !== t1 || $[106] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t1,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[104] = T0;
        $[105] = t1;
        $[106] = t10;
        $[107] = t11;
    } else {
        t11 = $[107];
    }
    let t12;
    if ($[108] !== t) {
        t12 = t("ads.filters.allFormats");
        $[108] = t;
        $[109] = t12;
    } else {
        t12 = $[109];
    }
    let t13;
    if ($[110] !== itemClass || $[111] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "all",
            className: itemClass,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[110] = itemClass;
        $[111] = t12;
        $[112] = t13;
    } else {
        t13 = $[112];
    }
    let t14;
    if ($[113] !== t) {
        t14 = t("ads.filters.card");
        $[113] = t;
        $[114] = t14;
    } else {
        t14 = $[114];
    }
    let t15;
    if ($[115] !== itemClass || $[116] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "card",
            className: itemClass,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[115] = itemClass;
        $[116] = t14;
        $[117] = t15;
    } else {
        t15 = $[117];
    }
    let t16;
    if ($[118] !== t) {
        t16 = t("ads.filters.banner");
        $[118] = t;
        $[119] = t16;
    } else {
        t16 = $[119];
    }
    let t17;
    if ($[120] !== itemClass || $[121] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "banner",
            className: itemClass,
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[120] = itemClass;
        $[121] = t16;
        $[122] = t17;
    } else {
        t17 = $[122];
    }
    let t18;
    if ($[123] !== t) {
        t18 = t("ads.filters.native");
        $[123] = t;
        $[124] = t18;
    } else {
        t18 = $[124];
    }
    let t19;
    if ($[125] !== itemClass || $[126] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "native",
            className: itemClass,
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[125] = itemClass;
        $[126] = t18;
        $[127] = t19;
    } else {
        t19 = $[127];
    }
    let t20;
    if ($[128] !== t) {
        t20 = t("ads.filters.popUp");
        $[128] = t;
        $[129] = t20;
    } else {
        t20 = $[129];
    }
    let t21;
    if ($[130] !== itemClass || $[131] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "pop_up",
            className: itemClass,
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[130] = itemClass;
        $[131] = t20;
        $[132] = t21;
    } else {
        t21 = $[132];
    }
    let t22;
    if ($[133] !== t) {
        t22 = t("ads.filters.halfPage");
        $[133] = t;
        $[134] = t22;
    } else {
        t22 = $[134];
    }
    let t23;
    if ($[135] !== itemClass || $[136] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "half_page",
            className: itemClass,
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 474,
            columnNumber: 11
        }, this);
        $[135] = itemClass;
        $[136] = t22;
        $[137] = t23;
    } else {
        t23 = $[137];
    }
    let t24;
    if ($[138] !== t) {
        t24 = t("ads.filters.fullPage");
        $[138] = t;
        $[139] = t24;
    } else {
        t24 = $[139];
    }
    let t25;
    if ($[140] !== itemClass || $[141] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "full_page",
            className: itemClass,
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[140] = itemClass;
        $[141] = t24;
        $[142] = t25;
    } else {
        t25 = $[142];
    }
    let t26;
    if ($[143] !== t) {
        t26 = t("ads.filters.badge");
        $[143] = t;
        $[144] = t26;
    } else {
        t26 = $[144];
    }
    let t27;
    if ($[145] !== itemClass || $[146] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "badge",
            className: itemClass,
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, this);
        $[145] = itemClass;
        $[146] = t26;
        $[147] = t27;
    } else {
        t27 = $[147];
    }
    let t28;
    if ($[148] !== t13 || $[149] !== t15 || $[150] !== t17 || $[151] !== t19 || $[152] !== t21 || $[153] !== t23 || $[154] !== t25 || $[155] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            className: "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
            children: [
                t13,
                t15,
                t17,
                t19,
                t21,
                t23,
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[148] = t13;
        $[149] = t15;
        $[150] = t17;
        $[151] = t19;
        $[152] = t21;
        $[153] = t23;
        $[154] = t25;
        $[155] = t27;
        $[156] = t28;
    } else {
        t28 = $[156];
    }
    let t29;
    if ($[157] !== T1 || $[158] !== t11 || $[159] !== t2 || $[160] !== t28 || $[161] !== t3) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            value: t2,
            onValueChange: t3,
            children: [
                t11,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[157] = T1;
        $[158] = t11;
        $[159] = t2;
        $[160] = t28;
        $[161] = t3;
        $[162] = t29;
    } else {
        t29 = $[162];
    }
    let t30;
    if ($[163] !== t29 || $[164] !== t4 || $[165] !== t5 || $[166] !== t6) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[163] = t29;
        $[164] = t4;
        $[165] = t5;
        $[166] = t6;
        $[167] = t30;
    } else {
        t30 = $[167];
    }
    let t31;
    if ($[168] !== t30 || $[169] !== t7 || $[170] !== t8) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[168] = t30;
        $[169] = t7;
        $[170] = t8;
        $[171] = t31;
    } else {
        t31 = $[171];
    }
    return t31;
}, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdsFilters;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdsFilters$React.memo");
__turbopack_context__.k.register(_c1, "AdsFilters");
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
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
    if ($[0] !== "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b614b170e0413cfbbd11646c62a73ab6e1f242a85603d32055899c525a463589";
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
    if ($[0] !== "150747db4e97394f53e59bc9ebd85ae9ed51803ed6dea9992b0b6a4141791513") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "150747db4e97394f53e59bc9ebd85ae9ed51803ed6dea9992b0b6a4141791513";
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
"[project]/src/features/ads/components/AdsTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdsTable",
    ()=>AdsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
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
;
const AdsTable = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(function AdsTable(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(93);
    if ($[0] !== "b0ea5238cb02d8fe635767ff6946cafdbd3c164396bf5f0bd50c00db49dab6c0") {
        for(let $i = 0; $i < 93; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b0ea5238cb02d8fe635767ff6946cafdbd3c164396bf5f0bd50c00db49dab6c0";
    }
    const { settings, ads, isColVisible, updatingAdId, handleStatusToggle, onEditClick, onDeleteClick } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] !== settings?.settings?.density) {
        t1 = ({
            "AdsTable[getDensityClass]": ()=>{
                const density = settings?.settings?.density;
                switch(density){
                    case "compact":
                        {
                            return "py-1.5 px-3";
                        }
                    case "spacious":
                        {
                            return "py-3.5 px-3";
                        }
                    case "comfortable":
                    default:
                        {
                            return "py-2.5 px-3";
                        }
                }
            }
        })["AdsTable[getDensityClass]"];
        $[1] = settings?.settings?.density;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const getDensityClass = t1;
    let T0;
    let T1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[3] !== ads || $[4] !== getDensityClass || $[5] !== handleStatusToggle || $[6] !== isAr || $[7] !== isColVisible || $[8] !== onDeleteClick || $[9] !== onEditClick || $[10] !== routePrefix || $[11] !== router || $[12] !== t || $[13] !== updatingAdId) {
        const densityClass = getDensityClass();
        let T2;
        let T3;
        let T4;
        let cellNumberClass;
        let cellTextClass;
        let t10;
        let t11;
        let t12;
        let t13;
        let t14;
        let t15;
        let t16;
        let t17;
        let t6;
        let t7;
        let t8;
        let t9;
        if ($[20] !== isAr || $[21] !== isColVisible || $[22] !== t) {
            const headTextClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold text-gray-500 dark:text-gray-400 px-3", isAr ? "text-[13px] font-bold tracking-normal" : "text-[11px] tracking-wider");
            cellTextClass = isAr ? "text-sm font-medium" : "text-xs";
            cellNumberClass = isAr ? "text-sm font-bold" : "text-xs font-bold";
            t5 = "rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full";
            T1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"];
            t3 = "w-full min-w-[1000px]";
            T4 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"];
            T3 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"];
            t7 = "bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800";
            const t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "min-w-[220px]");
            let t19;
            if ($[43] !== t) {
                t19 = t("ads.columns.title");
                $[43] = t;
                $[44] = t19;
            } else {
                t19 = $[44];
            }
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: t18,
                children: t19
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 122,
                columnNumber: 12
            }, this);
            t9 = isColVisible("type") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[100px]"),
                children: t("ads.columns.type")
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 123,
                columnNumber: 36
            }, this);
            t10 = isColVisible("platform") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[100px]"),
                children: t("ads.columns.platform")
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 124,
                columnNumber: 41
            }, this);
            t11 = isColVisible("country") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[110px]"),
                children: t("ads.columns.country")
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 125,
                columnNumber: 40
            }, this);
            t12 = isColVisible("location") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[120px]"),
                children: t("ads.columns.locations")
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 126,
                columnNumber: 41
            }, this);
            t13 = isColVisible("views") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[90px]"),
                children: t("ads.columns.views")
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 127,
                columnNumber: 38
            }, this);
            t14 = isColVisible("clicks") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[90px]"),
                children: t("ads.columns.clicks")
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 128,
                columnNumber: 39
            }, this);
            t15 = isColVisible("ctr") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[80px]"),
                children: t("ads.columns.ctr")
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 129,
                columnNumber: 36
            }, this);
            t16 = isColVisible("visibility") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "text-center w-[90px]"),
                children: t("ads.columns.active")
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 130,
                columnNumber: 43
            }, this);
            t17 = isColVisible("status") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[110px]"),
                children: t("ads.columns.status")
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 131,
                columnNumber: 39
            }, this);
            T2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"];
            t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "text-center w-[110px]");
            $[20] = isAr;
            $[21] = isColVisible;
            $[22] = t;
            $[23] = T1;
            $[24] = T2;
            $[25] = T3;
            $[26] = T4;
            $[27] = cellNumberClass;
            $[28] = cellTextClass;
            $[29] = t10;
            $[30] = t11;
            $[31] = t12;
            $[32] = t13;
            $[33] = t14;
            $[34] = t15;
            $[35] = t16;
            $[36] = t17;
            $[37] = t3;
            $[38] = t5;
            $[39] = t6;
            $[40] = t7;
            $[41] = t8;
            $[42] = t9;
        } else {
            T1 = $[23];
            T2 = $[24];
            T3 = $[25];
            T4 = $[26];
            cellNumberClass = $[27];
            cellTextClass = $[28];
            t10 = $[29];
            t11 = $[30];
            t12 = $[31];
            t13 = $[32];
            t14 = $[33];
            t15 = $[34];
            t16 = $[35];
            t17 = $[36];
            t3 = $[37];
            t5 = $[38];
            t6 = $[39];
            t7 = $[40];
            t8 = $[41];
            t9 = $[42];
        }
        let t18;
        if ($[45] !== t) {
            t18 = t("ads.columns.actions");
            $[45] = t;
            $[46] = t18;
        } else {
            t18 = $[46];
        }
        let t19;
        if ($[47] !== T2 || $[48] !== t18 || $[49] !== t6) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
                className: t6,
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 189,
                columnNumber: 13
            }, this);
            $[47] = T2;
            $[48] = t18;
            $[49] = t6;
            $[50] = t19;
        } else {
            t19 = $[50];
        }
        let t20;
        if ($[51] !== T3 || $[52] !== t10 || $[53] !== t11 || $[54] !== t12 || $[55] !== t13 || $[56] !== t14 || $[57] !== t15 || $[58] !== t16 || $[59] !== t17 || $[60] !== t19 || $[61] !== t7 || $[62] !== t8 || $[63] !== t9) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T3, {
                className: t7,
                children: [
                    t8,
                    t9,
                    t10,
                    t11,
                    t12,
                    t13,
                    t14,
                    t15,
                    t16,
                    t17,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this);
            $[51] = T3;
            $[52] = t10;
            $[53] = t11;
            $[54] = t12;
            $[55] = t13;
            $[56] = t14;
            $[57] = t15;
            $[58] = t16;
            $[59] = t17;
            $[60] = t19;
            $[61] = t7;
            $[62] = t8;
            $[63] = t9;
            $[64] = t20;
        } else {
            t20 = $[64];
        }
        if ($[65] !== T4 || $[66] !== t20) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T4, {
                children: t20
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 218,
                columnNumber: 12
            }, this);
            $[65] = T4;
            $[66] = t20;
            $[67] = t4;
        } else {
            t4 = $[67];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"];
        if ($[68] !== ads || $[69] !== cellNumberClass || $[70] !== cellTextClass || $[71] !== densityClass || $[72] !== handleStatusToggle || $[73] !== isAr || $[74] !== isColVisible || $[75] !== onDeleteClick || $[76] !== onEditClick || $[77] !== routePrefix || $[78] !== router || $[79] !== t || $[80] !== updatingAdId) {
            t2 = ads.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                    colSpan: 11,
                    className: "p-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        type: "no_results",
                        title: t("ads.table.noAds"),
                        className: "py-12"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                        lineNumber: 227,
                        columnNumber: 81
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                    lineNumber: 227,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 227,
                columnNumber: 31
            }, this) : ads.map({
                "AdsTable[ads.map()]": (ad)=>{
                    const adId = ad.creative_id || ad.id;
                    const isActive = ad.status === "active" || ad.is_active === true;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        className: "border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: `px-3 ${densityClass}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "AdsTable[ads.map() > <button>.onClick]": ()=>router.push(`${routePrefix}/ads/${adId}`)
                                    }["AdsTable[ads.map() > <button>.onClick]"],
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-900 dark:text-gray-100 font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none tracking-tight truncate max-w-[240px]", isAr ? "text-sm font-bold" : "text-xs font-bold"),
                                    children: ad.creative_title || ad.title || t("ads.table.adFallback", {
                                        id: adId
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                    lineNumber: 231,
                                    columnNumber: 216
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 231,
                                columnNumber: 170
                            }, this),
                            isColVisible("type") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-600 dark:text-gray-300 px-3 capitalize truncate", cellTextClass, densityClass),
                                children: ad.type || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 235,
                                columnNumber: 66
                            }, this),
                            isColVisible("platform") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-600 dark:text-gray-300 px-3 capitalize truncate", cellTextClass, densityClass),
                                children: ad.platform || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 235,
                                columnNumber: 240
                            }, this),
                            isColVisible("country") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-500 dark:text-gray-400 px-3 truncate", cellTextClass, densityClass),
                                children: ad.country || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 235,
                                columnNumber: 417
                            }, this),
                            isColVisible("location") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-500 dark:text-gray-400 px-3 truncate", cellTextClass, densityClass),
                                children: ad.location || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 235,
                                columnNumber: 583
                            }, this),
                            isColVisible("views") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-teal-600 dark:text-teal-400 px-3", cellNumberClass, densityClass),
                                children: Number(ad.views || 0).toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 235,
                                columnNumber: 747
                            }, this),
                            isColVisible("clicks") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-teal-600 dark:text-teal-400 px-3", cellNumberClass, densityClass),
                                children: Number(ad.clicks || 0).toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 235,
                                columnNumber: 925
                            }, this),
                            isColVisible("ctr") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-900 dark:text-gray-100 px-3", cellTextClass, densityClass),
                                children: ad.ctr || "0%"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 235,
                                columnNumber: 1101
                            }, this),
                            isColVisible("visibility") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: `text-center px-3 ${densityClass}`,
                                onClick: _AdsTableAdsMapTableCellOnClick,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                    checked: isActive,
                                    onCheckedChange: {
                                        "AdsTable[ads.map() > <Switch>.onCheckedChange]": (checked)=>handleStatusToggle(String(adId), checked)
                                    }["AdsTable[ads.map() > <Switch>.onCheckedChange]"],
                                    disabled: updatingAdId === String(adId)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                    lineNumber: 235,
                                    columnNumber: 1357
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 235,
                                columnNumber: 1257
                            }, this),
                            isColVisible("status") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: `px-3 ${densityClass}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded border", isAr ? "text-xs font-semibold px-2.5 py-1" : "text-[11px] font-medium px-2 py-0.5", ad.status?.toLowerCase() === "active" ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800" : ad.status?.toLowerCase() === "paused" ? "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800" : "bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700"),
                                    children: ad.status || t("ads.status.draft")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                    lineNumber: 237,
                                    columnNumber: 197
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 237,
                                columnNumber: 151
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: `text-center px-3 ${densityClass}`,
                                onClick: _AdsTableAdsMapTableCellOnClick2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "AdsTable[ads.map() > <button>.onClick]": ()=>router.push(`${routePrefix}/ads/${adId}`)
                                            }["AdsTable[ads.map() > <button>.onClick]"],
                                            title: t("ads.table.view"),
                                            className: "h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                                lineNumber: 239,
                                                columnNumber: 251
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                            lineNumber: 237,
                                            columnNumber: 992
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "AdsTable[ads.map() > <button>.onClick]": ()=>onEditClick ? onEditClick(ad) : router.push(`${routePrefix}/ads/${adId}/edit`)
                                            }["AdsTable[ads.map() > <button>.onClick]"],
                                            title: t("common.edit"),
                                            className: "h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                                lineNumber: 241,
                                                columnNumber: 248
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                            lineNumber: 239,
                                            columnNumber: 291
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "AdsTable[ads.map() > <button>.onClick]": ()=>onDeleteClick(ad)
                                            }["AdsTable[ads.map() > <button>.onClick]"],
                                            title: t("common.delete"),
                                            className: "h-7 w-7 inline-flex items-center justify-center rounded text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                                lineNumber: 243,
                                                columnNumber: 248
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                            lineNumber: 241,
                                            columnNumber: 289
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                    lineNumber: 237,
                                    columnNumber: 936
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 237,
                                columnNumber: 835
                            }, this)
                        ]
                    }, adId, true, {
                        fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                        lineNumber: 231,
                        columnNumber: 18
                    }, this);
                }
            }["AdsTable[ads.map()]"]);
            $[68] = ads;
            $[69] = cellNumberClass;
            $[70] = cellTextClass;
            $[71] = densityClass;
            $[72] = handleStatusToggle;
            $[73] = isAr;
            $[74] = isColVisible;
            $[75] = onDeleteClick;
            $[76] = onEditClick;
            $[77] = routePrefix;
            $[78] = router;
            $[79] = t;
            $[80] = updatingAdId;
            $[81] = t2;
        } else {
            t2 = $[81];
        }
        $[3] = ads;
        $[4] = getDensityClass;
        $[5] = handleStatusToggle;
        $[6] = isAr;
        $[7] = isColVisible;
        $[8] = onDeleteClick;
        $[9] = onEditClick;
        $[10] = routePrefix;
        $[11] = router;
        $[12] = t;
        $[13] = updatingAdId;
        $[14] = T0;
        $[15] = T1;
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
        $[19] = t5;
    } else {
        T0 = $[14];
        T1 = $[15];
        t2 = $[16];
        t3 = $[17];
        t4 = $[18];
        t5 = $[19];
    }
    let t6;
    if ($[82] !== T0 || $[83] !== t2) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsTable.tsx",
            lineNumber: 290,
            columnNumber: 10
        }, this);
        $[82] = T0;
        $[83] = t2;
        $[84] = t6;
    } else {
        t6 = $[84];
    }
    let t7;
    if ($[85] !== T1 || $[86] !== t3 || $[87] !== t4 || $[88] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            className: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsTable.tsx",
            lineNumber: 299,
            columnNumber: 10
        }, this);
        $[85] = T1;
        $[86] = t3;
        $[87] = t4;
        $[88] = t6;
        $[89] = t7;
    } else {
        t7 = $[89];
    }
    let t8;
    if ($[90] !== t5 || $[91] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsTable.tsx",
            lineNumber: 310,
            columnNumber: 10
        }, this);
        $[90] = t5;
        $[91] = t7;
        $[92] = t8;
    } else {
        t8 = $[92];
    }
    return t8;
}, "NHbrIjQNSqdU4ydOdP1WKi/sCUs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
})), "NHbrIjQNSqdU4ydOdP1WKi/sCUs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = AdsTable;
function _AdsTableAdsMapTableCellOnClick(e) {
    return e.stopPropagation();
}
function _AdsTableAdsMapTableCellOnClick2(e_0) {
    return e_0.stopPropagation();
}
var _c, _c1;
__turbopack_context__.k.register(_c, "AdsTable$React.memo");
__turbopack_context__.k.register(_c1, "AdsTable");
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
    if ($[0] !== "fce1f5021024c02a79427eca0e6721b07eaa898803bf262f6e350a2dd645d1f4") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fce1f5021024c02a79427eca0e6721b07eaa898803bf262f6e350a2dd645d1f4";
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
"[project]/src/features/ads/components/AdsTableSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdsTableSection",
    ()=>AdsTableSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/AdsFilters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/AdsTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Pagination.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function AdsTableSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "8436c7d6b8a742a3cc231a57dda9074b7fff4947356dcbc89eba3956e902d7ca") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8436c7d6b8a742a3cc231a57dda9074b7fff4947356dcbc89eba3956e902d7ca";
    }
    const { settings, ads, selectedAds, updatingAdId, searchQuery, statusFilter, platformFilter, typeFilter, pagination, isColVisible, isFetching: t1, onSearchChange, onStatusChange, onPlatformChange, onTypeChange, onSelectAll, onSelectOne, onStatusToggle, onEditClick, onDeleteClick, onPageChange, onItemsPerPageChange } = t0;
    const isFetching = t1 === undefined ? false : t1;
    const { page, totalPages, totalItems, itemsPerPage } = pagination;
    let t2;
    if ($[1] !== isFetching) {
        t2 = isFetching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-1 left-0 right-0 h-0.5 bg-teal-500/20 overflow-hidden rounded-full z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full bg-teal-600 animate-pulse w-1/3 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
                lineNumber: 79,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
            lineNumber: 79,
            columnNumber: 24
        }, this);
        $[1] = isFetching;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== onPlatformChange || $[4] !== onSearchChange || $[5] !== onStatusChange || $[6] !== onTypeChange || $[7] !== platformFilter || $[8] !== searchQuery || $[9] !== statusFilter || $[10] !== typeFilter) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsFilters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsFilters"], {
                searchQuery: searchQuery,
                onSearchChange: onSearchChange,
                statusFilter: statusFilter,
                onStatusChange: onStatusChange,
                platformFilter: platformFilter,
                onPlatformChange: onPlatformChange,
                typeFilter: typeFilter,
                onTypeChange: onTypeChange
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
                lineNumber: 87,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[3] = onPlatformChange;
        $[4] = onSearchChange;
        $[5] = onStatusChange;
        $[6] = onTypeChange;
        $[7] = platformFilter;
        $[8] = searchQuery;
        $[9] = statusFilter;
        $[10] = typeFilter;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const t4 = `transition-opacity duration-200 ${isFetching ? "opacity-75" : "opacity-100"}`;
    let t5;
    if ($[12] !== ads || $[13] !== isColVisible || $[14] !== onDeleteClick || $[15] !== onEditClick || $[16] !== onSelectAll || $[17] !== onSelectOne || $[18] !== onStatusToggle || $[19] !== selectedAds || $[20] !== settings || $[21] !== updatingAdId) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsTable"], {
            settings: settings,
            ads: ads,
            selectedAds: selectedAds,
            handleSelectAll: onSelectAll,
            handleSelectOne: onSelectOne,
            isColVisible: isColVisible,
            updatingAdId: updatingAdId,
            handleStatusToggle: onStatusToggle,
            onEditClick: onEditClick,
            onDeleteClick: onDeleteClick
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[12] = ads;
        $[13] = isColVisible;
        $[14] = onDeleteClick;
        $[15] = onEditClick;
        $[16] = onSelectAll;
        $[17] = onSelectOne;
        $[18] = onStatusToggle;
        $[19] = selectedAds;
        $[20] = settings;
        $[21] = updatingAdId;
        $[22] = t5;
    } else {
        t5 = $[22];
    }
    let t6;
    if ($[23] !== t4 || $[24] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[23] = t4;
        $[24] = t5;
        $[25] = t6;
    } else {
        t6 = $[25];
    }
    let t7;
    if ($[26] !== onItemsPerPageChange || $[27] !== settings) {
        t7 = ({
            "AdsTableSection[<Pagination>.onPerPageChange]": (val)=>{
                onItemsPerPageChange(Number(val));
                settings?.setItemsPerPage(Number(val));
            }
        })["AdsTableSection[<Pagination>.onPerPageChange]"];
        $[26] = onItemsPerPageChange;
        $[27] = settings;
        $[28] = t7;
    } else {
        t7 = $[28];
    }
    let t8;
    if ($[29] !== ads.length || $[30] !== itemsPerPage || $[31] !== onPageChange || $[32] !== page || $[33] !== t7 || $[34] !== totalItems || $[35] !== totalPages) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
            page: page,
            totalPages: totalPages,
            perPage: itemsPerPage,
            totalItems: totalItems,
            currentItemsCount: ads.length,
            onPageChange: onPageChange,
            onPerPageChange: t7
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[29] = ads.length;
        $[30] = itemsPerPage;
        $[31] = onPageChange;
        $[32] = page;
        $[33] = t7;
        $[34] = totalItems;
        $[35] = totalPages;
        $[36] = t8;
    } else {
        t8 = $[36];
    }
    let t9;
    if ($[37] !== t2 || $[38] !== t3 || $[39] !== t6 || $[40] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 w-full relative",
            children: [
                t2,
                t3,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[37] = t2;
        $[38] = t3;
        $[39] = t6;
        $[40] = t8;
        $[41] = t9;
    } else {
        t9 = $[41];
    }
    return t9;
}
_c = AdsTableSection;
var _c;
__turbopack_context__.k.register(_c, "AdsTableSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ads/components/AdsModals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdsModals",
    ()=>AdsModals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
"use client";
;
;
;
const CreateAdModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/ads/create-ad-modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.CreateAdModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/ads/create-ad-modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = CreateAdModal;
const EditAdModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/ads/edit-ad-modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.EditAdModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/ads/edit-ad-modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = EditAdModal;
const DeleteAdDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/modals/ads/delete-ad-dialog.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.DeleteAdDialog), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/modals/ads/delete-ad-dialog.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = DeleteAdDialog;
function AdsModals(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "a8b16a348d34945b3b484864b0afe2f3faf863e248775831ab62bf92fd912e3c") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a8b16a348d34945b3b484864b0afe2f3faf863e248775831ab62bf92fd912e3c";
    }
    const { selectedAd, createAdModalOpen, editAdModalOpen, deleteAdDialogOpen, onCreateClose, onEditClose, onDeleteClose, onSuccess } = t0;
    let t1;
    if ($[1] !== createAdModalOpen || $[2] !== onCreateClose || $[3] !== onSuccess) {
        t1 = createAdModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateAdModal, {
            isOpen: createAdModalOpen,
            onClose: onCreateClose,
            onSuccess: onSuccess
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsModals.tsx",
            lineNumber: 44,
            columnNumber: 31
        }, this);
        $[1] = createAdModalOpen;
        $[2] = onCreateClose;
        $[3] = onSuccess;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== editAdModalOpen || $[6] !== onEditClose || $[7] !== onSuccess || $[8] !== selectedAd) {
        t2 = editAdModalOpen && selectedAd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditAdModal, {
            ad: selectedAd,
            isOpen: editAdModalOpen,
            onClose: onEditClose,
            onSuccess: onSuccess
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsModals.tsx",
            lineNumber: 54,
            columnNumber: 43
        }, this);
        $[5] = editAdModalOpen;
        $[6] = onEditClose;
        $[7] = onSuccess;
        $[8] = selectedAd;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== deleteAdDialogOpen || $[11] !== onDeleteClose || $[12] !== onSuccess || $[13] !== selectedAd) {
        t3 = deleteAdDialogOpen && selectedAd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeleteAdDialog, {
            isOpen: deleteAdDialogOpen,
            onClose: onDeleteClose,
            ad: selectedAd,
            onSuccess: onSuccess
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsModals.tsx",
            lineNumber: 65,
            columnNumber: 46
        }, this);
        $[10] = deleteAdDialogOpen;
        $[11] = onDeleteClose;
        $[12] = onSuccess;
        $[13] = selectedAd;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    let t4;
    if ($[15] !== t1 || $[16] !== t2 || $[17] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true);
        $[15] = t1;
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    return t4;
}
_c3 = AdsModals;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CreateAdModal");
__turbopack_context__.k.register(_c1, "EditAdModal");
__turbopack_context__.k.register(_c2, "DeleteAdDialog");
__turbopack_context__.k.register(_c3, "AdsModals");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/ads/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-table-settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminAds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboardAdminAds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/ads.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-ad-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$url$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-url-filters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsPageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/AdsPageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/AdsLoadingState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsStatCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/AdsStatCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsTableSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/AdsTableSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ads/components/AdsModals.tsx [app-client] (ecmascript)");
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
function AdsPage({ initialPage = 1, initialItemsPerPage = 15 }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const DEFAULT_COLUMNS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsPage.useMemo[DEFAULT_COLUMNS]": ()=>[
                {
                    id: "type",
                    label: t("ads.columns.type"),
                    visible: true
                },
                {
                    id: "platform",
                    label: t("ads.columns.platform"),
                    visible: true
                },
                {
                    id: "country",
                    label: t("ads.columns.country"),
                    visible: true
                },
                {
                    id: "location",
                    label: t("ads.columns.locations"),
                    visible: true
                },
                {
                    id: "views",
                    label: t("ads.columns.views"),
                    visible: true
                },
                {
                    id: "clicks",
                    label: t("ads.columns.clicks"),
                    visible: true
                },
                {
                    id: "ctr",
                    label: t("ads.columns.ctr"),
                    visible: true
                },
                {
                    id: "visibility",
                    label: t("ads.columns.active"),
                    visible: true
                },
                {
                    id: "status",
                    label: t("ads.columns.status"),
                    visible: true
                }
            ]
    }["AdsPage.useMemo[DEFAULT_COLUMNS]"], [
        t
    ]);
    const { filters, setFilter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$url$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUrlFilters"])({
        search: "",
        platform: "all",
        status: "all",
        format: "all",
        page: initialPage
    });
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(filters.search);
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(searchQuery);
    const [selectedAds, setSelectedAds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [createAdModalOpen, setCreateAdModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editAdModalOpen, setEditAdModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteAdDialogOpen, setDeleteAdDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAd, setSelectedAd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [updatingAdId, setUpdatingAdId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const tableSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableSettings"])("ads", DEFAULT_COLUMNS, initialItemsPerPage);
    const itemsPerPage = tableSettings.settings.itemsPerPage;
    // Only react to the debounced value: an external URL change (e.g. reset) updates searchQuery
    // below, and must not be overwritten by the stale debounced value.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdsPage.useEffect": ()=>{
            if (filters.search !== debouncedSearch) {
                setFilter("search", debouncedSearch);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AdsPage.useEffect"], [
        debouncedSearch
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdsPage.useEffect": ()=>{
            setSearchQuery(filters.search);
        }
    }["AdsPage.useEffect"], [
        filters.search
    ]);
    const isColVisible = (colId)=>tableSettings.settings.columns.find((c)=>c.id === colId)?.visible !== false;
    const adsFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsPage.useMemo[adsFilters]": ()=>({
                status: filters.status,
                platform: filters.platform,
                format: filters.format,
                search: filters.search
            })
    }["AdsPage.useMemo[adsFilters]"], [
        filters.status,
        filters.platform,
        filters.format,
        filters.search
    ]);
    const { adsData, totalsData, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminAds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Number(filters.page), itemsPerPage, adsFilters, tableSettings.isInitialized);
    const { data, isLoading: isQueryLoading, isError, error, refetch } = adsData;
    // Wait for the saved page size so the list is requested once with the right per_page.
    const isLoading = isQueryLoading || !tableSettings.isInitialized;
    const ads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsPage.useMemo[ads]": ()=>{
            if (!data) return [];
            if (Array.isArray(data)) return data;
            if (Array.isArray(data?.data)) return data.data;
            if (Array.isArray(data?.data?.data)) return data.data.data;
            if (Array.isArray(data?.ads)) return data.ads;
            return [];
        }
    }["AdsPage.useMemo[ads]"], [
        data
    ]);
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsPage.useMemo[totals]": ()=>{
            const raw = totalsData?.data;
            if (!raw) return {};
            if (raw.data && typeof raw.data === "object") return raw.data;
            return raw;
        }
    }["AdsPage.useMemo[totals]"], [
        totalsData
    ]);
    const totalItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsPage.useMemo[totalItems]": ()=>{
            const fromData = data?.total ?? data?.meta?.total ?? data?.data?.meta?.total ?? data?.data?.total;
            if (fromData !== undefined && fromData !== null && !isNaN(Number(fromData))) {
                return Number(fromData);
            }
            if (totals?.total_ads !== undefined && totals?.total_ads !== null && !isNaN(Number(totals.total_ads))) {
                return Number(totals.total_ads);
            }
            return ads.length;
        }
    }["AdsPage.useMemo[totalItems]"], [
        data,
        totals?.total_ads,
        ads.length
    ]);
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const adsTotals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsPage.useMemo[adsTotals]": ()=>{
            return [
                {
                    title: t("ads.totals.totalAds"),
                    value: (totals?.total_ads ?? "0").toString(),
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
                    trend: "+12.5%",
                    trendUp: true
                },
                {
                    title: t("ads.totals.activeAds"),
                    value: (totals?.active_ads ?? "0").toString(),
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                    trend: "+8.2%",
                    trendUp: true
                },
                {
                    title: t("ads.totals.views"),
                    value: Number(totals?.total_views ?? 0).toLocaleString(),
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
                    trend: "+5.2%",
                    trendUp: true
                },
                {
                    title: t("ads.totals.clicks"),
                    value: Number(totals?.total_clicks ?? 0).toLocaleString(),
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
                    trend: "+2.1%",
                    trendUp: true
                }
            ];
        }
    }["AdsPage.useMemo[adsTotals]"], [
        totals,
        t
    ]);
    const handleExportExcel = async ()=>{
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(t("ads.export.fetching"), {
                id: "export"
            });
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].getAds(1, 10000, adsFilters);
            const dataToExport = response.data?.data || response.data || [];
            if (dataToExport.length > 0) {
                const { adsExportToExcel } = await __turbopack_context__.A("[project]/src/lib/exports/export-ads.ts [app-client] (ecmascript, async loader)");
                adsExportToExcel(dataToExport);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("ads.export.excelSuccess"), {
                    id: "export"
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("ads.export.noData"), {
                    id: "export"
                });
            }
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("ads.export.fetchFailed"), {
                id: "export"
            });
        }
    };
    const handleExportPdf = async ()=>{
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(t("ads.export.fetching"), {
                id: "export"
            });
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].getAds(1, 10000, adsFilters);
            const dataToExport = response.data?.data || response.data || [];
            if (dataToExport.length > 0) {
                const { adsExportToPDF } = await __turbopack_context__.A("[project]/src/lib/exports/export-ads.ts [app-client] (ecmascript, async loader)");
                adsExportToPDF(dataToExport);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("ads.export.pdfSuccess"), {
                    id: "export"
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("ads.export.noData"), {
                    id: "export"
                });
            }
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("ads.export.fetchFailed"), {
                id: "export"
            });
        }
    };
    const { toggleAdStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"])();
    const handleStatusToggle = async (adId, checked)=>{
        setUpdatingAdId(adId);
        try {
            await toggleAdStatus({
                adId: Number(adId),
                status: checked ? "active" : "inactive"
            });
        } catch (err) {
            console.error(err);
        } finally{
            setUpdatingAdId(null);
        }
    };
    const handleSelectAll = (checked)=>{
        setSelectedAds(checked ? ads.map((ad)=>String(ad.creative_id || ad.id)) : []);
    };
    const handleSelectOne = (id, checked)=>{
        setSelectedAds((prev)=>checked ? [
                ...prev,
                id
            ] : prev.filter((adId)=>adId !== id));
    };
    const handleEditClick = (ad)=>{
        const adId = ad.creative_id || ad.id;
        router.push(`${routePrefix}/ads/${adId}/edit`);
    };
    const handleDeleteClick = (ad)=>{
        setSelectedAd(ad);
        setDeleteAdDialogOpen(true);
    };
    const isInitialLoading = isLoading && !data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 sm:p-4 space-y-4 max-w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsPageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsPageHeader"], {
                totalAds: Number(totals?.total_ads ?? totalItems),
                activeAds: Number(totals?.active_ads ?? 0),
                tableSettings: tableSettings,
                onCreateAd: ()=>router.push(`${routePrefix}/ads/create`),
                onExportExcel: handleExportExcel,
                onExportPdf: handleExportPdf
            }, void 0, false, {
                fileName: "[project]/src/app/admin/ads/page.client.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            isInitialLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsLoadingState"], {
                isLoading: true,
                isError: false,
                error: null,
                onRetry: refetch
            }, void 0, false, {
                fileName: "[project]/src/app/admin/ads/page.client.tsx",
                lineNumber: 262,
                columnNumber: 27
            }, this) : isError && !data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsLoadingState"], {
                isLoading: false,
                isError: true,
                error: error,
                onRetry: refetch
            }, void 0, false, {
                fileName: "[project]/src/app/admin/ads/page.client.tsx",
                lineNumber: 262,
                columnNumber: 132
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsStatCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsStatCards"], {
                        stats: adsTotals
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/page.client.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsTableSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsTableSection"], {
                        settings: tableSettings,
                        ads: ads,
                        selectedAds: selectedAds,
                        updatingAdId: updatingAdId,
                        searchQuery: searchQuery,
                        statusFilter: filters.status,
                        platformFilter: filters.platform,
                        typeFilter: filters.format,
                        pagination: {
                            page: Number(filters.page),
                            totalPages,
                            totalItems,
                            itemsPerPage
                        },
                        isColVisible: isColVisible,
                        isFetching: isFetching,
                        onSearchChange: setSearchQuery,
                        onStatusChange: (val)=>setFilter("status", val),
                        onPlatformChange: (val)=>setFilter("platform", val),
                        onTypeChange: (val)=>setFilter("format", val),
                        onSelectAll: handleSelectAll,
                        onSelectOne: handleSelectOne,
                        onStatusToggle: handleStatusToggle,
                        onEditClick: handleEditClick,
                        onDeleteClick: handleDeleteClick,
                        onPageChange: (page)=>setFilter("page", page),
                        onItemsPerPageChange: (count)=>{
                            tableSettings.setItemsPerPage(count);
                            setFilter("page", 1);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/page.client.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsModals"], {
                selectedAd: selectedAd,
                createAdModalOpen: createAdModalOpen,
                editAdModalOpen: editAdModalOpen,
                deleteAdDialogOpen: deleteAdDialogOpen,
                onCreateClose: ()=>setCreateAdModalOpen(false),
                onEditClose: ()=>setEditAdModalOpen(false),
                onDeleteClose: ()=>setDeleteAdDialogOpen(false),
                onSuccess: ()=>{
                    adsData.refetch();
                    totalsData.refetch();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/ads/page.client.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/ads/page.client.tsx",
        lineNumber: 259,
        columnNumber: 10
    }, this);
}
_s(AdsPage, "DiEjHFE60dW/jv6XPGoUR6UexVk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$url$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUrlFilters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminAds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ad$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdActions"]
    ];
});
_c = AdsPage;
var _c;
__turbopack_context__.k.register(_c, "AdsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_74223b51._.js.map