"use client";

import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { AdminAreasService } from "@/data/api-client";
import { unpackAreasResponse, mapArea } from "@/app/admin/areas/utils/map-area";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export default function useDashboardAdminAreasData(
  page?: number,
  limit?: number,
  search?: string,
  status?: string,
  enabled: boolean = true,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const areasData = useQuery({
    queryKey: ["areas", page, limit, search, status],
    queryFn: () => AdminAreasService.getAreas(page!, limit!, search, status),
    retry: false,
    enabled: !!token && enabled,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const deleteAreaMutation = useMutation({
    mutationFn: (areaId: number) => {
      if (!token) throw new Error("No access token");
      return AdminAreasService.deleteArea(areaId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
      toast.success(t("areas.messages.deleteSuccess"));
    },
    onError: (error) => {
      console.error(error);
      toast.error(getApiErrorMessage(error, t, t("areas.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  const { itemsArray, totalItems } = useMemo(() => {
    return unpackAreasResponse(areasData.data);
  }, [areasData.data]);

  const areas = useMemo(() => itemsArray.map(mapArea), [itemsArray]);

  return {
    areasData,
    areas,
    totalAreas: totalItems,
    deleteAreaMutation,
  };
}
