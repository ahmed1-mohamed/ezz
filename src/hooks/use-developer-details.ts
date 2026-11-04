"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { AdminDevelopersService } from "@/features/developers/services/AdminDevelopersService";
import { useLanguage } from "@/contexts/LanguageContext";

export interface ErpNextTenant {
  erp_next_tenant_id: number;
  tenant_name: string;
  tenant_url: string;
  is_active: string | boolean | number;
  created_at?: string;
  updated_at?: string;
}

export interface UserDeveloperRelationship {
  user_id: number;
  developer_id: number;
  role: string;
  created_at?: string;
  updated_at?: string;
}

export interface DeveloperData {
  developer_id: number;
  name: string;
  email: string;
  phone_number: string;
  website: string;
  logo: string;
  cover_photo?: string;
  description: string;
  status: string;
  is_top: number;
  slug?: string;
  features: any[];
  project: any[];
  paymentPlans?: any[];
  userDeveloperRelationships?: UserDeveloperRelationship[];
  erpNextTenant?: ErpNextTenant | null;
  erp_next_tenant?: ErpNextTenant | null;
  active_projects_count?: number;
  completed_projects_count?: number;
  total_units_count?: number;
  active_units_count?: number;
  available_units_count?: number;
  booked_units_count?: number;
  sold_units_count?: number;
  country_id?: number | string;
  country_name?: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface ApiResponse {
  status: boolean;
  message: string;
  data: DeveloperData;
}

export function useDeveloperDetails(developerId: number | null) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const developerQuery = useQuery<ApiResponse>({
    queryKey: ["developerDetails", developerId],
    queryFn: async () => {
      const res: any = await AdminDevelopersService.getDeveloper(
        Number(developerId),
      );

      return res.data;
    },
    enabled: !!token && !!developerId,
    retry: false,
  });

  const toggleTopMutation = useMutation({
    mutationFn: async (isTop: boolean) => {
      if (!token || !developerQuery.data!)
        throw new Error("Missing token or developer data");

      const formData = new FormData();
      const developer: any = developerQuery.data;
      formData.append("name", developer.name);
      formData.append("email", developer.email || "");
      formData.append("phone_number", developer.phone_number || "");
      formData.append("website", developer.website || "");
      formData.append("description", developer.description || "");
      formData.append("status", developer.status || "active");
      formData.append("is_top", isTop ? "1" : "0");

      return AdminDevelopersService.updateDeveloper(
        Number(developerId),
        formData,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["developerDetails", developerId],
      });
      queryClient.invalidateQueries({ queryKey: ["developers"] });
      toast.success(t("developers.messages.topStatusSuccess"));
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, t, t("developers.messages.topStatusFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  return {
    developer: (developerQuery.data?.data ? developerQuery.data.data : developerQuery.data) as DeveloperData | undefined,
    isLoading: developerQuery.isLoading,
    isError: developerQuery.isError,
    error: developerQuery.error,
    toggleTop: toggleTopMutation.mutate,
    isTogglingTop: toggleTopMutation.isPending,
    refetch: developerQuery.refetch,
  };
}