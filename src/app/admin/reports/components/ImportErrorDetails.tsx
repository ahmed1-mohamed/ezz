"use client";

import { XCircle, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ImportErrorDetailsProps {
  errors: any[];
}

export function ImportErrorDetails({ errors }: ImportErrorDetailsProps) {
  const { t } = useLanguage();

  if (!errors || errors.length === 0) return null;

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
      <div className="border-b border-gray-100 dark:border-neutral-800 bg-red-50 dark:bg-red-950/20 p-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-red-800 dark:text-red-400">
          <XCircle className="h-5 w-5" />
          {t("reportsPage.errorDetails") || "Error Details"}
        </h2>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {t("reportsPage.errorDetailsDesc") || "Review and fix these issues before re-importing"}
        </p>
      </div>
      <div className="over-flow-hidden max-h-96 divide-y divide-gray-200 dark:divide-neutral-800 overflow-y-auto">
        {errors.map((errorItem: any, index: number) => (
          <div key={index} className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                  <span className="text-sm font-medium text-red-800 dark:text-red-400">
                    {errorItem.row}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
                  {t("reportsPage.rowValidationErrors", { row: errorItem.row }) || `Row ${errorItem.row} - Validation Errors`}
                </h4>
                <div className="space-y-2">
                  {typeof errorItem.error === "string" ? (
                    <div className="rounded border-l-4 border-red-400 bg-red-50 dark:bg-red-950/20 p-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                        <div className="text-sm text-red-700 dark:text-red-300">
                          {errorItem.error}
                        </div>
                      </div>
                    </div>
                  ) : (
                    Object.entries(
                      (errorItem.error || {}) as Record<string, string | string[]>,
                    ).map(([field, messages]) => (
                      <div
                        key={field}
                        className="rounded border-l-4 border-red-400 bg-red-50 dark:bg-red-950/20 p-3"
                      >
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                          <div>
                            <div className="text-sm font-medium text-red-800 dark:text-red-300">
                              {field
                                .replace(/_/g, " ")
                                .replace(/\b\w/g, (l) => l.toUpperCase())}
                            </div>
                            <div className="mt-1 text-sm text-red-700 dark:text-red-300">
                              {Array.isArray(messages)
                                ? messages.join(", ")
                                : messages}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
