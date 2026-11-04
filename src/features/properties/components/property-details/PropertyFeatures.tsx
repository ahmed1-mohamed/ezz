"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface PropertyFeatureItem {
  feature_id?: number | string;
  id?: number | string;
  feature_name?: string;
  name?: string;
  value?: string | number | null;
  title?: string;
  is_amenity?: number | boolean;
}

interface PropertyFeaturesProps {
  features?: PropertyFeatureItem[];
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  const { t } = useLanguage();

  if (!features || features.length === 0) return null;

  return (
    <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
      <CardHeader className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.details.featuresAmenities")}
          </CardTitle>
        </div>
        <Badge variant="outline" className="text-xs font-normal">
          {features.length} {t("properties.details.featuresCountLabel")}
        </Badge>
      </CardHeader>

      <CardContent className="p-4 sm:p-5">
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {features.map((feature, idx) => {
            const label =
              feature.feature_name ||
              feature.name ||
              (typeof feature.value === "string" && !feature.name ? feature.value : null) ||
              feature.title ||
              t("properties.details.featureFallback", { id: feature.feature_id ?? idx + 1 });

            const customValue =
              feature.value && feature.value !== label
                ? String(feature.value)
                : null;

            return (
              <div
                key={feature.feature_id ?? feature.id ?? idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-gray-50 hover:bg-teal-50/50 dark:bg-neutral-800/60 dark:hover:bg-teal-950/30 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-neutral-700/80 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="truncate max-w-[200px] sm:max-w-xs">{label}</span>
                {customValue && (
                  <span className="text-xs px-1.5 py-0.5 rounded bg-white dark:bg-neutral-700/80 text-teal-700 dark:text-teal-300 font-normal border border-gray-200 dark:border-neutral-600">
                    {customValue}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

