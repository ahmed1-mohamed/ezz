"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { editArea } from "@/data/api-client";
import { AreaInput } from "@/validators/area.schema";

export function useAreaActions() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: async ({ areaId, data }: { areaId: number; data: AreaInput }) => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      return editArea(areaId, data, token);
    },
    // Success/error feedback (incl. field-level validation errors) is shown by the form.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  return {
    updateArea: updateMutation.mutateAsync,
    isUpdating: updateMutation.isPending,
  };
}