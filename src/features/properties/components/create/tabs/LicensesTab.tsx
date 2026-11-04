"use client";

import { FieldError } from "@/components/ui/form-message";
import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { useLanguage } from "@/contexts/LanguageContext";
import SeoSection from "../SeoSection";

interface LicensesTabProps {
  register: UseFormRegister<PropertiesInput>;
  setValue?: UseFormSetValue<PropertiesInput>;
  watch?: UseFormWatch<PropertiesInput>;
  errors?: FieldErrors<PropertiesInput>;
}

export default function LicensesTab({ register, setValue, watch, errors }: LicensesTabProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.license.title")}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {t("properties.create.license.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="broker_license" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.license.brokerLicense")}
            </Label>
            <Input
              id="broker_license"
              {...register("broker_license")}
              error={!!errors?.broker_license}
              aria-invalid={!!errors?.broker_license}
              placeholder={t("properties.create.license.brokerLicense")}
              className="mt-1 h-9 text-xs"
            />
            <FieldError message={errors?.broker_license?.message ? t(errors.broker_license.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="agent_license" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.license.agentLicense")}
            </Label>
            <Input
              id="agent_license"
              {...register("agent_license")}
              error={!!errors?.agent_license}
              aria-invalid={!!errors?.agent_license}
              placeholder={t("properties.create.license.agentLicense")}
              className="mt-1 h-9 text-xs"
            />
            <FieldError message={errors?.agent_license?.message ? t(errors.agent_license.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="dld_permit_number" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.license.dldPermitNumber")}
            </Label>
            <Input
              id="dld_permit_number"
              {...register("dld_permit_number")}
              error={!!errors?.dld_permit_number}
              aria-invalid={!!errors?.dld_permit_number}
              placeholder={t("properties.create.license.dldPermitNumber")}
              className="mt-1 h-9 text-xs"
            />
            <FieldError message={errors?.dld_permit_number?.message ? t(errors.dld_permit_number.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="dld_barcode" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.license.dldBarcode")}
            </Label>
            <Input
              id="dld_barcode"
              {...register("dld_barcode")}
              error={!!errors?.dld_barcode}
              aria-invalid={!!errors?.dld_barcode}
              placeholder={t("properties.create.license.dldBarcode")}
              className="mt-1 h-9 text-xs"
            />
            <FieldError message={errors?.dld_barcode?.message ? t(errors.dld_barcode.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="reference_listed" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.license.referenceListed")}
            </Label>
            <Input
              id="reference_listed"
              {...register("reference_listed")}
              error={!!errors?.reference_listed}
              aria-invalid={!!errors?.reference_listed}
              placeholder={t("properties.create.license.referenceListed")}
              className="mt-1 h-9 text-xs"
            />
            <FieldError message={errors?.reference_listed?.message ? t(errors.reference_listed.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="parking_spaces" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.license.parkingSpaces")}
            </Label>
            <Input
              id="parking_spaces"
              type="number"
              dir="ltr"
              {...register("parking_spaces", { valueAsNumber: true })}
              error={!!errors?.parking_spaces}
              aria-invalid={!!errors?.parking_spaces}
              placeholder={t("properties.create.license.parkingSpacesPlaceholder")}
              className="mt-1 h-9 text-xs"
            />
            <FieldError message={errors?.parking_spaces?.message ? t(errors.parking_spaces.message as string) : undefined} />
          </div>
        </div>
      </div>

      <SeoSection register={register} setValue={setValue} watch={watch} errors={errors} />
    </div>
  );
}
