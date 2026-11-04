import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { FileText } from "lucide-react";
import { RichTextEditor } from "@/components/ui";
import { useFormContext, useWatch } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

export function ContentFeaturesSection() {
  const { t } = useLanguage();
  const { register, setValue, clearErrors, control, formState: { errors } } = useFormContext();

  const description = useWatch({ control, name: "description" });
  const handover = useWatch({ control, name: "handover" });
  const developer = useWatch({ control, name: "developer" });
  const price = useWatch({ control, name: "price" });
  const rate = useWatch({ control, name: "rate" });

  const badges = [
    { name: "handover", label: t("ads.createStepTwo.badgeHandover"), value: handover },
    { name: "developer", label: t("ads.createStepTwo.badgeDeveloper"), value: developer },
    { name: "price", label: t("ads.createStepTwo.badgePrice"), value: price },
    { name: "rate", label: t("ads.createStepTwo.badgeRating"), value: rate },
  ];

  return (
    <div className="bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
        <FileText className="h-4 w-4 text-teal-600 dark:text-teal-400" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
          {t("ads.createStepTwo.adCopyAndFeatures")}
        </h3>
      </div>

      {/* Short Description */}
      <div>
        <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
          {t("ads.createStepTwo.shortDescription")}{" "}
          <span className="text-red-500">*</span>
        </Label>
        <RichTextEditor
          content={description || ""}
          error={!!errors.description}
          onChange={(content) => {
            setValue("description", content, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
            if (content.replace(/<[^>]*>/g, '').trim()) {
              clearErrors("description");
            }
          }}
        />
        <FieldError
          message={errors.description ? String(errors.description.message || t("ads.createStepTwo.descriptionRequired")) : undefined}
        />
      </div>

      {/* Display Badges */}
      <div>
        <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">
          {t("ads.createStepTwo.displayBadges")}
        </Label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {badges.map((item) => (
            <label
              key={item.name}
              className="flex items-center justify-between p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 cursor-pointer hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <span className="text-xs text-neutral-700 dark:text-neutral-300">{item.label}</span>
              <Switch
                checked={Boolean(item.value)}
                onCheckedChange={(checked) => setValue(item.name as any, checked, { shouldDirty: true })}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Call to Action Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        <div>
          <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {t("ads.createStepTwo.ctaButtonLabel")}
          </Label>
          <Input
            placeholder={t("ads.createStepTwo.ctaButtonPlaceholder")}
            {...register("ctaButtonText")}
            className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm"
          />
        </div>
        <div>
          <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {t("ads.createStepTwo.ctaTargetUrl")}
          </Label>
          <Input
            placeholder={t("ads.createStepTwo.ctaUrlPlaceholder")}
            dir="ltr"
            {...register("ctaUrl")}
            error={!!errors.ctaUrl}
            className={`bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.ctaUrl ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`}
          />
          <FieldError
            message={errors.ctaUrl ? String(errors.ctaUrl.message || t("ads.createStepTwo.ctaUrlInvalid")) : undefined}
          />
        </div>
      </div>
    </div>
  );
}
