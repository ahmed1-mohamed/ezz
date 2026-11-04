import { DeveloperData } from "@/hooks/use-developer-details";
import { useLanguage } from "@/contexts/LanguageContext";

interface DeveloperStatsProps {
  developer: DeveloperData;
  totalProjects: number;
  totalUnits: number;
  availableUnits: number;
}

export function DeveloperStats({ developer, totalProjects, totalUnits, availableUnits }: DeveloperStatsProps) {
  const { t } = useLanguage();

  const totalProjectsCount =
    totalProjects > 0
      ? totalProjects
      : (developer.active_projects_count ?? 0) + (developer.completed_projects_count ?? 0);

  const stats = [
    {
      label: t("developers.details.totalProjects"),
      value: totalProjectsCount,
    },
    {
      label: t("developers.details.activeProjects"),
      value: developer.active_projects_count ?? 0,
    },
    {
      label: t("developers.details.completedProjects"),
      value: developer.completed_projects_count ?? 0,
    },
    {
      label: t("developers.details.totalUnits"),
      value: developer.total_units_count ?? totalUnits ?? 0,
    },
    {
      label: t("developers.details.activeUnits"),
      value: developer.active_units_count ?? 0,
    },
    {
      label: t("developers.details.avUnits"),
      value: developer.available_units_count ?? availableUnits ?? 0,
    },
    {
      label: t("developers.details.bookedUnits"),
      value: developer.booked_units_count ?? 0,
    },
    {
      label: t("developers.details.soldUnits"),
      value: developer.sold_units_count ?? 0,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
      {stats.map((stat, idx) => (
        <div key={idx} className="text-center sm:text-start">
          <p className="text-xs text-gray-500 mb-1 leading-tight">{stat.label}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
