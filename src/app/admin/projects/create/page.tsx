"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { FieldErrors } from "react-hook-form";
import { useForm } from "@/hooks/use-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCreateProjectSchema, CreateProjectInput } from "@/validators/create-project.schema";
import useDashboardAdminProjectsCreateData from "@/hooks/use-dashboardAdminProjectsCreateData";
import useCreateProject, { CreateProjectWithMediaParams } from "@/hooks/use-create-project";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight, ChevronLeft, CheckCircle2, Loader2 } from "lucide-react";
import { FormErrorAlert } from "@/components/ui/form-message";
import { applyApiFormErrors, scrollToFirstInvalidField } from "@/lib/form-utils";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

import { LocationData, MediaItem } from "./types";
import { ProjectLocationForm } from "./components/ProjectLocationForm";
import { ProjectBasicInfoForm } from "./components/ProjectBasicInfoForm";
import { ProjectUnitsPricingForm } from "./components/ProjectUnitsPricingForm";
import { ProjectAmenitiesForm } from "./components/ProjectAmenitiesForm";
import { ProjectPaymentPlansForm } from "./components/ProjectPaymentPlansForm";
import { ProjectMilestonesForm } from "./components/ProjectMilestonesForm";
import { ProjectBuildingsForm } from "./components/ProjectBuildingsForm";
import { ProjectMediaForm } from "./components/ProjectMediaForm";
import { addProjectPayment, addMilestone, addBuilding } from "@/data/api-client";
import { addDraftPlanItems, buildPaymentPlanPayload, getCreatedPlanId } from "@/lib/payment-plans";
import { PropertyPaymentPlan } from "@/features/properties/components/create/tabs/payment-plans/payment-plans.types";
import { ProjectMilestoneItem } from "./components/AddProjectMilestoneModal";
import { ProjectBuildingItem } from "./components/AddProjectBuildingModal";

type ProjectTabKey =
  | "basic_info"
  | "location"
  | "units_pricing"
  | "amenities"
  | "payment_plans"
  | "milestones"
  | "buildings"
  | "media";

type ProjectField = keyof CreateProjectInput & string;

const PROJECT_TABS: Array<{ id: ProjectTabKey; labelAr: string; labelEn: string }> = [
  { id: "basic_info", labelAr: "المعلومات الأساسية", labelEn: "Basic Info" },
  { id: "location", labelAr: "الموقع", labelEn: "Location" },
  { id: "units_pricing", labelAr: "الوحدات والأسعار", labelEn: "Units & Pricing" },
  { id: "amenities", labelAr: "المرافق", labelEn: "Amenities" },
  { id: "payment_plans", labelAr: "خطط السداد", labelEn: "Payment Plans" },
  { id: "milestones", labelAr: "خطوات المشروع", labelEn: "Milestones" },
  { id: "buildings", labelAr: "المباني", labelEn: "Buildings" },
  { id: "media", labelAr: "الوسائط", labelEn: "Media" },
];

/** SEO fields are rendered on every tab, so their errors are shown below whichever tab is active. */
const SEO_FIELDS: ProjectField[] = ["slug", "meta_title", "meta_description"];

/** Form fields validated when leaving a tab, and used to find the tab that holds an error. */
const TAB_FIELDS: Partial<Record<ProjectTabKey, ProjectField[]>> = {
  basic_info: ["project_name", "project_name_en", "developer_id", "status", "project_type", "description", ...SEO_FIELDS],
  location: [
    "city_id",
    "area_id",
    "google_map_link",
    "latitude",
    "longitude",
    "landmark",
    "location_description",
    "north_side",
    "south_side",
    "east_side",
    "west_side",
  ],
  units_pricing: [
    "total_units",
    "available_units",
    "launch_date",
    "completion_date",
    "unit_types",
    "currency",
    "project_size",
    "min_price",
    "max_price",
    "price_sq_min",
    "price_sq_max",
  ],
};

/** Backend error keys (from AdminProjectsService.createProject's FormData) → form fields. */
const CREATE_PROJECT_FIELD_MAP: Record<string, ProjectField> = {
  "location.google_map_link": "google_map_link",
  "location.latitude": "latitude",
  "location.longitude": "longitude",
  "location.city_id": "city_id",
  "location.area_id": "area_id",
  "location.landmark": "landmark",
  "location.description": "location_description",
  "location.north_side": "north_side",
  "location.south_side": "south_side",
  "location.east_side": "east_side",
  "location.west_side": "west_side",
  price_range: "min_price",
  price_range_SQ: "price_sq_min",
};

