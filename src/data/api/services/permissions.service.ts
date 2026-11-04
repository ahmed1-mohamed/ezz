import { apiClient } from "@/lib/apiClient";
import { fetchData, postData, editData, deleteData } from "../client";
import { ENDPOINTS } from "../endpoints";

export interface PermissionItem {
  permission_id: number;
  permission_name: string;
  group: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreatePermissionInput {
  permission_name: string;
  group: string;
  description?: string;
  [key: string]: unknown;
}

export interface UpdatePermissionInput {
  permission_name?: string;
  group?: string;
  description?: string;
  [key: string]: unknown;
}

/**
 * AdminPermissionsService provides client-ready methods using apiClient
 * baseURL is already https://demoapi.p-adviser.com/api
 */
export const AdminPermissionsService = {
  // GET /api/dashboard/permissions
  getPermissions: (params?: Record<string, unknown>) => {
    return apiClient.get("/dashboard/permissions", { params });
  },

  // POST /api/dashboard/permissions
  createPermission: (data: CreatePermissionInput | Record<string, unknown>) => {
    return apiClient.post("/dashboard/permissions", data);
  },

  // GET /api/dashboard/permissions/:permission
  getPermission: (permissionId: number | string) => {
    return apiClient.get(`/dashboard/permissions/${permissionId}`);
  },

  // PUT {{base_url}}/api/dashboard/permissions/:permission
  // Using POST with _method: "PUT" (standard Laravel/REST convention) or direct PUT
  updatePermission: (
    permissionId: number | string,
    data: UpdatePermissionInput | Record<string, unknown>
  ) => {
    return apiClient.post(`/dashboard/permissions/${permissionId}`, {
      ...data,
      _method: "PUT",
    });
  },

  // Direct PUT /api/dashboard/permissions/:permission
  putPermission: (
    permissionId: number | string,
    data: UpdatePermissionInput | Record<string, unknown>
  ) => {
    return apiClient.put(`/dashboard/permissions/${permissionId}`, data);
  },

  // DELETE /api/dashboard/permissions/:permission
  deletePermission: (permissionId: number | string) => {
    return apiClient.delete(`/dashboard/permissions/${permissionId}`);
  },
};

// Legacy token-based functions for compatibility
export const fetchAllPermissions = (token: string) =>
  fetchData(ENDPOINTS.PERMISSIONS.BASE, token);

export const fetchPermissionDetail = (permissionId: number | string, token: string) =>
  fetchData(ENDPOINTS.PERMISSIONS.DETAIL(permissionId), token);

export const createNewPermission = (data: CreatePermissionInput, token: string) =>
  postData(ENDPOINTS.PERMISSIONS.BASE, data, token);

export const updateExistingPermission = (
  permissionId: number | string,
  data: UpdatePermissionInput,
  token: string
) => editData(ENDPOINTS.PERMISSIONS.DETAIL(permissionId), data, token);

export const deleteExistingPermission = (permissionId: number | string, token: string) =>
  deleteData(ENDPOINTS.PERMISSIONS.DETAIL(permissionId), token);
