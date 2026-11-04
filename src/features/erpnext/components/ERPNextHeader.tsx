"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ERPNextHeaderProps {
  onOpenExternal: () => void;
}

export function ERPNextHeader({ onOpenExternal }: ERPNextHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ERPNext
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          {t("erpnext.subtitle")}
        </p>
      </div>

      <Button
        variant="outline"
        onClick={onOpenExternal}
        className="h-8.5 text-xs font-medium border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1.5 shadow-2xs self-start sm:self-auto cursor-pointer"
      >
        <ExternalLink className="h-3.5 w-3.5 text-gray-500" />
        <span>{t("erpnext.openInNewTab")}</span>
      </Button>
    </div>
  );
}
