import React from "react";
import { SafeImage } from "@/components/ui/safe-image";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { EmptyState } from "@/components/ui/empty-state";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Developer } from "../types";
import { CheckCircle2, XCircle, Folder, Eye, Edit2, Trash2 } from "lucide-react";
import { useTableSettings } from "@/hooks/use-table-settings";

interface DevelopersTableProps {
  settings: ReturnType<typeof useTableSettings>;
  developers: Developer[];
  selectedDevelopers: number[];
  onSelectAll: (checked: boolean) => void;
  onSelectDeveloper: (id: number, checked: boolean) => void;
  onToggleStatus: (id: number, newStatus: boolean) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onImport?: (id: number, name: string) => void;
}

export const DevelopersTable = React.memo(function DevelopersTable({
  settings,
  developers,
  selectedDevelopers,
  onSelectAll,
  onSelectDeveloper,
  onToggleStatus,
  onEdit,
  onDelete,
  onImport,
}: DevelopersTableProps) {
  const router = useRouter();
  const { t } = useLanguage();

  const getDensityClass = () => {
    switch (settings.settings.density) {
      case "compact": return "py-1.5 px-3";
      case "spacious": return "py-4 px-3";
      case "comfortable":
      default: return "py-2.5 px-3";
    }
  };

  const densityClass = getDensityClass();

  return (
    <div className="rounded-xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[1000px]">
        <TableHeader>
          <TableRow className="bg-white dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-900 border-b border-gray-100 dark:border-neutral-800">
            <TableHead className="w-[40px] px-3">
              <Checkbox
                checked={
                  developers.length > 0 &&
                  selectedDevelopers.length === developers.length
                }
                onCheckedChange={onSelectAll}
              />
            </TableHead>
            {settings.isColumnVisible("developer") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[150px] px-3 text-[11px] bg-transparent">{t("developers.columns.developer")}</TableHead>
            )}
            {settings.isColumnVisible("country") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[100px] px-3 text-[11px] bg-transparent">{t("developers.columns.country")}</TableHead>
            )}
            {settings.isColumnVisible("city") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[90px] px-3 text-[11px] bg-transparent">{t("developers.columns.city")}</TableHead>
            )}
            {settings.isColumnVisible("projects") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[80px] px-3 text-[11px] text-center bg-transparent">{t("developers.columns.projects")}</TableHead>
            )}
            {settings.isColumnVisible("website") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[130px] px-3 text-[11px] bg-transparent">{t("developers.columns.website")}</TableHead>
            )}
            {settings.isColumnVisible("email") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[180px] px-3 text-[11px] bg-transparent">{t("developers.columns.email")}</TableHead>
            )}
            {settings.isColumnVisible("contact") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[120px] px-3 text-[11px] bg-transparent">{t("developers.columns.contact")}</TableHead>
            )}
            {settings.isColumnVisible("status") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[100px] px-3 text-[11px] text-center bg-transparent">{t("developers.columns.status")}</TableHead>
            )}

            {settings.isColumnVisible("actions") && (
              <TableHead className="font-semibold text-gray-500 uppercase tracking-wider w-[70px] px-3 text-[11px] text-end pe-6 bg-transparent">{t("developers.columns.actions")}</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {developers.length === 0 ? (
            <TableRow>
              <TableCell colSpan={11} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("developers.noDevelopers")}
                  message={t("developers.noDevelopersDesc")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            developers.map((developer) => (
              <TableRow
                key={developer.id}
                className="hover:bg-gray-50/60 dark:hover:bg-neutral-800/50 cursor-pointer border-b border-gray-100 dark:border-neutral-800 transition-colors"
                onClick={() => router.push(`/admin/developers/${developer.id}`)}
              >
                <TableCell className={`px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={selectedDevelopers.includes(developer.id)}
                    onCheckedChange={(checked) =>
                      onSelectDeveloper(developer.id, checked as boolean)
                    }
                  />
                </TableCell>
                {settings.isColumnVisible("developer") && (
                  <TableCell className={`px-3 ${densityClass}`}>
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full overflow-hidden flex-shrink-0 bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 font-semibold text-xs tracking-wider border border-teal-100/50 dark:border-teal-800/50">
                        {developer.logo && developer.logo !== "U" && !developer.logo.includes("default") ? (
                          <SafeImage
                            src={developer.logo}
                            fallbackSrc="/images/default-logo.svg"
                            alt={developer.name}
                            width={36}
                            height={36}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span>
                            {developer.name
                              ?.split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")
                              .toUpperCase() || "D"}
                          </span>
                        )}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-gray-100 text-[13px] hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        {developer.name}
                      </span>
                    </div>
                  </TableCell>
                )}
                {settings.isColumnVisible("country") && (
                  <TableCell className={`px-3 ${densityClass}`}>
                    <div className="flex items-center text-[13px]">
                      {developer.countries?.split(" ").map((word, i) => (
                        <span key={i} className={i === 0 && word.length <= 2 ? "text-gray-400 dark:text-gray-500 me-1.5 font-medium text-xs" : "text-gray-700 dark:text-gray-300"}>
                          {word}{i !== developer.countries.split(" ").length - 1 ? " " : ""}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                )}
                {settings.isColumnVisible("city") && (
                  <TableCell
                    className={`text-gray-700 dark:text-gray-300 px-3 text-[13px] truncate max-w-[90px] ${densityClass}`}
                    title={developer.cities}
                  >
                    {developer.cities}
                  </TableCell>
                )}
                {settings.isColumnVisible("projects") && (
                  <TableCell className={`px-3 text-center ${densityClass}`}>
                    <div className="flex items-center justify-center gap-1.5 text-teal-600 dark:text-teal-400 font-medium text-[13px]">
                      <Folder className="w-4 h-4 text-teal-500 dark:text-teal-500" />
                      <span>{developer.projects}</span>
                    </div>
                  </TableCell>
                )}
                {settings.isColumnVisible("website") && (
                  <TableCell className={`px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                    <a
                      href={developer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 dark:text-teal-400 hover:underline text-sm truncate max-w-[130px] inline-block"
                    >
                      {developer.website}
                    </a>
                  </TableCell>
                )}
                {settings.isColumnVisible("email") && (
                  <TableCell className={`text-gray-700 dark:text-gray-300 px-3 text-sm truncate max-w-[160px] ${densityClass}`}>
                    {developer.email}
                  </TableCell>
                )}
                {settings.isColumnVisible("contact") && (
                  <TableCell className={`text-gray-700 dark:text-gray-300 px-3 text-sm ${densityClass}`}>
                    {developer.contact}
                  </TableCell>
                )}
                {settings.isColumnVisible("status") && (
                  <TableCell className={`px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-2">
                      <Switch
                        checked={developer.status}
                        onCheckedChange={(checked) =>
                          onToggleStatus(developer.id, checked)
                        }
                        className="data-[state=checked]:bg-green-500 transition-colors duration-300 shadow-2xs"
                      />
                      <Badge
                        variant={developer.status ? "default" : "secondary"}
                        className={`transition-all duration-500 flex items-center justify-center w-6 h-6 p-0 rounded-full shadow-2xs ${developer.status
                            ? "bg-green-100 dark:bg-green-950/60 border-green-300 dark:border-green-800"
                            : "bg-gray-100 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700"
                          }`}
                      >
                        {developer.status ? (
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 animate-in fade-in zoom-in spin-in-12 duration-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-gray-400 dark:text-gray-500 animate-in fade-in zoom-in -spin-in-12 duration-500" />
                        )}
                      </Badge>
                    </div>
                  </TableCell>
                )}

                {settings.isColumnVisible("actions") && (
                  <TableCell className={`px-3 text-end pe-6 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/admin/developers/${developer.id}`);
                        }}
                        className="text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEdit(developer.id);
                        }}
                        className="text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(developer.id);
                        }}
                        className="text-red-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
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