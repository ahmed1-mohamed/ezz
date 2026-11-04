import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CampaignTypeSelectorProps {
  campaignType: "sms" | "whatsapp";
  setCampaignType: (type: "sms" | "whatsapp") => void;
  isRTL: boolean;
}

export const CampaignTypeSelector = React.memo(({
  campaignType,
  setCampaignType,
  isRTL,
}: CampaignTypeSelectorProps) => {
  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-3">
        <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
          {isRTL ? "القناة" : "Channel"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setCampaignType("sms")}
            className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-start ${campaignType === "sms"
                ? "border-teal-500 bg-teal-50/20 dark:bg-teal-950/20"
                : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-gray-300 dark:hover:border-neutral-600"
              }`}
          >
            <div
              className={`p-2.5 rounded-lg ${campaignType === "sms"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 dark:bg-neutral-800 text-gray-500"
                }`}
            >
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div
                className={`text-sm font-bold ${campaignType === "sms"
                    ? "text-teal-700 dark:text-teal-400"
                    : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                SMS
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {isRTL ? "عبر Twilio" : "via Twilio"}
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setCampaignType("whatsapp")}
            className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-start ${campaignType === "whatsapp"
                ? "border-teal-500 bg-teal-50/20 dark:bg-teal-950/20"
                : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-gray-300 dark:hover:border-neutral-600"
              }`}
          >
            <div
              className={`p-2.5 rounded-lg ${campaignType === "whatsapp"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 dark:bg-neutral-800 text-gray-500"
                }`}
            >
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <div
                className={`text-sm font-bold ${campaignType === "whatsapp"
                    ? "text-teal-700 dark:text-teal-400"
                    : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                WhatsApp
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {isRTL ? "عبر واتساب Cloud API" : "via WhatsApp Cloud API"}
              </div>
            </div>
          </button>
        </div>
      </CardContent>
    </Card>
  );
});

CampaignTypeSelector.displayName = "CampaignTypeSelector";