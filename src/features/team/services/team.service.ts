import { apiClient } from "@/data/api-client";
import { TeamResponse, Representative } from "../types";
import { MOCK_TEAM_DATA } from "../data/mock-team";

export const TeamService = {
  getTeamPerformance: async (): Promise<TeamResponse> => {
    try {
      const response = await apiClient.get("/dashboard/team/performance");
      const rawData = response.data;
      if (rawData && (rawData.overview || rawData.representatives || rawData.data)) {
        const payload = rawData.data || rawData;
        return {
          overview: payload.overview || {
            leads: payload.total_leads ?? 0,
            won: payload.total_won ?? 0,
            contracts: payload.total_contracts ?? 0,
            revenue: payload.total_revenue ?? 0,
            currency: payload.currency || "EGP",
          },
          representatives: payload.representatives || (Array.isArray(payload) ? payload : []),
        };
      }
    } catch (error) {
      console.warn("Team Performance API unavailable, using mock data fallback:", error);
    }

    return MOCK_TEAM_DATA;
  },

  getRepresentatives: async (): Promise<Representative[]> => {
    try {
      const response = await apiClient.get("/dashboard/team/representatives");
      const rawData = response.data;
      if (rawData && (Array.isArray(rawData.data) || Array.isArray(rawData))) {
        return Array.isArray(rawData.data) ? rawData.data : rawData;
      }
    } catch (error) {
      console.warn("Team representatives API unavailable, using mock data fallback:", error);
    }

    return MOCK_TEAM_DATA.representatives;
  },

  setRepresentativeTarget: async (
    repId: string | number,
    targetAmount: number
  ): Promise<void> => {
    await apiClient.post(`/dashboard/team/representatives/${repId}/target`, {
      target_amount: targetAmount,
    });
  },
};
