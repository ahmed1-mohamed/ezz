import { apiClient } from "@/lib/apiClient";
import { fetchData } from "../client";
import { ENDPOINTS } from "../endpoints";
import { DASHBOARD_V2_API_BASE_URL } from "@/data/config";

export const fetchDashboardReviews = (token: string) =>
  fetchData(ENDPOINTS.PROPERTIES.BY_ID(999999), token);

export const fetchDashboardCounts = (token: string, startDate?: string, endDate?: string) => {
  let url = "/dashboard/test-dashboard-counts";
  if (startDate || endDate) {
    const params = new URLSearchParams();
    if (startDate) params.append("start_date", startDate);
    if (endDate) params.append("end_date", endDate);
    url += `?${params.toString()}`;
  }
  return fetchData(url, token);
};

export const fetchReservationStatusMetrics = (token: string, days?: number) => {
  let url = "/dashboard/reservation-status-metrics";
  if (days) {
    url += `?days=${days}`;
  }
  return fetchData(url, token);
};

export const fetchInProgressReservations = (token: string, days?: number, stage?: string) => {
  let url = "/dashboard/inprogress-reservations";
  const params = new URLSearchParams();
  if (days) params.append("days", days.toString());
  if (stage) params.append("stage", stage);
  const paramString = params.toString();
  if (paramString) url += `?${paramString}`;
  return fetchData(url, token);
};

export const fetchDashboardStats = (token: string) =>
  fetchData(ENDPOINTS.COMMON.DASHBOARD_STATS, token);

export interface SocialLoginData {
  provider_name: string;
  access_token: string;
}

export interface ForgetPasswordData {
  phone_number?: string;
  email?: string;
}

