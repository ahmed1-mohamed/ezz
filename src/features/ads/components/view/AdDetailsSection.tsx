"use client";

import { memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, MapPin } from "lucide-react";
import { getPlatformIcon, getCountryName } from "./AdViewUtils";

interface AdDetailsSectionProps {
  adDetails: {
    title?: string;
    subtitle?: string;
    placement?: {
      format?: string;
      platform?: string;
      location?: string;
    };
    country_id?: number;
  } | null | undefined;
}

export const AdDetailsSection = memo(function AdDetailsSection({ adDetails }: AdDetailsSectionProps) {
  const { t } = useLanguage();
  const notSetVal = t("ads.details.notSet");

  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">{t("ads.details.adDetails")}</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.title")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails?.title || notSetVal}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.subtitle")}</span>
          </div>
          <div
            className="font-medium text-gray-900 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: adDetails?.subtitle || notSetVal }}
          />
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.typeFormat")}</span>
          </div>
          <p className="font-medium text-gray-900">
            {adDetails?.placement?.format
              ? (t(`ads.filters.${adDetails.placement.format.toLowerCase()}`) !== `ads.filters.${adDetails.placement.format.toLowerCase()}`
                ? t(`ads.filters.${adDetails.placement.format.toLowerCase()}`)
                : adDetails.placement.format)
              : notSetVal}
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            {getPlatformIcon(adDetails?.placement?.platform || "")}
            <span className="text-sm">{t("ads.details.platform")}</span>
          </div>
          <p className="font-medium text-gray-900 capitalize">
            {adDetails?.placement?.platform
              ? (t(`ads.filters.${adDetails.placement.platform.toLowerCase()}`) !== `ads.filters.${adDetails.placement.platform.toLowerCase()}`
                ? t(`ads.filters.${adDetails.placement.platform.toLowerCase()}`)
                : adDetails.placement.platform)
              : notSetVal}
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Globe className="w-4 h-4" />
            <span className="text-sm">{t("ads.details.country")}</span>
          </div>
          <p className="font-medium text-gray-900">{getCountryName(adDetails?.country_id, t)}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{t("ads.details.location")}</span>
          </div>
          <p className="font-medium text-gray-900 capitalize">{adDetails?.placement?.location || notSetVal}</p>
        </div>
      </div>
    </div>
  );
});
