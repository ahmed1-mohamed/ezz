import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/form-message";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFormContext } from "react-hook-form";

export function LocationCoordinates() {
  const { t } = useLanguage();
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="latitude">{t("locations.form.latitude")}</Label>
        <Input
          id="latitude"
          inputMode="decimal"
          dir="ltr"
          placeholder={t("locations.form.latitudePlaceholder")}
          {...register("latitude")}
          error={!!errors.latitude}
          aria-invalid={!!errors.latitude}
          className="mt-1"
        />
        <FieldError message={errors.latitude?.message as string | undefined} />
      </div>
      <div>
        <Label htmlFor="longitude">{t("locations.form.longitude")}</Label>
        <Input
          id="longitude"
          inputMode="decimal"
          dir="ltr"
          placeholder={t("locations.form.longitudePlaceholder")}
          {...register("longitude")}
          error={!!errors.longitude}
          aria-invalid={!!errors.longitude}
          className="mt-1"
        />
        <FieldError message={errors.longitude?.message as string | undefined} />
      </div>
    </div>
  );
}
