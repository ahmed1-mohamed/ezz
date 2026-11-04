"use client";

import { useState } from "react";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { OtpSchema, useOtpSchema } from "@/validators/otp.schema";
import { useCountdown } from "@/lib/useCountdown";
import { ResetpasswordSchema, useResetPasswordSchema } from "@/validators/resetpassword.schema";
import { ForgetPasswordSchema, useForgetPasswordSchema } from "@/validators/forget-password.schema";
import { DashboardAdminService } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

import { EmailStep } from "./components/email-step";
import { OtpStep } from "./components/otp-step";
import { ResetStep } from "./components/reset-step";

const RESEND_COUNTDOWN_DURATION = 60;

// Backend keys of the verification code / reset token, all shown on the single OTP input.
const OTP_FIELD_MAP = { code: "otp", token: "otp", reset_token: "otp" };

type Step = "email" | "otp" | "reset";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [lastOtpCode, setLastOtpCode] = useState("");
  const [forgetToken, setForgetToken] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);
  const router = useRouter();
  const { t } = useLanguage();

  const { forgetPasswordSchema } = useForgetPasswordSchema();
  const { otpSchema } = useOtpSchema();
  const { resetpasswordSchema } = useResetPasswordSchema();

  const emailForm = useForm<Pick<ForgetPasswordSchema, "email">>({
    resolver: zodResolver(forgetPasswordSchema.pick({ email: true })),
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const otpForm = useForm<OtpSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
    mode: "onChange",
  });

  const resetForm = useForm<ResetpasswordSchema>({
    resolver: zodResolver(resetpasswordSchema),
    defaultValues: { password: "", password_confirmation: "" },
    mode: "onChange",
  });

  useCountdown(resendCountdown, setResendCountdown);

  const sendOtpMutation = useMutation({
    mutationFn: DashboardAdminService.forgetPassword,
    onSuccess: (res: any) => {
      const extractedToken = extractResetToken(res);
      setForgetToken(extractedToken);
      setResendCountdown(RESEND_COUNTDOWN_DURATION);
      toast.success(t("auth.forgotPassword.toast.emailSent"));
      setStep("otp");
    },
    onError: (err: unknown) => {
      // Single-field form: a general backend message (e.g. "email not found") also goes under the input.
      const { fieldErrors, generalMessage, summary } = parseApiError(err, {
        t,
        fallbackMessage: t("auth.forgotPassword.toast.emailSendError"),
        fields: ["email"],
      });
      const message = fieldErrors.email ?? generalMessage;
      if (message) {
        emailForm.setError("email", { type: "server", message }, { shouldFocus: true });
      }
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  function extractResetToken(res: any): string {
    if (!res) return "";
    if (typeof res === "string" && res.trim() !== "") return res;
    if (typeof res?.data === "string" && res.data.trim() !== "") return res.data;
    if (typeof res?.data?.data === "string" && res.data.data.trim() !== "") return res.data.data;

    const candidates = [res?.data?.data, res?.data, res];
    for (const obj of candidates) {
      if (obj && typeof obj === "object") {
        const val = obj.reset_token || obj.token || obj.access_token;
        if (typeof val === "string" && val.trim() !== "") {
          return val;
        }
      }
    }
    return "";
  }

  const verifyOtpMutation = useMutation({
    mutationFn: DashboardAdminService.verifyOtpPassword,
    onSuccess: (res: any) => {
      const token = extractResetToken(res) || lastOtpCode;
      setResetToken(token);
      toast.success(t("auth.forgotPassword.toast.otpSuccess"));
      setStep("reset");
    },
    onError: (err: unknown) => {
      const { fieldErrors, generalMessage, summary } = parseApiError(err, {
        t,
        fallbackMessage: t("auth.forgotPassword.toast.otpError"),
        fields: ["otp"],
        fieldMap: OTP_FIELD_MAP,
      });
      otpForm.setError("otp", {
        type: "server",
        message: fieldErrors.otp ?? generalMessage ?? t("auth.forgotPassword.toast.otpError"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: DashboardAdminService.resetPassword,
    onSuccess: () => {
      toast.success(t("auth.forgotPassword.toast.resetSuccess"));
      router.push("/auth/signin");
    },
    onError: (err: unknown) => {
      const { fieldErrors, generalMessage, summary } = parseApiError(err, {
        t,
        fallbackMessage: t("auth.forgotPassword.toast.resetError"),
        fields: ["password", "password_confirmation"],
        fieldMap: { new_password: "password", new_password_confirmation: "password_confirmation" },
      });
      Object.entries(fieldErrors).forEach(([field, message], index) => {
        resetForm.setError(
          field as "password" | "password_confirmation",
          { type: "server", message },
          { shouldFocus: index === 0 }
        );
      });
      if (generalMessage) {
        resetForm.setError("root.server", { type: "server", message: generalMessage });
      }
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const onSubmitEmail = ({ email }: Pick<ForgetPasswordSchema, "email">) => {
    if (sendOtpMutation.isPending) return;
    setEmail(email!);
    sendOtpMutation.mutate({ email: email! });
  };

  const onSubmitOtp = (data: OtpSchema) => {
    // The OTP input auto-submits on the 6th digit; don't send a second request while one is pending.
    if (verifyOtpMutation.isPending) return;
    setLastOtpCode(data.otp);
    verifyOtpMutation.mutate({ email, otp: data.otp, token: forgetToken } as any);
  };

  const onSubmitReset = (data: ResetpasswordSchema) => {
    if (resetPasswordMutation.isPending) return;
    resetForm.clearErrors("root");
    const finalToken = resetToken || lastOtpCode;
    resetPasswordMutation.mutate({
      email,
      reset_token: finalToken,
      password: data.password,
      password_confirmation: data.password_confirmation,
    } as any);
  };

  const handleResend = () => {
    if (resendCountdown > 0 || sendOtpMutation.isPending) return;
    sendOtpMutation.mutate({ email });
    otpForm.setValue("otp", "");
  };

  const handleInvalid = (errors: any) => {
    const firstErrorKey = Object.keys(errors)[0];
    if (firstErrorKey) {
      const errorObj = errors[firstErrorKey];
      if (errorObj?.message) {
        toast.error(t(errorObj.message));
      }
    }
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-16 flex flex-col gap-5">
      {step === "email" && (
        <EmailStep
          form={emailForm}
          onSubmit={onSubmitEmail}
          onInvalid={handleInvalid}
          isPending={sendOtpMutation.isPending}
          t={t}
        />
      )}

      {step === "otp" && (
        <OtpStep
          form={otpForm}
          onSubmit={onSubmitOtp}
          onInvalid={handleInvalid}
          isPending={verifyOtpMutation.isPending}
          email={email}
          resendCountdown={resendCountdown}
          isResending={sendOtpMutation.isPending}
          onResend={handleResend}
          onBack={() => {
            setStep("email");
            otpForm.reset();
          }}
          t={t}
        />
      )}

      {step === "reset" && (
        <ResetStep
          form={resetForm}
          onSubmit={onSubmitReset}
          onInvalid={handleInvalid}
          isPending={resetPasswordMutation.isPending}
          t={t}
        />
      )}
    </div>
  );
}