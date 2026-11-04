"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AdminProjectsService } from "@/features/projects/services/AdminProjectsService";
import type { CreateProjectWithMediaParams, CreateProjectResult } from "@/features/projects/services/AdminProjectsService";
import { useLanguage } from "@/contexts/LanguageContext";

export { type CreateProjectWithMediaParams };

export default function useCreateProject() {
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const mutation = useMutation({
    mutationFn: (data: CreateProjectWithMediaParams) => AdminProjectsService.createProjectWithMedia(data),
    onSuccess: (result: CreateProjectResult) => {
      toast.success(`${result.projectName}: ${t("projects.messages.createSuccess")}`);
      queryClient.invalidateQueries({ queryKey: ["Projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    // Errors (incl. field-level validation errors) are shown by the create-project form.
  });

  return {
    createProject: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
    reset: mutation.reset,
  };
}
