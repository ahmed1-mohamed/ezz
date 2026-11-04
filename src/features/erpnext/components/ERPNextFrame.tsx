"use client";

import { FileQuestion } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ERPNextFrameProps {
  url: string;
}

export function ERPNextFrame({ url }: ERPNextFrameProps) {
  const { t } = useLanguage();

  return (
    <div className="relative rounded-xl border border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-neutral-900/60 overflow-hidden w-full h-[calc(100vh-290px)] min-h-[580px] shadow-2xs">
      {url ? (
        <iframe
          key={url}
          src={url}
          title="ERPNext CRM"
          className="w-full h-full border-0"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-gray-400">
          <FileQuestion className="h-12 w-12 stroke-1 text-gray-300 dark:text-neutral-700 mb-3" />
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {t("erpnext.enterValidUrl")}
          </p>
        </div>
      )}
    </div>
  );
}
