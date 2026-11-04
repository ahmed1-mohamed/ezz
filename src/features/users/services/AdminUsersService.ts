import { apiClient } from "@/lib/apiClient";
import { GetUserDataType } from "@/types";

export const AdminUsersService = {

  getUsers: (
    page: number = 1,
    perPage: number = 15,
    search?: string,
    status?: string,
    user_type?: string,
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    });
    if (search && search.trim() !== "") {
      params.append("search", search.trim());
    }
    if (status && status !== "all") {
      params.append("status", status.toLowerCase());
    }
    if (user_type && user_type !== "all") {
      params.append("user_type", user_type);
    }
    return apiClient.get<{ data: GetUserDataType[]; total: number }>(
      `/dashboard/users?${params.toString()}`,
    );
  },

  getUser: (userId: number) => {
    return apiClient.get<GetUserDataType>(`/dashboard/users/${userId}`);
  },

  createUser: (data: any) => {
    return apiClient.post<GetUserDataType>("/dashboard/users", data);
  },

  updateUser: (userId: number, data: Record<string, unknown>) => {
    return apiClient
      .put<GetUserDataType>(`/dashboard/users/${userId}`, data)
      .then((res) => res.data);
  },

  deleteUser: (userId: number) => {
    return apiClient.delete(`/dashboard/users/${userId}`);
  },
};
