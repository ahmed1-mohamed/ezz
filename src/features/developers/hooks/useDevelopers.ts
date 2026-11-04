"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminDevelopersService } from "../services/AdminDevelopersService";
import { unpackDevelopersResponse, mapDeveloper } from "../utils/map-developer";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function useDevelopers(
  page: number = 1,
  perPage: number = 10,
  search?: string,
  status?: string,
  countryId?: string,
  enabled: boolean = true,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const developersData = useQuery({
    queryKey: ["developers", page, perPage, search, status, countryId],
    queryFn: () =>
      AdminDevelopersService.getDevelopersPaginated(
        page,
        perPage,
        search,
        status,
        countryId,
      ),
    retry: false,
    enabled: !!token && enabled,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => AdminDevelopersService.deleteDeveloper(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["developers"] });
    },
  });

  const bulkImportMutation = useMutation({
    mutationFn: (file: File) =>
      AdminDevelopersService.bulkImportDevelopers(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["developers"] });
    },
  });

  const toggleStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      AdminDevelopersService.toggleStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["developers"] });
    },
  });

  const { itemsArray, totalItems } = useMemo(() => {
    return unpackDevelopersResponse(developersData.data);
  }, [developersData.data]);

  const na = t("common.na");
  const developers = useMemo(() => itemsArray.map((dev) => mapDeveloper(dev, na)), [itemsArray, na]);

  return {
    developersData,
    developers,
    totalDevelopers: totalItems,
    deleteMutation,
    bulkImportMutation,
    toggleStatusMutation,
  };
}
