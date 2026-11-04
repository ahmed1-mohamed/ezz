"use client";

import React from "react";
import { SafeImage } from "@/components/ui/safe-image";
import { EmptyState } from "@/components/ui/empty-state";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Edit, Trash2 } from "lucide-react";
import { User } from "../types";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface UsersTableProps {
  settings: ReturnType<typeof useTableSettings>;
  users: User[];
  onView: (user: User) => void;
  onEdit: (userId: number) => void;
  onDelete: (userId: number) => void;
}

export const UsersTable = React.memo(function UsersTable({
  settings,
  users,
  onView,
  onEdit,
  onDelete,
}: UsersTableProps) {
  const { t } = useLanguage();

  const getDensityClass = () => {
    switch (settings.settings.density) {
      case "compact":
        return "py-1.5 px-3";
      case "spacious":
        return "py-3.5 px-3";
      case "comfortable":
      default:
        return "py-2.5 px-3";
    }
  };

  const densityClass = getDensityClass();

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[800px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            {settings.isColumnVisible("users") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[220px] px-3 text-[11px] uppercase tracking-wider">
                {t("users.columns.user")}
              </TableHead>
            )}
            {settings.isColumnVisible("role") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[140px] px-3 text-[11px] uppercase tracking-wider">
                {t("users.columns.role")}
              </TableHead>
            )}
            {settings.isColumnVisible("email") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[200px] px-3 text-[11px] uppercase tracking-wider">
                {t("users.columns.email")}
              </TableHead>
            )}
            {settings.isColumnVisible("lastLogin") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[130px] px-3 text-[11px] uppercase tracking-wider">
                {t("users.columns.lastLogin")}
              </TableHead>
            )}
            {settings.isColumnVisible("status") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[120px] px-3 text-[11px] uppercase tracking-wider">
                {t("users.columns.status")}
              </TableHead>
            )}
            {settings.isColumnVisible("actions") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-[120px] px-3 text-[11px] uppercase tracking-wider">
                {t("users.columns.actions")}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("users.table.noUsers")}
                  message={t("users.table.noUsersDesc")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow
                key={user.user_id}
                className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                {settings.isColumnVisible("users") && (
                  <TableCell className={`px-3 ${densityClass}`}>
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800">
                        <SafeImage
                          src={user.profile_picture}
                          fallbackSrc="/images/default-avatar.svg"
                          alt={user.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        onClick={() => onView(user)}
                        className="text-gray-900 dark:text-gray-100 text-xs font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none truncate max-w-[180px]"
                      >
                        {user.name}
                      </button>
                    </div>
                  </TableCell>
                )}

                {settings.isColumnVisible("role") && (
                  <TableCell className={`px-3 ${densityClass}`}>
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
                        user.role_name === "Admin"
                          ? "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-800"
                          : user.role_name === "Editor"
                            ? "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800"
                            : user.role_name === "Expert"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800"
                              : user.role_name === "Developer"
                                ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800"
                                : "bg-gray-50 text-gray-700 border-gray-200 dark:bg-neutral-800/60 dark:text-gray-300 dark:border-neutral-700"
                      )}
                    >
                      {user.role_name}
                    </span>
                  </TableCell>
                )}

                {settings.isColumnVisible("email") && (
                  <TableCell className={`text-gray-600 dark:text-gray-300 text-xs px-3 truncate max-w-[200px] ${densityClass}`}>
                    {user.email}
                  </TableCell>
                )}

                {settings.isColumnVisible("lastLogin") && (
                  <TableCell className={`text-gray-500 dark:text-gray-400 text-xs px-3 ${densityClass}`}>
                    {user.lastLogin || "-"}
                  </TableCell>
                )}

                {settings.isColumnVisible("status") && (
                  <TableCell className={`px-3 ${densityClass}`}>
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border capitalize",
                        user.status?.toLowerCase() === "active"
                          ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800"
                          : user.status?.toLowerCase() === "inactive"
                            ? "bg-red-50 text-red-600 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800"
                            : "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800"
                      )}
                    >
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full me-1.5",
                          user.status?.toLowerCase() === "active"
                            ? "bg-emerald-500"
                            : user.status?.toLowerCase() === "inactive"
                              ? "bg-red-500"
                              : "bg-amber-500"
                        )}
                      />
                      {t(`users.filters.${user.status.toLowerCase()}`)}
                    </span>
                  </TableCell>
                )}

                {settings.isColumnVisible("actions") && (
                  <TableCell
                    className={`text-center px-3 ${densityClass}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-center gap-1">
                      {/* View */}
                      <button
                        onClick={() => onView(user)}
                        title={t("users.viewDetails")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>

                      {/* Edit */}
                      <button
                        onClick={() => onEdit(user.user_id)}
                        title={t("users.editUser")}
                        className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => onDelete(user.user_id)}
                        title={t("users.delete")}
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
