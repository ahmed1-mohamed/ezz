"use client";

import React from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  Control,
  Controller,
  FieldErrors,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DollarSign,
  Package as PackageIcon,
  Clock,
  CheckCircle2,
  ChevronLeft,
  Loader2,
  Save,
} from "lucide-react";
import { ExpertFormValues } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface EditPricingTabProps {
  register: UseFormRegister<ExpertFormValues>;
  setValue: UseFormSetValue<ExpertFormValues>;
  watch: UseFormWatch<ExpertFormValues>;
  control: Control<ExpertFormValues>;
  errors: FieldErrors<ExpertFormValues>;
  packages?: any[];
  isSubmitting: boolean;
  onCancel: () => void;
  onPrev: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function EditPricingTab({
  register,
  setValue,
  watch,
  control,
  errors,
  packages = [],
  isSubmitting,
  onCancel,
  onPrev,
  onSubmit,
}: EditPricingTabProps) {
  const { t } = useLanguage();
  const currentCurrency = watch("currency") || "AED";

  const currencyOptions = [
    {
      value: "AED",
      label:
        t("experts.edit.pricing.currencies.AED"),
    },
    {
      value: "SAR",
      label: t("experts.edit.pricing.currencies.SAR"),
    },
    {
      value: "USD",
      label: t("experts.edit.pricing.currencies.USD"),
    },
    {
      value: "EGP",
      label:
        t("experts.edit.pricing.currencies.EGP"),
    },
  ];

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      {/* Pricing & Consultation Rates Card */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3 flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-[#008081]" />
          {t("experts.edit.pricing.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="edit-currency">
              {t("experts.edit.pricing.currency")}
            </Label>
            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value || "AED"}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    className="mt-1.5 bg-white dark:bg-neutral-800 dark:border-neutral-700"
                    error={!!errors.currency}
                    aria-invalid={!!errors.currency}
                  >
                    <SelectValue
                      placeholder={
                        t("experts.edit.pricing.selectCurrency")
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.currency?.message} />
          </div>

          <div>
            <Label htmlFor="edit-starting-from">
              {t("experts.edit.pricing.startingFrom")}
            </Label>
            <div className="relative mt-1.5">
              <Input
                id="edit-starting-from"
                type="number"
                min="0"
                step="any"
                inputMode="decimal"
                dir="ltr"
                placeholder={
                  t("experts.edit.pricing.startingFromPlaceholder")
                }
                {...register("starting_from", {
                  valueAsNumber: true,
                })}
                className="dark:bg-neutral-800 dark:border-neutral-700 pe-16"
                error={!!errors.starting_from}
                aria-invalid={!!errors.starting_from}
              />
              <span className="absolute inset-y-0 end-3 flex items-center text-xs font-semibold text-gray-500 pointer-events-none">
                {currentCurrency}
              </span>
            </div>
            <FieldError message={errors.starting_from?.message} />
          </div>

          <div>
            <Label htmlFor="edit-rate-30min">
              {t("experts.edit.pricing.ratePer30Min")}
            </Label>
            <div className="relative mt-1.5">
              <Input
                id="edit-rate-30min"
                type="number"
                min="0"
                step="any"
                inputMode="decimal"
                dir="ltr"
                placeholder={
                  t("experts.edit.pricing.ratePer30MinPlaceholder")
                }
                {...register("rate_per_30min_cents", {
                  valueAsNumber: true,
                })}
                className="dark:bg-neutral-800 dark:border-neutral-700 pe-16"
                error={!!errors.rate_per_30min_cents}
                aria-invalid={!!errors.rate_per_30min_cents}
              />
              <span className="absolute inset-y-0 end-3 flex items-center text-xs font-semibold text-gray-500 pointer-events-none">
                {currentCurrency}
              </span>
            </div>
            <FieldError message={errors.rate_per_30min_cents?.message} />
          </div>
        </div>
      </div>

      {/* Existing Consultation Packages Card */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-neutral-800 pb-3">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <PackageIcon className="h-4 w-4 text-[#008081]" />
            {t("experts.edit.pricing.packages")}{" "}
            ({packages.length})
          </h2>
        </div>

        {packages.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 dark:bg-neutral-800/40 rounded-lg border border-dashed border-gray-200 dark:border-neutral-700">
            <PackageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("experts.edit.pricing.noPackages")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {packages.map((pkg: any, idx: number) => {
              const pkgName =
                pkg.package_name || pkg.name || t("experts.details.packageNumber", { number: idx + 1 });
              const pkgMinutes = pkg.minutes || 30;
              const pkgPrice = pkg.price_cents ?? pkg.price ?? 0;
              const pkgCurrency = pkg.currency || currentCurrency;

              return (
                <div
                  key={pkg.package_id || idx}
                  className="p-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg hover:border-teal-400 dark:hover:border-teal-500 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#008081] dark:text-teal-400 flex-shrink-0" />
                        <h5 className="font-semibold text-gray-900 dark:text-gray-100 text-sm truncate">
                          {pkgName}
                        </h5>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-2">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        <span>
                          {pkgMinutes}{" "}
                          {t("experts.edit.pricing.minutes")}
                        </span>
                      </div>
                    </div>
                    <div className="text-end flex-shrink-0">
                      <span className="text-sm font-bold text-[#008081] dark:text-teal-300 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 px-3 py-1 rounded-md inline-block">
                        {pkgPrice} {pkgCurrency}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-200 dark:border-neutral-800">
        <Button
          type="button"
          variant="outline"
          onClick={onPrev}
          className="gap-2 dark:border-neutral-700 dark:text-gray-200"
        >
          <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
          {t("experts.edit.buttons.previous")}
        </Button>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
            className="dark:border-neutral-700 dark:text-gray-200"
          >
            {t("experts.edit.buttons.cancel")}
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#008081] hover:bg-[#006666] text-white gap-2 shadow-2xs font-medium px-5"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("experts.messages.updating")}
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                {t("experts.edit.buttons.updateExpert")}
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
