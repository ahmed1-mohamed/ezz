"use client";

import React, { memo, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/form-message";
import { FEATURE_ICON_EXTENSIONS } from "@/validators/feature.schema";

export const FeatureIconUpload = memo(function FeatureIconUpload() {
  const { t } = useLanguage();
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const error = errors.icons?.message;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      setValue("icons", file.name, { shouldValidate: true, shouldDirty: true });
    }
  };

  return (
    <div>
      <Label className="text-sm font-semibold text-[#15042B] mb-2 block">
        {t("features.modal.uploadIcon")}
      </Label>
      <div className="flex gap-4 items-start">
        <div className="w-16 h-16 rounded-xl bg-[#9333EA] flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div
            className={`flex items-center border rounded-lg overflow-hidden cursor-pointer w-full bg-white hover:bg-gray-50 transition-colors ${error ? "border-red-500" : "border-gray-200"}`}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            role="button"
            tabIndex={0}
            aria-invalid={!!error || undefined}
          >
            <div className="bg-gray-50 px-4 py-2.5 border-e border-gray-200 text-sm font-medium text-gray-600 whitespace-nowrap">
              {t("features.modal.chooseFiles")}
            </div>
            <div className="px-4 py-2.5 text-sm text-gray-500 truncate flex-1">
              {selectedFileName || t("features.modal.noFile")}
            </div>
          </div>
          <FieldError message={error ? t(String(error)) : undefined} className="mt-0" />
          <p className="text-xs text-gray-400 font-medium">
            {t("features.modal.maxSizeWarning")}
          </p>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept={FEATURE_ICON_EXTENSIONS.map((ext) => `.${ext}`).join(",")}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
});
