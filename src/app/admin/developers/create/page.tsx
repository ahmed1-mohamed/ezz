"use client";

import React, { useMemo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RichTextEditor } from "@/components/ui";
import { getDeveloperSchema, DEVELOPER_FIELD_MAP, type FormValues } from "@/validators/developerSchema";
import { useDeveloperActions, DeveloperFormData } from "@/hooks/use-developer-actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, Eye, EyeOff, Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const COUNTRY_OPTIONS = [
  { id: "1", key: "egypt" },
  { id: "3", key: "oman" },
  { id: "2", key: "uae" },
];

export default function CreateDeveloperPage() {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();
  const { createDeveloper, isCreating } = useDeveloperActions();

  const [logoPreview, setLogoPreview] = useState<string>("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [showAdminPassword, setShowAdminPassword] = useState(false);

  const schema = useMemo(() => getDeveloperSchema(t), [t]);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    watch,
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
      sync_erp_next: false,
      erp_next: {
        admin_first_name: "",
        admin_last_name: "",
        admin_email: "",
        admin_password: "",
      },
      admin_password: "",
      logo: undefined,
    },
  });

  const syncErpNext = watch("sync_erp_next");

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Allow picking the same file again.
    e.target.value = "";
    if (file) {
      setValue("logo", file, { shouldValidate: true });
      if (!file.type.startsWith("image/")) return;
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = () => {
    const name = watch("name");
    if (!name) {
      toast.error(t("common.enterNameFirst"));
      return;
    }
    const slugified = name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setValue("slug", slugified, { shouldValidate: true, shouldDirty: true });
    toast.success(t("common.slugGenerated"));
  };

  const onSubmit = async (formDataValues: FormValues) => {
    const payload: DeveloperFormData = {
      ...formDataValues,
      logo: logoFile || undefined,
    };

    try {
      await createDeveloper(payload);
      router.push(`${routePrefix}/developers`);
    } catch (err) {
      const { summary } = applyApiFormErrors(err, {
        setError,
        getValues,
        t,
        fieldMap: DEVELOPER_FIELD_MAP,
        fallbackMessage: t("developers.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-neutral-950 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Top Header */}
        <div className="space-y-3">
          <button
            onClick={() => router.push(`${routePrefix}/developers`)}
            className="text-sm font-normal text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
            {t("developers.backToDevelopers")}
          </button>

          <h1 className="text-[22px] font-bold text-gray-900 dark:text-gray-100">
            {t("developers.addDeveloper")}
          </h1>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <FormErrorAlert message={errors.root?.server?.message} />
          
          {/* Logo Upload Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 sm:p-8 shadow-xs">
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t("developers.uploadLogo")}
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-24 h-24 rounded-xl bg-gray-50 dark:bg-neutral-800 border-2 border-dashed border-gray-300 dark:border-neutral-700 flex items-center justify-center overflow-hidden flex-shrink-0 p-1.5 shadow-2xs">
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt={t("developers.form.logoPreview")}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Upload className="h-8 w-8 text-gray-400" />
                )}
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    id="create-logo-upload"
                    accept="image/*,image/png,image/jpeg,image/jpg,image/webp,image/avif,image/svg+xml,image/gif"
                    onChange={handleLogoChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="create-logo-upload"
                    aria-invalid={!!errors.logo || undefined}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 cursor-pointer shadow-2xs transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    {t("common.chooseFiles")}
                  </label>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                    {logoFile
                      ? logoFile.name
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
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 sm:p-8 shadow-xs">
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-gray-100 mb-6">
              {t("developers.form.developerInformation")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <Label htmlFor="dev-name" className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                  {t("developers.form.developerName")} <span className="text-gray-500">*</span>
                </Label>
                <Input
                  id="dev-name"
                  placeholder={t("developers.form.developerNamePlaceholder")}
                  {...register("name")}
                  className={`bg-white dark:bg-neutral-800 text-sm h-10 ${errors.name ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.name}
                  aria-invalid={!!errors.name}
                />
                <FieldError message={errors.name?.message} />
              </div>

              <div>
                <Label htmlFor="dev-country" className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
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
                <Label htmlFor="dev-email" className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                  {t("common.email")} <span className="text-gray-500">*</span>
                </Label>
                <Input
                  id="dev-email"
                  type="email"
                  dir="ltr"
                  placeholder={t("developers.form.emailPlaceholder")}
                  {...register("email")}
                  className={`bg-white dark:bg-neutral-800 text-sm h-10 ${errors.email ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.email}
                  aria-invalid={!!errors.email}
                />
                <FieldError message={errors.email?.message} />
              </div>

              <div>
                <Label htmlFor="dev-phone" className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                  {t("common.phone")} <span className="text-gray-500">*</span>
                </Label>
                <Input
                  id="dev-phone"
                  type="tel"
                  dir="ltr"
                  placeholder={t("developers.form.contactNumberPlaceholder")}
                  {...register("phone_number")}
                  className={`bg-white dark:bg-neutral-800 text-sm h-10 ${errors.phone_number ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.phone_number}
                  aria-invalid={!!errors.phone_number}
                />
                <FieldError message={errors.phone_number?.message} />
              </div>

              <div>
                <Label htmlFor="dev-website" className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                  {t("developers.columns.website")} <span className="text-gray-500">*</span>
                </Label>
                <Input
                  id="dev-website"
                  type="url"
                  dir="ltr"
                  placeholder={t("developers.form.websitePlaceholder")}
                  {...register("website")}
                  className={`bg-white dark:bg-neutral-800 text-sm h-10 ${errors.website ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.website}
                  aria-invalid={!!errors.website}
                />
                <FieldError message={errors.website?.message} />
              </div>

              {/* md:pt-7 lines the toggle up with the Website input, below its label */}
              <div className="flex items-center gap-3 md:pt-7 md:h-[68px]">
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
            </div>

            <div className="mt-6">
              <Label className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                {t("common.shortDescription")} <span className="text-gray-500">*</span>
              </Label>
              <RichTextEditor
                content={watch("description") || ""}
                onChange={(value: string) => setValue("description", value, { shouldValidate: true, shouldDirty: true })}
                placeholder={t("developers.form.aboutPlaceholder")}
                error={!!errors.description}
              />
              <FieldError message={errors.description?.message} />
            </div>
          </div>

          {/* ERPNext Tenant Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 sm:p-8 shadow-xs">
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t("developers.form.erpnextTitle")}
            </h2>

            <div className="flex items-start gap-3">
              <Controller
                name="sync_erp_next"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Switch
                    id="dev-sync-erp-next"
                    checked={value || false}
                    onCheckedChange={onChange}
                    className="data-[state=checked]:bg-teal-500 mt-0.5"
                  />
                )}
              />
              <div>
                <Label htmlFor="dev-sync-erp-next" className="cursor-pointer font-medium text-sm text-gray-700 dark:text-gray-200">
                  {t("developers.form.syncErpNext")}
                </Label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t("developers.form.syncErpNextHint")}
                </p>
              </div>
            </div>

            {syncErpNext && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <div>
                  <Label htmlFor="dev-admin-first-name" className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                    {t("developers.form.adminFirstName")} <span className="text-gray-500">*</span>
                  </Label>
                  <Input
                    id="dev-admin-first-name"
                    type="text"
                    placeholder={t("developers.form.adminFirstNamePlaceholder")}
                    {...register("erp_next.admin_first_name")}
                    className={`bg-white dark:bg-neutral-800 text-sm h-10 ${errors.erp_next?.admin_first_name ? "" : "border-gray-200 dark:border-neutral-700"}`}
                    error={!!errors.erp_next?.admin_first_name}
                    aria-invalid={!!errors.erp_next?.admin_first_name}
                  />
                  <FieldError message={errors.erp_next?.admin_first_name?.message} />
                </div>

                <div>
                  <Label htmlFor="dev-admin-last-name" className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                    {t("developers.form.adminLastName")} <span className="text-gray-500">*</span>
                  </Label>
                  <Input
                    id="dev-admin-last-name"
                    type="text"
                    placeholder={t("developers.form.adminLastNamePlaceholder")}
                    {...register("erp_next.admin_last_name")}
                    className={`bg-white dark:bg-neutral-800 text-sm h-10 ${errors.erp_next?.admin_last_name ? "" : "border-gray-200 dark:border-neutral-700"}`}
                    error={!!errors.erp_next?.admin_last_name}
                    aria-invalid={!!errors.erp_next?.admin_last_name}
                  />
                  <FieldError message={errors.erp_next?.admin_last_name?.message} />
                </div>

                <div>
                  <Label htmlFor="dev-admin-email" className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                    {t("developers.form.adminEmail")} <span className="text-gray-500">*</span>
                  </Label>
                  <Input
                    id="dev-admin-email"
                    type="email"
                    dir="ltr"
                    placeholder={t("developers.form.adminEmailPlaceholder")}
                    {...register("erp_next.admin_email")}
                    className={`bg-white dark:bg-neutral-800 text-sm h-10 ${errors.erp_next?.admin_email ? "" : "border-gray-200 dark:border-neutral-700"}`}
                    error={!!errors.erp_next?.admin_email}
                    aria-invalid={!!errors.erp_next?.admin_email}
                  />
                  <FieldError message={errors.erp_next?.admin_email?.message} />
                </div>

                <div>
                  <Label htmlFor="dev-admin-password" className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                    {t("developers.form.adminPassword")} <span className="text-gray-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="dev-admin-password"
                      type={showAdminPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder={t("developers.form.adminPasswordPlaceholder")}
                      {...register("erp_next.admin_password")}
                      className={`pe-10 bg-white dark:bg-neutral-800 text-sm h-10 ${errors.erp_next?.admin_password ? "" : "border-gray-200 dark:border-neutral-700"}`}
                      error={!!errors.erp_next?.admin_password}
                      aria-invalid={!!errors.erp_next?.admin_password}
                    />
                    <button
                      type="button"
                      onClick={() => setShowAdminPassword((v) => !v)}
                      className="absolute inset-y-0 end-0 flex items-center px-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      tabIndex={-1}
                    >
                      {showAdminPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.erp_next?.admin_password ? (
                    <FieldError message={errors.erp_next?.admin_password.message} />
                  ) : (
                    <p className="text-xs text-gray-400 mt-1.5">{t("developers.form.adminPasswordHint")}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Search Engine Optimization (SEO) Card */}
          <div className="bg-[#f8fafc] dark:bg-neutral-900/60 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 sm:p-8 shadow-xs">
            <h2 className="text-[16px] font-bold text-gray-900 dark:text-gray-100 mb-6">
              {t("properties.create.seo.title")}
            </h2>

            <div className="space-y-5">
              <div>
                <Label className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                  {t("properties.create.seo.slug")}
                </Label>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 flex items-center">
                    <span className="absolute start-4 text-gray-400 text-sm">/</span>
                    <Input
                      {...register("slug")}
                      placeholder="my-property"
                      dir="ltr"
                      className={`ps-8 bg-white dark:bg-neutral-800 text-sm h-10 ${errors.slug ? "" : "border-gray-200 dark:border-neutral-700"}`}
                      error={!!errors.slug}
                      aria-invalid={!!errors.slug}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={generateSlug}
                    className="border-teal-600 text-teal-700 hover:bg-teal-50 bg-teal-50/40 font-medium px-5 h-10 rounded-lg shadow-2xs"
                  >
                    {t("properties.create.seo.generate")}
                  </Button>
                </div>
                {errors.slug ? (
                  <FieldError message={errors.slug.message} />
                ) : (
                  <p className="text-xs text-gray-400 mt-1.5">{t("developers.form.slugHelp")}</p>
                )}
              </div>

              <div>
                <Label className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                  {t("properties.create.seo.metaTitle")}
                </Label>
                <Input
                  {...register("meta_title")}
                  placeholder={t("properties.create.seo.metaTitlePlaceholder")}
                  className={`bg-white dark:bg-neutral-800 text-sm h-10 ${errors.meta_title ? "" : "border-gray-200 dark:border-neutral-700"}`}
                  error={!!errors.meta_title}
                  aria-invalid={!!errors.meta_title}
                />
                <FieldError message={errors.meta_title?.message} />
              </div>

              <div>
                <Label className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-1.5 block">
                  {t("properties.create.seo.metaDescription")}
                </Label>
                <textarea
                  {...register("meta_description")}
                  rows={4}
                  aria-invalid={!!errors.meta_description}
                  className={`w-full rounded-lg border ${errors.meta_description ? "border-red-500" : "border-gray-200 dark:border-neutral-700"} bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
                />
                <FieldError message={errors.meta_description?.message} />
                <p className="text-xs text-gray-400 mt-1 text-end">{t("properties.create.seo.metaDescriptionPlaceholder")}</p>
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-start gap-3 pt-2">
            <Button
              type="submit"
              disabled={isCreating || isSubmitting}
              className="bg-[#006262] hover:bg-[#004d4d] text-white text-sm font-medium px-6 py-2.5 h-10 rounded-lg shadow-2xs"
            >
              {isCreating || isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin me-2" />
                  {t("common.saving")}
                </>
              ) : (
                t("developers.form.saveDeveloper")
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push(`${routePrefix}/developers`)}
              disabled={isCreating || isSubmitting}
              className="bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 hover:bg-gray-50 text-gray-700 dark:text-gray-200 text-sm font-medium px-6 py-2.5 h-10 rounded-lg shadow-2xs"
            >
              {t("common.cancel")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
