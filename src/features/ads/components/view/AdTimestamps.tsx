"use client";

import { memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar } from "lucide-react";
import { formatDate } from "./AdViewUtils";

interface AdTimestampsProps {
  adDetails: {
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
  } | null | undefined;
}

export const AdTimestamps = memo(function AdTimestamps({ adDetails }: AdTimestampsProps) {
  const { t } = useLanguage();

  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">{t("ads.details.timestamps")}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{t("ads.details.createdAt")}</span>
          </div>
          <p className="font-medium text-gray-900">{formatDate(adDetails?.created_at, t)}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{t("ads.details.updatedAt")}</span>
          </div>
          <p className="font-medium text-gray-900">{formatDate(adDetails?.updated_at, t)}</p>
        </div>

        {adDetails?.deleted_at && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{t("ads.details.deletedAt")}</span>
            </div>
            <p className="font-medium text-gray-900">{formatDate(adDetails.deleted_at, t)}</p>
          </div>
        )}
      </div>
    </div>
  );
});
