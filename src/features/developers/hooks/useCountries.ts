"use client";

import { useQuery } from "@tanstack/react-query";
import { AdminDevelopersService } from "../services/AdminDevelopersService";

export function useCountries() {
  return useQuery({
    queryKey: ["developers-countries"],
    queryFn: () => AdminDevelopersService.getCountries(),
    staleTime: 10 * 60 * 1000, // 10 minutes stale time for countries list
  });
}
