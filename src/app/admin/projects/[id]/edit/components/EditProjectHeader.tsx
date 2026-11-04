"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight, Loader2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface EditProjectHeaderProps {
  projectId: number;
  projectName: string;
  routePrefix: string;
  isSubmitting: boolean;
  onSave: () => void;
}

export function EditProjectHeader({
  projectId,
  projectName,
  routePrefix,
  isSubmitting,
  onSave,
}: EditProjectHeaderProps) {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-wrap">
        <Link prefetch={false}
          href={`${routePrefix}/home`}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
        >
          {t("common.home")}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rtl:rotate-180 flex-shrink-0" />
        <Link prefetch={false}
          href={`${routePrefix}/projects`}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
        >
          {t("projects.title")}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rtl:rotate-180 flex-shrink-0" />
        <Link prefetch={false}
          href={`${routePrefix}/projects/${projectId}`}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate max-w-[140px] sm:max-w-xs"
        >
          {projectName || t("editProject.title")}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rtl:rotate-180 flex-shrink-0" />
        <span className="text-gray-900 dark:text-gray-100 font-medium">
          {t("editProject.title")}
        </span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5 border-gray-200 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push(`${routePrefix}/projects/${projectId}`)}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            title={t("editProject.back")}
          >
            <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {t("editProject.title")}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {projectName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push(`${routePrefix}/projects/${projectId}`)}
            disabled={isSubmitting}
            className="dark:border-neutral-700 dark:text-gray-200"
          >
            {t("editProject.cancel")}
          </Button>
          <Button
            type="button"
            onClick={onSave}
            disabled={isSubmitting}
            className="bg-[#008081] hover:bg-[#006666] text-white gap-2 shadow-2xs font-medium px-5"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("editProject.updating")}
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                {t("editProject.saveChanges")}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
