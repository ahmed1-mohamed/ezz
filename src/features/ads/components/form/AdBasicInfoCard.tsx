"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { FieldError } from "@/components/ui/form-message";
import { AD_NAME_MAX_LENGTH } from "@/features/ads/utils/ad-form-validation";

export function AdBasicInfoCard() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { register, formState: { errors } } = useFormContext();

  const [ownerType, setOwnerType] = useState<"admin" | "developer">("admin");

  return (
    <Card id="ad-basic-info-card" className="shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          {isAr ? "المعلومات الأساسية" : "Basic Information"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">

        <div>
          <Label className="flex items-center gap-1 mb-2 font-semibold text-sm text-gray-900 dark:text-gray-100">
            {isAr ? "اسم الإعلان *" : "Ad Name *"}
          </Label>
          <input
            placeholder={isAr ? "مثال: حملة إعمار الصيفية" : "e.g., Luxury Beachfront Villas Campaign"}
            {...register("campaignName", {
              required: isAr ? "اسم الإعلان مطلوب" : "Ad Name is required",
              validate: (val) => {
                const trimmed = (val || "").trim();
                if (trimmed.length < 2) return isAr ? "اسم الإعلان يجب أن يكون حرفين على الأقل" : "Ad Name must be at least 2 characters";
                if (trimmed.length > AD_NAME_MAX_LENGTH) return t("validation.max_length", { max: AD_NAME_MAX_LENGTH });
                return true;
              },
            })}
            aria-invalid={!!errors.campaignName}
            className={cn(
              "w-full bg-white dark:bg-neutral-800/60 border h-11 text-sm rounded-lg px-3 outline-none transition-colors",
              errors.campaignName
                ? "border-red-500 focus:ring-2 focus:ring-red-500/30 focus:border-red-500"
                : "border-gray-200 dark:border-neutral-700 focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
            )}
          />
          <FieldError message={errors.campaignName?.message as string | undefined} className="font-medium" />
        </div>

        {/* Ad Owner toggle — Admin / Developer (no developer picker here) */}
        <div className="space-y-3">
          <Label className="font-semibold text-sm text-gray-900 dark:text-gray-100">
            {isAr ? "مالك الإعلان" : "Ad Owner"}
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setOwnerType("admin")}
              className={cn(
                "p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-center",
                ownerType === "admin"
                  ? "bg-teal-700 text-white border-teal-700 shadow-sm"
                  : "bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border-gray-200 dark:border-neutral-800 hover:border-gray-300"
              )}
            >
              <div className="font-bold text-base">{isAr ? "الأدمن" : "Admin"}</div>
              <div className={cn("text-xs mt-0.5", ownerType === "admin" ? "text-teal-100" : "text-gray-500 dark:text-neutral-400")}>
                {isAr ? "أولوية أعلى دائماً" : "Always highest priority"}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setOwnerType("developer")}
              className={cn(
                "p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-center",
                ownerType === "developer"
                  ? "bg-teal-700 text-white border-teal-700 shadow-sm"
                  : "bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border-gray-200 dark:border-neutral-800 hover:border-gray-300"
              )}
            >
              <div className="font-bold text-base">{isAr ? "مطور عقاري" : "Real Estate Developer"}</div>
              <div className={cn("text-xs mt-0.5", ownerType === "developer" ? "text-teal-100" : "text-gray-500 dark:text-neutral-400")}>
                {isAr ? "يظهر بعد إعلانات الأدمن" : "Appears after admin ads"}
              </div>
            </button>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
