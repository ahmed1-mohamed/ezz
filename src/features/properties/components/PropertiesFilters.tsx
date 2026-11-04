import React from "react";
import { SearchInput } from "@/components/shared/SearchInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePropertyTypes } from "@/hooks/use-property-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectFilterSelect } from "./ProjectFilterSelect";

interface PropertiesFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  projectFilter: string;
  onProjectChange: (value: string) => void;
}

export const PropertiesFilters = React.memo(function PropertiesFilters({
  searchQuery,
  onSearchChange,
  typeFilter,
  onTypeChange,
  statusFilter,
  onStatusChange,
  projectFilter,
  onProjectChange,
}: PropertiesFiltersProps) {
  const { data: propertiesType = [] } = usePropertyTypes();
  const { t } = useLanguage();

  const uniquePropertyTypes = React.useMemo(() => {
    const seen = new Set<string>();
    return propertiesType.filter((type: any) => {
      const id = type?.id ?? type?.property_type_id ?? type?.type_id;
      if (id === undefined || id === null) return false;
      const strId = String(id);
      if (seen.has(strId)) return false;
      seen.add(strId);
      return true;
    });
  }, [propertiesType]);

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 w-full">
      <div className="flex-1 min-w-[240px] max-w-xl">
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder={t("properties.filters.searchPlaceholder")}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center gap-2 w-full lg:w-auto">
        <Select value={typeFilter} onValueChange={onTypeChange}>
          <SelectTrigger className="w-full lg:w-[150px] xl:w-[170px] h-9 text-xs bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-200">
            <SelectValue placeholder={t("properties.filters.propertyType")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="all" value="all">{t("properties.filters.allTypes")}</SelectItem>
            {uniquePropertyTypes.map((type: any, index: number) => {
              const id = type.id ?? type.property_type_id ?? type.type_id ?? index;
              return (
                <SelectItem key={`prop-type-${id}`} value={String(id)}>
                  {type.name ?? type.property_type_name ?? type.type_name ?? String(id)}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>

        <ProjectFilterSelect
          value={projectFilter}
          onChange={onProjectChange}
          className="lg:w-[150px] xl:w-[180px]"
        />

        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-full lg:w-[140px] xl:w-[160px] h-9 text-xs bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-200">
            <SelectValue placeholder={t("properties.filters.status")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="all" value="all">{t("properties.filters.allStatus")}</SelectItem>
            <SelectItem key="available" value="available">{t("properties.filters.statusValues.available")}</SelectItem>
            <SelectItem key="reserved" value="reserved">{t("properties.filters.statusValues.reserved")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});