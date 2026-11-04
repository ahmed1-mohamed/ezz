"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/form-message";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import type { CreateNewUserInput } from "@/validators/create-new-user.schema";
import { useCountriesSelect } from "@/hooks/use-countries-select";

interface DeveloperFieldsProps {
  selectedCountryId: number | undefined;
  setSelectedCountryId: (id: number) => void;
  developers: any[];
  developersLoading: boolean;
  developerRoleOptions: { label: string; value: string }[];
}

export function DeveloperFields({
  selectedCountryId,
  setSelectedCountryId,
  developers,
  developersLoading,
  developerRoleOptions,
}: DeveloperFieldsProps) {
  const { control, formState: { errors } } = useFormContext<CreateNewUserInput>();
  const { t } = useLanguage();
  // Fetched here (this section mounts only for developer users) rather than on modal open.
  const { countries, isLoading: countriesLoading } = useCountriesSelect();

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="country">
            {t("users.addModal.selectCountry")} <span className="text-red-500">*</span>
          </Label>
          <Select
            value={selectedCountryId?.toString() || ""}
            onValueChange={(value) => setSelectedCountryId(Number(value))}
          >
            <SelectTrigger
              className="mt-1"
              error={!selectedCountryId && !!errors.developer_id}
              aria-invalid={!selectedCountryId && !!errors.developer_id}
            >
              <SelectValue
                placeholder={
                  countriesLoading
                    ? t("users.addModal.loadingCountries")
                    : t("users.addModal.selectCountry")
                }
              />
            </SelectTrigger>
            <SelectContent className="max-h-60 overflow-y-auto">
              {countriesLoading && countries.length === 0 ? (
                <div className="p-2 text-sm text-gray-500 text-center">
                  {t("users.addModal.loadingCountries")}
                </div>
              ) : countries.length === 0 ? (
                <div className="p-2 text-sm text-gray-500 text-center">
                  {t("users.addModal.noCountries")}
                </div>
              ) : (
                countries.map((country: any) => (
                  <SelectItem
                    key={country.country_id}
                    value={country.country_id.toString()}
                  >
                    {country.country_name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          {/* The developer select appears only after a country is picked; show its error here until then. */}
          {!selectedCountryId && (
            <FieldError message={errors.developer_id?.message as string | undefined} />
          )}
        </div>
        {selectedCountryId && (
          <div>
            <Label htmlFor="developer">
              {t("users.addModal.selectDeveloper")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="developer_id"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value?.toString() || ""}
                  onValueChange={(value) => field.onChange(Number(value))}
                >
                  <SelectTrigger ref={field.ref} className="mt-1" error={!!errors.developer_id} aria-invalid={!!errors.developer_id}>
                    <SelectValue
                      placeholder={
                        developersLoading
                          ? t("users.addModal.loadingDevelopers")
                          : t("users.addModal.selectDeveloper")
                      }
                    />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    {developersLoading && developers.length === 0 ? (
                      <div className="p-2 text-sm text-gray-500 text-center">
                        {t("users.addModal.loadingDevelopers")}
                      </div>
                    ) : developers.length === 0 ? (
                      <div className="p-2 text-sm text-gray-500 text-center">
                        {t("users.addModal.noDevelopers")}
                      </div>
                    ) : (
                      developers.map(
                        (developer) => (
                          <SelectItem
                            key={developer.developer_id}
                            value={developer.developer_id.toString()}
                          >
                            {developer.developer_name}
                          </SelectItem>
                        ),
                      )
                    )}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.developer_id?.message as string | undefined} />
          </div>
        )}
      </div>
      {selectedCountryId && (
        <div>
          <Label htmlFor="developer_role">
            {t("users.addModal.developerRole")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="developer_role"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value || ""}
                onValueChange={field.onChange}
              >
                <SelectTrigger ref={field.ref} className="mt-1" error={!!errors.developer_role} aria-invalid={!!errors.developer_role}>
                  <SelectValue placeholder={t("users.addModal.selectDeveloperRole")} />
                </SelectTrigger>
                <SelectContent>
                  {developerRoleOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.developer_role?.message as string | undefined} />
        </div>
      )}
    </>
  );
}
