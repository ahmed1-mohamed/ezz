import { apiClient } from "@/data/api-client";
import { Contract, ContractsFilterParams, ContractsResponse } from "../types";
import { MOCK_CONTRACTS } from "../data/mock-contracts";

export const ContractsService = {
  getContracts: async (params: ContractsFilterParams = {}): Promise<ContractsResponse> => {
    try {
      const response = await apiClient.get("/dashboard/contracts", { params });
      const rawData = response.data;
      if (rawData && (Array.isArray(rawData.data) || Array.isArray(rawData))) {
        const items = Array.isArray(rawData.data) ? rawData.data : rawData;
        return {
          data: items,
          total: rawData.total ?? items.length,
          page: rawData.current_page ?? params.page ?? 1,
          per_page: rawData.per_page ?? params.per_page ?? 10,
          total_pages: rawData.last_page ?? Math.ceil(items.length / (params.per_page ?? 10)),
        };
      }
    } catch (error) {
      console.warn("Contracts API unavailable, using mock data fallback:", error);
    }

    let filtered = [...MOCK_CONTRACTS];

    if (params.search && params.search.trim()) {
      const q = params.search.toLowerCase().trim();
      filtered = filtered.filter(
        (item) =>
          item.code.toLowerCase().includes(q) ||
          item.customer_name.toLowerCase().includes(q) ||
          item.unit.toLowerCase().includes(q) ||
          (item.project_name && item.project_name.toLowerCase().includes(q))
      );
    }

    if (params.status && params.status !== "all") {
      filtered = filtered.filter(
        (item) => item.status.toLowerCase() === params.status?.toLowerCase()
      );
    }

    const page = params.page ?? 1;
    const perPage = params.per_page ?? 10;
    const total = filtered.length;
    const totalPages = Math.ceil(total / perPage) || 1;
    const startIndex = (page - 1) * perPage;
    const paginatedData = filtered.slice(startIndex, startIndex + perPage);

    return {
      data: paginatedData,
      total,
      page,
      per_page: perPage,
      total_pages: totalPages,
    };
  },

  createContract: async (data: Partial<Contract>): Promise<Contract> => {
    const response = await apiClient.post("/dashboard/contracts", data);
    return response.data?.data || response.data;
  },

  deleteContract: async (id: string | number): Promise<void> => {
    await apiClient.delete(`/dashboard/contracts/${id}`);
  },
};
