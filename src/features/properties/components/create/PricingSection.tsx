"use client";

import { FieldError } from "@/components/ui/form-message";
import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { currencyOptions } from "./constants";
import { useLanguage } from "@/contexts/LanguageContext";

interface PricingSectionProps {
  register: UseFormRegister<PropertiesInput>;
  control: Control<PropertiesInput>;
  errors: FieldErrors<PropertiesInput>;
}

export default function PricingSection({
  register,
  control,
  errors,
}: PricingSectionProps) {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        {t("properties.create.pricing.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="currency">{t("properties.create.pricing.currency")}</Label>
          <Controller
            name="currency"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder={t("properties.create.pricing.selectCurrency")} />
                </SelectTrigger>
                <SelectContent>
                  {currencyOptions.map((option) => (
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
          <Label htmlFor="price">
            {t("properties.create.pricing.price")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="price"
            type="number"
            {...register("price", { valueAsNumber: true })}
            placeholder={t("properties.create.pricing.price")}
            className="mt-1"
            error={!!errors.price}
          />
          <FieldError message={errors?.price?.message ? t(errors.price.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="price-per-m2">{t("properties.create.pricing.pricePerM2")}</Label>
          <Input
            id="price-per-m2"
            type="number"
            {...register("price_per_m2", { valueAsNumber: true })}
            placeholder={t("properties.create.pricing.includeExclude")}
            className="mt-1"
            error={!!errors.price_per_m2}
          />
          <FieldError message={errors?.price_per_m2?.message ? t(errors.price_per_m2.message as string) : undefined} />
        </div>
      </div>

      <div className="mt-6">
        <Label htmlFor="price-description">{t("properties.create.pricing.priceDescription")}</Label>
        <Textarea
          id="price-description"
          {...register("price_description")}
          placeholder={t("properties.create.pricing.writeDescription")}
          className="mt-1 min-h-[80px]"
        />
      </div>
    </div>
  );
}