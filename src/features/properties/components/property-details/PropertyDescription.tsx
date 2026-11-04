"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function PropertyDescription({ description }: { description?: string | null }) {
  const { t } = useLanguage();

  const content = description?.trim() || t("properties.details.noDescription");

  return (
    <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
      <CardHeader className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
            <FileText className="w-4 h-4" />
          </div>
          <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.details.description")}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div
          className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed break-words"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </CardContent>
    </Card>
  );
}