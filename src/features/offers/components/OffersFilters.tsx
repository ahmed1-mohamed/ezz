"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

interface OffersFiltersProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  statusFilter: string;
  onStatusChange: (val: string) => void;
}

export function OffersFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
}: OffersFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
      <div className="relative flex-1">
        <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        <Input
          placeholder={t("offers.filters.search")}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="ps-9 border-gray-200 focus-visible:ring-teal-500 bg-white w-full h-9"
        />
      </div>

      <Select value={statusFilter} onValueChange={onStatusChange}>
        <SelectTrigger className="w-full sm:w-[150px] border-gray-200 bg-white h-9 text-sm">
          <SelectValue placeholder={t("offers.filters.status")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("offers.filters.allStatus")}</SelectItem>
          <SelectItem value="active">{t("offers.filters.active")}</SelectItem>
          <SelectItem value="inactive">{t("offers.filters.inactive")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
