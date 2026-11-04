import { apiClient } from "@/data/api-client";
import { TargetsCommissionMonthData, SaveTargetsPayload } from "../types";
import { MOCK_TARGETS_DATA } from "../data/mock-targets";

export const TargetsCommissionService = {
  getTargetsForMonth: async (
    month: string = "2026-08"
  ): Promise<TargetsCommissionMonthData> => {
    try {
      const response = await apiClient.get("/dashboard/targets-commission", {
        params: { month },
      });
      const rawData = response.data;
      if (rawData && (rawData.reps || rawData.data || rawData.default_target)) {
        const payload = rawData.data || rawData;
        return {
          month: payload.month || month,
          month_label: payload.month_label || "August 2026",
          currency: payload.currency || "EGP",
          default_target: payload.default_target || MOCK_TARGETS_DATA.default_target,
          reps: payload.reps || MOCK_TARGETS_DATA.reps,
          total_target: payload.total_target ?? 0,
          total_achieved: payload.total_achieved ?? 0,
          total_commission: payload.total_commission ?? 0,
        };
      }
    } catch (error) {
      console.warn("Targets & Commission API unavailable, using mock fallback:", error);
    }

    return {
      ...MOCK_TARGETS_DATA,
      month,
    };
  },

  saveTargetsForMonth: async (payload: SaveTargetsPayload): Promise<void> => {
    await apiClient.post("/dashboard/targets-commission", payload);
  },
};
