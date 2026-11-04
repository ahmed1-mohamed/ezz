"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { editLocation } from "@/data/api-client";

interface EditLocationData {
  location_name_en: string;
  location_name_ar: string;
  area_id: number;
  city_id: number;
  google_map_link: string;
  north_side: string;
  south_side: string;
  east_side: string;
  west_side: string;
  landmark?: string;
  description: string;
  latitude?: number;
  longitude?: number;
}

export function useLocationActions() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: async ({ locationId, data }: { locationId: number; data: EditLocationData }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return editLocation(locationId, data, token);
    },
    // Success/error feedback (incl. field-level validation errors) is shown by the form.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["locations"] });
    },
  });

  return {
    updateLocation: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
  };
}
