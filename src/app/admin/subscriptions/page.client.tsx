"use client";

import { useState, useEffect } from "react";
import { Package, Users, Sparkles, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import dynamic from "next/dynamic";

const CustomerPlansTab = dynamic(() => import("./tabs/customer-plans-tab").then(mod => mod.CustomerPlansTab), { ssr: false });
const DeveloperPackagesTab = dynamic(() => import("./tabs/developer-packages-tab").then(mod => mod.DeveloperPackagesTab), { ssr: false });
const FeaturesTab = dynamic(() => import("./tabs/features-tab").then(mod => mod.FeaturesTab), { ssr: false });
const AddonsTab = dynamic(() => import("./tabs/addons-tab").then(mod => mod.AddonsTab), { ssr: false });

type TabType = "customer-plans" | "developer-packages" | "features" | "addons";

export default function SubscriptionsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>("customer-plans");
  // Tab content waits until the saved tab is restored, so the default tab doesn't fetch when another tab is shown.
  const [tabRestored, setTabRestored] = useState(false);

  const TAB_CONFIG = {
    "customer-plans": { label: t("subscriptions.tabs.customerPlans"), icon: Users },
    "developer-packages": { label: t("subscriptions.tabs.developerPackages"), icon: Package },
    "features": { label: t("subscriptions.tabs.features"), icon: Sparkles },
    addons: { label: t("subscriptions.tabs.addons"), icon: Layers },
  } as const;
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("subscriptions_active_tab");
      if (saved && (saved === "customer-plans" || saved === "developer-packages" || saved === "features" || saved === "addons")) {
        setActiveTab(saved as TabType);
      }
    }
    setTabRestored(true);
  }, []);
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      localStorage.setItem("subscriptions_active_tab", tab);
    }
  };
  return (
    <div className="p-4 sm:p-8 space-y-6 max-w-7xl mx-auto pb-24">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            {t("subscriptions.title")}
          </h1>
          <p className="text-gray-500 mt-1">
            {t("subscriptions.subtitle")}
          </p>
        </div>
      </div>
      <div className="flex gap-2 border-b border-gray-100 overflow-x-auto pb-px no-scrollbar">
        {(Object.entries(TAB_CONFIG) as [TabType, typeof TAB_CONFIG[TabType]][]).map(
          ([key, config]) => {
            const Icon = config.icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap
                  ${isActive
                    ? "border-teal-600 text-teal-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
                  }
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-teal-600" : "text-gray-400"}`} />
                {config.label}
              </button>
            );
          },
        )}
      </div>
      <div className="mt-6">
        {tabRestored && activeTab === "customer-plans" && <CustomerPlansTab />}
        {tabRestored && activeTab === "developer-packages" && <DeveloperPackagesTab />}
        {tabRestored && activeTab === "features" && <FeaturesTab />}
        {tabRestored && activeTab === "addons" && <AddonsTab />}
      </div>
    </div>
  );
}