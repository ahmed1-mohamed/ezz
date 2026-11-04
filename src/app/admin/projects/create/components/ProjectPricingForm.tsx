import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface ProjectPricingFormProps {
  form: UseFormReturn<CreateProjectInput>;
}

export function ProjectPricingForm({ form }: ProjectPricingFormProps) {
  const { register, watch, setValue, formState: { errors } } = form;
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{t("projects.form.pricing.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div id="error-currency">
          <Label htmlFor="currency">{t("projects.form.pricing.currency")}</Label>
          <Select value={watch("currency") || ""} onValueChange={(value) => setValue("currency", value)}>
            <SelectTrigger className="mt-1" error={!!errors.currency}><SelectValue placeholder={t("projects.form.pricing.selectCurrency")} /></SelectTrigger>
            <SelectContent>
              <SelectItem value="AED">{t("projects.form.pricing.aed")}</SelectItem>
              <SelectItem value="USD">{t("projects.form.pricing.usd")}</SelectItem>
              <SelectItem value="EGP">{t("projects.form.pricing.egp")}</SelectItem>
            </SelectContent>
          </Select>
          <FieldError message={t(errors.currency?.message || "")} className="text-sm" />
        </div>
        <div id="error-min_price">
          <Label htmlFor="min-price">{t("projects.form.pricing.minPrice")} <span className="text-red-500">*</span></Label>
          <Input id="min-price" type="number" placeholder="500000" className="mt-1" error={!!errors.min_price} {...register("min_price")} />
          <FieldError message={t(errors.min_price?.message || "")} className="text-sm" />
        </div>
        <div id="error-max_price">
          <Label htmlFor="max-price">{t("projects.form.pricing.maxPrice")} <span className="text-red-500">*</span></Label>
          <Input id="max-price" type="number" placeholder="1000000" className="mt-1" error={!!errors.max_price} {...register("max_price")} />
          <FieldError message={t(errors.max_price?.message || "")} className="text-sm" />
        </div>
        <div id="error-price_sq_min">
          <Label htmlFor="price-per-min">{t("projects.form.pricing.pricePerSqMin")} <span className="text-red-500">*</span></Label>
          <Input id="price-per-min" type="number" placeholder="500" className="mt-1" error={!!errors.price_sq_min} {...register("price_sq_min")} />
          <FieldError message={t(errors.price_sq_min?.message || "")} className="text-sm" />
        </div>
        <div id="error-price_sq_max">
          <Label htmlFor="price-per-max">{t("projects.form.pricing.pricePerSqMax")} <span className="text-red-500">*</span></Label>
          <Input id="price-per-max" type="number" placeholder="1000" className="mt-1" error={!!errors.price_sq_max} {...register("price_sq_max")} />
          <FieldError message={t(errors.price_sq_max?.message || "")} className="text-sm" />
        </div>
        <div id="error-project_size">
          <Label htmlFor="project-area">{t("projects.form.pricing.projectArea")} <span className="text-red-500">*</span></Label>
          <Input id="project-area" type="number" placeholder="5000" className="mt-1" error={!!errors.project_size} {...register("project_size")} />
          <FieldError message={t(errors.project_size?.message || "")} className="text-sm" />
        </div>
      </div>
    </div>
  );
}
