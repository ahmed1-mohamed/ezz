import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface ProjectUnitsFormProps {
  form: UseFormReturn<CreateProjectInput>;
  dateValidationError: string | null;
}

export function ProjectUnitsForm({ form, dateValidationError }: ProjectUnitsFormProps) {
  const { register, formState: { errors } } = form;
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{t("projects.form.units.title")}</h2>
      <div className="space-y-4">
        <div id="error-total_units">
          <Label htmlFor="total-units">{t("projects.form.units.totalUnits")} <span className="text-red-500">*</span></Label>
          <Input id="total-units" type="number" placeholder="2555" className="mt-1" error={!!errors.total_units} {...register("total_units")} />
          <FieldError message={t(errors.total_units?.message || "")} className="text-sm" />
        </div>
        <div id="error-available_units">
          <Label htmlFor="available-units">{t("projects.form.units.availableUnits")} <span className="text-red-500">*</span></Label>
          <Input id="available-units" type="number" placeholder="45" className="mt-1" error={!!errors.available_units} {...register("available_units")} />
          <FieldError message={t(errors.available_units?.message || "")} className="text-sm" />
        </div>
        <div id="error-launch_date">
          <Label htmlFor="launch-date">{t("projects.form.units.launchDate")} <span className="text-red-500">*</span></Label>
          <Input id="launch-date" type="date" placeholder="mm/dd/yyyy" className="mt-1" error={!!errors.launch_date} {...register("launch_date")} />
          <FieldError message={t(errors.launch_date?.message || "")} className="text-sm" />
        </div>
        <div id="error-completion_date">
          <Label htmlFor="completion-date">{t("projects.form.units.completionDate")}</Label>
          <Input id="completion-date" type="date" placeholder="mm/dd/yyyy" className="mt-1" error={!!errors.completion_date || !!dateValidationError} {...register("completion_date")} />
          <FieldError message={t(errors.completion_date?.message || "")} className="text-sm" />
          <FieldError message={dateValidationError ? t(dateValidationError) : undefined} className="text-sm" />
        </div>
      </div>
    </div>
  );
}
