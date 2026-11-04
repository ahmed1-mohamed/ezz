"use client";

import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { ReadyUnitsService, type ReadyUnitsListParams } from "./services/ReadyUnitsService";
import { unpackReadyUnitsList } from "./utils";

export const readyUnitsKeys = {
  all: ["readyUnits"] as const,
  list: (params: ReadyUnitsListParams) => ["readyUnits", "list", params] as const,
  detail: (id: number) => ["readyUnits", "detail", id] as const,
};

export function useReadyUnitsList(params: ReadyUnitsListParams, enabled: boolean = true) {
  const { data: session } = useSession();
  return useQuery({
    queryKey: readyUnitsKeys.list(params),
    queryFn: () => ReadyUnitsService.list(params),
    select: unpackReadyUnitsList,
    enabled: !!session?.user?.accessToken && enabled,
    placeholderData: keepPreviousData,
    // The app default is refetchOnMount: false; refetch when the list was invalidated (e.g. after create/edit).
    refetchOnMount: true,
  });
}

export function useReadyUnit(id: number) {
  const { data: session } = useSession();
  return useQuery({
    queryKey: readyUnitsKeys.detail(id),
    queryFn: () => ReadyUnitsService.get(id),
    enabled: !!session?.user?.accessToken && Number.isFinite(id) && id > 0,
    staleTime: 0,
    refetchOnMount: true,
  });
}

/** Accept / reject: PATCH /dashboard/ready-units/{id}/accept|reject */
export function useReadyUnitReview() {
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const showError = (error: unknown, fallbackKey: string) =>
    toast.error(getApiErrorMessage(error, t, t(fallbackKey)), { id: API_ERROR_TOAST_ID });

  const refresh = (id: number) => {
    queryClient.invalidateQueries({ queryKey: ["readyUnits", "list"] });
    queryClient.invalidateQueries({ queryKey: readyUnitsKeys.detail(id) });
  };

  const accept = useMutation({
    mutationFn: (id: number) => ReadyUnitsService.accept(id),
    onSuccess: (_r, id) => {
      toast.success(t("readyMarket.messages.acceptSuccess"));
      refresh(id);
    },
    onError: (error) => showError(error, "readyMarket.messages.acceptFailed"),
  });

  const reject = useMutation({
    mutationFn: (id: number) => ReadyUnitsService.reject(id),
    onSuccess: (_r, id) => {
      toast.success(t("readyMarket.messages.rejectSuccess"));
      refresh(id);
    },
    onError: (error) => showError(error, "readyMarket.messages.rejectFailed"),
  });

  const remove = useMutation({
    mutationFn: (id: number) => ReadyUnitsService.remove(id),
    onSuccess: (_r, id) => {
      toast.success(t("readyMarket.messages.deleteSuccess"));
      queryClient.invalidateQueries({ queryKey: ["readyUnits", "list"] });
      queryClient.removeQueries({ queryKey: readyUnitsKeys.detail(id) });
    },
    onError: (error) => showError(error, "readyMarket.messages.deleteFailed"),
  });

  return {
    acceptUnit: accept.mutate,
    rejectUnit: reject.mutate,
    deleteUnit: remove.mutate,
    isDeleting: remove.isPending,
    pendingId: accept.isPending ? accept.variables : reject.isPending ? reject.variables : undefined,
  };
}

/** Create: POST /dashboard/ready-units — Update: POST /dashboard/ready-units/{id} (multipart). */
export function useSaveReadyUnit(id?: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: FormData) =>
      id ? ReadyUnitsService.update(id, payload) : ReadyUnitsService.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["readyUnits", "list"] });
      if (id) queryClient.invalidateQueries({ queryKey: readyUnitsKeys.detail(id) });
    },
  });
}
