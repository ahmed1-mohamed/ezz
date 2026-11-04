"use client";

import { FieldError } from "@/components/ui/form-message";
import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { useLanguage } from "@/contexts/LanguageContext";

interface SeoSectionProps {
  register: UseFormRegister<PropertiesInput>;
  setValue?: UseFormSetValue<PropertiesInput>;
  watch?: UseFormWatch<PropertiesInput>;
  errors?: FieldErrors<PropertiesInput>;
}

export default function SeoSection({ register, setValue, watch, errors }: SeoSectionProps) {
  const { t } = useLanguage();

  const handleGenerateSlug = () => {
    if (!setValue || !watch) return;
    const propertyName = watch("property_name") || "";
    if (!propertyName) return;

    const generatedSlug = propertyName
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setValue("slug", generatedSlug, { shouldValidate: true });
  };

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs">
      <div>
        <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
          {t("properties.create.seo.title")}
        </h2>
      </div>

      <div className="space-y-3.5">
        <div>
          <Label
            htmlFor="slug"
            className="text-xs font-semibold text-gray-700 dark:text-gray-300"
          >
            {t("properties.create.form.seoSlug")}
          </Label>
          <div className="flex items-center gap-2 mt-1">
            <div className={`relative flex-1 flex items-center rounded-md border ${errors?.slug ? "border-red-500" : "border-input dark:border-neutral-700"} bg-white dark:bg-neutral-950 h-9 shadow-2xs focus-within:ring-1 focus-within:ring-ring`}>
              <span className="ps-3 pe-2 text-xs text-gray-400 dark:text-gray-500 font-mono select-none">
                /
              </span>
              <input
                id="slug"
                {...register("slug")}
                dir="ltr"
                aria-invalid={!!errors?.slug}
                placeholder={t("properties.create.seo.slugPlaceholder")}
                className="w-full bg-transparent py-1.5 pe-3 text-xs outline-none placeholder:text-muted-foreground dark:text-gray-100"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={handleGenerateSlug}
              className="border-[#008081] dark:border-teal-500 text-[#008081] dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-xs px-3.5 h-9 shadow-2xs shrink-0 font-medium"
            >
              {t("properties.create.form.seoGenerate")}
            </Button>
          </div>
          <FieldError message={errors?.slug?.message ? t(errors.slug.message as string) : undefined} />
          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
            {t("properties.create.form.seoSlugHelp")}
          </p>
        </div>

        <div>
          <Label
            htmlFor="meta_title"
            className="text-xs font-semibold text-gray-700 dark:text-gray-300"
          >
            {t("properties.create.seo.metaTitle")}
          </Label>
          <Input
            id="meta_title"
            {...register("meta_title")}
            error={!!errors?.meta_title}
            aria-invalid={!!errors?.meta_title}
            placeholder={t("properties.create.seo.metaTitlePlaceholder")}
            className={`mt-1 h-9 text-xs dark:bg-neutral-950 ${errors?.meta_title ? "" : "dark:border-neutral-700"}`}
          />
          <FieldError message={errors?.meta_title?.message ? t(errors.meta_title.message as string) : undefined} />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <Label
              htmlFor="meta_description"
              className="text-xs font-semibold text-gray-700 dark:text-gray-300"
            >
              {t("properties.create.seo.metaDescription")}
            </Label>
            <span className="text-[11px] text-gray-400 dark:text-gray-500">
              {t("properties.create.seo.metaDescriptionHint")}
            </span>
          </div>
          <Textarea
            id="meta_description"
            {...register("meta_description")}
            error={!!errors?.meta_description}
            aria-invalid={!!errors?.meta_description}
            placeholder={t("properties.create.form.seoMetaDescriptionPlaceholder")}
            rows={2}
            className={`min-h-[70px] text-xs resize-none bg-white dark:bg-neutral-950 dark:text-gray-100 ${errors?.meta_description ? "" : "border-input dark:border-neutral-700"}`}
          />
          <FieldError message={errors?.meta_description?.message ? t(errors.meta_description.message as string) : undefined} />
        </div>
      </div>
    </div>
  );
}
