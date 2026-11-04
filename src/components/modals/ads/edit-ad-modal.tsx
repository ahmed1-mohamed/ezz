"use client";

import { useState, useEffect, useCallback } from "react";
import { useForm } from "@/hooks/use-form";
import { Modal } from "@/components/ui/modal";
import { useAdActions } from "@/hooks/use-ad-actions";
import { useAdEditData } from "@/hooks/use-ad-edit";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { EditAdModalHeader } from "./edit-ad-modal-components/EditAdModalHeader";
import { EditAdModalFooter } from "./edit-ad-modal-components/EditAdModalFooter";
import { AdTitleSection } from "./edit-ad-modal-components/AdTitleSection";
import { PlacementSection } from "./edit-ad-modal-components/PlacementSection";
import { CampaignSettingsSection } from "./edit-ad-modal-components/CampaignSettingsSection";
import { TargetLinkSection } from "./edit-ad-modal-components/TargetLinkSection";
import { CreativeDetailsSection } from "./edit-ad-modal-components/CreativeDetailsSection";
import { CtaSettingsSection } from "./edit-ad-modal-components/CtaSettingsSection";
import { FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors, scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { AD_MODAL_FIELD_MAP, getAdImageError, isValidAdUrl } from "@/features/ads/utils/ad-form-validation";

interface EditAdModalProps {
  ad: any | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function EditAdModal({ ad, isOpen, onClose, onSuccess }: EditAdModalProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { updateAd, isUpdating } = useAdActions();

  const rawAdId = ad?.creative_id ?? ad?.id;
  const [adImage, setAdImage] = useState<File | null>(null);
  const [adImagePreview, setAdImagePreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    reset,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      type: "banner",
      platform: "web",
      location: [] as string[],
      country: "Egypt",
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
    },
  });

  const {
    adData,
    developers,
    developerSearch,
    setDeveloperSearch,
    developersLoading,
    projects,
    properties,
    projectsLoading,
    propertiesLoading,
    projectSearch,
    setProjectSearch,
    propertySearch,
    setPropertySearch,
  } = useAdEditData(
    rawAdId || null,
    isOpen,
    watch("country"),
    watch("developerId"),
    watch("linkTo")
  );

  const [dateErrors, setDateErrors] = useState<{
    startDate?: string;
    endDate?: string;
    general?: string;
  }>({});

  const isValidDateFormat = (dateStr: string): boolean => {
    return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
  };

  const convertToUTCDateTime = (dateStr: string, isEndDate = false): string => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isEndDate) {
      date.setUTCHours(23, 59, 59, 999);
    } else {
      date.setUTCHours(0, 0, 0, 0);
    }
    return date.toISOString();
  };

  const validateDateTimeRange = useCallback(
    (startDate: string, endDate: string): boolean => {
      if (startDate && !isValidDateFormat(startDate)) {
        setDateErrors({ startDate: isAr ? "صيغة التاريخ غير صالحة" : "Invalid date format" });
        return false;
      }
      if (endDate && !isValidDateFormat(endDate)) {
        setDateErrors({ endDate: isAr ? "صيغة التاريخ غير صالحة" : "Invalid date format" });
        return false;
      }
      if (!startDate) {
        setDateErrors({ startDate: isAr ? "تاريخ البدء مطلوب" : "Start date is required" });
        return false;
      }
      if (!endDate) {
        setDateErrors({});
        return true;
      }
      const start = new Date(convertToUTCDateTime(startDate));
      const end = new Date(convertToUTCDateTime(endDate, true));
      if (start >= end) {
        setDateErrors({ endDate: isAr ? "يجب أن يكون تاريخ الانتهاء بعد تاريخ البدء" : "End date must be after start date" });
        return false;
      }
      setDateErrors({});
      return true;
    },
    [isAr]
  );

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  useEffect(() => {
    if (startDate || endDate) {
      validateDateTimeRange(startDate, endDate);
    }
  }, [startDate, endDate, validateDateTimeRange]);

  useEffect(() => {
    if (!isOpen) {
      setAdImage(null);
      setAdImagePreview("");
      reset();
    }
  }, [isOpen, reset]);

  useEffect(() => {
    if (adData) {
      setValue("title", adData.title || "");
      setValue("type", adData.placement?.format || "banner");
      setValue("platform", adData.placement?.platform || "web");
      setValue(
        "location",
        adData.placement?.location ? [adData.placement.location] : []
      );
      const countryMap: Record<number | string, string> = {
        1: "Egypt",
        2: "UAE",
        3: "Oman",
      };
      setValue("country", countryMap[adData.country_id] || "Egypt");

      const formatDate = (dateStr: string | null | undefined) => {
        if (!dateStr) return "";
        if (dateStr.includes("T")) {
          return dateStr.split("T")[0];
        }
        return dateStr.split(" ")[0];
      };

      setValue("startDate", formatDate(adData.campaign?.start_at));
      setValue("endDate", formatDate(adData.campaign?.end_at));
      setValue("status", adData.status || "draft");
      setValue("priority", adData.weight || 1);
      setValue(
        "linkTo",
        adData.entity_type === "URL" || (!adData.entity_id && adData.cta_url) || (adData.entity_type === "NONE" && adData.cta_url)
          ? "URL"
          : (adData.entity_type || "PROJECTS")
      );
      setValue("projectId", adData.entity_id?.toString() || "");
      setValue("description", adData.subtitle || "");
      setValue("ctaButtonText", adData.cta_label || "");
      setValue("ctaUrl", adData.cta_url || "");
      setValue("width", adData.placement?.width || "medium");
      setValue("position", adData.placement?.position || "bottom_right");

      const devId =
        adData.campaign?.developer?.developer_id ||
        adData.campaign?.developer_id ||
        adData.developer_id;

      if (devId) {
        setValue("developerId", devId.toString());
      }

      if (adData.image_url) {
        setAdImagePreview(adData.image_url);
      }
    }
  }, [adData, setValue]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageError = getAdImageError(file, t);
      if (imageError) {
        toast.error(imageError, { id: "ad-action-toast" });
        e.target.value = "";
        return;
      }
      setAdImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    // Reset input value so the same file can be re-selected
    e.target.value = "";
  };

  const onSubmit = async (data: any) => {
    if (!rawAdId) {
      toast.error(isAr ? "معرف الإعلان مفقود" : "Ad ID is missing", { id: "ad-action-toast" });
      return;
    }

    if (!validateDateTimeRange(watch("startDate"), watch("endDate"))) {
      scrollToFirstInvalidField();
      return;
    }

    const isValid = await trigger([
      "title",
      "type",
      "platform",
      "location",
      "country",
      "startDate",
      "status",
      "priority",
      "billing_unit",
    ]);
    if (!isValid) {
      scrollToFirstInvalidField();
      return;
    }

    const currentUrl = (data.ctaUrl || (data as any).cta_url || "").trim();
    if (
      (data.linkTo === "URL" && !currentUrl) ||
      ((data.linkTo === "NONE" || data.linkTo === "URL") && data.ctaButtonText && !currentUrl)
    ) {
      const message =
        data.linkTo === "URL"
          ? (isAr ? "يرجى إدخال الرابط الخارجي (URL)" : "Please enter the External Link (URL)")
          : (isAr
            ? "رابط زر الإجراء مطلوب عند كتابة نص الزر وتعيين الوجهة إلى مخصص"
            : "Call-to-Action Link is required when CTA Button Text is provided and Link To is None");
      setError("ctaUrl", { type: "required", message });
      toast.error(message, { id: "ad-action-toast" });
      scrollToFirstInvalidField();
      return;
    }

    if (currentUrl && !isValidAdUrl(currentUrl)) {
      const message = isAr ? "يرجى إدخال رابط URL صالح لزر الإجراء" : "Please enter a valid URL for Call-to-Action Link";
      setError("ctaUrl", { type: "pattern", message });
      toast.error(message, { id: "ad-action-toast" });
      scrollToFirstInvalidField();
      return;
    }
    clearErrors("ctaUrl");

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
      data.platform.toLowerCase().replace(" only", "")
    );
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
    formData.append(
      "placement[location]",
      normalizeLocation(data.location?.[0] || "home")
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
    } else if (data.linkTo && data.linkTo !== "NONE") {
      formData.append("entity_type", data.linkTo);
      if (data.projectId) {
        formData.append("entity_id", data.projectId);
      }
      if (externalUrl) {
        formData.append("cta_url", externalUrl);
      }
    } else if (externalUrl) {
      formData.append("cta_url", externalUrl);
    }

    if (data.developerId) {
      formData.append("campaign[developer_id]", data.developerId);
    }

    formData.append("title", data.title);
    formData.append("subtitle", data.description || "");

    if (data.ctaButtonText) {
      formData.append("cta_label", data.ctaButtonText);
    }
    formData.append("weight", data.priority.toString());

    if (adImage) {
      formData.append("image", adImage);
    }

    try {
      await updateAd({ adId: Number(rawAdId), formData });
      onSuccess?.();
      onClose();
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: AD_MODAL_FIELD_MAP as Record<string, any>,
        fallbackMessage: t("ads.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        if (!isUpdating) onClose();
      }}
      title={<EditAdModalHeader adId={rawAdId} />}
      size="2xl"
      showCloseButton={true}
      footer={
        <EditAdModalFooter
          onClose={onClose}
          onSubmit={handleSubmit(onSubmit)}
          isUpdating={isUpdating}
        />
      }
    >
      <div className="space-y-4 max-h-[68vh] overflow-y-auto pe-1 sm:pe-2">
        <FormErrorAlert message={errors.root?.server?.message} />

        {/* 1. Campaign Identity / Ad Title */}
        <AdTitleSection register={register} error={errors.title?.message as string | undefined} />

        {/* 2. Placement & Audience */}
        <PlacementSection watch={watch} setValue={setValue} />

        {/* 3. Campaign Settings & Billing */}
        <CampaignSettingsSection
          register={register}
          watch={watch}
          setValue={setValue}
          dateErrors={dateErrors}
          priorityInvalid={!!errors.priority}
          validateDateTimeRange={validateDateTimeRange}
        />

        {/* 4. Target Link & Developer Selection */}
        <TargetLinkSection
          watch={watch}
          setValue={setValue}
          developers={developers}
          developerSearch={developerSearch}
          setDeveloperSearch={setDeveloperSearch}
          developersLoading={developersLoading}
          projects={projects}
          properties={properties}
          projectsLoading={projectsLoading}
          propertiesLoading={propertiesLoading}
          projectSearch={projectSearch}
          setProjectSearch={setProjectSearch}
          propertySearch={propertySearch}
          setPropertySearch={setPropertySearch}
        />

        {/* 5. Creative Asset & Description */}
        <CreativeDetailsSection
          watch={watch}
          setValue={setValue}
          adImagePreview={adImagePreview}
          handleImageUpload={handleImageUpload}
        />

        {/* 6. Badges & CTA Settings */}
        <CtaSettingsSection
          register={register}
          watch={watch}
          setValue={setValue}
          ctaUrlError={errors.ctaUrl?.message as string | undefined}
          ctaButtonTextError={errors.ctaButtonText?.message as string | undefined}
        />
      </div>
    </Modal>
  );
}
