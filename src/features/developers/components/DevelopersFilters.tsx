import React from "react";
import { SearchInput } from "@/components/shared/SearchInput";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DevelopersFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  countryFilter: string;
  onCountryChange: (value: string) => void;
}

const COUNTRY_FILTER_OPTIONS = [
  { id: "1", key: "egypt" },
  { id: "3", key: "oman" },
  { id: "2", key: "uae" },
];

export const DevelopersFilters = React.memo(function DevelopersFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  countryFilter,
  onCountryChange,
}: DevelopersFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 w-full">
      <div className="w-full lg:w-[260px] xl:w-[380px]">
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder={t("developers.search")}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 w-full lg:w-auto">
        <Select value={countryFilter} onValueChange={onCountryChange}>
          <SelectTrigger className="w-full sm:w-[190px] xl:w-[220px] bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-gray-100 shadow-2xs">
            <SelectValue placeholder={t("developers.country")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <SelectItem value="all" className="dark:text-gray-200 dark:hover:bg-neutral-800 cursor-pointer">
              {t("developers.allCountries")}
            </SelectItem>
            {COUNTRY_FILTER_OPTIONS.map((c) => (
              <SelectItem key={c.id} value={c.id} className="dark:text-gray-200 dark:hover:bg-neutral-800 cursor-pointer">
                {t(`common.countries.${c.key}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-full sm:w-[180px] xl:w-[200px] bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-gray-100 shadow-2xs">
            <SelectValue placeholder={t("developers.status")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <SelectItem value="all" className="dark:text-gray-200 dark:hover:bg-neutral-800 cursor-pointer">
              {t("developers.allStatus")}
            </SelectItem>
            <SelectItem value="active" className="dark:text-gray-200 dark:hover:bg-neutral-800 cursor-pointer">
              {t("common.active")}
            </SelectItem>
            <SelectItem value="inactive" className="dark:text-gray-200 dark:hover:bg-neutral-800 cursor-pointer">
              {t("common.inactive")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});
