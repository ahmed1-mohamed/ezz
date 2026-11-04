import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, ImageIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface CreativeAssetSectionProps {
  adImagePreview: string | null;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CreativeAssetSection({
  adImagePreview,
  handleImageUpload,
}: CreativeAssetSectionProps) {
  const { t } = useLanguage();
  const { formState: { errors } } = useFormContext();

  return (
    <div className="bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
            {t("ads.createStepTwo.creativeBannerAsset")}{" "}
            <span className="text-red-500">*</span>
          </h3>
        </div>
        <span className="text-[11px] text-neutral-400">
          {t("ads.createStepTwo.imageFormatHint")}
        </span>
      </div>

      <div
        className={`border border-dashed rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${adImagePreview
            ? "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700"
            : errors.image
              ? "border-red-500 bg-red-50/20 dark:bg-red-950/10"
              : "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 hover:border-teal-500/60"
          }`}
        onClick={() => document.getElementById("ad-image-upload")?.click()}
        onKeyDown={(e) => {
          if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            document.getElementById("ad-image-upload")?.click();
          }
        }}
        role="button"
        tabIndex={0}
        aria-invalid={!!errors.image || undefined}
      >
        {adImagePreview ? (
          <div className="max-w-xs w-full text-center">
            <img
              src={adImagePreview}
              alt={t("ads.form.adPreview")}
              className="max-h-36 w-auto mx-auto object-contain rounded-md border border-neutral-200 dark:border-neutral-700"
            />
            <div className="mt-2.5">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-7 text-xs font-medium border-neutral-200 dark:border-neutral-700"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById("ad-image-upload")?.click();
                }}
              >
                {t("ads.createStepTwo.changeImage")}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-1">
            <div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 mb-2">
              <Upload className="h-5 w-5" />
            </div>
            <p className="text-xs text-neutral-800 dark:text-neutral-200 font-medium">
              {t("ads.createStepTwo.clickToUpload")}
            </p>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              {t("ads.createStepTwo.aspectRatioHint")}
            </p>
          </div>
        )}
        <input
          id="ad-image-upload"
          type="file"
          accept="image/png, image/jpeg, image/webp"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
      <FieldError
        message={errors.image ? String(errors.image.message || t("ads.createStepTwo.imageRequired")) : undefined}
      />
    </div>
  );
}
