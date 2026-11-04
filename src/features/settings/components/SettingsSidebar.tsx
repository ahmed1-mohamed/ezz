"use client";

import React from "react";
import {
  LayoutGrid,
  Settings,
  FileText,
  FileSignature,
  CreditCard,
  Link2,
  Bell,
  ShieldCheck,
} from "lucide-react";
import { SiteSettingsMainTab } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface SettingsSidebarProps {
  activeTab: SiteSettingsMainTab;
  onSelectTab: (tab: SiteSettingsMainTab) => void;
}

export function SettingsSidebar({
  activeTab,
  onSelectTab,
}: SettingsSidebarProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const tabs: { id: SiteSettingsMainTab; label: string; icon: React.ElementType }[] = [
    {
      id: "general",
      label: isRTL ? "إعدادات عامة" : "General",
      icon: LayoutGrid,
    },
    {
      id: "app_settings",
      label: isRTL ? "إعدادات التطبيق" : "App Settings",
      icon: Settings,
    },
    {
      id: "quotation_content",
      label: isRTL ? "محتوى عرض السعر" : "Quotation Content",
      icon: FileText,
    },
    {
      id: "contract_content",
      label: isRTL ? "محتوى العقد" : "Contract Content",
      icon: FileSignature,
    },
    {
      id: "payment_methods",
      label: isRTL ? "طرق الدفع" : "Payment Methods",
      icon: CreditCard,
    },
    {
      id: "integrations",
      label: isRTL ? "الربط والتكامل" : "Integrations",
      icon: Link2,
    },
    {
      id: "sent_notifications",
      label: isRTL ? "الإشعارات والبريد" : "Notifications & Emails",
      icon: Bell,
    },
    {
      id: "policies",
      label: isRTL ? "السياسات" : "Policies",
      icon: ShieldCheck,
    },
  ];

  return (
    <aside className="w-full md:w-64 shrink-0 space-y-2">
      <div className="px-3 pb-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
          {isRTL ? "إعدادات الموقع" : "SITE SETTINGS"}
        </span>
      </div>

      <nav className="space-y-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all text-start cursor-pointer",
                isActive
                  ? "bg-teal-50/80 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-semibold shadow-2xs border border-teal-100 dark:border-teal-900/60"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-neutral-800/60"
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4 shrink-0 transition-colors",
                  isActive
                    ? "text-teal-700 dark:text-teal-300"
                    : "text-gray-400 group-hover:text-gray-600 dark:text-gray-500"
                )}
              />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
