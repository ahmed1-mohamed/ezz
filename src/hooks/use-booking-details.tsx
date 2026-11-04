"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DashboardAdminService } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";

import { normalizeBookingDetails } from "./useBookingDetails/normalize";
import { useBookingMutations } from "./useBookingDetails/useBookingMutations";
import { useBookingStages } from "./useBookingDetails/useBookingStages";
import {
  UseBookingDetailsParams,
  UseBookingDetailsReturn,
  BookingDetailsResponse,
} from "./useBookingDetails/types";

export default function useBookingDetails({
  reservationId,
}: UseBookingDetailsParams): UseBookingDetailsReturn {
  const queryClient = useQueryClient();
  const { t } = useLanguage();
  const router = useRouter();

  const {
    data: bookingData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<BookingDetailsResponse>({
    queryKey: ["reservation", reservationId],
    queryFn: async () => {
      const res: any =
        await DashboardAdminService.getBookingDetails(reservationId);

      return normalizeBookingDetails(res);
    },
    enabled: !!reservationId,
    retry: false,
  });

  const mutations = useBookingMutations(reservationId, t, router, queryClient);
  const stagesProps = useBookingStages(bookingData, reservationId, t);

  return {
    bookingData,
    reservationData: bookingData,
    isLoading,
    isError,
    error,
    refetch,

    approveMutation: mutations.approveMutation,
    mutationApprove: mutations.approveMutation,

    declineMutation: mutations.declineMutation,
    mutationDecline: mutations.declineMutation,

    uploadSalesOfferMutation: mutations.uploadSalesOfferMutation,
    mutationSalesOffer: mutations.uploadSalesOfferMutation,

    uploadSPAMutation: mutations.uploadSPAMutation,
    mutationSPA: mutations.uploadSPAMutation,

    approveDownPaymentMutation: mutations.approveDownPaymentMutation,
    mutationDownPayment: mutations.approveDownPaymentMutation,

    uploadDownPaymentMutation: mutations.uploadDownPaymentMutation,
    mutationUploadDownPayment: mutations.uploadDownPaymentMutation,

    acceptSalesOfferMutation: mutations.acceptSalesOfferMutation,
    mutationAcceptSalesOffer: mutations.acceptSalesOfferMutation,

    formatPrice: stagesProps.formatPrice,
    stages: stagesProps.stages,
    getStatusIcon: stagesProps.getStatusIcon,
    getStatusBadge: stagesProps.getStatusBadge,

    isApproving: mutations.approveMutation.isPending,
    isRejecting: mutations.declineMutation.isPending,
    isSalesOfferUploading: mutations.uploadSalesOfferMutation.isPending,
    isDownPaymentApproving: mutations.approveDownPaymentMutation.isPending,
    isSPAUploading: mutations.uploadSPAMutation.isPending,
    isDownPaymentUploading: mutations.uploadDownPaymentMutation.isPending,
  };
}