"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  AdminPropertiesService,
  AvailableFeature,
  PropertyFeatureItemInput,
} from "@/features/properties/services/AdminPropertiesService";
import SeoSection from "../SeoSection";
import {
  Search,
  Check,
  Sparkles,
  Waves,
  Layers,
  X,
  RefreshCw,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useDebounce } from "@/hooks/useDebounce";

export interface SelectedPropertyFeature extends PropertyFeatureItemInput {
  feature_name?: string;
  is_amenity?: number;
  icons?: string | null;
}

interface AmenitiesTabProps {
  register: UseFormRegister<PropertiesInput>;
  setValue?: UseFormSetValue<PropertiesInput>;
  watch?: UseFormWatch<PropertiesInput>;
  selectedFeatures?: SelectedPropertyFeature[];
  onChangeFeatures?: (features: SelectedPropertyFeature[]) => void;
  errors?: FieldErrors<PropertiesInput>;
  /** When rendered inside a hidden tab, pass whether the tab is active so the
   *  features list is only fetched once the tab is first opened. */
  isActive?: boolean;
}

type FeatureFilterTab = "all" | "amenities" | "features";

export default function AmenitiesTab({
  register,
  setValue,
  watch,
  selectedFeatures: controlledSelectedFeatures,
  onChangeFeatures,
  errors,
  isActive = true,
}: AmenitiesTabProps) {
  const { t } = useLanguage();

  // Latch: fetch on first activation, then keep the data (no refetch on tab switches).
  const [hasActivated, setHasActivated] = useState(isActive);
  if (isActive && !hasActivated) setHasActivated(true);

  const [internalSelected, setInternalSelected] = useState<SelectedPropertyFeature[]>([]);
  const selectedFeatures = controlledSelectedFeatures ?? internalSelected;

  const updateSelectedFeatures = (updater: (prev: SelectedPropertyFeature[]) => SelectedPropertyFeature[]) => {
    const next = updater(selectedFeatures);
    if (onChangeFeatures) {
      onChangeFeatures(next);
    } else {
      setInternalSelected(next);
    }
  };

  const [activeTab, setActiveTab] = useState<FeatureFilterTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery);

  const {
    data: allFeatures = [],
    isLoading,
    isError,
    refetch,
  } = useQuery<AvailableFeature[]>({
    queryKey: ["available-features"],
    queryFn: () => AdminPropertiesService.getAvailableFeatures(),
    staleTime: 5 * 60 * 1000,
    enabled: hasActivated,
  });

  const filteredFeatures = useMemo(() => {
    return allFeatures.filter((f) => {
      const matchesTab =
        activeTab === "all"
          ? true
          : activeTab === "amenities"
            ? f.is_amenity === 1
            : f.is_amenity === 0;

      const matchesSearch =
        !debouncedSearch.trim() ||
        f.feature_name.toLowerCase().includes(debouncedSearch.toLowerCase().trim());

      return matchesTab && matchesSearch;
    });
  }, [allFeatures, activeTab, debouncedSearch]);

  const amenitiesCount = useMemo(
    () => allFeatures.filter((f) => f.is_amenity === 1).length,
    [allFeatures]
  );
  const featuresOnlyCount = useMemo(
    () => allFeatures.filter((f) => f.is_amenity === 0).length,
    [allFeatures]
  );

  const selectedCount = selectedFeatures.length;
  const selectedAmenitiesCount = useMemo(
    () =>
      selectedFeatures.filter((sf) => {
        const found = allFeatures.find((f) => f.feature_id === sf.feature_id);
        return found ? found.is_amenity === 1 : sf.is_amenity === 1;
      }).length,
    [selectedFeatures, allFeatures]
  );
  const selectedFeaturesOnlyCount = selectedCount - selectedAmenitiesCount;

  const toggleFeature = (feature: AvailableFeature) => {
    updateSelectedFeatures((prev) => {
      const exists = prev.some((item) => item.feature_id === feature.feature_id);
      if (exists) {
        return prev.filter((item) => item.feature_id !== feature.feature_id);
      }
      return [
        ...prev,
        {
          feature_id: feature.feature_id,
          value: feature.feature_name,
          feature_name: feature.feature_name,
          is_amenity: feature.is_amenity,
          icons: feature.icons,
        },
      ];
    });
  };

  const selectAllFiltered = () => {
    updateSelectedFeatures((prev) => {
      const prevIds = new Set(prev.map((p) => p.feature_id));
      const newAdditions: SelectedPropertyFeature[] = filteredFeatures
        .filter((f) => !prevIds.has(f.feature_id))
        .map((f) => ({
          feature_id: f.feature_id,
          value: f.feature_name,
          feature_name: f.feature_name,
          is_amenity: f.is_amenity,
          icons: f.icons,
        }));
      return [...prev, ...newAdditions];
    });
  };

  const clearFiltered = () => {
    const filteredIds = new Set(filteredFeatures.map((f) => f.feature_id));
    updateSelectedFeatures((prev) =>
      prev.filter((p) => !filteredIds.has(p.feature_id))
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-neutral-800 pb-4">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              {t("properties.create.amenities.title")}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {t("properties.create.amenities.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Badge
              variant="outline"
              className="bg-teal-50/60 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800 font-medium px-2.5 py-1 text-xs"
            >
              {t("properties.create.amenities.selectedSummary", {
                selected: selectedCount,
                amenities: selectedAmenitiesCount,
                features: selectedFeaturesOnlyCount,
              })}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-gray-100/80 dark:bg-neutral-800/80 rounded-lg w-fit">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "all"
                ? "bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 shadow-2xs font-semibold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t("common.all")}</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-gray-200 dark:bg-neutral-700 rounded-full">
                {allFeatures.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("amenities")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "amenities"
                ? "bg-white dark:bg-neutral-900 text-teal-700 dark:text-teal-300 shadow-2xs font-semibold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
            >
              <Waves className="w-3.5 h-3.5 text-teal-500" />
              <span>{t("properties.create.amenities.filterAmenities")}</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-gray-200 dark:bg-neutral-700 rounded-full">
                {amenitiesCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("features")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "features"
                ? "bg-white dark:bg-neutral-900 text-indigo-700 dark:text-indigo-300 shadow-2xs font-semibold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>{t("properties.create.amenities.filterFeatures")}</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-gray-200 dark:bg-neutral-700 rounded-full">
                {featuresOnlyCount}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <Input
                type="text"
                placeholder={t("properties.create.amenities.searchFeatures")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ps-9 pe-8 h-9 text-xs dark:bg-neutral-900 dark:border-neutral-700"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {filteredFeatures.length > 0 && (
              <div className="flex items-center gap-1.5 shrink-0">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={selectAllFiltered}
                  className="h-9 text-xs px-2.5 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800"
                >
                  {t("properties.create.amenities.selectAll")}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={clearFiltered}
                  className="h-9 text-xs px-2.5 text-gray-500 hover:text-red-600 dark:hover:text-red-400"
                >
                  {t("properties.create.amenities.clear")}
                </Button>
              </div>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-2">
            {Array.from({ length: 18 }).map((_, i) => (
              <Skeleton key={i} className="h-9 rounded-lg" />
            ))}
          </div>
        ) : isError ? (
          <div className="p-6 text-center rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-300">
            <p className="text-sm font-medium">
              {t("properties.create.amenities.loadFailed")}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              className="mt-2 text-xs border-red-300 dark:border-red-800 hover:bg-red-100/50 dark:hover:bg-red-900/30"
            >
              <RefreshCw className="w-3.5 h-3.5 me-1" />
              {t("properties.create.amenities.retry")}
            </Button>
          </div>
        ) : filteredFeatures.length === 0 ? (
          <div className="py-8 text-center text-gray-500 dark:text-gray-400 border border-dashed border-gray-200 dark:border-neutral-800 rounded-xl">
            <Search className="w-6 h-6 mx-auto mb-2 text-gray-300 dark:text-neutral-600" />
            <p className="text-xs sm:text-sm font-medium">
              {t("properties.create.amenities.noResults")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-1 max-h-[360px] overflow-y-auto pe-1">
            {filteredFeatures.map((feature) => {
              const isSelected = selectedFeatures.some(
                (sf) => sf.feature_id === feature.feature_id
              );
              const isAmenity = feature.is_amenity === 1;

              return (
                <button
                  key={feature.feature_id}
                  type="button"
                  onClick={() => toggleFeature(feature)}
                  className={`group relative flex items-center justify-between gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer select-none text-start text-balance ${isSelected
                    ? isAmenity
                      ? "bg-teal-50 border-teal-500 text-teal-900 dark:bg-teal-950/40 dark:border-teal-500 dark:text-teal-200 shadow-2xs"
                      : "bg-indigo-50 border-indigo-500 text-indigo-900 dark:bg-indigo-950/40 dark:border-indigo-500 dark:text-indigo-200 shadow-2xs"
                    : "bg-white dark:bg-neutral-900/90 border-gray-200 dark:border-neutral-700/80 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800/60"
                    }`}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="shrink-0 text-sm leading-none">
                      {feature.icons || (isAmenity ? "🏊" : "✨")}
                    </span>
                    <span className="truncate" title={feature.feature_name}>
                      {feature.feature_name}
                    </span>
                  </div>

                  <span
                    className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center transition-all ${isSelected
                      ? isAmenity
                        ? "bg-teal-600 text-white"
                        : "bg-indigo-600 text-white"
                      : "border border-gray-300 dark:border-neutral-600 opacity-40 group-hover:opacity-100"
                      }`}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <SeoSection register={register} setValue={setValue} watch={watch} errors={errors} />
    </div>
  );
}

