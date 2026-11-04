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
import {
  Briefcase,
  Award,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Save,
  Globe,
  Linkedin,
  CalendarDays,
  AlertTriangle,
} from "lucide-react";
import { ExpertFormValues, CertificationItem } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface EditProfessionalTabProps {
  expert?: any;
  register: UseFormRegister<ExpertFormValues>;
  setValue: UseFormSetValue<ExpertFormValues>;
  watch: UseFormWatch<ExpertFormValues>;
  errors: FieldErrors<ExpertFormValues>;
  certifications: CertificationItem[];
  setCertifications: React.Dispatch<React.SetStateAction<CertificationItem[]>>;
  isSubmitting: boolean;
  onCancel: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function EditProfessionalTab({
  expert,
  register,
  setValue,
  watch,
  errors,
  certifications,
  setCertifications,
  isSubmitting,
  onCancel,
  onPrev,
  onNext,
  onSubmit,
}: EditProfessionalTabProps) {
  const { t } = useLanguage();

  const addCertification = () => {
    const updated = [...certifications, { cert_name: "" }];
    setCertifications(updated);
    setValue("certifications", updated, { shouldDirty: true });
  };

  const removeCertification = (index: number) => {
    const updated = certifications.filter((_, i) => i !== index);
    setCertifications(updated);
    setValue("certifications", updated, { shouldDirty: true });
  };

  const updateCertificationName = (index: number, value: string) => {
    const updated = [...certifications];
    updated[index] = { ...updated[index], cert_name: value };
    setCertifications(updated);
    setValue("certifications", updated, { shouldDirty: true });
  };

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      {/* Professional Background Card */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3 flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-[#008081]" />
          {t("experts.edit.professionalDetails")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="edit-years-exp" className="required">
              {t("experts.edit.form.yearsExperience")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="edit-years-exp"
              type="number"
              min="0"
              step="1"
              inputMode="numeric"
              dir="ltr"
              placeholder={
                t("experts.edit.form.yearsExperiencePlaceholder")
              }
              {...register("years_experience", {
                required:
                  t("experts.edit.form.validation.yearsExperienceRequired"),
                valueAsNumber: true,
              })}
              className="mt-1.5 dark:bg-neutral-800 dark:border-neutral-700"
              error={!!errors.years_experience}
              aria-invalid={!!errors.years_experience}
            />
            <FieldError message={errors.years_experience?.message} />
          </div>

          <div>
            <Label htmlFor="edit-website" className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-gray-400" />
              {t("experts.edit.form.website")}
            </Label>
            <Input
              id="edit-website"
              placeholder={
                t("experts.edit.form.websitePlaceholder")
              }
              type="url"
              dir="ltr"
              {...register("website")}
              className="mt-1.5 dark:bg-neutral-800 dark:border-neutral-700"
              error={!!errors.website}
              aria-invalid={!!errors.website}
            />
            <FieldError message={errors.website?.message} />
          </div>

          <div>
            <Label htmlFor="edit-linkedin" className="flex items-center gap-1.5">
              <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" />
              {t("experts.edit.form.linkedin")}
            </Label>
            <Input
              id="edit-linkedin"
              placeholder={
                t("experts.edit.form.linkedinPlaceholder")
              }
              type="url"
              dir="ltr"
              {...register("linkedin")}
              className="mt-1.5 dark:bg-neutral-800 dark:border-neutral-700"
              error={!!errors.linkedin}
              aria-invalid={!!errors.linkedin}
            />
            <FieldError message={errors.linkedin?.message} />
          </div>
        </div>
      </div>

      {/* Experience & Certifications Card */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-neutral-800 pb-3">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Award className="h-4 w-4 text-[#008081]" />
            {t("experts.edit.form.certifications")}
          </h2>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addCertification}
            className="gap-1.5 dark:border-neutral-700 dark:text-gray-200"
          >
            <Plus className="h-4 w-4" />
            {t("experts.edit.form.addCertification")}
          </Button>
        </div>

        <div className="space-y-3">
          {certifications.length === 0 ? (
            <div className="text-center py-6 bg-gray-50 dark:bg-neutral-800/40 rounded-lg border border-dashed border-gray-200 dark:border-neutral-700">
              <Award className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("experts.edit.form.noCertifications")}
              </p>
              <Button
                type="button"
                variant="link"
                size="sm"
                onClick={addCertification}
                className="text-[#008081] dark:text-teal-400 mt-1"
              >
                +{" "}
                {t("experts.edit.form.addFirstCertification")}
              </Button>
            </div>
          ) : (
            certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800/50 rounded-lg border border-gray-200 dark:border-neutral-700"
              >
                <div className="w-8 h-8 rounded bg-teal-50 dark:bg-teal-900/30 text-[#008081] dark:text-teal-400 flex items-center justify-center flex-shrink-0 font-medium text-xs">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <Input
                    placeholder={
                      t("experts.edit.form.certificationsPlaceholder")
                    }
                    value={cert.cert_name}
                    onChange={(e) => updateCertificationName(index, e.target.value)}
                    className="bg-white dark:bg-neutral-800 dark:border-neutral-700"
                    error={!!errors.certifications?.[index]?.cert_name}
                    aria-invalid={!!errors.certifications?.[index]?.cert_name}
                  />
                  <FieldError message={errors.certifications?.[index]?.cert_name?.message} />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeCertification(index)}
                  className="text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 flex-shrink-0"
                  title={t("common.delete")}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>
        <FieldError message={errors.certifications?.message} />
      </div>

      {/* Availability Section (Read Only) */}
      {(expert?.availability_rules?.length > 0 || expert?.availability_exceptions?.length > 0) && (
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3 flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[#008081]" />
            {t("experts.details.availability")} ({t("common.readOnly")})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expert.availability_rules?.length > 0 && (
              <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-4 border border-gray-200 dark:border-neutral-700">
                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {t("experts.details.regularRules")}
                </h5>
                <div className="space-y-2">
                  {expert.availability_rules.map((rule: any) => (
                    <div key={rule.rule_id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {t(`common.days.${rule.dow_bitmask}`)}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {rule.time_start} - {rule.time_end}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {expert.availability_exceptions?.length > 0 && (
              <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-4 border border-gray-200 dark:border-neutral-700">
                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  {t("experts.details.exceptions")}
                </h5>
                <div className="space-y-2 max-h-48 overflow-y-auto pe-2">
                  {expert.availability_exceptions.map((exc: any) => (
                    <div key={exc.exception_id} className="flex flex-col text-sm border-b border-gray-200 dark:border-neutral-700 pb-2 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {exc.start_date ? new Date(exc.start_date.replace(" ", "T")).toLocaleDateString() : t("experts.table.na")}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide font-semibold ${exc.available ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                          {exc.available ? t("experts.details.available") : t("experts.details.unavailable")}
                        </span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        {exc.start_date?.split(" ")[1] || ""} - {exc.end_date?.split(" ")[1] || ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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
