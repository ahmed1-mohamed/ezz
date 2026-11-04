import {
  RolesDataType,
  PermissionsDataType,
} from "@/types";
import { CreateNewUserInput } from "@/validators/create-new-user.schema";
import { EditNewUserInput } from "@/validators/edit-new-user.schema";
import { CreateRolesPermissionsInput } from "@/validators/roles-permission.schema";
import {
  fetchData,
  fetchDataWithPagination,
  postData,
  editData,
  deleteData,
} from "../client";
import { ENDPOINTS } from "../endpoints";

export const fetchUsers = (
  token: string,

) => fetchDataWithPagination(ENDPOINTS.USERS.BASE, token);

export const fetchDashboardUsers = (
  token: string,
  page: number = 1,
  perPage: number = 15,
  search?: string,
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
  });
  if (search && search.trim() !== "") {
    params.append("search", search.trim());
  }
  return fetchData(`/dashboard/users?${params.toString()}`, token);
};



export const fetchPermissions = (token: string) =>
  fetchData(ENDPOINTS.USERS.PERMISSIONS, token);

export const fetchRoles = (token: string) =>
  fetchData(ENDPOINTS.USERS.ROLES, token);

export const fetchUsersDetails = (userId: number, token: string) =>
  fetchData(ENDPOINTS.USERS.DETAIL(userId), token);

export const fetchPermissionDetails = (permissionId: number, token: string) =>
  fetchData(ENDPOINTS.USERS.PERMISSION_DETAIL(permissionId), token);

export const fetchRolesDetails = (roleId: number, token: string) =>
  fetchData(ENDPOINTS.USERS.ROLE_DETAIL(roleId), token);

export const addUser = (userData: CreateNewUserInput, token: string) =>
  postData(ENDPOINTS.USERS.BASE, userData, token);

export const addPermission = (
  permissionData: PermissionsDataType,
  token: string,
) => postData(ENDPOINTS.USERS.PERMISSIONS, permissionData, token);

export const addRoles = (rolesData: RolesDataType, token: string) =>
  postData(ENDPOINTS.USERS.ROLES_RAW, rolesData, token);

export const addRolesPermission = (
  rolesPermissionsData: CreateRolesPermissionsInput,
  token: string,
) => postData(ENDPOINTS.USERS.ROLES_PERMISSIONS, rolesPermissionsData, token);

export const editUser = (
  userId: number,
  userData: EditNewUserInput,
  token: string,
) => editData(ENDPOINTS.USERS.BY_ID(userId), userData, token);

export const editPermission = (
  permissionId: number,
  permissionData: PermissionsDataType,
  token: string,
) => editData(ENDPOINTS.USERS.PERMISSION_DETAIL(permissionId), permissionData, token);

export const editRoles = (
  rolesId: number,
  rolesData: RolesDataType,
  token: string,
) => editData(ENDPOINTS.USERS.ROLE_DETAIL(rolesId), rolesData, token);

export const deleteUser = (userId: number, token: string) =>
  deleteData(ENDPOINTS.USERS.BY_ID(userId), token);

export const deletePermission = (permissionId: number, token: string) =>
  deleteData(ENDPOINTS.USERS.PERMISSION_DETAIL(permissionId), token);

export const deleteRoles = (rolesId: number, token: string) =>
  deleteData(ENDPOINTS.USERS.ROLE_DETAIL(rolesId), token);

export const deleteRolesPermissions = (
  rolesId: number,
  permissionId: number,
  token: string,
) => deleteData(ENDPOINTS.USERS.ROLE_PERMISSIONS_DELETE(rolesId, permissionId), token);

import { apiClient } from "@/lib/apiClient";

export const AdminRolesService = {
  getRoles: () => {
    return apiClient.get("/dashboard/roles");
  },
  getRole: (roleId: number) => {
    return apiClient.get(`/dashboard/roles/${roleId}`);
  },
  // Case 1: POST /api/dashboard/roles
  createRole: (data: Record<string, unknown>) => {
    return apiClient.post("/dashboard/roles", data);
  },
  // Case 2: PUT /api/dashboard/roles/:id
  updateRole: (roleId: number, data: Record<string, unknown>) => {
    return apiClient.put(`/dashboard/roles/${roleId}`, data);
  },
  deleteRole: (roleId: number) => {
    return apiClient.delete(`/dashboard/roles/${roleId}`);
  },
  // Case 3: POST /api/dashboard/roles/permissions
  addPermissions: (data: { role_id: number; permission_ids: number[] } | Record<string, unknown>) => {
    return apiClient.post("/dashboard/roles/permissions", data);
  },
  assignPermissions: async (roleId: number, permissionIds: number[]) => {
    if (!roleId || !permissionIds || permissionIds.length === 0) return;
    return apiClient.post("/dashboard/roles/permissions", {
      role_id: roleId,
      permission_ids: permissionIds,
    });
  },
  deletePermission: (roleId: number, permissionId: number) => {
    return apiClient.delete(`/dashboard/roles/${roleId}/permissions/${permissionId}`);
  },
};

export { AdminPermissionsService } from "./permissions.service";

