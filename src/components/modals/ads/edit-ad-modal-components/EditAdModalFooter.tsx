"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface EditAdModalFooterProps {
  onClose: () => void;
  onSubmit: () => void;
  isUpdating: boolean;
}

export function EditAdModalFooter({
  onClose,
  onSubmit,
  isUpdating,
}: EditAdModalFooterProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  return (
    <div className="flex items-center justify-end gap-3 w-full pt-2">
      <Button
        variant="outline"
        onClick={onClose}
        disabled={isUpdating}
        className="h-9 text-xs sm:text-sm font-medium border-neutral-200 dark:border-neutral-700"
      >
        {isAr ? "إلغاء" : "Cancel"}
      </Button>
      <Button
        className="bg-teal-600 hover:bg-teal-700 text-white h-9 px-5 text-xs sm:text-sm font-semibold shadow-xs shadow-teal-600/20"
        onClick={onSubmit}
        disabled={isUpdating}
      >
        {isUpdating ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent me-2" />
            <span>{isAr ? "جاري التحديث..." : "Updating..."}</span>
          </>
        ) : (
          <span>{t("ads.details.editAd")}</span>
        )}
      </Button>
    </div>
  );
}
