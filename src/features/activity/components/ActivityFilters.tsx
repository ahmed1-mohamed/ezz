import { SearchInput } from "@/components/shared/SearchInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

interface ActivityFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  actionFilter: string;
  onActionChange: (value: string) => void;
  entityFilter: string;
  onEntityChange: (value: string) => void;
  dateFilter: string;
  onDateChange: (value: string) => void;
}

export function ActivityFilters({
  searchQuery,
  onSearchChange,
  actionFilter,
  onActionChange,
  entityFilter,
  onEntityChange,
  dateFilter,
  onDateChange,
}: ActivityFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
      <div className="flex-1 min-w-[200px] max-w-sm">
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder={t("activity.filters.search")}
        />
      </div>

      <Select value={actionFilter} onValueChange={onActionChange}>
        <SelectTrigger className="w-[140px] max-sm:w-full h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 shadow-2xs">
          <SelectValue placeholder={t("activity.filters.actions")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("activity.filters.allActions")}</SelectItem>
          <SelectItem value="create">{t("activity.filters.create")}</SelectItem>
          <SelectItem value="update">{t("activity.filters.update")}</SelectItem>
          <SelectItem value="delete">{t("activity.filters.delete")}</SelectItem>
          <SelectItem value="login">{t("activity.filters.login")}</SelectItem>
        </SelectContent>
      </Select>

      <Select value={entityFilter} onValueChange={onEntityChange}>
        <SelectTrigger className="w-[140px] max-sm:w-full h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 shadow-2xs">
          <SelectValue placeholder={t("activity.filters.entities")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("activity.filters.allEntities")}</SelectItem>
          <SelectItem value="Developer">{t("activity.filters.developer")}</SelectItem>
          <SelectItem value="Project">{t("activity.filters.project")}</SelectItem>
          <SelectItem value="Unit">{t("activity.filters.unit")}</SelectItem>
          <SelectItem value="User">{t("activity.filters.user")}</SelectItem>
        </SelectContent>
      </Select>

      <div className="relative">
        <input
          type="date"
          className="h-9 w-[140px] max-sm:w-full rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 text-xs text-gray-700 dark:text-gray-200 shadow-2xs focus:outline-none focus:ring-1 focus:ring-teal-500"
          value={dateFilter === "all" ? "" : dateFilter}
          onChange={(e) => onDateChange(e.target.value || "all")}
        />
      </div>
    </div>
  );
}
