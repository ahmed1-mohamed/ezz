"use client";

import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/form-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FeatureCategorySelect = memo(function FeatureCategorySelect() {
  const { t } = useLanguage();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors.category?.message;

  return (
    <div className="space-y-1.5">
      <Label htmlFor="feature_category" className="text-sm font-semibold text-[#15042B]">
        {t("features.modal.category")} <span className="text-red-500">*</span>
      </Label>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select value={field.value ?? ""} onValueChange={field.onChange}>
            <SelectTrigger
              id="feature_category"
              ref={field.ref}
              error={!!error}
              aria-invalid={!!error}
              className={`w-full bg-gray-50/50 py-2.5 h-auto text-gray-500 ${error ? "" : "border-gray-200"}`}
            >
              <SelectValue placeholder={t("features.modal.selectCategory")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="amenity">{t("features.modal.amenity")}</SelectItem>
              <SelectItem value="feature">{t("features.modal.feature")}</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      <FieldError message={error ? t(String(error)) : undefined} />
    </div>
  );
});
