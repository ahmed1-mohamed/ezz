"use client";

import Image from "next/image";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SidebarLogoProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isRTL?: boolean;
}

export function SidebarLogo({ isCollapsed, onToggleCollapse, isRTL }: SidebarLogoProps) {
  const { t } = useLanguage();
  const toggleLabel = isCollapsed ? t("sidebar.expandSidebar") : t("sidebar.collapseSidebar");

  return (
    <div className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-slate-700 px-3">
      {!isCollapsed && (
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Image
            src="/images/logo.svg"
            alt="Property Adviser Logo"
            width={140}
            height={36}
            priority
            className="object-contain px-1"
          />
        </div>
      )}

      {isCollapsed && (
        <div className="flex items-center justify-center w-full">
          <Image
            src="/logo-icon.svg"
            alt="Property Adviser"
            width={32}
            height={32}
            priority
            className="object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      <button
        onClick={onToggleCollapse}
        className={`hidden lg:flex items-center justify-center h-8 w-8 rounded-lg text-gray-500 hover:text-teal-600 hover:bg-teal-50 dark:text-slate-400 dark:hover:text-teal-400 dark:hover:bg-slate-700 transition-all duration-200 flex-shrink-0 ${
          isCollapsed ? "mx-auto" : ""
        }`}
        title={toggleLabel}
        aria-label={toggleLabel}
      >
        {isCollapsed ? (
          isRTL ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )
        ) : (
          isRTL ? (
            <PanelLeftOpen className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )
        )}
      </button>
    </div>
  );
}
