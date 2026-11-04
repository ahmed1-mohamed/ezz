"use client";

import { FieldError } from "@/components/ui/form-message";
import { useState, useRef } from "react";
import { Control, Controller, FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, X } from "lucide-react";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { currencyOptions } from "../constants";
import { useLanguage } from "@/contexts/LanguageContext";
import SeoSection from "../SeoSection";

interface PricingMediaTabProps {
  register: UseFormRegister<PropertiesInput>;
  control: Control<PropertiesInput>;
  errors: FieldErrors<PropertiesInput>;
  imagePreviews: string[];
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
  floorPlanPreview?: string | null;
  onFloorPlanUpload?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFloorPlan?: () => void;
  setValue?: UseFormSetValue<PropertiesInput>;
  watch?: UseFormWatch<PropertiesInput>;
}

export default function PricingMediaTab({
  register,
  control,
  errors,
  imagePreviews,
  onImageUpload,
  onRemoveImage,
  floorPlanPreview,
  onFloorPlanUpload,
  onRemoveFloorPlan,
  setValue,
  watch,
}: PricingMediaTabProps) {
  const { t } = useLanguage();

  const [localFloorPlanPreview, setLocalFloorPlanPreview] = useState<string | null>(null);
  const imagesInputRef = useRef<HTMLInputElement>(null);
  const floorPlanInputRef = useRef<HTMLInputElement>(null);

  const currentFloorPlanPreview = floorPlanPreview !== undefined ? floorPlanPreview : localFloorPlanPreview;

  const handleBrowseImagesClick = () => {
    imagesInputRef.current?.click();
  };

  const handleBrowseFloorPlanClick = () => {
    floorPlanInputRef.current?.click();
  };

  const handleFloorPlanFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (onFloorPlanUpload) {
      onFloorPlanUpload(e);
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setLocalFloorPlanPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFloorPlanInternal = () => {
    if (onRemoveFloorPlan) {
      onRemoveFloorPlan();
    }
    setLocalFloorPlanPreview(null);
    if (floorPlanInputRef.current) {
      floorPlanInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDropImages = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const fakeEvent = {
        target: { files: e.dataTransfer.files },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onImageUpload(fakeEvent);
    }
  };

  const handleDropFloorPlan = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const fakeEvent = {
        target: { files: e.dataTransfer.files },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      handleFloorPlanFileChange(fakeEvent);
    }
  };

  return (
    <div className="space-y-4">
      {/* ── Pricing Card ──────────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.pricing.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="currency" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.pricing.currency")}
            </Label>
            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <Select key={field.value || 'aed'} onValueChange={field.onChange} value={field.value || "aed"}>
                  <SelectTrigger id="currency" className="mt-1 h-9 bg-white dark:bg-neutral-950 text-xs">
                    <SelectValue placeholder={t("properties.create.pricing.selectCurrency")} />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(`properties.create.options.currency.${option.value}`) || option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label htmlFor="price" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.pricing.price")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="price"
              type="number"
              dir="ltr"
              {...register("price", { valueAsNumber: true })}
              aria-invalid={!!errors?.price}
              placeholder={t("properties.create.pricing.pricePlaceholder")}
              className="mt-1 h-9 text-xs"
              error={!!errors.price}
            />
            <FieldError message={errors?.price?.message ? t(errors.price.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="price-per-m2" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.pricing.pricePerM2")}
            </Label>
            <Input
              id="price-per-m2"
              type="number"
              dir="ltr"
              {...register("price_per_m2", { valueAsNumber: true })}
              aria-invalid={!!errors?.price_per_m2}
              placeholder={t("properties.create.pricing.pricePerM2Placeholder")}
              className="mt-1 h-9 text-xs"
              error={!!errors.price_per_m2}
            />
            <FieldError message={errors?.price_per_m2?.message ? t(errors.price_per_m2.message as string) : undefined} />
          </div>
        </div>
      </div>

      {/* ── Unit Images Card ─────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.images.title")}
          </h2>
        </div>

        <div
          onClick={handleBrowseImagesClick}
          onDragOver={handleDragOver}
          onDrop={handleDropImages}
          className="border border-dashed border-gray-300 dark:border-neutral-700 hover:border-teal-500 dark:hover:border-teal-400 bg-white dark:bg-neutral-950/30 hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-all rounded-xl py-12 px-4 text-center cursor-pointer flex flex-col items-center justify-center gap-1.5 select-none"
        >
          <input
            ref={imagesInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={onImageUpload}
            className="sr-only"
            id="unit-images-upload"
          />
          <Upload className="h-7 w-7 text-gray-400 dark:text-gray-500 stroke-[1.5] mb-1" />
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.images.clickToUpload")}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {t("properties.create.images.supportText")}
          </p>
        </div>

        {imagePreviews.length > 0 && (
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
              <span>{imagePreviews.length} {t("properties.create.images.imagesUploaded")}</span>
              <span className="text-teal-600 dark:text-teal-400">{t("properties.create.images.primaryHint")}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 aspect-video shadow-xs">
                  <img
                    src={preview}
                    alt={t("properties.create.images.previewAlt", { index: index + 1 })}
                    className="w-full h-full object-cover"
                  />
                  {index === 0 && (
                    <span className="absolute bottom-2 start-2 bg-teal-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded shadow-xs">
                      {t("properties.create.images.primary")}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveImage(index);
                    }}
                    className="absolute top-1.5 end-1.5 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-700"
                    aria-label={t("properties.create.images.removeImage")}
                    title={t("properties.create.images.removeImage")}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Floor Plan Card ──────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.floorPlan.title")}
          </h2>
        </div>

        <div
          onClick={handleBrowseFloorPlanClick}
          onDragOver={handleDragOver}
          onDrop={handleDropFloorPlan}
          className="border border-dashed border-gray-300 dark:border-neutral-700 hover:border-teal-500 dark:hover:border-teal-400 bg-white dark:bg-neutral-950/30 hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-all rounded-xl py-12 px-4 text-center cursor-pointer flex flex-col items-center justify-center gap-1.5 select-none"
        >
          <input
            ref={floorPlanInputRef}
            type="file"
            accept="image/*"
            onChange={handleFloorPlanFileChange}
            className="sr-only"
            id="floor-plan-upload"
          />
          <Upload className="h-7 w-7 text-gray-400 dark:text-gray-500 stroke-[1.5] mb-1" />
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.floorPlan.uploadText")}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {t("properties.create.floorPlan.supportText")}
          </p>
        </div>

        {currentFloorPlanPreview && (
          <div className="pt-1">
            <div className="relative inline-block group rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 max-w-xs shadow-xs">
              <img
                src={currentFloorPlanPreview}
                alt={t("properties.create.floorPlan.previewAlt")}
                className="w-full h-44 object-contain p-2 bg-white dark:bg-neutral-900"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFloorPlanInternal();
                }}
                className="absolute top-1.5 end-1.5 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-700"
                aria-label={t("properties.create.floorPlan.remove")}
                title={t("properties.create.floorPlan.remove")}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Search Engine Optimization (SEO) Section ───────────────────── */}
      <SeoSection register={register} setValue={setValue} watch={watch} errors={errors} />
    </div>
  );
}
