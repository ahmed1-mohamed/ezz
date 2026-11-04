import React, { memo } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReservationFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  countryFilter: string;
  onCountryChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  typeFilter: string;
  onTypeChange: (value: string) => void;
  expiryDateFilter: string;
  onExpiryDateChange: (value: string) => void;
  children?: React.ReactNode;
}

export const ReservationFilters = memo(function ReservationFilters({
  searchQuery,
  onSearchChange,
  countryFilter,
  onCountryChange,
  statusFilter,
  onStatusChange,
  typeFilter,
  onTypeChange,
  expiryDateFilter,
  onExpiryDateChange,
  children,
}: ReservationFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white p-3 rounded-xl border border-gray-200/80 shadow-2xs space-y-3">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 w-full">
        {/* Main filters row taking full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-1 items-center gap-2.5 w-full">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px] w-full">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t("reservations.filters.search")}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="ps-9 pe-8 bg-gray-50/50 hover:bg-white focus:bg-white border-gray-200 text-sm h-9 w-full rounded-lg transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5 rounded-full transition-colors"
                aria-label={t("reservations.filters.clearSearch")}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Country Select */}
          <Select value={countryFilter} onValueChange={onCountryChange}>
            <SelectTrigger className="w-full lg:w-[130px] h-9 text-xs bg-gray-50/50 hover:bg-white border-gray-200 rounded-lg">
              <SelectValue placeholder={t("reservations.filters.country")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("reservations.filters.allCountries")}</SelectItem>
              <SelectItem value="UAE">{t("common.countries.uae")}</SelectItem>
              <SelectItem value="Egypt">{t("common.countries.egypt")}</SelectItem>
              <SelectItem value="Oman">{t("common.countries.oman")}</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Select */}
          <Select value={statusFilter} onValueChange={onStatusChange}>
            <SelectTrigger className="w-full lg:w-[140px] h-9 text-xs bg-gray-50/50 hover:bg-white border-gray-200 rounded-lg">
              <SelectValue placeholder={t("reservations.filters.status")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("reservations.filters.allStatus")}</SelectItem>
              <SelectItem value="in_process">{t("reservations.statusMap.in_process")}</SelectItem>
              <SelectItem value="confirmed">{t("reservations.statusMap.confirmed")}</SelectItem>
              <SelectItem value="cancelled">{t("reservations.statusMap.cancelled")}</SelectItem>
              <SelectItem value="under_review">{t("reservations.statusMap.under_review")}</SelectItem>
              <SelectItem value="completed">{t("reservations.statusMap.completed")}</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Type Select */}
          <Select
            value={typeFilter && typeFilter !== "all" ? typeFilter.toUpperCase() : "all"}
            onValueChange={onTypeChange}
          >
            <SelectTrigger className="w-full lg:w-[190px] h-9 text-xs bg-gray-50/50 hover:bg-white border-gray-200 rounded-lg">
              <SelectValue placeholder={t("reservations.filters.type")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("reservations.filters.allTypes")}</SelectItem>
              <SelectItem value="IDENTIFICATION">{t("reservations.typeMap.identification")}</SelectItem>
              <SelectItem value="SALES_OFFER">{t("reservations.typeMap.sales_offer")}</SelectItem>
              <SelectItem value="DOWN_PAYMENT">{t("reservations.typeMap.down_payment")}</SelectItem>
              <SelectItem value="SALES_PURCHASE">{t("reservations.typeMap.sales_purchase")}</SelectItem>
            </SelectContent>
          </Select>

          {/* Expiry Date Select */}
          <Select value={expiryDateFilter} onValueChange={onExpiryDateChange}>
            <SelectTrigger className="w-full lg:w-[140px] h-9 text-xs bg-gray-50/50 hover:bg-white border-gray-200 rounded-lg">
              <SelectValue placeholder={t("reservations.filters.expiryDate")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("reservations.filters.allExpiryDates")}</SelectItem>
              <SelectItem value="expired">{t("reservations.filters.expired")}</SelectItem>
              <SelectItem value="active">{t("reservations.filters.active")}</SelectItem>
              <SelectItem value="no_expiry">{t("reservations.filters.noExpiry")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* TableSettings / Action Children */}
        {children && (
          <div className="flex items-center justify-end gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-gray-100">
            {children}
          </div>
        )}
      </div>
    </div>
  );
});

