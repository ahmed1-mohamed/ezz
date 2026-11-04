"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useForm } from "@/hooks/use-form";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  propertiesSchema,
  PropertiesInput,
} from "@/validators/propertiesSchema";
import {
  usePropertyTypes,
  usePropertySubtypes,
  useProjectsForSelect,
} from "@/hooks/use-property-data";
import { AdminPropertiesService } from "@/features/properties/services/AdminPropertiesService";
import { applyServerFieldErrors } from "@/hooks/use-create-property";
import { useLanguage } from "@/contexts/LanguageContext";
import { FormErrorAlert } from "@/components/ui/form-message";
import { pickValidPropertyImages } from "@/features/properties/utils/validate-property-images";

import { EDIT_TABS, EditTabId } from "@/features/properties/components/edit/edit-property.types";
import { useEditPropertyPayload } from "@/features/properties/components/edit/use-edit-property-payload";
import EditPropertyHeader from "@/features/properties/components/edit/EditPropertyHeader";
import EditPropertyTabsNav from "@/features/properties/components/edit/EditPropertyTabsNav";
import EditPropertyFormActions from "@/features/properties/components/edit/EditPropertyFormActions";
import EditPropertyLoading from "@/features/properties/components/edit/EditPropertyLoading";

import BasicInfoTab from "@/features/properties/components/create/tabs/BasicInfoTab";
import PricingMediaTab from "@/features/properties/components/create/tabs/PricingMediaTab";
import UnitDetailsTab from "@/features/properties/components/create/tabs/UnitDetailsTab";
import LocationTab from "@/features/properties/components/create/tabs/LocationTab";
import AmenitiesTab, {
  SelectedPropertyFeature,
} from "@/features/properties/components/create/tabs/AmenitiesTab";
import PaymentPlansTab from "@/features/properties/components/create/tabs/PaymentPlansTab";
import LicensesTab from "@/features/properties/components/create/tabs/LicensesTab";
import { PropertyPaymentPlan } from "@/features/properties/components/create/tabs/payment-plans/payment-plans.types";
import {
  loadPropertyPaymentPlans,
  syncPropertyPaymentPlans,
} from "@/features/properties/utils/property-payment-plans";

interface EditPropertyPageProps {
  params: Promise<{ id: string }>;
}

