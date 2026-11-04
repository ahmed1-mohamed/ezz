"use client";

import { memo } from "react";
import { useFormContext } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui";
import { FieldError } from "@/components/ui/form-message";

export const FeatureNamesInput = memo(function FeatureNamesInput() {
  const { t } = useLanguage();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const nameEnError = errors.feature_name?.message;
  const nameArError = errors.feature_name_ar?.message;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <Label htmlFor="feature_name" className="text-sm font-semibold text-[#15042B]">
          {t("features.modal.nameEn")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="feature_name"
          dir="ltr"
          {...register("feature_name")}
          placeholder={t("features.modal.nameEnPlaceholder")}
          error={!!nameEnError}
          aria-invalid={!!nameEnError}
          className={`py-2.5 bg-gray-50/50 ${nameEnError ? "" : "border-gray-200"}`}
        />
        <FieldError message={nameEnError ? t(String(nameEnError)) : undefined} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="feature_name_ar" className="text-sm font-semibold text-[#15042B]">
          {t("features.modal.nameAr")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="feature_name_ar"
          dir="rtl"
          {...register("feature_name_ar")}
          placeholder="e.g. حمام سباحة"
          error={!!nameArError}
          aria-invalid={!!nameArError}
          className={`py-2.5 bg-gray-50/50 ${nameArError ? "" : "border-gray-200"}`}
        />
        <FieldError message={nameArError ? t(String(nameArError)) : undefined} />
      </div>
    </div>
  );
});
