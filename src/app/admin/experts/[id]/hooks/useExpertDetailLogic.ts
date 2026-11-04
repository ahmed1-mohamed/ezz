import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchExpertDetails, AdminExpertsService } from "@/data/api-client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { DASHBOARD_API_BASE_URL } from "@/data/config";

export function useExpertDetailLogic(expertId: string) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState("overview");
  const [isActive, setIsActive] = useState(true);
  const [processingBookingId, setProcessingBookingId] = useState<number | null>(
    null,
  );

  const expertDetailsQuery = useQuery({
    queryKey: ["expertDetails", expertId],
    queryFn: async () => {
      try {
        const adminRes = (await AdminExpertsService.getExpert(Number(expertId))) as any;
        const resBody = adminRes?.data ?? adminRes;
        if (resBody && (resBody.expert_id || resBody.id || resBody.display_name || resBody.data || resBody.user)) {
          return resBody;
        }
      } catch (err) {
        console.warn("AdminExpertsService.getExpert failed in details, fallback to fetchExpertDetails", err);
      }
      return fetchExpertDetails(Number(expertId), token!);
    },
    enabled: !!token && !!expertId,
  });

  const apiBase = DASHBOARD_API_BASE_URL;

  const reviewsQuery = useQuery({
    queryKey: ["expertReviews", expertId],
    queryFn: async () => {
      if (!token || !expertId) throw new Error("Not authenticated");
      const response = await fetch(
        `${apiBase}/experts/${expertId}/reviews`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) throw new Error("Failed to fetch reviews");
      return response.json();
    },
    enabled: !!token && !!expertId && activeTab === "reviews",
    staleTime: Infinity,
  });

  const transactionsQuery = useQuery({
    queryKey: ["expertTransactions", expertId],
    queryFn: async () => {
      if (!token || !expertId) throw new Error("Not authenticated");
      const response = await fetch(
        `${apiBase}/experts/${expertId}/transactions`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) throw new Error("Failed to fetch transactions");
      return response.json();
    },
    enabled: !!token && !!expertId && activeTab === "transactions",
    staleTime: Infinity,
  });

  const bookingsQuery = useQuery({
    queryKey: ["expertBookings", expertId],
    queryFn: async () => {
      if (!token || !expertId) throw new Error("Not authenticated");
      const response = await fetch(
        `${apiBase}/experts/${expertId}/bookings`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) throw new Error("Failed to fetch bookings");
      return response.json();
    },
    enabled: !!token && !!expertId && activeTab === "upcoming-meetings",
    staleTime: Infinity,
  });

  const confirmBookingMutation = useMutation({
    mutationFn: async (bookingId: number) => {
      const response = await fetch(
        `${apiBase}/experts/bookings/${bookingId}/confirm`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) throw new Error("Failed to confirm booking");
      return response.json();
    },
    onSuccess: () => {
      toast.success(t("meetings.messages.approveSuccess"));
      setProcessingBookingId(null);
      queryClient.invalidateQueries({ queryKey: ["expertBookings", expertId] });
    },
    // The request's own error text is English-only, so show the translated message.
    onError: () => {
      toast.error(t("meetings.messages.approveFailed"), { id: API_ERROR_TOAST_ID });
      setProcessingBookingId(null);
    },
  });

  const declineBookingMutation = useMutation({
    mutationFn: async (bookingId: number) => {
      const response = await fetch(
        `${apiBase}/experts/bookings/${bookingId}/decline`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) throw new Error("Failed to decline booking");
      return response.json();
    },
    onSuccess: () => {
      toast.success(t("meetings.messages.rejectSuccess"));
      setProcessingBookingId(null);
      queryClient.invalidateQueries({ queryKey: ["expertBookings", expertId] });
    },
    // The request's own error text is English-only, so show the translated message.
    onError: () => {
      toast.error(t("meetings.messages.rejectFailed"), { id: API_ERROR_TOAST_ID });
      setProcessingBookingId(null);
    },
  });

  const rescheduleBookingMutation = useMutation({
    mutationFn: async (bookingId: number) => {
      const response = await fetch(
        `${apiBase}/experts/bookings/${bookingId}/reschedule`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) throw new Error("Failed to reschedule booking");
      return response.json();
    },
    onSuccess: () => {
      toast.success(t("meetings.messages.rescheduleSuccess"));
      setProcessingBookingId(null);
      queryClient.invalidateQueries({ queryKey: ["expertBookings", expertId] });
    },
    // The request's own error text is English-only, so show the translated message.
    onError: () => {
      toast.error(t("meetings.messages.rescheduleFailed"), { id: API_ERROR_TOAST_ID });
      setProcessingBookingId(null);
    },
  });

  useEffect(() => {
    const rawData = expertDetailsQuery.data?.data ?? expertDetailsQuery.data;
    const item = rawData?.data ?? rawData;
    if (item?.status) {
      setIsActive(item.status === "approved" || item.status === "active");
    }
  }, [expertDetailsQuery.data]);

  const toggleStatusMutation = useMutation({
    mutationFn: async (newStatus: boolean) => {
      return AdminExpertsService.toggleExpertStatus(Number(expertId), newStatus);
    },
    onSuccess: async () => {
      queryClient.removeQueries({ queryKey: ["expertDetails", expertId] });
      queryClient.removeQueries({ queryKey: ["expertDetails", Number(expertId)] });
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["experts"], refetchType: "all" }),
        queryClient.invalidateQueries({ queryKey: ["expertDetails"], refetchType: "all" }),
      ]);
      toast.success(t("experts.messages.statusUpdateSuccess"));
    },
    onError: (error: unknown) => {
      setIsActive((prev) => !prev);
      toast.error(getApiErrorMessage(error, t, t("experts.messages.statusUpdateFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const handleToggleStatus = (newStatus: boolean) => {
    setIsActive(newStatus);
    toggleStatusMutation.mutate(newStatus);
  };

  const handleConfirm = (bookingId: number) => {
    setProcessingBookingId(bookingId);
    confirmBookingMutation.mutate(bookingId);
  };

  const handleDecline = (bookingId: number) => {
    setProcessingBookingId(bookingId);
    declineBookingMutation.mutate(bookingId);
  };

  const handleReschedule = (bookingId: number) => {
    setProcessingBookingId(bookingId);
    rescheduleBookingMutation.mutate(bookingId);
  };

  return {
    expertDetailsQuery,
    reviewsQuery,
    transactionsQuery,
    bookingsQuery,
    activeTab,
    setActiveTab,
    isActive,
    setIsActive: handleToggleStatus,
    handleToggleStatus,
    processingBookingId,
    handleConfirm,
    handleDecline,
    handleReschedule,
    token,
    t,
  };
}