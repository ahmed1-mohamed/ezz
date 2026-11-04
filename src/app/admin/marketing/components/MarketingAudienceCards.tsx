"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, UserCheck, Globe, Target, Phone, Mail } from "lucide-react";

export type AudienceSegmentType =
  | "all"
  | "registered"
  | "visitors"
  | "specific"
  | "foreign_contacts";

interface MarketingAudienceCardsProps {
  selectedAudience: AudienceSegmentType;
  onSelectAudience: (audience: AudienceSegmentType) => void;
  title?: string;
  allowedSegments?: AudienceSegmentType[];
  contactType?: "sms" | "whatsapp" | "email" | "notification";
}

export const MarketingAudienceCards = React.memo(({
  selectedAudience,
  onSelectAudience,
  title,
  allowedSegments,
  contactType,
}: MarketingAudienceCardsProps) => {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const isEmail = contactType === "email";

  const specificUserCard = {
    id: "specific" as AudienceSegmentType,
    label: isRTL ? "مستخدمون محددون (اختيار مستخدم)" : "Specific Users (User Select)",
    desc: isRTL
      ? "اختيار مستخدم مسجل بالمنصة عبر قائمة المستخدمين"
      : "Select registered platform users from users list",
    icon: Target,
    badge: isRTL ? "اختيار مستخدم" : "User Select",
  };

  const directContactCard = {
    id: "foreign_contacts" as AudienceSegmentType,
    label: isRTL
      ? "جهات اتصال خارجية / يدوية"
      : "Foreign / Manual Contacts",
    desc: isRTL
      ? isEmail
        ? "إدخال بريد إلكتروني يدوياً أو رفع ملف قائمة"
        : "إدخال أرقام الهواتف مباشرة أو رفع ملف أرقام (CSV/TXT)"
      : isEmail
        ? "Enter email addresses directly or upload CSV/TXT file"
        : "Enter phone numbers directly or upload CSV/TXT file",
    icon: isEmail ? Mail : Phone,
    badge: isRTL ? "أرقام / ملف" : "Manual / File",
  };

  const allOptions: {
    id: AudienceSegmentType;
    label: string;
    desc: string;
    icon: React.ElementType;
    badge?: string;
  }[] = [
      {
        id: "all",
        label: isRTL ? "الكل (المسجلون والزوار)" : "All (Registered & Guests)",
        desc: isRTL
          ? "إرسال لجميع المستخدمين المسجلين والزوار"
          : "All registered users & guest visitors",
        icon: Users,
      },
      {
        id: "registered",
        label: isRTL ? "المستخدمون المسجلون فقط" : "Registered Users Only",
        desc: isRTL
          ? "استهداف الحسابات المسجلة في المنصة"
          : "Registered platform users only",
        icon: UserCheck,
      },
      {
        id: "visitors",
        label: isRTL ? "الزوار فقط" : "Guest Visitors Only",
        desc: isRTL
          ? "استهداف الزوار غير المسجلين"
          : "Guest visitors without accounts",
        icon: Globe,
      },
      specificUserCard,
      directContactCard,
    ];

  const options = allowedSegments
    ? allOptions.filter((opt) => allowedSegments.includes(opt.id))
    : allOptions;

  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
            {title || (isRTL ? "الجمهور المستهدف (Target Audience)" : "Target Audience")}
          </h2>
          <span className="text-xs text-gray-400 font-medium">
            {isRTL ? "اختر فئة الجمهور" : "Select audience segment"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {options.map((option) => {
            const isSelected = selectedAudience === option.id;
            const Icon = option.icon;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => onSelectAudience(option.id)}
                className={`relative flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-start ${isSelected
                    ? "border-teal-500 bg-teal-50/30 dark:bg-teal-950/20 shadow-xs"
                    : "border-gray-200 dark:border-neutral-700/80 bg-white dark:bg-neutral-950 hover:border-gray-300 dark:hover:border-neutral-600"
                  }`}
              >
                {/* Radio Indicator */}
                <div
                  className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected
                      ? "border-teal-600 dark:border-teal-400"
                      : "border-gray-300 dark:border-neutral-600"
                    }`}
                >
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <Icon
                      className={`h-4 w-4 ${isSelected
                          ? "text-teal-600 dark:text-teal-400"
                          : "text-gray-500 dark:text-gray-400"
                        }`}
                    />
                    <span
                      className={`text-xs font-bold ${isSelected
                          ? "text-teal-700 dark:text-teal-300"
                          : "text-gray-800 dark:text-gray-200"
                        }`}
                    >
                      {option.label}
                    </span>
                    {option.badge && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 font-semibold">
                        {option.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                    {option.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
});

MarketingAudienceCards.displayName = "MarketingAudienceCards";