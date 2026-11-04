"use client";

import React from "react";
import {
  Info,
  MapPin,
  DollarSign,
  Sparkles,
  CreditCard,
  Flag,
  Building2,
  Image as ImageIcon,
} from "lucide-react";
import { TabKey } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";

interface EditProjectTabsNavProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  counts: {
    units?: number;
    amenities?: number;
    paymentPlans?: number;
    milestones?: number;
    buildings?: number;
    media?: number;
  };
  /** Tabs with fields that currently have a validation error. */
  errorTabs?: TabKey[];
}

export function EditProjectTabsNav({
  activeTab,
  onTabChange,
  counts,
  errorTabs = [],
}: EditProjectTabsNavProps) {
  const { t } = useLanguage();

  const tabs: Array<{
    id: TabKey;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    count?: number;
  }> = [
    {
      id: "basic_info",
      label: t("editProject.tabs.basicInfo"),
      icon: Info,
    },
    {
      id: "location",
      label: t("editProject.tabs.location"),
      icon: MapPin,
    },
    {
      id: "units_pricing",
      label: t("editProject.tabs.unitsPricing"),
      icon: DollarSign,
      count: counts.units,
    },
    {
      id: "amenities",
      label: t("editProject.tabs.amenities"),
      icon: Sparkles,
      count: counts.amenities,
    },
    {
      id: "payment_plans",
      label: t("editProject.tabs.paymentPlans"),
      icon: CreditCard,
      count: counts.paymentPlans,
    },
    {
      id: "milestones",
      label: t("editProject.tabs.milestones"),
      icon: Flag,
      count: counts.milestones,
    },
    {
      id: "buildings",
      label: t("editProject.tabs.buildings"),
      icon: Building2,
      count: counts.buildings,
    },
    {
      id: "media",
      label: t("editProject.tabs.media"),
      icon: ImageIcon,
      count: counts.media,
    },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-neutral-800 mb-6">
      <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const hasError = errorTabs.includes(tab.id);
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
              <span className={hasError && !isActive ? "text-red-600 dark:text-red-400" : undefined}>{tab.label}</span>
              {hasError && (
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-red-500"
                  aria-label={t("validation.api.fixFields")}
                />
              )}
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
