"use client";

import { useRouter, usePathname } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, ChevronRight, Edit, Loader2 } from "lucide-react";
import { AdminProjectsService } from "@/features/projects/services/AdminProjectsService";
import { ProjectData } from "../types";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectHeaderProps {
  projectId: number;
  token: string;
  data: ProjectData;
}

export function ProjectHeader({ projectId, token, data }: ProjectHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const isActive = data.is_active === 1 || data.is_active === "1" as any;

  const statusMutation = useMutation({
    mutationFn: (newIsActive: boolean) => {
      return AdminProjectsService.toggleActive(projectId, newIsActive);
    },
    onSuccess: () => {
      toast.success(t("projects.messages.statusUpdateSuccess"));
      queryClient.invalidateQueries({
        queryKey: ["projectDetails", projectId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["Projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, t, t("projects.messages.statusUpdateFailed")), {
        id: API_ERROR_TOAST_ID,
      });
    },
  });

  const handleStatusToggle = () => {
    if (!data || statusMutation.isPending) return;
    statusMutation.mutate(!isActive);
  };

  return (
    <>
      <nav className="flex items-center text-sm font-medium text-slate-500 mb-6 gap-2">
        <button
          onClick={() => router.push(`${routePrefix}/projects`)}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          {t("projects.title")}
        </button>
        <ChevronRight className="h-4 w-4 text-slate-400 dark:text-slate-500 rtl:rotate-180" />
        <span className="text-slate-800 dark:text-slate-200">{data.project_name || t("projects.details.title")}</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.back()}
            className="rounded-full border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-colors shadow-sm bg-transparent dark:text-slate-300"
          >
            <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {data.project_name || t("projects.details.projectDetails")}
          </h1>
        </div>

        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-2 pe-4 border-e border-slate-200 dark:border-slate-700">
            <span className={`text-sm font-semibold ${isActive ? "text-teal-600 dark:text-teal-400" : "text-slate-500 dark:text-slate-400"}`}>
              {isActive ? t("common.active") : t("common.inactive")}
            </span>
            {statusMutation.isPending && (
              <Loader2 className="h-4 w-4 animate-spin text-slate-400" aria-hidden="true" />
            )}
            <Switch
              checked={isActive}
              onCheckedChange={handleStatusToggle}
              disabled={statusMutation.isPending}
              aria-busy={statusMutation.isPending}
              className="data-[state=checked]:bg-teal-600"
            />
          </div>

          <Button
            onClick={() => router.push(`${routePrefix}/projects/${projectId}/edit`)}
            variant="ghost"
            className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-colors rounded-full px-4"
          >
            <Edit className="h-4 w-4" />
            {t("editProject.title")}
          </Button>
        </div>
      </div>
    </>
  );
}
