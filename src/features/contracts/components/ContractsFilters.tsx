"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ContractStatus } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface ContractsFiltersProps {
  search: string;
  onSearchChange: (val: string) => void;
  status: ContractStatus;
  onStatusChange: (val: ContractStatus) => void;
}

interface StatusTab {
  id: ContractStatus;
  labelEn: string;
  labelAr: string;
}

const STATUS_TABS: StatusTab[] = [
  { id: "all", labelEn: "All", labelAr: "الكل" },
  { id: "draft", labelEn: "Draft", labelAr: "مسودة" },
  { id: "sent", labelEn: "Sent", labelAr: "مرسل" },
  { id: "signed", labelEn: "Signed", labelAr: "موقع" },
  { id: "cancelled", labelEn: "Cancelled", labelAr: "ملغي" },
];

export function ContractsFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: ContractsFiltersProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <div className="relative flex-1 min-w-[220px] max-w-sm">
        <Search
          className={cn(
            "absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400",
            isRTL ? "right-3" : "left-3"
          )}
        />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={
            isRTL
              ? "البحث بالعقد، العميل أو الوحدة..."
              : "Search contract, customer or unit..."
          }
          className={cn(
            "h-9 text-xs sm:text-sm bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 shadow-2xs rounded-lg",
            isRTL ? "pr-9 pl-3" : "pl-9 pr-3"
          )}
        />
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none flex-wrap">
        {STATUS_TABS.map((tab) => {
          const isActive = status === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onStatusChange(tab.id)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer",
                isActive
                  ? "bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800 font-semibold shadow-2xs"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 border border-transparent"
              )}
            >
              {isRTL ? tab.labelAr : tab.labelEn}
            </button>
          );
        })}
      </div>
    </div>
  );
}