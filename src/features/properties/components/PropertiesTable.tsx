import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, Edit, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter, usePathname } from "next/navigation";
import { Property } from "../types";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";
import { cn } from "@/lib/utils";

interface PropertiesTableProps {
  settings: ReturnType<typeof useTableSettings>;
  properties: Property[];
  selectedProperties: number[];
  onSelectAll: (checked: boolean) => void;
  onSelectProperty: (id: number, checked: boolean) => void;
  onView?: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onImport?: (id: number, propertyName: string) => void;
}

export const PropertiesTable = React.memo(function PropertiesTable({
  settings,
  properties,
  selectedProperties,
  onSelectAll,
  onSelectProperty,
  onView,
  onEdit,
  onDelete,
  onImport,
}: PropertiesTableProps) {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";

  const getDensityClass = () => {
    switch (settings.settings.density) {
      case "compact": return "py-1.5 px-3";
      case "spacious": return "py-3.5 px-3";
      case "comfortable":
      default: return "py-2.5 px-3";
    }
  };

  const densityClass = getDensityClass();

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[1050px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className="w-[40px] px-3">
              <Checkbox
                checked={
                  properties.length > 0 &&
                  selectedProperties.length === properties.length
                }
                onCheckedChange={onSelectAll}
              />
            </TableHead>

            {settings.isColumnVisible("propertyName") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[110px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.propertyName")}</TableHead>
            )}
            {settings.isColumnVisible("unitNumber") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[90px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.unitNumber")}</TableHead>
            )}
            {settings.isColumnVisible("type") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[120px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.type")}</TableHead>
            )}
            {settings.isColumnVisible("area") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[70px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.location")}</TableHead>
            )}
            {settings.isColumnVisible("size") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[90px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.size")}</TableHead>
            )}
            {settings.isColumnVisible("price") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[120px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.price")}</TableHead>
            )}
            {settings.isColumnVisible("ownerName") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[110px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.ownerName")}</TableHead>
            )}
            {settings.isColumnVisible("status") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[100px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.status")}</TableHead>
            )}
            {settings.isColumnVisible("listingStatus") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[90px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.listingStatus")}</TableHead>
            )}

            {settings.isColumnVisible("actions") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-[100px] px-3 text-[11px] uppercase tracking-wider">{t("properties.columns.actions")}</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.length === 0 ? (
            <TableRow>
              <TableCell colSpan={12} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("properties.table.noData")}
                  message={t("properties.table.noDataDesc")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            properties.map((property) => (
              <TableRow key={property.id} className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors">
                <TableCell className={`px-3 ${densityClass}`}>
                  <Checkbox
                    checked={selectedProperties.includes(property.id)}
                    onCheckedChange={(checked) =>
                      onSelectProperty(property.id, checked as boolean)
                    }
                  />
                </TableCell>

                {settings.isColumnVisible("propertyName") && (
                  <TableCell className={`px-3 ${densityClass}`}>
                    <button
                      onClick={() => router.push(`${routePrefix}/properties/${property.id}`)}
                      className="text-gray-900 dark:text-gray-100 text-xs font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none truncate max-w-[200px]"
                    >
                      {property.property_name || "-"}
                    </button>
                  </TableCell>
                )}
                {settings.isColumnVisible("unitNumber") && (
                  <TableCell className={`text-gray-600 dark:text-gray-300 text-xs px-3 whitespace-nowrap ${densityClass}`}>
                    {property.unitNumber || "-"}
                  </TableCell>
                )}
                {settings.isColumnVisible("type") && (
                  <TableCell className={`text-gray-600 dark:text-gray-300 text-xs px-3 truncate ${densityClass}`}>
                    {property.type || "Apartment"}
                  </TableCell>
                )}
                {settings.isColumnVisible("area") && (
                  <TableCell className={`text-gray-700 dark:text-gray-300 text-xs px-3 ${densityClass}`}>
                    {property.area || "-"}
                  </TableCell>
                )}
                {settings.isColumnVisible("size") && (
                  <TableCell className={`text-gray-600 dark:text-gray-400 text-xs px-3 whitespace-nowrap ${densityClass}`}>
                    {property.size || "-"}
                  </TableCell>
                )}
                {settings.isColumnVisible("price") && (
                  <TableCell className={`text-gray-900 dark:text-gray-100 font-bold text-xs px-3 whitespace-nowrap ${densityClass}`}>
                    {property.price}
                  </TableCell>
                )}
                {settings.isColumnVisible("ownerName") && (
                  <TableCell className={`text-gray-600 dark:text-gray-300 text-xs px-3 truncate ${densityClass}`}>
                    {property.ownerName || "-"}
                  </TableCell>
                )}
                {settings.isColumnVisible("status") && (
                  <TableCell className={`px-3 ${densityClass}`}>
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border",
                        property.status?.toLowerCase() === "reserved"
                          ? "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800"
                          : "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800"
                      )}
                    >
                      {t(
                        property.status?.toLowerCase() === "reserved"
                          ? "properties.filters.statusValues.reserved"
                          : "properties.filters.statusValues.available"
                      )}
                    </span>
                  </TableCell>
                )}
                {settings.isColumnVisible("listingStatus") && (
                  <TableCell className={`px-3 ${densityClass}`}>
                    {property.listingStatus ? (
                      <span
                        className={cn(
                          "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border",
                          property.listingStatus.toLowerCase() === "active"
                            ? "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800"
                            : "bg-gray-50 text-gray-600 border-gray-200 dark:bg-neutral-800 dark:text-gray-400 dark:border-neutral-700"
                        )}
                      >
                        {property.listingStatus.toLowerCase() === "active"
                          ? t("common.active")
                          : property.listingStatus.toLowerCase() === "inactive"
                            ? t("common.inactive")
                            : property.listingStatus}
                      </span>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                )}

                {settings.isColumnVisible("actions") && (
                  <TableCell className={`text-center px-3 ${densityClass}`}>
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => router.push(`${routePrefix}/properties/${property.id}`)}
                        title={t("common.view")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => onEdit(property.id)}
                        title={t("common.edit")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => onDelete(property.id)}
                        title={t("common.delete")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
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
});