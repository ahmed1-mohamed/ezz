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

interface ProjectSummaryReportProps {
  report: any;
  pName: any;
}

export function ProjectSummaryReport({ report, pName }: ProjectSummaryReportProps) {
  const { t } = useLanguage();
  const proj = report.data;

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      {pName && <div className="item-center flex justify-center text-lg font-semibold">{pName}</div>}
      <div className="rounded-lg border bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          {report.success ? (
            <CheckCircle className="h-8 w-8 text-green-500" />
          ) : (
            <XCircle className="h-8 w-8 text-red-500" />
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {report.success
                ? (t("reportsPage.importSuccessful") || "Import Successful")
                : (t("reportsPage.importFailed") || "Import Failed")}
            </h1>
            <p className={`text-sm ${report.success ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              {renderMessage(report.message) || (t("reportsPage.projectImportSuccessMsg") || "Project data imported successfully.")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-teal-200 dark:border-teal-900 bg-teal-50 dark:bg-teal-950/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-medium text-teal-900 dark:text-teal-200">{t("reportsPage.projectName") || "Project Name"}</span>
            </div>
            <div className="text-xl font-bold text-teal-900 dark:text-teal-100 break-words">{proj.project_name || "N/A"}</div>
          </div>

          <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-200">{t("reportsPage.totalUnits") || "Total Units"}</span>
            </div>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{proj.total_units ?? 0}</div>
          </div>

          <div className="rounded-lg border border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-950/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Copy className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-900 dark:text-purple-200">{t("reportsPage.activeProperties") || "Active Properties"}</span>
            </div>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{proj.active_properties_count ?? 0}</div>
          </div>

          <div className="rounded-lg border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-900 dark:text-green-200">{t("reportsPage.availableProperties") || "Available Properties"}</span>
            </div>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">{proj.available_properties_count ?? 0}</div>
          </div>

          <div className="rounded-lg border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-900 dark:text-orange-200">{t("reportsPage.bookedProperties") || "Booked Properties"}</span>
            </div>
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">{proj.booked_properties_count ?? 0}</div>
          </div>

          <div className="rounded-lg border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-900 dark:text-indigo-200">{t("reportsPage.availableUnits") || "Available Units"}</span>
            </div>
            <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">{proj.available_units ?? 0}</div>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-950 p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{t("reportsPage.projectType") || "Project Type"}</span>
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-gray-100 capitalize">{proj.project_type || "N/A"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
