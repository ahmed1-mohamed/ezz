"use client";

import { UseFormRegister, FieldErrors, UseFormSetValue, Control, Controller } from "react-hook-form";
import { ExpertFormData, Certifications } from "./types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface ExpertProfessionalFormProps {
  register: UseFormRegister<ExpertFormData>;
  control: Control<ExpertFormData>;
  errors: FieldErrors<ExpertFormData>;
  setValue: UseFormSetValue<ExpertFormData>;
  isSubmitted?: boolean;
  categories: Array<{ category_id: number; name: string }>;
  languages: Array<{ language_id: number; name: string }>;
  countries: Array<{ id: number; name: string }>;
  selectedCategories: number[];
  setSelectedCategories: (val: number[]) => void;
  selectedLanguages: number[];
  setSelectedLanguages: (val: number[]) => void;
  selectedCountries: number[];
  setSelectedCountries: (val: number[]) => void;
  certifications: Certifications[];
  setCertifications: React.Dispatch<React.SetStateAction<Certifications[]>>;
}

export function ExpertProfessionalForm({
  register,
  control,
  errors,
  setValue,
  isSubmitted = false,
  categories,
  languages,
  countries,
  selectedCategories,
  setSelectedCategories,
  selectedLanguages,
  setSelectedLanguages,
  selectedCountries,
  setSelectedCountries,
  certifications,
  setCertifications,
}: ExpertProfessionalFormProps) {
  const { t } = useLanguage();

  const addCertification = () => {
    setCertifications([...certifications, { cert_name: "" }]);
  };
  const removeCertification = (index: number) => {
    if (certifications.length > 1) {
      setCertifications(certifications.filter((_, i) => i !== index));
    }
  };
  const updateCertification = (index: number, value: string) => {
    const updated = [...certifications];
    updated[index] = { ...updated[index], cert_name: value };
    setCertifications(updated);
  };
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="years_experience" className="required">
          {t("experts.edit.form.yearsExperience")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="years_experience"
          type="number"
          min="0"
          step="1"
          inputMode="numeric"
          dir="ltr"
          placeholder={t("experts.edit.form.yearsExperiencePlaceholder")}
          error={!!errors.years_experience}
          aria-invalid={!!errors.years_experience}
          {...register("years_experience", { valueAsNumber: true })}
          className="mt-1"
        />
        <FieldError message={errors.years_experience?.message} />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="certifications">
            {t("experts.edit.form.certifications")}
          </Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addCertification}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            {t("experts.edit.form.addCertification")}
          </Button>
        </div>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div key={index}>
            <div className="flex items-center gap-2">
              <Input
                placeholder={t("experts.edit.form.certificationsPlaceholder")}
                value={cert.cert_name}
                onChange={(e) => updateCertification(index, e.target.value)}
                className="flex-1"
                error={!!errors.certifications?.[index]?.cert_name}
                aria-invalid={!!errors.certifications?.[index]?.cert_name}
              />
              {certifications.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeCertification(index)}
                  className="h-10 w-10 text-gray-500 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <FieldError message={errors.certifications?.[index]?.cert_name?.message} />
            </div>
          ))}
        </div>
        <FieldError message={errors.certifications?.message} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="website">
            {t("experts.edit.form.website")}
          </Label>
          <Input
            id="website"
            type="url"
            dir="ltr"
            placeholder={t("experts.edit.form.websitePlaceholder")}
            error={!!errors.website}
            aria-invalid={!!errors.website}
            {...register("website")}
            className="mt-1"
          />
          <FieldError message={errors.website?.message} />
        </div>
        <div>
          <Label htmlFor="linkedin">
            {t("experts.edit.form.linkedin")}
          </Label>
          <Input
            id="linkedin"
            type="url"
            dir="ltr"
            placeholder={t("experts.edit.form.linkedinPlaceholder")}
            error={!!errors.linkedin}
            aria-invalid={!!errors.linkedin}
            {...register("linkedin")}
            className="mt-1"
          />
          <FieldError message={errors.linkedin?.message} />
        </div>
      </div>
      <div>
        <Label htmlFor="categories" className="required">
          {t("experts.columns.specializations")} <span className="text-red-500">*</span>
        </Label>
        <Controller
          name="categories"
          control={control}
          render={() => (
            <Select
              onValueChange={(value) => {
                const catId = parseInt(value);
                if (!isNaN(catId)) {
                  const newCategories = selectedCategories.includes(catId)
                    ? selectedCategories.filter((id: number) => id !== catId)
                    : [...selectedCategories, catId];
                  setSelectedCategories(newCategories);
                  setValue("categories", newCategories, { shouldValidate: isSubmitted });
                }
              }}
            >
              <SelectTrigger className="mt-1" error={!!errors.categories} aria-invalid={!!errors.categories}>
                <SelectValue placeholder={t("experts.edit.form.selectCategories")} />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem
                    key={cat.category_id}
                    value={cat.category_id.toString()}
                    className={selectedCategories.includes(cat.category_id) ? "bg-teal-50" : ""}
                  >
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {selectedCategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedCategories.map((specId) => {
              const spec = categories.find((c) => c.category_id === specId);
              return spec ? (
                <span
                  key={specId}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full"
                >
                  {spec.name}
                  <button
                    type="button"
                    onClick={() => {
                      const newSpecs = selectedCategories.filter((id) => id !== specId);
                      setSelectedCategories(newSpecs);
                      setValue("categories", newSpecs, { shouldValidate: isSubmitted });
                    }}
                    className="hover:text-teal-600"
                    aria-label={t("experts.edit.form.removeCategory")}
                    title={t("experts.edit.form.removeCategory")}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ) : null;
            })}
          </div>
        )}
        <FieldError message={errors.categories?.message} />
      </div>
      <div>
        <Label htmlFor="languages" className="required">
          {t("experts.edit.form.languages")} <span className="text-red-500">*</span>
        </Label>
        <Controller
          name="languages"
          control={control}
          render={() => (
            <Select
              onValueChange={(value) => {
                const langId = parseInt(value);
                if (!isNaN(langId)) {
                  const newLanguages = selectedLanguages.includes(langId)
                    ? selectedLanguages.filter((id) => id !== langId)
                    : [...selectedLanguages, langId];
                  setSelectedLanguages(newLanguages);
                  setValue("languages", newLanguages, { shouldValidate: isSubmitted });
                }
              }}
            >
              <SelectTrigger className="mt-1" error={!!errors.languages} aria-invalid={!!errors.languages}>
                <SelectValue placeholder={t("experts.edit.form.selectLanguages")} />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem
                    key={lang.language_id}
                    value={lang.language_id.toString()}
                    className={selectedLanguages.includes(lang.language_id) ? "bg-teal-50" : ""}
                  >
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {selectedLanguages.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedLanguages.map((langId) => {
              const lang = languages.find((l) => l.language_id === langId);
              return lang ? (
                <span
                  key={langId}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full"
                >
                  {lang.name}
                  <button
                    type="button"
                    onClick={() => {
                      const newLanguages = selectedLanguages.filter((id) => id !== langId);
                      setSelectedLanguages(newLanguages);
                      setValue("languages", newLanguages, { shouldValidate: isSubmitted });
                    }}
                    className="hover:text-teal-600"
                    aria-label={t("experts.edit.form.removeLanguage")}
                    title={t("experts.edit.form.removeLanguage")}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ) : null;
            })}
          </div>
        )}
        <FieldError message={errors.languages?.message} />
      </div>
      <div>
        <Label htmlFor="countries" className="required">
          {t("experts.edit.form.countries")} <span className="text-red-500">*</span>
        </Label>
        <Controller
          name="countries"
          control={control}
          render={() => (
            <Select
              onValueChange={(value) => {
                const countryId = parseInt(value);
                if (!isNaN(countryId)) {
                  const newServiceAreas = selectedCountries.includes(countryId)
                    ? selectedCountries.filter((id) => id !== countryId)
                    : [...selectedCountries, countryId];
                  setSelectedCountries(newServiceAreas);
                  setValue("countries", newServiceAreas, { shouldValidate: isSubmitted });
                }
              }}
            >
              <SelectTrigger className="mt-1" error={!!errors.countries} aria-invalid={!!errors.countries}>
                <SelectValue placeholder={t("experts.edit.form.selectCountries")} />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem
                    key={country.id}
                    value={country.id.toString()}
                    className={selectedCountries.includes(country.id) ? "bg-teal-50" : ""}
                  >
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {selectedCountries.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedCountries.map((areaId) => {
              const area = countries.find((c) => c.id === areaId);
              return area ? (
                <span
                  key={areaId}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full"
                >
                  {area.name}
                  <button
                    type="button"
                    onClick={() => {
                      const newAreas = selectedCountries.filter((id) => id !== areaId);
                      setSelectedCountries(newAreas);
                      setValue("countries", newAreas, { shouldValidate: isSubmitted });
                    }}
                    className="hover:text-teal-600"
                    aria-label={t("experts.edit.form.removeCountry")}
                    title={t("experts.edit.form.removeCountry")}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ) : null;
            })}
          </div>
        )}
        <FieldError message={errors.countries?.message} />
      </div>
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <Label htmlFor="podcast" className="font-medium">
            {t("experts.edit.form.podcast")}
          </Label>
          <p className="text-sm text-gray-500">
            {t("experts.edit.form.podcastDescription")}
          </p>
        </div>
        <Controller
          name="podcast"
          control={control}
          render={({ field }) => (
            <Switch
              id="podcast"
              checked={field.value}
              onCheckedChange={field.onChange}
              className="data-[state=checked]:bg-teal-600"
            />
          )}
        />
      </div>
    </div>
  );
}
