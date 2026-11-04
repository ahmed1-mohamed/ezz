import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { DashboardAdminService } from "@/data/api-client";
import { ApiResponse } from "@/lib/apiClient";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export function useBookingMutations(
  reservationId: number,
  t: any,
  router: any,
  queryClient: any
) {
  const approveMutation = useMutation<any, unknown, any>({
    mutationFn: async (variables: any) => {
      const comments = typeof variables === "string" ? variables : variables?.comments || "";
      const targetId = variables?.reservationId || reservationId;
      const resType = (variables?.reservation_status_type || variables?.type || "IDENTIFICATION").toUpperCase();
      const body: Record<string, unknown> = {
        reservation_id: targetId,
        status: "confirmed",
        reservation_status_type: resType,
      };
      if (comments) body.comments = comments;
      return DashboardAdminService.confirmBooking(targetId, body);
    },
    onSuccess: (_data: any, variables: any) => {
      const targetId = Number(variables?.reservationId) || Number(reservationId);
      if (typeof window !== "undefined" && targetId) {
        localStorage.setItem(`approved_stage1_${targetId}`, "true");
      }
      const updateCache = (old: any) => {
        if (!old) return old;
        const res = old.reservation ? { ...old.reservation } : { ...old };
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
          reservation: res,
        };
      };
      queryClient.setQueryData(["reservation", targetId], updateCache);
      if (reservationId && targetId !== Number(reservationId)) {
        queryClient.setQueryData(["reservation", Number(reservationId)], updateCache);
      }
      queryClient.invalidateQueries({
        queryKey: ["reservation", targetId],
      });
      if (targetId !== reservationId) {
        queryClient.invalidateQueries({
          queryKey: ["reservation", reservationId],
        });
      }
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "reservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardInProgressReservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartStatusMetrics"] });
      toast.success(t("reservations.messages.approveSuccess"));
    },
    onError: (error: any, variables: any) => {
      const errMsg = error?.response?.data?.message || error?.message || "";
      const targetId = Number(variables?.reservationId) || Number(reservationId);
      queryClient.invalidateQueries({ queryKey: ["reservation", targetId] });
      if (targetId !== reservationId) {
        queryClient.invalidateQueries({ queryKey: ["reservation", reservationId] });
      }
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "reservations"] });

      if (errMsg.toLowerCase().includes("already approved")) {
        if (typeof window !== "undefined" && targetId) {
          localStorage.setItem(`approved_stage1_${targetId}`, "true");
        }
        toast.info(t("reservations.messages.alreadyApproved"));
        return;
      }
      console.error("Approve reservation error details:", error?.response?.data || error);
      toast.error(getApiErrorMessage(error, t, t("reservations.messages.approveFailed")), { id: API_ERROR_TOAST_ID });
    },
  });
  const declineMutation = useMutation<any, unknown, any>({
    mutationFn: async (variables: any) => {
      const comments = typeof variables === "string" ? variables : variables?.comments || "";
      const targetId = variables?.reservationId || reservationId;
      const resType = (variables?.reservation_status_type || variables?.type || "IDENTIFICATION").toUpperCase();
      const payload: Record<string, string> = {
        status: "cancelled",
        reservation_status_type: resType,
      };
      if (comments) payload.comments = comments;
      return DashboardAdminService.declineBooking(targetId, payload as any);
    },
    onSuccess: (_data: any, variables: any) => {
      const targetId = Number(variables?.reservationId) || Number(reservationId);
      if (typeof window !== "undefined" && targetId) {
        localStorage.removeItem(`approved_stage1_${targetId}`);
      }
      queryClient.invalidateQueries({
        queryKey: ["reservation", reservationId],
      });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "reservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardInProgressReservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartStatusMetrics"] });
      toast.success(t("reservations.messages.declineSuccess"));
      router.push("/admin/reservations");
    },
    onError: (error: any) => {
      console.error("Decline reservation error details:", error?.response?.data || error);
      toast.error(getApiErrorMessage(error, t, t("reservations.messages.declineFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const uploadSalesOfferMutation = useMutation<
    ApiResponse<unknown>,
    unknown,
    any
  >({
    mutationFn: async (variables: any) => {
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
      return DashboardAdminService.uploadSalesOffer(formData) as Promise<
        ApiResponse<unknown>
      >;
    },
    onSuccess: (_data: any, variables: any) => {
      const targetId = variables?.reservationId || reservationId;
      queryClient.setQueryData(["reservation", targetId], (old: any) => {
        if (!old) return old;
        const res = old.reservation ? { ...old.reservation } : { ...old };
        res.reservation_status_type = "sales_offer";
        res.status_type = "sales_offer";
        res.reservation_status = "in_process";
        res.status = "in_process";
        const media = old.media ? { ...old.media } : {};
        if (variables?.file) {
          media.sales_offer = URL.createObjectURL(variables.file);
        }
        return {
          ...old,
          reservation: res,
          media,
        };
      });
      queryClient.invalidateQueries({
        queryKey: ["reservation", targetId],
      });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "reservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardInProgressReservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartStatusMetrics"] });
      toast.success(t("reservations.messages.salesOfferSuccess"));
    },
    onError: (error: any) => {
      console.error("Upload Sales Offer error details:", error?.response?.data || error);
      toast.error(getApiErrorMessage(error, t, t("reservations.messages.salesOfferFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const approveDownPaymentMutation = useMutation<any, unknown, any>({
    mutationFn: async (variables: any) => {
      const comments = typeof variables === "string" ? variables : variables?.comments || "";
      const targetId = variables?.reservationId || reservationId;
      const resType = (variables?.reservation_status_type || variables?.type || "DOWN_PAYMENT").toUpperCase();
      const body: Record<string, unknown> = {
        reservation_id: targetId,
        status: "confirmed",
        reservation_status_type: resType,
      };
      if (comments) body.comments = comments;
      return DashboardAdminService.confirmBooking(targetId, body);
    },
    onSuccess: (_data: any, variables: any) => {
      const targetId = variables?.reservationId || reservationId;
      if (typeof window !== "undefined" && targetId) {
        const clean = String(targetId).replace(/\D/g, "");
        localStorage.setItem(`approved_down_payment_${targetId}`, "true");
        if (clean) localStorage.setItem(`approved_down_payment_${clean}`, "true");
      }
      queryClient.setQueryData(["reservation", targetId], (old: any) => {
        if (!old) return old;
        const res = old.reservation ? { ...old.reservation } : { ...old };
        res.reservation_status = "confirmed";
        res.status = "confirmed";
        return {
          ...old,
          reservation: res,
        };
      });
      queryClient.invalidateQueries({
        queryKey: ["reservation", targetId],
      });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "reservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardInProgressReservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartStatusMetrics"] });
      toast.success(t("reservations.messages.approveSuccess"));
    },
    onError: (error: any) => {
      console.error("Approve down payment error details:", error?.response?.data || error);
      toast.error(getApiErrorMessage(error, t, t("reservations.messages.approveFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const uploadDownPaymentMutation = useMutation<
    ApiResponse<unknown>,
    unknown,
    any
  >({
    mutationFn: async (variables: any) => {
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
      return DashboardAdminService.uploadDownPayment(formData) as Promise<
        ApiResponse<unknown>
      >;
    },
    onSuccess: (_data: any, variables: any) => {
      const targetId = variables?.reservationId || reservationId;
      if (typeof window !== "undefined" && targetId) {
        const clean = String(targetId).replace(/\D/g, "");
        localStorage.setItem(`uploaded_down_payment_${targetId}`, "true");
        if (clean) localStorage.setItem(`uploaded_down_payment_${clean}`, "true");
      }
      queryClient.setQueryData(["reservation", targetId], (old: any) => {
        if (!old) return old;
        const res = old.reservation ? { ...old.reservation } : { ...old };
        res.reservation_status_type = "down_payment";
        res.status_type = "down_payment";
        const media = old.media ? { ...old.media } : {};
        if (variables?.file) {
          media.down_payment = URL.createObjectURL(variables.file);
        }
        return {
          ...old,
          reservation: res,
          media,
        };
      });
      queryClient.invalidateQueries({ queryKey: ["reservation", targetId] });
      if (targetId !== reservationId) {
        queryClient.invalidateQueries({ queryKey: ["reservation", reservationId] });
      }
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "reservations"] });
      toast.success(t("reservations.messages.paymentUploaded"));
    },
    onError: (error: any) => {
      console.error("Upload down payment error details:", error?.response?.data || error);
      toast.error(getApiErrorMessage(error, t, t("reservations.messages.paymentUploadFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const acceptSalesOfferMutation = useMutation<any, unknown, any>({
    mutationFn: async (variables: any) => {
      const comments = typeof variables === "string" ? variables : variables?.comments || "";
      const targetId = variables?.reservationId || reservationId;
      const body: Record<string, unknown> = {
        reservation_id: targetId,
        status: "confirmed",
        reservation_status_type: "SALES_OFFER",
      };
      if (comments) body.comments = comments;
      return DashboardAdminService.confirmBooking(targetId, body);
    },
    onSuccess: (_data: any, variables: any) => {
      const targetId = variables?.reservationId || reservationId;
      if (typeof window !== "undefined" && targetId) {
        const clean = String(targetId).replace(/\D/g, "");
        localStorage.setItem(`accepted_sales_offer_${targetId}`, "true");
        if (clean) localStorage.setItem(`accepted_sales_offer_${clean}`, "true");
        localStorage.setItem(`approved_stage1_${targetId}`, "true");
        if (clean) localStorage.setItem(`approved_stage1_${clean}`, "true");
      }
      queryClient.setQueryData(["reservation", targetId], (old: any) => {
        if (!old) return old;
        const res = old.reservation ? { ...old.reservation } : { ...old };
        res.reservation_status_type = "sales_offer";
        res.status_type = "sales_offer";
        res.reservation_status = "confirmed";
        res.status = "confirmed";
        return {
          ...old,
          reservation: res,
        };
      });
      queryClient.invalidateQueries({ queryKey: ["reservation", targetId] });
      if (targetId !== reservationId) {
        queryClient.invalidateQueries({ queryKey: ["reservation", reservationId] });
      }
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "reservations"] });
      toast.success(t("reservations.messages.salesOfferAccepted"));
    },
    onError: (error: any) => {
      console.error("Accept sales offer error details:", error?.response?.data || error);
      toast.error(getApiErrorMessage(error, t, t("reservations.messages.salesOfferAcceptFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const uploadSPAMutation = useMutation<
    ApiResponse<unknown>,
    unknown,
    any
  >({
    mutationFn: async (variables: any) => {
      const file = variables?.file;
      const comments = variables?.comments || "";
      const targetId = variables?.reservationId || reservationId;
      const formData = new FormData();
      formData.append("reservation_id", String(targetId));
      if (file) formData.append("file", file);
      if (comments) formData.append("comments", comments);
      return DashboardAdminService.uploadSPA(targetId, formData) as Promise<
        ApiResponse<unknown>
      >;
    },
    onSuccess: (_data: any, variables: any) => {
      const targetId = variables?.reservationId || reservationId;
      queryClient.setQueryData(["reservation", targetId], (old: any) => {
        if (!old) return old;
        const res = old.reservation ? { ...old.reservation } : { ...old };
        res.reservation_status_type = "sales_purchase";
        res.status_type = "sales_purchase";
        res.reservation_status = "confirmed";
        res.status = "confirmed";
        const media = old.media ? { ...old.media } : {};
        if (variables?.file) {
          media.sales_purchase = URL.createObjectURL(variables.file);
        }
        return {
          ...old,
          reservation: res,
          media,
        };
      });
      queryClient.invalidateQueries({
        queryKey: ["reservation", reservationId],
      });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "reservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardInProgressReservations"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartCounts"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardChartStatusMetrics"] });
      toast.success(t("reservations.messages.spaSuccess"));
    },
    onError: (error: any) => {
      console.error("Upload SPA error details:", error?.response?.data || error);
      toast.error(getApiErrorMessage(error, t, t("reservations.messages.spaFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  return {
    approveMutation,
    declineMutation,
    uploadSalesOfferMutation,
    approveDownPaymentMutation,
    uploadDownPaymentMutation,
    acceptSalesOfferMutation,
    uploadSPAMutation,
  };
}
