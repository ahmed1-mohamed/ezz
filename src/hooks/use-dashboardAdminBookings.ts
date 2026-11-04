"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { AdminBookingsService } from "@/data/api-client";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { unpackReservationsResponse, mapReservation } from "@/features/reservations/utils/map-reservation";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingFilters {
  page?: number;
  perPage?: number;
  search?: string;
  country?: string;
  status?: string;
  type?: string;
  expiryDate?: string;
  enabled?: boolean;
}


export default function useDashboardAdminBookingsData(
  filters: BookingFilters = {},
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const {
    page = 1,
    perPage = 10,
    search,
    country,
    status,
    type,
    expiryDate,
    enabled = true,
  } = filters;

  const safePerPage =
    typeof perPage === "number" && perPage >= 5 ? perPage : 10;

  const bookingsData = useQuery({
    queryKey: [
      "bookings",
      page,
      safePerPage,
      search,
      country,
      status,
      type,
      expiryDate,
    ],
    queryFn: () =>
      AdminBookingsService.getBookings(page, safePerPage, {
        country,
        status,
        type,
        expiryDate,
        search,
      }),
    retry: false,
    enabled: !!token && enabled,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const confirmMutation = useMutation({
    mutationFn: async (arg: number | { bookingId: number; type?: string }) => {
      const id = typeof arg === "number" ? arg : arg.bookingId;
      const type = typeof arg === "object" ? arg.type : "IDENTIFICATION";
      await AdminBookingsService.confirmBooking(id, undefined, type);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success(t("reservations.messages.approveSuccess"));
    },
    onError: (error: any) => {
      console.error("Confirm booking error:", error?.response?.data || error);
      toast.error(getApiErrorMessage(error, t, t("reservations.messages.approveFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const declineMutation = useMutation({
    mutationFn: async (arg: number | { bookingId: number; type?: string }) => {
      const id = typeof arg === "number" ? arg : arg.bookingId;
      const type = typeof arg === "object" ? arg.type : "IDENTIFICATION";
      await AdminBookingsService.declineBooking(id, undefined, type);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success(t("reservations.messages.declineSuccess"));
    },
    onError: (error: any) => {
      console.error("Decline booking error:", error?.response?.data || error);
      toast.error(getApiErrorMessage(error, t, t("reservations.messages.declineFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const { itemsArray, totalItems, currentPage, lastPage, perPage: responsePerPage } = useMemo(() => {
    return unpackReservationsResponse(bookingsData.data, safePerPage, page);
  }, [bookingsData.data, safePerPage, page]);

  const paginatedBookings = useMemo(() => itemsArray.map(mapReservation), [itemsArray]);

  return {
    bookingsData,
    bookings: paginatedBookings,
    totalBookings: totalItems,
    currentPage,
    lastPage,
    perPage: responsePerPage >= 5 ? responsePerPage : safePerPage,
    handleConfirm: confirmMutation.mutate,
    handleDecline: declineMutation.mutate,
    isConfirming: confirmMutation.isPending,
    isDeclining: declineMutation.isPending,
  };
}
