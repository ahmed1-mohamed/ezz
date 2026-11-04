"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { AdminExpertsService } from "@/data/api-client";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";

export function useExpertActions() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const createMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminExpertsService.createExpert(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["experts"], refetchType: "all" });
      queryClient.invalidateQueries({ queryKey: ["expert-conversations"], refetchType: "all" });
      toast.success(t("experts.messages.createSuccess"));
    },
    // Errors (incl. field-level validation errors) are shown by AddExpertModal.
  });

  const updateMutation = useMutation({
    mutationFn: async ({ expertId, formData }: { expertId: number; formData: FormData }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminExpertsService.updateExpert(expertId, formData);
    },
    onSuccess: async (_data, variables) => {
      const expertIdStr = String(variables.expertId);
      const expertIdNum = Number(variables.expertId);

      // Remove specific cached queries for this expert so stale data is never displayed
      queryClient.removeQueries({ queryKey: ["expertDetails", expertIdStr] });
      queryClient.removeQueries({ queryKey: ["expertDetails", expertIdNum] });
      queryClient.removeQueries({ queryKey: ["adminEditExpert", expertIdStr] });
      queryClient.removeQueries({ queryKey: ["adminEditExpert", expertIdNum] });

      // Invalidate and refetch all related queries
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["experts"], refetchType: "all" }),
        queryClient.invalidateQueries({ queryKey: ["expertDetails"], refetchType: "all" }),
        queryClient.invalidateQueries({ queryKey: ["expertProfile"], refetchType: "all" }),
        queryClient.invalidateQueries({ queryKey: ["adminEditExpert"], refetchType: "all" }),
      ]);
      toast.success(t("experts.messages.updateSuccess"));
    },
    // Errors (incl. field-level validation errors) are shown by the expert edit page.
  });

  const deleteMutation = useMutation({
    mutationFn: async (expertId: number) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return AdminExpertsService.deleteExpert(expertId);
    },
    onSuccess: async (_data, expertId) => {
      queryClient.removeQueries({ queryKey: ["expertDetails", String(expertId)] });
      queryClient.removeQueries({ queryKey: ["expertDetails", Number(expertId)] });
      queryClient.removeQueries({ queryKey: ["adminEditExpert", String(expertId)] });
      queryClient.removeQueries({ queryKey: ["adminEditExpert", Number(expertId)] });

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["experts"], refetchType: "all" }),
        queryClient.invalidateQueries({ queryKey: ["expertDetails"], refetchType: "all" }),
      ]);
      toast.success(t("experts.messages.deleteSuccess"));
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, t, t("experts.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const toggleStatusMutation = useMutation({
    mutationFn: async (params: number | { expertId: number; status?: boolean }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      const expertId = typeof params === "number" ? params : params.expertId;
      const status = typeof params === "number" ? undefined : params.status;
      return AdminExpertsService.toggleExpertStatus(expertId, status);
    },
    onSuccess: async (_data, variables) => {
      const expertId = typeof variables === "number" ? variables : variables.expertId;
      queryClient.removeQueries({ queryKey: ["expertDetails", String(expertId)] });
      queryClient.removeQueries({ queryKey: ["expertDetails", Number(expertId)] });
      queryClient.removeQueries({ queryKey: ["adminEditExpert", String(expertId)] });
      queryClient.removeQueries({ queryKey: ["adminEditExpert", Number(expertId)] });

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["experts"], refetchType: "all" }),
        queryClient.invalidateQueries({ queryKey: ["expertDetails"], refetchType: "all" }),
        queryClient.invalidateQueries({ queryKey: ["adminEditExpert"], refetchType: "all" }),
      ]);
      toast.success(t("experts.messages.statusUpdateSuccess"));
    },
    onError: (error: unknown) => {
      toast.error(getApiErrorMessage(error, t, t("experts.messages.statusUpdateFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  return {
    createExpert: createMutation.mutateAsync,
    updateExpert: updateMutation.mutateAsync,
    deleteExpert: deleteMutation.mutateAsync,
    toggleExpertStatus: toggleStatusMutation.mutateAsync,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
    isTogglingStatus: toggleStatusMutation.isPending,
  };
}