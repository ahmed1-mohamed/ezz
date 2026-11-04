"use client";

import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { AdminExpertsService } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function useDashboardAdminExpertsData(
  page: number = 1,
  limit: number = 10,
  search?: string,
  status?: string,
  enabled: boolean = true,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const expertsData = useQuery({
    queryKey: ["experts", page, limit, search, status],
    queryFn: () =>
      AdminExpertsService.getExpertsPaginated(page, limit, search, status),
    retry: false,
    enabled: !!token && enabled,
    staleTime: 30 * 1000,
    placeholderData: keepPreviousData,
  });

  const deleteExpertMutation = useMutation({
    mutationFn: (expertId: number) => {
      if (!token) throw new Error("No access token");
      return AdminExpertsService.deleteExpert(expertId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["experts"], refetchType: "all" });
      toast.success(t("experts.messages.deleteSuccess"));
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("experts.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const toggleStatusMutation = useMutation({
    mutationFn: ({ expertId, newStatus }: { expertId: number; newStatus: boolean }) => {
      return AdminExpertsService.toggleExpertStatus(expertId, newStatus);
    },
    onSuccess: async (_data, variables) => {
      const expertIdStr = String(variables.expertId);
      const expertIdNum = Number(variables.expertId);

      queryClient.removeQueries({ queryKey: ["expertDetails", expertIdStr] });
      queryClient.removeQueries({ queryKey: ["expertDetails", expertIdNum] });
      queryClient.removeQueries({ queryKey: ["adminEditExpert", expertIdStr] });
      queryClient.removeQueries({ queryKey: ["adminEditExpert", expertIdNum] });

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["experts"], refetchType: "all" }),
        queryClient.invalidateQueries({ queryKey: ["expertDetails"], refetchType: "all" }),
      ]);
      toast.success(t("experts.messages.statusUpdateSuccess"));
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("experts.messages.statusUpdateFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  return {
    expertsData,
    deleteExpertMutation,
    toggleStatusMutation,
  };
}
