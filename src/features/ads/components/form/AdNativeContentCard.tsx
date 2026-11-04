"use client";

import { useFormContext, useWatch } from "react-hook-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { FieldError } from "@/components/ui/form-message";
import {
  AD_CTA_LABEL_MAX_LENGTH,
  AD_DESCRIPTION_MAX_LENGTH,
  AD_TITLE_MAX_LENGTH,
} from "@/features/ads/utils/ad-form-validation";

export function AdNativeContentCard() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { register, control, formState: { errors } } = useFormContext();

  const type = (useWatch({ control, name: "type" }) || "banner").toLowerCase();

  if (type !== "native") {
    return null;
  }

  return (
    <Card id="ad-native-card" className="shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl animate-in fade-in-50 duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          {isAr ? "محتوى الإعلان الأصلي" : "Native Ad Content"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <Label className="flex items-center gap-1 mb-2 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            {isAr ? "العنوان *" : "Title *"}
          </Label>
          <Input
            placeholder={isAr ? "عنوان جذّاب للإعلان" : "Catchy headline for the ad"}
            {...register("title", {
              validate: (val) => {
                const trimmed = (val || "").trim();
                if (!trimmed) return isAr ? "عنوان الإعلان مطلوب" : "Ad Title is required";
                if (trimmed.length > AD_TITLE_MAX_LENGTH) return t("validation.max_length", { max: AD_TITLE_MAX_LENGTH });
                return true;
              },
            })}
            aria-invalid={!!errors.title}
            className={cn(
              "bg-white dark:bg-neutral-800/60 border h-11 text-xs sm:text-sm rounded-lg",
              errors.title
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-gray-200 dark:border-neutral-700"
            )}
          />
          <FieldError message={errors.title?.message as string | undefined} className="font-medium" />
        </div>

        <div>
          <Label className="flex items-center gap-1 mb-2 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            {isAr ? "الوصف" : "Description"}
          </Label>
          <Input
            placeholder={isAr ? "وصف مختصر يظهر أسفل العنوان" : "Short description displayed below the headline"}
            {...register("description", {
              maxLength: {
                value: AD_DESCRIPTION_MAX_LENGTH,
                message: t("validation.max_length", { max: AD_DESCRIPTION_MAX_LENGTH }),
              },
            })}
            aria-invalid={!!errors.description}
            className={cn(
              "bg-white dark:bg-neutral-800/60 border h-11 text-xs sm:text-sm rounded-lg",
              errors.description
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-gray-200 dark:border-neutral-700"
            )}
          />
          <FieldError message={errors.description?.message as string | undefined} className="font-medium" />
        </div>

        <div>
          <Label className="flex items-center gap-1 mb-2 font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            {isAr ? "نص زر الإجراء (CTA)" : "Call-to-Action Button Text (CTA)"}
          </Label>
          <Input
            placeholder={isAr ? "مثال: اعرف المزيد" : "e.g., Learn More"}
            {...register("ctaButtonText", {
              maxLength: {
                value: AD_CTA_LABEL_MAX_LENGTH,
                message: t("validation.max_length", { max: AD_CTA_LABEL_MAX_LENGTH }),
              },
            })}
            aria-invalid={!!errors.ctaButtonText}
            className={cn(
              "bg-white dark:bg-neutral-800/60 border h-11 text-xs sm:text-sm rounded-lg",
              errors.ctaButtonText
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-gray-200 dark:border-neutral-700"
            )}
          />
          <FieldError message={errors.ctaButtonText?.message as string | undefined} className="font-medium" />
        </div>
      </CardContent>
    </Card>
  );
}
