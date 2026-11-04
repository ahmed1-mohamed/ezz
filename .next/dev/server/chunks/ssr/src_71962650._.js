module.exports = [
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/hooks/use-booking-details.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useBookingDetails,
    "normalizeBookingDetails",
    ()=>normalizeBookingDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/api-client.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/api/services/dashboard.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: bookingData, isLoading, isError, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "reservation",
            reservationId
        ],
        queryFn: async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardAdminService"].getBookingDetails(reservationId);
            return normalizeBookingDetails(res);
        },
        enabled: !!reservationId,
        retry: false,
        refetchInterval: 5000
    });
    const approveMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (variables)=>{
            const comments = typeof variables === "string" ? variables : variables?.comments || "";
            const targetId = variables?.reservationId || reservationId;
            const resType = (variables?.reservation_status_type || variables?.type || "IDENTIFICATION").toUpperCase();
            const body = {
                reservation_id: targetId,
                status: "confirmed",
                reservation_status_type: resType
            };
            if (comments) body.comments = comments;
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardAdminService"].confirmBooking(targetId, body);
        },
        onSuccess: (_data, variables)=>{
            const targetId = Number(variables?.reservationId) || Number(reservationId);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const updateCache = (old)=>{
                if (!old) return old;
                const res = old.reservation ? {
                    ...old.reservation
                } : {
                    ...old
                };
                res.reservation_status = "confirmed";
                res.status = "confirmed";
                res.reservation_status_type = "identification";
                res.status_type = "identification";
                if (typeof variables === "string" && variables) {
                    res.comments = variables;
                } else if (variables?.comments) {
                    res.comments = variables.comments;
                }
                return {
                    ...old,
                    reservation: res
                };
            };
            queryClient.setQueryData([
                "reservation",
                targetId
            ], updateCache);
            if (reservationId && targetId !== Number(reservationId)) {
                queryClient.setQueryData([
                    "reservation",
                    Number(reservationId)
                ], updateCache);
            }
            queryClient.invalidateQueries({
                queryKey: [
                    "reservation",
                    targetId
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.approveSuccess"));
        },
        onError: (error, variables)=>{
            const errMsg = error?.response?.data?.message || error?.message || "";
            const targetId = Number(variables?.reservationId) || Number(reservationId);
            queryClient.invalidateQueries({
                queryKey: [
                    "reservation",
                    targetId
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
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(t("reservations.messages.alreadyApproved"));
                return;
            }
            console.error("Approve reservation error details:", error?.response?.data || error);
            const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, t("reservations.messages.approveFailed"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    });
    const declineMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (variables)=>{
            const comments = typeof variables === "string" ? variables : variables?.comments || "";
            const targetId = variables?.reservationId || reservationId;
            const resType = (variables?.reservation_status_type || variables?.type || "IDENTIFICATION").toUpperCase();
            const payload = {
                status: "cancelled",
                reservation_status_type: resType
            };
            if (comments) payload.comments = comments;
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardAdminService"].declineBooking(targetId, payload);
        },
        onSuccess: (_data, variables)=>{
            const targetId = Number(variables?.reservationId) || Number(reservationId);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.declineSuccess"));
            router.push("/admin/reservations");
        },
        onError: (error)=>{
            console.error("Decline reservation error details:", error?.response?.data || error);
            const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, t("reservations.messages.declineFailed"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    });
    const uploadSalesOfferMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (variables)=>{
            const file = variables?.file;
            const comments = variables?.comments || "";
            const targetId = variables?.reservationId || reservationId;
            const formData = new FormData();
            formData.append("reservation_id", String(targetId));
            if (file) {
                formData.append("file", file);
                formData.append("sales_offer", file);
            }
            if (comments) formData.append("comments", comments);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardAdminService"].uploadSalesOffer(formData);
        },
        onSuccess: (_data, variables)=>{
            const targetId = variables?.reservationId || reservationId;
            queryClient.setQueryData([
                "reservation",
                targetId
            ], (old)=>{
                if (!old) return old;
                const res = old.reservation ? {
                    ...old.reservation
                } : {
                    ...old
                };
                res.reservation_status_type = "sales_offer";
                res.status_type = "sales_offer";
                res.reservation_status = "in_process";
                res.status = "in_process";
                const media = old.media ? {
                    ...old.media
                } : {};
                if (variables?.file) {
                    media.sales_offer = URL.createObjectURL(variables.file);
                }
                return {
                    ...old,
                    reservation: res,
                    media
                };
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "reservation",
                    targetId
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.salesOfferSuccess"));
        },
        onError: (error)=>{
            console.error("Upload Sales Offer error details:", error?.response?.data || error);
            const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, t("reservations.messages.salesOfferFailed"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    });
    const approveDownPaymentMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (variables)=>{
            const comments = typeof variables === "string" ? variables : variables?.comments || "";
            const targetId = variables?.reservationId || reservationId;
            const resType = (variables?.reservation_status_type || variables?.type || "DOWN_PAYMENT").toUpperCase();
            const body = {
                reservation_id: targetId,
                status: "confirmed",
                reservation_status_type: resType
            };
            if (comments) body.comments = comments;
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardAdminService"].confirmBooking(targetId, body);
        },
        onSuccess: (_data, variables)=>{
            const targetId = variables?.reservationId || reservationId;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            queryClient.setQueryData([
                "reservation",
                targetId
            ], (old)=>{
                if (!old) return old;
                const res = old.reservation ? {
                    ...old.reservation
                } : {
                    ...old
                };
                res.reservation_status = "confirmed";
                res.status = "confirmed";
                return {
                    ...old,
                    reservation: res
                };
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "reservation",
                    targetId
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.approveSuccess"));
        },
        onError: (error)=>{
            console.error("Approve down payment error details:", error?.response?.data || error);
            const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, t("reservations.messages.approveFailed"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    });
    const uploadDownPaymentMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (variables)=>{
            const file = variables?.file;
            const comments = variables?.comments || "";
            const targetId = variables?.reservationId || reservationId;
            const formData = new FormData();
            formData.append("reservation_id", String(targetId));
            if (file) {
                formData.append("file", file);
                formData.append("down_payment", file);
            }
            if (comments) formData.append("comments", comments);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardAdminService"].uploadDownPayment(formData);
        },
        onSuccess: (_data, variables)=>{
            const targetId = variables?.reservationId || reservationId;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            queryClient.setQueryData([
                "reservation",
                targetId
            ], (old)=>{
                if (!old) return old;
                const res = old.reservation ? {
                    ...old.reservation
                } : {
                    ...old
                };
                res.reservation_status_type = "down_payment";
                res.status_type = "down_payment";
                const media = old.media ? {
                    ...old.media
                } : {};
                if (variables?.file) {
                    media.down_payment = URL.createObjectURL(variables.file);
                }
                return {
                    ...old,
                    reservation: res,
                    media
                };
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "reservation",
                    targetId
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.paymentUploaded") || "Payment receipt uploaded successfully");
        },
        onError: (error)=>{
            console.error("Upload down payment error details:", error?.response?.data || error);
            const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, t("reservations.messages.paymentUploadFailed") || "Failed to upload payment receipt");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    });
    const acceptSalesOfferMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (variables)=>{
            const comments = typeof variables === "string" ? variables : variables?.comments || "";
            const targetId = variables?.reservationId || reservationId;
            const body = {
                reservation_id: targetId,
                status: "confirmed",
                reservation_status_type: "SALES_OFFER"
            };
            if (comments) body.comments = comments;
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardAdminService"].confirmBooking(targetId, body);
        },
        onSuccess: (_data, variables)=>{
            const targetId = variables?.reservationId || reservationId;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            queryClient.setQueryData([
                "reservation",
                targetId
            ], (old)=>{
                if (!old) return old;
                const res = old.reservation ? {
                    ...old.reservation
                } : {
                    ...old
                };
                res.reservation_status_type = "sales_offer";
                res.status_type = "sales_offer";
                res.reservation_status = "confirmed";
                res.status = "confirmed";
                return {
                    ...old,
                    reservation: res
                };
            });
            queryClient.invalidateQueries({
                queryKey: [
                    "reservation",
                    targetId
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.salesOfferAccepted") || "Sales offer accepted! Proceed to down payment");
        },
        onError: (error)=>{
            console.error("Accept sales offer error details:", error?.response?.data || error);
            const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, "Failed to confirm sales offer");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
    });
    const uploadSPAMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (variables)=>{
            const file = variables?.file;
            const comments = variables?.comments || "";
            const targetId = variables?.reservationId || reservationId;
            const formData = new FormData();
            formData.append("reservation_id", String(targetId));
            if (file) formData.append("file", file);
            if (comments) formData.append("comments", comments);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$api$2f$services$2f$dashboard$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DashboardAdminService"].uploadSPA(targetId, formData);
        },
        onSuccess: (_data, variables)=>{
            const targetId = variables?.reservationId || reservationId;
            queryClient.setQueryData([
                "reservation",
                targetId
            ], (old)=>{
                if (!old) return old;
                const res = old.reservation ? {
                    ...old.reservation
                } : {
                    ...old
                };
                res.reservation_status_type = "sales_purchase";
                res.status_type = "sales_purchase";
                res.reservation_status = "confirmed";
                res.status = "confirmed";
                const media = old.media ? {
                    ...old.media
                } : {};
                if (variables?.file) {
                    media.sales_purchase = URL.createObjectURL(variables.file);
                }
                return {
                    ...old,
                    reservation: res,
                    media
                };
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(t("reservations.messages.spaSuccess"));
        },
        onError: (error)=>{
            console.error("Upload SPA error details:", error?.response?.data || error);
            const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, t("reservations.messages.spaFailed"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg);
        }
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "h-5 w-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/src/hooks/use-booking-details.tsx",
                    lineNumber: 730,
                    columnNumber: 16
                }, this);
            case "Rejected":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                    className: "h-5 w-5 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/src/hooks/use-booking-details.tsx",
                    lineNumber: 732,
                    columnNumber: 16
                }, this);
            case "Pending":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-5 w-5 text-orange-600"
                }, void 0, false, {
                    fileName: "[project]/src/hooks/use-booking-details.tsx",
                    lineNumber: 734,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-5 w-5 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/src/hooks/use-booking-details.tsx",
                    lineNumber: 736,
                    columnNumber: 16
                }, this);
        }
    };
    const getStatusBadge = (status)=>{
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
        const label = labelKey[status] ? t(labelKey[status]) : status;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            className: `${styles[status] || styles.Waiting} text-xs`,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/hooks/use-booking-details.tsx",
            lineNumber: 755,
            columnNumber: 7
        }, this);
    };
    const getStageStatus = (stageId, currentStatusType, currentStatus, mediaObj)=>{
        const rawType = (currentStatusType || "").toLowerCase().trim();
        const normType = rawType.replace(/\s+/g, "_");
        const status = (currentStatus || "").toLowerCase().trim().replace(/\s+/g, "_");
        const isCancelled = status === "cancelled" || status === "rejected" || status === "declined" || status === "expired";
        const isConfirmed = status === "confirmed" || status === "approved" || status === "complete" || status === "completed";
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
        const isStage1SavedApproved = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
        const isSalesOfferAccepted = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
        const isDownPaymentApproved = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
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
        const mediaObj = bookingData.media || bookingData?.data?.media || resObj?.media || {};
        const userObj = bookingData.user || bookingData?.data?.user || resObj?.user || bookingData?.client || {};
        const statusType = resObj?.reservation_status_type || resObj?.status_type || bookingData?.status_type || bookingData?.reservation_status_type || "identification";
        const status = resObj?.reservation_status || resObj?.status || bookingData?.status || bookingData?.reservation_status || "in_process";
        const comments = resObj?.comments || bookingData?.comments;
        const authorName = [
            userObj?.first_name,
            userObj?.last_name
        ].filter(Boolean).join(" ") || userObj?.user_name || userObj?.name || "Client";
        const date = resObj?.reservation_date || resObj?.created_at || bookingData?.reservation_date;
        const normType = statusType.toLowerCase().trim().replace(/\s+/g, "_");
        const normStatus = status.toLowerCase().trim().replace(/\s+/g, "_");
        return [
            {
                id: 1,
                name: t("reservations.typeMap.identification"),
                status: getStageStatus(1, statusType, status, mediaObj),
                step: t("reservations.details.stepOf", {
                    step: 1,
                    total: 4
                }),
                currentStatusType: normType,
                currentStatus: normStatus,
                subtitle: t("reservations.stages.identificationSubtitle"),
                documents: [
                    mediaObj?.identification ? {
                        name: t("reservations.typeMap.identification"),
                        url: mediaObj.identification
                    } : null,
                    mediaObj?.selfie ? {
                        name: t("reservations.details.selfie"),
                        url: mediaObj.selfie
                    } : null
                ].filter(Boolean),
                comments: comments ? [
                    {
                        author: authorName,
                        date: date,
                        text: comments
                    }
                ] : []
            },
            {
                id: 2,
                name: t("reservations.typeMap.sales_offer"),
                status: getStageStatus(2, statusType, status, mediaObj),
                step: t("reservations.details.stepOf", {
                    step: 2,
                    total: 4
                }),
                currentStatusType: normType,
                currentStatus: normStatus,
                reservationId: Number(reservationId),
                subtitle: !mediaObj?.sales_offer ? t("reservations.stages.salesOfferUploadSubtitle") : normType.includes("sales_offer") && normStatus === "confirmed" ? t("reservations.stages.salesOfferApprovedSubtitle") : t("reservations.stages.salesOfferAwaitingSubtitle"),
                documents: mediaObj?.sales_offer ? [
                    {
                        name: t("reservations.typeMap.sales_offer"),
                        url: mediaObj.sales_offer
                    }
                ] : []
            },
            {
                id: 3,
                name: t("reservations.typeMap.down_payment"),
                status: getStageStatus(3, statusType, status, mediaObj),
                step: t("reservations.details.stepOf", {
                    step: 3,
                    total: 4
                }),
                currentStatusType: normType,
                currentStatus: normStatus,
                subtitle: normType.includes("sales_offer") && normStatus === "confirmed" ? t("reservations.stages.downPaymentAwaitingSubtitle") : normType.includes("down_payment") && normStatus === "in_process" ? t("reservations.stages.downPaymentReviewSubtitle") : normType.includes("down_payment") && normStatus === "confirmed" ? t("reservations.stages.downPaymentApprovedSubtitle") : t("reservations.typeMap.down_payment"),
                documents: mediaObj?.down_payment ? [
                    {
                        name: t("reservations.details.downPaymentReceipt"),
                        url: mediaObj.down_payment
                    }
                ] : []
            },
            {
                id: 4,
                name: t("reservations.typeMap.sales_purchase"),
                status: getStageStatus(4, statusType, status, mediaObj),
                step: t("reservations.details.stepOf", {
                    step: 4,
                    total: 4
                }),
                currentStatusType: normType,
                currentStatus: normStatus,
                subtitle: t("reservations.stages.spaSubtitle"),
                documents: mediaObj?.sales_purchase ? [
                    {
                        name: t("reservations.details.spaDocument"),
                        url: mediaObj.sales_purchase
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
}),
"[project]/src/features/reservations/components/booking-details/BookingHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingHeader",
    ()=>BookingHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
;
;
function BookingHeader({ reservationId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        onClick: ()=>router.push(`${routePrefix}/reservations`),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Booking Details"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                className: "bg-teal-600 hover:bg-teal-700 text-white gap-2 w-full sm:w-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    "Print Invoice"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/reservations/components/booking-details/BookingHeader.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingStatusPills",
    ()=>BookingStatusPills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
;
;
;
;
function BookingStatusPills({ stages, getStatusIcon, getStatusBadge, reservationId }) {
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const effectiveStages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const stage1 = stages.find((s)=>s.id === 1);
        const stage2 = stages.find((s)=>s.id === 2);
        const stage3 = stages.find((s)=>s.id === 3);
        const cleanResId = reservationId ? String(reservationId).replace(/\D/g, "") : "";
        const isStage1SavedApproved = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
        const isSalesOfferAccepted = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
        const isDownPaymentApproved = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
        const isStage1Complete = isStage1SavedApproved || stage1?.status === "Complete" || stage1?.currentStatus === "confirmed" || stage1?.currentStatus === "approved" || stage1?.currentStatus === "completed" || stage1?.currentStatusType !== "identification" && stage1?.currentStatusType !== "identification_confirmation" || stages.some((s)=>s.id > 1 && (s.status === "Complete" || s.documents && s.documents.length > 0));
        const isStage2Complete = isStage1Complete && (stage2?.status === "Complete" || isSalesOfferAccepted || (stage2?.currentStatusType === "sales_offer" || stage2?.currentStatusType === "sales_offer_approval") && (stage2?.currentStatus === "confirmed" || stage2?.currentStatus === "approved" || stage2?.currentStatus === "completed") || stage2?.currentStatusType === "down_payment" || stage2?.currentStatusType === "down_payment_pending" || stage2?.currentStatusType === "sales_purchase" || stage2?.currentStatusType === "sales_purchase_agreement" || stages.some((s)=>s.id > 2 && (s.status === "Complete" || s.documents && s.documents.length > 0)));
        const isStage3Complete = isStage2Complete && (stage3?.status === "Complete" || isDownPaymentApproved || (stage3?.currentStatusType === "down_payment" || stage3?.currentStatusType === "down_payment_pending") && (stage3?.currentStatus === "confirmed" || stage3?.currentStatus === "approved" || stage3?.currentStatus === "completed") || stage3?.currentStatusType === "sales_purchase" || stage3?.currentStatusType === "sales_purchase_agreement" || stages.some((s)=>s.id > 3 && (s.status === "Complete" || s.documents && s.documents.length > 0)));
        return stages.map((stage)=>{
            if (stage.id === 1) {
                if (stage.status === "Rejected") return stage;
                if (isStage1Complete) return {
                    ...stage,
                    status: "Complete"
                };
                return {
                    ...stage,
                    status: "Pending"
                };
            }
            if (stage.id === 2) {
                if (stage.status === "Rejected") return stage;
                if (!isStage1Complete) return {
                    ...stage,
                    status: "Waiting"
                };
                if (isStage2Complete) return {
                    ...stage,
                    status: "Complete"
                };
                return {
                    ...stage,
                    status: "Pending"
                };
            }
            if (stage.id === 3) {
                if (stage.status === "Rejected") return stage;
                if (!isStage2Complete) return {
                    ...stage,
                    status: "Waiting"
                };
                if (isStage3Complete) return {
                    ...stage,
                    status: "Complete"
                };
                return {
                    ...stage,
                    status: "Pending"
                };
            }
            if (stage.id === 4) {
                if (stage.status === "Rejected") return stage;
                if (!isStage3Complete) return {
                    ...stage,
                    status: "Waiting"
                };
                if (stage.status === "Complete") return stage;
                return {
                    ...stage,
                    status: "Pending"
                };
            }
            return stage;
        });
    }, [
        stages,
        reservationId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
        children: effectiveStages.map((stage)=>{
            const isStage2AwaitingAccept = stage.id === 2 && stage.status !== "Complete" && stage.status !== "Rejected" && stage.documents && stage.documents.length > 0;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-1 shadow-2xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-gray-900",
                            children: stage.name
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this),
                        isStage2AwaitingAccept ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "bg-amber-50 text-amber-700 border-amber-200 text-xs font-medium",
                            children: isAr ? "في انتظار القبول" : "Wait for Accept"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
                            lineNumber: 125,
                            columnNumber: 17
                        }, this) : getStatusBadge(stage.status)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
                    lineNumber: 122,
                    columnNumber: 13
                }, this)
            }, stage.id, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
                lineNumber: 118,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage1Approval",
    ()=>Stage1Approval
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
;
;
;
function Stage1Approval({ adminComment, setAdminComment, approveMutation, declineMutation, handleApprove, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 pt-4 border-t border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm font-medium text-gray-700",
                        children: t("reservations.approveDialog.commentsLabel")
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "w-full min-h-[80px] p-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-y",
                        placeholder: t("reservations.approveDialog.commentsPlaceholder"),
                        value: adminComment,
                        onChange: (e)=>setAdminComment(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-xs",
                        disabled: approveMutation.isPending,
                        onClick: handleApprove,
                        children: approveMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                t("reservations.actions.approving")
                            ]
                        }, void 0, true) : t("reservations.actions.approveAndMoveToStage2")
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-rose-600 hover:bg-rose-700 text-white font-medium px-6",
                        disabled: declineMutation.isPending,
                        onClick: ()=>{
                            declineMutation.mutate({
                                comments: adminComment,
                                reservation_status_type: "IDENTIFICATION"
                            });
                        },
                        children: declineMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                t("reservations.actions.declining")
                            ]
                        }, void 0, true) : t("reservations.actions.decline")
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage2SalesOffer",
    ()=>Stage2SalesOffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function Stage2SalesOffer({ stage, salesOfferFile, setSalesOfferFile, isReuploadingSalesOffer, setIsReuploadingSalesOffer, salesOfferImagePreview, adminComment, setAdminComment, handleSalesOfferUpload, uploadSalesOfferMutation, t, isAr }) {
    const hasDoc = stage.documents && stage.documents.length > 0;
    const isUploadRequest = stage.currentStatusType === "sales_offer_request";
    const isWaitingApproval = stage.currentStatusType === "sales_offer" || stage.currentStatusType === "sales_offer_approval" || hasDoc && !isUploadRequest;
    const shouldShowUpload = isUploadRequest || !hasDoc && !isWaitingApproval || isReuploadingSalesOffer || Boolean(salesOfferFile);
    if (shouldShowUpload) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 p-4 bg-teal-50/40 rounded-xl border border-teal-200 space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "h-4 w-4 text-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        isAr ? "رفع صورة عرض المبيعات" : "Upload Sales Offer Image"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600 mt-0.5",
                                    children: isAr ? "ارفع صورة عرض المبيعات (صورة واحدة فقط: PNG, JPG, WEBP). بعد الرفع، سينتظر النظام موافقة العميل." : "Upload the sales offer image (one image only: PNG, JPG, WEBP). Once uploaded, the system will wait for client approval."
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        isReuploadingSalesOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            className: "text-xs text-gray-500 hover:text-gray-700 h-8 px-2 cursor-pointer",
                            onClick: ()=>{
                                setIsReuploadingSalesOffer(false);
                                setSalesOfferFile(null);
                            },
                            children: isAr ? "إلغاء" : "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    id: "salesOfferUpload",
                    className: "hidden",
                    accept: "image/png,image/jpeg,image/jpg,image/webp",
                    multiple: false,
                    onChange: (e)=>{
                        const file = e.target.files?.[0];
                        if (file) {
                            if (!file.type.startsWith("image/")) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "يرجى اختيار صورة فقط بصيغة PNG أو JPG أو WEBP" : "Please select an image file only (PNG, JPG, WEBP)");
                                e.target.value = "";
                                return;
                            }
                            if (file.size > 5 * 1024 * 1024) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "حجم الصورة كبير جداً، الحد الأقصى 5 ميجابايت" : "Image size is too large (max 5MB)");
                                e.target.value = "";
                                return;
                            }
                            setSalesOfferFile(file);
                            setIsReuploadingSalesOffer(true);
                        }
                        e.target.value = "";
                    }
                }, void 0, false, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "salesOfferUpload",
                    className: "flex items-center justify-center gap-2 p-4 border-2 border-dashed border-teal-300 bg-white rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50/50 transition-colors",
                    children: salesOfferImagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center justify-center w-full py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group max-w-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: salesOfferImagePreview,
                                        alt: "Sales Offer Preview",
                                        className: "max-h-52 max-w-full rounded-lg object-contain border border-teal-200 shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setSalesOfferFile(null);
                                        },
                                        className: "absolute -top-2 -right-2 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md cursor-pointer",
                                        title: isAr ? "حذف" : "Remove",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-2 text-xs text-teal-900 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: salesOfferFile?.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400",
                                        children: [
                                            "(",
                                            (salesOfferFile?.size ? salesOfferFile.size / 1024 : 0).toFixed(1),
                                            " KB)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                className: "h-8 w-8 text-teal-600 mx-auto mb-1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-gray-800 block",
                                children: isAr ? "اضغط لاختيار صورة عرض المبيعات" : "Click to select sales offer image"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 mt-1 block",
                                children: isAr ? "صورة واحدة فقط (PNG, JPG, WEBP) بحد أقصى 5 ميجابايت" : "Single image only (PNG, JPG, WEBP) — max 5 MB"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs font-medium text-gray-700 block",
                            children: t("reservations.approveDialog.commentsLabel")
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "w-full min-h-[60px] p-2.5 text-xs bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-y",
                            placeholder: t("reservations.uploadOfferDialog.commentsPlaceholder"),
                            value: adminComment,
                            onChange: (e)=>setAdminComment(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    className: "w-full bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-xs cursor-pointer",
                    onClick: ()=>{
                        handleSalesOfferUpload();
                        setIsReuploadingSalesOffer(false);
                    },
                    disabled: !salesOfferFile || uploadSalesOfferMutation.isPending,
                    children: uploadSalesOfferMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-4 w-4 mr-2 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this),
                            t("reservations.actions.uploading")
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            isAr ? "رفع صورة عرض المبيعات" : "Upload Sales Offer Image"
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3 space-y-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `p-4 rounded-xl border flex flex-col gap-2 ${stage.currentStatusType === "sales_offer_approval" ? "bg-blue-50/70 border-blue-200/80" : "bg-amber-50/70 border-amber-200/80"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${stage.currentStatusType === "sales_offer_approval" ? "bg-blue-100 border-blue-300" : "bg-amber-100 border-amber-300"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: `h-4 w-4 animate-pulse ${stage.currentStatusType === "sales_offer_approval" ? "text-blue-600" : "text-amber-700"}`
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xs font-bold uppercase tracking-wider ${stage.currentStatusType === "sales_offer_approval" ? "text-blue-900" : "text-amber-900"}`,
                                        children: stage.currentStatusType === "sales_offer_approval" ? isAr ? "في انتظار قبول العميل للعرض" : "Waiting for Client to Accept the Offer" : isAr ? "في انتظار موافقة العميل" : "Waiting for Client Approval"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: `text-[10px] px-2 py-0.5 font-semibold ${stage.currentStatusType === "sales_offer_approval" ? "bg-blue-100 text-blue-800 border-blue-300" : "bg-amber-100 text-amber-800 border-amber-300"}`,
                                        children: stage.currentStatusType === "sales_offer_approval" ? isAr ? "بانتظار القبول" : "Awaiting Acceptance" : isAr ? "قيد الانتظار" : "Pending Approval"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    stage.currentStatusType === "sales_offer_approval" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: "bg-gray-100 text-gray-600 border-gray-300 text-[10px] px-2 py-0.5 font-semibold",
                                        children: [
                                            "🔒 ",
                                            isAr ? "مقفل" : "Locked"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs mt-1 leading-relaxed ${stage.currentStatusType === "sales_offer_approval" ? "text-blue-800" : "text-amber-800"}`,
                                children: stage.currentStatusType === "sales_offer_approval" ? isAr ? "تم رفع العرض وإرساله للعميل. لا يمكن تعديل الصورة الآن. في انتظار قبول العميل للمتابعة إلى مرحلة الدفعة الأولى." : "The offer has been uploaded and sent to the client. No changes allowed at this stage. Waiting for the client to accept and proceed to down payment." : isAr ? "تم رفع صورة عرض المبيعات بنجاح. في انتظار موافقة العميل على العرض للانتقال إلى مرحلة الدفعة الأولى." : "Sales offer image uploaded successfully. Waiting for the client to approve the offer before moving to down payment."
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage3DownPayment",
    ()=>Stage3DownPayment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
function Stage3DownPayment({ stage, downPaymentFile, setDownPaymentFile, isReuploadingDownPayment, setIsReuploadingDownPayment, downPaymentPreview, downPaymentComment, setDownPaymentComment, adminComment, setAdminComment, handleDownPaymentUpload, uploadDownPaymentMutation, handleApproveDownPaymentAction, approveDownPaymentMutation, declineMutation, handleDownload, t, isAr }) {
    const hasReceiptDoc = stage.documents && stage.documents.length > 0;
    const isDownPaymentPending = stage.currentStatusType === "down_payment_pending";
    const shouldShowApproveReject = isDownPaymentPending || hasReceiptDoc && !isReuploadingDownPayment && !downPaymentFile;
    const shouldShowPaymentUpload = !isDownPaymentPending && (!hasReceiptDoc || isReuploadingDownPayment || Boolean(downPaymentFile));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 space-y-4",
        children: [
            shouldShowPaymentUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-teal-50/40 rounded-xl border border-teal-200 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                className: "h-4 w-4 text-teal-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            hasReceiptDoc ? isAr ? "رفع إيصال جديد / تغيير إيصال الدفعة الأولى" : "Upload New Receipt / Replace Payment Receipt" : isAr ? "رفع إيصال الدفعة الأولى" : "Upload Down Payment Receipt"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600 mt-0.5",
                                        children: isAr ? "ارفع إيصال التحويل البنكي أو إثبات سداد الدفعة الأولى (صورة أو ملف PDF)." : "Upload the bank transfer receipt or proof of payment for the down payment (image or PDF)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            hasReceiptDoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "ghost",
                                size: "sm",
                                className: "text-xs text-gray-500 hover:text-gray-700 h-8 px-2 cursor-pointer",
                                onClick: ()=>{
                                    setIsReuploadingDownPayment(false);
                                    setDownPaymentFile(null);
                                },
                                children: isAr ? "إلغاء" : "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        id: "downPaymentUpload",
                        className: "hidden",
                        accept: "image/png,image/jpeg,image/jpg,image/webp,application/pdf",
                        onChange: (e)=>{
                            const file = e.target.files?.[0];
                            if (file) {
                                if (file.size > 10 * 1024 * 1024) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(isAr ? "حجم الملف كبير جداً، الحد الأقصى 10 ميجابايت" : "File size is too large (max 10MB)");
                                    e.target.value = "";
                                    return;
                                }
                                setDownPaymentFile(file);
                                setIsReuploadingDownPayment(true);
                            }
                            e.target.value = "";
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "downPaymentUpload",
                        className: "flex items-center justify-center gap-2 p-4 border-2 border-dashed border-teal-300 bg-white rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50/50 transition-colors",
                        children: downPaymentPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex flex-col items-center justify-center w-full py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group max-w-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: downPaymentPreview,
                                            alt: "Down Payment Receipt",
                                            className: "max-h-52 max-w-full rounded-lg object-contain border border-teal-200 shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setDownPaymentFile(null);
                                            },
                                            className: "absolute -top-2 -right-2 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md cursor-pointer",
                                            title: isAr ? "حذف" : "Remove",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                                lineNumber: 134,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mt-2 text-xs text-teal-900 font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: downPaymentFile?.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: [
                                                "(",
                                                (downPaymentFile?.size ? downPaymentFile.size / 1024 : 0).toFixed(1),
                                                " KB)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this) : downPaymentFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between w-full p-2 bg-gray-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-6 w-6 text-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-gray-800",
                                            children: downPaymentFile.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setDownPaymentFile(null);
                                    },
                                    className: "p-1 text-red-600 hover:text-red-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 145,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "h-8 w-8 text-teal-600 mx-auto mb-1.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-gray-800 block",
                                    children: isAr ? "اضغط لاختيار إيصال الدفعة الأولى" : "Click to select down payment receipt"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500 mt-1 block",
                                    children: isAr ? "صور (PNG, JPG, WEBP) أو مستندات (PDF) بحد أقصى 10 ميجابايت" : "Images (PNG, JPG, WEBP) or PDF — max 10 MB"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                            lineNumber: 163,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium text-gray-700 block",
                                children: t("reservations.approveDialog.commentsLabel")
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "w-full min-h-[60px] p-2.5 text-xs bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-y",
                                placeholder: t("reservations.approveDialog.commentsPlaceholder"),
                                value: downPaymentComment,
                                onChange: (e)=>setDownPaymentComment(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "w-full bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-xs cursor-pointer",
                        onClick: handleDownPaymentUpload,
                        disabled: !downPaymentFile || uploadDownPaymentMutation && uploadDownPaymentMutation.isPending,
                        children: uploadDownPaymentMutation && uploadDownPaymentMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this),
                                t("reservations.actions.uploading")
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, this),
                                isAr ? "رفع إيصال الدفعة الأولى" : "Upload Down Payment Receipt"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            shouldShowApproveReject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 p-4 bg-emerald-50/40 rounded-xl border border-emerald-200 shadow-2xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase tracking-wider text-emerald-800",
                                        children: t("reservations.actions.approveDownPayment")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600 mt-0.5",
                                        children: isDownPaymentPending ? isAr ? "قام العميل برفع إيصال الدفعة. راجع الإيصال أدناه ثم وافق أو ارفض." : "The client has uploaded a payment receipt. Review it below then approve or reject." : t("reservations.stages.downPaymentReviewSubtitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            !isDownPaymentPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "sm",
                                variant: "outline",
                                onClick: ()=>setIsReuploadingDownPayment(true),
                                className: "gap-1.5 border-teal-300 text-teal-700 hover:bg-teal-50 hover:text-teal-800 cursor-pointer h-7 text-xs font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isAr ? "تغيير الإيصال" : "Change Receipt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-medium text-gray-700 block",
                                children: t("reservations.approveDialog.commentsLabel")
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "w-full min-h-[60px] p-2.5 text-xs bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-y",
                                placeholder: t("reservations.approveDialog.commentsPlaceholder"),
                                value: adminComment,
                                onChange: (e)=>setAdminComment(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-xs cursor-pointer",
                                disabled: approveDownPaymentMutation.isPending,
                                onClick: handleApproveDownPaymentAction,
                                children: approveDownPaymentMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this),
                                        t("reservations.actions.approving")
                                    ]
                                }, void 0, true) : t("reservations.actions.approveDownPayment")
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "bg-rose-600 hover:bg-rose-700 text-white font-medium px-5 cursor-pointer",
                                disabled: declineMutation.isPending,
                                onClick: ()=>declineMutation.mutate({
                                        comments: adminComment,
                                        reservation_status_type: "DOWN_PAYMENT"
                                    }),
                                children: declineMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                            lineNumber: 278,
                                            columnNumber: 19
                                        }, this),
                                        t("reservations.actions.declining")
                                    ]
                                }, void 0, true) : t("reservations.actions.decline")
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stage4SPA",
    ()=>Stage4SPA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
;
;
;
function Stage4SPA({ spaFile, setSpaFile, handleSpaUpload, uploadSPAMutation, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                id: "spaUpload",
                className: "hidden",
                accept: "image/*,.pdf,.doc,.docx",
                onChange: (e)=>{
                    const file = e.target.files?.[0];
                    if (file) {
                        setSpaFile(file);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "spaUpload",
                className: "flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition-colors",
                children: spaFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                            className: "h-5 w-5 text-teal-600"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-teal-600",
                            children: spaFile.name
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                            className: "h-5 w-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-gray-500",
                            children: t("reservations.uploadOfferDialog.clickToSelect")
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            spaFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                className: "w-full mt-2 bg-teal-600 hover:bg-teal-700 text-white",
                onClick: handleSpaUpload,
                disabled: uploadSPAMutation.isPending,
                children: uploadSPAMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "h-4 w-4 mr-2 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this),
                        t("reservations.actions.uploading")
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                            className: "h-4 w-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this),
                        t("reservations.actions.uploadSPA")
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StageDocumentsList",
    ()=>StageDocumentsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
;
;
;
function StageDocumentsList({ documents, handleDownload, t, isAr }) {
    if (!documents || documents.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: documents.map((doc, idx)=>{
            const isImage = Boolean(doc.url && (doc.url.match(/\.(jpeg|jpg|png|webp|gif|svg)($|\?)/i) || doc.url.includes("image") || doc.url.startsWith("blob:") || doc.name?.match(/\.(jpeg|jpg|png|webp|gif)$/i)));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [
                            isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-lg overflow-hidden border border-teal-200 shrink-0 bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity",
                                onClick: ()=>window.open(doc.url, "_blank"),
                                title: isAr ? "عرض الصورة" : "View image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: doc.url,
                                    alt: doc.name,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                    lineNumber: 37,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                lineNumber: 32,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "h-5 w-5 text-teal-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                    lineNumber: 41,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-900 block truncate",
                                        children: doc.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    isImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>window.open(doc.url, "_blank"),
                                        className: "text-[11px] text-teal-600 hover:text-teal-700 hover:underline font-medium cursor-pointer",
                                        children: isAr ? "معاينة الصورة" : "View Image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        className: "gap-2 text-teal-700 hover:text-teal-800 hover:bg-teal-50 shrink-0 cursor-pointer",
                        onClick: ()=>handleDownload(doc.url, doc.name),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            t("reservations.actions.download")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                ]
            }, idx, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
                lineNumber: 26,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StageCommentsList",
    ()=>StageCommentsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function StageCommentsList({ comments, t }) {
    if (!comments || comments.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 pt-2 border-t border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-xs font-semibold text-gray-700",
                children: t("reservations.details.commentsHistory")
            }, void 0, false, {
                fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            comments.map((comment, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-gray-500 mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-gray-700",
                                    children: comment.author
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: comment.date ? new Date(comment.date).toLocaleDateString() : ""
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-800",
                            children: comment.text
                        }, void 0, false, {
                            fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, cIdx, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingStagesTimeline",
    ()=>BookingStagesTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage1Approval$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/Stage1Approval.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage2SalesOffer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/Stage2SalesOffer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage3DownPayment$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/Stage3DownPayment.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage4SPA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/Stage4SPA.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$StageDocumentsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/StageDocumentsList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$StageCommentsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/timeline-components/StageCommentsList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
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
function BookingStagesTimeline({ stages, getStatusBadge, handleDownload, salesOfferFile, setSalesOfferFile, spaFile, setSpaFile, adminComment, setAdminComment, uploadSalesOfferMutation, uploadSPAMutation, approveMutation, declineMutation, approveDownPaymentMutation, handleSalesOfferUpload, handleSpaUpload, reservationId, uploadDownPaymentMutation, acceptSalesOfferMutation }) {
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const isAr = language === "ar";
    const [isReuploadingSalesOffer, setIsReuploadingSalesOffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [salesOfferImagePreview, setSalesOfferImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downPaymentFile, setDownPaymentFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downPaymentPreview, setDownPaymentPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [downPaymentComment, setDownPaymentComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isReuploadingDownPayment, setIsReuploadingDownPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (salesOfferFile && salesOfferFile.type.startsWith("image/")) {
            const url = URL.createObjectURL(salesOfferFile);
            setSalesOfferImagePreview(url);
            return ()=>URL.revokeObjectURL(url);
        } else {
            setSalesOfferImagePreview(null);
        }
    }, [
        salesOfferFile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (downPaymentFile && downPaymentFile.type.startsWith("image/")) {
            const url = URL.createObjectURL(downPaymentFile);
            setDownPaymentPreview(url);
            return ()=>URL.revokeObjectURL(url);
        } else {
            setDownPaymentPreview(null);
        }
    }, [
        downPaymentFile
    ]);
    const stage1FromServer = stages.find((s)=>s.id === 1);
    const stage2FromServer = stages.find((s)=>s.id === 2);
    const stage3FromServer = stages.find((s)=>s.id === 3);
    const targetResId = reservationId || stages?.[0]?.reservationId || stages?.reservationId;
    const cleanTargetId = targetResId ? String(targetResId).replace(/\D/g, "") : "";
    const isSavedInStorage = (id)=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        //TURBOPACK unreachable
        ;
        const clean = undefined;
    };
    const isSalesOfferAcceptedInStorage = (id)=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        //TURBOPACK unreachable
        ;
        const clean = undefined;
    };
    const isDownPaymentApprovedInStorage = (id)=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        //TURBOPACK unreachable
        ;
        const clean = undefined;
    };
    const isStage1SavedInStorage = isSavedInStorage(targetResId) || reservationId && isSavedInStorage(reservationId);
    const isLaterStageActiveOrDone = stages.some((s)=>s.id > 1 && (s.status === "Complete" || s.documents && s.documents.length > 0)) || stage1FromServer?.currentStatusType === "sales_offer" || stage1FromServer?.currentStatusType === "down_payment" || stage1FromServer?.currentStatusType === "sales_purchase";
    const stage1InitiallyApproved = Boolean(isStage1SavedInStorage) || Boolean(isLaterStageActiveOrDone) || stage1FromServer?.status === "Complete" || stage1FromServer?.currentStatus === "confirmed" || stage1FromServer?.currentStatus === "approved" || stage1FromServer?.currentStatus === "completed" || stage1FromServer?.currentStatusType !== "identification" && stage1FromServer?.currentStatusType !== "identification_confirmation";
    const [isStage1Approved, setIsStage1Approved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Boolean(stage1InitiallyApproved));
    const [collapsedStages, setCollapsedStages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (stage1InitiallyApproved && !isStage1Approved) {
            setIsStage1Approved(true);
        }
        if (isSavedInStorage(targetResId) && !isStage1Approved) {
            setIsStage1Approved(true);
        }
    }, [
        stage1InitiallyApproved,
        targetResId
    ]);
    const isCollapsed = (stageId, isComplete, isPending)=>{
        if (collapsedStages[stageId] !== undefined) {
            return collapsedStages[stageId];
        }
        if (isComplete) return true;
        if (isPending) return false;
        return false;
    };
    const toggleStage = (stageId, isComplete, isPending)=>{
        setCollapsedStages((prev)=>({
                ...prev,
                [stageId]: !isCollapsed(stageId, isComplete, isPending)
            }));
    };
    const handleApprove = ()=>{
        approveMutation.mutate({
            comments: adminComment,
            reservation_status_type: "IDENTIFICATION",
            reservationId: targetResId
        }, {
            onSuccess: ()=>{
                setIsStage1Approved(true);
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                setAdminComment("");
                setCollapsedStages((prev)=>({
                        ...prev,
                        1: true,
                        2: false
                    }));
                setTimeout(()=>{
                    const stage2El = document.getElementById("stage-2");
                    if (stage2El) {
                        stage2El.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }, 200);
            },
            onError: (err)=>{
                const errMsg = err?.response?.data?.message || err?.message || "";
                if (errMsg.toLowerCase().includes("already approved")) {
                    setIsStage1Approved(true);
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    setAdminComment("");
                }
            }
        });
    };
    const handleAcceptSalesOffer = ()=>{
        if (acceptSalesOfferMutation) {
            acceptSalesOfferMutation.mutate({
                reservationId: targetResId,
                comments: adminComment
            }, {
                onSuccess: ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    setCollapsedStages((prev)=>({
                            ...prev,
                            2: true,
                            3: false
                        }));
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
        } else {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setCollapsedStages((prev)=>({
                    ...prev,
                    2: true,
                    3: false
                }));
        }
    };
    const handleDownPaymentUpload = ()=>{
        if (!downPaymentFile) return;
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
    };
    const handleApproveDownPaymentAction = ()=>{
        approveDownPaymentMutation.mutate({
            comments: adminComment || downPaymentComment,
            reservation_status_type: "DOWN_PAYMENT",
            reservationId: targetResId
        }, {
            onSuccess: ()=>{
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                setCollapsedStages((prev)=>({
                        ...prev,
                        3: true,
                        4: false
                    }));
                setTimeout(()=>{
                    const stage4El = document.getElementById("stage-4");
                    if (stage4El) {
                        stage4El.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }, 200);
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:col-span-2 space-y-4",
        children: (()=>{
            const s1 = stage1FromServer;
            const s2 = stage2FromServer;
            const s3 = stage3FromServer;
            const globalStage1Complete = Boolean(s1 && (s1.status === "Complete" || isStage1Approved || stage1InitiallyApproved || isStage1SavedInStorage || s1.currentStatus === "confirmed" || s1.currentStatus === "approved" || s1.currentStatusType !== "identification" && s1.currentStatusType !== "identification_confirmation" || stages.some((sx)=>sx.id > 1 && (sx.status === "Complete" || sx.documents && sx.documents.length > 0))));
            const globalStage2Complete = Boolean(globalStage1Complete && s2 && (s2.status === "Complete" || isSalesOfferAcceptedInStorage(targetResId) || reservationId && isSalesOfferAcceptedInStorage(reservationId) || (s2.currentStatusType === "sales_offer" || s2.currentStatusType === "sales_offer_approval") && (s2.currentStatus === "confirmed" || s2.currentStatus === "approved" || s2.currentStatus === "completed") || s2.currentStatusType === "down_payment" || s2.currentStatusType === "down_payment_pending" || s2.currentStatusType === "sales_purchase" || s2.currentStatusType === "sales_purchase_agreement" || stages.some((sx)=>sx.id > 2 && (sx.status === "Complete" || sx.documents && sx.documents.length > 0))));
            const globalStage3Complete = Boolean(globalStage2Complete && s3 && (s3.status === "Complete" || isDownPaymentApprovedInStorage(targetResId) || reservationId && isDownPaymentApprovedInStorage(reservationId) || (s3.currentStatusType === "down_payment" || s3.currentStatusType === "down_payment_pending") && (s3.currentStatus === "confirmed" || s3.currentStatus === "approved" || s3.currentStatus === "completed") || s3.currentStatusType === "sales_purchase" || s3.currentStatusType === "sales_purchase_agreement" || stages.some((sx)=>sx.id > 3 && (sx.status === "Complete" || sx.documents && sx.documents.length > 0))));
            const isCancelledGlobally = Boolean(s1 && (s1.currentStatus === "cancelled" || s1.currentStatus === "rejected"));
            return stages.map((stage)=>{
                const isStage1Complete = stage.id === 1 ? globalStage1Complete : false;
                const isStage2Complete = stage.id === 2 ? globalStage2Complete : false;
                const isStage3Complete = stage.id === 3 ? globalStage3Complete : false;
                const isComplete = stage.id === 1 ? globalStage1Complete : stage.id === 2 ? globalStage2Complete : stage.id === 3 ? globalStage3Complete : stage.status === "Complete";
                let isPending = stage.id === 1 ? !globalStage1Complete && stage.status === "Pending" : stage.id === 2 ? !globalStage2Complete && globalStage1Complete : stage.id === 3 ? !globalStage3Complete && globalStage2Complete : globalStage3Complete && stage.status !== "Complete";
                // If the reservation is entirely cancelled, no stage should be active/pending.
                if (isCancelledGlobally) {
                    isPending = false;
                }
                const isRejected = stage.status === "Rejected" || isCancelledGlobally && !isComplete;
                const collapsed = isCollapsed(stage.id, isComplete, isPending);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: `stage-${stage.id}`,
                    className: `bg-white rounded-lg border overflow-hidden transition-all duration-200 ${isPending ? "border-teal-400 ring-2 ring-teal-500/20 shadow-xs" : isComplete ? "border-emerald-200" : isRejected ? "border-rose-200" : "border-gray-200 opacity-90"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>toggleStage(stage.id, isComplete, isPending),
                            className: `border-b p-4 flex items-center justify-between transition-colors cursor-pointer select-none ${isPending ? "bg-teal-50/70 border-teal-200" : isComplete ? "bg-emerald-50/50 border-emerald-100" : isRejected ? "bg-rose-50/50 border-rose-100" : "bg-gray-50/50 border-gray-200"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${isComplete ? "bg-emerald-600 text-white shadow-xs" : isPending ? "bg-teal-600 text-white ring-4 ring-teal-100" : isRejected ? "bg-rose-600 text-white" : "bg-gray-200 text-gray-500"}`,
                                            children: isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-4 w-4 stroke-[3]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                lineNumber: 403,
                                                columnNumber: 33
                                            }, this) : stage.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                                    lineNumber: 406,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-0.5",
                                                    children: stage.subtitle || stage.step
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        getStatusBadge(isComplete ? "Complete" : isPending ? "Pending" : stage.status),
                                        collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "h-4 w-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 415,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "h-4 w-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                            lineNumber: 381,
                            columnNumber: 13
                        }, this),
                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 space-y-4",
                            children: [
                                stage.id === 1 && isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4 text-emerald-600 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 426,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t("reservations.stages.stage1Closed")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 427,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                    lineNumber: 425,
                                    columnNumber: 19
                                }, this),
                                stage.id === 2 && isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4 text-emerald-600 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 432,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t("reservations.stages.stage2Closed")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 433,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                    lineNumber: 431,
                                    columnNumber: 19
                                }, this),
                                stage.id === 3 && isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg border border-emerald-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4 text-emerald-600 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 439,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t("reservations.stages.stage3Closed")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 440,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                    lineNumber: 438,
                                    columnNumber: 19
                                }, this),
                                stage.documents && stage.documents.length > 0 || (stage.id === 2 || stage.id === 3 || stage.id === 4) && isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-gray-900 mb-3",
                                            children: stage.documents && stage.documents.length > 0 ? `${t("reservations.details.documents")} (${stage.documents.length})` : isPending ? t("reservations.details.requiredAction") : t("reservations.details.documents")
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 447,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$StageDocumentsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StageDocumentsList"], {
                                                    documents: stage.documents,
                                                    handleDownload: handleDownload,
                                                    t: t,
                                                    isAr: isAr
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 23
                                                }, this),
                                                stage.id === 2 && isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage2SalesOffer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stage2SalesOffer"], {
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
                                                    lineNumber: 458,
                                                    columnNumber: 25
                                                }, this),
                                                stage.id === 3 && isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage3DownPayment$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stage3DownPayment"], {
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
                                                    lineNumber: 477,
                                                    columnNumber: 25
                                                }, this),
                                                stage.id === 4 && isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage4SPA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stage4SPA"], {
                                                    spaFile: spaFile,
                                                    setSpaFile: setSpaFile,
                                                    handleSpaUpload: handleSpaUpload,
                                                    uploadSPAMutation: uploadSPAMutation,
                                                    t: t
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                            lineNumber: 454,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                    lineNumber: 446,
                                    columnNumber: 19
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$StageCommentsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StageCommentsList"], {
                                    comments: stage.comments,
                                    t: t
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                    lineNumber: 512,
                                    columnNumber: 17
                                }, this),
                                stage.id === 1 && !isStage1Complete && !isStage1Approved && stage.currentStatus === "in_process" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$timeline$2d$components$2f$Stage1Approval$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stage1Approval"], {
                                    adminComment: adminComment,
                                    setAdminComment: setAdminComment,
                                    approveMutation: approveMutation,
                                    declineMutation: declineMutation,
                                    handleApprove: handleApprove,
                                    t: t
                                }, void 0, false, {
                                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                                    lineNumber: 514,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                            lineNumber: 423,
                            columnNumber: 15
                        }, this)
                    ]
                }, stage.id, true, {
                    fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
                    lineNumber: 369,
                    columnNumber: 11
                }, this);
            });
        })()
    }, void 0, false, {
        fileName: "[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx",
        lineNumber: 289,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingInfoCards",
    ()=>BookingInfoCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg border border-gray-200 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "Client Information"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Client Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: user.user_name || `${user.first_name || ""} ${user.last_name || ""}`.trim() || user.name || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Email Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: user.email || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: user.phone_number || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            user.user_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "User ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: [
                                            "#",
                                            user.user_id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Created Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: formatDate(reservation.reservation_date)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Expiry Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: formatDate(reservation.expiry_date)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg border border-gray-200 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "Unit Information"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-4 p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mt-1",
                                children: "Unit Price"
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Project"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: project.project_name || property.property_name || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Property / Unit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: property.property_name || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            developer.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: developer.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Country"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: country.name || "UAE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium capitalize",
                                        children: reservation.reservation_status || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Stage / Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium capitalize",
                                        children: reservation.reservation_status_type || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            reservation.reservation_fee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Reservation Fee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: [
                                            reservation.reservation_fee,
                                            " ",
                                            currencyStr
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            reservation.service_fee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Service Fee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-900 font-medium",
                                        children: [
                                            reservation.service_fee,
                                            " ",
                                            currencyStr
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    paymentPlan.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: "Payment Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded",
                                        children: paymentPlan.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            paymentPlan.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600 leading-relaxed bg-gray-50 p-2.5 rounded border border-gray-100",
                                children: paymentPlan.description
                            }, void 0, false, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            (bookingData?.media?.identification || bookingData?.media?.selfie || bookingData?.media?.sales_offer || bookingData?.media?.down_payment || bookingData?.media?.sales_purchase) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg border border-gray-200 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-4",
                        children: "Media & Documents"
                    }, void 0, false, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 text-sm",
                        children: [
                            bookingData.media.identification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Identification"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.identification,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this),
                            bookingData.media.selfie && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Selfie"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.selfie,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this),
                            bookingData.media.sales_offer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Sales Offer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.sales_offer,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this),
                            bookingData.media.down_payment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Down Payment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.down_payment,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this),
                            bookingData.media.sales_purchase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "SPA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: bookingData.media.sales_purchase,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-teal-600 font-medium hover:underline",
                                        children: "View"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/reservations/[id]/page.client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$booking$2d$details$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-booking-details.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/BookingHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingStatusPills$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/BookingStatusPills.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingStagesTimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/BookingStagesTimeline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingInfoCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/reservations/components/booking-details/BookingInfoCards.tsx [app-ssr] (ecmascript)");
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
function BookingDetailsPage() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
    const token = session?.user?.accessToken;
    const cleanId = params?.id ? Number(String(params.id).replace(/\D/g, "")) : 0;
    const reservationId = cleanId || Number(params?.id) || 0;
    const [salesOfferFile, setSalesOfferFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [spaFile, setSpaFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adminComment, setAdminComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("details");
    const { bookingData, isLoading, isError, error, refetch, approveMutation, declineMutation, uploadSalesOfferMutation, uploadSPAMutation, approveDownPaymentMutation, uploadDownPaymentMutation, acceptSalesOfferMutation, formatPrice, stages, getStatusIcon, getStatusBadge } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$booking$2d$details$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
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
        } catch (error) {
            console.error("Download failed:", error);
            window.open(url, "_blank");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        bookingData
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "mx-auto h-12 w-12 animate-spin text-teal-600"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading booking details..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, this);
    }
    if (isError || !bookingData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                        className: "mx-auto h-12 w-12 text-red-600"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 text-xl font-semibold text-gray-900",
                        children: "Error Loading Booking"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.push(`${routePrefix}/reservations`),
                        className: "mt-6 bg-teal-600 hover:bg-teal-700",
                        children: "Back to Bookings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
            lineNumber: 213,
            columnNumber: 7
        }, this);
    }
    const displayReservationId = bookingData?.reservation?.reservation_id || bookingData?.reservation?.id || reservationId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 px-3 space-y-4 max-w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `${routePrefix}/home`,
                        className: "hover:text-teal-600 transition-colors",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `${routePrefix}/reservations`,
                        className: "hover:text-teal-600 transition-colors",
                        children: "Bookings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-900",
                        children: [
                            "Booking #",
                            displayReservationId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingHeader"], {
                reservationId: displayReservationId
            }, void 0, false, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingStatusPills$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingStatusPills"], {
                stages: stages,
                getStatusIcon: getStatusIcon,
                getStatusBadge: getStatusBadge,
                reservationId: displayReservationId
            }, void 0, false, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingStagesTimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingStagesTimeline"], {
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
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$reservations$2f$components$2f$booking$2d$details$2f$BookingInfoCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingInfoCards"], {
                        bookingData: bookingData,
                        formatPrice: formatPrice
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/reservations/[id]/page.client.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_71962650._.js.map