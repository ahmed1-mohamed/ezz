"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, CheckCircle2, Loader2 } from "lucide-react";
import { FormErrorAlert } from "@/components/ui/form-message";
import {
  propertiesSchema,
  PropertiesInput,
} from "@/validators/propertiesSchema";
import {
  usePropertyTypes,
  usePropertySubtypes,
  useProjectsForSelect,
} from "@/hooks/use-property-data";
import useCreateProperty, { applyServerFieldErrors } from "@/hooks/use-create-property";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { AdminPropertiesService } from "@/features/properties/services/AdminPropertiesService";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSession } from "next-auth/react";
import { addProjectPayment } from "@/data/api-client";
import { addDraftPlanItems, buildPaymentPlanPayload, getCreatedPlanId } from "@/lib/payment-plans";
import { PropertyPaymentPlan } from "@/features/properties/components/create/tabs/payment-plans/payment-plans.types";
import { MAX_PROPERTY_IMAGES, pickValidPropertyImages } from "@/features/properties/utils/validate-property-images";

import PropertyPageHeader from "@/features/properties/components/create/PropertyPageHeader";
import BasicInfoTab from "@/features/properties/components/create/tabs/BasicInfoTab";
import PricingMediaTab from "@/features/properties/components/create/tabs/PricingMediaTab";
import UnitDetailsTab from "@/features/properties/components/create/tabs/UnitDetailsTab";
import LocationTab from "@/features/properties/components/create/tabs/LocationTab";
import AmenitiesTab, {
  SelectedPropertyFeature,
} from "@/features/properties/components/create/tabs/AmenitiesTab";
import PaymentPlansTab from "@/features/properties/components/create/tabs/PaymentPlansTab";
import LicensesTab from "@/features/properties/components/create/tabs/LicensesTab";

type TabId =
  | "basic_info"
  | "pricing_media"
  | "unit_details"
  | "location"
  | "amenities"
  | "payment_plans"
  | "licenses";

interface TabConfig {
  id: TabId;
  translationKey: string;
  fields: (keyof PropertiesInput)[];
}

const TABS: TabConfig[] = [
  {
    id: "basic_info",
    translationKey: "properties.create.tabLabels.basicInfo",
    fields: [
      "property_name",
      "property_no",
      "project_id",
      "property_type_id",
      "property_subtype_id",
      "availability_status",
      "construction_status",
      "status",
      "building_name",
      "description",
      "slug",
      "meta_title",
      "meta_description",
    ],
  },
  {
    id: "pricing_media",
    translationKey: "properties.create.tabLabels.pricingMedia",
    fields: ["price", "currency", "price_per_m2", "price_description"],
  },
  {
    id: "unit_details",
    translationKey: "properties.create.tabLabels.unitDetails",
    fields: [
      "size",
      "bedrooms",
      "bathrooms",
      "floor",
      "view",
      "finishing_status",
      "furnish_status",
      "ownership_type",
      "plot_size",
      "bua_size",
      "maid_room",
    ],
  },
  {
    id: "location",
    translationKey: "properties.create.tabLabels.location",
    fields: ["zone_name", "city_name", "area_name", "landmark", "maps_url", "latitude", "longitude"],
  },
  {
    id: "amenities",
    translationKey: "properties.create.tabLabels.amenities",
    fields: [],
  },
  {
    id: "payment_plans",
    translationKey: "properties.create.tabLabels.paymentPlans",
    fields: [],
  },
  {
    id: "licenses",
    translationKey: "properties.create.tabLabels.licenses",
    fields: [
      "broker_license",
      "agent_license",
      "dld_permit_number",
      "dld_barcode",
      "reference_listed",
      "parking_spaces",
    ],
  },
];

