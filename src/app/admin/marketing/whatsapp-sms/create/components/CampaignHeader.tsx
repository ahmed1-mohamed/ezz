import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface CampaignHeaderProps {
  basePath: string;
  isRTL: boolean;
}

export const CampaignHeader = React.memo(({ basePath, isRTL }: CampaignHeaderProps) => {
  const router = useRouter();
  const { t } = useLanguage();
  return (
    <div>
      <button
        type="button"
        onClick={() => router.push(`${basePath}/marketing/whatsapp-sms`)}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors font-medium mb-4"
      >
        <ArrowLeft className={`h-4 w-4 ${isRTL && "rotate-180"}`} />
        {t("marketingWhatsappSms.create.backToCampaigns")}
      </button>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {t("marketingWhatsappSms.create.createNewMessage")}
      </h1>
    </div>
  );
});

CampaignHeader.displayName = "CampaignHeader";
