"use client";

import { FieldErrors } from "react-hook-form";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { EditTabConfig, EditTabId, EDIT_TABS } from "./edit-property.types";
import { useLanguage } from "@/contexts/LanguageContext";

interface EditPropertyTabsNavProps {
  activeTab: EditTabId;
  onTabChange: (tabId: EditTabId) => void;
  errors: FieldErrors<PropertiesInput>;
}

export default function EditPropertyTabsNav({
  activeTab,
  onTabChange,
  errors,
}: EditPropertyTabsNavProps) {
  const { t } = useLanguage();

  const tabHasError = (tab: EditTabConfig) => {
    return tab.fields.some((field) => !!errors[field]);
  };

  return (
    <div className="border-b border-gray-200 dark:border-neutral-800 mb-6">
      <div className="flex items-center gap-5 sm:gap-6 lg:gap-8">
        {EDIT_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const hasError = tabHasError(tab);
          const label = t(tab.translationKey);

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`pb-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2 select-none shrink-0 ${
                isActive
                  ? "border-[#008081] text-[#008081] dark:border-teal-400 dark:text-teal-400 font-bold -mb-px"
                  : hasError
                  ? "border-red-500 text-red-600 dark:text-red-400 font-medium -mb-px"
                  : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium -mb-px"
              }`}
            >
              <span>{label}</span>
              {hasError && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 ms-1.5 align-middle" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
