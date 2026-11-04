"use client";

import { memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SafeImage } from "@/components/ui/safe-image";
import { Image as ImageIcon } from "lucide-react";

interface AdImageProps {
  adDetails: {
    image_url?: string;
    title?: string;
  } | null | undefined;
}

export const AdImage = memo(function AdImage({ adDetails }: AdImageProps) {
  const { t } = useLanguage();
  if (!adDetails?.image_url) return null;

  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">{t("ads.details.image")}</h4>
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <ImageIcon className="w-4 h-4" />
          <span className="text-sm">{t("ads.details.imageUrl")}</span>
        </div>
        <a
          href={adDetails.image_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-teal-600 hover:text-teal-700 break-all"
        >
          {adDetails.image_url}
        </a>
        <div className="mt-3">
          <SafeImage
            src={adDetails.image_url}
            alt={adDetails.title || t("ads.details.untitledAd")}
            width={448}
            height={252}
            fallbackSrc="/images/default-logo.svg"
            className="max-w-md w-full h-auto rounded-lg border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
});
