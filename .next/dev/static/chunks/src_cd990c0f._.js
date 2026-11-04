(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/features/ready-market/services/ReadyUnitsService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadyUnitsService",
    ()=>ReadyUnitsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
;
/**
 * The ready-units API exposes show / store / update / accept / reject only
 * (GET /dashboard/ready-units answers "method not supported"), so the list uses the
 * properties index filtered to the ready market. If the backend adds a dedicated list
 * route or uses other filter names, change LIST_ENDPOINT / LIST_MARKET_PARAMS / FILTER_PARAMS only.
 */ const LIST_ENDPOINT = "/dashboard/properties";
const LIST_MARKET_PARAMS = {
    market_type: "ready"
};
/** Query-string names sent for each filter. */ const FILTER_PARAMS = {
    search: "property_name",
    isActive: "is_active",
    listingType: "listing_type",
    countryId: "country_id",
    sellerId: "user_id",
    role: "user_type",
    propertyTypeId: "property_type_id",
    propertySubtypeId: "property_subtype_id",
    city: "city",
    area: "area"
};
const unwrap = (body)=>body?.data !== undefined && body?.status !== undefined ? body.data : body;
const ReadyUnitsService = {
    list: async ({ page, perPage, ...filters })=>{
        const query = new URLSearchParams({
            ...LIST_MARKET_PARAMS,
            page: String(page),
            per_page: String(perPage)
        });
        Object.keys(FILTER_PARAMS).forEach((key)=>{
            const value = filters[key]?.trim();
            if (value) query.append(FILTER_PARAMS[key], value);
        });
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${LIST_ENDPOINT}?${query.toString()}`);
        return response.data;
    },
    get: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`/dashboard/ready-units/${propertyId}`);
        return unwrap(response.data);
    },
    create: async (payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/dashboard/ready-units", payload);
        return response.data;
    },
    /** The API updates with POST + multipart (partial updates supported). */ update: async (propertyId, payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/dashboard/ready-units/${propertyId}`, payload);
        return response.data;
    },
    accept: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`/dashboard/ready-units/${propertyId}/accept`, new FormData());
        return response.data;
    },
    reject: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].patch(`/dashboard/ready-units/${propertyId}/reject`, new FormData());
        return response.data;
    },
    /** No ready-units delete route is documented; ready units are Property records, so the property delete route is used. */ remove: async (propertyId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`/dashboard/properties/${propertyId}`);
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildReadyUnitFormData",
    ()=>buildReadyUnitFormData,
    "readyUnitToFormValues",
    ()=>readyUnitToFormValues,
    "toReadyUnitRow",
    ()=>toReadyUnitRow,
    "unpackReadyUnitsList",
    ()=>unpackReadyUnitsList
]);
const hasValue = (v)=>v !== undefined && v !== null && v !== "" && !(typeof v === "number" && Number.isNaN(v));
function buildReadyUnitFormData(values, newImages) {
    const fd = new FormData();
    const append = (key, value)=>{
        if (hasValue(value)) fd.append(key, String(value));
    };
    append("property_name", values.property_name.trim());
    append("property_no", values.property_no?.trim());
    append("description", values.description);
    append("property_type_id", values.property_type_id);
    append("property_subtype_id", values.property_subtype_id);
    append("price", values.price);
    append("size", values.size);
    append("bedrooms", values.bedrooms);
    append("bathrooms", values.bathrooms);
    append("parking_spaces", values.parking_spaces);
    append("floor", values.floor.trim());
    append("view", values.view?.trim());
    append("status", values.status);
    append("availability_status", values.availability_status);
    append("construction_status", values.construction_status);
    append("finishing_status", values.finishing_status);
    // UserPropertyRequest
    append("listing_type", values.listing_type);
    append("user_id", values.user_id);
    append("email", values.email.trim());
    append("phone_number", values.phone_number.trim());
    append("whatsapp_number", values.whatsapp_number.trim());
    append("year_built", values.year_built?.trim());
    // Nested location: city / area are names, resolved to ids by the API.
    append("location[google_map_link]", values.google_map_link.trim());
    append("location[latitude]", values.latitude);
    append("location[longitude]", values.longitude);
    append("location[city_id]", values.city.trim());
    append("location[area_id]", values.area.trim());
    append("location[description]", values.address?.trim());
    append("location[landmark]", values.address?.trim());
    if (values.payment_type) {
        append("payment_plan[payment_type]", values.payment_type);
        append("payment_plan[total_cost]", values.price);
        if (values.payment_type === "installments") {
            append("payment_plan[intervals]", values.payment_intervals);
            append("payment_plan[down_payment_price]", values.payment_down_payment);
        }
    }
    values.feature_ids.forEach((featureId, index)=>{
        fd.append(`features[${index}][feature_id]`, String(featureId));
    });
    if (newImages.length > 0) {
        newImages.forEach((file)=>fd.append("medias[]", file, file.name));
        fd.append("media_meta", JSON.stringify(newImages.map((_, index)=>({
                file_index: index,
                media_type: "image",
                is_primary: index === 0 ? 1 : 0,
                my_order: index + 1
            }))));
    }
    return fd;
}
const toNumber = (v)=>{
    if (v === null || v === undefined || v === "") return undefined;
    const n = Number(v);
    return Number.isNaN(n) ? undefined : n;
};
function readyUnitToFormValues(unit) {
    const up = unit.user_property;
    const owner = up?.user;
    return {
        listing_type: up?.listing_type === "rent" ? "rent" : "sale",
        property_name: unit.property_name ?? "",
        property_no: unit.property_no ?? "",
        description: unit.description ?? "",
        property_type_id: String(unit.property_type?.id ?? unit.property_type_id ?? ""),
        property_subtype_id: String(unit.property_subtype?.id ?? unit.property_subtype_id ?? ""),
        price: toNumber(unit.price),
        size: toNumber(unit.size),
        bedrooms: toNumber(unit.bedrooms),
        bathrooms: toNumber(unit.bathrooms),
        parking_spaces: toNumber(unit.parking_spaces),
        floor: unit.floor ?? "",
        view: unit.view ?? "",
        year_built: up?.built_year ?? up?.year_built ?? "",
        payment_type: unit.payment_plan?.payment_type ?? "",
        payment_intervals: toNumber(unit.payment_plan?.intervals),
        payment_down_payment: toNumber(unit.payment_plan?.down_payment_price),
        user_id: up?.user_id ?? owner?.user_id ?? owner?.id ?? null,
        email: up?.address?.email ?? owner?.email ?? "",
        phone_number: up?.address?.phone_number ?? owner?.phone_number ?? owner?.phone ?? "",
        whatsapp_number: up?.address?.whatsapp_number ?? up?.whatsapp_number ?? "",
        status: unit.status === "inactive" ? "inactive" : "active",
        availability_status: [
            "available",
            "reserved",
            "sold"
        ].includes(unit.availability_status ?? "") ? unit.availability_status : "available",
        construction_status: [
            "ready",
            "under-construction",
            "off-plan"
        ].includes(unit.construction_status ?? "") ? unit.construction_status : "ready",
        finishing_status: [
            "finished",
            "semi-finished",
            "unfinished"
        ].includes(unit.finishing_status ?? "") ? unit.finishing_status : "finished",
        google_map_link: unit.location?.google_map_link ?? "",
        latitude: toNumber(unit.location?.latitude),
        longitude: toNumber(unit.location?.longitude),
        city: unit.location?.city?.name ?? unit.location?.city?.city_name ?? "",
        area: unit.location?.area?.name ?? unit.location?.area?.area_name ?? "",
        address: unit.location?.description ?? unit.location?.landmark ?? up?.address?.street_address ?? "",
        feature_ids: (unit.features ?? []).map((f)=>Number(f.feature_id)).filter((id)=>!Number.isNaN(id))
    };
}
const toState = (v)=>{
    if (v === null || v === undefined || v === "") return null;
    const n = Number(v);
    return n === 0 || n === 1 || n === 2 ? n : null;
};
function toReadyUnitRow(raw) {
    const item = raw?.data && typeof raw.data === "object" && !Array.isArray(raw.data) ? raw.data : raw;
    const owner = item?.user_property?.user ?? item?.user ?? item?.owner;
    const id = Number(item?.property_id ?? item?.id);
    const propertyNo = item?.property_no;
    return {
        id,
        // property_no is "0" when no unit number was entered; fall back to the ID.
        unitNumber: propertyNo && String(propertyNo) !== "0" ? String(propertyNo) : `#${id}`,
        name: item?.property_name ?? "",
        owner: item?.owner_name ?? owner?.name ?? item?.user_name ?? "-",
        location: item?.area_name ?? item?.location?.area?.name ?? item?.city_name ?? item?.location?.city?.name ?? "-",
        size: toNumber(item?.size) ?? null,
        sizeUnit: item?.country_dimension_unit ?? "",
        price: toNumber(item?.price) ?? null,
        currency: item?.country_currency ?? "",
        availability: item?.availability_status ?? "",
        status: item?.status ?? "",
        createdAt: item?.created_at ?? null,
        listingType: item?.user_property?.listing_type ?? item?.listing_type,
        state: toState(item?.is_active)
    };
}
function unpackReadyUnitsList(body) {
    const page = body?.data && !Array.isArray(body.data) && Array.isArray(body.data.data) ? body.data : body;
    const items = Array.isArray(page?.data) ? page.data : Array.isArray(page) ? page : [];
    const total = Number(page?.total ?? page?.meta?.total ?? body?.total ?? items.length) || 0;
    return {
        rows: items.map(toReadyUnitRow).filter((r)=>!Number.isNaN(r.id)),
        total
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readyUnitsKeys",
    ()=>readyUnitsKeys,
    "useReadyUnit",
    ()=>useReadyUnit,
    "useReadyUnitReview",
    ()=>useReadyUnitReview,
    "useReadyUnitsList",
    ()=>useReadyUnitsList,
    "useSaveReadyUnit",
    ()=>useSaveReadyUnit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/services/ReadyUnitsService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const readyUnitsKeys = {
    all: [
        "readyUnits"
    ],
    list: (params)=>[
            "readyUnits",
            "list",
            params
        ],
    detail: (id)=>[
            "readyUnits",
            "detail",
            id
        ]
};
function useReadyUnitsList(params, t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d";
    }
    const enabled = t0 === undefined ? true : t0;
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    let t1;
    if ($[1] !== params) {
        t1 = readyUnitsKeys.list(params);
        $[1] = params;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== params) {
        t2 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].list(params);
        $[3] = params;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const t3 = !!session?.user?.accessToken && enabled;
    let t4;
    if ($[5] !== t1 || $[6] !== t2 || $[7] !== t3) {
        t4 = {
            queryKey: t1,
            queryFn: t2,
            select: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpackReadyUnitsList"],
            enabled: t3,
            placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"],
            refetchOnMount: true
        };
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t4);
}
_s(useReadyUnitsList, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useReadyUnit(id) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    let t0;
    if ($[1] !== id) {
        t0 = readyUnitsKeys.detail(id);
        $[1] = id;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== id) {
        t1 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].get(id);
        $[3] = id;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== id || $[6] !== session?.user?.accessToken) {
        t2 = !!session?.user?.accessToken && Number.isFinite(id) && id > 0;
        $[5] = id;
        $[6] = session?.user?.accessToken;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== t0 || $[9] !== t1 || $[10] !== t2) {
        t3 = {
            queryKey: t0,
            queryFn: t1,
            enabled: t2,
            staleTime: 0,
            refetchOnMount: true
        };
        $[8] = t0;
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t3);
}
_s1(useReadyUnit, "i+j7jycpC14JeH8v+bCNC0e5DEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useReadyUnitReview() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = ({
            "useReadyUnitReview[refresh]": (id)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "readyUnits",
                        "list"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: readyUnitsKeys.detail(id)
                });
            }
        })["useReadyUnitReview[refresh]"];
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const refresh = t0;
    let t1;
    if ($[3] !== refresh || $[4] !== t) {
        t1 = (_r, id_1)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("readyMarket.messages.acceptSuccess"));
            refresh(id_1);
        };
        $[3] = refresh;
        $[4] = t;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t) {
        t2 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.messages.acceptFailed"));
        $[6] = t;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== t1 || $[9] !== t2) {
        t3 = {
            mutationFn: _temp,
            onSuccess: t1,
            onError: t2
        };
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    const accept = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t3);
    let t4;
    if ($[11] !== refresh || $[12] !== t) {
        t4 = (_r_0, id_3)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("readyMarket.messages.rejectSuccess"));
            refresh(id_3);
        };
        $[11] = refresh;
        $[12] = t;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== t) {
        t5 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.messages.rejectFailed"));
        $[14] = t;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t4 || $[17] !== t5) {
        t6 = {
            mutationFn: _temp2,
            onSuccess: t4,
            onError: t5
        };
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    const reject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t6);
    let t7;
    if ($[19] !== queryClient || $[20] !== t) {
        t7 = (_r_1, id_5)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("readyMarket.messages.deleteSuccess"));
            queryClient.invalidateQueries({
                queryKey: [
                    "readyUnits",
                    "list"
                ]
            });
            queryClient.removeQueries({
                queryKey: readyUnitsKeys.detail(id_5)
            });
        };
        $[19] = queryClient;
        $[20] = t;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== t) {
        t8 = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t("readyMarket.messages.deleteFailed"));
        $[22] = t;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== t7 || $[25] !== t8) {
        t9 = {
            mutationFn: _temp3,
            onSuccess: t7,
            onError: t8
        };
        $[24] = t7;
        $[25] = t8;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t9);
    const t10 = accept.isPending ? accept.variables : reject.isPending ? reject.variables : undefined;
    let t11;
    if ($[27] !== accept.mutate || $[28] !== reject.mutate || $[29] !== remove.isPending || $[30] !== remove.mutate || $[31] !== t10) {
        t11 = {
            acceptUnit: accept.mutate,
            rejectUnit: reject.mutate,
            deleteUnit: remove.mutate,
            isDeleting: remove.isPending,
            pendingId: t10
        };
        $[27] = accept.mutate;
        $[28] = reject.mutate;
        $[29] = remove.isPending;
        $[30] = remove.mutate;
        $[31] = t10;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    return t11;
}
_s2(useReadyUnitReview, "Mgkn1I1rWoFgtSsz7Dzw+XEDlTI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
/** Create: POST /dashboard/ready-units — Update: POST /dashboard/ready-units/{id} (multipart). */ function _temp3(id_4) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].remove(id_4);
}
function _temp2(id_2) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].reject(id_2);
}
function _temp(id_0) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].accept(id_0);
}
function useSaveReadyUnit(id) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aec4f3723828dad5d0e8aae1ba893297bb2757c1b66ab57313b8dab8df77238d";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== id) {
        t0 = (payload)=>id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].update(id, payload) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$services$2f$ReadyUnitsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitsService"].create(payload);
        $[1] = id;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== id || $[4] !== queryClient) {
        t1 = ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "readyUnits",
                    "list"
                ]
            });
            if (id) {
                queryClient.invalidateQueries({
                    queryKey: readyUnitsKeys.detail(id)
                });
            }
        };
        $[3] = id;
        $[4] = queryClient;
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t2);
}
_s3(useSaveReadyUnit, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** `is_active` values returned by the API for ready units. */ __turbopack_context__.s([
    "AVAILABILITY_STATUSES",
    ()=>AVAILABILITY_STATUSES,
    "CONSTRUCTION_STATUSES",
    ()=>CONSTRUCTION_STATUSES,
    "FINISHING_STATUSES",
    ()=>FINISHING_STATUSES,
    "PAYMENT_TYPES",
    ()=>PAYMENT_TYPES,
    "READY_UNIT_STATE",
    ()=>READY_UNIT_STATE
]);
const READY_UNIT_STATE = {
    REJECTED: 0,
    ACCEPTED: 1,
    PENDING: 2
};
const PAYMENT_TYPES = [
    "cash",
    "installments",
    "down_payment",
    "booking",
    "reservation",
    "monthly_installment",
    "quarterly_installment",
    "half_year_installment",
    "yearly_installment",
    "handover",
    "maintenance",
    "other"
];
const AVAILABILITY_STATUSES = [
    "available",
    "reserved",
    "sold"
];
const CONSTRUCTION_STATUSES = [
    "ready",
    "under-construction",
    "off-plan"
];
const FINISHING_STATUSES = [
    "finished",
    "semi-finished",
    "unfinished"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/use-base-path.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReadyMarketBasePath",
    ()=>useReadyMarketBasePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useReadyMarketBasePath() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "0cdd8f61e1f23eb388a1f5abf244dbad3ae9d120a72f286555ead83282364673") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0cdd8f61e1f23eb388a1f5abf244dbad3ae9d120a72f286555ead83282364673";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return `${pathname?.startsWith("/developer") ? "/developer" : "/admin"}/ready-market`;
}
_s(useReadyMarketBasePath, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/components/ReadyUnitStatusBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadyUnitStatusBadge",
    ()=>ReadyUnitStatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const STYLES = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].PENDING]: "bg-[#fff1ed] text-[#bc3916] border border-[#ffd5cc] dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/60",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].ACCEPTED]: "bg-[#ecfdf3] text-[#027a48] border border-[#abefc6] dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].REJECTED]: "bg-[#fef3f2] text-[#b42318] border border-[#fecdca] dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60"
};
const LABEL_KEYS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].PENDING]: "readyMarket.status.pending",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].ACCEPTED]: "readyMarket.status.confirmed",
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].REJECTED]: "readyMarket.status.rejected"
};
function ReadyUnitStatusBadge(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "50f2db044a4f271483b643a090fc1cb2984e0cf278cdd54beddbceda88766983") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "50f2db044a4f271483b643a090fc1cb2984e0cf278cdd54beddbceda88766983";
    }
    const { state } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (state === null) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-400",
                children: "-"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/components/ReadyUnitStatusBadge.tsx",
                lineNumber: 34,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    const t1 = STYLES[state];
    let t2;
    if ($[2] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium", t1);
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = LABEL_KEYS[state];
    let t4;
    if ($[4] !== t || $[5] !== t3) {
        t4 = t(t3);
        $[4] = t;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t2 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/components/ReadyUnitStatusBadge.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(ReadyUnitStatusBadge, "NOb/gJCLVjznRzrG0IpBeuqUR5k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ReadyUnitStatusBadge;
var _c;
__turbopack_context__.k.register(_c, "ReadyUnitStatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReadyUnitDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bath.js [app-client] (ecmascript) <export default as Bath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bed-double.js [app-client] (ecmascript) <export default as BedDouble>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$use$2d$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/use-base-path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$components$2f$ReadyUnitStatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/ready-market/components/ReadyUnitStatusBadge.tsx [app-client] (ecmascript)");
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
const card = "rounded-xl border border-gray-200 bg-white p-4 sm:p-5 dark:border-neutral-800 dark:bg-neutral-900";
function DetailRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "bfc8b578840aa7603f18fa968eb2d510582d60b409653c777325f2999cf4fdda") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bfc8b578840aa7603f18fa968eb2d510582d60b409653c777325f2999cf4fdda";
    }
    const { label, value } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-100",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = value === null || value === undefined || value === "" ? "-" : value;
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-600 dark:text-gray-300 text-end",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t1 || $[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-4 border-b border-gray-100 py-3 last:border-b-0 dark:border-neutral-800",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_c = DetailRow;
function ReadyUnitDetailsPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(285);
    if ($[0] !== "bfc8b578840aa7603f18fa968eb2d510582d60b409653c777325f2999cf4fdda") {
        for(let $i = 0; $i < 285; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bfc8b578840aa7603f18fa968eb2d510582d60b409653c777325f2999cf4fdda";
    }
    const { id } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$use$2d$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyMarketBasePath"])();
    const { data: unit, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyUnit"])(id);
    const { acceptUnit, rejectUnit, pendingId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyUnitReview"])();
    const [activeImage, setActiveImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showPhone, setShowPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (isLoading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-8 w-80"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 90,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        let t2;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 lg:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-[420px] lg:col-span-2"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                                lineNumber: 97,
                                columnNumber: 98
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-[420px]"
                            }, void 0, false, {
                                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                                lineNumber: 97,
                                columnNumber: 146
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 97,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 97,
                columnNumber: 12
            }, this);
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        return t2;
    }
    if (isError || !unit) {
        let t1;
        if ($[3] !== t) {
            t1 = t("readyMarket.details.loadFailed");
            $[3] = t;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        let t2;
        if ($[5] !== t1) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "py-16 text-center text-sm text-red-600",
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 115,
                columnNumber: 12
            }, this);
            $[5] = t1;
            $[6] = t2;
        } else {
            t2 = $[6];
        }
        return t2;
    }
    let hasCoords;
    let lat;
    let lng;
    let owner;
    let ownerName;
    let paymentType;
    let phone;
    let price;
    let rating;
    let reviewsCount;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    let whatsapp;
    if ($[7] !== acceptUnit || $[8] !== activeImage || $[9] !== basePath || $[10] !== pendingId || $[11] !== rejectUnit || $[12] !== router || $[13] !== t || $[14] !== unit.is_active || $[15] !== unit.location?.latitude || $[16] !== unit.location?.longitude || $[17] !== unit.medias || $[18] !== unit.payment_plan?.payment_type || $[19] !== unit.price || $[20] !== unit.property_id || $[21] !== unit.property_name || $[22] !== unit.user_property?.address?.phone_number || $[23] !== unit.user_property?.user || $[24] !== unit.user_property?.whatsapp_number) {
        const images = (unit.medias ?? []).filter(_ReadyUnitDetailsPageAnonymous);
        const mainImage = images[activeImage] ?? images[0];
        owner = unit.user_property?.user;
        ownerName = owner?.name ?? "-";
        phone = unit.user_property?.address?.phone_number ?? owner?.phone_number ?? owner?.phone ?? "";
        whatsapp = unit.user_property?.whatsapp_number ?? phone;
        lat = Number(unit.location?.latitude);
        lng = Number(unit.location?.longitude);
        let t10;
        if ($[45] !== lat || $[46] !== lng) {
            t10 = Number.isFinite(lat) && Number.isFinite(lng) && !(lat === 0 && lng === 0);
            $[45] = lat;
            $[46] = lng;
            $[47] = t10;
        } else {
            t10 = $[47];
        }
        hasCoords = t10;
        price = Number(unit.price);
        rating = Number(owner?.rating ?? owner?.average_rating);
        reviewsCount = Number(owner?.reviews_count ?? owner?.reviews ?? 0);
        paymentType = unit.payment_plan?.payment_type;
        const state = unit.is_active === undefined ? null : unit.is_active;
        const isPending = pendingId === unit.property_id;
        t8 = "space-y-4";
        let t11;
        if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                className: "h-3.5 w-3.5"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 171,
                columnNumber: 13
            }, this);
            $[48] = t11;
        } else {
            t11 = $[48];
        }
        let t12;
        if ($[49] !== t) {
            t12 = t("readyMarket.breadcrumb.home");
            $[49] = t;
            $[50] = t12;
        } else {
            t12 = $[50];
        }
        let t13;
        if ($[51] !== t12) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t12
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, this);
            $[51] = t12;
            $[52] = t13;
        } else {
            t13 = $[52];
        }
        let t14;
        if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "h-3 w-3 rtl:rotate-180"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 194,
                columnNumber: 13
            }, this);
            $[53] = t14;
        } else {
            t14 = $[53];
        }
        let t15;
        if ($[54] !== t) {
            t15 = t("readyMarket.title");
            $[54] = t;
            $[55] = t15;
        } else {
            t15 = $[55];
        }
        let t16;
        if ($[56] !== basePath || $[57] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: basePath,
                prefetch: false,
                className: "hover:text-[#007b78]",
                children: t15
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 209,
                columnNumber: 13
            }, this);
            $[56] = basePath;
            $[57] = t15;
            $[58] = t16;
        } else {
            t16 = $[58];
        }
        let t17;
        if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "h-3 w-3 rtl:rotate-180"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 218,
                columnNumber: 13
            }, this);
            $[59] = t17;
        } else {
            t17 = $[59];
        }
        let t18;
        if ($[60] !== unit.property_name) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "max-w-[200px] truncate text-gray-700 dark:text-gray-300",
                children: unit.property_name
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, this);
            $[60] = unit.property_name;
            $[61] = t18;
        } else {
            t18 = $[61];
        }
        let t19;
        if ($[62] !== t13 || $[63] !== t16 || $[64] !== t18) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center gap-1 text-xs text-gray-500",
                children: [
                    t11,
                    t13,
                    t14,
                    t16,
                    t17,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this);
            $[62] = t13;
            $[63] = t16;
            $[64] = t18;
            $[65] = t19;
        } else {
            t19 = $[65];
        }
        let t20;
        if ($[66] !== basePath || $[67] !== router) {
            t20 = ({
                "ReadyUnitDetailsPage[<button>.onClick]": ()=>router.push(basePath)
            })["ReadyUnitDetailsPage[<button>.onClick]"];
            $[66] = basePath;
            $[67] = router;
            $[68] = t20;
        } else {
            t20 = $[68];
        }
        let t21;
        if ($[69] !== t) {
            t21 = t("common.back");
            $[69] = t;
            $[70] = t21;
        } else {
            t21 = $[70];
        }
        let t22;
        if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                className: "h-5 w-5 text-gray-700 dark:text-gray-200 rtl:rotate-180"
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 262,
                columnNumber: 13
            }, this);
            $[71] = t22;
        } else {
            t22 = $[71];
        }
        let t23;
        if ($[72] !== t20 || $[73] !== t21) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: t20,
                "aria-label": t21,
                children: t22
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this);
            $[72] = t20;
            $[73] = t21;
            $[74] = t23;
        } else {
            t23 = $[74];
        }
        let t24;
        if ($[75] !== unit.property_name) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-lg font-bold text-gray-900 dark:text-gray-100 sm:text-xl",
                children: unit.property_name
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 278,
                columnNumber: 13
            }, this);
            $[75] = unit.property_name;
            $[76] = t24;
        } else {
            t24 = $[76];
        }
        let t25;
        if ($[77] !== state) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$components$2f$ReadyUnitStatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadyUnitStatusBadge"], {
                state: state
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 286,
                columnNumber: 13
            }, this);
            $[77] = state;
            $[78] = t25;
        } else {
            t25 = $[78];
        }
        let t26;
        if ($[79] !== t23 || $[80] !== t24 || $[81] !== t25) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t23,
                    t24,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 294,
                columnNumber: 13
            }, this);
            $[79] = t23;
            $[80] = t24;
            $[81] = t25;
            $[82] = t26;
        } else {
            t26 = $[82];
        }
        let t27;
        if ($[83] !== t19 || $[84] !== t26) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 space-y-1.5",
                children: [
                    t19,
                    t26
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 304,
                columnNumber: 13
            }, this);
            $[83] = t19;
            $[84] = t26;
            $[85] = t27;
        } else {
            t27 = $[85];
        }
        const t28 = isPending || state === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].REJECTED;
        let t29;
        if ($[86] !== rejectUnit || $[87] !== unit.property_id) {
            t29 = ({
                "ReadyUnitDetailsPage[<button>.onClick]": ()=>rejectUnit(unit.property_id)
            })["ReadyUnitDetailsPage[<button>.onClick]"];
            $[86] = rejectUnit;
            $[87] = unit.property_id;
            $[88] = t29;
        } else {
            t29 = $[88];
        }
        let t30;
        if ($[89] !== t) {
            t30 = t("readyMarket.actions.reject");
            $[89] = t;
            $[90] = t30;
        } else {
            t30 = $[90];
        }
        let t31;
        if ($[91] !== t28 || $[92] !== t29 || $[93] !== t30) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: t28,
                onClick: t29,
                className: "h-9 rounded-lg bg-[#f04438] px-4 text-xs font-medium text-white hover:bg-[#d92d20] disabled:opacity-50",
                children: t30
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 333,
                columnNumber: 13
            }, this);
            $[91] = t28;
            $[92] = t29;
            $[93] = t30;
            $[94] = t31;
        } else {
            t31 = $[94];
        }
        const t32 = isPending || state === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["READY_UNIT_STATE"].ACCEPTED;
        let t33;
        if ($[95] !== acceptUnit || $[96] !== unit.property_id) {
            t33 = ({
                "ReadyUnitDetailsPage[<button>.onClick]": ()=>acceptUnit(unit.property_id)
            })["ReadyUnitDetailsPage[<button>.onClick]"];
            $[95] = acceptUnit;
            $[96] = unit.property_id;
            $[97] = t33;
        } else {
            t33 = $[97];
        }
        let t34;
        if ($[98] !== t) {
            t34 = t("readyMarket.actions.approve");
            $[98] = t;
            $[99] = t34;
        } else {
            t34 = $[99];
        }
        let t35;
        if ($[100] !== t32 || $[101] !== t33 || $[102] !== t34) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: t32,
                onClick: t33,
                className: "h-9 rounded-lg bg-[#12b76a] px-4 text-xs font-medium text-white hover:bg-[#039855] disabled:opacity-50",
                children: t34
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 363,
                columnNumber: 13
            }, this);
            $[100] = t32;
            $[101] = t33;
            $[102] = t34;
            $[103] = t35;
        } else {
            t35 = $[103];
        }
        const t36 = `${basePath}/${unit.property_id}/edit`;
        let t37;
        if ($[104] !== t) {
            t37 = t("readyMarket.actions.edit");
            $[104] = t;
            $[105] = t37;
        } else {
            t37 = $[105];
        }
        let t38;
        if ($[106] !== t36 || $[107] !== t37) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t36,
                prefetch: false,
                className: "inline-flex h-9 items-center rounded-lg bg-[#007b78] px-4 text-xs font-medium text-white hover:bg-[#006664]",
                children: t37
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 382,
                columnNumber: 13
            }, this);
            $[106] = t36;
            $[107] = t37;
            $[108] = t38;
        } else {
            t38 = $[108];
        }
        let t39;
        if ($[109] !== t31 || $[110] !== t35 || $[111] !== t38) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    t31,
                    t35,
                    t38
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 391,
                columnNumber: 13
            }, this);
            $[109] = t31;
            $[110] = t35;
            $[111] = t38;
            $[112] = t39;
        } else {
            t39 = $[112];
        }
        if ($[113] !== t27 || $[114] !== t39) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    t27,
                    t39
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 400,
                columnNumber: 12
            }, this);
            $[113] = t27;
            $[114] = t39;
            $[115] = t9;
        } else {
            t9 = $[115];
        }
        if ($[116] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(card, "space-y-4");
            $[116] = t6;
        } else {
            t6 = $[116];
        }
        let t40;
        if ($[117] !== t) {
            t40 = t("readyMarket.form.basicInfo");
            $[117] = t;
            $[118] = t40;
        } else {
            t40 = $[118];
        }
        if ($[119] !== t40) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-base font-semibold text-gray-900 dark:text-gray-100",
                children: t40
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 422,
                columnNumber: 12
            }, this);
            $[119] = t40;
            $[120] = t7;
        } else {
            t7 = $[120];
        }
        t5 = "grid grid-cols-1 gap-4 lg:grid-cols-3";
        t4 = "space-y-4 lg:col-span-2";
        t1 = "space-y-2";
        const t41 = mainImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: mainImage.media_url,
            alt: unit.property_name,
            fill: true,
            sizes: "(max-width: 1024px) 100vw, 66vw",
            className: "object-cover",
            unoptimized: true
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 431,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-center text-sm text-gray-400",
            children: t("readyMarket.details.noImages")
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 431,
            columnNumber: 188
        }, this);
        if ($[121] !== t41) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-800",
                children: t41
            }, void 0, false, {
                fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                lineNumber: 433,
                columnNumber: 12
            }, this);
            $[121] = t41;
            $[122] = t2;
        } else {
            t2 = $[122];
        }
        t3 = images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-2",
            children: images.slice(0, 8).map({
                "ReadyUnitDetailsPage[(anonymous)()]": (media, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: {
                            "ReadyUnitDetailsPage[(anonymous)() > <button>.onClick]": ()=>setActiveImage(index)
                        }["ReadyUnitDetailsPage[(anonymous)() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative aspect-[4/3] overflow-hidden rounded-lg border-2", index === activeImage ? "border-[#007b78]" : "border-transparent"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: media.media_url,
                            alt: unit.property_name,
                            fill: true,
                            sizes: "160px",
                            className: "object-cover",
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                            lineNumber: 442,
                            columnNumber: 213
                        }, this)
                    }, media.media_id, false, {
                        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                        lineNumber: 440,
                        columnNumber: 66
                    }, this)
            }["ReadyUnitDetailsPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 439,
            columnNumber: 31
        }, this);
        $[7] = acceptUnit;
        $[8] = activeImage;
        $[9] = basePath;
        $[10] = pendingId;
        $[11] = rejectUnit;
        $[12] = router;
        $[13] = t;
        $[14] = unit.is_active;
        $[15] = unit.location?.latitude;
        $[16] = unit.location?.longitude;
        $[17] = unit.medias;
        $[18] = unit.payment_plan?.payment_type;
        $[19] = unit.price;
        $[20] = unit.property_id;
        $[21] = unit.property_name;
        $[22] = unit.user_property?.address?.phone_number;
        $[23] = unit.user_property?.user;
        $[24] = unit.user_property?.whatsapp_number;
        $[25] = hasCoords;
        $[26] = lat;
        $[27] = lng;
        $[28] = owner;
        $[29] = ownerName;
        $[30] = paymentType;
        $[31] = phone;
        $[32] = price;
        $[33] = rating;
        $[34] = reviewsCount;
        $[35] = t1;
        $[36] = t2;
        $[37] = t3;
        $[38] = t4;
        $[39] = t5;
        $[40] = t6;
        $[41] = t7;
        $[42] = t8;
        $[43] = t9;
        $[44] = whatsapp;
    } else {
        hasCoords = $[25];
        lat = $[26];
        lng = $[27];
        owner = $[28];
        ownerName = $[29];
        paymentType = $[30];
        phone = $[31];
        price = $[32];
        rating = $[33];
        reviewsCount = $[34];
        t1 = $[35];
        t2 = $[36];
        t3 = $[37];
        t4 = $[38];
        t5 = $[39];
        t6 = $[40];
        t7 = $[41];
        t8 = $[42];
        t9 = $[43];
        whatsapp = $[44];
    }
    let t10;
    if ($[123] !== t1 || $[124] !== t2 || $[125] !== t3) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[123] = t1;
        $[124] = t2;
        $[125] = t3;
        $[126] = t10;
    } else {
        t10 = $[126];
    }
    let t11;
    if ($[127] !== t) {
        t11 = t("readyMarket.details.listingDetails");
        $[127] = t;
        $[128] = t11;
    } else {
        t11 = $[128];
    }
    let t12;
    if ($[129] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-3 text-sm font-semibold text-gray-900 dark:text-gray-100",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[129] = t11;
        $[130] = t12;
    } else {
        t12 = $[130];
    }
    let t13;
    if ($[131] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bed$2d$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BedDouble$3e$__["BedDouble"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[131] = t13;
    } else {
        t13 = $[131];
    }
    const t14 = unit.bedrooms ?? 0;
    let t15;
    if ($[132] !== t || $[133] !== t14) {
        t15 = t("readyMarket.details.beds", {
            count: t14
        });
        $[132] = t;
        $[133] = t14;
        $[134] = t15;
    } else {
        t15 = $[134];
    }
    let t16;
    if ($[135] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1.5",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[135] = t15;
        $[136] = t16;
    } else {
        t16 = $[136];
    }
    let t17;
    if ($[137] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__["Bath"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[137] = t17;
    } else {
        t17 = $[137];
    }
    const t18 = unit.bathrooms ?? 0;
    let t19;
    if ($[138] !== t || $[139] !== t18) {
        t19 = t("readyMarket.details.baths", {
            count: t18
        });
        $[138] = t;
        $[139] = t18;
        $[140] = t19;
    } else {
        t19 = $[140];
    }
    let t20;
    if ($[141] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1.5",
            children: [
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 578,
            columnNumber: 11
        }, this);
        $[141] = t19;
        $[142] = t20;
    } else {
        t20 = $[142];
    }
    let t21;
    if ($[143] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, this);
        $[143] = t21;
    } else {
        t21 = $[143];
    }
    const t22 = unit.size ?? "-";
    let t23;
    if ($[144] !== t || $[145] !== t22) {
        t23 = t("readyMarket.table.sizeValue", {
            size: t22
        });
        $[144] = t;
        $[145] = t22;
        $[146] = t23;
    } else {
        t23 = $[146];
    }
    let t24;
    if ($[147] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-1.5",
            children: [
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 605,
            columnNumber: 11
        }, this);
        $[147] = t23;
        $[148] = t24;
    } else {
        t24 = $[148];
    }
    let t25;
    if ($[149] !== t16 || $[150] !== t20 || $[151] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center gap-4 pb-2 text-xs text-gray-600 dark:text-gray-300",
            children: [
                t16,
                t20,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[149] = t16;
        $[150] = t20;
        $[151] = t24;
        $[152] = t25;
    } else {
        t25 = $[152];
    }
    let t26;
    if ($[153] !== t) {
        t26 = t("readyMarket.form.floor");
        $[153] = t;
        $[154] = t26;
    } else {
        t26 = $[154];
    }
    let t27;
    if ($[155] !== t26 || $[156] !== unit.floor) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
            label: t26,
            value: unit.floor
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 631,
            columnNumber: 11
        }, this);
        $[155] = t26;
        $[156] = unit.floor;
        $[157] = t27;
    } else {
        t27 = $[157];
    }
    let t28;
    if ($[158] !== t) {
        t28 = t("readyMarket.form.yearBuilt");
        $[158] = t;
        $[159] = t28;
    } else {
        t28 = $[159];
    }
    const t29 = unit.user_property?.built_year ?? unit.user_property?.year_built;
    let t30;
    if ($[160] !== t28 || $[161] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
            label: t28,
            value: t29
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 649,
            columnNumber: 11
        }, this);
        $[160] = t28;
        $[161] = t29;
        $[162] = t30;
    } else {
        t30 = $[162];
    }
    let t31;
    if ($[163] !== t) {
        t31 = t("readyMarket.form.view");
        $[163] = t;
        $[164] = t31;
    } else {
        t31 = $[164];
    }
    let t32;
    if ($[165] !== t31 || $[166] !== unit.view) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
            label: t31,
            value: unit.view
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 666,
            columnNumber: 11
        }, this);
        $[165] = t31;
        $[166] = unit.view;
        $[167] = t32;
    } else {
        t32 = $[167];
    }
    let t33;
    if ($[168] !== t) {
        t33 = t("readyMarket.form.paymentMethod");
        $[168] = t;
        $[169] = t33;
    } else {
        t33 = $[169];
    }
    let t34;
    if ($[170] !== paymentType || $[171] !== t) {
        t34 = paymentType ? t(`readyMarket.paymentTypes.${paymentType}`) : null;
        $[170] = paymentType;
        $[171] = t;
        $[172] = t34;
    } else {
        t34 = $[172];
    }
    let t35;
    if ($[173] !== t33 || $[174] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
            label: t33,
            value: t34
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 692,
            columnNumber: 11
        }, this);
        $[173] = t33;
        $[174] = t34;
        $[175] = t35;
    } else {
        t35 = $[175];
    }
    let t36;
    if ($[176] !== t) {
        t36 = t("readyMarket.form.listingType");
        $[176] = t;
        $[177] = t36;
    } else {
        t36 = $[177];
    }
    let t37;
    if ($[178] !== t || $[179] !== unit.user_property) {
        t37 = unit.user_property?.listing_type ? t(`readyMarket.listingType.${unit.user_property.listing_type}`) : null;
        $[178] = t;
        $[179] = unit.user_property;
        $[180] = t37;
    } else {
        t37 = $[180];
    }
    let t38;
    if ($[181] !== t36 || $[182] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
            label: t36,
            value: t37
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 718,
            columnNumber: 11
        }, this);
        $[181] = t36;
        $[182] = t37;
        $[183] = t38;
    } else {
        t38 = $[183];
    }
    let t39;
    if ($[184] !== t) {
        t39 = t("readyMarket.form.unitType");
        $[184] = t;
        $[185] = t39;
    } else {
        t39 = $[185];
    }
    const t40 = unit.property_subtype?.name ?? unit.property_type?.name;
    let t41;
    if ($[186] !== t39 || $[187] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
            label: t39,
            value: t40
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 736,
            columnNumber: 11
        }, this);
        $[186] = t39;
        $[187] = t40;
        $[188] = t41;
    } else {
        t41 = $[188];
    }
    let t42;
    if ($[189] !== t) {
        t42 = t("readyMarket.details.listingId");
        $[189] = t;
        $[190] = t42;
    } else {
        t42 = $[190];
    }
    const t43 = unit.property_no || `#${unit.property_id}`;
    let t44;
    if ($[191] !== t42 || $[192] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
            label: t42,
            value: t43
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 754,
            columnNumber: 11
        }, this);
        $[191] = t42;
        $[192] = t43;
        $[193] = t44;
    } else {
        t44 = $[193];
    }
    let t45;
    if ($[194] !== t || $[195] !== unit.description) {
        t45 = unit.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100",
                    children: [
                        t("readyMarket.details.description"),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                            className: "h-3.5 w-3.5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                            lineNumber: 763,
                            columnNumber: 193
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 763,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-sm max-w-none text-sm text-gray-600 dark:prose-invert dark:text-gray-300",
                    dangerouslySetInnerHTML: {
                        __html: unit.description
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 763,
                    columnNumber: 244
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 763,
            columnNumber: 31
        }, this);
        $[194] = t;
        $[195] = unit.description;
        $[196] = t45;
    } else {
        t45 = $[196];
    }
    let t46;
    if ($[197] !== t || $[198] !== unit.features) {
        t46 = (unit.features ?? []).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100",
                    children: t("readyMarket.form.amenities")
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 774,
                    columnNumber: 69
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: unit.features.map(_ReadyUnitDetailsPageUnitFeaturesMap)
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 774,
                    columnNumber: 183
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 774,
            columnNumber: 47
        }, this);
        $[197] = t;
        $[198] = unit.features;
        $[199] = t46;
    } else {
        t46 = $[199];
    }
    let t47;
    if ($[200] !== t12 || $[201] !== t25 || $[202] !== t27 || $[203] !== t30 || $[204] !== t32 || $[205] !== t35 || $[206] !== t38 || $[207] !== t41 || $[208] !== t44 || $[209] !== t45 || $[210] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: card,
            children: [
                t12,
                t25,
                t27,
                t30,
                t32,
                t35,
                t38,
                t41,
                t44,
                t45,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 783,
            columnNumber: 11
        }, this);
        $[200] = t12;
        $[201] = t25;
        $[202] = t27;
        $[203] = t30;
        $[204] = t32;
        $[205] = t35;
        $[206] = t38;
        $[207] = t41;
        $[208] = t44;
        $[209] = t45;
        $[210] = t46;
        $[211] = t47;
    } else {
        t47 = $[211];
    }
    let t48;
    if ($[212] !== t10 || $[213] !== t4 || $[214] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t10,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 801,
            columnNumber: 11
        }, this);
        $[212] = t10;
        $[213] = t4;
        $[214] = t47;
        $[215] = t48;
    } else {
        t48 = $[215];
    }
    let t49;
    if ($[216] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(card, "space-y-3");
        $[216] = t49;
    } else {
        t49 = $[216];
    }
    let t50;
    if ($[217] !== language || $[218] !== price || $[219] !== t) {
        t50 = Number.isFinite(price) ? `${t("common.aed")} ${price.toLocaleString(language === "ar" ? "ar-EG" : "en-US")}` : "-";
        $[217] = language;
        $[218] = price;
        $[219] = t;
        $[220] = t50;
    } else {
        t50 = $[220];
    }
    let t51;
    if ($[221] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-bold text-[#7c3aed]",
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 828,
            columnNumber: 11
        }, this);
        $[221] = t50;
        $[222] = t51;
    } else {
        t51 = $[222];
    }
    let t52;
    if ($[223] !== t) {
        t52 = t("readyMarket.columns.price");
        $[223] = t;
        $[224] = t52;
    } else {
        t52 = $[224];
    }
    let t53;
    if ($[225] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500",
            children: t52
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 844,
            columnNumber: 11
        }, this);
        $[225] = t52;
        $[226] = t53;
    } else {
        t53 = $[226];
    }
    let t54;
    if ($[227] !== t51 || $[228] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t51,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 852,
            columnNumber: 11
        }, this);
        $[227] = t51;
        $[228] = t53;
        $[229] = t54;
    } else {
        t54 = $[229];
    }
    let t55;
    if ($[230] !== t || $[231] !== whatsapp) {
        t55 = whatsapp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `https://wa.me/${whatsapp.replace(/\D/g, "")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex h-9 items-center justify-center gap-2 rounded-lg bg-[#007b78] text-xs font-medium text-white hover:bg-[#006664]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 861,
                    columnNumber: 251
                }, this),
                t("readyMarket.details.whatsapp")
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 861,
            columnNumber: 23
        }, this);
        $[230] = t;
        $[231] = whatsapp;
        $[232] = t55;
    } else {
        t55 = $[232];
    }
    let t56;
    if ($[233] !== phone || $[234] !== showPhone || $[235] !== t) {
        t56 = phone && (showPhone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `tel:${phone}`,
            dir: "ltr",
            className: "flex h-9 items-center justify-center gap-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-800 hover:bg-gray-50 dark:border-neutral-700 dark:text-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 870,
                    columnNumber: 251
                }, this),
                phone
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 870,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "ReadyUnitDetailsPage[<button>.onClick]": ()=>setShowPhone(true)
            }["ReadyUnitDetailsPage[<button>.onClick]"],
            className: "flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 text-xs font-medium text-gray-800 hover:bg-gray-50 dark:border-neutral-700 dark:text-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 872,
                    columnNumber: 240
                }, this),
                t("readyMarket.details.phoneNumber")
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 870,
            columnNumber: 294
        }, this));
        $[233] = phone;
        $[234] = showPhone;
        $[235] = t;
        $[236] = t56;
    } else {
        t56 = $[236];
    }
    let t57;
    if ($[237] !== hasCoords || $[238] !== lat || $[239] !== lng || $[240] !== t) {
        t57 = hasCoords && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            title: t("readyMarket.form.location"),
            src: `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            className: "h-56 w-full rounded-lg border-0"
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 882,
            columnNumber: 24
        }, this);
        $[237] = hasCoords;
        $[238] = lat;
        $[239] = lng;
        $[240] = t;
        $[241] = t57;
    } else {
        t57 = $[241];
    }
    let t58;
    if ($[242] !== unit.location?.area || $[243] !== unit.location?.city || $[244] !== unit.location?.description) {
        t58 = (unit.location?.city || unit.location?.area || unit.location?.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600 dark:text-gray-300",
            children: [
                unit.location?.description,
                unit.location?.area?.name ?? unit.location?.area?.area_name,
                unit.location?.city?.name ?? unit.location?.city?.city_name
            ].filter(Boolean).join(" \xB7 ")
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 893,
            columnNumber: 89
        }, this);
        $[242] = unit.location?.area;
        $[243] = unit.location?.city;
        $[244] = unit.location?.description;
        $[245] = t58;
    } else {
        t58 = $[245];
    }
    let t59;
    if ($[246] !== t54 || $[247] !== t55 || $[248] !== t56 || $[249] !== t57 || $[250] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t49,
            children: [
                t54,
                t55,
                t56,
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 903,
            columnNumber: 11
        }, this);
        $[246] = t54;
        $[247] = t55;
        $[248] = t56;
        $[249] = t57;
        $[250] = t58;
        $[251] = t59;
    } else {
        t59 = $[251];
    }
    let t60;
    if ($[252] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(card, "flex items-center gap-3");
        $[252] = t60;
    } else {
        t60 = $[252];
    }
    let t61;
    if ($[253] !== ownerName) {
        t61 = ownerName.charAt(0).toUpperCase();
        $[253] = ownerName;
        $[254] = t61;
    } else {
        t61 = $[254];
    }
    let t62;
    if ($[255] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700",
            children: t61
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 930,
            columnNumber: 11
        }, this);
        $[255] = t61;
        $[256] = t62;
    } else {
        t62 = $[256];
    }
    let t63;
    if ($[257] !== ownerName) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "truncate text-sm font-semibold text-gray-900 dark:text-gray-100",
            children: ownerName
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 938,
            columnNumber: 11
        }, this);
        $[257] = ownerName;
        $[258] = t63;
    } else {
        t63 = $[258];
    }
    let t64;
    if ($[259] !== owner || $[260] !== rating || $[261] !== reviewsCount || $[262] !== t) {
        t64 = Number.isFinite(rating) && rating > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "flex items-center gap-1 text-xs text-gray-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: "h-3.5 w-3.5 fill-amber-400 text-amber-400"
                }, void 0, false, {
                    fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
                    lineNumber: 946,
                    columnNumber: 112
                }, this),
                t("readyMarket.details.rating", {
                    rating: rating.toFixed(1),
                    count: reviewsCount
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 946,
            columnNumber: 51
        }, this) : owner?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "truncate text-xs text-gray-500",
            dir: "ltr",
            children: owner.email
        }, void 0, false, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 949,
            columnNumber: 33
        }, this);
        $[259] = owner;
        $[260] = rating;
        $[261] = reviewsCount;
        $[262] = t;
        $[263] = t64;
    } else {
        t64 = $[263];
    }
    let t65;
    if ($[264] !== t63 || $[265] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0",
            children: [
                t63,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 960,
            columnNumber: 11
        }, this);
        $[264] = t63;
        $[265] = t64;
        $[266] = t65;
    } else {
        t65 = $[266];
    }
    let t66;
    if ($[267] !== t62 || $[268] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t60,
            children: [
                t62,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 969,
            columnNumber: 11
        }, this);
        $[267] = t62;
        $[268] = t65;
        $[269] = t66;
    } else {
        t66 = $[269];
    }
    let t67;
    if ($[270] !== t59 || $[271] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t59,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 978,
            columnNumber: 11
        }, this);
        $[270] = t59;
        $[271] = t66;
        $[272] = t67;
    } else {
        t67 = $[272];
    }
    let t68;
    if ($[273] !== t48 || $[274] !== t5 || $[275] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t48,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 987,
            columnNumber: 11
        }, this);
        $[273] = t48;
        $[274] = t5;
        $[275] = t67;
        $[276] = t68;
    } else {
        t68 = $[276];
    }
    let t69;
    if ($[277] !== t6 || $[278] !== t68 || $[279] !== t7) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t68
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 997,
            columnNumber: 11
        }, this);
        $[277] = t6;
        $[278] = t68;
        $[279] = t7;
        $[280] = t69;
    } else {
        t69 = $[280];
    }
    let t70;
    if ($[281] !== t69 || $[282] !== t8 || $[283] !== t9) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
            lineNumber: 1007,
            columnNumber: 11
        }, this);
        $[281] = t69;
        $[282] = t8;
        $[283] = t9;
        $[284] = t70;
    } else {
        t70 = $[284];
    }
    return t70;
}
_s(ReadyUnitDetailsPage, "dwvCoGVGX25CpL4PgPzUrLPIwaI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$use$2d$base$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyMarketBasePath"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyUnit"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$ready$2d$market$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadyUnitReview"]
    ];
});
_c1 = ReadyUnitDetailsPage;
function _ReadyUnitDetailsPageUnitFeaturesMap(feature) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-md border border-gray-200 px-2.5 py-1 text-[11px] text-gray-700 dark:border-neutral-700 dark:text-gray-300",
        children: [
            feature.feature_name ?? feature.name,
            feature.pivot?.value ? ` · ${feature.pivot.value}` : ""
        ]
    }, feature.feature_id, true, {
        fileName: "[project]/src/features/ready-market/pages/ReadyUnitDetailsPage.tsx",
        lineNumber: 1018,
        columnNumber: 10
    }, this);
}
function _ReadyUnitDetailsPageAnonymous(m) {
    return m.media_url && (!m.media_type || m.media_type === "image");
}
var _c, _c1;
__turbopack_context__.k.register(_c, "DetailRow");
__turbopack_context__.k.register(_c1, "ReadyUnitDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_cd990c0f._.js.map