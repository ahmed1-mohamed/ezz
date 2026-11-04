import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/form-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFormContext, Controller } from "react-hook-form";

interface LocationBasicInfoProps {
  cities: { label: string; value: string }[];
  areas: { label: string; value: string }[];
  loading: boolean;
}

export function LocationBasicInfo({
  cities,
  areas,
  loading,
}: LocationBasicInfoProps) {
  const { t } = useLanguage();
  const { register, control, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="location-name">
          {t("locations.form.locationName")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="location-name"
          placeholder={t("locations.form.locationNamePlaceholder")}
          {...register("locationName")}
          error={!!errors.locationName}
          aria-invalid={!!errors.locationName}
          className="mt-1"
        />
        <FieldError message={errors.locationName?.message as string | undefined} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">{t("locations.form.city")} <span className="text-red-500">*</span></Label>
          <Controller
            name="cityId"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger id="city" ref={field.ref} className="mt-1" error={!!errors.cityId} aria-invalid={!!errors.cityId}>
                  <SelectValue
                    placeholder={
                      loading ? t("locations.form.loadingCities") : t("locations.form.selectCity")
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.value} value={city.value}>
                      {city.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.cityId?.message as string | undefined} />
        </div>
        <div>
          <Label htmlFor="area">{t("locations.form.area")} <span className="text-red-500">*</span></Label>
          <Controller
            name="areaId"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger id="area" ref={field.ref} className="mt-1" error={!!errors.areaId} aria-invalid={!!errors.areaId}>
                  <SelectValue
                    placeholder={
                      loading ? t("locations.form.loadingAreas") : t("locations.form.selectArea")
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {areas.map((area) => (
                    <SelectItem key={area.value} value={area.value}>
                      {area.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.areaId?.message as string | undefined} />
        </div>
      </div>
    </div>
  );
}