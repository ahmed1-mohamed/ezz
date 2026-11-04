import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/form-message";
import { Navigation } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFormContext } from "react-hook-form";

const BOUNDARY_FIELDS = [
  { name: "northSide", id: "north-side", label: "locations.form.northSide", placeholder: "locations.form.boundaryExamples.north" },
  { name: "southSide", id: "south-side", label: "locations.form.southSide", placeholder: "locations.form.boundaryExamples.south" },
  { name: "eastSide", id: "east-side", label: "locations.form.eastSide", placeholder: "locations.form.boundaryExamples.east" },
  { name: "westSide", id: "west-side", label: "locations.form.westSide", placeholder: "locations.form.boundaryExamples.west" },
] as const;

export function LocationBoundaries() {
  const { t } = useLanguage();
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="border-t pt-4">
      <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Navigation className="h-4 w-4" />
        {t("locations.form.boundaries")}
      </h4>
      <div className="grid grid-cols-2 gap-4">
        {BOUNDARY_FIELDS.map(({ name, id, label, placeholder }) => (
          <div key={name}>
            <Label htmlFor={id}>{t(label)}</Label>
            <Input
              id={id}
              placeholder={t(placeholder)}
              {...register(name)}
              error={!!errors[name]}
              aria-invalid={!!errors[name]}
              className="mt-1"
            />
            <FieldError message={errors[name]?.message as string | undefined} />
          </div>
        ))}
      </div>
    </div>
  );
}
