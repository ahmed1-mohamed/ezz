"use client";

import { UseFormRegister } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PropertiesInput } from "@/validators/propertiesSchema";
import { useLanguage } from "@/contexts/LanguageContext";

interface UnitLicenseSectionProps {
  register: UseFormRegister<PropertiesInput>;
}

export default function UnitLicenseSection({ register }: UnitLicenseSectionProps) {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{t("properties.create.license.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="broker_license">{t("properties.create.license.brokerLicense")}</Label>
          <Input
            id="broker_license"
            {...register("broker_license")}
            placeholder={t("properties.create.license.brokerLicense")}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="agent_license">{t("properties.create.license.agentLicense")}</Label>
          <Input
            id="agent_license"
            {...register("agent_license")}
            placeholder={t("properties.create.license.agentLicense")}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="dld_permit_number">{t("properties.create.license.dldPermitNumber")}</Label>
          <Input
            id="dld_permit_number"
            {...register("dld_permit_number")}
            placeholder={t("properties.create.license.dldPermitNumber")}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="dld_barcode">{t("properties.create.license.dldBarcode")}</Label>
          <Input
            id="dld_barcode"
            {...register("dld_barcode")}
            placeholder={t("properties.create.license.dldBarcode")}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="reference_listed">{t("properties.create.license.referenceListed")}</Label>
          <Input
            id="reference_listed"
            {...register("reference_listed")}
            placeholder={t("properties.create.license.referenceListed")}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="zone_name">{t("properties.create.license.zoneName")}</Label>
          <Input
            id="zone_name"
            {...register("zone_name")}
            placeholder={t("properties.create.license.zoneName")}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="parking_spaces">{t("properties.create.license.parkingSpaces")}</Label>
          <Input
            id="parking-spaces"
            type="number"
            {...register("parking_spaces", { valueAsNumber: true })}
            placeholder={t("properties.create.license.parkingSpaces")}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}
