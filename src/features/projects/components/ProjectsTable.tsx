"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useRouter, usePathname } from "next/navigation";
import { Project } from "../types";
import { Eye, Edit, Trash2, Star } from "lucide-react";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface ProjectsTableProps {
  settings: ReturnType<typeof useTableSettings>;
  projects: Project[];
  selectedProjects: number[];
  onSelectAll: (checked: boolean) => void;
  onSelectProject: (id: number, checked: boolean) => void;
  onActiveToggle?: (id: number, checked: boolean) => void;
  /** Project whose visibility toggle is being saved; its switch is disabled meanwhile. */
  togglingActiveId?: number;
  onToggleFavorite?: (id: number, isFavorite: boolean) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onImport?: (id: number, name: string) => void;
}

export const ProjectsTable = React.memo(function ProjectsTable({
  settings,
  projects,
  selectedProjects,
  onSelectAll,
  onSelectProject,
  onActiveToggle,
  togglingActiveId,
  onEdit,
  onDelete,
}: ProjectsTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const isDeveloper = routePrefix === "/developer";
  const { t } = useLanguage();
  const [starredProjects, setStarredProjects] = React.useState<Record<number, boolean>>({});

  const toggleStar = (id: number) => {
    setStarredProjects((prev) => {
      const current = prev[id] ?? projects.find((p) => p.id === id)?.is_favourite ?? false;
      return { ...prev, [id]: !current };
    });
  };

  const getDensityClass = () => {
    switch (settings.settings.density) {
      case "compact": return "py-1.5 px-3";
      case "spacious": return "py-3.5 px-3";
      case "comfortable":
      default: return "py-2.5 px-3";
    }
  };

  const densityClass = getDensityClass();

  const formatLocation = (project: Project) => {
    const parts = [];
    if (project.country_code) parts.push(project.country_code);
    if (project.country_name) parts.push(project.country_name);
    const countryStr = parts.join(" ");
    const cityStr = project.city_name || project.area_name || "";
    if (countryStr && cityStr) return `${countryStr} · ${cityStr}`;
    return countryStr || cityStr || "-";
  };

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[950px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className="w-[40px] px-3">
              <Checkbox
                checked={
                  projects.length > 0 &&
                  selectedProjects.length === projects.length
                }
                onCheckedChange={onSelectAll}
              />
            </TableHead>

            {isDeveloper ? (
              <>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider">{t("projects.columns.project")}</TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider">{t("projects.columns.type")}</TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider">{t("projects.columns.propertiesCount")}</TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider">{t("projects.columns.country")}</TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider">{t("projects.columns.city")}</TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider">{t("projects.columns.currency")}</TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider">{t("projects.columns.dimensionUnit")}</TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider text-center">{t("projects.columns.active")}</TableHead>
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] uppercase tracking-wider">{t("projects.columns.status")}</TableHead>
              </>
            ) : (
              <>
                {settings.isColumnVisible("project") && (
                  <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[190px] px-3 text-[11px] uppercase tracking-wider">
                    {t("projects.columns.project")}
                  </TableHead>
                )}
                {settings.isColumnVisible("developer") && (
                  <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[150px] px-3 text-[11px] uppercase tracking-wider">
                    {t("projects.columns.developer")}
                  </TableHead>
                )}
                {settings.isColumnVisible("country") && (
                  <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[170px] px-3 text-[11px] uppercase tracking-wider">
                    {t("projects.columns.country")}
                  </TableHead>
                )}
                {settings.isColumnVisible("units") && (
                  <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[100px] px-3 text-[11px] uppercase tracking-wider">
                    {t("projects.columns.propertiesCount")}
                  </TableHead>
                )}
                {settings.isColumnVisible("type") && (
                  <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[110px] px-3 text-[11px] uppercase tracking-wider">
                    {t("projects.columns.type")}
                  </TableHead>
                )}
                {settings.isColumnVisible("price") && (
                  <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[110px] px-3 text-[11px] uppercase tracking-wider">
                    {t("projects.columns.price")}
                  </TableHead>
                )}
                {settings.isColumnVisible("visibility") && (
                  <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[90px] px-3 text-[11px] uppercase tracking-wider text-center">
                    {t("projects.columns.visibility")}
                  </TableHead>
                )}
                {settings.isColumnVisible("status") && (
                  <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[110px] px-3 text-[11px] uppercase tracking-wider">
                    {t("projects.columns.status")}
                  </TableHead>
                )}
              </>
            )}

            {settings.isColumnVisible("actions") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-[120px] px-3 text-[11px] uppercase tracking-wider">
                {t("projects.columns.actions")}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("projects.table.noProjectsFound")}
                  message={t("projects.table.noProjectsDesc")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            projects.map((project) => (
              <TableRow
                key={project.id}
                className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <TableCell className={`px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={selectedProjects.includes(project.id)}
                    onCheckedChange={(checked) =>
                      onSelectProject(project.id, checked as boolean)
                    }
                  />
                </TableCell>

                {isDeveloper ? (
                  <>
                    <TableCell className={`px-3 ${densityClass}`}>
                      <button
                        onClick={() => router.push(`${routePrefix}/projects/${project.id}`)}
                        className="text-gray-900 dark:text-gray-100 text-xs font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none uppercase tracking-tight truncate max-w-[200px]"
                      >
                        {project.name}
                      </button>
                    </TableCell>
                    <TableCell className={`text-gray-600 dark:text-gray-300 text-xs px-3 ${densityClass}`}>
                      {project.projectType || "-"}
                    </TableCell>
                    <TableCell className={`text-xs font-bold text-teal-600 dark:text-teal-400 px-3 ${densityClass}`}>
                      {project.properties_count ?? project.total_units ?? 0}
                    </TableCell>
                    <TableCell className={`text-gray-500 dark:text-gray-400 text-xs px-3 ${densityClass}`}>
                      {project.country_name || "-"}
                    </TableCell>
                    <TableCell className={`text-gray-500 dark:text-gray-400 text-xs px-3 ${densityClass}`}>
                      {project.city_name || project.area_name || "-"}
                    </TableCell>
                    <TableCell className={`text-gray-600 dark:text-gray-400 text-xs px-3 ${densityClass}`}>
                      {project.project_currency || project.country_currency || project.currency || "-"}
                    </TableCell>
                    <TableCell className={`text-gray-600 dark:text-gray-400 text-xs px-3 ${densityClass}`}>
                      {project.country_dimension_unit || "-"}
                    </TableCell>
                    <TableCell className={`text-center px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                      <Switch
                        checked={project.is_active}
                        onCheckedChange={(checked) => onActiveToggle?.(project.id, checked)}
                        disabled={togglingActiveId === project.id}
                      />
                    </TableCell>
                    <TableCell className={`px-3 ${densityClass}`}>
                      <span
                        className={cn(
                          "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
                          project.status?.toLowerCase() === "completed"
                            ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800"
                            : project.status?.toLowerCase() === "upcoming"
                              ? "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800"
                              : "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800"
                        )}
                      >
                        {project.status || t("common.ongoing")}
                      </span>
                    </TableCell>
                  </>
                ) : (
                  <>
                    {settings.isColumnVisible("project") && (
                      <TableCell className={`px-3 ${densityClass}`}>
                        <button
                          onClick={() => router.push(`${routePrefix}/projects/${project.id}`)}
                          className="text-gray-900 dark:text-gray-100 text-xs font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none uppercase tracking-tight truncate max-w-[240px]"
                        >
                          {project.name}
                        </button>
                      </TableCell>
                    )}

                    {settings.isColumnVisible("developer") && (
                      <TableCell className={`text-gray-600 dark:text-gray-300 text-xs px-3 truncate ${densityClass}`}>
                        {project.developer_name || "-"}
                      </TableCell>
                    )}

                    {settings.isColumnVisible("country") && (
                      <TableCell className={`text-gray-500 dark:text-gray-400 text-xs px-3 truncate ${densityClass}`}>
                        {formatLocation(project)}
                      </TableCell>
                    )}

                    {settings.isColumnVisible("units") && (
                      <TableCell className={`text-xs font-bold text-teal-600 dark:text-teal-400 px-3 ${densityClass}`}>
                        {project.properties_count ?? project.total_units ?? 0}
                      </TableCell>
                    )}

                    {settings.isColumnVisible("type") && (
                      <TableCell className={`text-gray-600 dark:text-gray-300 text-xs px-3 capitalize truncate ${densityClass}`}>
                        {project.projectType || "-"}
                      </TableCell>
                    )}

                    {settings.isColumnVisible("price") && (
                      <TableCell className={`text-gray-900 dark:text-gray-100 font-medium text-xs px-3 ${densityClass}`}>
                        {project.price_range ? (
                          <span className="inline-flex items-center gap-1">
                            <span>{project.price_range}</span>
                            {(project.project_currency || project.country_currency || project.currency) && (
                              <span className="text-gray-500 dark:text-gray-400 font-normal text-[11px]">
                                {project.project_currency || project.country_currency || project.currency}
                              </span>
                            )}
                          </span>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                    )}

                    {settings.isColumnVisible("visibility") && (
                      <TableCell className={`text-center px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                        <Switch
                          checked={project.is_active}
                          onCheckedChange={(checked) => onActiveToggle?.(project.id, checked)}
                        disabled={togglingActiveId === project.id}
                        />
                      </TableCell>
                    )}

                    {settings.isColumnVisible("status") && (
                      <TableCell className={`px-3 ${densityClass}`}>
                        <span
                          className={cn(
                            "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
                            project.status?.toLowerCase() === "completed"
                              ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800"
                              : project.status?.toLowerCase() === "upcoming"
                                ? "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800"
                                : "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800"
                          )}
                        >
                          {project.status || t("common.ongoing")}
                        </span>
                      </TableCell>
                    )}
                  </>
                )}

                {settings.isColumnVisible("actions") && (
                  <TableCell className={`text-center px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1">
                      {(() => {
                        const isStarred = starredProjects[project.id] ?? !!project.is_favourite;
                        return (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleStar(project.id);
                            }}
                            title={t("projects.table.featured")}
                            className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-amber-500 hover:bg-amber-50/60 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                          >
                            <Star
                              className={cn(
                                "h-4 w-4 transition-all",
                                isStarred
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-gray-400 hover:text-amber-500"
                              )}
                            />
                          </button>
                        );
                      })()}

                      <button
                        onClick={() => router.push(`${routePrefix}/projects/${project.id}`)}
                        title={t("projects.table.view")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => onEdit(project.id)}
                        title={t("common.edit")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </button>

                      <button
                        onClick={() => onDelete(project.id)}
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