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
import { cn } from "@/lib/utils";

interface AdsFiltersProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  statusFilter: string;
  onStatusChange: (val: string) => void;
  platformFilter: string;
  onPlatformChange: (val: string) => void;
  typeFilter: string;
  onTypeChange: (val: string) => void;
}

export const AdsFilters = React.memo(function AdsFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  platformFilter,
  onPlatformChange,
  typeFilter,
  onTypeChange,
}: AdsFiltersProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const triggerClass = cn(
    "w-full h-9 bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-200 shadow-xs",
    isAr ? "text-[13px] font-medium" : "text-xs"
  );

  const itemClass = cn(
    "cursor-pointer dark:text-gray-200 dark:hover:bg-neutral-800",
    isAr ? "text-[13px]" : "text-xs"
  );

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 w-full">
      <div className="flex-1 min-w-[240px] max-w-xl">
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder={t("ads.filters.search")}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-3 sm:flex sm:items-center gap-2 w-full lg:w-auto">
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className={cn(triggerClass, "sm:w-[140px]")}>
            <SelectValue placeholder={t("ads.filters.status")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <SelectItem value="all" className={itemClass}>
              {t("ads.filters.allStatus")}
            </SelectItem>
            <SelectItem value="active" className={itemClass}>
              {t("ads.status.active")}
            </SelectItem>
            <SelectItem value="paused" className={itemClass}>
              {t("ads.status.paused")}
            </SelectItem>
            <SelectItem value="draft" className={itemClass}>
              {t("ads.status.draft")}
            </SelectItem>
            <SelectItem value="ended" className={itemClass}>
              {t("ads.status.ended")}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select value={platformFilter} onValueChange={onPlatformChange}>
          <SelectTrigger className={cn(triggerClass, "sm:w-[150px]")}>
            <SelectValue placeholder={t("ads.filters.platform")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <SelectItem value="all" className={itemClass}>
              {t("ads.filters.allPlatforms")}
            </SelectItem>
            <SelectItem value="mobile" className={itemClass}>
              {t("ads.filters.mobile")}
            </SelectItem>
            <SelectItem value="web" className={itemClass}>
              {t("ads.filters.web")}
            </SelectItem>
            <SelectItem value="android" className={itemClass}>
              {t("ads.filters.android")}
            </SelectItem>
            <SelectItem value="ios" className={itemClass}>
              {t("ads.filters.ios")}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select value={typeFilter} onValueChange={onTypeChange}>
          <SelectTrigger className={cn(triggerClass, "sm:w-[140px]")}>
            <SelectValue placeholder={t("ads.filters.format")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <SelectItem value="all" className={itemClass}>
              {t("ads.filters.allFormats")}
            </SelectItem>
            <SelectItem value="card" className={itemClass}>
              {t("ads.filters.card")}
            </SelectItem>
            <SelectItem value="banner" className={itemClass}>
              {t("ads.filters.banner")}
            </SelectItem>
            <SelectItem value="native" className={itemClass}>
              {t("ads.filters.native")}
            </SelectItem>
            <SelectItem value="pop_up" className={itemClass}>
              {t("ads.filters.popUp")}
            </SelectItem>
            <SelectItem value="half_page" className={itemClass}>
              {t("ads.filters.halfPage")}
            </SelectItem>
            <SelectItem value="full_page" className={itemClass}>
              {t("ads.filters.fullPage")}
            </SelectItem>
            <SelectItem value="badge" className={itemClass}>
              {t("ads.filters.badge")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});
