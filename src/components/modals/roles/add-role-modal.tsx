"use client";

import { useState, useMemo } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateRole } from "@/hooks/use-create-role";
import { useDashboardPermissions } from "@/hooks/use-dashboard-permissions";
import { formatGroupDisplayName } from "@/app/admin/roles/utils/map-role";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryClient } from "@tanstack/react-query";
import { AdminRolesService } from "@/data/api-client";
import { rolesSchema } from "@/validators/role.schema";
import type { RolesFormInput } from "@/validators/role.schema";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2, Search, CheckSquare, Square } from "lucide-react";
import { toast } from "sonner";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors, scrollToFirstInvalidField } from "@/lib/form-utils";
import { useDebounce } from "@/hooks/useDebounce";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { normalizeRoleApiError } from "@/app/admin/roles/utils/role-api-error";

const ROLE_FIELD_MAP: Record<string, keyof RolesFormInput> = {
  name: "role_name",
  name_ar: "role_name_ar",
  user_type: "role_type",
};

interface AddRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PermissionItemDef {
  id: string;
  translationKey: string;
  section: string;
  action: string;
}

interface PermissionGroupDef {
  key: string;
  translationKey: string;
  items: PermissionItemDef[];
}

const STATIC_PERMISSION_GROUPS: PermissionGroupDef[] = [
  {
    key: "general",
    translationKey: "general",
    items: [
      { id: "general.view_dashboard", translationKey: "viewDashboard", section: "General", action: "view" },
      { id: "general.view_analytics", translationKey: "viewAnalytics", section: "General", action: "analytics" },
    ],
  },
  {
    key: "catalog",
    translationKey: "catalog",
    items: [
      { id: "catalog.view_properties", translationKey: "viewProperties", section: "Properties", action: "view" },
      { id: "catalog.create_property", translationKey: "createProperty", section: "Properties", action: "create" },
      { id: "catalog.update_property", translationKey: "updateProperty", section: "Properties", action: "edit" },
      { id: "catalog.delete_property", translationKey: "deleteProperty", section: "Properties", action: "delete" },
      { id: "catalog.view_projects", translationKey: "viewProjects", section: "Projects", action: "view" },
      { id: "catalog.create_project", translationKey: "createProject", section: "Projects", action: "create" },
      { id: "catalog.update_project", translationKey: "updateProject", section: "Projects", action: "edit" },
      { id: "catalog.delete_project", translationKey: "deleteProject", section: "Projects", action: "delete" },
      { id: "catalog.view_developers", translationKey: "viewDevelopers", section: "Developers", action: "view" },
      { id: "catalog.manage_developers", translationKey: "manageDevelopers", section: "Developers", action: "edit" },
      { id: "catalog.manage_experts", translationKey: "manageExperts", section: "Experts", action: "manage" },
      { id: "catalog.view_reference_data", translationKey: "viewReferenceData", section: "Catalog", action: "view" },
    ],
  },
  {
    key: "sales_leads",
    translationKey: "salesLeads",
    items: [
      { id: "sales.view_leads", translationKey: "viewLeads", section: "Sales", action: "view_leads" },
      { id: "sales.manage_leads", translationKey: "manageLeads", section: "Sales", action: "manage_leads" },
      { id: "sales.view_customers", translationKey: "viewCustomers", section: "Sales", action: "view_customers" },
      { id: "sales.pipeline", translationKey: "pipeline", section: "Sales", action: "pipeline" },
      { id: "sales.follow_ups_calendar", translationKey: "followUpsCalendar", section: "Sales", action: "follow_ups" },
      { id: "sales.quotations", translationKey: "quotations", section: "Sales", action: "quotations" },
      { id: "sales.view_contracts", translationKey: "viewContracts", section: "Sales", action: "view_contracts" },
      { id: "sales.manage_contracts_payments", translationKey: "manageContractsPayments", section: "Sales", action: "manage_contracts" },
      { id: "sales.team_performance", translationKey: "teamPerformance", section: "Sales", action: "team_performance" },
      { id: "sales.reports", translationKey: "reports", section: "Sales", action: "reports" },
      { id: "sales.edit_targets_commission", translationKey: "editTargetsCommission", section: "Sales", action: "edit_targets" },
      { id: "sales.view_commissions", translationKey: "viewCommissions", section: "Sales", action: "view_commissions" },
    ],
  },
  {
    key: "bookings",
    translationKey: "bookings",
    items: [
      { id: "bookings.view_bookings", translationKey: "viewBookings", section: "Bookings", action: "view" },
      { id: "bookings.manage_bookings", translationKey: "manageBookings", section: "Bookings", action: "manage" },
    ],
  },
  {
    key: "marketing",
    translationKey: "marketing",
    items: [
      { id: "marketing.manage_marketing_tools", translationKey: "manageMarketingTools", section: "Ads", action: "view" },
    ],
  },
  {
    key: "billing",
    translationKey: "billing",
    items: [
      { id: "billing.credit_wallet_marketplace", translationKey: "creditWalletMarketplace", section: "Billing", action: "wallet" },
      { id: "billing.view_erpnext", translationKey: "viewErpnext", section: "Billing", action: "erpnext" },
    ],
  },
  {
    key: "expert_self_service",
    translationKey: "expertSelfService",
    items: [
      { id: "expert.view_appointments", translationKey: "viewAppointments", section: "Experts", action: "view_appointments" },
      { id: "expert.manage_appointments", translationKey: "manageAppointments", section: "Experts", action: "manage_appointments" },
      { id: "expert.expert_own_profile", translationKey: "expertOwnProfile", section: "Experts", action: "profile" },
      { id: "expert.expert_wallet", translationKey: "expertWallet", section: "Experts", action: "wallet" },
    ],
  },
  {
    key: "users_settings",
    translationKey: "usersSettings",
    items: [
      { id: "users.manage_users_roles", translationKey: "manageUsersRoles", section: "Users", action: "manage" },
      { id: "users.view_site_registrants", translationKey: "viewSiteRegistrants", section: "Users", action: "view" },
      { id: "users.own_account_settings", translationKey: "ownAccountSettings", section: "Settings", action: "account" },
      { id: "users.manage_platform_settings", translationKey: "managePlatformSettings", section: "Settings", action: "platform" },
    ],
  },
];

