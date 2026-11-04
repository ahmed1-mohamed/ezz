(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/validators/propertiesSchema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "propertiesSchema",
    ()=>propertiesSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const isHttpUrl = (value)=>{
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch  {
        return false;
    }
};
const propertiesSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    property_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    property_name_en: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    property_type_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    property_subtype_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    project_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        message: "validation.required"
    }).refine((val)=>!isNaN(val), {
        message: "validation.required"
    }).refine((val)=>val > 0, {
        message: "validation.greater_than_zero"
    }),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        message: "validation.required"
    }).refine((val)=>!isNaN(val), {
        message: "validation.required"
    }).refine((val)=>val >= 0, {
        message: "validation.positive_number"
    }),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    availability_status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    construction_status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    finishing_status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "validation.required"),
    property_no: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    building_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    plot_size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().refine((val)=>isNaN(val) || val >= 0, {
        message: "validation.positive_number"
    }).optional(),
    bua_size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().refine((val)=>isNaN(val) || val >= 0, {
        message: "validation.positive_number"
    }).optional(),
    bedrooms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().refine((val)=>isNaN(val) || Number.isInteger(val) && val >= 0, {
        message: "validation.positive_integer"
    }).optional(),
    bathrooms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().refine((val)=>isNaN(val) || Number.isInteger(val) && val >= 0, {
        message: "validation.positive_integer"
    }).optional(),
    parking_spaces: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().refine((val)=>isNaN(val) || Number.isInteger(val) && val >= 0, {
        message: "validation.positive_integer"
    }).optional(),
    ownership_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    maid_room: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    furnish_status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    reference_listed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    broker_license: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    agent_license: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    zone_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    city_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    area_name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    landmark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    maps_url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((val)=>!val.trim() || isHttpUrl(val.trim()), {
        message: "validation.url_invalid"
    }).optional(),
    latitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().refine((val)=>isNaN(val) || val >= -90 && val <= 90, {
        message: "validation.latitude_range"
    }).optional(),
    longitude: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().refine((val)=>isNaN(val) || val >= -180 && val <= 180, {
        message: "validation.longitude_range"
    }).optional(),
    dld_permit_number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    dld_barcode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    price_per_m2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().refine((val)=>isNaN(val) || val >= 0, {
        message: "validation.positive_number"
    }).optional(),
    price_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    floor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    view: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((val)=>!val || SLUG_PATTERN.test(val), {
        message: "validation.slug_invalid"
    }).optional(),
    meta_title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    meta_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    payment_plans: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional()
});
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
"[project]/src/hooks/use-create-property.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyServerFieldErrors",
    ()=>applyServerFieldErrors,
    "default",
    ()=>useCreateProperty,
    "getServerFieldErrors",
    ()=>getServerFieldErrors,
    "isServerInternalMessage",
    ()=>isServerInternalMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/services/AdminPropertiesService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$validators$2f$propertiesSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/validators/propertiesSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const INTERNAL_ERROR_PATTERN = /Target class \[|SQLSTATE|Call to |Undefined |Stack trace|\.php\b/i;
function isServerInternalMessage(message) {
    return typeof message === "string" && INTERNAL_ERROR_PATTERN.test(message);
}
function firstString(value) {
    if (typeof value === "string") return value;
    if (Array.isArray(value)) {
        for (const item of value){
            const found = firstString(item);
            if (found) return found;
        }
    }
    return undefined;
}
function collectStrings(value) {
    if (typeof value === "string") return [
        value
    ];
    if (Array.isArray(value)) return value.flatMap(collectStrings);
    if (value && typeof value === "object") return Object.values(value).flatMap(collectStrings);
    return [];
}
function getServerFieldErrors(error) {
    const response = error?.response;
    if (response?.status !== 422) return null;
    const raw = response.data?.errors;
    if (!raw || typeof raw !== "object") return null;
    const entries = Array.isArray(raw) ? raw.flatMap((item)=>item && typeof item === "object" ? Object.entries(item) : []) : Object.entries(raw);
    const result = {};
    for (const [field, value] of entries){
        const message = firstString(value);
        if (message && !(field in result)) result[field] = message;
    }
    return Object.keys(result).length > 0 ? result : null;
}
function applyServerFieldErrors(error, { tabs, setError, onShowTab, getTabLabel, t }) {
    const fieldErrors = getServerFieldErrors(error);
    if (!fieldErrors) return false;
    const formFields = Object.entries(fieldErrors).filter(([field])=>field in __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$validators$2f$propertiesSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertiesSchema"].shape);
    if (formFields.length === 0) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(Object.values(fieldErrors).join(", "));
        return true;
    }
    formFields.forEach(([field, message])=>setError(field, {
            type: "server",
            message
        }));
    const [firstField] = formFields[0];
    const targetTab = tabs.find((tab)=>tab.fields.includes(firstField));
    if (targetTab) {
        onShowTab(targetTab);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("properties.create.fillRequiredInTab", {
            tab: getTabLabel(targetTab)
        }));
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(formFields.map(([, message])=>message).join(", "));
    }
    setTimeout(()=>{
        const element = document.getElementById(firstField) || document.getElementsByName(firstField)[0];
        if (element) {
            element.focus();
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }, 100);
    return true;
}
function useCreateProperty() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "b0890ca1f909c442b1c132d40cb7a41f73d4b02c9d7cb45fb8f5f6fa495c66e9") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b0890ca1f909c442b1c132d40cb7a41f73d4b02c9d7cb45fb8f5f6fa495c66e9";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== queryClient || $[2] !== t) {
        t0 = async ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("properties.messages.createSuccess"));
            await queryClient.invalidateQueries({
                queryKey: [
                    "properties"
                ]
            });
            queryClient.removeQueries({
                queryKey: [
                    "properties"
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
            if (getServerFieldErrors(error)) {
                throw error;
            }
            const status = error?.response?.status;
            const flatMessages = collectStrings(error?.response?.data?.errors).join(", ");
            const serverMessage = flatMessages || error?.response?.data?.message || "";
            if (!error?.response || status !== undefined && status >= 500 || !serverMessage || isServerInternalMessage(serverMessage)) {
                console.error("Failed to create property:", serverMessage || error?.message, error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("properties.messages.createFailed"));
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(serverMessage);
            }
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
            createProperty: mutation.mutateAsync,
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
_s(useCreateProperty, "zz/3z8g9foaK3q/fZxHejQ7MM+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function _temp(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].createProperty(data);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/create/PropertyPageHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PropertyPageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PropertyPageHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "47c8d3f24464eee56f4aa3c5d2486200209bce02bf6fe02ce967ac88e5ef7002") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "47c8d3f24464eee56f4aa3c5d2486200209bce02bf6fe02ce967ac88e5ef7002";
    }
    const { onCancel } = t0;
    const { language, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] !== t) {
        t1 = t("properties.create.header.title");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/PropertyPageHeader.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== isAr) {
        t3 = isAr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "h-3.5 w-3.5 text-gray-500 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/PropertyPageHeader.tsx",
            lineNumber: 43,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "h-3.5 w-3.5 text-gray-500 shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/PropertyPageHeader.tsx",
            lineNumber: 43,
            columnNumber: 83
        }, this);
        $[5] = isAr;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t) {
        t4 = t("properties.create.header.backToProperties");
        $[7] = t;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/PropertyPageHeader.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== onCancel || $[12] !== t3 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onCancel,
            className: "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-2xs hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/PropertyPageHeader.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[11] = onCancel;
        $[12] = t3;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t2 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 pt-0",
            children: [
                t2,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/PropertyPageHeader.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[15] = t2;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
}
_s(PropertyPageHeader, "Z4Utim6Wy5mlsoMH25mgYpXckhI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PropertyPageHeader;
var _c;
__turbopack_context__.k.register(_c, "PropertyPageHeader");
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
"[project]/src/features/properties/components/create/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "availabilityStatusOptions",
    ()=>availabilityStatusOptions,
    "constructionStatusOptions",
    ()=>constructionStatusOptions,
    "currencyOptions",
    ()=>currencyOptions,
    "finishingStatusOptions",
    ()=>finishingStatusOptions,
    "furnishStatusOptions",
    ()=>furnishStatusOptions,
    "ownershipTypeOptions",
    ()=>ownershipTypeOptions,
    "statusOptions",
    ()=>statusOptions,
    "viewOptions",
    ()=>viewOptions
]);
const constructionStatusOptions = [
    {
        label: "Ready",
        value: "ready"
    },
    {
        label: "Under Construction",
        value: "under-construction"
    },
    {
        label: "Off Plan",
        value: "off-plan"
    }
];
const availabilityStatusOptions = [
    {
        label: "Available",
        value: "available"
    },
    {
        label: "Reserved",
        value: "reserved"
    },
    {
        label: "Sold",
        value: "sold"
    }
];
const statusOptions = [
    {
        label: "Active",
        value: "active"
    },
    {
        label: "Inactive",
        value: "inactive"
    }
];
const furnishStatusOptions = [
    {
        label: "Furnished",
        value: "furnished"
    },
    {
        label: "Semi-Furnished",
        value: "semi-furnished"
    },
    {
        label: "Unfurnished",
        value: "unfurnished"
    }
];
const finishingStatusOptions = [
    {
        label: "Finished",
        value: "finished"
    },
    {
        label: "Semi-Finished",
        value: "semi-finished"
    },
    {
        label: "Unfinished",
        value: "unfinished"
    }
];
const ownershipTypeOptions = [
    {
        label: "Freehold",
        value: "freehold"
    },
    {
        label: "Leasehold",
        value: "leasehold"
    }
];
const viewOptions = [
    {
        label: "Sea View",
        value: "sea"
    },
    {
        label: "City View",
        value: "city"
    },
    {
        label: "Garden View",
        value: "garden"
    }
];
const currencyOptions = [
    {
        label: "AED",
        value: "aed"
    },
    {
        label: "USD",
        value: "usd"
    },
    {
        label: "EGP",
        value: "egp"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/create/SeoSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeoSection
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
function SeoSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(94);
    if ($[0] !== "409eb3dff20033c4273da8bd77f56de5df54e9955a8d28f785ee8a9f52cdd97b") {
        for(let $i = 0; $i < 94; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "409eb3dff20033c4273da8bd77f56de5df54e9955a8d28f785ee8a9f52cdd97b";
    }
    const { register, setValue, watch, errors } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] !== setValue || $[2] !== watch) {
        t1 = ({
            "SeoSection[handleGenerateSlug]": ()=>{
                if (!setValue || !watch) {
                    return;
                }
                const propertyName = watch("property_name") || "";
                if (!propertyName) {
                    return;
                }
                const generatedSlug = propertyName.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
                setValue("slug", generatedSlug, {
                    shouldValidate: true
                });
            }
        })["SeoSection[handleGenerateSlug]"];
        $[1] = setValue;
        $[2] = watch;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleGenerateSlug = t1;
    let t2;
    if ($[4] !== t) {
        t2 = t("properties.create.seo.title");
        $[4] = t;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t2
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
                lineNumber: 70,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== isAr || $[9] !== t) {
        t4 = isAr ? "\u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u062E\u0635\u0635 (Slug)" : t("properties.create.seo.slug");
        $[8] = isAr;
        $[9] = t;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "slug",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ps-3 pe-2 text-xs text-gray-400 dark:text-gray-500 font-mono select-none",
            children: "/"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== register) {
        t7 = register("slug");
        $[14] = register;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t) {
        t8 = t("properties.create.seo.slugPlaceholder");
        $[16] = t;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t7 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-1 flex items-center rounded-md border border-input dark:border-neutral-700 bg-white dark:bg-neutral-950 h-9 shadow-2xs focus-within:ring-1 focus-within:ring-ring",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "slug",
                    ...t7,
                    placeholder: t8,
                    className: "w-full bg-transparent py-1.5 pe-3 text-xs outline-none placeholder:text-muted-foreground dark:text-gray-100"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
                    lineNumber: 118,
                    columnNumber: 207
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== isAr || $[22] !== t) {
        t10 = isAr ? "\u062A\u0648\u0644\u064A\u062F" : t("properties.create.seo.generate");
        $[21] = isAr;
        $[22] = t;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== handleGenerateSlug || $[25] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: handleGenerateSlug,
            className: "border-[#008081] dark:border-teal-500 text-[#008081] dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-xs px-3.5 h-9 shadow-2xs shrink-0 font-medium",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[24] = handleGenerateSlug;
        $[25] = t10;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== t11 || $[28] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mt-1",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t9;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== errors || $[31] !== t) {
        t13 = errors?.slug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.slug.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 154,
            columnNumber: 27
        }, this);
        $[30] = errors;
        $[31] = t;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== isAr || $[34] !== t) {
        t14 = isAr ? "\u064A\u062A\u0645 \u0625\u0646\u0634\u0627\u0624\u0647 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0645\u0646 \u0627\u0644\u0627\u0633\u0645\u061B \u064A\u0645\u0643\u0646\u0643 \u062A\u0639\u062F\u064A\u0644\u0647." : t("properties.create.seo.slugHelp");
        $[33] = isAr;
        $[34] = t;
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    let t15;
    if ($[36] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] text-gray-500 dark:text-gray-400 mt-1",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[36] = t14;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    let t16;
    if ($[38] !== t12 || $[39] !== t13 || $[40] !== t15 || $[41] !== t5) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t12,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[38] = t12;
        $[39] = t13;
        $[40] = t15;
        $[41] = t5;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] !== t) {
        t17 = t("properties.create.seo.metaTitle");
        $[43] = t;
        $[44] = t17;
    } else {
        t17 = $[44];
    }
    let t18;
    if ($[45] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "meta_title",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[45] = t17;
        $[46] = t18;
    } else {
        t18 = $[46];
    }
    let t19;
    if ($[47] !== register) {
        t19 = register("meta_title");
        $[47] = register;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] !== t) {
        t20 = t("properties.create.seo.metaTitlePlaceholder");
        $[49] = t;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    let t21;
    if ($[51] !== t19 || $[52] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "meta_title",
            ...t19,
            placeholder: t20,
            className: "mt-1 h-9 text-xs dark:bg-neutral-950 dark:border-neutral-700"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[51] = t19;
        $[52] = t20;
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    if ($[54] !== errors || $[55] !== t) {
        t22 = errors?.meta_title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.meta_title.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 232,
            columnNumber: 33
        }, this);
        $[54] = errors;
        $[55] = t;
        $[56] = t22;
    } else {
        t22 = $[56];
    }
    let t23;
    if ($[57] !== t18 || $[58] !== t21 || $[59] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[57] = t18;
        $[58] = t21;
        $[59] = t22;
        $[60] = t23;
    } else {
        t23 = $[60];
    }
    let t24;
    if ($[61] !== t) {
        t24 = t("properties.create.seo.metaDescription");
        $[61] = t;
        $[62] = t24;
    } else {
        t24 = $[62];
    }
    let t25;
    if ($[63] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "meta_description",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[63] = t24;
        $[64] = t25;
    } else {
        t25 = $[64];
    }
    let t26;
    if ($[65] !== t) {
        t26 = t("properties.create.seo.metaDescriptionHint");
        $[65] = t;
        $[66] = t26;
    } else {
        t26 = $[66];
    }
    let t27;
    if ($[67] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-gray-400 dark:text-gray-500",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[67] = t26;
        $[68] = t27;
    } else {
        t27 = $[68];
    }
    let t28;
    if ($[69] !== t25 || $[70] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-1",
            children: [
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[69] = t25;
        $[70] = t27;
        $[71] = t28;
    } else {
        t28 = $[71];
    }
    let t29;
    if ($[72] !== register) {
        t29 = register("meta_description");
        $[72] = register;
        $[73] = t29;
    } else {
        t29 = $[73];
    }
    let t30;
    if ($[74] !== isAr || $[75] !== t) {
        t30 = isAr ? "\u0627\u0643\u062A\u0628 \u0648\u0635\u0641 \u0627\u0644\u0645\u064A\u062A\u0627 \u0647\u0646\u0627" : t("properties.create.seo.metaDescriptionPlaceholder");
        $[74] = isAr;
        $[75] = t;
        $[76] = t30;
    } else {
        t30 = $[76];
    }
    let t31;
    if ($[77] !== t29 || $[78] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: "meta_description",
            ...t29,
            placeholder: t30,
            rows: 2,
            className: "min-h-[70px] text-xs resize-none bg-white dark:bg-neutral-950 border-input dark:border-neutral-700 dark:text-gray-100"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[77] = t29;
        $[78] = t30;
        $[79] = t31;
    } else {
        t31 = $[79];
    }
    let t32;
    if ($[80] !== errors || $[81] !== t) {
        t32 = errors?.meta_description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.meta_description.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 318,
            columnNumber: 39
        }, this);
        $[80] = errors;
        $[81] = t;
        $[82] = t32;
    } else {
        t32 = $[82];
    }
    let t33;
    if ($[83] !== t28 || $[84] !== t31 || $[85] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t28,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[83] = t28;
        $[84] = t31;
        $[85] = t32;
        $[86] = t33;
    } else {
        t33 = $[86];
    }
    let t34;
    if ($[87] !== t16 || $[88] !== t23 || $[89] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3.5",
            children: [
                t16,
                t23,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[87] = t16;
        $[88] = t23;
        $[89] = t33;
        $[90] = t34;
    } else {
        t34 = $[90];
    }
    let t35;
    if ($[91] !== t3 || $[92] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs",
            children: [
                t3,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[91] = t3;
        $[92] = t34;
        $[93] = t35;
    } else {
        t35 = $[93];
    }
    return t35;
}
_s(SeoSection, "gIVFC5dBgCUycoMEOa56n6s/1so=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = SeoSection;
var _c;
__turbopack_context__.k.register(_c, "SeoSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BasicInfoTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/command.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/SeoSection.tsx [app-client] (ecmascript)");
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
function BasicInfoTab(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(229);
    if ($[0] !== "a1d0b1ca1003aca443c56f26b89d6840b2bc293aec22fe44b793819e6e4795e7") {
        for(let $i = 0; $i < 229; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1d0b1ca1003aca443c56f26b89d6840b2bc293aec22fe44b793819e6e4795e7";
    }
    const { register, control, errors, propertiesType, propertiesSubtype, projects, setValue, watch } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [projectSearch, setProjectSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isProjectOpen, setIsProjectOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== projectSearch || $[2] !== projects) {
        bb0: {
            const search = projectSearch.trim().toLowerCase();
            if (!search) {
                t1 = projects;
                break bb0;
            }
            t1 = projects.filter({
                "BasicInfoTab[projects.filter()]": (p)=>{
                    const pName = (p?.project_name ?? p?.name ?? p?.title ?? "").toString().toLowerCase();
                    return pName.includes(search);
                }
            }["BasicInfoTab[projects.filter()]"]);
        }
        $[1] = projectSearch;
        $[2] = projects;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const filteredProjects = t1;
    let t2;
    if ($[4] !== t) {
        t2 = t("properties.create.basicInfo.title");
        $[4] = t;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t2
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                lineNumber: 93,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== isAr || $[9] !== t) {
        t4 = isAr ? "\u0627\u0633\u0645 \u0627\u0644\u0639\u0642\u0627\u0631 (\u0639\u0631\u0628\u064A)" : t("properties.create.basicInfo.propertyName");
        $[8] = isAr;
        $[9] = t;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "property_name",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t4,
                " ",
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== register) {
        t7 = register("property_name");
        $[14] = register;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t) {
        t8 = t("properties.create.basicInfo.propertyNamePlaceholder");
        $[16] = t;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    const t9 = !!errors.property_name;
    let t10;
    if ($[18] !== t7 || $[19] !== t8 || $[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "property_name",
            ...t7,
            placeholder: t8,
            className: "mt-1.5",
            error: t9
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== errors.property_name || $[23] !== t) {
        t11 = errors.property_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.property_name.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 152,
            columnNumber: 35
        }, this);
        $[22] = errors.property_name;
        $[23] = t;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t10 || $[26] !== t11 || $[27] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t11;
        $[27] = t6;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t) {
        t13 = t("properties.create.basicInfo.propertyNameEn");
        $[29] = t;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "property_name_en",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== register) {
        t15 = register("property_name_en");
        $[33] = register;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t) {
        t16 = t("properties.create.basicInfo.propertyNamePlaceholder");
        $[35] = t;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t15 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "property_name_en",
            ...t15,
            placeholder: t16,
            className: "mt-1.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[37] = t15;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t14 || $[41] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[40] = t14;
        $[41] = t17;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== isAr || $[44] !== t) {
        t19 = isAr ? "\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u0627\u0631" : t("properties.create.basicInfo.propertyNo");
        $[43] = isAr;
        $[44] = t;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "property_no",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[46] = t19;
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] !== register) {
        t21 = register("property_no");
        $[48] = register;
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "property_no",
            ...t21,
            placeholder: "e.g. B4307",
            className: "mt-1.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[50] = t21;
        $[51] = t22;
    } else {
        t22 = $[51];
    }
    let t23;
    if ($[52] !== t20 || $[53] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[52] = t20;
        $[53] = t22;
        $[54] = t23;
    } else {
        t23 = $[54];
    }
    let t24;
    if ($[55] !== t) {
        t24 = t("properties.create.basicInfo.project");
        $[55] = t;
        $[56] = t24;
    } else {
        t24 = $[56];
    }
    let t25;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    let t26;
    if ($[58] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t24,
                " ",
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[58] = t24;
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[60] !== errors.project_id || $[61] !== filteredProjects || $[62] !== isAr || $[63] !== isProjectOpen || $[64] !== projectSearch || $[65] !== projects || $[66] !== t) {
        t27 = ({
            "BasicInfoTab[<Controller>.render]": (t28)=>{
                const { field } = t28;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                    open: isProjectOpen,
                    onOpenChange: {
                        "BasicInfoTab[<Controller>.render > <Popover>.onOpenChange]": (open)=>{
                            setIsProjectOpen(open);
                            if (!open) {
                                setProjectSearch("");
                            }
                        }
                    }["BasicInfoTab[<Controller>.render > <Popover>.onOpenChange]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                id: "project_id",
                                role: "combobox",
                                "aria-expanded": isProjectOpen,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between rounded-md border border-input dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm shadow-xs transition-colors mt-1.5 text-gray-900 dark:text-gray-100", "hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", errors.project_id && "border-red-500 focus-visible:ring-red-500", !field.value && "text-muted-foreground"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: field.value ? projects.find({
                                            "BasicInfoTab[<Controller>.render > projects.find()]": (p_0)=>String(p_0.project_id ?? p_0.id) === String(field.value)
                                        }["BasicInfoTab[<Controller>.render > projects.find()]"])?.project_name || field.value : isAr ? "\u0627\u0628\u062D\u062B \u0648\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" : t("properties.create.basicInfo.selectProject")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 298,
                                        columnNumber: 700
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "h-4 w-4 opacity-50 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 300,
                                        columnNumber: 270
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 298,
                                columnNumber: 105
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 298,
                            columnNumber: 74
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                            className: "w-[--radix-popover-trigger-width] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800",
                            align: "start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
                                shouldFilter: false,
                                className: "dark:bg-neutral-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandInput"], {
                                        placeholder: t("properties.create.basicInfo.searchProject"),
                                        value: projectSearch,
                                        onValueChange: setProjectSearch,
                                        className: "dark:text-gray-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 300,
                                        columnNumber: 569
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandList"], {
                                        className: "max-h-64 overflow-y-auto dark:bg-neutral-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                className: "dark:text-gray-400",
                                                children: t("properties.create.basicInfo.noProjectFound")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                                lineNumber: 300,
                                                columnNumber: 802
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                                children: filteredProjects.map({
                                                    "BasicInfoTab[<Controller>.render > filteredProjects.map()]": (project)=>{
                                                        const projId = String(project.project_id ?? project.id);
                                                        const isSelected = String(field.value) === projId;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandItem"], {
                                                            value: project.project_name || projId,
                                                            onSelect: {
                                                                "BasicInfoTab[<Controller>.render > filteredProjects.map() > <CommandItem>.onSelect]": ()=>{
                                                                    field.onChange(projId);
                                                                    setIsProjectOpen(false);
                                                                    setProjectSearch("");
                                                                }
                                                            }["BasicInfoTab[<Controller>.render > filteredProjects.map() > <CommandItem>.onSelect]"],
                                                            className: "dark:text-gray-200 dark:hover:bg-neutral-800 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("me-2 h-4 w-4 text-teal-600 dark:text-teal-400", isSelected ? "opacity-100" : "opacity-0")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 185
                                                                }, this),
                                                                project.project_name
                                                            ]
                                                        }, projId, true, {
                                                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 30
                                                        }, this);
                                                    }
                                                }["BasicInfoTab[<Controller>.render > filteredProjects.map()]"])
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                                lineNumber: 300,
                                                columnNumber: 911
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 300,
                                        columnNumber: 732
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 300,
                                columnNumber: 507
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 300,
                            columnNumber: 351
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 291,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[60] = errors.project_id;
        $[61] = filteredProjects;
        $[62] = isAr;
        $[63] = isProjectOpen;
        $[64] = projectSearch;
        $[65] = projects;
        $[66] = t;
        $[67] = t27;
    } else {
        t27 = $[67];
    }
    let t28;
    if ($[68] !== control || $[69] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "project_id",
            control: control,
            render: t27
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[68] = control;
        $[69] = t27;
        $[70] = t28;
    } else {
        t28 = $[70];
    }
    let t29;
    if ($[71] !== errors.project_id || $[72] !== t) {
        t29 = errors.project_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.project_id.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 337,
            columnNumber: 32
        }, this);
        $[71] = errors.project_id;
        $[72] = t;
        $[73] = t29;
    } else {
        t29 = $[73];
    }
    let t30;
    if ($[74] !== t26 || $[75] !== t28 || $[76] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[74] = t26;
        $[75] = t28;
        $[76] = t29;
        $[77] = t30;
    } else {
        t30 = $[77];
    }
    let t31;
    if ($[78] !== t) {
        t31 = t("properties.create.basicInfo.propertyType");
        $[78] = t;
        $[79] = t31;
    } else {
        t31 = $[79];
    }
    let t32;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[80] = t32;
    } else {
        t32 = $[80];
    }
    let t33;
    if ($[81] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t31,
                " ",
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[81] = t31;
        $[82] = t33;
    } else {
        t33 = $[82];
    }
    let t34;
    if ($[83] !== errors.property_type_id || $[84] !== propertiesType || $[85] !== t) {
        t34 = ({
            "BasicInfoTab[<Controller>.render]": (t35)=>{
                const { field: field_0 } = t35;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_0.onChange,
                    value: field_0.value ? String(field_0.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "property_type_id",
                            className: "mt-1.5",
                            error: !!errors.property_type_id,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.basicInfo.selectPropertyType"),
                                children: field_0.value && propertiesType.find({
                                    "BasicInfoTab[<Controller>.render > propertiesType.find()]": (t_0)=>String(t_0.id) === String(field_0.value)
                                }["BasicInfoTab[<Controller>.render > propertiesType.find()]"])?.name
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 384,
                                columnNumber: 224
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 384,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: propertiesType.map(_BasicInfoTabControllerRenderPropertiesTypeMap)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 386,
                            columnNumber: 115
                        }, this)
                    ]
                }, field_0.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 384,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[83] = errors.property_type_id;
        $[84] = propertiesType;
        $[85] = t;
        $[86] = t34;
    } else {
        t34 = $[86];
    }
    let t35;
    if ($[87] !== control || $[88] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "property_type_id",
            control: control,
            render: t34
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[87] = control;
        $[88] = t34;
        $[89] = t35;
    } else {
        t35 = $[89];
    }
    let t36;
    if ($[90] !== errors.property_type_id || $[91] !== t) {
        t36 = errors.property_type_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.property_type_id.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 407,
            columnNumber: 38
        }, this);
        $[90] = errors.property_type_id;
        $[91] = t;
        $[92] = t36;
    } else {
        t36 = $[92];
    }
    let t37;
    if ($[93] !== t33 || $[94] !== t35 || $[95] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[93] = t33;
        $[94] = t35;
        $[95] = t36;
        $[96] = t37;
    } else {
        t37 = $[96];
    }
    let t38;
    if ($[97] !== isAr || $[98] !== t) {
        t38 = isAr ? "\u0627\u0644\u062A\u0635\u0646\u064A\u0641" : t("properties.create.basicInfo.status");
        $[97] = isAr;
        $[98] = t;
        $[99] = t38;
    } else {
        t38 = $[99];
    }
    let t39;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[100] = t39;
    } else {
        t39 = $[100];
    }
    let t40;
    if ($[101] !== t38) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t38,
                " ",
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[101] = t38;
        $[102] = t40;
    } else {
        t40 = $[102];
    }
    let t41;
    if ($[103] !== errors.status || $[104] !== isAr || $[105] !== t) {
        t41 = ({
            "BasicInfoTab[<Controller>.render]": (t42)=>{
                const { field: field_1 } = t42;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_1.onChange,
                    value: field_1.value ? String(field_1.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "status",
                            className: "mt-1.5",
                            error: !!errors.status,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: isAr ? "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641" : t("properties.create.basicInfo.selectStatus"),
                                children: field_1.value && (t(`properties.create.options.status.${field_1.value}`) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusOptions"].find({
                                    "BasicInfoTab[<Controller>.render > statusOptions.find()]": (o)=>o.value === field_1.value
                                }["BasicInfoTab[<Controller>.render > statusOptions.find()]"])?.label)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 455,
                                columnNumber: 204
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 455,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusOptions"].map({
                                "BasicInfoTab[<Controller>.render > statusOptions.map()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option.value,
                                        children: t(`properties.create.options.status.${option.value}`) || option.label
                                    }, option.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 458,
                                        columnNumber: 84
                                    }, this)
                            }["BasicInfoTab[<Controller>.render > statusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 457,
                            columnNumber: 116
                        }, this)
                    ]
                }, field_1.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 455,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[103] = errors.status;
        $[104] = isAr;
        $[105] = t;
        $[106] = t41;
    } else {
        t41 = $[106];
    }
    let t42;
    if ($[107] !== control || $[108] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "status",
            control: control,
            render: t41
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[107] = control;
        $[108] = t41;
        $[109] = t42;
    } else {
        t42 = $[109];
    }
    let t43;
    if ($[110] !== errors.status || $[111] !== t) {
        t43 = errors.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.status.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 480,
            columnNumber: 28
        }, this);
        $[110] = errors.status;
        $[111] = t;
        $[112] = t43;
    } else {
        t43 = $[112];
    }
    let t44;
    if ($[113] !== t40 || $[114] !== t42 || $[115] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t40,
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[113] = t40;
        $[114] = t42;
        $[115] = t43;
        $[116] = t44;
    } else {
        t44 = $[116];
    }
    let t45;
    if ($[117] !== isAr || $[118] !== t) {
        t45 = isAr ? "\u0627\u0644\u0646\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064A" : t("properties.create.basicInfo.unitSubType");
        $[117] = isAr;
        $[118] = t;
        $[119] = t45;
    } else {
        t45 = $[119];
    }
    let t46;
    if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, this);
        $[120] = t46;
    } else {
        t46 = $[120];
    }
    let t47;
    if ($[121] !== t45) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t45,
                " ",
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        $[121] = t45;
        $[122] = t47;
    } else {
        t47 = $[122];
    }
    let t48;
    if ($[123] !== errors.property_subtype_id || $[124] !== propertiesSubtype || $[125] !== t) {
        t48 = ({
            "BasicInfoTab[<Controller>.render]": (t49)=>{
                const { field: field_2 } = t49;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_2.onChange,
                    value: field_2.value ? String(field_2.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "property_subtype_id",
                            className: "mt-1.5",
                            error: !!errors.property_subtype_id,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.basicInfo.selectSubType"),
                                children: field_2.value && propertiesSubtype.find({
                                    "BasicInfoTab[<Controller>.render > propertiesSubtype.find()]": (t_1)=>String(t_1.id) === String(field_2.value)
                                }["BasicInfoTab[<Controller>.render > propertiesSubtype.find()]"])?.name
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 528,
                                columnNumber: 230
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 528,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: propertiesSubtype.map(_BasicInfoTabControllerRenderPropertiesSubtypeMap)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 530,
                            columnNumber: 118
                        }, this)
                    ]
                }, field_2.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 528,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[123] = errors.property_subtype_id;
        $[124] = propertiesSubtype;
        $[125] = t;
        $[126] = t48;
    } else {
        t48 = $[126];
    }
    let t49;
    if ($[127] !== control || $[128] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "property_subtype_id",
            control: control,
            render: t48
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 542,
            columnNumber: 11
        }, this);
        $[127] = control;
        $[128] = t48;
        $[129] = t49;
    } else {
        t49 = $[129];
    }
    let t50;
    if ($[130] !== errors.property_subtype_id || $[131] !== t) {
        t50 = errors.property_subtype_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.property_subtype_id.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 551,
            columnNumber: 41
        }, this);
        $[130] = errors.property_subtype_id;
        $[131] = t;
        $[132] = t50;
    } else {
        t50 = $[132];
    }
    let t51;
    if ($[133] !== t47 || $[134] !== t49 || $[135] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t47,
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[133] = t47;
        $[134] = t49;
        $[135] = t50;
        $[136] = t51;
    } else {
        t51 = $[136];
    }
    let t52;
    if ($[137] !== t) {
        t52 = t("properties.create.basicInfo.buildingName");
        $[137] = t;
        $[138] = t52;
    } else {
        t52 = $[138];
    }
    let t53;
    if ($[139] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "building_name",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t52
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 578,
            columnNumber: 11
        }, this);
        $[139] = t52;
        $[140] = t53;
    } else {
        t53 = $[140];
    }
    let t54;
    if ($[141] !== register) {
        t54 = register("building_name");
        $[141] = register;
        $[142] = t54;
    } else {
        t54 = $[142];
    }
    let t55;
    if ($[143] !== t) {
        t55 = t("properties.create.basicInfo.buildingNameInputPlaceholder");
        $[143] = t;
        $[144] = t55;
    } else {
        t55 = $[144];
    }
    let t56;
    if ($[145] !== t54 || $[146] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "building_name",
            ...t54,
            placeholder: t55,
            className: "mt-1.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 602,
            columnNumber: 11
        }, this);
        $[145] = t54;
        $[146] = t55;
        $[147] = t56;
    } else {
        t56 = $[147];
    }
    let t57;
    if ($[148] !== t53 || $[149] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t53,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 611,
            columnNumber: 11
        }, this);
        $[148] = t53;
        $[149] = t56;
        $[150] = t57;
    } else {
        t57 = $[150];
    }
    let t58;
    if ($[151] !== isAr || $[152] !== t) {
        t58 = isAr ? "\u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u0646\u0634\u0627\u0621" : t("properties.create.basicInfo.constructionStatus");
        $[151] = isAr;
        $[152] = t;
        $[153] = t58;
    } else {
        t58 = $[153];
    }
    let t59;
    if ($[154] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, this);
        $[154] = t59;
    } else {
        t59 = $[154];
    }
    let t60;
    if ($[155] !== t58) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t58,
                " ",
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[155] = t58;
        $[156] = t60;
    } else {
        t60 = $[156];
    }
    let t61;
    if ($[157] !== errors.construction_status || $[158] !== isAr || $[159] !== t) {
        t61 = ({
            "BasicInfoTab[<Controller>.render]": (t62)=>{
                const { field: field_3 } = t62;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_3.onChange,
                    value: field_3.value ? String(field_3.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "construction_status",
                            className: "mt-1.5",
                            error: !!errors.construction_status,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: isAr ? "\u062C\u0627\u0647\u0632" : t("properties.create.basicInfo.selectConstructionStatus"),
                                children: field_3.value && (t(`properties.create.options.constructionStatus.${field_3.value}`) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructionStatusOptions"].find({
                                    "BasicInfoTab[<Controller>.render > constructionStatusOptions.find()]": (o_0)=>o_0.value === field_3.value
                                }["BasicInfoTab[<Controller>.render > constructionStatusOptions.find()]"])?.label)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 649,
                                columnNumber: 230
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 649,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructionStatusOptions"].map({
                                "BasicInfoTab[<Controller>.render > constructionStatusOptions.map()]": (option_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_0.value,
                                        children: t(`properties.create.options.constructionStatus.${option_0.value}`) || option_0.label
                                    }, option_0.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 652,
                                        columnNumber: 98
                                    }, this)
                            }["BasicInfoTab[<Controller>.render > constructionStatusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 651,
                            columnNumber: 128
                        }, this)
                    ]
                }, field_3.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 649,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[157] = errors.construction_status;
        $[158] = isAr;
        $[159] = t;
        $[160] = t61;
    } else {
        t61 = $[160];
    }
    let t62;
    if ($[161] !== control || $[162] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "construction_status",
            control: control,
            render: t61
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, this);
        $[161] = control;
        $[162] = t61;
        $[163] = t62;
    } else {
        t62 = $[163];
    }
    let t63;
    if ($[164] !== errors.construction_status || $[165] !== t) {
        t63 = errors.construction_status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.construction_status.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 674,
            columnNumber: 41
        }, this);
        $[164] = errors.construction_status;
        $[165] = t;
        $[166] = t63;
    } else {
        t63 = $[166];
    }
    let t64;
    if ($[167] !== t60 || $[168] !== t62 || $[169] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t60,
                t62,
                t63
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 683,
            columnNumber: 11
        }, this);
        $[167] = t60;
        $[168] = t62;
        $[169] = t63;
        $[170] = t64;
    } else {
        t64 = $[170];
    }
    let t65;
    if ($[171] !== t) {
        t65 = t("properties.create.basicInfo.availabilityStatus");
        $[171] = t;
        $[172] = t65;
    } else {
        t65 = $[172];
    }
    let t66;
    if ($[173] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 701,
            columnNumber: 11
        }, this);
        $[173] = t66;
    } else {
        t66 = $[173];
    }
    let t67;
    if ($[174] !== t65) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t65,
                " ",
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 708,
            columnNumber: 11
        }, this);
        $[174] = t65;
        $[175] = t67;
    } else {
        t67 = $[175];
    }
    let t68;
    if ($[176] !== errors.availability_status || $[177] !== isAr || $[178] !== t) {
        t68 = ({
            "BasicInfoTab[<Controller>.render]": (t69)=>{
                const { field: field_4 } = t69;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_4.onChange,
                    value: field_4.value ? String(field_4.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "availability_status",
                            className: "mt-1.5",
                            error: !!errors.availability_status,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: isAr ? "\u0645\u062A\u0627\u062D\u0629" : t("properties.create.basicInfo.selectAvailabilityStatus"),
                                children: field_4.value && (t(`properties.create.options.availabilityStatus.${field_4.value}`) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availabilityStatusOptions"].find({
                                    "BasicInfoTab[<Controller>.render > availabilityStatusOptions.find()]": (o_1)=>o_1.value === field_4.value
                                }["BasicInfoTab[<Controller>.render > availabilityStatusOptions.find()]"])?.label)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 721,
                                columnNumber: 230
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 721,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availabilityStatusOptions"].map({
                                "BasicInfoTab[<Controller>.render > availabilityStatusOptions.map()]": (option_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_1.value,
                                        children: t(`properties.create.options.availabilityStatus.${option_1.value}`) || option_1.label
                                    }, option_1.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 724,
                                        columnNumber: 98
                                    }, this)
                            }["BasicInfoTab[<Controller>.render > availabilityStatusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 723,
                            columnNumber: 128
                        }, this)
                    ]
                }, field_4.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 721,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[176] = errors.availability_status;
        $[177] = isAr;
        $[178] = t;
        $[179] = t68;
    } else {
        t68 = $[179];
    }
    let t69;
    if ($[180] !== control || $[181] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "availability_status",
            control: control,
            render: t68
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 737,
            columnNumber: 11
        }, this);
        $[180] = control;
        $[181] = t68;
        $[182] = t69;
    } else {
        t69 = $[182];
    }
    let t70;
    if ($[183] !== errors.availability_status || $[184] !== t) {
        t70 = errors.availability_status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.availability_status.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 746,
            columnNumber: 41
        }, this);
        $[183] = errors.availability_status;
        $[184] = t;
        $[185] = t70;
    } else {
        t70 = $[185];
    }
    let t71;
    if ($[186] !== t67 || $[187] !== t69 || $[188] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t67,
                t69,
                t70
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 755,
            columnNumber: 11
        }, this);
        $[186] = t67;
        $[187] = t69;
        $[188] = t70;
        $[189] = t71;
    } else {
        t71 = $[189];
    }
    let t72;
    if ($[190] !== isAr || $[191] !== t) {
        t72 = isAr ? "\u0627\u0644\u0648\u0635\u0641" : t("properties.create.basicInfo.description");
        $[190] = isAr;
        $[191] = t;
        $[192] = t72;
    } else {
        t72 = $[192];
    }
    let t73;
    if ($[193] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "description",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t72
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 774,
            columnNumber: 11
        }, this);
        $[193] = t72;
        $[194] = t73;
    } else {
        t73 = $[194];
    }
    let t74;
    if ($[195] !== register) {
        t74 = register("description");
        $[195] = register;
        $[196] = t74;
    } else {
        t74 = $[196];
    }
    let t75;
    if ($[197] !== isAr || $[198] !== t) {
        t75 = isAr ? "\u0627\u0643\u062A\u0628 \u0627\u0644\u0648\u0635\u0641 \u0647\u0646\u0627" : t("properties.create.basicInfo.descriptionPlaceholder");
        $[197] = isAr;
        $[198] = t;
        $[199] = t75;
    } else {
        t75 = $[199];
    }
    let t76;
    if ($[200] !== t74 || $[201] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: "description",
            ...t74,
            placeholder: t75,
            className: "mt-1.5 min-h-[110px] bg-white dark:bg-neutral-950 border-input dark:border-neutral-700 dark:text-gray-100"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 799,
            columnNumber: 11
        }, this);
        $[200] = t74;
        $[201] = t75;
        $[202] = t76;
    } else {
        t76 = $[202];
    }
    let t77;
    if ($[203] !== t73 || $[204] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                t73,
                t76
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 808,
            columnNumber: 11
        }, this);
        $[203] = t73;
        $[204] = t76;
        $[205] = t77;
    } else {
        t77 = $[205];
    }
    let t78;
    if ($[206] !== t12 || $[207] !== t18 || $[208] !== t23 || $[209] !== t30 || $[210] !== t37 || $[211] !== t44 || $[212] !== t51 || $[213] !== t57 || $[214] !== t64 || $[215] !== t71 || $[216] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5",
            children: [
                t12,
                t18,
                t23,
                t30,
                t37,
                t44,
                t51,
                t57,
                t64,
                t71,
                t77
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 817,
            columnNumber: 11
        }, this);
        $[206] = t12;
        $[207] = t18;
        $[208] = t23;
        $[209] = t30;
        $[210] = t37;
        $[211] = t44;
        $[212] = t51;
        $[213] = t57;
        $[214] = t64;
        $[215] = t71;
        $[216] = t77;
        $[217] = t78;
    } else {
        t78 = $[217];
    }
    let t79;
    if ($[218] !== t3 || $[219] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t3,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 835,
            columnNumber: 11
        }, this);
        $[218] = t3;
        $[219] = t78;
        $[220] = t79;
    } else {
        t79 = $[220];
    }
    let t80;
    if ($[221] !== errors || $[222] !== register || $[223] !== setValue || $[224] !== watch) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch,
            errors: errors
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 844,
            columnNumber: 11
        }, this);
        $[221] = errors;
        $[222] = register;
        $[223] = setValue;
        $[224] = watch;
        $[225] = t80;
    } else {
        t80 = $[225];
    }
    let t81;
    if ($[226] !== t79 || $[227] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t79,
                t80
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 855,
            columnNumber: 11
        }, this);
        $[226] = t79;
        $[227] = t80;
        $[228] = t81;
    } else {
        t81 = $[228];
    }
    return t81;
}
_s(BasicInfoTab, "M8dlioWl4MrjpfIFWYV12hYDjjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = BasicInfoTab;
function _BasicInfoTabControllerRenderPropertiesSubtypeMap(subtype) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: String(subtype.id),
        children: subtype.name
    }, subtype.id, false, {
        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
        lineNumber: 865,
        columnNumber: 10
    }, this);
}
function _BasicInfoTabControllerRenderPropertiesTypeMap(type) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: String(type.id),
        children: type.name
    }, type.id, false, {
        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
        lineNumber: 868,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "BasicInfoTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingMediaTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/SeoSection.tsx [app-client] (ecmascript)");
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
function PricingMediaTab(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(138);
    if ($[0] !== "dce31653b83a0869cf4e55a3acc446ae2aba1c66b20878bb5d881b81c4585db7") {
        for(let $i = 0; $i < 138; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dce31653b83a0869cf4e55a3acc446ae2aba1c66b20878bb5d881b81c4585db7";
    }
    const { register, control, errors, imagePreviews, onImageUpload, onRemoveImage, floorPlanPreview, onFloorPlanUpload, onRemoveFloorPlan, setValue, watch } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [localFloorPlanPreview, setLocalFloorPlanPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const imagesInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const floorPlanInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentFloorPlanPreview = floorPlanPreview !== undefined ? floorPlanPreview : localFloorPlanPreview;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "PricingMediaTab[handleBrowseImagesClick]": ()=>{
                imagesInputRef.current?.click();
            }
        })["PricingMediaTab[handleBrowseImagesClick]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const handleBrowseImagesClick = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "PricingMediaTab[handleBrowseFloorPlanClick]": ()=>{
                floorPlanInputRef.current?.click();
            }
        })["PricingMediaTab[handleBrowseFloorPlanClick]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleBrowseFloorPlanClick = t2;
    let t3;
    if ($[3] !== onFloorPlanUpload) {
        t3 = ({
            "PricingMediaTab[handleFloorPlanFileChange]": (e)=>{
                const file = e.target.files?.[0];
                if (!file) {
                    return;
                }
                if (onFloorPlanUpload) {
                    onFloorPlanUpload(e);
                }
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    setLocalFloorPlanPreview(reader.result);
                };
                reader.readAsDataURL(file);
            }
        })["PricingMediaTab[handleFloorPlanFileChange]"];
        $[3] = onFloorPlanUpload;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleFloorPlanFileChange = t3;
    let t4;
    if ($[5] !== onRemoveFloorPlan) {
        t4 = ({
            "PricingMediaTab[handleRemoveFloorPlanInternal]": ()=>{
                if (onRemoveFloorPlan) {
                    onRemoveFloorPlan();
                }
                setLocalFloorPlanPreview(null);
                if (floorPlanInputRef.current) {
                    floorPlanInputRef.current.value = "";
                }
            }
        })["PricingMediaTab[handleRemoveFloorPlanInternal]"];
        $[5] = onRemoveFloorPlan;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleRemoveFloorPlanInternal = t4;
    const handleDragOver = _PricingMediaTabHandleDragOver;
    let t5;
    if ($[7] !== onImageUpload) {
        t5 = ({
            "PricingMediaTab[handleDropImages]": (e_1)=>{
                e_1.preventDefault();
                e_1.stopPropagation();
                if (e_1.dataTransfer.files && e_1.dataTransfer.files.length > 0) {
                    const fakeEvent = {
                        target: {
                            files: e_1.dataTransfer.files
                        }
                    };
                    onImageUpload(fakeEvent);
                }
            }
        })["PricingMediaTab[handleDropImages]"];
        $[7] = onImageUpload;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handleDropImages = t5;
    let t6;
    if ($[9] !== handleFloorPlanFileChange) {
        t6 = ({
            "PricingMediaTab[handleDropFloorPlan]": (e_2)=>{
                e_2.preventDefault();
                e_2.stopPropagation();
                if (e_2.dataTransfer.files && e_2.dataTransfer.files.length > 0) {
                    const fakeEvent_0 = {
                        target: {
                            files: e_2.dataTransfer.files
                        }
                    };
                    handleFloorPlanFileChange(fakeEvent_0);
                }
            }
        })["PricingMediaTab[handleDropFloorPlan]"];
        $[9] = handleFloorPlanFileChange;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const handleDropFloorPlan = t6;
    let t7;
    if ($[11] !== t) {
        t7 = t("properties.create.pricing.title");
        $[11] = t;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                lineNumber: 177,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t) {
        t9 = t("properties.create.pricing.currency");
        $[15] = t;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "currency",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t) {
        t11 = ({
            "PricingMediaTab[<Controller>.render]": (t12)=>{
                const { field } = t12;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field.onChange,
                    value: field.value || "aed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "currency",
                            className: "mt-1 h-9 bg-white dark:bg-neutral-950 text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.pricing.selectCurrency")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                lineNumber: 206,
                                columnNumber: 198
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                            lineNumber: 206,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currencyOptions"].map({
                                "PricingMediaTab[<Controller>.render > currencyOptions.map()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option.value,
                                        children: t(`properties.create.options.currency.${option.value}`) || option.label
                                    }, option.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                        lineNumber: 207,
                                        columnNumber: 89
                                    }, this)
                            }["PricingMediaTab[<Controller>.render > currencyOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                            lineNumber: 206,
                            columnNumber: 289
                        }, this)
                    ]
                }, field.value || "aed", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                    lineNumber: 206,
                    columnNumber: 16
                }, this);
            }
        })["PricingMediaTab[<Controller>.render]"];
        $[19] = t;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== control || $[22] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "currency",
            control: control,
            render: t11
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[21] = control;
        $[22] = t11;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t10 || $[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t) {
        t14 = t("properties.create.pricing.price");
        $[27] = t;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "price",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t14,
                " ",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[30] = t14;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== register) {
        t17 = register("price", {
            valueAsNumber: true
        });
        $[32] = register;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== t) {
        t18 = t("properties.create.pricing.pricePlaceholder");
        $[34] = t;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    const t19 = !!errors.price;
    let t20;
    if ($[36] !== t17 || $[37] !== t18 || $[38] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "price",
            type: "number",
            ...t17,
            placeholder: t18,
            className: "mt-1 h-9 text-xs",
            error: t19
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[36] = t17;
        $[37] = t18;
        $[38] = t19;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== errors.price || $[41] !== t) {
        t21 = errors.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.price.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 288,
            columnNumber: 27
        }, this);
        $[40] = errors.price;
        $[41] = t;
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    let t22;
    if ($[43] !== t16 || $[44] !== t20 || $[45] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[43] = t16;
        $[44] = t20;
        $[45] = t21;
        $[46] = t22;
    } else {
        t22 = $[46];
    }
    let t23;
    if ($[47] !== t) {
        t23 = t("properties.create.pricing.pricePerM2");
        $[47] = t;
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "price-per-m2",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[49] = t23;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== register) {
        t25 = register("price_per_m2", {
            valueAsNumber: true
        });
        $[51] = register;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== t) {
        t26 = t("properties.create.pricing.pricePerM2Placeholder");
        $[53] = t;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    const t27 = !!errors.price_per_m2;
    let t28;
    if ($[55] !== t25 || $[56] !== t26 || $[57] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "price-per-m2",
            type: "number",
            ...t25,
            placeholder: t26,
            className: "mt-1 h-9 text-xs",
            error: t27
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[55] = t25;
        $[56] = t26;
        $[57] = t27;
        $[58] = t28;
    } else {
        t28 = $[58];
    }
    let t29;
    if ($[59] !== errors.price_per_m2 || $[60] !== t) {
        t29 = errors.price_per_m2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.price_per_m2.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 352,
            columnNumber: 34
        }, this);
        $[59] = errors.price_per_m2;
        $[60] = t;
        $[61] = t29;
    } else {
        t29 = $[61];
    }
    let t30;
    if ($[62] !== t24 || $[63] !== t28 || $[64] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[62] = t24;
        $[63] = t28;
        $[64] = t29;
        $[65] = t30;
    } else {
        t30 = $[65];
    }
    let t31;
    if ($[66] !== t13 || $[67] !== t22 || $[68] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                t13,
                t22,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[66] = t13;
        $[67] = t22;
        $[68] = t30;
        $[69] = t31;
    } else {
        t31 = $[69];
    }
    let t32;
    if ($[70] !== t31 || $[71] !== t8) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t8,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[70] = t31;
        $[71] = t8;
        $[72] = t32;
    } else {
        t32 = $[72];
    }
    let t33;
    if ($[73] !== t) {
        t33 = t("properties.create.images.title");
        $[73] = t;
        $[74] = t33;
    } else {
        t33 = $[74];
    }
    let t34;
    if ($[75] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t33
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                lineNumber: 398,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[75] = t33;
        $[76] = t34;
    } else {
        t34 = $[76];
    }
    let t35;
    if ($[77] !== onImageUpload) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ref: imagesInputRef,
            type: "file",
            multiple: true,
            accept: "image/*",
            onChange: onImageUpload,
            className: "sr-only",
            id: "unit-images-upload"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[77] = onImageUpload;
        $[78] = t35;
    } else {
        t35 = $[78];
    }
    let t36;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
            className: "h-7 w-7 text-gray-400 dark:text-gray-500 stroke-[1.5] mb-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, this);
        $[79] = t36;
    } else {
        t36 = $[79];
    }
    let t37;
    if ($[80] !== t) {
        t37 = t("properties.create.images.clickToUpload");
        $[80] = t;
        $[81] = t37;
    } else {
        t37 = $[81];
    }
    let t38;
    if ($[82] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-gray-900 dark:text-gray-100",
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[82] = t37;
        $[83] = t38;
    } else {
        t38 = $[83];
    }
    let t39;
    if ($[84] !== t) {
        t39 = t("properties.create.images.supportText");
        $[84] = t;
        $[85] = t39;
    } else {
        t39 = $[85];
    }
    let t40;
    if ($[86] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 dark:text-gray-500",
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[86] = t39;
        $[87] = t40;
    } else {
        t40 = $[87];
    }
    let t41;
    if ($[88] !== handleDropImages || $[89] !== t35 || $[90] !== t38 || $[91] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: handleBrowseImagesClick,
            onDragOver: handleDragOver,
            onDrop: handleDropImages,
            className: "border border-dashed border-gray-300 dark:border-neutral-700 hover:border-teal-500 dark:hover:border-teal-400 bg-white dark:bg-neutral-950/30 hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-all rounded-xl py-12 px-4 text-center cursor-pointer flex flex-col items-center justify-center gap-1.5 select-none",
            children: [
                t35,
                t36,
                t38,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 453,
            columnNumber: 11
        }, this);
        $[88] = handleDropImages;
        $[89] = t35;
        $[90] = t38;
        $[91] = t40;
        $[92] = t41;
    } else {
        t41 = $[92];
    }
    let t42;
    if ($[93] !== imagePreviews || $[94] !== onRemoveImage || $[95] !== t) {
        t42 = imagePreviews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                imagePreviews.length,
                                " ",
                                t("properties.create.images.imagesUploaded")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                            lineNumber: 464,
                            columnNumber: 175
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-teal-600 dark:text-teal-400",
                            children: t("properties.create.images.primaryHint")
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                            lineNumber: 464,
                            columnNumber: 257
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                    lineNumber: 464,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3",
                    children: imagePreviews.map({
                        "PricingMediaTab[imagePreviews.map()]": (preview, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 aspect-video shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: preview,
                                        alt: `Preview ${index + 1}`,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                        lineNumber: 465,
                                        columnNumber: 244
                                    }, this),
                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-2 left-2 bg-teal-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded shadow-xs",
                                        children: t("properties.create.images.primary")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                        lineNumber: 465,
                                        columnNumber: 349
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "PricingMediaTab[imagePreviews.map() > <button>.onClick]": (e_3)=>{
                                                e_3.stopPropagation();
                                                onRemoveImage(index);
                                            }
                                        }["PricingMediaTab[imagePreviews.map() > <button>.onClick]"],
                                        className: "absolute top-1.5 right-1.5 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-700",
                                        "aria-label": t("properties.create.images.removeImage"),
                                        title: t("properties.create.images.removeImage"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                            lineNumber: 470,
                                            columnNumber: 338
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                        lineNumber: 465,
                                        columnNumber: 520
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                lineNumber: 465,
                                columnNumber: 71
                            }, this)
                    }["PricingMediaTab[imagePreviews.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                    lineNumber: 464,
                    columnNumber: 364
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 464,
            columnNumber: 39
        }, this);
        $[93] = imagePreviews;
        $[94] = onRemoveImage;
        $[95] = t;
        $[96] = t42;
    } else {
        t42 = $[96];
    }
    let t43;
    if ($[97] !== t34 || $[98] !== t41 || $[99] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t34,
                t41,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[97] = t34;
        $[98] = t41;
        $[99] = t42;
        $[100] = t43;
    } else {
        t43 = $[100];
    }
    let t44;
    if ($[101] !== t) {
        t44 = t("properties.create.floorPlan.title");
        $[101] = t;
        $[102] = t44;
    } else {
        t44 = $[102];
    }
    let t45;
    if ($[103] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t44
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                lineNumber: 499,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        $[103] = t44;
        $[104] = t45;
    } else {
        t45 = $[104];
    }
    let t46;
    if ($[105] !== handleFloorPlanFileChange) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ref: floorPlanInputRef,
            type: "file",
            accept: "image/*",
            onChange: handleFloorPlanFileChange,
            className: "sr-only",
            id: "floor-plan-upload"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[105] = handleFloorPlanFileChange;
        $[106] = t46;
    } else {
        t46 = $[106];
    }
    let t47;
    if ($[107] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
            className: "h-7 w-7 text-gray-400 dark:text-gray-500 stroke-[1.5] mb-1"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        $[107] = t47;
    } else {
        t47 = $[107];
    }
    let t48;
    if ($[108] !== t) {
        t48 = t("properties.create.floorPlan.uploadText");
        $[108] = t;
        $[109] = t48;
    } else {
        t48 = $[109];
    }
    let t49;
    if ($[110] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-gray-900 dark:text-gray-100",
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[110] = t48;
        $[111] = t49;
    } else {
        t49 = $[111];
    }
    let t50;
    if ($[112] !== t) {
        t50 = t("properties.create.floorPlan.supportText");
        $[112] = t;
        $[113] = t50;
    } else {
        t50 = $[113];
    }
    let t51;
    if ($[114] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-400 dark:text-gray-500",
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 546,
            columnNumber: 11
        }, this);
        $[114] = t50;
        $[115] = t51;
    } else {
        t51 = $[115];
    }
    let t52;
    if ($[116] !== handleDropFloorPlan || $[117] !== t46 || $[118] !== t49 || $[119] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: handleBrowseFloorPlanClick,
            onDragOver: handleDragOver,
            onDrop: handleDropFloorPlan,
            className: "border border-dashed border-gray-300 dark:border-neutral-700 hover:border-teal-500 dark:hover:border-teal-400 bg-white dark:bg-neutral-950/30 hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-all rounded-xl py-12 px-4 text-center cursor-pointer flex flex-col items-center justify-center gap-1.5 select-none",
            children: [
                t46,
                t47,
                t49,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 554,
            columnNumber: 11
        }, this);
        $[116] = handleDropFloorPlan;
        $[117] = t46;
        $[118] = t49;
        $[119] = t51;
        $[120] = t52;
    } else {
        t52 = $[120];
    }
    let t53;
    if ($[121] !== currentFloorPlanPreview || $[122] !== handleRemoveFloorPlanInternal) {
        t53 = currentFloorPlanPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative inline-block group rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 max-w-xs shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: currentFloorPlanPreview,
                        alt: "Floor Plan Preview",
                        className: "w-full h-44 object-contain p-2 bg-white dark:bg-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                        lineNumber: 565,
                        columnNumber: 230
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "PricingMediaTab[<button>.onClick]": (e_4)=>{
                                e_4.stopPropagation();
                                handleRemoveFloorPlanInternal();
                            }
                        }["PricingMediaTab[<button>.onClick]"],
                        className: "absolute top-1.5 right-1.5 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-700",
                        "aria-label": "Remove floor plan",
                        title: "Remove floor plan",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                            lineNumber: 570,
                            columnNumber: 264
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                        lineNumber: 565,
                        columnNumber: 364
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                lineNumber: 565,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 565,
            columnNumber: 38
        }, this);
        $[121] = currentFloorPlanPreview;
        $[122] = handleRemoveFloorPlanInternal;
        $[123] = t53;
    } else {
        t53 = $[123];
    }
    let t54;
    if ($[124] !== t45 || $[125] !== t52 || $[126] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t45,
                t52,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 579,
            columnNumber: 11
        }, this);
        $[124] = t45;
        $[125] = t52;
        $[126] = t53;
        $[127] = t54;
    } else {
        t54 = $[127];
    }
    let t55;
    if ($[128] !== errors || $[129] !== register || $[130] !== setValue || $[131] !== watch) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch,
            errors: errors
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[128] = errors;
        $[129] = register;
        $[130] = setValue;
        $[131] = watch;
        $[132] = t55;
    } else {
        t55 = $[132];
    }
    let t56;
    if ($[133] !== t32 || $[134] !== t43 || $[135] !== t54 || $[136] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t32,
                t43,
                t54,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 600,
            columnNumber: 11
        }, this);
        $[133] = t32;
        $[134] = t43;
        $[135] = t54;
        $[136] = t55;
        $[137] = t56;
    } else {
        t56 = $[137];
    }
    return t56;
}
_s(PricingMediaTab, "3aMChIIu462TQdP0lypyJGHk+CU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PricingMediaTab;
function _PricingMediaTabHandleDragOver(e_0) {
    e_0.preventDefault();
    e_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "PricingMediaTab");
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
"[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UnitDetailsTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/SeoSection.tsx [app-client] (ecmascript)");
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
function UnitDetailsTab(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(200);
    if ($[0] !== "6b67a2ce9807892846714b32c2d71e588957689e85d97d70769fc68f02d71c6e") {
        for(let $i = 0; $i < 200; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6b67a2ce9807892846714b32c2d71e588957689e85d97d70769fc68f02d71c6e";
    }
    const { register, control, errors, setValue, watch } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("properties.create.unitDetails.title");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                lineNumber: 48,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t) {
        t3 = t("properties.create.unitDetails.unitSize");
        $[5] = t;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "size",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t3,
                " ",
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== register) {
        t6 = register("size", {
            valueAsNumber: true
        });
        $[10] = register;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t) {
        t7 = t("properties.create.unitDetails.unitSizePlaceholder");
        $[12] = t;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const t8 = !!errors.size;
    let t9;
    if ($[14] !== t6 || $[15] !== t7 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "size",
            type: "number",
            ...t6,
            placeholder: t7,
            className: "mt-1 h-9 text-xs",
            error: t8
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== errors.size || $[19] !== t) {
        t10 = errors.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.size.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 108,
            columnNumber: 26
        }, this);
        $[18] = errors.size;
        $[19] = t;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t5 || $[23] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t5;
        $[23] = t9;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t) {
        t12 = t("properties.create.unitDetails.bedrooms");
        $[25] = t;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "bedrooms",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t12,
                " ",
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== register) {
        t15 = register("bedrooms", {
            valueAsNumber: true
        });
        $[30] = register;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t) {
        t16 = t("properties.create.unitDetails.bedrooms");
        $[32] = t;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    const t17 = !!errors.bedrooms;
    let t18;
    if ($[34] !== t15 || $[35] !== t16 || $[36] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "bedrooms",
            type: "number",
            ...t15,
            placeholder: t16,
            className: "mt-1 h-9 text-xs",
            error: t17
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t16;
        $[36] = t17;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== errors.bedrooms || $[39] !== t) {
        t19 = errors.bedrooms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.bedrooms.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 179,
            columnNumber: 30
        }, this);
        $[38] = errors.bedrooms;
        $[39] = t;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== t14 || $[42] !== t18 || $[43] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[41] = t14;
        $[42] = t18;
        $[43] = t19;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t) {
        t21 = t("properties.create.unitDetails.bathrooms");
        $[45] = t;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "bathrooms",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t21,
                " ",
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[48] = t21;
        $[49] = t23;
    } else {
        t23 = $[49];
    }
    let t24;
    if ($[50] !== register) {
        t24 = register("bathrooms", {
            valueAsNumber: true
        });
        $[50] = register;
        $[51] = t24;
    } else {
        t24 = $[51];
    }
    let t25;
    if ($[52] !== t) {
        t25 = t("properties.create.unitDetails.bathrooms");
        $[52] = t;
        $[53] = t25;
    } else {
        t25 = $[53];
    }
    const t26 = !!errors.bathrooms;
    let t27;
    if ($[54] !== t24 || $[55] !== t25 || $[56] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "bathrooms",
            type: "number",
            ...t24,
            placeholder: t25,
            className: "mt-1 h-9 text-xs",
            error: t26
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[54] = t24;
        $[55] = t25;
        $[56] = t26;
        $[57] = t27;
    } else {
        t27 = $[57];
    }
    let t28;
    if ($[58] !== errors.bathrooms || $[59] !== t) {
        t28 = errors.bathrooms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.bathrooms.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 250,
            columnNumber: 31
        }, this);
        $[58] = errors.bathrooms;
        $[59] = t;
        $[60] = t28;
    } else {
        t28 = $[60];
    }
    let t29;
    if ($[61] !== t23 || $[62] !== t27 || $[63] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[61] = t23;
        $[62] = t27;
        $[63] = t28;
        $[64] = t29;
    } else {
        t29 = $[64];
    }
    let t30;
    if ($[65] !== t) {
        t30 = t("properties.create.unitDetails.floor");
        $[65] = t;
        $[66] = t30;
    } else {
        t30 = $[66];
    }
    let t31;
    if ($[67] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "floor",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[67] = t30;
        $[68] = t31;
    } else {
        t31 = $[68];
    }
    let t32;
    if ($[69] !== register) {
        t32 = register("floor");
        $[69] = register;
        $[70] = t32;
    } else {
        t32 = $[70];
    }
    let t33;
    if ($[71] !== t) {
        t33 = t("properties.create.unitDetails.floor");
        $[71] = t;
        $[72] = t33;
    } else {
        t33 = $[72];
    }
    let t34;
    if ($[73] !== t32 || $[74] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "floor",
            ...t32,
            placeholder: t33,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[73] = t32;
        $[74] = t33;
        $[75] = t34;
    } else {
        t34 = $[75];
    }
    let t35;
    if ($[76] !== t31 || $[77] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[76] = t31;
        $[77] = t34;
        $[78] = t35;
    } else {
        t35 = $[78];
    }
    let t36;
    if ($[79] !== t) {
        t36 = t("properties.create.unitDetails.view");
        $[79] = t;
        $[80] = t36;
    } else {
        t36 = $[80];
    }
    let t37;
    if ($[81] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[81] = t36;
        $[82] = t37;
    } else {
        t37 = $[82];
    }
    let t38;
    if ($[83] !== t) {
        t38 = ({
            "UnitDetailsTab[<Controller>.render]": (t39)=>{
                const { field } = t39;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field.onChange,
                    value: field.value ? String(field.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "mt-1 h-9 bg-white dark:bg-neutral-950 text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.unitDetails.selectView")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                lineNumber: 340,
                                columnNumber: 199
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 340,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewOptions"].map({
                                "UnitDetailsTab[<Controller>.render > viewOptions.map()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option.value,
                                        children: t(`properties.create.options.view.${option.value}`) || option.label
                                    }, option.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                        lineNumber: 341,
                                        columnNumber: 84
                                    }, this)
                            }["UnitDetailsTab[<Controller>.render > viewOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 340,
                            columnNumber: 290
                        }, this)
                    ]
                }, field.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 340,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[83] = t;
        $[84] = t38;
    } else {
        t38 = $[84];
    }
    let t39;
    if ($[85] !== control || $[86] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "view",
            control: control,
            render: t38
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[85] = control;
        $[86] = t38;
        $[87] = t39;
    } else {
        t39 = $[87];
    }
    let t40;
    if ($[88] !== t37 || $[89] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[88] = t37;
        $[89] = t39;
        $[90] = t40;
    } else {
        t40 = $[90];
    }
    let t41;
    if ($[91] !== t) {
        t41 = t("properties.create.unitDetails.finishingType");
        $[91] = t;
        $[92] = t41;
    } else {
        t41 = $[92];
    }
    let t42;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[93] = t42;
    } else {
        t42 = $[93];
    }
    let t43;
    if ($[94] !== t41) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t41,
                " ",
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[94] = t41;
        $[95] = t43;
    } else {
        t43 = $[95];
    }
    let t44;
    if ($[96] !== errors.finishing_status || $[97] !== t) {
        t44 = ({
            "UnitDetailsTab[<Controller>.render]": (t45)=>{
                const { field: field_0 } = t45;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_0.onChange,
                    value: field_0.value ? String(field_0.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "finishing_status",
                            className: "mt-1 h-9 bg-white dark:bg-neutral-950 text-xs",
                            error: !!errors.finishing_status,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.unitDetails.selectFinishing")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                lineNumber: 398,
                                columnNumber: 263
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 398,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finishingStatusOptions"].map({
                                "UnitDetailsTab[<Controller>.render > finishingStatusOptions.map()]": (option_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_0.value,
                                        children: t(`properties.create.options.finishingStatus.${option_0.value}`) || option_0.label
                                    }, option_0.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                        lineNumber: 399,
                                        columnNumber: 97
                                    }, this)
                            }["UnitDetailsTab[<Controller>.render > finishingStatusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 398,
                            columnNumber: 359
                        }, this)
                    ]
                }, field_0.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 398,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[96] = errors.finishing_status;
        $[97] = t;
        $[98] = t44;
    } else {
        t44 = $[98];
    }
    let t45;
    if ($[99] !== control || $[100] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "finishing_status",
            control: control,
            render: t44
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[99] = control;
        $[100] = t44;
        $[101] = t45;
    } else {
        t45 = $[101];
    }
    let t46;
    if ($[102] !== errors.finishing_status || $[103] !== t) {
        t46 = errors.finishing_status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.finishing_status.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 420,
            columnNumber: 38
        }, this);
        $[102] = errors.finishing_status;
        $[103] = t;
        $[104] = t46;
    } else {
        t46 = $[104];
    }
    let t47;
    if ($[105] !== t43 || $[106] !== t45 || $[107] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t43,
                t45,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[105] = t43;
        $[106] = t45;
        $[107] = t46;
        $[108] = t47;
    } else {
        t47 = $[108];
    }
    let t48;
    if ($[109] !== t) {
        t48 = t("properties.create.unitDetails.furnishStatus");
        $[109] = t;
        $[110] = t48;
    } else {
        t48 = $[110];
    }
    let t49;
    if ($[111] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[111] = t48;
        $[112] = t49;
    } else {
        t49 = $[112];
    }
    let t50;
    if ($[113] !== t) {
        t50 = ({
            "UnitDetailsTab[<Controller>.render]": (t51)=>{
                const { field: field_1 } = t51;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_1.onChange,
                    value: field_1.value ? String(field_1.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "mt-1 h-9 bg-white dark:bg-neutral-950 text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.unitDetails.selectFurnish")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                lineNumber: 460,
                                columnNumber: 207
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 460,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["furnishStatusOptions"].map({
                                "UnitDetailsTab[<Controller>.render > furnishStatusOptions.map()]": (option_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_1.value,
                                        children: t(`properties.create.options.furnishStatus.${option_1.value}`) || option_1.label
                                    }, option_1.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                        lineNumber: 461,
                                        columnNumber: 95
                                    }, this)
                            }["UnitDetailsTab[<Controller>.render > furnishStatusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 460,
                            columnNumber: 301
                        }, this)
                    ]
                }, field_1.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 460,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[113] = t;
        $[114] = t50;
    } else {
        t50 = $[114];
    }
    let t51;
    if ($[115] !== control || $[116] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "furnish_status",
            control: control,
            render: t50
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[115] = control;
        $[116] = t50;
        $[117] = t51;
    } else {
        t51 = $[117];
    }
    let t52;
    if ($[118] !== t49 || $[119] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t49,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[118] = t49;
        $[119] = t51;
        $[120] = t52;
    } else {
        t52 = $[120];
    }
    let t53;
    if ($[121] !== t) {
        t53 = t("properties.create.unitDetails.ownershipType");
        $[121] = t;
        $[122] = t53;
    } else {
        t53 = $[122];
    }
    let t54;
    if ($[123] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[123] = t53;
        $[124] = t54;
    } else {
        t54 = $[124];
    }
    let t55;
    if ($[125] !== t) {
        t55 = ({
            "UnitDetailsTab[<Controller>.render]": (t56)=>{
                const { field: field_2 } = t56;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_2.onChange,
                    value: field_2.value ? String(field_2.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "mt-1 h-9 bg-white dark:bg-neutral-950 text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.unitDetails.selectOwnership")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                lineNumber: 511,
                                columnNumber: 207
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 511,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownershipTypeOptions"].map({
                                "UnitDetailsTab[<Controller>.render > ownershipTypeOptions.map()]": (option_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_2.value,
                                        children: t(`properties.create.options.ownershipType.${option_2.value}`) || option_2.label
                                    }, option_2.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                        lineNumber: 512,
                                        columnNumber: 95
                                    }, this)
                            }["UnitDetailsTab[<Controller>.render > ownershipTypeOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 511,
                            columnNumber: 303
                        }, this)
                    ]
                }, field_2.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 511,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[125] = t;
        $[126] = t55;
    } else {
        t55 = $[126];
    }
    let t56;
    if ($[127] !== control || $[128] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "ownership_type",
            control: control,
            render: t55
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[127] = control;
        $[128] = t55;
        $[129] = t56;
    } else {
        t56 = $[129];
    }
    let t57;
    if ($[130] !== t54 || $[131] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t54,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[130] = t54;
        $[131] = t56;
        $[132] = t57;
    } else {
        t57 = $[132];
    }
    let t58;
    if ($[133] !== t) {
        t58 = t("properties.create.unitDetails.plotSize");
        $[133] = t;
        $[134] = t58;
    } else {
        t58 = $[134];
    }
    let t59;
    if ($[135] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "plot_size",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t58
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 549,
            columnNumber: 11
        }, this);
        $[135] = t58;
        $[136] = t59;
    } else {
        t59 = $[136];
    }
    let t60;
    if ($[137] !== register) {
        t60 = register("plot_size", {
            valueAsNumber: true
        });
        $[137] = register;
        $[138] = t60;
    } else {
        t60 = $[138];
    }
    let t61;
    if ($[139] !== t) {
        t61 = t("properties.create.unitDetails.plotSizePlaceholder");
        $[139] = t;
        $[140] = t61;
    } else {
        t61 = $[140];
    }
    const t62 = !!errors.plot_size;
    let t63;
    if ($[141] !== t60 || $[142] !== t61 || $[143] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "plot_size",
            type: "number",
            ...t60,
            placeholder: t61,
            className: "mt-1 h-9 text-xs",
            error: t62
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        $[141] = t60;
        $[142] = t61;
        $[143] = t62;
        $[144] = t63;
    } else {
        t63 = $[144];
    }
    let t64;
    if ($[145] !== errors.plot_size || $[146] !== t) {
        t64 = errors.plot_size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.plot_size.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 586,
            columnNumber: 31
        }, this);
        $[145] = errors.plot_size;
        $[146] = t;
        $[147] = t64;
    } else {
        t64 = $[147];
    }
    let t65;
    if ($[148] !== t59 || $[149] !== t63 || $[150] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t59,
                t63,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 595,
            columnNumber: 11
        }, this);
        $[148] = t59;
        $[149] = t63;
        $[150] = t64;
        $[151] = t65;
    } else {
        t65 = $[151];
    }
    let t66;
    if ($[152] !== t) {
        t66 = t("properties.create.unitDetails.builtSize");
        $[152] = t;
        $[153] = t66;
    } else {
        t66 = $[153];
    }
    let t67;
    if ($[154] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "bua_size",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t66
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[154] = t66;
        $[155] = t67;
    } else {
        t67 = $[155];
    }
    let t68;
    if ($[156] !== register) {
        t68 = register("bua_size", {
            valueAsNumber: true
        });
        $[156] = register;
        $[157] = t68;
    } else {
        t68 = $[157];
    }
    let t69;
    if ($[158] !== t) {
        t69 = t("properties.create.unitDetails.builtSizePlaceholder");
        $[158] = t;
        $[159] = t69;
    } else {
        t69 = $[159];
    }
    const t70 = !!errors.bua_size;
    let t71;
    if ($[160] !== t68 || $[161] !== t69 || $[162] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "bua_size",
            type: "number",
            ...t68,
            placeholder: t69,
            className: "mt-1 h-9 text-xs",
            error: t70
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 640,
            columnNumber: 11
        }, this);
        $[160] = t68;
        $[161] = t69;
        $[162] = t70;
        $[163] = t71;
    } else {
        t71 = $[163];
    }
    let t72;
    if ($[164] !== errors.bua_size || $[165] !== t) {
        t72 = errors.bua_size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.bua_size.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 650,
            columnNumber: 30
        }, this);
        $[164] = errors.bua_size;
        $[165] = t;
        $[166] = t72;
    } else {
        t72 = $[166];
    }
    let t73;
    if ($[167] !== t67 || $[168] !== t71 || $[169] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t67,
                t71,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 659,
            columnNumber: 11
        }, this);
        $[167] = t67;
        $[168] = t71;
        $[169] = t72;
        $[170] = t73;
    } else {
        t73 = $[170];
    }
    let t74;
    if ($[171] === Symbol.for("react.memo_cache_sentinel")) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-transparent select-none invisible",
            children: "Maid Room"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 669,
            columnNumber: 11
        }, this);
        $[171] = t74;
    } else {
        t74 = $[171];
    }
    let t75;
    if ($[172] !== t) {
        t75 = ({
            "UnitDetailsTab[<Controller>.render]": (t76)=>{
                const { field: field_3 } = t76;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 bg-gray-50/70 dark:bg-neutral-800/40 border border-gray-200 dark:border-neutral-700 rounded-lg px-3.5 h-9 mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                            id: "maid_room",
                            checked: field_3.value,
                            onCheckedChange: field_3.onChange
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 681,
                            columnNumber: 168
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "maid_room",
                            className: "text-xs font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none",
                            children: t("properties.create.unitDetails.maidRoom")
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 681,
                            columnNumber: 254
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 681,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[172] = t;
        $[173] = t75;
    } else {
        t75 = $[173];
    }
    let t76;
    if ($[174] !== control || $[175] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t74,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                    name: "maid_room",
                    control: control,
                    render: t75
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 691,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 691,
            columnNumber: 11
        }, this);
        $[174] = control;
        $[175] = t75;
        $[176] = t76;
    } else {
        t76 = $[176];
    }
    let t77;
    if ($[177] !== t11 || $[178] !== t20 || $[179] !== t29 || $[180] !== t35 || $[181] !== t40 || $[182] !== t47 || $[183] !== t52 || $[184] !== t57 || $[185] !== t65 || $[186] !== t73 || $[187] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                t11,
                t20,
                t29,
                t35,
                t40,
                t47,
                t52,
                t57,
                t65,
                t73,
                t76
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 700,
            columnNumber: 11
        }, this);
        $[177] = t11;
        $[178] = t20;
        $[179] = t29;
        $[180] = t35;
        $[181] = t40;
        $[182] = t47;
        $[183] = t52;
        $[184] = t57;
        $[185] = t65;
        $[186] = t73;
        $[187] = t76;
        $[188] = t77;
    } else {
        t77 = $[188];
    }
    let t78;
    if ($[189] !== t2 || $[190] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t2,
                t77
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 718,
            columnNumber: 11
        }, this);
        $[189] = t2;
        $[190] = t77;
        $[191] = t78;
    } else {
        t78 = $[191];
    }
    let t79;
    if ($[192] !== errors || $[193] !== register || $[194] !== setValue || $[195] !== watch) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch,
            errors: errors
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 727,
            columnNumber: 11
        }, this);
        $[192] = errors;
        $[193] = register;
        $[194] = setValue;
        $[195] = watch;
        $[196] = t79;
    } else {
        t79 = $[196];
    }
    let t80;
    if ($[197] !== t78 || $[198] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t78,
                t79
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 738,
            columnNumber: 11
        }, this);
        $[197] = t78;
        $[198] = t79;
        $[199] = t80;
    } else {
        t80 = $[199];
    }
    return t80;
}
_s(UnitDetailsTab, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = UnitDetailsTab;
var _c;
__turbopack_context__.k.register(_c, "UnitDetailsTab");
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
function InteractiveMapPicker({ latitude, longitude, defaultCenter, onLocationSelect, height = "h-[420px]", readOnly = false, className = "", defaultZoom = 13, showControls = true, showBadges = true, attributionControl = true }) {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leafletRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastUserActionCoordsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentCoords, setCurrentCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(latitude && longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude) ? {
        lat: latitude,
        lng: longitude
    } : null);
    const [isLocating, setIsLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGeocoding, setIsGeocoding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
            lastUserActionCoordsRef.current = {
                lat: roundedLat,
                lng: roundedLng
            };
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
    // Helper for pin icon
    const getCustomPinIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InteractiveMapPicker.useCallback[getCustomPinIcon]": (L)=>{
            return L.divIcon({
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
        }
    }["InteractiveMapPicker.useCallback[getCustomPinIcon]"], []);
    // Initialize Leaflet Map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMapPicker.useEffect": ()=>{
            let isMounted = true;
            async function initMap() {
                if (!mapContainerRef.current) return;
                if (mapInstanceRef.current) return;
                const L_0 = (await __turbopack_context__.A("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)")).default;
                if (!isMounted || !mapContainerRef.current) return;
                leafletRef.current = L_0;
                const initialLat = latitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude || 0) ? latitude : defaultCenter && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(defaultCenter.lat, defaultCenter.lng) ? defaultCenter.lat : 25.2048;
                const initialLng = longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude || 0, longitude) ? longitude : defaultCenter && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(defaultCenter.lat, defaultCenter.lng) ? defaultCenter.lng : 55.2708;
                const initialZoom = latitude && longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude) ? 15 : defaultZoom;
                const map = L_0.map(mapContainerRef.current, {
                    center: [
                        initialLat,
                        initialLng
                    ],
                    zoom: initialZoom,
                    zoomControl: true,
                    attributionControl: attributionControl
                });
                mapInstanceRef.current = map;
                L_0.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    subdomains: [
                        "a",
                        "b",
                        "c"
                    ]
                }).addTo(map);
                const customPinIcon = getCustomPinIcon(L_0);
                if (latitude && longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude)) {
                    const marker = L_0.marker([
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
                                const marker_0 = L_0.marker([
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
                [
                    100,
                    300,
                    600,
                    1000
                ].forEach({
                    "InteractiveMapPicker.useEffect.initMap": (delay)=>{
                        setTimeout({
                            "InteractiveMapPicker.useEffect.initMap": ()=>{
                                if (mapInstanceRef.current) {
                                    mapInstanceRef.current.invalidateSize();
                                }
                            }
                        }["InteractiveMapPicker.useEffect.initMap"], delay);
                    }
                }["InteractiveMapPicker.useEffect.initMap"]);
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
            const L_1 = leafletRef.current;
            const map_0 = mapInstanceRef.current;
            if (latitude && longitude && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latitude, longitude)) {
                const isFromUserAction = lastUserActionCoordsRef.current && Math.abs(lastUserActionCoordsRef.current.lat - latitude) < 0.0001 && Math.abs(lastUserActionCoordsRef.current.lng - longitude) < 0.0001;
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
                    const customPinIcon_0 = getCustomPinIcon(L_1);
                    const marker_1 = L_1.marker([
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
                // Only fly/pan if the change was external (e.g. from input, city change, url parse)
                if (!isFromUserAction) {
                    map_0.flyTo([
                        latitude,
                        longitude
                    ], 15, {
                        duration: 0.8
                    });
                }
                setTimeout({
                    "InteractiveMapPicker.useEffect": ()=>map_0.invalidateSize()
                }["InteractiveMapPicker.useEffect"], 150);
            } else if (defaultCenter && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(defaultCenter.lat, defaultCenter.lng)) {
                // Pan to default center (e.g. when country or city was selected)
                map_0.panTo([
                    defaultCenter.lat,
                    defaultCenter.lng
                ], {
                    duration: 0.8
                });
                setTimeout({
                    "InteractiveMapPicker.useEffect": ()=>map_0.invalidateSize()
                }["InteractiveMapPicker.useEffect"], 150);
            }
        }
    }["InteractiveMapPicker.useEffect"], [
        latitude,
        longitude,
        defaultCenter?.lat,
        defaultCenter?.lng,
        readOnly,
        handleCoordsChange,
        getCustomPinIcon
    ]);
    const handleLocateMe = ()=>{
        if (!navigator.geolocation) {
            alert(t("locations.mapPicker.geolocationUnsupported"));
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
                lineNumber: 296,
                columnNumber: 7
            }, this),
            showControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2.5 right-2.5 z-[1000] flex items-center gap-1.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-1 rounded-lg border border-gray-200/80 dark:border-neutral-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleLocateMe,
                        disabled: isLocating,
                        title: t("locations.mapPicker.locateMeTitle"),
                        className: "p-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                className: `h-3.5 w-3.5 text-[#008081] ${isLocating ? "animate-spin" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: t("locations.mapPicker.myLocation")
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this),
                    currentCoords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(currentCoords.lat, currentCoords.lng),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: t("locations.mapPicker.openInGoogleMaps"),
                        className: "p-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "h-3.5 w-3.5 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 308,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: t("locations.mapPicker.maps")
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 307,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 301,
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
                                lineNumber: 316,
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
                                lineNumber: 317,
                                columnNumber: 30
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("locations.mapPicker.clickToPinpoint")
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 319,
                                columnNumber: 25
                            }, this),
                            isGeocoding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-[#008081] text-[10px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-2.5 w-2.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("locations.mapPicker.detectingAddress")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                                lineNumber: 321,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-gray-500 dark:text-gray-400 border border-gray-200/80 dark:border-neutral-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t("locations.mapPicker.dragHint")
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                        lineNumber: 327,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
                lineNumber: 314,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/InteractiveMapPicker.tsx",
        lineNumber: 294,
        columnNumber: 10
    }, this);
}
_s(InteractiveMapPicker, "VZ+PXdDtfMq0BipH6CkY0DzRzzg=", false, function() {
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
"[project]/src/features/properties/components/create/tabs/LocationTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$InteractiveMapPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/InteractiveMapPicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/maps/parse-map-url.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/SeoSection.tsx [app-client] (ecmascript)");
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
function LocationTab({ register, setValue, watch, projects = [] }) {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const watchedLat = watch?.("latitude");
    const watchedLng = watch?.("longitude");
    const watchedMapsUrl = watch?.("maps_url");
    const [googleMapsUrl, setGoogleMapsUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(watchedMapsUrl || "");
    const [isFetchingFromUrl, setIsFetchingFromUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Synchronize googleMapsUrl if external value changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationTab.useEffect": ()=>{
            if (watchedMapsUrl && watchedMapsUrl !== googleMapsUrl) {
                setGoogleMapsUrl(watchedMapsUrl);
            }
        }
    }["LocationTab.useEffect"], [
        watchedMapsUrl
    ]);
    // Initial / current coordinates
    const [mapCoords, setMapCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LocationTab.useState": ()=>{
            if (watchedLat && watchedLng && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(Number(watchedLat), Number(watchedLng))) {
                return {
                    lat: Number(watchedLat),
                    lng: Number(watchedLng)
                };
            }
            return null;
        }
    }["LocationTab.useState"]);
    // Direct string inputs for Latitude and Longitude (formatted e.g. 30.0500000)
    const [latInput, setLatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LocationTab.useState": ()=>{
            if (watchedLat != null && !isNaN(Number(watchedLat))) {
                return Number(watchedLat).toFixed(7);
            }
            return "";
        }
    }["LocationTab.useState"]);
    const [lngInput, setLngInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LocationTab.useState": ()=>{
            if (watchedLng != null && !isNaN(Number(watchedLng))) {
                return Number(watchedLng).toFixed(7);
            }
            return "";
        }
    }["LocationTab.useState"]);
    // When external watch values change (e.g. initial load in edit mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationTab.useEffect": ()=>{
            if (watchedLat != null && watchedLng != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(Number(watchedLat), Number(watchedLng))) {
                const latNum = Number(watchedLat);
                const lngNum = Number(watchedLng);
                setMapCoords({
                    lat: latNum,
                    lng: lngNum
                });
                setLatInput(latNum.toFixed(7));
                setLngInput(lngNum.toFixed(7));
            }
        }
    }["LocationTab.useEffect"], [
        watchedLat,
        watchedLng
    ]);
    const handleMapSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocationTab.useCallback[handleMapSelect]": (data)=>{
            const formattedLat = Number(data.lat.toFixed(7));
            const formattedLng = Number(data.lng.toFixed(7));
            setMapCoords({
                lat: formattedLat,
                lng: formattedLng
            });
            setLatInput(data.lat.toFixed(7));
            setLngInput(data.lng.toFixed(7));
            setGoogleMapsUrl(data.googleMapLink);
            setValue?.("maps_url", data.googleMapLink, {
                shouldDirty: true
            });
            setValue?.("latitude", formattedLat, {
                shouldDirty: true
            });
            setValue?.("longitude", formattedLng, {
                shouldDirty: true
            });
            if (data.city && !watch?.("city_name")) {
                setValue?.("city_name", data.city, {
                    shouldDirty: true
                });
            }
            if (data.area && !watch?.("area_name")) {
                setValue?.("area_name", data.area, {
                    shouldDirty: true
                });
            }
            if (data.landmark && !watch?.("landmark")) {
                setValue?.("landmark", data.landmark, {
                    shouldDirty: true
                });
            }
        }
    }["LocationTab.useCallback[handleMapSelect]"], [
        setValue,
        watch
    ]);
    const handleFetchFromUrl = async ()=>{
        if (!googleMapsUrl.trim()) return;
        setIsFetchingFromUrl(true);
        try {
            const coords = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveGoogleMapsUrl"])(googleMapsUrl);
            if (!coords) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "لم نتمكن من استخراج الإحداثيات من هذا الرابط، يرجى التأكد من صحته" : "Could not extract coordinates from this URL");
                return;
            }
            const formattedLat_0 = Number(coords.lat.toFixed(7));
            const formattedLng_0 = Number(coords.lng.toFixed(7));
            setMapCoords({
                lat: formattedLat_0,
                lng: formattedLng_0
            });
            setLatInput(coords.lat.toFixed(7));
            setLngInput(coords.lng.toFixed(7));
            setValue?.("latitude", formattedLat_0, {
                shouldDirty: true
            });
            setValue?.("longitude", formattedLng_0, {
                shouldDirty: true
            });
            setValue?.("maps_url", googleMapsUrl, {
                shouldDirty: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isAr ? "تم تحديد الموقع بنجاح على الخريطة" : "Location pinpointed on map successfully");
        } catch (err) {
            console.error("Error fetching map coordinates:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "حدث خطأ أثناء معالجة الرابط" : "Failed to parse Google Maps URL");
        } finally{
            setIsFetchingFromUrl(false);
        }
    };
    const handleUseParentProjectCoordinates = ()=>{
        const selectedProjectId = watch?.("project_id");
        if (!selectedProjectId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(isAr ? "يرجى اختيار المشروع أولاً من تبويب المعلومات الأساسية" : "Please select a parent project in the Basic Info tab first");
            return;
        }
        const parent = projects?.find((p)=>String(p.project_id ?? p.id) === String(selectedProjectId));
        if (!parent) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "لم نتمكن من العثور على بيانات المشروع المحدد" : "Selected project not found");
            return;
        }
        const loc = parent.location || (Array.isArray(parent.locations) ? parent.locations[0] : null);
        const rawLat = loc?.latitude ?? parent.latitude;
        const rawLng = loc?.longitude ?? parent.longitude;
        const pLat = parseFloat(String(rawLat));
        const pLng = parseFloat(String(rawLng));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(pLat, pLng)) {
            const formattedLat_1 = Number(pLat.toFixed(7));
            const formattedLng_1 = Number(pLng.toFixed(7));
            setMapCoords({
                lat: formattedLat_1,
                lng: formattedLng_1
            });
            setLatInput(pLat.toFixed(7));
            setLngInput(pLng.toFixed(7));
            setValue?.("latitude", formattedLat_1, {
                shouldDirty: true
            });
            setValue?.("longitude", formattedLng_1, {
                shouldDirty: true
            });
            const link = loc?.google_map_link || loc?.google_maps_link || parent.google_map_link || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildGoogleMapsUrl"])(formattedLat_1, formattedLng_1);
            if (link) {
                setGoogleMapsUrl(link);
                setValue?.("maps_url", link, {
                    shouldDirty: true
                });
            }
            if (loc?.landmark && !watch?.("landmark")) {
                setValue?.("landmark", loc.landmark, {
                    shouldDirty: true
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isAr ? "تم سحب إحداثيات المشروع بنجاح" : "Parent project coordinates applied successfully");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "المشروع المحدد لا يحتوي على إحداثيات موقع مسجلة" : "The selected project has no registered location coordinates");
        }
    };
    const handleLatChange = (val)=>{
        setLatInput(val);
        const latNum_0 = parseFloat(val);
        if (!isNaN(latNum_0)) {
            setValue?.("latitude", latNum_0, {
                shouldDirty: true
            });
            const lngNum_0 = parseFloat(lngInput);
            if (!isNaN(lngNum_0) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latNum_0, lngNum_0)) {
                setMapCoords({
                    lat: latNum_0,
                    lng: lngNum_0
                });
            }
        }
    };
    const handleLngChange = (val_0)=>{
        setLngInput(val_0);
        const lngNum_1 = parseFloat(val_0);
        if (!isNaN(lngNum_1)) {
            setValue?.("longitude", lngNum_1, {
                shouldDirty: true
            });
            const latNum_1 = parseFloat(latInput);
            if (!isNaN(latNum_1) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$maps$2f$parse$2d$map$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLatLng"])(latNum_1, lngNum_1)) {
                setMapCoords({
                    lat: latNum_1,
                    lng: lngNum_1
                });
            }
        }
    };
    const [nearbyPoints, setNearbyPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: t("properties.create.location.defaultTransit"),
            distance: "5 mins"
        },
        {
            name: t("properties.create.location.defaultAirport"),
            distance: "20 mins"
        },
        {
            name: t("properties.create.location.defaultMall"),
            distance: "10 mins"
        }
    ]);
    const handleAddPoint = ()=>{
        setNearbyPoints((prev)=>[
                ...prev,
                {
                    name: "",
                    distance: ""
                }
            ]);
    };
    const handleRemovePoint = (index)=>{
        setNearbyPoints((prev_0)=>prev_0.filter((_, i)=>i !== index));
    };
    const handleUpdatePoint = (index_0, field, value)=>{
        setNearbyPoints((prev_1)=>prev_1.map((item, i_0)=>i_0 === index_0 ? {
                    ...item,
                    [field]: value
                } : item));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
                        children: isAr ? "موقع العقار" : "Property Location"
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#f0fdfa] dark:bg-teal-950/20 border border-[#ccfbf1] dark:border-teal-900/40 rounded-lg p-3 sm:px-4 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-[#0f766e] dark:text-teal-200",
                                children: isAr ? "تقع الوحدة داخل مشروعها — اسحب إحداثيات المشروع مباشرة:" : "A unit sits inside its project — pull the parent project's coordinates directly:"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleUseParentProjectCoordinates,
                                className: "bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-neutral-700 text-xs font-medium px-3.5 py-1.5 rounded-md shadow-none transition-colors shrink-0",
                                children: isAr ? "استخدام إحداثيات المشروع" : "Use parent project coordinates"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "maps_url",
                                className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                children: isAr ? "رابط خريطة جوجل (توليد الإحداثيات)" : "Google Maps link (generate coordinates)"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "maps_url",
                                        value: googleMapsUrl,
                                        onChange: (e)=>{
                                            const val_1 = e.target.value;
                                            setGoogleMapsUrl(val_1);
                                            setValue?.("maps_url", val_1, {
                                                shouldDirty: true
                                            });
                                        },
                                        onKeyDown: (e_0)=>{
                                            if (e_0.key === "Enter") {
                                                e_0.preventDefault();
                                                handleFetchFromUrl();
                                            }
                                        },
                                        placeholder: "https://www.google.com/maps/@30.05,31.24,15z",
                                        className: "flex-1 bg-white dark:bg-neutral-950 text-xs h-9 border-gray-300 dark:border-neutral-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleFetchFromUrl,
                                        disabled: isFetchingFromUrl || !googleMapsUrl.trim(),
                                        className: "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 text-gray-800 dark:text-gray-200 text-xs font-medium px-4 h-9 rounded-md shadow-none transition-colors shrink-0 flex items-center gap-1.5",
                                        children: [
                                            isFetchingFromUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-3.5 w-3.5 animate-spin text-teal-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                                lineNumber: 300,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isAr ? "توليد" : "Generate"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-gray-400 dark:text-gray-500",
                                children: isAr ? "الصق رابط خرائط جوجل وسنقوم بملء خط الطول ودوائر العرض تلقائياً." : "Paste a Google Maps link and we'll fill latitude/longitude automatically."
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                children: isAr ? "الموقع على الخريطة" : "Location on Map"
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-gray-500 dark:text-gray-400 pb-1",
                                children: isAr ? "انقر فوق الخريطة لتحديد الموقع، أو اسحب الدبوس للضبط الدقيق." : "Click the map to set the location, or drag the pin to fine-tune."
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$InteractiveMapPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveMapPicker"], {
                                latitude: mapCoords?.lat,
                                longitude: mapCoords?.lng,
                                onLocationSelect: handleMapSelect,
                                height: "h-[360px]",
                                attributionControl: true,
                                showControls: false,
                                showBadges: false
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "latitude_input",
                                        className: "text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1",
                                        children: isAr ? "خط العرض (Latitude)" : "Latitude"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "latitude_input",
                                        type: "text",
                                        value: latInput,
                                        onChange: (e_1)=>handleLatChange(e_1.target.value),
                                        placeholder: "30.0500000",
                                        className: "bg-white dark:bg-neutral-950 text-xs font-mono h-9 border-gray-300 dark:border-neutral-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "longitude_input",
                                        className: "text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1",
                                        children: isAr ? "خط الطول (Longitude)" : "Longitude"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "longitude_input",
                                        type: "text",
                                        value: lngInput,
                                        onChange: (e_2)=>handleLngChange(e_2.target.value),
                                        placeholder: "31.2400000",
                                        className: "bg-white dark:bg-neutral-950 text-xs font-mono h-9 border-gray-300 dark:border-neutral-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 border-t border-gray-100 dark:border-neutral-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "zone_name",
                                            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                            children: t("properties.create.license.zoneName")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "zone_name",
                                            ...register("zone_name"),
                                            placeholder: t("properties.create.license.zoneName"),
                                            className: "mt-1 text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "city_name",
                                            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                            children: t("properties.create.location.city")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "city_name",
                                            ...register("city_name"),
                                            placeholder: t("properties.create.location.cityPlaceholder"),
                                            className: "mt-1 text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "area_name",
                                            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                            children: t("properties.create.location.area")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "area_name",
                                            ...register("area_name"),
                                            placeholder: t("properties.create.location.areaPlaceholder"),
                                            className: "mt-1 text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "landmark",
                                            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                            children: t("properties.create.location.landmark")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "landmark",
                                            ...register("landmark"),
                                            placeholder: t("properties.create.location.landmarkPlaceholder"),
                                            className: "mt-1 text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-gray-100 dark:border-neutral-800 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-gray-900 dark:text-gray-100",
                                        children: t("properties.create.location.nearbyTitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                        children: t("properties.create.location.nearbySubtitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                onClick: handleAddPoint,
                                className: "gap-1.5 text-xs text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/50 shadow-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, this),
                                    t("properties.create.location.addNearby")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: nearbyPoints.map((point, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: point.name,
                                            onChange: (e_3)=>handleUpdatePoint(index_1, "name", e_3.target.value),
                                            placeholder: t("properties.create.location.destinationPlaceholder"),
                                            className: "text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-36 sm:w-44",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: point.distance,
                                            onChange: (e_4)=>handleUpdatePoint(index_1, "distance", e_4.target.value),
                                            placeholder: t("properties.create.location.distancePlaceholder"),
                                            className: "text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 395,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: ()=>handleRemovePoint(index_1),
                                        className: "h-9 w-9 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index_1, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 390,
                                columnNumber: 49
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                register: register,
                setValue: setValue,
                watch: watch
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
        lineNumber: 263,
        columnNumber: 10
    }, this);
}
_s(LocationTab, "zyUh6gKgmO8sLgVZpRgIyWBYdWw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LocationTab;
var _c;
__turbopack_context__.k.register(_c, "LocationTab");
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
    if ($[0] !== "131defe38b2c408d35282d118a2c53fca224aae57d57a4f5f58a63132ce0704b") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "131defe38b2c408d35282d118a2c53fca224aae57d57a4f5f58a63132ce0704b";
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
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Skeleton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "d58dcb7d3606f712084eb295450fc6d49359563ef6b5b134b056a01e985f0e0b") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d58dcb7d3606f712084eb295450fc6d49359563ef6b5b134b056a01e985f0e0b";
    }
    let className;
    let height;
    let props;
    let t1;
    let width;
    if ($[1] !== t0) {
        ({ className, variant: t1, width, height, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = height;
        $[4] = props;
        $[5] = t1;
        $[6] = width;
    } else {
        className = $[2];
        height = $[3];
        props = $[4];
        t1 = $[5];
        width = $[6];
    }
    const variant = t1 === undefined ? "rectangular" : t1;
    const t2 = variant === "text" && "h-4 rounded";
    const t3 = variant === "circular" && "rounded-full";
    const t4 = variant === "rectangular" && "rounded-md";
    let t5;
    if ($[7] !== className || $[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse bg-gray-200", t2, t3, t4, className);
        $[7] = className;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== height || $[13] !== width) {
        t6 = {
            width,
            height
        };
        $[12] = height;
        $[13] = width;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== props || $[16] !== t5 || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            style: t6,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/skeleton.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[15] = props;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    return t7;
}
_c = Skeleton;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AmenitiesTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/services/AdminPropertiesService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/SeoSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
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
function AmenitiesTab(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(136);
    if ($[0] !== "f3ffbda23325aafbbbb41f4d537db122f55e09b901d05682093b9d8ff3253455") {
        for(let $i = 0; $i < 136; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3ffbda23325aafbbbb41f4d537db122f55e09b901d05682093b9d8ff3253455";
    }
    const { register, setValue, watch, selectedFeatures: controlledSelectedFeatures, onChangeFeatures } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [internalSelected, setInternalSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const selectedFeatures = controlledSelectedFeatures ?? internalSelected;
    let t2;
    if ($[2] !== onChangeFeatures || $[3] !== selectedFeatures) {
        t2 = ({
            "AmenitiesTab[updateSelectedFeatures]": (updater)=>{
                const next = updater(selectedFeatures);
                if (onChangeFeatures) {
                    onChangeFeatures(next);
                } else {
                    setInternalSelected(next);
                }
            }
        })["AmenitiesTab[updateSelectedFeatures]"];
        $[2] = onChangeFeatures;
        $[3] = selectedFeatures;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const updateSelectedFeatures = t2;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            queryKey: [
                "available-features"
            ],
            queryFn: _temp,
            staleTime: 300000
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const { data: t4, isLoading, isError, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
    let t5;
    if ($[6] !== t4) {
        t5 = t4 === undefined ? [] : t4;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const allFeatures = t5;
    let t6;
    if ($[8] !== activeTab || $[9] !== allFeatures || $[10] !== searchQuery) {
        let t7;
        if ($[12] !== activeTab || $[13] !== searchQuery) {
            t7 = ({
                "AmenitiesTab[allFeatures.filter()]": (f)=>{
                    const matchesTab = activeTab === "all" ? true : activeTab === "amenities" ? f.is_amenity === 1 : f.is_amenity === 0;
                    const matchesSearch = !searchQuery.trim() || f.feature_name.toLowerCase().includes(searchQuery.toLowerCase().trim());
                    return matchesTab && matchesSearch;
                }
            })["AmenitiesTab[allFeatures.filter()]"];
            $[12] = activeTab;
            $[13] = searchQuery;
            $[14] = t7;
        } else {
            t7 = $[14];
        }
        t6 = allFeatures.filter(t7);
        $[8] = activeTab;
        $[9] = allFeatures;
        $[10] = searchQuery;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const filteredFeatures = t6;
    let t7;
    if ($[15] !== allFeatures) {
        t7 = allFeatures.filter(_AmenitiesTabAllFeaturesFilter);
        $[15] = allFeatures;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    const amenitiesCount = t7.length;
    let t8;
    if ($[17] !== allFeatures) {
        t8 = allFeatures.filter(_AmenitiesTabAllFeaturesFilter2);
        $[17] = allFeatures;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    const featuresOnlyCount = t8.length;
    const selectedCount = selectedFeatures.length;
    let t9;
    if ($[19] !== allFeatures || $[20] !== selectedFeatures) {
        let t10;
        if ($[22] !== allFeatures) {
            t10 = ({
                "AmenitiesTab[selectedFeatures.filter()]": (sf)=>{
                    const found = allFeatures.find({
                        "AmenitiesTab[selectedFeatures.filter() > allFeatures.find()]": (f_2)=>f_2.feature_id === sf.feature_id
                    }["AmenitiesTab[selectedFeatures.filter() > allFeatures.find()]"]);
                    return found ? found.is_amenity === 1 : sf.is_amenity === 1;
                }
            })["AmenitiesTab[selectedFeatures.filter()]"];
            $[22] = allFeatures;
            $[23] = t10;
        } else {
            t10 = $[23];
        }
        t9 = selectedFeatures.filter(t10);
        $[19] = allFeatures;
        $[20] = selectedFeatures;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    const selectedAmenitiesCount = t9.length;
    const selectedFeaturesOnlyCount = selectedCount - selectedAmenitiesCount;
    let t10;
    if ($[24] !== updateSelectedFeatures) {
        t10 = ({
            "AmenitiesTab[toggleFeature]": (feature)=>{
                updateSelectedFeatures({
                    "AmenitiesTab[toggleFeature > updateSelectedFeatures()]": (prev)=>{
                        const exists = prev.some({
                            "AmenitiesTab[toggleFeature > updateSelectedFeatures() > prev.some()]": (item)=>item.feature_id === feature.feature_id
                        }["AmenitiesTab[toggleFeature > updateSelectedFeatures() > prev.some()]"]);
                        if (exists) {
                            return prev.filter({
                                "AmenitiesTab[toggleFeature > updateSelectedFeatures() > prev.filter()]": (item_0)=>item_0.feature_id !== feature.feature_id
                            }["AmenitiesTab[toggleFeature > updateSelectedFeatures() > prev.filter()]"]);
                        }
                        return [
                            ...prev,
                            {
                                feature_id: feature.feature_id,
                                value: feature.feature_name,
                                feature_name: feature.feature_name,
                                is_amenity: feature.is_amenity,
                                icons: feature.icons
                            }
                        ];
                    }
                }["AmenitiesTab[toggleFeature > updateSelectedFeatures()]"]);
            }
        })["AmenitiesTab[toggleFeature]"];
        $[24] = updateSelectedFeatures;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    const toggleFeature = t10;
    let t11;
    if ($[26] !== filteredFeatures || $[27] !== updateSelectedFeatures) {
        t11 = ({
            "AmenitiesTab[selectAllFiltered]": ()=>{
                updateSelectedFeatures({
                    "AmenitiesTab[selectAllFiltered > updateSelectedFeatures()]": (prev_0)=>{
                        const prevIds = new Set(prev_0.map(_AmenitiesTabSelectAllFilteredUpdateSelectedFeaturesPrev_0Map));
                        const newAdditions = filteredFeatures.filter({
                            "AmenitiesTab[selectAllFiltered > updateSelectedFeatures() > filteredFeatures.filter()]": (f_3)=>!prevIds.has(f_3.feature_id)
                        }["AmenitiesTab[selectAllFiltered > updateSelectedFeatures() > filteredFeatures.filter()]"]).map(_AmenitiesTabSelectAllFilteredUpdateSelectedFeaturesAnonymous);
                        return [
                            ...prev_0,
                            ...newAdditions
                        ];
                    }
                }["AmenitiesTab[selectAllFiltered > updateSelectedFeatures()]"]);
            }
        })["AmenitiesTab[selectAllFiltered]"];
        $[26] = filteredFeatures;
        $[27] = updateSelectedFeatures;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    const selectAllFiltered = t11;
    let t12;
    if ($[29] !== filteredFeatures || $[30] !== updateSelectedFeatures) {
        t12 = ({
            "AmenitiesTab[clearFiltered]": ()=>{
                const filteredIds = new Set(filteredFeatures.map(_AmenitiesTabClearFilteredFilteredFeaturesMap));
                updateSelectedFeatures({
                    "AmenitiesTab[clearFiltered > updateSelectedFeatures()]": (prev_1)=>prev_1.filter({
                            "AmenitiesTab[clearFiltered > updateSelectedFeatures() > prev_1.filter()]": (p_0)=>!filteredIds.has(p_0.feature_id)
                        }["AmenitiesTab[clearFiltered > updateSelectedFeatures() > prev_1.filter()]"])
                }["AmenitiesTab[clearFiltered > updateSelectedFeatures()]"]);
            }
        })["AmenitiesTab[clearFiltered]"];
        $[29] = filteredFeatures;
        $[30] = updateSelectedFeatures;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    const clearFiltered = t12;
    let t13;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "w-5 h-5 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== t) {
        t14 = t("properties.create.amenities.title");
        $[33] = t;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[35] = t14;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== t) {
        t16 = t("properties.create.amenities.subtitle");
        $[37] = t;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    let t17;
    if ($[39] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t15 || $[42] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[41] = t15;
        $[42] = t17;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== selectedAmenitiesCount || $[45] !== selectedCount || $[46] !== selectedFeaturesOnlyCount || $[47] !== t) {
        t19 = t("properties.create.amenities.selectedSummary", {
            selected: selectedCount,
            amenities: selectedAmenitiesCount,
            features: selectedFeaturesOnlyCount
        });
        $[44] = selectedAmenitiesCount;
        $[45] = selectedCount;
        $[46] = selectedFeaturesOnlyCount;
        $[47] = t;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "outline",
                className: "bg-teal-50/60 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800 font-medium px-2.5 py-1 text-xs",
                children: t19
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                lineNumber: 311,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 311,
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
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-neutral-800 pb-4",
            children: [
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[51] = t18;
        $[52] = t20;
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = ({
            "AmenitiesTab[<button>.onClick]": ()=>setActiveTab("all")
        })["AmenitiesTab[<button>.onClick]"];
        $[54] = t22;
    } else {
        t22 = $[54];
    }
    const t23 = `px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "all" ? "bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 shadow-2xs font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t24;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    let t25;
    if ($[56] !== t) {
        t25 = t("common.all");
        $[56] = t;
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    let t26;
    if ($[58] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[58] = t25;
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[60] !== allFeatures.length) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] px-1.5 py-0.2 bg-gray-200 dark:bg-neutral-700 rounded-full",
            children: allFeatures.length
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[60] = allFeatures.length;
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] !== t23 || $[63] !== t26 || $[64] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t22,
            className: t23,
            children: [
                t24,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[62] = t23;
        $[63] = t26;
        $[64] = t27;
        $[65] = t28;
    } else {
        t28 = $[65];
    }
    let t29;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = ({
            "AmenitiesTab[<button>.onClick]": ()=>setActiveTab("amenities")
        })["AmenitiesTab[<button>.onClick]"];
        $[66] = t29;
    } else {
        t29 = $[66];
    }
    const t30 = `px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "amenities" ? "bg-white dark:bg-neutral-900 text-teal-700 dark:text-teal-300 shadow-2xs font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t31;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
            className: "w-3.5 h-3.5 text-teal-500"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[67] = t31;
    } else {
        t31 = $[67];
    }
    let t32;
    if ($[68] !== t) {
        t32 = t("properties.create.amenities.filterAmenities");
        $[68] = t;
        $[69] = t32;
    } else {
        t32 = $[69];
    }
    let t33;
    if ($[70] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[70] = t32;
        $[71] = t33;
    } else {
        t33 = $[71];
    }
    let t34;
    if ($[72] !== amenitiesCount) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] px-1.5 py-0.2 bg-gray-200 dark:bg-neutral-700 rounded-full",
            children: amenitiesCount
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[72] = amenitiesCount;
        $[73] = t34;
    } else {
        t34 = $[73];
    }
    let t35;
    if ($[74] !== t30 || $[75] !== t33 || $[76] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t29,
            className: t30,
            children: [
                t31,
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[74] = t30;
        $[75] = t33;
        $[76] = t34;
        $[77] = t35;
    } else {
        t35 = $[77];
    }
    let t36;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = ({
            "AmenitiesTab[<button>.onClick]": ()=>setActiveTab("features")
        })["AmenitiesTab[<button>.onClick]"];
        $[78] = t36;
    } else {
        t36 = $[78];
    }
    const t37 = `px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "features" ? "bg-white dark:bg-neutral-900 text-indigo-700 dark:text-indigo-300 shadow-2xs font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t38;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "w-3.5 h-3.5 text-indigo-500"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[79] = t38;
    } else {
        t38 = $[79];
    }
    let t39;
    if ($[80] !== t) {
        t39 = t("properties.create.amenities.filterFeatures");
        $[80] = t;
        $[81] = t39;
    } else {
        t39 = $[81];
    }
    let t40;
    if ($[82] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t39
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 455,
            columnNumber: 11
        }, this);
        $[82] = t39;
        $[83] = t40;
    } else {
        t40 = $[83];
    }
    let t41;
    if ($[84] !== featuresOnlyCount) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] px-1.5 py-0.2 bg-gray-200 dark:bg-neutral-700 rounded-full",
            children: featuresOnlyCount
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[84] = featuresOnlyCount;
        $[85] = t41;
    } else {
        t41 = $[85];
    }
    let t42;
    if ($[86] !== t37 || $[87] !== t40 || $[88] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t36,
            className: t37,
            children: [
                t38,
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[86] = t37;
        $[87] = t40;
        $[88] = t41;
        $[89] = t42;
    } else {
        t42 = $[89];
    }
    let t43;
    if ($[90] !== t28 || $[91] !== t35 || $[92] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 p-1 bg-gray-100/80 dark:bg-neutral-800/80 rounded-lg w-fit",
            children: [
                t28,
                t35,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[90] = t28;
        $[91] = t35;
        $[92] = t42;
        $[93] = t43;
    } else {
        t43 = $[93];
    }
    let t44;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "w-4 h-4 text-gray-400 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[94] = t44;
    } else {
        t44 = $[94];
    }
    let t45;
    if ($[95] !== t) {
        t45 = t("properties.create.amenities.searchFeatures");
        $[95] = t;
        $[96] = t45;
    } else {
        t45 = $[96];
    }
    let t46;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = ({
            "AmenitiesTab[<Input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["AmenitiesTab[<Input>.onChange]"];
        $[97] = t46;
    } else {
        t46 = $[97];
    }
    let t47;
    if ($[98] !== searchQuery || $[99] !== t45) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            type: "text",
            placeholder: t45,
            value: searchQuery,
            onChange: t46,
            className: "ps-9 pe-8 h-9 text-xs dark:bg-neutral-900 dark:border-neutral-700"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        $[98] = searchQuery;
        $[99] = t45;
        $[100] = t47;
    } else {
        t47 = $[100];
    }
    let t48;
    if ($[101] !== searchQuery) {
        t48 = searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "AmenitiesTab[<button>.onClick]": ()=>setSearchQuery("")
            }["AmenitiesTab[<button>.onClick]"],
            className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-3.5 h-3.5"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                lineNumber: 526,
                columnNumber: 161
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 524,
            columnNumber: 26
        }, this);
        $[101] = searchQuery;
        $[102] = t48;
    } else {
        t48 = $[102];
    }
    let t49;
    if ($[103] !== t47 || $[104] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full sm:w-64",
            children: [
                t44,
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, this);
        $[103] = t47;
        $[104] = t48;
        $[105] = t49;
    } else {
        t49 = $[105];
    }
    let t50;
    if ($[106] !== clearFiltered || $[107] !== filteredFeatures.length || $[108] !== selectAllFiltered || $[109] !== t) {
        t50 = filteredFeatures.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 shrink-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: selectAllFiltered,
                    className: "h-9 text-xs px-2.5 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800",
                    children: t("properties.create.amenities.selectAll")
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 543,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    onClick: clearFiltered,
                    className: "h-9 text-xs px-2.5 text-gray-500 hover:text-red-600 dark:hover:text-red-400",
                    children: t("properties.create.amenities.clear")
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 543,
                    columnNumber: 323
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 543,
            columnNumber: 42
        }, this);
        $[106] = clearFiltered;
        $[107] = filteredFeatures.length;
        $[108] = selectAllFiltered;
        $[109] = t;
        $[110] = t50;
    } else {
        t50 = $[110];
    }
    let t51;
    if ($[111] !== t49 || $[112] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 554,
            columnNumber: 11
        }, this);
        $[111] = t49;
        $[112] = t50;
        $[113] = t51;
    } else {
        t51 = $[113];
    }
    let t52;
    if ($[114] !== t43 || $[115] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-center justify-between gap-3",
            children: [
                t43,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 563,
            columnNumber: 11
        }, this);
        $[114] = t43;
        $[115] = t51;
        $[116] = t52;
    } else {
        t52 = $[116];
    }
    let t53;
    if ($[117] !== filteredFeatures || $[118] !== isError || $[119] !== isLoading || $[120] !== refetch || $[121] !== selectedFeatures || $[122] !== t || $[123] !== toggleFeature) {
        t53 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-2",
            children: Array.from({
                length: 18
            }).map(_AmenitiesTabAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 572,
            columnNumber: 23
        }, this) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-center rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium",
                    children: t("properties.create.amenities.loadFailed")
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 574,
                    columnNumber: 209
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    onClick: {
                        "AmenitiesTab[<Button>.onClick]": ()=>refetch()
                    }["AmenitiesTab[<Button>.onClick]"],
                    className: "mt-2 text-xs border-red-300 dark:border-red-800 hover:bg-red-100/50 dark:hover:bg-red-900/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "w-3.5 h-3.5 me-1"
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                            lineNumber: 576,
                            columnNumber: 149
                        }, this),
                        t("properties.create.amenities.retry")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 574,
                    columnNumber: 293
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 574,
            columnNumber: 57
        }, this) : filteredFeatures.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-8 text-center text-gray-500 dark:text-gray-400 border border-dashed border-gray-200 dark:border-neutral-800 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                    className: "w-6 h-6 mx-auto mb-2 text-gray-300 dark:text-neutral-600"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 576,
                    columnNumber: 420
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs sm:text-sm font-medium",
                    children: t("properties.create.amenities.noResults")
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 576,
                    columnNumber: 499
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 576,
            columnNumber: 281
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-1 max-h-[360px] overflow-y-auto pe-1",
            children: filteredFeatures.map({
                "AmenitiesTab[filteredFeatures.map()]": (feature_0)=>{
                    const isSelected = selectedFeatures.some({
                        "AmenitiesTab[filteredFeatures.map() > selectedFeatures.some()]": (sf_0)=>sf_0.feature_id === feature_0.feature_id
                    }["AmenitiesTab[filteredFeatures.map() > selectedFeatures.some()]"]);
                    const isAmenity = feature_0.is_amenity === 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "AmenitiesTab[filteredFeatures.map() > <button>.onClick]": ()=>toggleFeature(feature_0)
                        }["AmenitiesTab[filteredFeatures.map() > <button>.onClick]"],
                        className: `group relative flex items-center justify-between gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer select-none text-start text-balance ${isSelected ? isAmenity ? "bg-teal-50 border-teal-500 text-teal-900 dark:bg-teal-950/40 dark:border-teal-500 dark:text-teal-200 shadow-2xs" : "bg-indigo-50 border-indigo-500 text-indigo-900 dark:bg-indigo-950/40 dark:border-indigo-500 dark:text-indigo-200 shadow-2xs" : "bg-white dark:bg-neutral-900/90 border-gray-200 dark:border-neutral-700/80 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800/60"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0 text-sm leading-none",
                                        children: feature_0.icons || (isAmenity ? "\uD83C\uDFCA" : "\u2728")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                                        lineNumber: 584,
                                        columnNumber: 789
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        title: feature_0.feature_name,
                                        children: feature_0.feature_name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                                        lineNumber: 584,
                                        columnNumber: 904
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                                lineNumber: 584,
                                columnNumber: 738
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-all ${isSelected ? isAmenity ? "bg-teal-600 text-white" : "bg-indigo-600 text-white" : "border border-gray-300 dark:border-neutral-600 opacity-40 group-hover:opacity-100"}`,
                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-2.5 h-2.5 stroke-[3]"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                                    lineNumber: 584,
                                    columnNumber: 1280
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                                lineNumber: 584,
                                columnNumber: 999
                            }, this)
                        ]
                    }, feature_0.feature_id, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                        lineNumber: 582,
                        columnNumber: 18
                    }, this);
                }
            }["AmenitiesTab[filteredFeatures.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 576,
            columnNumber: 602
        }, this);
        $[117] = filteredFeatures;
        $[118] = isError;
        $[119] = isLoading;
        $[120] = refetch;
        $[121] = selectedFeatures;
        $[122] = t;
        $[123] = toggleFeature;
        $[124] = t53;
    } else {
        t53 = $[124];
    }
    let t54;
    if ($[125] !== t21 || $[126] !== t52 || $[127] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs",
            children: [
                t21,
                t52,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 600,
            columnNumber: 11
        }, this);
        $[125] = t21;
        $[126] = t52;
        $[127] = t53;
        $[128] = t54;
    } else {
        t54 = $[128];
    }
    let t55;
    if ($[129] !== register || $[130] !== setValue || $[131] !== watch) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 610,
            columnNumber: 11
        }, this);
        $[129] = register;
        $[130] = setValue;
        $[131] = watch;
        $[132] = t55;
    } else {
        t55 = $[132];
    }
    let t56;
    if ($[133] !== t54 || $[134] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t54,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[133] = t54;
        $[134] = t55;
        $[135] = t56;
    } else {
        t56 = $[135];
    }
    return t56;
}
_s(AmenitiesTab, "HWZiO568pQkBKnlLHNf/TlhgdKU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = AmenitiesTab;
function _AmenitiesTabAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "h-9 rounded-lg"
    }, i, false, {
        fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
        lineNumber: 630,
        columnNumber: 10
    }, this);
}
function _AmenitiesTabClearFilteredFilteredFeaturesMap(f_5) {
    return f_5.feature_id;
}
function _AmenitiesTabSelectAllFilteredUpdateSelectedFeaturesAnonymous(f_4) {
    return {
        feature_id: f_4.feature_id,
        value: f_4.feature_name,
        feature_name: f_4.feature_name,
        is_amenity: f_4.is_amenity,
        icons: f_4.icons
    };
}
function _AmenitiesTabSelectAllFilteredUpdateSelectedFeaturesPrev_0Map(p) {
    return p.feature_id;
}
function _AmenitiesTabAllFeaturesFilter2(f_1) {
    return f_1.is_amenity === 0;
}
function _AmenitiesTabAllFeaturesFilter(f_0) {
    return f_0.is_amenity === 1;
}
function _temp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].getAvailableFeatures();
}
var _c;
__turbopack_context__.k.register(_c, "AmenitiesTab");
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
    if ($[0] !== "d7b49e75f92e69e1d895011b01901586acc72b9466682bd58ad00187f6c9352b") {
        for(let $i = 0; $i < 118; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d7b49e75f92e69e1d895011b01901586acc72b9466682bd58ad00187f6c9352b";
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
        t4 = initialData ? t("properties.create.paymentPlans.editPlanTitle") : t("properties.create.paymentPlans.addPlanTitle");
        $[16] = initialData;
        $[17] = t;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    let t5;
    if ($[19] !== t) {
        t5 = t("properties.create.paymentPlans.modalDescription");
        $[19] = t;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    let t6;
    if ($[21] !== t) {
        t6 = t("properties.create.paymentPlans.planName");
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
        t11 = t("properties.create.paymentPlans.description");
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
        t16 = t("properties.create.paymentPlans.downPayment");
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
        t23 = t("properties.create.paymentPlans.onHandover");
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
        t30 = t("properties.create.paymentPlans.installmentsCount");
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
        t35 = t("properties.create.paymentPlans.period");
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
        t42 = t("common.cancel");
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
        t44 = initialData ? t("common.saveChanges") || "Save Changes" : t("properties.create.paymentPlans.addPlanBtn");
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
"[project]/src/features/properties/components/create/tabs/payment-plans/payment-plans.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAYMENT_PERIOD_OPTIONS",
    ()=>PAYMENT_PERIOD_OPTIONS,
    "PRESET_PLAN_TEMPLATES",
    ()=>PRESET_PLAN_TEMPLATES,
    "getPaymentPeriodLabel",
    ()=>getPaymentPeriodLabel
]);
const PAYMENT_PERIOD_OPTIONS = [
    {
        value: "Monthly",
        labelKey: "properties.create.paymentPlans.periods.monthly"
    },
    {
        value: "Quarterly",
        labelKey: "properties.create.paymentPlans.periods.quarterly"
    },
    {
        value: "Semi-Annually",
        labelKey: "properties.create.paymentPlans.periods.semiAnnually"
    },
    {
        value: "Yearly",
        labelKey: "properties.create.paymentPlans.periods.yearly"
    },
    {
        value: "During Construction",
        labelKey: "properties.create.paymentPlans.periods.duringConstruction"
    },
    {
        value: "Post Handover (2 Years)",
        labelKey: "properties.create.paymentPlans.periods.postHandover2"
    },
    {
        value: "Post Handover (3 Years)",
        labelKey: "properties.create.paymentPlans.periods.postHandover3"
    },
    {
        value: "Immediate",
        labelKey: "properties.create.paymentPlans.periods.immediate"
    }
];
function getPaymentPeriodLabel(period, t) {
    const option = PAYMENT_PERIOD_OPTIONS.find((o)=>o.value === period);
    return option ? t(option.labelKey) : period;
}
const PRESET_PLAN_TEMPLATES = [
    {
        id: "plan_50_50",
        name: "50/50 On Handover",
        nameKey: "properties.create.paymentPlans.presets.plan50_50",
        description: "20% Down payment, 30% during construction, 50% on handover",
        descriptionKey: "properties.create.paymentPlans.presetDescriptions.plan50_50",
        down_payment_percentage: 20,
        installments_count: 4,
        period: "Quarterly",
        handover_percentage: 50
    },
    {
        id: "plan_60_40",
        name: "60/40 Payment Plan",
        nameKey: "properties.create.paymentPlans.presets.plan60_40",
        description: "20% Down payment, 40% during construction, 40% on handover",
        descriptionKey: "properties.create.paymentPlans.presetDescriptions.plan60_40",
        down_payment_percentage: 20,
        installments_count: 6,
        period: "Quarterly",
        handover_percentage: 40
    },
    {
        id: "plan_70_30",
        name: "70/30 Standard",
        nameKey: "properties.create.paymentPlans.presets.plan70_30",
        description: "15% Down payment, 55% during construction, 30% on handover",
        descriptionKey: "properties.create.paymentPlans.presetDescriptions.plan70_30",
        down_payment_percentage: 15,
        installments_count: 8,
        period: "Quarterly",
        handover_percentage: 30
    },
    {
        id: "plan_80_20",
        name: "80/20 Post Handover (2 Yrs)",
        nameKey: "properties.create.paymentPlans.presets.plan80_20",
        description: "20% Down payment, 60% construction, 10% handover, 10% post-handover",
        descriptionKey: "properties.create.paymentPlans.presetDescriptions.plan80_20",
        down_payment_percentage: 20,
        installments_count: 12,
        period: "Monthly",
        handover_percentage: 10
    },
    {
        id: "plan_cash",
        name: "100% Cash / Lump Sum",
        nameKey: "properties.create.paymentPlans.presets.cash",
        description: "Full payment upfront with maximum discount",
        descriptionKey: "properties.create.paymentPlans.presetDescriptions.cash",
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "a7c5ac73e52bdc368188d37f24d0b81514f6d7c6b6a67bb88bd333ce5bdb41aa") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7c5ac73e52bdc368188d37f24d0b81514f6d7c6b6a67bb88bd333ce5bdb41aa";
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
        t6 = t("properties.create.paymentPlans.bulkAddTitle");
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
        t8 = t("properties.create.paymentPlans.bulkAddSubtitle");
        $[14] = t;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t) {
        t9 = t("properties.create.paymentPlans.availableTemplates");
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
        t16 = t("common.cancel");
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
    if ($[38] !== t) {
        t19 = t("properties.create.paymentPlans.addSelectedPlans");
        $[38] = t;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== handleConfirm || $[41] !== t18 || $[42] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            disabled: t18,
            onClick: handleConfirm,
            className: "bg-teal-600 hover:bg-teal-700 text-white text-xs h-8",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[40] = handleConfirm;
        $[41] = t18;
        $[42] = t19;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== t17 || $[45] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800",
            children: [
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[44] = t17;
        $[45] = t20;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== t13 || $[48] !== t15 || $[49] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-1",
            children: [
                t13,
                t15,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[47] = t13;
        $[48] = t15;
        $[49] = t21;
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    let t23;
    if ($[51] !== isOpen || $[52] !== onClose || $[53] !== t22 || $[54] !== t7 || $[55] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t7,
            description: t8,
            size: "xl",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[51] = isOpen;
        $[52] = onClose;
        $[53] = t22;
        $[54] = t7;
        $[55] = t8;
        $[56] = t23;
    } else {
        t23 = $[56];
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
"[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentPlansTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/SeoSection.tsx [app-client] (ecmascript)");
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
function PaymentPlansTab(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(68);
    if ($[0] !== "adc5184f2cf151c8e43757b98bd34852f7351f4d2062ab8c7b1e860a26efbcb1") {
        for(let $i = 0; $i < 68; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "adc5184f2cf151c8e43757b98bd34852f7351f4d2062ab8c7b1e860a26efbcb1";
    }
    const { register, setValue, watch, plans: externalPlans, setPlans: externalSetPlans } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [internalPlans, setInternalPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const plans = externalPlans ?? internalPlans;
    const setPlans = externalSetPlans ?? setInternalPlans;
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBulkModalOpen, setIsBulkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingPlan, setEditingPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[2] !== editingPlan || $[3] !== plans || $[4] !== setPlans || $[5] !== setValue) {
        t2 = ({
            "PaymentPlansTab[handleSavePlan]": (plan)=>{
                let next;
                if (editingPlan) {
                    next = plans.map({
                        "PaymentPlansTab[handleSavePlan > plans.map()]": (p)=>p.id === plan.id ? plan : p
                    }["PaymentPlansTab[handleSavePlan > plans.map()]"]);
                    setEditingPlan(null);
                } else {
                    next = [
                        ...plans,
                        plan
                    ];
                }
                setPlans(next);
                setValue?.("payment_plans", next, {
                    shouldDirty: true
                });
            }
        })["PaymentPlansTab[handleSavePlan]"];
        $[2] = editingPlan;
        $[3] = plans;
        $[4] = setPlans;
        $[5] = setValue;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleSavePlan = t2;
    let t3;
    if ($[7] !== plans || $[8] !== setPlans || $[9] !== setValue) {
        t3 = ({
            "PaymentPlansTab[handleAddBulkPlans]": (newPlans)=>{
                const next_0 = [
                    ...plans,
                    ...newPlans
                ];
                setPlans(next_0);
                setValue?.("payment_plans", next_0, {
                    shouldDirty: true
                });
            }
        })["PaymentPlansTab[handleAddBulkPlans]"];
        $[7] = plans;
        $[8] = setPlans;
        $[9] = setValue;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const handleAddBulkPlans = t3;
    let t4;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "PaymentPlansTab[handleEditPlan]": (plan_0)=>{
                setEditingPlan(plan_0);
                setIsAddModalOpen(true);
            }
        })["PaymentPlansTab[handleEditPlan]"];
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const handleEditPlan = t4;
    let t5;
    if ($[12] !== plans || $[13] !== setPlans || $[14] !== setValue) {
        t5 = ({
            "PaymentPlansTab[handleDeletePlan]": (id)=>{
                const next_1 = plans.filter({
                    "PaymentPlansTab[handleDeletePlan > plans.filter()]": (p_0)=>p_0.id !== id
                }["PaymentPlansTab[handleDeletePlan > plans.filter()]"]);
                setPlans(next_1);
                setValue?.("payment_plans", next_1, {
                    shouldDirty: true
                });
            }
        })["PaymentPlansTab[handleDeletePlan]"];
        $[12] = plans;
        $[13] = setPlans;
        $[14] = setValue;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const handleDeletePlan = t5;
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "PaymentPlansTab[handleOpenAddModal]": ()=>{
                setEditingPlan(null);
                setIsAddModalOpen(true);
            }
        })["PaymentPlansTab[handleOpenAddModal]"];
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    const handleOpenAddModal = t6;
    let t7;
    if ($[17] !== t) {
        t7 = t("properties.create.paymentPlans.title");
        $[17] = t;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== t) {
        t9 = t("properties.create.paymentPlans.subtitle");
        $[21] = t;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== t10 || $[26] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t8;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== handleDeletePlan || $[29] !== plans || $[30] !== t) {
        t12 = plans.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-dashed border-gray-200 dark:border-neutral-800 py-6 px-4 text-center text-xs text-gray-400 dark:text-gray-500",
            children: t("properties.create.paymentPlans.noPlans")
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 189,
            columnNumber: 32
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: plans.map({
                "PaymentPlansTab[plans.map()]": (plan_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                lineNumber: 190,
                                                columnNumber: 348
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] px-1.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-medium",
                                                children: [
                                                    plan_1.down_payment_percentage,
                                                    "% Down"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                lineNumber: 190,
                                                columnNumber: 448
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 190,
                                        columnNumber: 307
                                    }, this),
                                    plan_1.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-500 dark:text-gray-400",
                                        children: plan_1.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 190,
                                        columnNumber: 652
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
                                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                lineNumber: 190,
                                                columnNumber: 830
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                lineNumber: 190,
                                                columnNumber: 883
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Period: ",
                                                    plan_1.period
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                lineNumber: 190,
                                                columnNumber: 897
                                            }, this),
                                            plan_1.handover_percentage !== undefined && plan_1.handover_percentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 1014
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Handover: ",
                                                            plan_1.handover_percentage,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 1028
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 190,
                                        columnNumber: 737
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                lineNumber: 190,
                                columnNumber: 278
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: {
                                            "PaymentPlansTab[plans.map() > <Button>.onClick]": ()=>handleEditPlan(plan_1)
                                        }["PaymentPlansTab[plans.map() > <Button>.onClick]"],
                                        className: "h-7 w-7 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                            lineNumber: 192,
                                            columnNumber: 146
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 190,
                                        columnNumber: 1146
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: {
                                            "PaymentPlansTab[plans.map() > <Button>.onClick]": ()=>handleDeletePlan(plan_1.id)
                                        }["PaymentPlansTab[plans.map() > <Button>.onClick]"],
                                        className: "h-7 w-7 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                            lineNumber: 194,
                                            columnNumber: 161
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 192,
                                        columnNumber: 188
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                lineNumber: 190,
                                columnNumber: 1096
                            }, this)
                        ]
                    }, plan_1.id, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                        lineNumber: 190,
                        columnNumber: 51
                    }, this)
            }["PaymentPlansTab[plans.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 189,
            columnNumber: 238
        }, this);
        $[28] = handleDeletePlan;
        $[29] = plans;
        $[30] = t;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== t) {
        t14 = t("properties.create.paymentPlans.addPlan");
        $[33] = t;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: handleOpenAddModal,
            className: "gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[35] = t14;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "PaymentPlansTab[<Button>.onClick]": ()=>setIsBulkModalOpen(true)
        })["PaymentPlansTab[<Button>.onClick]"];
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "h-3.5 w-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t) {
        t18 = t("properties.create.paymentPlans.bulkAdd");
        $[39] = t;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: t16,
            className: "gap-1.5 text-xs h-7 sm:h-8 px-2.5 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 font-medium",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== t15 || $[44] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 pt-0.5",
            children: [
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[43] = t15;
        $[44] = t19;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== t11 || $[47] !== t12 || $[48] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-4 sm:p-5 space-y-3.5 shadow-2xs",
            children: [
                t11,
                t12,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[46] = t11;
        $[47] = t12;
        $[48] = t20;
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] !== register || $[51] !== setValue || $[52] !== watch) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[50] = register;
        $[51] = setValue;
        $[52] = watch;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "PaymentPlansTab[<AddPropertyPaymentPlanModal>.onClose]": ()=>{
                setIsAddModalOpen(false);
                setEditingPlan(null);
            }
        })["PaymentPlansTab[<AddPropertyPaymentPlanModal>.onClose]"];
        $[54] = t23;
    } else {
        t23 = $[54];
    }
    let t24;
    if ($[55] !== editingPlan || $[56] !== handleSavePlan || $[57] !== isAddModalOpen) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$AddPropertyPaymentPlanModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddPropertyPaymentPlanModal"], {
            isOpen: isAddModalOpen,
            onClose: t23,
            onSave: handleSavePlan,
            initialData: editingPlan
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[55] = editingPlan;
        $[56] = handleSavePlan;
        $[57] = isAddModalOpen;
        $[58] = t24;
    } else {
        t24 = $[58];
    }
    let t25;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "PaymentPlansTab[<BulkAddPropertyPaymentPlansModal>.onClose]": ()=>setIsBulkModalOpen(false)
        })["PaymentPlansTab[<BulkAddPropertyPaymentPlansModal>.onClose]"];
        $[59] = t25;
    } else {
        t25 = $[59];
    }
    let t26;
    if ($[60] !== handleAddBulkPlans || $[61] !== isBulkModalOpen) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$BulkAddPropertyPaymentPlansModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkAddPropertyPaymentPlansModal"], {
            isOpen: isBulkModalOpen,
            onClose: t25,
            onAddBulk: handleAddBulkPlans
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[60] = handleAddBulkPlans;
        $[61] = isBulkModalOpen;
        $[62] = t26;
    } else {
        t26 = $[62];
    }
    let t27;
    if ($[63] !== t21 || $[64] !== t22 || $[65] !== t24 || $[66] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3.5",
            children: [
                t21,
                t22,
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[63] = t21;
        $[64] = t22;
        $[65] = t24;
        $[66] = t26;
        $[67] = t27;
    } else {
        t27 = $[67];
    }
    return t27;
}
_s(PaymentPlansTab, "v1tEhBOX3vVWEHyXFwfeq4yVQFM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PaymentPlansTab;
var _c;
__turbopack_context__.k.register(_c, "PaymentPlansTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/properties/components/create/tabs/LicensesTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LicensesTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/SeoSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LicensesTab(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(113);
    if ($[0] !== "a2e92422549fb0f6a82ba0fe9ec306f2fc3756ebca2dd8055245049f737c825c") {
        for(let $i = 0; $i < 113; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a2e92422549fb0f6a82ba0fe9ec306f2fc3756ebca2dd8055245049f737c825c";
    }
    const { register, setValue, watch } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t1;
    if ($[1] !== t) {
        t1 = t("properties.create.license.title");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t) {
        t3 = t("properties.create.license.subtitle");
        $[5] = t;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t2 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t) {
        t6 = t("properties.create.license.brokerLicense");
        $[12] = t;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "broker_license",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== register) {
        t8 = register("broker_license");
        $[16] = register;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t) {
        t9 = t("properties.create.license.brokerLicense");
        $[18] = t;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t8 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "broker_license",
            ...t8,
            placeholder: t9,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 106,
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
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t7;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t) {
        t12 = t("properties.create.license.agentLicense");
        $[26] = t;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "agent_license",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== register) {
        t14 = register("agent_license");
        $[30] = register;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t) {
        t15 = t("properties.create.license.agentLicense");
        $[32] = t;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t14 || $[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "agent_license",
            ...t14,
            placeholder: t15,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[34] = t14;
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t13 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[37] = t13;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t) {
        t18 = t("properties.create.license.dldPermitNumber");
        $[40] = t;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "dld_permit_number",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[42] = t18;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== register) {
        t20 = register("dld_permit_number");
        $[44] = register;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== t) {
        t21 = t("properties.create.license.dldPermitNumber");
        $[46] = t;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== t20 || $[49] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "dld_permit_number",
            ...t20,
            placeholder: t21,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[48] = t20;
        $[49] = t21;
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    let t23;
    if ($[51] !== t19 || $[52] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[51] = t19;
        $[52] = t22;
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    let t24;
    if ($[54] !== t) {
        t24 = t("properties.create.license.dldBarcode");
        $[54] = t;
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    let t25;
    if ($[56] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "dld_barcode",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[56] = t24;
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    let t26;
    if ($[58] !== register) {
        t26 = register("dld_barcode");
        $[58] = register;
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[60] !== t) {
        t27 = t("properties.create.license.dldBarcode");
        $[60] = t;
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] !== t26 || $[63] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "dld_barcode",
            ...t26,
            placeholder: t27,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[62] = t26;
        $[63] = t27;
        $[64] = t28;
    } else {
        t28 = $[64];
    }
    let t29;
    if ($[65] !== t25 || $[66] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t25,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[65] = t25;
        $[66] = t28;
        $[67] = t29;
    } else {
        t29 = $[67];
    }
    let t30;
    if ($[68] !== t) {
        t30 = t("properties.create.license.referenceListed");
        $[68] = t;
        $[69] = t30;
    } else {
        t30 = $[69];
    }
    let t31;
    if ($[70] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "reference_listed",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[70] = t30;
        $[71] = t31;
    } else {
        t31 = $[71];
    }
    let t32;
    if ($[72] !== register) {
        t32 = register("reference_listed");
        $[72] = register;
        $[73] = t32;
    } else {
        t32 = $[73];
    }
    let t33;
    if ($[74] !== t) {
        t33 = t("properties.create.license.referenceListed");
        $[74] = t;
        $[75] = t33;
    } else {
        t33 = $[75];
    }
    let t34;
    if ($[76] !== t32 || $[77] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "reference_listed",
            ...t32,
            placeholder: t33,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[76] = t32;
        $[77] = t33;
        $[78] = t34;
    } else {
        t34 = $[78];
    }
    let t35;
    if ($[79] !== t31 || $[80] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[79] = t31;
        $[80] = t34;
        $[81] = t35;
    } else {
        t35 = $[81];
    }
    let t36;
    if ($[82] !== t) {
        t36 = t("properties.create.license.parkingSpaces");
        $[82] = t;
        $[83] = t36;
    } else {
        t36 = $[83];
    }
    let t37;
    if ($[84] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "parking_spaces",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[84] = t36;
        $[85] = t37;
    } else {
        t37 = $[85];
    }
    let t38;
    if ($[86] !== register) {
        t38 = register("parking_spaces", {
            valueAsNumber: true
        });
        $[86] = register;
        $[87] = t38;
    } else {
        t38 = $[87];
    }
    let t39;
    if ($[88] !== t) {
        t39 = t("properties.create.license.parkingSpacesPlaceholder") || "e.g., 1 or 2";
        $[88] = t;
        $[89] = t39;
    } else {
        t39 = $[89];
    }
    let t40;
    if ($[90] !== t38 || $[91] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "parking_spaces",
            type: "number",
            ...t38,
            placeholder: t39,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[90] = t38;
        $[91] = t39;
        $[92] = t40;
    } else {
        t40 = $[92];
    }
    let t41;
    if ($[93] !== t37 || $[94] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t37,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[93] = t37;
        $[94] = t40;
        $[95] = t41;
    } else {
        t41 = $[95];
    }
    let t42;
    if ($[96] !== t11 || $[97] !== t17 || $[98] !== t23 || $[99] !== t29 || $[100] !== t35 || $[101] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                t11,
                t17,
                t23,
                t29,
                t35,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[96] = t11;
        $[97] = t17;
        $[98] = t23;
        $[99] = t29;
        $[100] = t35;
        $[101] = t41;
        $[102] = t42;
    } else {
        t42 = $[102];
    }
    let t43;
    if ($[103] !== t42 || $[104] !== t5) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t5,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[103] = t42;
        $[104] = t5;
        $[105] = t43;
    } else {
        t43 = $[105];
    }
    let t44;
    if ($[106] !== register || $[107] !== setValue || $[108] !== watch) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[106] = register;
        $[107] = setValue;
        $[108] = watch;
        $[109] = t44;
    } else {
        t44 = $[109];
    }
    let t45;
    if ($[110] !== t43 || $[111] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[110] = t43;
        $[111] = t44;
        $[112] = t45;
    } else {
        t45 = $[112];
    }
    return t45;
}
_s(LicensesTab, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LicensesTab;
var _c;
__turbopack_context__.k.register(_c, "LicensesTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/properties/create/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreatePropertyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$validators$2f$propertiesSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/validators/propertiesSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-property-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$property$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-create-property.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/services/AdminPropertiesService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$PropertyPageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/PropertyPageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$BasicInfoTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$PricingMediaTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$UnitDetailsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$LocationTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/LocationTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$AmenitiesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$PaymentPlansTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$LicensesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/LicensesTab.tsx [app-client] (ecmascript)");
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
;
;
const TABS = [
    {
        id: "basic_info",
        labelAr: "المعلومات الأساسية",
        translationKey: "properties.create.tabs.basicInfo",
        fields: [
            "property_name",
            "property_no",
            "project_id",
            "property_type_id",
            "property_subtype_id",
            "availability_status",
            "construction_status",
            "status",
            "building_name",
            "description",
            "slug",
            "meta_title",
            "meta_description"
        ]
    },
    {
        id: "pricing_media",
        labelAr: "التسعير والصور",
        translationKey: "properties.create.tabs.pricingMedia",
        fields: [
            "price",
            "currency",
            "price_per_m2",
            "price_description"
        ]
    },
    {
        id: "unit_details",
        labelAr: "تفاصيل الوحدة",
        translationKey: "properties.create.tabs.unitDetails",
        fields: [
            "size",
            "bedrooms",
            "bathrooms",
            "floor",
            "view",
            "finishing_status",
            "furnish_status",
            "ownership_type",
            "plot_size",
            "bua_size",
            "maid_room"
        ]
    },
    {
        id: "location",
        labelAr: "الموقع",
        translationKey: "properties.create.tabs.location",
        fields: [
            "zone_name",
            "city_name",
            "area_name",
            "landmark",
            "maps_url",
            "latitude",
            "longitude"
        ]
    },
    {
        id: "amenities",
        labelAr: "المرافق",
        translationKey: "properties.create.tabs.amenities",
        fields: []
    },
    {
        id: "payment_plans",
        labelAr: "خطط السداد",
        translationKey: "properties.create.tabs.paymentPlans",
        fields: []
    },
    {
        id: "licenses",
        labelAr: "التراخيص",
        translationKey: "properties.create.tabs.licenses",
        fields: [
            "broker_license",
            "agent_license",
            "dld_permit_number",
            "dld_barcode",
            "reference_listed",
            "parking_spaces"
        ]
    }
];
function CreatePropertyPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("basic_info");
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imagePreviews, setImagePreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [floorPlan, setFloorPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [floorPlanPreview, setFloorPlanPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedFeatures, setSelectedFeatures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [paymentPlans, setPaymentPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { register, handleSubmit, control, trigger, setValue, setError, watch, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$validators$2f$propertiesSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertiesSchema"]),
        defaultValues: {
            maid_room: false,
            currency: "aed",
            payment_plans: []
        }
    });
    const { data: propertiesType = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertyTypes"])();
    const { data: propertiesSubtype = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertySubtypes"])();
    const { data: projects = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectsForSelect"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { createProperty, isCreating } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$property$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const currentTabIndex = TABS.findIndex((tab)=>tab.id === activeTab);
    const getTabLabel = (tab_0)=>isAr ? tab_0.labelAr : t(tab_0.translationKey);
    const handleFormSubmit = async (formData)=>{
        const data = {
            ...formData,
            payment_plans: paymentPlans,
            parking_spaces: formData.parking_spaces ? Number(formData.parking_spaces) : undefined,
            bua_size: formData.bua_size ? Number(formData.bua_size) : undefined,
            plot_size: formData.plot_size ? Number(formData.plot_size) : undefined
        };
        try {
            const created = await createProperty(data);
            const newPropertyId = created?.data?.property_id ?? created?.property_id ?? created?.data?.id ?? created?.id;
            if (newPropertyId && paymentPlans.length > 0 && token) {
                for (const plan of paymentPlans){
                    try {
                        const planPayload = {
                            name: plan.name,
                            payment_plan_type: plan.payment_plan_type || "standard",
                            description: plan.description || "",
                            total_cost: plan.total_cost ?? 0,
                            status: plan.status || "active",
                            user_id: plan.user_id || (session?.user?.id ? String(session.user.id) : undefined),
                            period_by_years: plan.period_by_years ?? (plan.period === "Yearly" ? 1 : 2),
                            entity_type: "PROPERTIES",
                            entities: [
                                {
                                    entity_id: Number(newPropertyId)
                                }
                            ]
                        };
                        const planRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addProjectPayment"])(planPayload, token);
                        const createdPlanId = planRes?.data?.payment_plan_id ?? planRes?.payment_plan_id ?? planRes?.data?.id ?? planRes?.id;
                        if (createdPlanId) {
                            const downPayment = plan.down_payment_percentage || 0;
                            const handover = plan.handover_percentage || 0;
                            const installmentsCount = plan.installments_count || 1;
                            const remainingPerc = Math.max(0, 100 - downPayment - handover);
                            const perInstallment = Number((remainingPerc / installmentsCount).toFixed(2));
                            if (downPayment > 0) {
                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPaymentPlanItem"])({
                                    payment_plan_id: createdPlanId,
                                    type: "Down payment",
                                    percentage: downPayment,
                                    intervals: 1
                                }, token);
                            }
                            for(let i = 1; i <= installmentsCount; i++){
                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPaymentPlanItem"])({
                                    payment_plan_id: createdPlanId,
                                    type: `${plan.period} installment`,
                                    percentage: perInstallment,
                                    intervals: i
                                }, token);
                            }
                            if (handover > 0) {
                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPaymentPlanItem"])({
                                    payment_plan_id: createdPlanId,
                                    type: "Handover installment",
                                    percentage: handover,
                                    intervals: 1
                                }, token);
                            }
                        }
                    } catch (planErr) {
                        console.error("Failed to add payment plan for property:", planErr);
                    }
                }
            }
            if (newPropertyId && selectedFeatures.length > 0) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].savePropertyFeatures(Number(newPropertyId), selectedFeatures.map((sf)=>({
                            feature_id: sf.feature_id,
                            value: sf.value || sf.feature_name || ""
                        })));
                } catch (featErr) {
                    console.error("Failed to save property features:", featErr);
                }
            }
            if (floorPlan && newPropertyId) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].addPropertyFloorPlan(newPropertyId, floorPlan);
                } catch (fpErr) {
                    console.error("Failed to upload floor plan:", fpErr);
                }
            }
            if (images && images.length > 0 && newPropertyId) {
                try {
                    await Promise.all(images.map((img, idx)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$services$2f$AdminPropertiesService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPropertiesService"].addPropertyMedia(Number(newPropertyId), img, idx === 0)));
                } catch (imgErr) {
                    console.error("Failed to upload images:", imgErr);
                }
            }
            await queryClient.invalidateQueries({
                queryKey: [
                    "properties"
                ]
            });
            queryClient.removeQueries({
                queryKey: [
                    "properties"
                ]
            });
            router.push(`${routePrefix}/properties`);
            router.refresh();
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$property$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyServerFieldErrors"])(err, {
                tabs: TABS,
                setError,
                onShowTab: (tab_1)=>setActiveTab(tab_1.id),
                getTabLabel,
                t
            });
        }
    };
    const handleInvalid = (errs)=>{
        const errorKeys = Object.keys(errs);
        if (errorKeys.length > 0) {
            const firstErrorKey = errorKeys[0];
            const targetTab = TABS.find((tab_2)=>tab_2.fields.includes(firstErrorKey));
            if (targetTab && targetTab.id !== activeTab) {
                setActiveTab(targetTab.id);
            }
            const errorObj = errs[firstErrorKey];
            if (errorObj?.message) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t(errorObj.message));
            }
            setTimeout(()=>{
                const errorElement = document.getElementById(firstErrorKey) || document.getElementsByName(firstErrorKey)[0];
                if (errorElement) {
                    errorElement.focus();
                    errorElement.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            }, 100);
        }
    };
    const validateTab = async (tabIndex)=>{
        const tabConfig = TABS[tabIndex];
        if (!tabConfig) return true;
        const fieldsToValidate = tabConfig.fields;
        if (!fieldsToValidate || fieldsToValidate.length === 0) return true;
        const isValid = await trigger(fieldsToValidate);
        if (!isValid) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("properties.create.fillRequiredInTab", {
                tab: getTabLabel(tabConfig)
            }));
            const firstErrorField = fieldsToValidate.find((f)=>!!errors[f]);
            if (firstErrorField) {
                setTimeout(()=>{
                    const el = document.getElementById(String(firstErrorField)) || document.getElementsByName(String(firstErrorField))[0];
                    if (el) {
                        el.focus();
                        el.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }, 100);
            }
            return false;
        }
        return true;
    };
    const handleTabClick = async (targetTabId)=>{
        const targetIndex = TABS.findIndex((tab_3)=>tab_3.id === targetTabId);
        if (targetIndex === -1 || targetIndex === currentTabIndex) return;
        if (targetIndex > currentTabIndex) {
            for(let i_0 = currentTabIndex; i_0 < targetIndex; i_0++){
                const isTabValid = await validateTab(i_0);
                if (!isTabValid) {
                    if (activeTab !== TABS[i_0].id) {
                        setActiveTab(TABS[i_0].id);
                    }
                    return;
                }
            }
        }
        setActiveTab(targetTabId);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const handleNextTab = async ()=>{
        const isValid_0 = await validateTab(currentTabIndex);
        if (!isValid_0) return;
        if (currentTabIndex < TABS.length - 1) {
            setActiveTab(TABS[currentTabIndex + 1].id);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };
    const handlePrevTab = ()=>{
        if (currentTabIndex > 0) {
            setActiveTab(TABS[currentTabIndex - 1].id);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };
    const handleImageUpload = (e)=>{
        const files = Array.from(e.target.files || []);
        setImages((prev)=>[
                ...prev,
                ...files
            ]);
        files.forEach((file)=>{
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImagePreviews((prev_0)=>[
                        ...prev_0,
                        reader.result
                    ]);
            };
            reader.readAsDataURL(file);
        });
    };
    const handleRemoveImage = (index)=>{
        setImages((prev_1)=>prev_1.filter((_, i_1)=>i_1 !== index));
        setImagePreviews((prev_2)=>prev_2.filter((__0, i_2)=>i_2 !== index));
    };
    const handleFloorPlanUpload = (e_0)=>{
        const file_0 = e_0.target.files?.[0];
        if (!file_0) return;
        setFloorPlan(file_0);
        const reader_0 = new FileReader();
        reader_0.onloadend = ()=>{
            setFloorPlanPreview(reader_0.result);
        };
        reader_0.readAsDataURL(file_0);
    };
    const handleRemoveFloorPlan = ()=>{
        setFloorPlan(null);
        setFloorPlanPreview(null);
    };
    const tabHasError = (tab_4)=>{
        return tab_4.fields.some((field)=>!!errors[field]);
    };
    const handleFormKeyDown = (e_1)=>{
        if (e_1.key === "Enter" && e_1.target?.tagName !== "TEXTAREA") {
            if (currentTabIndex < TABS.length - 1) {
                e_1.preventDefault();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-3 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$PropertyPageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onCancel: ()=>router.push(`${routePrefix}/properties`)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(handleFormSubmit, handleInvalid),
                onKeyDown: handleFormKeyDown,
                className: "space-y-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gray-200 dark:border-neutral-800 mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 sm:gap-5 lg:gap-7 no-scrollbar overflow-x-auto",
                            children: TABS.map((tab_5)=>{
                                const isActive = activeTab === tab_5.id;
                                const hasError = tabHasError(tab_5);
                                const label = getTabLabel(tab_5);
                                let count = 0;
                                if (tab_5.id === "payment_plans") count = paymentPlans.length;
                                if (tab_5.id === "pricing_media") count = imagePreviews.length;
                                if (tab_5.id === "amenities") count = selectedFeatures.length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleTabClick(tab_5.id),
                                    className: `pb-1.5 text-xs font-medium whitespace-nowrap transition-colors border-b-2 select-none shrink-0 cursor-pointer inline-flex items-center gap-1.5 ${isActive ? "border-[#008081] text-[#008081] dark:border-teal-400 dark:text-teal-400 font-bold -mb-px" : hasError ? "border-red-500 text-red-600 dark:text-red-400 font-medium -mb-px" : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium -mb-px"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                            lineNumber: 377,
                                            columnNumber: 19
                                        }, this),
                                        count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] px-1.5 py-0.5 rounded-full font-semibold transition-colors ${isActive ? "bg-[#008081]/15 text-[#008081] dark:bg-teal-400/20 dark:text-teal-300" : "bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-300"}`,
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                            lineNumber: 378,
                                            columnNumber: 33
                                        }, this),
                                        hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block w-1.5 h-1.5 rounded-full bg-red-500 ms-0.5 align-middle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                            lineNumber: 381,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, tab_5.id, true, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 376,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transition-all duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "basic_info" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$BasicInfoTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    control: control,
                                    errors: errors,
                                    propertiesType: propertiesType,
                                    propertiesSubtype: propertiesSubtype,
                                    projects: projects,
                                    setValue: setValue,
                                    watch: watch
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "pricing_media" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$PricingMediaTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    control: control,
                                    errors: errors,
                                    imagePreviews: imagePreviews,
                                    onImageUpload: handleImageUpload,
                                    onRemoveImage: handleRemoveImage,
                                    floorPlanPreview: floorPlanPreview,
                                    onFloorPlanUpload: handleFloorPlanUpload,
                                    onRemoveFloorPlan: handleRemoveFloorPlan,
                                    setValue: setValue,
                                    watch: watch
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "unit_details" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$UnitDetailsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    control: control,
                                    errors: errors,
                                    setValue: setValue,
                                    watch: watch
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "location" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$LocationTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    setValue: setValue,
                                    watch: watch,
                                    projects: projects
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "amenities" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$AmenitiesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    setValue: setValue,
                                    watch: watch,
                                    selectedFeatures: selectedFeatures,
                                    onChangeFeatures: setSelectedFeatures
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "payment_plans" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$PaymentPlansTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    setValue: setValue,
                                    watch: watch,
                                    plans: paymentPlans,
                                    setPlans: setPaymentPlans
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "licenses" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$LicensesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    setValue: setValue,
                                    watch: watch
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pt-2 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    currentTabIndex === TABS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "bg-[#008081] hover:bg-[#006666] text-white text-xs font-semibold px-5 h-9 rounded-md gap-1.5 shadow-2xs cursor-pointer",
                                        disabled: isCreating,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isCreating ? t("properties.create.creating") : t("properties.create.createProperty")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                        lineNumber: 421,
                                        columnNumber: 53
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>router.push(`${routePrefix}/properties`),
                                        className: "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 text-xs font-medium px-4 h-9 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800 shadow-2xs cursor-pointer",
                                        children: t("properties.create.cancel")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 420,
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
                                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("common.previous")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                        lineNumber: 434,
                                        columnNumber: 37
                                    }, this),
                                    currentTabIndex < TABS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: handleNextTab,
                                        className: "h-8 text-xs px-3 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1 shadow-2xs cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("common.next")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                                lineNumber: 440,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-3.5 w-3.5 rtl:rotate-180"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                        lineNumber: 439,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
        lineNumber: 362,
        columnNumber: 10
    }, this);
}
_s(CreatePropertyPage, "C1qv0BtW9XCYtFNqRPEhGhrbghE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertyTypes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePropertySubtypes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$property$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectsForSelect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$create$2d$property$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = CreatePropertyPage;
var _c;
__turbopack_context__.k.register(_c, "CreatePropertyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fdfd207a._.js.map