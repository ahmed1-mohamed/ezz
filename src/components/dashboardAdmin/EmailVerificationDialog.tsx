"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Loader2 } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { parseApiError } from "@/lib/api-errors";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useCountdown } from "@/lib/useCountdown";
import { DashboardAdminService } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";

const OTP_REGEX = /^\d{6}$/;

interface EmailVerificationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    email: string;
    resendCountdown: number;
    setResendCountdown: React.Dispatch<React.SetStateAction<number>>;
}

export default function EmailVerificationDialog({
    isOpen,
    onClose,
    email,
    resendCountdown,
    setResendCountdown,
}: EmailVerificationDialogProps) {
    const { t } = useLanguage();
    const queryClient = useQueryClient();
    const [otp, setOtp] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [otpError, setOtpError] = useState<string | undefined>();
    const [generalError, setGeneralError] = useState<string | undefined>();

    useCountdown(resendCountdown, setResendCountdown);

    const resendOtpMutation = useMutation({
        mutationFn: (email: string) => DashboardAdminService.resendOtpEmail({ email }),
        onSuccess: () => {
            toast.success(t("profileSettings.otpSentSuccess"));
            setGeneralError(undefined);
            setResendCountdown(60);
        },
        onError: (err: unknown) => {
            const { generalMessage, summary } = parseApiError(err, {
                t,
                fallbackMessage: t("profileSettings.otpSentError"),
            });
            setGeneralError(generalMessage);
            toast.error(summary, { id: API_ERROR_TOAST_ID });
        },
        onSettled: () => setIsProcessing(false),
    });

    const verifyOtpMutation = useMutation({
        mutationFn: ({ otp, email }: { otp: string; email: string }) => {
            const formData = new FormData();
            formData.append("otp", otp);
            formData.append("email", email);
            return DashboardAdminService.verifyPhoneOREmail(formData, "email");
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["adminProfile"] });
            toast.success(t("profileSettings.emailUpdated"));
            // Not handleClose(): its pending guard still sees isPending in this callback.
            resetAndClose();
        },
        onError: (err: unknown) => {
            const { fieldErrors, generalMessage, summary } = parseApiError(err, {
                t,
                fallbackMessage: t("profileSettings.otpVerifyError"),
                fields: ["otp"],
                fieldMap: { code: "otp" },
            });
            // The code is the only input: a general message (e.g. "invalid code") is shown under it too.
            setOtpError(fieldErrors.otp ?? generalMessage);
            setGeneralError(undefined);
            toast.error(summary, { id: API_ERROR_TOAST_ID });
        },
        onSettled: () => setIsProcessing(false),
    });

    const resetAndClose = () => {
        setOtp("");
        setOtpError(undefined);
        setGeneralError(undefined);
        onClose();
    };

    const handleClose = () => {
        if (verifyOtpMutation.isPending) return;
        resetAndClose();
    };

    const handleOtpChange = (value: string) => {
        setOtp(value);
        if (otpError) setOtpError(undefined);
    };

    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        if (isProcessing) return;
        if (!OTP_REGEX.test(otp)) {
            const message = otp ? t("validation.otp_invalid_length") : t("profileSettings.pleaseEnterOtp");
            setOtpError(message);
            toast.error(message);
            scrollToFirstInvalidField(e.currentTarget);
            return;
        }
        if (!email) {
            setGeneralError(t("profileSettings.pleaseEnterEmail"));
            toast.error(t("profileSettings.pleaseEnterEmail"));
            scrollToFirstInvalidField(e.currentTarget);
            return;
        }
        setGeneralError(undefined);
        setIsProcessing(true);
        verifyOtpMutation.mutate({ otp, email });
    };

    const handleResendOtp = () => {
        if (resendCountdown > 0 || isProcessing) return;
        if (!email) return;
        setIsProcessing(true);
        resendOtpMutation.mutate(email);
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-[18px] font-semibold text-[#15042B]">
                        {t("profileSettings.verifyEmailTitle")}
                    </DialogTitle>
                </DialogHeader>

                <p className="text-sm text-gray-500">
                    {t("profileSettings.verifyEmailSentTo")}{" "}
                    <span className="font-medium text-[#15042B]">{email}</span>
                </p>

                <form onSubmit={handleVerifyOtp} className="flex flex-col gap-6 mt-2">
                    <FormErrorAlert message={generalError} />

                    <div className="flex flex-col items-center">
                        <InputOTP
                            maxLength={6}
                            value={otp}
                            onChange={handleOtpChange}
                            pattern={REGEXP_ONLY_DIGITS}
                            inputMode="numeric"
                            aria-invalid={!!otpError || undefined}
                            disabled={verifyOtpMutation.isPending}
                        >
                            <InputOTPGroup className="flex gap-2 justify-center">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <InputOTPSlot
                                        key={index}
                                        index={index}
                                        className={otpError ? "border border-red-500" : undefined}
                                    />
                                ))}
                            </InputOTPGroup>
                        </InputOTP>
                        <FieldError message={otpError} className="text-center" />
                    </div>

                    <Button
                        type="submit"
                        disabled={isProcessing || otp.length !== 6}
                        className="bg-[#008081] hover:bg-[#008081] w-full"
                    >
                        {verifyOtpMutation.isPending ? (
                            <>
                                <Loader2 className="h-4 w-4 me-2 animate-spin" />
                                {t("profileSettings.verifying")}
                            </>
                        ) : (
                            t("profileSettings.verify")
                        )}
                    </Button>

                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={resendCountdown > 0 || isProcessing}
                            className="text-sm text-[#008081] disabled:text-gray-400 disabled:cursor-not-allowed"
                        >
                            {resendCountdown > 0
                                ? t("profileSettings.resendIn", { countdown: resendCountdown })
                                : t("profileSettings.resendCode")}
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
