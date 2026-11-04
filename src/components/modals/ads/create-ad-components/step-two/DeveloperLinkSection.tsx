import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Building2, X } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { FieldError } from "@/components/ui/form-message";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDebounce } from "@/hooks/useDebounce";

interface DeveloperLinkSectionProps {
  developerSearch: string;
  setDeveloperSearch: (val: string) => void;
  developersLoading: boolean;
  developers: any[];
  handleDeveloperChange: (val: string) => void;
  projectSearch: string;
  setProjectSearch: (val: string) => void;
  projectsLoading: boolean;
  projects: any[];
  propertySearch: string;
  setPropertySearch: (val: string) => void;
  propertiesLoading: boolean;
  properties: any[];
}

export function DeveloperLinkSection({
  developerSearch,
  setDeveloperSearch,
  developersLoading,
  developers,
  handleDeveloperChange,
  projectSearch,
  setProjectSearch,
  projectsLoading,
  projects,
  propertySearch,
  setPropertySearch,
  propertiesLoading,
  properties,
}: DeveloperLinkSectionProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  // Filter with the debounced text; the inputs still show what is typed.
  const debouncedDeveloperSearch = useDebounce(developerSearch);
  const debouncedProjectSearch = useDebounce(projectSearch);
  const debouncedPropertySearch = useDebounce(propertySearch);
  const { setValue, clearErrors, control, formState: { errors } } = useFormContext();

  const developerId = useWatch({ control, name: "developerId" });
  const linkTo = useWatch({ control, name: "linkTo" }) || "PROJECTS";
  const projectId = useWatch({ control, name: "projectId" });

  const selectedDeveloperName = React.useMemo(() => {
    if (!developerId) return "";
    const found = developers.find((d) => d.id?.toString() === developerId?.toString());
    return found ? found.name : "";
  }, [developerId, developers]);

  const selectedProjectName = React.useMemo(() => {
    if (!projectId) return "";
    if (linkTo === "PROJECTS") {
      const found = projects.find((p) => p.id?.toString() === projectId?.toString());
      return found ? found.name : "";
    } else if (linkTo === "PROPERTIES") {
      const found = properties.find((p) => p.id?.toString() === projectId?.toString());
      return found ? found.name : "";
    }
    return "";
  }, [projectId, linkTo, projects, properties]);

  const filteredProjects = React.useMemo(() => {
    if (!debouncedProjectSearch || !debouncedProjectSearch.trim()) return projects;
    const s = debouncedProjectSearch.toLowerCase().trim();
    return projects.filter((p) => (p.name || "").toLowerCase().includes(s));
  }, [projects, debouncedProjectSearch]);

  const filteredProperties = React.useMemo(() => {
    if (!debouncedPropertySearch || !debouncedPropertySearch.trim()) return properties;
    const s = debouncedPropertySearch.toLowerCase().trim();
    return properties.filter((p) => (p.name || "").toLowerCase().includes(s));
  }, [properties, debouncedPropertySearch]);

  return (
    <div className="bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
            {t("ads.createStepTwo.developerAndTargetLink")}
          </h3>
        </div>
        {developerId && (
          <span className="text-[11px] font-medium text-teal-600 dark:text-teal-400">
            {isAr ? `المطور المحدد #${developerId}` : `Selected Developer #${developerId}`}
          </span>
        )}
      </div>

      {/* Developer Selector */}
      <div>
        <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between">
          <span>
            {t("ads.createStepTwo.developer")} <span className="text-red-500">*</span>
          </span>
          <span className="text-[11px] text-neutral-400 font-normal">
            {developers.length > 0 ? `${developers.length} ${t("ads.createStepTwo.developersAvailable")}` : ""}
          </span>
        </Label>
        <div className="relative mb-2">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
          <Input
            placeholder={t("ads.createStepTwo.searchDeveloperPlaceholder")}
            value={developerSearch}
            onChange={(e) => setDeveloperSearch(e.target.value)}
            className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 ps-9 pe-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
          />
          {developerSearch && (
            <button
              type="button"
              onClick={() => setDeveloperSearch("")}
              className="absolute end-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <Select
          value={developerId ? developerId.toString() : undefined}
          onValueChange={(val) => {
            handleDeveloperChange(val);
            clearErrors("developerId");
          }}
        >
          <SelectTrigger error={!!errors.developerId} className={`bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.developerId ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`}>
            <SelectValue placeholder={developersLoading ? t("ads.createStepTwo.loadingDevelopers") : t("ads.createStepTwo.selectDeveloper")}>
              {selectedDeveloperName || undefined}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-56 overflow-y-auto">
            {developersLoading && developers.length === 0 ? (
              <div className="p-3 text-xs text-neutral-400 text-center">
                {t("ads.createStepTwo.loadingDevelopers")}
              </div>
            ) : developers.length === 0 ? (
              <div className="p-3 text-xs text-neutral-400 text-center">
                {t("ads.createStepTwo.noDevelopersFound")}
              </div>
            ) : (
              developers
                .filter((dev) =>
                  !debouncedDeveloperSearch ||
                  (dev.name || "")
                    .toLowerCase()
                    .includes(debouncedDeveloperSearch.toLowerCase())
                )
                .map((dev) => (
                  <SelectItem
                    key={dev.id}
                    value={dev.id.toString()}
                    className="text-xs sm:text-sm py-1.5"
                  >
                    {dev.name}
                  </SelectItem>
                ))
            )}
          </SelectContent>
        </Select>
        <FieldError
          message={errors.developerId ? String(errors.developerId.message || t("ads.createStepTwo.developerRequired")) : undefined}
        />
      </div>

      {/* Target Destination & Project/Property Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        <div>
          <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {t("ads.createStepTwo.linkDestinationType")} <span className="text-red-500">*</span>
          </Label>
          <Select
            value={linkTo}
            onValueChange={(val) => {
              setValue("linkTo", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
              if (val === "NONE") {
                setValue("projectId", "", { shouldDirty: true });
              }
              clearErrors("projectId");
            }}
          >
            <SelectTrigger className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm">
              <SelectValue placeholder={t("ads.createStepTwo.selectDestination")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PROJECTS">
                {t("ads.createStepTwo.destinationSpecificProject")}
              </SelectItem>
              <SelectItem value="PROPERTIES">
                {t("ads.createStepTwo.destinationSpecificProperty")}
              </SelectItem>
              <SelectItem value="NONE">
                {t("ads.createStepTwo.destinationCustomUrl")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {linkTo !== "NONE" && (
          <div>
            <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between">
              <span>
                {linkTo === "PROJECTS"
                  ? (isAr ? "اختر المشروع" : "Select Project")
                  : (isAr ? "اختر العقار" : "Select Property")}{" "}
                <span className="text-red-500">*</span>
              </span>
              {developerId && (
                <span className="text-[11px] text-neutral-400 font-normal">
                  {linkTo === "PROJECTS"
                    ? `${filteredProjects.length} ${t("ads.createStepTwo.itemsFound")}`
                    : `${filteredProperties.length} ${t("ads.createStepTwo.itemsFound")}`}
                </span>
              )}
            </Label>

            <div className="relative mb-2">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
              <Input
                placeholder={
                  !developerId
                    ? t("ads.createStepTwo.selectDeveloperFirst")
                    : linkTo === "PROJECTS"
                      ? t("ads.createStepTwo.searchProjectsPlaceholder")
                      : t("ads.createStepTwo.searchPropertiesPlaceholder")
                }
                value={linkTo === "PROJECTS" ? projectSearch : propertySearch}
                onChange={(e) => {
                  if (linkTo === "PROJECTS") {
                    setProjectSearch(e.target.value);
                  } else {
                    setPropertySearch(e.target.value);
                  }
                }}
                disabled={!developerId || (linkTo === "PROJECTS" ? projectsLoading : propertiesLoading)}
                className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 ps-9 pe-8 h-8 text-xs focus:ring-1 focus:ring-teal-500/30"
              />
              {(linkTo === "PROJECTS" ? projectSearch : propertySearch) && (
                <button
                  type="button"
                  onClick={() => {
                    if (linkTo === "PROJECTS") setProjectSearch("");
                    else setPropertySearch("");
                  }}
                  className="absolute end-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <Select
              value={projectId ? projectId.toString() : undefined}
              onValueChange={(val) => {
                setValue("projectId", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
                clearErrors("projectId");
              }}
              disabled={!developerId || (linkTo === "PROJECTS" ? projectsLoading : propertiesLoading)}
            >
              <SelectTrigger error={!!errors.projectId} className={`bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.projectId ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`}>
                <SelectValue
                  placeholder={
                    !developerId
                      ? t("ads.createStepTwo.selectDeveloperFirst")
                      : linkTo === "PROJECTS"
                        ? projectsLoading
                          ? t("ads.createStepTwo.loadingProjects")
                          : t("ads.createStepTwo.chooseProject")
                        : propertiesLoading
                          ? t("ads.createStepTwo.loadingProperties")
                          : t("ads.createStepTwo.chooseProperty")
                  }
                >
                  {selectedProjectName || undefined}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="max-h-56 overflow-y-auto">
                {!developerId ? (
                  <div className="p-3 text-xs text-neutral-400 text-center">
                    {t("ads.createStepTwo.selectDeveloperFirst")}
                  </div>
                ) : linkTo === "PROJECTS" ? (
                  projectsLoading ? (
                    <div className="p-3 text-xs text-neutral-400 text-center">
                      {t("ads.createStepTwo.loadingProjects")}
                    </div>
                  ) : filteredProjects.length === 0 ? (
                    <div className="p-3 text-xs text-neutral-400 text-center">
                      {projectSearch
                        ? t("ads.createStepTwo.noMatchingProjects")
                        : t("ads.createStepTwo.noProjectsForDeveloper")}
                    </div>
                  ) : (
                    filteredProjects.map((proj) => (
                      <SelectItem
                        key={proj.id}
                        value={proj.id.toString()}
                        className="text-xs sm:text-sm py-1.5"
                      >
                        {proj.name}
                      </SelectItem>
                    ))
                  )
                ) : propertiesLoading ? (
                  <div className="p-3 text-xs text-neutral-400 text-center">
                    {t("ads.createStepTwo.loadingProperties")}
                  </div>
                ) : filteredProperties.length === 0 ? (
                  <div className="p-3 text-xs text-neutral-400 text-center">
                    {propertySearch
                      ? t("ads.createStepTwo.noMatchingProperties")
                      : t("ads.createStepTwo.noPropertiesForDeveloper")}
                  </div>
                ) : (
                  filteredProperties.map((prop) => (
                    <SelectItem
                      key={prop.id}
                      value={prop.id.toString()}
                      className="text-xs sm:text-sm py-1.5"
                    >
                      {prop.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
            <FieldError
              message={
                errors.projectId
                  ? String(
                    errors.projectId.message ||
                    (linkTo === "PROJECTS"
                      ? t("ads.createStepTwo.projectRequired")
                      : t("ads.createStepTwo.propertyRequired"))
                  )
                  : undefined
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
