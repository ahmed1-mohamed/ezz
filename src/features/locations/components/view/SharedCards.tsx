import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function InfoCard({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) {
  const { t } = useLanguage();
  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
      <div className="p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
        <Icon className="w-4 h-4 text-teal-600" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-gray-900 break-words">{value || t("common.na")}</p>
      </div>
    </div>
  );
}

export function DirectionCard({ direction, value }: { direction: string; value: string }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-1 p-3 bg-white rounded-lg border border-gray-100 shadow-sm text-center">
      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{direction}</span>
      <span className="text-sm font-medium text-gray-900">{value || t("common.na")}</span>
    </div>
  );
}