export default function EditPropertyPage({ params }: EditPropertyPageProps) {
  const { id } = React.use(params);
  const propertyId = Number(id);
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const [activeTab, setActiveTab] = useState<EditTabId>("basic_info");
  const [, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [floorPlan, setFloorPlan] = useState<File | null>(null);
  const [floorPlanPreview, setFloorPlanPreview] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<SelectedPropertyFeature[]>([]);
  const [paymentPlans, setPaymentPlans] = useState<PropertyPaymentPlan[]>([]);
  const initialPaymentPlansRef = useRef<PropertyPaymentPlan[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const { data: propertiesType = [] } = usePropertyTypes();
  const { data: propertiesSubtype = [] } = usePropertySubtypes();
  const { data: projects = [] } = useProjectsForSelect();

  const { data: propertyData, isLoading: propertyLoading } = useQuery({
    queryKey: ["property-detail", propertyId],
    queryFn: () => AdminPropertiesService.getProperty(propertyId),
    enabled: !!token && !!propertyId,
  });

  const {
    formValues,
    mergedProjects,
    mergedTypes,
    mergedSubtypes,
    propertyName,
  } = useEditPropertyPayload({
    propertyData,
    propertyId,
    projects,
    propertiesType,
    propertiesSubtype,
  });

  const {
    register,
    handleSubmit,
    control,
    trigger,
    setValue,
    setError,
    watch,
    reset,
    formState: { errors },
  } = useForm<PropertiesInput>({
    resolver: zodResolver(propertiesSchema),
    values: formValues,
    defaultValues: {
      property_name: "",
      property_no: "",
      floor: "",
      price: 0,
      size: 0,
      bedrooms: undefined,
      bathrooms: undefined,
      project_id: "",
      property_type_id: "",
      property_subtype_id: "",
      status: "active",
      availability_status: "available",
      construction_status: "",
      furnish_status: "",
      finishing_status: "",
      view: "",
      ownership_type: "",
      description: "",
      maid_room: false,
      currency: "aed",
      bua_size: undefined,
      plot_size: undefined,
      parking_spaces: undefined,
      price_per_m2: undefined,
      price_description: "",
      reference_listed: "",
      broker_license: "",
      agent_license: "",
      zone_name: "",
      dld_permit_number: "",
      dld_barcode: "",
      building_name: "",
      slug: "",
      meta_title: "",
      meta_description: "",
    },
  });

  useEffect(() => {
    if (formValues) {
      reset(formValues);
    }
  }, [formValues, reset]);

  useEffect(() => {
    if (!propertyData) return;
    const raw =
      (propertyData as any)?.data?.property_name !== undefined ||
      (propertyData as any)?.data?.property_id !== undefined
        ? (propertyData as any).data
        : (propertyData as any)?.data ?? propertyData;
    const p = (raw as Record<string, any>) || {};

    const existingMedia = p.medias || p.media || p.images || [];
    if (Array.isArray(existingMedia) && existingMedia.length > 0) {
      const urls = existingMedia
        .map((m: any) =>
          typeof m === "string" ? m : m.url || m.image_url || m.file_path || ""
        )
        .filter(Boolean);
      if (urls.length > 0) {
        setImagePreviews(urls);
      }
    }

    const existingFloorPlanUrl = p.floor_plan_url as string | undefined;
    if (existingFloorPlanUrl) {
      setFloorPlanPreview(existingFloorPlanUrl);
    }

    const existingFeatures = p.features || p.feature || [];
    if (Array.isArray(existingFeatures) && existingFeatures.length > 0) {
      const mappedFeatures: SelectedPropertyFeature[] = existingFeatures.map((f: any) => ({
        feature_id: Number(f.feature_id ?? f.id),
        value: f.value || f.pivot?.value || f.feature_name || f.name || "",
        feature_name: f.feature_name || f.name || "",
        is_amenity: f.is_amenity !== undefined ? Number(f.is_amenity) : undefined,
        icons: f.icons || f.icon || null,
      }));
      setSelectedFeatures(mappedFeatures);

      mappedFeatures.forEach(async (feat) => {
        if (!feat.value && propertyId && feat.feature_id) {
          try {
            const detailRes = await AdminPropertiesService.getPropertyFeature(propertyId, feat.feature_id);
            const d = detailRes?.data ?? detailRes;
            const detailedVal = d?.value || d?.pivot?.value || d?.feature_name;
            if (detailedVal) {
              setSelectedFeatures((current) =>
                current.map((item) =>
                  item.feature_id === feat.feature_id ? { ...item, value: detailedVal } : item
                )
              );
            }
          } catch {
          }
        }
      });
    }
  }, [propertyData, propertyId]);

  useEffect(() => {
    if (!propertyData || !token) return;
    const raw =
      (propertyData as any)?.data?.property_name !== undefined ||
      (propertyData as any)?.data?.property_id !== undefined
        ? (propertyData as any).data
        : (propertyData as any)?.data ?? propertyData;
    let cancelled = false;
    loadPropertyPaymentPlans(raw, propertyId, token, queryClient).then((plans) => {
      if (cancelled) return;
      initialPaymentPlansRef.current = plans;
      setPaymentPlans(plans);
    });
    return () => {
      cancelled = true;
    };
  }, [propertyData, propertyId, token, queryClient]);

  const currentTabIndex = EDIT_TABS.findIndex((tab) => tab.id === activeTab);

  const handleFormSubmit = async (formData: PropertiesInput) => {
    setIsUpdating(true);
    let hasPartialFailure = false;
    try {
      const data: PropertiesInput = {
        ...formData,
        payment_plans: paymentPlans,
        parking_spaces: formData.parking_spaces
          ? Number(formData.parking_spaces)
          : undefined,
        bua_size: formData.bua_size ? Number(formData.bua_size) : undefined,
        plot_size: formData.plot_size ? Number(formData.plot_size) : undefined,
      };

      await AdminPropertiesService.updateProperty(propertyId, data as any);

      if (token) {
        const { failed } = await syncPropertyPaymentPlans({
          propertyId,
          initialPlans: initialPaymentPlansRef.current,
          plans: paymentPlans,
          token,
          userId: session?.user?.id ? String(session.user.id) : undefined,
        });
        if (failed > 0) toast.error(t("paymentPlansView.syncFailed"));
        queryClient.invalidateQueries({ queryKey: ["paymentPlan"] });
      }

      try {
        await AdminPropertiesService.savePropertyFeatures(
          propertyId,
          selectedFeatures.map((sf) => ({
            feature_id: sf.feature_id,
            value: sf.value || sf.feature_name || "",
          }))
        );
      } catch (featErr) {
        console.error("Failed to save property features:", featErr);
        hasPartialFailure = true;
      }

      if (floorPlan) {
        try {
          await AdminPropertiesService.addPropertyFloorPlan(propertyId, floorPlan);
        } catch (fpErr) {
          console.error("Failed to upload floor plan:", fpErr);
          hasPartialFailure = true;
        }
      }

      toast.success(
        t("properties.messages.updateSuccess")
      );
      if (hasPartialFailure) {
        toast.error(t("properties.messages.partialSaveFailed"), { duration: 8000 });
      }

      queryClient.invalidateQueries({ queryKey: ["properties"] });
      queryClient.removeQueries({ queryKey: ["properties"] });
      queryClient.invalidateQueries({
        queryKey: ["property-detail", propertyId],
      });
      queryClient.invalidateQueries({
        queryKey: ["propertyDetails", String(propertyId)],
      });
      queryClient.invalidateQueries({
        queryKey: ["propertyDetails", propertyId],
      });

      router.push(`${routePrefix}/properties/${propertyId}`);
      router.refresh();
    } catch (err) {
      applyServerFieldErrors(err, {
        tabs: EDIT_TABS,
        activeTab: EDIT_TABS[currentTabIndex],
        setError,
        onShowTab: (tab) => setActiveTab(tab.id),
        getTabLabel: (tab) => t(tab.translationKey),
        t,
        fallbackMessage: t("properties.messages.updateFailed"),
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleInvalid = (errs: any) => {
    const errorKeys = Object.keys(errs) as (keyof PropertiesInput)[];
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0];
      const targetTab = EDIT_TABS.find((tab) => tab.fields.includes(firstErrorKey));
      if (targetTab && targetTab.id !== activeTab) {
        setActiveTab(targetTab.id);
      }

      const errorObj = errs[firstErrorKey];
      if (errorObj?.message) {
        toast.error(t(errorObj.message));
      }
    }
  };

  const handleNextTab = async () => {
    const currentTabFields = EDIT_TABS[currentTabIndex]?.fields || [];
    if (currentTabFields.length > 0) {
      const isValid = await trigger(currentTabFields);
      if (!isValid) {
        toast.error(
          t("validation.fillRequiredFields")
        );
        scrollToFirstInvalidField();
        return;
      }
    }
    if (currentTabIndex < EDIT_TABS.length - 1) {
      setActiveTab(EDIT_TABS[currentTabIndex + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevTab = () => {
    if (currentTabIndex > 0) {
      setActiveTab(EDIT_TABS[currentTabIndex - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = pickValidPropertyImages(Array.from(e.target.files || []), { t });
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

  if (propertyLoading) {
    return <EditPropertyLoading />;
  }

  return (
    <div className="min-h-screen bg-gray-50/70 dark:bg-neutral-950 pb-16 transition-colors">
      <EditPropertyHeader
        routePrefix={routePrefix}
        propertyId={propertyId}
        propertyName={propertyName}
        onCancel={() => router.push(`${routePrefix}/properties/${propertyId}`)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <form onSubmit={handleSubmit(handleFormSubmit, handleInvalid)} className="space-y-6">
          <FormErrorAlert message={errors.root?.server?.message} />

          <EditPropertyTabsNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            errors={errors}
          />

          <div>
            <div className={activeTab === "basic_info" ? "block" : "hidden"}>
              <BasicInfoTab
                register={register}
                control={control}
                errors={errors}
                propertiesType={mergedTypes}
                propertiesSubtype={mergedSubtypes}
                projects={mergedProjects}
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

          <EditPropertyFormActions
            currentTabIndex={currentTabIndex}
            isUpdating={isUpdating}
            onPrev={handlePrevTab}
            onNext={handleNextTab}
            onCancel={() => router.push(`${routePrefix}/properties/${propertyId}`)}
          />
        </form>
      </div>
    </div>
  );
}