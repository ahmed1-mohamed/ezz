"use client";

import { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from "react-hook-form";
import { ExpertFormData } from "./types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface ExpertBasicInfoFormProps {
  register: UseFormRegister<ExpertFormData>;
  errors: FieldErrors<ExpertFormData>;
  watch: UseFormWatch<ExpertFormData>;
  setValue: UseFormSetValue<ExpertFormData>;
  isSubmitted?: boolean;
  imagePreview: string | null;
  setImagePreview: (value: string | null) => void;
}

export function ExpertBasicInfoForm({
  register,
  errors,
  watch,
  setValue,
  isSubmitted = false,
  imagePreview,
  setImagePreview,
}: ExpertBasicInfoFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Allow picking the same file again.
    e.target.value = "";
    if (file) {
      setValue("image", file, { shouldValidate: true });
      if (!file.type.startsWith("image/")) {
        setImagePreview(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const imageValue = watch("image");
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt={t("experts.edit.form.imagePreviewAlt")}
              className="w-full h-full object-cover"
            />
          ) : (
            <Upload className="h-8 w-8 text-gray-400" />
          )}
        </div>
        <div className="flex-1">
          <div className="relative">
            <input
              type="file"
              id="image-upload"
              ref={fileInputRef}
              className="sr-only"
              accept="image/svg+xml,image/png,image/jpeg,image/jpg,image/gif"
              onChange={handleImageUpload}
              aria-invalid={!!errors.image || undefined}
            />
            <label
              htmlFor="image-upload"
              aria-invalid={!!errors.image || undefined}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              {t("experts.edit.form.chooseFile")}
            </label>
            <span className="ms-3 text-sm text-gray-500">
              {imageValue ? (imageValue as File).name : t("experts.edit.form.noFileChosen")}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {t("experts.edit.form.uploadSupportEdit")}
          </p>
          <FieldError message={errors.image?.message as string | undefined} />
        </div>
      </div>
      <div>
        <Label htmlFor="display_name" className="required">
          {t("experts.edit.form.displayName")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="display_name"
          placeholder={t("experts.edit.form.displayNamePlaceholder")}
          error={!!errors.display_name}
          aria-invalid={!!errors.display_name}
          {...register("display_name")}
          className="mt-1"
        />
        <FieldError message={errors.display_name?.message} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="required">
            {t("experts.edit.form.email")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            dir="ltr"
            placeholder={t("experts.edit.form.emailPlaceholder")}
            error={!!errors.email}
            aria-invalid={!!errors.email}
            {...register("email")}
            className="mt-1"
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <Label htmlFor="phone_number" className="required">
            {t("experts.edit.form.phoneNumber")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone_number"
            type="tel"
            dir="ltr"
            placeholder={t("experts.edit.form.phoneNumberPlaceholder")}
            error={!!errors.phone_number}
            aria-invalid={!!errors.phone_number}
            {...register("phone_number")}
            className="mt-1"
          />
          <FieldError message={errors.phone_number?.message} />
        </div>
      </div>
      <div>
        <Label htmlFor="bio" className="required">
          {t("experts.edit.form.bio")} <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="bio"
          placeholder={t("experts.edit.form.bioPlaceholder")}
          error={!!errors.bio}
          aria-invalid={!!errors.bio}
          {...register("bio")}
          className="mt-1"
          rows={4}
        />
        <FieldError message={errors.bio?.message} />
      </div>
    </div>
  );
}
