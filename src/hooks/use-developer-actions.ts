"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { AdminDevelopersService } from "@/features/developers/services/AdminDevelopersService";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";

export interface DeveloperData {
  developer_id: number;
  name: string;
  email: string;
  phone_number: string;
  website: string;
  logo: string;
  description: string;
  status: string;
  is_top: number;
  slug?: string;
  meta_title?: string;
  meta_description?: string;
}

export function useDeveloperActions() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const createMutation = useMutation({
    mutationFn: async (data: DeveloperFormData) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone_number", data.phone_number);
      if (data.website) formData.append("website", data.website);
      if (data.description) formData.append("description", data.description);
      if (data.status) formData.append("status", data.status);
      formData.append("is_top", data.is_top ? "1" : "0");
      if (data.slug) formData.append("slug", data.slug);
      if (data.meta_title) formData.append("meta_title", data.meta_title);
      if (data.meta_description) formData.append("meta_description", data.meta_description);
      if (data.country_id) formData.append("country_id", String(data.country_id));
      formData.append("sync_erp_next", data.sync_erp_next ? "1" : "0");
      if (data.sync_erp_next) {
        if (data.erp_next?.admin_first_name) {
          formData.append("erp_next[admin_first_name]", data.erp_next.admin_first_name);
        }
        if (data.erp_next?.admin_last_name) {
          formData.append("erp_next[admin_last_name]", data.erp_next.admin_last_name);
        }
        if (data.erp_next?.admin_email) {
          formData.append("erp_next[admin_email]", data.erp_next.admin_email);
        }
        const password = data.erp_next?.admin_password || data.admin_password;
        if (password) {
          formData.append("erp_next[admin_password]", password);
          formData.append("admin_password", password);
        }
      }

      if (data.logo) {
        formData.append("logo", data.logo);
      }

      return AdminDevelopersService.createDeveloper(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["developers"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard-developers"] });
      toast.success(t("developers.messages.createSuccess"));
    },
    // Errors (incl. field-level validation errors) are shown by the developer forms.
  });

  const updateMutation = useMutation({
    mutationFn: async ({ developerId, data }: { developerId: number; data: DeveloperFormData }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone_number", data.phone_number);
      if (data.website) formData.append("website", data.website);
      if (data.description) formData.append("description", data.description);
      if (data.status) formData.append("status", data.status);
      formData.append("is_top", data.is_top ? "1" : "0");
      if (data.slug) formData.append("slug", data.slug);
      if (data.meta_title) formData.append("meta_title", data.meta_title);
      if (data.meta_description) formData.append("meta_description", data.meta_description);
      if (data.country_id) formData.append("country_id", String(data.country_id));

      if (data.logo) {
        formData.append("logo", data.logo);
      }

      return AdminDevelopersService.updateDeveloper(developerId, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["developers"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard-developers"] });
      // Prefix match covers every ["developerDetails", id] entry.
      queryClient.invalidateQueries({ queryKey: ["developerDetails"] });
      toast.success(t("developers.messages.updateSuccess"));
    },
    // Errors (incl. field-level validation errors) are shown by the developer forms.
  });

  const deleteMutation = useMutation({
    mutationFn: async (developerId: number) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminDevelopersService.deleteDeveloper(developerId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["developers"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard-developers"] });
      toast.success(t("developers.messages.deletedSuccess"));
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, t, t("developers.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const toggleStatusMutation = useMutation({
    mutationFn: async ({ developerId, status }: { developerId: number; status: string }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminDevelopersService.toggleStatus(developerId, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["developers"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard-developers"] });
      toast.success(t("developers.messages.activatedSuccess"));
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, t, t("developers.messages.updateStatusFailed")), {
        id: API_ERROR_TOAST_ID,
      });
    },
  });

  return {
    createDeveloper: createMutation.mutateAsync,
    updateDeveloper: updateMutation.mutateAsync,
    deleteDeveloper: deleteMutation.mutateAsync,
    toggleDeveloperStatus: toggleStatusMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
    isTogglingStatus: toggleStatusMutation.isPending,
  };
}

export interface ErpNextFormData {
  admin_first_name?: string;
  admin_last_name?: string;
  admin_email?: string;
  admin_password?: string;
}

export interface DeveloperFormData {
  name: string;
  email: string;
  phone_number: string;
  website?: string;
  description?: string;
  status?: string;
  is_top: boolean | number;
  country_id?: string | number;
  slug?: string;
  meta_title?: string;
  meta_description?: string;
  sync_erp_next?: boolean;
  erp_next?: ErpNextFormData;
  admin_password?: string;
  logo?: File;
}