"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface SeoFieldsSectionProps {
  register: any;
  setValue: (field: any, value: any, options?: any) => void;
  watch: (field?: any) => any;
  nameFieldName?: string;
  slugFieldName?: string;
  metaTitleFieldName?: string;
  metaDescriptionFieldName?: string;
  className?: string;
  slugPlaceholder?: string;
  compact?: boolean;
  /** Validation messages for the SEO fields: each one marks its input invalid and shows under it. */
  errors?: { slug?: string; metaTitle?: string; metaDescription?: string };
}

export function SeoFieldsSection({
  register,
  setValue,
  watch,
  nameFieldName = "name",
  slugFieldName = "slug",
  metaTitleFieldName = "meta_title",
  metaDescriptionFieldName = "meta_description",
  className = "",
  slugPlaceholder = "my-item",
  compact = false,
  errors,
}: SeoFieldsSectionProps) {
  const { t } = useLanguage();

  const handleGenerateSlug = () => {
    const sourceName = watch(nameFieldName) || "";
    if (!sourceName) return;

    const generatedSlug = String(sourceName)
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setValue(slugFieldName, generatedSlug, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div
      className={`bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-3.5 shadow-2xs ${className}`}
    >
      <div>
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
          {t("common.seo.title")}
        </h3>
      </div>

      <div className="space-y-3.5">
        {/* Slug with / and Generate button */}
        <div>
          <Label
            htmlFor={slugFieldName}
            className="text-xs font-semibold text-gray-700 dark:text-gray-300"
          >
            {t("common.seo.slug")}
          </Label>
          <div className="flex items-center gap-2 mt-1">
            <div dir="ltr" className={`relative flex-1 flex items-center rounded-md border border-input dark:border-neutral-700 bg-white dark:bg-neutral-950 h-9 shadow-2xs focus-within:ring-1 focus-within:ring-ring ${errors?.slug ? "!border-red-500 focus-within:ring-red-500" : ""}`}>
              <span className="ps-3 pe-2 text-xs text-gray-400 dark:text-gray-500 font-mono select-none">
                /
              </span>
              <input
                id={slugFieldName}
                {...register(slugFieldName)}
                placeholder={slugPlaceholder}
                aria-invalid={!!errors?.slug || undefined}
                className="w-full bg-transparent py-1.5 pe-3 text-xs outline-none placeholder:text-muted-foreground dark:text-gray-100"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={handleGenerateSlug}
              className="border-[#008081] dark:border-teal-500 text-[#008081] dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-xs px-3.5 h-9 shadow-2xs shrink-0 font-medium"
            >
              {t("common.seo.generate")}
            </Button>
          </div>
          <FieldError message={errors?.slug} />
          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
            {t("common.seo.slugHelp")}
          </p>
        </div>

        {/* Meta Title */}
        <div>
          <Label
            htmlFor={metaTitleFieldName}
            className="text-xs font-semibold text-gray-700 dark:text-gray-300"
          >
            {t("common.seo.metaTitle")}
          </Label>
          <Input
            id={metaTitleFieldName}
            {...register(metaTitleFieldName)}
            placeholder={t("common.seo.metaTitlePlaceholder")}
            error={!!errors?.metaTitle}
            className="mt-1 h-9 text-xs dark:bg-neutral-950 dark:border-neutral-700"
          />
          <FieldError message={errors?.metaTitle} />
        </div>

        {/* Meta Description */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <Label
              htmlFor={metaDescriptionFieldName}
              className="text-xs font-semibold text-gray-700 dark:text-gray-300"
            >
              {t("common.seo.metaDescription")}
            </Label>
            <span className="text-[11px] text-gray-400 dark:text-gray-500">
              {t("common.seo.metaDescriptionHint")}
            </span>
          </div>
          <Textarea
            id={metaDescriptionFieldName}
            {...register(metaDescriptionFieldName)}
            placeholder={t("common.seo.metaDescriptionPlaceholder")}
            rows={2}
            error={!!errors?.metaDescription}
            className="min-h-[70px] text-xs resize-none bg-white dark:bg-neutral-950 border-input dark:border-neutral-700 dark:text-gray-100"
          />
          <FieldError message={errors?.metaDescription} />
        </div>
      </div>
    </div>
  );
}
