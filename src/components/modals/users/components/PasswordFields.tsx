"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/form-message";
import { Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { CreateNewUserInput } from "@/validators/create-new-user.schema";

export function PasswordFields() {
  const { register, formState: { errors } } = useFormContext<CreateNewUserInput>();
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="password">
          {t("users.addModal.password")} <span className="text-red-500">*</span>
        </Label>
        <div className="relative mt-1">
          <Lock className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            type="password"
            placeholder={t("users.addModal.passwordPlaceholder")}
            {...register("password")}
            className="ps-10"
            error={!!errors.password}
            aria-invalid={!!errors.password}
          />
        </div>
        <FieldError message={errors.password?.message as string | undefined} />
      </div>
      <div>
        <Label htmlFor="password-confirmation">
          {t("users.addModal.confirmPassword")} <span className="text-red-500">*</span>
        </Label>
        <div className="relative mt-1">
          <Lock className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="password-confirmation"
            type="password"
            placeholder={t("users.addModal.confirmPasswordPlaceholder")}
            {...register("password_confirmation")}
            className="ps-10"
            error={!!errors.password_confirmation}
            aria-invalid={!!errors.password_confirmation}
          />
        </div>
        <FieldError message={errors.password_confirmation?.message as string | undefined} />
      </div>
    </div>
  );
}
