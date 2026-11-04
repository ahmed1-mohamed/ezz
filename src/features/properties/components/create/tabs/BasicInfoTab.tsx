"use client";

import { FieldError } from "@/components/ui/form-message";
import { useState, useMemo } from "react";
import { Control, Controller, FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { PropertiesInput } from "@/validators/propertiesSchema";
import {
  constructionStatusOptions,
  availabilityStatusOptions,
  statusOptions,
} from "../constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import SeoSection from "../SeoSection";

interface Option {
  id: string | number;
  name: string;
}

interface ProjectOption {
  project_id: string | number;
  project_name: string;
}

interface BasicInfoTabProps {
  register: UseFormRegister<PropertiesInput>;
  control: Control<PropertiesInput>;
  errors: FieldErrors<PropertiesInput>;
  propertiesType: Option[];
  propertiesSubtype: Option[];
  projects: ProjectOption[];
  setValue?: UseFormSetValue<PropertiesInput>;
  watch?: UseFormWatch<PropertiesInput>;
}

export default function BasicInfoTab({
  register,
  control,
  errors,
  propertiesType,
  propertiesSubtype,
  projects,
  setValue,
  watch,
}: BasicInfoTabProps) {
  const { t } = useLanguage();
  const [projectSearch, setProjectSearch] = useState("");
  const debouncedProjectSearch = useDebounce(projectSearch);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    const search = debouncedProjectSearch.trim().toLowerCase();
    if (!search) return projects;
    return projects.filter((p) => {
      const pName = (p?.project_name ?? (p as any)?.name ?? (p as any)?.title ?? "").toString().toLowerCase();
      return pName.includes(search);
    });
  }, [projects, debouncedProjectSearch]);

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("properties.create.basicInfo.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <Label htmlFor="property_name" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.form.propertyName")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="property_name"
              {...register("property_name")}
              aria-invalid={!!errors?.property_name}
              placeholder={t("properties.create.basicInfo.propertyNamePlaceholder")}
              className="mt-1.5"
              error={!!errors.property_name}
            />
            <FieldError message={errors?.property_name?.message ? t(errors.property_name.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="property_name_en" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.basicInfo.propertyNameEn")}
            </Label>
            <Input
              id="property_name_en"
              {...register("property_name_en")}
              placeholder={t("properties.create.basicInfo.propertyNamePlaceholder")}
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="property_no" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.form.propertyNo")}
            </Label>
            <Input
              id="property_no"
              {...register("property_no")}
              error={!!errors?.property_no}
              aria-invalid={!!errors?.property_no}
              placeholder="e.g. B4307"
              className="mt-1.5"
            />
            <FieldError message={errors?.property_no?.message ? t(errors.property_no.message as string) : undefined} />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.basicInfo.project")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="project_id"
              control={control}
              render={({ field }) => (
                <Popover
                  open={isProjectOpen}
                  onOpenChange={(open) => {
                    setIsProjectOpen(open);
                    if (!open) setProjectSearch("");
                  }}
                >
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      id="project_id"
                      role="combobox"
                      aria-expanded={isProjectOpen}
                      aria-invalid={!!errors.project_id || undefined}
                      className={cn(
                        "flex h-9 w-full items-center justify-between rounded-md border border-input dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm shadow-xs transition-colors mt-1.5 text-gray-900 dark:text-gray-100",
                        "hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        errors.project_id && "border-red-500 focus-visible:ring-red-500",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <span className="truncate">
                        {field.value
                          ? projects.find((p) => String(p.project_id ?? (p as any).id) === String(field.value))?.project_name || field.value
                          : t("properties.create.form.selectProject")}
                      </span>
                      <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800" align="start">
                    <Command shouldFilter={false} className="dark:bg-neutral-900">
                      <CommandInput
                        placeholder={t("properties.create.basicInfo.searchProject")}
                        value={projectSearch}
                        onValueChange={setProjectSearch}
                        className="dark:text-gray-100"
                      />
                      <CommandList className="max-h-64 overflow-y-auto dark:bg-neutral-900">
                        <CommandEmpty className="dark:text-gray-400">{t("properties.create.basicInfo.noProjectFound")}</CommandEmpty>
                        <CommandGroup>
                          {filteredProjects.map((project) => {
                            const projId = String(project.project_id ?? (project as any).id);
                            const isSelected = String(field.value) === projId;
                            return (
                              <CommandItem
                                key={projId}
                                value={project.project_name || projId}
                                onSelect={() => {
                                  field.onChange(projId);
                                  setIsProjectOpen(false);
                                  setProjectSearch("");
                                }}
                                className="dark:text-gray-200 dark:hover:bg-neutral-800 cursor-pointer"
                              >
                                <Check
                                  className={cn(
                                    "me-2 h-4 w-4 text-teal-600 dark:text-teal-400",
                                    isSelected ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {project.project_name}
                              </CommandItem>
                            );
                          })}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              )}
            />
            <FieldError message={errors?.project_id?.message ? t(errors.project_id.message as string) : undefined} />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.basicInfo.propertyType")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="property_type_id"
              control={control}
              render={({ field }) => (
                <Select key={field.value || ''} onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                  <SelectTrigger id="property_type_id" className="mt-1.5" error={!!errors.property_type_id}>
                    <SelectValue placeholder={t("properties.create.basicInfo.selectPropertyType")}>
                      {field.value && propertiesType.find((t) => String(t.id) === String(field.value))?.name}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {propertiesType.map((type) => (
                      <SelectItem key={type.id} value={String(type.id)}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors?.property_type_id?.message ? t(errors.property_type_id.message as string) : undefined} />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.form.status")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select key={field.value || ''} onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                  <SelectTrigger id="status" className="mt-1.5" error={!!errors.status}>
                    <SelectValue placeholder={t("properties.create.form.selectStatus")}>
                      {field.value && (t(`properties.create.options.status.${field.value}`) || statusOptions.find(o => o.value === field.value)?.label)}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(`properties.create.options.status.${option.value}`) || option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors?.status?.message ? t(errors.status.message as string) : undefined} />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.form.unitSubType")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="property_subtype_id"
              control={control}
              render={({ field }) => (
                <Select key={field.value || ''} onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                  <SelectTrigger id="property_subtype_id" className="mt-1.5" error={!!errors.property_subtype_id}>
                    <SelectValue placeholder={t("properties.create.basicInfo.selectSubType")}>
                      {field.value && propertiesSubtype.find((t) => String(t.id) === String(field.value))?.name}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {propertiesSubtype.map((subtype) => (
                      <SelectItem key={subtype.id} value={String(subtype.id)}>
                        {subtype.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors?.property_subtype_id?.message ? t(errors.property_subtype_id.message as string) : undefined} />
          </div>

          <div>
            <Label htmlFor="building_name" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.basicInfo.buildingName")}
            </Label>
            <Input
              id="building_name"
              {...register("building_name")}
              error={!!errors?.building_name}
              aria-invalid={!!errors?.building_name}
              placeholder={t("properties.create.basicInfo.buildingNameInputPlaceholder")}
              className="mt-1.5"
            />
            <FieldError message={errors?.building_name?.message ? t(errors.building_name.message as string) : undefined} />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.form.constructionStatus")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="construction_status"
              control={control}
              render={({ field }) => (
                <Select key={field.value || ''} onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                  <SelectTrigger id="construction_status" className="mt-1.5" error={!!errors.construction_status}>
                    <SelectValue placeholder={t("properties.create.form.selectConstructionStatus")}>
                      {field.value && (t(`properties.create.options.constructionStatus.${field.value}`) || constructionStatusOptions.find(o => o.value === field.value)?.label)}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {constructionStatusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(`properties.create.options.constructionStatus.${option.value}`) || option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors?.construction_status?.message ? t(errors.construction_status.message as string) : undefined} />
          </div>

          <div>
            <Label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.basicInfo.availabilityStatus")} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="availability_status"
              control={control}
              render={({ field }) => (
                <Select key={field.value || ''} onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                  <SelectTrigger id="availability_status" className="mt-1.5" error={!!errors.availability_status}>
                    <SelectValue placeholder={t("properties.create.form.selectAvailabilityStatus")}>
                      {field.value && (t(`properties.create.options.availabilityStatus.${field.value}`) || availabilityStatusOptions.find(o => o.value === field.value)?.label)}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {availabilityStatusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(`properties.create.options.availabilityStatus.${option.value}`) || option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError message={errors?.availability_status?.message ? t(errors.availability_status.message as string) : undefined} />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="description" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {t("properties.create.form.description")}
            </Label>
            <Textarea
              id="description"
              {...register("description")}
              error={!!errors?.description}
              aria-invalid={!!errors?.description}
              placeholder={t("properties.create.form.descriptionPlaceholder")}
              className={`mt-1.5 min-h-[110px] bg-white dark:bg-neutral-950 dark:text-gray-100 ${errors?.description ? "" : "border-input dark:border-neutral-700"}`}
            />
            <FieldError message={errors?.description?.message ? t(errors.description.message as string) : undefined} />
          </div>
        </div>
      </div>

      <SeoSection register={register} setValue={setValue} watch={watch} errors={errors} />
    </div>
  );
}