import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FieldError } from "@/components/ui/form-message";
import { Landmark, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFormContext } from "react-hook-form";

export function LocationAdditionalDetails() {
  const { t } = useLanguage();
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div>
        <Label htmlFor="landmark" className="flex items-center gap-2">
          <Landmark className="h-4 w-4" />
          {t("locations.form.landmark")}
        </Label>
        <Input
          id="landmark"
          placeholder={t("locations.form.landmarkPlaceholder")}
          {...register("landmark")}
          error={!!errors.landmark}
          aria-invalid={!!errors.landmark}
          className="mt-1"
        />
        <FieldError message={errors.landmark?.message as string | undefined} />
      </div>

      <div>
        <Label htmlFor="description" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          {t("locations.form.description")}
        </Label>
        <Textarea
          id="description"
          placeholder={t("locations.form.descriptionPlaceholder")}
          {...register("description")}
          error={!!errors.description}
          aria-invalid={!!errors.description}
          className="mt-1"
          rows={3}
        />
        <FieldError message={errors.description?.message as string | undefined} />
      </div>
    </>
  );
}
