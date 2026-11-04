(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/hooks/use-booking-details.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useBookingDetails,
    "normalizeBookingDetails",
    ()=>normalizeBookingDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/dashboard.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
function normalizeBookingDetails(data) {
    if (!data) {
        return {
            reservation: {
                reservation_id: 0,
                reservation_status_type: "identification",
                reservation_status: "in_process"
            },
            media: {},
            user: {},
            paymentPlan: {},
            payment_plan: {},
            country: {
                name: "UAE",
                currency: "AED"
            },
            property: {},
            project: {},
            developer: {}
        };
    }
    let root = data;
    if (root?.data && typeof root.data === "object" && !Array.isArray(root.data)) {
        if (root.data.reservation || root.data.items || root.data.user || root.data.property || root.data.id || root.data.reservation_id) {
            root = root.data;
        }
    }
    if (Array.isArray(root?.items) && root.items.length > 0) {
        root = root.items[0];
    } else if (Array.isArray(root) && root.length > 0) {
        root = root[0];
    }
    const rawReservation = root?.reservation || root;
    const innerReservation = rawReservation?.reservation && typeof rawReservation.reservation === "object" ? rawReservation.reservation : rawReservation;
    const reservation = innerReservation?.reservation_id || innerReservation?.id || innerReservation?.reservation_status || innerReservation?.reservation_status_type ? innerReservation : rawReservation;
    const rawMedia = root?.media || rawReservation?.media || innerReservation?.media || reservation?.media || {};
    const media = {
        ...rawMedia,
        identification: rawMedia?.identification || reservation?.identification || rawReservation?.identification || root?.identification || null,
        selfie: rawMedia?.selfie || reservation?.selfie || rawReservation?.selfie || root?.selfie || null,
        sales_offer: rawMedia?.sales_offer || reservation?.sales_offer || rawReservation?.sales_offer || root?.sales_offer || null,
        down_payment: rawMedia?.down_payment || reservation?.down_payment || rawReservation?.down_payment || root?.down_payment || null,
        sales_purchase: rawMedia?.sales_purchase || reservation?.sales_purchase || rawReservation?.sales_purchase || root?.sales_purchase || null
    };
    const user = root?.user || rawReservation?.user || innerReservation?.user || root?.client || reservation?.user || reservation?.client || {};
    const property = root?.property || rawReservation?.property || innerReservation?.property || reservation?.property || {};
    const project = property?.project || root?.project || rawReservation?.project || innerReservation?.project || reservation?.project || {};
    const developer = project?.developer || root?.developer || rawReservation?.developer || innerReservation?.developer || reservation?.developer || {};
    const country = project?.country || root?.country || rawReservation?.country || innerReservation?.country || reservation?.country || {
        name: "UAE",
        currency: "AED"
    };
    const paymentPlan = root?.payment_plan || root?.paymentPlan || rawReservation?.payment_plan || rawReservation?.paymentPlan || innerReservation?.payment_plan || innerReservation?.paymentPlan || reservation?.payment_plan || reservation?.paymentPlan || {};
    const resId = innerReservation?.reservation_id || innerReservation?.id || rawReservation?.reservation_id || rawReservation?.id || root?.reservation_id || root?.id || 0;
    const statusType = innerReservation?.reservation_status_type || innerReservation?.status_type || rawReservation?.reservation_status_type || rawReservation?.status_type || root?.reservation_status_type || root?.status_type || "identification";
    const status = innerReservation?.reservation_status || innerReservation?.status || rawReservation?.reservation_status || rawReservation?.status || root?.reservation_status || root?.status || "in_process";
    const normalizedReservation = {
        ...reservation,
        reservation_id: resId,
        id: resId,
        reservation_status_type: statusType,
        status_type: statusType,
        reservation_status: status,
        status: status,
        reservation_date: reservation?.reservation_date || root?.reservation_date || reservation?.created_at || root?.created_at || reservation?.updated_at || root?.updated_at,
        expiry_date: reservation?.expiry_date || root?.expiry_date,
        comments: reservation?.comments || root?.comments,
        price: reservation?.price || root?.price || property?.price,
        currency: reservation?.currency || root?.currency || country?.currency || "AED",
        reservation_fee: reservation?.reservation_fee || root?.reservation_fee,
        service_fee: reservation?.service_fee || root?.service_fee
    };
    return {
        ...root,
        reservation: normalizedReservation,
        media,
        user,
        paymentPlan,
        payment_plan: paymentPlan,
        property: {
            ...property,
            project: {
                ...project,
                developer,
                country
            }
        },
        project,
        developer,
        country
    };
}
function useBookingDetails({ reservationId }) {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: bookingData, isLoading, isError, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "reservation",
            reservationId
        ],
        queryFn: {
            "useBookingDetails.useQuery": async ()=>{
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAdminService"].getBookingDetails(reservationId);
                return normalizeBookingDetails(res);
            }
        }["useBookingDetails.useQuery"],
        enabled: !!reservationId,
        retry: false,
        refetchInterval: 5000
    });
    const approveMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBookingDetails.useMutation[approveMutation]": async (variables)=>{
                const comments = typeof variables === "string" ? variables : variables?.comments || "";
                const targetId = variables?.reservationId || reservationId;
                const resType = (variables?.reservation_status_type || variables?.type || "IDENTIFICATION").toUpperCase();
                const body = {
                    reservation_id: targetId,
                    status: "confirmed",
                    reservation_status_type: resType
                };
                if (comments) body.comments = comments;
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAdminService"].confirmBooking(targetId, body);
            }
        }["useBookingDetails.useMutation[approveMutation]"],
        onSuccess: {
            "useBookingDetails.useMutation[approveMutation]": (_data, variables_0)=>{
                const targetId_0 = Number(variables_0?.reservationId) || Number(reservationId);
                if (("TURBOPACK compile-time value", "object") !== "undefined" && targetId_0) {
                    localStorage.setItem(`approved_stage1_${targetId_0}`, "true");
                }
                const updateCache = {
                    "useBookingDetails.useMutation[approveMutation].updateCache": (old)=>{
                        if (!old) return old;
                        const res_0 = old.reservation ? {
                            ...old.reservation
                        } : {
                            ...old
                        };
                        res_0.reservation_status = "confirmed";
                        res_0.status = "confirmed";
                        res_0.reservation_status_type = "identification";
                        res_0.status_type = "identification";
                        if (typeof variables_0 === "string" && variables_0) {
                            res_0.comments = variables_0;
                        } else if (variables_0?.comments) {
                            res_0.comments = variables_0.comments;
                        }
                        return {
                            ...old,
                            reservation: res_0
                        };
                    }
                }["useBookingDetails.useMutation[approveMutation].updateCache"];
                queryClient.setQueryData([
                    "reservation",
                    targetId_0
                ], updateCache);
                if (reservationId && targetId_0 !== Number(reservationId)) {
                    queryClient.setQueryData([
                        "reservation",
                        Number(reservationId)
                    ], updateCache);
                }
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        targetId_0
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        reservationId
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "bookings"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "admin",
                        "reservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardInProgressReservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartStatusMetrics"
                    ]
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.approveSuccess"));
            }
        }["useBookingDetails.useMutation[approveMutation]"],
        onError: {
            "useBookingDetails.useMutation[approveMutation]": (error_0, variables_1)=>{
                const errMsg = error_0?.response?.data?.message || error_0?.message || "";
                const targetId_1 = Number(variables_1?.reservationId) || Number(reservationId);
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        targetId_1
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        reservationId
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "bookings"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "admin",
                        "reservations"
                    ]
                });
                if (errMsg.toLowerCase().includes("already approved")) {
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && targetId_1) {
                        localStorage.setItem(`approved_stage1_${targetId_1}`, "true");
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(t("reservations.messages.alreadyApproved"));
                    return;
                }
                console.error("Approve reservation error details:", error_0?.response?.data || error_0);
                const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error_0, t("reservations.messages.approveFailed"));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg);
            }
        }["useBookingDetails.useMutation[approveMutation]"]
    });
    const declineMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBookingDetails.useMutation[declineMutation]": async (variables_2)=>{
                const comments_0 = typeof variables_2 === "string" ? variables_2 : variables_2?.comments || "";
                const targetId_2 = variables_2?.reservationId || reservationId;
                const resType_0 = (variables_2?.reservation_status_type || variables_2?.type || "IDENTIFICATION").toUpperCase();
                const payload = {
                    status: "cancelled",
                    reservation_status_type: resType_0
                };
                if (comments_0) payload.comments = comments_0;
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAdminService"].declineBooking(targetId_2, payload);
            }
        }["useBookingDetails.useMutation[declineMutation]"],
        onSuccess: {
            "useBookingDetails.useMutation[declineMutation]": (_data_0, variables_3)=>{
                const targetId_3 = Number(variables_3?.reservationId) || Number(reservationId);
                if (("TURBOPACK compile-time value", "object") !== "undefined" && targetId_3) {
                    localStorage.removeItem(`approved_stage1_${targetId_3}`);
                }
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        reservationId
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "bookings"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "admin",
                        "reservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardInProgressReservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartStatusMetrics"
                    ]
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.declineSuccess"));
                router.push("/admin/reservations");
            }
        }["useBookingDetails.useMutation[declineMutation]"],
        onError: {
            "useBookingDetails.useMutation[declineMutation]": (error_1)=>{
                console.error("Decline reservation error details:", error_1?.response?.data || error_1);
                const msg_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error_1, t("reservations.messages.declineFailed"));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg_0);
            }
        }["useBookingDetails.useMutation[declineMutation]"]
    });
    const uploadSalesOfferMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBookingDetails.useMutation[uploadSalesOfferMutation]": async (variables_4)=>{
                const file = variables_4?.file;
                const comments_1 = variables_4?.comments || "";
                const targetId_4 = variables_4?.reservationId || reservationId;
                const formData = new FormData();
                formData.append("reservation_id", String(targetId_4));
                if (file) {
                    formData.append("file", file);
                    formData.append("sales_offer", file);
                }
                if (comments_1) formData.append("comments", comments_1);
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAdminService"].uploadSalesOffer(formData);
            }
        }["useBookingDetails.useMutation[uploadSalesOfferMutation]"],
        onSuccess: {
            "useBookingDetails.useMutation[uploadSalesOfferMutation]": (_data_1, variables_5)=>{
                const targetId_5 = variables_5?.reservationId || reservationId;
                queryClient.setQueryData([
                    "reservation",
                    targetId_5
                ], {
                    "useBookingDetails.useMutation[uploadSalesOfferMutation]": (old_0)=>{
                        if (!old_0) return old_0;
                        const res_1 = old_0.reservation ? {
                            ...old_0.reservation
                        } : {
                            ...old_0
                        };
                        res_1.reservation_status_type = "sales_offer";
                        res_1.status_type = "sales_offer";
                        res_1.reservation_status = "in_process";
                        res_1.status = "in_process";
                        const media = old_0.media ? {
                            ...old_0.media
                        } : {};
                        if (variables_5?.file) {
                            media.sales_offer = URL.createObjectURL(variables_5.file);
                        }
                        return {
                            ...old_0,
                            reservation: res_1,
                            media
                        };
                    }
                }["useBookingDetails.useMutation[uploadSalesOfferMutation]"]);
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        targetId_5
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "bookings"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "admin",
                        "reservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardInProgressReservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartStatusMetrics"
                    ]
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.salesOfferSuccess"));
            }
        }["useBookingDetails.useMutation[uploadSalesOfferMutation]"],
        onError: {
            "useBookingDetails.useMutation[uploadSalesOfferMutation]": (error_2)=>{
                console.error("Upload Sales Offer error details:", error_2?.response?.data || error_2);
                const msg_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error_2, t("reservations.messages.salesOfferFailed"));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg_1);
            }
        }["useBookingDetails.useMutation[uploadSalesOfferMutation]"]
    });
    const approveDownPaymentMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBookingDetails.useMutation[approveDownPaymentMutation]": async (variables_6)=>{
                const comments_2 = typeof variables_6 === "string" ? variables_6 : variables_6?.comments || "";
                const targetId_6 = variables_6?.reservationId || reservationId;
                const resType_1 = (variables_6?.reservation_status_type || variables_6?.type || "DOWN_PAYMENT").toUpperCase();
                const body_0 = {
                    reservation_id: targetId_6,
                    status: "confirmed",
                    reservation_status_type: resType_1
                };
                if (comments_2) body_0.comments = comments_2;
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAdminService"].confirmBooking(targetId_6, body_0);
            }
        }["useBookingDetails.useMutation[approveDownPaymentMutation]"],
        onSuccess: {
            "useBookingDetails.useMutation[approveDownPaymentMutation]": (_data_2, variables_7)=>{
                const targetId_7 = variables_7?.reservationId || reservationId;
                if (("TURBOPACK compile-time value", "object") !== "undefined" && targetId_7) {
                    const clean = String(targetId_7).replace(/\D/g, "");
                    localStorage.setItem(`approved_down_payment_${targetId_7}`, "true");
                    if (clean) localStorage.setItem(`approved_down_payment_${clean}`, "true");
                }
                queryClient.setQueryData([
                    "reservation",
                    targetId_7
                ], {
                    "useBookingDetails.useMutation[approveDownPaymentMutation]": (old_1)=>{
                        if (!old_1) return old_1;
                        const res_2 = old_1.reservation ? {
                            ...old_1.reservation
                        } : {
                            ...old_1
                        };
                        res_2.reservation_status = "confirmed";
                        res_2.status = "confirmed";
                        return {
                            ...old_1,
                            reservation: res_2
                        };
                    }
                }["useBookingDetails.useMutation[approveDownPaymentMutation]"]);
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        targetId_7
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "bookings"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "admin",
                        "reservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardInProgressReservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartStatusMetrics"
                    ]
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.approveSuccess"));
            }
        }["useBookingDetails.useMutation[approveDownPaymentMutation]"],
        onError: {
            "useBookingDetails.useMutation[approveDownPaymentMutation]": (error_3)=>{
                console.error("Approve down payment error details:", error_3?.response?.data || error_3);
                const msg_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error_3, t("reservations.messages.approveFailed"));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg_2);
            }
        }["useBookingDetails.useMutation[approveDownPaymentMutation]"]
    });
    const uploadDownPaymentMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBookingDetails.useMutation[uploadDownPaymentMutation]": async (variables_8)=>{
                const file_0 = variables_8?.file;
                const comments_3 = variables_8?.comments || "";
                const targetId_8 = variables_8?.reservationId || reservationId;
                const formData_0 = new FormData();
                formData_0.append("reservation_id", String(targetId_8));
                if (file_0) {
                    formData_0.append("file", file_0);
                    formData_0.append("down_payment", file_0);
                }
                if (comments_3) formData_0.append("comments", comments_3);
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAdminService"].uploadDownPayment(formData_0);
            }
        }["useBookingDetails.useMutation[uploadDownPaymentMutation]"],
        onSuccess: {
            "useBookingDetails.useMutation[uploadDownPaymentMutation]": (_data_3, variables_9)=>{
                const targetId_9 = variables_9?.reservationId || reservationId;
                if (("TURBOPACK compile-time value", "object") !== "undefined" && targetId_9) {
                    const clean_0 = String(targetId_9).replace(/\D/g, "");
                    localStorage.setItem(`uploaded_down_payment_${targetId_9}`, "true");
                    if (clean_0) localStorage.setItem(`uploaded_down_payment_${clean_0}`, "true");
                }
                queryClient.setQueryData([
                    "reservation",
                    targetId_9
                ], {
                    "useBookingDetails.useMutation[uploadDownPaymentMutation]": (old_2)=>{
                        if (!old_2) return old_2;
                        const res_3 = old_2.reservation ? {
                            ...old_2.reservation
                        } : {
                            ...old_2
                        };
                        res_3.reservation_status_type = "down_payment";
                        res_3.status_type = "down_payment";
                        const media_0 = old_2.media ? {
                            ...old_2.media
                        } : {};
                        if (variables_9?.file) {
                            media_0.down_payment = URL.createObjectURL(variables_9.file);
                        }
                        return {
                            ...old_2,
                            reservation: res_3,
                            media: media_0
                        };
                    }
                }["useBookingDetails.useMutation[uploadDownPaymentMutation]"]);
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        targetId_9
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        reservationId
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "bookings"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "admin",
                        "reservations"
                    ]
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.paymentUploaded") || "Payment receipt uploaded successfully");
            }
        }["useBookingDetails.useMutation[uploadDownPaymentMutation]"],
        onError: {
            "useBookingDetails.useMutation[uploadDownPaymentMutation]": (error_4)=>{
                console.error("Upload down payment error details:", error_4?.response?.data || error_4);
                const msg_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error_4, t("reservations.messages.paymentUploadFailed") || "Failed to upload payment receipt");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg_3);
            }
        }["useBookingDetails.useMutation[uploadDownPaymentMutation]"]
    });
    const acceptSalesOfferMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBookingDetails.useMutation[acceptSalesOfferMutation]": async (variables_10)=>{
                const comments_4 = typeof variables_10 === "string" ? variables_10 : variables_10?.comments || "";
                const targetId_10 = variables_10?.reservationId || reservationId;
                const body_1 = {
                    reservation_id: targetId_10,
                    status: "confirmed",
                    reservation_status_type: "SALES_OFFER"
                };
                if (comments_4) body_1.comments = comments_4;
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAdminService"].confirmBooking(targetId_10, body_1);
            }
        }["useBookingDetails.useMutation[acceptSalesOfferMutation]"],
        onSuccess: {
            "useBookingDetails.useMutation[acceptSalesOfferMutation]": (_data_4, variables_11)=>{
                const targetId_11 = variables_11?.reservationId || reservationId;
                if (("TURBOPACK compile-time value", "object") !== "undefined" && targetId_11) {
                    const clean_1 = String(targetId_11).replace(/\D/g, "");
                    localStorage.setItem(`accepted_sales_offer_${targetId_11}`, "true");
                    if (clean_1) localStorage.setItem(`accepted_sales_offer_${clean_1}`, "true");
                    localStorage.setItem(`approved_stage1_${targetId_11}`, "true");
                    if (clean_1) localStorage.setItem(`approved_stage1_${clean_1}`, "true");
                }
                queryClient.setQueryData([
                    "reservation",
                    targetId_11
                ], {
                    "useBookingDetails.useMutation[acceptSalesOfferMutation]": (old_3)=>{
                        if (!old_3) return old_3;
                        const res_4 = old_3.reservation ? {
                            ...old_3.reservation
                        } : {
                            ...old_3
                        };
                        res_4.reservation_status_type = "sales_offer";
                        res_4.status_type = "sales_offer";
                        res_4.reservation_status = "confirmed";
                        res_4.status = "confirmed";
                        return {
                            ...old_3,
                            reservation: res_4
                        };
                    }
                }["useBookingDetails.useMutation[acceptSalesOfferMutation]"]);
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        targetId_11
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        reservationId
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "bookings"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "admin",
                        "reservations"
                    ]
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.salesOfferAccepted") || "Sales offer accepted! Proceed to down payment");
            }
        }["useBookingDetails.useMutation[acceptSalesOfferMutation]"],
        onError: {
            "useBookingDetails.useMutation[acceptSalesOfferMutation]": (error_5)=>{
                console.error("Accept sales offer error details:", error_5?.response?.data || error_5);
                const msg_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error_5, "Failed to confirm sales offer");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg_4);
            }
        }["useBookingDetails.useMutation[acceptSalesOfferMutation]"]
    });
    const uploadSPAMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBookingDetails.useMutation[uploadSPAMutation]": async (variables_12)=>{
                const file_1 = variables_12?.file;
                const comments_5 = variables_12?.comments || "";
                const targetId_12 = variables_12?.reservationId || reservationId;
                const formData_1 = new FormData();
                formData_1.append("reservation_id", String(targetId_12));
                if (file_1) formData_1.append("file", file_1);
                if (comments_5) formData_1.append("comments", comments_5);
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardAdminService"].uploadSPA(targetId_12, formData_1);
            }
        }["useBookingDetails.useMutation[uploadSPAMutation]"],
        onSuccess: {
            "useBookingDetails.useMutation[uploadSPAMutation]": (_data_5, variables_13)=>{
                const targetId_13 = variables_13?.reservationId || reservationId;
                queryClient.setQueryData([
                    "reservation",
                    targetId_13
                ], {
                    "useBookingDetails.useMutation[uploadSPAMutation]": (old_4)=>{
                        if (!old_4) return old_4;
                        const res_5 = old_4.reservation ? {
                            ...old_4.reservation
                        } : {
                            ...old_4
                        };
                        res_5.reservation_status_type = "sales_purchase";
                        res_5.status_type = "sales_purchase";
                        res_5.reservation_status = "confirmed";
                        res_5.status = "confirmed";
                        const media_1 = old_4.media ? {
                            ...old_4.media
                        } : {};
                        if (variables_13?.file) {
                            media_1.sales_purchase = URL.createObjectURL(variables_13.file);
                        }
                        return {
                            ...old_4,
                            reservation: res_5,
                            media: media_1
                        };
                    }
                }["useBookingDetails.useMutation[uploadSPAMutation]"]);
                queryClient.invalidateQueries({
                    queryKey: [
                        "reservation",
                        reservationId
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "bookings"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "admin",
                        "reservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardInProgressReservations"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartCounts"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboardChartStatusMetrics"
                    ]
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.spaSuccess"));
            }
        }["useBookingDetails.useMutation[uploadSPAMutation]"],
        onError: {
            "useBookingDetails.useMutation[uploadSPAMutation]": (error_6)=>{
                console.error("Upload SPA error details:", error_6?.response?.data || error_6);
                const msg_5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error_6, t("reservations.messages.spaFailed"));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg_5);
            }
        }["useBookingDetails.useMutation[uploadSPAMutation]"]
    });
    const currencyMap = {
        Dollar: "USD",
        Euro: "EUR",
        Pound: "GBP",
        EGP: "EGP",
        AED: "AED"
    };
    const formatPrice = (price, currency = "AED")=>{
        const isoCode = currencyMap[currency] || currency || "AED";
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: isoCode
        }).format(Number(price) || 0);
    };
    const getStatusIcon = (status)=>{
        switch(status){
            case "Complete":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "h-5 w-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/src/hooks/use-booking-details.tsx",
                    lineNumber: 646,
                    columnNumber: 16
                }, this);
            case "Rejected":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                    className: "h-5 w-5 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/src/hooks/use-booking-details.tsx",
                    lineNumber: 648,
                    columnNumber: 16
                }, this);
            case "Pending":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-5 w-5 text-orange-600"
                }, void 0, false, {
                    fileName: "[project]/src/hooks/use-booking-details.tsx",
                    lineNumber: 650,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-5 w-5 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/hooks/use-booking-details.tsx",
                    lineNumber: 652,
                    columnNumber: 16
                }, this);
        }
    };
    const getStatusBadge = (status_0)=>{
        const styles = {
            Complete: "bg-green-50 text-green-700 border-green-200",
            Rejected: "bg-red-50 text-red-700 border-red-200",
            Pending: "bg-orange-50 text-orange-700 border-orange-200",
            Waiting: "bg-gray-50 text-gray-700 border-gray-200"
        };
        const labelKey = {
            Complete: "reservations.statusMap.completed",
            Rejected: "reservations.statusMap.cancelled",
            Pending: "reservations.statusMap.pending",
            Waiting: "reservations.details.waiting"
        };
        const label = labelKey[status_0] ? t(labelKey[status_0]) : status_0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: `${styles[status_0] || styles.Waiting} text-xs`,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/hooks/use-booking-details.tsx",
            lineNumber: 669,
            columnNumber: 12
        }, this);
    };
    const getStageStatus = (stageId, currentStatusType, currentStatus, mediaObj)=>{
        const rawType = (currentStatusType || "").toLowerCase().trim();
        const normType = rawType.replace(/\s+/g, "_");
        const status_1 = (currentStatus || "").toLowerCase().trim().replace(/\s+/g, "_");
        const isCancelled = status_1 === "cancelled" || status_1 === "rejected" || status_1 === "declined" || status_1 === "expired";
        const isConfirmed = status_1 === "confirmed" || status_1 === "approved" || status_1 === "complete" || status_1 === "completed";
        const isInProcess = !isConfirmed && !isCancelled;
        const isStage1Type = normType === "identification" || normType === "identification_confirmation";
        const isStage2Type = normType === "sales_offer" || normType === "sales_offer_request" || normType === "sales_offer_approval";
        const isStage2UploadPending = normType === "sales_offer_request";
        const isStage2ApprovalType = normType === "sales_offer" || normType === "sales_offer_approval";
        const isStage3Type = normType === "down_payment" || normType === "down_payment_pending";
        const isStage4Type = normType === "sales_purchase" || normType === "spa" || normType === "sales_purchase_agreement";
        const hasSalesOfferDoc = Boolean(mediaObj?.sales_offer);
        const hasDownPaymentDoc = Boolean(mediaObj?.down_payment);
        const hasSpaDoc = Boolean(mediaObj?.sales_purchase);
        const cleanResId = reservationId ? String(reservationId).replace(/\D/g, "") : "";
        const isStage1SavedApproved = ("TURBOPACK compile-time truthy", 1) ? Boolean(reservationId) && localStorage.getItem(`approved_stage1_${reservationId}`) === "true" || Boolean(cleanResId) && localStorage.getItem(`approved_stage1_${cleanResId}`) === "true" || Boolean(reservationId) && localStorage.getItem(`reservation_${reservationId}_stage1_approved`) === "true" || Boolean(cleanResId) && localStorage.getItem(`reservation_${cleanResId}_stage1_approved`) === "true" : "TURBOPACK unreachable";
        const isSalesOfferAccepted = ("TURBOPACK compile-time truthy", 1) ? Boolean(reservationId) && localStorage.getItem(`accepted_sales_offer_${reservationId}`) === "true" || Boolean(cleanResId) && localStorage.getItem(`accepted_sales_offer_${cleanResId}`) === "true" : "TURBOPACK unreachable";
        const isDownPaymentApproved = ("TURBOPACK compile-time truthy", 1) ? Boolean(reservationId) && localStorage.getItem(`approved_down_payment_${reservationId}`) === "true" || Boolean(cleanResId) && localStorage.getItem(`approved_down_payment_${cleanResId}`) === "true" : "TURBOPACK unreachable";
        const isStage1Complete = !(isStage1Type && isInProcess) && (isStage1SavedApproved || isStage1Type && isConfirmed || isStage2Type || isStage3Type || isStage4Type || hasSalesOfferDoc || hasDownPaymentDoc || hasSpaDoc || isSalesOfferAccepted);
        if (stageId === 1) {
            if (isStage1Complete) return "Complete";
            if (isCancelled) return "Rejected";
            return "Pending";
        }
        const isStage2Complete = isStage1Complete && !isStage2UploadPending && !(isStage2ApprovalType && isInProcess) && (isStage2ApprovalType && isConfirmed || isSalesOfferAccepted || isStage3Type || isStage4Type || hasDownPaymentDoc || hasSpaDoc);
        // Stage 2 pending when: stage 1 is complete and stage 2 is not yet complete
        const isStage2Pending = isStage1Complete && !isCancelled && !isStage2Complete;
        if (stageId === 2) {
            if (!isStage1Complete) return "Waiting";
            if (isStage2Complete) return "Complete";
            if (isCancelled) return "Rejected";
            if (isStage2Pending || hasSalesOfferDoc) return "Pending";
            return "Waiting";
        }
        const isStage3Complete = isStage2Complete && !(isStage3Type && isInProcess) && (isStage3Type && isConfirmed || isDownPaymentApproved || isStage4Type || hasSpaDoc);
        const isStage3Pending = isStage2Complete && !isCancelled && !isStage3Complete;
        if (stageId === 3) {
            if (!isStage2Complete) return "Waiting";
            if (isStage3Complete) return "Complete";
            if (isCancelled) return "Rejected";
            if (isStage3Pending || hasDownPaymentDoc) return "Pending";
            return "Waiting";
        }
        if (stageId === 4) {
            if (!isStage3Complete) return "Waiting";
            if (hasSpaDoc || isStage4Type && isConfirmed) return "Complete";
            if (isCancelled) return "Rejected";
            return "Pending";
        }
        return "Waiting";
    };
    const getStages = ()=>{
        if (!bookingData) return [];
        const resObj = bookingData.reservation || bookingData?.data?.reservation || bookingData?.data || bookingData || {};
        const mediaObj_0 = bookingData.media || bookingData?.data?.media || resObj?.media || {};
        const userObj = bookingData.user || bookingData?.data?.user || resObj?.user || bookingData?.client || {};
        const statusType = resObj?.reservation_status_type || resObj?.status_type || bookingData?.status_type || bookingData?.reservation_status_type || "identification";
        const status_2 = resObj?.reservation_status || resObj?.status || bookingData?.status || bookingData?.reservation_status || "in_process";
        const comments_6 = resObj?.comments || bookingData?.comments;
        const authorName = [
            userObj?.first_name,
            userObj?.last_name
        ].filter(Boolean).join(" ") || userObj?.user_name || userObj?.name || "Client";
        const date = resObj?.reservation_date || resObj?.created_at || bookingData?.reservation_date;
        const normType_0 = statusType.toLowerCase().trim().replace(/\s+/g, "_");
        const normStatus = status_2.toLowerCase().trim().replace(/\s+/g, "_");
        return [
            {
                id: 1,
                name: t("reservations.typeMap.identification"),
                status: getStageStatus(1, statusType, status_2, mediaObj_0),
                step: t("reservations.details.stepOf", {
                    step: 1,
                    total: 4
                }),
                currentStatusType: normType_0,
                currentStatus: normStatus,
                subtitle: t("reservations.stages.identificationSubtitle"),
                documents: [
                    mediaObj_0?.identification ? {
                        name: t("reservations.typeMap.identification"),
                        url: mediaObj_0.identification
                    } : null,
                    mediaObj_0?.selfie ? {
                        name: t("reservations.details.selfie"),
                        url: mediaObj_0.selfie
                    } : null
                ].filter(Boolean),
                comments: comments_6 ? [
                    {
                        author: authorName,
                        date: date,
                        text: comments_6
                    }
                ] : []
            },
            {
                id: 2,
                name: t("reservations.typeMap.sales_offer"),
                status: getStageStatus(2, statusType, status_2, mediaObj_0),
                step: t("reservations.details.stepOf", {
                    step: 2,
                    total: 4
                }),
                currentStatusType: normType_0,
                currentStatus: normStatus,
                reservationId: Number(reservationId),
                subtitle: !mediaObj_0?.sales_offer ? t("reservations.stages.salesOfferUploadSubtitle") : normType_0.includes("sales_offer") && normStatus === "confirmed" ? t("reservations.stages.salesOfferApprovedSubtitle") : t("reservations.stages.salesOfferAwaitingSubtitle"),
                documents: mediaObj_0?.sales_offer ? [
                    {
                        name: t("reservations.typeMap.sales_offer"),
                        url: mediaObj_0.sales_offer
                    }
                ] : []
            },
            {
                id: 3,
                name: t("reservations.typeMap.down_payment"),
                status: getStageStatus(3, statusType, status_2, mediaObj_0),
                step: t("reservations.details.stepOf", {
                    step: 3,
                    total: 4
                }),
                currentStatusType: normType_0,
                currentStatus: normStatus,
                subtitle: normType_0.includes("sales_offer") && normStatus === "confirmed" ? t("reservations.stages.downPaymentAwaitingSubtitle") : normType_0.includes("down_payment") && normStatus === "in_process" ? t("reservations.stages.downPaymentReviewSubtitle") : normType_0.includes("down_payment") && normStatus === "confirmed" ? t("reservations.stages.downPaymentApprovedSubtitle") : t("reservations.typeMap.down_payment"),
                documents: mediaObj_0?.down_payment ? [
                    {
                        name: t("reservations.details.downPaymentReceipt"),
                        url: mediaObj_0.down_payment
                    }
                ] : []
            },
            {
                id: 4,
                name: t("reservations.typeMap.sales_purchase"),
                status: getStageStatus(4, statusType, status_2, mediaObj_0),
                step: t("reservations.details.stepOf", {
                    step: 4,
                    total: 4
                }),
                currentStatusType: normType_0,
                currentStatus: normStatus,
                subtitle: t("reservations.stages.spaSubtitle"),
                documents: mediaObj_0?.sales_purchase ? [
                    {
                        name: t("reservations.details.spaDocument"),
                        url: mediaObj_0.sales_purchase
                    }
                ] : []
            }
        ];
    };
    const stages = getStages();
    return {
        bookingData,
        reservationData: bookingData,
        isLoading,
        isError,
        error,
        refetch,
        approveMutation,
        mutationApprove: approveMutation,
        declineMutation,
        mutationDecline: declineMutation,
        uploadSalesOfferMutation,
        mutationSalesOffer: uploadSalesOfferMutation,
        uploadSPAMutation,
        mutationSPA: uploadSPAMutation,
        approveDownPaymentMutation,
        mutationDownPayment: approveDownPaymentMutation,
        uploadDownPaymentMutation,
        mutationUploadDownPayment: uploadDownPaymentMutation,
        acceptSalesOfferMutation,
        mutationAcceptSalesOffer: acceptSalesOfferMutation,
        formatPrice,
        stages,
        getStatusIcon,
        getStatusBadge,
        isApproving: approveMutation.isPending,
        isRejecting: declineMutation.isPending,
        isSalesOfferUploading: uploadSalesOfferMutation.isPending,
        isDownPaymentApproving: approveDownPaymentMutation.isPending,
        isSPAUploading: uploadSPAMutation.isPending,
        isDownPaymentUploading: uploadDownPaymentMutation.isPending
    };
}
_s(useBookingDetails, "pVGsmrLxyUXVGHL2dm+4/lL0HtU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
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
"[project]/src/features/reservations/components/booking-details/BookingHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingHeader",
    ()=>BookingHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function BookingHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "1b268b6a0287d84c835976edbe7c393e5c9010ba9be3bffaef91a3eb6c7fb99e") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1b268b6a0287d84c835976edbe7c393e5c9010ba9be3bffaef91a3eb6c7fb99e";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    let t1;
    if ($[1] !== routePrefix || $[2] !== router) {
        t1 = ({
            "BookingHeader[<Button>.onClick]": ()=>router.push(`${routePrefix}/reservations`)
        })["BookingHeader[<Button>.onClick]"];
        $[1] = routePrefix;
        $[2] = router;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-gray-900",
            children: "Booking Details"
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-teal-600 hover:bg-teal-700 text-white gap-2 w-full sm:w-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
                    lineNumber: 62,
                    columnNumber: 94
                }, this),
                "Print Invoice"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    return t7;
}
_s(BookingHeader, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = BookingHeader;
var _c;
__turbopack_context__.k.register(_c, "BookingHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingStatusPills",
    ()=>BookingStatusPills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function BookingStatusPills(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "9fca5fd1d0363c9d2126c8cae3dfd1e036f1c44210ffc4fc596988ca540ce810") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9fca5fd1d0363c9d2126c8cae3dfd1e036f1c44210ffc4fc596988ca540ce810";
    }
    const { stages, getStatusBadge, reservationId } = t0;
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    let t1;
    if ($[1] !== stages) {
        t1 = stages.find(_BookingStatusPillsStagesFind);
        $[1] = stages;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const stage1 = t1;
    let t2;
    if ($[3] !== stages) {
        t2 = stages.find(_BookingStatusPillsStagesFind2);
        $[3] = stages;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const stage2 = t2;
    let t3;
    if ($[5] !== stages) {
        t3 = stages.find(_BookingStatusPillsStagesFind3);
        $[5] = stages;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const stage3 = t3;
    let t4;
    if ($[7] !== reservationId) {
        t4 = reservationId ? String(reservationId).replace(/\D/g, "") : "";
        $[7] = reservationId;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const cleanResId = t4;
    let t5;
    if ($[9] !== cleanResId || $[10] !== reservationId) {
        t5 = ("TURBOPACK compile-time truthy", 1) ? Boolean(reservationId) && localStorage.getItem(`approved_stage1_${reservationId}`) === "true" || Boolean(cleanResId) && localStorage.getItem(`approved_stage1_${cleanResId}`) === "true" || Boolean(reservationId) && localStorage.getItem(`reservation_${reservationId}_stage1_approved`) === "true" || Boolean(cleanResId) && localStorage.getItem(`reservation_${cleanResId}_stage1_approved`) === "true" : "TURBOPACK unreachable";
        $[9] = cleanResId;
        $[10] = reservationId;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const isStage1SavedApproved = t5;
    let t6;
    if ($[12] !== cleanResId || $[13] !== reservationId) {
        t6 = ("TURBOPACK compile-time truthy", 1) ? Boolean(reservationId) && localStorage.getItem(`accepted_sales_offer_${reservationId}`) === "true" || Boolean(cleanResId) && localStorage.getItem(`accepted_sales_offer_${cleanResId}`) === "true" : "TURBOPACK unreachable";
        $[12] = cleanResId;
        $[13] = reservationId;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    const isSalesOfferAccepted = t6;
    let t7;
    if ($[15] !== cleanResId || $[16] !== reservationId) {
        t7 = ("TURBOPACK compile-time truthy", 1) ? Boolean(reservationId) && localStorage.getItem(`approved_down_payment_${reservationId}`) === "true" || Boolean(cleanResId) && localStorage.getItem(`approved_down_payment_${cleanResId}`) === "true" : "TURBOPACK unreachable";
        $[15] = cleanResId;
        $[16] = reservationId;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    const isDownPaymentApproved = t7;
    let t8;
    if ($[18] !== isStage1SavedApproved || $[19] !== stage1?.currentStatus || $[20] !== stage1?.currentStatusType || $[21] !== stage1?.status || $[22] !== stages) {
        t8 = isStage1SavedApproved || stage1?.status === "Complete" || stage1?.currentStatus === "confirmed" || stage1?.currentStatus === "approved" || stage1?.currentStatus === "completed" || stage1?.currentStatusType !== "identification" && stage1?.currentStatusType !== "identification_confirmation" || stages.some(_BookingStatusPillsStagesSome);
        $[18] = isStage1SavedApproved;
        $[19] = stage1?.currentStatus;
        $[20] = stage1?.currentStatusType;
        $[21] = stage1?.status;
        $[22] = stages;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    const isStage1Complete = t8;
    let t9;
    if ($[24] !== isSalesOfferAccepted || $[25] !== isStage1Complete || $[26] !== stage2?.currentStatus || $[27] !== stage2?.currentStatusType || $[28] !== stage2?.status || $[29] !== stages) {
        t9 = isStage1Complete && (stage2?.status === "Complete" || isSalesOfferAccepted || (stage2?.currentStatusType === "sales_offer" || stage2?.currentStatusType === "sales_offer_approval") && (stage2?.currentStatus === "confirmed" || stage2?.currentStatus === "approved" || stage2?.currentStatus === "completed") || stage2?.currentStatusType === "down_payment" || stage2?.currentStatusType === "down_payment_pending" || stage2?.currentStatusType === "sales_purchase" || stage2?.currentStatusType === "sales_purchase_agreement" || stages.some(_BookingStatusPillsStagesSome2));
        $[24] = isSalesOfferAccepted;
        $[25] = isStage1Complete;
        $[26] = stage2?.currentStatus;
        $[27] = stage2?.currentStatusType;
        $[28] = stage2?.status;
        $[29] = stages;
        $[30] = t9;
    } else {
        t9 = $[30];
    }
    const isStage2Complete = t9;
    let t10;
    if ($[31] !== isDownPaymentApproved || $[32] !== isStage2Complete || $[33] !== stage3?.currentStatus || $[34] !== stage3?.currentStatusType || $[35] !== stage3?.status || $[36] !== stages) {
        t10 = isStage2Complete && (stage3?.status === "Complete" || isDownPaymentApproved || (stage3?.currentStatusType === "down_payment" || stage3?.currentStatusType === "down_payment_pending") && (stage3?.currentStatus === "confirmed" || stage3?.currentStatus === "approved" || stage3?.currentStatus === "completed") || stage3?.currentStatusType === "sales_purchase" || stage3?.currentStatusType === "sales_purchase_agreement" || stages.some(_BookingStatusPillsStagesSome3));
        $[31] = isDownPaymentApproved;
        $[32] = isStage2Complete;
        $[33] = stage3?.currentStatus;
        $[34] = stage3?.currentStatusType;
        $[35] = stage3?.status;
        $[36] = stages;
        $[37] = t10;
    } else {
        t10 = $[37];
    }
    const isStage3Complete = t10;
    let t11;
    if ($[38] !== isStage1Complete || $[39] !== isStage2Complete || $[40] !== isStage3Complete || $[41] !== stages) {
        let t12;
        if ($[43] !== isStage1Complete || $[44] !== isStage2Complete || $[45] !== isStage3Complete) {
            t12 = ({
                "BookingStatusPills[stages.map()]": (stage)=>{
                    if (stage.id === 1) {
                        if (stage.status === "Rejected") {
                            return stage;
                        }
                        if (isStage1Complete) {
                            return {
                                ...stage,
                                status: "Complete"
                            };
                        }
                        return {
                            ...stage,
                            status: "Pending"
                        };
                    }
                    if (stage.id === 2) {
                        if (stage.status === "Rejected") {
                            return stage;
                        }
                        if (!isStage1Complete) {
                            return {
                                ...stage,
                                status: "Waiting"
                            };
                        }
                        if (isStage2Complete) {
                            return {
                                ...stage,
                                status: "Complete"
                            };
                        }
                        return {
                            ...stage,
                            status: "Pending"
                        };
                    }
                    if (stage.id === 3) {
                        if (stage.status === "Rejected") {
                            return stage;
                        }
                        if (!isStage2Complete) {
                            return {
                                ...stage,
                                status: "Waiting"
                            };
                        }
                        if (isStage3Complete) {
                            return {
                                ...stage,
                                status: "Complete"
                            };
                        }
                        return {
                            ...stage,
                            status: "Pending"
                        };
                    }
                    if (stage.id === 4) {
                        if (stage.status === "Rejected") {
                            return stage;
                        }
                        if (!isStage3Complete) {
                            return {
                                ...stage,
                                status: "Waiting"
                            };
                        }
                        if (stage.status === "Complete") {
                            return stage;
                        }
                        return {
                            ...stage,
                            status: "Pending"
                        };
                    }
                    return stage;
                }
            })["BookingStatusPills[stages.map()]"];
            $[43] = isStage1Complete;
            $[44] = isStage2Complete;
            $[45] = isStage3Complete;
            $[46] = t12;
        } else {
            t12 = $[46];
        }
        t11 = stages.map(t12);
        $[38] = isStage1Complete;
        $[39] = isStage2Complete;
        $[40] = isStage3Complete;
        $[41] = stages;
        $[42] = t11;
    } else {
        t11 = $[42];
    }
    const effectiveStages = t11;
    let t12;
    if ($[47] !== effectiveStages || $[48] !== getStatusBadge || $[49] !== isAr) {
        let t13;
        if ($[51] !== getStatusBadge || $[52] !== isAr) {
            t13 = ({
                "BookingStatusPills[effectiveStages.map()]": (stage_0)=>{
                    const isStage2AwaitingAccept = stage_0.id === 2 && stage_0.status !== "Complete" && stage_0.status !== "Rejected" && stage_0.documents && stage_0.documents.length > 0;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-1 shadow-2xs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: stage_0.name
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
                                    lineNumber: 243,
                                    columnNumber: 135
                                }, this),
                                isStage2AwaitingAccept ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "bg-amber-50 text-amber-700 border-amber-200 text-xs font-medium",
                                    children: isAr ? "\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0642\u0628\u0648\u0644" : "Wait for Accept"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
                                    lineNumber: 243,
                                    columnNumber: 230
                                }, this) : getStatusBadge(stage_0.status)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
                            lineNumber: 243,
                            columnNumber: 130
                        }, this)
                    }, stage_0.id, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
                        lineNumber: 243,
                        columnNumber: 18
                    }, this);
                }
            })["BookingStatusPills[effectiveStages.map()]"];
            $[51] = getStatusBadge;
            $[52] = isAr;
            $[53] = t13;
        } else {
            t13 = $[53];
        }
        t12 = effectiveStages.map(t13);
        $[47] = effectiveStages;
        $[48] = getStatusBadge;
        $[49] = isAr;
        $[50] = t12;
    } else {
        t12 = $[50];
    }
    let t13;
    if ($[54] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[54] = t12;
        $[55] = t13;
    } else {
        t13 = $[55];
    }
    return t13;
}
_s(BookingStatusPills, "FlN/ZbmDt9Cr5Bksrso5IP5a1aE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = BookingStatusPills;
function _BookingStatusPillsStagesSome3(s_4) {
    return s_4.id > 3 && (s_4.status === "Complete" || s_4.documents && s_4.documents.length > 0);
}
function _BookingStatusPillsStagesSome2(s_3) {
    return s_3.id > 2 && (s_3.status === "Complete" || s_3.documents && s_3.documents.length > 0);
}
function _BookingStatusPillsStagesSome(s_2) {
    return s_2.id > 1 && (s_2.status === "Complete" || s_2.documents && s_2.documents.length > 0);
}
function _BookingStatusPillsStagesFind3(s_1) {
    return s_1.id === 3;
}
function _BookingStatusPillsStagesFind2(s_0) {
    return s_0.id === 2;
}
function _BookingStatusPillsStagesFind(s) {
    return s.id === 1;
}
var _c;
__turbopack_context__.k.register(_c, "BookingStatusPills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage1Approval",
    ()=>Stage1Approval
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
;
;
;
function Stage1Approval(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "607a55a9eb548cd410954d5dd1d553f411a4e4d3cd01656f3eee1f81fcc21ce1") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "607a55a9eb548cd410954d5dd1d553f411a4e4d3cd01656f3eee1f81fcc21ce1";
    }
    const { adminComment, setAdminComment, approveMutation, declineMutation, handleApprove, t } = t0;
    let t1;
    if ($[1] !== t) {
        t1 = t("reservations.approveDialog.commentsLabel");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm font-medium text-gray-700",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t) {
        t3 = t("reservations.approveDialog.commentsPlaceholder");
        $[5] = t;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== setAdminComment) {
        t4 = ({
            "Stage1Approval[<textarea>.onChange]": (e)=>setAdminComment(e.target.value)
        })["Stage1Approval[<textarea>.onChange]"];
        $[7] = setAdminComment;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== adminComment || $[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            className: "w-full min-h-[80px] p-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-y",
            placeholder: t3,
            value: adminComment,
            onChange: t4
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[9] = adminComment;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t2 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t2,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[13] = t2;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== approveMutation.isPending || $[17] !== t) {
        t7 = approveMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-4 w-4 mr-2 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                    lineNumber: 84,
                    columnNumber: 40
                }, this),
                t("reservations.actions.approving")
            ]
        }, void 0, true) : t("reservations.actions.approveAndMoveToStage2");
        $[16] = approveMutation.isPending;
        $[17] = t;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== approveMutation.isPending || $[20] !== handleApprove || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-xs",
            disabled: approveMutation.isPending,
            onClick: handleApprove,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[19] = approveMutation.isPending;
        $[20] = handleApprove;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== adminComment || $[24] !== declineMutation) {
        t9 = ({
            "Stage1Approval[<Button>.onClick]": ()=>{
                declineMutation.mutate({
                    comments: adminComment,
                    reservation_status_type: "IDENTIFICATION"
                });
            }
        })["Stage1Approval[<Button>.onClick]"];
        $[23] = adminComment;
        $[24] = declineMutation;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] !== declineMutation.isPending || $[27] !== t) {
        t10 = declineMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-4 w-4 mr-2 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                    lineNumber: 119,
                    columnNumber: 41
                }, this),
                t("reservations.actions.declining")
            ]
        }, void 0, true) : t("reservations.actions.decline");
        $[26] = declineMutation.isPending;
        $[27] = t;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] !== declineMutation.isPending || $[30] !== t10 || $[31] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "bg-rose-600 hover:bg-rose-700 text-white font-medium px-6",
            disabled: declineMutation.isPending,
            onClick: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[29] = declineMutation.isPending;
        $[30] = t10;
        $[31] = t9;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== t11 || $[34] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 pt-2",
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[33] = t11;
        $[34] = t8;
        $[35] = t12;
    } else {
        t12 = $[35];
    }
    let t13;
    if ($[36] !== t12 || $[37] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 pt-4 border-t border-gray-100",
            children: [
                t6,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[36] = t12;
        $[37] = t6;
        $[38] = t13;
    } else {
        t13 = $[38];
    }
    return t13;
}
_c = Stage1Approval;
var _c;
__turbopack_context__.k.register(_c, "Stage1Approval");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage2SalesOffer",
    ()=>Stage2SalesOffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
