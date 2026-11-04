import { SafeImage } from "@/components/ui/safe-image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Building, Calendar, DollarSign, Target, Expand } from "lucide-react";
import { ProjectData } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectSidebarProps {
  data: ProjectData;
  buildingsCount: number;
}

export function ProjectSidebar({ data, buildingsCount }: ProjectSidebarProps) {
  const { t } = useLanguage();
  return (
    <div className="space-y-6">
      {data.developer && (
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-4">
            {t("projects.columns.developer")}
          </h3>
          <div className="flex items-start gap-4 mb-5">
            {data.developer.logo ? (
              <div className="p-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm shrink-0">
                <SafeImage
                  src={data.developer.logo}
                  alt={t("projects.details.developerLogo")}
                  width={56}
                  height={56}
                  fallbackSrc="/images/default-logo.svg"
                  className="w-14 h-14 rounded-lg object-cover"
                />
              </div>
            ) : (
              <div className="w-14 h-14 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xl font-bold text-slate-500 dark:text-slate-400">
                {data.developer.name?.substring(0, 2).toUpperCase()}
              </div>
            )}
            <div className="pt-1 overflow-hidden">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 truncate">
                {data.developer.name}
              </h4>
              <Badge className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-teal-900/50 border-teal-200 dark:border-teal-800 text-xs mt-2 transition-colors">
                {data.developer.status || t("projects.details.verifiedDeveloper")}
              </Badge>
            </div>
          </div>
          <div className="space-y-3 text-sm mb-5 divide-y divide-slate-100/50 dark:divide-slate-700/50">
            <div className="flex justify-between items-center pt-2">
              <span className="text-slate-500 dark:text-slate-400">{t("common.email")}</span>
              <span className="text-slate-900 dark:text-slate-200 font-medium truncate ms-4">{data.developer.email}</span>
            </div>
            {data.developer.website && (
              <div className="flex justify-between items-center pt-3">
                <span className="text-slate-500 dark:text-slate-400">{t("projects.details.website")}</span>
                <span className="text-slate-900 dark:text-slate-200 font-medium truncate ms-4">
                  {data.developer.website}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center pt-3">
              <span className="text-slate-500 dark:text-slate-400">{t("common.phone")}</span>
              <span className="text-slate-900 dark:text-slate-200 font-medium">
                {data.developer.phone_number}
              </span>
            </div>
          </div>
          {data.developer.description && (
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {data.developer.description}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-4">
          {t("projects.details.overview")}
        </h3>
        <div className="space-y-4 text-sm divide-y divide-slate-100/50 dark:divide-slate-700/50">
          <div className="flex justify-between items-center pt-1">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Expand className="w-4 h-4" />
              <span>{t("projects.details.totalArea")}</span>
            </div>
            <span className="text-slate-900 dark:text-slate-200 font-semibold bg-slate-50 dark:bg-slate-700/50 px-2 py-0.5 rounded-md">
              {data.project_size || t("common.na")}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>{t("projects.form.units.launchDate")}</span>
            </div>
            <span className="text-slate-900 dark:text-slate-200 font-medium">
              {data.launch_date || t("common.na")}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Target className="w-4 h-4" />
              <span>{t("projects.details.deliveryDate")}</span>
            </div>
            <span className="text-slate-900 dark:text-slate-200 font-medium">
              {data.completion_date || t("common.na")}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <DollarSign className="w-4 h-4" />
              <span>{t("projects.details.priceRange")}</span>
            </div>
            <span className="text-slate-900 dark:text-slate-200 font-medium">
              {data.price_range || t("common.na")}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Building className="w-4 h-4" />
              <span>{t("editProject.tabs.buildings")}</span>
            </div>
            <span className="text-slate-900 dark:text-slate-200 font-medium">
              {buildingsCount}
            </span>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4" />
              <span>{t("projects.form.basicInfo.projectType")}</span>
            </div>
            <span className="text-slate-900 dark:text-slate-200 font-medium">
              {data.project_type || t("common.na")}
            </span>
          </div>
        </div>
      </div>

      {data.location && (
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-4">
            {t("projects.details.locationData")}
          </h3>
          <div className="space-y-3 text-sm divide-y divide-slate-100/50 dark:divide-slate-700/50">
            {data.location.city && (
              <div className="flex justify-between pt-2">
                <span className="text-slate-500 dark:text-slate-400">{t("projects.form.location.city")}</span>
                <span className="text-slate-900 dark:text-slate-200 font-medium">
                  {data.location.city.name}
                </span>
              </div>
            )}
            {data.location.area && (
              <div className="flex justify-between pt-3">
                <span className="text-slate-500 dark:text-slate-400">{t("projects.form.location.area")}</span>
                <span className="text-slate-900 dark:text-slate-200 font-medium">
                  {data.location.area.area_name}
                </span>
              </div>
            )}
            {data.location.north_side && (
              <div className="flex justify-between pt-3">
                <span className="text-slate-500 dark:text-slate-400">{t("projects.form.location.northSide")}</span>
                <span className="text-slate-900 dark:text-slate-200 text-end w-1/2 line-clamp-1" title={data.location.north_side}>
                  {data.location.north_side}
                </span>
              </div>
            )}
            {data.location.south_side && (
              <div className="flex justify-between pt-3">
                <span className="text-slate-500 dark:text-slate-400">{t("projects.form.location.southSide")}</span>
                <span className="text-slate-900 dark:text-slate-200 text-end w-1/2 line-clamp-1" title={data.location.south_side}>
                  {data.location.south_side}
                </span>
              </div>
            )}
            {data.location.east_side && (
              <div className="flex justify-between pt-3">
                <span className="text-slate-500 dark:text-slate-400">{t("projects.form.location.eastSide")}</span>
                <span className="text-slate-900 dark:text-slate-200 text-end w-1/2 line-clamp-1" title={data.location.east_side}>
                  {data.location.east_side}
                </span>
              </div>
            )}
            {data.location.west_side && (
              <div className="flex justify-between pt-3">
                <span className="text-slate-500 dark:text-slate-400">{t("projects.form.location.westSide")}</span>
                <span className="text-slate-900 dark:text-slate-200 text-end w-1/2 line-clamp-1" title={data.location.west_side}>
                  {data.location.west_side}
                </span>
              </div>
            )}
            {data.location.landmark && (
              <div className="pt-3">
                <span className="text-slate-500 dark:text-slate-400 block mb-1">{t("editProject.location.landmark")}</span>
                <span className="text-slate-900 dark:text-slate-200 font-medium">
                  {data.location.landmark}
                </span>
              </div>
            )}
            {data.location.latitude && data.location.longitude && (
              <div className="pt-3">
                <span className="text-slate-500 dark:text-slate-400 block mb-1">
                  {t("projects.details.coordinates")}
                </span>
                <span className="text-slate-900 dark:text-slate-200 font-mono bg-slate-50 dark:bg-slate-700/50 px-2 py-1 rounded">
                  {data.location.latitude}° N, {data.location.longitude}° E
                </span>
              </div>
            )}
            {data.location.google_map_link && (
              <div className="pt-4">
                <a
                  href={data.location.google_map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full rounded-xl bg-teal-600 hover:bg-teal-700 px-4 py-2.5 text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <MapPin className="me-2 h-4 w-4" />
                  {t("projects.details.viewOnGoogleMaps")}
                  <ExternalLink className="ms-2 h-4 w-4 opacity-70" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
