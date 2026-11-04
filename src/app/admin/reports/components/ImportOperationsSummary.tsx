"use client";

import { CheckCircle, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ImportOperationsSummaryProps {
  inserted: any[];
  updated: any[];
  duplicates: any[];
  errors: any[];
}

export function ImportOperationsSummary({
  inserted,
  updated,
  duplicates,
  errors,
}: ImportOperationsSummaryProps) {
  const { t } = useLanguage();

  const hasSuccessfulOps = inserted.length > 0 || updated.length > 0;
  const hasIssues = duplicates.length > 0 || errors.length > 0;

  if (!hasSuccessfulOps && !hasIssues) return null;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {hasSuccessfulOps && (
        <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
          <div className="border-b border-gray-100 dark:border-neutral-800 bg-green-50 dark:bg-green-950/20 p-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-green-800 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              {t("reportsPage.successfulOperations") || "Successful Operations"}
            </h2>
          </div>
          <div className="space-y-4 p-4">
            {inserted.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
                  {t("reportsPage.insertedRecords", { count: inserted.length }) || `Inserted Records (${inserted.length})`}
                </h3>
                <div className="rounded border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20 p-3">
                  <div className="text-sm text-green-800 dark:text-green-300">
                    {t("reportsPage.insertedRecordsDesc", { count: inserted.length }) ||
                      `${inserted.length} new records were successfully added to the database.`}
                  </div>
                </div>
              </div>
            )}

            {updated.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
                  {t("reportsPage.updatedRecords", { count: updated.length }) || `Updated Records (${updated.length})`}
                </h3>
                <div className="rounded border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20 p-3">
                  <div className="text-sm text-blue-800 dark:text-blue-300">
                    {t("reportsPage.updatedRecordsDesc", { count: updated.length }) ||
                      `${updated.length} existing records were successfully updated.`}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {hasIssues && (
        <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
          <div className="border-b border-gray-100 dark:border-neutral-800 bg-red-50 dark:bg-red-950/20 p-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-red-800 dark:text-red-400">
              <AlertTriangle className="h-5 w-5" />
              {t("reportsPage.issuesFound") || "Issues Found"}
            </h2>
          </div>
          <div className="space-y-4 p-4">
            {duplicates.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
                  {t("reportsPage.duplicateRecords", { count: duplicates.length }) || `Duplicate Records (${duplicates.length})`}
                </h3>
                <div className="rounded border border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-950/20 p-3">
                  <div className="text-sm text-yellow-800 dark:text-yellow-300">
                    {t("reportsPage.duplicateRecordsDesc", { count: duplicates.length }) ||
                      `${duplicates.length} records were skipped because they already exist in the database.`}
                  </div>
                </div>
              </div>
            )}

            {errors.length > 0 && (
              <div>
                <h3 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
                  {t("reportsPage.failedRecords", { count: errors.length }) || `Failed Records (${errors.length})`}
                </h3>
                <div className="rounded border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-3">
                  <div className="mb-2 text-sm text-red-800 dark:text-red-300">
                    {t("reportsPage.failedRecordsDesc", { count: errors.length }) ||
                      `${errors.length} records failed to import due to validation errors.`}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