function Stage2SalesOffer(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(88);
    if ($[0] !== "81e93550028178d8022f793fd98498fb8cc33c0defaa05381b7df7e766437a6a") {
        for(let $i = 0; $i < 88; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "81e93550028178d8022f793fd98498fb8cc33c0defaa05381b7df7e766437a6a";
    }
    const { stage, salesOfferFile, setSalesOfferFile, isReuploadingSalesOffer, setIsReuploadingSalesOffer, salesOfferImagePreview, adminComment, setAdminComment, handleSalesOfferUpload, uploadSalesOfferMutation, t, isAr } = t0;
    const hasDoc = stage.documents && stage.documents.length > 0;
    const isUploadRequest = stage.currentStatusType === "sales_offer_request";
    const isWaitingApproval = stage.currentStatusType === "sales_offer" || stage.currentStatusType === "sales_offer_approval" || hasDoc && !isUploadRequest;
    const shouldShowUpload = isUploadRequest || !hasDoc && !isWaitingApproval || isReuploadingSalesOffer || Boolean(salesOfferFile);
    if (shouldShowUpload) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                className: "h-4 w-4 text-teal-600"
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 50,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        const t2 = isAr ? "\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0639\u0631\u0636 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A" : "Upload Sales Offer Image";
        let t3;
        if ($[2] !== t2) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5",
                children: [
                    t1,
                    t2
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 58,
                columnNumber: 12
            }, this);
            $[2] = t2;
            $[3] = t3;
        } else {
            t3 = $[3];
        }
        const t4 = isAr ? "\u0627\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0639\u0631\u0636 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A (\u0635\u0648\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0641\u0642\u0637: PNG, JPG, WEBP). \u0628\u0639\u062F \u0627\u0644\u0631\u0641\u0639\u060C \u0633\u064A\u0646\u062A\u0638\u0631 \u0627\u0644\u0646\u0638\u0627\u0645 \u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0639\u0645\u064A\u0644." : "Upload the sales offer image (one image only: PNG, JPG, WEBP). Once uploaded, the system will wait for client approval.";
        let t5;
        if ($[4] !== t4) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-600 mt-0.5",
                children: t4
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 67,
                columnNumber: 12
            }, this);
            $[4] = t4;
            $[5] = t5;
        } else {
            t5 = $[5];
        }
        let t6;
        if ($[6] !== t3 || $[7] !== t5) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t3,
                    t5
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 75,
                columnNumber: 12
            }, this);
            $[6] = t3;
            $[7] = t5;
            $[8] = t6;
        } else {
            t6 = $[8];
        }
        let t7;
        if ($[9] !== isAr || $[10] !== isReuploadingSalesOffer || $[11] !== setIsReuploadingSalesOffer || $[12] !== setSalesOfferFile) {
            t7 = isReuploadingSalesOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "ghost",
                size: "sm",
                className: "text-xs text-gray-500 hover:text-gray-700 h-8 px-2 cursor-pointer",
                onClick: {
                    "Stage2SalesOffer[<Button>.onClick]": ()=>{
                        setIsReuploadingSalesOffer(false);
                        setSalesOfferFile(null);
                    }
                }["Stage2SalesOffer[<Button>.onClick]"],
                children: isAr ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel"
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 84,
                columnNumber: 39
            }, this);
            $[9] = isAr;
            $[10] = isReuploadingSalesOffer;
            $[11] = setIsReuploadingSalesOffer;
            $[12] = setSalesOfferFile;
            $[13] = t7;
        } else {
            t7 = $[13];
        }
        let t8;
        if ($[14] !== t6 || $[15] !== t7) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 100,
                columnNumber: 12
            }, this);
            $[14] = t6;
            $[15] = t7;
            $[16] = t8;
        } else {
            t8 = $[16];
        }
        let t9;
        if ($[17] !== isAr || $[18] !== setIsReuploadingSalesOffer || $[19] !== setSalesOfferFile) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                id: "salesOfferUpload",
                className: "hidden",
                accept: "image/png,image/jpeg,image/jpg,image/webp",
                multiple: false,
                onChange: {
                    "Stage2SalesOffer[<input>.onChange]": (e)=>{
                        const file = e.target.files?.[0];
                        if (file) {
                            if (!file.type.startsWith("image/")) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0635\u0648\u0631\u0629 \u0641\u0642\u0637 \u0628\u0635\u064A\u063A\u0629 PNG \u0623\u0648 JPG \u0623\u0648 WEBP" : "Please select an image file only (PNG, JPG, WEBP)");
                                e.target.value = "";
                                return;
                            }
                            if (file.size > 5242880) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "\u062D\u062C\u0645 \u0627\u0644\u0635\u0648\u0631\u0629 \u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B\u060C \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 5 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A" : "Image size is too large (max 5MB)");
                                e.target.value = "";
                                return;
                            }
                            setSalesOfferFile(file);
                            setIsReuploadingSalesOffer(true);
                        }
                        e.target.value = "";
                    }
                }["Stage2SalesOffer[<input>.onChange]"]
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 109,
                columnNumber: 12
            }, this);
            $[17] = isAr;
            $[18] = setIsReuploadingSalesOffer;
            $[19] = setSalesOfferFile;
            $[20] = t9;
        } else {
            t9 = $[20];
        }
        let t10;
        if ($[21] !== isAr || $[22] !== salesOfferFile || $[23] !== salesOfferImagePreview || $[24] !== setSalesOfferFile) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "salesOfferUpload",
                className: "flex items-center justify-center gap-2 p-4 border-2 border-dashed border-teal-300 bg-white rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50/50 transition-colors",
                children: salesOfferImagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-center justify-center w-full py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group max-w-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: salesOfferImagePreview,
                                    alt: "Sales Offer Preview",
                                    className: "max-h-52 max-w-full rounded-lg object-contain border border-teal-200 shadow-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                    lineNumber: 138,
                                    columnNumber: 383
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "Stage2SalesOffer[<button>.onClick]": (e_0)=>{
                                            e_0.preventDefault();
                                            e_0.stopPropagation();
                                            setSalesOfferFile(null);
                                        }
                                    }["Stage2SalesOffer[<button>.onClick]"],
                                    className: "absolute -top-2 -right-2 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md cursor-pointer",
                                    title: isAr ? "\u062D\u0630\u0641" : "Remove",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                        lineNumber: 144,
                                        columnNumber: 221
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                    lineNumber: 138,
                                    columnNumber: 536
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 138,
                            columnNumber: 342
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mt-2 text-xs text-teal-900 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: salesOfferFile?.name
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                    lineNumber: 144,
                                    columnNumber: 345
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400",
                                    children: [
                                        "(",
                                        (salesOfferFile?.size ? salesOfferFile.size / 1024 : 0).toFixed(1),
                                        " KB)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                    lineNumber: 144,
                                    columnNumber: 380
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 144,
                            columnNumber: 265
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                    lineNumber: 138,
                    columnNumber: 262
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            className: "h-8 w-8 text-teal-600 mx-auto mb-1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 144,
                            columnNumber: 541
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold text-gray-800 block",
                            children: isAr ? "\u0627\u0636\u063A\u0637 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0635\u0648\u0631\u0629 \u0639\u0631\u0636 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A" : "Click to select sales offer image"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 144,
                            columnNumber: 603
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500 mt-1 block",
                            children: isAr ? "\u0635\u0648\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0641\u0642\u0637 (PNG, JPG, WEBP) \u0628\u062D\u062F \u0623\u0642\u0635\u0649 5 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A" : "Single image only (PNG, JPG, WEBP) \u2014 max 5 MB"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 144,
                            columnNumber: 879
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                    lineNumber: 144,
                    columnNumber: 507
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this);
            $[21] = isAr;
            $[22] = salesOfferFile;
            $[23] = salesOfferImagePreview;
            $[24] = setSalesOfferFile;
            $[25] = t10;
        } else {
            t10 = $[25];
        }
        let t11;
        if ($[26] !== t) {
            t11 = t("reservations.approveDialog.commentsLabel");
            $[26] = t;
            $[27] = t11;
        } else {
            t11 = $[27];
        }
        let t12;
        if ($[28] !== t11) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-xs font-medium text-gray-700 block",
                children: t11
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 163,
                columnNumber: 13
            }, this);
            $[28] = t11;
            $[29] = t12;
        } else {
            t12 = $[29];
        }
        let t13;
        if ($[30] !== t) {
            t13 = t("reservations.uploadOfferDialog.commentsPlaceholder");
            $[30] = t;
            $[31] = t13;
        } else {
            t13 = $[31];
        }
        let t14;
        if ($[32] !== setAdminComment) {
            t14 = ({
                "Stage2SalesOffer[<textarea>.onChange]": (e_1)=>setAdminComment(e_1.target.value)
            })["Stage2SalesOffer[<textarea>.onChange]"];
            $[32] = setAdminComment;
            $[33] = t14;
        } else {
            t14 = $[33];
        }
        let t15;
        if ($[34] !== adminComment || $[35] !== t13 || $[36] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "w-full min-h-[60px] p-2.5 text-xs bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-y",
                placeholder: t13,
                value: adminComment,
                onChange: t14
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 189,
                columnNumber: 13
            }, this);
            $[34] = adminComment;
            $[35] = t13;
            $[36] = t14;
            $[37] = t15;
        } else {
            t15 = $[37];
        }
        let t16;
        if ($[38] !== t12 || $[39] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    t12,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this);
            $[38] = t12;
            $[39] = t15;
            $[40] = t16;
        } else {
            t16 = $[40];
        }
        let t17;
        if ($[41] !== handleSalesOfferUpload || $[42] !== setIsReuploadingSalesOffer) {
            t17 = ({
                "Stage2SalesOffer[<Button>.onClick]": ()=>{
                    handleSalesOfferUpload();
                    setIsReuploadingSalesOffer(false);
                }
            })["Stage2SalesOffer[<Button>.onClick]"];
            $[41] = handleSalesOfferUpload;
            $[42] = setIsReuploadingSalesOffer;
            $[43] = t17;
        } else {
            t17 = $[43];
        }
        const t18 = !salesOfferFile || uploadSalesOfferMutation.isPending;
        let t19;
        if ($[44] !== isAr || $[45] !== t || $[46] !== uploadSalesOfferMutation.isPending) {
            t19 = uploadSalesOfferMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-4 w-4 mr-2 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                        lineNumber: 223,
                        columnNumber: 52
                    }, this),
                    t("reservations.actions.uploading")
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        className: "h-4 w-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                        lineNumber: 223,
                        columnNumber: 146
                    }, this),
                    isAr ? "\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0639\u0631\u0636 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A" : "Upload Sales Offer Image"
                ]
            }, void 0, true);
            $[44] = isAr;
            $[45] = t;
            $[46] = uploadSalesOfferMutation.isPending;
            $[47] = t19;
        } else {
            t19 = $[47];
        }
        let t20;
        if ($[48] !== t17 || $[49] !== t18 || $[50] !== t19) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "w-full bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-xs cursor-pointer",
                onClick: t17,
                disabled: t18,
                children: t19
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this);
            $[48] = t17;
            $[49] = t18;
            $[50] = t19;
            $[51] = t20;
        } else {
            t20 = $[51];
        }
        let t21;
        if ($[52] !== t10 || $[53] !== t16 || $[54] !== t20 || $[55] !== t8 || $[56] !== t9) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 p-4 bg-teal-50/40 rounded-xl border border-teal-200 space-y-3",
                children: [
                    t8,
                    t9,
                    t10,
                    t16,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this);
            $[52] = t10;
            $[53] = t16;
            $[54] = t20;
            $[55] = t8;
            $[56] = t9;
            $[57] = t21;
        } else {
            t21 = $[57];
        }
        return t21;
    }
    const t1 = `p-4 rounded-xl border flex flex-col gap-2 ${stage.currentStatusType === "sales_offer_approval" ? "bg-blue-50/70 border-blue-200/80" : "bg-amber-50/70 border-amber-200/80"}`;
    const t2 = `w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${stage.currentStatusType === "sales_offer_approval" ? "bg-blue-100 border-blue-300" : "bg-amber-100 border-amber-300"}`;
    const t3 = `h-4 w-4 animate-pulse ${stage.currentStatusType === "sales_offer_approval" ? "text-blue-600" : "text-amber-700"}`;
    let t4;
    if ($[58] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: t3
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 260,
            columnNumber: 10
        }, this);
        $[58] = t3;
        $[59] = t4;
    } else {
        t4 = $[59];
    }
    let t5;
    if ($[60] !== t2 || $[61] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 268,
            columnNumber: 10
        }, this);
        $[60] = t2;
        $[61] = t4;
        $[62] = t5;
    } else {
        t5 = $[62];
    }
    const t6 = `text-xs font-bold uppercase tracking-wider ${stage.currentStatusType === "sales_offer_approval" ? "text-blue-900" : "text-amber-900"}`;
    const t7 = stage.currentStatusType === "sales_offer_approval" ? isAr ? "\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0642\u0628\u0648\u0644 \u0627\u0644\u0639\u0645\u064A\u0644 \u0644\u0644\u0639\u0631\u0636" : "Waiting for Client to Accept the Offer" : isAr ? "\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0639\u0645\u064A\u0644" : "Waiting for Client Approval";
    let t8;
    if ($[63] !== t6 || $[64] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 279,
            columnNumber: 10
        }, this);
        $[63] = t6;
        $[64] = t7;
        $[65] = t8;
    } else {
        t8 = $[65];
    }
    const t9 = `text-[10px] px-2 py-0.5 font-semibold ${stage.currentStatusType === "sales_offer_approval" ? "bg-blue-100 text-blue-800 border-blue-300" : "bg-amber-100 text-amber-800 border-amber-300"}`;
    const t10 = stage.currentStatusType === "sales_offer_approval" ? isAr ? "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0642\u0628\u0648\u0644" : "Awaiting Acceptance" : isAr ? "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631" : "Pending Approval";
    let t11;
    if ($[66] !== t10 || $[67] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[66] = t10;
        $[67] = t9;
        $[68] = t11;
    } else {
        t11 = $[68];
    }
    let t12;
    if ($[69] !== isAr || $[70] !== stage.currentStatusType) {
        t12 = stage.currentStatusType === "sales_offer_approval" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            className: "bg-gray-100 text-gray-600 border-gray-300 text-[10px] px-2 py-0.5 font-semibold",
            children: [
                "🔒 ",
                isAr ? "\u0645\u0642\u0641\u0644" : "Locked"
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 299,
            columnNumber: 65
        }, this);
        $[69] = isAr;
        $[70] = stage.currentStatusType;
        $[71] = t12;
    } else {
        t12 = $[71];
    }
    let t13;
    if ($[72] !== t11 || $[73] !== t12 || $[74] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: [
                t8,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[72] = t11;
        $[73] = t12;
        $[74] = t8;
        $[75] = t13;
    } else {
        t13 = $[75];
    }
    const t14 = `text-xs mt-1 leading-relaxed ${stage.currentStatusType === "sales_offer_approval" ? "text-blue-800" : "text-amber-800"}`;
    const t15 = stage.currentStatusType === "sales_offer_approval" ? isAr ? "\u062A\u0645 \u0631\u0641\u0639 \u0627\u0644\u0639\u0631\u0636 \u0648\u0625\u0631\u0633\u0627\u0644\u0647 \u0644\u0644\u0639\u0645\u064A\u0644. \u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0622\u0646. \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0642\u0628\u0648\u0644 \u0627\u0644\u0639\u0645\u064A\u0644 \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0625\u0644\u0649 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649." : "The offer has been uploaded and sent to the client. No changes allowed at this stage. Waiting for the client to accept and proceed to down payment." : isAr ? "\u062A\u0645 \u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0639\u0631\u0636 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0628\u0646\u062C\u0627\u062D. \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0639\u0631\u0636 \u0644\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649." : "Sales offer image uploaded successfully. Waiting for the client to approve the offer before moving to down payment.";
    let t16;
    if ($[76] !== t14 || $[77] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t14,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[76] = t14;
        $[77] = t15;
        $[78] = t16;
    } else {
        t16 = $[78];
    }
    let t17;
    if ($[79] !== t13 || $[80] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[79] = t13;
        $[80] = t16;
        $[81] = t17;
    } else {
        t17 = $[81];
    }
    let t18;
    if ($[82] !== t17 || $[83] !== t5) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                t5,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[82] = t17;
        $[83] = t5;
        $[84] = t18;
    } else {
        t18 = $[84];
    }
    let t19;
    if ($[85] !== t1 || $[86] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 space-y-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t1,
                children: t18
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 347,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[85] = t1;
        $[86] = t18;
        $[87] = t19;
    } else {
        t19 = $[87];
    }
    return t19;
}
_c = Stage2SalesOffer;
var _c;
__turbopack_context__.k.register(_c, "Stage2SalesOffer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage3DownPayment",
    ()=>Stage3DownPayment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
function Stage3DownPayment(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "04104f04caaa02fcb3c6e192bda0d9d3dcc881e8f25a9628e2c8351eb7e9a8da") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "04104f04caaa02fcb3c6e192bda0d9d3dcc881e8f25a9628e2c8351eb7e9a8da";
    }
    const { stage, downPaymentFile, setDownPaymentFile, isReuploadingDownPayment, setIsReuploadingDownPayment, downPaymentPreview, downPaymentComment, setDownPaymentComment, adminComment, setAdminComment, handleDownPaymentUpload, uploadDownPaymentMutation, handleApproveDownPaymentAction, approveDownPaymentMutation, declineMutation, t, isAr } = t0;
    const hasReceiptDoc = stage.documents && stage.documents.length > 0;
    const isDownPaymentPending = stage.currentStatusType === "down_payment_pending";
    const shouldShowApproveReject = isDownPaymentPending || hasReceiptDoc && !isReuploadingDownPayment && !downPaymentFile;
    const shouldShowPaymentUpload = !isDownPaymentPending && (!hasReceiptDoc || isReuploadingDownPayment || Boolean(downPaymentFile));
    let t1;
    if ($[1] !== downPaymentComment || $[2] !== downPaymentFile || $[3] !== downPaymentPreview || $[4] !== handleDownPaymentUpload || $[5] !== hasReceiptDoc || $[6] !== isAr || $[7] !== setDownPaymentComment || $[8] !== setDownPaymentFile || $[9] !== setIsReuploadingDownPayment || $[10] !== shouldShowPaymentUpload || $[11] !== t || $[12] !== uploadDownPaymentMutation) {
        t1 = shouldShowPaymentUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-teal-50/40 rounded-xl border border-teal-200 space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "h-4 w-4 text-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 59,
                                            columnNumber: 273
                                        }, this),
                                        hasReceiptDoc ? isAr ? "\u0631\u0641\u0639 \u0625\u064A\u0635\u0627\u0644 \u062C\u062F\u064A\u062F / \u062A\u063A\u064A\u064A\u0631 \u0625\u064A\u0635\u0627\u0644 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649" : "Upload New Receipt / Replace Payment Receipt" : isAr ? "\u0631\u0641\u0639 \u0625\u064A\u0635\u0627\u0644 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649" : "Upload Down Payment Receipt"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 59,
                                    columnNumber: 172
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600 mt-0.5",
                                    children: isAr ? "\u0627\u0631\u0641\u0639 \u0625\u064A\u0635\u0627\u0644 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0628\u0646\u0643\u064A \u0623\u0648 \u0625\u062B\u0628\u0627\u062A \u0633\u062F\u0627\u062F \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 (\u0635\u0648\u0631\u0629 \u0623\u0648 \u0645\u0644\u0641 PDF)." : "Upload the bank transfer receipt or proof of payment for the down payment (image or PDF)."
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 59,
                                    columnNumber: 782
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 59,
                            columnNumber: 167
                        }, this),
                        hasReceiptDoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            className: "text-xs text-gray-500 hover:text-gray-700 h-8 px-2 cursor-pointer",
                            onClick: {
                                "Stage3DownPayment[<Button>.onClick]": ()=>{
                                    setIsReuploadingDownPayment(false);
                                    setDownPaymentFile(null);
                                }
                            }["Stage3DownPayment[<Button>.onClick]"],
                            children: isAr ? "\u0625\u0644\u063A\u0627\u0621" : "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 59,
                            columnNumber: 1301
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                    lineNumber: 59,
                    columnNumber: 116
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    id: "downPaymentUpload",
                    className: "hidden",
                    accept: "image/png,image/jpeg,image/jpg,image/webp,application/pdf",
                    onChange: {
                        "Stage3DownPayment[<input>.onChange]": (e)=>{
                            const file = e.target.files?.[0];
                            if (file) {
                                if (file.size > 10485760) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B\u060C \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 10 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A" : "File size is too large (max 10MB)");
                                    e.target.value = "";
                                    return;
                                }
                                setDownPaymentFile(file);
                                setIsReuploadingDownPayment(true);
                            }
                            e.target.value = "";
                        }
                    }["Stage3DownPayment[<input>.onChange]"]
                }, void 0, false, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                    lineNumber: 64,
                    columnNumber: 119
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "downPaymentUpload",
                    className: "flex items-center justify-center gap-2 p-4 border-2 border-dashed border-teal-300 bg-white rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50/50 transition-colors",
                    children: downPaymentPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center justify-center w-full py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group max-w-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: downPaymentPreview,
                                        alt: "Down Payment Receipt",
                                        className: "max-h-52 max-w-full rounded-lg object-contain border border-teal-200 shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 78,
                                        columnNumber: 418
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "Stage3DownPayment[<button>.onClick]": (e_0)=>{
                                                e_0.preventDefault();
                                                e_0.stopPropagation();
                                                setDownPaymentFile(null);
                                            }
                                        }["Stage3DownPayment[<button>.onClick]"],
                                        className: "absolute -top-2 -right-2 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md cursor-pointer",
                                        title: isAr ? "\u062D\u0630\u0641" : "Remove",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 84,
                                            columnNumber: 222
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 78,
                                        columnNumber: 568
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 78,
                                columnNumber: 377
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-2 text-xs text-teal-900 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: downPaymentFile?.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 84,
                                        columnNumber: 346
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400",
                                        children: [
                                            "(",
                                            (downPaymentFile?.size ? downPaymentFile.size / 1024 : 0).toFixed(1),
                                            " KB)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 84,
                                        columnNumber: 382
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 84,
                                columnNumber: 266
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 78,
                        columnNumber: 297
                    }, this) : downPaymentFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between w-full p-2 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-6 w-6 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 84,
                                        columnNumber: 654
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-gray-800",
                                        children: downPaymentFile.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 84,
                                        columnNumber: 700
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 84,
                                columnNumber: 613
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "Stage3DownPayment[<button>.onClick]": (e_1)=>{
                                        e_1.preventDefault();
                                        e_1.stopPropagation();
                                        setDownPaymentFile(null);
                                    }
                                }["Stage3DownPayment[<button>.onClick]"],
                                className: "p-1 text-red-600 hover:text-red-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 90,
                                    columnNumber: 101
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 84,
                                columnNumber: 787
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 84,
                        columnNumber: 529
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "h-8 w-8 text-teal-600 mx-auto mb-1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 90,
                                columnNumber: 178
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-800 block",
                                children: isAr ? "\u0627\u0636\u063A\u0637 \u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0625\u064A\u0635\u0627\u0644 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649" : "Click to select down payment receipt"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 90,
                                columnNumber: 237
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 mt-1 block",
                                children: isAr ? "\u0635\u0648\u0631 (PNG, JPG, WEBP) \u0623\u0648 \u0645\u0633\u062A\u0646\u062F\u0627\u062A (PDF) \u0628\u062D\u062F \u0623\u0642\u0635\u0649 10 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A" : "Images (PNG, JPG, WEBP) or PDF \u2014 max 10 MB"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 90,
                                columnNumber: 528
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 90,
                        columnNumber: 144
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                    lineNumber: 78,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs font-medium text-gray-700 block",
                            children: t("reservations.approveDialog.commentsLabel")
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 90,
                            columnNumber: 884
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "w-full min-h-[60px] p-2.5 text-xs bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-y",
                            placeholder: t("reservations.approveDialog.commentsPlaceholder"),
                            value: downPaymentComment,
                            onChange: {
                                "Stage3DownPayment[<textarea>.onChange]": (e_2)=>setDownPaymentComment(e_2.target.value)
                            }["Stage3DownPayment[<textarea>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 90,
                            columnNumber: 998
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                    lineNumber: 90,
                    columnNumber: 857
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "w-full bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-xs cursor-pointer",
                    onClick: handleDownPaymentUpload,
                    disabled: !downPaymentFile || uploadDownPaymentMutation && uploadDownPaymentMutation.isPending,
                    children: uploadDownPaymentMutation && uploadDownPaymentMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-4 w-4 mr-2 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 92,
                                columnNumber: 367
                            }, this),
                            t("reservations.actions.uploading")
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 92,
                                columnNumber: 461
                            }, this),
                            isAr ? "\u0631\u0641\u0639 \u0625\u064A\u0635\u0627\u0644 \u0627\u0644\u062F\u0641\u0639\u0629 \u0627\u0644\u0623\u0648\u0644\u0649" : "Upload Down Payment Receipt"
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                    lineNumber: 92,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
            lineNumber: 59,
            columnNumber: 37
        }, this);
        $[1] = downPaymentComment;
        $[2] = downPaymentFile;
        $[3] = downPaymentPreview;
        $[4] = handleDownPaymentUpload;
        $[5] = hasReceiptDoc;
        $[6] = isAr;
        $[7] = setDownPaymentComment;
        $[8] = setDownPaymentFile;
        $[9] = setIsReuploadingDownPayment;
        $[10] = shouldShowPaymentUpload;
        $[11] = t;
        $[12] = uploadDownPaymentMutation;
        $[13] = t1;
    } else {
        t1 = $[13];
    }
    let t2;
    if ($[14] !== adminComment || $[15] !== approveDownPaymentMutation || $[16] !== declineMutation || $[17] !== handleApproveDownPaymentAction || $[18] !== isAr || $[19] !== isDownPaymentPending || $[20] !== setAdminComment || $[21] !== setIsReuploadingDownPayment || $[22] !== shouldShowApproveReject || $[23] !== t) {
        t2 = shouldShowApproveReject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 p-4 bg-emerald-50/40 rounded-xl border border-emerald-200 shadow-2xs",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold uppercase tracking-wider text-emerald-800",
                                    children: t("reservations.actions.approveDownPayment")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 111,
                                    columnNumber: 189
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600 mt-0.5",
                                    children: isDownPaymentPending ? isAr ? "\u0642\u0627\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0631\u0641\u0639 \u0625\u064A\u0635\u0627\u0644 \u0627\u0644\u062F\u0641\u0639\u0629. \u0631\u0627\u062C\u0639 \u0627\u0644\u0625\u064A\u0635\u0627\u0644 \u0623\u062F\u0646\u0627\u0647 \u062B\u0645 \u0648\u0627\u0641\u0642 \u0623\u0648 \u0627\u0631\u0641\u0636." : "The client has uploaded a payment receipt. Review it below then approve or reject." : t("reservations.stages.downPaymentReviewSubtitle")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 111,
                                    columnNumber: 320
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 111,
                            columnNumber: 184
                        }, this),
                        !isDownPaymentPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            size: "sm",
                            variant: "outline",
                            onClick: {
                                "Stage3DownPayment[<Button>.onClick]": ()=>setIsReuploadingDownPayment(true)
                            }["Stage3DownPayment[<Button>.onClick]"],
                            className: "gap-1.5 border-teal-300 text-teal-700 hover:bg-teal-50 hover:text-teal-800 cursor-pointer h-7 text-xs font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 113,
                                    columnNumber: 177
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isAr ? "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0625\u064A\u0635\u0627\u0644" : "Change Receipt"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 113,
                                    columnNumber: 207
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 111,
                            columnNumber: 899
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                    lineNumber: 111,
                    columnNumber: 133
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs font-medium text-gray-700 block",
                            children: t("reservations.approveDialog.commentsLabel")
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 113,
                            columnNumber: 366
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "w-full min-h-[60px] p-2.5 text-xs bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-y",
                            placeholder: t("reservations.approveDialog.commentsPlaceholder"),
                            value: adminComment,
                            onChange: {
                                "Stage3DownPayment[<textarea>.onChange]": (e_3)=>setAdminComment(e_3.target.value)
                            }["Stage3DownPayment[<textarea>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 113,
                            columnNumber: 480
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                    lineNumber: 113,
                    columnNumber: 339
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-xs cursor-pointer",
                            disabled: approveDownPaymentMutation.isPending,
                            onClick: handleApproveDownPaymentAction,
                            children: approveDownPaymentMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 115,
                                        columnNumber: 332
                                    }, this),
                                    t("reservations.actions.approving")
                                ]
                            }, void 0, true) : t("reservations.actions.approveDownPayment")
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 115,
                            columnNumber: 90
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "bg-rose-600 hover:bg-rose-700 text-white font-medium px-5 cursor-pointer",
                            disabled: declineMutation.isPending,
                            onClick: {
                                "Stage3DownPayment[<Button>.onClick]": ()=>declineMutation.mutate({
                                        comments: adminComment,
                                        reservation_status_type: "DOWN_PAYMENT"
                                    })
                            }["Stage3DownPayment[<Button>.onClick]"],
                            children: declineMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 mr-2 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 120,
                                        columnNumber: 82
                                    }, this),
                                    t("reservations.actions.declining")
                                ]
                            }, void 0, true) : t("reservations.actions.decline")
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 115,
                            columnNumber: 478
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                    lineNumber: 115,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
            lineNumber: 111,
            columnNumber: 37
        }, this);
        $[14] = adminComment;
        $[15] = approveDownPaymentMutation;
        $[16] = declineMutation;
        $[17] = handleApproveDownPaymentAction;
        $[18] = isAr;
        $[19] = isDownPaymentPending;
        $[20] = setAdminComment;
        $[21] = setIsReuploadingDownPayment;
        $[22] = shouldShowApproveReject;
        $[23] = t;
        $[24] = t2;
    } else {
        t2 = $[24];
    }
    let t3;
    if ($[25] !== t1 || $[26] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 space-y-4",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[25] = t1;
        $[26] = t2;
        $[27] = t3;
    } else {
        t3 = $[27];
    }
    return t3;
}
_c = Stage3DownPayment;
var _c;
__turbopack_context__.k.register(_c, "Stage3DownPayment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage4SPA",
    ()=>Stage4SPA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
;
;
;
;
function Stage4SPA(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "47c177d727fd02a327e5a202fbf6d82ab0359447a477056e1865545c01a83e66") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "47c177d727fd02a327e5a202fbf6d82ab0359447a477056e1865545c01a83e66";
    }
    const { spaFile, setSpaFile, handleSpaUpload, uploadSPAMutation, t } = t0;
    let t1;
    if ($[1] !== setSpaFile) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            id: "spaUpload",
            className: "hidden",
            accept: "image/*,.pdf,.doc,.docx",
            onChange: {
                "Stage4SPA[<input>.onChange]": (e)=>{
                    const file = e.target.files?.[0];
                    if (file) {
                        setSpaFile(file);
                    }
                }
            }["Stage4SPA[<input>.onChange]"]
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = setSpaFile;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== spaFile || $[4] !== t) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "spaUpload",
            className: "flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition-colors",
            children: spaFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                        className: "h-5 w-5 text-teal-600"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                        lineNumber: 44,
                        columnNumber: 227
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-teal-600",
                        children: spaFile.name
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                        lineNumber: 44,
                        columnNumber: 269
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        className: "h-5 w-5 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                        lineNumber: 44,
                        columnNumber: 350
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-gray-500",
                        children: t("reservations.uploadOfferDialog.clickToSelect")
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                        lineNumber: 44,
                        columnNumber: 394
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[3] = spaFile;
        $[4] = t;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== handleSpaUpload || $[7] !== spaFile || $[8] !== t || $[9] !== uploadSPAMutation) {
        t3 = spaFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "w-full mt-2 bg-teal-600 hover:bg-teal-700 text-white",
            onClick: handleSpaUpload,
            disabled: uploadSPAMutation.isPending,
            children: uploadSPAMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-4 w-4 mr-2 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                        lineNumber: 53,
                        columnNumber: 192
                    }, this),
                    t("reservations.actions.uploading")
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        className: "h-4 w-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                        lineNumber: 53,
                        columnNumber: 286
                    }, this),
                    t("reservations.actions.uploadSPA")
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
            lineNumber: 53,
            columnNumber: 21
        }, this);
        $[6] = handleSpaUpload;
        $[7] = spaFile;
        $[8] = t;
        $[9] = uploadSPAMutation;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== t1 || $[12] !== t2 || $[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[11] = t1;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    return t4;
}
_c = Stage4SPA;
var _c;
__turbopack_context__.k.register(_c, "Stage4SPA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StageDocumentsList",
    ()=>StageDocumentsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
;
;
;
;
function StageDocumentsList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "a4322eaa2f46135d20eca4a1df709fe7f3a124d1c86e04ddc277964d39106529") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a4322eaa2f46135d20eca4a1df709fe7f3a124d1c86e04ddc277964d39106529";
    }
    const { documents, handleDownload, t, isAr } = t0;
    if (!documents || documents.length === 0) {
        return null;
    }
    let t1;
    if ($[1] !== documents || $[2] !== handleDownload || $[3] !== isAr || $[4] !== t) {
        let t2;
        if ($[6] !== handleDownload || $[7] !== isAr || $[8] !== t) {
            t2 = ({
                "StageDocumentsList[documents.map()]": (doc, idx)=>{
                    const isImage = Boolean(doc.url && (doc.url.match(/\.(jpeg|jpg|png|webp|gif|svg)($|\?)/i) || doc.url.includes("image") || doc.url.startsWith("blob:") || doc.name?.match(/\.(jpeg|jpg|png|webp|gif)$/i)));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 min-w-0",
                                children: [
                                    isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-lg overflow-hidden border border-teal-200 shrink-0 bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity",
                                        onClick: {
                                            "StageDocumentsList[documents.map() > <div>.onClick]": ()=>window.open(doc.url, "_blank")
                                        }["StageDocumentsList[documents.map() > <div>.onClick]"],
                                        title: isAr ? "\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631\u0629" : "View image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: doc.url,
                                            alt: doc.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                            lineNumber: 37,
                                            columnNumber: 161
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                        lineNumber: 35,
                                        columnNumber: 188
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-5 w-5 text-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                            lineNumber: 37,
                                            columnNumber: 337
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                        lineNumber: 37,
                                        columnNumber: 245
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-900 block truncate",
                                                children: doc.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                                lineNumber: 37,
                                                columnNumber: 415
                                            }, this),
                                            isImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: {
                                                    "StageDocumentsList[documents.map() > <button>.onClick]": ()=>window.open(doc.url, "_blank")
                                                }["StageDocumentsList[documents.map() > <button>.onClick]"],
                                                className: "text-[11px] text-teal-600 hover:text-teal-700 hover:underline font-medium cursor-pointer",
                                                children: isAr ? "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0635\u0648\u0631\u0629" : "View Image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                                lineNumber: 37,
                                                columnNumber: 511
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                        lineNumber: 37,
                                        columnNumber: 390
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                lineNumber: 35,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "gap-2 text-teal-700 hover:text-teal-800 hover:bg-teal-50 shrink-0 cursor-pointer",
                                onClick: {
                                    "StageDocumentsList[documents.map() > <Button>.onClick]": ()=>handleDownload(doc.url, doc.name)
                                }["StageDocumentsList[documents.map() > <Button>.onClick]"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                        lineNumber: 41,
                                        columnNumber: 74
                                    }, this),
                                    t("reservations.actions.download")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                lineNumber: 39,
                                columnNumber: 300
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                        lineNumber: 35,
                        columnNumber: 18
                    }, this);
                }
            })["StageDocumentsList[documents.map()]"];
            $[6] = handleDownload;
            $[7] = isAr;
            $[8] = t;
            $[9] = t2;
        } else {
            t2 = $[9];
        }
        t1 = documents.map(t2);
        $[1] = documents;
        $[2] = handleDownload;
        $[3] = isAr;
        $[4] = t;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[10] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    return t2;
}
_c = StageDocumentsList;
var _c;
__turbopack_context__.k.register(_c, "StageDocumentsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StageCommentsList",
    ()=>StageCommentsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function StageCommentsList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "01c18195734d2ddcfd83d12c5af799e9ab0e2c990e157c9b7926c4e4ba73bcf9") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "01c18195734d2ddcfd83d12c5af799e9ab0e2c990e157c9b7926c4e4ba73bcf9";
    }
    const { comments, t } = t0;
    if (!comments || comments.length === 0) {
        return null;
    }
    let t1;
    if ($[1] !== t) {
        t1 = t("reservations.details.commentsHistory");
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xs font-semibold text-gray-700",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== comments) {
        t3 = comments.map(_StageCommentsListCommentsMap);
        $[5] = comments;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 pt-2 border-t border-gray-100",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_c = StageCommentsList;
function _StageCommentsListCommentsMap(comment, cIdx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-gray-500 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-gray-700",
                        children: comment.author
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                        lineNumber: 58,
                        columnNumber: 165
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: comment.date ? new Date(comment.date).toLocaleDateString() : ""
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                        lineNumber: 58,
                        columnNumber: 232
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                lineNumber: 58,
                columnNumber: 95
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-800",
                children: comment.text
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                lineNumber: 58,
                columnNumber: 316
            }, this)
        ]
    }, cIdx, true, {
        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
        lineNumber: 58,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "StageCommentsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingStagesTimeline",
    ()=>BookingStagesTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage1Approval$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage2SalesOffer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage3DownPayment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage4SPA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$StageDocumentsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$StageCommentsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx [app-client] (ecmascript)");
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
function BookingStagesTimeline(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(138);
    if ($[0] !== "ece9fd71222bd1a54d8400f569591391be2b95f02a3146999bdc4cdd66d7f4db") {
        for(let $i = 0; $i < 138; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ece9fd71222bd1a54d8400f569591391be2b95f02a3146999bdc4cdd66d7f4db";
    }
    const { stages, getStatusBadge, handleDownload, salesOfferFile, setSalesOfferFile, spaFile, setSpaFile, adminComment, setAdminComment, uploadSalesOfferMutation, uploadSPAMutation, approveMutation, declineMutation, approveDownPaymentMutation, handleSalesOfferUpload, handleSpaUpload, reservationId, uploadDownPaymentMutation } = t0;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [isReuploadingSalesOffer, setIsReuploadingSalesOffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [salesOfferImagePreview, setSalesOfferImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downPaymentFile, setDownPaymentFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downPaymentPreview, setDownPaymentPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downPaymentComment, setDownPaymentComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isReuploadingDownPayment, setIsReuploadingDownPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== salesOfferFile) {
        t1 = ({
            "BookingStagesTimeline[useEffect()]": ()=>{
                if (salesOfferFile && salesOfferFile.type.startsWith("image/")) {
                    const url = URL.createObjectURL(salesOfferFile);
                    setSalesOfferImagePreview(url);
                    return ()=>URL.revokeObjectURL(url);
                } else {
                    setSalesOfferImagePreview(null);
                }
            }
        })["BookingStagesTimeline[useEffect()]"];
        t2 = [
            salesOfferFile
        ];
        $[1] = salesOfferFile;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== downPaymentFile) {
        t3 = ({
            "BookingStagesTimeline[useEffect()]": ()=>{
                if (downPaymentFile && downPaymentFile.type.startsWith("image/")) {
                    const url_0 = URL.createObjectURL(downPaymentFile);
                    setDownPaymentPreview(url_0);
                    return ()=>URL.revokeObjectURL(url_0);
                } else {
                    setDownPaymentPreview(null);
                }
            }
        })["BookingStagesTimeline[useEffect()]"];
        t4 = [
            downPaymentFile
        ];
        $[4] = downPaymentFile;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] !== stages) {
        t5 = stages.find(_BookingStagesTimelineStagesFind);
        $[7] = stages;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const stage1FromServer = t5;
    let t6;
    if ($[9] !== stages) {
        t6 = stages.find(_BookingStagesTimelineStagesFind2);
        $[9] = stages;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const stage2FromServer = t6;
    let t7;
    if ($[11] !== stages) {
        t7 = stages.find(_BookingStagesTimelineStagesFind3);
        $[11] = stages;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const stage3FromServer = t7;
    const targetResId = reservationId || stages?.[0]?.reservationId || stages?.reservationId;
    let t8;
    if ($[13] !== targetResId) {
        t8 = targetResId ? String(targetResId).replace(/\D/g, "") : "";
        $[13] = targetResId;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const cleanTargetId = t8;
    const isSavedInStorage = _BookingStagesTimelineIsSavedInStorage;
    const isSalesOfferAcceptedInStorage = _BookingStagesTimelineIsSalesOfferAcceptedInStorage;
    const isDownPaymentApprovedInStorage = _BookingStagesTimelineIsDownPaymentApprovedInStorage;
    const isStage1SavedInStorage = isSavedInStorage(targetResId) || reservationId && isSavedInStorage(reservationId);
    let t9;
    if ($[15] !== stage1FromServer?.currentStatusType || $[16] !== stages) {
        t9 = stages.some(_BookingStagesTimelineStagesSome) || stage1FromServer?.currentStatusType === "sales_offer" || stage1FromServer?.currentStatusType === "down_payment" || stage1FromServer?.currentStatusType === "sales_purchase";
        $[15] = stage1FromServer?.currentStatusType;
        $[16] = stages;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const isLaterStageActiveOrDone = t9;
    const stage1InitiallyApproved = Boolean(isStage1SavedInStorage) || Boolean(isLaterStageActiveOrDone) || stage1FromServer?.status === "Complete" || stage1FromServer?.currentStatus === "confirmed" || stage1FromServer?.currentStatus === "approved" || stage1FromServer?.currentStatus === "completed" || stage1FromServer?.currentStatusType !== "identification" && stage1FromServer?.currentStatusType !== "identification_confirmation";
    const [isStage1Approved, setIsStage1Approved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(stage1InitiallyApproved));
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {};
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    const [collapsedStages, setCollapsedStages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t10);
    let t11;
    if ($[19] !== isStage1Approved || $[20] !== stage1InitiallyApproved || $[21] !== targetResId) {
        t11 = ({
            "BookingStagesTimeline[useEffect()]": ()=>{
                if (stage1InitiallyApproved && !isStage1Approved) {
                    setIsStage1Approved(true);
                }
                if (isSavedInStorage(targetResId) && !isStage1Approved) {
                    setIsStage1Approved(true);
                }
            }
        })["BookingStagesTimeline[useEffect()]"];
        $[19] = isStage1Approved;
        $[20] = stage1InitiallyApproved;
        $[21] = targetResId;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== stage1InitiallyApproved || $[24] !== targetResId) {
        t12 = [
            stage1InitiallyApproved,
            targetResId
        ];
        $[23] = stage1InitiallyApproved;
        $[24] = targetResId;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t11, t12);
    let t13;
    if ($[26] !== collapsedStages) {
        t13 = ({
            "BookingStagesTimeline[isCollapsed]": (stageId, isComplete, isPending)=>{
                if (collapsedStages[stageId] !== undefined) {
                    return collapsedStages[stageId];
                }
                if (isComplete) {
                    return true;
                }
                if (isPending) {
                    return false;
                }
                return false;
            }
        })["BookingStagesTimeline[isCollapsed]"];
        $[26] = collapsedStages;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    const isCollapsed = t13;
    let t14;
    if ($[28] !== isCollapsed) {
        t14 = ({
            "BookingStagesTimeline[toggleStage]": (stageId_0, isComplete_0, isPending_0)=>{
                setCollapsedStages({
                    "BookingStagesTimeline[toggleStage > setCollapsedStages()]": (prev)=>({
                            ...prev,
                            [stageId_0]: !isCollapsed(stageId_0, isComplete_0, isPending_0)
                        })
                }["BookingStagesTimeline[toggleStage > setCollapsedStages()]"]);
            }
        })["BookingStagesTimeline[toggleStage]"];
        $[28] = isCollapsed;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    const toggleStage = t14;
    let t15;
    if ($[30] !== adminComment || $[31] !== approveMutation || $[32] !== cleanTargetId || $[33] !== setAdminComment || $[34] !== targetResId) {
        t15 = ({
            "BookingStagesTimeline[handleApprove]": ()=>{
                approveMutation.mutate({
                    comments: adminComment,
                    reservation_status_type: "IDENTIFICATION",
                    reservationId: targetResId
                }, {
                    onSuccess: ()=>{
                        setIsStage1Approved(true);
                        if (("TURBOPACK compile-time value", "object") !== "undefined" && targetResId) {
                            localStorage.setItem(`approved_stage1_${targetResId}`, "true");
                            if (cleanTargetId) {
                                localStorage.setItem(`approved_stage1_${cleanTargetId}`, "true");
                            }
                            localStorage.setItem(`reservation_${targetResId}_stage1_approved`, "true");
                            if (cleanTargetId) {
                                localStorage.setItem(`reservation_${cleanTargetId}_stage1_approved`, "true");
                            }
                        }
                        setAdminComment("");
                        setCollapsedStages(_BookingStagesTimelineHandleApproveAnonymousSetCollapsedStages);
                        setTimeout(_BookingStagesTimelineHandleApproveAnonymousSetTimeout, 200);
                    },
                    onError: (err)=>{
                        const errMsg = err?.response?.data?.message || err?.message || "";
                        if (errMsg.toLowerCase().includes("already approved")) {
                            setIsStage1Approved(true);
                            if (("TURBOPACK compile-time value", "object") !== "undefined" && targetResId) {
                                localStorage.setItem(`approved_stage1_${targetResId}`, "true");
                                if (cleanTargetId) {
                                    localStorage.setItem(`approved_stage1_${cleanTargetId}`, "true");
                                }
                            }
                            setAdminComment("");
                        }
                    }
                });
            }
        })["BookingStagesTimeline[handleApprove]"];
        $[30] = adminComment;
        $[31] = approveMutation;
        $[32] = cleanTargetId;
        $[33] = setAdminComment;
        $[34] = targetResId;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    const handleApprove = t15;
    let t16;
    if ($[36] !== downPaymentComment || $[37] !== downPaymentFile || $[38] !== targetResId || $[39] !== uploadDownPaymentMutation) {
        t16 = ({
            "BookingStagesTimeline[handleDownPaymentUpload]": ()=>{
                if (!downPaymentFile) {
                    return;
                }
                if (uploadDownPaymentMutation) {
                    uploadDownPaymentMutation.mutate({
                        file: downPaymentFile,
                        comments: downPaymentComment,
                        reservationId: targetResId
                    }, {
                        onSuccess: ()=>{
                            setDownPaymentFile(null);
                            setDownPaymentComment("");
                            setIsReuploadingDownPayment(false);
                        }
                    });
                } else {
                    setDownPaymentFile(null);
                    setIsReuploadingDownPayment(false);
                }
            }
        })["BookingStagesTimeline[handleDownPaymentUpload]"];
        $[36] = downPaymentComment;
        $[37] = downPaymentFile;
        $[38] = targetResId;
        $[39] = uploadDownPaymentMutation;
        $[40] = t16;
    } else {
        t16 = $[40];
    }
    const handleDownPaymentUpload = t16;
    let t17;
    if ($[41] !== adminComment || $[42] !== approveDownPaymentMutation || $[43] !== cleanTargetId || $[44] !== downPaymentComment || $[45] !== targetResId) {
        t17 = ({
            "BookingStagesTimeline[handleApproveDownPaymentAction]": ()=>{
                approveDownPaymentMutation.mutate({
                    comments: adminComment || downPaymentComment,
                    reservation_status_type: "DOWN_PAYMENT",
                    reservationId: targetResId
                }, {
                    onSuccess: ()=>{
                        if (("TURBOPACK compile-time value", "object") !== "undefined" && targetResId) {
                            localStorage.setItem(`approved_down_payment_${targetResId}`, "true");
                            if (cleanTargetId) {
                                localStorage.setItem(`approved_down_payment_${cleanTargetId}`, "true");
                            }
                        }
                        setCollapsedStages(_BookingStagesTimelineHandleApproveDownPaymentActionAnonymousSetCollapsedStages);
                        setTimeout(_BookingStagesTimelineHandleApproveDownPaymentActionAnonymousSetTimeout, 200);
                    }
                });
            }
        })["BookingStagesTimeline[handleApproveDownPaymentAction]"];
        $[41] = adminComment;
        $[42] = approveDownPaymentMutation;
        $[43] = cleanTargetId;
        $[44] = downPaymentComment;
        $[45] = targetResId;
        $[46] = t17;
    } else {
        t17 = $[46];
    }
    const handleApproveDownPaymentAction = t17;
    const s1 = stage1FromServer;
    const s2 = stage2FromServer;
    const s3 = stage3FromServer;
    let t18;
    if ($[47] !== isStage1Approved || $[48] !== isStage1SavedInStorage || $[49] !== s1 || $[50] !== stage1InitiallyApproved || $[51] !== stages) {
        t18 = s1 && (s1.status === "Complete" || isStage1Approved || stage1InitiallyApproved || isStage1SavedInStorage || s1.currentStatus === "confirmed" || s1.currentStatus === "approved" || s1.currentStatusType !== "identification" && s1.currentStatusType !== "identification_confirmation" || stages.some(_BookingStagesTimelineStagesSome2));
        $[47] = isStage1Approved;
        $[48] = isStage1SavedInStorage;
        $[49] = s1;
        $[50] = stage1InitiallyApproved;
        $[51] = stages;
        $[52] = t18;
    } else {
        t18 = $[52];
    }
    const globalStage1Complete = Boolean(t18);
    let t19;
    if ($[53] !== globalStage1Complete || $[54] !== reservationId || $[55] !== s2 || $[56] !== stages || $[57] !== targetResId) {
        t19 = globalStage1Complete && s2 && (s2.status === "Complete" || isSalesOfferAcceptedInStorage(targetResId) || reservationId && isSalesOfferAcceptedInStorage(reservationId) || (s2.currentStatusType === "sales_offer" || s2.currentStatusType === "sales_offer_approval") && (s2.currentStatus === "confirmed" || s2.currentStatus === "approved" || s2.currentStatus === "completed") || s2.currentStatusType === "down_payment" || s2.currentStatusType === "down_payment_pending" || s2.currentStatusType === "sales_purchase" || s2.currentStatusType === "sales_purchase_agreement" || stages.some(_BookingStagesTimelineStagesSome3));
        $[53] = globalStage1Complete;
        $[54] = reservationId;
        $[55] = s2;
        $[56] = stages;
        $[57] = targetResId;
        $[58] = t19;
    } else {
        t19 = $[58];
    }
    const globalStage2Complete = Boolean(t19);
    let t20;
    if ($[59] !== globalStage2Complete || $[60] !== reservationId || $[61] !== s3 || $[62] !== stages || $[63] !== targetResId) {
        t20 = globalStage2Complete && s3 && (s3.status === "Complete" || isDownPaymentApprovedInStorage(targetResId) || reservationId && isDownPaymentApprovedInStorage(reservationId) || (s3.currentStatusType === "down_payment" || s3.currentStatusType === "down_payment_pending") && (s3.currentStatus === "confirmed" || s3.currentStatus === "approved" || s3.currentStatus === "completed") || s3.currentStatusType === "sales_purchase" || s3.currentStatusType === "sales_purchase_agreement" || stages.some(_BookingStagesTimelineStagesSome4));
        $[59] = globalStage2Complete;
        $[60] = reservationId;
        $[61] = s3;
        $[62] = stages;
        $[63] = targetResId;
        $[64] = t20;
    } else {
        t20 = $[64];
    }
    const globalStage3Complete = Boolean(t20);
    const isCancelledGlobally = Boolean(s1 && (s1.currentStatus === "cancelled" || s1.currentStatus === "rejected"));
    let t21;
    if ($[65] !== adminComment || $[66] !== approveDownPaymentMutation || $[67] !== approveMutation || $[68] !== declineMutation || $[69] !== downPaymentComment || $[70] !== downPaymentFile || $[71] !== downPaymentPreview || $[72] !== getStatusBadge || $[73] !== globalStage1Complete || $[74] !== globalStage2Complete || $[75] !== globalStage3Complete || $[76] !== handleApprove || $[77] !== handleApproveDownPaymentAction || $[78] !== handleDownPaymentUpload || $[79] !== handleDownload || $[80] !== handleSalesOfferUpload || $[81] !== handleSpaUpload || $[82] !== isAr || $[83] !== isCancelledGlobally || $[84] !== isCollapsed || $[85] !== isReuploadingDownPayment || $[86] !== isReuploadingSalesOffer || $[87] !== isStage1Approved || $[88] !== salesOfferFile || $[89] !== salesOfferImagePreview || $[90] !== setAdminComment || $[91] !== setSalesOfferFile || $[92] !== setSpaFile || $[93] !== spaFile || $[94] !== stages || $[95] !== t || $[96] !== toggleStage || $[97] !== uploadDownPaymentMutation || $[98] !== uploadSPAMutation || $[99] !== uploadSalesOfferMutation) {
        let t22;
        if ($[101] !== adminComment || $[102] !== approveDownPaymentMutation || $[103] !== approveMutation || $[104] !== declineMutation || $[105] !== downPaymentComment || $[106] !== downPaymentFile || $[107] !== downPaymentPreview || $[108] !== getStatusBadge || $[109] !== globalStage1Complete || $[110] !== globalStage2Complete || $[111] !== globalStage3Complete || $[112] !== handleApprove || $[113] !== handleApproveDownPaymentAction || $[114] !== handleDownPaymentUpload || $[115] !== handleDownload || $[116] !== handleSalesOfferUpload || $[117] !== handleSpaUpload || $[118] !== isAr || $[119] !== isCancelledGlobally || $[120] !== isCollapsed || $[121] !== isReuploadingDownPayment || $[122] !== isReuploadingSalesOffer || $[123] !== isStage1Approved || $[124] !== salesOfferFile || $[125] !== salesOfferImagePreview || $[126] !== setAdminComment || $[127] !== setSalesOfferFile || $[128] !== setSpaFile || $[129] !== spaFile || $[130] !== t || $[131] !== toggleStage || $[132] !== uploadDownPaymentMutation || $[133] !== uploadSPAMutation || $[134] !== uploadSalesOfferMutation) {
            t22 = ({
                "BookingStagesTimeline[stages.map()]": (stage)=>{
                    const isStage1Complete = stage.id === 1 ? globalStage1Complete : false;
                    stage.id === 2 ? globalStage2Complete : false;
                    stage.id === 3 ? globalStage3Complete : false;
                    const isComplete_1 = stage.id === 1 ? globalStage1Complete : stage.id === 2 ? globalStage2Complete : stage.id === 3 ? globalStage3Complete : stage.status === "Complete";
                    let isPending_1 = stage.id === 1 ? !globalStage1Complete && stage.status === "Pending" : stage.id === 2 ? !globalStage2Complete && globalStage1Complete : stage.id === 3 ? !globalStage3Complete && globalStage2Complete : globalStage3Complete && stage.status !== "Complete";
                    if (isCancelledGlobally) {
                        isPending_1 = false;
                    }
                    const isRejected = stage.status === "Rejected" || isCancelledGlobally && !isComplete_1;
                    const collapsed = isCollapsed(stage.id, isComplete_1, isPending_1);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: `stage-${stage.id}`,
                        className: `bg-white rounded-lg border overflow-hidden transition-all duration-200 ${isPending_1 ? "border-teal-400 ring-2 ring-teal-500/20 shadow-xs" : isComplete_1 ? "border-emerald-200" : isRejected ? "border-rose-200" : "border-gray-200 opacity-90"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: {
                                    "BookingStagesTimeline[stages.map() > <div>.onClick]": ()=>toggleStage(stage.id, isComplete_1, isPending_1)
                                }["BookingStagesTimeline[stages.map() > <div>.onClick]"],
                                className: `border-b p-4 flex items-center justify-between transition-colors cursor-pointer select-none ${isPending_1 ? "bg-teal-50/70 border-teal-200" : isComplete_1 ? "bg-emerald-50/50 border-emerald-100" : isRejected ? "bg-rose-50/50 border-rose-100" : "bg-gray-50/50 border-gray-200"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${isComplete_1 ? "bg-emerald-600 text-white shadow-xs" : isPending_1 ? "bg-teal-600 text-white ring-4 ring-teal-100" : isRejected ? "bg-rose-600 text-white" : "bg-gray-200 text-gray-500"}`,
                                                children: isComplete_1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-4 w-4 stroke-[3]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 720
                                                }, this) : stage.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 403
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-semibold text-gray-900",
                                                        children: [
                                                            t("reservations.details.stage"),
                                                            " ",
                                                            stage.id,
                                                            ": ",
                                                            stage.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 783
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-0.5",
                                                        children: stage.subtitle || stage.step
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 900
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 778
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                        lineNumber: 425,
                                        columnNumber: 362
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            getStatusBadge(isComplete_1 ? "Complete" : isPending_1 ? "Pending" : stage.status),
                                            collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-4 w-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 1128
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                className: "h-4 w-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 1180
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                        lineNumber: 425,
                                        columnNumber: 990
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                lineNumber: 423,
                                columnNumber: 319
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 space-y-4",
                                children: [
                                    stage.id === 1 && isComplete_1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-4 w-4 text-emerald-600 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 1454
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("reservations.stages.stage1Closed")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 1509
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                        lineNumber: 425,
                                        columnNumber: 1321
                                    }, this),
                                    stage.id === 2 && isComplete_1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-4 w-4 text-emerald-600 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 1736
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("reservations.stages.stage2Closed")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 1791
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                        lineNumber: 425,
                                        columnNumber: 1603
                                    }, this),
                                    stage.id === 3 && isComplete_1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-4 w-4 text-emerald-600 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 2018
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("reservations.stages.stage3Closed")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 2073
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                        lineNumber: 425,
                                        columnNumber: 1885
                                    }, this),
                                    stage.documents && stage.documents.length > 0 || (stage.id === 2 || stage.id === 3 || stage.id === 4) && isPending_1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-gray-900 mb-3",
                                                children: stage.documents && stage.documents.length > 0 ? `${t("reservations.details.documents")} (${stage.documents.length})` : isPending_1 ? t("reservations.details.requiredAction") : t("reservations.details.documents")
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 2257
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$StageDocumentsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StageDocumentsList"], {
                                                        documents: stage.documents,
                                                        handleDownload: handleDownload,
                                                        t: t,
                                                        isAr: isAr
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 2559
                                                    }, this),
                                                    stage.id === 2 && isPending_1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage2SalesOffer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage2SalesOffer"], {
                                                        stage: stage,
                                                        salesOfferFile: salesOfferFile,
                                                        setSalesOfferFile: setSalesOfferFile,
                                                        isReuploadingSalesOffer: isReuploadingSalesOffer,
                                                        setIsReuploadingSalesOffer: setIsReuploadingSalesOffer,
                                                        salesOfferImagePreview: salesOfferImagePreview,
                                                        adminComment: adminComment,
                                                        setAdminComment: setAdminComment,
                                                        handleSalesOfferUpload: handleSalesOfferUpload,
                                                        uploadSalesOfferMutation: uploadSalesOfferMutation,
                                                        t: t,
                                                        isAr: isAr
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 2693
                                                    }, this),
                                                    stage.id === 3 && isPending_1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage3DownPayment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage3DownPayment"], {
                                                        stage: stage,
                                                        downPaymentFile: downPaymentFile,
                                                        setDownPaymentFile: setDownPaymentFile,
                                                        isReuploadingDownPayment: isReuploadingDownPayment,
                                                        setIsReuploadingDownPayment: setIsReuploadingDownPayment,
                                                        downPaymentPreview: downPaymentPreview,
                                                        downPaymentComment: downPaymentComment,
                                                        setDownPaymentComment: setDownPaymentComment,
                                                        adminComment: adminComment,
                                                        setAdminComment: setAdminComment,
                                                        handleDownPaymentUpload: handleDownPaymentUpload,
                                                        uploadDownPaymentMutation: uploadDownPaymentMutation,
                                                        handleApproveDownPaymentAction: handleApproveDownPaymentAction,
                                                        approveDownPaymentMutation: approveDownPaymentMutation,
                                                        declineMutation: declineMutation,
                                                        handleDownload: handleDownload,
                                                        t: t,
                                                        isAr: isAr
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 3166
                                                    }, this),
                                                    stage.id === 4 && isPending_1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage4SPA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage4SPA"], {
                                                        spaFile: spaFile,
                                                        setSpaFile: setSpaFile,
                                                        handleSpaUpload: handleSpaUpload,
                                                        uploadSPAMutation: uploadSPAMutation,
                                                        t: t
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 3916
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 425,
                                                columnNumber: 2532
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                        lineNumber: 425,
                                        columnNumber: 2252
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$StageCommentsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StageCommentsList"], {
                                        comments: stage.comments,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                        lineNumber: 425,
                                        columnNumber: 4070
                                    }, this),
                                    stage.id === 1 && !isStage1Complete && !isStage1Approved && stage.currentStatus === "in_process" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage1Approval$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage1Approval"], {
                                        adminComment: adminComment,
                                        setAdminComment: setAdminComment,
                                        approveMutation: approveMutation,
                                        declineMutation: declineMutation,
                                        handleApprove: handleApprove,
                                        t: t
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                        lineNumber: 425,
                                        columnNumber: 4224
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                lineNumber: 425,
                                columnNumber: 1255
                            }, this)
                        ]
                    }, stage.id, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                        lineNumber: 423,
                        columnNumber: 18
                    }, this);
                }
            })["BookingStagesTimeline[stages.map()]"];
            $[101] = adminComment;
            $[102] = approveDownPaymentMutation;
            $[103] = approveMutation;
            $[104] = declineMutation;
            $[105] = downPaymentComment;
            $[106] = downPaymentFile;
            $[107] = downPaymentPreview;
            $[108] = getStatusBadge;
            $[109] = globalStage1Complete;
            $[110] = globalStage2Complete;
            $[111] = globalStage3Complete;
            $[112] = handleApprove;
            $[113] = handleApproveDownPaymentAction;
            $[114] = handleDownPaymentUpload;
            $[115] = handleDownload;
            $[116] = handleSalesOfferUpload;
            $[117] = handleSpaUpload;
            $[118] = isAr;
            $[119] = isCancelledGlobally;
            $[120] = isCollapsed;
            $[121] = isReuploadingDownPayment;
            $[122] = isReuploadingSalesOffer;
            $[123] = isStage1Approved;
            $[124] = salesOfferFile;
            $[125] = salesOfferImagePreview;
            $[126] = setAdminComment;
            $[127] = setSalesOfferFile;
            $[128] = setSpaFile;
            $[129] = spaFile;
            $[130] = t;
            $[131] = toggleStage;
            $[132] = uploadDownPaymentMutation;
            $[133] = uploadSPAMutation;
            $[134] = uploadSalesOfferMutation;
            $[135] = t22;
        } else {
            t22 = $[135];
        }
        t21 = stages.map(t22);
        $[65] = adminComment;
        $[66] = approveDownPaymentMutation;
        $[67] = approveMutation;
        $[68] = declineMutation;
        $[69] = downPaymentComment;
        $[70] = downPaymentFile;
        $[71] = downPaymentPreview;
        $[72] = getStatusBadge;
        $[73] = globalStage1Complete;
        $[74] = globalStage2Complete;
        $[75] = globalStage3Complete;
        $[76] = handleApprove;
        $[77] = handleApproveDownPaymentAction;
        $[78] = handleDownPaymentUpload;
        $[79] = handleDownload;
        $[80] = handleSalesOfferUpload;
        $[81] = handleSpaUpload;
        $[82] = isAr;
        $[83] = isCancelledGlobally;
        $[84] = isCollapsed;
        $[85] = isReuploadingDownPayment;
        $[86] = isReuploadingSalesOffer;
        $[87] = isStage1Approved;
        $[88] = salesOfferFile;
        $[89] = salesOfferImagePreview;
        $[90] = setAdminComment;
        $[91] = setSalesOfferFile;
        $[92] = setSpaFile;
        $[93] = spaFile;
        $[94] = stages;
        $[95] = t;
        $[96] = toggleStage;
        $[97] = uploadDownPaymentMutation;
        $[98] = uploadSPAMutation;
        $[99] = uploadSalesOfferMutation;
        $[100] = t21;
    } else {
        t21 = $[100];
    }
    const t22 = t21;
    let t23;
    if ($[136] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-4",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
            lineNumber: 509,
            columnNumber: 11
        }, this);
        $[136] = t22;
        $[137] = t23;
    } else {
        t23 = $[137];
    }
    return t23;
}
_s(BookingStagesTimeline, "HVTGaTYCGDf1iKe4cYgUHVL00Lo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = BookingStagesTimeline;
function _BookingStagesTimelineStagesSome4(sx_1) {
    return sx_1.id > 3 && (sx_1.status === "Complete" || sx_1.documents && sx_1.documents.length > 0);
}
function _BookingStagesTimelineStagesSome3(sx_0) {
    return sx_0.id > 2 && (sx_0.status === "Complete" || sx_0.documents && sx_0.documents.length > 0);
}
function _BookingStagesTimelineStagesSome2(sx) {
    return sx.id > 1 && (sx.status === "Complete" || sx.documents && sx.documents.length > 0);
}
function _BookingStagesTimelineHandleApproveDownPaymentActionAnonymousSetTimeout() {
    const stage4El = document.getElementById("stage-4");
    if (stage4El) {
        stage4El.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}
function _BookingStagesTimelineHandleApproveDownPaymentActionAnonymousSetCollapsedStages(prev_3) {
    return {
        ...prev_3,
        3: true,
        4: false
    };
}
function _BookingStagesTimelineHandleApproveAnonymousSetTimeout() {
    const stage2El = document.getElementById("stage-2");
    if (stage2El) {
        stage2El.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}
function _BookingStagesTimelineHandleApproveAnonymousSetCollapsedStages(prev_0) {
    return {
        ...prev_0,
        1: true,
        2: false
    };
}
function _BookingStagesTimelineStagesSome(s_2) {
    return s_2.id > 1 && (s_2.status === "Complete" || s_2.documents && s_2.documents.length > 0);
}
function _BookingStagesTimelineIsDownPaymentApprovedInStorage(id_1) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || !id_1) {
        return false;
    }
    const clean_1 = String(id_1).replace(/\D/g, "");
    return localStorage.getItem(`approved_down_payment_${id_1}`) === "true" || Boolean(clean_1) && localStorage.getItem(`approved_down_payment_${clean_1}`) === "true";
}
function _BookingStagesTimelineIsSalesOfferAcceptedInStorage(id_0) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || !id_0) {
        return false;
    }
    const clean_0 = String(id_0).replace(/\D/g, "");
    return localStorage.getItem(`accepted_sales_offer_${id_0}`) === "true" || Boolean(clean_0) && localStorage.getItem(`accepted_sales_offer_${clean_0}`) === "true";
}
function _BookingStagesTimelineIsSavedInStorage(id) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || !id) {
        return false;
    }
    const clean = String(id).replace(/\D/g, "");
    return localStorage.getItem(`approved_stage1_${id}`) === "true" || Boolean(clean) && localStorage.getItem(`approved_stage1_${clean}`) === "true" || localStorage.getItem(`reservation_${id}_stage1_approved`) === "true" || Boolean(clean) && localStorage.getItem(`reservation_${clean}_stage1_approved`) === "true";
}
function _BookingStagesTimelineStagesFind3(s_1) {
    return s_1.id === 3;
}
function _BookingStagesTimelineStagesFind2(s_0) {
    return s_0.id === 2;
}
function _BookingStagesTimelineStagesFind(s) {
    return s.id === 1;
}
var _c;
__turbopack_context__.k.register(_c, "BookingStagesTimeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingInfoCards",
    ()=>BookingInfoCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BookingInfoCards({ bookingData, formatPrice }) {
    const reservation = bookingData?.reservation || bookingData || {};
    const user = bookingData?.user || {};
    const paymentPlan = bookingData?.payment_plan || bookingData?.paymentPlan || {};
    const property = bookingData?.property || {};
    const project = property?.project || bookingData?.project || {};
    const developer = project?.developer || bookingData?.developer || {};
    const country = project?.country || bookingData?.country || {
        name: "UAE",
        currency: "AED"
    };
    const unitPrice = property.price || property.property_price || "0";
    const currencyStr = country.currency || (country.name === "UAE" ? "AED" : "USD");
    const formatDate = (dateStr)=>{
        if (!dateStr) return "N/A";
        try {
            const d = new Date(dateStr);
            return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString();
        } catch  {
            return dateStr;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg border border-gray-200 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "Client Information"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Client Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: user.user_name || `${user.first_name || ""} ${user.last_name || ""}`.trim() || user.name || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Email Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: user.email || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: user.phone_number || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            user.user_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "User ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: [
                                            "#",
                                            user.user_id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 53,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Created Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: formatDate(reservation.reservation_date)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Expiry Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: formatDate(reservation.expiry_date)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg border border-gray-200 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "Unit Information"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-4 p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: [
                                    new Intl.NumberFormat("en-US", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }).format(Number(unitPrice)),
                                    " ",
                                    currencyStr
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mt-1",
                                children: "Unit Price"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Project"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: project.project_name || property.property_name || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Property / Unit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: property.property_name || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            developer.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: developer.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 98,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Country"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: country.name || "UAE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium capitalize",
                                        children: reservation.reservation_status || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Stage / Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium capitalize",
                                        children: reservation.reservation_status_type || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            reservation.reservation_fee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Reservation Fee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: [
                                            reservation.reservation_fee,
                                            " ",
                                            currencyStr
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 120,
                                columnNumber: 43
                            }, this),
                            reservation.service_fee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Service Fee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: [
                                            reservation.service_fee,
                                            " ",
                                            currencyStr
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 126,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    paymentPlan.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: "Payment Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded",
                                        children: paymentPlan.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            paymentPlan.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600 leading-relaxed bg-gray-50 p-2.5 rounded border border-gray-100",
                                children: paymentPlan.description
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 143,
                                columnNumber: 41
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 134,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            (bookingData?.media?.identification || bookingData?.media?.selfie || bookingData?.media?.sales_offer || bookingData?.media?.down_payment || bookingData?.media?.sales_purchase) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg border border-gray-200 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "Media & Documents"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 text-sm",
                        children: [
                            bookingData.media.identification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Identification"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.identification,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 154,
                                columnNumber: 50
                            }, this),
                            bookingData.media.selfie && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Selfie"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.selfie,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 160,
                                columnNumber: 42
                            }, this),
                            bookingData.media.sales_offer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Sales Offer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.sales_offer,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 166,
                                columnNumber: 47
                            }, this),
                            bookingData.media.down_payment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Down Payment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.down_payment,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 172,
                                columnNumber: 48
                            }, this),
                            bookingData.media.sales_purchase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "SPA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.sales_purchase,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 178,
                                columnNumber: 50
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                lineNumber: 149,
                columnNumber: 187
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_c = BookingInfoCards;
var _c;
__turbopack_context__.k.register(_c, "BookingInfoCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/reservations/[id]/page.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$booking$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-booking-details.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/BookingHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingStatusPills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingStagesTimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingInfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx [app-client] (ecmascript)");
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
function BookingDetailsPage() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    const token = session?.user?.accessToken;
    const cleanId = params?.id ? Number(String(params.id).replace(/\D/g, "")) : 0;
    const reservationId = cleanId || Number(params?.id) || 0;
    const [salesOfferFile, setSalesOfferFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [spaFile, setSpaFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adminComment, setAdminComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("details");
    const { bookingData, isLoading, isError, error, refetch, approveMutation, declineMutation, uploadSalesOfferMutation, uploadSPAMutation, approveDownPaymentMutation, uploadDownPaymentMutation, acceptSalesOfferMutation, formatPrice, stages, getStatusIcon, getStatusBadge } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$booking$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        reservationId
    });
    const handleSalesOfferUpload = ()=>{
        if (!salesOfferFile) return;
        uploadSalesOfferMutation.mutate({
            file: salesOfferFile,
            comments: adminComment
        }, {
            onSuccess: ()=>{
                setSalesOfferFile(null);
                setAdminComment("");
                setTimeout(()=>{
                    const stage3El = document.getElementById("stage-3");
                    if (stage3El) {
                        stage3El.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }, 200);
            }
        });
    };
    const handleSpaUpload = ()=>{
        if (!spaFile) return;
        uploadSPAMutation.mutate({
            file: spaFile,
            comments: adminComment
        }, {
            onSuccess: ()=>{
                setSpaFile(null);
                setAdminComment("");
            }
        });
    };
    const handleDownload = async (url, filename)=>{
        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch file");
            }
            const blob = await response.blob();
            const contentType = blob.type;
            let ext = "";
            if (contentType.includes("image/jpeg") || contentType.includes("image/jpg")) ext = ".jpg";
            else if (contentType.includes("image/png")) ext = ".png";
            else if (contentType.includes("image/gif")) ext = ".gif";
            else if (contentType.includes("application/pdf")) ext = ".pdf";
            else if (contentType.includes("application/msword")) ext = ".doc";
            else if (contentType.includes("application/vnd.openxmlformats-officedocument.wordprocessingml.document")) ext = ".docx";
            const finalFilename = filename + ext;
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = finalFilename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error_0) {
            console.error("Download failed:", error_0);
            window.open(url, "_blank");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingDetailsPage.useEffect": ()=>{
            if (!bookingData) return;
            const reservation = bookingData?.reservation || bookingData?.data?.reservation || bookingData?.data || bookingData;
            if (!reservation) return;
            const statusType = (reservation.reservation_status_type || reservation.status_type || "").toLowerCase().replace(/_/g, " ").trim();
            const status = (reservation.reservation_status || reservation.status || "").toLowerCase().replace(/_/g, " ").trim();
            if (statusType === "identification") {
                if (status === "confirmed" || status === "approved" || status === "complete" || status === "completed") {
                    setActiveTab("upload");
                } else {
                    setActiveTab("details");
                }
            } else if (statusType === "sales offer") {
                if (status === "confirmed" || status === "approved" || status === "complete") {
                    setActiveTab("Bank");
                } else {
                    setActiveTab("upload");
                }
            } else if (statusType === "down payment") {
                if (status === "confirmed" || status === "approved" || status === "complete") {
                    setActiveTab("SPA");
                } else {
                    setActiveTab("Bank");
                }
            } else if (statusType === "sales purchase" || statusType === "spa") {
                setActiveTab("SPA");
            }
        }
    }["BookingDetailsPage.useEffect"], [
        bookingData
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "mx-auto h-12 w-12 animate-spin text-teal-600"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading booking details..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
            lineNumber: 139,
            columnNumber: 12
        }, this);
    }
    if (isError || !bookingData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                        className: "mx-auto h-12 w-12 text-red-600"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 text-xl font-semibold text-gray-900",
                        children: "Error Loading Booking"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.push(`${routePrefix}/reservations`),
                        className: "mt-6 bg-teal-600 hover:bg-teal-700",
                        children: "Back to Bookings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
            lineNumber: 147,
            columnNumber: 12
        }, this);
    }
    const displayReservationId = bookingData?.reservation?.reservation_id || bookingData?.reservation?.id || reservationId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 px-3 space-y-4 max-w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `${routePrefix}/home`,
                        className: "hover:text-teal-600 transition-colors",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `${routePrefix}/reservations`,
                        className: "hover:text-teal-600 transition-colors",
                        children: "Bookings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-900",
                        children: [
                            "Booking #",
                            displayReservationId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingHeader"], {
                reservationId: displayReservationId
            }, void 0, false, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingStatusPills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingStatusPills"], {
                stages: stages,
                getStatusIcon: getStatusIcon,
                getStatusBadge: getStatusBadge,
                reservationId: displayReservationId
            }, void 0, false, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingStagesTimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingStagesTimeline"], {
                        stages: stages,
                        getStatusBadge: getStatusBadge,
                        handleDownload: handleDownload,
                        salesOfferFile: salesOfferFile,
                        setSalesOfferFile: setSalesOfferFile,
                        spaFile: spaFile,
                        setSpaFile: setSpaFile,
                        adminComment: adminComment,
                        setAdminComment: setAdminComment,
                        uploadSalesOfferMutation: uploadSalesOfferMutation,
                        uploadSPAMutation: uploadSPAMutation,
                        approveMutation: approveMutation,
                        declineMutation: declineMutation,
                        approveDownPaymentMutation: approveDownPaymentMutation,
                        uploadDownPaymentMutation: uploadDownPaymentMutation,
                        acceptSalesOfferMutation: acceptSalesOfferMutation,
                        handleSalesOfferUpload: handleSalesOfferUpload,
                        handleSpaUpload: handleSpaUpload,
                        reservationId: displayReservationId
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingInfoCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingInfoCards"], {
                        bookingData: bookingData,
                        formatPrice: formatPrice
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
        lineNumber: 160,
        columnNumber: 10
    }, this);
}
_s(BookingDetailsPage, "TWmvKgxhxgghsUdmKVmi8j+o+1M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$booking$2d$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = BookingDetailsPage;
var _c;
__turbopack_context__.k.register(_c, "BookingDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_13bab2c8._.js.map