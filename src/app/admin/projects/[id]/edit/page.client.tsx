"use client";

import React, { useState, use } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { FieldErrors, Path, Resolver } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { AdminProjectsService } from "@/features/projects/services/AdminProjectsService";
import { fetchProjectsDetails } from "@/data/api-client";
import useDashboardAdminProjectsCreateData from "@/hooks/use-dashboardAdminProjectsCreateData";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { getEditProjectFormSchema } from "@/validators/edit-project.schema";

import { TabKey, ProjectFormValues } from "./components/types";
import { EditProjectHeader } from "./components/EditProjectHeader";
import { EditProjectTabsNav } from "./components/EditProjectTabsNav";
import { EditBasicInfoTab } from "./components/EditBasicInfoTab";
import { EditLocationTab } from "./components/EditLocationTab";
import { EditUnitsPricingTab } from "./components/EditUnitsPricingTab";
import { EditTabWrapper } from "./components/EditTabWrapper";

const BuildingsTab = dynamic(
  () =>
    import("../../[id]/components/tabs/BuildingsTab").then(
      (mod) => mod.BuildingsTab,
    ),
  { ssr: false },
);
const FeaturesTab = dynamic(
  () =>
    import("../../[id]/components/tabs/FeaturesTab").then(
      (mod) => mod.FeaturesTab,
    ),
  { ssr: false },
);
const MilestonesTab = dynamic(
  () =>
    import("../../[id]/components/tabs/MilestonesTab").then(
      (mod) => mod.MilestonesTab,
    ),
  { ssr: false },
);
const PaymentPlansTab = dynamic(
  () =>
    import("../../[id]/components/tabs/PaymentPlansTab").then(
      (mod) => mod.PaymentPlansTab,
    ),
  { ssr: false },
);
const ProjectMedia = dynamic(
  () =>
    import("../../[id]/components/ProjectMedia").then((mod) => mod.ProjectMedia),
  { ssr: false },
);

type ProjectField = Path<ProjectFormValues>;

/** Tabs that hold form fields, used to open the tab with the first error. */
const TAB_FIELDS: Partial<Record<TabKey, ProjectField[]>> = {
  basic_info: ["project_name", "developer_id", "project_type", "status", "currency", "description"],
  location: [
    "city_id",
    "area_id",
    "landmark",
    "google_map_link",
    "latitude",
    "longitude",
    "north_side",
    "south_side",
    "east_side",
    "west_side",
    "location_description",
  ],
  units_pricing: [
    "total_units",
    "available_units",
    "project_size",
    "launch_date",
    "completion_date",
    "permit_no",
    "phase",
    "barcode",
    "min_price",
    "max_price",
    "price_sq_min",
    "price_sq_max",
  ],
};

/** SEO fields are rendered on every tab, so their errors are shown above whichever tab is active. */
const SEO_FIELDS: ProjectField[] = ["slug", "meta_title", "meta_description"];

const FIELD_TAB_ORDER: TabKey[] = ["basic_info", "location", "units_pricing"];

/** Backend error keys (from the payload built in onSubmit) → form fields. */
const EDIT_PROJECT_FIELD_MAP: Record<string, ProjectField> = {
  "location.latitude": "latitude",
  "location.longitude": "longitude",
  "location.landmark": "landmark",
  "location.city_id": "city_id",
  "location.area_id": "area_id",
  "location.north_side": "north_side",
  "location.south_side": "south_side",
  "location.east_side": "east_side",
  "location.west_side": "west_side",
  "location.google_map_link": "google_map_link",
  "location.description": "location_description",
  price_range: "min_price",
  price_range_SQ: "price_sq_min",
};

interface EditProjectPageProps {
  params?: Promise<{ id: string }> | { id: string };
}

