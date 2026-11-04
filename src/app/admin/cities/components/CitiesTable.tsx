"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Download, Building2, MapPin, Calendar, Globe2, Eye, Edit2, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";
import { useTableSettings } from "@/hooks/use-table-settings";

interface City {
  id: number;
  name: string;
  areaName: string;
  countryName: string;
  locationsCount: number;
  projectsCount: number;
  createdAt: string;
  updatedAt: string;
  status: boolean;
}

interface CitiesTableProps {
  cities: City[];
  selectedCities: number[];
  onSelectAll: (checked: boolean) => void;
  onSelectCity: (id: number, checked: boolean) => void;
  tableSettings: ReturnType<typeof useTableSettings>;
  cityVisibility: Record<number, boolean>;
  onToggleVisibility: (id: number) => void;
  onViewCity: (city: City) => void;
  onEditCity: (id: number) => void;
  onDeleteCity: (id: number) => void;
  onImportCity?: (id: number, name: string) => void;
}

function formatDate(dateString: string, locale: string = "en") {
  if (!dateString || dateString === "N/A") return "N/A";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  } catch (error) {
    return dateString;
  }
}

export function CitiesTable({
  cities,
  selectedCities,
  onSelectAll,
  onSelectCity,
  tableSettings,
  cityVisibility,
  onToggleVisibility,
  onViewCity,
  onEditCity,
  onDeleteCity,
  onImportCity,
}: CitiesTableProps) {
  const { t, language } = useLanguage();

  const getDensityClass = () => {
    switch (tableSettings.settings.density) {
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
      <Table className="w-full min-w-[950px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className="w-10 px-3.5 text-center">
              <Checkbox
                checked={
                  cities.length > 0 &&
                  selectedCities.length === cities.length
                }
                onCheckedChange={onSelectAll}
              />
            </TableHead>

            {tableSettings.isColumnVisible("name") && (
              <TableHead
                className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider min-w-[160px] text-start"
              >
                {t("cities.columns.name")}
              </TableHead>
            )}

            {tableSettings.isColumnVisible("area") && (
              <TableHead
                className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider min-w-[130px] text-start"
              >
                {t("cities.columns.area")}
              </TableHead>
            )}

            {tableSettings.isColumnVisible("country") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider w-32">
                {t("cities.columns.country")}
              </TableHead>
            )}

            {tableSettings.isColumnVisible("locationsCount") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider w-32 text-center">
                {t("cities.columns.locationsCount")}
              </TableHead>
            )}

            {tableSettings.isColumnVisible("projectsCount") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider w-32 text-center">
                {t("cities.columns.projectsCount")}
              </TableHead>
            )}

            {tableSettings.isColumnVisible("created") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider w-36">
                {t("cities.columns.created")}
              </TableHead>
            )}

            {tableSettings.isColumnVisible("status") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3.5 text-[11px] uppercase tracking-wider text-center w-24">
                {t("cities.columns.status")}
              </TableHead>
            )}

            {tableSettings.isColumnVisible("import") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-28 px-3.5 text-[11px] uppercase tracking-wider">
                {t("cities.columns.import")}
              </TableHead>
            )}

            {tableSettings.isColumnVisible("actions") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-24 px-3.5 text-[11px] uppercase tracking-wider">
                {t("cities.columns.actions")}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {cities.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("cities.table.noCities")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            cities.map((city) => (
              <TableRow
                key={city.id}
                className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <TableCell className={`px-3.5 text-center ${densityClass}`}>
                  <Checkbox
                    checked={selectedCities.includes(city.id)}
                    onCheckedChange={(checked) =>
                      onSelectCity(city.id, checked as boolean)
                    }
                  />
                </TableCell>

                {tableSettings.isColumnVisible("name") && (
                  <TableCell className={`px-3.5 ${densityClass}`}>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="h-7 w-7 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-100 dark:border-teal-900/60 flex items-center justify-center text-teal-700 dark:text-teal-300 shrink-0">
                        <Building2 className="h-3.5 w-3.5" />
                      </span>
                      <button
                        type="button"
                        onClick={() => onViewCity(city)}
                        className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-pointer text-start truncate"
                      >
                        {city.name}
                      </button>
                    </div>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("area") && (
                  <TableCell className={`px-3.5 text-xs text-gray-600 dark:text-gray-300 font-medium ${densityClass}`}>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gray-400" />
                      <span>{city.areaName}</span>
                    </span>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("country") && (
                  <TableCell className={`px-3.5 text-xs text-gray-700 dark:text-gray-300 font-medium ${densityClass}`}>
                    <span className="inline-flex items-center gap-1.5">
                      <Globe2 className="h-3.5 w-3.5 text-gray-400" />
                      <span>{city.countryName}</span>
                    </span>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("locationsCount") && (
                  <TableCell className={`px-3.5 text-center ${densityClass}`}>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neutral-700">
                      {city.locationsCount}
                    </span>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("projectsCount") && (
                  <TableCell className={`px-3.5 text-center ${densityClass}`}>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800">
                      {city.projectsCount}
                    </span>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("created") && (
                  <TableCell className={`px-3.5 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap font-mono ${densityClass}`}>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gray-400" />
                      <span>{formatDate(city.createdAt, language)}</span>
                    </span>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("status") && (
                  <TableCell className={`px-3.5 text-center ${densityClass}`}>
                    <Switch
                      checked={cityVisibility[city.id] ?? city.status}
                      onCheckedChange={() => onToggleVisibility(city.id)}
                    />
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("import") && (
                  <TableCell className={`px-3.5 text-center ${densityClass}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onImportCity?.(city.id, city.name);
                      }}
                      className="h-8 px-2.5 text-xs gap-1.5 border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:text-teal-700 dark:hover:text-teal-300 cursor-pointer shadow-2xs font-medium"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>{t("cities.columns.import")}</span>
                    </Button>
                  </TableCell>
                )}

                {tableSettings.isColumnVisible("actions") && (
                  <TableCell className={`px-3.5 text-center ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        type="button"
                        onClick={() => onViewCity(city)}
                        title={t("common.view")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-colors cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onEditCity(city.id)}
                        title={t("common.edit")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-colors cursor-pointer"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onDeleteCity(city.id)}
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
