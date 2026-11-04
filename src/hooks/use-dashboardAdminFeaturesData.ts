"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchFeatures } from "@/data/api-client";

export default function useDashboardAdminFeaturesData() {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;


  const featuresData = useQuery({
    queryKey: ["features"],
    queryFn: () => fetchFeatures(token!),
    retry: false,
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
  });

  return {
    featuresData,
  };
}