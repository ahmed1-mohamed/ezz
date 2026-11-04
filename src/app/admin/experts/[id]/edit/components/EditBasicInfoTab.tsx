"use client";

import React, { useRef } from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  Control,
  FieldErrors,
  Controller,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, ChevronRight, Loader2, Save, User, Mic, Wallet, Image as ImageIcon } from "lucide-react";
import { ExpertFormValues } from "./types";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface EditBasicInfoTabProps {
  expert?: any;
  register: UseFormRegister<ExpertFormValues>;
  setValue: UseFormSetValue<ExpertFormValues>;
  watch: UseFormWatch<ExpertFormValues>;
  control: Control<ExpertFormValues>;
  errors: FieldErrors<ExpertFormValues>;
  existingImage: string | null;
  imagePreview: string | null;
  setImagePreview: (preview: string | null) => void;
  isSubmitting: boolean;
  onCancel: () => void;
  onNext: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function EditBasicInfoTab({
  expert,
  register,
  setValue,
  watch,
  control,
  errors,
  existingImage,
  imagePreview,
  setImagePreview,
  isSubmitting,
  onCancel,
  onNext,
  onSubmit,
}: EditBasicInfoTabProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldDirty: true, shouldValidate: true });
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const statusOptions = [
    { value: "approved", label: t("experts.filters.approved") },
    { value: "pending", label: t("experts.filters.pending") },
    { value: "rejected", label: t("experts.filters.rejected") },
  ];

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      {/* Profile Photo Card */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3 flex items-center gap-2">
          <User className="h-4 w-4 text-[#008081]" />
          {t("experts.edit.form.photo")}
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-neutral-800 border-2 border-dashed border-gray-300 dark:border-neutral-700 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xs relative">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt={t("experts.edit.form.profileAlt")}
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="h-10 w-10 text-gray-400 dark:text-gray-500" />
            )}
          </div>

          <div className="space-y-2 flex-1">
            <input
              type="file"
              id="expert-image-upload"
              ref={fileInputRef}
              className="sr-only"
              accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
              onChange={handleFileChange}
            />
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                aria-invalid={!!errors.image || undefined}
                onClick={() => fileInputRef.current?.click()}
                className="gap-2 dark:border-neutral-700 dark:text-gray-200"
              >
                <Upload className="h-4 w-4" />
                {t("experts.edit.form.chooseFile")}
              </Button>
              {imagePreview && imagePreview !== existingImage && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setValue("image", null, { shouldDirty: true, shouldValidate: true });
                    setImagePreview(existingImage);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 text-xs"
                >
                  {t("experts.edit.form.revert")}
                </Button>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("experts.edit.form.uploadSupportEdit")}
            </p>
            <FieldError message={errors.image?.message as string | undefined} />
          </div>
        </div>
      </div>

      {/* Cover Photo Card (Read Only) */}
      {expert?.cover_photo && (
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3 flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-[#008081]" />
            {t("experts.edit.form.coverPhoto")} ({t("common.readOnly")})
          </h2>
          <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden relative border border-gray-200">
            <img 
              src={expert.cover_photo} 
              alt={t("experts.details.coverAlt")}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Basic Information Card */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3 flex items-center gap-2">
          <User className="h-4 w-4 text-[#008081]" />
          {t("experts.edit.basicInfo")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="edit-display-name" className="required">
              {t("experts.edit.form.displayName")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="edit-display-name"
              placeholder={
                t("experts.edit.form.displayNamePlaceholder")
              }
              {...register("display_name", {
                required:
                  t("experts.edit.form.validation.nameRequired"),
              })}
              className="mt-1.5 dark:bg-neutral-800 dark:border-neutral-700"
              error={!!errors.display_name}
              aria-invalid={!!errors.display_name}
            />
            <FieldError message={errors.display_name?.message} />
          </div>

          <div>
            <Label htmlFor="edit-title">
              {t("experts.edit.form.title")}
            </Label>
            <Input
              id="edit-title"
              placeholder={
                t("experts.edit.form.titlePlaceholder")
              }
              {...register("title")}
              className="mt-1.5 dark:bg-neutral-800 dark:border-neutral-700"
              error={!!errors.title}
              aria-invalid={!!errors.title}
            />
            <FieldError message={errors.title?.message} />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="edit-email">
                {t("experts.edit.form.email")}
              </Label>
              <span className="text-[11px] font-medium text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-2 py-0.5 rounded-full">
                {t("experts.edit.form.accountLinked")}
              </span>
            </div>
            <Input
              id="edit-email"
              type="email"
              dir="ltr"
              placeholder={t("experts.edit.form.emailPlaceholder")}
              {...register("email")}
              disabled
              className="mt-1.5 bg-gray-50 dark:bg-neutral-800/60 dark:border-neutral-700 text-gray-700 dark:text-gray-300 cursor-not-allowed opacity-90"
            />
            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
              {t("experts.edit.form.emailNote")}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="edit-phone">
                {t("experts.edit.form.phoneNumber")}
              </Label>
              <span className="text-[11px] font-medium text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-2 py-0.5 rounded-full">
                {t("experts.edit.form.accountLinked")}
              </span>
            </div>
            <Input
              id="edit-phone"
              dir="ltr"
              placeholder={t("experts.edit.form.phoneNumberPlaceholder")}
              {...register("phone_number")}
              disabled
              className="mt-1.5 bg-gray-50 dark:bg-neutral-800/60 dark:border-neutral-700 text-gray-700 dark:text-gray-300 cursor-not-allowed opacity-90"
            />
            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
              {t("experts.edit.form.phoneNote")}
            </p>
          </div>

          <div>
            <Label htmlFor="edit-status">
              {t("experts.edit.form.status")}
            </Label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value || "approved"}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    className="mt-1.5 bg-white dark:bg-neutral-800 dark:border-neutral-700"
                    error={!!errors.status}
                    aria-invalid={!!errors.status}
                  >
                    <SelectValue
                      placeholder={
                        t("experts.edit.form.selectStatus")
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors.status?.message} />
          </div>

          <div className="flex flex-col justify-center">
            <Label htmlFor="edit-podcast" className="mb-2">
              {t("experts.edit.form.podcast")}
            </Label>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800/60 rounded-lg border border-gray-200 dark:border-neutral-700/60">
              <Controller
                name="podcast"
                control={control}
                render={({ field }) => (
                  <Switch
                    id="edit-podcast"
                    checked={!!field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-[#008081]"
                  />
                )}
              />
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-[#008081]" />
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  {t("experts.edit.form.podcastDescription")}
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="edit-bio" className="required">
              {t("experts.edit.form.bio")}{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="edit-bio"
              rows={4}
              placeholder={
                t("experts.edit.form.bioPlaceholder")
              }
              {...register("bio", {
                required:
                  t("experts.edit.form.validation.bioRequired"),
              })}
              className="mt-1.5 dark:bg-neutral-800 dark:border-neutral-700"
              error={!!errors.bio}
              aria-invalid={!!errors.bio}
            />
            <FieldError message={errors.bio?.message} />
          </div>
        </div>
      </div>

      {/* Wallet Information Card (Read Only) */}
      {expert?.wallet && (
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-5 shadow-xs">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-neutral-800 pb-3 flex items-center gap-2">
            <Wallet className="h-4 w-4 text-[#008081]" />
            {t("experts.details.walletBalance")} ({t("common.readOnly")})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border border-gray-200 dark:border-neutral-700">
              <span className="text-sm text-gray-500 mb-1">{t("experts.details.walletBalance")}</span>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {(expert.wallet.balance_cents / 100).toFixed(2)} {expert.currency || "AED"}
              </span>
            </div>
            <div className="flex flex-col bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border border-gray-200 dark:border-neutral-700">
              <span className="text-sm text-gray-500 mb-1">{t("experts.details.pendingBalance")}</span>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {(expert.wallet.pending_cents / 100).toFixed(2)} {expert.currency || "AED"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Actions */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-200 dark:border-neutral-800">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
          className="dark:border-neutral-700 dark:text-gray-200"
        >
          {t("experts.edit.buttons.cancel")}
        </Button>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onNext}
            className="gap-2 dark:border-neutral-700 dark:text-gray-200"
          >
            {t("experts.edit.buttons.next")}
            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#008081] hover:bg-[#006666] text-white gap-2 shadow-2xs font-medium px-5"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("experts.messages.updating")}
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                {t("experts.edit.buttons.updateExpert")}
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
