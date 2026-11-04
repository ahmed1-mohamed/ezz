import { apiClient } from "@/data/api-client";
import { Lead, LeadsFilterParams, LeadsResponse } from "../types";
import { MOCK_LEADS } from "../data/mock-leads";

export const LeadsService = {
  getLeads: async (params: LeadsFilterParams = {}): Promise<LeadsResponse> => {
    try {
      const response = await apiClient.get("/dashboard/leads", { params });
      const rawData = response.data;
      if (rawData && (Array.isArray(rawData.data) || Array.isArray(rawData))) {
        const items = Array.isArray(rawData.data) ? rawData.data : rawData;
        return {
          data: items,
          total: rawData.total ?? items.length,
          page: rawData.current_page ?? params.page ?? 1,
          per_page: rawData.per_page ?? params.per_page ?? 12,
          total_pages: rawData.last_page ?? Math.ceil(items.length / (params.per_page ?? 12)),
        };
      }
    } catch (error) {
      console.warn("Leads API unavailable, using mock data fallback:", error);
    }

    let filtered = [...MOCK_LEADS];

    if (params.search && params.search.trim()) {
      const q = params.search.toLowerCase().trim();
      filtered = filtered.filter(
        (l) =>
          l.code.toLowerCase().includes(q) ||
          l.customer_name.toLowerCase().includes(q) ||
          l.phone.toLowerCase().includes(q) ||
          (l.email && l.email.toLowerCase().includes(q)) ||
          (l.project_name && l.project_name.toLowerCase().includes(q))
      );
    }

    if (params.status && params.status !== "all") {
      filtered = filtered.filter(
        (l) => l.status.toLowerCase() === params.status?.toLowerCase()
      );
    }

    const page = params.page ?? 1;
    const perPage = params.per_page ?? 12;
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

  getLeadById: async (id: string | number): Promise<Lead> => {
    try {
      const response = await apiClient.get(`/dashboard/leads/${id}`);
      return response.data?.data || response.data;
    } catch (error) {
      const found = MOCK_LEADS.find((l) => String(l.id) === String(id));
      if (found) return found;
      throw error;
    }
  },

  createLead: async (leadData: Partial<Lead>): Promise<Lead> => {
    const response = await apiClient.post("/dashboard/leads", leadData);
    return response.data?.data || response.data;
  },

  updateLead: async (id: string | number, leadData: Partial<Lead>): Promise<Lead> => {
    const response = await apiClient.put(`/dashboard/leads/${id}`, leadData);
    return response.data?.data || response.data;
  },

  deleteLead: async (id: string | number): Promise<void> => {
    await apiClient.delete(`/dashboard/leads/${id}`);
  },
};