"use client";

import { Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EditPropertyLoading() {
  const { t } = useLanguage();

  return (
    <div className="flex h-screen items-center justify-center text-gray-600 bg-gray-50 dark:bg-neutral-950">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-teal-600 mx-auto" />
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {t("properties.loading")}
        </p>
      </div>
    </div>
  );
}
