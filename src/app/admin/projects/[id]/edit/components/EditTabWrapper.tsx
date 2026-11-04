"use client";

import React from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { ProjectFormValues } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2, Save } from "lucide-react";

interface EditTabWrapperProps {
  children: React.ReactNode;
  register: UseFormRegister<ProjectFormValues>;
  setValue: UseFormSetValue<ProjectFormValues>;
  watch: UseFormWatch<ProjectFormValues>;
  isSubmitting: boolean;
  onCancel: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  wrapWithCard?: boolean;
}

export function EditTabWrapper({
  children,
  register,
  setValue,
  watch,
  isSubmitting,
  onCancel,
  onSubmit,
  wrapWithCard = true,
}: EditTabWrapperProps) {
  const { t } = useLanguage();

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {wrapWithCard ? (
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 shadow-xs">
          {children}
        </div>
      ) : (
        <div className="space-y-6">{children}</div>
      )}

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
