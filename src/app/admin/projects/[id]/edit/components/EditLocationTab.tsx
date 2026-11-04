"use client";

import React from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { ProjectFormValues } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2, Save } from "lucide-react";
import { FieldError } from "@/components/ui/form-message";
import { cn } from "@/lib/utils";

interface EditLocationTabProps {
  register: UseFormRegister<ProjectFormValues>;
  setValue: UseFormSetValue<ProjectFormValues>;
  watch: UseFormWatch<ProjectFormValues>;
  errors: FieldErrors<ProjectFormValues>;
  isSubmitting: boolean;
  onCancel: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function EditLocationTab({
  register,
  setValue,
  watch,
  errors,
  isSubmitting,
  onCancel,
  onSubmit,
}: EditLocationTabProps) {
  const { t } = useLanguage();

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3">
          {t("editProject.location.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="edit-city">
              {t("editProject.location.city")}
            </Label>
            <Input
              id="edit-city"
              {...register("city_id")}
              placeholder={t("editProject.location.cityPlaceholder")}
              className="mt-1.5"
              error={!!errors.city_id}
              aria-invalid={!!errors.city_id}
            />
            <FieldError message={errors.city_id?.message} />
          </div>
          <div>
            <Label htmlFor="edit-area">
              {t("editProject.location.area")}
            </Label>
            <Input
              id="edit-area"
              {...register("area_id")}
              placeholder={
                t("editProject.location.areaPlaceholder")
              }
              className="mt-1.5"
              error={!!errors.area_id}
              aria-invalid={!!errors.area_id}
            />
            <FieldError message={errors.area_id?.message} />
          </div>
          <div>
            <Label htmlFor="edit-landmark">
              {t("editProject.location.landmark")}
            </Label>
            <Input
              id="edit-landmark"
              {...register("landmark")}
              placeholder={
                t("editProject.location.landmarkPlaceholder")
              }
              className="mt-1.5"
              error={!!errors.landmark}
              aria-invalid={!!errors.landmark}
            />
            <FieldError message={errors.landmark?.message} />
          </div>
          <div>
            <Label htmlFor="edit-google-map-link">
              {t("editProject.location.googleMapLink")}
            </Label>
            <Input
              id="edit-google-map-link"
              type="url"
              {...register("google_map_link")}
              placeholder={
                t("editProject.location.googleMapPlaceholder")
              }
              className="mt-1.5"
              error={!!errors.google_map_link}
              aria-invalid={!!errors.google_map_link}
              dir="ltr"
            />
            <FieldError message={errors.google_map_link?.message} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div>
            <Label htmlFor="edit-latitude">
              {t("editProject.location.latitude")}
            </Label>
            <Input
              id="edit-latitude"
              type="number"
              step="any"
              {...register("latitude", { valueAsNumber: true })}
              placeholder="25.2048"
              className="mt-1.5"
              error={!!errors.latitude}
              aria-invalid={!!errors.latitude}
              dir="ltr"
            />
            <FieldError message={errors.latitude?.message} />
          </div>
          <div>
            <Label htmlFor="edit-longitude">
              {t("editProject.location.longitude")}
            </Label>
            <Input
              id="edit-longitude"
              type="number"
              step="any"
              {...register("longitude", { valueAsNumber: true })}
              placeholder="55.2708"
              className="mt-1.5"
              error={!!errors.longitude}
              aria-invalid={!!errors.longitude}
              dir="ltr"
            />
            <FieldError message={errors.longitude?.message} />
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-neutral-800 pt-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
            {t("editProject.location.boundariesTitle")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-north">
                {t("editProject.location.northSide")}
              </Label>
              <Input
                id="edit-north"
                {...register("north_side")}
                placeholder={
                  t("editProject.location.northPlaceholder")
                }
                className="mt-1.5"
                error={!!errors.north_side}
                aria-invalid={!!errors.north_side}
              />
              <FieldError message={errors.north_side?.message} />
            </div>
            <div>
              <Label htmlFor="edit-south">
                {t("editProject.location.southSide")}
              </Label>
              <Input
                id="edit-south"
                {...register("south_side")}
                placeholder={
                  t("editProject.location.southPlaceholder")
                }
                className="mt-1.5"
                error={!!errors.south_side}
                aria-invalid={!!errors.south_side}
              />
              <FieldError message={errors.south_side?.message} />
            </div>
            <div>
              <Label htmlFor="edit-east">
                {t("editProject.location.eastSide")}
              </Label>
              <Input
                id="edit-east"
                {...register("east_side")}
                placeholder={
                  t("editProject.location.eastPlaceholder")
                }
                className="mt-1.5"
                error={!!errors.east_side}
                aria-invalid={!!errors.east_side}
              />
              <FieldError message={errors.east_side?.message} />
            </div>
            <div>
              <Label htmlFor="edit-west">
                {t("editProject.location.westSide")}
              </Label>
              <Input
                id="edit-west"
                {...register("west_side")}
                placeholder={
                  t("editProject.location.westPlaceholder")
                }
                className="mt-1.5"
                error={!!errors.west_side}
                aria-invalid={!!errors.west_side}
              />
              <FieldError message={errors.west_side?.message} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-neutral-800 pt-4">
          <Label htmlFor="edit-location-description">
            {t("editProject.location.description")}
          </Label>
          <textarea
            id="edit-location-description"
            rows={3}
            {...register("location_description")}
            placeholder={
              t("editProject.location.descriptionPlaceholder")
            }
            className={cn(
              "mt-1.5 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              errors.location_description ? "border-red-500 focus-visible:ring-red-500" : "border-input dark:border-neutral-800"
            )}
            aria-invalid={!!errors.location_description}
          />
          <FieldError message={errors.location_description?.message} />
        </div>
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
