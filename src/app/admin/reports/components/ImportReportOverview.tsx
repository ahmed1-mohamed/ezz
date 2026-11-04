"use client";

import {
  CheckCircle,
  XCircle,
  TrendingUp,
  FileText,
  Copy,
  AlertTriangle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { renderMessage } from "../utils";

interface ImportReportOverviewProps {
  report: any;
  insertedCount: number;
  updatedCount: number;
  duplicatesCount: number;
  errorsCount: number;
  successCount: number;
  totalProcessed: number;
  successRate: string | number;
}

export function ImportReportOverview({
  report,
  insertedCount,
  updatedCount,
  duplicatesCount,
  errorsCount,
  successCount,
  totalProcessed,
  successRate,
}: ImportReportOverviewProps) {
  const { t } = useLanguage();
  const rateNum = Number(successRate);

  return (
    <div className="rounded-lg border bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        {report.success ? (
          <CheckCircle className="h-8 w-8 text-green-500" />
        ) : (
          <XCircle className="h-8 w-8 text-red-500" />
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t("reportsPage.importReport") || "Import Report"}
          </h1>
          <p
            className={`text-sm ${
              report.success ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}
          >
            {renderMessage(report.message)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20 p-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-800 dark:text-green-300">
              {t("reportsPage.inserted") || "Inserted"}
            </span>
          </div>
          <div className="mt-1 text-2xl font-bold text-green-900 dark:text-green-100">
            {insertedCount}
          </div>
        </div>

        <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20 p-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              {t("reportsPage.updated") || "Updated"}
            </span>
          </div>
          <div className="mt-1 text-2xl font-bold text-blue-900 dark:text-blue-100">
            {updatedCount}
          </div>
        </div>

        <div className="rounded-lg border border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-950/20 p-4">
          <div className="flex items-center gap-2">
            <Copy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
              {t("reportsPage.duplicates") || "Duplicates"}
            </span>
          </div>
          <div className="mt-1 text-2xl font-bold text-yellow-900 dark:text-yellow-100">
            {duplicatesCount}
          </div>
        </div>

        <div className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <span className="text-sm font-medium text-red-800 dark:text-red-300">
              {t("reportsPage.errors") || "Errors"}
            </span>
          </div>
          <div className="mt-1 text-2xl font-bold text-red-900 dark:text-red-100">
            {errorsCount}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-gray-50 dark:bg-neutral-950 p-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {t("reportsPage.successRate") || "Success Rate"}
          </span>
          <span
            className={`text-lg font-bold ${
              rateNum >= 80
                ? "text-green-600 dark:text-green-400"
                : rateNum >= 50
                ? "text-yellow-600 dark:text-yellow-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {successRate}%
          </span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-neutral-800">
          <div
            className={`h-2 rounded-full ${
              rateNum >= 80
                ? "bg-green-500"
                : rateNum >= 50
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{ width: `${successRate}%` }}
          />
        </div>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {t("reportsPage.recordsProcessedSuccess", { count: successCount, total: totalProcessed }) ||
            `${successCount} of ${totalProcessed} records processed successfully`}
        </div>
      </div>
    </div>
  );
}