export default function EditProjectPage({ params }: EditProjectPageProps) {
  const routerParams = useParams();
  const unwrappedParams = params instanceof Promise ? use(params) : params;
  const rawId = unwrappedParams?.id || (routerParams?.id as string);
  const projectId = Number(rawId);

  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();
  const editProjectSchema = React.useMemo(() => getEditProjectFormSchema(t), [t]);
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const [activeTab, setActiveTab] = useState<TabKey>("basic_info");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { developersData } = useDashboardAdminProjectsCreateData();
  const rawDevelopersList = Array.isArray(developersData?.data)
    ? developersData.data
    : Array.isArray((developersData?.data as any)?.data)
      ? (developersData.data as any).data
      : Array.isArray((developersData?.data as any)?.developers)
        ? (developersData.data as any).developers
        : [];

  const developersList = React.useMemo(() => {
    const seen = new Set<string>();
    const unique: any[] = [];
    for (const dev of rawDevelopersList) {
      const id = String(dev?.developer_id ?? dev?.id ?? "");
      if (id && !seen.has(id)) {
        seen.add(id);
        unique.push(dev);
      }
    }
    return unique;
  }, [rawDevelopersList]);

  const { data: queryData, isLoading, isError, error } = useQuery({
    queryKey: ["projectDetails", projectId.toString()],
    queryFn: () => (token ? fetchProjectsDetails(projectId, token) : AdminProjectsService.getProject(projectId)),
    enabled: !!projectId,
    select: (response: any) => {
      if (response?.data && response.data.project_id) {
        return response.data;
      }
      return response?.data || response;
    },
  });

  const project = queryData || null;

  const formValues = React.useMemo<ProjectFormValues | undefined>(() => {
    if (!project) return undefined;
    const raw = (project as any)?.data?.project_name !== undefined || (project as any)?.data?.project_id !== undefined
      ? (project as any).data
      : (project as any)?.data ?? project;
    const p = (raw as Record<string, any>) || {};
    if (!p.project_name && !p.project_id) return undefined;

    let mappedProjectType = (p.project_type as string) ?? "residential";
    const lowerType = mappedProjectType.toLowerCase();
    if (lowerType === "mixed use" || lowerType === "mixed-use") mappedProjectType = "mixed-use";
    else if (lowerType === "residential") mappedProjectType = "residential";
    else if (lowerType === "commercial") mappedProjectType = "commercial";

    let mappedStatus = ((p.status as string) || "ongoing").toLowerCase();
    if (mappedStatus === "under construction" || mappedStatus === "ongoing") mappedStatus = "ongoing";
    else if (mappedStatus === "upcoming" || mappedStatus === "planned") mappedStatus = "upcoming";
    else if (mappedStatus === "completed") mappedStatus = "completed";

    let mappedCurrency = ((p.currency as string) || "AED").toUpperCase();
    if (!["AED", "SAR", "USD", "EGP"].includes(mappedCurrency)) mappedCurrency = "AED";

    const devId = String((p.developer as any)?.developer_id || p.developer_id || (p.developer as any)?.id || "");

    const priceRange = String(p.price_range || "");
    const [minP, maxP] = priceRange.split("-").map((s) => s.trim());

    const priceSqRange = String(p.price_range_SQ || "");
    const [minSq, maxSq] = priceSqRange.split("-").map((s) => s.trim());

    const cityId = String(p.location?.city?.name || p.location?.city?.city_name || p.location?.city?.id || p.location?.city_id || "");
    const areaId = String(p.location?.area?.area_name || p.location?.area?.name || p.location?.area?.dld_area_name || p.location?.area?.area_id || p.location?.area_id || "");

    return {
      project_name: p.project_name ?? "",
      developer_id: devId,
      project_type: mappedProjectType,
      status: mappedStatus,
      currency: mappedCurrency,
      description: p.description ?? "",
      total_units: p.total_units != null ? String(p.total_units) : "",
      available_units: p.available_units != null ? String(p.available_units) : "",
      project_size: p.project_size != null ? String(p.project_size) : "",
      launch_date: p.launch_date ?? "",
      completion_date: p.completion_date ?? "",
      min_price: minP || (p.min_price != null ? String(p.min_price) : ""),
      max_price: maxP || (p.max_price != null ? String(p.max_price) : ""),
      price_sq_min: minSq || "",
      price_sq_max: maxSq || "",
      city_id: cityId,
      area_id: areaId,
      landmark: p.location?.landmark ?? "",
      google_map_link: p.location?.google_map_link ?? "",
      latitude: Number(p.location?.latitude || p.latitude || 0),
      longitude: Number(p.location?.longitude || p.longitude || 0),
      north_side: p.location?.north_side ?? "",
      south_side: p.location?.south_side ?? "",
      east_side: p.location?.east_side ?? "",
      west_side: p.location?.west_side ?? "",
      location_description: p.location?.description ?? "",
      permit_no: p.permit_no != null ? String(p.permit_no) : "",
      phase: p.phase != null ? String(p.phase) : "",
      barcode: p.barcode != null ? String(p.barcode) : "",
      slug: p.slug ?? "",
      meta_title: p.meta_title ?? "",
      meta_description: p.meta_description ?? "",
    };
  }, [project]);

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
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(editProjectSchema) as unknown as Resolver<ProjectFormValues>,
    values: formValues,
    defaultValues: {
      project_name: "",
      developer_id: "",
      project_type: "residential",
      status: "ongoing",
      currency: "AED",
      description: "",
      total_units: "",
      available_units: "",
      project_size: "",
      launch_date: "",
      completion_date: "",
      min_price: "",
      max_price: "",
      price_sq_min: "",
      price_sq_max: "",
      city_id: "",
      area_id: "",
      landmark: "",
      google_map_link: "",
      latitude: 0,
      longitude: 0,
      north_side: "",
      south_side: "",
      east_side: "",
      west_side: "",
      location_description: "",
      permit_no: "",
      phase: "",
      barcode: "",
      slug: "",
      meta_title: "",
      meta_description: "",
    },
  });

  const onSubmit = async (data: ProjectFormValues) => {
    if (!projectId) return;
    setIsSubmitting(true);
    try {
      const p = (project as Record<string, any>) || {};
      const price_range = `${data.min_price || "0"}-${data.max_price || "0"}`;
      const price_range_SQ = `${data.price_sq_min || "0"}-${data.price_sq_max || "0"}`;

      const payload: Record<string, unknown> = {
        project_name: data.project_name,
        status: data.status,
        project_type: data.project_type,
        developer_id: String(data.developer_id),
        currency: data.currency || "AED",
        price_range: price_range,
        price_range_SQ: price_range_SQ,
        is_active: String(p.is_active ?? "1"),
        location: {
          latitude: data.latitude || p.location?.latitude || 0,
          longitude: data.longitude || p.location?.longitude || 0,
          landmark: data.landmark || p.location?.landmark || "",
          city_id: data.city_id || p.location?.city?.city_name || p.location?.city_id || "",
          area_id: data.area_id || p.location?.area?.area_name || p.location?.area_id || "",
          north_side: data.north_side || p.location?.north_side || "",
          south_side: data.south_side || p.location?.south_side || "",
          east_side: data.east_side || p.location?.east_side || "",
          west_side: data.west_side || p.location?.west_side || "",
          google_map_link: data.google_map_link || p.location?.google_map_link || "",
          description: data.location_description || p.location?.description || "",
        },
      };

      if (data.total_units) payload.total_units = String(data.total_units);
      if (data.available_units) payload.available_units = String(data.available_units);
      if (data.launch_date) payload.launch_date = data.launch_date;
      if (data.completion_date) payload.completion_date = data.completion_date;
      if (data.project_size) payload.project_size = String(data.project_size);
      if (data.description) payload.description = data.description;
      if (data.permit_no) payload.permit_no = data.permit_no;
      if (data.phase) payload.phase = data.phase;
      if (data.barcode) payload.barcode = data.barcode;
      if (data.slug) payload.slug = data.slug;
      if (data.meta_title) payload.meta_title = data.meta_title;
      if (data.meta_description) payload.meta_description = data.meta_description;

      try {
        await AdminProjectsService.updateProject(projectId, payload);
      } catch (err) {
        const { summary, fieldErrorCount } = applyApiFormErrors(err, {
          setError,
          getValues,
          t,
          fieldMap: EDIT_PROJECT_FIELD_MAP,
          fallbackMessage: t("editProject.messages.updateFailed"),
        });
        toast.error(summary, { id: API_ERROR_TOAST_ID });
        if (fieldErrorCount > 0) openFirstErrorTab();
        return;
      }
      toast.success(t("editProject.messages.updateSuccess"));
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["projectDetails", projectId.toString()] });
      queryClient.invalidateQueries({ queryKey: ["project-detail-edit", projectId] });
      router.push(`${routePrefix}/projects/${projectId}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  /** Opens the tab holding the first field with an error (it may not be the active one). */
  const openFirstErrorTab = () => {
    for (const tab of FIELD_TAB_ORDER) {
      const field = TAB_FIELDS[tab]?.find((name) => !!getFieldState(name).error);
      if (field) {
        if (tab !== activeTab) setActiveTab(tab);
        return getFieldState(field).error?.message;
      }
    }
    return SEO_FIELDS.map((name) => getFieldState(name).error?.message).find(Boolean);
  };

  const handleInvalid = (_errors: FieldErrors<ProjectFormValues>) => {
    const message = openFirstErrorTab();
    toast.error(message || t("projects.create.errors.fillRequired"));
  };

  const submitForm = handleSubmit(onSubmit, handleInvalid);

  const handleCancel = () => {
    router.push(`${routePrefix}/projects/${projectId}`);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600 mx-auto mb-4" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("editProject.loading")}
          </p>
        </div>
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <EmptyState
            type="error"
            title={t("editProject.errorLoading")}
            message={getApiErrorMessage(error, t, t("editProject.errorLoading"))}
          />
          <Button
            onClick={() => router.push(`${routePrefix}/projects`)}
            className="mt-6 bg-teal-600 hover:bg-teal-700 text-white"
          >
            {t("editProject.backToProjects")}
          </Button>
        </div>
      </div>
    );
  }

  const tabHasError = (tab: TabKey) => !!TAB_FIELDS[tab]?.some((name) => !!errors[name]);
  const errorTabs = FIELD_TAB_ORDER.filter(tabHasError);
  const otherTabsWithErrors = errorTabs.filter((tab) => tab !== activeTab);
  const tabLabelKeys: Partial<Record<TabKey, string>> = {
    basic_info: "editProject.tabs.basicInfo",
    location: "editProject.tabs.location",
    units_pricing: "editProject.tabs.unitsPricing",
  };
  const otherTabsErrorMessage =
    otherTabsWithErrors.length > 0
      ? t("projects.create.errors.otherTabsHaveErrors", {
          tabs: otherTabsWithErrors.map((tab) => t(tabLabelKeys[tab] ?? "")).join(", "),
        })
      : undefined;
  const seoErrorMessage = SEO_FIELDS.map((name) => errors[name]?.message).find(Boolean);

  const buildings = project.buildings || [];
  const features = project.features || [];
  const milestones = project.milestones || [];
  const paymentPlans = project.paymentPlans || project.payment_plans || [];
  const medias = project.medias || project.media || [];
  const properties = project.properties || [];

  return (
    <div className="p-3 sm:p-4 lg:p-6 space-y-6 max-w-7xl mx-auto overflow-hidden">
      <EditProjectHeader
        projectId={projectId}
        projectName={project.project_name || ""}
        routePrefix={routePrefix}
        isSubmitting={isSubmitting}
        onSave={submitForm}
      />

      <EditProjectTabsNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        counts={{
          units: properties.length || undefined,
          amenities: features.length || undefined,
          paymentPlans: paymentPlans.length || undefined,
          milestones: milestones.length || undefined,
          buildings: buildings.length || undefined,
          media: medias.length || undefined,
        }}
        errorTabs={errorTabs}
      />

      {(errors.root?.server?.message || otherTabsErrorMessage || seoErrorMessage) && (
        <div className="space-y-2">
          <FormErrorAlert message={errors.root?.server?.message} />
          <FormErrorAlert message={otherTabsErrorMessage} />
          <FormErrorAlert message={seoErrorMessage} />
        </div>
      )}

      <div>
        {activeTab === "basic_info" && (
          <EditBasicInfoTab
            register={register}
            setValue={setValue}
            watch={watch}
            control={control}
            errors={errors}
            developersList={developersList}
            projectDeveloperName={
              project.developer?.developer_name || project.developer?.name
            }
            isSubmitting={isSubmitting}
            onCancel={handleCancel}
            onSubmit={submitForm}
          />
        )}

        {activeTab === "location" && (
          <EditLocationTab
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
            isSubmitting={isSubmitting}
            onCancel={handleCancel}
            onSubmit={submitForm}
          />
        )}

        {activeTab === "units_pricing" && (
          <EditUnitsPricingTab
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
            properties={properties}
            isSubmitting={isSubmitting}
            onCancel={handleCancel}
            onSubmit={submitForm}
          />
        )}

        {activeTab === "amenities" && (
          <EditTabWrapper
            register={register}
            setValue={setValue}
            watch={watch}
            isSubmitting={isSubmitting}
            onCancel={handleCancel}
            onSubmit={submitForm}
          >
            <FeaturesTab
              projectId={projectId}
              token={token!}
              features={features}
            />
          </EditTabWrapper>
        )}

        {activeTab === "payment_plans" && (
          <EditTabWrapper
            register={register}
            setValue={setValue}
            watch={watch}
            isSubmitting={isSubmitting}
            onCancel={handleCancel}
            onSubmit={submitForm}
          >
            <PaymentPlansTab
              projectId={projectId}
              developerId={Number(
                watch("developer_id") || project.developer?.developer_id || 0,
              )}
              token={token!}
              paymentPlans={paymentPlans}
              currency={watch("currency") || "AED"}
            />
          </EditTabWrapper>
        )}

        {activeTab === "milestones" && (
          <EditTabWrapper
            register={register}
            setValue={setValue}
            watch={watch}
            isSubmitting={isSubmitting}
            onCancel={handleCancel}
            onSubmit={submitForm}
          >
            <MilestonesTab
              projectId={projectId}
              token={token!}
              milestones={milestones}
            />
          </EditTabWrapper>
        )}

        {activeTab === "buildings" && (
          <EditTabWrapper
            register={register}
            setValue={setValue}
            watch={watch}
            isSubmitting={isSubmitting}
            onCancel={handleCancel}
            onSubmit={submitForm}
          >
            <BuildingsTab
              projectId={projectId}
              token={token!}
              buildings={buildings}
            />
          </EditTabWrapper>
        )}

        {activeTab === "media" && (
          <EditTabWrapper
            register={register}
            setValue={setValue}
            watch={watch}
            isSubmitting={isSubmitting}
            onCancel={handleCancel}
            onSubmit={submitForm}
            wrapWithCard={false}
          >
            <ProjectMedia projectId={projectId} medias={medias} />
          </EditTabWrapper>
        )}
      </div>
    </div>
  );
}