"use client";

import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { AdminCitiesService } from "@/data/api-client";
import { CityInput } from "@/validators/city.schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

export default function useDashboardAdminCitiesData(
  page?: number,
  limit?: number,
  search?: string,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const paginatedCitiesData = useQuery({
    queryKey: ["cities", page, limit, search],
    queryFn: () => AdminCitiesService.getCities(page!, limit!, search),
    retry: false,
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  // Success/error feedback (incl. field-level validation errors) is shown by the city forms.
  const createCityMutation = useMutation({
    mutationFn: (data: CityInput) => {
      if (!token) throw new Error("No access token");
      return AdminCitiesService.createCity(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient.invalidateQueries({ queryKey: ["allCities"] });
    },
  });

  const deleteCityMutation = useMutation({
    mutationFn: (cityId: number) => {
      if (!token) throw new Error("No access token");
      return AdminCitiesService.deleteCity(cityId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient.invalidateQueries({ queryKey: ["allCities"] });
      toast.success(t("cities.messages.deleteSuccess"));
    },
    onError: (error) => {
      console.error(error);
      toast.error(getApiErrorMessage(error, t, t("cities.messages.deleteFailed")), { id: API_ERROR_TOAST_ID });
    },
  });

  // Success/error feedback (incl. field-level validation errors) is shown by the city forms.
  const updateCityMutation = useMutation({
    mutationFn: ({ cityId, data }: { cityId: number; data: CityInput }) => {
      if (!token) throw new Error("No access token");
      return AdminCitiesService.updateCity(cityId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient.invalidateQueries({ queryKey: ["allCities"] });
    },
  });

  return {
    paginatedCitiesData,
    createCityMutation,
    deleteCityMutation,
    updateCityMutation,
  };
}
