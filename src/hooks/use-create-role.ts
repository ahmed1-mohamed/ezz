"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminRolesService } from "@/data/api-client";
import type { RolesFormInput } from "@/validators/role.schema";

export function useCreateRole() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: RolesFormInput) => {
      if (!session?.user?.accessToken) {
        throw new Error("Not authenticated");
      }
      return AdminRolesService.createRole(data);
    },
    // Success/error feedback (incl. field-level validation errors) is shown by the form.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      queryClient.invalidateQueries({ queryKey: ["roles_admin"] });
    },
  });

  return {
    createRole: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
    reset: mutation.reset,
  };
}