export default function CreatePropertyPage() {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();

  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const [activeTab, setActiveTab] = useState<TabId>("basic_info");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [floorPlan, setFloorPlan] = useState<File | null>(null);
  const [floorPlanPreview, setFloorPlanPreview] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<SelectedPropertyFeature[]>([]);
  const [paymentPlans, setPaymentPlans] = useState<PropertyPaymentPlan[]>([]);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    setValue,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PropertiesInput>({
    resolver: zodResolver(propertiesSchema),
    defaultValues: {
      maid_room: false,
      currency: "aed",
      payment_plans: [],
    },
  });

  const { data: propertiesType = [] } = usePropertyTypes();
  const { data: propertiesSubtype = [] } = usePropertySubtypes();
  const { data: projects = [] } = useProjectsForSelect();

  const queryClient = useQueryClient();
  const { createProperty, isCreating } = useCreateProperty();
  // Covers the follow-up uploads (plans, features, media) that run after the property is created.
  const isSaving = isCreating || isSubmitting;

  const currentTabIndex = TABS.findIndex((tab) => tab.id === activeTab);

  const getTabLabel = (tab: TabConfig) => t(tab.translationKey);

  const handleFormSubmit = async (formData: PropertiesInput) => {
    const data: PropertiesInput = {
      ...formData,
      payment_plans: paymentPlans,
      parking_spaces: formData.parking_spaces
        ? Number(formData.parking_spaces)
        : undefined,
      bua_size: formData.bua_size ? Number(formData.bua_size) : undefined,
      plot_size: formData.plot_size ? Number(formData.plot_size) : undefined,
    };
    let created: unknown;
    try {
      created = await createProperty(data);
    } catch (err) {
      applyServerFieldErrors(err, {
        tabs: TABS,
        activeTab: TABS[currentTabIndex],
        setError,
        onShowTab: (tab) => setActiveTab(tab.id),
        getTabLabel,
        t,
        fallbackMessage: t("properties.messages.createFailed"),
      });
      return;
    }

    // The property exists from here on: follow-up failures are reported once, without blocking.
    let hasPartialFailure = false;
    const newPropertyId =
      (created as any)?.data?.property_id ??
      (created as any)?.property_id ??
      (created as any)?.data?.id ??
      (created as any)?.id;

    if (newPropertyId && paymentPlans.length > 0 && token) {
      for (const plan of paymentPlans) {
        try {
          const planPayload = {
            ...buildPaymentPlanPayload(plan, session?.user?.id ? String(session.user.id) : undefined),
            entity_type: "PROPERTIES",
            entities: [{ entity_id: Number(newPropertyId) }],
          };
          const planRes = await addProjectPayment(planPayload as any, token);
          const createdPlanId = getCreatedPlanId(planRes);
          if (createdPlanId) {
            await addDraftPlanItems(createdPlanId, plan, token);
          }
        } catch (planErr) {
          console.error("Failed to add payment plan for property:", planErr);
          hasPartialFailure = true;
        }
      }
    }

    if (newPropertyId && selectedFeatures.length > 0) {
      try {
        await AdminPropertiesService.savePropertyFeatures(
          Number(newPropertyId),
          selectedFeatures.map((sf) => ({
            feature_id: sf.feature_id,
            value: sf.value || sf.feature_name || "",
          }))
        );
      } catch (featErr) {
        console.error("Failed to save property features:", featErr);
        hasPartialFailure = true;
      }
    }

    if (floorPlan && newPropertyId) {
      try {
        await AdminPropertiesService.addPropertyFloorPlan(newPropertyId, floorPlan);
      } catch (fpErr) {
        console.error("Failed to upload floor plan:", fpErr);
        hasPartialFailure = true;
      }
    }

    if (images && images.length > 0 && newPropertyId) {
      try {
        await Promise.all(
          images.map((img, idx) =>
            AdminPropertiesService.addPropertyMedia(Number(newPropertyId), img, idx === 0)
          )
        );
      } catch (imgErr) {
        console.error("Failed to upload images:", imgErr);
        hasPartialFailure = true;
      }
    }
    if (hasPartialFailure) {
      toast.error(t("properties.messages.partialSaveFailed"), { duration: 8000 });
    }

    await queryClient.invalidateQueries({ queryKey: ["properties"] });
    queryClient.removeQueries({ queryKey: ["properties"] });
    router.push(`${routePrefix}/properties`);
    router.refresh();
  };

  const handleInvalid = (errs: any) => {
    const errorKeys = Object.keys(errs) as (keyof PropertiesInput)[];
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0];
      const targetTab = TABS.find((tab) => tab.fields.includes(firstErrorKey));
      if (targetTab && targetTab.id !== activeTab) {
        setActiveTab(targetTab.id);
      }

      const errorObj = errs[firstErrorKey];
      if (errorObj?.message) {
        toast.error(t(errorObj.message));
      }
    }
  };

  const validateTab = async (tabIndex: number): Promise<boolean> => {
    const tabConfig = TABS[tabIndex];
    if (!tabConfig) return true;

    const fieldsToValidate = tabConfig.fields;
    if (!fieldsToValidate || fieldsToValidate.length === 0) return true;

    const isValid = await trigger(fieldsToValidate as any);
    if (!isValid) {
      toast.error(
        t("properties.create.fillRequiredInTab", { tab: getTabLabel(tabConfig) })
      );

      scrollToFirstInvalidField();
      return false;
    }
    return true;
  };

  const handleTabClick = async (targetTabId: TabId) => {
    const targetIndex = TABS.findIndex((tab) => tab.id === targetTabId);
    if (targetIndex === -1 || targetIndex === currentTabIndex) return;

    if (targetIndex > currentTabIndex) {
      for (let i = currentTabIndex; i < targetIndex; i++) {
        const isTabValid = await validateTab(i);
        if (!isTabValid) {
          if (activeTab !== TABS[i].id) {
            setActiveTab(TABS[i].id);
          }
          return;
        }
      }
    }

    setActiveTab(targetTabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextTab = async () => {
    const isValid = await validateTab(currentTabIndex);
    if (!isValid) return;

    if (currentTabIndex < TABS.length - 1) {
      setActiveTab(TABS[currentTabIndex + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevTab = () => {
    if (currentTabIndex > 0) {
      setActiveTab(TABS[currentTabIndex - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = pickValidPropertyImages(Array.from(e.target.files || []), {
      t,
      currentCount: images.length,
      maxCount: MAX_PROPERTY_IMAGES,
    });
    if (e.target instanceof HTMLInputElement) e.target.value = "";
    if (files.length === 0) return;
    setImages((prev) => [...prev, ...files]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFloorPlanUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = pickValidPropertyImages(Array.from(e.target.files || []).slice(0, 1), { t });
    if (!file) return;
    setFloorPlan(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFloorPlanPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFloorPlan = () => {
    setFloorPlan(null);
    setFloorPlanPreview(null);
  };

  const tabHasError = (tab: TabConfig) => {
    return tab.fields.some((field) => !!errors[field]);
  };

  const handleFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && (e.target as HTMLElement)?.tagName !== "TEXTAREA") {
      if (currentTabIndex < TABS.length - 1) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="w-full space-y-3 pb-8">
      <PropertyPageHeader onCancel={() => router.push(`${routePrefix}/properties`)} />

      <form
        onSubmit={handleSubmit(handleFormSubmit, handleInvalid)}
        onKeyDown={handleFormKeyDown}
        className="space-y-3.5"
      >
        <FormErrorAlert message={errors.root?.server?.message} />

        <div className="border-b border-gray-200 dark:border-neutral-800 mb-3">
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-7 no-scrollbar overflow-x-auto">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const hasError = tabHasError(tab);
              const label = getTabLabel(tab);
              let count = 0;
              if (tab.id === "payment_plans") count = paymentPlans.length;
              if (tab.id === "pricing_media") count = imagePreviews.length;
              if (tab.id === "amenities") count = selectedFeatures.length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`pb-1.5 text-xs font-medium whitespace-nowrap transition-colors border-b-2 select-none shrink-0 cursor-pointer inline-flex items-center gap-1.5 ${isActive
                    ? "border-[#008081] text-[#008081] dark:border-teal-400 dark:text-teal-400 font-bold -mb-px"
                    : hasError
                      ? "border-red-500 text-red-600 dark:text-red-400 font-medium -mb-px"
                      : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium -mb-px"
                    }`}
                >
                  <span>{label}</span>
                  {count > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold transition-colors ${
                        isActive
                          ? "bg-[#008081]/15 text-[#008081] dark:bg-teal-400/20 dark:text-teal-300"
                          : "bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-300"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                  {hasError && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 ms-0.5 align-middle" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="transition-all duration-200">
          <div className={activeTab === "basic_info" ? "block" : "hidden"}>
            <BasicInfoTab
              register={register}
              control={control}
              errors={errors}
              propertiesType={propertiesType}
              propertiesSubtype={propertiesSubtype}
              projects={projects}
              setValue={setValue}
              watch={watch}
            />
          </div>

          <div className={activeTab === "pricing_media" ? "block" : "hidden"}>
            <PricingMediaTab
              register={register}
              control={control}
              errors={errors}
              imagePreviews={imagePreviews}
              onImageUpload={handleImageUpload}
              onRemoveImage={handleRemoveImage}
              floorPlanPreview={floorPlanPreview}
              onFloorPlanUpload={handleFloorPlanUpload}
              onRemoveFloorPlan={handleRemoveFloorPlan}
              setValue={setValue}
              watch={watch}
            />
          </div>

          <div className={activeTab === "unit_details" ? "block" : "hidden"}>
            <UnitDetailsTab
              register={register}
              control={control}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
          </div>

          <div className={activeTab === "location" ? "block" : "hidden"}>
            <LocationTab
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
              projects={projects}
              isActive={activeTab === "location"}
            />
          </div>

          <div className={activeTab === "amenities" ? "block" : "hidden"}>
            <AmenitiesTab
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
              selectedFeatures={selectedFeatures}
              onChangeFeatures={setSelectedFeatures}
              isActive={activeTab === "amenities"}
            />
          </div>

          <div className={activeTab === "payment_plans" ? "block" : "hidden"}>
            <PaymentPlansTab
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
              plans={paymentPlans}
              setPlans={setPaymentPlans}
            />
          </div>

          <div className={activeTab === "licenses" ? "block" : "hidden"}>
            <LicensesTab
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 pb-6">
          <div className="flex items-center gap-3">
            {currentTabIndex === TABS.length - 1 && (
              <Button
                type="submit"
                className="bg-[#008081] hover:bg-[#006666] text-white text-xs font-semibold px-5 h-9 rounded-md gap-1.5 shadow-2xs cursor-pointer"
                disabled={isSaving}
              >
                {isSaving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="h-4 w-4" />
                )}
                <span>
                  {isSaving
                    ? t("properties.create.creating")
                    : t("properties.create.createProperty")}
                </span>
              </Button>
            )}

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push(`${routePrefix}/properties`)}
              disabled={isSaving}
              className="border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 text-xs font-medium px-4 h-9 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800 shadow-2xs cursor-pointer"
            >
              {t("properties.create.cancel")}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {currentTabIndex > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevTab}
                className="h-8 text-xs px-3 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1 shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                <span>{t("common.previous")}</span>
              </Button>
            )}

            {currentTabIndex < TABS.length - 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleNextTab}
                className="h-8 text-xs px-3 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1 shadow-2xs cursor-pointer"
              >
                <span>{t("common.next")}</span>
                <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
