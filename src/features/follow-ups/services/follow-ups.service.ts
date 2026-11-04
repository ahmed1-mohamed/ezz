import { apiClient } from "@/data/api-client";
import { FollowUp, FollowUpsResponse } from "../types";
import { MOCK_FOLLOW_UPS } from "../data/mock-follow-ups";

export const FollowUpsService = {
  getFollowUps: async (): Promise<FollowUpsResponse> => {
    try {
      const response = await apiClient.get("/dashboard/follow-ups");
      const rawData = response.data;
      if (rawData && (Array.isArray(rawData.data) || Array.isArray(rawData))) {
        const items: FollowUp[] = Array.isArray(rawData.data) ? rawData.data : rawData;
        const overdue = items.filter((i) => i.status === "overdue").length;
        const today = items.filter((i) => i.status === "today").length;
        const upcoming = items.filter((i) => i.status === "upcoming").length;
        return {
          data: items,
          overdue_count: overdue,
          today_count: today,
          upcoming_count: upcoming,
        };
      }
    } catch (error) {
      console.warn("Follow-ups API unavailable, using mock data fallback:", error);
    }

    const overdue = MOCK_FOLLOW_UPS.filter((i) => i.status === "overdue").length;
    const today = MOCK_FOLLOW_UPS.filter((i) => i.status === "today").length;
    const upcoming = MOCK_FOLLOW_UPS.filter((i) => i.status === "upcoming").length;

    return {
      data: MOCK_FOLLOW_UPS,
      overdue_count: overdue,
      today_count: today,
      upcoming_count: upcoming,
    };
  },

  markAsDone: async (id: string | number): Promise<void> => {
    try {
      await apiClient.post(`/dashboard/follow-ups/${id}/done`);
    } catch (error) {
      console.warn("API mark as done fallback:", error);
    }
  },

  createFollowUp: async (data: Partial<FollowUp>): Promise<FollowUp> => {
    const response = await apiClient.post("/dashboard/follow-ups", data);
    return response.data?.data || response.data;
  },
};