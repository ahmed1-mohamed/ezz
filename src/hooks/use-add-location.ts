"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminCitiesService, AdminAreasService, AdminLocationsService } from "@/data/api-client";
import { LocationInput } from "@/validators/location.schema";

interface SelectOption {
  label: string;
  value: string;
}

export function useAddLocationData(isOpen: boolean) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const {
    data: citiesData,
    isLoading: isLoadingCities,
    error: citiesError,
  } = useQuery({
    queryKey: ["allCities"],
    queryFn: async () => (await AdminCitiesService.getAllCities()) ?? [],
    select: (cities: any[]): SelectOption[] =>
      cities.map((city: any) => ({
        label: city.name,
        value: String(city.id),
      })),
    enabled: !!token && isOpen,
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: areasData,
    isLoading: isLoadingAreas,
    error: areasError,
  } = useQuery<SelectOption[]>({
    queryKey: ["areas", "select", 1, 100],
    queryFn: async () => {
      const res = await AdminAreasService.getAreas(1, 100);
      const rawData = res?.data as any;
      const areaData = Array.isArray(rawData)
        ? rawData
        : Array.isArray(rawData?.data)
        ? rawData.data
        : Array.isArray(rawData?.data?.data)
        ? rawData.data.data
        : [];
      return areaData.map((area: any, index: number) => ({
        label: area.area_name || area.dld_area_name || "N/A",
        value: String(area.area_id || area.id || area.dld_area_id || `fallback-${index}`),
      }));
    },
    enabled: !!token && isOpen,
    staleTime: 5 * 60 * 1000,
  });

  return {
    cities: citiesData || [],
    areas: areasData || [],
    isLoadingCities,
    isLoadingAreas,
    citiesError,
    areasError,
  };
}

export function useAddLocation() {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();

  const addLocationMutation = useMutation({
    mutationFn: async (data: LocationInput) => {
      if (!token) {
        throw new Error("Authentication token not found");
      }
      const response = await AdminLocationsService.createLocation(data);
      return response.data;
    },
    // Success/error feedback (incl. field-level validation errors) is shown by the form.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["locations"] });
    },
  });

  return {
    addLocation: addLocationMutation.mutateAsync,
    isAddingLocation: addLocationMutation.isPending,
    addLocationError: addLocationMutation.error,
  };
}