"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminAreasService } from "@/data/api-client";
import { AreaInput } from "@/validators/area.schema";

export function useCreateArea() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: AreaInput) => {
      if (!session?.user?.accessToken) {
        throw new Error("Not authenticated");
      }
      return AdminAreasService.createArea(data);
    },
    // Success/error feedback (incl. field-level validation errors) is shown by the form.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  return {
    createArea: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
  };
}
