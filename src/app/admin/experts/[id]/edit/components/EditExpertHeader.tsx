"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight, Loader2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface EditExpertHeaderProps {
  expertId: number;
  expertName: string;
  isSubmitting: boolean;
  onSave: () => void;
}

export function EditExpertHeader({
  expertId,
  expertName,
  isSubmitting,
  onSave,
}: EditExpertHeaderProps) {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      {/* Breadcrumbs navigation */}
      <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-wrap">
        <Link prefetch={false}
          href="/admin/home"
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
        >
          {t("common.home")}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rtl:rotate-180 flex-shrink-0" />
        <Link prefetch={false}
          href="/admin/experts"
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
        >
          {t("experts.title")}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rtl:rotate-180 flex-shrink-0" />
        <Link prefetch={false}
          href={`/admin/experts/${expertId}`}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate max-w-[140px] sm:max-w-xs"
        >
          {expertName || t("experts.details.title")}
        </Link>
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rtl:rotate-180 flex-shrink-0" />
        <span className="text-gray-900 dark:text-gray-100 font-medium">
          {t("experts.edit.title")}
        </span>
      </nav>

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5 border-gray-200 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push(`/admin/experts/${expertId}`)}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            title={t("common.back")}
          >
            <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {t("experts.edit.title")}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {expertName || `#${expertId}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push(`/admin/experts/${expertId}`)}
            disabled={isSubmitting}
            className="dark:border-neutral-700 dark:text-gray-200"
          >
            {t("experts.edit.buttons.cancel")}
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
                {t("experts.messages.updating")}
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                {t("experts.edit.buttons.updateExpert")}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
