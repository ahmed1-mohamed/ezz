"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, UserCheck, Globe, Target, FileSpreadsheet } from "lucide-react";

export type AudienceType =
  | "all"
  | "registered"
  | "visitors"
  | "specific"
  | "foreign_contacts";

interface AudienceSelectorProps {
  selectedAudience: AudienceType;
  setSelectedAudience: (aud: AudienceType) => void;
  translationPrefix?: string;
}

export function AudienceSelector({
  selectedAudience,
  setSelectedAudience,
  translationPrefix = "marketingNotifications",
}: AudienceSelectorProps) {
  const { t } = useLanguage();

  const options: {
    id: AudienceType;
    label: string;
    desc: string;
    icon: React.ElementType;
    badge?: string;
  }[] = [
    {
      id: "all",
      label: t(`${translationPrefix}.create.allAudienceLabel`),
      desc: t(`${translationPrefix}.create.allAudienceDesc`),
      icon: Users,
    },
    {
      id: "registered",
      label: t(`${translationPrefix}.create.registeredLabel`),
      desc: t(`${translationPrefix}.create.registeredDesc`),
      icon: UserCheck,
    },
    {
      id: "visitors",
      label: t(`${translationPrefix}.create.visitorsLabel`),
      desc: t(`${translationPrefix}.create.visitorsDesc`),
      icon: Globe,
    },
    {
      id: "specific",
      label: t(`${translationPrefix}.create.specificPeopleLabel`),
      desc: t(`${translationPrefix}.create.specificPeopleDesc`),
      icon: Target,
    },
    {
      id: "foreign_contacts",
      label: t(`${translationPrefix}.create.foreignContactsLabel`),
      desc: t(`${translationPrefix}.create.foreignContactsDesc`),
      icon: FileSpreadsheet,
      badge: t(`${translationPrefix}.create.badgeNew`),
    },
  ];

  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
            {t(`${translationPrefix}.create.targetAudience`)}
          </h2>
          <span className="text-xs text-gray-400 font-medium">
            {t(`${translationPrefix}.create.selectAudienceSegment`)}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {options.map((option) => {
            const isSelected = selectedAudience === option.id;
            const Icon = option.icon;

            return (
              <div
                key={option.id}
                onClick={() => setSelectedAudience(option.id)}
                className={`p-4 border-2 rounded-xl flex items-start gap-3 cursor-pointer select-none transition-all text-start ${
                  isSelected
                    ? "border-teal-500 bg-teal-50/30 dark:bg-teal-950/20 shadow-xs"
                    : "border-gray-200 hover:border-gray-300 dark:border-neutral-800 dark:hover:border-neutral-700 bg-white dark:bg-neutral-950"
                }`}
              >
                <div
                  className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSelected
                      ? "border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400"
                      : "border-gray-300 dark:border-neutral-700"
                  }`}
                >
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400" />
                  )}
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <Icon
                      className={`h-4 w-4 ${
                        isSelected
                          ? "text-teal-600 dark:text-teal-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    />
                    <p
                      className={`text-xs font-bold ${
                        isSelected
                          ? "text-teal-700 dark:text-teal-300"
                          : "text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {option.label}
                    </p>
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
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}