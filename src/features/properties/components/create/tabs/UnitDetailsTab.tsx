"use client";

import { FieldError } from "@/components/ui/form-message";
import { Control, Controller, FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertiesInput } from "@/validators/propertiesSchema";
import {
  finishingStatusOptions,
  furnishStatusOptions,
  ownershipTypeOptions,
  viewOptions,
} from "../constants";
import { useLanguage } from "@/contexts/LanguageContext";
import SeoSection from "../SeoSection";

interface UnitDetailsTabProps {
  register: UseFormRegister<PropertiesInput>;
  control: Control<PropertiesInput>;
  errors: FieldErrors<PropertiesInput>;
  setValue?: UseFormSetValue<PropertiesInput>;
  watch?: UseFormWatch<PropertiesInput>;
}

export default function UnitDetailsTab({
  register,
  control,
  errors,
  setValue,
  watch,
}: UnitDetailsTabProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.unitDetails.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="size" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.unitSize")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="size"
              type="number"
              dir="ltr"
              {...register("size", { valueAsNumber: true })}
              aria-invalid={!!errors?.size}
              placeholder={t("properties.create.unitDetails.unitSizePlaceholder")}
              className="mt-1 h-9 text-xs"
              error={!!errors.size}
            />
            <FieldError message={errors?.size?.message ? t(errors.size.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="bedrooms" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.bedrooms")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="bedrooms"
              type="number"
              dir="ltr"
              {...register("bedrooms", { valueAsNumber: true })}
              aria-invalid={!!errors?.bedrooms}
              placeholder={t("properties.create.unitDetails.bedrooms")}
              className="mt-1 h-9 text-xs"
              error={!!errors.bedrooms}
            />
            <FieldError message={errors?.bedrooms?.message ? t(errors.bedrooms.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="bathrooms" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.bathrooms")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="bathrooms"
              type="number"
              dir="ltr"
              {...register("bathrooms", { valueAsNumber: true })}
              aria-invalid={!!errors?.bathrooms}
              placeholder={t("properties.create.unitDetails.bathrooms")}
              className="mt-1 h-9 text-xs"
              error={!!errors.bathrooms}
            />
            <FieldError message={errors?.bathrooms?.message ? t(errors.bathrooms.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="floor" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.floor")}
            </Label>
            <Input
              id="floor"
              {...register("floor")}
              error={!!errors?.floor}
              aria-invalid={!!errors?.floor}
              placeholder={t("properties.create.unitDetails.floor")}
              className="mt-1 h-9 text-xs"
            />
            <FieldError message={errors?.floor?.message ? t(errors.floor.message as string) : undefined} />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.view")}
            </Label>
            <Controller
              name="view"
              control={control}
              render={({ field }) => (
                <Select key={field.value || ''} onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                  <SelectTrigger className="mt-1 h-9 bg-white dark:bg-neutral-950 text-xs">
                    <SelectValue placeholder={t("properties.create.unitDetails.selectView")} />
                  </SelectTrigger>
                  <SelectContent>
                    {viewOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(`properties.create.options.view.${option.value}`) || option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.finishingType")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="finishing_status"
              control={control}
              render={({ field }) => (
                <Select key={field.value || ''} onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                  <SelectTrigger id="finishing_status" className="mt-1 h-9 bg-white dark:bg-neutral-950 text-xs" error={!!errors.finishing_status}>
                    <SelectValue placeholder={t("properties.create.unitDetails.selectFinishing")} />
                  </SelectTrigger>
                  <SelectContent>
                    {finishingStatusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(`properties.create.options.finishingStatus.${option.value}`) || option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors?.finishing_status?.message ? t(errors.finishing_status.message as string) : undefined} />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.furnishStatus")}
            </Label>
            <Controller
              name="furnish_status"
              control={control}
              render={({ field }) => (
                <Select key={field.value || ''} onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                  <SelectTrigger className="mt-1 h-9 bg-white dark:bg-neutral-950 text-xs">
                    <SelectValue placeholder={t("properties.create.unitDetails.selectFurnish")} />
                  </SelectTrigger>
                  <SelectContent>
                    {furnishStatusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(`properties.create.options.furnishStatus.${option.value}`) || option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.ownershipType")}
            </Label>
            <Controller
              name="ownership_type"
              control={control}
              render={({ field }) => (
                <Select key={field.value || ''} onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                  <SelectTrigger className="mt-1 h-9 bg-white dark:bg-neutral-950 text-xs">
                    <SelectValue placeholder={t("properties.create.unitDetails.selectOwnership")} />
                  </SelectTrigger>
                  <SelectContent>
                    {ownershipTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(`properties.create.options.ownershipType.${option.value}`) || option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label htmlFor="plot_size" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.plotSize")}
            </Label>
            <Input
              id="plot_size"
              type="number"
              dir="ltr"
              {...register("plot_size", { valueAsNumber: true })}
              aria-invalid={!!errors?.plot_size}
              placeholder={t("properties.create.unitDetails.plotSizePlaceholder")}
              className="mt-1 h-9 text-xs"
              error={!!errors.plot_size}
            />
            <FieldError message={errors?.plot_size?.message ? t(errors.plot_size.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="bua_size" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.unitDetails.builtSize")}
            </Label>
            <Input
              id="bua_size"
              type="number"
              dir="ltr"
              {...register("bua_size", { valueAsNumber: true })}
              aria-invalid={!!errors?.bua_size}
              placeholder={t("properties.create.unitDetails.builtSizePlaceholder")}
              className="mt-1 h-9 text-xs"
              error={!!errors.bua_size}
            />
            <FieldError message={errors?.bua_size?.message ? t(errors.bua_size.message as string) : undefined} />
          </div>

          <div>
            <Label className="text-xs font-semibold text-transparent select-none invisible">
              {t("properties.create.unitDetails.maidRoomLabel")}
            </Label>
            <Controller
              name="maid_room"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-3 bg-gray-50/70 dark:bg-neutral-800/40 border border-gray-200 dark:border-neutral-700 rounded-lg px-3.5 h-9 mt-1">
                  <Checkbox
                    id="maid_room"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label
                    htmlFor="maid_room"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none"
                  >
                    {t("properties.create.unitDetails.maidRoom")}
                  </label>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <SeoSection register={register} setValue={setValue} watch={watch} errors={errors} />
    </div>
  );
}
