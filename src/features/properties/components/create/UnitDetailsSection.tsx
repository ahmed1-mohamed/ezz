"use client";

import { FieldError } from "@/components/ui/form-message";
import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form";
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
} from "./constants";
import { useLanguage } from "@/contexts/LanguageContext";

interface UnitDetailsSectionProps {
  register: UseFormRegister<PropertiesInput>;
  control: Control<PropertiesInput>;
  errors: FieldErrors<PropertiesInput>;
}

export default function UnitDetailsSection({
  register,
  control,
  errors,
}: UnitDetailsSectionProps) {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{t("properties.create.unitDetails.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="size">
            {t("properties.create.unitDetails.unitSize")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="size"
            type="number"
            {...register("size", { valueAsNumber: true })}
            placeholder={t("properties.create.unitDetails.unitSizePlaceholder")}
            className="mt-1"
            error={!!errors.size}
          />
          <FieldError message={errors?.size?.message ? t(errors.size.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="bedrooms">
            {t("properties.create.unitDetails.bedrooms")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="bedrooms"
            type="number"
            {...register("bedrooms", { valueAsNumber: true })}
            placeholder={t("properties.create.unitDetails.bedrooms")}
            className="mt-1"
            error={!!errors.bedrooms}
          />
          <FieldError message={errors?.bedrooms?.message ? t(errors.bedrooms.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="bathrooms">
            {t("properties.create.unitDetails.bathrooms")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="bathrooms"
            type="number"
            {...register("bathrooms", { valueAsNumber: true })}
            placeholder={t("properties.create.unitDetails.bathrooms")}
            className="mt-1"
            error={!!errors.bathrooms}
          />
          <FieldError message={errors?.bathrooms?.message ? t(errors.bathrooms.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="floor">{t("properties.create.unitDetails.floor")}</Label>
          <Input
            id="floor"
            {...register("floor")}
            placeholder={t("properties.create.unitDetails.floor")}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="view">{t("properties.create.unitDetails.view")}</Label>
          <Controller
            name="view"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder={t("properties.create.unitDetails.selectView")} />
                </SelectTrigger>
                <SelectContent>
                  {viewOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <Label htmlFor="finishing_status">
            {t("properties.create.unitDetails.finishingType")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="finishing_status"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger className="mt-1" error={!!errors.finishing_status}>
                  <SelectValue placeholder={t("properties.create.unitDetails.selectFinishing")} />
                </SelectTrigger>
                <SelectContent>
                  {finishingStatusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors?.finishing_status?.message ? t(errors.finishing_status.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="furnish_status">{t("properties.create.unitDetails.furnishStatus")}</Label>
          <Controller
            name="furnish_status"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder={t("properties.create.unitDetails.selectFurnish")} />
                </SelectTrigger>
                <SelectContent>
                  {furnishStatusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <Label htmlFor="ownership_type">{t("properties.create.unitDetails.ownershipType")}</Label>
          <Controller
            name="ownership_type"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder={t("properties.create.unitDetails.selectOwnership")} />
                </SelectTrigger>
                <SelectContent>
                  {ownershipTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <Label htmlFor="plot_size">{t("properties.create.unitDetails.plotSize")}</Label>
          <Input
            id="plot_size"
            type="number"
            {...register("plot_size", { valueAsNumber: true })}
            placeholder={t("properties.create.unitDetails.plotSizePlaceholder")}
            className="mt-1"
            error={!!errors.plot_size}
          />
          <FieldError message={errors?.plot_size?.message ? t(errors.plot_size.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="bua_size">{t("properties.create.unitDetails.builtSize")}</Label>
          <Input
            id="bua_size"
            type="number"
            {...register("bua_size", { valueAsNumber: true })}
            placeholder={t("properties.create.unitDetails.builtSizePlaceholder")}
            className="mt-1"
            error={!!errors.bua_size}
          />
          <FieldError message={errors?.bua_size?.message ? t(errors.bua_size.message as string) : undefined} />
        </div>

        <div className="flex items-center space-x-2 mt-8">
          <Controller
            name="maid_room"
            control={control}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="maid_room"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <label
                  htmlFor="maid_room"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {t("properties.create.unitDetails.maidRoom")}
                </label>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
