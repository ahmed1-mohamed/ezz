import { useState, useEffect } from "react";
import { useForm } from "@/hooks/use-form";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";
import { applyApiFormErrors, scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import {
  AD_DESCRIPTION_MAX_LENGTH,
  AD_MODAL_FIELD_MAP,
  AD_TITLE_MAX_LENGTH,
  getAdImageError,
  isValidAdUrl,
} from "@/features/ads/utils/ad-form-validation";

// Fields shown on step 1; a backend error on any of them sends the user back there.
const STEP_ONE_FIELDS = [
  "title", "type", "platform", "location", "country", "startDate", "endDate",
  "status", "priority", "billing_unit", "width", "position",
];

interface CreateAdFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  createAd: (formData: FormData) => Promise<any>;
  isCreating: boolean;
  session: any;
  validateDateTimeRange: (start: string, end: string) => boolean;
}

export function useCreateAdForm({
  isOpen,
  onClose,
  onSuccess,
  createAd,
  isCreating,
  session,
  validateDateTimeRange,
}: CreateAdFormProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const [step, setStep] = useState(1);
  const [adImage, setAdImage] = useState<File | null>(null);
  const [adImagePreview, setAdImagePreview] = useState<string>("");

  const getCountryId = (countryName: string): string => {
    if (!countryName) return "";
    const countryMap: Record<string, string> = {
      Egypt: "1",
      UAE: "2",
      Oman: "3",
    };
    return countryMap[countryName] || "";
  };

  const methods = useForm({
    defaultValues: {
      title: "",
      type: "banner",
      platform: "web",
      location: [] as string[],
      country: "",
      startDate: "",
      endDate: "",
      status: "draft",
      priority: 1,
      billing_unit: "impression",
      linkTo: "PROJECTS",
      projectId: "",
      description: "",
      handover: false,
      developer: false,
      price: false,
      rate: false,
      ctaButtonText: "",
      ctaUrl: "",
      width: "medium",
      position: "bottom_right",
      developerId: "",
      image_url: "",
    },
    mode: "onTouched",
  });

  const { handleSubmit, setValue, clearErrors, setError, watch, reset, getValues } = methods;

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setAdImage(null);
      setAdImagePreview("");
      reset();
    }
  }, [isOpen, reset]);

  const watchCountry = watch("country");
  useEffect(() => {
    setValue("developerId", "", { shouldDirty: true });
    setValue("projectId", "", { shouldDirty: true });
    clearErrors("developerId");
    clearErrors("projectId");
  }, [watchCountry, setValue, clearErrors]);

  useEffect(() => {
    setValue("projectId", "", { shouldDirty: true });
    clearErrors("projectId");
  }, [watch("linkTo"), setValue, clearErrors]);

  const handleDeveloperChange = (val: string) => {
    setValue("developerId", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    setValue("projectId", "", { shouldDirty: true });
    clearErrors("developerId");
    clearErrors("projectId");
  };

  const selectedLocations = (watch("location") || []) as string[];

  const toggleLocation = (location: string) => {
    const current = Array.isArray(selectedLocations) ? selectedLocations : [];
    const updated = current.includes(location)
      ? current.filter((l) => l !== location)
      : [...current, location];
    setValue("location", updated, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    if (updated.length > 0) {
      clearErrors("location");
    }
  };

  const handleNext = async () => {
    let hasError = false;

    const titleVal = watch("title");
    if (!titleVal || !titleVal.trim()) {
      setError("title", { type: "required", message: t("ads.createStepOne.adTitleRequired") });
      hasError = true;
    } else if (titleVal.trim().length < 2) {
      setError("title", { type: "minLength", message: t("ads.createStepOne.adTitleMinLength") });
      hasError = true;
    } else if (titleVal.trim().length > AD_TITLE_MAX_LENGTH) {
      setError("title", { type: "maxLength", message: t("validation.max_length", { max: AD_TITLE_MAX_LENGTH }) });
      hasError = true;
    } else {
      clearErrors("title");
    }

    const locs = watch("location") || [];
    if (!locs || locs.length === 0) {
      setError("location", { type: "required", message: t("ads.form.placementLocationRequired") });
      hasError = true;
    } else {
      clearErrors("location");
    }
    const countryVal = watch("country");
    if (!countryVal) {
      setError("country", { type: "required", message: t("ads.createStepOne.countryRequired") });
      hasError = true;
    } else {
      clearErrors("country");
    }

    const startVal = watch("startDate");
    const endVal = watch("endDate");
    if (!startVal) {
      setError("startDate", { type: "required", message: t("ads.createStepOne.startDateRequired") });
      hasError = true;
    } else {
      clearErrors("startDate");
    }

    if (!validateDateTimeRange(startVal, endVal || "")) {
      hasError = true;
    }

    const priorityVal = Number(watch("priority"));
    if (isNaN(priorityVal) || priorityVal < 1 || priorityVal > 10) {
      setError("priority", { type: "range", message: t("ads.createStepOne.priorityRange") });
      hasError = true;
    } else {
      clearErrors("priority");
    }

    if (hasError) {
      toast.error(t("ads.form.step1Incomplete"), { id: "create-ad-toast" });
      scrollToFirstInvalidField();
      return;
    }

    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Reset so picking the same file again still triggers onChange.
    e.target.value = "";
    if (file) {
      const imageError = getAdImageError(file, t);
      if (imageError) {
        setError("image" as any, { type: "validate", message: imageError });
        toast.error(imageError, { id: "create-ad-toast" });
        return;
      }
      setAdImage(file);
      clearErrors("image" as any);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      if (!session?.user?.accessToken) {
        toast.error(t("ads.form.authRequired"), { id: "create-ad-toast" });
        return;
      }

      let hasError = false;

      // Developer is required only when linking to a project or property
      if ((data.linkTo === "PROJECTS" || data.linkTo === "PROPERTIES") && !data.developerId) {
        setError("developerId", { type: "required", message: t("ads.form.developerFirst") });
        hasError = true;
      } else {
        clearErrors("developerId");
      }

      if (data.linkTo === "PROJECTS" && !data.projectId) {
        setError("projectId", { type: "required", message: t("ads.createStepTwo.projectRequired") });
        hasError = true;
      } else if (data.linkTo === "PROPERTIES" && !data.projectId) {
        setError("projectId", { type: "required", message: t("ads.createStepTwo.propertyRequired") });
        hasError = true;
      } else {
        clearErrors("projectId");
      }

      if (!adImage && !adImagePreview) {
        setError("image" as any, { type: "required", message: t("ads.createStepTwo.imageRequired") });
        hasError = true;
      } else {
        clearErrors("image" as any);
      }

      const descText = (data.description || "").replace(/<[^>]*>/g, '').trim();
      if (!descText) {
        setError("description", { type: "required", message: t("ads.createStepTwo.descriptionRequired") });
        hasError = true;
      } else if (descText.length > AD_DESCRIPTION_MAX_LENGTH) {
        setError("description", { type: "maxLength", message: t("validation.max_length", { max: AD_DESCRIPTION_MAX_LENGTH }) });
        hasError = true;
      } else {
        clearErrors("description");
      }

      if (data.linkTo === "NONE" && data.ctaButtonText && !data.ctaUrl) {
        setError("ctaUrl", { type: "required", message: t("ads.form.ctaUrlRequired") });
        hasError = true;
      } else if (data.linkTo === "URL" && !(data.ctaUrl || "").trim()) {
        setError("ctaUrl", { type: "required", message: t("validation.required") });
        hasError = true;
      } else if (data.ctaUrl) {
        if (isValidAdUrl(data.ctaUrl)) {
          clearErrors("ctaUrl");
        } else {
          setError("ctaUrl", { type: "pattern", message: t("ads.createStepTwo.ctaUrlInvalid") });
          hasError = true;
        }
      }

      if (hasError) {
        toast.error(t("ads.form.step2Incomplete"), { id: "create-ad-toast" });
        scrollToFirstInvalidField();
        return;
      }

      const locationsList = Array.isArray(data.location) ? data.location : [];
      const normalizeLocation = (loc: string): string => {
        const l = (loc || "").toLowerCase().trim().replace(/\s+/g, "_");
        if (l === "home") return "home";
        if (l === "home_top" || l === "web_home") return "home_top";
        if (l === "home_bottom") return "home_bottom";
        if (l === "featured_cards") return "featured_cards";
        if (l === "project_listing" || l === "explore_projects" || l === "projects") return "project_listing";
        if (l === "unit_listing" || l === "units" || l === "property_listing" || l === "explore_properties" || l === "properties") return "unit_listing";
        if (l === "developer_listing" || l === "explore_developers" || l === "developers") return "developer_listing";
        if (l === "expert_listing" || l === "explore_experts" || l === "experts") return "expert_listing";
        if (l === "podcast_listing" || l === "podcast" || l === "podcasts") return "podcast_listing";
        return l;
      };
      const locKey = normalizeLocation(locationsList[0] || "home");

      const formData = new FormData();
      formData.append("campaign[name]", data.title.trim());
      formData.append("campaign[title]", data.title.trim());
      formData.append("campaign[start_at]", data.startDate);
      if (data.endDate) {
        formData.append("campaign[end_at]", data.endDate);
      }
      formData.append("campaign[daily_cap_credits]", "");
      formData.append("campaign[status]", data.status);

      formData.append(
        "placement[platform]",
        data.platform.toLowerCase().replace(" only", ""),
      );
      formData.append(
        "placement[location]",
        locKey,
      );
      formData.append("placement[format]", data.type.toLowerCase());
      formData.append("placement[billing_unit]", data.billing_unit);

      if (data.type === "pop_up") {
        formData.append("placement[width]", data.width || "medium");
        formData.append("placement[position]", data.position || "bottom_right");
      }

      const countryId =
        data.country === "Egypt"
          ? 1
          : data.country === "UAE"
            ? 2
            : data.country === "Oman"
              ? 3
              : 1;
      formData.append("country_id", countryId.toString());

      let externalUrl = (data.ctaUrl || (data as any).cta_url || "").trim();
      if (externalUrl && !/^https?:\/\//i.test(externalUrl)) {
        externalUrl = `https://${externalUrl}`;
      }

      if (data.linkTo === "URL") {
        formData.append("cta_url", externalUrl);
      } else if (data.linkTo !== "NONE") {
        formData.append("entity_type", data.linkTo);

        if (data.projectId) {
          const id = parseInt(data.projectId);
          if (!isNaN(id)) formData.append("entity_id", id.toString());
        }
        if (externalUrl) {
          formData.append("cta_url", externalUrl);
        }
      } else if (externalUrl) {
        formData.append("cta_url", externalUrl);
      }

      if (data.developerId) {
        const devId = parseInt(data.developerId);
        if (!isNaN(devId)) {
          formData.append("campaign[developer_id]", devId.toString());
        }
      }

      formData.append("title", data.title.trim());
      formData.append("subtitle", data.description || "");
      if (data.ctaButtonText) {
        formData.append("cta_label", data.ctaButtonText);
      }
      formData.append("weight", data.priority.toString());

      if (adImage) {
        formData.append("image_url", adImage);
      }

      await createAd(formData);

      await queryClient.invalidateQueries({ queryKey: ["ads"], refetchType: "all" });
      await queryClient.invalidateQueries({ queryKey: ["adsTotals"], refetchType: "all" });

      onSuccess?.();
      onClose();
    } catch (error: any) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: AD_MODAL_FIELD_MAP as Record<string, any>,
        fallbackMessage: t("ads.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
      const errorKeys = Object.keys(methods.formState.errors);
      if (errorKeys.some((key) => STEP_ONE_FIELDS.includes(key))) {
        setStep(1);
      }
    }
  };

  return {
    methods,
    step,
    adImage,
    adImagePreview,
    getCountryId,
    handleDeveloperChange,
    selectedLocations,
    toggleLocation,
    handleNext,
    handleBack,
    handleImageUpload,
    onSubmit: handleSubmit(onSubmit),
  };
}