"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";
import { AD_TITLE_MAX_LENGTH } from "@/features/ads/utils/ad-form-validation";

interface AdTitleSectionProps {
  register: any;
  error?: string;
}

export function AdTitleSection({ register, error }: AdTitleSectionProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
        <Sparkles className="h-4 w-4 text-teal-600 dark:text-teal-400" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
          {t("ads.createStepOne.campaignOverview")}
        </h3>
      </div>
      <div>
        <Label className="flex items-center justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
          <span>
            {t("ads.createStepOne.adTitle")}{" "}
            <span className="text-red-500">*</span>
          </span>
          <span className="text-[11px] text-neutral-400 font-normal">
            {t("ads.createStepOne.adTitleHint")}
          </span>
        </Label>
        <Input
          placeholder={t("ads.createStepOne.adTitlePlaceholder")}
          {...register("title", {
            validate: (val: string) => {
              const trimmed = (val || "").trim();
              if (!trimmed) return t("ads.createStepOne.adTitleRequired");
              if (trimmed.length < 2) return t("ads.createStepOne.adTitleMinLength");
              if (trimmed.length > AD_TITLE_MAX_LENGTH) return t("validation.max_length", { max: AD_TITLE_MAX_LENGTH });
              return true;
            },
          })}
          error={!!error}
          aria-invalid={!!error}
          className={`bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/30 ${error ? "" : "border-neutral-200 dark:border-neutral-700"}`}
        />
        <FieldError message={error} />
      </div>
    </div>
  );
}
