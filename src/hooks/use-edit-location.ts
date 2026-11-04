"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchLocationsDetails } from "@/data/api-client";
import { DASHBOARD_API_BASE_URL } from "@/config/api";
import { AdminCitiesService } from "@/data/api-client";

export function useEditLocationData(locationId: number, isOpen: boolean) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const { data: locationData, isLoading: locationLoading } = useQuery({
    queryKey: ["locationDetails", locationId],
    queryFn: () => fetchLocationsDetails(locationId, token!),
    enabled: !!locationId && !!token && isOpen,
  });

  const { data: citiesData, isLoading: citiesLoading } = useQuery({
    queryKey: ["allCities"],
    queryFn: async () => (await AdminCitiesService.getAllCities()) ?? [],
    enabled: !!token && isOpen,
  });

  const { data: areasData, isLoading: areasLoading } = useQuery({
    queryKey: ["areas", "allRaw"],
    queryFn: async () => {
      const res = await fetch(`${DASHBOARD_API_BASE_URL}/areas/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      return json.data || [];
    },
    enabled: !!token && isOpen,
  });

  const cities = citiesData?.map((city: any) => ({
    label: city.name,
    value: String(city.id),
  })) || [];

  const areas = areasData?.map((area: any) => ({
    label: area.area_name || area.dld_area_name || "N/A",
    value: String(area.area_id || area.id || area.dld_area_id || ""),
  })) || [];

  const loading = locationLoading || citiesLoading || areasLoading;

  return {
    locationData,
    cities,
    areas,
    loading,
  };
}