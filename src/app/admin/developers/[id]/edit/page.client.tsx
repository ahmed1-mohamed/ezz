"use client";

import React, { useState, useEffect, use, useMemo } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RichTextEditor } from "@/components/ui";
import { SafeImage } from "@/components/ui/safe-image";
import { EmptyState } from "@/components/ui/empty-state";
import { getDeveloperSchema, DEVELOPER_FIELD_MAP, type FormValues } from "@/validators/developerSchema";
import { useDeveloperActions, DeveloperFormData } from "@/hooks/use-developer-actions";
import { AdminDevelopersService } from "@/features/developers/services/AdminDevelopersService";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { ChevronLeft, Upload, Loader2, Save } from "lucide-react";
import { toast } from "sonner";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

interface EditDeveloperPageProps {
  params?: Promise<{ id: string }> | { id: string };
}

const COUNTRY_OPTIONS = [
  { id: "1", key: "egypt" },
  { id: "3", key: "oman" },
  { id: "2", key: "uae" },
];

export default function EditDeveloperPage({ params }: EditDeveloperPageProps) {
  const routerParams = useParams();
  const unwrappedParams = params instanceof Promise ? use(params) : params;
  const rawId = unwrappedParams?.id || (routerParams?.id as string);
  const developerId = Number(rawId);
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();
  const { updateDeveloper, isUpdating } = useDeveloperActions();

  const [logoPreview, setLogoPreview] = useState<string>("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [existingLogo, setExistingLogo] = useState<string>("");

  const schema = useMemo(() => getDeveloperSchema(t, "edit"), [t]);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    watch,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      website: "",
      description: "",
      status: "active",
      is_top: false,
      country_id: "2",
      slug: "",
      meta_title: "",
      meta_description: "",
      logo: undefined,
    },
  });

  // Shares the cache entry (and response shape) with useDeveloperDetails on the details page.
  const { data: queryData, isLoading, isError, error } = useQuery({
    queryKey: ["developerDetails", developerId],
    queryFn: async () => {
      const res: any = await AdminDevelopersService.getDeveloper(developerId);
      return res.data;
    },
    enabled: !!developerId,
  });

  const responsePayload = (queryData as any)?.data || queryData;
  const developer = responsePayload?.data || responsePayload || null;

  useEffect(() => {
    if (developer) {
      const devCountryId = developer.country_id
        ? String(developer.country_id)
        : developer.country?.id
          ? String(developer.country.id)
          : developer.countries?.toLowerCase().includes("egypt")
            ? "1"
            : developer.countries?.toLowerCase().includes("oman")
              ? "3"
              : "2";

      reset({
        name: developer.name ?? developer.developer_name ?? "",
        email: developer.email ?? "",
        phone_number: developer.phone_number ?? "",
        website: developer.website ?? "",
        status: developer.status ?? "active",
        description: developer.description ?? "",
        is_top: developer.is_top === 1 || developer.is_top === true,
        country_id: devCountryId,
        slug: developer.slug ?? "",
        meta_title: developer.meta_title ?? "",
        meta_description: developer.meta_description ?? "",
      });
      if (developer.logo) {
        setExistingLogo(developer.logo);
        setLogoPreview(developer.logo);
      }
    }
  }, [developer, reset]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Allow picking the same file again.
    e.target.value = "";
    if (file) {
      setValue("logo", file, { shouldValidate: true });
      if (!file.type.startsWith("image/")) return;
      setLogoFile(file);
      setExistingLogo("");
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (formDataValues: FormValues) => {
    if (!developerId) return;

    const payload: DeveloperFormData = {
      ...formDataValues,
      logo: logoFile || undefined,
    };

    try {
      // useDeveloperActions already invalidates ["developers"] and ["developerDetails"].
      await updateDeveloper({ developerId, data: payload });
      router.push(`${routePrefix}/developers/${developerId}`);
    } catch (err) {
      const { summary } = applyApiFormErrors(err, {
        setError,
        getValues,
        t,
        fieldMap: DEVELOPER_FIELD_MAP,
        fallbackMessage: t("developers.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600 mx-auto mb-4" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("developers.details.loading")}
          </p>
        </div>
      </div>
    );
  }

  if (isError || !developer) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <EmptyState
            type="error"
            title={t("developers.details.errorLoading")}
            message={getApiErrorMessage(error, t, t("developers.messages.loadFailed"))}
          />
          <Button
            onClick={() => router.push(`${routePrefix}/developers`)}
            className="mt-6 bg-teal-600 hover:bg-teal-700 text-white"
          >
            {t("developers.details.backToDevelopers")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-neutral-900 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        <div className="space-y-4">
          <button
            onClick={() => router.push(`${routePrefix}/developers`)}
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center gap-1.5 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
            {t("developers.backToDevelopers")}
          </button>
          
          <div className="flex items-center justify-between">
            <h1 className="text-[22px] font-bold text-gray-900 dark:text-gray-100">
              {t("developers.editTitle")}
            </h1>
            
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push(`${routePrefix}/developers/${developerId}`)}
                disabled={isUpdating || isSubmitting}
                className="bg-white"
              >
                {t("common.cancel")}
              </Button>
              <Button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isUpdating || isSubmitting}
                className="bg-teal-600 hover:bg-teal-700 text-white gap-2 px-6"
              >
                {isUpdating || isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("common.updating")}
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    {t("common.save")}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <FormErrorAlert message={errors.root?.server?.message} />
          
          {/* Logo upload card */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 space-y-4 shadow-xs">
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 pb-2">
              {t("developers.uploadLogo")}
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-24 h-24 rounded-xl bg-gray-50 dark:bg-neutral-800 border-2 border-dashed border-gray-300 dark:border-neutral-700 flex items-center justify-center overflow-hidden flex-shrink-0 p-1.5 shadow-2xs">
                {logoPreview ? (
                  <SafeImage
                    src={logoPreview}
                    alt={t("developers.form.logoPreview")}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                    fallbackSrc="/images/default-logo.svg"
                  />
                ) : (
                  <Upload className="h-8 w-8 text-gray-400" />
                )}
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    id="page-logo-upload"
                    accept="image/*,image/png,image/jpeg,image/jpg,image/webp,image/avif,image/svg+xml,image/gif"
                    onChange={handleLogoChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="page-logo-upload"
                    aria-invalid={!!errors.logo || undefined}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 cursor-pointer shadow-2xs transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    {t("common.chooseFiles")}
                  </label>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                    {logoFile
                      ? logoFile.name
                      : existingLogo
                        ? t("common.currentLogo")
                        : t("common.noFileChosen")}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t("developers.logoFormatHint")}
                </p>
                <FieldError message={errors.logo?.message as string | undefined} />
              </div>
            </div>
          </div>

          {/* Developer Information Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-8 shadow-xs">
            <h2 className="text-[17px] font-bold text-gray-800 dark:text-gray-100 mb-6">
              {t("developers.form.developerInformation")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <Label htmlFor="dev-name" className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                  {t("developers.form.nameAr")} <span className="text-gray-500">*</span>
                </Label>
                <Input
                  id="dev-name"
                  {...register("name")}
                  className={`bg-white dark:bg-neutral-800 ${errors.name ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.name}
                  aria-invalid={!!errors.name}
                />
                <FieldError message={errors.name?.message} />
              </div>
              
              <div>
                <Label htmlFor="dev-name-en" className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                  {t("developers.form.nameEn")}
                </Label>
                <Input
                  id="dev-name-en"
                  name="name_en"
                  placeholder={t("developers.form.nameEnEditPlaceholder")}
                  className="bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700"
                />
              </div>

              <div>
                <Label htmlFor="dev-country" className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                  {t("developers.country")}
                </Label>
                <Controller
                  name="country_id"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value || "2"}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger id="dev-country" error={!!errors.country_id} className="bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-sm h-10">
                        <SelectValue placeholder={t("developers.country")} />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
                        {COUNTRY_OPTIONS.map((c) => (
                          <SelectItem key={c.id} value={c.id} className="text-xs sm:text-sm cursor-pointer">
                            {t(`common.countries.${c.key}`)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError message={errors.country_id?.message} />
              </div>

              <div>
                <Label htmlFor="dev-email" className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                  {t("common.email")} <span className="text-gray-500">*</span>
                </Label>
                <Input
                  id="dev-email"
                  type="email"
                  dir="ltr"
                  {...register("email")}
                  className={`bg-white dark:bg-neutral-800 ${errors.email ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.email}
                  aria-invalid={!!errors.email}
                />
                <FieldError message={errors.email?.message} />
              </div>

              <div>
                <Label htmlFor="dev-phone" className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                  {t("common.phone")} <span className="text-gray-500">*</span>
                </Label>
                <Input
                  id="dev-phone"
                  type="tel"
                  dir="ltr"
                  {...register("phone_number")}
                  className={`bg-white dark:bg-neutral-800 ${errors.phone_number ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.phone_number}
                  aria-invalid={!!errors.phone_number}
                />
                <FieldError message={errors.phone_number?.message} />
              </div>

              <div>
                <Label htmlFor="dev-website" className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                  {t("developers.columns.website")} <span className="text-gray-500">*</span>
                </Label>
                <Input
                  id="dev-website"
                  type="url"
                  dir="ltr"
                  {...register("website")}
                  className={`bg-white dark:bg-neutral-800 ${errors.website ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.website}
                  aria-invalid={!!errors.website}
                />
                <FieldError message={errors.website?.message} />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 mb-5">
              <Controller
                name="is_top"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Switch
                    id="dev-is-top"
                    checked={value || false}
                    onCheckedChange={onChange}
                    className="data-[state=checked]:bg-teal-500"
                  />
                )}
              />
              <Label htmlFor="dev-is-top" className="cursor-pointer font-medium text-sm text-gray-700 dark:text-gray-200">
                {t("developers.form.topDeveloper")}
              </Label>
            </div>

            <div className="pt-2">
              <Label className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                {t("common.shortDescription")} <span className="text-gray-500">*</span>
              </Label>
              <RichTextEditor
                content={watch("description") || ""}
                onChange={(value: string) => setValue("description", value, { shouldValidate: true, shouldDirty: true })}
                error={!!errors.description}
              />
              <FieldError message={errors.description?.message} />
            </div>
          </div>

          {/* SEO Section */}
          <div className="bg-[#f8fafc] dark:bg-neutral-800/50 rounded-xl border border-gray-200 dark:border-neutral-800 p-8 shadow-xs">
            <h2 className="text-[17px] font-bold text-gray-800 dark:text-gray-100 mb-6">
              {t("properties.create.seo.title")}
            </h2>
            
            <div className="space-y-5">
              <div>
                <Label className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                  {t("properties.create.seo.slug")}
                </Label>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 flex items-center">
                    <span className="absolute start-4 text-gray-400">/</span>
                    <Input
                      {...register("slug")}
                      dir="ltr"
                      className={`ps-8 bg-white dark:bg-neutral-800 ${errors.slug ? "" : "border-gray-200 dark:border-neutral-700"}`}
                      error={!!errors.slug}
                      aria-invalid={!!errors.slug}
                    />
                  </div>
                  <Button type="button" variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50 bg-teal-50/30">
                    {t("properties.create.seo.generate")}
                  </Button>
                </div>
                {errors.slug ? (
                  <FieldError message={errors.slug.message} />
                ) : (
                  <p className="text-xs text-gray-400 mt-2">{t("developers.form.slugHelp")}</p>
                )}
              </div>

              <div>
                <Label className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                  {t("properties.create.seo.metaTitle")}
                </Label>
                <Input
                  {...register("meta_title")}
                  placeholder={t("properties.create.seo.metaTitlePlaceholder")}
                  className={`bg-white dark:bg-neutral-800 ${errors.meta_title ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.meta_title}
                  aria-invalid={!!errors.meta_title}
                />
                <FieldError message={errors.meta_title?.message} />
              </div>

              <div>
                <Label className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-1.5 block">
                  {t("properties.create.seo.metaDescription")}
                </Label>
                <textarea
                  {...register("meta_description")}
                  rows={4}
                  aria-invalid={!!errors.meta_description}
                  className={`w-full rounded-md border ${errors.meta_description ? "border-red-500" : "border-gray-200 dark:border-neutral-700"} bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                />
                <FieldError message={errors.meta_description?.message} />
                <p className="text-xs text-gray-400 mt-1 text-end">{t("properties.create.seo.metaDescriptionPlaceholder")}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
