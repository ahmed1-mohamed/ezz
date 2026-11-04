(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/validators/create-project.schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProjectSchema",
    ()=>createProjectSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const createProjectSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    project_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required").max(255, "validation.project_name_max"),
    project_name_en: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    project_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "residential",
        "commercial",
        "mixed-use"
    ], {
        message: "validation.required"
    }),
    total_units: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "projects.create.errors.totalUnitsRequired").refine((val)=>!isNaN(Number(val)) && Number(val) >= 0, {
        message: "projects.create.errors.totalUnitsPositive"
    }),
    available_units: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "projects.create.errors.availableUnitsRequired").refine((val)=>!isNaN(Number(val)) && Number(val) >= 0, {
        message: "projects.create.errors.availableUnitsPositive"
    }),
    launch_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "projects.create.errors.launchDateRequired"),
    completion_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    delivery_date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    unit_types: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ongoing",
        "completed",
        "upcoming"
    ], {
        message: "validation.required"
    }),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(50, "validation.currency_max").optional(),
    min_price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    max_price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    price_sq_min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    price_sq_max: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    price_range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    price_range_SQ: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    project_size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    developer_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    latitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-90).max(90),
    longitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-180).max(180),
    landmark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(255).optional(),
    city_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    area_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "projects.create.errors.areaRequired"),
    north_side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(255).optional(),
    south_side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(255).optional(),
    east_side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(255).optional(),
    west_side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(255).optional(),
    google_map_link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(2048).url("validation.url_invalid"),
    location_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    is_active: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "0",
        "1",
        "2"
    ]).optional(),
    milestone_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    phase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    permit_no: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(20).optional(),
    barcode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    meta_title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    meta_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).superRefine((data, ctx)=>{
    if (data.launch_date && data.completion_date) {
        const launchDate = new Date(data.launch_date);
        const completionDate = new Date(data.completion_date);
        if (!isNaN(launchDate.getTime()) && !isNaN(completionDate.getTime()) && completionDate < launchDate) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "projects.create.errors.dateValidation",
                path: [
                    "completion_date"
                ]
            });
        }
    }
    if (data.total_units && data.available_units) {
        const total = Number(data.total_units);
        const available = Number(data.available_units);
        if (!isNaN(total) && !isNaN(available) && available > total) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: "projects.create.errors.availableExceedsTotal",
                path: [
                    "available_units"
                ]
            });
        }
    }
});
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
"[project]/src/hooks/use-dashboardAdminProjectsCreateData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDashboardAdminProjectsCreateData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/developers/services/AdminDevelopersService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useDashboardAdminProjectsCreateData(countryId) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "aa17da9760b03c18dde0a9ee8bf38f5721a866557719922cdc54bbd70ad992ba") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aa17da9760b03c18dde0a9ee8bf38f5721a866557719922cdc54bbd70ad992ba";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "developers",
            "all"
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
            retry: false,
            enabled: t1,
            staleTime: 300000
        };
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const developersData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t2);
    let t3;
    if ($[4] !== developersData) {
        t3 = {
            developersData
        };
        $[4] = developersData;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(useDashboardAdminProjectsCreateData, "1O/8ZvVmujzvBaa7/WVSXYv+y+o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
async function _temp() {
    const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$developers$2f$services$2f$AdminDevelopersService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminDevelopersService"].getAllDevelopers();
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
        if (raw.data && Array.isArray(raw.data.data)) {
            return raw.data.data;
        }
        if (raw.data && Array.isArray(raw.data.developers)) {
            return raw.data.developers;
        }
        if (Array.isArray(raw.developers)) {
            return raw.developers;
        }
        if (Array.isArray(raw.result)) {
            return raw.result;
        }
        return [];
    })();
    return items.map(_useDashboardAdminProjectsCreateDataAnonymousItemsMap);
}
function _useDashboardAdminProjectsCreateDataAnonymousItemsMap(item) {
    return {
        ...item,
        developer_id: item.developer_id ?? item.id,
        developer_name: item.developer_name ?? item.name ?? item.title ?? ""
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/projects/services/AdminProjectsService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminProjectsService",
    ()=>AdminProjectsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
;
const AdminProjectsService = {
    getProjectsPaginated: async (page = 1, perPage = 10, search, status, projectType, countryId)=>{
        const params = new URLSearchParams({
            page: page.toString(),
            per_page: perPage.toString()
        });
        if (search) params.append("search", search);
        if (status && status !== "all") params.append("status", status);
        if (projectType && projectType !== "all") params.append("project_type", projectType);
        if (countryId && countryId !== "all") params.append("country_id", countryId.toString());
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/projects?${params.toString()}`);
        return response.data;
    },
    getProject: async (projectId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/projects/${projectId}`);
        return response.data;
    },
    syncERPNext: async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/projects/sync-erpnext");
            return response.data;
        } catch  {
            return {
                success: true,
                message: "ERPNext sync initiated"
            };
        }
    },
    toggleFeatured: async (projectId, isFeatured)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/projects/${projectId}/toggle-feature`, {
                is_favourite: isFeatured,
                is_top: isFeatured
            });
            return response.data;
        } catch  {
            // Fallback
            return {
                success: true
            };
        }
    },
    createProject: async (data)=>{
        const formData = new FormData();
        formData.append("project_name", data.project_name);
        formData.append("status", data.status);
        formData.append("project_type", data.project_type);
        if (data.launch_date) formData.append("launch_date", data.launch_date);
        formData.append("developer_id", String(data.developer_id));
        if (data.available_units !== undefined) formData.append("available_units", String(data.available_units));
        if (data.total_units !== undefined) formData.append("total_units", String(data.total_units));
        if (data.price_range) formData.append("price_range", String(data.price_range));
        if (data.price_range_SQ) formData.append("price_range_SQ", String(data.price_range_SQ));
        if (data.min_price) formData.append("min_price", String(data.min_price));
        if (data.max_price) formData.append("max_price", String(data.max_price));
        if (data.completion_date) formData.append("completion_date", data.completion_date);
        if (data.delivery_date) formData.append("delivery_date", data.delivery_date);
        if (data.milestone_id) formData.append("milestone_id", String(data.milestone_id));
        if (data.description) formData.append("description", data.description);
        if (data.project_size) formData.append("project_size", String(data.project_size));
        if (data.phase) formData.append("phase", data.phase);
        if (data.is_active !== undefined) formData.append("is_active", String(data.is_active));
        if (data.currency) formData.append("currency", data.currency);
        if (data.permit_no) formData.append("permit_no", data.permit_no);
        if (data.barcode) formData.append("barcode", data.barcode);
        if (data.slug) formData.append("slug", data.slug);
        if (data.meta_title) formData.append("meta_title", data.meta_title);
        if (data.meta_description) formData.append("meta_description", data.meta_description);
        if (data.country_id) formData.append("country_id", String(data.country_id));
        if (data.country) formData.append("country", String(data.country));
        formData.append("location[google_map_link]", data.google_map_link || "");
        formData.append("location[latitude]", String(data.latitude || 0));
        formData.append("location[longitude]", String(data.longitude || 0));
        if (data.area_id) formData.append("location[area_id]", String(data.area_id));
        if (data.city_id) formData.append("location[city_id]", String(data.city_id));
        if (data.north_side) formData.append("location[north_side]", data.north_side);
        if (data.south_side) formData.append("location[south_side]", data.south_side);
        if (data.east_side) formData.append("location[east_side]", data.east_side);
        if (data.west_side) formData.append("location[west_side]", data.west_side);
        if (data.landmark) formData.append("location[landmark]", data.landmark);
        if (data.location_description) formData.append("location[description]", data.location_description);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/projects", formData);
        return response.data;
    },
    createProjectMedia: async (formData)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/projects/medias/create", formData);
        return response.data;
    },
    createProjectWithMedia: async (params)=>{
        const { mediaItems, location, ...projectData } = params;
        const flattenedProjectData = {
            ...projectData,
            latitude: location.latitude,
            longitude: location.longitude,
            landmark: location.landmark,
            city_id: location.city_id,
            north_side: location.north_side,
            south_side: location.south_side,
            east_side: location.east_side,
            west_side: location.west_side,
            google_map_link: location.google_map_link,
            ...location.area_id && {
                area_id: location.area_id
            },
            ...(params.country_id || location.country_id) && {
                country_id: params.country_id || location.country_id
            },
            ...(params.country || location.country) && {
                country: params.country || location.country
            }
        };
        const projectResponse = await AdminProjectsService.createProject(flattenedProjectData);
        const projectId = projectResponse.data?.project_id;
        const projectName = projectResponse.data?.project_name || "Project";
        if (!projectId) {
            throw new Error("Project creation failed: no project ID returned");
        }
        if (mediaItems.length > 0) {
            const formData = new FormData();
            formData.append("project_id", projectId.toString());
            const imageItems = mediaItems.filter((item)=>item.media_type === "image" || item.media_type === "floor_plan" || item.media_type === "3D_tour");
            const videoItems = mediaItems.filter((item)=>item.media_type === "video");
            const orderedItems = [
                ...imageItems,
                ...videoItems
            ];
            imageItems.forEach((item)=>{
                if (item.file) {
                    formData.append("medias[]", item.file);
                }
            });
            const mediaMeta = orderedItems.map((item)=>({
                    description: item.description,
                    is_primary: item.is_primary ? 1 : 0,
                    my_order: item.my_order ? 1 : 0,
                    media_type: item.media_type,
                    ...item.media_type === "video" && {
                        media_url: item.media_url
                    }
                }));
            formData.append("media_meta", JSON.stringify(mediaMeta));
            await AdminProjectsService.createProjectMedia(formData);
        }
        return {
            projectId,
            projectName
        };
    },
    updateProject: async (projectId, data)=>{
        const formData = new FormData();
        Object.entries(data).forEach(([key, value])=>{
            if (key === "location" && typeof value === "object" && value !== null) {
                Object.entries(value).forEach(([locKey, locValue])=>{
                    if (locValue !== undefined && locValue !== null) {
                        formData.append(`location[${locKey}]`, String(locValue));
                    }
                });
            } else if (Array.isArray(value)) {
                value.forEach((val)=>formData.append(`${key}[]`, String(val)));
            } else if (value !== undefined && value !== null) {
                formData.append(key, String(value));
            }
        });
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/projects/${projectId}`, formData);
        return response.data;
    },
    deleteProject: async (projectId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/projects/${projectId}`);
        return response.data;
    },
    toggleActive: async (projectId, isActive)=>{
        const projectResponse = await AdminProjectsService.getProject(projectId);
        const raw = projectResponse.data ?? projectResponse;
        let mappedProjectType = raw.project_type ?? "residential";
        const lowerType = mappedProjectType.toLowerCase();
        if (lowerType === "mixed use" || lowerType === "mixed-use") mappedProjectType = "mixed-use";
        else if (lowerType === "residential") mappedProjectType = "residential";
        else if (lowerType === "commercial") mappedProjectType = "commercial";
        const cityId = String(raw.location?.city?.city_name || raw.location?.city?.name || raw.location?.city_id || "");
        const areaId = String(raw.location?.area?.area_name || raw.location?.area?.dld_area_name || raw.location?.area?.name || raw.location?.area_id || "");
        const developerId = String(raw.developer?.developer_id || raw.developer_id || "1");
        const payload = {
            project_name: raw.project_name || "Project",
            status: raw.status || "ongoing",
            project_type: mappedProjectType,
            developer_id: developerId,
            is_active: isActive ? "1" : "0",
            is_visible: isActive ? "1" : "0"
        };
        if (raw.total_units != null) payload.total_units = String(raw.total_units);
        if (raw.available_units != null) payload.available_units = String(raw.available_units);
        if (raw.launch_date) payload.launch_date = raw.launch_date;
        if (raw.completion_date) payload.completion_date = raw.completion_date;
        if (raw.currency) payload.currency = raw.currency;
        if (raw.project_size) payload.project_size = String(raw.project_size);
        if (raw.description) payload.description = raw.description;
        if (raw.price_range) payload.price_range = String(raw.price_range);
        if (raw.price_range_SQ) payload.price_range_SQ = String(raw.price_range_SQ);
        payload.location = {
            latitude: raw.location?.latitude ?? 0,
            longitude: raw.location?.longitude ?? 0,
            landmark: raw.location?.landmark || "",
            city_id: cityId,
            area_id: areaId,
            north_side: raw.location?.north_side || "",
            south_side: raw.location?.south_side || "",
            east_side: raw.location?.east_side || "",
            west_side: raw.location?.west_side || "",
            google_map_link: raw.location?.google_map_link || ""
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/projects/${projectId}/visibility`, payload);
        return response.data;
    },
    updateMilestone: async (milestoneId, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].put(`/dashboard/milestones/${milestoneId}`, data);
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-create-project.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useCreateProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$services$2f$AdminProjectsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projects/services/AdminProjectsService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useCreateProject() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "cf0eb1a33ccfed7bce9dd4160fa3f3e4989cebbcb870e6deff6a993f2faae23c") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf0eb1a33ccfed7bce9dd4160fa3f3e4989cebbcb870e6deff6a993f2faae23c";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== queryClient || $[2] !== t) {
        t0 = (result)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${result.projectName}: ${t("projects.messages.createSuccess")}`);
            queryClient.invalidateQueries({
                queryKey: [
                    "Projects"
                ]
            });
        };
        $[1] = queryClient;
        $[2] = t;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    let t1;
    if ($[4] !== t) {
        t1 = (error)=>{
            const errorList = error?.response?.data?.errors;
            const flatMessages = errorList ? Object.values(errorList).map(_useCreateProjectAnonymousAnonymous).flat().join(", ") : "";
            const fallbackMessage = error?.response?.data?.message || error?.message || t("projects.messages.createFailed");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(flatMessages || fallbackMessage);
            throw error;
        };
        $[4] = t;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t0 || $[7] !== t1) {
        t2 = {
            mutationFn: _temp,
            onSuccess: t0,
            onError: t1
        };
        $[6] = t0;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t2);
    let t3;
    if ($[9] !== mutation.error || $[10] !== mutation.isPending || $[11] !== mutation.mutateAsync || $[12] !== mutation.reset) {
        t3 = {
            createProject: mutation.mutateAsync,
            isCreating: mutation.isPending,
            error: mutation.error,
            reset: mutation.reset
        };
        $[9] = mutation.error;
        $[10] = mutation.isPending;
        $[11] = mutation.mutateAsync;
        $[12] = mutation.reset;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    return t3;
}
_s(useCreateProject, "zz/3z8g9foaK3q/fZxHejQ7MM+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function _useCreateProjectAnonymousAnonymous(errObj) {
    return Object.values(errObj);
}
function _temp(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projects$2f$services$2f$AdminProjectsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminProjectsService"].createProjectWithMedia(data);
}
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
"[project]/src/hooks/use-cities-by-country.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useCitiesByCountry
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
function useCitiesByCountry(country) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "6fa6dc897fcc7f12541badf4f39a4e73bd938088c03977e535629aefdae9d2ae") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6fa6dc897fcc7f12541badf4f39a4e73bd938088c03977e535629aefdae9d2ae";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t0;
    let t1;
    if ($[1] !== country) {
        t0 = [
            "cities",
            country
        ];
        t1 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/cities?per_page=1000${country ? `&country=${country}` : ""}`);
        $[1] = country;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    const t2 = !!token;
    let t3;
    if ($[4] !== t0 || $[5] !== t1 || $[6] !== t2) {
        t3 = {
            queryKey: t0,
            queryFn: t1,
            retry: false,
            enabled: t2
        };
        $[4] = t0;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const citiesData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
    return citiesData;
}
_s(useCitiesByCountry, "dGFlOgyJU0wIVMqCllz9Pksulcc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
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
    "extractDirectCoordinates",
    ()=>extractDirectCoordinates,
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
"[project]/src/components/shared/InteractiveMapPicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveMapPicker",
    ()=>InteractiveMapPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.js [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/parse-map-url.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function InteractiveMapPicker({ latitude, longitude, onLocationSelect, height = "h-[420px]", readOnly = false, className = "", defaultZoom = 13, showControls = true, showBadges = true, attributionControl = true }) {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leafletRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentCoords, setCurrentCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(latitude && longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude) ? {
        lat: latitude,
        lng: longitude
    } : null);
    const [isLocating, setIsLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGeocoding, setIsGeocoding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMapReady, setIsMapReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const reverseGeocode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InteractiveMapPicker.useCallback[reverseGeocode]": async (lat, lng)=>{
            try {
                setIsGeocoding(true);
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`, {
                    headers: {
                        "Accept-Language": isAr ? "ar,en" : "en,ar"
                    }
                });
                if (!res.ok) throw new Error("Nominatim request failed");
                const data = await res.json();
                const addr = data.address || {};
                const city = addr.city || addr.town || addr.municipality || addr.governorate || addr.state || "";
                const area = addr.suburb || addr.neighbourhood || addr.quarter || addr.district || "";
                const landmark = data.display_name?.split(",").slice(0, 3).join(", ") || "";
                const country = addr.country || "";
                return {
                    city,
                    area,
                    landmark,
                    country
                };
            } catch (err) {
                console.warn("Reverse geocode failed, returning coordinates only:", err);
                return {
                    city: "",
                    area: "",
                    landmark: "",
                    country: ""
                };
            } finally{
                setIsGeocoding(false);
            }
        }
    }["InteractiveMapPicker.useCallback[reverseGeocode]"], [
        isAr
    ]);
    const handleCoordsChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InteractiveMapPicker.useCallback[handleCoordsChange]": async (lat_0, lng_0, shouldGeocode = true)=>{
            const roundedLat = Number(lat_0.toFixed(6));
            const roundedLng = Number(lng_0.toFixed(6));
            setCurrentCoords({
                lat: roundedLat,
                lng: roundedLng
            });
            let details = {
                city: "",
                area: "",
                landmark: "",
                country: ""
            };
            if (shouldGeocode) {
                details = await reverseGeocode(roundedLat, roundedLng);
            }
            const googleMapLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(roundedLat, roundedLng);
            onLocationSelect?.({
                lat: roundedLat,
                lng: roundedLng,
                googleMapLink,
                ...details
            });
        }
    }["InteractiveMapPicker.useCallback[handleCoordsChange]"], [
        onLocationSelect,
        reverseGeocode
    ]);
    // Initialize Leaflet Map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMapPicker.useEffect": ()=>{
            let isMounted = true;
            async function initMap() {
                if (!mapContainerRef.current) return;
                if (mapInstanceRef.current) return;
                const L = (await __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)")).default;
                if (!isMounted || !mapContainerRef.current) return;
                leafletRef.current = L;
                const initialLat = latitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude || 0) ? latitude : 25.2048;
                const initialLng = longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude || 0, longitude) ? longitude : 55.2708;
                const initialZoom = latitude && longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude) ? 15 : defaultZoom;
                const map = L.map(mapContainerRef.current, {
                    center: [
                        initialLat,
                        initialLng
                    ],
                    zoom: initialZoom,
                    zoomControl: true,
                    attributionControl: attributionControl
                });
                mapInstanceRef.current = map;
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    subdomains: [
                        "a",
                        "b",
                        "c"
                    ]
                }).addTo(map);
                const customPinIcon = L.divIcon({
                    className: "custom-map-pin-container",
                    html: `
          <div style="position: relative; width: 34px; height: 42px; transform: translate(-50%, -100%); cursor: pointer;">
            <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3));">
              <path d="M17 0C7.61116 0 0 7.61116 0 17C0 27.5 17 42 17 42C17 42 34 27.5 34 17C34 7.61116 26.3888 0 17 0Z" fill="#008081"/>
              <circle cx="17" cy="17" r="6.5" fill="white"/>
              <circle cx="17" cy="17" r="3" fill="#008081"/>
            </svg>
            <div style="position: absolute; bottom: -2px; left: 50%; width: 14px; height: 4px; background: rgba(0,0,0,0.25); border-radius: 50%; transform: translateX(-50%); filter: blur(1px);"></div>
          </div>
        `,
                    iconSize: [
                        34,
                        42
                    ],
                    iconAnchor: [
                        17,
                        42
                    ]
                });
                if (latitude && longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude)) {
                    const marker = L.marker([
                        latitude,
                        longitude
                    ], {
                        icon: customPinIcon,
                        draggable: !readOnly
                    }).addTo(map);
                    marker.on("dragend", {
                        "InteractiveMapPicker.useEffect.initMap": ()=>{
                            const pos = marker.getLatLng();
                            handleCoordsChange(pos.lat, pos.lng, true);
                        }
                    }["InteractiveMapPicker.useEffect.initMap"]);
                    markerRef.current = marker;
                }
                if (!readOnly) {
                    map.on("click", {
                        "InteractiveMapPicker.useEffect.initMap": (e)=>{
                            const lat_1 = e.latlng.lat;
                            const lng_1 = e.latlng.lng;
                            if (markerRef.current) {
                                markerRef.current.setLatLng([
                                    lat_1,
                                    lng_1
                                ]);
                            } else {
                                const marker_0 = L.marker([
                                    lat_1,
                                    lng_1
                                ], {
                                    icon: customPinIcon,
                                    draggable: true
                                }).addTo(map);
                                marker_0.on("dragend", {
                                    "InteractiveMapPicker.useEffect.initMap": ()=>{
                                        const pos_0 = marker_0.getLatLng();
                                        handleCoordsChange(pos_0.lat, pos_0.lng, true);
                                    }
                                }["InteractiveMapPicker.useEffect.initMap"]);
                                markerRef.current = marker_0;
                            }
                            handleCoordsChange(lat_1, lng_1, true);
                        }
                    }["InteractiveMapPicker.useEffect.initMap"]);
                }
                setTimeout({
                    "InteractiveMapPicker.useEffect.initMap": ()=>{
                        if (mapInstanceRef.current) {
                            mapInstanceRef.current.invalidateSize();
                            setIsMapReady(true);
                        }
                    }
                }["InteractiveMapPicker.useEffect.initMap"], 200);
                if (typeof ResizeObserver !== "undefined" && mapContainerRef.current) {
                    const resizeObserver = new ResizeObserver({
                        "InteractiveMapPicker.useEffect.initMap": ()=>{
                            if (mapInstanceRef.current) {
                                mapInstanceRef.current.invalidateSize();
                            }
                        }
                    }["InteractiveMapPicker.useEffect.initMap"]);
                    resizeObserver.observe(mapContainerRef.current);
                }
            }
            initMap();
            return ({
                "InteractiveMapPicker.useEffect": ()=>{
                    isMounted = false;
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                        markerRef.current = null;
                    }
                }
            })["InteractiveMapPicker.useEffect"];
        }
    }["InteractiveMapPicker.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMapPicker.useEffect": ()=>{
            if (!mapInstanceRef.current || !leafletRef.current) return;
            if (latitude && longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude)) {
                const L_0 = leafletRef.current;
                const map_0 = mapInstanceRef.current;
                setCurrentCoords({
                    lat: latitude,
                    lng: longitude
                });
                if (markerRef.current) {
                    markerRef.current.setLatLng([
                        latitude,
                        longitude
                    ]);
                } else {
                    const customPinIcon_0 = L_0.divIcon({
                        className: "custom-map-pin-container",
                        html: `
            <div style="position: relative; width: 34px; height: 42px; transform: translate(-50%, -100%); cursor: pointer;">
              <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3));">
                <path d="M17 0C7.61116 0 0 7.61116 0 17C0 27.5 17 42 17 42C17 42 34 27.5 34 17C34 7.61116 26.3888 0 17 0Z" fill="#008081"/>
                <circle cx="17" cy="17" r="6.5" fill="white"/>
                <circle cx="17" cy="17" r="3" fill="#008081"/>
              </svg>
            </div>
          `,
                        iconSize: [
                            34,
                            42
                        ],
                        iconAnchor: [
                            17,
                            42
                        ]
                    });
                    const marker_1 = L_0.marker([
                        latitude,
                        longitude
                    ], {
                        icon: customPinIcon_0,
                        draggable: !readOnly
                    }).addTo(map_0);
                    marker_1.on("dragend", {
                        "InteractiveMapPicker.useEffect": ()=>{
                            const pos_1 = marker_1.getLatLng();
                            handleCoordsChange(pos_1.lat, pos_1.lng, true);
                        }
                    }["InteractiveMapPicker.useEffect"]);
                    markerRef.current = marker_1;
                }
                map_0.flyTo([
                    latitude,
                    longitude
                ], 15, {
                    duration: 1
                });
                setTimeout({
                    "InteractiveMapPicker.useEffect": ()=>map_0.invalidateSize()
                }["InteractiveMapPicker.useEffect"], 150);
            }
        }
    }["InteractiveMapPicker.useEffect"], [
        latitude,
        longitude,
        readOnly,
        handleCoordsChange
    ]);
    const handleLocateMe = ()=>{
        if (!navigator.geolocation) {
            alert(isAr ? "خدمة تحديد الموقع غير مدعومة في متصفحك" : "Geolocation not supported");
            return;
        }
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition((pos_2)=>{
            setIsLocating(false);
            const lat_2 = pos_2.coords.latitude;
            const lng_2 = pos_2.coords.longitude;
            if (mapInstanceRef.current) {
                mapInstanceRef.current.flyTo([
                    lat_2,
                    lng_2
                ], 15, {
                    duration: 1.2
                });
            }
            handleCoordsChange(lat_2, lng_2, true);
        }, (err_0)=>{
            setIsLocating(false);
            console.warn("Geolocation failed:", err_0);
        }, {
            timeout: 10000,
            enableHighAccuracy: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 shadow-sm ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapContainerRef,
                className: `w-full min-w-full ${height} z-0`,
                style: {
                    minHeight: "340px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            showControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2.5 right-2.5 z-[1000] flex items-center gap-1.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-1 rounded-lg border border-gray-200/80 dark:border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleLocateMe,
                        disabled: isLocating,
                        title: isAr ? "تحديد موقعي الحالي" : "Locate My Current Position",
                        className: "p-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                className: `h-3.5 w-3.5 text-[#008081] ${isLocating ? "animate-spin" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: isAr ? "موقعي الحالي" : "My Location"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this),
                    currentCoords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(currentCoords.lat, currentCoords.lng),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: isAr ? "فتح في خرائط جوجل" : "Open in Google Maps",
                        className: "p-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "h-3.5 w-3.5 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 291,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: isAr ? "جوجل ماب" : "Maps"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 292,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 290,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 284,
                columnNumber: 24
            }, this),
            showBadges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 left-2 right-2 z-[1000] flex flex-wrap items-center justify-between gap-2 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-gray-200/80 dark:border-neutral-800 text-[11px] font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "h-3 w-3 text-[#008081] shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            currentCoords ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: [
                                    currentCoords.lat.toFixed(5),
                                    ", ",
                                    currentCoords.lng.toFixed(5)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 300,
                                columnNumber: 30
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isAr ? "انقر على الخريطة لتحديد الموقع" : "Click anywhere on map to pinpoint"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 302,
                                columnNumber: 25
                            }, this),
                            isGeocoding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-[#008081] text-[10px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-2.5 w-2.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isAr ? "جاري التعرف على العنوان..." : "Detecting address..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 304,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-gray-500 dark:text-gray-400 border border-gray-200/80 dark:border-neutral-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: isAr ? "اسحب المؤشر أو انقر للتعديل" : "Drag pin or click to move"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 297,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
        lineNumber: 277,
        columnNumber: 10
    }, this);
}
_s(InteractiveMapPicker, "XcVDw5Q0+kN4zve5FjNA7+Ofacs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = InteractiveMapPicker;
var _c;
__turbopack_context__.k.register(_c, "InteractiveMapPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectLocationForm",
    ()=>ProjectLocationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cities$2d$by$2d$country$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-cities-by-country.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$expand$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-expand-url.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$get$2d$location$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-get-location-details.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$InteractiveMapPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/InteractiveMapPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/parse-map-url.ts [app-client] (ecmascript)");
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
;
;
;
const COUNTRY_OPTIONS = [
    {
        label: "Egypt",
        value: "Egypt",
        id: 1,
        key: "egypt",
        labelAr: "مصر"
    },
    {
        label: "Oman",
        value: "Oman",
        id: 3,
        key: "oman",
        labelAr: "سلطنة عمان"
    },
    {
        label: "UAE",
        value: "UAE",
        id: 2,
        key: "uae",
        labelAr: "الإمارات العربية المتحدة"
    }
];
function ProjectLocationForm({ form, locationData, setLocationData, country, setCountry, setCountryId }) {
    _s();
    const { formState: { errors }, setValue, watch } = form;
    const { language, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [isLoadingLocation, setIsLoadingLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [googleMapsLinkError, setGoogleMapsLinkError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(locationData.city_id || "");
    const [googleMapsInput, setGoogleMapsInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(locationData.google_map_link || "");
    const [fullAddress, setFullAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(watch("location_description") || locationData.landmark || "");
    const { expandUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$expand$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { getLocationDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$get$2d$location$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectLocationForm.useEffect": ()=>{
            if (!country) {
                setCountry("UAE");
                setCountryId(2);
            }
        }
    }["ProjectLocationForm.useEffect"], [
        country,
        setCountry,
        setCountryId
    ]);
    const citiesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cities$2d$by$2d$country$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(country || "UAE");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectLocationForm.useEffect": ()=>{
            const response = citiesQuery.data;
            if (!response) {
                setOptions([]);
                return;
            }
            let citiesArray = [];
            const rawData = response.data;
            if (Array.isArray(rawData)) {
                citiesArray = rawData;
            } else {
                const nested = rawData?.data;
                if (Array.isArray(nested)) {
                    citiesArray = nested;
                } else if (Array.isArray(nested?.data)) {
                    citiesArray = nested.data;
                }
            }
            if (citiesArray.length > 0) {
                const mapped = citiesArray.map({
                    "ProjectLocationForm.useEffect.mapped": (c)=>({
                            label: c.name || c.city_name,
                            value: c.name || c.city_name
                        })
                }["ProjectLocationForm.useEffect.mapped"]);
                const unique = Array.from(new Map(mapped.map({
                    "ProjectLocationForm.useEffect.unique": (item)=>[
                            item.value,
                            item
                        ]
                }["ProjectLocationForm.useEffect.unique"])).values());
                setOptions(unique);
            } else {
                setOptions([]);
            }
        }
    }["ProjectLocationForm.useEffect"], [
        citiesQuery.data
    ]);
    const handleCountryChange = (newCountry)=>{
        const found = COUNTRY_OPTIONS.find((c_0)=>c_0.value === newCountry);
        setCountry(newCountry);
        if (found) {
            setCountryId(found.id);
        }
        setSelectedCity("");
        setValue("city_id", "", {
            shouldValidate: true
        });
        setLocationData((prev)=>({
                ...prev,
                city_id: ""
            }));
    };
    const handleCityChange = (cityValue)=>{
        setSelectedCity(cityValue);
        setValue("city_id", cityValue, {
            shouldValidate: true
        });
        setLocationData((prev_0)=>({
                ...prev_0,
                city_id: cityValue
            }));
    };
    const handleFullAddressChange = (addressValue)=>{
        setFullAddress(addressValue);
        setValue("location_description", addressValue);
        setValue("landmark", addressValue);
        setLocationData((prev_1)=>({
                ...prev_1,
                landmark: addressValue
            }));
    };
    const handleLatitudeChange = (val)=>{
        const num = parseFloat(val);
        if (!isNaN(num)) {
            setValue("latitude", num, {
                shouldValidate: true
            });
            setLocationData((prev_2)=>({
                    ...prev_2,
                    latitude: num
                }));
        } else if (val === "") {
            setLocationData((prev_3)=>({
                    ...prev_3,
                    latitude: 0
                }));
        }
    };
    const handleLongitudeChange = (val_0)=>{
        const num_0 = parseFloat(val_0);
        if (!isNaN(num_0)) {
            setValue("longitude", num_0, {
                shouldValidate: true
            });
            setLocationData((prev_4)=>({
                    ...prev_4,
                    longitude: num_0
                }));
        } else if (val_0 === "") {
            setLocationData((prev_5)=>({
                    ...prev_5,
                    longitude: 0
                }));
        }
    };
    const handleGoogleMapLink = async (url)=>{
        if (!url.trim()) return;
        setIsLoadingLocation(true);
        setGoogleMapsLinkError(null);
        try {
            const coordinates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveGoogleMapsUrl"])(url) || await expandUrl(url);
            if (!coordinates) {
                const extractFailedMsg = t("projects.form.location.messages.extractFailed") || (isAr ? "لم نتمكن من استخراج الإحداثيات من هذا الرابط" : "Could not extract coordinates from this URL");
                setGoogleMapsLinkError(extractFailedMsg);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(extractFailedMsg);
                return;
            }
            const geocodeData = await getLocationDetails({
                lat: coordinates.lat,
                lng: coordinates.lng
            });
            let detectedCity = "";
            let detectedCountry = "";
            let detectedLandmark = "";
            if (geocodeData?.results && geocodeData.results.length > 0) {
                const result = geocodeData.results[0];
                detectedLandmark = result.formatted_address || "";
                for (const comp of result.address_components){
                    if (comp.types.includes("locality")) detectedCity = comp.long_name;
                    else if (comp.types.includes("administrative_area_level_2") && !detectedCity) detectedCity = comp.long_name;
                    else if (comp.types.includes("country")) {
                        const cName = comp.long_name.toLowerCase();
                        if (cName.includes("emirates") || cName === "uae") detectedCountry = "UAE";
                        else if (cName === "egypt") detectedCountry = "Egypt";
                        else if (cName === "oman") detectedCountry = "Oman";
                    }
                }
            }
            if (detectedCountry) {
                const found_0 = COUNTRY_OPTIONS.find((c_1)=>c_1.value === detectedCountry);
                setCountry(detectedCountry);
                if (found_0) setCountryId(found_0.id);
            }
            if (detectedCity) {
                setSelectedCity(detectedCity);
                setValue("city_id", detectedCity, {
                    shouldValidate: true
                });
            }
            const formattedLat = Number(coordinates.lat.toFixed(6));
            const formattedLng = Number(coordinates.lng.toFixed(6));
            setValue("latitude", formattedLat, {
                shouldValidate: true
            });
            setValue("longitude", formattedLng, {
                shouldValidate: true
            });
            setValue("google_map_link", url, {
                shouldValidate: true
            });
            if (detectedLandmark && !fullAddress) {
                setFullAddress(detectedLandmark);
                setValue("location_description", detectedLandmark);
                setValue("landmark", detectedLandmark);
            }
            setLocationData((prev_6)=>({
                    ...prev_6,
                    latitude: formattedLat,
                    longitude: formattedLng,
                    google_map_link: url,
                    city_id: detectedCity || prev_6.city_id,
                    landmark: detectedLandmark || prev_6.landmark
                }));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("projects.form.location.messages.extractSuccess") || (isAr ? "تم تحديد الموقع بنجاح" : "Location extracted successfully"));
        } catch (err) {
            console.error("Error processing Google Maps link:", err);
            const processErrorMsg = t("projects.form.location.messages.processError") || (isAr ? "حدث خطأ أثناء معالجة الرابط" : "Failed to parse Google Maps URL");
            setGoogleMapsLinkError(processErrorMsg);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(processErrorMsg);
        } finally{
            setIsLoadingLocation(false);
        }
    };
    const handleMapSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectLocationForm.useCallback[handleMapSelect]": (data)=>{
            const roundedLat = Number(data.lat.toFixed(6));
            const roundedLng = Number(data.lng.toFixed(6));
            const mapLink = data.googleMapLink || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(roundedLat, roundedLng);
            setValue("latitude", roundedLat, {
                shouldValidate: true
            });
            setValue("longitude", roundedLng, {
                shouldValidate: true
            });
            setValue("google_map_link", mapLink, {
                shouldValidate: true
            });
            if (data.city) {
                setSelectedCity(data.city);
                setValue("city_id", data.city, {
                    shouldValidate: true
                });
            }
            if (data.landmark && !fullAddress) {
                setFullAddress(data.landmark);
                setValue("location_description", data.landmark);
                setValue("landmark", data.landmark);
            }
            setGoogleMapsInput(mapLink);
            setGoogleMapsLinkError(null);
            setLocationData({
                "ProjectLocationForm.useCallback[handleMapSelect]": (prev_7)=>({
                        ...prev_7,
                        latitude: roundedLat,
                        longitude: roundedLng,
                        google_map_link: mapLink,
                        city_id: data.city || prev_7.city_id,
                        area_id: data.area || prev_7.area_id,
                        landmark: data.landmark || prev_7.landmark
                    })
            }["ProjectLocationForm.useCallback[handleMapSelect]"]);
        }
    }["ProjectLocationForm.useCallback[handleMapSelect]"], [
        setValue,
        fullAddress,
        setLocationData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                            children: isAr ? "تفاصيل الموقع" : "Location Details"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "country",
                                        className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
                                        children: isAr ? "الدولة *" : "Country *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: country || "UAE",
                                        onValueChange: handleCountryChange,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                id: "country",
                                                className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: isAr ? "اختر الدولة" : "Select Country"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: COUNTRY_OPTIONS.map((c_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: c_2.value,
                                                        className: "text-xs cursor-pointer",
                                                        children: t(`common.countries.${c_2.key}`) || (isAr ? c_2.labelAr : c_2.label)
                                                    }, c_2.value, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "error-city_id",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "city",
                                        className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
                                        children: isAr ? "المحافظة / المدينة *" : "Governorate / City"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        value: selectedCity,
                                        onValueChange: handleCityChange,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                id: "city",
                                                className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950",
                                                error: !!errors.city_id,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                    placeholder: isAr ? "اختر المحافظة / المدينة" : "Pick or type a governorate/city"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: opt.value,
                                                        className: "text-xs",
                                                        children: opt.label
                                                    }, opt.value, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    errors.city_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-red-500 mt-1",
                                        children: isAr ? "المحافظة / المدينة مطلوبة" : "City is required"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 331,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "full_address",
                                className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
                                children: isAr ? "العنوان الكامل" : "Full Address"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "full_address",
                                value: fullAddress,
                                onChange: (e)=>handleFullAddressChange(e.target.value),
                                placeholder: isAr ? "المنطقة، الشارع، المبنى" : "Area, street, building",
                                className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-gray-200 dark:border-neutral-800 p-3.5 sm:p-4 space-y-1.5 bg-gray-50/50 dark:bg-neutral-950/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "google_maps_input",
                                className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                children: isAr ? "رابط خريطة جوجل (توليد الإحداثيات)" : "Google Maps link (generate coordinates)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "google_maps_input",
                                        value: googleMapsInput,
                                        onChange: (e_0)=>{
                                            setGoogleMapsInput(e_0.target.value);
                                            setValue("google_map_link", e_0.target.value);
                                        },
                                        onKeyDown: (e_1)=>{
                                            if (e_1.key === "Enter") {
                                                e_1.preventDefault();
                                                handleGoogleMapLink(googleMapsInput);
                                            }
                                        },
                                        placeholder: "https://www.google.com/maps/@30.05,31.24,15z",
                                        className: "flex-1 bg-white dark:bg-neutral-950 text-xs h-9 border-gray-300 dark:border-neutral-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>handleGoogleMapLink(googleMapsInput),
                                        disabled: isLoadingLocation || !googleMapsInput.trim(),
                                        className: "border-teal-600 dark:border-teal-500 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 font-medium px-4 h-9 text-xs shadow-2xs shrink-0 cursor-pointer",
                                        children: isLoadingLocation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-3.5 w-3.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                            lineNumber: 359,
                                            columnNumber: 36
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isAr ? "توليد" : "Generate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                            lineNumber: 359,
                                            columnNumber: 87
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-gray-400 dark:text-gray-500",
                                children: isAr ? "الصق رابط خرائط جوجل وسنقوم بملء خط الطول ودوائر العرض تلقائياً." : "Paste a Google Maps link and we'll fill latitude/longitude automatically."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            googleMapsLinkError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-red-500 mt-1",
                                children: googleMapsLinkError
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 365,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-2 border-b border-gray-100 dark:border-neutral-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                lineNumber: 373,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                                                children: isAr ? "الموقع على الخريطة" : "Location on Map"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                                lineNumber: 374,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                        children: isAr ? "انقر فوق الخريطة لتحديد الموقع، أو اسحب الدبوس للضبط الدقيق." : "Click the map to set the location, or drag the pin to fine-tune."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this),
                            locationData.latitude && locationData.longitude ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/60 text-teal-700 dark:text-teal-300 text-xs font-mono shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            Number(locationData.latitude).toFixed(5),
                                            ", ",
                                            Number(locationData.longitude).toFixed(5)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 383,
                                columnNumber: 62
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full rounded-xl overflow-hidden shadow-xs border border-gray-200 dark:border-neutral-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$InteractiveMapPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveMapPicker"], {
                            latitude: locationData.latitude || 25.2048,
                            longitude: locationData.longitude || 55.2708,
                            onLocationSelect: handleMapSelect,
                            height: "h-[440px]",
                            showControls: true,
                            showBadges: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "lat_coord",
                                        className: "text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1",
                                        children: isAr ? "خط العرض (Latitude)" : "Latitude"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "lat_coord",
                                        type: "number",
                                        step: "any",
                                        value: locationData.latitude ?? "",
                                        onChange: (e_2)=>handleLatitudeChange(e_2.target.value),
                                        placeholder: "25.204800",
                                        className: "bg-white dark:bg-neutral-950 text-xs font-mono h-9 border-gray-300 dark:border-neutral-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "lng_coord",
                                        className: "text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1",
                                        children: isAr ? "خط الطول (Longitude)" : "Longitude"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "lng_coord",
                                        type: "number",
                                        step: "any",
                                        value: locationData.longitude ?? "",
                                        onChange: (e_3)=>handleLongitudeChange(e_3.target.value),
                                        placeholder: "55.270800",
                                        className: "bg-white dark:bg-neutral-950 text-xs font-mono h-9 border-gray-300 dark:border-neutral-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx",
        lineNumber: 292,
        columnNumber: 10
    }, this);
}
_s(ProjectLocationForm, "xjJLB3p4fYPmxe9ipv26BVhbk14=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$expand$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$get$2d$location$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$cities$2d$by$2d$country$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ProjectLocationForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectLocationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, error, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", error && "border-red-500 focus-visible:ring-red-500", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
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
"[project]/src/components/shared/SeoFieldsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeoFieldsSection",
    ()=>SeoFieldsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
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
function SeoFieldsSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(94);
    if ($[0] !== "322b653fd3d6215bbb5409bf95387f149054a9b0f96c67b399456d0f18355f04") {
        for(let $i = 0; $i < 94; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "322b653fd3d6215bbb5409bf95387f149054a9b0f96c67b399456d0f18355f04";
    }
    const { register, setValue, watch, nameFieldName: t1, slugFieldName: t2, metaTitleFieldName: t3, metaDescriptionFieldName: t4, className: t5, slugPlaceholder: t6, compact: t7 } = t0;
    const nameFieldName = t1 === undefined ? "name" : t1;
    const slugFieldName = t2 === undefined ? "slug" : t2;
    const metaTitleFieldName = t3 === undefined ? "meta_title" : t3;
    const metaDescriptionFieldName = t4 === undefined ? "meta_description" : t4;
    const className = t5 === undefined ? "" : t5;
    const slugPlaceholder = t6 === undefined ? "my-item" : t6;
    t7 === undefined ? false : t7;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t8;
    if ($[1] !== nameFieldName || $[2] !== setValue || $[3] !== slugFieldName || $[4] !== watch) {
        t8 = ({
            "SeoFieldsSection[handleGenerateSlug]": ()=>{
                const sourceName = watch(nameFieldName) || "";
                if (!sourceName) {
                    return;
                }
                const generatedSlug = String(sourceName).toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
                setValue(slugFieldName, generatedSlug, {
                    shouldValidate: true,
                    shouldDirty: true
                });
            }
        })["SeoFieldsSection[handleGenerateSlug]"];
        $[1] = nameFieldName;
        $[2] = setValue;
        $[3] = slugFieldName;
        $[4] = watch;
        $[5] = t8;
    } else {
        t8 = $[5];
    }
    const handleGenerateSlug = t8;
    const t9 = `bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs ${className}`;
    let t10;
    if ($[6] !== isAr || $[7] !== t) {
        t10 = isAr ? "\u062A\u062D\u0633\u064A\u0646 \u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0628\u062D\u062B (SEO)" : t("properties.create.seo.title") || "Search Engine Optimization (SEO)";
        $[6] = isAr;
        $[7] = t;
        $[8] = t10;
    } else {
        t10 = $[8];
    }
    let t11;
    if ($[9] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t10
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
                lineNumber: 90,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 90,
            columnNumber: 11
        }, this);
        $[9] = t10;
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    let t12;
    if ($[11] !== isAr || $[12] !== t) {
        t12 = isAr ? "\u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u062E\u0635\u0635 (Slug)" : t("properties.create.seo.slug") || "Slug";
        $[11] = isAr;
        $[12] = t;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] !== slugFieldName || $[15] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: slugFieldName,
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[14] = slugFieldName;
        $[15] = t12;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "pl-3 pr-2 text-xs text-gray-400 dark:text-gray-500 font-mono select-none",
            children: "/"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== register || $[19] !== slugFieldName) {
        t15 = register(slugFieldName);
        $[18] = register;
        $[19] = slugFieldName;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== slugFieldName || $[22] !== slugPlaceholder || $[23] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-1 flex items-center rounded-md border border-input dark:border-neutral-700 bg-white dark:bg-neutral-950 h-9 shadow-2xs focus-within:ring-1 focus-within:ring-ring",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: slugFieldName,
                    ...t15,
                    placeholder: slugPlaceholder,
                    className: "w-full bg-transparent py-1.5 pr-3 text-xs outline-none placeholder:text-muted-foreground dark:text-gray-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
                    lineNumber: 132,
                    columnNumber: 209
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[21] = slugFieldName;
        $[22] = slugPlaceholder;
        $[23] = t15;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== isAr || $[26] !== t) {
        t17 = isAr ? "\u062A\u0648\u0644\u064A\u062F" : t("properties.create.seo.generate") || "Generate";
        $[25] = isAr;
        $[26] = t;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== handleGenerateSlug || $[29] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: handleGenerateSlug,
            className: "border-[#008081] dark:border-teal-500 text-[#008081] dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-xs px-3.5 h-9 shadow-2xs shrink-0 font-medium",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[28] = handleGenerateSlug;
        $[29] = t17;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== t16 || $[32] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mt-1",
            children: [
                t16,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[31] = t16;
        $[32] = t18;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== isAr || $[35] !== t) {
        t20 = isAr ? "\u064A\u062A\u0645 \u0625\u0646\u0634\u0627\u0624\u0647 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0645\u0646 \u0627\u0644\u0627\u0633\u0645\u061B \u064A\u0645\u0643\u0646\u0643 \u062A\u0639\u062F\u064A\u0644\u0647." : t("properties.create.seo.slugHelp") || "Auto-generated from the name; you can edit it.";
        $[34] = isAr;
        $[35] = t;
        $[36] = t20;
    } else {
        t20 = $[36];
    }
    let t21;
    if ($[37] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] text-gray-500 dark:text-gray-400 mt-1",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[37] = t20;
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] !== t13 || $[40] !== t19 || $[41] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[39] = t13;
        $[40] = t19;
        $[41] = t21;
        $[42] = t22;
    } else {
        t22 = $[42];
    }
    let t23;
    if ($[43] !== isAr || $[44] !== t) {
        t23 = isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u064A\u062A\u0627 (Meta Title)" : t("properties.create.seo.metaTitle") || "Meta Title";
        $[43] = isAr;
        $[44] = t;
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    let t24;
    if ($[46] !== metaTitleFieldName || $[47] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: metaTitleFieldName,
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[46] = metaTitleFieldName;
        $[47] = t23;
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    let t25;
    if ($[49] !== metaTitleFieldName || $[50] !== register) {
        t25 = register(metaTitleFieldName);
        $[49] = metaTitleFieldName;
        $[50] = register;
        $[51] = t25;
    } else {
        t25 = $[51];
    }
    let t26;
    if ($[52] !== isAr || $[53] !== t) {
        t26 = isAr ? "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u062D\u0629 \u0644\u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0628\u062D\u062B" : t("properties.create.seo.metaTitlePlaceholder") || "Page title for search engines";
        $[52] = isAr;
        $[53] = t;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] !== metaTitleFieldName || $[56] !== t25 || $[57] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: metaTitleFieldName,
            ...t25,
            placeholder: t26,
            className: "mt-1 h-9 text-xs dark:bg-neutral-950 dark:border-neutral-700"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[55] = metaTitleFieldName;
        $[56] = t25;
        $[57] = t26;
        $[58] = t27;
    } else {
        t27 = $[58];
    }
    let t28;
    if ($[59] !== t24 || $[60] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[59] = t24;
        $[60] = t27;
        $[61] = t28;
    } else {
        t28 = $[61];
    }
    let t29;
    if ($[62] !== isAr || $[63] !== t) {
        t29 = isAr ? "\u0648\u0635\u0641 \u0627\u0644\u0645\u064A\u062A\u0627 (Meta Description)" : t("properties.create.seo.metaDescription") || "Meta Description";
        $[62] = isAr;
        $[63] = t;
        $[64] = t29;
    } else {
        t29 = $[64];
    }
    let t30;
    if ($[65] !== metaDescriptionFieldName || $[66] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: metaDescriptionFieldName,
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[65] = metaDescriptionFieldName;
        $[66] = t29;
        $[67] = t30;
    } else {
        t30 = $[67];
    }
    const t31 = isAr ? "\u0648\u0635\u0641 \u0645\u062E\u062A\u0635\u0631 \u064A\u0638\u0647\u0631 \u0641\u064A \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B" : "Short description shown in search results";
    let t32;
    if ($[68] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-gray-400 dark:text-gray-500",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[68] = t31;
        $[69] = t32;
    } else {
        t32 = $[69];
    }
    let t33;
    if ($[70] !== t30 || $[71] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-1",
            children: [
                t30,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[70] = t30;
        $[71] = t32;
        $[72] = t33;
    } else {
        t33 = $[72];
    }
    let t34;
    if ($[73] !== metaDescriptionFieldName || $[74] !== register) {
        t34 = register(metaDescriptionFieldName);
        $[73] = metaDescriptionFieldName;
        $[74] = register;
        $[75] = t34;
    } else {
        t34 = $[75];
    }
    let t35;
    if ($[76] !== isAr || $[77] !== t) {
        t35 = isAr ? "\u0627\u0643\u062A\u0628 \u0648\u0635\u0641 \u0627\u0644\u0645\u064A\u062A\u0627 \u0647\u0646\u0627" : t("properties.create.seo.metaDescriptionPlaceholder") || "Short description shown in search results";
        $[76] = isAr;
        $[77] = t;
        $[78] = t35;
    } else {
        t35 = $[78];
    }
    let t36;
    if ($[79] !== metaDescriptionFieldName || $[80] !== t34 || $[81] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: metaDescriptionFieldName,
            ...t34,
            placeholder: t35,
            rows: 2,
            className: "min-h-[70px] text-xs resize-none bg-white dark:bg-neutral-950 border-input dark:border-neutral-700 dark:text-gray-100"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[79] = metaDescriptionFieldName;
        $[80] = t34;
        $[81] = t35;
        $[82] = t36;
    } else {
        t36 = $[82];
    }
    let t37;
    if ($[83] !== t33 || $[84] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[83] = t33;
        $[84] = t36;
        $[85] = t37;
    } else {
        t37 = $[85];
    }
    let t38;
    if ($[86] !== t22 || $[87] !== t28 || $[88] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3.5",
            children: [
                t22,
                t28,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[86] = t22;
        $[87] = t28;
        $[88] = t37;
        $[89] = t38;
    } else {
        t38 = $[89];
    }
    let t39;
    if ($[90] !== t11 || $[91] !== t38 || $[92] !== t9) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t11,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SeoFieldsSection.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[90] = t11;
        $[91] = t38;
        $[92] = t9;
        $[93] = t39;
    } else {
        t39 = $[93];
    }
    return t39;
}
_s(SeoFieldsSection, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = SeoFieldsSection;
var _c;
__turbopack_context__.k.register(_c, "SeoFieldsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectBasicInfoForm",
    ()=>ProjectBasicInfoForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SeoFieldsSection.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
function ProjectBasicInfoForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(159);
    if ($[0] !== "65e25c94466f400d59fcfdd19d63dff92d92a12bbe45b628d20107c369e97967") {
        for(let $i = 0; $i < 159; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "65e25c94466f400d59fcfdd19d63dff92d92a12bbe45b628d20107c369e97967";
    }
    const { form, developersData, isLoadingDevelopers: t1 } = t0;
    const isLoadingDevelopers = t1 === undefined ? false : t1;
    const { register, watch, setValue, formState: t2 } = form;
    const { errors } = t2;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [isDeveloperOpen, setIsDeveloperOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [developerSearch, setDeveloperSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedDevName, setSelectedDevName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t3;
    if ($[1] !== watch) {
        t3 = watch("developer_id");
        $[1] = watch;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const currentDevId = t3;
    let t4;
    let t5;
    if ($[3] !== currentDevId || $[4] !== developersData) {
        t4 = ({
            "ProjectBasicInfoForm[useEffect()]": ()=>{
                if (currentDevId && developersData && Array.isArray(developersData)) {
                    const match = developersData.find({
                        "ProjectBasicInfoForm[useEffect() > developersData.find()]": (d)=>String(d.developer_id ?? d.id) === String(currentDevId)
                    }["ProjectBasicInfoForm[useEffect() > developersData.find()]"]);
                    if (match) {
                        setSelectedDevName(match.developer_name || match.name || match.title || "");
                    }
                }
            }
        })["ProjectBasicInfoForm[useEffect()]"];
        t5 = [
            currentDevId,
            developersData
        ];
        $[3] = currentDevId;
        $[4] = developersData;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    bb0: {
        if (!developersData || !Array.isArray(developersData)) {
            let t7;
            if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
                t7 = [];
                $[7] = t7;
            } else {
                t7 = $[7];
            }
            t6 = t7;
            break bb0;
        }
        if (!developerSearch.trim()) {
            t6 = developersData;
            break bb0;
        }
        let t7;
        if ($[8] !== developerSearch || $[9] !== developersData) {
            const q = developerSearch.toLowerCase().trim();
            t7 = developersData.filter({
                "ProjectBasicInfoForm[developersData.filter()]": (d_0)=>{
                    const name = (d_0.developer_name || d_0.name || d_0.title || "").toLowerCase();
                    return name.includes(q);
                }
            }["ProjectBasicInfoForm[developersData.filter()]"]);
            $[8] = developerSearch;
            $[9] = developersData;
            $[10] = t7;
        } else {
            t7 = $[10];
        }
        t6 = t7;
    }
    const filteredDevelopers = t6;
    let t7;
    if ($[11] !== isAr || $[12] !== t) {
        t7 = isAr ? "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629" : t("projects.form.basicInfo.title") || "Basic Information";
        $[11] = isAr;
        $[12] = t;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                lineNumber: 132,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== isAr || $[17] !== t) {
        t9 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0639\u0631\u0628\u064A)" : t("projects.form.basicInfo.projectName") || "Project Name (Arabic)";
        $[16] = isAr;
        $[17] = t;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "project-name",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t9,
                " ",
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== isAr || $[23] !== t) {
        t12 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : t("projects.form.basicInfo.projectNamePlaceholder") || "Project name";
        $[22] = isAr;
        $[23] = t;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    const t13 = !!errors.project_name;
    let t14;
    if ($[25] !== register) {
        t14 = register("project_name");
        $[25] = register;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t12 || $[28] !== t13 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "project-name",
            placeholder: t12,
            className: "mt-1 h-9 text-xs",
            error: t13,
            ...t14
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[27] = t12;
        $[28] = t13;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== errors.project_name || $[32] !== t) {
        t16 = errors.project_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.project_name.message || "")
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 192,
            columnNumber: 34
        }, this);
        $[31] = errors.project_name;
        $[32] = t;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== t11 || $[35] !== t15 || $[36] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "error-project_name",
            children: [
                t11,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[34] = t11;
        $[35] = t15;
        $[36] = t16;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    const t18 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0625\u0646\u062C\u0644\u064A\u0632\u064A)" : "Project Name (English)";
    let t19;
    if ($[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "project-name-en",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== register) {
        t20 = register("project_name_en");
        $[40] = register;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "project-name-en",
            placeholder: "Project name",
            className: "mt-1 h-9 text-xs",
            ...t20
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[42] = t20;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t19 || $[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[44] = t19;
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== isAr || $[48] !== t) {
        t23 = isAr ? "\u0627\u0644\u0645\u0637\u0648\u0631" : t("projects.form.basicInfo.developer") || "Developer";
        $[47] = isAr;
        $[48] = t;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "developer",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t23,
                " ",
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[51] = t23;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== developerSearch || $[54] !== developersData || $[55] !== errors.developer_id || $[56] !== filteredDevelopers || $[57] !== isAr || $[58] !== isDeveloperOpen || $[59] !== isLoadingDevelopers || $[60] !== selectedDevName || $[61] !== setValue || $[62] !== t) {
        t26 = ({
            "ProjectBasicInfoForm[<Controller>.render]": (t27)=>{
                const { field } = t27;
                const currentVal = field.value ? String(field.value) : "";
                const matchingDev = developersData?.find({
                    "ProjectBasicInfoForm[<Controller>.render > (anonymous)()]": (d_1)=>String(d_1.developer_id ?? d_1.id) === currentVal
                }["ProjectBasicInfoForm[<Controller>.render > (anonymous)()]"]);
                const displayName = selectedDevName || matchingDev?.developer_name || matchingDev?.name || matchingDev?.title || (currentVal ? isAr ? `مطور #${currentVal}` : `Developer #${currentVal}` : "");
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                    open: isDeveloperOpen,
                    onOpenChange: setIsDeveloperOpen,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                id: "developer",
                                role: "combobox",
                                "aria-expanded": isDeveloperOpen,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs shadow-none transition-colors mt-1 text-gray-900 dark:text-slate-200 text-start", "hover:bg-accent/5 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", errors.developer_id && "border-red-500 focus-visible:ring-red-500", !displayName && "text-muted-foreground"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: displayName || (isLoadingDevelopers ? isAr ? "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0637\u0648\u0631\u064A\u0646..." : "Loading developers..." : isAr ? "\u0627\u0628\u062D\u062B \u0648\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0637\u0648\u0631" : t("projects.form.basicInfo.selectDeveloper") || "Search and pick a developer")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                        lineNumber: 279,
                                        columnNumber: 673
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 shrink-0 ms-2",
                                        children: isLoadingDevelopers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-3.5 w-3.5 animate-spin opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                            lineNumber: 279,
                                            columnNumber: 1152
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "h-4 w-4 opacity-50 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                            lineNumber: 279,
                                            columnNumber: 1214
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                        lineNumber: 279,
                                        columnNumber: 1074
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                lineNumber: 279,
                                columnNumber: 113
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                            lineNumber: 279,
                            columnNumber: 82
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                            className: "w-[var(--radix-popover-trigger-width)] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-md z-50",
                            align: "start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "h-3.5 w-3.5 text-gray-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                            lineNumber: 279,
                                            columnNumber: 1589
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: developerSearch,
                                            onChange: {
                                                "ProjectBasicInfoForm[<Controller>.render > <input>.onChange]": (e)=>setDeveloperSearch(e.target.value)
                                            }["ProjectBasicInfoForm[<Controller>.render > <input>.onChange]"],
                                            placeholder: isAr ? "\u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u0637\u0648\u0631..." : "Search developer...",
                                            className: "w-full bg-transparent border-none text-xs outline-hidden text-gray-900 dark:text-white placeholder:text-gray-400",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                            lineNumber: 279,
                                            columnNumber: 1646
                                        }, this),
                                        developerSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: {
                                                "ProjectBasicInfoForm[<Controller>.render > <button>.onClick]": ()=>setDeveloperSearch("")
                                            }["ProjectBasicInfoForm[<Controller>.render > <button>.onClick]"],
                                            className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-0.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                                lineNumber: 283,
                                                columnNumber: 159
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                            lineNumber: 281,
                                            columnNumber: 359
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                    lineNumber: 279,
                                    columnNumber: 1489
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-56 overflow-y-auto p-1 space-y-0.5",
                                    children: isLoadingDevelopers && (!developersData || developersData.length === 0) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center p-4 text-xs text-gray-400 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 animate-spin text-teal-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                                lineNumber: 283,
                                                columnNumber: 415
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isAr ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." : "Loading..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                                lineNumber: 283,
                                                columnNumber: 473
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                        lineNumber: 283,
                                        columnNumber: 333
                                    }, this) : filteredDevelopers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 text-center text-xs text-gray-500",
                                        children: isAr ? "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0637\u0648\u0631\u064A\u0646 \u0645\u0637\u0627\u0628\u0642\u0629" : "No developers found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                        lineNumber: 283,
                                        columnNumber: 625
                                    }, this) : filteredDevelopers.map({
                                        "ProjectBasicInfoForm[<Controller>.render > filteredDevelopers.map()]": (dev)=>{
                                            const id = String(dev.developer_id ?? dev.id ?? "");
                                            const name_0 = dev.developer_name || dev.name || dev.title || `Developer #${id}`;
                                            const isSelected = currentVal === id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "ProjectBasicInfoForm[<Controller>.render > filteredDevelopers.map() > <button>.onClick]": ()=>{
                                                        setSelectedDevName(name_0);
                                                        field.onChange(id);
                                                        setValue("developer_id", id, {
                                                            shouldValidate: true,
                                                            shouldDirty: true,
                                                            shouldTouch: true
                                                        });
                                                        setIsDeveloperOpen(false);
                                                        setDeveloperSearch("");
                                                    }
                                                }["ProjectBasicInfoForm[<Controller>.render > filteredDevelopers.map() > <button>.onClick]"],
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-md transition-colors text-start", isSelected ? "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 font-medium" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: name_0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 407
                                                    }, this),
                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "h-3.5 w-3.5 text-teal-600 shrink-0 ms-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 464
                                                    }, this)
                                                ]
                                            }, id, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                                lineNumber: 288,
                                                columnNumber: 26
                                            }, this);
                                        }
                                    }["ProjectBasicInfoForm[<Controller>.render > filteredDevelopers.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                                    lineNumber: 283,
                                    columnNumber: 200
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                            lineNumber: 279,
                            columnNumber: 1302
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
                    lineNumber: 279,
                    columnNumber: 16
                }, this);
            }
        })["ProjectBasicInfoForm[<Controller>.render]"];
        $[53] = developerSearch;
        $[54] = developersData;
        $[55] = errors.developer_id;
        $[56] = filteredDevelopers;
        $[57] = isAr;
        $[58] = isDeveloperOpen;
        $[59] = isLoadingDevelopers;
        $[60] = selectedDevName;
        $[61] = setValue;
        $[62] = t;
        $[63] = t26;
    } else {
        t26 = $[63];
    }
    let t27;
    if ($[64] !== form.control || $[65] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "developer_id",
            control: form.control,
            render: t26
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[64] = form.control;
        $[65] = t26;
        $[66] = t27;
    } else {
        t27 = $[66];
    }
    let t28;
    if ($[67] !== errors.developer_id || $[68] !== t) {
        t28 = errors.developer_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.developer_id.message || "")
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 330,
            columnNumber: 34
        }, this);
        $[67] = errors.developer_id;
        $[68] = t;
        $[69] = t28;
    } else {
        t28 = $[69];
    }
    let t29;
    if ($[70] !== t25 || $[71] !== t27 || $[72] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "error-developer_id",
            children: [
                t25,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[70] = t25;
        $[71] = t27;
        $[72] = t28;
        $[73] = t29;
    } else {
        t29 = $[73];
    }
    let t30;
    if ($[74] !== isAr || $[75] !== t) {
        t30 = isAr ? "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : t("projects.form.basicInfo.status") || "Project Status";
        $[74] = isAr;
        $[75] = t;
        $[76] = t30;
    } else {
        t30 = $[76];
    }
    let t31;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[77] = t31;
    } else {
        t31 = $[77];
    }
    let t32;
    if ($[78] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "status",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t30,
                " ",
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[78] = t30;
        $[79] = t32;
    } else {
        t32 = $[79];
    }
    let t33;
    if ($[80] !== watch) {
        t33 = watch("status") || "ongoing";
        $[80] = watch;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    if ($[82] !== setValue) {
        t34 = ({
            "ProjectBasicInfoForm[<Select>.onValueChange]": (value)=>setValue("status", value, {
                    shouldValidate: true
                })
        })["ProjectBasicInfoForm[<Select>.onValueChange]"];
        $[82] = setValue;
        $[83] = t34;
    } else {
        t34 = $[83];
    }
    const t35 = !!errors.status;
    let t36;
    if ($[84] !== isAr || $[85] !== t) {
        t36 = isAr ? "\u0642\u064A\u062F \u0627\u0644\u0625\u0646\u0634\u0627\u0621" : t("projects.form.basicInfo.selectStatus") || "Select status";
        $[84] = isAr;
        $[85] = t;
        $[86] = t36;
    } else {
        t36 = $[86];
    }
    let t37;
    if ($[87] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            placeholder: t36
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        $[87] = t36;
        $[88] = t37;
    } else {
        t37 = $[88];
    }
    let t38;
    if ($[89] !== t35 || $[90] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "mt-1 h-9 text-xs",
            error: t35,
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[89] = t35;
        $[90] = t37;
        $[91] = t38;
    } else {
        t38 = $[91];
    }
    let t39;
    if ($[92] !== isAr || $[93] !== t) {
        t39 = isAr ? "\u0642\u064A\u062F \u0627\u0644\u0625\u0646\u0634\u0627\u0621" : t("projects.form.basicInfo.underConstruction") || "Under Construction";
        $[92] = isAr;
        $[93] = t;
        $[94] = t39;
    } else {
        t39 = $[94];
    }
    let t40;
    if ($[95] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "ongoing",
            className: "text-xs",
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[95] = t39;
        $[96] = t40;
    } else {
        t40 = $[96];
    }
    let t41;
    if ($[97] !== isAr || $[98] !== t) {
        t41 = isAr ? "\u0645\u0643\u062A\u0645\u0644" : t("projects.form.basicInfo.completed") || "Completed";
        $[97] = isAr;
        $[98] = t;
        $[99] = t41;
    } else {
        t41 = $[99];
    }
    let t42;
    if ($[100] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "completed",
            className: "text-xs",
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[100] = t41;
        $[101] = t42;
    } else {
        t42 = $[101];
    }
    let t43;
    if ($[102] !== isAr || $[103] !== t) {
        t43 = isAr ? "\u0642\u0631\u064A\u0628\u0627\u064B" : t("projects.form.basicInfo.upcoming") || "Upcoming";
        $[102] = isAr;
        $[103] = t;
        $[104] = t43;
    } else {
        t43 = $[104];
    }
    let t44;
    if ($[105] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "upcoming",
            className: "text-xs",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[105] = t43;
        $[106] = t44;
    } else {
        t44 = $[106];
    }
    let t45;
    if ($[107] !== t40 || $[108] !== t42 || $[109] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t40,
                t42,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[107] = t40;
        $[108] = t42;
        $[109] = t44;
        $[110] = t45;
    } else {
        t45 = $[110];
    }
    let t46;
    if ($[111] !== t33 || $[112] !== t34 || $[113] !== t38 || $[114] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t33,
            onValueChange: t34,
            children: [
                t38,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[111] = t33;
        $[112] = t34;
        $[113] = t38;
        $[114] = t45;
        $[115] = t46;
    } else {
        t46 = $[115];
    }
    let t47;
    if ($[116] !== errors.status || $[117] !== t) {
        t47 = errors.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.status.message || "")
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 492,
            columnNumber: 28
        }, this);
        $[116] = errors.status;
        $[117] = t;
        $[118] = t47;
    } else {
        t47 = $[118];
    }
    let t48;
    if ($[119] !== t32 || $[120] !== t46 || $[121] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "error-status",
            children: [
                t32,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[119] = t32;
        $[120] = t46;
        $[121] = t47;
        $[122] = t48;
    } else {
        t48 = $[122];
    }
    let t49;
    if ($[123] !== isAr || $[124] !== t) {
        t49 = isAr ? "\u0627\u0644\u0648\u0635\u0641" : t("projects.form.basicInfo.shortDescription") || "Description";
        $[123] = isAr;
        $[124] = t;
        $[125] = t49;
    } else {
        t49 = $[125];
    }
    let t50;
    if ($[126] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "description",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[126] = t49;
        $[127] = t50;
    } else {
        t50 = $[127];
    }
    let t51;
    if ($[128] !== register) {
        t51 = register("description");
        $[128] = register;
        $[129] = t51;
    } else {
        t51 = $[129];
    }
    let t52;
    if ($[130] !== isAr || $[131] !== t) {
        t52 = isAr ? "\u0627\u0643\u062A\u0628 \u0648\u0635\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0647\u0646\u0627" : t("projects.form.basicInfo.descriptionPlaceholder") || "Write the project description here";
        $[130] = isAr;
        $[131] = t;
        $[132] = t52;
    } else {
        t52 = $[132];
    }
    let t53;
    if ($[133] !== t51 || $[134] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: "description",
            ...t51,
            placeholder: t52,
            rows: 2,
            className: "mt-1 min-h-[60px] text-xs py-2 resize-none bg-white dark:bg-neutral-950 border-input dark:border-neutral-700 dark:text-gray-100"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 545,
            columnNumber: 11
        }, this);
        $[133] = t51;
        $[134] = t52;
        $[135] = t53;
    } else {
        t53 = $[135];
    }
    let t54;
    if ($[136] !== errors.description || $[137] !== t) {
        t54 = errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.description.message || "")
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 554,
            columnNumber: 33
        }, this);
        $[136] = errors.description;
        $[137] = t;
        $[138] = t54;
    } else {
        t54 = $[138];
    }
    let t55;
    if ($[139] !== t50 || $[140] !== t53 || $[141] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                t50,
                t53,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 563,
            columnNumber: 11
        }, this);
        $[139] = t50;
        $[140] = t53;
        $[141] = t54;
        $[142] = t55;
    } else {
        t55 = $[142];
    }
    let t56;
    if ($[143] !== t17 || $[144] !== t22 || $[145] !== t29 || $[146] !== t48 || $[147] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5",
            children: [
                t17,
                t22,
                t29,
                t48,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        $[143] = t17;
        $[144] = t22;
        $[145] = t29;
        $[146] = t48;
        $[147] = t55;
        $[148] = t56;
    } else {
        t56 = $[148];
    }
    let t57;
    if ($[149] !== t56 || $[150] !== t8) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t8,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 585,
            columnNumber: 11
        }, this);
        $[149] = t56;
        $[150] = t8;
        $[151] = t57;
    } else {
        t57 = $[151];
    }
    let t58;
    if ($[152] !== register || $[153] !== setValue || $[154] !== watch) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeoFieldsSection"], {
            register: register,
            setValue: setValue,
            watch: watch,
            nameFieldName: "project_name",
            slugPlaceholder: "my-property",
            compact: true
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[152] = register;
        $[153] = setValue;
        $[154] = watch;
        $[155] = t58;
    } else {
        t58 = $[155];
    }
    let t59;
    if ($[156] !== t57 || $[157] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx",
            lineNumber: 604,
            columnNumber: 11
        }, this);
        $[156] = t57;
        $[157] = t58;
        $[158] = t59;
    } else {
        t59 = $[158];
    }
    return t59;
}
_s(ProjectBasicInfoForm, "aLoX2siXSjLnc+mxseHL90FTxLo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ProjectBasicInfoForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectBasicInfoForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectUnitsPricingForm",
    ()=>ProjectUnitsPricingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SeoFieldsSection.tsx [app-client] (ecmascript)");
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
const CURRENCY_OPTIONS = [
    {
        label: "AED",
        value: "AED"
    },
    {
        label: "USD",
        value: "USD"
    },
    {
        label: "SAR",
        value: "SAR"
    },
    {
        label: "EGP",
        value: "EGP"
    },
    {
        label: "QAR",
        value: "QAR"
    },
    {
        label: "KWD",
        value: "KWD"
    },
    {
        label: "BHD",
        value: "BHD"
    },
    {
        label: "OMR",
        value: "OMR"
    }
];
function ProjectUnitsPricingForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(163);
    if ($[0] !== "5008cf614d2f43e58502f7de02cffd4204832f9b84cb4c697ef8a20e9a010ee0") {
        for(let $i = 0; $i < 163; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5008cf614d2f43e58502f7de02cffd4204832f9b84cb4c697ef8a20e9a010ee0";
    }
    const { form } = t0;
    const { register, watch, setValue, formState: t1 } = form;
    const { errors } = t1;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t2;
    if ($[1] !== watch) {
        t2 = watch("currency") || "AED";
        $[1] = watch;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const currencyValue = t2;
    let t3;
    if ($[3] !== isAr || $[4] !== t) {
        t3 = isAr ? "\u0627\u0644\u0648\u062D\u062F\u0627\u062A \u0648\u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631" : t("projects.form.units.title") || "Units & Pricing";
        $[3] = isAr;
        $[4] = t;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t3
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
                lineNumber: 84,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== isAr || $[9] !== t) {
        t5 = isAr ? "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0648\u062D\u062F\u0627\u062A" : t("projects.form.units.totalUnits") || "Total Units";
        $[8] = isAr;
        $[9] = t;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "total_units",
            className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
            children: [
                t5,
                " ",
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== register) {
        t8 = register("total_units");
        $[14] = register;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const t9 = isAr ? "\u0645\u062B\u0627\u0644: 100" : "e.g. 100";
    const t10 = !!errors.total_units;
    let t11;
    if ($[16] !== t10 || $[17] !== t8 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "total_units",
            type: "number",
            min: 0,
            ...t8,
            placeholder: t9,
            className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950",
            error: t10
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t8;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== errors.total_units || $[21] !== t) {
        t12 = errors.total_units && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.total_units.message || "") || errors.total_units.message
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 136,
            columnNumber: 33
        }, this);
        $[20] = errors.total_units;
        $[21] = t;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t11 || $[24] !== t12 || $[25] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "error-total_units",
            children: [
                t7,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t12;
        $[25] = t7;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== isAr || $[28] !== t) {
        t14 = isAr ? "\u0627\u0644\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629" : t("projects.form.units.availableUnits") || "Available Units";
        $[27] = isAr;
        $[28] = t;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "available_units",
            className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
            children: [
                t14,
                " ",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== register) {
        t17 = register("available_units");
        $[33] = register;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    const t18 = isAr ? "\u0645\u062B\u0627\u0644: 50" : "e.g. 50";
    const t19 = !!errors.available_units;
    let t20;
    if ($[35] !== t17 || $[36] !== t18 || $[37] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "available_units",
            type: "number",
            min: 0,
            ...t17,
            placeholder: t18,
            className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950",
            error: t19
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[35] = t17;
        $[36] = t18;
        $[37] = t19;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== errors.available_units || $[40] !== t) {
        t21 = errors.available_units && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.available_units.message || "") || errors.available_units.message
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 199,
            columnNumber: 37
        }, this);
        $[39] = errors.available_units;
        $[40] = t;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== t16 || $[43] !== t20 || $[44] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "error-available_units",
            children: [
                t16,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[42] = t16;
        $[43] = t20;
        $[44] = t21;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[46] !== t13 || $[47] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t13,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[46] = t13;
        $[47] = t22;
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] !== isAr || $[50] !== t) {
        t24 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0637\u0644\u0627\u0642" : t("projects.form.units.launchDate") || "Launch Date";
        $[49] = isAr;
        $[50] = t;
        $[51] = t24;
    } else {
        t24 = $[51];
    }
    let t25;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "launch_date",
            className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
            children: [
                t24,
                " ",
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[53] = t24;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] !== register) {
        t27 = register("launch_date");
        $[55] = register;
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    const t28 = !!errors.launch_date;
    let t29;
    if ($[57] !== t27 || $[58] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "launch_date",
            type: "date",
            ...t27,
            className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950",
            error: t28
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[57] = t27;
        $[58] = t28;
        $[59] = t29;
    } else {
        t29 = $[59];
    }
    let t30;
    if ($[60] !== errors.launch_date || $[61] !== t) {
        t30 = errors.launch_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.launch_date.message || "") || errors.launch_date.message
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 269,
            columnNumber: 33
        }, this);
        $[60] = errors.launch_date;
        $[61] = t;
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] !== t26 || $[64] !== t29 || $[65] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "error-launch_date",
            children: [
                t26,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[63] = t26;
        $[64] = t29;
        $[65] = t30;
        $[66] = t31;
    } else {
        t31 = $[66];
    }
    let t32;
    if ($[67] !== isAr || $[68] !== t) {
        t32 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621" : t("projects.form.units.completionDate") || "Completion Date";
        $[67] = isAr;
        $[68] = t;
        $[69] = t32;
    } else {
        t32 = $[69];
    }
    let t33;
    if ($[70] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "completion_date",
            className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[70] = t32;
        $[71] = t33;
    } else {
        t33 = $[71];
    }
    let t34;
    if ($[72] !== setValue) {
        t34 = (e)=>{
            setValue("delivery_date", e.target.value);
        };
        $[72] = setValue;
        $[73] = t34;
    } else {
        t34 = $[73];
    }
    let t35;
    if ($[74] !== register || $[75] !== t34) {
        t35 = register("completion_date", {
            onChange: t34
        });
        $[74] = register;
        $[75] = t34;
        $[76] = t35;
    } else {
        t35 = $[76];
    }
    const t36 = !!errors.completion_date;
    let t37;
    if ($[77] !== t35 || $[78] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "completion_date",
            type: "date",
            ...t35,
            className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950",
            error: t36
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[77] = t35;
        $[78] = t36;
        $[79] = t37;
    } else {
        t37 = $[79];
    }
    let t38;
    if ($[80] !== errors.completion_date || $[81] !== t) {
        t38 = errors.completion_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-red-500 mt-1",
            children: t(errors.completion_date.message || "") || errors.completion_date.message
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 336,
            columnNumber: 37
        }, this);
        $[80] = errors.completion_date;
        $[81] = t;
        $[82] = t38;
    } else {
        t38 = $[82];
    }
    let t39;
    if ($[83] !== t33 || $[84] !== t37 || $[85] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "error-completion_date",
            children: [
                t33,
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[83] = t33;
        $[84] = t37;
        $[85] = t38;
        $[86] = t39;
    } else {
        t39 = $[86];
    }
    let t40;
    if ($[87] !== t31 || $[88] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t31,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[87] = t31;
        $[88] = t39;
        $[89] = t40;
    } else {
        t40 = $[89];
    }
    const t41 = isAr ? "\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0648\u062D\u062F\u0627\u062A" : "Unit Types";
    let t42;
    if ($[90] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "unit_types",
            className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[90] = t41;
        $[91] = t42;
    } else {
        t42 = $[91];
    }
    let t43;
    if ($[92] !== register) {
        t43 = register("unit_types");
        $[92] = register;
        $[93] = t43;
    } else {
        t43 = $[93];
    }
    const t44 = isAr ? "\u0645\u062B\u0627\u0644: \u0634\u0642\u0642\u060C \u0641\u0644\u0644\u060C \u0628\u0646\u062A\u0647\u0627\u0648\u0633" : "e.g. Apartments, Villas, Penthouses";
    let t45;
    if ($[94] !== t43 || $[95] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "unit_types",
            ...t43,
            placeholder: t44,
            className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[94] = t43;
        $[95] = t44;
        $[96] = t45;
    } else {
        t45 = $[96];
    }
    let t46;
    if ($[97] !== t42 || $[98] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t42,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[97] = t42;
        $[98] = t45;
        $[99] = t46;
    } else {
        t46 = $[99];
    }
    const t47 = isAr ? "\u0627\u0644\u0639\u0645\u0644\u0629" : "Currency";
    let t48;
    if ($[100] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "currency",
            className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[100] = t47;
        $[101] = t48;
    } else {
        t48 = $[101];
    }
    let t49;
    if ($[102] !== setValue) {
        t49 = ({
            "ProjectUnitsPricingForm[<Select>.onValueChange]": (val)=>setValue("currency", val, {
                    shouldDirty: true
                })
        })["ProjectUnitsPricingForm[<Select>.onValueChange]"];
        $[102] = setValue;
        $[103] = t49;
    } else {
        t49 = $[103];
    }
    let t50;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            id: "currency",
            className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: "AED"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
                lineNumber: 421,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[104] = t50;
    } else {
        t50 = $[104];
    }
    let t51;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: CURRENCY_OPTIONS.map(_ProjectUnitsPricingFormCURRENCY_OPTIONSMap)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[105] = t51;
    } else {
        t51 = $[105];
    }
    let t52;
    if ($[106] !== currencyValue || $[107] !== t49) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: currencyValue,
            onValueChange: t49,
            children: [
                t50,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[106] = currencyValue;
        $[107] = t49;
        $[108] = t52;
    } else {
        t52 = $[108];
    }
    let t53;
    if ($[109] !== t48 || $[110] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t48,
                    t52
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
                lineNumber: 444,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[109] = t48;
        $[110] = t52;
        $[111] = t53;
    } else {
        t53 = $[111];
    }
    const t54 = isAr ? "\u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 (\u0645\xB2)" : "Project Size (m\xB2)";
    let t55;
    if ($[112] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "project_size",
            className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
            children: t54
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[112] = t54;
        $[113] = t55;
    } else {
        t55 = $[113];
    }
    let t56;
    if ($[114] !== register) {
        t56 = register("project_size");
        $[114] = register;
        $[115] = t56;
    } else {
        t56 = $[115];
    }
    const t57 = isAr ? "\u0645\u062B\u0627\u0644: 25,000" : "e.g. 25,000";
    let t58;
    if ($[116] !== t56 || $[117] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "project_size",
            ...t56,
            placeholder: t57,
            className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[116] = t56;
        $[117] = t57;
        $[118] = t58;
    } else {
        t58 = $[118];
    }
    let t59;
    if ($[119] !== t55 || $[120] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t55,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[119] = t55;
        $[120] = t58;
        $[121] = t59;
    } else {
        t59 = $[121];
    }
    const t60 = isAr ? "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0633\u0639\u0631" : "Min Price";
    let t61;
    if ($[122] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "min_price",
            className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
            children: t60
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[122] = t60;
        $[123] = t61;
    } else {
        t61 = $[123];
    }
    let t62;
    if ($[124] !== register) {
        t62 = register("min_price");
        $[124] = register;
        $[125] = t62;
    } else {
        t62 = $[125];
    }
    const t63 = isAr ? "\u0645\u062B\u0627\u0644: 1,500,000" : "e.g. 1,500,000";
    let t64;
    if ($[126] !== t62 || $[127] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "min_price",
            ...t62,
            placeholder: t63,
            className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[126] = t62;
        $[127] = t63;
        $[128] = t64;
    } else {
        t64 = $[128];
    }
    let t65;
    if ($[129] !== t61 || $[130] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t61,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[129] = t61;
        $[130] = t64;
        $[131] = t65;
    } else {
        t65 = $[131];
    }
    let t66;
    if ($[132] !== t59 || $[133] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t59,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[132] = t59;
        $[133] = t65;
        $[134] = t66;
    } else {
        t66 = $[134];
    }
    const t67 = isAr ? "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0633\u0639\u0631" : "Max Price";
    let t68;
    if ($[135] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "max_price",
            className: "text-xs text-gray-600 dark:text-gray-300 font-medium",
            children: t67
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        $[135] = t67;
        $[136] = t68;
    } else {
        t68 = $[136];
    }
    let t69;
    if ($[137] !== register) {
        t69 = register("max_price");
        $[137] = register;
        $[138] = t69;
    } else {
        t69 = $[138];
    }
    const t70 = isAr ? "\u0645\u062B\u0627\u0644: 9,000,000" : "e.g. 9,000,000";
    let t71;
    if ($[139] !== t69 || $[140] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "max_price",
            ...t69,
            placeholder: t70,
            className: "mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 552,
            columnNumber: 11
        }, this);
        $[139] = t69;
        $[140] = t70;
        $[141] = t71;
    } else {
        t71 = $[141];
    }
    let t72;
    if ($[142] !== t68 || $[143] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t68,
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 561,
            columnNumber: 11
        }, this);
        $[142] = t68;
        $[143] = t71;
        $[144] = t72;
    } else {
        t72 = $[144];
    }
    let t73;
    if ($[145] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 570,
            columnNumber: 11
        }, this);
        $[145] = t73;
    } else {
        t73 = $[145];
    }
    let t74;
    if ($[146] !== t72) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t72,
                t73
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 577,
            columnNumber: 11
        }, this);
        $[146] = t72;
        $[147] = t74;
    } else {
        t74 = $[147];
    }
    let t75;
    if ($[148] !== t23 || $[149] !== t4 || $[150] !== t40 || $[151] !== t46 || $[152] !== t53 || $[153] !== t66 || $[154] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t4,
                t23,
                t40,
                t46,
                t53,
                t66,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 585,
            columnNumber: 11
        }, this);
        $[148] = t23;
        $[149] = t4;
        $[150] = t40;
        $[151] = t46;
        $[152] = t53;
        $[153] = t66;
        $[154] = t74;
        $[155] = t75;
    } else {
        t75 = $[155];
    }
    let t76;
    if ($[156] !== register || $[157] !== setValue || $[158] !== watch) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeoFieldsSection"], {
            register: register,
            setValue: setValue,
            watch: watch,
            nameFieldName: "project_name",
            slugPlaceholder: "my-property",
            compact: true
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[156] = register;
        $[157] = setValue;
        $[158] = watch;
        $[159] = t76;
    } else {
        t76 = $[159];
    }
    let t77;
    if ($[160] !== t75 || $[161] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t75,
                t76
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
            lineNumber: 609,
            columnNumber: 11
        }, this);
        $[160] = t75;
        $[161] = t76;
        $[162] = t77;
    } else {
        t77 = $[162];
    }
    return t77;
}
_s(ProjectUnitsPricingForm, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ProjectUnitsPricingForm;
function _ProjectUnitsPricingFormCURRENCY_OPTIONSMap(c) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: c.value,
        className: "text-xs",
        children: c.label
    }, c.value, false, {
        fileName: "[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx",
        lineNumber: 619,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProjectUnitsPricingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectAmenitiesForm",
    ()=>ProjectAmenitiesForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SeoFieldsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PROJECT_AMENITIES = [
    {
        id: "pool",
        name: "Pool",
        nameAr: "مسبح",
        icon: "💧"
    },
    {
        id: "private_pool",
        name: "Private Pool",
        nameAr: "مسبح خاص",
        icon: "🏖️"
    },
    {
        id: "shared_pool",
        name: "Shared Pool",
        nameAr: "مسبح مشترك",
        icon: "🌊"
    },
    {
        id: "gym",
        name: "Gym",
        nameAr: "صالة رياضية",
        icon: "🏋️"
    },
    {
        id: "parking",
        name: "Parking",
        nameAr: "موقف سيارات",
        icon: "🚗"
    },
    {
        id: "covered_parking",
        name: "Covered Parking",
        nameAr: "موقف مغطى",
        icon: "🅿️"
    },
    {
        id: "security_24h",
        name: "24h Security",
        nameAr: "أمن 24 ساعة",
        icon: "🛡️"
    },
    {
        id: "garden",
        name: "Garden",
        nameAr: "حديقة",
        icon: "🌳"
    },
    {
        id: "kids_play_area",
        name: "Kids Play Area",
        nameAr: "ألعاب أطفال",
        icon: "🧸"
    },
    {
        id: "near_the_sea",
        name: "Near the Sea",
        nameAr: "قريب من البحر",
        icon: "🏖️"
    },
    {
        id: "sea_view",
        name: "Sea View",
        nameAr: "إطلالة بحرية",
        icon: "🌅"
    },
    {
        id: "golf_view",
        name: "Golf View",
        nameAr: "إطلالة جولف",
        icon: "⛳"
    },
    {
        id: "elevator",
        name: "Elevator",
        nameAr: "مصعد",
        icon: "🏢"
    },
    {
        id: "balcony",
        name: "Balcony",
        nameAr: "شرفة",
        icon: "🏙️"
    },
    {
        id: "central_ac",
        name: "Central AC",
        nameAr: "تكييف مركزي",
        icon: "❄️"
    },
    {
        id: "maids_room",
        name: "Maid's Room",
        nameAr: "غرفة خادمة",
        icon: "🧹"
    },
    {
        id: "study_room",
        name: "Study Room",
        nameAr: "غرفة مكتب",
        icon: "📚"
    },
    {
        id: "storage",
        name: "Storage",
        nameAr: "مستودع",
        icon: "📦"
    },
    {
        id: "built_in_wardrobes",
        name: "Built-in Wardrobes",
        nameAr: "خزائن مدمجة",
        icon: "🚪"
    },
    {
        id: "fitted_kitchen",
        name: "Fitted Kitchen",
        nameAr: "مطبخ مجهز",
        icon: "🍳"
    },
    {
        id: "furnished",
        name: "Furnished",
        nameAr: "مفروش",
        icon: "🛋️"
    },
    {
        id: "barbecue_area",
        name: "Barbecue Area",
        nameAr: "منطقة شواء",
        icon: "🔥"
    },
    {
        id: "jacuzzi",
        name: "Jacuzzi",
        nameAr: "جاكوزي",
        icon: "🛁"
    },
    {
        id: "sauna",
        name: "Sauna",
        nameAr: "ساونا",
        icon: "🧖"
    },
    {
        id: "mosque",
        name: "Mosque",
        nameAr: "مسجد",
        icon: "🕌"
    },
    {
        id: "shopping_mall",
        name: "Shopping Mall",
        nameAr: "مركز تسوق",
        icon: "🛍️"
    },
    {
        id: "schools_nearby",
        name: "Schools Nearby",
        nameAr: "مدارس قريبة",
        icon: "🏫"
    },
    {
        id: "clinic",
        name: "Clinic",
        nameAr: "عيادة طبية",
        icon: "🏥"
    },
    {
        id: "cinema",
        name: "Cinema",
        nameAr: "سينما",
        icon: "🎬"
    },
    {
        id: "smart_home",
        name: "Smart Home",
        nameAr: "منزل ذكي",
        icon: "📱"
    },
    {
        id: "solar_panels",
        name: "Solar Panels",
        nameAr: "ألواح شمسية",
        icon: "☀️"
    },
    {
        id: "ev_charging",
        name: "EV Charging",
        nameAr: "شحن سيارات كهربائية",
        icon: "⚡"
    },
    {
        id: "pets_allowed",
        name: "Pets Allowed",
        nameAr: "حيوانات أليفة",
        icon: "🐾"
    },
    {
        id: "concierge",
        name: "Concierge",
        nameAr: "خدمة كونسيرج",
        icon: "🛎️"
    }
];
const AMENITY_ROWS = [
    PROJECT_AMENITIES.slice(0, 12),
    PROJECT_AMENITIES.slice(12, 23),
    PROJECT_AMENITIES.slice(23, 34)
];
function ProjectAmenitiesForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "354630e2154059db59a7896850b468815b46369c7357001fbc473474da307ebd") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "354630e2154059db59a7896850b468815b46369c7357001fbc473474da307ebd";
    }
    const { form } = t0;
    const { register, watch, setValue } = form;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [selectedAmenities, setSelectedAmenities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ProjectAmenitiesForm[toggleAmenity]": (id)=>{
                setSelectedAmenities({
                    "ProjectAmenitiesForm[toggleAmenity > setSelectedAmenities()]": (prev)=>prev.includes(id) ? prev.filter({
                            "ProjectAmenitiesForm[toggleAmenity > setSelectedAmenities() > prev.filter()]": (item)=>item !== id
                        }["ProjectAmenitiesForm[toggleAmenity > setSelectedAmenities() > prev.filter()]"]) : [
                            ...prev,
                            id
                        ]
                }["ProjectAmenitiesForm[toggleAmenity > setSelectedAmenities()]"]);
            }
        })["ProjectAmenitiesForm[toggleAmenity]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const toggleAmenity = t2;
    const t3 = isAr ? "\u0645\u0631\u0627\u0641\u0642 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "Project Amenities";
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
            lineNumber: 237,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "Select the amenities available in this project";
    let t6;
    if ($[5] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
            lineNumber: 246,
            columnNumber: 10
        }, this);
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== t4 || $[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
            lineNumber: 254,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== isAr || $[11] !== selectedAmenities) {
        t8 = AMENITY_ROWS.map({
            "ProjectAmenitiesForm[AMENITY_ROWS.map()]": (row, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-1.5 sm:gap-2",
                    children: row.map({
                        "ProjectAmenitiesForm[AMENITY_ROWS.map() > row.map()]": (amenity)=>{
                            const isSelected = selectedAmenities.includes(amenity.id);
                            const label = isAr ? amenity.nameAr : amenity.name;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "ProjectAmenitiesForm[AMENITY_ROWS.map() > row.map() > <button>.onClick]": ()=>toggleAmenity(amenity.id)
                                }["ProjectAmenitiesForm[AMENITY_ROWS.map() > row.map() > <button>.onClick]"],
                                className: `inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium border transition-all cursor-pointer select-none shrink-0 ${isSelected ? "bg-teal-50 border-teal-500 text-teal-800 dark:bg-teal-950/40 dark:border-teal-400 dark:text-teal-200 shadow-2xs font-semibold" : "bg-white dark:bg-neutral-900/80 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-neutral-600 hover:bg-gray-50/70 dark:hover:bg-neutral-800/60"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs leading-none shrink-0",
                                        children: amenity.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
                                        lineNumber: 270,
                                        columnNumber: 593
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
                                        lineNumber: 270,
                                        columnNumber: 662
                                    }, this)
                                ]
                            }, amenity.id, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
                                lineNumber: 268,
                                columnNumber: 20
                            }, this);
                        }
                    }["ProjectAmenitiesForm[AMENITY_ROWS.map() > row.map()]"])
                }, rowIdx, false, {
                    fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
                    lineNumber: 264,
                    columnNumber: 68
                }, this)
        }["ProjectAmenitiesForm[AMENITY_ROWS.map()]"]);
        $[10] = isAr;
        $[11] = selectedAmenities;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
            lineNumber: 282,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t7 || $[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[15] = t7;
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== register || $[19] !== setValue || $[20] !== watch) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeoFieldsSection"], {
            register: register,
            setValue: setValue,
            watch: watch,
            nameFieldName: "project_name",
            slugPlaceholder: "my-property",
            compact: true
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[18] = register;
        $[19] = setValue;
        $[20] = watch;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t10 || $[23] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    return t12;
}
_s(ProjectAmenitiesForm, "BdGp2h4hWAjb4NzPMNrG+q81/Fk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ProjectAmenitiesForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectAmenitiesForm");
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
"use client";
;
;
;
;
;
function Dialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
            lineNumber: 28,
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
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
            lineNumber: 56,
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
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
            lineNumber: 84,
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
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
            lineNumber: 112,
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
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
            lineNumber: 152,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 189,
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
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 204,
                    columnNumber: 308
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 204,
                    columnNumber: 333
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 204,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    "data-slot": "dialog-content",
                    className: t2,
                    ...props,
                    children: [
                        children,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 211,
                    columnNumber: 28
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 211,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = props;
        $[11] = t2;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c5 = DialogContent;
function DialogHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
            lineNumber: 253,
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
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
            lineNumber: 294,
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
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
            lineNumber: 335,
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
    if ($[0] !== "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d38a10c9915d74292b0b0bc83406502b6876322dda5fce29572205ff9c939841";
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
            lineNumber: 376,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "d5def119027a4355c004915148fc1b43d947bf091cf759928bfb715003aeeac6") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d5def119027a4355c004915148fc1b43d947bf091cf759928bfb715003aeeac6";
    }
    const { isOpen, onClose, title, description, children, footer, size: t1, showCloseButton: t2, scrollable: t3 } = t0;
    const size = t1 === undefined ? "lg" : t1;
    t2 === undefined ? true : t2;
    const scrollable = t3 === undefined ? false : t3;
    const t4 = `${sizeClasses[size]} ${scrollable ? "max-h-[85vh] flex flex-col" : ""}`;
    let t5;
    if ($[1] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    let t6;
    if ($[3] !== description || $[4] !== title) {
        t6 = description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 60,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            className: "sr-only",
            children: [
                typeof title === "string" ? title : "Dialog",
                " Modal"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 60,
            columnNumber: 79
        }, this);
        $[3] = description;
        $[4] = title;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] !== t5 || $[7] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = `py-4 ${scrollable ? "flex-1 overflow-y-auto" : ""}`;
    let t9;
    if ($[9] !== children || $[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== footer) {
        t10 = footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            children: footer
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 88,
            columnNumber: 21
        }, this);
        $[12] = footer;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10 || $[15] !== t4 || $[16] !== t7 || $[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: t4,
            children: [
                t7,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t4;
        $[16] = t7;
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== isOpen || $[20] !== onClose || $[21] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isOpen,
            onOpenChange: onClose,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[19] = isOpen;
        $[20] = onClose;
        $[21] = t11;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    return t12;
}
_c = Modal;
function ConfirmModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "d5def119027a4355c004915148fc1b43d947bf091cf759928bfb715003aeeac6") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d5def119027a4355c004915148fc1b43d947bf091cf759928bfb715003aeeac6";
    }
    const { isOpen, onClose, onConfirm, title, description, confirmText: t1, cancelText: t2, variant: t3, isLoading: t4 } = t0;
    const confirmText = t1 === undefined ? "Confirm" : t1;
    const cancelText = t2 === undefined ? "Cancel" : t2;
    const variant = t3 === undefined ? "default" : t3;
    const isLoading = t4 === undefined ? false : t4;
    let t5;
    if ($[1] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    let t6;
    if ($[3] !== description) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[3] = description;
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== t5 || $[6] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== cancelText || $[9] !== isLoading || $[10] !== onClose) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            onClick: onClose,
            disabled: isLoading,
            children: cancelText
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        $[8] = cancelText;
        $[9] = isLoading;
        $[10] = onClose;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = variant === "destructive" ? "destructive" : "default";
    const t10 = variant === "default" ? "bg-teal-600 hover:bg-teal-700 text-white" : "";
    const t11 = isLoading ? "Loading..." : confirmText;
    let t12;
    if ($[12] !== isLoading || $[13] !== onConfirm || $[14] !== t10 || $[15] !== t11 || $[16] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onConfirm,
            variant: t9,
            disabled: isLoading,
            className: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[12] = isLoading;
        $[13] = onConfirm;
        $[14] = t10;
        $[15] = t11;
        $[16] = t9;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12 || $[19] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
            className: "gap-2",
            children: [
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t8;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t13 || $[22] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-md",
            children: [
                t7,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t7;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== isOpen || $[25] !== onClose || $[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isOpen,
            onOpenChange: onClose,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/ui/modal.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[24] = isOpen;
        $[25] = onClose;
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    return t15;
}
_c1 = ConfirmModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "Modal");
__turbopack_context__.k.register(_c1, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddPropertyPaymentPlanModal",
    ()=>AddPropertyPaymentPlanModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.js [app-client] (ecmascript) <export default as Percent>");
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
function AddPropertyPaymentPlanModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(118);
    if ($[0] !== "9c779c2470ba6faf7b4843f392fe5053a549790857ec0636bc9d88d5f1bbe339") {
        for(let $i = 0; $i < 118; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9c779c2470ba6faf7b4843f392fe5053a549790857ec0636bc9d88d5f1bbe339";
    }
    const { isOpen, onClose, onSave, initialData } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [downPayment, setDownPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [installmentsCount, setInstallmentsCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Quarterly");
    const [handoverPercentage, setHandoverPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(40);
    let t1;
    if ($[1] !== initialData) {
        t1 = ({
            "AddPropertyPaymentPlanModal[useEffect()]": ()=>{
                if (initialData) {
                    setName(initialData.name || "");
                    setDescription(initialData.description || "");
                    setDownPayment(initialData.down_payment_percentage ?? 20);
                    setInstallmentsCount(initialData.installments_count ?? 4);
                    setPeriod(initialData.period || "Quarterly");
                    setHandoverPercentage(initialData.handover_percentage ?? 40);
                } else {
                    setName("");
                    setDescription("");
                    setDownPayment(20);
                    setInstallmentsCount(4);
                    setPeriod("Quarterly");
                    setHandoverPercentage(40);
                }
            }
        })["AddPropertyPaymentPlanModal[useEffect()]"];
        $[1] = initialData;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== initialData || $[4] !== isOpen) {
        t2 = [
            initialData,
            isOpen
        ];
        $[3] = initialData;
        $[4] = isOpen;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] !== description || $[7] !== downPayment || $[8] !== handoverPercentage || $[9] !== initialData?.id || $[10] !== installmentsCount || $[11] !== name || $[12] !== onClose || $[13] !== onSave || $[14] !== period) {
        t3 = ({
            "AddPropertyPaymentPlanModal[handleSubmit]": (e)=>{
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (!name.trim()) {
                    return;
                }
                onSave({
                    id: initialData?.id || `plan_${Date.now()}`,
                    name: name.trim(),
                    description: description.trim() || undefined,
                    down_payment_percentage: Number(downPayment) || 0,
                    installments_count: Number(installmentsCount) || 1,
                    period: period || "Monthly",
                    handover_percentage: Number(handoverPercentage) || 0
                });
                onClose();
            }
        })["AddPropertyPaymentPlanModal[handleSubmit]"];
        $[6] = description;
        $[7] = downPayment;
        $[8] = handoverPercentage;
        $[9] = initialData?.id;
        $[10] = installmentsCount;
        $[11] = name;
        $[12] = onClose;
        $[13] = onSave;
        $[14] = period;
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    const handleSubmit = t3;
    let t4;
    if ($[16] !== initialData || $[17] !== t) {
        t4 = initialData ? t("properties.create.paymentPlans.editPlanTitle") || "Edit Payment Plan" : t("properties.create.paymentPlans.addPlanTitle") || "Add Payment Plan";
        $[16] = initialData;
        $[17] = t;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    let t5;
    if ($[19] !== t) {
        t5 = t("properties.create.paymentPlans.modalDescription") || "Configure payment plan details, down payment, and installment terms.";
        $[19] = t;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    let t6;
    if ($[21] !== t) {
        t6 = t("properties.create.paymentPlans.planName") || "Plan Name";
        $[21] = t;
        $[22] = t6;
    } else {
        t6 = $[22];
    }
    let t7;
    if ($[23] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "plan_name",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t6,
                " *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[23] = t6;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    let t8;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    let t9;
    if ($[26] !== name) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "plan_name",
            value: name,
            onChange: t8,
            placeholder: "e.g. 60/40 Construction Plan",
            required: true,
            className: "mt-1 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[26] = name;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    let t10;
    if ($[28] !== t7 || $[29] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[28] = t7;
        $[29] = t9;
        $[30] = t10;
    } else {
        t10 = $[30];
    }
    let t11;
    if ($[31] !== t) {
        t11 = t("properties.create.paymentPlans.description") || "Description";
        $[31] = t;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "plan_desc",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[33] = t11;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "AddPropertyPaymentPlanModal[<Textarea>.onChange]": (e_1)=>setDescription(e_1.target.value)
        })["AddPropertyPaymentPlanModal[<Textarea>.onChange]"];
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== description) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: "plan_desc",
            value: description,
            onChange: t13,
            placeholder: "Short details about this payment plan",
            rows: 2,
            className: "mt-1 text-xs min-h-[60px]"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[36] = description;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] !== t12 || $[39] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[38] = t12;
        $[39] = t14;
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] !== t) {
        t16 = t("properties.create.paymentPlans.downPayment") || "Down Payment";
        $[41] = t;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "down_payment",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t16,
                " (%) *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[43] = t16;
        $[44] = t17;
    } else {
        t17 = $[44];
    }
    let t18;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_2)=>setDownPayment(Number(e_2.target.value))
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    let t19;
    if ($[46] !== downPayment) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "down_payment",
            type: "number",
            min: "0",
            max: "100",
            value: downPayment,
            onChange: t18,
            required: true,
            className: "pr-7 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[46] = downPayment;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
            className: "absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 dark:text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[49] = t19;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== t17 || $[52] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[51] = t17;
        $[52] = t21;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== t) {
        t23 = t("properties.create.paymentPlans.onHandover") || "On Handover";
        $[54] = t;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "handover_perc",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t23,
                " (%)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[56] = t23;
        $[57] = t24;
    } else {
        t24 = $[57];
    }
    let t25;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_3)=>setHandoverPercentage(Number(e_3.target.value))
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] !== handoverPercentage) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "handover_perc",
            type: "number",
            min: "0",
            max: "100",
            value: handoverPercentage,
            onChange: t25,
            className: "pr-7 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[59] = handoverPercentage;
        $[60] = t26;
    } else {
        t26 = $[60];
    }
    let t27;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
            className: "absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 dark:text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[62] = t26;
        $[63] = t28;
    } else {
        t28 = $[63];
    }
    let t29;
    if ($[64] !== t24 || $[65] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[64] = t24;
        $[65] = t28;
        $[66] = t29;
    } else {
        t29 = $[66];
    }
    let t30;
    if ($[67] !== t) {
        t30 = t("properties.create.paymentPlans.installmentsCount") || "Number of Installments";
        $[67] = t;
        $[68] = t30;
    } else {
        t30 = $[68];
    }
    let t31;
    if ($[69] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "installments_count",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t30,
                " *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[69] = t30;
        $[70] = t31;
    } else {
        t31 = $[70];
    }
    let t32;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_4)=>setInstallmentsCount(Number(e_4.target.value))
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[71] = t32;
    } else {
        t32 = $[71];
    }
    let t33;
    if ($[72] !== installmentsCount) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "installments_count",
            type: "number",
            min: "1",
            max: "120",
            value: installmentsCount,
            onChange: t32,
            required: true,
            className: "mt-1 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[72] = installmentsCount;
        $[73] = t33;
    } else {
        t33 = $[73];
    }
    let t34;
    if ($[74] !== t31 || $[75] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[74] = t31;
        $[75] = t33;
        $[76] = t34;
    } else {
        t34 = $[76];
    }
    let t35;
    if ($[77] !== t) {
        t35 = t("properties.create.paymentPlans.period") || "Payment Period / Frequency";
        $[77] = t;
        $[78] = t35;
    } else {
        t35 = $[78];
    }
    let t36;
    if ($[79] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "period_select",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t35,
                " *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[79] = t35;
        $[80] = t36;
    } else {
        t36 = $[80];
    }
    let t37;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            id: "period_select",
            className: "mt-1 text-xs h-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: "Select period"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                lineNumber: 391,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[81] = t37;
    } else {
        t37 = $[81];
    }
    let t38;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "Monthly",
                    className: "text-xs",
                    children: "Monthly"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                    lineNumber: 398,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "Quarterly",
                    className: "text-xs",
                    children: "Quarterly"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                    lineNumber: 398,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "Semi-Annually",
                    className: "text-xs",
                    children: "Semi-Annually"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                    lineNumber: 398,
                    columnNumber: 166
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "Yearly",
                    className: "text-xs",
                    children: "Yearly"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                    lineNumber: 398,
                    columnNumber: 246
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "During Construction",
                    className: "text-xs",
                    children: "During Construction"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                    lineNumber: 398,
                    columnNumber: 312
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "Post Handover (2 Years)",
                    className: "text-xs",
                    children: "Post Handover (2 Years)"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                    lineNumber: 398,
                    columnNumber: 404
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "Post Handover (3 Years)",
                    className: "text-xs",
                    children: "Post Handover (3 Years)"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                    lineNumber: 398,
                    columnNumber: 504
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "Immediate",
                    className: "text-xs",
                    children: "Immediate"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                    lineNumber: 398,
                    columnNumber: 604
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[82] = t38;
    } else {
        t38 = $[82];
    }
    let t39;
    if ($[83] !== period) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: period,
            onValueChange: setPeriod,
            children: [
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[83] = period;
        $[84] = t39;
    } else {
        t39 = $[84];
    }
    let t40;
    if ($[85] !== t36 || $[86] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t36,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[85] = t36;
        $[86] = t39;
        $[87] = t40;
    } else {
        t40 = $[87];
    }
    let t41;
    if ($[88] !== t22 || $[89] !== t29 || $[90] !== t34 || $[91] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [
                t22,
                t29,
                t34,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[88] = t22;
        $[89] = t29;
        $[90] = t34;
        $[91] = t40;
        $[92] = t41;
    } else {
        t41 = $[92];
    }
    let t42;
    if ($[93] !== t) {
        t42 = t("common.cancel") || "Cancel";
        $[93] = t;
        $[94] = t42;
    } else {
        t42 = $[94];
    }
    let t43;
    if ($[95] !== onClose || $[96] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: onClose,
            className: "text-xs h-8",
            children: t42
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[95] = onClose;
        $[96] = t42;
        $[97] = t43;
    } else {
        t43 = $[97];
    }
    let t44;
    if ($[98] !== initialData || $[99] !== t) {
        t44 = initialData ? t("common.saveChanges") || "Save Changes" : t("properties.create.paymentPlans.addPlanBtn") || "Add Plan";
        $[98] = initialData;
        $[99] = t;
        $[100] = t44;
    } else {
        t44 = $[100];
    }
    let t45;
    if ($[101] !== handleSubmit || $[102] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            onClick: handleSubmit,
            className: "bg-teal-600 hover:bg-teal-700 text-white text-xs h-8",
            children: t44
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 459,
            columnNumber: 11
        }, this);
        $[101] = handleSubmit;
        $[102] = t44;
        $[103] = t45;
    } else {
        t45 = $[103];
    }
    let t46;
    if ($[104] !== t43 || $[105] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800",
            children: [
                t43,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[104] = t43;
        $[105] = t45;
        $[106] = t46;
    } else {
        t46 = $[106];
    }
    let t47;
    if ($[107] !== t10 || $[108] !== t15 || $[109] !== t41 || $[110] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-1",
            children: [
                t10,
                t15,
                t41,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[107] = t10;
        $[108] = t15;
        $[109] = t41;
        $[110] = t46;
        $[111] = t47;
    } else {
        t47 = $[111];
    }
    let t48;
    if ($[112] !== isOpen || $[113] !== onClose || $[114] !== t4 || $[115] !== t47 || $[116] !== t5) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t4,
            description: t5,
            size: "lg",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[112] = isOpen;
        $[113] = onClose;
        $[114] = t4;
        $[115] = t47;
        $[116] = t5;
        $[117] = t48;
    } else {
        t48 = $[117];
    }
    return t48;
}
_s(AddPropertyPaymentPlanModal, "ryFVLmk1igaFoWek01P2V99RHqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = AddPropertyPaymentPlanModal;
var _c;
__turbopack_context__.k.register(_c, "AddPropertyPaymentPlanModal");
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
"[project]/src/features/properties/components/create/tabs/payment-plans/payment-plans.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRESET_PLAN_TEMPLATES",
    ()=>PRESET_PLAN_TEMPLATES
]);
const PRESET_PLAN_TEMPLATES = [
    {
        id: "plan_50_50",
        name: "50/50 On Handover",
        description: "20% Down payment, 30% during construction, 50% on handover",
        down_payment_percentage: 20,
        installments_count: 4,
        period: "Quarterly",
        handover_percentage: 50
    },
    {
        id: "plan_60_40",
        name: "60/40 Payment Plan",
        description: "20% Down payment, 40% during construction, 40% on handover",
        down_payment_percentage: 20,
        installments_count: 6,
        period: "Quarterly",
        handover_percentage: 40
    },
    {
        id: "plan_70_30",
        name: "70/30 Standard",
        description: "15% Down payment, 55% during construction, 30% on handover",
        down_payment_percentage: 15,
        installments_count: 8,
        period: "Quarterly",
        handover_percentage: 30
    },
    {
        id: "plan_80_20",
        name: "80/20 Post Handover (2 Yrs)",
        description: "20% Down payment, 60% construction, 10% handover, 10% post-handover",
        down_payment_percentage: 20,
        installments_count: 12,
        period: "Monthly",
        handover_percentage: 10
    },
    {
        id: "plan_cash",
        name: "100% Cash / Lump Sum",
        description: "Full payment upfront with maximum discount",
        down_payment_percentage: 100,
        installments_count: 1,
        period: "Immediate",
        handover_percentage: 0
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulkAddPropertyPaymentPlansModal",
    ()=>BulkAddPropertyPaymentPlansModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/payment-plans/payment-plans.types.ts [app-client] (ecmascript)");
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
function BulkAddPropertyPaymentPlansModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "5040aebc03442fe2ed1a2125f5d0dca467f1c3792a17e835b759c38cdeba82ec") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5040aebc03442fe2ed1a2125f5d0dca467f1c3792a17e835b759c38cdeba82ec";
    }
    const { isOpen, onClose, onAddBulk } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "plan_50_50",
            "plan_60_40"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "BulkAddPropertyPaymentPlansModal[toggleSelect]": (id)=>{
                setSelectedIds({
                    "BulkAddPropertyPaymentPlansModal[toggleSelect > setSelectedIds()]": (prev)=>prev.includes(id) ? prev.filter({
                            "BulkAddPropertyPaymentPlansModal[toggleSelect > setSelectedIds() > prev.filter()]": (item)=>item !== id
                        }["BulkAddPropertyPaymentPlansModal[toggleSelect > setSelectedIds() > prev.filter()]"]) : [
                            ...prev,
                            id
                        ]
                }["BulkAddPropertyPaymentPlansModal[toggleSelect > setSelectedIds()]"]);
            }
        })["BulkAddPropertyPaymentPlansModal[toggleSelect]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const toggleSelect = t2;
    let t3;
    if ($[3] !== selectedIds.length) {
        t3 = ({
            "BulkAddPropertyPaymentPlansModal[handleSelectAll]": ()=>{
                if (selectedIds.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].length) {
                    setSelectedIds([]);
                } else {
                    setSelectedIds(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].map(_BulkAddPropertyPaymentPlansModalHandleSelectAllPRESET_PLAN_TEMPLATESMap));
                }
            }
        })["BulkAddPropertyPaymentPlansModal[handleSelectAll]"];
        $[3] = selectedIds.length;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleSelectAll = t3;
    let t4;
    if ($[5] !== onAddBulk || $[6] !== onClose || $[7] !== selectedIds) {
        t4 = ({
            "BulkAddPropertyPaymentPlansModal[handleConfirm]": ()=>{
                const selectedTemplates = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].filter({
                    "BulkAddPropertyPaymentPlansModal[handleConfirm > PRESET_PLAN_TEMPLATES.filter()]": (p_0)=>selectedIds.includes(p_0.id)
                }["BulkAddPropertyPaymentPlansModal[handleConfirm > PRESET_PLAN_TEMPLATES.filter()]"]);
                const newPlans = selectedTemplates.map(_BulkAddPropertyPaymentPlansModalHandleConfirmSelectedTemplatesMap);
                onAddBulk(newPlans);
                onClose();
            }
        })["BulkAddPropertyPaymentPlansModal[handleConfirm]"];
        $[5] = onAddBulk;
        $[6] = onClose;
        $[7] = selectedIds;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleConfirm = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "h-5 w-5 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t) {
        t6 = t("properties.create.paymentPlans.bulkAddTitle") || "Bulk Add Payment Plans";
        $[10] = t;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 110,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t) {
        t8 = t("properties.create.paymentPlans.bulkAddSubtitle") || "Select multiple standard payment plan templates to add them in batch.";
        $[14] = t;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t) {
        t9 = t("properties.create.paymentPlans.availableTemplates") || "Available Templates";
        $[16] = t;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
            children: [
                t9,
                " (",
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== selectedIds.length || $[21] !== t) {
        t11 = selectedIds.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].length ? t("common.deselectAll") || "Deselect All" : t("common.selectAll") || "Select All";
        $[20] = selectedIds.length;
        $[21] = t;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== handleSelectAll || $[24] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: handleSelectAll,
            className: "text-xs text-teal-600 hover:text-teal-700 h-6 px-1.5",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[23] = handleSelectAll;
        $[24] = t11;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t10 || $[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-1.5 border-b border-gray-100 dark:border-neutral-800",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== selectedIds) {
        t14 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].map({
            "BulkAddPropertyPaymentPlansModal[PRESET_PLAN_TEMPLATES.map()]": (template)=>{
                const isSelected = selectedIds.includes(template.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: {
                        "BulkAddPropertyPaymentPlansModal[PRESET_PLAN_TEMPLATES.map() > <div>.onClick]": ()=>toggleSelect(template.id)
                    }["BulkAddPropertyPaymentPlansModal[PRESET_PLAN_TEMPLATES.map() > <div>.onClick]"],
                    className: `flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${isSelected ? "bg-teal-50/70 dark:bg-teal-950/30 border-teal-500 dark:border-teal-500/70 shadow-2xs" : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-0.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                checked: isSelected,
                                onCheckedChange: {
                                    "BulkAddPropertyPaymentPlansModal[PRESET_PLAN_TEMPLATES.map() > <Checkbox>.onCheckedChange]": ()=>toggleSelect(template.id)
                                }["BulkAddPropertyPaymentPlansModal[PRESET_PLAN_TEMPLATES.map() > <Checkbox>.onCheckedChange]"]
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                lineNumber: 174,
                                columnNumber: 438
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                            lineNumber: 174,
                            columnNumber: 414
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate",
                                            children: template.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 176,
                                            columnNumber: 201
                                        }, this),
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 176,
                                            columnNumber: 327
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                    lineNumber: 176,
                                    columnNumber: 150
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2",
                                    children: template.description
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                    lineNumber: 176,
                                    columnNumber: 416
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 mt-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                            children: [
                                                "Down: ",
                                                template.down_payment_percentage,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 176,
                                            columnNumber: 629
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                            children: [
                                                template.installments_count,
                                                " Inst. (",
                                                template.period,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 176,
                                            columnNumber: 749
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                    lineNumber: 176,
                                    columnNumber: 522
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                            lineNumber: 176,
                            columnNumber: 118
                        }, this)
                    ]
                }, template.id, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 172,
                    columnNumber: 16
                }, this);
            }
        }["BulkAddPropertyPaymentPlansModal[PRESET_PLAN_TEMPLATES.map()]"]);
        $[29] = selectedIds;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pr-1",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== t) {
        t16 = t("common.cancel") || "Cancel";
        $[33] = t;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== onClose || $[36] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: onClose,
            className: "text-xs h-8",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[35] = onClose;
        $[36] = t16;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    const t18 = selectedIds.length === 0;
    let t19;
    if ($[38] !== selectedIds.length || $[39] !== t) {
        t19 = t("properties.create.paymentPlans.addSelectedPlans") || `Add ${selectedIds.length} Plan(s)`;
        $[38] = selectedIds.length;
        $[39] = t;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== handleConfirm || $[42] !== t18 || $[43] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            disabled: t18,
            onClick: handleConfirm,
            className: "bg-teal-600 hover:bg-teal-700 text-white text-xs h-8",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[41] = handleConfirm;
        $[42] = t18;
        $[43] = t19;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t17 || $[46] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800",
            children: [
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[45] = t17;
        $[46] = t20;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== t13 || $[49] !== t15 || $[50] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-1",
            children: [
                t13,
                t15,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[48] = t13;
        $[49] = t15;
        $[50] = t21;
        $[51] = t22;
    } else {
        t22 = $[51];
    }
    let t23;
    if ($[52] !== isOpen || $[53] !== onClose || $[54] !== t22 || $[55] !== t7 || $[56] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t7,
            description: t8,
            size: "xl",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[52] = isOpen;
        $[53] = onClose;
        $[54] = t22;
        $[55] = t7;
        $[56] = t8;
        $[57] = t23;
    } else {
        t23 = $[57];
    }
    return t23;
}
_s(BulkAddPropertyPaymentPlansModal, "zbqDKf3ucyVngiatVE7v7hCR+NA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = BulkAddPropertyPaymentPlansModal;
function _BulkAddPropertyPaymentPlansModalHandleConfirmSelectedTemplatesMap(p_1, idx) {
    return {
        id: `bulk_${Date.now()}_${idx}`,
        name: p_1.name,
        description: p_1.description,
        down_payment_percentage: p_1.down_payment_percentage,
        installments_count: p_1.installments_count,
        period: p_1.period,
        handover_percentage: p_1.handover_percentage
    };
}
function _BulkAddPropertyPaymentPlansModalHandleSelectAllPRESET_PLAN_TEMPLATESMap(p) {
    return p.id;
}
var _c;
__turbopack_context__.k.register(_c, "BulkAddPropertyPaymentPlansModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectPaymentPlansForm",
    ()=>ProjectPaymentPlansForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SeoFieldsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$AddPropertyPaymentPlanModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$BulkAddPropertyPaymentPlansModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx [app-client] (ecmascript)");
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
function ProjectPaymentPlansForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "e10bce1dc21334bbdc702b99c556503b869cd8c377c0eb622cb84061e1b7e5a1") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e10bce1dc21334bbdc702b99c556503b869cd8c377c0eb622cb84061e1b7e5a1";
    }
    const { form } = t0;
    const { register, watch, setValue } = form;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBulkModalOpen, setIsBulkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingPlan, setEditingPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[2] !== editingPlan) {
        t2 = ({
            "ProjectPaymentPlansForm[handleSavePlan]": (plan)=>{
                if (editingPlan) {
                    setPlans({
                        "ProjectPaymentPlansForm[handleSavePlan > setPlans()]": (prev)=>prev.map({
                                "ProjectPaymentPlansForm[handleSavePlan > setPlans() > prev.map()]": (p)=>p.id === plan.id ? plan : p
                            }["ProjectPaymentPlansForm[handleSavePlan > setPlans() > prev.map()]"])
                    }["ProjectPaymentPlansForm[handleSavePlan > setPlans()]"]);
                    setEditingPlan(null);
                } else {
                    setPlans({
                        "ProjectPaymentPlansForm[handleSavePlan > setPlans()]": (prev_0)=>[
                                ...prev_0,
                                plan
                            ]
                    }["ProjectPaymentPlansForm[handleSavePlan > setPlans()]"]);
                }
            }
        })["ProjectPaymentPlansForm[handleSavePlan]"];
        $[2] = editingPlan;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleSavePlan = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ProjectPaymentPlansForm[handleAddBulkPlans]": (newPlans)=>{
                setPlans({
                    "ProjectPaymentPlansForm[handleAddBulkPlans > setPlans()]": (prev_1)=>[
                            ...prev_1,
                            ...newPlans
                        ]
                }["ProjectPaymentPlansForm[handleAddBulkPlans > setPlans()]"]);
            }
        })["ProjectPaymentPlansForm[handleAddBulkPlans]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleAddBulkPlans = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ProjectPaymentPlansForm[handleEditPlan]": (plan_0)=>{
                setEditingPlan(plan_0);
                setIsAddModalOpen(true);
            }
        })["ProjectPaymentPlansForm[handleEditPlan]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleEditPlan = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ProjectPaymentPlansForm[handleDeletePlan]": (id)=>{
                setPlans({
                    "ProjectPaymentPlansForm[handleDeletePlan > setPlans()]": (prev_2)=>prev_2.filter({
                            "ProjectPaymentPlansForm[handleDeletePlan > setPlans() > prev_2.filter()]": (p_0)=>p_0.id !== id
                        }["ProjectPaymentPlansForm[handleDeletePlan > setPlans() > prev_2.filter()]"])
                }["ProjectPaymentPlansForm[handleDeletePlan > setPlans()]"]);
            }
        })["ProjectPaymentPlansForm[handleDeletePlan]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const handleDeletePlan = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "ProjectPaymentPlansForm[handleOpenAddModal]": ()=>{
                setEditingPlan(null);
                setIsAddModalOpen(true);
            }
        })["ProjectPaymentPlansForm[handleOpenAddModal]"];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const handleOpenAddModal = t6;
    let t7;
    if ($[8] !== isAr || $[9] !== t) {
        t7 = isAr ? "\u062E\u0637\u0637 \u0627\u0644\u0633\u062F\u0627\u062F" : t("properties.create.paymentPlans.title") || "Payment Plans";
        $[8] = isAr;
        $[9] = t;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== isAr || $[14] !== t) {
        t9 = isAr ? "\u062E\u0637\u0637 \u0627\u0644\u0633\u062F\u0627\u062F \u0627\u062E\u062A\u064A\u0627\u0631\u064A\u0629 \u0648\u062A\u0638\u0647\u0631 \u0641\u064A \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639. \u0623\u0636\u0641 \u062E\u0637\u0629 \u0623\u0648 \u0623\u0643\u062B\u0631: \u0627\u0644\u0627\u0633\u0645\u060C \u0627\u0644\u0648\u0635\u0641\u060C \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649\u060C \u0639\u062F\u062F \u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0648\u0645\u062F\u062A\u0647\u0627." : t("properties.create.paymentPlans.subtitle") || "Payment plans are optional and show on the listing page. Add one or more: name, description, down payment, number of instalments and their period.";
        $[13] = isAr;
        $[14] = t;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t8;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== isAr || $[22] !== plans || $[23] !== t) {
        t12 = plans.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-dashed border-gray-200 dark:border-neutral-800 py-6 px-4 text-center text-xs text-gray-400 dark:text-gray-500",
            children: isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u0637\u0637 \u0633\u062F\u0627\u062F \u0628\u0639\u062F." : t("properties.create.paymentPlans.noPlans") || "No plans yet."
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 174,
            columnNumber: 32
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: plans.map({
                "ProjectPaymentPlansForm[plans.map()]": (plan_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-950/40 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100",
                                                children: plan_1.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                                lineNumber: 175,
                                                columnNumber: 356
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] px-1.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-medium",
                                                children: [
                                                    plan_1.down_payment_percentage,
                                                    "% Down"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                                lineNumber: 175,
                                                columnNumber: 456
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                        lineNumber: 175,
                                        columnNumber: 315
                                    }, this),
                                    plan_1.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-500 dark:text-gray-400",
                                        children: plan_1.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                        lineNumber: 175,
                                        columnNumber: 660
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-400 pt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    plan_1.installments_count,
                                                    " Installments"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                                lineNumber: 175,
                                                columnNumber: 838
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                                lineNumber: 175,
                                                columnNumber: 891
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Period: ",
                                                    plan_1.period
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                                lineNumber: 175,
                                                columnNumber: 905
                                            }, this),
                                            plan_1.handover_percentage !== undefined && plan_1.handover_percentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 1022
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Handover: ",
                                                            plan_1.handover_percentage,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 1036
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                        lineNumber: 175,
                                        columnNumber: 745
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                lineNumber: 175,
                                columnNumber: 286
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: {
                                            "ProjectPaymentPlansForm[plans.map() > <Button>.onClick]": ()=>handleEditPlan(plan_1)
                                        }["ProjectPaymentPlansForm[plans.map() > <Button>.onClick]"],
                                        className: "h-7 w-7 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                            lineNumber: 177,
                                            columnNumber: 169
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                        lineNumber: 175,
                                        columnNumber: 1154
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: {
                                            "ProjectPaymentPlansForm[plans.map() > <Button>.onClick]": ()=>handleDeletePlan(plan_1.id)
                                        }["ProjectPaymentPlansForm[plans.map() > <Button>.onClick]"],
                                        className: "h-7 w-7 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                            lineNumber: 179,
                                            columnNumber: 184
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                        lineNumber: 177,
                                        columnNumber: 211
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                                lineNumber: 175,
                                columnNumber: 1104
                            }, this)
                        ]
                    }, plan_1.id, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
                        lineNumber: 175,
                        columnNumber: 59
                    }, this)
            }["ProjectPaymentPlansForm[plans.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 174,
            columnNumber: 370
        }, this);
        $[21] = isAr;
        $[22] = plans;
        $[23] = t;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== isAr || $[27] !== t) {
        t14 = isAr ? "\u0625\u0636\u0627\u0641\u0629 \u062E\u0637\u0629" : t("properties.create.paymentPlans.addPlan") || "Add plan";
        $[26] = isAr;
        $[27] = t;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: handleOpenAddModal,
            className: "gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "ProjectPaymentPlansForm[<Button>.onClick]": ()=>setIsBulkModalOpen(true)
        })["ProjectPaymentPlansForm[<Button>.onClick]"];
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== isAr || $[34] !== t) {
        t18 = isAr ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u062C\u0645\u0639\u0629" : t("properties.create.paymentPlans.bulkAdd") || "Bulk add";
        $[33] = isAr;
        $[34] = t;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: t16,
            className: "gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[36] = t18;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== t15 || $[39] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pt-0.5",
            children: [
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[38] = t15;
        $[39] = t19;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== t11 || $[42] !== t12 || $[43] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs",
            children: [
                t11,
                t12,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[41] = t11;
        $[42] = t12;
        $[43] = t20;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== register || $[46] !== setValue || $[47] !== watch) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeoFieldsSection"], {
            register: register,
            setValue: setValue,
            watch: watch,
            nameFieldName: "project_name",
            slugPlaceholder: "my-property",
            compact: true
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[45] = register;
        $[46] = setValue;
        $[47] = watch;
        $[48] = t22;
    } else {
        t22 = $[48];
    }
    let t23;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "ProjectPaymentPlansForm[<AddPropertyPaymentPlanModal>.onClose]": ()=>{
                setIsAddModalOpen(false);
                setEditingPlan(null);
            }
        })["ProjectPaymentPlansForm[<AddPropertyPaymentPlanModal>.onClose]"];
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== editingPlan || $[51] !== handleSavePlan || $[52] !== isAddModalOpen) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$AddPropertyPaymentPlanModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddPropertyPaymentPlanModal"], {
            isOpen: isAddModalOpen,
            onClose: t23,
            onSave: handleSavePlan,
            initialData: editingPlan
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[50] = editingPlan;
        $[51] = handleSavePlan;
        $[52] = isAddModalOpen;
        $[53] = t24;
    } else {
        t24 = $[53];
    }
    let t25;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "ProjectPaymentPlansForm[<BulkAddPropertyPaymentPlansModal>.onClose]": ()=>setIsBulkModalOpen(false)
        })["ProjectPaymentPlansForm[<BulkAddPropertyPaymentPlansModal>.onClose]"];
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] !== isBulkModalOpen) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$BulkAddPropertyPaymentPlansModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkAddPropertyPaymentPlansModal"], {
            isOpen: isBulkModalOpen,
            onClose: t25,
            onAddBulk: handleAddBulkPlans
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[55] = isBulkModalOpen;
        $[56] = t26;
    } else {
        t26 = $[56];
    }
    let t27;
    if ($[57] !== t21 || $[58] !== t22 || $[59] !== t24 || $[60] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t21,
                t22,
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[57] = t21;
        $[58] = t22;
        $[59] = t24;
        $[60] = t26;
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    return t27;
}
_s(ProjectPaymentPlansForm, "TybKeerqlh1rUlQK/Z8Sv2c/FYY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ProjectPaymentPlansForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectPaymentPlansForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddProjectMilestoneModal",
    ()=>AddProjectMilestoneModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.js [app-client] (ecmascript) <export default as Percent>");
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
function AddProjectMilestoneModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(136);
    if ($[0] !== "c40a1fc25a9de433de06d58192e967cba5a94eb5a131972432ba9238018e8e0d") {
        for(let $i = 0; $i < 136; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c40a1fc25a9de433de06d58192e967cba5a94eb5a131972432ba9238018e8e0d";
    }
    const { isOpen, onClose, onSave, initialData, totalCount } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [milestoneName, setMilestoneName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pending");
    const [plannedStartDate, setPlannedStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [plannedEndDate, setPlannedEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [actualStartDate, setActualStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [actualEndDate, setActualEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [completionPercentage, setCompletionPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[1] !== initialData) {
        t1 = ({
            "AddProjectMilestoneModal[useEffect()]": ()=>{
                if (initialData) {
                    setMilestoneName(initialData.milestone_name || "");
                    setDescription(initialData.description || "");
                    setStatus(initialData.status || "pending");
                    setPlannedStartDate(initialData.planned_start_date || "");
                    setPlannedEndDate(initialData.planned_end_date || "");
                    setActualStartDate(initialData.actual_start_date || "");
                    setActualEndDate(initialData.actual_end_date || "");
                    setCompletionPercentage(initialData.completion_percentage ?? 0);
                } else {
                    setMilestoneName("");
                    setDescription("");
                    setStatus("pending");
                    setPlannedStartDate("");
                    setPlannedEndDate("");
                    setActualStartDate("");
                    setActualEndDate("");
                    setCompletionPercentage(0);
                }
            }
        })["AddProjectMilestoneModal[useEffect()]"];
        $[1] = initialData;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== initialData || $[4] !== isOpen) {
        t2 = [
            initialData,
            isOpen
        ];
        $[3] = initialData;
        $[4] = isOpen;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] !== actualEndDate || $[7] !== actualStartDate || $[8] !== completionPercentage || $[9] !== description || $[10] !== initialData || $[11] !== milestoneName || $[12] !== onClose || $[13] !== onSave || $[14] !== plannedEndDate || $[15] !== plannedStartDate || $[16] !== status || $[17] !== totalCount) {
        t3 = ({
            "AddProjectMilestoneModal[handleSubmit]": (e)=>{
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (!milestoneName.trim()) {
                    return;
                }
                onSave({
                    id: initialData?.id || `milestone_${Date.now()}`,
                    milestone_name: milestoneName.trim(),
                    description: description.trim() || undefined,
                    status,
                    planned_start_date: plannedStartDate || undefined,
                    planned_end_date: plannedEndDate || undefined,
                    actual_start_date: actualStartDate || undefined,
                    actual_end_date: actualEndDate || undefined,
                    completion_percentage: Number(completionPercentage) || 0,
                    order: initialData ? initialData.order : totalCount
                });
                onClose();
            }
        })["AddProjectMilestoneModal[handleSubmit]"];
        $[6] = actualEndDate;
        $[7] = actualStartDate;
        $[8] = completionPercentage;
        $[9] = description;
        $[10] = initialData;
        $[11] = milestoneName;
        $[12] = onClose;
        $[13] = onSave;
        $[14] = plannedEndDate;
        $[15] = plannedStartDate;
        $[16] = status;
        $[17] = totalCount;
        $[18] = t3;
    } else {
        t3 = $[18];
    }
    const handleSubmit = t3;
    const t4 = isAr ? "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631" : "Pending";
    let t5;
    if ($[19] !== t4) {
        t5 = {
            value: "pending",
            label: t4
        };
        $[19] = t4;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    const t6 = isAr ? "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630" : "In Progress";
    let t7;
    if ($[21] !== t6) {
        t7 = {
            value: "in_progress",
            label: t6
        };
        $[21] = t6;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    const t8 = isAr ? "\u0645\u0643\u062A\u0645\u0644" : "Completed";
    let t9;
    if ($[23] !== t8) {
        t9 = {
            value: "completed",
            label: t8
        };
        $[23] = t8;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    const t10 = isAr ? "\u0645\u062A\u0623\u062E\u0631" : "Delayed";
    let t11;
    if ($[25] !== t10) {
        t11 = {
            value: "delayed",
            label: t10
        };
        $[25] = t10;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== t11 || $[28] !== t5 || $[29] !== t7 || $[30] !== t9) {
        t12 = [
            t5,
            t7,
            t9,
            t11
        ];
        $[27] = t11;
        $[28] = t5;
        $[29] = t7;
        $[30] = t9;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    const statusOptions = t12;
    const t13 = initialData ? isAr ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "Edit Project Milestone" : isAr ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u062D\u0644\u0629 \u062C\u062F\u064A\u062F\u0629" : "Add Project Milestone";
    const t14 = isAr ? "\u062D\u062F\u062F \u062A\u0641\u0627\u0635\u064A\u0644 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0628\u0646\u0627\u0621\u060C \u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629 \u0648\u0627\u0644\u0641\u0639\u0644\u064A\u0629\u060C \u0648\u0646\u0633\u0628\u0629 \u0627\u0644\u0625\u0646\u062C\u0627\u0632." : "Define construction stage details, planned/actual dates, and completion status.";
    const t15 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0631\u062D\u0644\u0629" : "Milestone Name";
    let t16;
    if ($[32] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "milestone_name",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t15,
                " *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[32] = t15;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "AddProjectMilestoneModal[<Input>.onChange]": (e_0)=>setMilestoneName(e_0.target.value)
        })["AddProjectMilestoneModal[<Input>.onChange]"];
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    const t18 = isAr ? "\u0645\u062B\u0627\u0644: \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u0627\u062A \u0648\u0627\u0644\u0628\u0646\u0627\u0621 \u0627\u0644\u0623\u0648\u0644\u064A" : "e.g. Foundation & Substructure";
    let t19;
    if ($[35] !== milestoneName || $[36] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "milestone_name",
            value: milestoneName,
            onChange: t17,
            placeholder: t18,
            required: true,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[35] = milestoneName;
        $[36] = t18;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== t16 || $[39] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[38] = t16;
        $[39] = t19;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    const t21 = isAr ? "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0631\u062D\u0644\u0629" : "Status";
    let t22;
    if ($[41] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "milestone_status",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[41] = t21;
        $[42] = t22;
    } else {
        t22 = $[42];
    }
    let t23;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "AddProjectMilestoneModal[<Select>.onValueChange]": (val)=>setStatus(val)
        })["AddProjectMilestoneModal[<Select>.onValueChange]"];
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    const t24 = isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629" : "Select Status";
    let t25;
    if ($[44] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            id: "milestone_status",
            className: "h-8 text-xs mt-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t24
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
                lineNumber: 262,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[44] = t24;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] !== statusOptions) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: statusOptions.map(_AddProjectMilestoneModalStatusOptionsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[46] = statusOptions;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] !== status || $[49] !== t25 || $[50] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: status,
            onValueChange: t23,
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[48] = status;
        $[49] = t25;
        $[50] = t26;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] !== t22 || $[53] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[52] = t22;
        $[53] = t27;
        $[54] = t28;
    } else {
        t28 = $[54];
    }
    const t29 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u0627\u0644\u0645\u062E\u0637\u0637" : "Planned Start Date";
    let t30;
    if ($[55] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "planned_start",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[55] = t29;
        $[56] = t30;
    } else {
        t30 = $[56];
    }
    let t31;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "AddProjectMilestoneModal[<Input>.onChange]": (e_1)=>setPlannedStartDate(e_1.target.value)
        })["AddProjectMilestoneModal[<Input>.onChange]"];
        $[57] = t31;
    } else {
        t31 = $[57];
    }
    let t32;
    if ($[58] !== plannedStartDate) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "planned_start",
            type: "date",
            value: plannedStartDate,
            onChange: t31,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[58] = plannedStartDate;
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] !== t30 || $[61] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t30,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[60] = t30;
        $[61] = t32;
        $[62] = t33;
    } else {
        t33 = $[62];
    }
    const t34 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0645\u062E\u0637\u0637" : "Planned End Date";
    let t35;
    if ($[63] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "planned_end",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[63] = t34;
        $[64] = t35;
    } else {
        t35 = $[64];
    }
    let t36;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = ({
            "AddProjectMilestoneModal[<Input>.onChange]": (e_2)=>setPlannedEndDate(e_2.target.value)
        })["AddProjectMilestoneModal[<Input>.onChange]"];
        $[65] = t36;
    } else {
        t36 = $[65];
    }
    let t37;
    if ($[66] !== plannedEndDate) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "planned_end",
            type: "date",
            value: plannedEndDate,
            onChange: t36,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[66] = plannedEndDate;
        $[67] = t37;
    } else {
        t37 = $[67];
    }
    let t38;
    if ($[68] !== t35 || $[69] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t35,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[68] = t35;
        $[69] = t37;
        $[70] = t38;
    } else {
        t38 = $[70];
    }
    let t39;
    if ($[71] !== t33 || $[72] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [
                t33,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[71] = t33;
        $[72] = t38;
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    const t40 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621 \u0627\u0644\u0641\u0639\u0644\u064A" : "Actual Start Date";
    let t41;
    if ($[74] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "actual_start",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t40
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[74] = t40;
        $[75] = t41;
    } else {
        t41 = $[75];
    }
    let t42;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = ({
            "AddProjectMilestoneModal[<Input>.onChange]": (e_3)=>setActualStartDate(e_3.target.value)
        })["AddProjectMilestoneModal[<Input>.onChange]"];
        $[76] = t42;
    } else {
        t42 = $[76];
    }
    let t43;
    if ($[77] !== actualStartDate) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "actual_start",
            type: "date",
            value: actualStartDate,
            onChange: t42,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[77] = actualStartDate;
        $[78] = t43;
    } else {
        t43 = $[78];
    }
    let t44;
    if ($[79] !== t41 || $[80] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t41,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[79] = t41;
        $[80] = t43;
        $[81] = t44;
    } else {
        t44 = $[81];
    }
    const t45 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0641\u0639\u0644\u064A" : "Actual End Date";
    let t46;
    if ($[82] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "actual_end",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[82] = t45;
        $[83] = t46;
    } else {
        t46 = $[83];
    }
    let t47;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = ({
            "AddProjectMilestoneModal[<Input>.onChange]": (e_4)=>setActualEndDate(e_4.target.value)
        })["AddProjectMilestoneModal[<Input>.onChange]"];
        $[84] = t47;
    } else {
        t47 = $[84];
    }
    let t48;
    if ($[85] !== actualEndDate) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "actual_end",
            type: "date",
            value: actualEndDate,
            onChange: t47,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[85] = actualEndDate;
        $[86] = t48;
    } else {
        t48 = $[86];
    }
    let t49;
    if ($[87] !== t46 || $[88] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t46,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[87] = t46;
        $[88] = t48;
        $[89] = t49;
    } else {
        t49 = $[89];
    }
    let t50;
    if ($[90] !== t44 || $[91] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [
                t44,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[90] = t44;
        $[91] = t49;
        $[92] = t50;
    } else {
        t50 = $[92];
    }
    const t51 = isAr ? "\u0646\u0633\u0628\u0629 \u0627\u0644\u0625\u0646\u062C\u0627\u0632" : "Completion Percentage";
    let t52;
    if ($[93] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "completion_pct",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t51,
                " (%)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, this);
        $[93] = t51;
        $[94] = t52;
    } else {
        t52 = $[94];
    }
    let t53;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = ({
            "AddProjectMilestoneModal[<Input>.onChange]": (e_5)=>setCompletionPercentage(Number(e_5.target.value))
        })["AddProjectMilestoneModal[<Input>.onChange]"];
        $[95] = t53;
    } else {
        t53 = $[95];
    }
    let t54;
    if ($[96] !== completionPercentage) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "completion_pct",
            type: "number",
            min: "0",
            max: "100",
            value: completionPercentage,
            onChange: t53,
            placeholder: "0",
            className: "h-8 text-xs pr-7"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[96] = completionPercentage;
        $[97] = t54;
    } else {
        t54 = $[97];
    }
    let t55;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
                lineNumber: 481,
                columnNumber: 115
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[98] = t55;
    } else {
        t55 = $[98];
    }
    let t56;
    if ($[99] !== t54) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t54,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[99] = t54;
        $[100] = t56;
    } else {
        t56 = $[100];
    }
    let t57;
    if ($[101] !== t52 || $[102] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t52,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[101] = t52;
        $[102] = t56;
        $[103] = t57;
    } else {
        t57 = $[103];
    }
    const t58 = isAr ? "\u0627\u0644\u0648\u0635\u0641 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)" : "Description (Optional)";
    let t59;
    if ($[104] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "milestone_desc",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t58
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[104] = t58;
        $[105] = t59;
    } else {
        t59 = $[105];
    }
    let t60;
    if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = ({
            "AddProjectMilestoneModal[<Textarea>.onChange]": (e_6)=>setDescription(e_6.target.value)
        })["AddProjectMilestoneModal[<Textarea>.onChange]"];
        $[106] = t60;
    } else {
        t60 = $[106];
    }
    const t61 = isAr ? "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0623\u0648 \u062A\u0641\u0627\u0635\u064A\u0644 \u0625\u0636\u0627\u0641\u064A\u0629 \u0639\u0646 \u0627\u0644\u0645\u0631\u062D\u0644\u0629..." : "Additional details or notes about this construction step...";
    let t62;
    if ($[107] !== description || $[108] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: "milestone_desc",
            value: description,
            onChange: t60,
            placeholder: t61,
            rows: 2,
            className: "text-xs mt-1 resize-none"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[107] = description;
        $[108] = t61;
        $[109] = t62;
    } else {
        t62 = $[109];
    }
    let t63;
    if ($[110] !== t59 || $[111] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t59,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[110] = t59;
        $[111] = t62;
        $[112] = t63;
    } else {
        t63 = $[112];
    }
    const t64 = isAr ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel";
    let t65;
    if ($[113] !== onClose || $[114] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: onClose,
            className: "h-8 text-xs px-3 text-gray-700 dark:text-gray-300",
            children: t64
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, this);
        $[113] = onClose;
        $[114] = t64;
        $[115] = t65;
    } else {
        t65 = $[115];
    }
    const t66 = initialData ? isAr ? "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A" : "Save Changes" : isAr ? "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0631\u062D\u0644\u0629" : "Add Milestone";
    let t67;
    if ($[116] !== handleSubmit || $[117] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            onClick: handleSubmit,
            className: "h-8 text-xs px-4 bg-[#008081] hover:bg-[#006666] text-white",
            children: t66
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 553,
            columnNumber: 11
        }, this);
        $[116] = handleSubmit;
        $[117] = t66;
        $[118] = t67;
    } else {
        t67 = $[118];
    }
    let t68;
    if ($[119] !== t65 || $[120] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end gap-2 pt-2 border-t border-gray-100 dark:border-neutral-800",
            children: [
                t65,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 562,
            columnNumber: 11
        }, this);
        $[119] = t65;
        $[120] = t67;
        $[121] = t68;
    } else {
        t68 = $[121];
    }
    let t69;
    if ($[122] !== t20 || $[123] !== t28 || $[124] !== t39 || $[125] !== t50 || $[126] !== t57 || $[127] !== t63 || $[128] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-1",
            children: [
                t20,
                t28,
                t39,
                t50,
                t57,
                t63,
                t68
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 571,
            columnNumber: 11
        }, this);
        $[122] = t20;
        $[123] = t28;
        $[124] = t39;
        $[125] = t50;
        $[126] = t57;
        $[127] = t63;
        $[128] = t68;
        $[129] = t69;
    } else {
        t69 = $[129];
    }
    let t70;
    if ($[130] !== isOpen || $[131] !== onClose || $[132] !== t13 || $[133] !== t14 || $[134] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t13,
            description: t14,
            size: "lg",
            children: t69
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
            lineNumber: 585,
            columnNumber: 11
        }, this);
        $[130] = isOpen;
        $[131] = onClose;
        $[132] = t13;
        $[133] = t14;
        $[134] = t69;
        $[135] = t70;
    } else {
        t70 = $[135];
    }
    return t70;
}
_s(AddProjectMilestoneModal, "fzon70B/GehHw4quXgW+QErhclM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = AddProjectMilestoneModal;
function _AddProjectMilestoneModalStatusOptionsMap(opt) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: opt.value,
        className: "text-xs",
        children: opt.label
    }, opt.value, false, {
        fileName: "[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx",
        lineNumber: 598,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AddProjectMilestoneModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectMilestonesForm",
    ()=>ProjectMilestonesForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SeoFieldsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$AddProjectMilestoneModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/AddProjectMilestoneModal.tsx [app-client] (ecmascript)");
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
function ProjectMilestonesForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "628accc27d8a5286e0b83ed38f02f00ad79409c621838ec3ef5b11b047e8653e") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "628accc27d8a5286e0b83ed38f02f00ad79409c621838ec3ef5b11b047e8653e";
    }
    const { form } = t0;
    const { register, watch, setValue } = form;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [milestones, setMilestones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingMilestone, setEditingMilestone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[2] !== editingMilestone) {
        t2 = ({
            "ProjectMilestonesForm[handleSaveMilestone]": (milestone)=>{
                if (editingMilestone) {
                    setMilestones({
                        "ProjectMilestonesForm[handleSaveMilestone > setMilestones()]": (prev)=>prev.map({
                                "ProjectMilestonesForm[handleSaveMilestone > setMilestones() > prev.map()]": (m)=>m.id === milestone.id ? milestone : m
                            }["ProjectMilestonesForm[handleSaveMilestone > setMilestones() > prev.map()]"])
                    }["ProjectMilestonesForm[handleSaveMilestone > setMilestones()]"]);
                    setEditingMilestone(null);
                } else {
                    setMilestones({
                        "ProjectMilestonesForm[handleSaveMilestone > setMilestones()]": (prev_0)=>[
                                ...prev_0,
                                milestone
                            ]
                    }["ProjectMilestonesForm[handleSaveMilestone > setMilestones()]"]);
                }
            }
        })["ProjectMilestonesForm[handleSaveMilestone]"];
        $[2] = editingMilestone;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleSaveMilestone = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ProjectMilestonesForm[handleEditMilestone]": (milestone_0)=>{
                setEditingMilestone(milestone_0);
                setIsAddModalOpen(true);
            }
        })["ProjectMilestonesForm[handleEditMilestone]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleEditMilestone = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ProjectMilestonesForm[handleDeleteMilestone]": (id)=>{
                setMilestones({
                    "ProjectMilestonesForm[handleDeleteMilestone > setMilestones()]": (prev_1)=>prev_1.filter({
                            "ProjectMilestonesForm[handleDeleteMilestone > setMilestones() > prev_1.filter()]": (m_0)=>m_0.id !== id
                        }["ProjectMilestonesForm[handleDeleteMilestone > setMilestones() > prev_1.filter()]"])
                }["ProjectMilestonesForm[handleDeleteMilestone > setMilestones()]"]);
            }
        })["ProjectMilestonesForm[handleDeleteMilestone]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleDeleteMilestone = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ProjectMilestonesForm[handleOpenAddModal]": ()=>{
                setEditingMilestone(null);
                setIsAddModalOpen(true);
            }
        })["ProjectMilestonesForm[handleOpenAddModal]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const handleOpenAddModal = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "ProjectMilestonesForm[handleMoveUp]": (index)=>{
                if (index === 0) {
                    return;
                }
                setMilestones({
                    "ProjectMilestonesForm[handleMoveUp > setMilestones()]": (prev_2)=>{
                        const updated = [
                            ...prev_2
                        ];
                        const temp = updated[index - 1];
                        updated[index - 1] = updated[index];
                        updated[index] = temp;
                        return updated;
                    }
                }["ProjectMilestonesForm[handleMoveUp > setMilestones()]"]);
            }
        })["ProjectMilestonesForm[handleMoveUp]"];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const handleMoveUp = t6;
    let t7;
    if ($[8] !== milestones.length) {
        t7 = ({
            "ProjectMilestonesForm[handleMoveDown]": (index_0)=>{
                if (index_0 === milestones.length - 1) {
                    return;
                }
                setMilestones({
                    "ProjectMilestonesForm[handleMoveDown > setMilestones()]": (prev_3)=>{
                        const updated_0 = [
                            ...prev_3
                        ];
                        const temp_0 = updated_0[index_0 + 1];
                        updated_0[index_0 + 1] = updated_0[index_0];
                        updated_0[index_0] = temp_0;
                        return updated_0;
                    }
                }["ProjectMilestonesForm[handleMoveDown > setMilestones()]"]);
            }
        })["ProjectMilestonesForm[handleMoveDown]"];
        $[8] = milestones.length;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const handleMoveDown = t7;
    let t8;
    if ($[10] !== isAr) {
        t8 = ({
            "ProjectMilestonesForm[getStatusBadge]": (status)=>{
                switch(status){
                    case "completed":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 165,
                                        columnNumber: 196
                                    }, this),
                                    isAr ? "\u0645\u0643\u062A\u0645\u0644" : "Completed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                lineNumber: 165,
                                columnNumber: 22
                            }, this);
                        }
                    case "in_progress":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-[#008081] dark:text-teal-300 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 169,
                                        columnNumber: 185
                                    }, this),
                                    isAr ? "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630" : "In Progress"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                lineNumber: 169,
                                columnNumber: 22
                            }, this);
                        }
                    case "delayed":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 173,
                                        columnNumber: 184
                                    }, this),
                                    isAr ? "\u0645\u062A\u0623\u062E\u0631" : "Delayed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                lineNumber: 173,
                                columnNumber: 22
                            }, this);
                        }
                    default:
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 177,
                                        columnNumber: 185
                                    }, this),
                                    isAr ? "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631" : "Pending"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                lineNumber: 177,
                                columnNumber: 22
                            }, this);
                        }
                }
            }
        })["ProjectMilestonesForm[getStatusBadge]"];
        $[10] = isAr;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const getStatusBadge = t8;
    const t9 = isAr ? "\u0645\u0631\u0627\u062D\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "Project Milestones";
    let t10;
    if ($[12] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[12] = t9;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    const t11 = isAr ? "\u0645\u0631\u0627\u062D\u0644 \u0648\u062E\u0637\u0648\u0627\u062A \u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u2014 \u0643\u0644 \u0645\u0631\u062D\u0644\u0629 \u0645\u0639 \u062A\u0648\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u062E\u0637\u064A\u0637/\u0627\u0644\u062A\u0646\u0641\u064A\u0630\u060C \u0646\u0633\u0628\u0629 \u0627\u0644\u0625\u0646\u062C\u0627\u0632\u060C \u0648\u0627\u0644\u062D\u0627\u0644\u0629. \u0623\u0639\u062F \u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0633\u0647\u0645." : "The project's construction steps in order \u2014 each with planned/actual dates, a completion %, and a status. Reorder with the arrows.";
    let t12;
    if ($[14] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== t10 || $[17] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t12;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== getStatusBadge || $[20] !== handleMoveDown || $[21] !== isAr || $[22] !== milestones) {
        t14 = milestones.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-dashed border-gray-200 dark:border-neutral-800 py-6 px-4 text-center text-xs text-gray-400 dark:text-gray-500",
            children: isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0631\u0627\u062D\u0644 \u0628\u0639\u062F." : "No milestones yet."
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 217,
            columnNumber: 37
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: milestones.map({
                "ProjectMilestonesForm[milestones.map()]": (milestone_1, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-950/40 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-0.5 shrink-0 text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "ProjectMilestonesForm[milestones.map() > <button>.onClick]": ()=>handleMoveUp(index_1)
                                        }["ProjectMilestonesForm[milestones.map() > <button>.onClick]"],
                                        disabled: index_1 === 0,
                                        className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-neutral-800 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed",
                                        title: isAr ? "\u062A\u062D\u0631\u064A\u0643 \u0644\u0623\u0639\u0644\u0649" : "Move up",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                            lineNumber: 220,
                                            columnNumber: 325
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 218,
                                        columnNumber: 391
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "ProjectMilestonesForm[milestones.map() > <button>.onClick]": ()=>handleMoveDown(index_1)
                                        }["ProjectMilestonesForm[milestones.map() > <button>.onClick]"],
                                        disabled: index_1 === milestones.length - 1,
                                        className: "p-1 rounded hover:bg-gray-200 dark:hover:bg-neutral-800 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed",
                                        title: isAr ? "\u062A\u062D\u0631\u064A\u0643 \u0644\u0623\u0633\u0641\u0644" : "Move down",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                            lineNumber: 222,
                                            columnNumber: 347
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 220,
                                        columnNumber: 365
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                lineNumber: 218,
                                columnNumber: 316
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate",
                                                children: milestone_1.milestone_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                                lineNumber: 222,
                                                columnNumber: 488
                                            }, this),
                                            getStatusBadge(milestone_1.status),
                                            milestone_1.completion_percentage !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] px-1.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-medium",
                                                children: [
                                                    milestone_1.completion_percentage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                                lineNumber: 222,
                                                columnNumber: 700
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 222,
                                        columnNumber: 437
                                    }, this),
                                    milestone_1.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-500 dark:text-gray-400 truncate",
                                        children: milestone_1.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 222,
                                        columnNumber: 911
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3 text-[11px] text-gray-500 dark:text-gray-400 pt-0.5",
                                        children: [
                                            (milestone_1.planned_start_date || milestone_1.planned_end_date) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-3 w-3 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 1223
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            isAr ? "\u0627\u0644\u0645\u062E\u0637\u0637: " : "Planned: ",
                                                            milestone_1.planned_start_date || "\u2014",
                                                            " ",
                                                            isAr ? "\u0625\u0644\u0649" : "to",
                                                            " ",
                                                            milestone_1.planned_end_date || "\u2014"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 1269
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                                lineNumber: 222,
                                                columnNumber: 1182
                                            }, this),
                                            (milestone_1.actual_start_date || milestone_1.actual_end_date) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-3 w-3 text-teal-600 dark:text-teal-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 1588
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            isAr ? "\u0627\u0644\u0641\u0639\u0644\u064A: " : "Actual: ",
                                                            milestone_1.actual_start_date || "\u2014",
                                                            " ",
                                                            isAr ? "\u0625\u0644\u0649" : "to",
                                                            " ",
                                                            milestone_1.actual_end_date || "\u2014"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 1653
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                                lineNumber: 222,
                                                columnNumber: 1547
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 222,
                                        columnNumber: 1010
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                lineNumber: 222,
                                columnNumber: 395
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: {
                                            "ProjectMilestonesForm[milestones.map() > <Button>.onClick]": ()=>handleEditMilestone(milestone_1)
                                        }["ProjectMilestonesForm[milestones.map() > <Button>.onClick]"],
                                        className: "h-7 w-7 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                            lineNumber: 224,
                                            columnNumber: 172
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 222,
                                        columnNumber: 1923
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: {
                                            "ProjectMilestonesForm[milestones.map() > <Button>.onClick]": ()=>handleDeleteMilestone(milestone_1.id)
                                        }["ProjectMilestonesForm[milestones.map() > <Button>.onClick]"],
                                        className: "h-7 w-7 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                            lineNumber: 226,
                                            columnNumber: 187
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                        lineNumber: 224,
                                        columnNumber: 214
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                                lineNumber: 222,
                                columnNumber: 1873
                            }, this)
                        ]
                    }, milestone_1.id, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                        lineNumber: 218,
                        columnNumber: 78
                    }, this)
            }["ProjectMilestonesForm[milestones.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 217,
            columnNumber: 320
        }, this);
        $[19] = getStatusBadge;
        $[20] = handleMoveDown;
        $[21] = isAr;
        $[22] = milestones;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    const t16 = isAr ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u062D\u0644\u0629" : "Add milestone";
    let t17;
    if ($[25] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pt-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "outline",
                onClick: handleOpenAddModal,
                className: "gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs",
                children: [
                    t15,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
                lineNumber: 246,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[25] = t16;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== t13 || $[28] !== t14 || $[29] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs",
            children: [
                t13,
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[27] = t13;
        $[28] = t14;
        $[29] = t17;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    let t19;
    if ($[31] !== register || $[32] !== setValue || $[33] !== watch) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeoFieldsSection"], {
            register: register,
            setValue: setValue,
            watch: watch,
            nameFieldName: "project_name",
            slugPlaceholder: "my-property",
            compact: true
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[31] = register;
        $[32] = setValue;
        $[33] = watch;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    let t20;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "ProjectMilestonesForm[<AddProjectMilestoneModal>.onClose]": ()=>{
                setIsAddModalOpen(false);
                setEditingMilestone(null);
            }
        })["ProjectMilestonesForm[<AddProjectMilestoneModal>.onClose]"];
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== editingMilestone || $[37] !== handleSaveMilestone || $[38] !== isAddModalOpen || $[39] !== milestones.length) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$AddProjectMilestoneModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddProjectMilestoneModal"], {
            isOpen: isAddModalOpen,
            onClose: t20,
            onSave: handleSaveMilestone,
            initialData: editingMilestone,
            totalCount: milestones.length
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[36] = editingMilestone;
        $[37] = handleSaveMilestone;
        $[38] = isAddModalOpen;
        $[39] = milestones.length;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== t18 || $[42] !== t19 || $[43] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t18,
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t19;
        $[43] = t21;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    return t22;
}
_s(ProjectMilestonesForm, "FXVQ5hdugsqYvx2d4E3Wb1u2MEs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ProjectMilestonesForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectMilestonesForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddProjectBuildingModal",
    ()=>AddProjectBuildingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
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
function AddProjectBuildingModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(152);
    if ($[0] !== "85b0e73eb8a250827a201de9d9204f70dd1a3c14af1c2e80e0496b7ca7e85f04") {
        for(let $i = 0; $i < 152; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85b0e73eb8a250827a201de9d9204f70dd1a3c14af1c2e80e0496b7ca7e85f04";
    }
    const { isOpen, onClose, onSave, initialData } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [buildingName, setBuildingName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [buildingType, setBuildingType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Residential");
    const [constructionStatus, setConstructionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Under Construction");
    const [totalFloors, setTotalFloors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [totalUnits, setTotalUnits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [parkingSpaces, setParkingSpaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [completionDate, setCompletionDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== initialData) {
        t1 = ({
            "AddProjectBuildingModal[useEffect()]": ()=>{
                if (initialData) {
                    setBuildingName(initialData.building_name || "");
                    setBuildingType(initialData.building_type || "Residential");
                    setConstructionStatus(initialData.construction_status || "Under Construction");
                    setTotalFloors(initialData.total_floors ?? 10);
                    setTotalUnits(initialData.total_units ?? 50);
                    setParkingSpaces(initialData.parking_spaces ?? 50);
                    setCompletionDate(initialData.completion_date || "");
                    setDescription(initialData.description || "");
                } else {
                    setBuildingName("");
                    setBuildingType("Residential");
                    setConstructionStatus("Under Construction");
                    setTotalFloors(10);
                    setTotalUnits(50);
                    setParkingSpaces(50);
                    setCompletionDate("");
                    setDescription("");
                }
            }
        })["AddProjectBuildingModal[useEffect()]"];
        $[1] = initialData;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== initialData || $[4] !== isOpen) {
        t2 = [
            initialData,
            isOpen
        ];
        $[3] = initialData;
        $[4] = isOpen;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] !== buildingName || $[7] !== buildingType || $[8] !== completionDate || $[9] !== constructionStatus || $[10] !== description || $[11] !== initialData?.id || $[12] !== onClose || $[13] !== onSave || $[14] !== parkingSpaces || $[15] !== totalFloors || $[16] !== totalUnits) {
        t3 = ({
            "AddProjectBuildingModal[handleSubmit]": (e)=>{
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (!buildingName.trim()) {
                    return;
                }
                onSave({
                    id: initialData?.id || `building_${Date.now()}`,
                    building_name: buildingName.trim(),
                    building_type: buildingType,
                    construction_status: constructionStatus,
                    total_floors: Number(totalFloors) || 1,
                    total_units: Number(totalUnits) || 0,
                    parking_spaces: Number(parkingSpaces) || 0,
                    completion_date: completionDate || undefined,
                    description: description.trim() || undefined
                });
                onClose();
            }
        })["AddProjectBuildingModal[handleSubmit]"];
        $[6] = buildingName;
        $[7] = buildingType;
        $[8] = completionDate;
        $[9] = constructionStatus;
        $[10] = description;
        $[11] = initialData?.id;
        $[12] = onClose;
        $[13] = onSave;
        $[14] = parkingSpaces;
        $[15] = totalFloors;
        $[16] = totalUnits;
        $[17] = t3;
    } else {
        t3 = $[17];
    }
    const handleSubmit = t3;
    const t4 = isAr ? "\u0633\u0643\u0646\u064A" : "Residential";
    let t5;
    if ($[18] !== t4) {
        t5 = {
            value: "Residential",
            label: t4
        };
        $[18] = t4;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    const t6 = isAr ? "\u062A\u062C\u0627\u0631\u064A" : "Commercial";
    let t7;
    if ($[20] !== t6) {
        t7 = {
            value: "Commercial",
            label: t6
        };
        $[20] = t6;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    const t8 = isAr ? "\u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645" : "Mixed-Use";
    let t9;
    if ($[22] !== t8) {
        t9 = {
            value: "Mixed-Use",
            label: t8
        };
        $[22] = t8;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    const t10 = isAr ? "\u0634\u0642\u0642 \u0641\u0646\u062F\u0642\u064A\u0629" : "Hotel Apartments";
    let t11;
    if ($[24] !== t10) {
        t11 = {
            value: "Hotel Apartments",
            label: t10
        };
        $[24] = t10;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    const t12 = isAr ? "\u0641\u064A\u0644\u0627" : "Villa";
    let t13;
    if ($[26] !== t12) {
        t13 = {
            value: "Villa",
            label: t12
        };
        $[26] = t12;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== t11 || $[29] !== t13 || $[30] !== t5 || $[31] !== t7 || $[32] !== t9) {
        t14 = [
            t5,
            t7,
            t9,
            t11,
            t13
        ];
        $[28] = t11;
        $[29] = t13;
        $[30] = t5;
        $[31] = t7;
        $[32] = t9;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    const buildingTypeOptions = t14;
    const t15 = isAr ? "\u0642\u064A\u062F \u0627\u0644\u0625\u0646\u0634\u0627\u0621" : "Under Construction";
    let t16;
    if ($[34] !== t15) {
        t16 = {
            value: "Under Construction",
            label: t15
        };
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    const t17 = isAr ? "\u062C\u0627\u0647\u0632 \u0644\u0644\u0633\u0643\u0646" : "Ready to Move";
    let t18;
    if ($[36] !== t17) {
        t18 = {
            value: "Ready to Move",
            label: t17
        };
        $[36] = t17;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    const t19 = isAr ? "\u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u0631\u0637\u0629" : "Off Plan";
    let t20;
    if ($[38] !== t19) {
        t20 = {
            value: "Off Plan",
            label: t19
        };
        $[38] = t19;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    const t21 = isAr ? "\u0645\u0643\u062A\u0645\u0644" : "Completed";
    let t22;
    if ($[40] !== t21) {
        t22 = {
            value: "Completed",
            label: t21
        };
        $[40] = t21;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== t16 || $[43] !== t18 || $[44] !== t20 || $[45] !== t22) {
        t23 = [
            t16,
            t18,
            t20,
            t22
        ];
        $[42] = t16;
        $[43] = t18;
        $[44] = t20;
        $[45] = t22;
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    const statusOptions = t23;
    const t24 = initialData ? isAr ? "\u062A\u0639\u062F\u064A\u0644 \u0645\u0628\u0646\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "Edit Project Building" : isAr ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u0628\u0646\u0649 \u062C\u062F\u064A\u062F" : "Add Project Building";
    const t25 = isAr ? "\u0623\u062F\u062E\u0644 \u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0645\u0628\u0646\u0649 \u0645\u0646 \u062D\u064A\u062B \u0639\u062F\u062F \u0627\u0644\u0637\u0648\u0627\u0628\u0642\u060C \u0627\u0644\u0648\u062D\u062F\u0627\u062A\u060C \u0627\u0644\u0646\u0648\u0639 \u0648\u0645\u0648\u0627\u0642\u0641 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A." : "Configure building specifications including floors, units, type and parking.";
    const t26 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0645\u0628\u0646\u0649 / \u0627\u0644\u0628\u0631\u062C" : "Building Name";
    let t27;
    if ($[47] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "building_name",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t26,
                " *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[47] = t26;
        $[48] = t27;
    } else {
        t27 = $[48];
    }
    let t28;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "AddProjectBuildingModal[<Input>.onChange]": (e_0)=>setBuildingName(e_0.target.value)
        })["AddProjectBuildingModal[<Input>.onChange]"];
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    const t29 = isAr ? "\u0645\u062B\u0627\u0644: \u0627\u0644\u0628\u0631\u062C A \u0623\u0648 \u0627\u0644\u0645\u0628\u0646\u0649 \u0627\u0644\u0633\u0643\u0646\u064A 1" : "e.g. Tower A or Building 1";
    let t30;
    if ($[50] !== buildingName || $[51] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "building_name",
            value: buildingName,
            onChange: t28,
            placeholder: t29,
            required: true,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[50] = buildingName;
        $[51] = t29;
        $[52] = t30;
    } else {
        t30 = $[52];
    }
    let t31;
    if ($[53] !== t27 || $[54] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[53] = t27;
        $[54] = t30;
        $[55] = t31;
    } else {
        t31 = $[55];
    }
    const t32 = isAr ? "\u0646\u0648\u0639 \u0627\u0644\u0645\u0628\u0646\u0649" : "Building Type";
    let t33;
    if ($[56] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "building_type",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[56] = t32;
        $[57] = t33;
    } else {
        t33 = $[57];
    }
    const t34 = isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u0648\u0639" : "Select Type";
    let t35;
    if ($[58] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            id: "building_type",
            className: "h-8 text-xs mt-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t34
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
                lineNumber: 320,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[58] = t34;
        $[59] = t35;
    } else {
        t35 = $[59];
    }
    let t36;
    if ($[60] !== buildingTypeOptions) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: buildingTypeOptions.map(_AddProjectBuildingModalBuildingTypeOptionsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[60] = buildingTypeOptions;
        $[61] = t36;
    } else {
        t36 = $[61];
    }
    let t37;
    if ($[62] !== buildingType || $[63] !== t35 || $[64] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: buildingType,
            onValueChange: setBuildingType,
            children: [
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[62] = buildingType;
        $[63] = t35;
        $[64] = t36;
        $[65] = t37;
    } else {
        t37 = $[65];
    }
    let t38;
    if ($[66] !== t33 || $[67] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[66] = t33;
        $[67] = t37;
        $[68] = t38;
    } else {
        t38 = $[68];
    }
    const t39 = isAr ? "\u062D\u0627\u0644\u0629 \u0627\u0644\u0628\u0646\u0627\u0621" : "Construction Status";
    let t40;
    if ($[69] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "construction_status",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[69] = t39;
        $[70] = t40;
    } else {
        t40 = $[70];
    }
    const t41 = isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629" : "Select Status";
    let t42;
    if ($[71] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            id: "construction_status",
            className: "h-8 text-xs mt-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t41
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
                lineNumber: 365,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[71] = t41;
        $[72] = t42;
    } else {
        t42 = $[72];
    }
    let t43;
    if ($[73] !== statusOptions) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: statusOptions.map(_AddProjectBuildingModalStatusOptionsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[73] = statusOptions;
        $[74] = t43;
    } else {
        t43 = $[74];
    }
    let t44;
    if ($[75] !== constructionStatus || $[76] !== t42 || $[77] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: constructionStatus,
            onValueChange: setConstructionStatus,
            children: [
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[75] = constructionStatus;
        $[76] = t42;
        $[77] = t43;
        $[78] = t44;
    } else {
        t44 = $[78];
    }
    let t45;
    if ($[79] !== t40 || $[80] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t40,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[79] = t40;
        $[80] = t44;
        $[81] = t45;
    } else {
        t45 = $[81];
    }
    let t46;
    if ($[82] !== t38 || $[83] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [
                t38,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[82] = t38;
        $[83] = t45;
        $[84] = t46;
    } else {
        t46 = $[84];
    }
    const t47 = isAr ? "\u0639\u062F\u062F \u0627\u0644\u0637\u0648\u0627\u0628\u0642" : "Total Floors";
    let t48;
    if ($[85] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "total_floors",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[85] = t47;
        $[86] = t48;
    } else {
        t48 = $[86];
    }
    let t49;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = ({
            "AddProjectBuildingModal[<Input>.onChange]": (e_1)=>setTotalFloors(Number(e_1.target.value))
        })["AddProjectBuildingModal[<Input>.onChange]"];
        $[87] = t49;
    } else {
        t49 = $[87];
    }
    let t50;
    if ($[88] !== totalFloors) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "total_floors",
            type: "number",
            min: "1",
            value: totalFloors,
            onChange: t49,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[88] = totalFloors;
        $[89] = t50;
    } else {
        t50 = $[89];
    }
    let t51;
    if ($[90] !== t48 || $[91] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t48,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[90] = t48;
        $[91] = t50;
        $[92] = t51;
    } else {
        t51 = $[92];
    }
    const t52 = isAr ? "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0648\u062D\u062F\u0627\u062A" : "Total Units";
    let t53;
    if ($[93] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "total_units",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t52
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[93] = t52;
        $[94] = t53;
    } else {
        t53 = $[94];
    }
    let t54;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = ({
            "AddProjectBuildingModal[<Input>.onChange]": (e_2)=>setTotalUnits(Number(e_2.target.value))
        })["AddProjectBuildingModal[<Input>.onChange]"];
        $[95] = t54;
    } else {
        t54 = $[95];
    }
    let t55;
    if ($[96] !== totalUnits) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "total_units",
            type: "number",
            min: "0",
            value: totalUnits,
            onChange: t54,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 462,
            columnNumber: 11
        }, this);
        $[96] = totalUnits;
        $[97] = t55;
    } else {
        t55 = $[97];
    }
    let t56;
    if ($[98] !== t53 || $[99] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t53,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 470,
            columnNumber: 11
        }, this);
        $[98] = t53;
        $[99] = t55;
        $[100] = t56;
    } else {
        t56 = $[100];
    }
    const t57 = isAr ? "\u0645\u0648\u0627\u0642\u0641 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A" : "Parking Spaces";
    let t58;
    if ($[101] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "parking_spaces",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t57
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[101] = t57;
        $[102] = t58;
    } else {
        t58 = $[102];
    }
    let t59;
    if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = ({
            "AddProjectBuildingModal[<Input>.onChange]": (e_3)=>setParkingSpaces(Number(e_3.target.value))
        })["AddProjectBuildingModal[<Input>.onChange]"];
        $[103] = t59;
    } else {
        t59 = $[103];
    }
    let t60;
    if ($[104] !== parkingSpaces) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "parking_spaces",
            type: "number",
            min: "0",
            value: parkingSpaces,
            onChange: t59,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 497,
            columnNumber: 11
        }, this);
        $[104] = parkingSpaces;
        $[105] = t60;
    } else {
        t60 = $[105];
    }
    let t61;
    if ($[106] !== t58 || $[107] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t58,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 505,
            columnNumber: 11
        }, this);
        $[106] = t58;
        $[107] = t60;
        $[108] = t61;
    } else {
        t61 = $[108];
    }
    let t62;
    if ($[109] !== t51 || $[110] !== t56 || $[111] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
            children: [
                t51,
                t56,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 514,
            columnNumber: 11
        }, this);
        $[109] = t51;
        $[110] = t56;
        $[111] = t61;
        $[112] = t62;
    } else {
        t62 = $[112];
    }
    const t63 = isAr ? "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0645\u062A\u0648\u0642\u0639" : "Expected Completion Date";
    let t64;
    if ($[113] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "completion_date",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t63
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[113] = t63;
        $[114] = t64;
    } else {
        t64 = $[114];
    }
    let t65;
    if ($[115] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = ({
            "AddProjectBuildingModal[<Input>.onChange]": (e_4)=>setCompletionDate(e_4.target.value)
        })["AddProjectBuildingModal[<Input>.onChange]"];
        $[115] = t65;
    } else {
        t65 = $[115];
    }
    let t66;
    if ($[116] !== completionDate) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "completion_date",
            type: "date",
            value: completionDate,
            onChange: t65,
            className: "h-8 text-xs mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 542,
            columnNumber: 11
        }, this);
        $[116] = completionDate;
        $[117] = t66;
    } else {
        t66 = $[117];
    }
    let t67;
    if ($[118] !== t64 || $[119] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t64,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 550,
            columnNumber: 11
        }, this);
        $[118] = t64;
        $[119] = t66;
        $[120] = t67;
    } else {
        t67 = $[120];
    }
    const t68 = isAr ? "\u0627\u0644\u0648\u0635\u0641 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)" : "Description (Optional)";
    let t69;
    if ($[121] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "building_desc",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t68
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[121] = t68;
        $[122] = t69;
    } else {
        t69 = $[122];
    }
    let t70;
    if ($[123] === Symbol.for("react.memo_cache_sentinel")) {
        t70 = ({
            "AddProjectBuildingModal[<Textarea>.onChange]": (e_5)=>setDescription(e_5.target.value)
        })["AddProjectBuildingModal[<Textarea>.onChange]"];
        $[123] = t70;
    } else {
        t70 = $[123];
    }
    const t71 = isAr ? "\u062A\u0641\u0627\u0635\u064A\u0644 \u0625\u0636\u0627\u0641\u064A\u0629 \u0639\u0646 \u0627\u0644\u0645\u0628\u0646\u0649 \u0648\u0645\u0631\u0627\u0641\u0642\u0647..." : "Additional details about the building and its amenities...";
    let t72;
    if ($[124] !== description || $[125] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: "building_desc",
            value: description,
            onChange: t70,
            placeholder: t71,
            rows: 2,
            className: "text-xs mt-1 resize-none"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 578,
            columnNumber: 11
        }, this);
        $[124] = description;
        $[125] = t71;
        $[126] = t72;
    } else {
        t72 = $[126];
    }
    let t73;
    if ($[127] !== t69 || $[128] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t69,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 587,
            columnNumber: 11
        }, this);
        $[127] = t69;
        $[128] = t72;
        $[129] = t73;
    } else {
        t73 = $[129];
    }
    const t74 = isAr ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel";
    let t75;
    if ($[130] !== onClose || $[131] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: onClose,
            className: "h-8 text-xs px-3 text-gray-700 dark:text-gray-300",
            children: t74
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 597,
            columnNumber: 11
        }, this);
        $[130] = onClose;
        $[131] = t74;
        $[132] = t75;
    } else {
        t75 = $[132];
    }
    const t76 = initialData ? isAr ? "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A" : "Save Changes" : isAr ? "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0628\u0646\u0649" : "Add Building";
    let t77;
    if ($[133] !== handleSubmit || $[134] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            onClick: handleSubmit,
            className: "h-8 text-xs px-4 bg-[#008081] hover:bg-[#006666] text-white",
            children: t76
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 607,
            columnNumber: 11
        }, this);
        $[133] = handleSubmit;
        $[134] = t76;
        $[135] = t77;
    } else {
        t77 = $[135];
    }
    let t78;
    if ($[136] !== t75 || $[137] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end gap-2 pt-2 border-t border-gray-100 dark:border-neutral-800",
            children: [
                t75,
                t77
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, this);
        $[136] = t75;
        $[137] = t77;
        $[138] = t78;
    } else {
        t78 = $[138];
    }
    let t79;
    if ($[139] !== t31 || $[140] !== t46 || $[141] !== t62 || $[142] !== t67 || $[143] !== t73 || $[144] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-1",
            children: [
                t31,
                t46,
                t62,
                t67,
                t73,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 625,
            columnNumber: 11
        }, this);
        $[139] = t31;
        $[140] = t46;
        $[141] = t62;
        $[142] = t67;
        $[143] = t73;
        $[144] = t78;
        $[145] = t79;
    } else {
        t79 = $[145];
    }
    let t80;
    if ($[146] !== isOpen || $[147] !== onClose || $[148] !== t24 || $[149] !== t25 || $[150] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t24,
            description: t25,
            size: "lg",
            children: t79
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
            lineNumber: 638,
            columnNumber: 11
        }, this);
        $[146] = isOpen;
        $[147] = onClose;
        $[148] = t24;
        $[149] = t25;
        $[150] = t79;
        $[151] = t80;
    } else {
        t80 = $[151];
    }
    return t80;
}
_s(AddProjectBuildingModal, "u68lrA6z7qYwwW6pJ6HRHH1mW5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = AddProjectBuildingModal;
function _AddProjectBuildingModalStatusOptionsMap(opt_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: opt_0.value,
        className: "text-xs",
        children: opt_0.label
    }, opt_0.value, false, {
        fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
        lineNumber: 651,
        columnNumber: 10
    }, this);
}
function _AddProjectBuildingModalBuildingTypeOptionsMap(opt) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: opt.value,
        className: "text-xs",
        children: opt.label
    }, opt.value, false, {
        fileName: "[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx",
        lineNumber: 654,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AddProjectBuildingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulkAddProjectBuildingsModal",
    ()=>BulkAddProjectBuildingsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
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
const PRESET_BUILDING_TEMPLATES = [
    {
        id: "bld_tower_a",
        name: "Tower A (Residential)",
        type: "Residential",
        status: "Under Construction",
        floors: 25,
        units: 150,
        parking: 180,
        description: "Main residential luxury high-rise tower."
    },
    {
        id: "bld_tower_b",
        name: "Tower B (Residential)",
        type: "Residential",
        status: "Under Construction",
        floors: 20,
        units: 120,
        parking: 140,
        description: "Secondary residential tower with panoramic views."
    },
    {
        id: "bld_podium",
        name: "Commercial Podium & Retail",
        type: "Commercial",
        status: "Under Construction",
        floors: 3,
        units: 35,
        parking: 80,
        description: "Retail and commercial outlets at lower levels."
    },
    {
        id: "bld_serviced_apts",
        name: "Hotel & Serviced Apartments",
        type: "Hotel Apartments",
        status: "Off Plan",
        floors: 18,
        units: 90,
        parking: 100,
        description: "Fully furnished serviced apartments with hospitality services."
    }
];
function BulkAddProjectBuildingsModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "f3c29d55fc17d6590911fd1e76dd9885aad513856d1cc4b64c28a543021473ca") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3c29d55fc17d6590911fd1e76dd9885aad513856d1cc4b64c28a543021473ca";
    }
    const { isOpen, onClose, onAddBulk } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "bld_tower_a",
            "bld_tower_b"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "BulkAddProjectBuildingsModal[toggleSelect]": (id)=>{
                setSelectedIds({
                    "BulkAddProjectBuildingsModal[toggleSelect > setSelectedIds()]": (prev)=>prev.includes(id) ? prev.filter({
                            "BulkAddProjectBuildingsModal[toggleSelect > setSelectedIds() > prev.filter()]": (item)=>item !== id
                        }["BulkAddProjectBuildingsModal[toggleSelect > setSelectedIds() > prev.filter()]"]) : [
                            ...prev,
                            id
                        ]
                }["BulkAddProjectBuildingsModal[toggleSelect > setSelectedIds()]"]);
            }
        })["BulkAddProjectBuildingsModal[toggleSelect]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const toggleSelect = t2;
    let t3;
    if ($[3] !== selectedIds.length) {
        t3 = ({
            "BulkAddProjectBuildingsModal[handleSelectAll]": ()=>{
                if (selectedIds.length === PRESET_BUILDING_TEMPLATES.length) {
                    setSelectedIds([]);
                } else {
                    setSelectedIds(PRESET_BUILDING_TEMPLATES.map(_BulkAddProjectBuildingsModalHandleSelectAllPRESET_BUILDING_TEMPLATESMap));
                }
            }
        })["BulkAddProjectBuildingsModal[handleSelectAll]"];
        $[3] = selectedIds.length;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleSelectAll = t3;
    let t4;
    if ($[5] !== isAr || $[6] !== onAddBulk || $[7] !== onClose || $[8] !== selectedIds) {
        t4 = ({
            "BulkAddProjectBuildingsModal[handleConfirm]": ()=>{
                const selectedTemplates = PRESET_BUILDING_TEMPLATES.filter({
                    "BulkAddProjectBuildingsModal[handleConfirm > PRESET_BUILDING_TEMPLATES.filter()]": (b_0)=>selectedIds.includes(b_0.id)
                }["BulkAddProjectBuildingsModal[handleConfirm > PRESET_BUILDING_TEMPLATES.filter()]"]);
                const newBuildings = selectedTemplates.map({
                    "BulkAddProjectBuildingsModal[handleConfirm > selectedTemplates.map()]": (b_1, idx)=>({
                            id: `bulk_bld_${Date.now()}_${idx}`,
                            building_name: isAr ? b_1.name.replace("Tower A", "\u0628\u0631\u062C \u0623").replace("Tower B", "\u0628\u0631\u062C \u0628").replace("Commercial Podium & Retail", "\u0645\u0628\u0646\u0649 \u062A\u062C\u0627\u0631\u064A \u0648\u0628\u0648\u062F\u064A\u0648\u0645").replace("Hotel & Serviced Apartments", "\u0634\u0642\u0642 \u0641\u0646\u062F\u0642\u064A\u0629") : b_1.name,
                            building_type: b_1.type,
                            construction_status: b_1.status,
                            total_floors: b_1.floors,
                            total_units: b_1.units,
                            parking_spaces: b_1.parking,
                            description: b_1.description
                        })
                }["BulkAddProjectBuildingsModal[handleConfirm > selectedTemplates.map()]"]);
                onAddBulk(newBuildings);
                onClose();
            }
        })["BulkAddProjectBuildingsModal[handleConfirm]"];
        $[5] = isAr;
        $[6] = onAddBulk;
        $[7] = onClose;
        $[8] = selectedIds;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleConfirm = t4;
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "h-5 w-5 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = isAr ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u0628\u0627\u0646\u064A \u0645\u062C\u0645\u0639\u0629" : "Bulk Add Project Buildings";
    let t7;
    if ($[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                    lineNumber: 163,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 163,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = isAr ? "\u0627\u062E\u062A\u0631 \u0646\u0645\u0627\u0630\u062C \u0627\u0644\u0623\u0628\u0631\u0627\u062C \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064A \u0627\u0644\u0642\u064A\u0627\u0633\u064A\u0629 \u0644\u0625\u0636\u0627\u0641\u062A\u0647\u0627 \u0625\u0644\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u062F\u0641\u0639\u0629 \u0648\u0627\u062D\u062F\u0629." : "Select predefined building and tower templates to add them in batch.";
    const t9 = isAr ? "\u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0627\u0644\u062C\u0627\u0647\u0632\u0629" : "Available Templates";
    let t10;
    if ($[13] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
            children: [
                t9,
                " (",
                PRESET_BUILDING_TEMPLATES.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const t11 = selectedIds.length === PRESET_BUILDING_TEMPLATES.length ? isAr ? "\u0625\u0644\u063A\u0627\u0621 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644" : "Deselect All" : isAr ? "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644" : "Select All";
    let t12;
    if ($[15] !== handleSelectAll || $[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: handleSelectAll,
            className: "text-xs text-teal-600 hover:text-teal-700 h-6 px-1.5",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[15] = handleSelectAll;
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t10 || $[19] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-1.5 border-b border-gray-100 dark:border-neutral-800",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t12;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== isAr || $[22] !== selectedIds) {
        t14 = PRESET_BUILDING_TEMPLATES.map({
            "BulkAddProjectBuildingsModal[PRESET_BUILDING_TEMPLATES.map()]": (template)=>{
                const isSelected = selectedIds.includes(template.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: {
                        "BulkAddProjectBuildingsModal[PRESET_BUILDING_TEMPLATES.map() > <div>.onClick]": ()=>toggleSelect(template.id)
                    }["BulkAddProjectBuildingsModal[PRESET_BUILDING_TEMPLATES.map() > <div>.onClick]"],
                    className: `flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${isSelected ? "bg-teal-50/70 dark:bg-teal-950/30 border-teal-500 dark:border-teal-500/70 shadow-2xs" : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-0.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                checked: isSelected,
                                onCheckedChange: {
                                    "BulkAddProjectBuildingsModal[PRESET_BUILDING_TEMPLATES.map() > <Checkbox>.onCheckedChange]": ()=>toggleSelect(template.id)
                                }["BulkAddProjectBuildingsModal[PRESET_BUILDING_TEMPLATES.map() > <Checkbox>.onCheckedChange]"]
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                                lineNumber: 205,
                                columnNumber: 438
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                            lineNumber: 205,
                            columnNumber: 414
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate",
                                            children: template.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                                            lineNumber: 207,
                                            columnNumber: 201
                                        }, this),
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                                            lineNumber: 207,
                                            columnNumber: 327
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                                    lineNumber: 207,
                                    columnNumber: 150
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2",
                                    children: template.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                                    lineNumber: 207,
                                    columnNumber: 416
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-1.5 mt-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                            children: [
                                                template.floors,
                                                " ",
                                                isAr ? "\u0637\u0627\u0628\u0642" : "Floors"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                                            lineNumber: 207,
                                            columnNumber: 639
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                            children: [
                                                template.units,
                                                " ",
                                                isAr ? "\u0648\u062D\u062F\u0629" : "Units"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                                            lineNumber: 207,
                                            columnNumber: 782
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                            children: [
                                                template.parking,
                                                " ",
                                                isAr ? "\u0645\u0648\u0642\u0641" : "Parking"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                                            lineNumber: 207,
                                            columnNumber: 923
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                                    lineNumber: 207,
                                    columnNumber: 522
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                            lineNumber: 207,
                            columnNumber: 118
                        }, this)
                    ]
                }, template.id, true, {
                    fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
                    lineNumber: 203,
                    columnNumber: 16
                }, this);
            }
        }["BulkAddProjectBuildingsModal[PRESET_BUILDING_TEMPLATES.map()]"]);
        $[21] = isAr;
        $[22] = selectedIds;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pr-1",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[24] = t14;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    const t16 = isAr ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel";
    let t17;
    if ($[26] !== onClose || $[27] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: onClose,
            className: "text-xs h-8",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[26] = onClose;
        $[27] = t16;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    const t18 = selectedIds.length === 0;
    const t19 = isAr ? `إضافة ${selectedIds.length} مبنى` : `Add ${selectedIds.length} Building(s)`;
    let t20;
    if ($[29] !== handleConfirm || $[30] !== t18 || $[31] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            disabled: t18,
            onClick: handleConfirm,
            className: "bg-[#008081] hover:bg-[#006666] text-white text-xs h-8",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[29] = handleConfirm;
        $[30] = t18;
        $[31] = t19;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== t17 || $[34] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800",
            children: [
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[33] = t17;
        $[34] = t20;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== t13 || $[37] !== t15 || $[38] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-1",
            children: [
                t13,
                t15,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[36] = t13;
        $[37] = t15;
        $[38] = t21;
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] !== isOpen || $[41] !== onClose || $[42] !== t22 || $[43] !== t7 || $[44] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t7,
            description: t8,
            size: "xl",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[40] = isOpen;
        $[41] = onClose;
        $[42] = t22;
        $[43] = t7;
        $[44] = t8;
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    return t23;
}
_s(BulkAddProjectBuildingsModal, "i55ZDfXokE1ZeZGa/vS52tSwdMA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = BulkAddProjectBuildingsModal;
function _BulkAddProjectBuildingsModalHandleSelectAllPRESET_BUILDING_TEMPLATESMap(b) {
    return b.id;
}
var _c;
__turbopack_context__.k.register(_c, "BulkAddProjectBuildingsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectBuildingsForm",
    ()=>ProjectBuildingsForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SeoFieldsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$AddProjectBuildingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/AddProjectBuildingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$BulkAddProjectBuildingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/BulkAddProjectBuildingsModal.tsx [app-client] (ecmascript)");
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
function ProjectBuildingsForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "c9d024644d48267f333aa07787a64a44136c3e8e21d4fe9842741fe40de3d303") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c9d024644d48267f333aa07787a64a44136c3e8e21d4fe9842741fe40de3d303";
    }
    const { form } = t0;
    const { register, watch, setValue } = form;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [buildings, setBuildings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBulkModalOpen, setIsBulkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingBuilding, setEditingBuilding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[2] !== editingBuilding) {
        t2 = ({
            "ProjectBuildingsForm[handleSaveBuilding]": (building)=>{
                if (editingBuilding) {
                    setBuildings({
                        "ProjectBuildingsForm[handleSaveBuilding > setBuildings()]": (prev)=>prev.map({
                                "ProjectBuildingsForm[handleSaveBuilding > setBuildings() > prev.map()]": (b)=>b.id === building.id ? building : b
                            }["ProjectBuildingsForm[handleSaveBuilding > setBuildings() > prev.map()]"])
                    }["ProjectBuildingsForm[handleSaveBuilding > setBuildings()]"]);
                    setEditingBuilding(null);
                } else {
                    setBuildings({
                        "ProjectBuildingsForm[handleSaveBuilding > setBuildings()]": (prev_0)=>[
                                ...prev_0,
                                building
                            ]
                    }["ProjectBuildingsForm[handleSaveBuilding > setBuildings()]"]);
                }
            }
        })["ProjectBuildingsForm[handleSaveBuilding]"];
        $[2] = editingBuilding;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleSaveBuilding = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ProjectBuildingsForm[handleAddBulkBuildings]": (newBuildings)=>{
                setBuildings({
                    "ProjectBuildingsForm[handleAddBulkBuildings > setBuildings()]": (prev_1)=>[
                            ...prev_1,
                            ...newBuildings
                        ]
                }["ProjectBuildingsForm[handleAddBulkBuildings > setBuildings()]"]);
            }
        })["ProjectBuildingsForm[handleAddBulkBuildings]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleAddBulkBuildings = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ProjectBuildingsForm[handleEditBuilding]": (building_0)=>{
                setEditingBuilding(building_0);
                setIsAddModalOpen(true);
            }
        })["ProjectBuildingsForm[handleEditBuilding]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleEditBuilding = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ProjectBuildingsForm[handleDeleteBuilding]": (id)=>{
                setBuildings({
                    "ProjectBuildingsForm[handleDeleteBuilding > setBuildings()]": (prev_2)=>prev_2.filter({
                            "ProjectBuildingsForm[handleDeleteBuilding > setBuildings() > prev_2.filter()]": (b_0)=>b_0.id !== id
                        }["ProjectBuildingsForm[handleDeleteBuilding > setBuildings() > prev_2.filter()]"])
                }["ProjectBuildingsForm[handleDeleteBuilding > setBuildings()]"]);
            }
        })["ProjectBuildingsForm[handleDeleteBuilding]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const handleDeleteBuilding = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "ProjectBuildingsForm[handleOpenAddModal]": ()=>{
                setEditingBuilding(null);
                setIsAddModalOpen(true);
            }
        })["ProjectBuildingsForm[handleOpenAddModal]"];
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const handleOpenAddModal = t6;
    const t7 = isAr ? "\u0645\u0628\u0627\u0646\u064A \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : "Project Buildings";
    let t8;
    if ($[8] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const t9 = isAr ? "\u0645\u0628\u0627\u0646\u064A \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u2014 \u062A\u062D\u062A\u0648\u064A \u0643\u0644 \u0645\u0646\u0647\u0627 \u0639\u0644\u0649 \u0627\u0644\u0623\u062F\u0648\u0627\u0631\u060C \u0648\u0627\u0644\u0648\u062D\u062F\u0627\u062A\u060C \u0648\u0627\u0644\u062D\u0627\u0644\u0629\u060C \u0648\u0627\u0644\u0646\u0648\u0639 \u0648\u0645\u0648\u0627\u0642\u0641 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A." : "The project's buildings \u2014 each with floors, units, status, type and parking.";
    let t10;
    if ($[10] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[10] = t9;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== t10 || $[13] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t8;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== buildings || $[16] !== isAr) {
        t12 = buildings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-dashed border-gray-200 dark:border-neutral-800 py-6 px-4 text-center text-xs text-gray-400 dark:text-gray-500",
            children: isAr ? "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0628\u0627\u0646\u064A \u0628\u0639\u062F." : "No buildings yet."
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 156,
            columnNumber: 36
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: buildings.map({
                "ProjectBuildingsForm[buildings.map()]": (building_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-950/40 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-7 h-7 rounded-md bg-teal-50 dark:bg-teal-950/50 text-[#008081] flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 518
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                lineNumber: 157,
                                                columnNumber: 394
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate",
                                                children: building_1.building_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                lineNumber: 157,
                                                columnNumber: 557
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-[#008081] dark:text-teal-300 font-medium",
                                                children: building_1.building_type
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                lineNumber: 157,
                                                columnNumber: 679
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 font-medium",
                                                children: building_1.construction_status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                lineNumber: 157,
                                                columnNumber: 844
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                        lineNumber: 157,
                                        columnNumber: 343
                                    }, this),
                                    building_1.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-500 dark:text-gray-400 truncate",
                                        children: building_1.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                        lineNumber: 157,
                                        columnNumber: 1048
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3 text-[11px] text-gray-600 dark:text-gray-400 pt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"], {
                                                        className: "h-3 w-3 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 1290
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            building_1.total_floors,
                                                            " ",
                                                            isAr ? "\u0637\u0627\u0628\u0642" : "Floors"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 1335
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                lineNumber: 157,
                                                columnNumber: 1249
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                lineNumber: 157,
                                                columnNumber: 1426
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                        className: "h-3 w-3 text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 1481
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            building_1.total_units,
                                                            " ",
                                                            isAr ? "\u0648\u062D\u062F\u0629" : "Units"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 1523
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                lineNumber: 157,
                                                columnNumber: 1440
                                            }, this),
                                            building_1.parking_spaces !== undefined && building_1.parking_spaces > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 1691
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                                                className: "h-3 w-3 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 1746
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    building_1.parking_spaces,
                                                                    " ",
                                                                    isAr ? "\u0645\u0648\u0642\u0641" : "Parking"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 1787
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 1705
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            building_1.completion_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 1918
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            isAr ? "\u0627\u0644\u062A\u0633\u0644\u064A\u0645: " : "Completion: ",
                                                            building_1.completion_date
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 1932
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                        lineNumber: 157,
                                        columnNumber: 1146
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                lineNumber: 157,
                                columnNumber: 301
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: {
                                            "ProjectBuildingsForm[buildings.map() > <Button>.onClick]": ()=>handleEditBuilding(building_1)
                                        }["ProjectBuildingsForm[buildings.map() > <Button>.onClick]"],
                                        className: "h-7 w-7 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                            lineNumber: 159,
                                            columnNumber: 170
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                        lineNumber: 157,
                                        columnNumber: 2111
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: {
                                            "ProjectBuildingsForm[buildings.map() > <Button>.onClick]": ()=>handleDeleteBuilding(building_1.id)
                                        }["ProjectBuildingsForm[buildings.map() > <Button>.onClick]"],
                                        className: "h-7 w-7 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                            lineNumber: 161,
                                            columnNumber: 185
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                        lineNumber: 159,
                                        columnNumber: 212
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                                lineNumber: 157,
                                columnNumber: 2061
                            }, this)
                        ]
                    }, building_1.id, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
                        lineNumber: 157,
                        columnNumber: 64
                    }, this)
            }["ProjectBuildingsForm[buildings.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 156,
            columnNumber: 318
        }, this);
        $[15] = buildings;
        $[16] = isAr;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const t14 = isAr ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u0628\u0646\u0649" : "Add building";
    let t15;
    if ($[19] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: handleOpenAddModal,
            className: "gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "ProjectBuildingsForm[<Button>.onClick]": ()=>setIsBulkModalOpen(true)
        })["ProjectBuildingsForm[<Button>.onClick]"];
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    const t18 = isAr ? "\u0625\u0636\u0627\u0641\u0629 \u0645\u062C\u0645\u0639\u0629" : "Bulk add";
    let t19;
    if ($[23] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: t16,
            className: "gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium cursor-pointer shadow-2xs",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[23] = t18;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] !== t15 || $[26] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pt-0.5",
            children: [
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[25] = t15;
        $[26] = t19;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] !== t11 || $[29] !== t12 || $[30] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs",
            children: [
                t11,
                t12,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t12;
        $[30] = t20;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== register || $[33] !== setValue || $[34] !== watch) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeoFieldsSection"], {
            register: register,
            setValue: setValue,
            watch: watch,
            nameFieldName: "project_name",
            slugPlaceholder: "my-property",
            compact: true
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[32] = register;
        $[33] = setValue;
        $[34] = watch;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    let t23;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "ProjectBuildingsForm[<AddProjectBuildingModal>.onClose]": ()=>{
                setIsAddModalOpen(false);
                setEditingBuilding(null);
            }
        })["ProjectBuildingsForm[<AddProjectBuildingModal>.onClose]"];
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] !== editingBuilding || $[38] !== handleSaveBuilding || $[39] !== isAddModalOpen) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$AddProjectBuildingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddProjectBuildingModal"], {
            isOpen: isAddModalOpen,
            onClose: t23,
            onSave: handleSaveBuilding,
            initialData: editingBuilding
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[37] = editingBuilding;
        $[38] = handleSaveBuilding;
        $[39] = isAddModalOpen;
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "ProjectBuildingsForm[<BulkAddProjectBuildingsModal>.onClose]": ()=>setIsBulkModalOpen(false)
        })["ProjectBuildingsForm[<BulkAddProjectBuildingsModal>.onClose]"];
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] !== isBulkModalOpen) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$BulkAddProjectBuildingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkAddProjectBuildingsModal"], {
            isOpen: isBulkModalOpen,
            onClose: t25,
            onAddBulk: handleAddBulkBuildings
        }, void 0, false, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[42] = isBulkModalOpen;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] !== t21 || $[45] !== t22 || $[46] !== t24 || $[47] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t21,
                t22,
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[44] = t21;
        $[45] = t22;
        $[46] = t24;
        $[47] = t26;
        $[48] = t27;
    } else {
        t27 = $[48];
    }
    return t27;
}
_s(ProjectBuildingsForm, "Ju9dk7EOSEF51G5dpbMwUH4EaYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ProjectBuildingsForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectBuildingsForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectMediaForm",
    ()=>ProjectMediaForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SeoFieldsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProjectMediaForm({ form, mediaItems, setMediaItems }) {
    _s();
    const { register, watch, setValue } = form;
    const { language, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [watermarkImage, setWatermarkImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [watermarkLoaded, setWatermarkLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [config] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        enabled: true,
        imageSize: {
            width: 1200,
            height: 800
        },
        maxSizeMB: 1,
        quality: 85,
        watermarkEnabled: false,
        watermarkOpacity: 90,
        watermarkPosition: "bottom-right",
        maintainAspectRatio: true,
        watermarkSize: 25
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectMediaForm.useEffect": ()=>{
            if (!config.watermarkEnabled) return;
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = ({
                "ProjectMediaForm.useEffect": ()=>{
                    setWatermarkImage(img);
                    setWatermarkLoaded(true);
                }
            })["ProjectMediaForm.useEffect"];
            img.onerror = ({
                "ProjectMediaForm.useEffect": ()=>{
                    setWatermarkLoaded(false);
                }
            })["ProjectMediaForm.useEffect"];
            img.src = "/images/logo_media.png";
        }
    }["ProjectMediaForm.useEffect"], [
        config.watermarkEnabled
    ]);
    const processImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectMediaForm.useCallback[processImage]": async (file)=>{
            try {
                const originalImage = await new Promise({
                    "ProjectMediaForm.useCallback[processImage]": (resolve, reject)=>{
                        const img_0 = new Image();
                        img_0.onload = ({
                            "ProjectMediaForm.useCallback[processImage]": ()=>resolve(img_0)
                        })["ProjectMediaForm.useCallback[processImage]"];
                        img_0.onerror = reject;
                        img_0.src = URL.createObjectURL(file);
                    }
                }["ProjectMediaForm.useCallback[processImage]"]);
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (!ctx) return file;
                let width = originalImage.width;
                let height = originalImage.height;
                const maxDim = 1600;
                if (width > maxDim || height > maxDim) {
                    if (width > height) {
                        height = Math.round(height * maxDim / width);
                        width = maxDim;
                    } else {
                        width = Math.round(width * maxDim / height);
                        height = maxDim;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(originalImage, 0, 0, width, height);
                if (config.watermarkEnabled && watermarkImage && watermarkLoaded) {
                    ctx.globalAlpha = config.watermarkOpacity / 100;
                    const wmWidth = Math.round(width * 0.2);
                    const wmHeight = Math.round(wmWidth * watermarkImage.height / watermarkImage.width);
                    ctx.drawImage(watermarkImage, width - wmWidth - 15, height - wmHeight - 15, wmWidth, wmHeight);
                    ctx.globalAlpha = 1.0;
                }
                const blob = await new Promise({
                    "ProjectMediaForm.useCallback[processImage]": (resolve_0)=>canvas.toBlob(resolve_0, file.type.includes("png") ? "image/png" : "image/jpeg", 0.85)
                }["ProjectMediaForm.useCallback[processImage]"]);
                URL.revokeObjectURL(originalImage.src);
                if (blob) {
                    return new File([
                        blob
                    ], file.name, {
                        type: blob.type,
                        lastModified: Date.now()
                    });
                }
                return file;
            } catch  {
                return file;
            }
        }
    }["ProjectMediaForm.useCallback[processImage]"], [
        config,
        watermarkImage,
        watermarkLoaded
    ]);
    const handleFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectMediaForm.useCallback[handleFiles]": async (files)=>{
            const fileArray = Array.from(files).filter({
                "ProjectMediaForm.useCallback[handleFiles].fileArray": (file_0)=>file_0.type.startsWith("image/")
            }["ProjectMediaForm.useCallback[handleFiles].fileArray"]);
            if (fileArray.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.form.media.onlyImagesAllowed") || (isAr ? "يرجى اختيار صور فقط" : "Please select image files only"));
                return;
            }
            if (mediaItems.length + fileArray.length > 8) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning(t("projects.form.media.maxImagesWarning") || (isAr ? "الحد الأقصى للصور هو 8 صور" : "Maximum 8 images allowed. Only the first available will be added."));
            }
            const availableSlots = Math.max(0, 8 - mediaItems.length);
            const filesToProcess = fileArray.slice(0, availableSlots);
            if (filesToProcess.length === 0) return;
            setIsProcessing(true);
            try {
                const newItems = [];
                for (const file_1 of filesToProcess){
                    const processedFile = config.enabled ? await processImage(file_1) : file_1;
                    const preview = await new Promise({
                        "ProjectMediaForm.useCallback[handleFiles]": (resolve_1)=>{
                            const reader = new FileReader();
                            reader.onload = ({
                                "ProjectMediaForm.useCallback[handleFiles]": (e)=>resolve_1(e.target?.result)
                            })["ProjectMediaForm.useCallback[handleFiles]"];
                            reader.readAsDataURL(processedFile);
                        }
                    }["ProjectMediaForm.useCallback[handleFiles]"]);
                    newItems.push({
                        file: processedFile,
                        originalFile: file_1,
                        description: "",
                        is_primary: mediaItems.length === 0 && newItems.length === 0,
                        my_order: false,
                        preview,
                        isProcessed: config.enabled,
                        media_type: "image",
                        originalSize: file_1.size,
                        compressedSize: processedFile.size
                    });
                }
                setMediaItems({
                    "ProjectMediaForm.useCallback[handleFiles]": (prev)=>[
                            ...prev,
                            ...newItems
                        ]
                }["ProjectMediaForm.useCallback[handleFiles]"]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("projects.form.media.imagesUploadedSuccess", {
                    count: newItems.length
                }) || (isAr ? `تم إضافة ${newItems.length} صورة بنجاح` : `${newItems.length} image(s) uploaded successfully`));
            } catch (error) {
                console.error("Error processing images:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.form.media.messages.failedProcessAll") || (isAr ? "حدث خطأ أثناء معالجة الصور" : "Failed to process images"));
            } finally{
                setIsProcessing(false);
            }
        }
    }["ProjectMediaForm.useCallback[handleFiles]"], [
        config.enabled,
        isAr,
        mediaItems.length,
        processImage,
        setMediaItems,
        t
    ]);
    const handleDragOver = (e_0)=>{
        e_0.preventDefault();
        e_0.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (e_1)=>{
        e_1.preventDefault();
        e_1.stopPropagation();
        setIsDragging(false);
    };
    const handleDrop = (e_2)=>{
        e_2.preventDefault();
        e_2.stopPropagation();
        setIsDragging(false);
        if (e_2.dataTransfer.files && e_2.dataTransfer.files.length > 0) {
            handleFiles(e_2.dataTransfer.files);
        }
    };
    const removeMediaItem = (index)=>{
        setMediaItems((prev_0)=>{
            const updated = prev_0.filter((_, i)=>i !== index);
            // If primary was removed, assign first remaining item as primary
            if (prev_0[index]?.is_primary && updated.length > 0) {
                updated[0].is_primary = true;
            }
            return updated;
        });
    };
    const setPrimaryItem = (index_0)=>{
        setMediaItems((prev_1)=>prev_1.map((item, i_0)=>({
                    ...item,
                    is_primary: i_0 === index_0
                })));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                            children: isAr ? "صور المشروع" : "Project Images"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>fileInputRef.current?.click(),
                        onDragOver: handleDragOver,
                        onDragLeave: handleDragLeave,
                        onDrop: handleDrop,
                        className: `relative border border-dashed rounded-xl py-12 px-6 text-center cursor-pointer select-none transition-colors flex flex-col items-center justify-center ${isDragging ? "border-[#008081] bg-teal-50/50 dark:bg-teal-950/20" : "border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-gray-400 dark:hover:border-neutral-600"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                type: "file",
                                accept: "image/png,image/jpeg,image/jpg,image/gif,image/webp",
                                multiple: true,
                                disabled: isProcessing || mediaItems.length >= 8,
                                onChange: (e_3)=>{
                                    if (e_3.target.files) handleFiles(e_3.target.files);
                                    e_3.target.value = "";
                                },
                                className: "sr-only"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none",
                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-7 w-7 animate-spin text-[#008081]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                    lineNumber: 207,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "h-7 w-7 stroke-[1.5]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                    lineNumber: 207,
                                    columnNumber: 91
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100",
                                children: isAr ? "اضغط للرفع أو اسحب الملفات وأفلتها هنا" : "Click to upload or drag & drop"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 dark:text-gray-500 mt-1",
                                children: isAr ? "JPG, PNG, GIF — حتى 8 صور" : "JPG, PNG, GIF — up to 8 images"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    mediaItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isAr ? `الصور المرفوعة (${mediaItems.length}/8)` : `Uploaded Images (${mediaItems.length}/8)`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-teal-600 dark:text-teal-400 text-[11px]",
                                        children: isAr ? "الصورة المميزة ستكون الغلاف الأساسي للمشروع" : "Primary image will be used as project cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3",
                                children: mediaItems.map((item_0, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-950 aspect-video shadow-2xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item_0.preview,
                                                alt: `Media ${index_1 + 1}`,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this),
                                            item_0.is_primary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-1.5 left-1.5 bg-[#008081] text-white text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "h-3 w-3 fill-current"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this),
                                                    isAr ? "الرئيسية" : "Primary"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                                lineNumber: 235,
                                                columnNumber: 40
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPrimaryItem(index_1),
                                                className: "absolute bottom-1.5 left-1.5 bg-black/60 hover:bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity",
                                                children: isAr ? "تعيين كرئيسية" : "Set Primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                                lineNumber: 238,
                                                columnNumber: 31
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: (e_4)=>{
                                                    e_4.stopPropagation();
                                                    removeMediaItem(index_1);
                                                },
                                                className: "absolute top-1.5 right-1.5 bg-red-600/90 hover:bg-red-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm",
                                                title: isAr ? "حذف الصورة" : "Remove Image",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index_1, true, {
                                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                        lineNumber: 231,
                                        columnNumber: 52
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                        lineNumber: 220,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SeoFieldsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeoFieldsSection"], {
                register: register,
                setValue: setValue,
                watch: watch,
                nameFieldName: "project_name",
                slugPlaceholder: "my-property",
                compact: true
            }, void 0, false, {
                fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx",
        lineNumber: 189,
        columnNumber: 10
    }, this);
}
_s(ProjectMediaForm, "ZxPwODanJG981RiSU1njllh4jt0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ProjectMediaForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectMediaForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/projects/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$validators$2f$create$2d$project$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/validators/create-project.schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminProjectsCreateData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-dashboardAdminProjectsCreateData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-create-project.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectLocationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/ProjectLocationForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectBasicInfoForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/ProjectBasicInfoForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectUnitsPricingForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/ProjectUnitsPricingForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectAmenitiesForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/ProjectAmenitiesForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectPaymentPlansForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/ProjectPaymentPlansForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectMilestonesForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/ProjectMilestonesForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectBuildingsForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/ProjectBuildingsForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectMediaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/projects/create/components/ProjectMediaForm.tsx [app-client] (ecmascript)");
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
const PROJECT_TABS = [
    {
        id: "basic_info",
        labelAr: "المعلومات الأساسية",
        labelEn: "Basic Info"
    },
    {
        id: "location",
        labelAr: "الموقع",
        labelEn: "Location"
    },
    {
        id: "units_pricing",
        labelAr: "الوحدات والأسعار",
        labelEn: "Units & Pricing"
    },
    {
        id: "amenities",
        labelAr: "المرافق",
        labelEn: "Amenities"
    },
    {
        id: "payment_plans",
        labelAr: "خطط السداد",
        labelEn: "Payment Plans"
    },
    {
        id: "milestones",
        labelAr: "خطوات المشروع",
        labelEn: "Milestones"
    },
    {
        id: "buildings",
        labelAr: "المباني",
        labelEn: "Buildings"
    },
    {
        id: "media",
        labelAr: "الوسائط",
        labelEn: "Media"
    }
];
function CreateProjectPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const userType = (session?.user?.user_type || session?.user?.role_name)?.toLowerCase();
    const roleId = session?.user?.role_id;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("basic_info");
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("UAE");
    const [countryId, setCountryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [dateValidationError, setDateValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locationData, setLocationData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        latitude: 0,
        longitude: 0,
        landmark: "",
        city_id: "",
        north_side: "",
        south_side: "",
        east_side: "",
        west_side: "",
        google_map_link: "",
        area_id: ""
    });
    const [mediaItems, setMediaItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$validators$2f$create$2d$project$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjectSchema"]),
        defaultValues: {
            project_name: "",
            project_name_en: "",
            status: "ongoing",
            total_units: "",
            available_units: "",
            launch_date: "",
            completion_date: "",
            project_size: "",
            description: "",
            currency: "AED",
            min_price: "",
            max_price: "",
            price_sq_min: "",
            price_sq_max: "",
            price_range: "",
            price_range_SQ: "",
            project_type: "residential",
            developer_id: "",
            latitude: 0,
            longitude: 0,
            landmark: "",
            city_id: "",
            area_id: "",
            north_side: "",
            south_side: "",
            east_side: "",
            west_side: "",
            google_map_link: "",
            location_description: "",
            slug: "",
            meta_title: "",
            meta_description: ""
        }
    });
    const { watch, setValue } = form;
    const { developersData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminProjectsCreateData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(countryId);
    const developersList = Array.isArray(developersData.data) ? developersData.data : Array.isArray(developersData.data?.data) ? developersData.data.data : Array.isArray(developersData.data?.developers) ? developersData.data.developers : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateProjectPage.useEffect": ()=>{
            if ((userType === "developer" || roleId === 3) && developersList?.[0]?.developer_id) {
                setValue("developer_id", String(developersList[0].developer_id), {
                    shouldValidate: true
                });
            }
        }
    }["CreateProjectPage.useEffect"], [
        userType,
        roleId,
        developersList,
        setValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateProjectPage.useEffect": ()=>{
            setValue("latitude", locationData.latitude);
            setValue("longitude", locationData.longitude);
            setValue("city_id", locationData.city_id);
            setValue("area_id", locationData.area_id || "");
            setValue("landmark", locationData.landmark);
            setValue("north_side", locationData.north_side);
            setValue("south_side", locationData.south_side);
            setValue("east_side", locationData.east_side);
            setValue("west_side", locationData.west_side);
            setValue("google_map_link", locationData.google_map_link);
        }
    }["CreateProjectPage.useEffect"], [
        locationData,
        setValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateProjectPage.useEffect": ()=>{
            const launchDate = watch("launch_date");
            const completionDate = watch("completion_date");
            if (launchDate && completionDate) {
                if (new Date(completionDate) < new Date(launchDate)) {
                    setDateValidationError(t("projects.create.errors.dateValidation"));
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.create.errors.dateValidation"));
                } else {
                    setDateValidationError(null);
                }
            } else {
                setDateValidationError(null);
            }
        }
    }["CreateProjectPage.useEffect"], [
        watch,
        t
    ]);
    const { createProject, isCreating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const handleSubmitForm = async ()=>{
        const formValues = form.getValues();
        if (!formValues.project_name?.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.create.errors.projectNameRequired") || (isAr ? "يرجى كتابة اسم المشروع" : "Project name is required"));
            setActiveTab("basic_info");
            return;
        }
        if (!formValues.developer_id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.create.errors.developerRequired") || (isAr ? "يرجى اختيار المطور" : "Developer is required"));
            setActiveTab("basic_info");
            return;
        }
        if (!locationData.city_id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.create.errors.cityRequired"));
            setActiveTab("location");
            return;
        }
        if (!locationData.google_map_link) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.create.errors.mapLinkRequired"));
            setActiveTab("location");
            return;
        }
        const price_range = `${formValues.min_price}-${formValues.max_price}`;
        const price_range_SQ = `${formValues.price_sq_min}-${formValues.price_sq_max}`;
        const formData = {
            ...formValues,
            price_range,
            price_range_SQ,
            location: locationData,
            mediaItems: mediaItems.map((item)=>({
                    file: item.file,
                    description: item.description,
                    is_primary: item.is_primary,
                    my_order: item.my_order,
                    media_type: item.media_type,
                    media_url: item.media_url
                }))
        };
        try {
            await createProject(formData);
            router.push(`${routePrefix}/projects`);
        } catch (error) {
            console.error("Failed to create project:", error);
        }
    };
    const handleInvalid = (errors)=>{
        const firstErrorKey = Object.keys(errors)[0];
        if (firstErrorKey) {
            const errorObj = errors[firstErrorKey];
            if (errorObj?.message) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t(errorObj.message));
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("projects.create.errors.fillRequired"));
            }
            if ([
                "project_name",
                "developer_id",
                "status",
                "description"
            ].includes(firstErrorKey)) {
                setActiveTab("basic_info");
            } else if ([
                "city_id",
                "area_id",
                "landmark",
                "google_map_link",
                "latitude",
                "longitude"
            ].includes(firstErrorKey)) {
                setActiveTab("location");
            } else if ([
                "total_units",
                "available_units",
                "launch_date",
                "completion_date",
                "min_price",
                "max_price",
                "price_sq_min",
                "price_sq_max"
            ].includes(firstErrorKey)) {
                setActiveTab("units_pricing");
            }
            setTimeout(()=>{
                const errorElement = document.getElementById(`error-${firstErrorKey}`) || document.getElementById(firstErrorKey) || document.getElementsByName(firstErrorKey)[0];
                if (errorElement) {
                    if (errorElement instanceof HTMLInputElement || errorElement instanceof HTMLButtonElement) {
                        errorElement.focus();
                    }
                    errorElement.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            }, 100);
        }
    };
    const currentTabIndex = PROJECT_TABS.findIndex((tab)=>tab.id === activeTab);
    const handleNextTab = ()=>{
        if (currentTabIndex < PROJECT_TABS.length - 1) {
            setActiveTab(PROJECT_TABS[currentTabIndex + 1].id);
        }
    };
    const handlePrevTab = ()=>{
        if (currentTabIndex > 0) {
            setActiveTab(PROJECT_TABS[currentTabIndex - 1].id);
        }
    };
    const handleFormKeyDown = (e)=>{
        if (e.key === "Enter" && e.target?.tagName !== "TEXTAREA") {
            if (currentTabIndex < PROJECT_TABS.length - 1) {
                e.preventDefault();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-3 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pb-2 pt-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100",
                        children: isAr ? "إضافة مشروع جديد" : t("projects.create.title") || "Add New Project"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>router.push(`${routePrefix}/projects`),
                        className: "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-2xs hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer",
                        children: [
                            isAr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-3.5 w-3.5 text-gray-500 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 275,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-3.5 w-3.5 text-gray-500 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 275,
                                columnNumber: 85
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isAr ? "رجوع إلى المشاريع" : "Back to Projects"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: form.handleSubmit(handleSubmitForm, handleInvalid),
                onKeyDown: handleFormKeyDown,
                className: "space-y-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gray-200 dark:border-neutral-800 mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 sm:gap-5 lg:gap-7 no-scrollbar overflow-x-hidden md:overflow-x-visible",
                            children: PROJECT_TABS.map((tab_0)=>{
                                const isActive = activeTab === tab_0.id;
                                const label = isAr ? tab_0.labelAr : tab_0.labelEn;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveTab(tab_0.id),
                                    className: `pb-1.5 text-xs font-medium whitespace-nowrap transition-colors border-b-2 select-none shrink-0 ${isActive ? "border-[#008081] text-[#008081] dark:border-teal-400 dark:text-teal-400 font-bold -mb-px" : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium -mb-px"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 19
                                    }, this)
                                }, tab_0.id, false, {
                                    fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/create/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transition-all duration-200",
                        children: [
                            activeTab === "basic_info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectBasicInfoForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectBasicInfoForm"], {
                                form: form,
                                developersData: developersList,
                                isLoadingDevelopers: developersData.isLoading,
                                country: country,
                                setCountry: setCountry
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 294,
                                columnNumber: 42
                            }, this),
                            activeTab === "location" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectLocationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectLocationForm"], {
                                form: form,
                                locationData: locationData,
                                setLocationData: setLocationData,
                                country: country,
                                setCountry: setCountry,
                                setCountryId: setCountryId
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 296,
                                columnNumber: 40
                            }, this),
                            activeTab === "units_pricing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectUnitsPricingForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectUnitsPricingForm"], {
                                form: form
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 298,
                                columnNumber: 45
                            }, this),
                            activeTab === "amenities" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectAmenitiesForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectAmenitiesForm"], {
                                form: form
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 300,
                                columnNumber: 41
                            }, this),
                            activeTab === "payment_plans" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectPaymentPlansForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectPaymentPlansForm"], {
                                form: form
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 302,
                                columnNumber: 45
                            }, this),
                            activeTab === "milestones" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectMilestonesForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectMilestonesForm"], {
                                form: form
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 304,
                                columnNumber: 42
                            }, this),
                            activeTab === "buildings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectBuildingsForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectBuildingsForm"], {
                                form: form
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 306,
                                columnNumber: 41
                            }, this),
                            activeTab === "media" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$projects$2f$create$2f$components$2f$ProjectMediaForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectMediaForm"], {
                                form: form,
                                mediaItems: mediaItems,
                                setMediaItems: setMediaItems
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 308,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    form.formState.errors.root && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border border-red-200 rounded-md p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-red-600",
                            children: form.formState.errors.root.message
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/projects/create/page.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                        lineNumber: 311,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pt-2 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    currentTabIndex === PROJECT_TABS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        onClick: form.handleSubmit(handleSubmitForm, handleInvalid),
                                        disabled: isCreating || !!dateValidationError,
                                        className: "bg-[#008081] hover:bg-[#006666] text-white text-xs font-semibold px-5 h-9 rounded-md gap-1.5 shadow-2xs cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isCreating ? t("projects.create.creating") || (isAr ? "جاري الإنشاء..." : "Creating...") : t("projects.create.createProject") || (isAr ? "إنشاء المشروع" : "Create Project")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 61
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>router.push(`${routePrefix}/projects`),
                                        className: "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 text-xs font-medium px-4 h-9 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800 shadow-2xs cursor-pointer",
                                        children: isAr ? "إلغاء" : "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    currentTabIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: handlePrevTab,
                                        className: "h-8 text-xs px-3 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1 shadow-2xs cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "h-3.5 w-3.5 rtl:rotate-180"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isAr ? "السابق" : "Previous"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 37
                                    }, this),
                                    currentTabIndex < PROJECT_TABS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: handleNextTab,
                                        className: "h-8 text-xs px-3 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1 shadow-2xs cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isAr ? "التالي" : "Next"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-3.5 w-3.5 rtl:rotate-180"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 59
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/projects/create/page.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/projects/create/page.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/projects/create/page.tsx",
        lineNumber: 268,
        columnNumber: 10
    }, this);
}
_s(CreateProjectPage, "vB64i5PUgkIE9BJ4hrVMDzh/3sA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$dashboardAdminProjectsCreateData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = CreateProjectPage;
var _c;
__turbopack_context__.k.register(_c, "CreateProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_978a63f7._.js.map