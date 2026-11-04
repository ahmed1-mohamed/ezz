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

interface ProjectsFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  projectTypeFilter: string;
  onProjectTypeChange: (value: string) => void;
  countryFilter?: string;
  onCountryChange?: (value: string) => void;
}

export const ProjectsFilters = React.memo(function ProjectsFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  projectTypeFilter,
  onProjectTypeChange,
  countryFilter,
  onCountryChange,
}: ProjectsFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 w-full">
      <div className="flex-1 min-w-[240px] max-w-xl">
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder={t("projects.filters.searchPlaceholder")}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full lg:w-auto">
        {onCountryChange && (
          <Select value={countryFilter || "all"} onValueChange={onCountryChange}>
            <SelectTrigger className="w-full sm:w-[150px] lg:w-[170px] h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-200">
              <SelectValue placeholder={t("projects.filters.country")} />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
              <SelectItem value="all" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
                {t("projects.filters.allCountries")}
              </SelectItem>
              <SelectItem value="1" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
                {t("common.countries.egypt")}
              </SelectItem>
              <SelectItem value="3" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
                {t("common.countries.oman")}
              </SelectItem>
              <SelectItem value="2" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
                {t("common.countries.uae")}
              </SelectItem>
            </SelectContent>
          </Select>
        )}

        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-full sm:w-[150px] lg:w-[170px] h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-200">
            <SelectValue placeholder={t("projects.filters.allStatus")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <SelectItem value="all" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("projects.filters.allStatus")}
            </SelectItem>
            <SelectItem value="ongoing" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("projects.filters.ongoing")}
            </SelectItem>
            <SelectItem value="completed" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("projects.filters.completed")}
            </SelectItem>
            <SelectItem value="upcoming" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("projects.filters.upcoming")}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select value={projectTypeFilter} onValueChange={onProjectTypeChange}>
          <SelectTrigger className="w-full sm:w-[150px] lg:w-[170px] h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-200">
            <SelectValue placeholder={t("projects.filters.allTypes")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <SelectItem value="all" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("projects.filters.allTypes")}
            </SelectItem>
            <SelectItem value="residential" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("projects.filters.residential")}
            </SelectItem>
            <SelectItem value="mixed-use" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("projects.filters.mixedUse")}
            </SelectItem>
            <SelectItem value="commercial" className="cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800">
              {t("projects.filters.commercial")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});
