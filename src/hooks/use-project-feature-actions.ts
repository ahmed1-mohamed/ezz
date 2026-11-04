"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { editProjectFeature } from "@/data/api-client";
import { EditProjectFeatureInput } from "@/validators/project-features.schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export function useProjectFeatureActions() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const updateMutation = useMutation({
    mutationFn: async ({
      projectId,
      featureId,
      data,
    }: {
      projectId: number;
      featureId: number;
      data: any;
    }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return editProjectFeature(projectId, featureId, data, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projectDetails"] });
      toast.success(t("projects.messages.featureUpdateSuccess"));
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, t, t("projects.messages.featureUpdateFailed")), {
        id: API_ERROR_TOAST_ID,
      });
    },
  });

  return {
    updateProjectFeature: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
  };
}
