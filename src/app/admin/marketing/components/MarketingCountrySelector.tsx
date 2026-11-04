"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Check } from "lucide-react";

interface MarketingCountrySelectorProps {
  selectedCountries: string[];
  onToggleCountry: (code: string) => void;
  error?: string;
}

const COUNTRIES = [
  { code: "ae", name_en: "UAE", name_ar: "الإمارات" },
  { code: "eg", name_en: "Egypt", name_ar: "مصر" },
  { code: "om", name_en: "Oman", name_ar: "عُمان" },
];

export const MarketingCountrySelector = React.memo(({
  selectedCountries,
  onToggleCountry,
  error,
}: MarketingCountrySelectorProps) => {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const selectedCode = selectedCountries[0] || null;

  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-3.5">
        <div className="flex items-center justify-between text-start">
          <div>
            <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              <span>{isRTL ? "الدولة المستهدفة" : "Target Country"}</span>
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {isRTL
                ? "اختر دولة واحدة فقط (اختياري) — أو اتركها لجميع الدول"
                : "Choose one country only (optional) — or leave unselected for all"}
            </p>
          </div>

          {selectedCode && (
            <button
              type="button"
              onClick={() => onToggleCountry(selectedCode)}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors font-medium"
            >
              {isRTL ? "إلغاء التحديد" : "Clear selection"}
            </button>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 pt-1">
          {COUNTRIES.map((country) => {
            const isSelected = selectedCode === country.code;
            return (
              <button
                key={country.code}
                type="button"
                onClick={() => onToggleCountry(country.code)}
                aria-invalid={!!error || undefined}
                className={`relative flex items-center justify-center p-3.5 rounded-xl border-2 transition-all duration-200 select-none ${
                  isSelected
                    ? "border-teal-500 bg-teal-50/40 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 shadow-xs ring-2 ring-teal-500/20"
                    : "border-gray-200 dark:border-neutral-700/80 bg-white dark:bg-neutral-950 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-neutral-600 hover:bg-gray-50/50 dark:hover:bg-neutral-900"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 end-2 w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-500 text-white flex items-center justify-center">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                )}
                <span
                  className={`text-sm ${
                    isSelected ? "font-bold text-teal-700 dark:text-teal-300" : "font-semibold"
                  }`}
                >
                  {isRTL ? country.name_ar : country.name_en}
                </span>
              </button>
            );
          })}
        </div>

        {error && <p role="alert" data-field-error="" className="text-xs text-red-500 mt-1 text-start">{error}</p>}
      </CardContent>
    </Card>
  );
});

MarketingCountrySelector.displayName = "MarketingCountrySelector";