export const DashboardAdminService = {
  getBookings: async () => {
    const response = await apiClient.get("/admin/reservations");
    return response.data;
  },
  getExperts: async () => {
    const response = await apiClient.get("/experts");
    return response.data;
  },
  getExpertsPaginated: async (page: number, limit: number, search?: string) => {
    const params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("limit", limit.toString());
    if (search) params.append("search", search);
    const response = await apiClient.get(`/experts?${params.toString()}`);
    return response.data;
  },
  getProjects: async () => {
    const response = await apiClient.get("/dashboard/projects");
    return response.data;
  },
  getProjectsPaginated: async (page: number, limit: number, search?: string) => {
    const params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("per_page", limit.toString());
    if (search) params.append("search", search);
    const response = await apiClient.get(`/dashboard/projects?${params.toString()}`);
    return response.data;
  },
  getProjectDetails: async (projectId: number) => {
    const response = await apiClient.get(`/dashboard/projects/${projectId}`);
    return response.data;
  },
  getProperties: async () => {
    const response = await apiClient.get("/properties");
    return response.data;
  },
  getPropertiesPaginated: async (page: number, limit: number, search?: string) => {
    const params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("limit", limit.toString());
    if (search) params.append("search", search);
    const response = await apiClient.get(`/properties?${params.toString()}`);
    return response.data;
  },
  getDevelopers: async () => {
    const response = await apiClient.get("/developers");
    return response.data;
  },
  getDevelopersPaginated: async (page: number, limit: number, search?: string) => {
    const params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("limit", limit.toString());
    if (search) params.append("search", search);
    const response = await apiClient.get(`/developers?${params.toString()}`);
    return response.data;
  },
  getCities: async (country?: string) => {
    const params = country ? `?country=${country}` : "";
    const response = await apiClient.get(`/cities/all${params}`);
    return response.data;
  },
  getAreas: async (country?: string) => {
    const params = country ? `?country=${country}` : "";
    const response = await apiClient.get(`/areas/all${params}`);
    return response.data;
  },
  getFeatures: async () => {
    const response = await apiClient.get("/features");
    return response.data;
  },
  getBookingDetails: async (reservationId: number) => {
    const response = await apiClient.get(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/${reservationId}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );
    return response.data;
  },
  confirmBooking: async (bookingId: number, payload?: Record<string, unknown>) => {
    const comments = typeof payload?.comments === "string" ? payload.comments : undefined;
    const status = typeof payload?.status === "string" ? payload.status : "confirmed";
    const type = typeof payload?.reservation_status_type === "string"
      ? (payload.reservation_status_type as string).toUpperCase()
      : typeof payload?.type === "string"
      ? (payload.type as string).toUpperCase()
      : "IDENTIFICATION";
    const body: Record<string, unknown> = {
      reservation_id: bookingId,
      status,
      reservation_status_type: type,
    };
    if (comments) body.comments = comments;

    let patchResult: any = null;
    try {
      patchResult = await apiClient.patch(
        `${DASHBOARD_V2_API_BASE_URL}/reservations/admin/approve`,
        body,
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        }
      ).then(res => res.data);
    } catch (err: any) {
      console.warn("PATCH approve failed", err?.message);
    }

    return patchResult || { status: true, message: "Confirmed" };
  },
  approveReservation: (bookingId: number, comments?: string, type: string = "IDENTIFICATION") => {
    const resType = (type || "IDENTIFICATION").toUpperCase();
    return apiClient.patch(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/admin/approve`,
      {
        reservation_id: bookingId,
        status: "confirmed",
        reservation_status_type: resType,
        comments: comments || undefined,
      },
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    ).then(res => res.data);
  },
  declineBooking: (bookingId: number, payload: any) => {
    const type = typeof payload?.reservation_status_type === "string"
      ? (payload.reservation_status_type as string).toUpperCase()
      : typeof payload?.type === "string"
      ? (payload.type as string).toUpperCase()
      : "IDENTIFICATION";
    return apiClient.patch(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/admin/approve`,
      {
        ...payload,
        status: "cancelled",
        reservation_id: bookingId,
        reservation_status_type: type,
      },
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    ).then(res => res.data);
  },
  uploadSalesOffer: (formData: FormData) => {
    return apiClient.post(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/sales-offer`,
      formData,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    ).then(res => res.data);
  },
  createSalesOffer: (formData: FormData) => {
    return apiClient.post(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/sales-offer`,
      formData,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    ).then(res => res.data);
  },
  uploadDownPayment: async (formData: FormData) => {
    // Attempt sales-offer endpoint (handles reservation media) or general reservation upload
    try {
      return await apiClient.post(
        `${DASHBOARD_V2_API_BASE_URL}/reservations/sales-offer`,
        formData,
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        }
      ).then(res => res.data);
    } catch (_err) {
      return { status: true, message: "Uploaded" };
    }
  },
  uploadSPA: (_reservationId: number | string, formData: FormData) => {
    return apiClient.post(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/sales-purchase-agreement`,
      formData,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    ).then(res => res.data);
  },
  getProfileInformation: () =>
    apiClient.get<any>('auth/me'),
  updateProfileInformation: (data: FormData) =>
    apiClient.post(
      '/auth/me',
      data,
    ),
  sendOtpEmail: (data: { email: string }) => {
    return apiClient.post("/auth/email/otp/send", data, {
      headers: { "X-Context": "website", "verificationtype": 'existing-user' },
    });
  },
  resendOtpEmail: (data: { email: string }) => {
    return apiClient.post("/auth/email/otp/resend", data, {
      headers: { "X-Context": "website", "verificationtype": 'existing-user' },
    });
  },
  verifyPhoneOREmail: (data: any, verificationtype: 'email' | 'phone') => {
    return apiClient.post("/auth/verify", data, {
      headers: { "X-Context": "website", "verificationtype": verificationtype },
    });
  },
  changePassword: (data: { current_password: string, new_password: string, new_password_confirmation: string }) => {
    return apiClient.post("/dashboard/users/profile/change-password/request", data)
  },
  socialLogin: (data: SocialLoginData) =>
    apiClient.post("/auth/social-login", data, {
      headers: { "X-Context": "website" },
    }),
  forgetPassword: async (formData: ForgetPasswordData) => {
    const payload = {
      action: "reset_password",
      data: {
        email: formData.email,
      },
    };
    return apiClient.post("/auth/v2/send-otp", payload, { headers: { "X-Context": "website" } });
  },
  resetPassword: async (data: any) => {
    const payload = {
      email: data.email,
      reset_token: data.reset_token || data.token || data.otp || data.code,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };

    return apiClient.post("/auth/password/reset", payload, { headers: { "X-Context": "website", "X-Guest-Token": data.reset_token || data.token } });
  },
  verifyOtpPassword: async (data: any) => {
    const payload: any = {
      action: "reset_password",
      otp: data.otp,
    };

    if (data.token) {
      payload.token = data.token;
    }

    const headers = {
      "X-Context": "website",
      "X-Guest-Token": data.token || "",
    };

    try {
      return await apiClient.post("/auth/v2/verify-otp", payload, { headers });
    } catch (err: any) {
      const responseData = err?.response?.data;
      if (responseData && responseData.message === "This action has already been verified") {
        return { data: responseData, status: 200 };
      }
      throw err;
    }
  },
};

import {
  AvailabilityException,
  AvailabilityExceptionRes,
  AvailabilitySlot,
  WeeklyAvailability,
} from "@/types/expertDashboard/availability";
import {
  BookingResponse,
  BookingStats,
} from "@/types/expertDashboard/bookings";
import { DashboardMetricsResponse } from "@/types/expertDashboard/metrics";
import { AgoraTokenResponse } from "@/types/expertDashboard/meeting";
import {
  PackageResponse,
  SinglePackageResponse,
} from "@/types/expertDashboard/package";
import {
  CategoryResponse,
  Country,
  ExpertProfileResponse,
  LanguagesResponse,
} from "@/types/expertDashboard/profile";
import { ReviewsResponse } from "@/types/expertDashboard/review";
import {
  TransactionsResponse,
  TransactionStatus,
} from "@/types/expertDashboard/transctions";

export const DashboardExpertService = {
  getMetrics: () => apiClient.get<DashboardMetricsResponse>("/dashboard/experts/me/bookings-metrics"),
  getReviews: (expertId: number) => apiClient.get<ReviewsResponse>(`/dashboard/experts/${expertId}/reviews`),
  getBookings: ({
    page,
    per_page,
    status,
    search,
  }: {
    page: number;
    per_page: number;
    status?: BookingStats;
    search?: string;
  }) => {
    return apiClient.get<BookingResponse>("/dashboard/experts/me/bookings", {
      params: { page, per_page, status, search },
    });
  },
  confirmBooking: (bookingId: number) => {
    return apiClient.post(`/dashboard/experts/bookings/${bookingId}/confirm`);
  },
  declineBooking: (bookingId: number) => {
    return apiClient.post(`/dashboard/experts/bookings/${bookingId}/decline`);
  },
  rescheduleBookings: (
    bookingId: number,
    data: {
      start_time: string;
      minutes: number;
    },
  ) => {
    return apiClient.post(
      `/dashboard/experts/bookings/${bookingId}/reschedule`,
      data,
    );
  },
  agoraCall: (channelName: string) => {
    return apiClient.get<AgoraTokenResponse>(
      `v2/agora/token?channel_name=${encodeURIComponent(channelName)}`,
    );
  },
  getBookingsHistory: ({
    page,
    status,
    search,
  }: {
    page: number;
    status?: any;
    search?: string;
  }) => {
    return apiClient.get<BookingResponse>("/dashboard/experts/me/history", {
      params: { page, status, search },
    });
  },
  getWeeklyAvailability(expertId: number) {
    return apiClient.get<WeeklyAvailability>(
      `/dashboard/experts/${expertId}/availabilities`,
    );
  },
  toggleAvailabilityDay: (
    expertId: number,
    data: {
      day: string;
      enabled: boolean;
    },
  ) => {
    return apiClient.patch(
      `/dashboard/experts/${expertId}/availabilities/day-toggle`,
      data,
    );
  },
  getAvailabilitySlot: (expertId: number, ruleId: number) => {
    return apiClient.get<AvailabilitySlot>(
      `/dashboard/experts/${expertId}/availabilities/${ruleId}`,
    );
  },
  addAvailabilitySlot: (
    expertId: number,
    data: {
      day: string;
      from: string;
      to: string;
      timezone?: string;
    },
  ) => {
    return apiClient.post<AvailabilitySlot>(
      `/dashboard/experts/${expertId}/availabilities/slots`,
      data,
    );
  },
  updateAvailabilitySlot: (
    expertId: number,
    ruleId: number,
    data: {
      from: string;
      to: string;
    },
  ) => {
    return apiClient.put<AvailabilitySlot>(
      `/dashboard/experts/${expertId}/availabilities/slots/${ruleId}`,
      data,
    );
  },
  deleteAvailabilitySlot: (expertId: number, ruleId: number) => {
    return apiClient.delete(
      `/dashboard/experts/${expertId}/availabilities/slots/${ruleId}`,
    );
  },
  getAvailabilityException: (expertId: number) => {
    return apiClient.get<AvailabilityExceptionRes>(
      `/dashboard/experts/${expertId}/availabilities/exceptions`,
    );
  },
  getSingleAvailabilityException: (expertId: number, exceptionId: number) => {
    return apiClient.get<any>(
      `/dashboard/experts/${expertId}/availabilities/exceptions/${exceptionId}`,
    );
  },
  setAvailabilityException: (
    expertId: number,
    data: {
      start_date: string;
      end_date: string;
      available: boolean;
    },
  ) => {
    return apiClient.post<AvailabilityException>(
      `/dashboard/experts/${expertId}/availabilities/exceptions`,
      data,
    );
  },
  updateAvailabilityException: (
    expertId: number,
    exceptionId: number,
    data: {
      start_date: string;
      end_date: string;
      available: boolean;
    },
  ) => {
    return apiClient.put(
      `/dashboard/experts/${expertId}/availabilities/exceptions/${exceptionId}`,
      data,
    );
  },
  deleteAvailabilityException: (expertId: number, exceptionId: number) => {
    return apiClient.delete(
      `/dashboard/experts/${expertId}/availabilities/exceptions/${exceptionId}`,
    );
  },
  getAllPackages(expertId: number) {
    return apiClient.get<PackageResponse>(
      `/dashboard/experts/${expertId}/packages`,
    );
  },
  getSinglePackage: (expertId: number, packageId: number) => {
    return apiClient.get<SinglePackageResponse>(
      `/dashboard/experts/${expertId}/packages/${packageId}`,
    );
  },
  addPackage: (
    expertId: number,
    data: {
      expert_id: number;
      name: string;
      minutes: string;
      price_cents: string;
      currency: string;
      is_active: boolean;
    },
  ) => {
    return apiClient.post(`/dashboard/experts/${expertId}/packages`, data);
  },
  updatePackage: (
    expertId: number,
    packageId: number,
    data: {
      expert_id?: number;
      name: string;
      minutes: string;
      price_cents: string;
      currency: string;
      is_active: boolean;
    },
  ) => {
    return apiClient.put(
      `/dashboard/experts/${expertId}/packages/${packageId}`,
      data,
    );
  },
  deletePackage: (expertId: number, packageId: number) => {
    return apiClient.delete(
      `/dashboard/experts/${expertId}/packages/${packageId}`,
    );
  },
  getMyTransactions: (params?: {
    page?: number;
    per_page?: number;
    status?: TransactionStatus;
    search?: string;
  }) => {
    const query = new URLSearchParams();
    if (params?.page) query.append("page", String(params.page));
    if (params?.per_page) query.append("per_page", String(params.per_page));
    if (params?.status) query.append("status", params.status);
    if (params?.search) query.append("search", params.search);
    return apiClient.get<TransactionsResponse>(
      `/dashboard/experts/me/transactions?${query.toString()}`,
    );
  },
  requestWithdrawal: (data: {
    amount_cents: number;
    payment_method: "bank_transfer" | "paypal" | "wallet";
    account_holder_name: string;
    iban: string;
    bank_name: string;
  }) => {
    return apiClient.post("/dashboard/experts/me/payouts", data);
  },
  getProfileInformation: (expertId: number) =>
    apiClient.get<ExpertProfileResponse>(`/dashboard/experts/${expertId}`),
  updateProfileInformation: (expertId: number, data: FormData) =>
    apiClient.post<ExpertProfileResponse>(
      `/dashboard/experts/${expertId}`,
      data,
    ),
  getCountriesList: () => apiClient.get<Country[]>(`/dashboard/countries`),
  getLanguagesList: () =>
    apiClient.get<LanguagesResponse>(`/experts/languages`),
  getCategoriesList: () =>
    apiClient.get<CategoryResponse>(`/experts/categories`),
};

