"use client";

import React from "react";
import { SearchInput } from "@/components/shared/SearchInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

interface UsersFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  userTypeFilter: string;
  onUserTypeChange: (value: string) => void;
}

export const UsersFilters = React.memo(function UsersFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  userTypeFilter,
  onUserTypeChange,
}: UsersFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
      <div className="flex-1 min-w-[240px] max-w-xl">
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder={t("users.filters.search")}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
        <Select value={userTypeFilter} onValueChange={onUserTypeChange}>
          <SelectTrigger className="w-full sm:w-[150px] lg:w-[170px] h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-200">
            <SelectValue placeholder={t("users.columns.userType")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <SelectItem value="all" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("users.filters.allUserTypes")}
            </SelectItem>
            {["admin", "developer", "agent", "consultant", "user", "referral", "expert"].map((type) => (
              <SelectItem
                key={type}
                value={type}
                className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800 capitalize"
              >
                {t(`users.filters.types.${type}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-full sm:w-[150px] lg:w-[170px] h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-200">
            <SelectValue placeholder={t("users.columns.status")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <SelectItem value="all" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("users.filters.allStatus")}
            </SelectItem>
            <SelectItem value="Active" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("users.filters.active")}
            </SelectItem>
            <SelectItem value="Inactive" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("users.filters.inactive")}
            </SelectItem>
            <SelectItem value="Suspended" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("users.filters.suspended")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});