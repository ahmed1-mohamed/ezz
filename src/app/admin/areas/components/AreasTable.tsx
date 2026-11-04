"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, MapPin, Calendar, Eye, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { getApiErrorMessage } from "@/lib/api-errors";
import { EmptyState } from "@/components/ui/empty-state";

export interface Area {
  area_id: number;
  area_name: string;
  latitude: string;
  longitude: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  dld_area_id: number | undefined;
  locations_count: number | undefined;
  projects_count: number | undefined;
  status: boolean;
}

interface AreasTableProps {
  settings: ReturnType<typeof useTableSettings>;
  areas: Area[];
  isLoading: boolean;
  isError: boolean;
  error: any;
  selectedAreas: number[];
  areaStatuses?: Record<number, boolean>;
  onRetry: () => void;
  onSelectAll: (checked: boolean) => void;
  onSelectArea: (id: number, checked: boolean) => void;
  onToggleStatus?: (id: number) => void;
  onView: (area: Area) => void;
  onEdit: (area: Area) => void;
  onDelete: (id: number) => void;
}

function formatDate(dateString: string) {
  if (!dateString || dateString === "N/A") return "N/A";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  } catch (error) {
    return dateString;
  }
}

export function AreasTable({
  settings,
  areas,
  isLoading,
  isError,
  error,
  selectedAreas,
  areaStatuses = {},
  onRetry,
  onSelectAll,
  onSelectArea,
  onToggleStatus,
  onView,
  onEdit,
  onDelete,
}: AreasTableProps) {
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

  if (isLoading) {
    return (
      <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="h-4 w-48 rounded" />
            <Skeleton className="h-4 w-24 rounded" />
            <Skeleton className="h-4 w-20 rounded" />
            <Skeleton className="h-4 w-16 rounded ms-auto" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50/50 dark:bg-red-950/30 p-5 space-y-3">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0" />
          <p className="text-xs sm:text-sm text-red-800 dark:text-red-200 font-medium">
            {getApiErrorMessage(error, t, t("areas.messages.loadFailed"))}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="h-8 text-xs border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40 cursor-pointer"
        >
          {t("areas.tryAgain")}
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[800px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className="w-10 px-3.5 text-center">
              <Checkbox
                checked={areas.length > 0 && selectedAreas.length === areas.length}
                onCheckedChange={onSelectAll}
              />
            </TableHead>

            {settings.isColumnVisible("areaName") && (
              <TableHead
                className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider min-w-[180px] text-start"
              >
                {t("areas.columns.areaName")}
              </TableHead>
            )}

            {settings.isColumnVisible("description") && (
              <TableHead
                className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider min-w-[220px] max-w-sm text-start"
              >
                {t("areas.columns.description")}
              </TableHead>
            )}

            {settings.isColumnVisible("created") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider w-36">
                {t("areas.columns.created")}
              </TableHead>
            )}

            {settings.isColumnVisible("status") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider text-center w-28">
                {t("areas.columns.status")}
              </TableHead>
            )}

            {settings.isColumnVisible("actions") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-24 px-3.5 text-[11px] uppercase tracking-wider">
                {t("areas.columns.actions")}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {areas.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("areas.table.noAreas")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            areas.map((area) => {
              const isActive = areaStatuses[area.area_id] ?? area.status;

              return (
                <TableRow
                  key={area.area_id}
                  className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <TableCell className={`px-3.5 text-center ${densityClass}`}>
                    <Checkbox
                      checked={selectedAreas.includes(area.area_id)}
                      onCheckedChange={(checked) =>
                        onSelectArea(area.area_id, checked as boolean)
                      }
                    />
                  </TableCell>

                  {settings.isColumnVisible("areaName") && (
                    <TableCell className={`px-3.5 ${densityClass}`}>
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="h-7 w-7 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-100 dark:border-teal-900/60 flex items-center justify-center text-teal-700 dark:text-teal-300 shrink-0">
                          <MapPin className="h-3.5 w-3.5" />
                        </span>
                        <button
                          type="button"
                          onClick={() => onView(area)}
                          className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-pointer text-start truncate"
                        >
                          {area.area_name}
                        </button>
                      </div>
                    </TableCell>
                  )}

                  {settings.isColumnVisible("description") && (
                    <TableCell className={`px-3.5 text-xs text-gray-600 dark:text-gray-300 ${densityClass}`}>
                      <div className="line-clamp-2 max-w-sm" title={area.description || t("common.na")}>
                        {area.description || t("common.na")}
                      </div>
                    </TableCell>
                  )}

                  {settings.isColumnVisible("created") && (
                    <TableCell className={`px-3.5 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap font-mono ${densityClass}`}>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-gray-400" />
                        <span>{formatDate(area.created_at)}</span>
                      </span>
                    </TableCell>
                  )}

                  {settings.isColumnVisible("status") && (
                    <TableCell className={`px-3.5 text-center ${densityClass}`}>
                      {onToggleStatus ? (
                        <button
                          type="button"
                          onClick={() => onToggleStatus(area.area_id)}
                          className="cursor-pointer focus:outline-none"
                        >
                          {isActive ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
                              {t("common.active")}
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400">
                              {t("common.inactive")}
                            </span>
                          )}
                        </button>
                      ) : isActive ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
                          {t("common.active")}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400">
                          {t("common.inactive")}
                        </span>
                      )}
                    </TableCell>
                  )}

                  {settings.isColumnVisible("actions") && (
                    <TableCell className={`px-3.5 text-center ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-1">
                        <button
                          type="button"
                          onClick={() => onView(area)}
                          title={t("common.view")}
                          className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-colors cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onEdit(area)}
                          title={t("common.edit")}
                          className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-colors cursor-pointer"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onDelete(area.area_id)}
                          title={t("common.delete")}
                          className="h-7 w-7 inline-flex items-center justify-center rounded text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}