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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Globe,
  Sparkles,
  Languages as LanguagesIcon,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Save,
} from "lucide-react";
import { ExpertFormValues } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface EditSpecializationsTabProps {
  register: UseFormRegister<ExpertFormValues>;
  setValue: UseFormSetValue<ExpertFormValues>;
  watch: UseFormWatch<ExpertFormValues>;
  control: Control<ExpertFormValues>;
  errors: FieldErrors<ExpertFormValues>;
  categories: any[];
  languages: any[];
  countries: any[];
  isSubmitting: boolean;
  onCancel: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function EditSpecializationsTab({
  register,
  setValue,
  watch,
  control,
  errors,
  categories,
  languages,
  countries,
  isSubmitting,
  onCancel,
  onPrev,
  onNext,
  onSubmit,
}: EditSpecializationsTabProps) {
  const { t } = useLanguage();

  const selectedCategories = watch("categories") || [];
  const selectedLanguages = watch("languages") || [];
  const selectedCountries = watch("countries") || [];

  const categoryOptions = React.useMemo(
    () =>
      categories.map((c: any) => ({
        value: Number(c.category_id ?? c.id),
        label: c.name || t("experts.edit.form.categoryFallback", { id: c.category_id ?? c.id }),
      })),
    [categories, t],
  );

  const languageOptions = React.useMemo(
    () =>
      languages.map((l: any) => ({
        value: Number(l.language_id ?? l.id),
        label: l.name || l.code || t("experts.edit.form.languageFallback", { id: l.language_id ?? l.id }),
      })),
    [languages, t],
  );

  const countryOptions = React.useMemo(
    () =>
      countries.map((c: any) => ({
        value: Number(c.id ?? c.country_id),
        label: c.name || t("experts.edit.form.countryFallback", { id: c.id ?? c.country_id }),
      })),
    [countries, t],
  );

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      {/* Specializations & Categories Card */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#008081]" />
          {t("experts.edit.form.categories")}
        </h2>

        <div>
          <Label htmlFor="edit-categories" className="required mb-1.5 block">
            {t("experts.edit.form.categories")}{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="categories"
            control={control}
            rules={{
              validate: (val) =>
                (val && val.length > 0) ||
                t("experts.edit.form.validation.selectCategory"),
            }}
            render={({ field }) => (
              <MultiSelect
                options={categoryOptions}
                selected={field.value || []}
                onChange={field.onChange}
                placeholder={
                  t("experts.edit.form.selectCategories")
                }
                hasError={!!errors.categories}
                className="dark:bg-neutral-800 dark:border-neutral-700"
              />
            )}
          />
          <FieldError message={errors.categories?.message} />

          {/* Active selection badges */}
          {selectedCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-neutral-800/80">
              {selectedCategories.map((catId) => {
                const opt = categoryOptions.find((o) => o.value === catId);
                return (
                  <Badge
                    key={catId}
                    variant="outline"
                    className="bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800 border-teal-200 px-2.5 py-1 text-xs font-medium flex items-center gap-1.5"
                  >
                    <span>{opt?.label || t("experts.edit.form.idFallback", { id: catId })}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = selectedCategories.filter(
                          (id) => id !== catId,
                        );
                        setValue("categories", updated, { shouldDirty: true });
                      }}
                      className="hover:text-teal-900 dark:hover:text-white rounded-full"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Languages & Regional Reach Card */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3 flex items-center gap-2">
          <Globe className="h-4 w-4 text-[#008081]" />
          {t("experts.edit.form.languagesReach")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <div>
            <Label htmlFor="edit-languages" className="required mb-1.5 flex items-center gap-1.5">
              <LanguagesIcon className="h-3.5 w-3.5 text-gray-400" />
              {t("experts.edit.form.languages")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="languages"
              control={control}
              rules={{
                validate: (val) =>
                  (val && val.length > 0) ||
                  t("experts.edit.form.validation.selectLanguage"),
              }}
              render={({ field }) => (
                <MultiSelect
                  options={languageOptions}
                  selected={field.value || []}
                  onChange={field.onChange}
                  placeholder={
                    t("experts.edit.form.selectLanguages")
                  }
                  hasError={!!errors.languages}
                  className="dark:bg-neutral-800 dark:border-neutral-700"
                />
              )}
            />
            <FieldError message={errors.languages?.message} />

            {selectedLanguages.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {selectedLanguages.map((langId) => {
                  const opt = languageOptions.find((o) => o.value === langId);
                  return (
                    <Badge
                      key={langId}
                      variant="secondary"
                      className="px-2 py-0.5 text-xs flex items-center gap-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
                    >
                      <span>{opt?.label || t("experts.edit.form.idFallback", { id: langId })}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = selectedLanguages.filter(
                            (id) => id !== langId,
                          );
                          setValue("languages", updated, { shouldDirty: true });
                        }}
                        className="hover:text-red-600 rounded-full"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  );
                })}
              </div>
            )}
          </div>

          {/* Countries / Service Areas */}
          <div>
            <Label htmlFor="edit-countries" className="required mb-1.5 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gray-400" />
              {t("experts.edit.form.countries")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="countries"
              control={control}
              rules={{
                validate: (val) =>
                  (val && val.length > 0) ||
                  t("experts.edit.form.validation.selectCountry"),
              }}
              render={({ field }) => (
                <MultiSelect
                  options={countryOptions}
                  selected={field.value || []}
                  onChange={field.onChange}
                  placeholder={
                    t("experts.edit.form.selectCountries")
                  }
                  hasError={!!errors.countries}
                  className="dark:bg-neutral-800 dark:border-neutral-700"
                />
              )}
            />
            <FieldError message={errors.countries?.message} />

            {selectedCountries.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {selectedCountries.map((countryId) => {
                  const opt = countryOptions.find((o) => o.value === countryId);
                  return (
                    <Badge
                      key={countryId}
                      variant="secondary"
                      className="px-2 py-0.5 text-xs flex items-center gap-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
                    >
                      <span>{opt?.label || t("experts.edit.form.idFallback", { id: countryId })}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = selectedCountries.filter(
                            (id) => id !== countryId,
                          );
                          setValue("countries", updated, { shouldDirty: true });
                        }}
                        className="hover:text-red-600 rounded-full"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  );
                })}
              </div>
            )}
          </div>
        </div>
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
            type="button"
            variant="outline"
            onClick={onNext}
            className="gap-2 dark:border-neutral-700 dark:text-gray-200"
          >
            {t("experts.edit.buttons.next")}
            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
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
