import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { Loader2 } from "lucide-react";
import { ResetpasswordSchema } from "@/validators/resetpassword.schema";

interface ResetStepProps {
  form: UseFormReturn<ResetpasswordSchema>;
  onSubmit: (data: ResetpasswordSchema) => void;
  onInvalid: (errors: any) => void;
  isPending: boolean;
  t: (key: string) => string;
}

export function ResetStep({ form, onSubmit, onInvalid, isPending, t }: ResetStepProps) {
  const { errors } = form.formState;
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-[#15042B]">
          {t("auth.forgotPassword.resetTitle")}
        </h1>
        <p className="font-normal text-[#4A5565]">
          {t("auth.forgotPassword.resetDescription")}
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            {t("auth.forgotPassword.newPasswordLabel")} <span className="text-red-500">*</span>
          </Label>

          <PasswordInput
            id="password"
            autoComplete="new-password"
            placeholder={t("auth.forgotPassword.newPasswordPlaceholder")}
            {...form.register("password")}
            error={!!errors.password}
            aria-invalid={!!errors.password}
          />
          <FieldError message={errors.password?.message ? t(errors.password.message) : undefined} className="mt-0" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="password_confirmation"
            className="text-sm font-medium text-gray-700"
          >
            {t("auth.forgotPassword.confirmPasswordLabel")} <span className="text-red-500">*</span>
          </Label>

          <PasswordInput
            id="password_confirmation"
            autoComplete="new-password"
            placeholder={t("auth.forgotPassword.confirmPasswordPlaceholder")}
            {...form.register("password_confirmation")}
            error={!!errors.password_confirmation}
            aria-invalid={!!errors.password_confirmation}
          />
          <FieldError
            message={errors.password_confirmation?.message ? t(errors.password_confirmation.message) : undefined}
            className="mt-0"
          />
        </div>

        <FormErrorAlert message={errors.root?.server?.message} />

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#008081] hover:bg-teal-700 disabled:bg-gray-400 text-white h-12 text-base font-medium"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              {t("auth.forgotPassword.resetting")}
            </>
          ) : (
            t("auth.forgotPassword.submitReset")
          )}
        </Button>
      </form>
    </>
  );
}
