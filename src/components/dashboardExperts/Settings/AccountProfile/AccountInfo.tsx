"use client";

import { useEffect, useMemo } from "react";
import { Controller, Resolver, FieldError as RHFFieldError } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Loader, Loader2, Save } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";

import { useToken } from "@/contexts/SessionProviderWrapper";
import ImgPicker from "./ImgPicker";

import {
  UpdateExpertValues, getUpdateExpertSchema
} from "@/validators/dashboardExpert/updateExpertSchema";
import { useUpdateExpertProfile } from "@/hooks/dashboardExpert/useUpdateexpertprofile";
import {
  useProfile,
  useLanguagesList,
  useCategoriesList,
  useCountriesList,
} from "@/hooks/dashboardExpert/useProfile";
import { MultiSelect } from "@/components/ui/multi-select";
import { FieldLabel } from "./FieldLabel";
import { CertificationsSection } from "./CertificationsSection";
import { CategoryOption, Country, LanguageOption } from "@/types/expertDashboard/profile";
import { Switch } from "@/components/ui/switch";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(
  () => import("../../DescriptionEditor").then((mod) => mod.RichTextEditor),
  { ssr: false }
);

// Backend keys (see buildFormData in useUpdateExpertProfile) → form fields.
const EXPERT_PROFILE_FIELD_MAP: Record<string, keyof UpdateExpertValues> = {
  display_name: "full_name",
};

/** Message of an array field's error: its own (min/server) or the first item's. */
function getArrayErrorMessage(error: unknown): string | undefined {
  if (!error) return undefined;
  const own = (error as RHFFieldError).message ?? (error as { root?: RHFFieldError }).root?.message;
  if (own) return own;
  if (Array.isArray(error)) {
    for (const item of error) {
      const message = item?.message ?? item?.cert_name?.message;
      if (message) return message;
    }
  }
  return undefined;
}

