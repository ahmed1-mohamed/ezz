"use client";

import { useEffect, useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/modal";
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
import { Upload, Loader2 } from "lucide-react";
import { RichTextEditor } from "@/components/ui";
import { Switch } from "@/components/ui/switch";
import { getDeveloperSchema, DEVELOPER_FIELD_MAP, type FormValues } from "@/validators/developerSchema";
import { useDeveloperActions } from "@/hooks/use-developer-actions";
import { DeveloperFormData } from "@/hooks/use-developer-actions";
import { AdminDevelopersService } from "@/features/developers/services/AdminDevelopersService";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { toast } from "sonner";

const getStatusOptions = (t: (key: string) => string) => [
  { label: t("common.active"), value: "active" },
  { label: t("common.inactive"), value: "inactive" },
];

interface EditDeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
  developerId: number | null;
  onSuccess?: () => void;
}

export function EditDeveloperModal({
  isOpen,
  onClose,
  developerId,
  onSuccess,
}: EditDeveloperModalProps) {
  const { t } = useLanguage();
  const { updateDeveloper, isUpdating } = useDeveloperActions();
  const statusOptions = getStatusOptions(t);
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
    formState: { errors, isSubmitted },
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
      slug: "",
      meta_title: "",
      meta_description: "",
      logo: undefined,
    },
  });

  const { data: queryData, isLoading, isError } = useQuery({
    queryKey: ["developerDetails", developerId],
    queryFn: async () => {
      if (developerId == null) return null;
      const res: any = await AdminDevelopersService.getDeveloper(developerId);
      return res.data;
    },
    enabled: developerId != null && isOpen,
  });

  const responsePayload = (queryData as any)?.data || queryData;
  const data = responsePayload?.data || responsePayload || null;

  useEffect(() => {
    if (data) {
      reset({
        name: data.name ?? "",
        email: data.email ?? "",
        phone_number: data.phone_number ?? "",
        website: data.website ?? "",
        status: data.status ?? "active",
        description: data.description ?? "",
        is_top: data.is_top === 1,
        slug: data.slug ?? "",
        meta_title: data.meta_title ?? "",
        meta_description: data.meta_description ?? "",
      });
      if (data.logo) {
        setExistingLogo(data.logo);
        setLogoPreview(data.logo);
      }
    }
  }, [data, reset]);

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

  const handleClose = () => {
    if (isUpdating) return;
    reset();
    setLogoPreview("");
    setLogoFile(null);
    setExistingLogo("");
    onClose();
  };

  const onSubmit = async (data: FormValues) => {
    if (!developerId) return;

    const formData: DeveloperFormData = {
      ...data,
      logo: logoFile || undefined,
    };

    try {
      // useDeveloperActions already invalidates ["developers"] and ["developerDetails"].
      await updateDeveloper({ developerId, data: formData });
      reset();
      setLogoPreview("");
      setLogoFile(null);
      setExistingLogo("");
      onClose();
      onSuccess?.();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: DEVELOPER_FIELD_MAP,
        fallbackMessage: t("developers.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("developers.editTitle")}
      size="xl"
      showCloseButton={false}
      footer={
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isUpdating}
          >
            {t("common.close")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={handleSubmit(onSubmit)}
            disabled={isUpdating || isLoading || isError}
          >
            {isUpdating && <Loader2 className="h-4 w-4 me-2 animate-spin" />}
            {isUpdating
              ? t("common.updating")
              : t("developers.updateDeveloper")}
          </Button>
        </div>
      }
    >
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600 mb-4" />
          <p className="text-gray-500">
            {t("developers.details.loading")}
          </p>
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-red-500 mb-2">
            {t("developers.details.errorLoading")}
          </p>
          <Button variant="outline" onClick={handleClose}>
            {t("common.cancel")}
          </Button>
        </div>
      ) : (
        <div className="max-h-[calc(100vh-280px)] overflow-y-auto pe-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <FormErrorAlert message={errors.root?.server?.message} />
            <div>
              <Label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 block">
                {t("developers.uploadLogo")}
              </Label>
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-lg bg-gray-50 dark:bg-neutral-800 border-2 border-dashed border-gray-300 dark:border-neutral-700 flex items-center justify-center overflow-hidden flex-shrink-0 p-1">
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

                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="file"
                      id="logo-upload-edit"
                      accept="image/*,image/png,image/jpeg,image/jpg,image/webp,image/avif,image/svg+xml,image/gif"
                      onChange={handleLogoChange}
                      aria-invalid={!!errors.logo || undefined}
                      className="sr-only"
                    />
                    <label
                      htmlFor="logo-upload-edit"
                      aria-invalid={!!errors.logo || undefined}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 cursor-pointer shadow-2xs"
                    >
                      {t("common.chooseFiles")}
                    </label>
                    <span className="ms-3 text-sm text-gray-500 dark:text-gray-400">
                      {logoFile
                        ? logoFile.name
                        : existingLogo
                          ? t("common.currentLogo")
                          : t("common.noFileChosen")}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {t("developers.logoFormatHint")}
                  </p>
                  <FieldError message={errors.logo?.message as string | undefined} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="developer-name" className="required">
                  {t("developers.columns.developer")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="developer-name"
                  placeholder={t("developers.form.developerNamePlaceholder")}
                  {...register("name")}
                  className="mt-1"
                  error={!!errors.name}
                  aria-invalid={!!errors.name}
                />
                <FieldError message={errors.name?.message} />
              </div>
              <div>
                <Label htmlFor="email" className="required">
                  {t("common.email")} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  dir="ltr"
                  placeholder={t("developers.form.emailPlaceholder")}
                  {...register("email")}
                  className="mt-1"
                  error={!!errors.email}
                  aria-invalid={!!errors.email}
                />
                <FieldError message={errors.email?.message} />
              </div>
            </div>

            <div>
              <Label htmlFor="contact-number" className="required">
                {t("common.phone")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="contact-number"
                type="tel"
                dir="ltr"
                placeholder={t("developers.form.contactNumberPlaceholder")}
                {...register("phone_number")}
                className="mt-1"
                error={!!errors.phone_number}
                aria-invalid={!!errors.phone_number}
              />
              <FieldError message={errors.phone_number?.message} />
            </div>

            <div>
              <Label htmlFor="website" className="required">
                {t("developers.columns.website")} <span className="text-red-500">*</span>
              </Label>
              <Input
                id="website"
                type="url"
                dir="ltr"
                placeholder={t("developers.form.websitePlaceholder")}
                {...register("website")}
                className="mt-1"
                error={!!errors.website}
                aria-invalid={!!errors.website}
              />
              <FieldError message={errors.website?.message} />
            </div>

            <div>
              <Label htmlFor="developer-status-edit">{t("developers.status")}</Label>
              <Controller
                name="status"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Select value={value || ""} onValueChange={onChange}>
                    <SelectTrigger
                      id="developer-status-edit"
                      className="mt-1"
                      error={!!errors.status}
                      aria-invalid={!!errors.status}
                    >
                      <SelectValue placeholder={t("common.selectStatus")} />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError message={errors.status?.message} />
            </div>

            <div className="flex items-center gap-3">
              <Controller
                name="is_top"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Switch
                    id="is-top-developer"
                    checked={value || false}
                    onCheckedChange={onChange}
                  />
                )}
              />
              <Label htmlFor="is-top-developer" className="cursor-pointer">
                {t("developers.details.isTopDeveloper")}
              </Label>
            </div>

            <div>
              <Label className="required">
                {t("common.shortDescription")} <span className="text-red-500">*</span>
              </Label>
              <RichTextEditor
                content={watch("description") || ""}
                onChange={(value: string) => setValue("description", value, { shouldValidate: isSubmitted })}
                placeholder={t("common.writeTextHere")}
                error={!!errors.description}
              />
              <FieldError message={errors.description?.message} />
            </div>

            {/* SEO Section */}
            <SeoFieldsSection
              register={register}
              setValue={setValue}
              watch={watch}
              nameFieldName="name"
              slugPlaceholder="developer-slug"
              errors={{
                slug: errors.slug?.message,
                metaTitle: errors.meta_title?.message,
                metaDescription: errors.meta_description?.message,
              }}
            />
          </form>
        </div>
      )}
    </Modal>
  );
}