export default function AddRoleModal({ isOpen, onClose }: AddRoleModalProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const { createRole, isCreating } = useCreateRole();
  const [isSaving, setIsSaving] = useState(false);
  const [selectedPermissions, setSelectedPermissions] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery);

  const { data: apiPermissions, isLoading: isLoadingPermissions } = useDashboardPermissions(undefined, isOpen);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    getValues,
    reset,
    setValue,
  } = useForm<RolesFormInput>({
    resolver: zodResolver(rolesSchema),
    defaultValues: {
      role_name: "",
      role_name_ar: "",
      role_type: "admin",
      user_type: "admin",
      description: "",
      is_active: true,
    },
  });

  const permissionGroups = useMemo(() => {
    if (apiPermissions && apiPermissions.length > 0) {
      const groupMap = new Map<
        string,
        {
          key: string;
          title: string;
          items: {
            id: string;
            permission_id: number;
            label: string;
            action: string;
            group: string;
            section: string;
          }[];
        }
      >();

      apiPermissions.forEach((perm) => {
        const groupKey = perm.group || "general";
        if (!groupMap.has(groupKey)) {
          groupMap.set(groupKey, {
            key: groupKey,
            title: formatGroupDisplayName(groupKey),
            items: [],
          });
        }

        const grp = groupMap.get(groupKey)!;
        const actionCapitalized = perm.permission_name
          ? perm.permission_name.charAt(0).toUpperCase() + perm.permission_name.slice(1)
          : "";
        const formattedTitle = formatGroupDisplayName(groupKey);
        const itemLabel =
          perm.description && perm.description !== perm.permission_name
            ? perm.description
            : `${actionCapitalized} ${formattedTitle}`;

        grp.items.push({
          id: String(perm.permission_id),
          permission_id: Number(perm.permission_id),
          label: itemLabel,
          action: perm.permission_name,
          group: perm.group,
          section: formattedTitle,
        });
      });

      const groups = Array.from(groupMap.values());
      groups.sort((a, b) => a.title.localeCompare(b.title));
      return groups;
    }

    return STATIC_PERMISSION_GROUPS.map((group) => ({
      key: group.key,
      title: t(`roles.groups.${group.translationKey}`),
      items: group.items.map((item) => ({
        id: item.id,
        permission_id: 0,
        label: t(`roles.permissionsList.${item.translationKey}`),
        action: item.action,
        group: group.key,
        section: item.section,
      })),
    }));
  }, [apiPermissions, t]);

  const totalPermissionsCount = useMemo(() => {
    return permissionGroups.reduce((acc, g) => acc + g.items.length, 0);
  }, [permissionGroups]);

  const selectedCount = useMemo(() => {
    return Object.values(selectedPermissions).filter(Boolean).length;
  }, [selectedPermissions]);

  const filteredGroups = useMemo(() => {
    if (!debouncedSearchQuery.trim()) return permissionGroups;
    const q = debouncedSearchQuery.toLowerCase();
    return permissionGroups
      .map((grp) => {
        const matchingItems = grp.items.filter(
          (item) =>
            item.label.toLowerCase().includes(q) ||
            item.action.toLowerCase().includes(q) ||
            grp.title.toLowerCase().includes(q) ||
            grp.key.toLowerCase().includes(q)
        );
        if (matchingItems.length > 0) {
          return {
            ...grp,
            items: matchingItems,
          };
        }
        if (grp.title.toLowerCase().includes(q) || grp.key.toLowerCase().includes(q)) {
          return grp;
        }
        return null;
      })
      .filter(Boolean) as typeof permissionGroups;
  }, [permissionGroups, debouncedSearchQuery]);

  const isAllSelected = useMemo(() => {
    if (totalPermissionsCount === 0) return false;
    return selectedCount === totalPermissionsCount;
  }, [selectedCount, totalPermissionsCount]);

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedPermissions({});
    } else {
      const all: Record<string, boolean> = {};
      permissionGroups.forEach((grp) => {
        grp.items.forEach((item) => {
          all[item.id] = true;
        });
      });
      setSelectedPermissions(all);
    }
  };

  const togglePermission = (id: string) => {
    setSelectedPermissions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleGroupAll = (group: { items: { id: string }[] }) => {
    const isAllChecked = group.items.every((item) => !!selectedPermissions[item.id]);
    setSelectedPermissions((prev) => {
      const updated = { ...prev };
      group.items.forEach((item) => {
        updated[item.id] = !isAllChecked;
      });
      return updated;
    });
  };

  const handleFormSubmit = async (formData: RolesFormInput, event?: React.BaseSyntheticEvent) => {
    const primaryName = formData.role_name_ar || formData.role_name || "";
    if (!primaryName.trim()) {
      setError("role_name_ar", { message: "roles.roleNameRequired" });
      scrollToFirstInvalidField(event?.target ?? null);
      return;
    }

    const structuredPermissions: Record<string, Record<string, boolean>> = {
      Developers: { view: false, edit: false, delete: false, create: false },
      Projects: { view: false, edit: false, delete: false, create: false },
      Properties: { view: false, edit: false, delete: false, create: false },
      Ads: { view: false, edit: false, delete: false, create: false },
      Roles: { view: false, edit: false, delete: false, create: false },
      Users: { view: false, edit: false, delete: false, create: false },
      Experts: { view: false, edit: false, delete: false, create: false },
    };

    const selectedPermissionIds: number[] = [];

    permissionGroups.forEach((group) => {
      group.items.forEach((item) => {
        if (selectedPermissions[item.id]) {
          if (item.permission_id > 0 && !selectedPermissionIds.includes(item.permission_id)) {
            selectedPermissionIds.push(item.permission_id);
          }

          const grpKey = (item.group || "").toLowerCase();
          const act = (item.action || "").toLowerCase();

          let targetSection = item.section;
          if (!targetSection || !structuredPermissions[targetSection]) {
            if (grpKey.includes("developer")) targetSection = "Developers";
            else if (grpKey.includes("project")) targetSection = "Projects";
            else if (grpKey.includes("propert")) targetSection = "Properties";
            else if (grpKey.includes("ad")) targetSection = "Ads";
            else if (grpKey.includes("role")) targetSection = "Roles";
            else if (grpKey.includes("user")) targetSection = "Users";
            else if (grpKey.includes("expert")) targetSection = "Experts";
          }

          if (targetSection && structuredPermissions[targetSection]) {
            if (act.includes("view") || act.includes("read") || act.includes("show") || act.includes("index")) {
              structuredPermissions[targetSection].view = true;
            } else if (act.includes("create") || act.includes("add") || act.includes("store")) {
              structuredPermissions[targetSection].create = true;
            } else if (act.includes("edit") || act.includes("update") || act.includes("put")) {
              structuredPermissions[targetSection].edit = true;
            } else if (act.includes("delete") || act.includes("destroy") || act.includes("remove")) {
              structuredPermissions[targetSection].delete = true;
            } else {
              structuredPermissions[targetSection].view = true;
            }
          }
        }
      });
    });

    const resolvedRoleType = formData.role_type || "admin";

    setIsSaving(true);
    try {
      const rolePayload: Record<string, unknown> = {
        role_name: formData.role_name || formData.role_name_ar || "",
        role_type: resolvedRoleType,
        permission_ids: selectedPermissionIds,
      };
      if (formData.description) {
        rolePayload.description = formData.description;
      }
      if (formData.role_name_ar && formData.role_name) {
        rolePayload.role_name_ar = formData.role_name_ar;
      }

      const roleRes: any = await createRole(rolePayload as any);

      const roleData =
        roleRes?.data?.data ??
        roleRes?.data?.role ??
        roleRes?.data ??
        roleRes;

      let newRoleId = Number(
        roleData?.role_id ??
        roleData?.id ??
        roleRes?.role_id ??
        roleRes?.id
      );

      if ((!newRoleId || isNaN(newRoleId)) && (formData.role_name || formData.role_name_ar)) {
        try {
          const listRes = await AdminRolesService.getRoles();
          const list: any[] =
            (listRes as any)?.data?.data ??
            (listRes as any)?.data ??
            [];
          const targetName = (formData.role_name || formData.role_name_ar || "").trim();
          const found = list.find(
            (r: any) =>
              (r.role_name && r.role_name.trim() === targetName) ||
              (r.name && r.name.trim() === targetName)
          );
          if (found) {
            newRoleId = Number(found.role_id ?? found.id);
          }
        } catch {
          // Lookup error ignored
        }
      }

      if (newRoleId && !isNaN(newRoleId) && selectedPermissionIds.length > 0) {
        await AdminRolesService.assignPermissions(newRoleId, selectedPermissionIds);
        queryClient.invalidateQueries({ queryKey: ["roles"] });
        queryClient.invalidateQueries({ queryKey: ["roles_admin"] });
        queryClient.invalidateQueries({ queryKey: ["roleDetails", newRoleId] });
      }

      toast.success(t("roles.messages.createSuccess"));
      resetAndClose();
    } catch (error: unknown) {
      const { summary } = applyApiFormErrors(normalizeRoleApiError(error), {
        setError,
        getValues,
        t,
        fieldMap: ROLE_FIELD_MAP,
        fallbackMessage: t("roles.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    } finally {
      setIsSaving(false);
    }
  };

  const isSubmitting = isCreating || isSaving;

  const resetAndClose = () => {
    reset();
    setSelectedPermissions({});
    setSearchQuery("");
    onClose();
  };

  const handleClose = () => {
    if (isSubmitting) return;
    resetAndClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-3xl bg-white dark:bg-neutral-900 p-0 overflow-hidden border border-gray-200 dark:border-neutral-800 rounded-xl shadow-2xl">
        <DialogHeader className="px-6 py-4 border-b border-gray-100 dark:border-neutral-800 flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-base font-bold text-gray-900 dark:text-white">
            {t("roles.newCustomRoleModalTitle")}
          </DialogTitle>
        </DialogHeader>

        <form noValidate onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col">
          <div className="p-6 max-h-[72vh] overflow-y-auto space-y-5 custom-scrollbar">
            <FormErrorAlert message={errors.root?.server?.message} />
            {/* Top Fields: Arabic Name, English Name, Role Type */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="role_name_ar" className="text-xs font-semibold text-gray-800 dark:text-gray-200 block mb-1.5">
                  {t("roles.addModal.roleNameAr")} <span className="text-red-500">*</span>
                </label>
                <Input
                  id="role_name_ar"
                  {...register("role_name_ar")}
                  placeholder={t("roles.addModal.roleNameArPlaceholder")}
                  dir="rtl"
                  error={!!errors.role_name_ar}
                  aria-invalid={!!errors.role_name_ar}
                  className={`h-9 text-xs sm:text-sm bg-white dark:bg-neutral-800 ${errors.role_name_ar ? "" : "border-teal-600 focus-visible:ring-teal-600"}`}
                />
                <FieldError message={errors.role_name_ar?.message ? t(errors.role_name_ar.message) : undefined} />
              </div>

              <div>
                <label htmlFor="role_name" className="text-xs font-semibold text-gray-800 dark:text-gray-200 block mb-1.5">
                  {t("roles.addModal.roleNameEn")}
                </label>
                <Input
                  id="role_name"
                  dir="ltr"
                  {...register("role_name")}
                  placeholder={t("roles.addModal.roleNameEnPlaceholder")}
                  error={!!errors.role_name}
                  aria-invalid={!!errors.role_name}
                  className={`h-9 text-xs sm:text-sm bg-white dark:bg-neutral-800 ${errors.role_name ? "" : "border-gray-200 dark:border-neutral-700"}`}
                />
                <FieldError message={errors.role_name?.message ? t(errors.role_name.message) : undefined} />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-800 dark:text-gray-200 block mb-1.5">
                  {t("roles.roleType")} <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="role_type"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value || "admin"}
                      onValueChange={(val) => {
                        field.onChange(val);
                        setValue("user_type", val, { shouldValidate: true, shouldDirty: true });
                      }}
                    >
                      <SelectTrigger
                        ref={field.ref}
                        error={!!errors.role_type}
                        aria-invalid={!!errors.role_type}
                        className={`h-9 text-xs sm:text-sm bg-white dark:bg-neutral-800 ${errors.role_type ? "" : "border-gray-200 dark:border-neutral-700"}`}
                      >
                        <SelectValue placeholder={t("roles.selectRoleType")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">{t("users.filters.types.admin")}</SelectItem>
                        <SelectItem value="expert">{t("users.filters.types.expert")}</SelectItem>
                        <SelectItem value="developer">{t("users.filters.types.developer")}</SelectItem>
                        <SelectItem value="consultant">{t("users.filters.types.consultant")}</SelectItem>
                        <SelectItem value="agent">{t("users.filters.types.agent")}</SelectItem>
                        <SelectItem value="user">{t("users.filters.types.user")}</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError message={errors.role_type?.message ? t(errors.role_type.message) : undefined} />
              </div>
            </div>

            {/* Permissions Header with Counter, Search, and Select All */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-neutral-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                    {t("roles.permissions")}
                  </span>
                  <Badge variant="secondary" className="text-xs font-medium bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300">
                    {selectedCount} / {totalPermissionsCount}
                  </Badge>
                  {isLoadingPermissions && (
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-teal-600 ms-1" />
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative flex-1 sm:w-56">
                    <Search className="absolute start-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t("roles.searchPermissions")}
                      className="ps-8 h-8 text-xs bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700"
                    />
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={toggleSelectAll}
                    className="h-8 text-xs font-medium text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800"
                  >
                    {isAllSelected ? (
                      <>
                        <Square className="h-3 w-3 me-1" />
                        {t("roles.deselectAll")}
                      </>
                    ) : (
                      <>
                        <CheckSquare className="h-3 w-3 me-1" />
                        {t("roles.selectAll")}
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Permission Groups */}
              {isLoadingPermissions ? (
                <div className="flex flex-col items-center justify-center py-12 gap-2 text-gray-500 text-xs">
                  <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
                  <span>{t("common.loading")}</span>
                </div>
              ) : filteredGroups.length === 0 ? (
                <div className="text-center py-10 text-xs text-gray-500">
                  {t("roles.noMatchingPermissions")}
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredGroups.map((group) => {
                    const groupSelectedCount = group.items.filter((item) => !!selectedPermissions[item.id]).length;
                    const isGroupAllSelected = group.items.length > 0 && groupSelectedCount === group.items.length;

                    return (
                      <div
                        key={group.key}
                        className="rounded-lg border border-gray-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900/50 space-y-3 shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                              {group.title}
                            </h4>
                            <span className="text-[10px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                              {groupSelectedCount}/{group.items.length}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleGroupAll(group)}
                            className="text-xs font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-400 hover:underline cursor-pointer"
                          >
                            {isGroupAllSelected
                              ? t("roles.deselectAll")
                              : t("roles.selectAll")}
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                          {group.items.map((item) => {
                            const isChecked = !!selectedPermissions[item.id];
                            return (
                              <div
                                key={item.id}
                                className="flex items-center justify-between gap-2 p-1.5 rounded-md hover:bg-gray-50/70 dark:hover:bg-neutral-800/40 transition-colors"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <Checkbox
                                    id={item.id}
                                    checked={isChecked}
                                    onCheckedChange={() => togglePermission(item.id)}
                                    className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 h-4 w-4 rounded cursor-pointer shrink-0"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="text-xs text-gray-700 dark:text-gray-300 font-normal cursor-pointer select-none truncate"
                                    title={item.label}
                                  >
                                    {item.label}
                                  </label>
                                </div>
                                {item.permission_id > 0 && (
                                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-neutral-800 px-1.5 py-0.5 rounded shrink-0 border border-gray-100 dark:border-neutral-800">
                                    #{item.permission_id}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          <div className="px-6 py-3.5 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-end gap-3 bg-white dark:bg-neutral-900">
            <Button
              type="button"
              variant="ghost"
              onClick={handleClose}
              disabled={isSubmitting}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-xs sm:text-sm font-medium h-9 px-4 cursor-pointer"
            >
              {t("roles.cancelBtn")}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-medium h-9 px-5 rounded-md shadow-xs cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin me-1.5 inline" />
                  {t("roles.saving")}
                </>
              ) : (
                t("roles.createRoleBtn")
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}