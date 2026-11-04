import { apiClient } from "@/data/api-client";
import { PerformanceReportsResponse } from "../types";
import { MOCK_REPORTS_DATA } from "../data/mock-reports";

export const ReportsService = {
  getPerformanceReports: async (): Promise<PerformanceReportsResponse> => {
    try {
      const response = await apiClient.get("/dashboard/reports/performance");
      const rawData = response.data;
      if (rawData && (rawData.stats || rawData.stages || rawData.data)) {
        const payload = rawData.data || rawData;
        return {
          stats: payload.stats || {
            total_leads: payload.total_leads ?? 0,
            won_deals: payload.won_deals ?? 0,
            conversion_rate: payload.conversion_rate ?? 0,
            reservations: payload.reservations ?? 0,
            contracts: payload.contracts ?? 0,
            revenue: payload.revenue ?? 0,
            commission: payload.commission ?? 0,
            currency: payload.currency || "EGP",
          },
          stages: payload.stages || MOCK_REPORTS_DATA.stages,
        };
      }
    } catch (error) {
      console.warn("Reports API unavailable, using mock data fallback:", error);
    }

    return MOCK_REPORTS_DATA;
  },
};
