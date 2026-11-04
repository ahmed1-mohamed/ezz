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
        isColumnVisible
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
function useDashboardAdminAdsData(t0, t1, filters) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "7464af31d759235c9b5974fb38b39c99c6b10a060f28df99bc4f7335476340ae") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7464af31d759235c9b5974fb38b39c99c6b10a060f28df99bc4f7335476340ae";
    }
    const page = t0 === undefined ? 1 : t0;
    const limit = t1 === undefined ? 15 : t1;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const t2 = filters?.status;
    const t3 = filters?.platform;
    const t4 = filters?.format;
    const t5 = filters?.search;
    let t6;
    if ($[1] !== limit || $[2] !== page || $[3] !== t2 || $[4] !== t3 || $[5] !== t4 || $[6] !== t5) {
        t6 = [
            "ads",
            page,
            limit,
            t2,
            t3,
            t4,
            t5
        ];
        $[1] = limit;
        $[2] = page;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== filters || $[9] !== limit || $[10] !== page) {
        t7 = async ()=>{
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
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const t8 = !!token;
    let t9;
    if ($[12] !== t6 || $[13] !== t7 || $[14] !== t8) {
        t9 = {
            queryKey: t6,
            queryFn: t7,
            retry: 1,
            enabled: t8,
            staleTime: 300000,
            gcTime: 600000,
            placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
        };
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const adsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t9);
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [
            "adsTotals"
        ];
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    const t11 = !!token;
    let t12;
    if ($[17] !== t11) {
        t12 = {
            queryKey: t10,
            queryFn: _temp,
            retry: 1,
            enabled: t11,
            staleTime: 300000,
            gcTime: 600000,
            placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
        };
        $[17] = t11;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    const totalsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t12);
    let t13;
    if ($[19] !== adsData || $[20] !== totalsData) {
        t13 = {
            adsData,
            totalsData,
            isLoading: adsData.isLoading,
            isFetching: adsData.isFetching,
            isError: adsData.isError
        };
        $[19] = adsData;
        $[20] = totalsData;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    return t13;
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
    if ($[0] !== "b3168771e6c67f0e975d33114c1c1a4586289f10bd0b849efae3774f6220f8bb") {
        for(let $i = 0; $i < 85; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b3168771e6c67f0e975d33114c1c1a4586289f10bd0b849efae3774f6220f8bb";
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
        t5 = t("ads.title") || "Advertisements";
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
            lineNumber: 65,
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
        t9 = t("ads.title")?.toLowerCase() || "ads";
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
            lineNumber: 91,
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
                    lineNumber: 100,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-teal-700 dark:text-teal-400 font-semibold",
                    children: [
                        activeAds,
                        " ",
                        t("ads.active") || "active"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
                    lineNumber: 100,
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
            lineNumber: 109,
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
            lineNumber: 119,
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
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t) {
        t17 = t("tableSettings.export") || "Export";
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
            lineNumber: 152,
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
                lineNumber: 160,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 160,
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
            className: "h-3.5 w-3.5 mr-2 text-emerald-600"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    if ($[38] !== t) {
        t23 = t("tableSettings.exportExcel") || "Excel (.xlsx)";
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
            lineNumber: 193,
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
            lineNumber: 201,
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
            className: "h-3.5 w-3.5 mr-2 text-red-600"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsPageHeader.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] !== t) {
        t29 = t("tableSettings.exportPdf") || "PDF (.pdf)";
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
            lineNumber: 235,
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
            lineNumber: 243,
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
            lineNumber: 253,
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
            lineNumber: 262,
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
            lineNumber: 271,
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
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[69] = t37;
    } else {
        t37 = $[69];
    }
    let t38;
    if ($[70] !== t) {
        t38 = t("ads.createAd") || "Create Ad";
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
            lineNumber: 305,
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
            lineNumber: 313,
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
            lineNumber: 323,
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
            lineNumber: 333,
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AdsLoadingState(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "76b927e3e62bfd4b84cde98be6aa9e379484dba71039bd7bbdc29c5f61bf696e") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "76b927e3e62bfd4b84cde98be6aa9e379484dba71039bd7bbdc29c5f61bf696e";
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
                lineNumber: 33,
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
                lineNumber: 40,
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
                                lineNumber: 47,
                                columnNumber: 168
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 w-full sm:w-[150px] bg-gray-100 dark:bg-neutral-800 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                                lineNumber: 47,
                                columnNumber: 254
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 w-full sm:w-[140px] bg-gray-100 dark:bg-neutral-800 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                                lineNumber: 47,
                                columnNumber: 340
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 47,
                        columnNumber: 104
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 47,
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
                        lineNumber: 54,
                        columnNumber: 146
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-28 bg-gray-200 dark:bg-neutral-700 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 54,
                        columnNumber: 213
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded hidden sm:block"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 54,
                        columnNumber: 281
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 54,
                        columnNumber: 365
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-20 bg-gray-200 dark:bg-neutral-700 rounded hidden lg:block"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 54,
                        columnNumber: 449
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 54,
                        columnNumber: 533
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 54,
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
                                lineNumber: 61,
                                columnNumber: 192
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 61,
                        columnNumber: 68
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 61,
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
                lineNumber: 71,
                columnNumber: 12
            }, this);
            $[6] = t1;
        } else {
            t1 = $[6];
        }
        let t2;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Error:"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 78,
                columnNumber: 12
            }, this);
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        let t3;
        if ($[8] !== error || $[9] !== t) {
            t3 = error instanceof Error ? error.message : t("ads.failedLoad") || "Failed to load ads";
            $[8] = error;
            $[9] = t;
            $[10] = t3;
        } else {
            t3 = $[10];
        }
        let t4;
        if ($[11] !== t3) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-800",
                        children: [
                            t2,
                            " ",
                            t3
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 94,
                        columnNumber: 57
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 94,
                columnNumber: 12
            }, this);
            $[11] = t3;
            $[12] = t4;
        } else {
            t4 = $[12];
        }
        let t5;
        if ($[13] !== t) {
            t5 = t("ads.messages.tryAgain") || "Try Again";
            $[13] = t;
            $[14] = t5;
        } else {
            t5 = $[14];
        }
        let t6;
        if ($[15] !== onRetry || $[16] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: onRetry,
                className: "mt-2 border-red-200 text-red-700 hover:bg-red-100",
                children: t5
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 110,
                columnNumber: 12
            }, this);
            $[15] = onRetry;
            $[16] = t5;
            $[17] = t6;
        } else {
            t6 = $[17];
        }
        let t7;
        if ($[18] !== t4 || $[19] !== t6) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-red-200 bg-red-50 p-4",
                children: [
                    t4,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 119,
                columnNumber: 12
            }, this);
            $[18] = t4;
            $[19] = t6;
            $[20] = t7;
        } else {
            t7 = $[20];
        }
        return t7;
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
                lineNumber: 131,
                columnNumber: 71
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3.5 w-44 bg-gray-200 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 131,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 w-24 bg-gray-100 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 131,
                        columnNumber: 252
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 131,
                columnNumber: 138
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 w-16 bg-gray-100 dark:bg-neutral-800 rounded hidden sm:block"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 131,
                columnNumber: 328
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 w-14 bg-gray-100 dark:bg-neutral-800 rounded hidden md:block"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 131,
                columnNumber: 412
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3.5 w-12 bg-gray-100 dark:bg-neutral-800 rounded hidden lg:block"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 131,
                columnNumber: 496
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3.5 w-12 bg-gray-100 dark:bg-neutral-800 rounded hidden lg:block"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 131,
                columnNumber: 582
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 w-14 bg-gray-200 dark:bg-neutral-800 rounded"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 131,
                columnNumber: 668
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1.5 ml-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-7 w-7 bg-gray-100 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 131,
                        columnNumber: 771
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-7 w-7 bg-gray-100 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 131,
                        columnNumber: 838
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 131,
                columnNumber: 736
            }, this)
        ]
    }, row, true, {
        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
        lineNumber: 131,
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
                        lineNumber: 134,
                        columnNumber: 227
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 w-8 bg-gray-100 dark:bg-neutral-800 rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 134,
                        columnNumber: 295
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 134,
                columnNumber: 176
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5 mt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-28 bg-gray-200 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 134,
                        columnNumber: 405
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 w-16 bg-gray-100 dark:bg-neutral-800 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                        lineNumber: 134,
                        columnNumber: 473
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
                lineNumber: 134,
                columnNumber: 371
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/features/ads/components/AdsLoadingState.tsx",
        lineNumber: 134,
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
    if ($[0] !== "d1fee1d881d796d0811c41823176cc01b0b6b4c76a616d471e619fc4d91e92c1") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1fee1d881d796d0811c41823176cc01b0b6b4c76a616d471e619fc4d91e92c1";
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
                                            t("ads.totals.fromLastMonth") || "from last month"
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
;
;
;
;
function SearchInput(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "2eff2b196132e62364ba2749ed42838456759fea999eb7d8f2bb1e4ee8afdcb0") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2eff2b196132e62364ba2749ed42838456759fea999eb7d8f2bb1e4ee8afdcb0";
    }
    const { value, onChange, placeholder: t1, className: t2 } = t0;
    const placeholder = t1 === undefined ? "Search..." : t1;
    const className = t2 === undefined ? "" : t2;
    const t3 = `relative w-full ${className}`;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SearchInput.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    let t5;
    if ($[2] !== onChange) {
        t5 = ({
            "SearchInput[<Input>.onChange]": (e)=>onChange(e.target.value)
        })["SearchInput[<Input>.onChange]"];
        $[2] = onChange;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    let t6;
    if ($[4] !== placeholder || $[5] !== t5 || $[6] !== value) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: placeholder,
            value: value,
            onChange: t5,
            "aria-label": placeholder,
            className: "pl-10 bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 dark:text-slate-200 dark:placeholder-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SearchInput.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[4] = placeholder;
        $[5] = t5;
        $[6] = value;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t3 || $[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SearchInput.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(138);
    if ($[0] !== "4ff40e2c7de64226c74a4777495be28387efb1c24e05da1140a47f38ad8a671a") {
        for(let $i = 0; $i < 138; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4ff40e2c7de64226c74a4777495be28387efb1c24e05da1140a47f38ad8a671a";
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
            t11 = t("ads.filters.search") || "Search by ad title or location...";
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
        let t12;
        if ($[30] !== t) {
            t12 = t("ads.filters.status") || "Status";
            $[30] = t;
            $[31] = t12;
        } else {
            t12 = $[31];
        }
        let t13;
        if ($[32] !== t12) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t12
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this);
            $[32] = t12;
            $[33] = t13;
        } else {
            t13 = $[33];
        }
        let t14;
        if ($[34] !== t) {
            t14 = t("ads.filters.allStatus") || "All Status";
            $[34] = t;
            $[35] = t14;
        } else {
            t14 = $[35];
        }
        let t15;
        if ($[36] !== itemClass || $[37] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "all",
                className: itemClass,
                children: t14
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this);
            $[36] = itemClass;
            $[37] = t14;
            $[38] = t15;
        } else {
            t15 = $[38];
        }
        let t16;
        if ($[39] !== t) {
            t16 = t("ads.status.active") || "Active";
            $[39] = t;
            $[40] = t16;
        } else {
            t16 = $[40];
        }
        let t17;
        if ($[41] !== itemClass || $[42] !== t16) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "active",
                className: itemClass,
                children: t16
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this);
            $[41] = itemClass;
            $[42] = t16;
            $[43] = t17;
        } else {
            t17 = $[43];
        }
        let t18;
        if ($[44] !== t) {
            t18 = t("ads.status.paused") || "Paused";
            $[44] = t;
            $[45] = t18;
        } else {
            t18 = $[45];
        }
        let t19;
        if ($[46] !== itemClass || $[47] !== t18) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "paused",
                className: itemClass,
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this);
            $[46] = itemClass;
            $[47] = t18;
            $[48] = t19;
        } else {
            t19 = $[48];
        }
        let t20;
        if ($[49] !== t) {
            t20 = t("ads.status.draft") || "Draft";
            $[49] = t;
            $[50] = t20;
        } else {
            t20 = $[50];
        }
        let t21;
        if ($[51] !== itemClass || $[52] !== t20) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "draft",
                className: itemClass,
                children: t20
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 161,
                columnNumber: 13
            }, this);
            $[51] = itemClass;
            $[52] = t20;
            $[53] = t21;
        } else {
            t21 = $[53];
        }
        let t22;
        if ($[54] !== t) {
            t22 = t("ads.status.ended") || "Ended";
            $[54] = t;
            $[55] = t22;
        } else {
            t22 = $[55];
        }
        let t23;
        if ($[56] !== itemClass || $[57] !== t22) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "ended",
                className: itemClass,
                children: t22
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, this);
            $[56] = itemClass;
            $[57] = t22;
            $[58] = t23;
        } else {
            t23 = $[58];
        }
        let t24;
        if ($[59] !== t15 || $[60] !== t17 || $[61] !== t19 || $[62] !== t21 || $[63] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                className: "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
                children: [
                    t15,
                    t17,
                    t19,
                    t21,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 187,
                columnNumber: 13
            }, this);
            $[59] = t15;
            $[60] = t17;
            $[61] = t19;
            $[62] = t21;
            $[63] = t23;
            $[64] = t24;
        } else {
            t24 = $[64];
        }
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: statusFilter,
            onValueChange: onStatusChange,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(triggerClass, "sm:w-[140px]"),
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                    lineNumber: 197,
                    columnNumber: 70
                }, this),
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 197,
            columnNumber: 10
        }, this);
        let t25;
        if ($[65] !== t) {
            t25 = t("ads.filters.platform") || "Platform";
            $[65] = t;
            $[66] = t25;
        } else {
            t25 = $[66];
        }
        let t26;
        if ($[67] !== t25) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t25
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, this);
            $[67] = t25;
            $[68] = t26;
        } else {
            t26 = $[68];
        }
        let t27;
        if ($[69] !== t) {
            t27 = t("ads.filters.allPlatforms") || "All Platforms";
            $[69] = t;
            $[70] = t27;
        } else {
            t27 = $[70];
        }
        let t28;
        if ($[71] !== itemClass || $[72] !== t27) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "all",
                className: itemClass,
                children: t27
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this);
            $[71] = itemClass;
            $[72] = t27;
            $[73] = t28;
        } else {
            t28 = $[73];
        }
        let t29;
        if ($[74] !== t) {
            t29 = t("ads.filters.mobile") || "Mobile App";
            $[74] = t;
            $[75] = t29;
        } else {
            t29 = $[75];
        }
        let t30;
        if ($[76] !== itemClass || $[77] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "mobile",
                className: itemClass,
                children: t29
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 241,
                columnNumber: 13
            }, this);
            $[76] = itemClass;
            $[77] = t29;
            $[78] = t30;
        } else {
            t30 = $[78];
        }
        let t31;
        if ($[79] !== t) {
            t31 = t("ads.filters.web") || "Web";
            $[79] = t;
            $[80] = t31;
        } else {
            t31 = $[80];
        }
        let t32;
        if ($[81] !== itemClass || $[82] !== t31) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "web",
                className: itemClass,
                children: t31
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 258,
                columnNumber: 13
            }, this);
            $[81] = itemClass;
            $[82] = t31;
            $[83] = t32;
        } else {
            t32 = $[83];
        }
        let t33;
        let t34;
        if ($[84] !== itemClass) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "android",
                className: itemClass,
                children: "Android"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 268,
                columnNumber: 13
            }, this);
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                value: "ios",
                className: itemClass,
                children: "iOS"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this);
            $[84] = itemClass;
            $[85] = t33;
            $[86] = t34;
        } else {
            t33 = $[85];
            t34 = $[86];
        }
        let t35;
        if ($[87] !== t28 || $[88] !== t30 || $[89] !== t32 || $[90] !== t33 || $[91] !== t34) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                className: "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
                children: [
                    t28,
                    t30,
                    t32,
                    t33,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                lineNumber: 279,
                columnNumber: 13
            }, this);
            $[87] = t28;
            $[88] = t30;
            $[89] = t32;
            $[90] = t33;
            $[91] = t34;
            $[92] = t35;
        } else {
            t35 = $[92];
        }
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: platformFilter,
            onValueChange: onPlatformChange,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(triggerClass, "sm:w-[150px]"),
                    children: t26
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
                    lineNumber: 289,
                    columnNumber: 74
                }, this),
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 289,
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
    if ($[93] !== t) {
        t9 = t("ads.filters.format") || "Format";
        $[93] = t;
        $[94] = t9;
    } else {
        t9 = $[94];
    }
    let t10;
    if ($[95] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            placeholder: t9
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[95] = t9;
        $[96] = t10;
    } else {
        t10 = $[96];
    }
    let t11;
    if ($[97] !== T0 || $[98] !== t1 || $[99] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t1,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[97] = T0;
        $[98] = t1;
        $[99] = t10;
        $[100] = t11;
    } else {
        t11 = $[100];
    }
    let t12;
    if ($[101] !== t) {
        t12 = t("ads.filters.allFormats") || "All Formats";
        $[101] = t;
        $[102] = t12;
    } else {
        t12 = $[102];
    }
    let t13;
    if ($[103] !== itemClass || $[104] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "all",
            className: itemClass,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[103] = itemClass;
        $[104] = t12;
        $[105] = t13;
    } else {
        t13 = $[105];
    }
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    if ($[106] !== itemClass) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "card",
            className: itemClass,
            children: "Card"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "banner",
            className: itemClass,
            children: "Banner"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "native",
            className: itemClass,
            children: "Native"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "pop_up",
            className: itemClass,
            children: "Pop-up"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "half_page",
            className: itemClass,
            children: "Half Page"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "full_page",
            className: itemClass,
            children: "Full Page"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "badge",
            className: itemClass,
            children: "Badge"
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[106] = itemClass;
        $[107] = t14;
        $[108] = t15;
        $[109] = t16;
        $[110] = t17;
        $[111] = t18;
        $[112] = t19;
        $[113] = t20;
    } else {
        t14 = $[107];
        t15 = $[108];
        t16 = $[109];
        t17 = $[110];
        t18 = $[111];
        t19 = $[112];
        t20 = $[113];
    }
    let t21;
    if ($[114] !== t13 || $[115] !== t14 || $[116] !== t15 || $[117] !== t16 || $[118] !== t17 || $[119] !== t18 || $[120] !== t19 || $[121] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            className: "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800",
            children: [
                t13,
                t14,
                t15,
                t16,
                t17,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[114] = t13;
        $[115] = t14;
        $[116] = t15;
        $[117] = t16;
        $[118] = t17;
        $[119] = t18;
        $[120] = t19;
        $[121] = t20;
        $[122] = t21;
    } else {
        t21 = $[122];
    }
    let t22;
    if ($[123] !== T1 || $[124] !== t11 || $[125] !== t2 || $[126] !== t21 || $[127] !== t3) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            value: t2,
            onValueChange: t3,
            children: [
                t11,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[123] = T1;
        $[124] = t11;
        $[125] = t2;
        $[126] = t21;
        $[127] = t3;
        $[128] = t22;
    } else {
        t22 = $[128];
    }
    let t23;
    if ($[129] !== t22 || $[130] !== t4 || $[131] !== t5 || $[132] !== t6) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[129] = t22;
        $[130] = t4;
        $[131] = t5;
        $[132] = t6;
        $[133] = t23;
    } else {
        t23 = $[133];
    }
    let t24;
    if ($[134] !== t23 || $[135] !== t7 || $[136] !== t8) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ads/components/AdsFilters.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[134] = t23;
        $[135] = t7;
        $[136] = t8;
        $[137] = t24;
    } else {
        t24 = $[137];
    }
    return t24;
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-start align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className);
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className);
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
    if ($[0] !== "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "884e793a15ad0802c253177ac665736ccd5b889c281d3965092a4713860c2245";
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
    if ($[0] !== "1edeb7e1ab1a5e6a2e2ade7419a651729e45e82ff5073ed78fd9836c0b6d41b8") {
        for(let $i = 0; $i < 93; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1edeb7e1ab1a5e6a2e2ade7419a651729e45e82ff5073ed78fd9836c0b6d41b8";
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
            let t18;
            if ($[43] !== t) {
                t18 = t("ads.columns.title") || "AD TITLE";
                $[43] = t;
                $[44] = t18;
            } else {
                t18 = $[44];
            }
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "min-w-[220px]"),
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 121,
                columnNumber: 12
            }, this);
            t9 = isColVisible("type") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[100px]"),
                children: t("ads.columns.type") || "TYPE"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 122,
                columnNumber: 36
            }, this);
            t10 = isColVisible("platform") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[100px]"),
                children: t("ads.columns.platform") || "PLATFORM"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 123,
                columnNumber: 41
            }, this);
            t11 = isColVisible("country") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[110px]"),
                children: t("ads.columns.country") || "COUNTRY"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 124,
                columnNumber: 40
            }, this);
            t12 = isColVisible("location") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[120px]"),
                children: t("ads.columns.locations") || "LOCATION"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 125,
                columnNumber: 41
            }, this);
            t13 = isColVisible("views") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[90px]"),
                children: t("ads.columns.views") || "VIEWS"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 126,
                columnNumber: 38
            }, this);
            t14 = isColVisible("clicks") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[90px]"),
                children: t("ads.columns.clicks") || "CLICKS"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 127,
                columnNumber: 39
            }, this);
            t15 = isColVisible("ctr") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[80px]"),
                children: t("ads.columns.ctr") || "CTR"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 128,
                columnNumber: 36
            }, this);
            t16 = isColVisible("visibility") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "text-center w-[90px]"),
                children: t("ads.columns.active") || "ACTIVE"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 129,
                columnNumber: 43
            }, this);
            t17 = isColVisible("status") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(headTextClass, "w-[110px]"),
                children: t("ads.columns.status") || "STATUS"
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 130,
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
            t18 = t("ads.columns.actions") || "ACTIONS";
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
                lineNumber: 188,
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
                lineNumber: 198,
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
                lineNumber: 217,
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
                        title: t("ads.table.noAds") || "No advertisements found",
                        className: "py-12"
                    }, void 0, false, {
                        fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                        lineNumber: 226,
                        columnNumber: 81
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                    lineNumber: 226,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                lineNumber: 226,
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
                                    children: ad.creative_title || ad.title || `Ad #${adId}`
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                    lineNumber: 230,
                                    columnNumber: 216
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 230,
                                columnNumber: 170
                            }, this),
                            isColVisible("type") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-600 dark:text-gray-300 px-3 capitalize truncate", cellTextClass, densityClass),
                                children: ad.type || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 232,
                                columnNumber: 411
                            }, this),
                            isColVisible("platform") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-600 dark:text-gray-300 px-3 capitalize truncate", cellTextClass, densityClass),
                                children: ad.platform || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 232,
                                columnNumber: 585
                            }, this),
                            isColVisible("country") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-500 dark:text-gray-400 px-3 truncate", cellTextClass, densityClass),
                                children: ad.country || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 232,
                                columnNumber: 762
                            }, this),
                            isColVisible("location") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-500 dark:text-gray-400 px-3 truncate", cellTextClass, densityClass),
                                children: ad.location || "-"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 232,
                                columnNumber: 928
                            }, this),
                            isColVisible("views") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-teal-600 dark:text-teal-400 px-3", cellNumberClass, densityClass),
                                children: Number(ad.views || 0).toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 232,
                                columnNumber: 1092
                            }, this),
                            isColVisible("clicks") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-teal-600 dark:text-teal-400 px-3", cellNumberClass, densityClass),
                                children: Number(ad.clicks || 0).toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 232,
                                columnNumber: 1270
                            }, this),
                            isColVisible("ctr") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-gray-900 dark:text-gray-100 px-3", cellTextClass, densityClass),
                                children: ad.ctr || "0%"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 232,
                                columnNumber: 1446
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
                                    lineNumber: 232,
                                    columnNumber: 1702
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 232,
                                columnNumber: 1602
                            }, this),
                            isColVisible("status") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: `px-3 ${densityClass}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded border", isAr ? "text-xs font-semibold px-2.5 py-1" : "text-[11px] font-medium px-2 py-0.5", ad.status?.toLowerCase() === "active" ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800" : ad.status?.toLowerCase() === "paused" ? "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800" : "bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700"),
                                    children: ad.status || "Draft"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                    lineNumber: 234,
                                    columnNumber: 197
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 234,
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
                                            title: "View",
                                            className: "h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                                lineNumber: 236,
                                                columnNumber: 236
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                            lineNumber: 234,
                                            columnNumber: 978
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "AdsTable[ads.map() > <button>.onClick]": ()=>onEditClick ? onEditClick(ad) : router.push(`${routePrefix}/ads/${adId}/edit`)
                                            }["AdsTable[ads.map() > <button>.onClick]"],
                                            title: "Edit",
                                            className: "h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                                lineNumber: 238,
                                                columnNumber: 236
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                            lineNumber: 236,
                                            columnNumber: 276
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "AdsTable[ads.map() > <button>.onClick]": ()=>onDeleteClick(ad)
                                            }["AdsTable[ads.map() > <button>.onClick]"],
                                            title: "Delete",
                                            className: "h-7 w-7 inline-flex items-center justify-center rounded text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                                lineNumber: 240,
                                                columnNumber: 236
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                            lineNumber: 238,
                                            columnNumber: 277
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                    lineNumber: 234,
                                    columnNumber: 922
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                                lineNumber: 234,
                                columnNumber: 821
                            }, this)
                        ]
                    }, adId, true, {
                        fileName: "[project]/src/features/ads/components/AdsTable.tsx",
                        lineNumber: 230,
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
            lineNumber: 287,
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
            lineNumber: 296,
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
            lineNumber: 307,
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
    if ($[0] !== "e05bdd0c742411bd9e48ce859333e8bf635a5a74b08d6118f71a44582bf68ac3") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e05bdd0c742411bd9e48ce859333e8bf635a5a74b08d6118f71a44582bf68ac3";
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
            className: "flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left",
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
    if ($[0] !== "416c8ca7d398e46062572390ea97bf95486d957e86bb3ad890a0bab5cb0dace3") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "416c8ca7d398e46062572390ea97bf95486d957e86bb3ad890a0bab5cb0dace3";
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
                lineNumber: 81,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
            lineNumber: 81,
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
                lineNumber: 89,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/ads/components/AdsTableSection.tsx",
            lineNumber: 89,
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
            lineNumber: 105,
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
            lineNumber: 122,
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
            lineNumber: 145,
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
            lineNumber: 159,
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
    if ($[0] !== "44a0afc585d8ea60ac761706ef509ca7fc48f69574325507eb1a14bb2159df89") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44a0afc585d8ea60ac761706ef509ca7fc48f69574325507eb1a14bb2159df89";
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
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
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const DEFAULT_COLUMNS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsPage.useMemo[DEFAULT_COLUMNS]": ()=>[
                {
                    id: "type",
                    label: t("ads.columns.type") || "Type",
                    visible: true
                },
                {
                    id: "platform",
                    label: t("ads.columns.platform") || "Platform",
                    visible: true
                },
                {
                    id: "country",
                    label: t("ads.columns.country") || "Country",
                    visible: true
                },
                {
                    id: "location",
                    label: t("ads.columns.locations") || "Locations",
                    visible: true
                },
                {
                    id: "views",
                    label: t("ads.columns.views") || "Views",
                    visible: true
                },
                {
                    id: "clicks",
                    label: t("ads.columns.clicks") || "Clicks",
                    visible: true
                },
                {
                    id: "ctr",
                    label: t("ads.columns.ctr") || "CTR",
                    visible: true
                },
                {
                    id: "visibility",
                    label: t("ads.columns.active") || "Active",
                    visible: true
                },
                {
                    id: "status",
                    label: t("ads.columns.status") || "Status",
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
    const [itemsPerPage, setItemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialItemsPerPage);
    const [selectedAds, setSelectedAds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [createAdModalOpen, setCreateAdModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editAdModalOpen, setEditAdModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteAdDialogOpen, setDeleteAdDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAd, setSelectedAd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [updatingAdId, setUpdatingAdId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const tableSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$table$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTableSettings"])("ads", DEFAULT_COLUMNS, initialItemsPerPage);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdsPage.useEffect": ()=>{
            const timer = setTimeout({
                "AdsPage.useEffect.timer": ()=>{
                    if (filters.search !== searchQuery) {
                        setFilter("search", searchQuery);
                    }
                }
            }["AdsPage.useEffect.timer"], 300);
            return ({
                "AdsPage.useEffect": ()=>clearTimeout(timer)
            })["AdsPage.useEffect"];
        }
    }["AdsPage.useEffect"], [
        searchQuery,
        setFilter,
        filters.search
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdsPage.useEffect": ()=>{
            setSearchQuery(filters.search);
        }
    }["AdsPage.useEffect"], [
        filters.search
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdsPage.useEffect": ()=>{
            setItemsPerPage(tableSettings.settings.itemsPerPage);
        }
    }["AdsPage.useEffect"], [
        tableSettings.settings.itemsPerPage
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
    const { adsData, totalsData, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminAds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Number(filters.page), itemsPerPage, adsFilters);
    const { data, isLoading, isError, error, refetch } = adsData;
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
    const startIndex = (Number(filters.page) - 1) * itemsPerPage;
    const adsTotals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsPage.useMemo[adsTotals]": ()=>{
            const isAr = language === "ar";
            const getCardTitle = {
                "AdsPage.useMemo[adsTotals].getCardTitle": (key, enText, arText)=>{
                    const translated = t(key);
                    if (translated && translated !== key) return translated;
                    return isAr ? arText : enText;
                }
            }["AdsPage.useMemo[adsTotals].getCardTitle"];
            return [
                {
                    title: getCardTitle("ads.totals.totalAds", "Total Ads", "إجمالي الإعلانات"),
                    value: (totals?.total_ads ?? "0").toString(),
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
                    trend: "+12.5%",
                    trendUp: true
                },
                {
                    title: getCardTitle("ads.totals.activeAds", "Active Ads", "الإعلانات النشطة"),
                    value: (totals?.active_ads ?? "0").toString(),
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                    trend: "+8.2%",
                    trendUp: true
                },
                {
                    title: getCardTitle("ads.totals.views", "Total Views", "إجمالي المشاهدات"),
                    value: Number(totals?.total_views ?? 0).toLocaleString(),
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
                    trend: "+5.2%",
                    trendUp: true
                },
                {
                    title: getCardTitle("ads.totals.clicks", "Total Clicks", "إجمالي النقرات"),
                    value: Number(totals?.total_clicks ?? 0).toLocaleString(),
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
                    trend: "+2.1%",
                    trendUp: true
                }
            ];
        }
    }["AdsPage.useMemo[adsTotals]"], [
        totals,
        t,
        language
    ]);
    const handleExportExcel = async ()=>{
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Fetching all ads for export...", {
                id: "export"
            });
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].getAds(1, 10000, adsFilters);
            const dataToExport = response.data?.data || response.data || [];
            if (dataToExport.length > 0) {
                const { adsExportToExcel } = await __turbopack_context__.A("[project]/src/lib/exports/export-ads.ts [app-client] (ecmascript, async loader)");
                adsExportToExcel(dataToExport);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Ads exported to Excel successfully", {
                    id: "export"
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No data to export", {
                    id: "export"
                });
            }
        } catch (err) {
            console.error(err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to fetch ads for export", {
                id: "export"
            });
        }
    };
    const handleExportPdf = async ()=>{
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Fetching all ads for export...", {
                id: "export"
            });
            const response_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$ads$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAdsService"].getAds(1, 10000, adsFilters);
            const dataToExport_0 = response_0.data?.data || response_0.data || [];
            if (dataToExport_0.length > 0) {
                const { adsExportToPDF } = await __turbopack_context__.A("[project]/src/lib/exports/export-ads.ts [app-client] (ecmascript, async loader)");
                adsExportToPDF(dataToExport_0);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Ads exported to PDF successfully", {
                    id: "export"
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No data to export", {
                    id: "export"
                });
            }
        } catch (err_0) {
            console.error(err_0);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to fetch ads for export", {
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
        } catch (err_1) {
            console.error(err_1);
        } finally{
            setUpdatingAdId(null);
        }
    };
    const handleSelectAll = (checked_0)=>{
        setSelectedAds(checked_0 ? ads.map((ad)=>String(ad.creative_id || ad.id)) : []);
    };
    const handleSelectOne = (id, checked_1)=>{
        setSelectedAds((prev)=>checked_1 ? [
                ...prev,
                id
            ] : prev.filter((adId_0)=>adId_0 !== id));
    };
    const handleEditClick = (ad_0)=>{
        const adId_1 = ad_0.creative_id || ad_0.id;
        router.push(`${routePrefix}/ads/${adId_1}/edit`);
    };
    const handleDeleteClick = (ad_1)=>{
        setSelectedAd(ad_1);
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
                lineNumber: 270,
                columnNumber: 7
            }, this),
            isInitialLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsLoadingState"], {
                isLoading: true,
                isError: false,
                error: null,
                onRetry: refetch
            }, void 0, false, {
                fileName: "[project]/src/app/admin/ads/page.client.tsx",
                lineNumber: 272,
                columnNumber: 27
            }, this) : isError && !data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsLoadingState"], {
                isLoading: false,
                isError: true,
                error: error,
                onRetry: refetch
            }, void 0, false, {
                fileName: "[project]/src/app/admin/ads/page.client.tsx",
                lineNumber: 272,
                columnNumber: 132
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ads$2f$components$2f$AdsStatCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdsStatCards"], {
                        stats: adsTotals
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/page.client.tsx",
                        lineNumber: 273,
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
                            startIndex,
                            itemsPerPage
                        },
                        isColVisible: isColVisible,
                        isFetching: isFetching,
                        onSearchChange: setSearchQuery,
                        onStatusChange: (val)=>setFilter("status", val),
                        onPlatformChange: (val_0)=>setFilter("platform", val_0),
                        onTypeChange: (val_1)=>setFilter("format", val_1),
                        onSelectAll: handleSelectAll,
                        onSelectOne: handleSelectOne,
                        onStatusToggle: handleStatusToggle,
                        onEditClick: handleEditClick,
                        onDeleteClick: handleDeleteClick,
                        onPageChange: (page)=>setFilter("page", page),
                        onItemsPerPageChange: (count)=>{
                            setItemsPerPage(count);
                            tableSettings.setItemsPerPage(count);
                            setFilter("page", 1);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/ads/page.client.tsx",
                        lineNumber: 275,
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
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/ads/page.client.tsx",
        lineNumber: 269,
        columnNumber: 10
    }, this);
}
_s(AdsPage, "c0WJ7q/q0Anf2x2w3uAOvj2fsm4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$url$2d$filters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUrlFilters"],
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

//# sourceMappingURL=src_1e46e7d8._.js.map