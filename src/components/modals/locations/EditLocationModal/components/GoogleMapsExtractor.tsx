import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/form-message";
import { MapPin, Search, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFormContext } from "react-hook-form";

interface GoogleMapsExtractorProps {
  onExtract: () => void;
  isExtracting: boolean;
}

export function GoogleMapsExtractor({
  onExtract,
  isExtracting,
}: GoogleMapsExtractorProps) {
  const { t } = useLanguage();
  const { register, watch, formState: { errors } } = useFormContext();

  const googleMapLink = watch("googleMapLink");

  return (
    <div>
      <Label htmlFor="google-map-link">
        {t("locations.form.googleMapLink")} <span className="text-red-500">*</span>
      </Label>
      <div className="flex gap-2 mt-1">
        <div className="relative flex-1">
          <MapPin className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="google-map-link"
            type="url"
            dir="ltr"
            placeholder={t("locations.form.googleMapLinkPlaceholder")}
            {...register("googleMapLink")}
            error={!!errors.googleMapLink}
            aria-invalid={!!errors.googleMapLink}
            className="ps-10"
          />
        </div>
        <Button
          type="button"
          onClick={onExtract}
          disabled={!googleMapLink?.trim() || isExtracting}
          className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
        >
          {isExtracting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Search className="h-4 w-4 me-2" />
              {t("locations.form.extract")}
            </>
          )}
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        {t("locations.form.extractHint")}
      </p>
      <FieldError message={errors.googleMapLink?.message as string | undefined} />
    </div>
  );
}
