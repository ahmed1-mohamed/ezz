(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/validators/propertiesSchema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "propertiesSchema",
    ()=>propertiesSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
// Letters (any script), digits, "-" and "_" only: rejects spaces and URL-reserved characters
// without blocking existing records whose slugs contain Arabic or uppercase letters.
const SLUG_PATTERN = /^[\p{L}\p{N}_-]+$/u;
const isHttpUrl = (value)=>{
    const candidate = /^[a-z][a-z\d+.-]*:\/\//i.test(value) ? value : `https://${value}`;
    try {
        const url = new URL(candidate);
        return (url.protocol === "http:" || url.protocol === "https:") && url.hostname.includes(".");
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
    if ($[0] !== "3df20d04b380709382fd8721791fa63d572342325ad6f1cd666d5c9eba133c8e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3df20d04b380709382fd8721791fa63d572342325ad6f1cd666d5c9eba133c8e";
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
    if ($[0] !== "3df20d04b380709382fd8721791fa63d572342325ad6f1cd666d5c9eba133c8e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3df20d04b380709382fd8721791fa63d572342325ad6f1cd666d5c9eba133c8e";
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
    if ($[0] !== "3df20d04b380709382fd8721791fa63d572342325ad6f1cd666d5c9eba133c8e") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3df20d04b380709382fd8721791fa63d572342325ad6f1cd666d5c9eba133c8e";
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
"[project]/src/lib/payment-plans.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAYMENT_PLAN_ITEM_TYPES",
    ()=>PAYMENT_PLAN_ITEM_TYPES,
    "addDraftPlanItems",
    ()=>addDraftPlanItems,
    "buildDraftPlanItems",
    ()=>buildDraftPlanItems,
    "buildPaymentPlanPayload",
    ()=>buildPaymentPlanPayload,
    "draftFromPlanItems",
    ()=>draftFromPlanItems,
    "draftRowsForExistingItems",
    ()=>draftRowsForExistingItems,
    "extractPaymentPlans",
    ()=>extractPaymentPlans,
    "getCreatedPlanId",
    ()=>getCreatedPlanId,
    "getInstallmentItemType",
    ()=>getInstallmentItemType,
    "getPaymentPlanItemTypeLabel",
    ()=>getPaymentPlanItemTypeLabel,
    "mergeEntityPaymentPlans",
    ()=>mergeEntityPaymentPlans,
    "normalizeItemType",
    ()=>normalizeItemType,
    "savePlanItems",
    ()=>savePlanItems,
    "toApiItemType",
    ()=>toApiItemType,
    "toPaymentPlanItemList",
    ()=>toPaymentPlanItemList,
    "toPaymentPlanList",
    ()=>toPaymentPlanList,
    "toPaymentPlanView",
    ()=>toPaymentPlanView,
    "withPlanItems",
    ()=>withPlanItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
;
const PAYMENT_PLAN_ITEM_TYPES = [
    {
        value: "Booking",
        labelKey: "projects.paymentPlans.types.booking"
    },
    {
        value: "Reservation",
        labelKey: "projects.paymentPlans.types.reservation"
    },
    {
        value: "Down payment",
        labelKey: "projects.paymentPlans.types.downPayment"
    },
    {
        value: "Monthly installment",
        labelKey: "projects.paymentPlans.types.monthlyInstallment"
    },
    {
        value: "Quarterly installment",
        labelKey: "projects.paymentPlans.types.quarterlyInstallment"
    },
    {
        value: "Half year installment",
        labelKey: "projects.paymentPlans.types.halfYearInstallment"
    },
    {
        value: "Yearly installment",
        labelKey: "projects.paymentPlans.types.yearlyInstallment"
    },
    {
        value: "installments before handover",
        labelKey: "projects.paymentPlans.types.installmentsBeforeHandover"
    },
    {
        value: "Handover installment",
        labelKey: "projects.paymentPlans.types.handoverInstallment"
    },
    {
        value: "installments after handover",
        labelKey: "projects.paymentPlans.types.installmentsAfterHandover"
    },
    {
        value: "Maintenance yearly fees",
        labelKey: "projects.paymentPlans.types.maintenanceYearlyFees"
    },
    {
        value: "Maintenance deposit",
        labelKey: "projects.paymentPlans.types.maintenanceDeposit"
    },
    {
        value: "Registration fees",
        labelKey: "projects.paymentPlans.types.registrationFees"
    },
    {
        value: "DLD payment",
        labelKey: "projects.paymentPlans.types.dldPayment"
    },
    {
        value: "Handover fees",
        labelKey: "projects.paymentPlans.types.handoverFees"
    },
    {
        value: "Other fees",
        labelKey: "projects.paymentPlans.types.otherFees"
    }
];
function normalizeItemType(type) {
    return type.trim().toLowerCase().replace(/[\s-]+/g, "_");
}
function toApiItemType(type) {
    const key = normalizeItemType(type);
    return PAYMENT_PLAN_ITEM_TYPES.find((o)=>normalizeItemType(o.value) === key)?.value ?? type;
}
function getPaymentPlanItemTypeLabel(type, t) {
    const key = normalizeItemType(type);
    const option = PAYMENT_PLAN_ITEM_TYPES.find((o)=>normalizeItemType(o.value) === key);
    return option ? t(option.labelKey) : type;
}
const PERIOD_ITEM_TYPE = {
    Monthly: "Monthly installment",
    Quarterly: "Quarterly installment",
    "Semi-Annually": "Half year installment",
    Yearly: "Yearly installment",
    "During Construction": "installments before handover",
    "Post Handover (2 Years)": "installments after handover",
    "Post Handover (3 Years)": "installments after handover",
    Immediate: "Down payment"
};
function getInstallmentItemType(period) {
    return PERIOD_ITEM_TYPE[period] ?? "Monthly installment";
}
const PERIOD_MONTHS = {
    Monthly: 1,
    Quarterly: 3,
    "Semi-Annually": 6,
    Yearly: 12
};
function estimatePeriodByYears(plan) {
    if (plan.period === "Immediate") return 0;
    if (plan.period === "Post Handover (2 Years)") return 2;
    if (plan.period === "Post Handover (3 Years)") return 3;
    const months = PERIOD_MONTHS[plan.period ?? ""];
    if (months && plan.installments_count) {
        return Math.max(1, Math.ceil(months * plan.installments_count / 12));
    }
    return 1;
}
function buildPaymentPlanPayload(plan, fallbackUserId) {
    const userId = plan.user_id || fallbackUserId;
    return {
        name: plan.name.trim(),
        payment_plan_type: plan.payment_plan_type?.trim() || "developer",
        description: plan.description?.trim() || "",
        total_cost: Number(plan.total_cost) || 0,
        status: plan.status || "active",
        ...userId ? {
            user_id: String(userId)
        } : {},
        period_by_years: plan.period_by_years ?? estimatePeriodByYears(plan)
    };
}
const ITEM_TYPE_PERIOD = {
    monthly_installment: "Monthly",
    quarterly_installment: "Quarterly",
    half_year_installment: "Semi-Annually",
    yearly_installment: "Yearly",
    installments_before_handover: "During Construction",
    installments_after_handover: "Post Handover (2 Years)"
};
function draftFromPlanItems(items) {
    const byType = (type)=>items.filter((i)=>normalizeItemType(i.type) === type);
    const sum = (rows)=>rows.reduce((total, row)=>total + row.percentage, 0);
    const installment = items.find((i)=>ITEM_TYPE_PERIOD[normalizeItemType(i.type)]);
    return {
        down_payment_percentage: sum(byType("down_payment")),
        handover_percentage: sum(byType("handover_installment")),
        installments_count: installment?.intervals || 1,
        period: installment ? ITEM_TYPE_PERIOD[normalizeItemType(installment.type)] : "Immediate"
    };
}
function getCreatedPlanId(response) {
    const res = response;
    const id = res?.data?.payment_plan_id ?? res?.payment_plan_id ?? res?.data?.id ?? res?.id;
    return id ? Number(id) : undefined;
}
function buildDraftPlanItems(plan) {
    const downPayment = plan.down_payment_percentage || 0;
    const handover = plan.handover_percentage || 0;
    const installments = Math.max(1, plan.installments_count || 1);
    const remaining = Number(Math.max(0, 100 - downPayment - handover).toFixed(2));
    const items = [];
    if (downPayment > 0) items.push({
        type: "Down payment",
        percentage: downPayment,
        intervals: 1
    });
    if (remaining > 0) {
        items.push({
            type: getInstallmentItemType(plan.period),
            percentage: remaining,
            intervals: installments
        });
    }
    if (handover > 0) items.push({
        type: "Handover installment",
        percentage: handover,
        intervals: 1
    });
    return items;
}
async function addDraftPlanItems(paymentPlanId, plan, token) {
    for (const item of buildDraftPlanItems(plan)){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPaymentPlanItem"])({
            payment_plan_id: paymentPlanId,
            ...item
        }, token);
    }
}
function extractPaymentPlans(entity) {
    const raw = entity?.paymentPlans ?? entity?.payment_plans ?? entity?.paymentplans ?? [];
    if (!Array.isArray(raw)) return [];
    return raw.map((plan, planIndex)=>{
        const rawItems = plan?.paymentplanitems ?? plan?.payment_plan_items ?? plan?.paymentPlanItems ?? plan?.items ?? [];
        const planId = plan?.payment_plan_id ?? plan?.id;
        return {
            id: String(planId ?? `plan-${planIndex}`),
            paymentPlanId: planId !== undefined ? Number(planId) : undefined,
            name: plan?.name ?? "",
            description: plan?.description ?? "",
            paymentPlanType: plan?.payment_plan_type ?? undefined,
            totalCost: plan?.total_cost ?? null,
            status: plan?.status,
            userId: plan?.user_id != null ? String(plan.user_id) : undefined,
            periodByYears: plan?.period_by_years ?? null,
            developerId: plan?.developer_id != null ? Number(plan.developer_id) : undefined,
            entityType: typeof plan?.type === "string" ? plan.type : undefined,
            entityId: plan?.entity_id != null ? Number(plan.entity_id) : undefined,
            items: (Array.isArray(rawItems) ? rawItems : []).map((item, itemIndex)=>({
                    id: String(item?.payment_plan_item_id ?? item?.id ?? `item-${itemIndex}`),
                    type: toApiItemType(String(item?.type ?? "")),
                    percentage: Number(item?.percentage ?? 0),
                    intervals: Number(item?.intervals ?? 1)
                }))
        };
    });
}
function toPaymentPlanView(response) {
    const body = response;
    const plan = body?.data?.payment_plan_id !== undefined || body?.data?.name !== undefined ? body.data : body;
    if (!plan || typeof plan !== "object") return null;
    return extractPaymentPlans({
        paymentPlans: [
            plan
        ]
    })[0] ?? null;
}
function toPaymentPlanList(response) {
    const body = response;
    const raw = Array.isArray(body?.data) ? body.data : Array.isArray(body?.data?.data) ? body.data.data : Array.isArray(body) ? body : [];
    return extractPaymentPlans({
        paymentPlans: raw
    });
}
function mergeEntityPaymentPlans(summaries, list, entityType, entityId) {
    if (!list || !entityId) return summaries;
    const known = new Set(summaries.map((p)=>p.paymentPlanId).filter(Boolean));
    const linked = list.filter((p)=>p.entityType?.toUpperCase() === entityType && p.entityId === entityId && p.paymentPlanId && !known.has(p.paymentPlanId));
    return linked.length ? [
        ...summaries,
        ...linked
    ] : summaries;
}
function toPaymentPlanItemList(response) {
    const body = response;
    const raw = Array.isArray(body?.data) ? body.data : Array.isArray(body?.data?.data) ? body.data.data : Array.isArray(body) ? body : [];
    return raw.map((item, index)=>({
            id: String(item?.id ?? item?.payment_plan_item_id ?? `item-${index}`),
            paymentPlanId: item?.payment_plan_id != null ? Number(item.payment_plan_id) : undefined,
            type: toApiItemType(String(item?.type ?? "")),
            percentage: Number(item?.percentage ?? 0),
            intervals: Number(item?.intervals ?? 1) || 1
        }));
}
function withPlanItems(plan, allItems) {
    if (plan.items.length > 0 || !allItems || !plan.paymentPlanId) return plan;
    const items = allItems.filter((item)=>item.paymentPlanId === plan.paymentPlanId);
    return items.length ? {
        ...plan,
        items
    } : plan;
}
async function savePlanItems(paymentPlanId, rows, originalItems, token) {
    const originalById = new Map(originalItems.map((item)=>[
            item.id,
            item
        ]));
    for (const row of rows){
        const body = {
            payment_plan_id: paymentPlanId,
            type: row.type,
            percentage: row.percentage,
            intervals: row.intervals
        };
        if (!row.paymentPlanItemId) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPaymentPlanItem"])(body, token);
            continue;
        }
        const original = originalById.get(String(row.paymentPlanItemId));
        const changed = !original || original.type !== row.type || original.percentage !== row.percentage || original.intervals !== row.intervals;
        if (changed) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updatePaymentPlanItem"])(row.paymentPlanItemId, body, token);
    }
}
function draftRowsForExistingItems(plan, existing) {
    return buildDraftPlanItems(plan).map((item, index)=>{
        const id = existing[index]?.id;
        return {
            ...item,
            paymentPlanItemId: id && /^\d+$/.test(id) ? Number(id) : undefined
        };
    });
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PropertyPageHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "f232eac180c774e5439a9a0468be7523e520d99a14ac44d68565a4553f3ef763") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f232eac180c774e5439a9a0468be7523e520d99a14ac44d68565a4553f3ef763";
    }
    const { onCancel } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "h-3.5 w-3.5 text-gray-500 shrink-0 rtl:rotate-180"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/PropertyPageHeader.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t) {
        t4 = t("properties.create.header.backToProperties");
        $[6] = t;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/PropertyPageHeader.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== onCancel || $[11] !== t5) {
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
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[10] = onCancel;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t2 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pb-2 pt-0",
            children: [
                t2,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/PropertyPageHeader.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[13] = t2;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
}
_s(PropertyPageHeader, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
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
    if ($[0] !== "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f";
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
    if ($[0] !== "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f";
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
    if ($[0] !== "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f";
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
    if ($[0] !== "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f";
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
    if ($[0] !== "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f";
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
    if ($[0] !== "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f";
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
    if ($[0] !== "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f";
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
    if ($[0] !== "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f";
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
    if ($[0] !== "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8c9935ae78377d03ca8c3a27dc227ec39a7197a44d50151765e3112de66f94f";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(90);
    if ($[0] !== "0a7918e127608c8126a2ac8517a3e10137880b575ace2f3e68d35a22bd978f86") {
        for(let $i = 0; $i < 90; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a7918e127608c8126a2ac8517a3e10137880b575ace2f3e68d35a22bd978f86";
    }
    const { register, setValue, watch, errors } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
                lineNumber: 68,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t) {
        t4 = t("properties.create.form.seoSlug");
        $[8] = t;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "slug",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ps-3 pe-2 text-xs text-gray-400 dark:text-gray-500 font-mono select-none",
            children: "/"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== register) {
        t7 = register("slug");
        $[13] = register;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t) {
        t8 = t("properties.create.seo.slugPlaceholder");
        $[15] = t;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t7 || $[18] !== t8) {
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
                    lineNumber: 115,
                    columnNumber: 207
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t) {
        t10 = t("properties.create.form.seoGenerate");
        $[20] = t;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== handleGenerateSlug || $[23] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: handleGenerateSlug,
            className: "border-[#008081] dark:border-teal-500 text-[#008081] dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-xs px-3.5 h-9 shadow-2xs shrink-0 font-medium",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[22] = handleGenerateSlug;
        $[23] = t10;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t11 || $[26] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mt-1",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t9;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== errors || $[29] !== t) {
        t13 = errors?.slug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.slug.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 150,
            columnNumber: 27
        }, this);
        $[28] = errors;
        $[29] = t;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t) {
        t14 = t("properties.create.form.seoSlugHelp");
        $[31] = t;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] text-gray-500 dark:text-gray-400 mt-1",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[33] = t14;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t12 || $[36] !== t13 || $[37] !== t15 || $[38] !== t5) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t12,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[35] = t12;
        $[36] = t13;
        $[37] = t15;
        $[38] = t5;
        $[39] = t16;
    } else {
        t16 = $[39];
    }
    let t17;
    if ($[40] !== t) {
        t17 = t("properties.create.seo.metaTitle");
        $[40] = t;
        $[41] = t17;
    } else {
        t17 = $[41];
    }
    let t18;
    if ($[42] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "meta_title",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[42] = t17;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== register) {
        t19 = register("meta_title");
        $[44] = register;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== t) {
        t20 = t("properties.create.seo.metaTitlePlaceholder");
        $[46] = t;
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] !== t19 || $[49] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "meta_title",
            ...t19,
            placeholder: t20,
            className: "mt-1 h-9 text-xs dark:bg-neutral-950 dark:border-neutral-700"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[48] = t19;
        $[49] = t20;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== errors || $[52] !== t) {
        t22 = errors?.meta_title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.meta_title.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 227,
            columnNumber: 33
        }, this);
        $[51] = errors;
        $[52] = t;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== t18 || $[55] !== t21 || $[56] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[54] = t18;
        $[55] = t21;
        $[56] = t22;
        $[57] = t23;
    } else {
        t23 = $[57];
    }
    let t24;
    if ($[58] !== t) {
        t24 = t("properties.create.seo.metaDescription");
        $[58] = t;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    if ($[60] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "meta_description",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[60] = t24;
        $[61] = t25;
    } else {
        t25 = $[61];
    }
    let t26;
    if ($[62] !== t) {
        t26 = t("properties.create.seo.metaDescriptionHint");
        $[62] = t;
        $[63] = t26;
    } else {
        t26 = $[63];
    }
    let t27;
    if ($[64] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-gray-400 dark:text-gray-500",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[64] = t26;
        $[65] = t27;
    } else {
        t27 = $[65];
    }
    let t28;
    if ($[66] !== t25 || $[67] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-1",
            children: [
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[66] = t25;
        $[67] = t27;
        $[68] = t28;
    } else {
        t28 = $[68];
    }
    let t29;
    if ($[69] !== register) {
        t29 = register("meta_description");
        $[69] = register;
        $[70] = t29;
    } else {
        t29 = $[70];
    }
    let t30;
    if ($[71] !== t) {
        t30 = t("properties.create.form.seoMetaDescriptionPlaceholder");
        $[71] = t;
        $[72] = t30;
    } else {
        t30 = $[72];
    }
    let t31;
    if ($[73] !== t29 || $[74] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: "meta_description",
            ...t29,
            placeholder: t30,
            rows: 2,
            className: "min-h-[70px] text-xs resize-none bg-white dark:bg-neutral-950 border-input dark:border-neutral-700 dark:text-gray-100"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[73] = t29;
        $[74] = t30;
        $[75] = t31;
    } else {
        t31 = $[75];
    }
    let t32;
    if ($[76] !== errors || $[77] !== t) {
        t32 = errors?.meta_description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.meta_description.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 312,
            columnNumber: 39
        }, this);
        $[76] = errors;
        $[77] = t;
        $[78] = t32;
    } else {
        t32 = $[78];
    }
    let t33;
    if ($[79] !== t28 || $[80] !== t31 || $[81] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t28,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[79] = t28;
        $[80] = t31;
        $[81] = t32;
        $[82] = t33;
    } else {
        t33 = $[82];
    }
    let t34;
    if ($[83] !== t16 || $[84] !== t23 || $[85] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3.5",
            children: [
                t16,
                t23,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[83] = t16;
        $[84] = t23;
        $[85] = t33;
        $[86] = t34;
    } else {
        t34 = $[86];
    }
    let t35;
    if ($[87] !== t3 || $[88] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs",
            children: [
                t3,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/SeoSection.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[87] = t3;
        $[88] = t34;
        $[89] = t35;
    } else {
        t35 = $[89];
    }
    return t35;
}
_s(SeoSection, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(230);
    if ($[0] !== "9a814ed828c9f13dcfd86272bb379686fda784df3b778a1cf5f4d0fa0e33be86") {
        for(let $i = 0; $i < 230; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a814ed828c9f13dcfd86272bb379686fda784df3b778a1cf5f4d0fa0e33be86";
    }
    const { register, control, errors, propertiesType, propertiesSubtype, projects, setValue, watch } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
                lineNumber: 91,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t) {
        t4 = t("properties.create.form.propertyName");
        $[8] = t;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t4) {
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
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== register) {
        t7 = register("property_name");
        $[13] = register;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t) {
        t8 = t("properties.create.basicInfo.propertyNamePlaceholder");
        $[15] = t;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    const t9 = !!errors.property_name;
    let t10;
    if ($[17] !== t7 || $[18] !== t8 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "property_name",
            ...t7,
            placeholder: t8,
            className: "mt-1.5",
            error: t9
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== errors.property_name || $[22] !== t) {
        t11 = errors.property_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.property_name.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 149,
            columnNumber: 35
        }, this);
        $[21] = errors.property_name;
        $[22] = t;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t10 || $[25] !== t11 || $[26] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t11;
        $[26] = t6;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t) {
        t13 = t("properties.create.basicInfo.propertyNameEn");
        $[28] = t;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "property_name_en",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== register) {
        t15 = register("property_name_en");
        $[32] = register;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t) {
        t16 = t("properties.create.basicInfo.propertyNamePlaceholder");
        $[34] = t;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t15 || $[37] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "property_name_en",
            ...t15,
            placeholder: t16,
            className: "mt-1.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[36] = t15;
        $[37] = t16;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t14 || $[40] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[39] = t14;
        $[40] = t17;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== t) {
        t19 = t("properties.create.form.propertyNo");
        $[42] = t;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "property_no",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[44] = t19;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== register) {
        t21 = register("property_no");
        $[46] = register;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "property_no",
            ...t21,
            placeholder: "e.g. B4307",
            className: "mt-1.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[48] = t21;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] !== errors.property_no || $[51] !== t) {
        t23 = errors?.property_no && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.property_no.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 250,
            columnNumber: 34
        }, this);
        $[50] = errors.property_no;
        $[51] = t;
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    let t24;
    if ($[53] !== t20 || $[54] !== t22 || $[55] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[53] = t20;
        $[54] = t22;
        $[55] = t23;
        $[56] = t24;
    } else {
        t24 = $[56];
    }
    let t25;
    if ($[57] !== t) {
        t25 = t("properties.create.basicInfo.project");
        $[57] = t;
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[60] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t25,
                " ",
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[60] = t25;
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] !== errors.project_id || $[63] !== filteredProjects || $[64] !== isProjectOpen || $[65] !== projectSearch || $[66] !== projects || $[67] !== t) {
        t28 = ({
            "BasicInfoTab[<Controller>.render]": (t29)=>{
                const { field } = t29;
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
                                        }["BasicInfoTab[<Controller>.render > projects.find()]"])?.project_name || field.value : t("properties.create.form.selectProject")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 304,
                                        columnNumber: 700
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "h-4 w-4 opacity-50 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 306,
                                        columnNumber: 155
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 304,
                                columnNumber: 105
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 304,
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
                                        lineNumber: 306,
                                        columnNumber: 454
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandList"], {
                                        className: "max-h-64 overflow-y-auto dark:bg-neutral-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                                className: "dark:text-gray-400",
                                                children: t("properties.create.basicInfo.noProjectFound")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                                lineNumber: 306,
                                                columnNumber: 687
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
                                                                    lineNumber: 316,
                                                                    columnNumber: 185
                                                                }, this),
                                                                project.project_name
                                                            ]
                                                        }, projId, true, {
                                                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 30
                                                        }, this);
                                                    }
                                                }["BasicInfoTab[<Controller>.render > filteredProjects.map()]"])
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                                lineNumber: 306,
                                                columnNumber: 796
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 306,
                                        columnNumber: 617
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 306,
                                columnNumber: 392
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 306,
                            columnNumber: 236
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 297,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[62] = errors.project_id;
        $[63] = filteredProjects;
        $[64] = isProjectOpen;
        $[65] = projectSearch;
        $[66] = projects;
        $[67] = t;
        $[68] = t28;
    } else {
        t28 = $[68];
    }
    let t29;
    if ($[69] !== control || $[70] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "project_id",
            control: control,
            render: t28
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[69] = control;
        $[70] = t28;
        $[71] = t29;
    } else {
        t29 = $[71];
    }
    let t30;
    if ($[72] !== errors.project_id || $[73] !== t) {
        t30 = errors.project_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.project_id.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 342,
            columnNumber: 32
        }, this);
        $[72] = errors.project_id;
        $[73] = t;
        $[74] = t30;
    } else {
        t30 = $[74];
    }
    let t31;
    if ($[75] !== t27 || $[76] !== t29 || $[77] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t27,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[75] = t27;
        $[76] = t29;
        $[77] = t30;
        $[78] = t31;
    } else {
        t31 = $[78];
    }
    let t32;
    if ($[79] !== t) {
        t32 = t("properties.create.basicInfo.propertyType");
        $[79] = t;
        $[80] = t32;
    } else {
        t32 = $[80];
    }
    let t33;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    if ($[82] !== t32) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t32,
                " ",
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[82] = t32;
        $[83] = t34;
    } else {
        t34 = $[83];
    }
    let t35;
    if ($[84] !== errors.property_type_id || $[85] !== propertiesType || $[86] !== t) {
        t35 = ({
            "BasicInfoTab[<Controller>.render]": (t36)=>{
                const { field: field_0 } = t36;
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
                                lineNumber: 389,
                                columnNumber: 224
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 389,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: propertiesType.map(_BasicInfoTabControllerRenderPropertiesTypeMap)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 391,
                            columnNumber: 115
                        }, this)
                    ]
                }, field_0.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 389,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[84] = errors.property_type_id;
        $[85] = propertiesType;
        $[86] = t;
        $[87] = t35;
    } else {
        t35 = $[87];
    }
    let t36;
    if ($[88] !== control || $[89] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "property_type_id",
            control: control,
            render: t35
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        $[88] = control;
        $[89] = t35;
        $[90] = t36;
    } else {
        t36 = $[90];
    }
    let t37;
    if ($[91] !== errors.property_type_id || $[92] !== t) {
        t37 = errors.property_type_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.property_type_id.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 412,
            columnNumber: 38
        }, this);
        $[91] = errors.property_type_id;
        $[92] = t;
        $[93] = t37;
    } else {
        t37 = $[93];
    }
    let t38;
    if ($[94] !== t34 || $[95] !== t36 || $[96] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t34,
                t36,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[94] = t34;
        $[95] = t36;
        $[96] = t37;
        $[97] = t38;
    } else {
        t38 = $[97];
    }
    let t39;
    if ($[98] !== t) {
        t39 = t("properties.create.form.status");
        $[98] = t;
        $[99] = t39;
    } else {
        t39 = $[99];
    }
    let t40;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[100] = t40;
    } else {
        t40 = $[100];
    }
    let t41;
    if ($[101] !== t39) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t39,
                " ",
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[101] = t39;
        $[102] = t41;
    } else {
        t41 = $[102];
    }
    let t42;
    if ($[103] !== errors.status || $[104] !== t) {
        t42 = ({
            "BasicInfoTab[<Controller>.render]": (t43)=>{
                const { field: field_1 } = t43;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_1.onChange,
                    value: field_1.value ? String(field_1.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "status",
                            className: "mt-1.5",
                            error: !!errors.status,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.form.selectStatus"),
                                children: field_1.value && (t(`properties.create.options.status.${field_1.value}`) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusOptions"].find({
                                    "BasicInfoTab[<Controller>.render > statusOptions.find()]": (o)=>o.value === field_1.value
                                }["BasicInfoTab[<Controller>.render > statusOptions.find()]"])?.label)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 459,
                                columnNumber: 204
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 459,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusOptions"].map({
                                "BasicInfoTab[<Controller>.render > statusOptions.map()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option.value,
                                        children: t(`properties.create.options.status.${option.value}`) || option.label
                                    }, option.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 462,
                                        columnNumber: 84
                                    }, this)
                            }["BasicInfoTab[<Controller>.render > statusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 461,
                            columnNumber: 116
                        }, this)
                    ]
                }, field_1.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 459,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[103] = errors.status;
        $[104] = t;
        $[105] = t42;
    } else {
        t42 = $[105];
    }
    let t43;
    if ($[106] !== control || $[107] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "status",
            control: control,
            render: t42
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 474,
            columnNumber: 11
        }, this);
        $[106] = control;
        $[107] = t42;
        $[108] = t43;
    } else {
        t43 = $[108];
    }
    let t44;
    if ($[109] !== errors.status || $[110] !== t) {
        t44 = errors.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.status.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 483,
            columnNumber: 28
        }, this);
        $[109] = errors.status;
        $[110] = t;
        $[111] = t44;
    } else {
        t44 = $[111];
    }
    let t45;
    if ($[112] !== t41 || $[113] !== t43 || $[114] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t41,
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[112] = t41;
        $[113] = t43;
        $[114] = t44;
        $[115] = t45;
    } else {
        t45 = $[115];
    }
    let t46;
    if ($[116] !== t) {
        t46 = t("properties.create.form.unitSubType");
        $[116] = t;
        $[117] = t46;
    } else {
        t46 = $[117];
    }
    let t47;
    if ($[118] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 510,
            columnNumber: 11
        }, this);
        $[118] = t47;
    } else {
        t47 = $[118];
    }
    let t48;
    if ($[119] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t46,
                " ",
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[119] = t46;
        $[120] = t48;
    } else {
        t48 = $[120];
    }
    let t49;
    if ($[121] !== errors.property_subtype_id || $[122] !== propertiesSubtype || $[123] !== t) {
        t49 = ({
            "BasicInfoTab[<Controller>.render]": (t50)=>{
                const { field: field_2 } = t50;
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
                                lineNumber: 530,
                                columnNumber: 230
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 530,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: propertiesSubtype.map(_BasicInfoTabControllerRenderPropertiesSubtypeMap)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 532,
                            columnNumber: 118
                        }, this)
                    ]
                }, field_2.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 530,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[121] = errors.property_subtype_id;
        $[122] = propertiesSubtype;
        $[123] = t;
        $[124] = t49;
    } else {
        t49 = $[124];
    }
    let t50;
    if ($[125] !== control || $[126] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "property_subtype_id",
            control: control,
            render: t49
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[125] = control;
        $[126] = t49;
        $[127] = t50;
    } else {
        t50 = $[127];
    }
    let t51;
    if ($[128] !== errors.property_subtype_id || $[129] !== t) {
        t51 = errors.property_subtype_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.property_subtype_id.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 553,
            columnNumber: 41
        }, this);
        $[128] = errors.property_subtype_id;
        $[129] = t;
        $[130] = t51;
    } else {
        t51 = $[130];
    }
    let t52;
    if ($[131] !== t48 || $[132] !== t50 || $[133] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t48,
                t50,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 562,
            columnNumber: 11
        }, this);
        $[131] = t48;
        $[132] = t50;
        $[133] = t51;
        $[134] = t52;
    } else {
        t52 = $[134];
    }
    let t53;
    if ($[135] !== t) {
        t53 = t("properties.create.basicInfo.buildingName");
        $[135] = t;
        $[136] = t53;
    } else {
        t53 = $[136];
    }
    let t54;
    if ($[137] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "building_name",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        $[137] = t53;
        $[138] = t54;
    } else {
        t54 = $[138];
    }
    let t55;
    if ($[139] !== register) {
        t55 = register("building_name");
        $[139] = register;
        $[140] = t55;
    } else {
        t55 = $[140];
    }
    let t56;
    if ($[141] !== t) {
        t56 = t("properties.create.basicInfo.buildingNameInputPlaceholder");
        $[141] = t;
        $[142] = t56;
    } else {
        t56 = $[142];
    }
    let t57;
    if ($[143] !== t55 || $[144] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "building_name",
            ...t55,
            placeholder: t56,
            className: "mt-1.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 604,
            columnNumber: 11
        }, this);
        $[143] = t55;
        $[144] = t56;
        $[145] = t57;
    } else {
        t57 = $[145];
    }
    let t58;
    if ($[146] !== errors.building_name || $[147] !== t) {
        t58 = errors?.building_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.building_name.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 613,
            columnNumber: 36
        }, this);
        $[146] = errors.building_name;
        $[147] = t;
        $[148] = t58;
    } else {
        t58 = $[148];
    }
    let t59;
    if ($[149] !== t54 || $[150] !== t57 || $[151] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t54,
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 622,
            columnNumber: 11
        }, this);
        $[149] = t54;
        $[150] = t57;
        $[151] = t58;
        $[152] = t59;
    } else {
        t59 = $[152];
    }
    let t60;
    if ($[153] !== t) {
        t60 = t("properties.create.form.constructionStatus");
        $[153] = t;
        $[154] = t60;
    } else {
        t60 = $[154];
    }
    let t61;
    if ($[155] === Symbol.for("react.memo_cache_sentinel")) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 640,
            columnNumber: 11
        }, this);
        $[155] = t61;
    } else {
        t61 = $[155];
    }
    let t62;
    if ($[156] !== t60) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t60,
                " ",
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 647,
            columnNumber: 11
        }, this);
        $[156] = t60;
        $[157] = t62;
    } else {
        t62 = $[157];
    }
    let t63;
    if ($[158] !== errors.construction_status || $[159] !== t) {
        t63 = ({
            "BasicInfoTab[<Controller>.render]": (t64)=>{
                const { field: field_3 } = t64;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_3.onChange,
                    value: field_3.value ? String(field_3.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "construction_status",
                            className: "mt-1.5",
                            error: !!errors.construction_status,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.form.selectConstructionStatus"),
                                children: field_3.value && (t(`properties.create.options.constructionStatus.${field_3.value}`) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructionStatusOptions"].find({
                                    "BasicInfoTab[<Controller>.render > constructionStatusOptions.find()]": (o_0)=>o_0.value === field_3.value
                                }["BasicInfoTab[<Controller>.render > constructionStatusOptions.find()]"])?.label)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 660,
                                columnNumber: 230
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 660,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructionStatusOptions"].map({
                                "BasicInfoTab[<Controller>.render > constructionStatusOptions.map()]": (option_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_0.value,
                                        children: t(`properties.create.options.constructionStatus.${option_0.value}`) || option_0.label
                                    }, option_0.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 663,
                                        columnNumber: 98
                                    }, this)
                            }["BasicInfoTab[<Controller>.render > constructionStatusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 662,
                            columnNumber: 128
                        }, this)
                    ]
                }, field_3.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 660,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[158] = errors.construction_status;
        $[159] = t;
        $[160] = t63;
    } else {
        t63 = $[160];
    }
    let t64;
    if ($[161] !== control || $[162] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "construction_status",
            control: control,
            render: t63
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 675,
            columnNumber: 11
        }, this);
        $[161] = control;
        $[162] = t63;
        $[163] = t64;
    } else {
        t64 = $[163];
    }
    let t65;
    if ($[164] !== errors.construction_status || $[165] !== t) {
        t65 = errors.construction_status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.construction_status.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 684,
            columnNumber: 41
        }, this);
        $[164] = errors.construction_status;
        $[165] = t;
        $[166] = t65;
    } else {
        t65 = $[166];
    }
    let t66;
    if ($[167] !== t62 || $[168] !== t64 || $[169] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t62,
                t64,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 693,
            columnNumber: 11
        }, this);
        $[167] = t62;
        $[168] = t64;
        $[169] = t65;
        $[170] = t66;
    } else {
        t66 = $[170];
    }
    let t67;
    if ($[171] !== t) {
        t67 = t("properties.create.basicInfo.availabilityStatus");
        $[171] = t;
        $[172] = t67;
    } else {
        t67 = $[172];
    }
    let t68;
    if ($[173] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 711,
            columnNumber: 11
        }, this);
        $[173] = t68;
    } else {
        t68 = $[173];
    }
    let t69;
    if ($[174] !== t67) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t67,
                " ",
                t68
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 718,
            columnNumber: 11
        }, this);
        $[174] = t67;
        $[175] = t69;
    } else {
        t69 = $[175];
    }
    let t70;
    if ($[176] !== errors.availability_status || $[177] !== t) {
        t70 = ({
            "BasicInfoTab[<Controller>.render]": (t71)=>{
                const { field: field_4 } = t71;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    onValueChange: field_4.onChange,
                    value: field_4.value ? String(field_4.value) : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            id: "availability_status",
                            className: "mt-1.5",
                            error: !!errors.availability_status,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: t("properties.create.form.selectAvailabilityStatus"),
                                children: field_4.value && (t(`properties.create.options.availabilityStatus.${field_4.value}`) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availabilityStatusOptions"].find({
                                    "BasicInfoTab[<Controller>.render > availabilityStatusOptions.find()]": (o_1)=>o_1.value === field_4.value
                                }["BasicInfoTab[<Controller>.render > availabilityStatusOptions.find()]"])?.label)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                lineNumber: 731,
                                columnNumber: 230
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 731,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availabilityStatusOptions"].map({
                                "BasicInfoTab[<Controller>.render > availabilityStatusOptions.map()]": (option_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_1.value,
                                        children: t(`properties.create.options.availabilityStatus.${option_1.value}`) || option_1.label
                                    }, option_1.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                                        lineNumber: 734,
                                        columnNumber: 98
                                    }, this)
                            }["BasicInfoTab[<Controller>.render > availabilityStatusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                            lineNumber: 733,
                            columnNumber: 128
                        }, this)
                    ]
                }, field_4.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
                    lineNumber: 731,
                    columnNumber: 16
                }, this);
            }
        })["BasicInfoTab[<Controller>.render]"];
        $[176] = errors.availability_status;
        $[177] = t;
        $[178] = t70;
    } else {
        t70 = $[178];
    }
    let t71;
    if ($[179] !== control || $[180] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "availability_status",
            control: control,
            render: t70
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 746,
            columnNumber: 11
        }, this);
        $[179] = control;
        $[180] = t70;
        $[181] = t71;
    } else {
        t71 = $[181];
    }
    let t72;
    if ($[182] !== errors.availability_status || $[183] !== t) {
        t72 = errors.availability_status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.availability_status.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 755,
            columnNumber: 41
        }, this);
        $[182] = errors.availability_status;
        $[183] = t;
        $[184] = t72;
    } else {
        t72 = $[184];
    }
    let t73;
    if ($[185] !== t69 || $[186] !== t71 || $[187] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t69,
                t71,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 764,
            columnNumber: 11
        }, this);
        $[185] = t69;
        $[186] = t71;
        $[187] = t72;
        $[188] = t73;
    } else {
        t73 = $[188];
    }
    let t74;
    if ($[189] !== t) {
        t74 = t("properties.create.form.description");
        $[189] = t;
        $[190] = t74;
    } else {
        t74 = $[190];
    }
    let t75;
    if ($[191] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "description",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t74
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 782,
            columnNumber: 11
        }, this);
        $[191] = t74;
        $[192] = t75;
    } else {
        t75 = $[192];
    }
    let t76;
    if ($[193] !== register) {
        t76 = register("description");
        $[193] = register;
        $[194] = t76;
    } else {
        t76 = $[194];
    }
    let t77;
    if ($[195] !== t) {
        t77 = t("properties.create.form.descriptionPlaceholder");
        $[195] = t;
        $[196] = t77;
    } else {
        t77 = $[196];
    }
    let t78;
    if ($[197] !== t76 || $[198] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: "description",
            ...t76,
            placeholder: t77,
            className: "mt-1.5 min-h-[110px] bg-white dark:bg-neutral-950 border-input dark:border-neutral-700 dark:text-gray-100"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 806,
            columnNumber: 11
        }, this);
        $[197] = t76;
        $[198] = t77;
        $[199] = t78;
    } else {
        t78 = $[199];
    }
    let t79;
    if ($[200] !== errors.description || $[201] !== t) {
        t79 = errors?.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.description.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 815,
            columnNumber: 34
        }, this);
        $[200] = errors.description;
        $[201] = t;
        $[202] = t79;
    } else {
        t79 = $[202];
    }
    let t80;
    if ($[203] !== t75 || $[204] !== t78 || $[205] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                t75,
                t78,
                t79
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 824,
            columnNumber: 11
        }, this);
        $[203] = t75;
        $[204] = t78;
        $[205] = t79;
        $[206] = t80;
    } else {
        t80 = $[206];
    }
    let t81;
    if ($[207] !== t12 || $[208] !== t18 || $[209] !== t24 || $[210] !== t31 || $[211] !== t38 || $[212] !== t45 || $[213] !== t52 || $[214] !== t59 || $[215] !== t66 || $[216] !== t73 || $[217] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5",
            children: [
                t12,
                t18,
                t24,
                t31,
                t38,
                t45,
                t52,
                t59,
                t66,
                t73,
                t80
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 834,
            columnNumber: 11
        }, this);
        $[207] = t12;
        $[208] = t18;
        $[209] = t24;
        $[210] = t31;
        $[211] = t38;
        $[212] = t45;
        $[213] = t52;
        $[214] = t59;
        $[215] = t66;
        $[216] = t73;
        $[217] = t80;
        $[218] = t81;
    } else {
        t81 = $[218];
    }
    let t82;
    if ($[219] !== t3 || $[220] !== t81) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t3,
                t81
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 852,
            columnNumber: 11
        }, this);
        $[219] = t3;
        $[220] = t81;
        $[221] = t82;
    } else {
        t82 = $[221];
    }
    let t83;
    if ($[222] !== errors || $[223] !== register || $[224] !== setValue || $[225] !== watch) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch,
            errors: errors
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 861,
            columnNumber: 11
        }, this);
        $[222] = errors;
        $[223] = register;
        $[224] = setValue;
        $[225] = watch;
        $[226] = t83;
    } else {
        t83 = $[226];
    }
    let t84;
    if ($[227] !== t82 || $[228] !== t83) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t82,
                t83
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
            lineNumber: 872,
            columnNumber: 11
        }, this);
        $[227] = t82;
        $[228] = t83;
        $[229] = t84;
    } else {
        t84 = $[229];
    }
    return t84;
}
_s(BasicInfoTab, "VHwbaq58BLX260iYugtXxRbOw0E=", false, function() {
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
        lineNumber: 882,
        columnNumber: 10
    }, this);
}
function _BasicInfoTabControllerRenderPropertiesTypeMap(type) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: String(type.id),
        children: type.name
    }, type.id, false, {
        fileName: "[project]/src/features/properties/components/create/tabs/BasicInfoTab.tsx",
        lineNumber: 885,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(139);
    if ($[0] !== "fc343baea89b9d3bf4564d2d5df0764608a2ddd5de3ec998070cf66cce56bb23") {
        for(let $i = 0; $i < 139; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fc343baea89b9d3bf4564d2d5df0764608a2ddd5de3ec998070cf66cce56bb23";
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
                                        alt: t("properties.create.images.previewAlt", {
                                            index: index + 1
                                        }),
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                        lineNumber: 465,
                                        columnNumber: 244
                                    }, this),
                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-2 start-2 bg-teal-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded shadow-xs",
                                        children: t("properties.create.images.primary")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                        lineNumber: 467,
                                        columnNumber: 74
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "PricingMediaTab[imagePreviews.map() > <button>.onClick]": (e_3)=>{
                                                e_3.stopPropagation();
                                                onRemoveImage(index);
                                            }
                                        }["PricingMediaTab[imagePreviews.map() > <button>.onClick]"],
                                        className: "absolute top-1.5 end-1.5 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-700",
                                        "aria-label": t("properties.create.images.removeImage"),
                                        title: t("properties.create.images.removeImage"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                            lineNumber: 472,
                                            columnNumber: 336
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                                        lineNumber: 467,
                                        columnNumber: 246
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
            lineNumber: 483,
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
                lineNumber: 501,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 501,
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
            lineNumber: 509,
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
            lineNumber: 517,
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
            lineNumber: 532,
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
            lineNumber: 548,
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
            lineNumber: 556,
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
    if ($[121] !== currentFloorPlanPreview || $[122] !== handleRemoveFloorPlanInternal || $[123] !== t) {
        t53 = currentFloorPlanPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative inline-block group rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 max-w-xs shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: currentFloorPlanPreview,
                        alt: t("properties.create.floorPlan.previewAlt"),
                        className: "w-full h-44 object-contain p-2 bg-white dark:bg-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                        lineNumber: 567,
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
                        className: "absolute top-1.5 end-1.5 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-700",
                        "aria-label": t("properties.create.floorPlan.remove"),
                        title: t("properties.create.floorPlan.remove"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                            lineNumber: 572,
                            columnNumber: 306
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                        lineNumber: 567,
                        columnNumber: 389
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
                lineNumber: 567,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 567,
            columnNumber: 38
        }, this);
        $[121] = currentFloorPlanPreview;
        $[122] = handleRemoveFloorPlanInternal;
        $[123] = t;
        $[124] = t53;
    } else {
        t53 = $[124];
    }
    let t54;
    if ($[125] !== t45 || $[126] !== t52 || $[127] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t45,
                t52,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[125] = t45;
        $[126] = t52;
        $[127] = t53;
        $[128] = t54;
    } else {
        t54 = $[128];
    }
    let t55;
    if ($[129] !== errors || $[130] !== register || $[131] !== setValue || $[132] !== watch) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch,
            errors: errors
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PricingMediaTab.tsx",
            lineNumber: 592,
            columnNumber: 11
        }, this);
        $[129] = errors;
        $[130] = register;
        $[131] = setValue;
        $[132] = watch;
        $[133] = t55;
    } else {
        t55 = $[133];
    }
    let t56;
    if ($[134] !== t32 || $[135] !== t43 || $[136] !== t54 || $[137] !== t55) {
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
            lineNumber: 603,
            columnNumber: 11
        }, this);
        $[134] = t32;
        $[135] = t43;
        $[136] = t54;
        $[137] = t55;
        $[138] = t56;
    } else {
        t56 = $[138];
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(210);
    if ($[0] !== "b46e194b4893e474369c6e0b84def1468b4b5a498a87a452dd58833fc4af842e") {
        for(let $i = 0; $i < 210; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b46e194b4893e474369c6e0b84def1468b4b5a498a87a452dd58833fc4af842e";
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
    if ($[76] !== errors.floor || $[77] !== t) {
        t35 = errors?.floor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.floor.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 310,
            columnNumber: 28
        }, this);
        $[76] = errors.floor;
        $[77] = t;
        $[78] = t35;
    } else {
        t35 = $[78];
    }
    let t36;
    if ($[79] !== t31 || $[80] !== t34 || $[81] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[79] = t31;
        $[80] = t34;
        $[81] = t35;
        $[82] = t36;
    } else {
        t36 = $[82];
    }
    let t37;
    if ($[83] !== t) {
        t37 = t("properties.create.unitDetails.view");
        $[83] = t;
        $[84] = t37;
    } else {
        t37 = $[84];
    }
    let t38;
    if ($[85] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[85] = t37;
        $[86] = t38;
    } else {
        t38 = $[86];
    }
    let t39;
    if ($[87] !== t) {
        t39 = ({
            "UnitDetailsTab[<Controller>.render]": (t40)=>{
                const { field } = t40;
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
                                lineNumber: 350,
                                columnNumber: 199
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 350,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewOptions"].map({
                                "UnitDetailsTab[<Controller>.render > viewOptions.map()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option.value,
                                        children: t(`properties.create.options.view.${option.value}`) || option.label
                                    }, option.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                        lineNumber: 351,
                                        columnNumber: 84
                                    }, this)
                            }["UnitDetailsTab[<Controller>.render > viewOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 350,
                            columnNumber: 290
                        }, this)
                    ]
                }, field.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 350,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[87] = t;
        $[88] = t39;
    } else {
        t39 = $[88];
    }
    let t40;
    if ($[89] !== control || $[90] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "view",
            control: control,
            render: t39
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[89] = control;
        $[90] = t39;
        $[91] = t40;
    } else {
        t40 = $[91];
    }
    let t41;
    if ($[92] !== t38 || $[93] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t38,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[92] = t38;
        $[93] = t40;
        $[94] = t41;
    } else {
        t41 = $[94];
    }
    let t42;
    if ($[95] !== t) {
        t42 = t("properties.create.unitDetails.finishingType");
        $[95] = t;
        $[96] = t42;
    } else {
        t42 = $[96];
    }
    let t43;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-red-500",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[97] = t43;
    } else {
        t43 = $[97];
    }
    let t44;
    if ($[98] !== t42) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: [
                t42,
                " ",
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[98] = t42;
        $[99] = t44;
    } else {
        t44 = $[99];
    }
    let t45;
    if ($[100] !== errors.finishing_status || $[101] !== t) {
        t45 = ({
            "UnitDetailsTab[<Controller>.render]": (t46)=>{
                const { field: field_0 } = t46;
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
                                lineNumber: 408,
                                columnNumber: 263
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 408,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finishingStatusOptions"].map({
                                "UnitDetailsTab[<Controller>.render > finishingStatusOptions.map()]": (option_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_0.value,
                                        children: t(`properties.create.options.finishingStatus.${option_0.value}`) || option_0.label
                                    }, option_0.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                        lineNumber: 409,
                                        columnNumber: 97
                                    }, this)
                            }["UnitDetailsTab[<Controller>.render > finishingStatusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 408,
                            columnNumber: 359
                        }, this)
                    ]
                }, field_0.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 408,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[100] = errors.finishing_status;
        $[101] = t;
        $[102] = t45;
    } else {
        t45 = $[102];
    }
    let t46;
    if ($[103] !== control || $[104] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "finishing_status",
            control: control,
            render: t45
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[103] = control;
        $[104] = t45;
        $[105] = t46;
    } else {
        t46 = $[105];
    }
    let t47;
    if ($[106] !== errors.finishing_status || $[107] !== t) {
        t47 = errors.finishing_status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.finishing_status.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 430,
            columnNumber: 38
        }, this);
        $[106] = errors.finishing_status;
        $[107] = t;
        $[108] = t47;
    } else {
        t47 = $[108];
    }
    let t48;
    if ($[109] !== t44 || $[110] !== t46 || $[111] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t44,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[109] = t44;
        $[110] = t46;
        $[111] = t47;
        $[112] = t48;
    } else {
        t48 = $[112];
    }
    let t49;
    if ($[113] !== t) {
        t49 = t("properties.create.unitDetails.furnishStatus");
        $[113] = t;
        $[114] = t49;
    } else {
        t49 = $[114];
    }
    let t50;
    if ($[115] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[115] = t49;
        $[116] = t50;
    } else {
        t50 = $[116];
    }
    let t51;
    if ($[117] !== t) {
        t51 = ({
            "UnitDetailsTab[<Controller>.render]": (t52)=>{
                const { field: field_1 } = t52;
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
                                lineNumber: 470,
                                columnNumber: 207
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 470,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["furnishStatusOptions"].map({
                                "UnitDetailsTab[<Controller>.render > furnishStatusOptions.map()]": (option_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_1.value,
                                        children: t(`properties.create.options.furnishStatus.${option_1.value}`) || option_1.label
                                    }, option_1.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                        lineNumber: 471,
                                        columnNumber: 95
                                    }, this)
                            }["UnitDetailsTab[<Controller>.render > furnishStatusOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 470,
                            columnNumber: 301
                        }, this)
                    ]
                }, field_1.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 470,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[117] = t;
        $[118] = t51;
    } else {
        t51 = $[118];
    }
    let t52;
    if ($[119] !== control || $[120] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "furnish_status",
            control: control,
            render: t51
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 482,
            columnNumber: 11
        }, this);
        $[119] = control;
        $[120] = t51;
        $[121] = t52;
    } else {
        t52 = $[121];
    }
    let t53;
    if ($[122] !== t50 || $[123] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t50,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[122] = t50;
        $[123] = t52;
        $[124] = t53;
    } else {
        t53 = $[124];
    }
    let t54;
    if ($[125] !== t) {
        t54 = t("properties.create.unitDetails.ownershipType");
        $[125] = t;
        $[126] = t54;
    } else {
        t54 = $[126];
    }
    let t55;
    if ($[127] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t54
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 508,
            columnNumber: 11
        }, this);
        $[127] = t54;
        $[128] = t55;
    } else {
        t55 = $[128];
    }
    let t56;
    if ($[129] !== t) {
        t56 = ({
            "UnitDetailsTab[<Controller>.render]": (t57)=>{
                const { field: field_2 } = t57;
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
                                lineNumber: 521,
                                columnNumber: 207
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 521,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ownershipTypeOptions"].map({
                                "UnitDetailsTab[<Controller>.render > ownershipTypeOptions.map()]": (option_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: option_2.value,
                                        children: t(`properties.create.options.ownershipType.${option_2.value}`) || option_2.label
                                    }, option_2.value, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                                        lineNumber: 522,
                                        columnNumber: 95
                                    }, this)
                            }["UnitDetailsTab[<Controller>.render > ownershipTypeOptions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 521,
                            columnNumber: 303
                        }, this)
                    ]
                }, field_2.value || "", true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 521,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[129] = t;
        $[130] = t56;
    } else {
        t56 = $[130];
    }
    let t57;
    if ($[131] !== control || $[132] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "ownership_type",
            control: control,
            render: t56
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[131] = control;
        $[132] = t56;
        $[133] = t57;
    } else {
        t57 = $[133];
    }
    let t58;
    if ($[134] !== t55 || $[135] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t55,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 542,
            columnNumber: 11
        }, this);
        $[134] = t55;
        $[135] = t57;
        $[136] = t58;
    } else {
        t58 = $[136];
    }
    let t59;
    if ($[137] !== t) {
        t59 = t("properties.create.unitDetails.plotSize");
        $[137] = t;
        $[138] = t59;
    } else {
        t59 = $[138];
    }
    let t60;
    if ($[139] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "plot_size",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t59
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[139] = t59;
        $[140] = t60;
    } else {
        t60 = $[140];
    }
    let t61;
    if ($[141] !== register) {
        t61 = register("plot_size", {
            valueAsNumber: true
        });
        $[141] = register;
        $[142] = t61;
    } else {
        t61 = $[142];
    }
    let t62;
    if ($[143] !== t) {
        t62 = t("properties.create.unitDetails.plotSizePlaceholder");
        $[143] = t;
        $[144] = t62;
    } else {
        t62 = $[144];
    }
    const t63 = !!errors.plot_size;
    let t64;
    if ($[145] !== t61 || $[146] !== t62 || $[147] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "plot_size",
            type: "number",
            ...t61,
            placeholder: t62,
            className: "mt-1 h-9 text-xs",
            error: t63
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, this);
        $[145] = t61;
        $[146] = t62;
        $[147] = t63;
        $[148] = t64;
    } else {
        t64 = $[148];
    }
    let t65;
    if ($[149] !== errors.plot_size || $[150] !== t) {
        t65 = errors.plot_size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.plot_size.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 596,
            columnNumber: 31
        }, this);
        $[149] = errors.plot_size;
        $[150] = t;
        $[151] = t65;
    } else {
        t65 = $[151];
    }
    let t66;
    if ($[152] !== t60 || $[153] !== t64 || $[154] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t60,
                t64,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 605,
            columnNumber: 11
        }, this);
        $[152] = t60;
        $[153] = t64;
        $[154] = t65;
        $[155] = t66;
    } else {
        t66 = $[155];
    }
    let t67;
    if ($[156] !== t) {
        t67 = t("properties.create.unitDetails.builtSize");
        $[156] = t;
        $[157] = t67;
    } else {
        t67 = $[157];
    }
    let t68;
    if ($[158] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "bua_size",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t67
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, this);
        $[158] = t67;
        $[159] = t68;
    } else {
        t68 = $[159];
    }
    let t69;
    if ($[160] !== register) {
        t69 = register("bua_size", {
            valueAsNumber: true
        });
        $[160] = register;
        $[161] = t69;
    } else {
        t69 = $[161];
    }
    let t70;
    if ($[162] !== t) {
        t70 = t("properties.create.unitDetails.builtSizePlaceholder");
        $[162] = t;
        $[163] = t70;
    } else {
        t70 = $[163];
    }
    const t71 = !!errors.bua_size;
    let t72;
    if ($[164] !== t69 || $[165] !== t70 || $[166] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "bua_size",
            type: "number",
            ...t69,
            placeholder: t70,
            className: "mt-1 h-9 text-xs",
            error: t71
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 650,
            columnNumber: 11
        }, this);
        $[164] = t69;
        $[165] = t70;
        $[166] = t71;
        $[167] = t72;
    } else {
        t72 = $[167];
    }
    let t73;
    if ($[168] !== errors.bua_size || $[169] !== t) {
        t73 = errors.bua_size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.bua_size.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 660,
            columnNumber: 30
        }, this);
        $[168] = errors.bua_size;
        $[169] = t;
        $[170] = t73;
    } else {
        t73 = $[170];
    }
    let t74;
    if ($[171] !== t68 || $[172] !== t72 || $[173] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t68,
                t72,
                t73
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 669,
            columnNumber: 11
        }, this);
        $[171] = t68;
        $[172] = t72;
        $[173] = t73;
        $[174] = t74;
    } else {
        t74 = $[174];
    }
    let t75;
    if ($[175] !== t) {
        t75 = t("properties.create.unitDetails.maidRoomLabel");
        $[175] = t;
        $[176] = t75;
    } else {
        t75 = $[176];
    }
    let t76;
    if ($[177] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-xs font-semibold text-transparent select-none invisible",
            children: t75
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 687,
            columnNumber: 11
        }, this);
        $[177] = t75;
        $[178] = t76;
    } else {
        t76 = $[178];
    }
    let t77;
    if ($[179] !== t) {
        t77 = ({
            "UnitDetailsTab[<Controller>.render]": (t78)=>{
                const { field: field_3 } = t78;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 bg-gray-50/70 dark:bg-neutral-800/40 border border-gray-200 dark:border-neutral-700 rounded-lg px-3.5 h-9 mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                            id: "maid_room",
                            checked: field_3.value,
                            onCheckedChange: field_3.onChange
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 700,
                            columnNumber: 168
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "maid_room",
                            className: "text-xs font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none",
                            children: t("properties.create.unitDetails.maidRoom")
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                            lineNumber: 700,
                            columnNumber: 254
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
                    lineNumber: 700,
                    columnNumber: 16
                }, this);
            }
        })["UnitDetailsTab[<Controller>.render]"];
        $[179] = t;
        $[180] = t77;
    } else {
        t77 = $[180];
    }
    let t78;
    if ($[181] !== control || $[182] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            name: "maid_room",
            control: control,
            render: t77
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 710,
            columnNumber: 11
        }, this);
        $[181] = control;
        $[182] = t77;
        $[183] = t78;
    } else {
        t78 = $[183];
    }
    let t79;
    if ($[184] !== t76 || $[185] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t76,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 719,
            columnNumber: 11
        }, this);
        $[184] = t76;
        $[185] = t78;
        $[186] = t79;
    } else {
        t79 = $[186];
    }
    let t80;
    if ($[187] !== t11 || $[188] !== t20 || $[189] !== t29 || $[190] !== t36 || $[191] !== t41 || $[192] !== t48 || $[193] !== t53 || $[194] !== t58 || $[195] !== t66 || $[196] !== t74 || $[197] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                t11,
                t20,
                t29,
                t36,
                t41,
                t48,
                t53,
                t58,
                t66,
                t74,
                t79
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 728,
            columnNumber: 11
        }, this);
        $[187] = t11;
        $[188] = t20;
        $[189] = t29;
        $[190] = t36;
        $[191] = t41;
        $[192] = t48;
        $[193] = t53;
        $[194] = t58;
        $[195] = t66;
        $[196] = t74;
        $[197] = t79;
        $[198] = t80;
    } else {
        t80 = $[198];
    }
    let t81;
    if ($[199] !== t2 || $[200] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t2,
                t80
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 746,
            columnNumber: 11
        }, this);
        $[199] = t2;
        $[200] = t80;
        $[201] = t81;
    } else {
        t81 = $[201];
    }
    let t82;
    if ($[202] !== errors || $[203] !== register || $[204] !== setValue || $[205] !== watch) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch,
            errors: errors
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 755,
            columnNumber: 11
        }, this);
        $[202] = errors;
        $[203] = register;
        $[204] = setValue;
        $[205] = watch;
        $[206] = t82;
    } else {
        t82 = $[206];
    }
    let t83;
    if ($[207] !== t81 || $[208] !== t82) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t81,
                t82
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/UnitDetailsTab.tsx",
            lineNumber: 766,
            columnNumber: 11
        }, this);
        $[207] = t81;
        $[208] = t82;
        $[209] = t83;
    } else {
        t83 = $[209];
    }
    return t83;
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
function LocationTab({ register, setValue, watch, projects = [], errors, isActive = true }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    // Latch: mount the map on first activation, then keep it mounted.
    const [hasActivated, setHasActivated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isActive);
    if (isActive && !hasActivated) setHasActivated(true);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("properties.create.location.coordsExtractFailed"));
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("properties.create.location.locationPinned"));
        } catch (err) {
            console.error("Error fetching map coordinates:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("properties.create.location.urlParseFailed"));
        } finally{
            setIsFetchingFromUrl(false);
        }
    };
    const handleUseParentProjectCoordinates = ()=>{
        const selectedProjectId = watch?.("project_id");
        if (!selectedProjectId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(t("properties.create.location.selectProjectFirst"));
            return;
        }
        const parent = projects?.find((p)=>String(p.project_id ?? p.id) === String(selectedProjectId));
        if (!parent) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("properties.create.location.projectNotFound"));
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("properties.create.location.projectCoordsApplied"));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("properties.create.location.projectNoCoords"));
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
    const nextPointId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(3);
    const [nearbyPoints, setNearbyPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 0,
            name: t("properties.create.location.defaultTransit"),
            distance: t("properties.create.location.minutes", {
                count: 5
            })
        },
        {
            id: 1,
            name: t("properties.create.location.defaultAirport"),
            distance: t("properties.create.location.minutes", {
                count: 20
            })
        },
        {
            id: 2,
            name: t("properties.create.location.defaultMall"),
            distance: t("properties.create.location.minutes", {
                count: 10
            })
        }
    ]);
    const handleAddPoint = ()=>{
        const id = nextPointId.current++;
        setNearbyPoints((prev)=>[
                ...prev,
                {
                    id,
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
                        children: t("properties.create.location.propertyLocation")
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#f0fdfa] dark:bg-teal-950/20 border border-[#ccfbf1] dark:border-teal-900/40 rounded-lg p-3 sm:px-4 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-[#0f766e] dark:text-teal-200",
                                children: t("properties.create.location.unitInsideProject")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleUseParentProjectCoordinates,
                                className: "bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-neutral-700 text-xs font-medium px-3.5 py-1.5 rounded-md shadow-none transition-colors shrink-0",
                                children: t("properties.create.location.useProjectCoords")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "maps_url",
                                className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                children: t("properties.create.location.mapsLinkLabel")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 302,
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
                                        lineNumber: 306,
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
                                                lineNumber: 319,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("properties.create.location.generate")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-gray-400 dark:text-gray-500",
                                children: t("properties.create.location.mapsLinkHint")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            errors?.maps_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-1",
                                children: t(errors.maps_url.message)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 326,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                children: t("properties.create.location.locationOnMap")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-gray-500 dark:text-gray-400 pb-1",
                                children: t("properties.create.location.mapHint")
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            hasActivated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$InteractiveMapPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveMapPicker"], {
                                latitude: mapCoords?.lat,
                                longitude: mapCoords?.lng,
                                onLocationSelect: handleMapSelect,
                                height: "h-[360px]",
                                attributionControl: true,
                                showControls: false,
                                showBadges: false
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 339,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "latitude",
                                        className: "text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1",
                                        children: t("properties.create.location.latitude")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "latitude",
                                        type: "text",
                                        value: latInput,
                                        onChange: (e_1)=>handleLatChange(e_1.target.value),
                                        placeholder: "30.0500000",
                                        className: "bg-white dark:bg-neutral-950 text-xs font-mono h-9 border-gray-300 dark:border-neutral-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this),
                                    errors?.latitude && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-xs mt-1",
                                        children: t(errors.latitude.message)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 349,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "longitude",
                                        className: "text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1",
                                        children: t("properties.create.location.longitude")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "longitude",
                                        type: "text",
                                        value: lngInput,
                                        onChange: (e_2)=>handleLngChange(e_2.target.value),
                                        placeholder: "31.2400000",
                                        className: "bg-white dark:bg-neutral-950 text-xs font-mono h-9 border-gray-300 dark:border-neutral-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, this),
                                    errors?.longitude && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-xs mt-1",
                                        children: t(errors.longitude.message)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 356,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 343,
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
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "zone_name",
                                            ...register("zone_name"),
                                            placeholder: t("properties.create.license.zoneName"),
                                            className: "mt-1 text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this),
                                        errors?.zone_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: t(errors.zone_name.message)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 368,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                    lineNumber: 363,
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
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "city_name",
                                            ...register("city_name"),
                                            placeholder: t("properties.create.location.cityPlaceholder"),
                                            className: "mt-1 text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this),
                                        errors?.city_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: t(errors.city_name.message)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 376,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                    lineNumber: 371,
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
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "area_name",
                                            ...register("area_name"),
                                            placeholder: t("properties.create.location.areaPlaceholder"),
                                            className: "mt-1 text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this),
                                        errors?.area_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: t(errors.area_name.message)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 384,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                    lineNumber: 379,
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
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "landmark",
                                            ...register("landmark"),
                                            placeholder: t("properties.create.location.landmarkPlaceholder"),
                                            className: "mt-1 text-xs h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this),
                                        errors?.landmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: t(errors.landmark.message)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                            lineNumber: 392,
                                            columnNumber: 36
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                lineNumber: 286,
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
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                                        children: t("properties.create.location.nearbySubtitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 401,
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
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this),
                                    t("properties.create.location.addNearby")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 400,
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
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 417,
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
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 420,
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
                                            lineNumber: 424,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, point.id, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                                lineNumber: 416,
                                columnNumber: 49
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                register: register,
                setValue: setValue,
                watch: watch,
                errors: errors
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/properties/components/create/tabs/LocationTab.tsx",
        lineNumber: 284,
        columnNumber: 10
    }, this);
}
_s(LocationTab, "HnrrSJiRvCKjKHiQ/BYH5XjYCMw=", false, function() {
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
    if ($[0] !== "6a7f5f0337da53099aa4b9428c5fd25914c5faa3a877908362c2f2c34e28649a") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6a7f5f0337da53099aa4b9428c5fd25914c5faa3a877908362c2f2c34e28649a";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(139);
    if ($[0] !== "d08019f9d839c775f55738d474090f823111d55731493bae990aaad6fd681065") {
        for(let $i = 0; $i < 139; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d08019f9d839c775f55738d474090f823111d55731493bae990aaad6fd681065";
    }
    const { register, setValue, watch, selectedFeatures: controlledSelectedFeatures, onChangeFeatures, errors, isActive: t1 } = t0;
    const isActive = t1 === undefined ? true : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [hasActivated, setHasActivated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isActive);
    if (isActive && !hasActivated) {
        setHasActivated(true);
    }
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const [internalSelected, setInternalSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const selectedFeatures = controlledSelectedFeatures ?? internalSelected;
    let t3;
    if ($[2] !== onChangeFeatures || $[3] !== selectedFeatures) {
        t3 = ({
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
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const updateSelectedFeatures = t3;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            "available-features"
        ];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== hasActivated) {
        t5 = {
            queryKey: t4,
            queryFn: _temp,
            staleTime: 300000,
            enabled: hasActivated
        };
        $[6] = hasActivated;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const { data: t6, isLoading, isError, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t5);
    let t7;
    if ($[8] !== t6) {
        t7 = t6 === undefined ? [] : t6;
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const allFeatures = t7;
    let t8;
    if ($[10] !== activeTab || $[11] !== allFeatures || $[12] !== searchQuery) {
        let t9;
        if ($[14] !== activeTab || $[15] !== searchQuery) {
            t9 = ({
                "AmenitiesTab[allFeatures.filter()]": (f)=>{
                    const matchesTab = activeTab === "all" ? true : activeTab === "amenities" ? f.is_amenity === 1 : f.is_amenity === 0;
                    const matchesSearch = !searchQuery.trim() || f.feature_name.toLowerCase().includes(searchQuery.toLowerCase().trim());
                    return matchesTab && matchesSearch;
                }
            })["AmenitiesTab[allFeatures.filter()]"];
            $[14] = activeTab;
            $[15] = searchQuery;
            $[16] = t9;
        } else {
            t9 = $[16];
        }
        t8 = allFeatures.filter(t9);
        $[10] = activeTab;
        $[11] = allFeatures;
        $[12] = searchQuery;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const filteredFeatures = t8;
    let t9;
    if ($[17] !== allFeatures) {
        t9 = allFeatures.filter(_AmenitiesTabAllFeaturesFilter);
        $[17] = allFeatures;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const amenitiesCount = t9.length;
    let t10;
    if ($[19] !== allFeatures) {
        t10 = allFeatures.filter(_AmenitiesTabAllFeaturesFilter2);
        $[19] = allFeatures;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    const featuresOnlyCount = t10.length;
    const selectedCount = selectedFeatures.length;
    let t11;
    if ($[21] !== allFeatures || $[22] !== selectedFeatures) {
        let t12;
        if ($[24] !== allFeatures) {
            t12 = ({
                "AmenitiesTab[selectedFeatures.filter()]": (sf)=>{
                    const found = allFeatures.find({
                        "AmenitiesTab[selectedFeatures.filter() > allFeatures.find()]": (f_2)=>f_2.feature_id === sf.feature_id
                    }["AmenitiesTab[selectedFeatures.filter() > allFeatures.find()]"]);
                    return found ? found.is_amenity === 1 : sf.is_amenity === 1;
                }
            })["AmenitiesTab[selectedFeatures.filter()]"];
            $[24] = allFeatures;
            $[25] = t12;
        } else {
            t12 = $[25];
        }
        t11 = selectedFeatures.filter(t12);
        $[21] = allFeatures;
        $[22] = selectedFeatures;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const selectedAmenitiesCount = t11.length;
    const selectedFeaturesOnlyCount = selectedCount - selectedAmenitiesCount;
    let t12;
    if ($[26] !== updateSelectedFeatures) {
        t12 = ({
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
        $[26] = updateSelectedFeatures;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    const toggleFeature = t12;
    let t13;
    if ($[28] !== filteredFeatures || $[29] !== updateSelectedFeatures) {
        t13 = ({
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
        $[28] = filteredFeatures;
        $[29] = updateSelectedFeatures;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    const selectAllFiltered = t13;
    let t14;
    if ($[31] !== filteredFeatures || $[32] !== updateSelectedFeatures) {
        t14 = ({
            "AmenitiesTab[clearFiltered]": ()=>{
                const filteredIds = new Set(filteredFeatures.map(_AmenitiesTabClearFilteredFilteredFeaturesMap));
                updateSelectedFeatures({
                    "AmenitiesTab[clearFiltered > updateSelectedFeatures()]": (prev_1)=>prev_1.filter({
                            "AmenitiesTab[clearFiltered > updateSelectedFeatures() > prev_1.filter()]": (p_0)=>!filteredIds.has(p_0.feature_id)
                        }["AmenitiesTab[clearFiltered > updateSelectedFeatures() > prev_1.filter()]"])
                }["AmenitiesTab[clearFiltered > updateSelectedFeatures()]"]);
            }
        })["AmenitiesTab[clearFiltered]"];
        $[31] = filteredFeatures;
        $[32] = updateSelectedFeatures;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    const clearFiltered = t14;
    let t15;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "w-5 h-5 text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t) {
        t16 = t("properties.create.amenities.title");
        $[35] = t;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[37] = t16;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t) {
        t18 = t("properties.create.amenities.subtitle");
        $[39] = t;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[41] = t18;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== t17 || $[44] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[43] = t17;
        $[44] = t19;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== selectedAmenitiesCount || $[47] !== selectedCount || $[48] !== selectedFeaturesOnlyCount || $[49] !== t) {
        t21 = t("properties.create.amenities.selectedSummary", {
            selected: selectedCount,
            amenities: selectedAmenitiesCount,
            features: selectedFeaturesOnlyCount
        });
        $[46] = selectedAmenitiesCount;
        $[47] = selectedCount;
        $[48] = selectedFeaturesOnlyCount;
        $[49] = t;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "outline",
                className: "bg-teal-50/60 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800 font-medium px-2.5 py-1 text-xs",
                children: t21
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                lineNumber: 331,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[51] = t21;
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    let t23;
    if ($[53] !== t20 || $[54] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-neutral-800 pb-4",
            children: [
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[53] = t20;
        $[54] = t22;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "AmenitiesTab[<button>.onClick]": ()=>setActiveTab("all")
        })["AmenitiesTab[<button>.onClick]"];
        $[56] = t24;
    } else {
        t24 = $[56];
    }
    const t25 = `px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "all" ? "bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 shadow-2xs font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t26;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "w-3.5 h-3.5"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[57] = t26;
    } else {
        t26 = $[57];
    }
    let t27;
    if ($[58] !== t) {
        t27 = t("common.all");
        $[58] = t;
        $[59] = t27;
    } else {
        t27 = $[59];
    }
    let t28;
    if ($[60] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[60] = t27;
        $[61] = t28;
    } else {
        t28 = $[61];
    }
    let t29;
    if ($[62] !== allFeatures.length) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] px-1.5 py-0.2 bg-gray-200 dark:bg-neutral-700 rounded-full",
            children: allFeatures.length
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[62] = allFeatures.length;
        $[63] = t29;
    } else {
        t29 = $[63];
    }
    let t30;
    if ($[64] !== t25 || $[65] !== t28 || $[66] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t24,
            className: t25,
            children: [
                t26,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 389,
            columnNumber: 11
        }, this);
        $[64] = t25;
        $[65] = t28;
        $[66] = t29;
        $[67] = t30;
    } else {
        t30 = $[67];
    }
    let t31;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "AmenitiesTab[<button>.onClick]": ()=>setActiveTab("amenities")
        })["AmenitiesTab[<button>.onClick]"];
        $[68] = t31;
    } else {
        t31 = $[68];
    }
    const t32 = `px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "amenities" ? "bg-white dark:bg-neutral-900 text-teal-700 dark:text-teal-300 shadow-2xs font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t33;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
            className: "w-3.5 h-3.5 text-teal-500"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[69] = t33;
    } else {
        t33 = $[69];
    }
    let t34;
    if ($[70] !== t) {
        t34 = t("properties.create.amenities.filterAmenities");
        $[70] = t;
        $[71] = t34;
    } else {
        t34 = $[71];
    }
    let t35;
    if ($[72] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[72] = t34;
        $[73] = t35;
    } else {
        t35 = $[73];
    }
    let t36;
    if ($[74] !== amenitiesCount) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] px-1.5 py-0.2 bg-gray-200 dark:bg-neutral-700 rounded-full",
            children: amenitiesCount
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[74] = amenitiesCount;
        $[75] = t36;
    } else {
        t36 = $[75];
    }
    let t37;
    if ($[76] !== t32 || $[77] !== t35 || $[78] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t31,
            className: t32,
            children: [
                t33,
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[76] = t32;
        $[77] = t35;
        $[78] = t36;
        $[79] = t37;
    } else {
        t37 = $[79];
    }
    let t38;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = ({
            "AmenitiesTab[<button>.onClick]": ()=>setActiveTab("features")
        })["AmenitiesTab[<button>.onClick]"];
        $[80] = t38;
    } else {
        t38 = $[80];
    }
    const t39 = `px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "features" ? "bg-white dark:bg-neutral-900 text-indigo-700 dark:text-indigo-300 shadow-2xs font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`;
    let t40;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "w-3.5 h-3.5 text-indigo-500"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[81] = t40;
    } else {
        t40 = $[81];
    }
    let t41;
    if ($[82] !== t) {
        t41 = t("properties.create.amenities.filterFeatures");
        $[82] = t;
        $[83] = t41;
    } else {
        t41 = $[83];
    }
    let t42;
    if ($[84] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[84] = t41;
        $[85] = t42;
    } else {
        t42 = $[85];
    }
    let t43;
    if ($[86] !== featuresOnlyCount) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] px-1.5 py-0.2 bg-gray-200 dark:bg-neutral-700 rounded-full",
            children: featuresOnlyCount
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 483,
            columnNumber: 11
        }, this);
        $[86] = featuresOnlyCount;
        $[87] = t43;
    } else {
        t43 = $[87];
    }
    let t44;
    if ($[88] !== t39 || $[89] !== t42 || $[90] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t38,
            className: t39,
            children: [
                t40,
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[88] = t39;
        $[89] = t42;
        $[90] = t43;
        $[91] = t44;
    } else {
        t44 = $[91];
    }
    let t45;
    if ($[92] !== t30 || $[93] !== t37 || $[94] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 p-1 bg-gray-100/80 dark:bg-neutral-800/80 rounded-lg w-fit",
            children: [
                t30,
                t37,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[92] = t30;
        $[93] = t37;
        $[94] = t44;
        $[95] = t45;
    } else {
        t45 = $[95];
    }
    let t46;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "w-4 h-4 text-gray-400 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[96] = t46;
    } else {
        t46 = $[96];
    }
    let t47;
    if ($[97] !== t) {
        t47 = t("properties.create.amenities.searchFeatures");
        $[97] = t;
        $[98] = t47;
    } else {
        t47 = $[98];
    }
    let t48;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = ({
            "AmenitiesTab[<Input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["AmenitiesTab[<Input>.onChange]"];
        $[99] = t48;
    } else {
        t48 = $[99];
    }
    let t49;
    if ($[100] !== searchQuery || $[101] !== t47) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            type: "text",
            placeholder: t47,
            value: searchQuery,
            onChange: t48,
            className: "ps-9 pe-8 h-9 text-xs dark:bg-neutral-900 dark:border-neutral-700"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        $[100] = searchQuery;
        $[101] = t47;
        $[102] = t49;
    } else {
        t49 = $[102];
    }
    let t50;
    if ($[103] !== searchQuery) {
        t50 = searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "AmenitiesTab[<button>.onClick]": ()=>setSearchQuery("")
            }["AmenitiesTab[<button>.onClick]"],
            className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-0.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-3.5 h-3.5"
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                lineNumber: 546,
                columnNumber: 161
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 544,
            columnNumber: 26
        }, this);
        $[103] = searchQuery;
        $[104] = t50;
    } else {
        t50 = $[104];
    }
    let t51;
    if ($[105] !== t49 || $[106] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full sm:w-64",
            children: [
                t46,
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 554,
            columnNumber: 11
        }, this);
        $[105] = t49;
        $[106] = t50;
        $[107] = t51;
    } else {
        t51 = $[107];
    }
    let t52;
    if ($[108] !== clearFiltered || $[109] !== filteredFeatures.length || $[110] !== selectAllFiltered || $[111] !== t) {
        t52 = filteredFeatures.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 563,
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
                    lineNumber: 563,
                    columnNumber: 323
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 563,
            columnNumber: 42
        }, this);
        $[108] = clearFiltered;
        $[109] = filteredFeatures.length;
        $[110] = selectAllFiltered;
        $[111] = t;
        $[112] = t52;
    } else {
        t52 = $[112];
    }
    let t53;
    if ($[113] !== t51 || $[114] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[113] = t51;
        $[114] = t52;
        $[115] = t53;
    } else {
        t53 = $[115];
    }
    let t54;
    if ($[116] !== t45 || $[117] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-center justify-between gap-3",
            children: [
                t45,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        $[116] = t45;
        $[117] = t53;
        $[118] = t54;
    } else {
        t54 = $[118];
    }
    let t55;
    if ($[119] !== filteredFeatures || $[120] !== isError || $[121] !== isLoading || $[122] !== refetch || $[123] !== selectedFeatures || $[124] !== t || $[125] !== toggleFeature) {
        t55 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-2",
            children: Array.from({
                length: 18
            }).map(_AmenitiesTabAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 592,
            columnNumber: 23
        }, this) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-center rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium",
                    children: t("properties.create.amenities.loadFailed")
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 594,
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
                            lineNumber: 596,
                            columnNumber: 149
                        }, this),
                        t("properties.create.amenities.retry")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 594,
                    columnNumber: 293
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 594,
            columnNumber: 57
        }, this) : filteredFeatures.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-8 text-center text-gray-500 dark:text-gray-400 border border-dashed border-gray-200 dark:border-neutral-800 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                    className: "w-6 h-6 mx-auto mb-2 text-gray-300 dark:text-neutral-600"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 596,
                    columnNumber: 420
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs sm:text-sm font-medium",
                    children: t("properties.create.amenities.noResults")
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                    lineNumber: 596,
                    columnNumber: 499
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 596,
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
                                        lineNumber: 604,
                                        columnNumber: 789
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        title: feature_0.feature_name,
                                        children: feature_0.feature_name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                                        lineNumber: 604,
                                        columnNumber: 904
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                                lineNumber: 604,
                                columnNumber: 738
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-all ${isSelected ? isAmenity ? "bg-teal-600 text-white" : "bg-indigo-600 text-white" : "border border-gray-300 dark:border-neutral-600 opacity-40 group-hover:opacity-100"}`,
                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-2.5 h-2.5 stroke-[3]"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                                    lineNumber: 604,
                                    columnNumber: 1280
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                                lineNumber: 604,
                                columnNumber: 999
                            }, this)
                        ]
                    }, feature_0.feature_id, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
                        lineNumber: 602,
                        columnNumber: 18
                    }, this);
                }
            }["AmenitiesTab[filteredFeatures.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 596,
            columnNumber: 602
        }, this);
        $[119] = filteredFeatures;
        $[120] = isError;
        $[121] = isLoading;
        $[122] = refetch;
        $[123] = selectedFeatures;
        $[124] = t;
        $[125] = toggleFeature;
        $[126] = t55;
    } else {
        t55 = $[126];
    }
    let t56;
    if ($[127] !== t23 || $[128] !== t54 || $[129] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs",
            children: [
                t23,
                t54,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[127] = t23;
        $[128] = t54;
        $[129] = t55;
        $[130] = t56;
    } else {
        t56 = $[130];
    }
    let t57;
    if ($[131] !== errors || $[132] !== register || $[133] !== setValue || $[134] !== watch) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch,
            errors: errors
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 630,
            columnNumber: 11
        }, this);
        $[131] = errors;
        $[132] = register;
        $[133] = setValue;
        $[134] = watch;
        $[135] = t57;
    } else {
        t57 = $[135];
    }
    let t58;
    if ($[136] !== t56 || $[137] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t56,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/AmenitiesTab.tsx",
            lineNumber: 641,
            columnNumber: 11
        }, this);
        $[136] = t56;
        $[137] = t57;
        $[138] = t58;
    } else {
        t58 = $[138];
    }
    return t58;
}
_s(AmenitiesTab, "V/CwIEiRVvdLnKLsndDkKoSqKJE=", false, function() {
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
        lineNumber: 651,
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
"[project]/src/hooks/use-payment-plan-actions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paymentPlanItemsListQueryKey",
    ()=>paymentPlanItemsListQueryKey,
    "paymentPlanQueryKey",
    ()=>paymentPlanQueryKey,
    "paymentPlansListQueryKey",
    ()=>paymentPlansListQueryKey,
    "useEntityPaymentPlans",
    ()=>useEntityPaymentPlans,
    "usePaymentPlanActions",
    ()=>usePaymentPlanActions,
    "usePaymentPlanDetail",
    ()=>usePaymentPlanDetail,
    "usePaymentPlanItemsList",
    ()=>usePaymentPlanItemsList,
    "usePaymentPlansById",
    ()=>usePaymentPlansById,
    "usePaymentPlansList",
    ()=>usePaymentPlansList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQueries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payment-plans.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const paymentPlanQueryKey = (paymentPlanId)=>[
        "paymentPlan",
        paymentPlanId
    ];
const paymentPlansListQueryKey = [
    "paymentPlan",
    "list"
];
const paymentPlanItemsListQueryKey = [
    "paymentPlan",
    "items"
];
function usePaymentPlanItemsList(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const enabled = t0 === undefined ? true : t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t1;
    if ($[1] !== token) {
        t1 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPaymentPlanItems"])(token);
        $[1] = token;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = !!token && enabled;
    let t3;
    if ($[3] !== t1 || $[4] !== t2) {
        t3 = {
            queryKey: paymentPlanItemsListQueryKey,
            queryFn: t1,
            select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPaymentPlanItemList"],
            enabled: t2,
            staleTime: 60000
        };
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
}
_s(usePaymentPlanItemsList, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePaymentPlansList(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const enabled = t0 === undefined ? true : t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t1;
    if ($[1] !== token) {
        t1 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPaymentPlans"])(token);
        $[1] = token;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = !!token && enabled;
    let t3;
    if ($[3] !== t1 || $[4] !== t2) {
        t3 = {
            queryKey: paymentPlansListQueryKey,
            queryFn: t1,
            select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPaymentPlanList"],
            enabled: t2,
            staleTime: 60000
        };
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
}
_s1(usePaymentPlansList, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useEntityPaymentPlans(summaries, entityType, entityId) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const { data: list } = usePaymentPlansList(!!entityId);
    let t0;
    if ($[1] !== entityId || $[2] !== entityType || $[3] !== list || $[4] !== summaries) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeEntityPaymentPlans"])(summaries, list, entityType, entityId);
        $[1] = entityId;
        $[2] = entityType;
        $[3] = list;
        $[4] = summaries;
        $[5] = t0;
    } else {
        t0 = $[5];
    }
    return usePaymentPlansById(t0);
}
_s2(useEntityPaymentPlans, "ScXlARpba/sycly+yIraFnY5jgI=", false, function() {
    return [
        usePaymentPlansList,
        usePaymentPlansById
    ];
});
function usePaymentPlanDetail(paymentPlanId, enabled) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const t0 = paymentPlanId ?? 0;
    let t1;
    if ($[1] !== t0) {
        t1 = paymentPlanQueryKey(t0);
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== paymentPlanId || $[4] !== token) {
        t2 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectPaymentDetails"])(paymentPlanId, token);
        $[3] = paymentPlanId;
        $[4] = token;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = !!token && !!paymentPlanId && enabled;
    let t4;
    if ($[6] !== t1 || $[7] !== t2 || $[8] !== t3) {
        t4 = {
            queryKey: t1,
            queryFn: t2,
            select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPaymentPlanView"],
            enabled: t3
        };
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t4);
    const needsItems = !!query.data && query.data.items.length === 0;
    const { data: allItems, isLoading: itemsLoading } = usePaymentPlanItemsList(needsItems);
    let t5;
    if ($[10] !== allItems || $[11] !== query.data) {
        t5 = query.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withPlanItems"])(query.data, allItems) : query.data;
        $[10] = allItems;
        $[11] = query.data;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const t6 = query.isLoading || needsItems && itemsLoading;
    let t7;
    if ($[13] !== query || $[14] !== t5 || $[15] !== t6) {
        t7 = {
            ...query,
            data: t5,
            isLoading: t6
        };
        $[13] = query;
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    return t7;
}
_s3(usePaymentPlanDetail, "nrUJZSNCvyvmQnSaPsKyKKf4KkE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        usePaymentPlanItemsList
    ];
});
function usePaymentPlansById(summaries) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    let t0;
    if ($[1] !== summaries || $[2] !== token) {
        let t1;
        if ($[4] !== token) {
            t1 = ({
                "usePaymentPlansById[summaries.map()]": (summary)=>({
                        queryKey: paymentPlanQueryKey(summary.paymentPlanId ?? 0),
                        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectPaymentDetails"])(summary.paymentPlanId, token),
                        select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPaymentPlanView"],
                        enabled: !!token && !!summary.paymentPlanId
                    })
            })["usePaymentPlansById[summaries.map()]"];
            $[4] = token;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = summaries.map(t1);
        $[1] = summaries;
        $[2] = token;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    let t1;
    if ($[6] !== t0) {
        t1 = {
            queries: t0
        };
        $[6] = t0;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueries"])(t1);
    let t2;
    if ($[8] !== results) {
        t2 = ({
            "usePaymentPlansById[summaries.map()]": (summary_0, index)=>{
                const detail = results[index]?.data;
                if (!detail) {
                    return summary_0;
                }
                return {
                    ...summary_0,
                    ...detail,
                    id: summary_0.id,
                    items: detail.items.length > 0 ? detail.items : summary_0.items
                };
            }
        })["usePaymentPlansById[summaries.map()]"];
        $[8] = results;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const merged = summaries.map(t2);
    const needsItems = merged.some(_usePaymentPlansByIdMergedSome);
    const { data: allItems } = usePaymentPlanItemsList(needsItems);
    let t3;
    if ($[10] !== allItems) {
        t3 = ({
            "usePaymentPlansById[merged.map()]": (plan_0)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withPlanItems"])(plan_0, allItems)
        })["usePaymentPlansById[merged.map()]"];
        $[10] = allItems;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const plans = merged.map(t3);
    let t4;
    if ($[12] !== results) {
        t4 = results.some(_usePaymentPlansByIdResultsSome);
        $[12] = results;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== plans || $[15] !== t4) {
        t5 = {
            plans,
            isLoading: t4
        };
        $[14] = plans;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_s4(usePaymentPlansById, "vVEZNIGjlH7S69PRQz8LnifeAog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueries"],
        usePaymentPlanItemsList
    ];
});
function _usePaymentPlansByIdResultsSome(r) {
    return r.isLoading;
}
function _usePaymentPlansByIdMergedSome(plan) {
    return plan.paymentPlanId && plan.items.length === 0;
}
function usePaymentPlanActions() {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "102272da2d61b7e401f3b45ae9c31b8a57e0f6306ba8ae9add1e038c7dee2393";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== session?.user?.accessToken) {
        t0 = async (t1)=>{
            const { paymentId, data, items, originalItems: t2 } = t1;
            const originalItems = t2 === undefined ? [] : t2;
            const token = session?.user?.accessToken;
            if (!token) {
                throw new Error("Not authenticated");
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editProjectPayment"])(paymentId, data, token);
            if (items) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savePlanItems"])(paymentId, items, originalItems, token);
            }
            return result;
        };
        $[1] = session?.user?.accessToken;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== queryClient || $[4] !== t) {
        t1 = (_result, t2)=>{
            const { paymentId: paymentId_0 } = t2;
            queryClient.invalidateQueries({
                queryKey: paymentPlanQueryKey(paymentId_0)
            });
            queryClient.invalidateQueries({
                queryKey: paymentPlansListQueryKey
            });
            queryClient.invalidateQueries({
                queryKey: paymentPlanItemsListQueryKey
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "projectDetails"
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "propertyDetails"
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("projects.messages.paymentPlanUpdateSuccess"));
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
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t2);
    let t3;
    if ($[9] !== updateMutation.isPending || $[10] !== updateMutation.mutateAsync) {
        t3 = {
            updatePaymentPlan: updateMutation.mutateAsync,
            isUpdating: updateMutation.isPending
        };
        $[9] = updateMutation.isPending;
        $[10] = updateMutation.mutateAsync;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
}
_s5(usePaymentPlanActions, "G+TmEuOko5X+wqqjFpE/44TDSuw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/PaymentPlanTypeSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PAYMENT_PLAN_TYPE",
    ()=>DEFAULT_PAYMENT_PLAN_TYPE,
    "PaymentPlanTypeSelect",
    ()=>PaymentPlanTypeSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-payment-plan-actions.ts [app-client] (ecmascript)");
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
const DEFAULT_PAYMENT_PLAN_TYPE = "developer";
function PaymentPlanTypeSelect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "68ce1d833beb0efc73663f3fb6e779fda386b5ce09306a005c062544e8dc194f") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "68ce1d833beb0efc73663f3fb6e779fda386b5ce09306a005c062544e8dc194f";
    }
    const { id, value, onChange, className } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { data: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlansList"])();
    let t2;
    if ($[1] !== t1 || $[2] !== value) {
        const plans = t1 === undefined ? [] : t1;
        const t3 = [
            DEFAULT_PAYMENT_PLAN_TYPE,
            ...plans.map(_PaymentPlanTypeSelectPlansMap),
            value
        ].map(_PaymentPlanTypeSelectAnonymous);
        let t4;
        if ($[4] !== t3) {
            t4 = new Set(t3.filter(_PaymentPlanTypeSelectAnonymous2));
            $[4] = t3;
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        t2 = Array.from(t4);
        $[1] = t1;
        $[2] = value;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const options = t2;
    const t3 = value || DEFAULT_PAYMENT_PLAN_TYPE;
    let t4;
    if ($[6] !== className) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1 text-xs", className);
        $[6] = className;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t) {
        t5 = t("paymentPlansView.planType");
        $[8] = t;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
            placeholder: t5
        }, void 0, false, {
            fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== id || $[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            id: id,
            className: t4,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[12] = id;
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== options) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: options.map(_PaymentPlanTypeSelectOptionsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[16] = options;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== onChange || $[19] !== t3 || $[20] !== t7 || $[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: t3,
            onValueChange: onChange,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[18] = onChange;
        $[19] = t3;
        $[20] = t7;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
}
_s(PaymentPlanTypeSelect, "lG8ER8yBwPw83iIcew5NvipU270=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlansList"]
    ];
});
_c = PaymentPlanTypeSelect;
function _PaymentPlanTypeSelectOptionsMap(type_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: type_1,
        className: "text-xs capitalize",
        children: type_1
    }, type_1, false, {
        fileName: "[project]/src/components/shared/PaymentPlanTypeSelect.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, this);
}
function _PaymentPlanTypeSelectAnonymous2(type_0) {
    return !!type_0;
}
function _PaymentPlanTypeSelectAnonymous(type) {
    return type?.trim();
}
function _PaymentPlanTypeSelectPlansMap(p) {
    return p.paymentPlanType;
}
var _c;
__turbopack_context__.k.register(_c, "PaymentPlanTypeSelect");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlanTypeSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PaymentPlanTypeSelect.tsx [app-client] (ecmascript)");
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
;
;
;
;
function AddPropertyPaymentPlanModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(193);
    if ($[0] !== "ae4478860dbfd311a7432804d859a3983d8776f7ae0030e34603cfbac7a0aaa1") {
        for(let $i = 0; $i < 193; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ae4478860dbfd311a7432804d859a3983d8776f7ae0030e34603cfbac7a0aaa1";
    }
    const { isOpen, onClose, onSave, initialData } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [downPayment, setDownPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [installmentsCount, setInstallmentsCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Quarterly");
    const [handoverPercentage, setHandoverPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(40);
    const [planType, setPlanType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlanTypeSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PAYMENT_PLAN_TYPE"]);
    const [totalCost, setTotalCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [periodByYears, setPeriodByYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("active");
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
                    setPlanType(initialData.payment_plan_type || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlanTypeSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PAYMENT_PLAN_TYPE"]);
                    setTotalCost(initialData.total_cost != null ? String(initialData.total_cost) : "");
                    setPeriodByYears(initialData.period_by_years != null ? String(initialData.period_by_years) : "");
                    setStatus(initialData.status === "inactive" ? "inactive" : "active");
                } else {
                    setName("");
                    setDescription("");
                    setDownPayment(20);
                    setInstallmentsCount(4);
                    setPeriod("Quarterly");
                    setHandoverPercentage(40);
                    setPlanType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlanTypeSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PAYMENT_PLAN_TYPE"]);
                    setTotalCost("");
                    setPeriodByYears("");
                    setStatus("active");
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
    if ($[6] !== description || $[7] !== downPayment || $[8] !== handoverPercentage || $[9] !== initialData || $[10] !== installmentsCount || $[11] !== name || $[12] !== onClose || $[13] !== onSave || $[14] !== period || $[15] !== periodByYears || $[16] !== planType || $[17] !== status || $[18] !== totalCost) {
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
                    ...initialData,
                    id: initialData?.id || `plan_${Date.now()}`,
                    name: name.trim(),
                    description: description.trim() || undefined,
                    down_payment_percentage: Number(downPayment) || 0,
                    installments_count: Number(installmentsCount) || 1,
                    period: period || "Monthly",
                    handover_percentage: Number(handoverPercentage) || 0,
                    payment_plan_type: planType.trim() || undefined,
                    total_cost: totalCost.trim() !== "" ? Number(totalCost) : undefined,
                    period_by_years: periodByYears.trim() !== "" ? Number(periodByYears) : undefined,
                    status
                });
                onClose();
            }
        })["AddPropertyPaymentPlanModal[handleSubmit]"];
        $[6] = description;
        $[7] = downPayment;
        $[8] = handoverPercentage;
        $[9] = initialData;
        $[10] = installmentsCount;
        $[11] = name;
        $[12] = onClose;
        $[13] = onSave;
        $[14] = period;
        $[15] = periodByYears;
        $[16] = planType;
        $[17] = status;
        $[18] = totalCost;
        $[19] = t3;
    } else {
        t3 = $[19];
    }
    const handleSubmit = t3;
    let t4;
    if ($[20] !== initialData || $[21] !== t) {
        t4 = initialData ? t("properties.create.paymentPlans.editPlanTitle") : t("properties.create.paymentPlans.addPlanTitle");
        $[20] = initialData;
        $[21] = t;
        $[22] = t4;
    } else {
        t4 = $[22];
    }
    let t5;
    if ($[23] !== t) {
        t5 = t("properties.create.paymentPlans.modalDescription");
        $[23] = t;
        $[24] = t5;
    } else {
        t5 = $[24];
    }
    let t6;
    if ($[25] !== t) {
        t6 = t("properties.create.paymentPlans.planName");
        $[25] = t;
        $[26] = t6;
    } else {
        t6 = $[26];
    }
    let t7;
    if ($[27] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "plan_name",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t6,
                " *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[27] = t6;
        $[28] = t7;
    } else {
        t7 = $[28];
    }
    let t8;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[29] = t8;
    } else {
        t8 = $[29];
    }
    let t9;
    if ($[30] !== t) {
        t9 = t("properties.create.paymentPlans.planNamePlaceholder");
        $[30] = t;
        $[31] = t9;
    } else {
        t9 = $[31];
    }
    let t10;
    if ($[32] !== name || $[33] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "plan_name",
            value: name,
            onChange: t8,
            placeholder: t9,
            required: true,
            className: "mt-1 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[32] = name;
        $[33] = t9;
        $[34] = t10;
    } else {
        t10 = $[34];
    }
    let t11;
    if ($[35] !== t10 || $[36] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[35] = t10;
        $[36] = t7;
        $[37] = t11;
    } else {
        t11 = $[37];
    }
    let t12;
    if ($[38] !== t) {
        t12 = t("properties.create.paymentPlans.description");
        $[38] = t;
        $[39] = t12;
    } else {
        t12 = $[39];
    }
    let t13;
    if ($[40] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "plan_desc",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[40] = t12;
        $[41] = t13;
    } else {
        t13 = $[41];
    }
    let t14;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "AddPropertyPaymentPlanModal[<Textarea>.onChange]": (e_1)=>setDescription(e_1.target.value)
        })["AddPropertyPaymentPlanModal[<Textarea>.onChange]"];
        $[42] = t14;
    } else {
        t14 = $[42];
    }
    let t15;
    if ($[43] !== t) {
        t15 = t("properties.create.paymentPlans.descriptionPlaceholder");
        $[43] = t;
        $[44] = t15;
    } else {
        t15 = $[44];
    }
    let t16;
    if ($[45] !== description || $[46] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
            id: "plan_desc",
            value: description,
            onChange: t14,
            placeholder: t15,
            rows: 2,
            className: "mt-1 text-xs min-h-[60px]"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[45] = description;
        $[46] = t15;
        $[47] = t16;
    } else {
        t16 = $[47];
    }
    let t17;
    if ($[48] !== t13 || $[49] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[48] = t13;
        $[49] = t16;
        $[50] = t17;
    } else {
        t17 = $[50];
    }
    let t18;
    if ($[51] !== t) {
        t18 = t("paymentPlansView.planType");
        $[51] = t;
        $[52] = t18;
    } else {
        t18 = $[52];
    }
    let t19;
    if ($[53] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "plan_type",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[53] = t18;
        $[54] = t19;
    } else {
        t19 = $[54];
    }
    let t20;
    if ($[55] !== planType) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PaymentPlanTypeSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentPlanTypeSelect"], {
            id: "plan_type",
            value: planType,
            onChange: setPlanType,
            className: "h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[55] = planType;
        $[56] = t20;
    } else {
        t20 = $[56];
    }
    let t21;
    if ($[57] !== t19 || $[58] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[57] = t19;
        $[58] = t20;
        $[59] = t21;
    } else {
        t21 = $[59];
    }
    let t22;
    if ($[60] !== t) {
        t22 = t("paymentPlansView.status");
        $[60] = t;
        $[61] = t22;
    } else {
        t22 = $[61];
    }
    let t23;
    if ($[62] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[62] = t22;
        $[63] = t23;
    } else {
        t23 = $[63];
    }
    let t24;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            className: "mt-1 text-xs h-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                lineNumber: 308,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[64] = t24;
    } else {
        t24 = $[64];
    }
    let t25;
    if ($[65] !== t) {
        t25 = t("common.active");
        $[65] = t;
        $[66] = t25;
    } else {
        t25 = $[66];
    }
    let t26;
    if ($[67] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "active",
            className: "text-xs",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[67] = t25;
        $[68] = t26;
    } else {
        t26 = $[68];
    }
    let t27;
    if ($[69] !== t) {
        t27 = t("common.inactive");
        $[69] = t;
        $[70] = t27;
    } else {
        t27 = $[70];
    }
    let t28;
    if ($[71] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
            value: "inactive",
            className: "text-xs",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[71] = t27;
        $[72] = t28;
    } else {
        t28 = $[72];
    }
    let t29;
    if ($[73] !== t26 || $[74] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                t26,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[73] = t26;
        $[74] = t28;
        $[75] = t29;
    } else {
        t29 = $[75];
    }
    let t30;
    if ($[76] !== status || $[77] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: status,
            onValueChange: setStatus,
            children: [
                t24,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[76] = status;
        $[77] = t29;
        $[78] = t30;
    } else {
        t30 = $[78];
    }
    let t31;
    if ($[79] !== t23 || $[80] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[79] = t23;
        $[80] = t30;
        $[81] = t31;
    } else {
        t31 = $[81];
    }
    let t32;
    if ($[82] !== t) {
        t32 = t("paymentPlansView.totalCost");
        $[82] = t;
        $[83] = t32;
    } else {
        t32 = $[83];
    }
    let t33;
    if ($[84] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "plan_total_cost",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[84] = t32;
        $[85] = t33;
    } else {
        t33 = $[85];
    }
    let t34;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_2)=>setTotalCost(e_2.target.value)
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[86] = t34;
    } else {
        t34 = $[86];
    }
    let t35;
    if ($[87] !== totalCost) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "plan_total_cost",
            type: "number",
            min: "0",
            step: "any",
            value: totalCost,
            onChange: t34,
            className: "mt-1 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[87] = totalCost;
        $[88] = t35;
    } else {
        t35 = $[88];
    }
    let t36;
    if ($[89] !== t33 || $[90] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t33,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[89] = t33;
        $[90] = t35;
        $[91] = t36;
    } else {
        t36 = $[91];
    }
    let t37;
    if ($[92] !== t) {
        t37 = t("paymentPlansView.periodByYears");
        $[92] = t;
        $[93] = t37;
    } else {
        t37 = $[93];
    }
    let t38;
    if ($[94] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "plan_period_years",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[94] = t37;
        $[95] = t38;
    } else {
        t38 = $[95];
    }
    let t39;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_3)=>setPeriodByYears(e_3.target.value)
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[96] = t39;
    } else {
        t39 = $[96];
    }
    let t40;
    if ($[97] !== periodByYears) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "plan_period_years",
            type: "number",
            min: "0",
            value: periodByYears,
            onChange: t39,
            className: "mt-1 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[97] = periodByYears;
        $[98] = t40;
    } else {
        t40 = $[98];
    }
    let t41;
    if ($[99] !== t38 || $[100] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t38,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[99] = t38;
        $[100] = t40;
        $[101] = t41;
    } else {
        t41 = $[101];
    }
    let t42;
    if ($[102] !== t21 || $[103] !== t31 || $[104] !== t36 || $[105] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [
                t21,
                t31,
                t36,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[102] = t21;
        $[103] = t31;
        $[104] = t36;
        $[105] = t41;
        $[106] = t42;
    } else {
        t42 = $[106];
    }
    let t43;
    if ($[107] !== t) {
        t43 = t("properties.create.paymentPlans.downPayment");
        $[107] = t;
        $[108] = t43;
    } else {
        t43 = $[108];
    }
    let t44;
    if ($[109] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "down_payment",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t43,
                " (%) *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[109] = t43;
        $[110] = t44;
    } else {
        t44 = $[110];
    }
    let t45;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_4)=>setDownPayment(Number(e_4.target.value))
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[111] = t45;
    } else {
        t45 = $[111];
    }
    let t46;
    if ($[112] !== downPayment) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "down_payment",
            type: "number",
            min: "0",
            max: "100",
            value: downPayment,
            onChange: t45,
            required: true,
            className: "pe-7 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[112] = downPayment;
        $[113] = t46;
    } else {
        t46 = $[113];
    }
    let t47;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
            className: "absolute end-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 dark:text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, this);
        $[114] = t47;
    } else {
        t47 = $[114];
    }
    let t48;
    if ($[115] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 509,
            columnNumber: 11
        }, this);
        $[115] = t46;
        $[116] = t48;
    } else {
        t48 = $[116];
    }
    let t49;
    if ($[117] !== t44 || $[118] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t44,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[117] = t44;
        $[118] = t48;
        $[119] = t49;
    } else {
        t49 = $[119];
    }
    let t50;
    if ($[120] !== t) {
        t50 = t("properties.create.paymentPlans.onHandover");
        $[120] = t;
        $[121] = t50;
    } else {
        t50 = $[121];
    }
    let t51;
    if ($[122] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "handover_perc",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t50,
                " (%)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, this);
        $[122] = t50;
        $[123] = t51;
    } else {
        t51 = $[123];
    }
    let t52;
    if ($[124] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_5)=>setHandoverPercentage(Number(e_5.target.value))
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[124] = t52;
    } else {
        t52 = $[124];
    }
    let t53;
    if ($[125] !== handoverPercentage) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "handover_perc",
            type: "number",
            min: "0",
            max: "100",
            value: handoverPercentage,
            onChange: t52,
            className: "pe-7 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[125] = handoverPercentage;
        $[126] = t53;
    } else {
        t53 = $[126];
    }
    let t54;
    if ($[127] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
            className: "absolute end-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 dark:text-gray-500"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[127] = t54;
    } else {
        t54 = $[127];
    }
    let t55;
    if ($[128] !== t53) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-1",
            children: [
                t53,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 566,
            columnNumber: 11
        }, this);
        $[128] = t53;
        $[129] = t55;
    } else {
        t55 = $[129];
    }
    let t56;
    if ($[130] !== t51 || $[131] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t51,
                t55
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[130] = t51;
        $[131] = t55;
        $[132] = t56;
    } else {
        t56 = $[132];
    }
    let t57;
    if ($[133] !== t) {
        t57 = t("properties.create.paymentPlans.installmentsCount");
        $[133] = t;
        $[134] = t57;
    } else {
        t57 = $[134];
    }
    let t58;
    if ($[135] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "installments_count",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t57,
                " *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 591,
            columnNumber: 11
        }, this);
        $[135] = t57;
        $[136] = t58;
    } else {
        t58 = $[136];
    }
    let t59;
    if ($[137] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = ({
            "AddPropertyPaymentPlanModal[<Input>.onChange]": (e_6)=>setInstallmentsCount(Number(e_6.target.value))
        })["AddPropertyPaymentPlanModal[<Input>.onChange]"];
        $[137] = t59;
    } else {
        t59 = $[137];
    }
    let t60;
    if ($[138] !== installmentsCount) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "installments_count",
            type: "number",
            min: "1",
            max: "120",
            value: installmentsCount,
            onChange: t59,
            required: true,
            className: "mt-1 text-xs h-8"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, this);
        $[138] = installmentsCount;
        $[139] = t60;
    } else {
        t60 = $[139];
    }
    let t61;
    if ($[140] !== t58 || $[141] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t58,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, this);
        $[140] = t58;
        $[141] = t60;
        $[142] = t61;
    } else {
        t61 = $[142];
    }
    let t62;
    if ($[143] !== t) {
        t62 = t("properties.create.paymentPlans.period");
        $[143] = t;
        $[144] = t62;
    } else {
        t62 = $[144];
    }
    let t63;
    if ($[145] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "period_select",
            className: "text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300",
            children: [
                t62,
                " *"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 633,
            columnNumber: 11
        }, this);
        $[145] = t62;
        $[146] = t63;
    } else {
        t63 = $[146];
    }
    let t64;
    if ($[147] !== t) {
        t64 = t("properties.create.paymentPlans.selectPeriod");
        $[147] = t;
        $[148] = t64;
    } else {
        t64 = $[148];
    }
    let t65;
    if ($[149] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            id: "period_select",
            className: "mt-1 text-xs h-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: t64
            }, void 0, false, {
                fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                lineNumber: 649,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 649,
            columnNumber: 11
        }, this);
        $[149] = t64;
        $[150] = t65;
    } else {
        t65 = $[150];
    }
    let t66;
    if ($[151] !== t) {
        t66 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMENT_PERIOD_OPTIONS"].map({
            "AddPropertyPaymentPlanModal[PAYMENT_PERIOD_OPTIONS.map()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: option.value,
                    className: "text-xs",
                    children: t(option.labelKey)
                }, option.value, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
                    lineNumber: 658,
                    columnNumber: 78
                }, this)
        }["AddPropertyPaymentPlanModal[PAYMENT_PERIOD_OPTIONS.map()]"]);
        $[151] = t;
        $[152] = t66;
    } else {
        t66 = $[152];
    }
    let t67;
    if ($[153] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: t66
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 667,
            columnNumber: 11
        }, this);
        $[153] = t66;
        $[154] = t67;
    } else {
        t67 = $[154];
    }
    let t68;
    if ($[155] !== period || $[156] !== t65 || $[157] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: period,
            onValueChange: setPeriod,
            children: [
                t65,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 675,
            columnNumber: 11
        }, this);
        $[155] = period;
        $[156] = t65;
        $[157] = t67;
        $[158] = t68;
    } else {
        t68 = $[158];
    }
    let t69;
    if ($[159] !== t63 || $[160] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t63,
                t68
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 685,
            columnNumber: 11
        }, this);
        $[159] = t63;
        $[160] = t68;
        $[161] = t69;
    } else {
        t69 = $[161];
    }
    let t70;
    if ($[162] !== t49 || $[163] !== t56 || $[164] !== t61 || $[165] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
            children: [
                t49,
                t56,
                t61,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 694,
            columnNumber: 11
        }, this);
        $[162] = t49;
        $[163] = t56;
        $[164] = t61;
        $[165] = t69;
        $[166] = t70;
    } else {
        t70 = $[166];
    }
    let t71;
    if ($[167] !== t) {
        t71 = t("common.cancel");
        $[167] = t;
        $[168] = t71;
    } else {
        t71 = $[168];
    }
    let t72;
    if ($[169] !== onClose || $[170] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: onClose,
            className: "text-xs h-8",
            children: t71
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 713,
            columnNumber: 11
        }, this);
        $[169] = onClose;
        $[170] = t71;
        $[171] = t72;
    } else {
        t72 = $[171];
    }
    let t73;
    if ($[172] !== initialData || $[173] !== t) {
        t73 = initialData ? t("common.saveChanges") : t("properties.create.paymentPlans.addPlanBtn");
        $[172] = initialData;
        $[173] = t;
        $[174] = t73;
    } else {
        t73 = $[174];
    }
    let t74;
    if ($[175] !== handleSubmit || $[176] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            size: "sm",
            onClick: handleSubmit,
            className: "bg-teal-600 hover:bg-teal-700 text-white text-xs h-8",
            children: t73
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 731,
            columnNumber: 11
        }, this);
        $[175] = handleSubmit;
        $[176] = t73;
        $[177] = t74;
    } else {
        t74 = $[177];
    }
    let t75;
    if ($[178] !== t72 || $[179] !== t74) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800",
            children: [
                t72,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 740,
            columnNumber: 11
        }, this);
        $[178] = t72;
        $[179] = t74;
        $[180] = t75;
    } else {
        t75 = $[180];
    }
    let t76;
    if ($[181] !== t11 || $[182] !== t17 || $[183] !== t42 || $[184] !== t70 || $[185] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-1",
            children: [
                t11,
                t17,
                t42,
                t70,
                t75
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 749,
            columnNumber: 11
        }, this);
        $[181] = t11;
        $[182] = t17;
        $[183] = t42;
        $[184] = t70;
        $[185] = t75;
        $[186] = t76;
    } else {
        t76 = $[186];
    }
    let t77;
    if ($[187] !== isOpen || $[188] !== onClose || $[189] !== t4 || $[190] !== t5 || $[191] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
            isOpen: isOpen,
            onClose: onClose,
            title: t4,
            description: t5,
            size: "lg",
            children: t76
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/AddPropertyPaymentPlanModal.tsx",
            lineNumber: 761,
            columnNumber: 11
        }, this);
        $[187] = isOpen;
        $[188] = onClose;
        $[189] = t4;
        $[190] = t5;
        $[191] = t76;
        $[192] = t77;
    } else {
        t77 = $[192];
    }
    return t77;
}
_s(AddPropertyPaymentPlanModal, "JScl/DMbn5slyXnx9ooyzUcCYqI=", false, function() {
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
"[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulkAddPropertyPaymentPlansModal",
    ()=>BulkAddPropertyPaymentPlansModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/projects.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-payment-plan-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payment-plans.ts [app-client] (ecmascript)");
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
;
;
;
;
const API_PREFIX = "api_";
function BulkAddPropertyPaymentPlansModal({ isOpen, onClose, onAddBulk, developerId }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const token = session?.user?.accessToken;
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: apiPlans = [], isLoading: apiPlansLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlansList"])(isOpen);
    const existingPlans = apiPlans.filter((p)=>p.paymentPlanId && p.status !== "inactive" && (!developerId || p.developerId === developerId));
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "plan_50_50",
        "plan_60_40"
    ]);
    const allPresetsSelected = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].every((p_0)=>selectedIds.includes(p_0.id));
    const toggleSelect = (id)=>{
        setSelectedIds((prev)=>prev.includes(id) ? prev.filter((item)=>item !== id) : [
                ...prev,
                id
            ]);
    };
    const handleSelectAll = ()=>{
        const existing = selectedIds.filter((id_0)=>id_0.startsWith(API_PREFIX));
        setSelectedIds(allPresetsSelected ? existing : [
            ...existing,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].map((p_1)=>p_1.id)
        ]);
    };
    const copyExistingPlan = async (plan, idx)=>{
        let items = plan.items;
        if (token && plan.paymentPlanId) {
            try {
                const raw = await queryClient.fetchQuery({
                    queryKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paymentPlanQueryKey"])(plan.paymentPlanId),
                    queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectPaymentDetails"])(plan.paymentPlanId, token)
                });
                items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPaymentPlanView"])(raw)?.items ?? items;
            } catch  {}
        }
        return {
            id: `bulk_api_${Date.now()}_${idx}`,
            name: plan.name,
            description: plan.description || undefined,
            payment_plan_type: plan.paymentPlanType,
            total_cost: plan.totalCost != null && plan.totalCost !== "" ? Number(plan.totalCost) : undefined,
            status: plan.status,
            period_by_years: plan.periodByYears ?? undefined,
            ...items.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["draftFromPlanItems"])(items) : {
                down_payment_percentage: 0,
                installments_count: 1,
                period: "Monthly",
                handover_percentage: 0
            }
        };
    };
    const handleConfirm = async ()=>{
        const selectedTemplates = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].filter((p_2)=>selectedIds.includes(p_2.id));
        const newPlans = selectedTemplates.map((p_3, idx_0)=>({
                id: `bulk_${Date.now()}_${idx_0}`,
                name: p_3.name,
                description: p_3.description,
                down_payment_percentage: p_3.down_payment_percentage,
                installments_count: p_3.installments_count,
                period: p_3.period,
                handover_percentage: p_3.handover_percentage
            }));
        const selectedExisting = existingPlans.filter((p_4)=>selectedIds.includes(`${API_PREFIX}${p_4.paymentPlanId}`));
        setIsAdding(true);
        try {
            const copied = await Promise.all(selectedExisting.map(copyExistingPlan));
            onAddBulk([
                ...newPlans,
                ...copied
            ]);
            onClose();
        } finally{
            setIsAdding(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: onClose,
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                    className: "h-5 w-5 text-teal-600 dark:text-teal-400"
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t("properties.create.paymentPlans.bulkAddTitle")
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 99,
            columnNumber: 58
        }, void 0),
        description: t("properties.create.paymentPlans.bulkAddSubtitle"),
        size: "xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-1.5 border-b border-gray-100 dark:border-neutral-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                            children: [
                                t("properties.create.paymentPlans.availableTemplates"),
                                " (",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            onClick: handleSelectAll,
                            className: "text-xs text-teal-600 hover:text-teal-700 h-6 px-1.5",
                            children: allPresetsSelected ? t("common.deselectAll") : t("common.selectAll")
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pe-1",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESET_PLAN_TEMPLATES"].map((template)=>{
                        const isSelected = selectedIds.includes(template.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>toggleSelect(template.id),
                            className: `flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${isSelected ? "bg-teal-50/70 dark:bg-teal-950/30 border-teal-500 dark:border-teal-500/70 shadow-2xs" : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-0.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        checked: isSelected,
                                        onCheckedChange: ()=>toggleSelect(template.id)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate",
                                                    children: t(template.nameKey)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this),
                                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2",
                                            children: t(template.descriptionKey)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 mt-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                                    children: t("properties.create.paymentPlans.templateDown", {
                                                        percent: template.down_payment_percentage
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                                    children: t("properties.create.paymentPlans.templateInstallments", {
                                                        count: template.installments_count,
                                                        period: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaymentPeriodLabel"])(template.period, t)
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, template.id, true, {
                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                            lineNumber: 116,
                            columnNumber: 18
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pb-1.5 border-b border-gray-100 dark:border-neutral-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold text-gray-500 uppercase tracking-wider",
                        children: [
                            t("paymentPlansView.existingPlans"),
                            " (",
                            existingPlans.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                apiPlansLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-4 w-4 animate-spin text-teal-600"
                    }, void 0, false, {
                        fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 154,
                    columnNumber: 28
                }, this) : existingPlans.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "py-3 text-center text-xs text-gray-400 dark:text-gray-500",
                    children: t("paymentPlansView.empty")
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 156,
                    columnNumber: 49
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[35vh] overflow-y-auto pe-1",
                    children: existingPlans.map((plan_0)=>{
                        const selectId = `${API_PREFIX}${plan_0.paymentPlanId}`;
                        const isSelected_0 = selectedIds.includes(selectId);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>toggleSelect(selectId),
                            className: `flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${isSelected_0 ? "bg-teal-50/70 dark:bg-teal-950/30 border-teal-500 dark:border-teal-500/70 shadow-2xs" : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-0.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        checked: isSelected_0,
                                        onCheckedChange: ()=>toggleSelect(selectId)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                        lineNumber: 162,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                    lineNumber: 161,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 truncate",
                                            children: [
                                                plan_0.name,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-normal text-gray-400",
                                                    children: [
                                                        "#",
                                                        plan_0.paymentPlanId
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 165,
                                            columnNumber: 21
                                        }, this),
                                        plan_0.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2",
                                            children: plan_0.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 168,
                                            columnNumber: 44
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-1.5 mt-1.5 text-[10px] font-medium text-gray-600 dark:text-gray-300",
                                            children: [
                                                plan_0.paymentPlanType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                                    children: plan_0.paymentPlanType
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 50
                                                }, this),
                                                plan_0.totalCost != null && Number(plan_0.totalCost) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                                    children: [
                                                        t("paymentPlansView.totalCost"),
                                                        ": ",
                                                        Number(plan_0.totalCost).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 84
                                                }, this),
                                                plan_0.periodByYears ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded",
                                                    children: t("paymentPlansView.periodYears", {
                                                        years: plan_0.periodByYears
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 47
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                            lineNumber: 169,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                    lineNumber: 164,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, selectId, true, {
                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                            lineNumber: 160,
                            columnNumber: 18
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 156,
                    columnNumber: 158
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            size: "sm",
                            onClick: onClose,
                            className: "text-xs h-8",
                            children: t("common.cancel")
                        }, void 0, false, {
                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            disabled: selectedIds.length === 0 || isAdding,
                            onClick: handleConfirm,
                            className: "bg-teal-600 hover:bg-teal-700 text-white text-xs h-8 gap-1.5",
                            children: [
                                isAdding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 26
                                }, this),
                                t("properties.create.paymentPlans.addSelectedPlans")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/properties/components/create/tabs/payment-plans/BulkAddPropertyPaymentPlansModal.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
}
_s(BulkAddPropertyPaymentPlansModal, "x8gaRbuXxTT9yks/hhuIVaPR568=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$payment$2d$plan$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentPlansList"]
    ];
});
_c = BulkAddPropertyPaymentPlansModal;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/properties/components/create/tabs/payment-plans/payment-plans.types.ts [app-client] (ecmascript)");
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
;
function PaymentPlansTab(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(69);
    if ($[0] !== "57db943ed800f3a7efb9947815e5129d0cfd5e00a748dc47d78eb0389fe8ac2e") {
        for(let $i = 0; $i < 69; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "57db943ed800f3a7efb9947815e5129d0cfd5e00a748dc47d78eb0389fe8ac2e";
    }
    const { register, setValue, watch, plans: externalPlans, setPlans: externalSetPlans, errors } = t0;
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
            lineNumber: 158,
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
            lineNumber: 174,
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
            lineNumber: 182,
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
            lineNumber: 191,
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
                                                lineNumber: 192,
                                                columnNumber: 348
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] px-1.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-medium",
                                                children: t("properties.create.paymentPlans.downBadge", {
                                                    percent: plan_1.down_payment_percentage
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                lineNumber: 192,
                                                columnNumber: 448
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 192,
                                        columnNumber: 307
                                    }, this),
                                    plan_1.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-500 dark:text-gray-400",
                                        children: plan_1.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 194,
                                        columnNumber: 56
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-400 pt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("properties.create.paymentPlans.installmentsCountLabel", {
                                                    count: plan_1.installments_count
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                lineNumber: 194,
                                                columnNumber: 234
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                lineNumber: 196,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("properties.create.paymentPlans.periodLabel", {
                                                    period: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$payment$2d$plans$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaymentPeriodLabel"])(plan_1.period, t)
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                lineNumber: 196,
                                                columnNumber: 41
                                            }, this),
                                            plan_1.handover_percentage !== undefined && plan_1.handover_percentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 108
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t("properties.create.paymentPlans.handoverLabel", {
                                                            percent: plan_1.handover_percentage
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 122
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 194,
                                        columnNumber: 141
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                lineNumber: 192,
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
                                            lineNumber: 202,
                                            columnNumber: 146
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 200,
                                        columnNumber: 95
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
                                            lineNumber: 204,
                                            columnNumber: 161
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                        lineNumber: 202,
                                        columnNumber: 188
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                                lineNumber: 200,
                                columnNumber: 45
                            }, this)
                        ]
                    }, plan_1.id, true, {
                        fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
                        lineNumber: 192,
                        columnNumber: 51
                    }, this)
            }["PaymentPlansTab[plans.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 191,
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
            lineNumber: 215,
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
            lineNumber: 230,
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
            lineNumber: 247,
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
            lineNumber: 262,
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
            lineNumber: 270,
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
            lineNumber: 279,
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
    if ($[50] !== errors || $[51] !== register || $[52] !== setValue || $[53] !== watch) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch,
            errors: errors
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[50] = errors;
        $[51] = register;
        $[52] = setValue;
        $[53] = watch;
        $[54] = t22;
    } else {
        t22 = $[54];
    }
    let t23;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = ({
            "PaymentPlansTab[<AddPropertyPaymentPlanModal>.onClose]": ()=>{
                setIsAddModalOpen(false);
                setEditingPlan(null);
            }
        })["PaymentPlansTab[<AddPropertyPaymentPlanModal>.onClose]"];
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== editingPlan || $[57] !== handleSavePlan || $[58] !== isAddModalOpen) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$AddPropertyPaymentPlanModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddPropertyPaymentPlanModal"], {
            isOpen: isAddModalOpen,
            onClose: t23,
            onSave: handleSavePlan,
            initialData: editingPlan
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[56] = editingPlan;
        $[57] = handleSavePlan;
        $[58] = isAddModalOpen;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "PaymentPlansTab[<BulkAddPropertyPaymentPlansModal>.onClose]": ()=>setIsBulkModalOpen(false)
        })["PaymentPlansTab[<BulkAddPropertyPaymentPlansModal>.onClose]"];
        $[60] = t25;
    } else {
        t25 = $[60];
    }
    let t26;
    if ($[61] !== handleAddBulkPlans || $[62] !== isBulkModalOpen) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$payment$2d$plans$2f$BulkAddPropertyPaymentPlansModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkAddPropertyPaymentPlansModal"], {
            isOpen: isBulkModalOpen,
            onClose: t25,
            onAddBulk: handleAddBulkPlans
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/PaymentPlansTab.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[61] = handleAddBulkPlans;
        $[62] = isBulkModalOpen;
        $[63] = t26;
    } else {
        t26 = $[63];
    }
    let t27;
    if ($[64] !== t21 || $[65] !== t22 || $[66] !== t24 || $[67] !== t26) {
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
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[64] = t21;
        $[65] = t22;
        $[66] = t24;
        $[67] = t26;
        $[68] = t27;
    } else {
        t27 = $[68];
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(138);
    if ($[0] !== "69e270bd4e9e21732a0ecb36749d2930a512eaa7a8ce80dbbf2ba9de22ddbd3f") {
        for(let $i = 0; $i < 138; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "69e270bd4e9e21732a0ecb36749d2930a512eaa7a8ce80dbbf2ba9de22ddbd3f";
    }
    const { register, setValue, watch, errors } = t0;
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
            lineNumber: 43,
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
            lineNumber: 59,
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
            lineNumber: 67,
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
            lineNumber: 84,
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
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[20] = t8;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== errors || $[24] !== t) {
        t11 = errors?.broker_license && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.broker_license.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 117,
            columnNumber: 37
        }, this);
        $[23] = errors;
        $[24] = t;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t11 || $[28] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t11;
        $[28] = t7;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== t) {
        t13 = t("properties.create.license.agentLicense");
        $[30] = t;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "agent_license",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== register) {
        t15 = register("agent_license");
        $[34] = register;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== t) {
        t16 = t("properties.create.license.agentLicense");
        $[36] = t;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== t15 || $[39] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "agent_license",
            ...t15,
            placeholder: t16,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[38] = t15;
        $[39] = t16;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== errors || $[42] !== t) {
        t18 = errors?.agent_license && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.agent_license.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 177,
            columnNumber: 36
        }, this);
        $[41] = errors;
        $[42] = t;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== t14 || $[45] !== t17 || $[46] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[44] = t14;
        $[45] = t17;
        $[46] = t18;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] !== t) {
        t20 = t("properties.create.license.dldPermitNumber");
        $[48] = t;
        $[49] = t20;
    } else {
        t20 = $[49];
    }
    let t21;
    if ($[50] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "dld_permit_number",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[50] = t20;
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    let t22;
    if ($[52] !== register) {
        t22 = register("dld_permit_number");
        $[52] = register;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== t) {
        t23 = t("properties.create.license.dldPermitNumber");
        $[54] = t;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== t22 || $[57] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "dld_permit_number",
            ...t22,
            placeholder: t23,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[56] = t22;
        $[57] = t23;
        $[58] = t24;
    } else {
        t24 = $[58];
    }
    let t25;
    if ($[59] !== errors || $[60] !== t) {
        t25 = errors?.dld_permit_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.dld_permit_number.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 237,
            columnNumber: 40
        }, this);
        $[59] = errors;
        $[60] = t;
        $[61] = t25;
    } else {
        t25 = $[61];
    }
    let t26;
    if ($[62] !== t21 || $[63] !== t24 || $[64] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[62] = t21;
        $[63] = t24;
        $[64] = t25;
        $[65] = t26;
    } else {
        t26 = $[65];
    }
    let t27;
    if ($[66] !== t) {
        t27 = t("properties.create.license.dldBarcode");
        $[66] = t;
        $[67] = t27;
    } else {
        t27 = $[67];
    }
    let t28;
    if ($[68] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "dld_barcode",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[68] = t27;
        $[69] = t28;
    } else {
        t28 = $[69];
    }
    let t29;
    if ($[70] !== register) {
        t29 = register("dld_barcode");
        $[70] = register;
        $[71] = t29;
    } else {
        t29 = $[71];
    }
    let t30;
    if ($[72] !== t) {
        t30 = t("properties.create.license.dldBarcode");
        $[72] = t;
        $[73] = t30;
    } else {
        t30 = $[73];
    }
    let t31;
    if ($[74] !== t29 || $[75] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "dld_barcode",
            ...t29,
            placeholder: t30,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[74] = t29;
        $[75] = t30;
        $[76] = t31;
    } else {
        t31 = $[76];
    }
    let t32;
    if ($[77] !== errors || $[78] !== t) {
        t32 = errors?.dld_barcode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.dld_barcode.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 297,
            columnNumber: 34
        }, this);
        $[77] = errors;
        $[78] = t;
        $[79] = t32;
    } else {
        t32 = $[79];
    }
    let t33;
    if ($[80] !== t28 || $[81] !== t31 || $[82] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t28,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[80] = t28;
        $[81] = t31;
        $[82] = t32;
        $[83] = t33;
    } else {
        t33 = $[83];
    }
    let t34;
    if ($[84] !== t) {
        t34 = t("properties.create.license.referenceListed");
        $[84] = t;
        $[85] = t34;
    } else {
        t34 = $[85];
    }
    let t35;
    if ($[86] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "reference_listed",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[86] = t34;
        $[87] = t35;
    } else {
        t35 = $[87];
    }
    let t36;
    if ($[88] !== register) {
        t36 = register("reference_listed");
        $[88] = register;
        $[89] = t36;
    } else {
        t36 = $[89];
    }
    let t37;
    if ($[90] !== t) {
        t37 = t("properties.create.license.referenceListed");
        $[90] = t;
        $[91] = t37;
    } else {
        t37 = $[91];
    }
    let t38;
    if ($[92] !== t36 || $[93] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "reference_listed",
            ...t36,
            placeholder: t37,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[92] = t36;
        $[93] = t37;
        $[94] = t38;
    } else {
        t38 = $[94];
    }
    let t39;
    if ($[95] !== errors || $[96] !== t) {
        t39 = errors?.reference_listed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.reference_listed.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 357,
            columnNumber: 39
        }, this);
        $[95] = errors;
        $[96] = t;
        $[97] = t39;
    } else {
        t39 = $[97];
    }
    let t40;
    if ($[98] !== t35 || $[99] !== t38 || $[100] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t35,
                t38,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[98] = t35;
        $[99] = t38;
        $[100] = t39;
        $[101] = t40;
    } else {
        t40 = $[101];
    }
    let t41;
    if ($[102] !== t) {
        t41 = t("properties.create.license.parkingSpaces");
        $[102] = t;
        $[103] = t41;
    } else {
        t41 = $[103];
    }
    let t42;
    if ($[104] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "parking_spaces",
            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[104] = t41;
        $[105] = t42;
    } else {
        t42 = $[105];
    }
    let t43;
    if ($[106] !== register) {
        t43 = register("parking_spaces", {
            valueAsNumber: true
        });
        $[106] = register;
        $[107] = t43;
    } else {
        t43 = $[107];
    }
    let t44;
    if ($[108] !== t) {
        t44 = t("properties.create.license.parkingSpacesPlaceholder");
        $[108] = t;
        $[109] = t44;
    } else {
        t44 = $[109];
    }
    let t45;
    if ($[110] !== t43 || $[111] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "parking_spaces",
            type: "number",
            ...t43,
            placeholder: t44,
            className: "mt-1 h-9 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[110] = t43;
        $[111] = t44;
        $[112] = t45;
    } else {
        t45 = $[112];
    }
    let t46;
    if ($[113] !== errors || $[114] !== t) {
        t46 = errors?.parking_spaces && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-xs mt-1",
            children: t(errors.parking_spaces.message)
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 419,
            columnNumber: 37
        }, this);
        $[113] = errors;
        $[114] = t;
        $[115] = t46;
    } else {
        t46 = $[115];
    }
    let t47;
    if ($[116] !== t42 || $[117] !== t45 || $[118] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t42,
                t45,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[116] = t42;
        $[117] = t45;
        $[118] = t46;
        $[119] = t47;
    } else {
        t47 = $[119];
    }
    let t48;
    if ($[120] !== t12 || $[121] !== t19 || $[122] !== t26 || $[123] !== t33 || $[124] !== t40 || $[125] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                t12,
                t19,
                t26,
                t33,
                t40,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[120] = t12;
        $[121] = t19;
        $[122] = t26;
        $[123] = t33;
        $[124] = t40;
        $[125] = t47;
        $[126] = t48;
    } else {
        t48 = $[126];
    }
    let t49;
    if ($[127] !== t48 || $[128] !== t5) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs",
            children: [
                t5,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        $[127] = t48;
        $[128] = t5;
        $[129] = t49;
    } else {
        t49 = $[129];
    }
    let t50;
    if ($[130] !== errors || $[131] !== register || $[132] !== setValue || $[133] !== watch) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$SeoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            register: register,
            setValue: setValue,
            watch: watch,
            errors: errors
        }, void 0, false, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[130] = errors;
        $[131] = register;
        $[132] = setValue;
        $[133] = watch;
        $[134] = t50;
    } else {
        t50 = $[134];
    }
    let t51;
    if ($[135] !== t49 || $[136] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/properties/components/create/tabs/LicensesTab.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[135] = t49;
        $[136] = t50;
        $[137] = t51;
    } else {
        t51 = $[137];
    }
    return t51;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/payment-plans.ts [app-client] (ecmascript)");
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
;
const TABS = [
    {
        id: "basic_info",
        translationKey: "properties.create.tabLabels.basicInfo",
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
        translationKey: "properties.create.tabLabels.pricingMedia",
        fields: [
            "price",
            "currency",
            "price_per_m2",
            "price_description"
        ]
    },
    {
        id: "unit_details",
        translationKey: "properties.create.tabLabels.unitDetails",
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
        translationKey: "properties.create.tabLabels.location",
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
        translationKey: "properties.create.tabLabels.amenities",
        fields: []
    },
    {
        id: "payment_plans",
        translationKey: "properties.create.tabLabels.paymentPlans",
        fields: []
    },
    {
        id: "licenses",
        translationKey: "properties.create.tabLabels.licenses",
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
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
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
    const getTabLabel = (tab_0)=>t(tab_0.translationKey);
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
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPaymentPlanPayload"])(plan, session?.user?.id ? String(session.user.id) : undefined),
                            entity_type: "PROPERTIES",
                            entities: [
                                {
                                    entity_id: Number(newPropertyId)
                                }
                            ]
                        };
                        const planRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$projects$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addProjectPayment"])(planPayload, token);
                        const createdPlanId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreatedPlanId"])(planRes);
                        if (createdPlanId) {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$payment$2d$plans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDraftPlanItems"])(createdPlanId, plan, token);
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
            for(let i = currentTabIndex; i < targetIndex; i++){
                const isTabValid = await validateTab(i);
                if (!isTabValid) {
                    if (activeTab !== TABS[i].id) {
                        setActiveTab(TABS[i].id);
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
        setImages((prev_1)=>prev_1.filter((_, i_0)=>i_0 !== index));
        setImagePreviews((prev_2)=>prev_2.filter((__0, i_1)=>i_1 !== index));
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
                lineNumber: 320,
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
                                            lineNumber: 334,
                                            columnNumber: 19
                                        }, this),
                                        count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] px-1.5 py-0.5 rounded-full font-semibold transition-colors ${isActive ? "bg-[#008081]/15 text-[#008081] dark:bg-teal-400/20 dark:text-teal-300" : "bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-300"}`,
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                            lineNumber: 335,
                                            columnNumber: 33
                                        }, this),
                                        hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block w-1.5 h-1.5 rounded-full bg-red-500 ms-0.5 align-middle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                            lineNumber: 338,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, tab_5.id, true, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 333,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                        lineNumber: 323,
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
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 345,
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
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 349,
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
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "location" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$LocationTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    errors: errors,
                                    setValue: setValue,
                                    watch: watch,
                                    projects: projects,
                                    isActive: activeTab === "location"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "amenities" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$AmenitiesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    errors: errors,
                                    setValue: setValue,
                                    watch: watch,
                                    selectedFeatures: selectedFeatures,
                                    onChangeFeatures: setSelectedFeatures,
                                    isActive: activeTab === "amenities"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "payment_plans" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$PaymentPlansTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    errors: errors,
                                    setValue: setValue,
                                    watch: watch,
                                    plans: paymentPlans,
                                    setPlans: setPaymentPlans
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: activeTab === "licenses" ? "block" : "hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$properties$2f$components$2f$create$2f$tabs$2f$LicensesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    register: register,
                                    errors: errors,
                                    setValue: setValue,
                                    watch: watch
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                        lineNumber: 344,
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
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isCreating ? t("properties.create.creating") : t("properties.create.createProperty")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                        lineNumber: 376,
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
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 375,
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
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("common.previous")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                        lineNumber: 389,
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
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "h-3.5 w-3.5 rtl:rotate-180"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                        lineNumber: 394,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/properties/create/page.client.tsx",
        lineNumber: 319,
        columnNumber: 10
    }, this);
}
_s(CreatePropertyPage, "JKO2B8WCgsJst8VVFuLqtCCKqKk=", false, function() {
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

//# sourceMappingURL=src_371f2c62._.js.map