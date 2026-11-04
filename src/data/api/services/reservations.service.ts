import { apiClient } from "@/lib/apiClient";
import {
  fetchData,
  fetchDataReserve,
  fetchDataReserveUnit,
  postData,
  editData,
} from "../client";
import { ENDPOINTS } from "../endpoints";
import { ReservationsApiResponse } from "@/features/reservations/types";
import { DASHBOARD_V2_API_BASE_URL } from "@/data/config";



export const fetchReservations = (token: string) => fetchDataReserve(token);

export const fetchReservationDetails = (token: string, reservationId: number) =>
  fetchDataReserveUnit(token, reservationId);

export const confirmBooking = (
  bookingId: number,
  token: string,
  comments?: string,
) => {
  const formData = new FormData();
  formData.append("reservation_id", String(bookingId));
  formData.append("status", "confirmed");
  if (comments) formData.append("comments", comments);
  return postData(
    `/approve-reservation`,
    formData,
    token,
  );
};

export const declineBooking = (
  bookingId: number,
  token: string,
  comments?: string,
) => {
  const formData = new FormData();
  formData.append("reservation_id", String(bookingId));
  formData.append("status", "cancelled");
  if (comments) formData.append("comments", comments);
  return postData(
    `/approve-reservation`,
    formData,
    token,
  );
};

export const fetchBookings = (token: string) =>
  fetchData(ENDPOINTS.PROJECTS.RAW_DETAIL(99999), token);

export const confirmMeetingRequest = (id: number | string, token: string) =>
  editData(`/meeting-requests/${id}`, { status: "active" }, token);

export const cancelMeetingRequest = (id: number | string, token: string) =>
  editData(`/meeting-requests/${id}`, { status: "cancelled" }, token);

export const AdminBookingsService = {
  getBookings: async (
    page: number = 1,
    perPage: number = 10,
    filters?: {
      country?: string;
      status?: string;
      type?: string;
      expiryDate?: string;
      search?: string;
    },
  ): Promise<ReservationsApiResponse> => {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    });

    if (filters?.country && filters.country !== "all") {
      params.append("country", filters.country);
    }
    if (filters?.status && filters.status !== "all") {
      params.append("status", filters.status);
    }
    if (filters?.type && filters.type !== "all") {
      params.append("type", filters.type.trim().toUpperCase());
    }
    if (filters?.expiryDate && filters.expiryDate !== "all") {
      params.append("expiry_date", filters.expiryDate);
    }
    if (filters?.search && filters.search.trim() !== "") {
      const rawSearch = filters.search.trim();
      const cleanSearch = /^bk-0*(\d+)$/i.test(rawSearch)
        ? rawSearch.replace(/^bk-0*/i, "")
        : rawSearch;
      params.append("search", cleanSearch);
    }

    const RESERVATIONS_URL = `${DASHBOARD_V2_API_BASE_URL}/reservations`;

    const queryString = params.toString();
    const fullUrl = queryString ? `${RESERVATIONS_URL}?${queryString}` : RESERVATIONS_URL;

    const response = await apiClient.get<ReservationsApiResponse>(
      fullUrl,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );
    return response.data;
  },

  getBookingDetails: (bookingId: number) => {
    return apiClient.get(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/${bookingId}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    ).then((res) => res.data);
  },

  confirmBooking: (bookingId: number, comments?: string, type: string = "IDENTIFICATION") => {
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
    ).then((res) => res.data);
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
    ).then((res) => res.data);
  },

  declineBooking: (bookingId: number, comments?: string, type: string = "IDENTIFICATION") => {
    const resType = (type || "IDENTIFICATION").toUpperCase();
    return apiClient.patch(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/admin/approve`,
      {
        reservation_id: bookingId,
        status: "cancelled",
        reservation_status_type: resType,
        comments: comments || undefined,
      },
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    ).then((res) => res.data);
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
    ).then((res) => res.data);
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
    ).then((res) => res.data);
  },

  uploadSPA: (reservationId: number | string, formData: FormData) => {
    return apiClient.post(
      `${DASHBOARD_V2_API_BASE_URL}/reservations/${reservationId}/sales-purchase-agreement`,
      formData,
      {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      }
    ).then((res) => res.data);
  },
};

