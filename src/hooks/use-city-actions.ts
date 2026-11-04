"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { editCity } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export function useCityActions() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const updateMutation = useMutation({
    mutationFn: async ({ cityId, data }: { cityId: number; data: any }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return editCity(cityId, data, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      toast.success(t("cities.messages.updateSuccess"));
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("cities.messages.updateFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  return {
    updateCity: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
  };
}
