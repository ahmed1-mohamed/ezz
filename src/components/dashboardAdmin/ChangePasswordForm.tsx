import { CheckCircle2, Loader2, Save, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { PasswordInput } from "../ui/password-input";
import { FieldError, FormErrorAlert } from "../ui/form-message";
import {
    PASSWORD_SPECIAL_CHAR_REGEX,
    PasswordFormValues,
    passwordSchema,
} from "@/validators/admin/passwordSchema";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChangePassword } from "@/hooks/admin/change-password";
import { toast } from "sonner";
import { Separator } from "../ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

// Backend keys (see the payload built in onSubmit) → form fields.
const PASSWORD_FIELD_MAP: Record<string, keyof PasswordFormValues> = {
    current_password: "currentPassword",
    new_password: "newPassword",
    new_password_confirmation: "confirmPassword",
    password: "newPassword",
    password_confirmation: "confirmPassword",
};

export default function ChangePasswordForm() {
    const { t } = useLanguage();
    const { mutate: changePassword, isPending } = useChangePassword();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setError,
        getValues,
        clearErrors,
        formState: { errors },
    } = useForm<PasswordFormValues>({
        resolver: zodResolver(passwordSchema),
        defaultValues: { currentPassword: "", newPassword: "", confirmPassword: "" },
    });

    const currentPasswordValue = watch("currentPassword") ?? "";
    const newPasswordValue = watch("newPassword") ?? "";

    const requirements = [
        {
            label: t("profileSettings.reqLength"),
            check: (v: string) => v.length >= 10 && v.length <= 100,
        },
        {
            label: t("profileSettings.reqLowercase"),
            check: (v: string) => /[a-z]/.test(v),
        },
        {
            label: t("profileSettings.reqSpecialChar"),
            check: (v: string) => PASSWORD_SPECIAL_CHAR_REGEX.test(v),
        },
        {
            label: t("profileSettings.reqDifferent"),
            check: (v: string, currentPassword: string) =>
                !!v && !!currentPassword && v !== currentPassword,
        },
    ];

    const onSubmit = (values: PasswordFormValues) => {
        clearErrors("root");
        changePassword(
            {
                current_password: values.currentPassword,
                new_password: values.newPassword,
                new_password_confirmation: values.confirmPassword,
            },
            {
                onSuccess: () => {
                    reset()
                    toast.success(t("profileSettings.passwordChanged"))
                },
                onError: (error) => {
                    // The submitted passwords are kept in the form; only the backend's message is shown.
                    const { summary } = applyApiFormErrors(error, {
                        setError,
                        getValues,
                        t,
                        fieldMap: PASSWORD_FIELD_MAP,
                        fallbackMessage: t("profileSettings.passwordErrorDefault"),
                    });
                    toast.error(summary, { id: API_ERROR_TOAST_ID });
                },
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit, (errs) => {
                const firstErrorKey = Object.keys(errs)[0];
                if (firstErrorKey) {
                    const errorObj = errs[firstErrorKey as keyof typeof errs];
                    if (errorObj?.message) {
                        toast.error(t(errorObj.message));
                    }
                }
            })}
            className="border border-[#E5E7EB] bg-white p-6 flex flex-col gap-6 rounded-[8px]"
        >
            <h1 className="text-[20px] font-[600] text-[#15042B]">{t("profileSettings.password")}</h1>

            <FormErrorAlert message={errors.root?.server?.message} />

            <div className="flex items-stretch gap-10 w-full">
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2.5 ">
                        <label htmlFor="currentPassword">
                            {t("profileSettings.currentPasswordLabel")} <span className="text-red-500">*</span>
                        </label>
                        <PasswordInput
                            id="currentPassword"
                            autoComplete="current-password"
                            placeholder={t("profileSettings.currentPasswordPlaceholder")}
                            {...register("currentPassword")}
                            error={!!errors.currentPassword}
                            aria-invalid={!!errors.currentPassword}
                        />
                        <FieldError message={errors.currentPassword?.message ? t(errors.currentPassword.message) : undefined} />
                    </div>

                    <div className="flex flex-col gap-2.5 ">
                        <label htmlFor="newPassword">
                            {t("profileSettings.newPasswordLabel")} <span className="text-red-500">*</span>
                        </label>
                        <PasswordInput
                            id="newPassword"
                            autoComplete="new-password"
                            placeholder={t("profileSettings.newPasswordPlaceholder")}
                            {...register("newPassword")}
                            error={!!errors.newPassword}
                            aria-invalid={!!errors.newPassword}
                        />
                        <FieldError message={errors.newPassword?.message ? t(errors.newPassword.message) : undefined} />
                    </div>

                    <div className="flex flex-col gap-2.5 ">
                        <label htmlFor="confirmPassword">
                            {t("profileSettings.confirmPasswordLabel")} <span className="text-red-500">*</span>
                        </label>
                        <PasswordInput
                            id="confirmPassword"
                            autoComplete="new-password"
                            placeholder={t("profileSettings.confirmPasswordPlaceholder")}
                            {...register("confirmPassword")}
                            error={!!errors.confirmPassword}
                            aria-invalid={!!errors.confirmPassword}
                        />
                        <FieldError message={errors.confirmPassword?.message ? t(errors.confirmPassword.message) : undefined} />
                    </div>
                </div>

                <Separator
                    orientation="vertical"
                    className="self-stretch !w-px !h-auto"
                    style={{
                        background: "linear-gradient(to bottom, #F9FAFB80, #E5E7EB, #E5E7EB, #E5E7EB, #F9FAFB80)"
                    }}
                />

                <div className="w-full flex flex-col gap-5">
                    <div>
                        <h3 className="text-[#15042B] font-[500] text-[16px] mb-1">{t("profileSettings.passwordRequirements")}</h3>
                        <p className="text-[#4A5565] text-[14px]">{t("profileSettings.ensureRequirementsMet")}</p>
                    </div>
                    <ul className="flex flex-col gap-3">
                        {requirements.map(({ label, check }) => {
                            const result = check(newPasswordValue, currentPasswordValue);
                            const met = result === true;

                            return (
                                <li key={label} className="flex items-center gap-1.5">
                                    {met ? (
                                        <CheckCircle2 className="w-4 h-4 text-[#007A55] shrink-0" />
                                    ) : (
                                        <XCircle className="w-4 h-4 text-[#C70036] shrink-0" />
                                    )}
                                    <span className="text-[#4A5565] font-[400] text-[14px]">
                                        {label}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="flex justify-start pt-7 border-t border-[#F3F4F6]">
                <Button
                    type="submit"
                    disabled={isPending}
                    className="flex items-center gap-2 bg-[#008081] hover:bg-[#006666] cursor-pointer"
                >
                    {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    {isPending ? t("profileSettings.saving") : t("profileSettings.saveChanges")}
                </Button>
            </div>
        </form>
    );
}
