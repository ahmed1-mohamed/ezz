"use client";

import React from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  Control,
  FieldErrors,
  Controller,
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
import { RichTextEditor } from "@/components/ui";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { ProjectFormValues } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2, Save } from "lucide-react";
import { FieldError } from "@/components/ui/form-message";

interface EditBasicInfoTabProps {
  register: UseFormRegister<ProjectFormValues>;
  setValue: UseFormSetValue<ProjectFormValues>;
  watch: UseFormWatch<ProjectFormValues>;
  control: Control<ProjectFormValues>;
  errors: FieldErrors<ProjectFormValues>;
  developersList: any[];
  projectDeveloperName?: string;
  isSubmitting: boolean;
  onCancel: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function EditBasicInfoTab({
  register,
  setValue,
  watch,
  control,
  errors,
  developersList,
  projectDeveloperName,
  isSubmitting,
  onCancel,
  onSubmit,
}: EditBasicInfoTabProps) {
  const { t } = useLanguage();

  const statusOptions = [
    {
      label: t("editProject.basicInfo.ongoing"),
      value: "ongoing",
    },
    {
      label: t("editProject.basicInfo.completed"),
      value: "completed",
    },
    {
      label: t("editProject.basicInfo.upcoming"),
      value: "upcoming",
    },
  ];

  const projectTypeOptions = [
    {
      label: t("editProject.basicInfo.residential"),
      value: "residential",
    },
    {
      label: t("editProject.basicInfo.commercial"),
      value: "commercial",
    },
    {
      label: t("editProject.basicInfo.mixedUse"),
      value: "mixed-use",
    },
  ];

  const currencyOptions = [
    {
      label: t("editProject.basicInfo.currencyAed"),
      value: "AED",
    },
    {
      label: t("editProject.basicInfo.currencySar"),
      value: "SAR",
    },
    {
      label: t("editProject.basicInfo.currencyUsd"),
      value: "USD",
    },
    {
      label: t("editProject.basicInfo.currencyEgp"),
      value: "EGP",
    },
    {
      label: t("editProject.basicInfo.currencyOmr"),
      value: "OMR",
    },
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3">
          {t("editProject.basicInfo.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="edit-project-name" className="required">
              {t("editProject.basicInfo.projectName")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="edit-project-name"
              placeholder={
                t("editProject.basicInfo.projectNamePlaceholder")
              }
              {...register("project_name")}
              className="mt-1.5"
              error={!!errors.project_name}
              aria-invalid={!!errors.project_name}
            />
            <FieldError message={errors.project_name?.message} />
          </div>

          <div>
            <Label htmlFor="edit-developer" className="required">
              {t("editProject.basicInfo.developer")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="developer_id"
              control={control}
              render={({ field }) => (
                <Select
                  key={`dev-select-${developersList.length}-${field.value || "empty"}`}
                  value={field.value ? String(field.value) : ""}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id="edit-developer"
                    ref={field.ref}
                    className="mt-1.5 bg-white dark:bg-neutral-800"
                    error={!!errors.developer_id}
                    aria-invalid={!!errors.developer_id}
                  >
                    <SelectValue
                      placeholder={
                        t("editProject.basicInfo.selectDeveloper")
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {developersList.map((developer: any) => {
                      const id = String(
                        developer.developer_id ?? developer.id ?? "",
                      );
                      const name =
                        developer.developer_name ||
                        developer.name ||
                        t("editProject.basicInfo.developerFallback", { id });
                      return (
                        <SelectItem key={`dev-opt-${id}`} value={id}>
                          {name}
                        </SelectItem>
                      );
                    })}
                    {field.value &&
                      !developersList.some(
                        (d: any) =>
                          String(d.developer_id ?? d.id ?? "") ===
                          String(field.value),
                      ) && (
                        <SelectItem
                          key={`dev-custom-${field.value}`}
                          value={String(field.value)}
                        >
                          {String(
                            projectDeveloperName || t("editProject.basicInfo.developerFallback", { id: String(field.value) }),
                          )}
                        </SelectItem>
                      )}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.developer_id?.message} />
          </div>

          <div>
            <Label htmlFor="edit-project-type" className="required">
              {t("editProject.basicInfo.projectType")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="project_type"
              control={control}
              render={({ field }) => (
                <Select
                  key={`type-select-${field.value || "residential"}`}
                  value={field.value || "residential"}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id="edit-project-type"
                    className="mt-1.5 bg-white dark:bg-neutral-800"
                    error={!!errors.project_type}
                    aria-invalid={!!errors.project_type}
                  >
                    <SelectValue
                      placeholder={
                        t("editProject.basicInfo.selectType")
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypeOptions.map((o) => (
                      <SelectItem key={`type-opt-${o.value}`} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.project_type?.message} />
          </div>

          <div>
            <Label htmlFor="edit-status" className="required">
              {t("editProject.basicInfo.status")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  key={`status-select-${field.value || "ongoing"}`}
                  value={field.value || "ongoing"}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id="edit-status"
                    className="mt-1.5 bg-white dark:bg-neutral-800"
                    error={!!errors.status}
                    aria-invalid={!!errors.status}
                  >
                    <SelectValue
                      placeholder={
                        t("editProject.basicInfo.selectStatus")
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((o) => (
                      <SelectItem key={`status-opt-${o.value}`} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.status?.message} />
          </div>

          <div>
            <Label htmlFor="edit-currency">
              {t("editProject.basicInfo.currency")}
            </Label>
            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <Select
                  key={`curr-select-${field.value || "AED"}`}
                  value={field.value || "AED"}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id="edit-currency"
                    className="mt-1.5 bg-white dark:bg-neutral-800"
                    error={!!errors.currency}
                    aria-invalid={!!errors.currency}
                  >
                    <SelectValue placeholder={t("editProject.basicInfo.currency")} />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyOptions.map((o) => (
                      <SelectItem key={`curr-opt-${o.value}`} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.currency?.message} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3">
          {t("editProject.basicInfo.description")}{" "}
          <span className="text-red-500">*</span>
        </h2>
        <div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <RichTextEditor
                content={field.value || ""}
                onChange={field.onChange}
                error={!!errors.description}
                placeholder={
                  t("editProject.basicInfo.descriptionPlaceholder")
                }
              />
            )}
          />
        </div>
        <FieldError message={errors.description?.message} />
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