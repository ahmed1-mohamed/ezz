"use client";

import { memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface AdBasicInfoProps {
  adDetails: {
    creative_id?: string | number;
    campaign_id?: string | number;
    placement_id?: string | number;
    entity_type?: string;
    entity_id?: string | number;
    weight?: string | number;
  } | null | undefined;
}

export const AdBasicInfo = memo(function AdBasicInfo({ adDetails }: AdBasicInfoProps) {
  const { t } = useLanguage();
  const notSetVal = t("ads.details.notSet");

  const getEntityTypeLabel = (type: string | undefined) => {
    if (!type) return notSetVal;
    const lowerType = type.toLowerCase();
    if (lowerType === "projects") return t("ads.filters.project");
    if (lowerType === "properties") return t("ads.filters.property");
    return type;
  };

  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">{t("ads.details.basicInfo")}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.creativeId")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails?.creative_id || notSetVal}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.campaignId")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails?.campaign_id || notSetVal}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.placementId")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails?.placement_id || notSetVal}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.entityType")}</span>
          </div>
          <p className="font-medium text-gray-900 capitalize">
            {getEntityTypeLabel(adDetails?.entity_type)}
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.entityId")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails?.entity_id || notSetVal}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.weightPriority")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails?.weight || notSetVal}</p>
        </div>
      </div>
    </div>
  );
});
