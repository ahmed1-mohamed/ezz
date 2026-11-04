"use client";

import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { EDIT_TABS } from "./edit-property.types";

interface EditPropertyFormActionsProps {
  currentTabIndex: number;
  isUpdating: boolean;
  onPrev: () => void;
  onNext: () => void;
  onCancel: () => void;
}

export default function EditPropertyFormActions({
  currentTabIndex,
  isUpdating,
  onPrev,
  onNext,
  onCancel,
}: EditPropertyFormActionsProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Button
          type="button"
          variant="outline"
          onClick={onPrev}
          disabled={currentTabIndex === 0 || isUpdating}
          className="gap-2 w-full sm:w-auto"
        >
          <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
          <span>{t("common.previous")}</span>
        </Button>

        {currentTabIndex < EDIT_TABS.length - 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={onNext}
            disabled={isUpdating}
            className="gap-2 w-full sm:w-auto text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-950/40"
          >
            <span>{t("common.next")}</span>
            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isUpdating}
          className="w-full sm:w-auto"
        >
          {t("properties.edit.cancel")}
        </Button>

        <Button
          type="submit"
          disabled={isUpdating}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold gap-2 w-full sm:w-auto min-w-[140px] shadow-sm"
        >
          {isUpdating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>{t("properties.edit.saving")}</span>
            </>
          ) : (
            <span>{t("properties.edit.saveChanges")}</span>
          )}
        </Button>
      </div>
    </div>
  );
}
