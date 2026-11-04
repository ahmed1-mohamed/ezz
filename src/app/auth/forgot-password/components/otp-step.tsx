import { Controller, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { IndependentOtpInput } from "@/components/ui/independent-otp-input";
import { FieldError } from "@/components/ui/form-message";
import { Loader2 } from "lucide-react";
import { OtpSchema } from "@/validators/otp.schema";

interface OtpStepProps {
  form: UseFormReturn<OtpSchema>;
  onSubmit: (data: OtpSchema) => void;
  onInvalid: (errors: any) => void;
  isPending: boolean;
  email: string;
  resendCountdown: number;
  isResending: boolean;
  onResend: () => void;
  onBack: () => void;
  t: (key: string, values?: Record<string, string | number>) => string;
}

export function OtpStep({
  form,
  onSubmit,
  onInvalid,
  isPending,
  email,
  resendCountdown,
  isResending,
  onResend,
  onBack,
  t,
}: OtpStepProps) {
  const otpValue = form.watch("otp");
  const isOtpComplete = otpValue?.length === 6;

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-[#15042B]">
          {t("auth.forgotPassword.otpTitle")}
        </h1>
        <p className="font-normal text-[#4A5565]">
          {t("auth.forgotPassword.otpDescription")}{" "}
          <span className="font-semibold text-[#15042B]">
            {email}
          </span>
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5" dir="ltr">
          <Controller
            control={form.control}
            name="otp"
            render={({ field }) => (
              <IndependentOtpInput
                value={field.value || ""}
                onChange={(val) => {
                  field.onChange(val);
                  if (val.length === 6 && !isPending) {
                    form.handleSubmit(onSubmit, onInvalid)();
                  }
                }}
                length={6}
                hasError={!!form.formState.errors.otp}
                autoFocus
              />
            )}
          />

          <FieldError
            message={form.formState.errors.otp?.message ? t(form.formState.errors.otp.message) : undefined}
            className="mt-0"
          />

          <div className="flex items-center gap-1 mt-1">
            <p className="text-gray-500 text-sm">
              {t("auth.forgotPassword.noCode")}
            </p>

            <button
              type="button"
              onClick={onResend}
              disabled={resendCountdown > 0 || isResending}
              className="text-[#008081] hover:text-teal-700 dark:text-[#2DD4BF] dark:hover:text-teal-300 disabled:text-gray-400 disabled:cursor-not-allowed text-sm font-medium transition-colors"
            >
              {resendCountdown > 0
                ? t("auth.forgotPassword.resendCountdown", { seconds: resendCountdown })
                : t("auth.forgotPassword.resend")}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={!isOtpComplete || isPending}
          className="w-full bg-[#008081] hover:bg-teal-700 disabled:bg-gray-400 text-white h-12 text-base font-medium"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              {t("auth.forgotPassword.verifying")}
            </>
          ) : (
            t("auth.forgotPassword.verify")
          )}
        </Button>
      </form>

      <button
        type="button"
        onClick={onBack}
        disabled={isPending}
        className="text-sm auth-link-secondary text-start animate-fade-in disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t("auth.forgotPassword.back")}
      </button>
    </>
  );
}
