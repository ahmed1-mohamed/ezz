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
import { Location } from "../types";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";
import { cn } from "@/lib/utils";
import { MapPin, Globe2, Building2, Eye, Edit2, Trash2 } from "lucide-react";

interface LocationsTableProps {
  settings: ReturnType<typeof useTableSettings>;
  locations: Location[];
  selectedLocations: number[];
  onSelectAll: (checked: boolean) => void;
  onSelectLocation: (id: number, checked: boolean) => void;
  onView: (location: Location) => void;
  onEdit: (location: Location) => void;
  onDelete: (location: Location) => void;
}

const DENSITY_CLASS = {
  compact: "py-2",
  comfortable: "py-3",
  spacious: "py-4",
} as const;

const HEAD_CLASS =
  "h-10 px-4 text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 whitespace-nowrap";

/** API placeholders ("N/A", blanks) are shown as an em dash instead of literal text. */
function present(value?: string | null): string | null {
  const v = value?.trim();
  return v && v.toUpperCase() !== "N/A" ? v : null;
}

function parseDate(value: string): Date | null {
  if (!present(value)) return null;
  const date = new Date(value);
  return isNaN(date.getTime()) ? null : date;
}

function formatDate(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric" }).format(date);
}

function formatRelative(date: Date, locale: string) {
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 31536000],
    ["month", 2592000],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];
  const seconds = (date.getTime() - Date.now()) / 1000;
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit);
  }
  return rtf.format(0, "minute");
}

const Dash = () => <span className="text-gray-300 dark:text-neutral-600">—</span>;

