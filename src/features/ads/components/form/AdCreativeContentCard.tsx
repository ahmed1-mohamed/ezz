"use client";

import { useFormContext } from "react-hook-form";
import { ImageIcon, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

import { cn } from "@/lib/utils";
import { FieldError } from "@/components/ui/form-message";

interface AdCreativeContentCardProps {
  adImagePreview: string;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage?: () => void;
}

export function AdCreativeContentCard({
  adImagePreview,
  handleImageUpload,
  handleRemoveImage,
}: AdCreativeContentCardProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { setValue, formState: { errors } } = useFormContext();
  const imageError = (errors.image || errors.image_url)?.message as string | undefined;

  return (
    <Card
      id="ad-creative-card"
      className={cn(
        "shadow-sm border bg-white dark:bg-neutral-900 rounded-xl transition-colors",
        imageError ? "border-red-400 dark:border-red-900/60" : "border-gray-200 dark:border-neutral-800"
      )}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1">
          <span>{isAr ? "صورة الإعلان" : "Ad Image"}</span>
          <span className="text-red-500">*</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "border-2 border-dashed rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative",
            imageError
              ? "border-red-500 bg-red-50/20 dark:bg-red-950/10 hover:bg-red-50/30"
              : "border-gray-200 dark:border-neutral-700 hover:bg-gray-50/80 dark:hover:bg-neutral-800/40"
          )}
          aria-invalid={!!imageError || undefined}
          onClick={() =>
            document.getElementById("ad-image-upload-input")?.click()
          }
        >
          {adImagePreview ? (
            <div className="relative group max-w-md w-full">
              <img
                src={adImagePreview}
                alt={t("ads.form.adPreview")}
                className="max-h-60 mx-auto object-contain rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setValue("image_url", "");
                  if (handleRemoveImage) {
                    handleRemoveImage();
                  }
                }}
                className="absolute top-2 end-2 p-1.5 rounded-full bg-red-600 text-white opacity-90 hover:opacity-100 transition-opacity shadow-md cursor-pointer"
                title={isAr ? "حذف الصورة" : "Remove Image"}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <div className="p-3 rounded-full bg-gray-50 dark:bg-neutral-800 text-gray-400 mb-3">
                <ImageIcon className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200">
                {isAr ? "اضغط للرفع أو اسحب وأفلت" : "Click to upload or drag and drop"}
              </div>
              <div className="text-xs text-gray-400 dark:text-neutral-500 mt-1">
                {isAr ? "PNG, JPG (نسبة 16:9 مفضلة)" : "PNG, JPG (16:9 aspect ratio preferred)"}
              </div>
            </>
          )}

          <input
            id="ad-image-upload-input"
            type="file"
            accept="image/png, image/jpeg, image/webp"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        <FieldError message={imageError} className="font-semibold mt-2" />
      </CardContent>
    </Card>
  );
}
