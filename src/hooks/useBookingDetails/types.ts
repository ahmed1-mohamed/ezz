import { UseMutationResult } from "@tanstack/react-query";
import { ApiResponse } from "@/lib/apiClient";
import React from "react";

export interface UseBookingDetailsParams {
  reservationId: number;
}

export interface BookingDetailsResponse {
  reservation: any;
  media: any;
  user: any;
  paymentPlan: any;
  country: any;
  property: any;
  [key: string]: any;
}

export interface UseBookingDetailsReturn {
  bookingData: BookingDetailsResponse | undefined;
  reservationData?: BookingDetailsResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  refetch: () => void;

  approveMutation: UseMutationResult<any, unknown, any>;
  mutationApprove?: any;

  declineMutation: UseMutationResult<any, unknown, any>;
  mutationDecline?: any;

  uploadSalesOfferMutation: UseMutationResult<ApiResponse<unknown>, unknown, any>;
  mutationSalesOffer?: any;

  uploadSPAMutation: UseMutationResult<ApiResponse<unknown>, unknown, any>;
  mutationSPA?: any;

  approveDownPaymentMutation: UseMutationResult<any, unknown, any>;
  mutationDownPayment?: any;

  uploadDownPaymentMutation?: any;
  mutationUploadDownPayment?: any;

  acceptSalesOfferMutation?: any;
  mutationAcceptSalesOffer?: any;

  formatPrice: (price: string, currency?: string) => string;
  stages: any[];
  getStatusIcon: (status: string) => React.ReactNode;
  getStatusBadge: (status: string) => React.ReactNode;
  
  isApproving: boolean;
  isRejecting: boolean;
  isSalesOfferUploading: boolean;
  isDownPaymentApproving: boolean;
  isSPAUploading: boolean;
  isDownPaymentUploading?: boolean;
}
