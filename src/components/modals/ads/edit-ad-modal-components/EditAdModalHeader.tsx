"use client";

import { Edit } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface EditAdModalHeaderProps {
  adId?: string | number | null;
}

export function EditAdModalHeader({ adId }: EditAdModalHeaderProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  return (
    <div className="flex items-center gap-2.5">
      <div className="h-8 w-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400">
        <Edit className="h-4 w-4" />
      </div>
      <div>
        <h2 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
          {t("ads.details.editAd")}
        </h2>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">
          {adId ? (isAr ? `تعديل تفاصيل الإعلان #${adId}` : `Update details for Ad #${adId}`) : ""}
        </p>
      </div>
    </div>
  );
}