export default function AccountInfo() {
  const { expertId } = useToken();
  const { t } = useLanguage();

  const { data, isError, isLoading } = useProfile(expertId!);
  const profileData = data?.data?.data;

  const { data: allLanguages = [] } = useLanguagesList();
  const { data: allCategories = [] } = useCategoriesList();
  const { data: allCountries = [] } = useCountriesList();

  const { mutate: updateProfile, isPending } = useUpdateExpertProfile(expertId!);

  const updateExpertSchema = useMemo(() => getUpdateExpertSchema(t), [t]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<UpdateExpertValues>({
    resolver: zodResolver(updateExpertSchema) as Resolver<UpdateExpertValues>,
    defaultValues: {
      full_name: "",
      email: "",
      phone_number: "",
      title: "",
      bio: "",
      years_experience: 0,
      website: "",
      linkedin: "",
      languages: [],
      categories: [],
      countries: [],
      certifications: [],
      podcast: false,
      photo: undefined,
    },
  });

  useEffect(() => {
    reset({
      full_name: profileData?.display_name ?? "",
      email: profileData?.user?.email ?? "",
      phone_number: profileData?.user?.phone_number ?? "",
      title: profileData?.title ?? "",
      bio: profileData?.bio ?? "",
      years_experience: profileData?.years_experience ?? 0,
      website: profileData?.website ?? "",
      linkedin: profileData?.linkedin ?? "",
      languages: profileData?.languages?.map((l: any) => l.language_id) ?? [],
      categories: profileData?.categories?.map((c: any) => c.category_id) ?? [],
      countries: profileData?.countries?.map((c: any) => c.id) ?? [],
      certifications: profileData?.certifications ?? [],
      podcast: Boolean(profileData?.podcast),
      photo: profileData?.photo_url
        ? { url: profileData?.photo_url, existingFile: true }
        : undefined,
    });
  }, [profileData, reset]);

  const languageOptions = allLanguages.map((l: LanguageOption) => ({
    value: l.language_id,
    label: l.name,
  }));

  const categoryOptions = allCategories.map((c: CategoryOption) => ({
    value: c.category_id,
    label: c.name,
  }));

  const countryOptions = allCountries.map((c: Country) => ({
    value: c.id,
    label: c.name,
  }));

  const onSubmit = (values: UpdateExpertValues) => {
    clearErrors("root");
    updateProfile(values, {
      onSuccess: () => toast.success(t("experts.messages.profileUpdateSuccess")),
      onError: (error) => {
        const { summary } = applyApiFormErrors(error, {
          setError,
          getValues,
          t,
          fieldMap: EXPERT_PROFILE_FIELD_MAP,
          fallbackMessage: t("experts.messages.profileUpdateFailed"),
        });
        toast.error(summary, { id: API_ERROR_TOAST_ID });
      },
    });
  };

  if (isLoading) return <Loader />;
  if (isError) return <div>{t("experts.common.failedToLoad")}</div>;
  if (!data) return <div>{t("experts.common.noResults")}</div>

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-[#E5E7EB] bg-white p-6 flex flex-col gap-6 rounded-[8px]"
    >

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-[20px] font-semibold text-[#15042B]">{t("profileSettings.accountDetails")}</h1>
          <Info className="w-[13.33px] h-[13.33px] text-[#4A5565]" />
        </div>
      </div>

      <FormErrorAlert message={errors.root?.server?.message} />

      <ImgPicker control={control} name="photo" />

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2.5">
          <FieldLabel label={t("experts.edit.form.displayName")} required />
          <Input
            {...register("full_name")}
            placeholder={t("experts.edit.form.displayNamePlaceholder")}
            error={!!errors.full_name}
          />
          <FieldError message={errors.full_name?.message} />
        </div>
        <div className="flex flex-col gap-2.5">
          <FieldLabel label={t("experts.edit.form.email")} required />
          <Input
            {...register("email")}
            disabled
            type="email"
            dir="ltr"
            placeholder={t("experts.edit.form.emailPlaceholder")}
            error={!!errors.email}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <FieldLabel
          label={t("experts.edit.form.title")}
          tooltip="Your professional title"
        />
        <Input
          {...register("title")}
          placeholder={t("experts.edit.form.titlePlaceholder")}
          error={!!errors.title}
        />
        <FieldError message={errors.title?.message} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2.5">
          <FieldLabel
            label={t("experts.edit.form.categories")}
            required
            tooltip="Your area of expertise"
          />
          <Controller
            name="categories"
            control={control}
            render={({ field }) => (
              <MultiSelect
                options={categoryOptions}
                selected={field.value ?? []}
                onChange={field.onChange}
                placeholder={t("experts.edit.form.selectCategories")}
                hasError={!!errors.categories}
              />
            )}
          />
          <FieldError message={getArrayErrorMessage(errors.categories)} />
        </div>

        <div className="flex flex-col gap-2.5">
          <FieldLabel
            label={t("experts.edit.form.languages")}
            tooltip="Languages you speak"
            required
          />
          <Controller
            name="languages"
            control={control}
            render={({ field }) => (
              <MultiSelect
                options={languageOptions}
                selected={field.value ?? []}
                onChange={field.onChange}
                placeholder={t("experts.edit.form.selectLanguages")}
                hasError={!!errors.languages}
              />
            )}
          />
          <FieldError message={getArrayErrorMessage(errors.languages)} />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <FieldLabel
          label={t("experts.edit.form.countries")}
          tooltip="Countries you serve"
          required
        />
        <Controller
          name="countries"
          control={control}
          render={({ field }) => (
            <MultiSelect
              options={countryOptions}
              selected={field.value ?? []}
              onChange={field.onChange}
              placeholder={t("experts.edit.form.selectCountries")}
              hasError={!!errors.countries}
            />
          )}
        />
        <FieldError message={getArrayErrorMessage(errors.countries)} />
      </div>

      <div className="flex flex-col gap-2.5">
        <FieldLabel
          label={t("experts.edit.form.bio")}
          required
          tooltip="Tell clients about yourself"
        />
        <Controller
          name="bio"
          control={control}
          render={({ field }) => (
            <div
              className={errors.bio ? "rounded-[8px] ring-1 ring-red-500" : ""}
              aria-invalid={!!errors.bio || undefined}
            >
              <RichTextEditor
                value={field.value}
                onChange={field.onChange}
                placeholder={t("experts.edit.form.bioPlaceholder")}
              />
            </div>
          )}
        />
        <FieldError message={errors.bio?.message} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2.5">
          <FieldLabel label={t("experts.edit.form.phoneNumber")} required />
          <Input
            {...register("phone_number")}
            disabled
            type="tel"
            dir="ltr"
            placeholder={t("experts.edit.form.phoneNumberPlaceholder")}
            error={!!errors.phone_number}
          />
          <FieldError message={errors.phone_number?.message} />
        </div>
        <div className="flex flex-col gap-2.5">
          <FieldLabel
            label={t("experts.edit.form.yearsExperience")}
            required
            tooltip="Total professional years"
          />
          <Input
            {...register("years_experience")}
            type="number"
            min={0}
            max={100}
            step={1}
            dir="ltr"
            placeholder={t("experts.edit.form.yearsExperiencePlaceholder")}
            error={!!errors.years_experience}
          />
          <FieldError message={errors.years_experience?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <CertificationsSection control={control} hasError={!!errors.certifications} />
        <FieldError message={getArrayErrorMessage(errors.certifications)} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2.5">
          <FieldLabel
            label={t("experts.edit.form.website")}
            required
            tooltip="Your personal or company website"
          />
          <Input
            {...register("website")}
            type="url"
            dir="ltr"
            placeholder={t("experts.edit.form.websitePlaceholder")}
            error={!!errors.website}
          />
          <FieldError message={errors.website?.message} />
        </div>
        <div className="flex flex-col gap-2.5">
          <FieldLabel
            label={t("experts.edit.form.linkedin")}
            required
            tooltip="Your LinkedIn profile URL"
          />
          <Input
            {...register("linkedin")}
            type="url"
            dir="ltr"
            placeholder={t("experts.edit.form.linkedinPlaceholder")}
            error={!!errors.linkedin}
          />
          <FieldError message={errors.linkedin?.message} />
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <Controller
          name="podcast"
          control={control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Switch
                id="podcast"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <Label htmlFor="podcast" className="text-sm text-[#6A7282]">{t("experts.edit.form.podcast")}</Label>
            </div>
          )}
        />
      </div>

      <div className="flex justify-start pt-7 border-t border-[#F3F4F6]">
        <Button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 bg-[#008081] hover:bg-[#008081] cursor-pointer"
        >
          {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {isPending ? t("experts.common.saving") : t("profileSettings.saveChanges")}
        </Button>
      </div>
    </form>
  );
}
