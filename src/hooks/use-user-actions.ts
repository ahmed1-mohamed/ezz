"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { AdminUsersService } from "@/features/users/services/AdminUsersService";
import { apiClient } from "@/lib/apiClient";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export function useUserActions() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const createMutation = useMutation<any, Error, CreateUserInput>({
    mutationFn: async (userData: any) => {
      const token = session?.user?.accessToken;

      if (!token) {
        throw new Error("Not authenticated");
      }

      const res = await AdminUsersService.createUser(userData);

      return res?.data ?? res;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["roles"] });

      toast.success(t("users.messages.addedSuccess"));
    },

    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, t, t("users.messages.addFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({
      userId,
      userData,
    }: {
      userId: number;
      userData: EditUserInput;
    }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminUsersService.updateUser(userId, userData as Record<string, unknown>);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success(t("users.messages.updateSuccess"));
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, t, t("users.messages.updateFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (userId: number) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminUsersService.deleteUser(userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success(t("users.messages.deletedSuccess"));
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, t, t("users.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const fetchDevelopers = useMutation({
    mutationFn: async (token: string) => {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const expiresAt = Math.floor(Date.now() / 1000) + 3600;
      apiClient.setAuthToken(token, expiresAt);
      const response = await apiClient.get("/dashboard/developers");
      return response.data! || [];
    },
    onError: (error: any) => {
      console.error("Failed to fetch developers:", error);
    },
  });

  return {
    createUser: createMutation.mutateAsync,
    updateUser: updateMutation.mutateAsync,
    deleteUser: deleteMutation.mutateAsync,
    fetchDevelopers: fetchDevelopers.mutateAsync,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
}

export interface CreateUserInput {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  role_id: number;
  status?: string;
  description?: string;
  profile_picture?: string;
  developer_id?: number;
  developer_role?: string;
}

export interface EditUserInput {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  role_id?: number;
  status?: string;
  description?: string;
  profile_picture?: string;
}
