"use client";

import { use, useState, useEffect, useMemo, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { type FieldErrors, type Resolver } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { toast } from "sonner";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { FormErrorAlert } from "@/components/ui/form-message";
import { getEditExpertSchema, EXPERT_FIELD_MAP } from "@/validators/expertSchema";
import { useEditExpertData } from "@/hooks/use-edit-expert";
import { useExpertActions } from "@/hooks/use-expert-actions";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";

import { TabKey, ExpertFormValues, CertificationItem } from "./components/types";
import { EditExpertHeader } from "./components/EditExpertHeader";
import { EditExpertTabsNav } from "./components/EditExpertTabsNav";
import { EditBasicInfoTab } from "./components/EditBasicInfoTab";
import { EditProfessionalTab } from "./components/EditProfessionalTab";
import { EditSpecializationsTab } from "./components/EditSpecializationsTab";
import { EditPricingTab } from "./components/EditPricingTab";

/** Which tab shows each form field, in tab order. */
const TAB_FIELDS: Array<[TabKey, Array<keyof ExpertFormValues>]> = [
  ["basic_info", ["image", "display_name", "title", "email", "phone_number", "bio", "status", "podcast"]],
  ["professional", ["years_experience", "website", "linkedin", "certifications"]],
  ["specializations", ["categories", "languages", "countries"]],
  ["pricing", ["currency", "starting_from", "rate_per_30min_cents"]],
];

const findTabWithError = (hasError: (field: keyof ExpertFormValues) => boolean): TabKey | undefined =>
  TAB_FIELDS.find(([, fields]) => fields.some(hasError))?.[0];

interface EditExpertPageProps {
  params?: Promise<{ id: string }> | { id: string };
}

export default function EditExpertPage({ params }: EditExpertPageProps) {
  const routerParams = useParams();
  const unwrappedParams = params instanceof Promise ? use(params) : params;
  const rawId = unwrappedParams?.id || (routerParams?.id as string);
  const expertId = Number(rawId);

  const router = useRouter();
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState<TabKey>("basic_info");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [certifications, setCertifications] = useState<CertificationItem[]>([
    { cert_name: "" },
  ]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);

  const {
    expert,
    languages,
    categories,
    countries,
    loading,
    isError,
    error,
  } = useEditExpertData(expertId);

  const { updateExpert, isUpdating } = useExpertActions();

  // Stable form values derived from expert data
  const formValues = useMemo<ExpertFormValues | undefined>(() => {
    if (!expert) return undefined;
    const initialCerts: CertificationItem[] =
      Array.isArray(expert.certifications) && expert.certifications.length > 0
        ? expert.certifications.map((c: any) => ({
            cert_name: typeof c === "string" ? c : c.cert_name || "",
          }))
        : [{ cert_name: "" }];

    return {
      image: null,
      display_name: expert.display_name || "",
      title: expert.title || "",
      email: expert.email || expert.user?.email || "",
      phone_number: expert.phone_number || expert.user?.phone_number || "",
      bio: expert.bio || "",
      status: expert.status || "approved",
      podcast: Boolean(expert.podcast),
      years_experience: expert.years_experience ?? 0,
      website: expert.website || "",
      linkedin: expert.linkedin || "",
      currency: expert.currency || "AED",
      starting_from: expert.starting_from ?? 0,
      rate_per_30min_cents: expert.rate_per_30min_cents ?? 0,
      languages: (expert.languages || [])
        .map(Number)
        .filter((id: number) => !isNaN(id) && id > 0),
      categories: (expert.categories || [])
        .map(Number)
        .filter((id: number) => !isNaN(id) && id > 0),
      countries: (expert.countries || [])
        .map(Number)
        .filter((id: number) => !isNaN(id) && id > 0),
      certifications: initialCerts,
    };
  }, [expert]);

  const schema = useMemo(() => getEditExpertSchema(t), [t]);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    setError,
    getValues,
    getFieldState,
    formState: { errors },
  } = useForm<ExpertFormValues>({
    // Validates every tab on submit, including fields on tabs that aren't mounted.
    resolver: zodResolver(schema) as unknown as Resolver<ExpertFormValues>,
    values: formValues,
    defaultValues: {
      image: null,
      display_name: "",
      title: "",
      email: "",
      phone_number: "",
      bio: "",
      status: "approved",
      podcast: false,
      years_experience: 0,
      website: "",
      linkedin: "",
      currency: "AED",
      starting_from: 0,
      rate_per_30min_cents: 0,
      languages: [],
      categories: [],
      countries: [],
      certifications: [{ cert_name: "" }],
    },
  });

  // Track initialization to ensure UI state (certifications, photo) is only set once per expert ID
  const initializedExpertIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (expert && initializedExpertIdRef.current !== expert.expert_id) {
      initializedExpertIdRef.current = expert.expert_id;

      const initialCerts: CertificationItem[] =
        Array.isArray(expert.certifications) && expert.certifications.length > 0
          ? expert.certifications.map((c: any) => ({
              cert_name: typeof c === "string" ? c : c.cert_name || "",
            }))
          : [{ cert_name: "" }];

      setCertifications(initialCerts);

      if (expert.photo_url) {
        setExistingImage(expert.photo_url);
        setImagePreview(expert.photo_url);
      } else {
        setExistingImage(null);
        setImagePreview(null);
      }
    }
  }, [expert]);

  const onSubmit = async (data: ExpertFormValues) => {
    if (!expertId) return;

    // Validate that languages, categories, and countries contain valid numeric IDs
    const validCategories = (data.categories || [])
      .map(Number)
      .filter((id) => !isNaN(id) && id > 0);
    const validLanguages = (data.languages || [])
      .map(Number)
      .filter((id) => !isNaN(id) && id > 0);
    const validCountries = (data.countries || [])
      .map(Number)
      .filter((id) => !isNaN(id) && id > 0);

    if (validCategories.length === 0) {
      toast.error(
        t("experts.edit.form.validation.selectCategory"),
      );
      setActiveTab("specializations");
      return;
    }

    if (validLanguages.length === 0) {
      toast.error(
        t("experts.edit.form.validation.selectLanguage"),
      );
      setActiveTab("specializations");
      return;
    }

    if (validCountries.length === 0) {
      toast.error(
        t("experts.edit.form.validation.selectCountry"),
      );
      setActiveTab("specializations");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("display_name", data.display_name.trim());
      if (data.title) formData.append("title", data.title.trim());
      if (data.bio) formData.append("bio", data.bio.trim());
      if (
        data.years_experience !== undefined &&
        data.years_experience !== null &&
        data.years_experience !== "" &&
        !isNaN(Number(data.years_experience))
      ) {
        formData.append("years_experience", String(Number(data.years_experience)));
      }
      if (data.website) formData.append("website", data.website.trim());
      if (data.linkedin) formData.append("linkedin", data.linkedin.trim());
      if (data.currency) formData.append("currency", data.currency);
      if (
        data.starting_from !== undefined &&
        data.starting_from !== null &&
        data.starting_from !== "" &&
        !isNaN(Number(data.starting_from))
      ) {
        formData.append("starting_from", String(Number(data.starting_from)));
      }
      if (
        data.rate_per_30min_cents !== undefined &&
        data.rate_per_30min_cents !== null &&
        data.rate_per_30min_cents !== "" &&
        !isNaN(Number(data.rate_per_30min_cents))
      ) {
        formData.append(
          "rate_per_30min_cents",
          String(Number(data.rate_per_30min_cents)),
        );
      }
      if (data.status) formData.append("status", data.status);
      formData.append("podcast", data.podcast ? "1" : "0");

      const filteredCerts = certifications.filter(
        (c) => c.cert_name && c.cert_name.trim() !== "",
      );
      if (filteredCerts.length > 0) {
        filteredCerts.forEach((cert, index) => {
          formData.append(
            `certifications[${index}][cert_name]`,
            cert.cert_name.trim(),
          );
        });
      }

      // Languages: send valid numeric indices
      validLanguages.forEach((langId, index) => {
        formData.append(`languages[${index}]`, String(langId));
      });

      // Categories: send valid numeric indices
      validCategories.forEach((catId, index) => {
        formData.append(`categories[${index}]`, String(catId));
      });

      // Countries: send valid numeric indices
      validCountries.forEach((countryId, index) => {
        formData.append(`countries[${index}]`, String(countryId));
      });

      if (data.image instanceof File) {
        formData.append("photo", data.image);
      }

      await updateExpert({ expertId, formData });
      router.push(`/admin/experts/${expertId}`);
      router.refresh();
    } catch (err) {
      const { summary } = applyApiFormErrors(err, {
        setError,
        getValues,
        t,
        fieldMap: EXPERT_FIELD_MAP,
        fallbackMessage: t("experts.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
      // Open the first tab that has a field rejected by the server.
      const tabWithError = findTabWithError((field) => !!getFieldState(field).error);
      if (tabWithError) setActiveTab(tabWithError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalid = (formErrors: FieldErrors<ExpertFormValues>) => {
    const tabWithError = findTabWithError((field) => !!formErrors[field]);
    if (tabWithError) setActiveTab(tabWithError);
    toast.error(t("validation.fillRequiredFields"));
  };

  const handleCancel = () => {
    router.push(`/admin/experts/${expertId}`);
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#008081] mx-auto mb-4" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("experts.messages.loadingData")}
          </p>
        </div>
      </div>
    );
  }

  if (isError || (!loading && !expert)) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <EmptyState
            type="error"
            title={t("experts.messages.loadFailed")}
            message={getApiErrorMessage(error, t, t("experts.messages.loadFailed"))}
          />
          <Button
            onClick={() => router.push("/admin/experts")}
            className="mt-6 bg-[#008081] hover:bg-[#006666] text-white"
          >
            {t("experts.edit.buttons.backToExperts")}
          </Button>
        </div>
      </div>
    );
  }

  const selectedCategories = watch("categories") || [];
  const selectedLanguages = watch("languages") || [];
  const selectedCountries = watch("countries") || [];
  const totalSpecsCount =
    selectedCategories.length +
    selectedLanguages.length +
    selectedCountries.length;

  const packages = expert?.packages || [];

  return (
    <div className="p-3 sm:p-4 lg:p-6 space-y-6 max-w-7xl mx-auto overflow-hidden">
      <EditExpertHeader
        expertId={expertId}
        expertName={expert?.display_name || watch("display_name") || ""}
        isSubmitting={isSubmitting || isUpdating}
        onSave={handleSubmit(onSubmit, onInvalid)}
      />

      <EditExpertTabsNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        counts={{
          certifications:
            certifications.filter((c) => c.cert_name?.trim()).length ||
            undefined,
          specializations: totalSpecsCount || undefined,
          packages: packages.length || undefined,
        }}
      />

      <FormErrorAlert message={errors.root?.server?.message} />

      <div>
        {activeTab === "basic_info" && (
          <EditBasicInfoTab
            expert={expert}
            register={register}
            setValue={setValue}
            watch={watch}
            control={control}
            errors={errors}
            existingImage={existingImage}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            isSubmitting={isSubmitting || isUpdating}
            onCancel={handleCancel}
            onNext={() => setActiveTab("professional")}
            onSubmit={handleSubmit(onSubmit, onInvalid)}
          />
        )}

        {activeTab === "professional" && (
          <EditProfessionalTab
            expert={expert}
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
            certifications={certifications}
            setCertifications={setCertifications}
            isSubmitting={isSubmitting || isUpdating}
            onCancel={handleCancel}
            onPrev={() => setActiveTab("basic_info")}
            onNext={() => setActiveTab("specializations")}
            onSubmit={handleSubmit(onSubmit, onInvalid)}
          />
        )}

        {activeTab === "specializations" && (
          <EditSpecializationsTab
            register={register}
            setValue={setValue}
            watch={watch}
            control={control}
            errors={errors}
            categories={categories}
            languages={languages}
            countries={countries}
            isSubmitting={isSubmitting || isUpdating}
            onCancel={handleCancel}
            onPrev={() => setActiveTab("professional")}
            onNext={() => setActiveTab("pricing")}
            onSubmit={handleSubmit(onSubmit, onInvalid)}
          />
        )}

        {activeTab === "pricing" && (
          <EditPricingTab
            register={register}
            setValue={setValue}
            watch={watch}
            control={control}
            errors={errors}
            packages={packages}
            isSubmitting={isSubmitting || isUpdating}
            onCancel={handleCancel}
            onPrev={() => setActiveTab("specializations")}
            onSubmit={handleSubmit(onSubmit, onInvalid)}
          />
        )}
      </div>
    </div>
  );
}
