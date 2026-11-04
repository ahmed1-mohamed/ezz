import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExpertsFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}

export function ExpertsFilters({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
}: ExpertsFiltersProps) {
  const { t } = useLanguage();

  const filterTabs = [
    { label: t("common.all"), value: "all" },
    { label: t("common.active"), value: "approved" },
    { label: t("common.pending"), value: "pending" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
        <div className="relative w-full min-w-[220px] max-w-sm">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder={t("experts.filters.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ps-9 bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 h-9 text-xs sm:text-sm rounded-lg"
          />
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-1.5 bg-gray-100/70 dark:bg-neutral-800/80 p-1 rounded-lg">
          {filterTabs.map((tab) => {
            const isActive = statusFilter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setStatusFilter(tab.value)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  isActive
                    ? "bg-[#006262] text-white shadow-xs"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}