"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";
import { Sparkles, Tag, Eye, Edit2, Trash2 } from "lucide-react";

export interface Feature {
  id: number;
  featureName: string;
  isAmenity: boolean;
  icon: string;
}

interface FeaturesTableProps {
  settings: ReturnType<typeof useTableSettings>;
  features: Feature[];
  selectedFeatures: number[];
  handleSelectAll: (checked: boolean) => void;
  handleSelectFeature: (id: number, checked: boolean) => void;
  onView: (feature: Feature) => void;
  onEdit: (feature: Feature) => void;
  onDelete: (feature: Feature) => void;
}

export function FeaturesTable({
  settings,
  features,
  selectedFeatures,
  handleSelectAll,
  handleSelectFeature,
  onView,
  onEdit,
  onDelete,
}: FeaturesTableProps) {
  const { t } = useLanguage();

  const getDensityClass = () => {
    switch (settings.settings.density) {
      case "compact":
        return "py-2 px-3";
      case "spacious":
        return "py-4 px-4";
      case "comfortable":
      default:
        return "py-3 px-3.5";
    }
  };

  const densityClass = getDensityClass();

  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[750px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className="w-10 px-3.5 text-center">
              <Checkbox
                checked={
                  features.length > 0 &&
                  selectedFeatures.length === features.length
                }
                onCheckedChange={handleSelectAll}
              />
            </TableHead>

            {settings.isColumnVisible("id") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider w-20">
                {t("features.columns.id")}
              </TableHead>
            )}

            {settings.isColumnVisible("featureName") && (
              <TableHead
                className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider text-start"
              >
                {t("features.columns.featureName")}
              </TableHead>
            )}

            {settings.isColumnVisible("isAmenity") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider w-36 text-center">
                {t("features.columns.isAmenity")}
              </TableHead>
            )}

            {settings.isColumnVisible("icon") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider w-36">
                {t("features.columns.icon")}
              </TableHead>
            )}

            {settings.isColumnVisible("actions") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-24 px-3.5 text-[11px] uppercase tracking-wider">
                {t("features.columns.actions")}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {features.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("features.table.noFeatures")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            features.map((feature) => (
              <TableRow
                key={feature.id}
                className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <TableCell className={`px-3.5 text-center ${densityClass}`}>
                  <Checkbox
                    checked={selectedFeatures.includes(feature.id)}
                    onCheckedChange={(checked) =>
                      handleSelectFeature(feature.id, checked as boolean)
                    }
                  />
                </TableCell>

                {settings.isColumnVisible("id") && (
                  <TableCell className={`px-3.5 font-mono text-xs text-gray-500 dark:text-gray-400 font-semibold ${densityClass}`}>
                    #{feature.id}
                  </TableCell>
                )}

                {settings.isColumnVisible("featureName") && (
                  <TableCell className={`px-3.5 ${densityClass}`}>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="h-7 w-7 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-100 dark:border-teal-900/60 flex items-center justify-center text-teal-700 dark:text-teal-300 shrink-0">
                        <Tag className="h-3.5 w-3.5" />
                      </span>
                      <span
                        onClick={() => onView(feature)}
                        className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-pointer truncate"
                      >
                        {feature.featureName}
                      </span>
                    </div>
                  </TableCell>
                )}

                {settings.isColumnVisible("isAmenity") && (
                  <TableCell className={`px-3.5 text-center ${densityClass}`}>
                    {feature.isAmenity ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
                        <Sparkles className="h-3 w-3" />
                        <span>{t("features.filters.yes")}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400">
                        {t("features.filters.no")}
                      </span>
                    )}
                  </TableCell>
                )}

                {settings.isColumnVisible("icon") && (
                  <TableCell className={`px-3.5 ${densityClass}`}>
                    {feature.icon ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-gray-50 dark:bg-neutral-800/80 border border-gray-200 dark:border-neutral-700 text-xs font-mono text-gray-600 dark:text-gray-300 max-w-[140px] truncate">
                        {feature.icon}
                      </span>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-600 text-xs">-</span>
                    )}
                  </TableCell>
                )}

                {settings.isColumnVisible("actions") && (
                  <TableCell className={`px-3.5 text-center ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        type="button"
                        onClick={() => onView(feature)}
                        title={t("common.view")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-colors cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onEdit(feature)}
                        title={t("common.edit")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-colors cursor-pointer"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete(feature)}
                        title={t("common.delete")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}