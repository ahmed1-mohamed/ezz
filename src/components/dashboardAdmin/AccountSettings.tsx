"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Resolver, Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Save } from "lucide-react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useProfile } from "@/hooks/admin/use-admin-profile";
import { useUpdateAdminProfile } from "@/hooks/admin/useUpdateAdminProfile";
import { FieldLabel } from "../dashboardExperts/Settings/AccountProfile/FieldLabel";
import ImgPicker from "../dashboardExperts/Settings/AccountProfile/ImgPicker";
import { getUpdateAdminSchema, UpdateAdminValues } from "@/validators/accountSetting-schema";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { DashboardAdminService } from "@/data/api-client";
import { CircleUser, DollarSign, ArrowRight, Loader2, Check } from "lucide-react";
import ChangePasswordForm from "./ChangePasswordForm";
import EmailVerificationDialog from "./EmailVerificationDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSession } from "next-auth/react";
import { fetchAdCreditPackages } from "@/data/api-client";
import { CheckoutPage } from "@/app/developer/ready_market/components/CheckoutPage";
import { type MarketplaceItem } from "@/app/developer/ready_market/types";
import { type AdCreditPackage } from "@/types";

const STATIC_BILLING_PACKAGES: AdCreditPackage[] = [
    { id: 1, code: "begin", name: "Beginner", price: 12000, credits: 12000, subscribers: 0, sort_order: 1, status: true, currency: "AED" },
    { id: 2, code: "std", name: "Standard", price: 21600, credits: 24000, subscribers: 0, sort_order: 2, status: true, currency: "AED" },
    { id: 3, code: "feat", name: "Featured", price: 38880, credits: 50000, subscribers: 0, sort_order: 3, status: true, currency: "AED" },
    { id: 4, code: "smart", name: "Smart", price: 69984, credits: 80000, subscribers: 0, sort_order: 4, status: true, currency: "AED" },
    { id: 5, code: "prem", name: "Premium", price: 125971, credits: 200000, subscribers: 0, sort_order: 5, status: true, currency: "AED" },
    { id: 6, code: "lux", name: "Luxury", price: 226748, credits: 400000, subscribers: 0, sort_order: 6, status: true, currency: "AED" },
    { id: 7, code: "pro", name: "Pro", price: 300880, credits: 600000, subscribers: 0, sort_order: 7, status: true, currency: "AED" },
    { id: 8, code: "go", name: "Go", price: 96984, credits: 12000, subscribers: 0, sort_order: 8, status: true, currency: "AED" }
];

// Backend keys → form fields (the payload is built in useUpdateAdminProfile).
const ADMIN_PROFILE_FIELD_MAP: Record<string, keyof UpdateAdminValues> = {
    phone: "phone_number",
    picture: "profile_picture",
    image: "profile_picture",
};

const mapPackageToMarketplaceItem = (pkg: any): MarketplaceItem => {
    return {
        id: pkg.id.toString(),
        titleKey: pkg.name,
        descriptionKey: `${pkg.credits.toLocaleString()} ad credits to boost property listing visibility.`,
        credits: pkg.credits,
        creditUnitKey: "marketplace.creditsPerUnit",
        price: pkg.price,
        currency: pkg.currency || "AED",
        features: [
            `Receive ${pkg.credits.toLocaleString()} ad credits`,
            `Instant credit activation on dashboard`,
            `Boost listings priority in search results`
        ],
        icon: "zap",
        category: "featured",
        colorScheme: "blue"
    };
};

