"use client";

import { useState, useMemo } from "react";
import { FormProvider, Path } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useAdActions } from "@/hooks/use-ad-actions";
import { useLanguage } from "@/contexts/LanguageContext";
import { AdBasicInfoCard } from "@/features/ads/components/form/AdBasicInfoCard";
import { AdPlacementCard } from "@/features/ads/components/form/AdPlacementCard";
import { AdTargetLinksCard } from "@/features/ads/components/form/AdTargetLinksCard";
import { AdCreativeContentCard } from "@/features/ads/components/form/AdCreativeContentCard";
import { AdNativeContentCard } from "@/features/ads/components/form/AdNativeContentCard";
import { AdPriorityCard } from "@/features/ads/components/form/AdPriorityCard";
import { AdSchedulingCard } from "@/features/ads/components/form/AdSchedulingCard";
import { FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors, scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { AD_FIELD_MAP, getAdImageError } from "@/features/ads/utils/ad-form-validation";

interface EditAdFormData {
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
}

interface EditAdFormProps {
  id: string;
  adData: any;
  routePrefix: string;
}

export default function EditAdForm({ id, adData, routePrefix }: EditAdFormProps) {
  const router = useRouter();
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { updateAd, isUpdating } = useAdActions();

  const [adImage, setAdImage] = useState<File | null>(null);
  const [adImagePreview, setAdImagePreview] = useState<string>(adData?.image_url || "");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Reset so picking the same file again still triggers onChange.
    e.target.value = "";
    if (file) {
      const imageError = getAdImageError(file, t);
      if (imageError) {
        methods.setError("image" as any, { type: "validate", message: imageError });
        toast.error(imageError, { id: "edit-ad-image-toast" });
        return;
      }
      methods.clearErrors("image" as any);
      setAdImage(file);
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
  };

  const defaultValues = useMemo(() => {
    if (!adData) return {};
    const countryMap: Record<number, string> = {
      1: "Egypt",
      2: "UAE",
      3: "Oman",
    };
    const formatDate = (dateStr: string | null | undefined) => {
      if (!dateStr) return "";
      return dateStr.includes("T") ? dateStr.split("T")[0] : dateStr.split(" ")[0];
    };
    return {
      campaignName: adData.campaign?.name || adData.campaign?.title || adData.title || "",
      title: adData.title || "",
      type: adData.placement?.format || "banner",
      platform: adData.placement?.platform || "all",
      location: adData.placement?.location
        ? (adData.placement.location === "home" ? ["home_top"] : [adData.placement.location])
        : ["home_top"],
      country: countryMap[adData.country_id] || "Egypt",
      startDate: formatDate(adData.campaign?.start_at),
      endDate: formatDate(adData.campaign?.end_at),
      status: adData.campaign?.status || adData.status || "draft",
      priority: adData.weight || 1,
      billing_unit: adData.placement?.billing_unit || "impression",
      linkTo:
        adData.entity_type === "URL" || (!adData.entity_id && adData.cta_url) || (adData.entity_type === "NONE" && adData.cta_url)
          ? "URL"
          : (adData.entity_type || "PROJECTS"),
      projectId: adData.entity_id?.toString() || "",
      description: adData.subtitle || "",
      ctaButtonText: adData.cta_label || "",
      ctaUrl: adData.cta_url || "",
      cta_url: adData.cta_url || "",
      width: adData.placement?.width || "medium",
      position: adData.placement?.position || "bottom_right",
      developerId: adData.campaign?.developer_id?.toString() || adData.campaign?.developer?.developer_id?.toString() || "",
    };
  }, [adData]);

  const methods = useForm<EditAdFormData>({
    defaultValues,
  });

  const { handleSubmit, formState: { errors } } = methods;

  const onSubmit = async (data: EditAdFormData) => {
    const locArray = Array.isArray(data.location) ? data.location.filter(Boolean) : (data.location ? [data.location] : []);
    if (!locArray || locArray.length === 0 || !locArray[0]) {
      toast.error(isAr ? "يرجى اختيار مكان العرض للإعلان" : "Please select a display location for the ad");
      methods.setError("location", {
        type: "required",
        message: isAr ? "مكان العرض مطلوب" : "Display location is required",
      });
      scrollToFirstInvalidField();
      return;
    }


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

    const countryId =
      data.country === "Egypt" ? 1 :
        data.country === "UAE" ? 2 :
          data.country === "Oman" ? 3 : 1;
    formData.append("country_id", countryId.toString());

    let externalUrl = (data.ctaUrl || data.cta_url || "").trim();
    if (externalUrl && !/^https?:\/\//i.test(externalUrl)) {
      externalUrl = `https://${externalUrl}`;
    }

    if (data.linkTo === "URL") {
      if (!externalUrl) {
        const message = isAr ? "الرابط الخارجي مطلوب" : "External URL is required";
        methods.setError("ctaUrl", { type: "required", message });
        toast.error(message);
        scrollToFirstInvalidField();
        return;
      }
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
      formData.append("image", adImage);
    } else if (!adImagePreview) {
      formData.append("image_url", "");
      formData.append("image", "");
    }

    try {
      await updateAd({ adId: Number(id), formData });
      router.push(`${routePrefix}/ads`);
    } catch (error) {
      const { summary } = applyApiFormErrors(error, {
        setError: methods.setError,
        getValues: methods.getValues,
        t,
        fieldMap: AD_FIELD_MAP as Record<string, Path<EditAdFormData>>,
        fallbackMessage: t("ads.messages.updateFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
        <div id="edit-ad-form-top" className="space-y-2 pt-2">
          <button
            type="button"
            onClick={() => router.push(`${routePrefix}/ads`)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className={`w-4 h-4 ${isAr ? "" : "rotate-180"}`} />
            <span>{isAr ? "رجوع إلى الإعلانات" : "Back to Ads"}</span>
          </button>

          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            {isAr ? "تعديل الإعلان" : "Edit Ad"}
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

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-neutral-800">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push(`${routePrefix}/ads`)}
              disabled={isUpdating}
              className="px-6 py-2.5 h-11 text-sm font-semibold rounded-xl border-gray-200 dark:border-neutral-700"
            >
              {isAr ? "إلغاء" : "Cancel"}
            </Button>
            <Button
              type="button"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-2.5 h-11 text-sm font-bold rounded-xl shadow-xs gap-2"
              onClick={handleSubmit(onSubmit)}
              disabled={isUpdating}
            >
              {isUpdating && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent" />
              )}
              <span>
                {isUpdating
                  ? (isAr ? "جاري الحفظ..." : "Saving...")
                  : (isAr ? "حفظ التغييرات" : "Save Changes")}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
