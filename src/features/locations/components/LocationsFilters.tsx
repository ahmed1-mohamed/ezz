"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

interface LocationsFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  cities: string[];
  cityFilter: string;
  onCityChange: (value: string) => void;
  children?: React.ReactNode;
}

export function LocationsFilters({
  searchQuery,
  onSearchChange,
  cities,
  cityFilter,
  onCityChange,
  children,
}: LocationsFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 w-full">
      <div className="flex items-center gap-2.5 flex-wrap flex-1 min-w-0">
        <div className="relative w-full sm:w-72 min-w-[220px]">
          <Search
            className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 dark:text-gray-500 pointer-events-none start-3"
          />
          <Input
            placeholder={t("locations.filters.search")}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 rounded-lg shadow-2xs ps-9 pe-3"
          />
        </div>

        <Select value={cityFilter} onValueChange={onCityChange}>
          <SelectTrigger className="w-[150px] h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 rounded-lg text-gray-700 dark:text-gray-300 shadow-2xs">
            <SelectValue placeholder={t("locations.filters.allCities")} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-xs max-h-64">
            <SelectItem value="all">{t("locations.filters.allCities")}</SelectItem>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {children && (
        <div className="flex items-center gap-2">
          {children}
        </div>
      )}
    </div>
  );
}
