"use client";

import { memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface AdPlacementDetailsProps {
  adDetails: {
    placement?: {
      placement_id: string | number;
      code?: string;
      name?: string;
      format?: string;
      billing_unit?: string;
      default_price_credits?: string | number;
    };
  } | null | undefined;
}

export const AdPlacementDetails = memo(function AdPlacementDetails({ adDetails }: AdPlacementDetailsProps) {
  const { t } = useLanguage();
  const notSetVal = t("ads.details.notSet");
  if (!adDetails?.placement) return null;

  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">{t("ads.details.placementDetails")}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.placementId")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails.placement.placement_id}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.code")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails.placement.code || notSetVal}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.name")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails.placement.name || notSetVal}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.format")}</span>
          </div>
          <p className="font-medium text-gray-900 capitalize">
            {adDetails.placement.format
              ? (t(`ads.filters.${adDetails.placement.format.toLowerCase()}`) !== `ads.filters.${adDetails.placement.format.toLowerCase()}`
                ? t(`ads.filters.${adDetails.placement.format.toLowerCase()}`)
                : adDetails.placement.format)
              : notSetVal}
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.billingUnit")}</span>
          </div>
          <p className="font-medium text-gray-900 capitalize">
            {adDetails.placement.billing_unit
              ? (t(`activity.filters.${adDetails.placement.billing_unit.toLowerCase()}`) !== `activity.filters.${adDetails.placement.billing_unit.toLowerCase()}`
                ? t(`activity.filters.${adDetails.placement.billing_unit.toLowerCase()}`)
                : adDetails.placement.billing_unit)
              : notSetVal}
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.defaultPriceCredits")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails.placement.default_price_credits || notSetVal}</p>
        </div>
      </div>
    </div>
  );
});
