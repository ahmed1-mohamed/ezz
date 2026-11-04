(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/hooks/use-developer-details.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeveloperDetails",
    ()=>useDeveloperDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/services/AdminDevelopersService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function useDeveloperDetails(developerId) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "50ffc2bfde2c4566dab4aa2a3ccc4579a8deff2bd0a164bfc624164c6fdb2798") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "50ffc2bfde2c4566dab4aa2a3ccc4579a8deff2bd0a164bfc624164c6fdb2798";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    let t1;
    if ($[1] !== developerId) {
        t0 = [
            "developerDetails",
            developerId
        ];
        t1 = async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDevelopersService"].getDeveloper(Number(developerId));
            return res.data;
        };
        $[1] = developerId;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    const t2 = !!token && !!developerId;
    let t3;
    if ($[4] !== t0 || $[5] !== t1 || $[6] !== t2) {
        t3 = {
            queryKey: t0,
            queryFn: t1,
            enabled: t2,
            retry: false
        };
        $[4] = t0;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const developerQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
    let t4;
    if ($[8] !== developerId || $[9] !== developerQuery.data || $[10] !== token) {
        t4 = async (isTop)=>{
            if (!token || !developerQuery.data) {
                throw new Error("Missing token or developer data");
            }
            const formData = new FormData();
            const developer = developerQuery.data;
            formData.append("name", developer.name);
            formData.append("email", developer.email || "");
            formData.append("phone_number", developer.phone_number || "");
            formData.append("website", developer.website || "");
            formData.append("description", developer.description || "");
            formData.append("status", developer.status || "active");
            formData.append("is_top", isTop ? "1" : "0");
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDevelopersService"].updateDeveloper(Number(developerId), formData);
        };
        $[8] = developerId;
        $[9] = developerQuery.data;
        $[10] = token;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== developerId || $[13] !== queryClient || $[14] !== t) {
        t5 = ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "developerDetails",
                    developerId
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "developers"
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("developers.messages.topStatusSuccess"));
        };
        $[12] = developerId;
        $[13] = queryClient;
        $[14] = t;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t) {
        t6 = (error)=>{
            console.error(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error?.message || t("developers.messages.topStatusFailed"));
        };
        $[16] = t;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== t4 || $[19] !== t5 || $[20] !== t6) {
        t7 = {
            mutationFn: t4,
            onSuccess: t5,
            onError: t6
        };
        $[18] = t4;
        $[19] = t5;
        $[20] = t6;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    const toggleTopMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t7);
    const t8 = developerQuery.data?.data ? developerQuery.data.data : developerQuery.data;
    let t9;
    if ($[22] !== developerQuery.error || $[23] !== developerQuery.isError || $[24] !== developerQuery.isLoading || $[25] !== developerQuery.refetch || $[26] !== t8 || $[27] !== toggleTopMutation.isPending || $[28] !== toggleTopMutation.mutate) {
        t9 = {
            developer: t8,
            isLoading: developerQuery.isLoading,
            isError: developerQuery.isError,
            error: developerQuery.error,
            toggleTop: toggleTopMutation.mutate,
            isTogglingTop: toggleTopMutation.isPending,
            refetch: developerQuery.refetch
        };
        $[22] = developerQuery.error;
        $[23] = developerQuery.isError;
        $[24] = developerQuery.isLoading;
        $[25] = developerQuery.refetch;
        $[26] = t8;
        $[27] = toggleTopMutation.isPending;
        $[28] = toggleTopMutation.mutate;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    return t9;
}
_s(useDeveloperDetails, "XeZSh8vt+iLvMJTmLEGRcQUdZKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/safe-image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafeImage",
    ()=>SafeImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/config.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SafeImage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "9a425be8b1f4d06c354bf555225f7b6f8834487eb1118a4b2d55bdbe2ddbbfe7") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a425be8b1f4d06c354bf555225f7b6f8834487eb1118a4b2d55bdbe2ddbbfe7";
    }
    let alt;
    let props;
    let src;
    let t1;
    if ($[1] !== t0) {
        ({ src, fallbackSrc: t1, alt, ...props } = t0);
        $[1] = t0;
        $[2] = alt;
        $[3] = props;
        $[4] = src;
        $[5] = t1;
    } else {
        alt = $[2];
        props = $[3];
        src = $[4];
        t1 = $[5];
    }
    const fallbackSrc = t1 === undefined ? "/images/default-avatar.svg" : t1;
    let t2;
    if ($[6] !== fallbackSrc) {
        t2 = ({
            "SafeImage[getFullUrl]": (url)=>{
                if (!url || url === "U" || url.trim() === "") {
                    return fallbackSrc;
                }
                const clean = url.trim().replace(/\\+/g, "");
                if (!clean) {
                    return fallbackSrc;
                }
                let finalUrl;
                if (clean.startsWith("http://") || clean.startsWith("https://") || clean.startsWith("data:") || clean.startsWith("blob:") || clean.startsWith("/") && !clean.startsWith("/storage") && !clean.startsWith("/uploads")) {
                    finalUrl = clean;
                } else {
                    const formatted = clean.startsWith("/") ? clean : `/${clean}`;
                    finalUrl = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}${formatted}`;
                }
                try {
                    return encodeURI(decodeURI(finalUrl));
                } catch  {
                    try {
                        return encodeURI(finalUrl);
                    } catch  {
                        return finalUrl;
                    }
                }
            }
        })["SafeImage[getFullUrl]"];
        $[6] = fallbackSrc;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const getFullUrl = t2;
    const resolvedSrc = getFullUrl(src);
    const [failedSrc, setFailedSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const imageSrc = failedSrc === resolvedSrc ? fallbackSrc : resolvedSrc;
    const handleError = {
        "SafeImage[handleError]": ()=>{
            if (imageSrc !== fallbackSrc) {
                setFailedSrc(resolvedSrc);
            }
        }
    }["SafeImage[handleError]"];
    const isRemote = imageSrc.startsWith("http://") || imageSrc.startsWith("https://");
    const T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const t3 = "no-referrer";
    const t4 = imageSrc.startsWith("blob:") || imageSrc.startsWith("data:") || isRemote || imageSrc.toLowerCase().includes(".svg");
    let t5;
    if ($[8] !== T0 || $[9] !== alt || $[10] !== handleError || $[11] !== imageSrc || $[12] !== props || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            ...props,
            src: imageSrc,
            alt: alt,
            onError: handleError,
            referrerPolicy: t3,
            unoptimized: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ui/safe-image.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[8] = T0;
        $[9] = alt;
        $[10] = handleError;
        $[11] = imageSrc;
        $[12] = props;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_s(SafeImage, "UStsmCRg2Alb27a1Bss88do17Gw=");
_c = SafeImage;
var _c;
__turbopack_context__.k.register(_c, "SafeImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeveloperHeader",
    ()=>DeveloperHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/safe-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function DeveloperHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "fd71c3ba97c836ac7f0764f898d7995223afe00976d89755fdd7249ef002ca9c") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fd71c3ba97c836ac7f0764f898d7995223afe00976d89755fdd7249ef002ca9c";
    }
    const { developer, onEdit, onCreateDeveloper } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== developer.logo || $[2] !== developer.name) {
        t1 = developer.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$safe$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeImage"], {
            src: developer.logo,
            alt: developer.name,
            width: 112,
            height: 112,
            fallbackSrc: "/images/default-logo.svg",
            className: "w-20 h-20 sm:w-28 sm:h-28 rounded-xl object-contain p-1 border border-gray-200 bg-white shadow-sm flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 30,
            columnNumber: 27
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-20 h-20 sm:w-28 sm:h-28 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-2xl sm:text-3xl font-bold text-gray-600 flex-shrink-0",
            children: developer.name?.substring(0, 2).toUpperCase()
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 30,
            columnNumber: 273
        }, this);
        $[1] = developer.logo;
        $[2] = developer.name;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== developer.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg sm:text-xl font-bold text-gray-900 truncate",
            children: developer.name
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = developer.name;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== developer.is_top) {
        t3 = developer.is_top === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500 flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 47,
            columnNumber: 36
        }, this);
        $[6] = developer.is_top;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = `inline-flex h-2 w-2 rounded-full flex-shrink-0 ${developer.status === "active" ? "bg-green-500" : "bg-gray-400"}`;
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t5
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== developer.status || $[14] !== t) {
        t7 = t(`common.${developer.status}`) || developer.status;
        $[13] = developer.status;
        $[14] = t;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "capitalize",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t6 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mt-1 sm:mt-2 text-sm text-gray-600 flex-wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    t6,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
                lineNumber: 90,
                columnNumber: 96
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== t4 || $[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0",
            children: [
                t4,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[21] = t4;
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t1 || $[25] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 sm:gap-4 min-w-0",
            children: [
                t1,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[24] = t1;
        $[25] = t10;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t) {
        t13 = t("developers.addDeveloper");
        $[28] = t;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden xs:inline",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== onCreateDeveloper || $[33] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-1.5 text-sm h-9 px-3",
            onClick: onCreateDeveloper,
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[32] = onCreateDeveloper;
        $[33] = t14;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t) {
        t17 = t("common.update");
        $[36] = t;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden xs:inline",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[38] = t17;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] !== onEdit || $[41] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-blue-600 hover:bg-blue-700 text-white gap-1.5 text-sm h-9 px-3",
            onClick: onEdit,
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[40] = onEdit;
        $[41] = t18;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== t15 || $[44] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap sm:flex-nowrap sm:flex-shrink-0",
            children: [
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[43] = t15;
        $[44] = t19;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== t11 || $[47] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",
            children: [
                t11,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[46] = t11;
        $[47] = t20;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    return t21;
}
_s(DeveloperHeader, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = DeveloperHeader;
var _c;
__turbopack_context__.k.register(_c, "DeveloperHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/developers/components/developer-details/DeveloperStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeveloperStats",
    ()=>DeveloperStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function DeveloperStats(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "3713823e65a23b4615654f76c57500407da3be6692a020b397cafe769e854f77") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3713823e65a23b4615654f76c57500407da3be6692a020b397cafe769e854f77";
    }
    const { developer, totalProjects, totalUnits, availableUnits } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("developers.details.totalProjects");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1 || $[4] !== totalProjects) {
        t2 = {
            label: t1,
            value: totalProjects
        };
        $[3] = t1;
        $[4] = totalProjects;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t) {
        t3 = t("developers.details.activeProjects");
        $[6] = t;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = developer.active_projects_count || 0;
    let t5;
    if ($[8] !== t3 || $[9] !== t4) {
        t5 = {
            label: t3,
            value: t4
        };
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t) {
        t6 = t("developers.details.completedProjects");
        $[11] = t;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = developer.completed_projects_count || 0;
    let t8;
    if ($[13] !== t6 || $[14] !== t7) {
        t8 = {
            label: t6,
            value: t7
        };
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t) {
        t9 = t("developers.details.totalUnits");
        $[16] = t;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const t10 = developer.total_units_count ?? totalUnits ?? "-";
    let t11;
    if ($[18] !== t10 || $[19] !== t9) {
        t11 = {
            label: t9,
            value: t10
        };
        $[18] = t10;
        $[19] = t9;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t) {
        t12 = t("developers.details.avUnits");
        $[21] = t;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    const t13 = developer.available_units_count ?? availableUnits ?? "-";
    let t14;
    if ($[23] !== t12 || $[24] !== t13) {
        t14 = {
            label: t12,
            value: t13
        };
        $[23] = t12;
        $[24] = t13;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t) {
        t15 = t("developers.details.soldUnits");
        $[26] = t;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    const t16 = developer.booked_units_count || 0;
    let t17;
    if ($[28] !== t15 || $[29] !== t16) {
        t17 = {
            label: t15,
            value: t16
        };
        $[28] = t15;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t11 || $[32] !== t14 || $[33] !== t17 || $[34] !== t2 || $[35] !== t5 || $[36] !== t8) {
        t18 = [
            t2,
            t5,
            t8,
            t11,
            t14,
            t17
        ];
        $[31] = t11;
        $[32] = t14;
        $[33] = t17;
        $[34] = t2;
        $[35] = t5;
        $[36] = t8;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    const stats = t18;
    let t19;
    if ($[38] !== stats) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100",
            children: stats.map(_DeveloperStatsStatsMap)
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperStats.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[38] = stats;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    return t19;
}
_s(DeveloperStats, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = DeveloperStats;
function _DeveloperStatsStatsMap(stat, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center sm:text-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs sm:text-sm text-gray-500 mb-1 leading-tight",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/features/developers/components/developer-details/DeveloperStats.tsx",
                lineNumber: 177,
                columnNumber: 63
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl sm:text-2xl font-bold text-gray-900",
                children: stat.value
            }, void 0, false, {
                fileName: "[project]/src/features/developers/components/developer-details/DeveloperStats.tsx",
                lineNumber: 177,
                columnNumber: 146
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/features/developers/components/developer-details/DeveloperStats.tsx",
        lineNumber: 177,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DeveloperStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeveloperAbout",
    ()=>DeveloperAbout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function DeveloperAbout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(97);
    if ($[0] !== "3840831d18342b7251312e0ab7caf9a05f78dae2bbe04ac99a9a46d86100805d") {
        for(let $i = 0; $i < 97; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3840831d18342b7251312e0ab7caf9a05f78dae2bbe04ac99a9a46d86100805d";
    }
    const { developer, handleToggleTopDeveloper, isTogglingTop } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("developers.details.aboutDeveloper");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-base sm:text-lg font-semibold text-gray-900 mb-3",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== developer.description || $[6] !== t) {
        t3 = developer.description || t("developers.details.noDescription");
        $[5] = developer.description;
        $[6] = t;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-600 leading-relaxed",
            dangerouslySetInnerHTML: {
                __html: t3
            }
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t2 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-4 sm:p-6",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t) {
        t6 = t("developers.details.contactInfo");
        $[13] = t;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-base sm:text-lg font-semibold text-gray-900 mb-3",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t) {
        t8 = t("common.name");
        $[17] = t;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-500 flex-shrink-0",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== developer.name) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium text-end break-all",
            children: developer.name
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[21] = developer.name;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t9;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t) {
        t12 = t("common.email");
        $[26] = t;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-500 flex-shrink-0",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== developer.email || $[31] !== t) {
        t14 = developer.email || t("common.na");
        $[30] = developer.email;
        $[31] = t;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium text-end break-all",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[33] = t14;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t13 || $[36] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[35] = t13;
        $[36] = t15;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== t) {
        t17 = t("common.phone");
        $[38] = t;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-500 flex-shrink-0",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[40] = t17;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== developer.phone_number || $[43] !== t) {
        t19 = developer.phone_number || t("common.na");
        $[42] = developer.phone_number;
        $[43] = t;
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium text-end break-all",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[45] = t19;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] !== t18 || $[48] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2",
            children: [
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[47] = t18;
        $[48] = t20;
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] !== t) {
        t22 = t("developers.country");
        $[50] = t;
        $[51] = t22;
    } else {
        t22 = $[51];
    }
    let t23;
    if ($[52] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-500 flex-shrink-0",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[52] = t22;
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    let t24;
    if ($[54] !== developer || $[55] !== t) {
        t24 = developer.country_name || developer.countries || (developer.country_id === 1 ? t("common.countries.egypt") : developer.country_id === 3 ? t("common.countries.oman") : developer.country_id === 2 ? t("common.countries.uae") : t("common.na"));
        $[54] = developer;
        $[55] = t;
        $[56] = t24;
    } else {
        t24 = $[56];
    }
    let t25;
    if ($[57] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium text-end break-all",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[57] = t24;
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] !== t23 || $[60] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2",
            children: [
                t23,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[59] = t23;
        $[60] = t25;
        $[61] = t26;
    } else {
        t26 = $[61];
    }
    let t27;
    if ($[62] !== t) {
        t27 = t("developers.details.isTopDeveloper");
        $[62] = t;
        $[63] = t27;
    } else {
        t27 = $[63];
    }
    let t28;
    if ($[64] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-500 flex-shrink-0 leading-tight",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[64] = t27;
        $[65] = t28;
    } else {
        t28 = $[65];
    }
    const t29 = developer.is_top === 1;
    let t30;
    if ($[66] !== handleToggleTopDeveloper || $[67] !== isTogglingTop || $[68] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
            id: "is-top-developer-toggle",
            checked: t29,
            onCheckedChange: handleToggleTopDeveloper,
            disabled: isTogglingTop
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[66] = handleToggleTopDeveloper;
        $[67] = isTogglingTop;
        $[68] = t29;
        $[69] = t30;
    } else {
        t30 = $[69];
    }
    let t31;
    if ($[70] !== developer.is_top || $[71] !== t) {
        t31 = developer.is_top === 1 ? t("common.yes") : t("common.no");
        $[70] = developer.is_top;
        $[71] = t;
        $[72] = t31;
    } else {
        t31 = $[72];
    }
    let t32;
    if ($[73] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-900 font-medium",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[73] = t31;
        $[74] = t32;
    } else {
        t32 = $[74];
    }
    let t33;
    if ($[75] !== t30 || $[76] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t30,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[75] = t30;
        $[76] = t32;
        $[77] = t33;
    } else {
        t33 = $[77];
    }
    let t34;
    if ($[78] !== t28 || $[79] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-2",
            children: [
                t28,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[78] = t28;
        $[79] = t33;
        $[80] = t34;
    } else {
        t34 = $[80];
    }
    let t35;
    if ($[81] !== developer.website || $[82] !== t) {
        t35 = developer.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-500 flex-shrink-0",
                    children: t("developers.columns.website")
                }, void 0, false, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
                    lineNumber: 310,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: developer.website,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 text-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "break-all",
                            children: t("developers.details.visitSite")
                        }, void 0, false, {
                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
                            lineNumber: 310,
                            columnNumber: 351
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            className: "h-3 w-3 flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
                            lineNumber: 310,
                            columnNumber: 421
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
                    lineNumber: 310,
                    columnNumber: 182
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 310,
            columnNumber: 32
        }, this);
        $[81] = developer.website;
        $[82] = t;
        $[83] = t35;
    } else {
        t35 = $[83];
    }
    let t36;
    if ($[84] !== t11 || $[85] !== t16 || $[86] !== t21 || $[87] !== t26 || $[88] !== t34 || $[89] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t11,
                t16,
                t21,
                t26,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[84] = t11;
        $[85] = t16;
        $[86] = t21;
        $[87] = t26;
        $[88] = t34;
        $[89] = t35;
        $[90] = t36;
    } else {
        t36 = $[90];
    }
    let t37;
    if ($[91] !== t36 || $[92] !== t7) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-4 sm:p-6",
            children: [
                t7,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[91] = t36;
        $[92] = t7;
        $[93] = t37;
    } else {
        t37 = $[93];
    }
    let t38;
    if ($[94] !== t37 || $[95] !== t5) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t5,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[94] = t37;
        $[95] = t5;
        $[96] = t38;
    } else {
        t38 = $[96];
    }
    return t38;
}
_s(DeveloperAbout, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = DeveloperAbout;
var _c;
__turbopack_context__.k.register(_c, "DeveloperAbout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground",
            success: "border-transparent bg-green-500 text-white shadow hover:bg-green-600",
            warning: "border-transparent bg-yellow-500 text-yellow-950 shadow hover:bg-yellow-600",
            info: "border-transparent bg-blue-500 text-white shadow hover:bg-blue-600"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "e8162700fcf396f6988f2259647e02c569c62a29bb396819953ff757eb902a10") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e8162700fcf396f6988f2259647e02c569c62a29bb396819953ff757eb902a10";
    }
    let className;
    let props;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = variant;
    } else {
        className = $[2];
        props = $[3];
        variant = $[4];
    }
    let t1;
    if ($[5] !== className || $[6] !== variant) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className);
        $[5] = className;
        $[6] = variant;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/badge.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
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
"[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeveloperTabs",
    ()=>DeveloperTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function DeveloperTabs(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(63);
    if ($[0] !== "63509c22cfe5dfbc93632fafd2908a02f73dc4f97ee64bee66e201e72f57bccf") {
        for(let $i = 0; $i < 63; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "63509c22cfe5dfbc93632fafd2908a02f73dc4f97ee64bee66e201e72f57bccf";
    }
    const { developer, projects, units } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("projects");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [selectedUnits, setSelectedUnits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(units.length / 10);
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    let t2;
    if ($[2] !== endIndex || $[3] !== startIndex || $[4] !== units) {
        t2 = units.slice(startIndex, endIndex);
        $[2] = endIndex;
        $[3] = startIndex;
        $[4] = units;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const paginatedUnits = t2;
    let t3;
    if ($[6] !== paginatedUnits) {
        t3 = ({
            "DeveloperTabs[handleSelectAll]": (checked)=>{
                if (checked) {
                    setSelectedUnits(paginatedUnits.map(_DeveloperTabsHandleSelectAllPaginatedUnitsMap));
                } else {
                    setSelectedUnits([]);
                }
            }
        })["DeveloperTabs[handleSelectAll]"];
        $[6] = paginatedUnits;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleSelectAll = t3;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "DeveloperTabs[handleSelectUnit]": (unitId, checked_0)=>{
                if (checked_0) {
                    setSelectedUnits({
                        "DeveloperTabs[handleSelectUnit > setSelectedUnits()]": (prev)=>[
                                ...prev,
                                unitId
                            ]
                    }["DeveloperTabs[handleSelectUnit > setSelectedUnits()]"]);
                } else {
                    setSelectedUnits({
                        "DeveloperTabs[handleSelectUnit > setSelectedUnits()]": (prev_0)=>prev_0.filter({
                                "DeveloperTabs[handleSelectUnit > setSelectedUnits() > prev_0.filter()]": (id)=>id !== unitId
                            }["DeveloperTabs[handleSelectUnit > setSelectedUnits() > prev_0.filter()]"])
                    }["DeveloperTabs[handleSelectUnit > setSelectedUnits()]"]);
                }
            }
        })["DeveloperTabs[handleSelectUnit]"];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleSelectUnit = t4;
    let t5;
    if ($[9] !== t) {
        t5 = t("developers.details.projects");
        $[9] = t;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = {
            id: "projects",
            label: t5,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
        };
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t) {
        t7 = t("developers.details.paymentPlans");
        $[13] = t;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t7) {
        t8 = {
            id: "payment",
            label: t7,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        };
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t) {
        t9 = t("developers.details.units");
        $[17] = t;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t9) {
        t10 = {
            id: "units",
            label: t9,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        };
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t) {
        t11 = t("developers.details.documents");
        $[21] = t;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11) {
        t12 = {
            id: "documents",
            label: t11,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        };
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t10 || $[26] !== t12 || $[27] !== t6 || $[28] !== t8) {
        t13 = [
            t6,
            t8,
            t10,
            t12
        ];
        $[25] = t10;
        $[26] = t12;
        $[27] = t6;
        $[28] = t8;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== activeTab || $[31] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-200 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-0.5 overflow-x-auto scrollbar-none px-2 sm:px-4 py-1 sm:py-2",
                children: t13.map({
                    "DeveloperTabs[(anonymous)()]": (tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "DeveloperTabs[(anonymous)() > <button>.onClick]": ()=>setActiveTab(tab.id)
                            }["DeveloperTabs[(anonymous)() > <button>.onClick]"],
                            className: `flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-t-lg transition-all whitespace-nowrap flex-shrink-0 ${activeTab === tab.id ? "bg-white text-teal-600 border-t-2 border-teal-600 shadow-sm" : "text-gray-600 hover:text-gray-900 hover:bg-white/50"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                    className: `h-3.5 w-3.5 sm:h-4 sm:w-4 ${activeTab === tab.id ? "text-teal-600" : "text-gray-400"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                    lineNumber: 196,
                                    columnNumber: 366
                                }, this),
                                tab.label
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                            lineNumber: 194,
                            columnNumber: 50
                        }, this)
                }["DeveloperTabs[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                lineNumber: 193,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[30] = activeTab;
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== activeTab || $[34] !== projects || $[35] !== t) {
        t15 = activeTab === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end mb-3 sm:mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "gap-2 bg-purple-600 text-white hover:bg-purple-700 text-xs sm:text-sm h-8 sm:h-9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-3.5 w-3.5 sm:h-4 sm:w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                lineNumber: 206,
                                columnNumber: 223
                            }, this),
                            t("common.export")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                        lineNumber: 206,
                        columnNumber: 104
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 206,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: projects.length > 0 ? projects.map({
                        "DeveloperTabs[projects.map()]": (project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-lg text-gray-900",
                                                    children: project.project_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 238
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            className: `text-xs ${project.status === "ongoing" ? "bg-blue-50 text-blue-700 border-blue-200" : project.status === "completed" ? "bg-green-50 text-green-700 border-green-200" : "bg-gray-50 text-gray-700 border-gray-200"}`,
                                                            children: project.status ? t(`common.${project.status}`) || project.status : t("common.active")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 363
                                                        }, this),
                                                        project.project_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            className: "bg-purple-50 text-purple-700 border-purple-200 text-xs",
                                                            children: t(`projects.types.${project.project_type}`) || t(`common.${project.project_type}`) || project.project_type
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 715
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 317
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                            lineNumber: 207,
                                            columnNumber: 233
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 207,
                                        columnNumber: 178
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4 p-3 bg-gray-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                        className: "h-4 w-4 text-teal-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 1088
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: [
                                                            project.total_units || 0,
                                                            " ",
                                                            t("developers.details.unitsLabel")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 1135
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 207,
                                                columnNumber: 1033
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                        className: "h-4 w-4 text-teal-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 1296
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: [
                                                            project.available_units || 0,
                                                            " ",
                                                            t("developers.details.available")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 1338
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 207,
                                                columnNumber: 1241
                                            }, this),
                                            project.project_size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "h-4 w-4 text-teal-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 1527
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: [
                                                            project.project_size,
                                                            " ",
                                                            t("developers.details.sqft")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 1571
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 207,
                                                columnNumber: 1472
                                            }, this),
                                            project.launch_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-4 w-4 text-teal-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 1747
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: new Date(project.launch_date).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 1793
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 207,
                                                columnNumber: 1692
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 207,
                                        columnNumber: 924
                                    }, this),
                                    project.price_range && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    t("developers.details.priceRange"),
                                                    ": "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 207,
                                                columnNumber: 1958
                                            }, this),
                                            project.price_range
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 207,
                                        columnNumber: 1919
                                    }, this)
                                ]
                            }, project.project_id, true, {
                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                lineNumber: 207,
                                columnNumber: 55
                            }, this)
                    }["DeveloperTabs[projects.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: t("developers.details.noProjects")
                        }, void 0, false, {
                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                            lineNumber: 208,
                            columnNumber: 82
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                        lineNumber: 208,
                        columnNumber: 47
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 206,
                    columnNumber: 308
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
            lineNumber: 206,
            columnNumber: 39
        }, this);
        $[33] = activeTab;
        $[34] = projects;
        $[35] = t;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== activeTab || $[38] !== currentPage || $[39] !== endIndex || $[40] !== handleSelectAll || $[41] !== paginatedUnits || $[42] !== selectedUnits || $[43] !== startIndex || $[44] !== t || $[45] !== totalPages || $[46] !== units.length) {
        t16 = activeTab === "units" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto -mx-3 sm:mx-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[480px] sm:min-w-full px-3 sm:px-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "border-b border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-3 text-start",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                    checked: paginatedUnits.length > 0 && selectedUnits.length === paginatedUnits.length,
                                                    onCheckedChange: handleSelectAll
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 257
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 218,
                                                columnNumber: 220
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-3 text-start text-xs font-semibold text-gray-900",
                                                children: t("developers.details.unitNumber")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 218,
                                                columnNumber: 394
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-3 text-start text-xs font-semibold text-gray-900",
                                                children: t("developers.details.project")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 218,
                                                columnNumber: 508
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-3 text-start text-xs font-semibold text-gray-900",
                                                children: t("developers.details.type")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 218,
                                                columnNumber: 619
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-3 text-start text-xs font-semibold text-gray-900",
                                                children: t("developers.details.area")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 218,
                                                columnNumber: 727
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 218,
                                        columnNumber: 216
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                    lineNumber: 218,
                                    columnNumber: 172
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: paginatedUnits.length > 0 ? paginatedUnits.map({
                                        "DeveloperTabs[paginatedUnits.map()]": (unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-gray-200 hover:bg-gray-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                            checked: selectedUnits.includes(unit.id),
                                                            onCheckedChange: {
                                                                "DeveloperTabs[paginatedUnits.map() > <Checkbox>.onCheckedChange]": (checked_1)=>handleSelectUnit(unit.id, checked_1)
                                                            }["DeveloperTabs[paginatedUnits.map() > <Checkbox>.onCheckedChange]"]
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 180
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 154
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-3 text-sm text-teal-600 font-semibold",
                                                        children: unit.unitNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 99
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-3 text-sm text-gray-900 font-medium",
                                                        children: unit.project
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 183
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-3 text-sm text-gray-700",
                                                        children: unit.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 262
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-3 text-sm text-gray-700",
                                                        children: unit.area
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 326
                                                    }, this)
                                                ]
                                            }, unit.id, true, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 219,
                                                columnNumber: 64
                                            }, this)
                                    }["DeveloperTabs[paginatedUnits.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 5,
                                            className: "px-3 py-12 text-center text-gray-500",
                                            children: t("developers.details.noUnits")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                            lineNumber: 222,
                                            columnNumber: 63
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 222,
                                        columnNumber: 59
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                    lineNumber: 218,
                                    columnNumber: 848
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                            lineNumber: 218,
                            columnNumber: 146
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                        lineNumber: 218,
                        columnNumber: 88
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 218,
                    columnNumber: 41
                }, this),
                totalPages > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500",
                            children: [
                                t("common.showing"),
                                " ",
                                startIndex + 1,
                                "-",
                                Math.min(endIndex, units.length),
                                " ",
                                t("common.of"),
                                " ",
                                units.length > 1000 ? "1000" : units.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                            lineNumber: 222,
                            columnNumber: 275
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    onClick: {
                                        "DeveloperTabs[<Button>.onClick]": ()=>setCurrentPage(_DeveloperTabsButtonOnClickSetCurrentPage)
                                    }["DeveloperTabs[<Button>.onClick]"],
                                    disabled: currentPage === 1,
                                    className: "h-8 w-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "h-4 w-4 rtl:rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 224,
                                        columnNumber: 98
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                    lineNumber: 222,
                                    columnNumber: 501
                                }, this),
                                Array.from({
                                    length: Math.min(totalPages, 8)
                                }, _DeveloperTabsArrayFrom).map({
                                    "DeveloperTabs[(anonymous)()]": (page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: currentPage === page ? "default" : "outline",
                                            size: "icon",
                                            onClick: {
                                                "DeveloperTabs[(anonymous)() > <Button>.onClick]": ()=>setCurrentPage(page)
                                            }["DeveloperTabs[(anonymous)() > <Button>.onClick]"],
                                            className: currentPage === page ? "h-8 w-8 bg-gray-900 hover:bg-gray-800 text-white" : "h-8 w-8",
                                            children: page
                                        }, page, false, {
                                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                            lineNumber: 227,
                                            columnNumber: 53
                                        }, this)
                                }["DeveloperTabs[(anonymous)()]"]),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    onClick: {
                                        "DeveloperTabs[<Button>.onClick]": ()=>setCurrentPage({
                                                "DeveloperTabs[<Button>.onClick > setCurrentPage()]": (p_0)=>Math.min(totalPages, p_0 + 1)
                                            }["DeveloperTabs[<Button>.onClick > setCurrentPage()]"])
                                    }["DeveloperTabs[<Button>.onClick]"],
                                    disabled: currentPage === totalPages,
                                    className: "h-8 w-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-4 w-4 rtl:rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 234,
                                        columnNumber: 107
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                    lineNumber: 230,
                                    columnNumber: 46
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                            lineNumber: 222,
                            columnNumber: 460
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 222,
                    columnNumber: 219
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
            lineNumber: 218,
            columnNumber: 36
        }, this);
        $[37] = activeTab;
        $[38] = currentPage;
        $[39] = endIndex;
        $[40] = handleSelectAll;
        $[41] = paginatedUnits;
        $[42] = selectedUnits;
        $[43] = startIndex;
        $[44] = t;
        $[45] = totalPages;
        $[46] = units.length;
        $[47] = t16;
    } else {
        t16 = $[47];
    }
    let t17;
    if ($[48] !== activeTab || $[49] !== developer || $[50] !== t) {
        t17 = activeTab === "payment" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold",
                        children: t("developers.details.paymentPlans")
                    }, void 0, false, {
                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                        lineNumber: 251,
                        columnNumber: 99
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 251,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: developer.paymentPlans && developer.paymentPlans.length > 0 ? developer.paymentPlans.map({
                        "DeveloperTabs[developer.paymentPlans.map()]": (plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-lg text-gray-900",
                                                children: plan.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 252,
                                                columnNumber: 246
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: plan.status === "active" ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-700",
                                                children: plan.status ? t(`common.${plan.status}`) || plan.status : t("common.active")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                                lineNumber: 252,
                                                columnNumber: 314
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 252,
                                        columnNumber: 191
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-4",
                                        children: plan.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 252,
                                        columnNumber: 510
                                    }, this),
                                    plan.total_cost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-gray-900",
                                        children: [
                                            t("developers.details.totalCost"),
                                            ": ",
                                            Number(plan.total_cost).toLocaleString(),
                                            " ",
                                            t("common.aed")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                        lineNumber: 252,
                                        columnNumber: 594
                                    }, this)
                                ]
                            }, plan.payment_plan_id, true, {
                                fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                                lineNumber: 252,
                                columnNumber: 66
                            }, this)
                    }["DeveloperTabs[developer.paymentPlans.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 text-gray-500",
                        children: t("developers.details.noPaymentPlans")
                    }, void 0, false, {
                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                        lineNumber: 253,
                        columnNumber: 61
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 251,
                    columnNumber: 186
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
            lineNumber: 251,
            columnNumber: 38
        }, this);
        $[48] = activeTab;
        $[49] = developer;
        $[50] = t;
        $[51] = t17;
    } else {
        t17 = $[51];
    }
    let t18;
    if ($[52] !== activeTab || $[53] !== t) {
        t18 = activeTab === "documents" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "h-8 w-8 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                        lineNumber: 263,
                        columnNumber: 195
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 263,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-900 mb-2",
                    children: t("developers.details.noDocuments")
                }, void 0, false, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 263,
                    columnNumber: 247
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mb-6 text-center max-w-sm",
                    children: t("developers.details.uploadDesc")
                }, void 0, false, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 263,
                    columnNumber: 346
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "bg-teal-600 hover:bg-teal-700 text-white gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                            lineNumber: 263,
                            columnNumber: 516
                        }, this),
                        t("developers.details.uploadDocument")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
                    lineNumber: 263,
                    columnNumber: 449
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
            lineNumber: 263,
            columnNumber: 40
        }, this);
        $[52] = activeTab;
        $[53] = t;
        $[54] = t18;
    } else {
        t18 = $[54];
    }
    let t19;
    if ($[55] !== t15 || $[56] !== t16 || $[57] !== t17 || $[58] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 sm:p-5",
            children: [
                t15,
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[55] = t15;
        $[56] = t16;
        $[57] = t17;
        $[58] = t18;
        $[59] = t19;
    } else {
        t19 = $[59];
    }
    let t20;
    if ($[60] !== t14 || $[61] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 overflow-hidden",
            children: [
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[60] = t14;
        $[61] = t19;
        $[62] = t20;
    } else {
        t20 = $[62];
    }
    return t20;
}
_s(DeveloperTabs, "UNio6liXFyGRBi84GS3nAXB+NIs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = DeveloperTabs;
function _DeveloperTabsArrayFrom(_, i) {
    return i + 1;
}
function _DeveloperTabsButtonOnClickSetCurrentPage(p) {
    return Math.max(1, p - 1);
}
function _DeveloperTabsHandleSelectAllPaginatedUnitsMap(u) {
    return u.id;
}
var _c;
__turbopack_context__.k.register(_c, "DeveloperTabs");
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
"[project]/src/app/admin/developers/[id]/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeveloperDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$developer$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-developer-details.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$components$2f$developer$2d$details$2f$DeveloperHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/components/developer-details/DeveloperHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$components$2f$developer$2d$details$2f$DeveloperStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/components/developer-details/DeveloperStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$components$2f$developer$2d$details$2f$DeveloperAbout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/components/developer-details/DeveloperAbout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$components$2f$developer$2d$details$2f$DeveloperTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/components/developer-details/DeveloperTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty-state.tsx [app-client] (ecmascript)");
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
function DeveloperDetailsPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(106);
    if ($[0] !== "e72e4d02321953067424a0edac9f9b0dd625c9bf2f70e068a6ef61ecbf06180f") {
        for(let $i = 0; $i < 106; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e72e4d02321953067424a0edac9f9b0dd625c9bf2f70e068a6ef61ecbf06180f";
    }
    const { params } = t0;
    const { id: developerId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { developer, isLoading, isError, error, toggleTop, isTogglingTop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$developer$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeveloperDetails"])(Number(developerId));
    let t1;
    if ($[1] !== toggleTop) {
        t1 = ({
            "DeveloperDetailsPage[handleToggleTopDeveloper]": (checked)=>{
                toggleTop(checked);
            }
        })["DeveloperDetailsPage[handleToggleTopDeveloper]"];
        $[1] = toggleTop;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleToggleTopDeveloper = t1;
    let t2;
    if ($[3] !== developer?.project) {
        t2 = developer?.project || [];
        $[3] = developer?.project;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const projects = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const units = t3;
    if (isLoading) {
        let t4;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-e-transparent"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 77,
                columnNumber: 12
            }, this);
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        let t5;
        if ($[7] !== t) {
            t5 = t("developers.details.loading");
            $[7] = t;
            $[8] = t5;
        } else {
            t5 = $[8];
        }
        let t6;
        if ($[9] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[60vh] items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-sm text-gray-600",
                            children: t5
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                            lineNumber: 92,
                            columnNumber: 112
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                    lineNumber: 92,
                    columnNumber: 79
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 92,
                columnNumber: 12
            }, this);
            $[9] = t5;
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        return t6;
    }
    if (isError) {
        let t4;
        if ($[11] !== t) {
            t4 = t("developers.details.errorLoading");
            $[11] = t;
            $[12] = t4;
        } else {
            t4 = $[12];
        }
        const t5 = error instanceof Error ? error.message : undefined;
        let t6;
        if ($[13] !== t4 || $[14] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                type: "error",
                title: t4,
                message: t5
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 112,
                columnNumber: 12
            }, this);
            $[13] = t4;
            $[14] = t5;
            $[15] = t6;
        } else {
            t6 = $[15];
        }
        let t7;
        if ($[16] !== router) {
            t7 = ({
                "DeveloperDetailsPage[<Button>.onClick]": ()=>router.push("/admin/developers")
            })["DeveloperDetailsPage[<Button>.onClick]"];
            $[16] = router;
            $[17] = t7;
        } else {
            t7 = $[17];
        }
        let t8;
        if ($[18] !== t) {
            t8 = t("developers.details.backToDevelopers");
            $[18] = t;
            $[19] = t8;
        } else {
            t8 = $[19];
        }
        let t9;
        if ($[20] !== t7 || $[21] !== t8) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: t7,
                className: "mt-6 bg-teal-600 hover:bg-teal-700 text-white",
                children: t8
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 139,
                columnNumber: 12
            }, this);
            $[20] = t7;
            $[21] = t8;
            $[22] = t9;
        } else {
            t9 = $[22];
        }
        let t10;
        if ($[23] !== t6 || $[24] !== t9) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[60vh] items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        t6,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                    lineNumber: 148,
                    columnNumber: 80
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this);
            $[23] = t6;
            $[24] = t9;
            $[25] = t10;
        } else {
            t10 = $[25];
        }
        return t10;
    }
    if (!developer) {
        let t4;
        if ($[26] !== t) {
            t4 = t("developers.details.noData");
            $[26] = t;
            $[27] = t4;
        } else {
            t4 = $[27];
        }
        let t5;
        if ($[28] !== t4) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                type: "default",
                title: t4
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 168,
                columnNumber: 12
            }, this);
            $[28] = t4;
            $[29] = t5;
        } else {
            t5 = $[29];
        }
        let t6;
        if ($[30] !== router) {
            t6 = ({
                "DeveloperDetailsPage[<Button>.onClick]": ()=>router.push("/admin/developers")
            })["DeveloperDetailsPage[<Button>.onClick]"];
            $[30] = router;
            $[31] = t6;
        } else {
            t6 = $[31];
        }
        let t7;
        if ($[32] !== t) {
            t7 = t("developers.details.backToDevelopers");
            $[32] = t;
            $[33] = t7;
        } else {
            t7 = $[33];
        }
        let t8;
        if ($[34] !== t6 || $[35] !== t7) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: t6,
                className: "mt-6 bg-teal-600 hover:bg-teal-700 text-white",
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 194,
                columnNumber: 12
            }, this);
            $[34] = t6;
            $[35] = t7;
            $[36] = t8;
        } else {
            t8 = $[36];
        }
        let t9;
        if ($[37] !== t5 || $[38] !== t8) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[60vh] items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        t5,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                    lineNumber: 203,
                    columnNumber: 79
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 203,
                columnNumber: 12
            }, this);
            $[37] = t5;
            $[38] = t8;
            $[39] = t9;
        } else {
            t9 = $[39];
        }
        return t9;
    }
    let t4;
    if ($[40] !== projects) {
        t4 = projects.reduce(_DeveloperDetailsPageProjectsReduce, 0);
        $[40] = projects;
        $[41] = t4;
    } else {
        t4 = $[41];
    }
    const totalUnits = t4;
    let t5;
    if ($[42] !== projects) {
        t5 = projects.reduce(_DeveloperDetailsPageProjectsReduce2, 0);
        $[42] = projects;
        $[43] = t5;
    } else {
        t5 = $[43];
    }
    const availableUnits = t5;
    let t6;
    if ($[44] !== t) {
        t6 = t("common.home");
        $[44] = t;
        $[45] = t6;
    } else {
        t6 = $[45];
    }
    let t7;
    if ($[46] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            prefetch: false,
            href: "/admin/home",
            className: "hover:text-teal-600 transition-colors whitespace-nowrap",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 240,
            columnNumber: 10
        }, this);
        $[46] = t6;
        $[47] = t7;
    } else {
        t7 = $[47];
    }
    let t8;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 rtl:rotate-180"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 248,
            columnNumber: 10
        }, this);
        $[48] = t8;
    } else {
        t8 = $[48];
    }
    let t9;
    if ($[49] !== t) {
        t9 = t("developers.title");
        $[49] = t;
        $[50] = t9;
    } else {
        t9 = $[50];
    }
    let t10;
    if ($[51] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            prefetch: false,
            href: "/admin/developers",
            className: "hover:text-teal-600 transition-colors whitespace-nowrap",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[51] = t9;
        $[52] = t10;
    } else {
        t10 = $[52];
    }
    let t11;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 rtl:rotate-180"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[53] = t11;
    } else {
        t11 = $[53];
    }
    let t12;
    if ($[54] !== developer.name) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-900 truncate max-w-[150px] sm:max-w-xs",
            children: developer.name
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[54] = developer.name;
        $[55] = t12;
    } else {
        t12 = $[55];
    }
    let t13;
    if ($[56] !== t10 || $[57] !== t12 || $[58] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 flex-wrap",
            children: [
                t7,
                t8,
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[56] = t10;
        $[57] = t12;
        $[58] = t7;
        $[59] = t13;
    } else {
        t13 = $[59];
    }
    let t14;
    if ($[60] !== router) {
        t14 = ({
            "DeveloperDetailsPage[<Button>.onClick]": ()=>router.push("/admin/developers")
        })["DeveloperDetailsPage[<Button>.onClick]"];
        $[60] = router;
        $[61] = t14;
    } else {
        t14 = $[61];
    }
    let t15;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "h-4 w-4 sm:h-5 sm:w-5 rtl:rotate-180"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[62] = t15;
    } else {
        t15 = $[62];
    }
    let t16;
    if ($[63] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: t14,
            className: "h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[63] = t14;
        $[64] = t16;
    } else {
        t16 = $[64];
    }
    let t17;
    if ($[65] !== t) {
        t17 = t("developers.details.title");
        $[65] = t;
        $[66] = t17;
    } else {
        t17 = $[66];
    }
    let t18;
    if ($[67] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl sm:text-2xl font-bold text-gray-900",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[67] = t17;
        $[68] = t18;
    } else {
        t18 = $[68];
    }
    let t19;
    if ($[69] !== t16 || $[70] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 sm:gap-3",
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[69] = t16;
        $[70] = t18;
        $[71] = t19;
    } else {
        t19 = $[71];
    }
    let t20;
    if ($[72] !== developerId || $[73] !== routePrefix || $[74] !== router) {
        t20 = ({
            "DeveloperDetailsPage[<DeveloperHeader>.onEdit]": ()=>router.push(`${routePrefix}/developers/${developerId}/edit`)
        })["DeveloperDetailsPage[<DeveloperHeader>.onEdit]"];
        $[72] = developerId;
        $[73] = routePrefix;
        $[74] = router;
        $[75] = t20;
    } else {
        t20 = $[75];
    }
    let t21;
    if ($[76] !== routePrefix || $[77] !== router) {
        t21 = ({
            "DeveloperDetailsPage[<DeveloperHeader>.onCreateDeveloper]": ()=>router.push(`${routePrefix}/developers/create`)
        })["DeveloperDetailsPage[<DeveloperHeader>.onCreateDeveloper]"];
        $[76] = routePrefix;
        $[77] = router;
        $[78] = t21;
    } else {
        t21 = $[78];
    }
    let t22;
    if ($[79] !== developer || $[80] !== t20 || $[81] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$components$2f$developer$2d$details$2f$DeveloperHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeveloperHeader"], {
            developer: developer,
            onEdit: t20,
            onCreateDeveloper: t21
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[79] = developer;
        $[80] = t20;
        $[81] = t21;
        $[82] = t22;
    } else {
        t22 = $[82];
    }
    let t23;
    if ($[83] !== availableUnits || $[84] !== developer || $[85] !== projects.length || $[86] !== totalUnits) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$components$2f$developer$2d$details$2f$DeveloperStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeveloperStats"], {
            developer: developer,
            totalProjects: projects.length,
            totalUnits: totalUnits,
            availableUnits: availableUnits
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[83] = availableUnits;
        $[84] = developer;
        $[85] = projects.length;
        $[86] = totalUnits;
        $[87] = t23;
    } else {
        t23 = $[87];
    }
    let t24;
    if ($[88] !== t22 || $[89] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border border-gray-200 p-4 sm:p-6",
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[88] = t22;
        $[89] = t23;
        $[90] = t24;
    } else {
        t24 = $[90];
    }
    let t25;
    if ($[91] !== developer || $[92] !== handleToggleTopDeveloper || $[93] !== isTogglingTop) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$components$2f$developer$2d$details$2f$DeveloperAbout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeveloperAbout"], {
                developer: developer,
                handleToggleTopDeveloper: handleToggleTopDeveloper,
                isTogglingTop: isTogglingTop
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 399,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[91] = developer;
        $[92] = handleToggleTopDeveloper;
        $[93] = isTogglingTop;
        $[94] = t25;
    } else {
        t25 = $[94];
    }
    let t26;
    if ($[95] !== developer || $[96] !== projects) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 min-w-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$components$2f$developer$2d$details$2f$DeveloperTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeveloperTabs"], {
                developer: developer,
                projects: projects,
                units: units
            }, void 0, false, {
                fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
                lineNumber: 409,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[95] = developer;
        $[96] = projects;
        $[97] = t26;
    } else {
        t26 = $[97];
    }
    let t27;
    if ($[98] !== t25 || $[99] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[98] = t25;
        $[99] = t26;
        $[100] = t27;
    } else {
        t27 = $[100];
    }
    let t28;
    if ($[101] !== t13 || $[102] !== t19 || $[103] !== t24 || $[104] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 sm:p-4 lg:p-6 space-y-4 max-w-full overflow-hidden",
            children: [
                t13,
                t19,
                t24,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/developers/[id]/page.client.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[101] = t13;
        $[102] = t19;
        $[103] = t24;
        $[104] = t27;
        $[105] = t28;
    } else {
        t28 = $[105];
    }
    return t28;
}
_s(DeveloperDetailsPage, "EDB9+iM05R7tK88AjmkZtDJ5cvE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$developer$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeveloperDetails"]
    ];
});
_c = DeveloperDetailsPage;
function _DeveloperDetailsPageProjectsReduce2(sum_0, p_0) {
    return sum_0 + (p_0.available_units || 0);
}
function _DeveloperDetailsPageProjectsReduce(sum, p) {
    return sum + (p.total_units || 0);
}
var _c;
__turbopack_context__.k.register(_c, "DeveloperDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9d4cb55f._.js.map