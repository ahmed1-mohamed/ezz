"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchCountries, fetchStatesByCountry } from "@/data/api-client";

export function useAddCityData(isOpen: boolean) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const [states, setStates] = useState<any[]>([]);

  // Same key/fetcher as useEditCityData so both city modals share one cached request.
  const { data: countriesData, isLoading: loading } = useQuery({
    queryKey: ["countries", "raw"],
    queryFn: () => fetchCountries(token!),
    enabled: !!token && isOpen,
    staleTime: 5 * 60 * 1000,
  });

  const countries: any[] = Array.isArray(countriesData)
    ? countriesData
    : (countriesData?.data || []);

  const loadStates = async (countryName: string) => {
    if (!token) return;
    try {
      const statesData: any = await fetchStatesByCountry(countryName, token);
      const statesList = Array.isArray(statesData) ? statesData : (statesData?.data || []);
      const uniqueStates = statesList.filter(
        (state: any, index: number, self: any[]) =>
          index === self.findIndex((s: any) => s.id === state.id),
      );
      setStates(uniqueStates);
    } catch (error) {
      console.error("Error loading states:", error);
    }
  };

  return {
    countries,
    states,
    loading,
    loadStates,
  };
}
