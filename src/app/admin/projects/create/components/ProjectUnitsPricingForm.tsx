"use client";

import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface ProjectUnitsPricingFormProps {
  form: UseFormReturn<CreateProjectInput>;
}

const CURRENCY_OPTIONS = [
  { label: "AED", value: "AED" },
  { label: "USD", value: "USD" },
  { label: "SAR", value: "SAR" },
  { label: "EGP", value: "EGP" },
  { label: "QAR", value: "QAR" },
  { label: "KWD", value: "KWD" },
  { label: "BHD", value: "BHD" },
  { label: "OMR", value: "OMR" },
];

export function ProjectUnitsPricingForm({ form }: ProjectUnitsPricingFormProps) {
  const { register, watch, setValue, formState: { errors } } = form;
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const currencyValue = watch("currency") || "AED";

  return (
    <div className="space-y-4">
      {/* ── Units & Pricing Card ────────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {isAr ? "الوحدات والتواريخ والأسعار" : (t("projects.form.units.title"))}
          </h2>
        </div>

        {/* Row 1: Total Units & Available Units */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div id="error-total_units">
            <Label htmlFor="total_units" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "إجمالي الوحدات" : (t("projects.form.units.totalUnits"))}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="total_units"
              type="number"
              min={0}
              step={1}
              dir="ltr"
              {...register("total_units")}
              placeholder={isAr ? "مثال: 100" : "e.g. 100"}
              className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
              error={!!errors.total_units}
              aria-invalid={!!errors.total_units}
            />
            <FieldError message={t(errors.total_units?.message || "")} />
          </div>

          <div id="error-available_units">
            <Label htmlFor="available_units" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "الوحدات المتاحة" : (t("projects.form.units.availableUnits"))}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="available_units"
              type="number"
              min={0}
              step={1}
              dir="ltr"
              {...register("available_units")}
              placeholder={isAr ? "مثال: 50" : "e.g. 50"}
              className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
              error={!!errors.available_units}
              aria-invalid={!!errors.available_units}
            />
            <FieldError message={t(errors.available_units?.message || "")} />
          </div>
        </div>

        {/* Row 2: Launch Date & Completion Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div id="error-launch_date">
            <Label htmlFor="launch_date" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "تاريخ الإطلاق" : (t("projects.form.units.launchDate"))}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="launch_date"
              type="date"
              {...register("launch_date")}
              className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
              error={!!errors.launch_date}
              aria-invalid={!!errors.launch_date}
            />
            <FieldError message={t(errors.launch_date?.message || "")} />
          </div>

          <div id="error-completion_date">
            <Label htmlFor="completion_date" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "تاريخ الانتهاء" : (t("projects.form.units.completionDate"))}
            </Label>
            <Input
              id="completion_date"
              type="date"
              {...register("completion_date", {
                onChange: (e) => {
                  setValue("delivery_date", e.target.value);
                },
              })}
              className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
              error={!!errors.completion_date}
              aria-invalid={!!errors.completion_date}
            />
            <FieldError message={t(errors.completion_date?.message || "")} />
          </div>
        </div>

        {/* Row 3: Unit Types (Full width) */}
        <div id="error-unit_types">
          <Label htmlFor="unit_types" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
            {isAr ? "أنواع الوحدات" : "Unit Types"}
          </Label>
          <Input
            id="unit_types"
            {...register("unit_types")}
            placeholder={isAr ? "مثال: شقق، فلل، بنتهاوس" : "e.g. Apartments, Villas, Penthouses"}
            className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
            error={!!errors.unit_types}
            aria-invalid={!!errors.unit_types}
          />
          <FieldError message={t(errors.unit_types?.message || "")} />
        </div>

        {/* Row 4: Currency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="currency" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "العملة" : "Currency"}
            </Label>
            <Select
              value={currencyValue}
              onValueChange={(val) => setValue("currency", val, { shouldDirty: true })}
            >
              <SelectTrigger id="currency" className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950">
                <SelectValue placeholder="AED" />
              </SelectTrigger>
              <SelectContent>
                {CURRENCY_OPTIONS.map((c) => (
                  <SelectItem key={c.value} value={c.value} className="text-xs">
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Row 3: Project Size (m²) & Min Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div id="error-project_size">
            <Label htmlFor="project_size" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "مساحة المشروع (م²)" : "Project Size (m²)"}
            </Label>
            <Input
              id="project_size"
              {...register("project_size")}
              placeholder={isAr ? "مثال: 25,000" : "e.g. 25,000"}
              inputMode="decimal"
              dir="ltr"
              className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
              error={!!errors.project_size}
              aria-invalid={!!errors.project_size}
            />
            <FieldError message={t(errors.project_size?.message || "")} />
          </div>

          <div id="error-min_price">
            <Label htmlFor="min_price" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "الحد الأدنى للسعر" : "Min Price"}
            </Label>
            <Input
              id="min_price"
              {...register("min_price")}
              placeholder={isAr ? "مثال: 1,500,000" : "e.g. 1,500,000"}
              inputMode="decimal"
              dir="ltr"
              className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
              error={!!errors.min_price}
              aria-invalid={!!errors.min_price}
            />
            <FieldError message={t(errors.min_price?.message || "")} />
          </div>
        </div>

        {/* Row 4: Max Price (Half width on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div id="error-max_price">
            <Label htmlFor="max_price" className="text-xs text-gray-600 dark:text-gray-300 font-medium">
              {isAr ? "الحد الأقصى للسعر" : "Max Price"}
            </Label>
            <Input
              id="max_price"
              {...register("max_price")}
              placeholder={isAr ? "مثال: 9,000,000" : "e.g. 9,000,000"}
              inputMode="decimal"
              dir="ltr"
              className="mt-1.5 h-10 text-xs bg-white dark:bg-neutral-950"
              error={!!errors.max_price}
              aria-invalid={!!errors.max_price}
            />
            <FieldError message={t(errors.max_price?.message || "")} />
          </div>
          <div className="hidden md:block" />
        </div>
      </div>

      {/* ── Search Engine Optimization (SEO) Card ────────────────────────── */}
      <SeoFieldsSection
        register={register}
        setValue={setValue}
        watch={watch}
        nameFieldName="project_name"
        slugPlaceholder="my-property"
        compact={true}
      />
    </div>
  );
}
