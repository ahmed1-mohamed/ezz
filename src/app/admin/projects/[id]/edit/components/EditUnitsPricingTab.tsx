"use client";

import React from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  FieldErrors,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { ProjectFormValues } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";
import { Loader2, Save } from "lucide-react";
import dynamic from "next/dynamic";

const UnitsTab = dynamic(
  () => import("../../../[id]/components/tabs/UnitsTab").then((mod) => mod.UnitsTab),
  { ssr: false },
);

interface EditUnitsPricingTabProps {
  register: UseFormRegister<ProjectFormValues>;
  setValue: UseFormSetValue<ProjectFormValues>;
  watch: UseFormWatch<ProjectFormValues>;
  errors: FieldErrors<ProjectFormValues>;
  properties: any[];
  isSubmitting: boolean;
  onCancel: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function EditUnitsPricingTab({
  register,
  setValue,
  watch,
  errors,
  properties,
  isSubmitting,
  onCancel,
  onSubmit,
}: EditUnitsPricingTabProps) {
  const { t } = useLanguage();
  const currency = watch("currency") || "AED";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3">
          {t("editProject.unitsPricing.unitsDimensionsTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="edit-total-units">
              {t("editProject.unitsPricing.totalUnits")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="edit-total-units"
              type="number"
              dir="ltr"
              {...register("total_units")}
              placeholder={t("editProject.unitsPricing.totalUnits")}
              className="mt-1.5"
              error={!!errors.total_units}
              aria-invalid={!!errors.total_units}
            />
            <FieldError message={errors.total_units?.message} />

          </div>

          <div>
            <Label htmlFor="edit-available-units">
              {t("editProject.unitsPricing.availableUnits")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="edit-available-units"
              type="number"
              dir="ltr"
              {...register("available_units")}
              placeholder={
                t("editProject.unitsPricing.availableUnits")
              }
              className="mt-1.5"
              error={!!errors.available_units}
              aria-invalid={!!errors.available_units}
            />
            <FieldError message={errors.available_units?.message} />

          </div>

          <div>
            <Label htmlFor="edit-project-size">
              {t("editProject.unitsPricing.projectSize")}
            </Label>
            <Input
              id="edit-project-size"
              {...register("project_size")}
              placeholder={
                t("editProject.unitsPricing.projectSizePlaceholder")
              }
              className="mt-1.5"
              error={!!errors.project_size}
              aria-invalid={!!errors.project_size}
            />
            <FieldError message={errors.project_size?.message} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div>
            <Label htmlFor="edit-launch-date">
              {t("editProject.unitsPricing.launchDate")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="edit-launch-date"
              type="date"
              {...register("launch_date")}
              className="mt-1.5"
              error={!!errors.launch_date}
              aria-invalid={!!errors.launch_date}
            />
            <FieldError message={errors.launch_date?.message} />

          </div>

          <div>
            <Label htmlFor="edit-completion-date">
              {t("editProject.unitsPricing.completionDate")}
            </Label>
            <Input
              id="edit-completion-date"
              type="date"
              {...register("completion_date")}
              className="mt-1.5"
              error={!!errors.completion_date}
              aria-invalid={!!errors.completion_date}
            />
            <FieldError message={errors.completion_date?.message} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div>
            <Label htmlFor="edit-permit-no">
              {t("editProject.unitsPricing.permitNo")}
            </Label>
            <Input
              id="edit-permit-no"
              {...register("permit_no")}
              placeholder={t("editProject.unitsPricing.permitNoPlaceholder")}
              className="mt-1.5"
              error={!!errors.permit_no}
              aria-invalid={!!errors.permit_no}
            />
            <FieldError message={errors.permit_no?.message} />
          </div>
          <div>
            <Label htmlFor="edit-phase">
              {t("editProject.unitsPricing.phase")}
            </Label>
            <Input
              id="edit-phase"
              {...register("phase")}
              placeholder={t("editProject.unitsPricing.phasePlaceholder")}
              className="mt-1.5"
              error={!!errors.phase}
              aria-invalid={!!errors.phase}
            />
            <FieldError message={errors.phase?.message} />
          </div>
          <div>
            <Label htmlFor="edit-barcode">
              {t("editProject.unitsPricing.barcode")}
            </Label>
            <Input
              id="edit-barcode"
              {...register("barcode")}
              placeholder={t("editProject.unitsPricing.barcodePlaceholder")}
              className="mt-1.5"
              error={!!errors.barcode}
              aria-invalid={!!errors.barcode}
            />
            <FieldError message={errors.barcode?.message} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3">
          {t("editProject.unitsPricing.pricingRangeTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="edit-min-price">
              {t("editProject.unitsPricing.minPrice")} ({currency})
            </Label>
            <Input
              id="edit-min-price"
              type="number"
              {...register("min_price")}
              placeholder={
                t("editProject.unitsPricing.minPricePlaceholder")
              }
              className="mt-1.5"
              error={!!errors.min_price}
              aria-invalid={!!errors.min_price}
              dir="ltr"
            />
            <FieldError message={errors.min_price?.message} />
          </div>
          <div>
            <Label htmlFor="edit-max-price">
              {t("editProject.unitsPricing.maxPrice")} ({currency})
            </Label>
            <Input
              id="edit-max-price"
              type="number"
              {...register("max_price")}
              placeholder={
                t("editProject.unitsPricing.maxPricePlaceholder")
              }
              className="mt-1.5"
              error={!!errors.max_price}
              aria-invalid={!!errors.max_price}
              dir="ltr"
            />
            <FieldError message={errors.max_price?.message} />
          </div>
          <div>
            <Label htmlFor="edit-price-sq-min">
              {t("editProject.unitsPricing.priceSqMin")} ({currency})
            </Label>
            <Input
              id="edit-price-sq-min"
              type="number"
              {...register("price_sq_min")}
              placeholder={
                t("editProject.unitsPricing.priceSqMinPlaceholder")
              }
              className="mt-1.5"
              error={!!errors.price_sq_min}
              aria-invalid={!!errors.price_sq_min}
              dir="ltr"
            />
            <FieldError message={errors.price_sq_min?.message} />
          </div>
          <div>
            <Label htmlFor="edit-price-sq-max">
              {t("editProject.unitsPricing.priceSqMax")} ({currency})
            </Label>
            <Input
              id="edit-price-sq-max"
              type="number"
              {...register("price_sq_max")}
              placeholder={
                t("editProject.unitsPricing.priceSqMaxPlaceholder")
              }
              className="mt-1.5"
              error={!!errors.price_sq_max}
              aria-invalid={!!errors.price_sq_max}
              dir="ltr"
            />
            <FieldError message={errors.price_sq_max?.message} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 shadow-xs">
        <UnitsTab properties={properties} currency={currency} />
      </div>

      <SeoFieldsSection
        register={register}
        setValue={setValue}
        watch={watch}
        nameFieldName="project_name"
        slugPlaceholder="project-slug"
      />

      <div className="flex items-center justify-end gap-3 pt-3">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
          className="dark:border-neutral-700 dark:text-gray-200 px-5"
        >
          {t("editProject.cancel")}
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#008081] hover:bg-[#006666] text-white gap-2 shadow-2xs font-medium px-6"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {t("editProject.updating")}
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              {t("editProject.saveChanges")}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
