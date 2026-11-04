"use client";

import { memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

interface AdCTADetailsProps {
  adDetails: {
    cta_label?: string;
    cta_url?: string;
  } | null | undefined;
}

export const AdCTADetails = memo(function AdCTADetails({ adDetails }: AdCTADetailsProps) {
  const { t } = useLanguage();
  const notSetVal = t("ads.details.notSet");

  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">{t("ads.details.ctaDetails")}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">{t("ads.details.ctaLabel")}</span>
          </div>
          <p className="font-medium text-gray-900">{adDetails?.cta_label || notSetVal}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">{t("ads.details.ctaUrl")}</span>
          </div>
          {adDetails?.cta_url ? (
            <a
              href={adDetails.cta_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-600 hover:text-teal-700 break-all"
            >
              {adDetails.cta_url}
            </a>
          ) : (
            <p className="font-medium text-gray-900">{notSetVal}</p>
          )}
        </div>
      </div>
    </div>
  );
});