export default function CreateProjectPage() {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { data: session } = useSession();
  const userType = (session?.user?.user_type || session?.user?.role_name)?.toLowerCase();
  const roleId = session?.user?.role_id as number | undefined;
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const [activeTab, setActiveTab] = useState<ProjectTabKey>("basic_info");
  const [country, setCountry] = useState("UAE");
  const [countryId, setCountryId] = useState<number | undefined>(2);

  const [locationData, setLocationData] = useState<LocationData>({
    latitude: 0,
    longitude: 0,
    landmark: "",
    city_id: "",
    north_side: "",
    south_side: "",
    east_side: "",
    west_side: "",
    google_map_link: "",
    area_id: "",
  });

  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [paymentPlans, setPaymentPlans] = useState<PropertyPaymentPlan[]>([]);
  const [milestones, setMilestones] = useState<ProjectMilestoneItem[]>([]);
  const [buildings, setBuildings] = useState<ProjectBuildingItem[]>([]);

  const createProjectSchema = useMemo(() => getCreateProjectSchema(t), [t]);

  const form = useForm<CreateProjectInput>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      project_name: "",
      project_name_en: "",
      status: "ongoing",
      total_units: "",
      available_units: "",
      launch_date: "",
      completion_date: "",
      delivery_date: "",
      unit_types: "",
      project_size: "",
      description: "",
      currency: "AED",
      min_price: "",
      max_price: "",
      price_sq_min: "",
      price_sq_max: "",
      price_range: "",
      price_range_SQ: "",
      project_type: "residential",
      developer_id: "",
      latitude: 0,
      longitude: 0,
      landmark: "",
      city_id: "",
      area_id: "",
      north_side: "",
      south_side: "",
      east_side: "",
      west_side: "",
      google_map_link: "",
      location_description: "",
      slug: "",
      meta_title: "",
      meta_description: "",
    },
  });

  const { setValue, setError, getValues } = form;
  const formErrors = form.formState.errors;
  // True for the whole submit (project + related items), not just the create request.
  const isSaving = form.formState.isSubmitting;

  const { developersData } = useDashboardAdminProjectsCreateData(countryId);

  const developersList = Array.isArray(developersData.data)
    ? developersData.data
    : Array.isArray((developersData.data as any)?.data)
      ? (developersData.data as any).data
      : Array.isArray((developersData.data as any)?.developers)
        ? (developersData.data as any).developers
        : [];

  useEffect(() => {
    if ((userType === "developer" || roleId === 3) && developersList?.[0]?.developer_id) {
      setValue("developer_id", String(developersList[0].developer_id), { shouldValidate: true });
    }
  }, [userType, roleId, developersList, setValue]);

  useEffect(() => {
    setValue("latitude", locationData.latitude);
    setValue("longitude", locationData.longitude);
    setValue("city_id", locationData.city_id);
    setValue("area_id", locationData.area_id || "");
    setValue("landmark", locationData.landmark);
    setValue("north_side", locationData.north_side);
    setValue("south_side", locationData.south_side);
    setValue("east_side", locationData.east_side);
    setValue("west_side", locationData.west_side);
    setValue("google_map_link", locationData.google_map_link);
  }, [locationData, setValue]);

  // Errors from the per-tab check (before the first submit) don't re-validate on change by default:
  // re-check a field with an error whenever its value changes, so the message clears once it's fixed.
  useEffect(() => {
    const subscription = form.watch((_values, { name }) => {
      if (name && form.getFieldState(name).error) {
        form.trigger(name);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const { createProject, isCreating } = useCreateProject();
  const token = session?.user?.accessToken;

  /** First field (in tab order) that currently has an error, and the tab it lives on. */
  const findFirstError = (): { field: ProjectField; tab: ProjectTabKey } | null => {
    for (const tab of PROJECT_TABS) {
      const field = TAB_FIELDS[tab.id]?.find((name) => !!form.getFieldState(name).error);
      if (field) return { field, tab: tab.id };
    }
    return null;
  };

  /** Validates one tab's fields: errors show under the inputs and the first one is toasted. */
  const validateTab = async (tabId: ProjectTabKey): Promise<boolean> => {
    const fields = TAB_FIELDS[tabId];
    if (!fields?.length) return true;
    const isValid = await form.trigger(fields);
    if (!isValid) {
      const firstField = fields.find((name) => !!form.getFieldState(name).error);
      const message = firstField ? form.getFieldState(firstField).error?.message : undefined;
      toast.error(message ? t(message) : t("projects.create.errors.fillRequired"));
      scrollToFirstInvalidField();
    }
    return isValid;
  };

  const handleSubmitForm = async (formValues: CreateProjectInput) => {
    // City/area are required by the schema, so these are never empty here.
    const finalArea = formValues.area_id || locationData.area_id || "";
    const finalCity = formValues.city_id || locationData.city_id;

    const price_range = `${formValues.min_price}-${formValues.max_price}`;
    const price_range_SQ = `${formValues.price_sq_min}-${formValues.price_sq_max}`;

    const formData: CreateProjectWithMediaParams = {
      ...formValues,
      area_id: finalArea,
      city_id: finalCity,
      price_range,
      price_range_SQ,
      payment_plans: paymentPlans,
      milestones,
      buildings,
      location: {
        ...locationData,
        area_id: finalArea,
        city_id: finalCity,
      } as any,
      mediaItems: mediaItems.map((item) => ({
        file: item.file,
        description: item.description,
        is_primary: item.is_primary,
        my_order: item.my_order,
        media_type: item.media_type,
        media_url: item.media_url,
      })),
    };

    let res: Awaited<ReturnType<typeof createProject>>;
    try {
      res = await createProject(formData);
    } catch (error) {
      console.error("Failed to create project:", error);
      const { summary, fieldErrorCount } = applyApiFormErrors(error, {
        setError,
        getValues,
        t,
        fieldMap: CREATE_PROJECT_FIELD_MAP,
        fallbackMessage: t("projects.messages.createFailed"),
      });
      toast.error(summary, { id: API_ERROR_TOAST_ID });
      if (fieldErrorCount > 0) {
        // The field may be on another tab: open it so the message under the input is visible.
        const firstError = findFirstError();
        if (firstError) {
          if (firstError.tab !== activeTab && !SEO_FIELDS.includes(firstError.field)) {
            setActiveTab(firstError.tab);
          }
        }
      }
      return;
    }

    const newProjectId = (res as any)?.projectId || (res as any)?.project_id;
    // Related items are saved one by one once the project exists; count failures to tell the user.
    let failedRelatedItems = 0;

    if (newProjectId && paymentPlans.length > 0 && token) {
      for (const plan of paymentPlans) {
        try {
          const planPayload = {
            ...buildPaymentPlanPayload(plan, session?.user?.id ? String(session.user.id) : undefined),
            entity_type: "PROJECTS",
            entities: [{ entity_id: newProjectId, developer_id: Number(formValues.developer_id) }],
          };
          const planRes = await addProjectPayment(planPayload as any, token);
          const createdPlanId = getCreatedPlanId(planRes);
          if (createdPlanId) {
            await addDraftPlanItems(createdPlanId, plan, token);
          }
        } catch (planErr) {
          failedRelatedItems += 1;
          console.error("Error creating payment plan for project:", planErr);
        }
      }
    }

    if (newProjectId && milestones.length > 0 && token) {
      for (const m of milestones) {
        try {
          await addMilestone(
            {
              milestone_name: m.milestone_name,
              description: m.description || "",
              status: m.status || "pending",
              planned_start_date: m.planned_start_date || "",
              planned_end_date: m.planned_end_date || "",
              completion_percentage: m.completion_percentage ? String(m.completion_percentage) : undefined,
              actual_start_date: m.actual_start_date || undefined,
              actual_end_date: m.actual_end_date || undefined,
              project_id: Number(newProjectId),
            },
            token
          );
        } catch (mErr) {
          failedRelatedItems += 1;
          console.error("Failed to create milestone for project:", mErr);
        }
      }
    }

    if (newProjectId && buildings.length > 0 && token) {
      for (const b of buildings) {
        try {
          await addBuilding(
            {
              building_name: b.building_name,
              total_floors: b.total_floors || 1,
              total_units: b.total_units || 0,
              construction_status: b.construction_status || "Under Construction",
              completion_date: b.completion_date || "",
              building_type: b.building_type || "Residential",
              built_type: b.building_type || "Residential",
              parking_spaces: b.parking_spaces || 0,
              description: b.description || "",
              project_id: Number(newProjectId),
            },
            token
          );
        } catch (bErr) {
          failedRelatedItems += 1;
          console.error("Failed to create building for project:", bErr);
        }
      }
    }

    if (failedRelatedItems > 0) {
      // Same id as the API client's generic error toast, so this replaces it instead of stacking.
      toast.warning(t("projects.create.errors.relatedItemsFailed", { count: failedRelatedItems }), {
        id: API_ERROR_TOAST_ID,
        duration: 8000,
      });
    }

    router.push(`${routePrefix}/projects`);
  };

  const handleInvalid = (errors: FieldErrors<CreateProjectInput>) => {
    const firstError = findFirstError();
    const firstErrorKey = firstError?.field ?? (Object.keys(errors)[0] as ProjectField | undefined);
    if (!firstErrorKey) return;

    const message = form.getFieldState(firstErrorKey).error?.message;
    toast.error(message ? t(message) : t("projects.create.errors.fillRequired"));

    if (firstError && firstError.tab !== activeTab && !SEO_FIELDS.includes(firstError.field)) {
      setActiveTab(firstError.tab);
    }
  };

  const currentTabIndex = PROJECT_TABS.findIndex((tab) => tab.id === activeTab);

  const handleNextTab = async () => {
    if (!(await validateTab(activeTab))) {
      return;
    }
    if (currentTabIndex < PROJECT_TABS.length - 1) {
      setActiveTab(PROJECT_TABS[currentTabIndex + 1].id);
    }
  };

  const handleTabClick = async (targetTabId: ProjectTabKey) => {
    const targetIndex = PROJECT_TABS.findIndex((tab) => tab.id === targetTabId);
    if (targetIndex > currentTabIndex) {
      for (let i = currentTabIndex; i < targetIndex; i++) {
        if (!(await validateTab(PROJECT_TABS[i].id))) {
          // Open the tab that needs fixing (it may not be the current one).
          setActiveTab(PROJECT_TABS[i].id);
          return;
        }
      }
    }
    setActiveTab(targetTabId);
  };

  const handlePrevTab = () => {
    if (currentTabIndex > 0) {
      setActiveTab(PROJECT_TABS[currentTabIndex - 1].id);
    }
  };

  const handleFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && (e.target as HTMLElement)?.tagName !== "TEXTAREA") {
      if (currentTabIndex < PROJECT_TABS.length - 1) {
        e.preventDefault();
      }
    }
  };

  const tabHasError = (tabId: ProjectTabKey) =>
    !!TAB_FIELDS[tabId]?.some((name) => !SEO_FIELDS.includes(name) && !!formErrors[name]);

  const otherTabsWithErrors = PROJECT_TABS.filter((tab) => tab.id !== activeTab && tabHasError(tab.id));
  const otherTabsErrorMessage =
    otherTabsWithErrors.length > 0
      ? t("projects.create.errors.otherTabsHaveErrors", {
          tabs: otherTabsWithErrors.map((tab) => (isAr ? tab.labelAr : tab.labelEn)).join(isAr ? "، " : ", "),
        })
      : undefined;

  const seoErrorMessage = SEO_FIELDS.map((name) => formErrors[name]?.message).find(
    (message): message is string => typeof message === "string" && !!message
  );

  return (
    <div className="w-full space-y-3 pb-8">
      <div className="flex items-center justify-between pb-2 pt-0">
        <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
          {isAr ? "إضافة مشروع جديد" : (t("projects.create.title"))}
        </h1>

        <button
          type="button"
          onClick={() => router.push(`${routePrefix}/projects`)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-2xs hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          {isAr ? (
            <ChevronRight className="h-3.5 w-3.5 text-gray-500 shrink-0" />
          ) : (
            <ChevronLeft className="h-3.5 w-3.5 text-gray-500 shrink-0" />
          )}
          <span>{isAr ? "رجوع إلى المشاريع" : "Back to Projects"}</span>
        </button>
      </div>

      <form
        onSubmit={form.handleSubmit(handleSubmitForm, handleInvalid)}
        onKeyDown={handleFormKeyDown}
        className="space-y-3.5"
      >
        <div className="border-b border-gray-200 dark:border-neutral-800 mb-3">
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-7 no-scrollbar overflow-x-hidden md:overflow-x-visible">
            {PROJECT_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const hasError = tabHasError(tab.id);
              const label = isAr ? tab.labelAr : tab.labelEn;
              let count = 0;
              if (tab.id === "payment_plans") count = paymentPlans.length;
              if (tab.id === "milestones") count = milestones.length;
              if (tab.id === "buildings") count = buildings.length;
              if (tab.id === "media") count = mediaItems.length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`pb-1.5 text-xs font-medium whitespace-nowrap transition-colors border-b-2 select-none shrink-0 inline-flex items-center gap-1.5 ${isActive
                    ? "border-[#008081] text-[#008081] dark:border-teal-400 dark:text-teal-400 font-bold -mb-px"
                    : "border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium -mb-px"
                    }`}
                >
                  <span className={hasError && !isActive ? "text-red-600 dark:text-red-400" : undefined}>{label}</span>
                  {hasError && (
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full bg-red-500"
                      aria-label={t("validation.api.fixFields")}
                    />
                  )}
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
                </button>
              );
            })}
          </div>
        </div>

        <div className="transition-all duration-200">
          {activeTab === "basic_info" && (
            <ProjectBasicInfoForm
              form={form}
              developersData={developersList}
              isLoadingDevelopers={developersData.isLoading}
              country={country}
              setCountry={setCountry}
            />
          )}

          {activeTab === "location" && (
            <ProjectLocationForm
              form={form}
              locationData={locationData}
              setLocationData={setLocationData}
              country={country}
              setCountry={setCountry}
              setCountryId={setCountryId}
            />
          )}

          {activeTab === "units_pricing" && (
            <ProjectUnitsPricingForm form={form} />
          )}

          {activeTab === "amenities" && (
            <ProjectAmenitiesForm form={form} />
          )}

          {activeTab === "payment_plans" && (
            <ProjectPaymentPlansForm
              form={form}
              plans={paymentPlans}
              setPlans={setPaymentPlans}
            />
          )}

          {activeTab === "milestones" && (
            <ProjectMilestonesForm
              form={form}
              milestones={milestones}
              setMilestones={setMilestones}
            />
          )}

          {activeTab === "buildings" && (
            <ProjectBuildingsForm
              form={form}
              buildings={buildings}
              setBuildings={setBuildings}
            />
          )}

          {activeTab === "media" && (
            <ProjectMediaForm
              form={form}
              mediaItems={mediaItems}
              setMediaItems={setMediaItems}
            />
          )}
        </div>

        <FormErrorAlert message={seoErrorMessage ? t(seoErrorMessage) : undefined} />
        <FormErrorAlert message={formErrors.root?.server?.message} />
        <FormErrorAlert message={otherTabsErrorMessage} />

        <div className="flex items-center justify-between pt-2 pb-6">
          <div className="flex items-center gap-3">
            {currentTabIndex === PROJECT_TABS.length - 1 && (
              <Button
                type="button"
                onClick={form.handleSubmit(handleSubmitForm, handleInvalid)}
                disabled={isCreating || isSaving}
                className="bg-[#008081] hover:bg-[#006666] text-white text-xs font-semibold px-5 h-9 rounded-md gap-1.5 shadow-2xs cursor-pointer"
              >
                {isCreating || isSaving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="h-4 w-4" />
                )}
                <span>
                  {isCreating || isSaving
                    ? t("projects.create.creating")
                    : t("projects.create.createProject")}
                </span>
              </Button>
            )}
            <Button
              type="button"
              variant="outline"
              disabled={isSaving}
              onClick={() => router.push(`${routePrefix}/projects`)}
              className="border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 text-xs font-medium px-4 h-9 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800 shadow-2xs cursor-pointer"
            >
              {isAr ? "إلغاء" : "Cancel"}
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
                <span>{isAr ? "السابق" : "Previous"}</span>
              </Button>
            )}

            {currentTabIndex < PROJECT_TABS.length - 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleNextTab}
                className="h-8 text-xs px-3 border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 gap-1 shadow-2xs cursor-pointer"
              >
                <span>{isAr ? "التالي" : "Next"}</span>
                <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
