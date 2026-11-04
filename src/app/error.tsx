"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ErrorPage() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center mx-auto max-w-container px-4 md:px-banner-padding mt-24 mb-20 text-center relative overflow-hidden">
      <div className="relative z-10 mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight max-w-2xl">
          {t("errorPage.title")}
        </h1>

        <p className="text-gray-700 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
          {t("errorPage.description")}
        </p>

        <p className="text-gray-500 text-sm mt-8">{t("errorPage.contactSupport")}</p>
      </div>
    </div>
  );
}
