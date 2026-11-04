"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminFeaturesService } from "@/data/api-client";
import { FeaturesDataType } from "@/types";

export function useCreateFeature() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: FeaturesDataType) => {
      if (!session?.user?.accessToken) {
        throw new Error("Not authenticated");
      }
      return AdminFeaturesService.createFeature(data);
    },
    // Success/error feedback (incl. field-level validation errors) is shown by the form.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["features"] });
    },
  });

  return {
    createFeature: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
    reset: mutation.reset,
  };
}
