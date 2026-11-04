"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/form-message";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { CreateNewUserInput } from "@/validators/create-new-user.schema";
import { useState, useEffect, useRef } from "react";

interface BasicInfoFieldsProps {
  roles: any[];
  rolesLoading: boolean;
  onRoleChange: (roleId: number) => void;
  onUserTypeChange?: (userType: string) => void;
}

export function BasicInfoFields({ roles, rolesLoading, onRoleChange, onUserTypeChange }: BasicInfoFieldsProps) {
  const { register, control, formState: { errors }, setValue, watch } = useFormContext<CreateNewUserInput>();
  const { t } = useLanguage();
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const profilePicture = watch("profile_picture");

  useEffect(() => {
    if (!profilePicture) {
      setPreview(null);
      return;
    }

    if (typeof profilePicture === "string" && profilePicture.trim() !== "") {
      setPreview(profilePicture);
      return;
    }

    let file: Blob | null = null;
    const p = profilePicture;
    if (p) {
      if (p instanceof File || p instanceof Blob) {
        file = p;
      } else if (typeof p === "object" && "size" in p && "type" in p) {
        file = p as unknown as Blob;
      } else if (p instanceof FileList && p.length > 0) {
        file = p[0];
      } else if (Array.isArray(p) && p.length > 0 && typeof p[0] === "object" && "size" in p[0]) {
        file = p[0] as unknown as Blob;
      }
    }

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    } else {
      setPreview(null);
    }
  }, [profilePicture]);

  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center p-4 border border-dashed rounded-xl bg-gray-55/50 border-gray-200 dark:border-neutral-800 dark:bg-neutral-900/50 mb-4">
        <Label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1 self-start">
          {t("experts.settings.imagePicker.label")}
        </Label>
        <div className="flex items-center gap-4 w-full">
          <div className="w-16 h-16 rounded-xl border border-gray-100 dark:border-neutral-800 overflow-hidden bg-gray-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
            {preview ? (
              <img
                src={preview}
                alt={t("users.addModal.photoPreviewAlt")}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-teal-600 dark:text-teal-400 font-bold text-xl">U</span>
            )}
          </div>
          <div className="flex flex-col gap-1 flex-1 w-full">
            <Controller
              name="profile_picture"
              control={control}
              render={({ field }) => (
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      field.onChange(files[0]);
                    }
                    // Allow choosing the same file again after removing it.
                    e.target.value = "";
                  }}
                />
              )}
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                aria-invalid={!!errors.profile_picture || undefined}
                className="px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg dark:bg-teal-950/30 dark:text-teal-400 dark:hover:bg-teal-950/50 border border-teal-200/50 dark:border-teal-900/50 transition-colors"
              >
                {t("experts.settings.imagePicker.choose")}
              </button>
              {preview && (
                <button
                  type="button"
                  onClick={() => setValue("profile_picture", "", { shouldValidate: true })}
                  className="px-4 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50 border border-red-200/50 dark:border-red-900/50 transition-colors"
                >
                  {t("common.delete")}
                </button>
              )}
            </div>
            <p className="text-[10px] text-gray-400">
              {t("experts.settings.imagePicker.formats")}
            </p>
            <FieldError message={errors.profile_picture?.message as string | undefined} className="mt-0" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first-name">
            {t("users.addModal.firstName")} <span className="text-red-500">*</span>
          </Label>
          <div className="relative mt-1">
            <User className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="first-name"
              placeholder={t("users.addModal.firstNamePlaceholder")}
              {...register("first_name")}
              className="ps-10"
              error={!!errors.first_name}
              aria-invalid={!!errors.first_name}
            />
          </div>
          <FieldError message={errors.first_name?.message as string | undefined} />
        </div>
        <div>
          <Label htmlFor="last-name">
            {t("users.addModal.lastName")} <span className="text-red-500">*</span>
          </Label>
          <div className="relative mt-1">
            <User className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="last-name"
              placeholder={t("users.addModal.lastNamePlaceholder")}
              {...register("last_name")}
              className="ps-10"
              error={!!errors.last_name}
              aria-invalid={!!errors.last_name}
            />
          </div>
          <FieldError message={errors.last_name?.message as string | undefined} />
        </div>
      </div>
      <div>
        <Label htmlFor="email">
          {t("users.addModal.email")} <span className="text-red-500">*</span>
        </Label>
        <div className="relative mt-1">
          <Mail className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            dir="ltr"
            placeholder={t("users.addModal.emailPlaceholder")}
            {...register("email")}
            className="ps-10"
            error={!!errors.email}
            aria-invalid={!!errors.email}
          />
        </div>
        <FieldError message={errors.email?.message as string | undefined} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone-number">{t("users.addModal.phoneNumber")}</Label>
          <div className="relative mt-1">
            <Phone className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="phone-number"
              type="tel"
              dir="ltr"
              placeholder={t("users.addModal.phoneNumberPlaceholder")}
              {...register("phone_number", {
                onChange: (e) => {
                  let val = e.target.value;
                  if (!val.startsWith("+")) {
                    val = "+" + val.replace(/\+/g, "");
                  } else {
                    val = "+" + val.slice(1).replace(/\+/g, "");
                  }
                  setValue("phone_number", val, { shouldValidate: !!errors.phone_number });
                }
              })}
              className="ps-10"
              error={!!errors.phone_number}
              aria-invalid={!!errors.phone_number}
            />
          </div>
          <FieldError message={errors.phone_number?.message as string | undefined} />
        </div>
        <div>
          <Label htmlFor="user-type">
            {t("users.addModal.userType")}
          </Label>
          <Controller
            name="user_type"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value || ""}
                onValueChange={(val) => {
                  field.onChange(val);
                  if (onUserTypeChange) onUserTypeChange(val);
                }}
              >
                <SelectTrigger className="mt-1" error={!!errors.user_type} aria-invalid={!!errors.user_type}>
                  <SelectValue placeholder={t("users.addModal.selectUserType")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">{t("users.filters.types.admin")}</SelectItem>
                  <SelectItem value="developer">{t("users.filters.types.developer")}</SelectItem>
                  <SelectItem value="expert">{t("users.filters.types.expert")}</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.user_type?.message as string | undefined} />
        </div>
      </div>
      <div>
        <Label htmlFor="role">
          {t("users.addModal.role")} <span className="text-red-500">*</span>
        </Label>
        <Controller
          name="role_id"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value?.toString() || ""}
              onValueChange={(value) => onRoleChange(Number(value))}
            >
              <SelectTrigger ref={field.ref} className="mt-1" error={!!errors.role_id} aria-invalid={!!errors.role_id}>
                <SelectValue
                  placeholder={
                    rolesLoading ? t("users.addModal.loadingRoles") : t("users.addModal.selectRole")
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {(roles as any[])
                  .filter((role: any) => {
                    const name = String(role.role_name ?? role.name ?? "").toLowerCase();
                    const type = String(role.role_type ?? role.type ?? "").toLowerCase();
                    return (
                      name.includes("admin") ||
                      name.includes("developer") ||
                      name.includes("expert") ||
                      type.includes("admin") ||
                      type.includes("developer") ||
                      type.includes("expert")
                    );
                  })
                  .map((role: any) => {
                    const rId = role.role_id ?? role.id;
                    const rName = role.role_name ?? role.name;
                    return (
                      <SelectItem
                        key={rId}
                        value={String(rId)}
                      >
                        {rName}
                      </SelectItem>
                    );
                  })}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.role_id?.message as string | undefined} />
      </div>
    </>
  );
}
