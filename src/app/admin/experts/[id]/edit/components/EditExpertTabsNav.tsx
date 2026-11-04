"use client";

import React from "react";
import {
  User,
  Briefcase,
  Globe,
  DollarSign,
} from "lucide-react";
import { TabKey } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";

interface EditExpertTabsNavProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  counts: {
    certifications?: number;
    specializations?: number;
    packages?: number;
  };
}

export function EditExpertTabsNav({
  activeTab,
  onTabChange,
  counts,
}: EditExpertTabsNavProps) {
  const { t } = useLanguage();

  const tabs: Array<{
    id: TabKey;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    count?: number;
  }> = [
    {
      id: "basic_info",
      label: t("experts.edit.tabs.basicInfo"),
      icon: User,
    },
    {
      id: "professional",
      label: t("experts.edit.tabs.professional"),
      icon: Briefcase,
      count: counts.certifications,
    },
    {
      id: "specializations",
      label:
        t("experts.edit.tabs.specializations"),
      icon: Globe,
      count: counts.specializations,
    },
    {
      id: "pricing",
      label: t("experts.edit.tabs.pricing"),
      icon: DollarSign,
      count: counts.packages,
    },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-neutral-800 mb-6">
      <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`pb-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2 select-none shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? "border-[#008081] text-[#008081] dark:border-teal-400 dark:text-teal-400 font-bold -mb-px"
                  : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium -mb-px"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && tab.count > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isActive
                      ? "bg-teal-100 dark:bg-teal-900/60 text-[#008081] dark:text-teal-300"
                      : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