export default function AccountSettings() {
    const { t } = useLanguage();
    const { data: session } = useSession();
    const { data } = useProfile();
    const profileData = data?.data?.data;

    const [activeTab, setActiveTab] = useState<"details" | "billing">("details");
    const [packages, setPackages] = useState<AdCreditPackage[] | null>(null);
    const [isLoadingPackages, setIsLoadingPackages] = useState(false);
    const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);

    const { mutate: updateProfile, isPending } = useUpdateAdminProfile();

    const updateAdminSchema = useMemo(() => getUpdateAdminSchema(t), [t]);

    const { register, handleSubmit, control, getValues, reset, setError, clearErrors, trigger, formState: { errors } } =
        useForm<UpdateAdminValues>({
            resolver: zodResolver(updateAdminSchema) as Resolver<UpdateAdminValues>,
            defaultValues: {
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                profile_picture: undefined,
            },
        });

    useEffect(() => {
        if (!profileData) return;
        reset({
            first_name: profileData.first_name ?? "",
            last_name: profileData.last_name ?? "",
            email: profileData.email ?? "",
            phone_number: profileData.phone ?? "",
            profile_picture: profileData.picture
                ? { url: profileData.picture, existingFile: true }
                : undefined,
        });
    }, [profileData, reset]);

    useEffect(() => {
        if (activeTab !== "billing" || packages !== null) return;

        async function loadPackages() {
            if (!session?.user?.accessToken) return;
            try {
                setIsLoadingPackages(true);
                const result = await fetchAdCreditPackages(session.user?.accessToken);
                if (result && Array.isArray(result.packages)) {
                    setPackages(result.packages);
                }
            } catch (error) {
                console.error("Error loading packages in settings:", error);
            } finally {
                setIsLoadingPackages(false);
            }
        }
        loadPackages();
    }, [activeTab, session, packages]);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [resendCountdown, setResendCountdown] = useState(0);
    const [isSendingCode, setIsSendingCode] = useState(false);

    const isEmailAlreadyVerified = useCallback((): boolean => {
        return Boolean(
            profileData?.email &&
            profileData.email === getValues("email") &&
            profileData.email_verified
        );
    }, [getValues, profileData]);

    const isPhoneAlreadyVerified = useCallback((): boolean => {
        return Boolean(
            profileData?.phone &&
            profileData.phone === getValues("phone_number") &&
            profileData.phone_verified
        );
    }, [getValues, profileData]);

    const sendOtpMutation = useMutation({
        mutationFn: (email: string) => DashboardAdminService.sendOtpEmail({ email }),
        onSuccess: () => {
            toast.success(t("profileSettings.verificationCodeSent"));
            setDialogOpen(true);
            setResendCountdown(60);
        },
        onError: (err: unknown) => {
            const { fieldErrors, summary } = parseApiError(err, {
                t,
                fallbackMessage: t("profileSettings.failedToSendCode"),
                fields: ["email"],
            });
            if (fieldErrors.email) {
                setError("email", { type: "server", message: fieldErrors.email }, { shouldFocus: true });
            }
            toast.error(summary, { id: API_ERROR_TOAST_ID });
        },
        onSettled: () => setIsSendingCode(false),
    });

    const handleChangeEmail = async () => {
        // Validate the email before asking the backend to send a code to it.
        if (!(await trigger("email", { shouldFocus: true }))) return;
        const email = getValues("email").trim();
        if (!email) return;

        if (email === profileData?.email && profileData?.email_verified) {
            toast.error(t("profileSettings.enterDifferentEmail"));
            return;
        }
        setIsSendingCode(true);
        sendOtpMutation.mutate(email);
    };

    const onSubmit = (values: UpdateAdminValues) => {
        if (values.email !== profileData?.email) {
            setError("email", { type: "manual", message: t("profileSettings.verifyNewEmailFirst") }, { shouldFocus: true });
            toast.error(t("profileSettings.verifyNewEmailFirst"));
            return;
        }

        clearErrors("root");
        updateProfile(values, {
            onSuccess: () => toast.success(t("profileSettings.profileUpdated")),
            onError: (error) => {
                const { summary } = applyApiFormErrors(error, {
                    setError,
                    getValues,
                    t,
                    fieldMap: ADMIN_PROFILE_FIELD_MAP,
                    fallbackMessage: t("profileSettings.failedToUpdateProfile"),
                });
                toast.error(summary, { id: API_ERROR_TOAST_ID });
            },
        });
    };

    if (selectedItem) {
        return (
            <CheckoutPage
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={() => setActiveTab("details")}
                    className={`flex items-center px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${activeTab === "details"
                            ? "bg-white border border-gray-200 shadow-sm text-[#15042B]"
                            : "bg-gray-50 text-gray-500 hover:bg-gray-100/70"
                        }`}
                >
                    <CircleUser className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 text-gray-500" />
                    {t("profileSettings.accountDetails")}
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab("billing")}
                    className={`flex items-center px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${activeTab === "billing"
                            ? "bg-white border border-gray-200 shadow-sm text-[#15042B]"
                            : "bg-gray-50 text-gray-500 hover:bg-gray-100/70"
                        }`}
                >
                    <DollarSign className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 text-gray-500" />
                    {t("profileSettings.planBilling")}
                </button>
            </div>

            {activeTab === "details" && (
                <div className="flex flex-col gap-4">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="border border-[#E5E7EB] bg-white p-6 flex flex-col gap-6 rounded-[8px]"
                    >
                        <div className="flex items-center gap-2">
                            <h1 className="text-[20px] font-semibold text-[#15042B]">{t("profileSettings.accountDetails")}</h1>
                            <Info className="w-[13.33px] h-[13.33px] text-[#4A5565]" />
                        </div>

                        <FormErrorAlert message={errors.root?.server?.message} />

                        <ImgPicker control={control} name="profile_picture" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2.5">
                                <FieldLabel label={t("profileSettings.firstName")} required />
                                <Input
                                    {...register("first_name")}
                                    placeholder={t("profileSettings.firstNamePlaceholder")}
                                    error={!!errors.first_name}
                                />
                                <FieldError message={errors.first_name?.message} />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <FieldLabel label={t("profileSettings.lastName")} required />
                                <Input
                                    {...register("last_name")}
                                    placeholder={t("profileSettings.lastNamePlaceholder")}
                                    error={!!errors.last_name}
                                />
                                <FieldError message={errors.last_name?.message} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2.5">
                                <div className="flex items-center gap-1">
                                    <FieldLabel label={t("profileSettings.phoneNumber")} required />
                                    {isPhoneAlreadyVerified() && <><Check className="text-white bg-[#008081] rounded-full p-[1px] size-3" /> </>}
                                </div>
                                <Controller
                                    name="phone_number"
                                    control={control}
                                    render={({ field }) => (
                                        <PhoneInput
                                            country="eg"
                                            value={field.value}
                                            onChange={field.onChange}
                                            inputProps={{ name: field.name, dir: "ltr", "aria-invalid": !!errors.phone_number || undefined }}
                                            inputStyle={{
                                                width: "100%",
                                                borderColor: errors.phone_number ? "#f87171" : "#e5e7eb",
                                                borderRadius: "8px",
                                                height: "40px",
                                                fontSize: "14px",
                                            }}
                                            buttonStyle={{
                                                borderColor: errors.phone_number ? "#f87171" : "#e5e7eb",
                                                borderRadius: "8px 0 0 8px",
                                                backgroundColor: "#F9FAFB",
                                            }}
                                        />
                                    )}
                                />
                                <FieldError message={errors.phone_number?.message} />
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <div className="flex items-center gap-1">
                                    <FieldLabel label={t("profileSettings.emailAddress")} required />
                                    {isEmailAlreadyVerified() && <><Check className="text-white bg-[#008081] rounded-full p-[1px] size-3" /> </>}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Input
                                        {...register("email")}
                                        type="email"
                                        dir="ltr"
                                        placeholder={t("profileSettings.emailPlaceholder")}
                                        error={!!errors.email}
                                        className="flex-1"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleChangeEmail}
                                        disabled={isSendingCode || sendOtpMutation.isPending}
                                        className="shrink-0 border border-[#E5E7EB] rounded-[8px] py-1 px-2.5 text-sm text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                                    >
                                        {sendOtpMutation.isPending ? t("profileSettings.sending") : t("profileSettings.change")}
                                    </button>
                                </div>
                                <FieldError message={errors.email?.message} />
                            </div>
                        </div>

                        <div className="flex justify-start pt-7 border-t border-[#F3F4F6]">
                            <Button
                                type="submit"
                                disabled={isPending}
                                className="flex items-center gap-2 bg-[#008081] hover:bg-[#008081] cursor-pointer"
                            >
                                {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                {isPending ? t("profileSettings.saving") : t("profileSettings.saveChanges")}
                            </Button>
                        </div>
                    </form>

                    <ChangePasswordForm />

                    <EmailVerificationDialog
                        isOpen={dialogOpen}
                        onClose={() => setDialogOpen(false)}
                        email={getValues("email") || ""}
                        resendCountdown={resendCountdown}
                        setResendCountdown={setResendCountdown}
                    />
                </div>
            )}

            {activeTab === "billing" && (
                <div className="space-y-6">
                    {isLoadingPackages ? (
                        <div className="flex min-h-[300px] items-center justify-center">
                            <Loader2 className="h-8 w-8 animate-spin text-[#008081]" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {(packages && packages.length > 0 ? packages : STATIC_BILLING_PACKAGES).map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
                                >
                                    <div>
                                        <h3 className="text-xl font-bold text-[#15042B]">{pkg.name}</h3>
                                        <div className="mt-2 flex items-baseline gap-1 text-gray-900">
                                            <span className="text-3xl font-extrabold tracking-tight">
                                                {pkg.price.toLocaleString()}
                                            </span>
                                            <span className="text-sm font-semibold text-gray-500">
                                                {pkg.currency || "AED"}
                                            </span>
                                        </div>
                                        <div className="mt-4 rounded-xl bg-gray-50/70 py-3 px-4 flex items-center justify-center gap-1">
                                            <span className="text-base font-bold text-gray-800">
                                                {pkg.credits.toLocaleString()}
                                            </span>
                                            <span className="text-xs text-gray-400 font-medium">
                                                {t("marketplace.checkout.credits")}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedItem(mapPackageToMarketplaceItem(pkg))}
                                        className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-[#008081] hover:bg-[#006667] text-white py-3 text-sm font-semibold shadow-sm transition-colors cursor-pointer"
                                    >
                                        {t("profileSettings.purchasePackage")}
                                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
