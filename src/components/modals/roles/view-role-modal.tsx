"use client";

import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { AdminRolesService } from "@/data/api-client";
import {
  Loader2,
  Edit2,
  Trash2,
  Check,
  X,
  ShieldCheck,
  Search,
  LayoutGrid,
  ListChecks,
  ChevronDown,
  ChevronUp,
  Copy,
  CheckCheck,
  Code,
  Calendar,
  Layers,
  Sparkles,
  Key,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import {
  RawPermissionItem,
  groupPermissionsByModule,
  extractPermissionsList,
  DynamicModuleGroup,
} from "@/app/admin/roles/utils/map-role";

interface ViewRoleModalProps {
  roleId: number;
  roleName: string;
  roleType?: string;
  description: string[] | string | null;
  usersCount: number;
  isActive: boolean;
  isDefault?: number | boolean;
  createdAt?: string;
  updatedAt?: string;
  permissions?: Record<string, Record<string, boolean>> | null;
  rawPermissions?: any[] | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return "-";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateStr;
  }
}

export function ViewRoleModal({
  roleId,
  roleName,
  roleType,
  description,
  usersCount,
  isActive,
  isDefault: initialIsDefault,
  createdAt: initialCreatedAt,
  updatedAt: initialUpdatedAt,
  permissions: listPermissions,
  rawPermissions,
  isOpen,
  onClose,
  onEdit,
  onDelete,
}: ViewRoleModalProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"matrix" | "list" | "raw">("matrix");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [hasCopied, setHasCopied] = useState(false);

  const { data: roleDetails, isLoading } = useQuery({
    queryKey: ["roleDetails", roleId],
    queryFn: async () => {
      const response = await AdminRolesService.getRole(roleId);
      return (response as any).data?.data || (response as any).data || response;
    },
    enabled: isOpen && roleId != null,
  });

  const activePermissionsSource =
    roleDetails?.permissions ??
    roleDetails?.default_permissions ??
    rawPermissions ??
    listPermissions;

  const currentRoleType =
    roleDetails?.role_type || roleDetails?.user_type || roleType;

  const effectiveRoleName = roleDetails?.role_name || roleName;
  const effectiveRoleId = roleDetails?.role_id ?? roleId;
  const effectiveIsActive = roleDetails?.is_active !== undefined ? Boolean(roleDetails.is_active) : isActive;
  const effectiveIsDefault = roleDetails?.is_default ?? initialIsDefault;
  const effectiveCreatedAt = roleDetails?.created_at ?? initialCreatedAt;
  const effectiveUpdatedAt = roleDetails?.updated_at ?? initialUpdatedAt;

  const nameLower = effectiveRoleName.toLowerCase();
  const typeLower = String(currentRoleType || "").toLowerCase();
  const isSuperAdmin =
    nameLower.includes("super admin") ||
    (nameLower.includes("admin") && typeLower === "admin") ||
    String(roleDetails?.description || "").toLowerCase().includes("full system access");

  const rawList: RawPermissionItem[] = useMemo(() => {
    return extractPermissionsList(activePermissionsSource);
  }, [activePermissionsSource]);

  const moduleGroups: DynamicModuleGroup[] = useMemo(() => {
    return groupPermissionsByModule(activePermissionsSource, isSuperAdmin);
  }, [activePermissionsSource, isSuperAdmin]);

  const totalPermissionsCount = rawList.length > 0 ? rawList.length : moduleGroups.reduce((acc, g) => acc + g.totalCount, 0);

  const filteredGroups = useMemo(() => {
    if (!debouncedSearch.trim()) return moduleGroups;
    const q = debouncedSearch.toLowerCase();
    return moduleGroups.filter(
      (grp) =>
        grp.displayName.toLowerCase().includes(q) ||
        grp.groupKey.toLowerCase().includes(q) ||
        grp.permissions.some(
          (p) =>
            p.description.toLowerCase().includes(q) ||
            p.permission_name.toLowerCase().includes(q) ||
            String(p.permission_id).includes(q)
        )
    );
  }, [moduleGroups, debouncedSearch]);

  const filteredRawList = useMemo(() => {
    if (!debouncedSearch.trim()) return rawList;
    const q = debouncedSearch.toLowerCase();
    return rawList.filter(
      (p) =>
        p.description.toLowerCase().includes(q) ||
        p.permission_name.toLowerCase().includes(q) ||
        p.group.toLowerCase().includes(q) ||
        String(p.permission_id).includes(q)
    );
  }, [rawList, debouncedSearch]);

  const toggleGroup = (groupKey: string) => {
    setExpandedGroups((prev) => ({ ...prev, [groupKey]: !prev[groupKey] }));
  };

  const expandAll = () => {
    const next: Record<string, boolean> = {};
    filteredGroups.forEach((g) => {
      next[g.groupKey] = true;
    });
    setExpandedGroups(next);
  };

  const collapseAll = () => {
    setExpandedGroups({});
  };

  const handleCopyJson = () => {
    const dataToCopy = roleDetails || {
      role_id: effectiveRoleId,
      role_name: effectiveRoleName,
      role_type: currentRoleType,
      is_active: effectiveIsActive,
      is_default: effectiveIsDefault,
      created_at: effectiveCreatedAt,
      updated_at: effectiveUpdatedAt,
      permissions: rawList,
    };
    navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  if (!isOpen) return null;

  const descArray = Array.isArray(description)
    ? description
    : typeof description === "string"
      ? [description]
      : roleDetails?.description
        ? [roleDetails.description]
        : [t("roles.noDescription")];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl bg-white dark:bg-neutral-900 p-0 overflow-hidden border border-gray-200 dark:border-neutral-800 rounded-xl shadow-2xl">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 border-b border-gray-100 dark:border-neutral-800 bg-gradient-to-r from-gray-50/50 to-white dark:from-neutral-900 dark:to-neutral-900/50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="text-teal-600 dark:text-teal-400 p-3 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-100 dark:border-teal-900/50 shadow-xs mt-0.5">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                    {effectiveRoleName}
                  </DialogTitle>
                  <Badge variant="outline" className="text-xs font-mono bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300">
                    {t("roles.idBadge", { id: effectiveRoleId })}
                  </Badge>
                  {currentRoleType && (
                    <Badge variant="secondary" className="text-xs capitalize font-medium bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      {currentRoleType}
                    </Badge>
                  )}
                  {Boolean(effectiveIsDefault) && (
                    <Badge className="text-xs font-medium bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      <Sparkles className="h-3 w-3 me-1" />
                      {t("roles.defaultRole")}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-gray-400" />
                    {usersCount} {t("roles.usersCount")}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-teal-700 dark:text-teal-300 font-semibold">
                    <Key className="h-3.5 w-3.5 text-teal-600" />
                    {totalPermissionsCount} {t("roles.permissions")}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                    <Layers className="h-3.5 w-3.5 text-gray-400" />
                    {moduleGroups.length} {t("roles.modulesCount")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col items-end gap-1.5 shrink-0">
              <Badge
                variant="outline"
                className={
                  effectiveIsActive
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800 text-xs px-2.5 py-0.5"
                    : "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800 text-xs px-2.5 py-0.5"
                }
              >
                {effectiveIsActive ? t("users.filters.active") : t("users.filters.inactive")}
              </Badge>
              {effectiveCreatedAt && (
                <span className="text-[11px] text-gray-400 dark:text-gray-500 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(effectiveCreatedAt)}
                </span>
              )}
            </div>
          </div>
        </DialogHeader>

        {/* Content Body */}
        <div className="p-6 max-h-[68vh] overflow-y-auto space-y-5">
          {isLoading ? (
            <div className="flex flex-col min-h-[260px] items-center justify-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
              <p className="text-xs text-gray-500">{t("common.loading")}</p>
            </div>
          ) : (
            <>
              {/* Description & Super Admin Banner */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {t("roles.description")}:
                  </span>
                  {descArray.map((desc, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-neutral-800 px-2.5 py-1 rounded-md border border-gray-100 dark:border-neutral-700"
                    >
                      {desc}
                    </span>
                  ))}
                </div>

                {isSuperAdmin && (
                  <div className="flex items-center gap-2.5 p-3 bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-lg text-emerald-800 dark:text-emerald-300 text-xs font-medium shadow-2xs">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>
                      {t("roles.fullSystemAccess")}
                    </span>
                  </div>
                )}
              </div>

              {/* Tabs Bar & Search */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("matrix")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === "matrix"
                        ? "bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 shadow-2xs"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-800"
                    }`}
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                    <span>
                      {t("roles.modulesMatrix")} ({moduleGroups.length})
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("list")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === "list"
                        ? "bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 shadow-2xs"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-800"
                    }`}
                  >
                    <ListChecks className="h-3.5 w-3.5" />
                    <span>
                      {t("roles.allPermissions")} ({totalPermissionsCount})
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("raw")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === "raw"
                        ? "bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 shadow-2xs"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-800"
                    }`}
                  >
                    <Code className="h-3.5 w-3.5" />
                    <span>{t("roles.rawData")}</span>
                  </button>
                </div>

                {activeTab !== "raw" && (
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="absolute start-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                      <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t("roles.searchPermissions")}
                        className="ps-8 h-8 text-xs bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700"
                      />
                    </div>

                    {activeTab === "matrix" && (
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={expandAll}
                          className="h-8 px-2 text-[11px] text-gray-600 hover:text-gray-900"
                          title={t("roles.expandAll")}
                        >
                          <ChevronDown className="h-3 w-3 me-1" />
                          {t("roles.expandAll")}
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={collapseAll}
                          className="h-8 px-2 text-[11px] text-gray-600 hover:text-gray-900"
                          title={t("roles.collapseAll")}
                        >
                          <ChevronUp className="h-3 w-3 me-1" />
                          {t("roles.collapseAll")}
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Tab 1: Dynamic Modules Matrix */}
              {activeTab === "matrix" && (
                <div className="space-y-3">
                  <div className="bg-gray-50/80 dark:bg-neutral-800/60 rounded-xl p-3 border border-gray-100 dark:border-neutral-800">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-2 mb-2 px-3 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <div className="col-span-5 sm:col-span-6">{t("roles.section")}</div>
                      <div className="col-span-1 text-center">{t("roles.view")}</div>
                      <div className="col-span-1 text-center">{t("roles.create")}</div>
                      <div className="col-span-1 text-center">{t("roles.edit")}</div>
                      <div className="col-span-1 text-center">{t("roles.delete")}</div>
                      <div className="col-span-3 sm:col-span-2 text-end">{t("roles.permissions")}</div>
                    </div>

                    {/* Table Rows */}
                    {filteredGroups.length === 0 ? (
                      <div className="text-center py-10 text-xs text-gray-500">
                        {t("roles.noMatchingPermissions")}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {filteredGroups.map((grp) => {
                          const isExpanded = Boolean(expandedGroups[grp.groupKey]);
                          return (
                            <div
                              key={grp.groupKey}
                              className="bg-white dark:bg-neutral-900 rounded-lg border border-gray-100 dark:border-neutral-800 shadow-2xs overflow-hidden transition-all"
                            >
                              <div
                                onClick={() => toggleGroup(grp.groupKey)}
                                className="grid grid-cols-12 gap-2 items-center p-3 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-neutral-800/40 select-none"
                              >
                                <div className="col-span-5 sm:col-span-6 flex items-center gap-2 min-w-0">
                                  <span className="h-6 w-6 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xs shrink-0 font-bold border border-teal-100 dark:border-teal-900/50">
                                    {grp.displayName.charAt(0)}
                                  </span>
                                  <div className="min-w-0">
                                    <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm truncate">
                                      {grp.displayName}
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-400 truncate">
                                      {grp.groupKey}
                                    </div>
                                  </div>
                                </div>

                                {/* View */}
                                <div className="col-span-1 flex justify-center">
                                  {grp.view ? (
                                    <span className="h-6 w-6 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-200 dark:border-teal-800">
                                      <Check className="h-3.5 w-3.5" />
                                    </span>
                                  ) : (
                                    <span className="h-6 w-6 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-300 dark:text-gray-600 flex items-center justify-center">
                                      <X className="h-3.5 w-3.5" />
                                    </span>
                                  )}
                                </div>

                                {/* Create */}
                                <div className="col-span-1 flex justify-center">
                                  {grp.create ? (
                                    <span className="h-6 w-6 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                                      <Check className="h-3.5 w-3.5" />
                                    </span>
                                  ) : (
                                    <span className="h-6 w-6 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-300 dark:text-gray-600 flex items-center justify-center">
                                      <X className="h-3.5 w-3.5" />
                                    </span>
                                  )}
                                </div>

                                {/* Edit */}
                                <div className="col-span-1 flex justify-center">
                                  {grp.edit ? (
                                    <span className="h-6 w-6 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200 dark:border-amber-800">
                                      <Check className="h-3.5 w-3.5" />
                                    </span>
                                  ) : (
                                    <span className="h-6 w-6 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-300 dark:text-gray-600 flex items-center justify-center">
                                      <X className="h-3.5 w-3.5" />
                                    </span>
                                  )}
                                </div>

                                {/* Delete */}
                                <div className="col-span-1 flex justify-center">
                                  {grp.delete ? (
                                    <span className="h-6 w-6 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-200 dark:border-rose-800">
                                      <Check className="h-3.5 w-3.5" />
                                    </span>
                                  ) : (
                                    <span className="h-6 w-6 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-300 dark:text-gray-600 flex items-center justify-center">
                                      <X className="h-3.5 w-3.5" />
                                    </span>
                                  )}
                                </div>

                                {/* Details / Expand */}
                                <div className="col-span-3 sm:col-span-2 flex items-center justify-end gap-1.5">
                                  <Badge variant="secondary" className="text-[10px] font-medium">
                                    {grp.permissions.length > 0 ? grp.permissions.length : grp.totalCount} {t("roles.permsShort")}
                                  </Badge>
                                  {isExpanded ? (
                                    <ChevronUp className="h-4 w-4 text-gray-400" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4 text-gray-400" />
                                  )}
                                </div>
                              </div>

                              {/* Expanded Accordion of Individual Permissions */}
                              {isExpanded && (
                                <div className="p-3 pt-0 border-t border-gray-100 dark:border-neutral-800/80 bg-gray-50/50 dark:bg-neutral-900/50">
                                  {grp.permissions.length === 0 ? (
                                    <p className="text-xs text-gray-400 py-2 italic">
                                      {t("roles.fullSystemAccess")}
                                    </p>
                                  ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                                      {grp.permissions.map((perm) => (
                                        <div
                                          key={perm.permission_id}
                                          className="flex items-start gap-2 p-2 bg-white dark:bg-neutral-900 rounded-md border border-gray-100 dark:border-neutral-800 text-xs shadow-2xs"
                                        >
                                          <span className="h-4 w-4 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200 dark:border-teal-800">
                                            <Check className="h-2.5 w-2.5" />
                                          </span>
                                          <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-1">
                                              <span className="font-semibold text-gray-800 dark:text-gray-200 capitalize truncate">
                                                {perm.description || perm.permission_name}
                                              </span>
                                              <span className="text-[10px] font-mono text-gray-400 shrink-0">
                                                #{perm.permission_id}
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-400">
                                              <span className="font-mono text-teal-700 dark:text-teal-300 font-medium">
                                                {perm.permission_name}
                                              </span>
                                              {perm.pivot?.role_id && (
                                                <span>• {t("roles.roleIdLabel")} {perm.pivot.role_id}</span>
                                              )}
                                              {perm.created_at && (
                                                <span>• {formatDate(perm.created_at)}</span>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 2: Detailed permissions list */}
              {activeTab === "list" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 px-1">
                    <span>
                      {t("common.showing")} {filteredRawList.length} {t("common.of")}{" "}
                      {rawList.length} {t("roles.permissions")}
                    </span>
                  </div>

                  {filteredRawList.length === 0 ? (
                    <div className="text-center py-12 text-xs text-gray-500">
                      {t("roles.noMatchingPermissions")}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {filteredRawList.map((perm) => {
                        const act = perm.permission_name.toLowerCase();
                        let badgeColor = "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800";
                        if (act.includes("view") || act.includes("read") || act.includes("show")) {
                          badgeColor = "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800";
                        } else if (act.includes("create") || act.includes("add") || act.includes("store")) {
                          badgeColor = "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800";
                        } else if (act.includes("edit") || act.includes("update") || act.includes("put")) {
                          badgeColor = "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800";
                        } else if (act.includes("delete") || act.includes("destroy") || act.includes("remove")) {
                          badgeColor = "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800";
                        }

                        return (
                          <div
                            key={perm.permission_id}
                            className="flex items-start gap-2.5 p-3 bg-white dark:bg-neutral-900 rounded-lg border border-gray-100 dark:border-neutral-800 shadow-2xs hover:border-teal-200 dark:hover:border-teal-800 transition-colors"
                          >
                            <span className="h-6 w-6 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200 dark:border-teal-800">
                              <Check className="h-3.5 w-3.5" />
                            </span>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1.5">
                                <span className="text-xs font-semibold text-gray-900 dark:text-white capitalize truncate">
                                  {perm.description || perm.permission_name}
                                </span>
                                <Badge variant="outline" className="text-[10px] font-mono px-1.5 py-0">
                                  #{perm.permission_id}
                                </Badge>
                              </div>

                              <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                                <Badge variant="outline" className={`text-[10px] font-mono capitalize px-1.5 py-0 ${badgeColor}`}>
                                  {perm.permission_name}
                                </Badge>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-gray-100 dark:border-neutral-700">
                                  {perm.group}
                                </span>
                                {perm.pivot?.role_id && (
                                  <span className="text-[10px] text-gray-400">
                                    {t("roles.roleNumber", { id: perm.pivot.role_id })}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Raw JSON / Backend Data View */}
              {activeTab === "raw" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      {t("roles.rawExplanation")}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleCopyJson}
                      className="h-7 text-xs flex items-center gap-1.5"
                    >
                      {hasCopied ? (
                        <>
                          <CheckCheck className="h-3.5 w-3.5 text-emerald-600" />
                          <span>{t("roles.copied")}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>{t("roles.copyJson")}</span>
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="relative rounded-lg bg-neutral-950 p-4 border border-neutral-800 overflow-hidden">
                    <pre className="text-[11px] font-mono text-emerald-400 overflow-x-auto max-h-[50vh] leading-relaxed select-all">
                      {JSON.stringify(
                        roleDetails || {
                          role_id: effectiveRoleId,
                          role_name: effectiveRoleName,
                          role_type: currentRoleType,
                          is_active: effectiveIsActive,
                          is_default: effectiveIsDefault,
                          created_at: effectiveCreatedAt,
                          updated_at: effectiveUpdatedAt,
                          permissions: rawList,
                        },
                        null,
                        2
                      )}
                    </pre>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <DialogFooter className="p-5 border-t border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 sm:justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={onDelete}
            className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-950/30"
          >
            <Trash2 className="w-4 h-4 me-2" />
            {t("roles.deleteBtn")}
          </Button>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              {t("roles.cancelBtn")}
            </Button>
            <Button
              onClick={onEdit}
              className="bg-teal-700 hover:bg-teal-800 text-white font-medium shadow-xs"
            >
              <Edit2 className="w-4 h-4 me-2" />
              {t("roles.editRole")}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
