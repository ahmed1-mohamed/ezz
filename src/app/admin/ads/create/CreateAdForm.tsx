"use client";

import { useState } from "react";
import { FormProvider, Path } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdActions } from "@/hooks/use-ad-actions";
import { useLanguage } from "@/contexts/LanguageContext";
import { AdBasicInfoCard } from "@/features/ads/components/form/AdBasicInfoCard";
import { AdPlacementCard } from "@/features/ads/components/form/AdPlacementCard";
import { AdCreativeContentCard } from "@/features/ads/components/form/AdCreativeContentCard";
import { AdNativeContentCard } from "@/features/ads/components/form/AdNativeContentCard";
import { AdTargetLinksCard } from "@/features/ads/components/form/AdTargetLinksCard";
import { AdPriorityCard } from "@/features/ads/components/form/AdPriorityCard";
import { AdSchedulingCard } from "@/features/ads/components/form/AdSchedulingCard";
import { toast } from "sonner";
import { FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors, scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { AD_FIELD_MAP, getAdImageError } from "@/features/ads/utils/ad-form-validation";

interface CreateAdFormData {
  campaignName: string;
  title: string;
  type: string;
  platform: string;
  location: string[];
  country: string;
  startDate: string;
  endDate: string;
  status: string;
  priority: number;
  billing_unit: string;
  linkTo: string;
  projectId: string;
  description: string;
  handover: boolean;
  developer: boolean;
  price: boolean;
  rate: boolean;
  ctaButtonText: string;
  ctaUrl: string;
  cta_url?: string;
  width: string;
  position: string;
  developerId: string;
  image_url?: string;
  image?: any;
}

interface CreateAdFormProps {
  routePrefix: string;
}

export default function CreateAdForm({ routePrefix }: CreateAdFormProps) {
  const router = useRouter();
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { createAd, isCreating } = useAdActions();

  const [adImage, setAdImage] = useState<File | null>(null);
  const [adImagePreview, setAdImagePreview] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Reset so picking the same file again still triggers onChange.
    e.target.value = "";
    if (file) {
      const imageError = getAdImageError(file, t);
      if (imageError) {
        methods.setError("image" as any, { type: "validate", message: imageError });
        toast.error(imageError, { id: "create-ad-image-toast" });
        return;
      }
      setAdImage(file);
      methods.clearErrors("image" as any);
      methods.clearErrors("image_url" as any);
      methods.setValue("image_url", file.name, { shouldDirty: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setAdImage(null);
    setAdImagePreview("");
    methods.setValue("image_url", "", { shouldDirty: true });
    methods.setError("image" as any, {
      type: "required",
      message: isAr ? "صورة الإعلان مطلوبة *" : "Ad image is required *",
    });
  };

  const today = new Date().toISOString().split("T")[0];

  const methods = useForm<CreateAdFormData>({
    defaultValues: {
      campaignName: "",
      title: "",
      type: "banner",
      platform: "all",
      location: ["home_top"],
      country: "1",
      startDate: today,
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
      cta_url: "",
      width: "medium",
      position: "bottom_right",
      developerId: "",
    },
    mode: "onTouched",
  });

  const { handleSubmit, formState: { errors } } = methods;

  const validateForm = (data: CreateAdFormData): boolean => {
    let isValid = true;

    // 1. Campaign Name
    const trimmedName = (data.campaignName || "").trim();
    if (!trimmedName) {
      methods.setError("campaignName", {
        type: "required",
        message: isAr ? "اسم الإعلان مطلوب" : "Ad Name is required",
      });
      isValid = false;
    } else if (trimmedName.length < 2) {
      methods.setError("campaignName", {
        type: "minLength",
        message: isAr ? "اسم الإعلان يجب أن يكون حرفين على الأقل" : "Ad Name must be at least 2 characters",
      });
      isValid = false;
    }

    // 2. Ad Type
    if (!data.type) {
      methods.setError("type", {
        type: "required",
        message: isAr ? "نوع الإعلان مطلوب" : "Ad type is required",
      });
      isValid = false;
    }

    // 3. Location
    const locArray = Array.isArray(data.location)
      ? data.location.filter(Boolean)
      : data.location
        ? [data.location]
        : [];
    if (!locArray || locArray.length === 0 || !locArray[0]) {
      methods.setError("location", {
        type: "required",
        message: isAr ? "مكان العرض مطلوب" : "Display location is required",
      });
      isValid = false;
    }

    // 4. Country
    if (!data.country) {
      methods.setError("country", {
        type: "required",
        message: isAr ? "الدولة المستهدفة مطلوبة" : "Target country is required",
      });
      isValid = false;
    }

    // 5. Ad Creative Image
    if (!adImage) {
      methods.setError("image" as any, {
        type: "required",
        message: isAr ? "صورة الإعلان مطلوبة *" : "Ad image is required *",
      });
      isValid = false;
    }

    // 6. Native content title (if native format)
    if (data.type === "native" && (!data.title || !data.title.trim())) {
      methods.setError("title", {
        type: "required",
        message: isAr ? "عنوان الإعلان مطلوب" : "Ad title is required",
      });
      isValid = false;
    }

    // 7. Destination Link validation
    if (data.linkTo === "PROJECTS") {
      if (!data.developerId) {
        methods.setError("developerId", {
          type: "required",
          message: isAr ? "يرجى اختيار المطور أولاً لعرض المشاريع" : "Please select a developer first",
        });
        isValid = false;
      }
      if (!data.projectId) {
        methods.setError("projectId", {
          type: "required",
          message: isAr ? "يرجى اختيار المشروع المرتبط بالإعلان" : "Please select a project",
        });
        isValid = false;
      }
    } else if (data.linkTo === "PROPERTIES") {
      if (!data.developerId) {
        methods.setError("developerId", {
          type: "required",
          message: isAr ? "يرجى اختيار المطور أولاً لعرض الوحدات" : "Please select a developer first",
        });
        isValid = false;
      }
      if (!data.projectId) {
        methods.setError("projectId", {
          type: "required",
          message: isAr ? "يرجى اختيار الوحدة العقارية" : "Please select a property",
        });
        isValid = false;
      }
    } else if (data.linkTo === "EXPERT") {
      if (!data.projectId || !data.projectId.trim()) {
        methods.setError("projectId", {
          type: "required",
          message: isAr ? "يرجى إدخال اسم أو معرف الخبير" : "Please enter expert name or ID",
        });
        isValid = false;
      }
    } else if (data.linkTo === "URL") {
      const extUrl = (data.ctaUrl || data.cta_url || "").trim();
      if (!extUrl) {
        methods.setError("ctaUrl", {
          type: "required",
          message: isAr ? "الرابط الخارجي مطلوب" : "External URL is required",
        });
        isValid = false;
      }
    }

    // 8. Scheduling
    if (!data.startDate) {
      methods.setError("startDate", {
        type: "required",
        message: isAr ? "تاريخ البدء مطلوب" : "Start date is required",
      });
      isValid = false;
    }
    if (!data.endDate) {
      methods.setError("endDate", {
        type: "required",
        message: isAr ? "تاريخ الانتهاء مطلوب" : "End date is required",
      });
      isValid = false;
    } else if (data.startDate && new Date(data.endDate) < new Date(data.startDate)) {
      methods.setError("endDate", {
        type: "validate",
        message: isAr ? "يجب أن يكون تاريخ الانتهاء بعد تاريخ البدء" : "End date must be after or equal to start date",
      });
      isValid = false;
    }

    if (!isValid) {
      toast.error(
        isAr ? "يرجى استكمال وتصحيح الحقول المطلوبة" : "Please fill in all required fields"
      );
      scrollToFirstInvalidField();
      return false;
    }

    return true;
  };

  const onInvalid = () => {
    toast.error(
      isAr ? "يرجى استكمال وتصحيح الحقول المطلوبة" : "Please fill in all required fields"
    );
  };

  const onSubmit = async (data: CreateAdFormData) => {
    if (!validateForm(data)) {
      return;
    }

    const locArray = Array.isArray(data.location)
      ? data.location.filter(Boolean)
      : data.location
        ? [data.location]
        : [];

    const formData = new FormData();

    const campaignName = (data.campaignName && data.campaignName.trim()) || data.title.trim();
    formData.append("campaign[name]", campaignName);
    formData.append("campaign[title]", campaignName);
    formData.append("campaign[start_at]", data.startDate);
    if (data.endDate) {
      formData.append("campaign[end_at]", data.endDate);
    }
    formData.append("campaign[daily_cap_credits]", "");
    formData.append("campaign[status]", data.status || "active");

    if (data.developerId) {
      const devId = parseInt(data.developerId);
      if (!isNaN(devId)) {
        formData.append("campaign[developer_id]", devId.toString());
      }
    }

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
      normalizeLocation(locArray[0])
    );

    formData.append("placement[format]", data.type.toLowerCase());
    formData.append("placement[billing_unit]", data.billing_unit || "impression");

    if (data.type === "pop_up") {
      formData.append("placement[width]", data.width || "medium");
      formData.append("placement[position]", data.position || "bottom_right");
    }

    const parsedCountry = parseInt(data.country);
    const countryId = !isNaN(parsedCountry) ? parsedCountry :
      data.country === "Egypt" ? 1 :
        data.country === "UAE" ? 2 :
          data.country === "Oman" ? 3 : 1;
    formData.append("country_id", countryId.toString());

    let externalUrl = (data.ctaUrl || data.cta_url || "").trim();
    if (externalUrl && !/^https?:\/\//i.test(externalUrl)) {
      externalUrl = `https://${externalUrl}`;
    }

    if (data.linkTo === "URL") {
      formData.append("cta_url", externalUrl);
    } else if (data.linkTo && data.linkTo !== "NONE") {
      formData.append("entity_type", data.linkTo);

      if (data.linkTo === "DEVELOPER" && data.developerId) {
        const id = parseInt(data.developerId);
        if (!isNaN(id)) formData.append("entity_id", id.toString());
      } else if (data.projectId) {
        const id = parseInt(data.projectId);
        if (!isNaN(id)) formData.append("entity_id", id.toString());
      }
      if (externalUrl) {
        formData.append("cta_url", externalUrl);
      }
    } else if (externalUrl) {
      formData.append("cta_url", externalUrl);
    }

    const creativeTitle = (data.title && data.title.trim()) || campaignName;
    const creativeSubtitle = (data.description && data.description.trim()) || "";

    formData.append("title", creativeTitle);
    formData.append("subtitle", creativeSubtitle);
    if (data.ctaButtonText) {
      formData.append("cta_label", data.ctaButtonText.trim());
    }
    formData.append("weight", (data.priority || 1).toString());

    if (adImage) {
      formData.append("image_url", adImage);
      formData.append("image", adImage);
    }

    try {
      await createAd(formData);
      router.push(`${routePrefix}/ads`);
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError: methods.setError,
        getValues: methods.getValues,
        t,
        fieldMap: AD_FIELD_MAP as Record<string, Path<CreateAdFormData>>,
        fallbackMessage: t("ads.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
        <div id="create-ad-form-top" className="space-y-2 pt-2">
          <button
            type="button"
            onClick={() => router.push(`${routePrefix}/ads`)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className={`w-4 h-4 ${isAr ? "" : "rotate-180"}`} />
            <span>{isAr ? "رجوع إلى الإعلانات" : "Back to Ads"}</span>
          </button>

          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            {isAr ? "إنشاء إعلان جديد" : "Create New Ad"}
          </h1>
        </div>

        <div className="space-y-6">
          <FormErrorAlert message={errors.root?.server?.message} />

          <AdBasicInfoCard />

          <AdPlacementCard />

          <AdCreativeContentCard
            adImagePreview={adImagePreview}
            handleImageUpload={handleImageUpload}
            handleRemoveImage={handleRemoveImage}
          />

          <AdNativeContentCard />

          <AdTargetLinksCard />

          <AdPriorityCard />

          <AdSchedulingCard />

          {/* Action Footer Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-neutral-800">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push(`${routePrefix}/ads`)}
              disabled={isCreating}
              className="px-6 py-2.5 h-11 text-sm font-semibold rounded-xl border-gray-200 dark:border-neutral-700 cursor-pointer"
            >
              {isAr ? "إلغاء" : "Cancel"}
            </Button>
            <Button
              type="button"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-2.5 h-11 text-sm font-bold rounded-xl shadow-xs gap-2 cursor-pointer"
              onClick={handleSubmit(onSubmit, onInvalid)}
              disabled={isCreating}
            >
              {isCreating && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent" />
              )}
              <span>
                {isCreating
                  ? (isAr ? "جاري النشر..." : "Publishing...")
                  : (isAr ? "نشر الإعلان" : "Publish Ad")}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
