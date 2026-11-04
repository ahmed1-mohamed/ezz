"use client";

import { memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface AdEntityDetailsProps {
  adDetails: {
    entity_type?: string;
    entity?: {
      project_id?: string | number;
      project_name?: string;
      project_type?: string;
      status?: string;
      total_units?: string | number;
      available_units?: string | number;
      property_id?: string | number;
      property_name?: string;
      property_no?: string;
      price?: string;
      size?: string | number;
      bedrooms?: string | number;
      bathrooms?: string | number;
    };
  } | null | undefined;
}

export const AdEntityDetails = memo(function AdEntityDetails({ adDetails }: AdEntityDetailsProps) {
  const { t } = useLanguage();
  const notSetVal = t("ads.details.notSet");
  if (!adDetails?.entity) return null;

  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">{t("ads.details.linkedEntity")}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {adDetails.entity_type === "PROJECTS" ? (
          <>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.projectId")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.project_id || notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.projectName")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.project_name || notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.projectType")}</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{adDetails.entity.project_type || notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.status")}</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{adDetails.entity.status || notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.totalUnits")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.total_units ?? notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.availableUnits")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.available_units ?? notSetVal}</p>
            </div>
          </>
        ) : (
          <>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.propertyId")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.property_id || notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.propertyName")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.property_name || notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.propertyNo")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.property_no || notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.status")}</span>
              </div>
              <p className="font-medium text-gray-900 capitalize">{adDetails.entity.status || notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.price")}</span>
              </div>
              <p className="font-medium text-gray-900">
                {adDetails.entity.price ? `$${parseFloat(adDetails.entity.price).toLocaleString()}` : notSetVal}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.size")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.size ? `${adDetails.entity.size} sqm` : notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.bedrooms")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.bedrooms ?? notSetVal}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="text-sm">{t("ads.details.bathrooms")}</span>
              </div>
              <p className="font-medium text-gray-900">{adDetails.entity.bathrooms ?? notSetVal}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
