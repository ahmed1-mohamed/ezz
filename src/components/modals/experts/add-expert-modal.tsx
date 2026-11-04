"use client";

import { useEffect, useMemo, useState } from "react";
import { type FieldErrors, type Resolver } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getExpertSchema, EXPERT_FIELD_MAP } from "@/validators/expertSchema";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors, scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useExpertActions } from "@/hooks/use-expert-actions";
import { ExpertBasicInfoForm } from "./add-expert-modal-components/ExpertBasicInfoForm";
import { ExpertProfessionalForm } from "./add-expert-modal-components/ExpertProfessionalForm";
import { ExpertFormData, Certifications } from "./add-expert-modal-components/types";
import { API_BASE_URL, DASHBOARD_API_BASE_URL } from "@/data/config";

/** Fields shown on step 1; the rest are on step 2. */
const STEP_ONE_FIELDS = ["image", "display_name", "email", "phone_number", "bio", "title"] as const;

const hasStepOneError = (errors: FieldErrors<ExpertFormData>) =>
  STEP_ONE_FIELDS.some((field) => !!errors[field]);

interface AddExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddExpertModal({ isOpen, onClose }: AddExpertModalProps) {
  const { data: session } = useSession();
  const { createExpert, isCreating } = useExpertActions();
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [stepOneAttempted, setStepOneAttempted] = useState(false);
  const [certifications, setCertificationsState] = useState<Certifications[]>([
    { cert_name: "" },
  ]);
  const [selectedLanguages, setSelectedLanguages] = useState<number[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<number[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const apiWithoutDashboard = API_BASE_URL;
  const apiDashboard = DASHBOARD_API_BASE_URL;

  const { data: languagesData } = useQuery({
    queryKey: ["expert-languages"],
    queryFn: async () => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      const response = await fetch(
        `${apiWithoutDashboard}/experts/languages`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Failed to fetch languages");
      }
      return response.json();
    },
    // Only the step-2 (professional) form shows these lists.
    enabled: !!session?.user?.accessToken && isOpen && currentStep === 2,
  });
  const { data: categoriesData } = useQuery({
    queryKey: ["expert-categories"],
    queryFn: async () => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      const response = await fetch(
        `${apiWithoutDashboard}/experts/categories`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json();
    },
    // Only the step-2 (professional) form shows these lists.
    enabled: !!session?.user?.accessToken && isOpen && currentStep === 2,
  });
  const { data: countriesData } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const token = session?.user?.accessToken;
      if (!token) throw new Error("Not authenticated");
      const response = await fetch(
        `${apiDashboard}/countries`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }
      return response.json();
    },
    // Only the step-2 (professional) form shows these lists.
    enabled: !!session?.user?.accessToken && isOpen && currentStep === 2,
  });
  const languages = languagesData?.data || [];
  const categories = categoriesData?.data || [];
  const countries = countriesData || [];
  const schema = useMemo(() => getExpertSchema(t), [t]);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    trigger,
    getFieldState,
    watch,
    reset,
    control,
    formState: { errors, isSubmitted, isSubmitting },
  } = useForm<ExpertFormData>({
    resolver: zodResolver(schema) as unknown as Resolver<ExpertFormData>,
    defaultValues: {
      image: null,
      display_name: "",
      title: "",
      email: "",
      phone_number: "",
      bio: "",
      years_experience: 0,
      certifications: [{ cert_name: "" }],
      website: "",
      linkedin: "",
      languages: [],
      categories: [],
      countries: [],
      podcast: false,
    },
  });
  // Certifications are edited as local state; mirror them into the form so they're validated.
  const setCertifications: React.Dispatch<React.SetStateAction<Certifications[]>> = (action) => {
    setCertificationsState((prev) => {
      const next = typeof action === "function" ? action(prev) : action;
      setValue("certifications", next, { shouldValidate: isSubmitted });
      return next;
    });
  };
  // Before the first submit react-hook-form doesn't re-validate on change, so clear the errors
  // shown by "Next" as soon as the user edits the field.
  useEffect(() => {
    if (!stepOneAttempted || isSubmitted) return;
    const subscription = watch((_, { name }) => {
      const field = STEP_ONE_FIELDS.find((f) => f === name);
      if (field && getFieldState(field).error) trigger(field);
    });
    return () => subscription.unsubscribe();
  }, [stepOneAttempted, isSubmitted, watch, getFieldState, trigger]);
  const isBusy = isCreating || isSubmitting;
  const handleClose = () => {
    if (isBusy) return;
    reset();
    setCertificationsState([{ cert_name: "" }]);
    setSelectedLanguages([]);
    setSelectedCategories([]);
    setSelectedCountries([]);
    setImagePreview(null);
    setCurrentStep(1);
    setStepOneAttempted(false);
    onClose();
  };
  const onSubmit = async (data: ExpertFormData) => {
    try {
      const token = session?.user?.accessToken;
      if (!token) throw new Error(t("validation.api.forbidden"));
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("phone_number", data.phone_number);
      formData.append("display_name", data.display_name);
      if (data.title) formData.append("title", data.title);
      if (data.bio) formData.append("bio", data.bio);
      if (data.years_experience !== undefined && data.years_experience !== "") {
        formData.append("years_experience", data.years_experience.toString());
      }
      const filteredCerts = certifications.filter(
        (c) => c.cert_name?.trim() !== "" && c.cert_name !== undefined,
      );
      if (filteredCerts.length > 0) {
        filteredCerts.forEach((cert, index) => {
          formData.append(
            `certifications[${index}][cert_name]`,
            cert.cert_name!,
          );
        });
      }
      if (data.website) formData.append("website", data.website);
      if (data.linkedin) formData.append("linkedin", data.linkedin);
      if (data.languages.length > 0) {
        data.languages.forEach((lang, index) => {
          formData.append(`languages[${index}]`, lang.toString());
        });
      }
      if (data.categories.length > 0) {
        data.categories.forEach((cat, index) => {
          formData.append(`categories[${index}]`, cat.toString());
        });
      }
      if (data.countries.length > 0) {
        data.countries.forEach((country, index) => {
          formData.append(`countries[${index}]`, country.toString());
        });
      }
      formData.append("podcast", data.podcast ? "1" : "0");
      if (data.image) {
        formData.append("photo", data.image);
      }
      await createExpert(formData);
      reset();
      setCertificationsState([{ cert_name: "" }]);
      setSelectedLanguages([]);
      setSelectedCategories([]);
      setSelectedCountries([]);
      setImagePreview(null);
      setCurrentStep(1);
      setStepOneAttempted(false);
      onClose();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: EXPERT_FIELD_MAP,
        fallbackMessage: t("experts.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
      // Show step 1 when one of its fields was rejected by the server.
      if (STEP_ONE_FIELDS.some((field) => !!getFieldState(field).error)) {
        setCurrentStep(1);
      }
    }
  };
  const onInvalid = (formErrors: FieldErrors<ExpertFormData>) => {
    if (hasStepOneError(formErrors)) setCurrentStep(1);
    toast.error(t("validation.fillRequiredFields"));
  };
  const nextStep = async () => {
    setStepOneAttempted(true);
    const isStepValid = await trigger([...STEP_ONE_FIELDS]);
    if (isStepValid) setCurrentStep(2);
    else scrollToFirstInvalidField();
  };
  const prevStep = () => {
    setCurrentStep(1);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={t("experts.addNewExpert")}
      size="xl"
      showCloseButton={false}
      footer={
        <div className="flex gap-3 justify-between w-full">
          <div>
            {currentStep === 2 && (
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={isBusy}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                {t("experts.edit.buttons.previous")}
              </Button>
            )}
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleClose}
              disabled={isBusy}
            >
              {t("experts.edit.buttons.cancel")}
            </Button>
            {currentStep === 1 ? (
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white gap-2"
                onClick={nextStep}
              >
                {t("experts.edit.buttons.next")}
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </Button>
            ) : (
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={handleSubmit(onSubmit, onInvalid)}
                disabled={isBusy}
              >
                {isBusy && <Loader2 className="h-4 w-4 me-2 animate-spin" />}
                {isBusy ? t("experts.messages.adding") : t("experts.addNewExpert")}
              </Button>
            )}
          </div>
        </div>
      }
    >
      <div className="max-h-[calc(100vh-280px)] overflow-y-auto pe-2">
        <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-6" noValidate>
          <FormErrorAlert message={errors.root?.server?.message} />
          {currentStep === 1 && (
            <ExpertBasicInfoForm
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
              isSubmitted={isSubmitted}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
            />
          )}
          {currentStep === 2 && (
            <ExpertProfessionalForm
              register={register}
              control={control}
              errors={errors}
              setValue={setValue}
              categories={categories}
              languages={languages}
              countries={countries}
              isSubmitted={isSubmitted}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedLanguages={selectedLanguages}
              setSelectedLanguages={setSelectedLanguages}
              selectedCountries={selectedCountries}
              setSelectedCountries={setSelectedCountries}
              certifications={certifications}
              setCertifications={setCertifications}
            />
          )}
        </form>
      </div>
    </Modal>
  );
}