export function LocationsTable({
  settings,
  locations,
  selectedLocations,
  onSelectAll,
  onSelectLocation,
  onView,
  onEdit,
  onDelete,
}: LocationsTableProps) {
  const { t, language } = useLanguage();
  const cellY = DENSITY_CLASS[settings.settings.density as keyof typeof DENSITY_CLASS] ?? DENSITY_CLASS.comfortable;

  const selectedCount = locations.filter((l) => selectedLocations.includes(l.location_id)).length;
  const allSelected = locations.length > 0 && selectedCount === locations.length;
  const visibleColumns = ["landmark", "details", "projects", "created", "country", "actions"].filter((c) =>
    settings.isColumnVisible(c)
  ).length;

  const actionButton =
    "inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40";

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs dark:border-neutral-800 dark:bg-neutral-900">
      <div className="w-full overflow-x-auto">
        <Table className="w-full min-w-[880px]">
          <TableHeader>
            <TableRow className="border-b border-gray-200 bg-gray-50/80 hover:bg-gray-50/80 dark:border-neutral-800 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/50">
              <TableHead className="h-10 w-12 ps-4 pe-2">
                <Checkbox
                  checked={allSelected ? true : selectedCount > 0 ? "indeterminate" : false}
                  onCheckedChange={(checked) => onSelectAll(checked === true)}
                  aria-label={t("common.selectAll")}
                />
              </TableHead>
              {settings.isColumnVisible("landmark") && (
                <TableHead className={cn(HEAD_CLASS, "min-w-[220px] text-start")}>{t("locations.columns.landmark")}</TableHead>
              )}
              {settings.isColumnVisible("details") && (
                <TableHead className={cn(HEAD_CLASS, "min-w-[200px] text-start")}>{t("locations.columns.details")}</TableHead>
              )}
              {settings.isColumnVisible("country") && (
                <TableHead className={cn(HEAD_CLASS, "w-40 text-start")}>{t("locations.columns.country")}</TableHead>
              )}
              {settings.isColumnVisible("projects") && (
                <TableHead className={cn(HEAD_CLASS, "w-28 text-center")}>{t("locations.columns.projects")}</TableHead>
              )}
              {settings.isColumnVisible("created") && (
                <TableHead className={cn(HEAD_CLASS, "w-40 text-start")}>{t("locations.columns.created")}</TableHead>
              )}
              {settings.isColumnVisible("actions") && (
                <TableHead className={cn(HEAD_CLASS, "w-32 text-end")}>{t("locations.columns.actions")}</TableHead>
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {locations.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={visibleColumns + 1} className="p-0">
                  <EmptyState
                    type="no_results"
                    title={t("locations.table.noLocations")}
                    message={t("locations.table.noLocationsDesc")}
                    className="py-14"
                  />
                </TableCell>
              </TableRow>
            ) : (
              locations.map((location) => {
                const isSelected = selectedLocations.includes(location.location_id);
                const landmark = present(location.location_landmark);
                const city = present(location.city_name);
                const area = present(location.area_name);
                const country = present(location.country_name);
                const created = parseDate(location.created_at);
                const projects = Number(location.projects_count) || 0;

                return (
                  <TableRow
                    key={location.location_id}
                    data-state={isSelected ? "selected" : undefined}
                    onClick={() => onView(location)}
                    className={cn(
                      "group cursor-pointer border-b border-gray-100 transition-colors last:border-b-0 dark:border-neutral-800/80",
                      isSelected
                        ? "bg-teal-50/60 hover:bg-teal-50 dark:bg-teal-950/20 dark:hover:bg-teal-950/30"
                        : "hover:bg-gray-50/70 dark:hover:bg-neutral-800/40"
                    )}
                  >
                    <TableCell className={cn("ps-4 pe-2", cellY)} onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={(checked) => onSelectLocation(location.location_id, checked === true)}
                        aria-label={landmark ?? `#${location.location_id}`}
                      />
                    </TableCell>

                    {settings.isColumnVisible("landmark") && (
                      <TableCell className={cn("px-4", cellY)}>
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-100 bg-teal-50 text-teal-600 dark:border-teal-900/60 dark:bg-teal-950/50 dark:text-teal-400">
                            <MapPin className="h-4 w-4" />
                          </span>
                          <div className="min-w-0">
                            <p
                              className="line-clamp-1 text-sm font-semibold text-gray-900 transition-colors group-hover:text-teal-700 dark:text-gray-100 dark:group-hover:text-teal-400"
                              title={landmark ?? undefined}
                            >
                              {landmark ?? <Dash />}
                            </p>
                            <p className="text-[11px] text-gray-400 dark:text-gray-500">#{location.location_id}</p>
                          </div>
                        </div>
                      </TableCell>
                    )}

                    {settings.isColumnVisible("details") && (
                      <TableCell className={cn("px-4", cellY)}>
                        {city || area ? (
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200">{city ?? <Dash />}</p>
                            {area && <p className="truncate text-xs text-gray-500 dark:text-gray-400">{area}</p>}
                          </div>
                        ) : (
                          <Dash />
                        )}
                      </TableCell>
                    )}

                    {settings.isColumnVisible("country") && (
                      <TableCell className={cn("px-4", cellY)}>
                        {country ? (
                          <span className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-300">
                            <Globe2 className="h-3 w-3 shrink-0 text-gray-400" />
                            <span className="truncate">{country}</span>
                          </span>
                        ) : (
                          <Dash />
                        )}
                      </TableCell>
                    )}

                    {settings.isColumnVisible("projects") && (
                      <TableCell className={cn("px-4 text-center", cellY)}>
                        <span
                          title={`${projects} ${t("locations.columns.projects")}`}
                          className={cn(
                            "inline-flex min-w-[2.75rem] items-center justify-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold tabular-nums",
                            projects > 0
                              ? "bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:ring-teal-900"
                              : "bg-gray-50 text-gray-400 ring-1 ring-inset ring-gray-200 dark:bg-neutral-800 dark:text-gray-500 dark:ring-neutral-700"
                          )}
                        >
                          <Building2 className="h-3 w-3" />
                          {projects}
                        </span>
                      </TableCell>
                    )}

                    {settings.isColumnVisible("created") && (
                      <TableCell className={cn("px-4 whitespace-nowrap", cellY)}>
                        {created ? (
                          <div title={created.toLocaleString(language)}>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{formatDate(created, language)}</p>
                            <p className="text-[11px] text-gray-400 dark:text-gray-500">{formatRelative(created, language)}</p>
                          </div>
                        ) : (
                          <Dash />
                        )}
                      </TableCell>
                    )}

                    {settings.isColumnVisible("actions") && (
                      <TableCell className={cn("px-4", cellY)} onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-0.5">
                          <button
                            type="button"
                            onClick={() => onView(location)}
                            title={t("common.view")}
                            aria-label={t("common.view")}
                            className={cn(actionButton, "hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-950/40")}
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => onEdit(location)}
                            title={t("common.edit")}
                            aria-label={t("common.edit")}
                            className={cn(actionButton, "hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-950/40")}
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => onDelete(location)}
                            title={t("common.delete")}
                            aria-label={t("common.delete")}
                            className={cn(actionButton, "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30")}
                          >
                            <Trash2 className="h-4 w-4" />
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
    </div>
  );
}
