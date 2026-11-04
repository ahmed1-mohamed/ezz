"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Users } from "lucide-react";
import { Role } from "../page.client";
import { useLanguage } from "@/contexts/LanguageContext";
import { AdminRolesService } from "@/data/api-client";
import { extractPermissionsList } from "../utils/map-role";

interface RoleCardProps {
  role: Role;
  onView: (role: Role) => void;
  onEdit?: (role: Role) => void;
  onDelete?: (role: Role) => void;
}

export function RoleCard({ role, onView }: RoleCardProps) {
  const { t } = useLanguage();

  const { data: roleDetails } = useQuery({
    queryKey: ["roleDetails", role.role_id],
    queryFn: async () => {
      const response = await AdminRolesService.getRole(role.role_id);
      return (response as any).data?.data || (response as any).data || response;
    },
    enabled: role.role_id != null && role.role_id > 0,
    staleTime: 5 * 60 * 1000,
  });

  const getPermissionsCount = (): number => {
    // 1. If roleDetails is fetched from backend (always most accurate)
    const detailsSource =
      roleDetails?.permissions ??
      roleDetails?.raw_permissions ??
      roleDetails?.permission_ids;
    if (detailsSource) {
      const detailedList = extractPermissionsList(detailsSource);
      if (detailedList.length > 0) return detailedList.length;
      if (Array.isArray(detailsSource)) return detailsSource.length;
    }
    if (
      roleDetails?.permissions_count !== undefined &&
      roleDetails?.permissions_count !== null &&
      Number(roleDetails.permissions_count) > 0
    ) {
      return Number(roleDetails.permissions_count);
    }

    // 2. Check raw_permissions on role prop
    if (role.raw_permissions && role.raw_permissions.length > 0) {
      return role.raw_permissions.length;
    }

    // 3. Check permissions_count on role prop
    if (
      role.permissions_count !== undefined &&
      role.permissions_count !== null &&
      Number(role.permissions_count) > 0
    ) {
      return Number(role.permissions_count);
    }

    // 4. Check if role.permissions or permission_ids is an array
    const propSource = (role as any).permissions ?? (role as any).permission_ids;
    if (Array.isArray(propSource)) {
      return propSource.length;
    }

    // 5. If object matrix permissions
    if (role.permissions && typeof role.permissions === "object") {
      let count = 0;
      Object.values(role.permissions).forEach((section) => {
        if (section && typeof section === "object") {
          Object.values(section).forEach((val) => {
            if (Boolean(val)) count++;
          });
        }
      });
      if (count > 0) return count;
    }

    return 0;
  };

  const permCount = getPermissionsCount();

  const isBuiltIn =
    roleDetails?.is_default !== undefined
      ? Boolean(roleDetails.is_default)
      : role.is_default !== undefined && role.is_default !== null
        ? Boolean(role.is_default)
        : role.role_name.toLowerCase().includes("super admin");

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 shadow-xs hover:shadow-sm hover:border-gray-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="text-teal-600 dark:text-teal-400 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-base truncate capitalize">
              {role.role_name}
            </h3>
          </div>

          {isBuiltIn ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shrink-0">
              <Lock className="h-3 w-3 text-gray-400" />
              <span>{t("roles.builtin")}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 shrink-0">
              <ShieldCheck className="h-3 w-3 text-teal-600 dark:text-teal-400" />
              <span>{t("roles.custom")}</span>
            </div>
          )}
        </div>

        {/* Middle Stats: Permissions Count and Users Count */}
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 font-normal my-2.5">
          <span>
            {permCount} {t("roles.permissionsCount")}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5 text-gray-400" />
            {role.users_count ?? 0} {t("roles.usersCount")}
          </span>
        </div>
      </div>

      {/* Bottom Button: View permissions */}
      <Button
        variant="outline"
        onClick={() => onView(role)}
        className="w-full h-9 text-xs sm:text-sm font-medium border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 shadow-2xs rounded-lg mt-3 cursor-pointer"
      >
        {t("roles.viewPermissions")}
      </Button>
    </div>
  );
}
