"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { AdminAdsService } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export function useAdActions() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const createMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminAdsService.createAd(formData, token);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["ads"] });
      await queryClient.invalidateQueries({ queryKey: ["adsTotals"] });
      toast.success(t("ads.messages.createSuccess"), { id: "ad-action-toast" });
    },
    // Error feedback (incl. field-level validation errors) is shown by the calling form.
  });

  const updateMutation = useMutation({
    mutationFn: async ({
      adId,
      formData,
    }: {
      adId: number;
      formData: FormData;
    }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminAdsService.updateAd(adId, formData, token);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["ads"] });
      await queryClient.invalidateQueries({ queryKey: ["adsTotals"] });
      toast.success(t("ads.messages.updateSuccess"), { id: "ad-action-toast" });
    },
    // Error feedback (incl. field-level validation errors) is shown by the calling form.
  });

  const deleteMutation = useMutation({
    mutationFn: async (adId: number) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminAdsService.deleteAd(adId);
    },
    onMutate: async (deletedAdId: number) => {
      await queryClient.cancelQueries({ queryKey: ["ads"] });
      const previousAdsQueries = queryClient.getQueriesData({ queryKey: ["ads"] });

      queryClient.setQueriesData({ queryKey: ["ads"] }, (old: any) => {
        if (!old) return old;
        const filterList = (list: any[]) =>
          list.filter((item: any) => String(item.creative_id || item.id) !== String(deletedAdId));

        if (Array.isArray(old)) return filterList(old);
        if (Array.isArray(old.data)) return { ...old, data: filterList(old.data) };
        return old;
      });

      return { previousAdsQueries };
    },
    onError: (error: any, _vars, context: any) => {
      if (context?.previousAdsQueries) {
        context.previousAdsQueries.forEach(([queryKey, data]: [any, any]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
      toast.error(getApiErrorMessage(error, t, t("ads.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    },
    onSuccess: () => {
      toast.success(t("ads.messages.deleteSuccess"), { id: "ad-action-toast" });
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["ads"] });
      await queryClient.invalidateQueries({ queryKey: ["adsTotals"] });
    },
  });

  const toggleStatusMutation = useMutation({
    mutationFn: async ({ adId, status }: { adId: number; status: string }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminAdsService.toggleStatus(adId, status);
    },
    onMutate: async ({ adId, status }) => {
      await queryClient.cancelQueries({ queryKey: ["ads"] });
      const previousAdsQueries = queryClient.getQueriesData({ queryKey: ["ads"] });

      queryClient.setQueriesData({ queryKey: ["ads"] }, (old: any) => {
        if (!old) return old;
        const updateList = (list: any[]) =>
          list.map((item: any) => {
            if (String(item.creative_id || item.id) === String(adId)) {
              return {
                ...item,
                status: status,
                is_active: status === "active",
              };
            }
            return item;
          });

        if (Array.isArray(old)) return updateList(old);
        if (Array.isArray(old.data)) return { ...old, data: updateList(old.data) };
        return old;
      });

      return { previousAdsQueries };
    },
    onError: (error: any, _vars, context: any) => {
      if (context?.previousAdsQueries) {
        context.previousAdsQueries.forEach(([queryKey, data]: [any, any]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
      toast.error(getApiErrorMessage(error, t, t("ads.messages.statusUpdateFailed")), { id: API_ERROR_TOAST_ID });
    },
    onSuccess: () => {
      toast.success(t("ads.messages.statusUpdateSuccess"), { id: "ad-action-toast" });
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["ads"] });
      await queryClient.invalidateQueries({ queryKey: ["adsTotals"] });
    },
  });

  return {
    createAd: createMutation.mutateAsync,
    updateAd: updateMutation.mutateAsync,
    deleteAd: deleteMutation.mutateAsync,
    toggleAdStatus: toggleStatusMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
    isTogglingStatus: toggleStatusMutation.isPending,
  };
}
