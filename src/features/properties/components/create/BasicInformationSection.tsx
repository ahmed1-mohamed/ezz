"use client";

import { FieldError } from "@/components/ui/form-message";
import { useRef, useState, useEffect } from "react";
import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form";
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
import { Search, ChevronDown, Check } from "lucide-react";
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
} from "./constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDebounce } from "@/hooks/useDebounce";

interface Option {
  id: string | number;
  name: string;
}

interface ProjectOption {
  project_id: string | number;
  project_name: string;
}

interface BasicInformationSectionProps {
  register: UseFormRegister<PropertiesInput>;
  control: Control<PropertiesInput>;
  errors: FieldErrors<PropertiesInput>;
  propertiesType: Option[];
  propertiesSubtype: Option[];
  projects: ProjectOption[];
}

export default function BasicInformationSection({
  register,
  control,
  errors,
  propertiesType,
  propertiesSubtype,
  projects,
}: BasicInformationSectionProps) {
  const { t } = useLanguage();
  const [projectSearch, setProjectSearch] = useState("");
  const debouncedProjectSearch = useDebounce(projectSearch);
  const [projectPerPage, setProjectPerPage] = useState(10);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const projectListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isProjectOpen || !projectListRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = projectListRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setProjectPerPage((prev) => prev + 10);
      }
    };
    const listElement = projectListRef.current;
    if (listElement) {
      listElement.addEventListener("scroll", handleScroll);
      return () => listElement.removeEventListener("scroll", handleScroll);
    }
  }, [isProjectOpen]);

  const handleProjectSearch = (value: string) => {
    setProjectSearch(value);
    setProjectPerPage(10);
  };

  const filteredProjects = projects.filter((p) => {
    const pName = p?.project_name || "";
    const search = debouncedProjectSearch || "";
    return pName.toString().toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        {t("properties.create.basicInfo.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="property_name">
            {t("properties.create.basicInfo.propertyName")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="property_name"
            {...register("property_name")}
            placeholder={t("properties.create.basicInfo.propertyName")}
            className="mt-1"
            error={!!errors.property_name}
          />
          <FieldError message={errors?.property_name?.message ? t(errors.property_name.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="property_no">{t("properties.create.basicInfo.propertyNo")}</Label>
          <Input
            id="property_no"
            {...register("property_no")}
            placeholder={t("properties.create.basicInfo.propertyNoPlaceholder")}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="project_id">
            {t("properties.create.basicInfo.project")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="project_id"
            control={control}
            render={({ field }) => {
              const selectedProject = projects.find(
                (p) => String(p.project_id) === String(field.value || "")
              );
              return (
                <Popover
                  open={isProjectOpen}
                  onOpenChange={(open) => {
                    setIsProjectOpen(open);
                    if (open) setProjectPerPage(10);
                  }}
                >
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      role="combobox"
                      aria-expanded={isProjectOpen}
                      aria-invalid={!!errors.project_id || undefined}
                      className={cn(
                        "mt-1 flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm ring-offset-background text-start placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                        errors.project_id && "border-red-500 focus:ring-red-500 text-red-900"
                      )}
                    >
                      <span className={cn("truncate", !selectedProject && "text-gray-500")}>
                        {selectedProject
                          ? selectedProject.project_name
                          : t("properties.create.basicInfo.selectProject")}
                      </span>
                      <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="p-0 max-h-80 w-[var(--radix-popover-trigger-width)]"
                    align="start"
                  >
                    <Command shouldFilter={false}>
                      <CommandInput
                        placeholder={t("properties.create.basicInfo.searchProjects")}
                        value={projectSearch}
                        onValueChange={handleProjectSearch}
                      />
                      <CommandList
                        ref={projectListRef}
                        className="max-h-[200px] overflow-y-auto"
                      >
                        {filteredProjects.length === 0 ? (
                          <CommandEmpty>
                            {t("properties.create.basicInfo.noProjects")}
                          </CommandEmpty>
                        ) : (
                          <CommandGroup>
                            {filteredProjects.slice(0, projectPerPage).map((project) => (
                              <CommandItem
                                key={project.project_id}
                                value={String(project.project_id)}
                                onSelect={() => {
                                  field.onChange(String(project.project_id));
                                  setIsProjectOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    String(field.value) === String(project.project_id)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {project.project_name}
                              </CommandItem>
                            ))}
                            {filteredProjects.length > projectPerPage && (
                              <div className="flex items-center justify-center p-2 text-xs text-gray-400">
                                {t("properties.create.basicInfo.scrollMore")}
                              </div>
                            )}
                          </CommandGroup>
                        )}
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              );
            }}
          />
          <FieldError message={errors?.project_id?.message ? t(errors.project_id.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="property_type_id">
            {t("properties.create.basicInfo.propertyType")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="property_type_id"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={String(field.value || "")}
              >
                <SelectTrigger className="mt-1" error={!!errors.property_type_id}>
                  <SelectValue placeholder={t("properties.create.basicInfo.selectPropertyType")} />
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
          <Label htmlFor="property_subtype_id">
            {t("properties.create.basicInfo.unitSubType")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="property_subtype_id"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={String(field.value || "")}
              >
                <SelectTrigger className="mt-1" error={!!errors.property_subtype_id}>
                  <SelectValue placeholder={t("properties.create.basicInfo.selectSubType")} />
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
          <Label htmlFor="building_name">
            {t("properties.create.basicInfo.buildingName")} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="building_name"
            {...register("building_name")}
            placeholder={t("properties.create.basicInfo.enterBuildingName")}
            className="mt-1"
            error={!!errors.building_name}
          />
          <FieldError message={errors?.building_name?.message ? t(errors.building_name.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="construction_status">
            {t("properties.create.basicInfo.constructionStatus")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="construction_status"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger className="mt-1" error={!!errors.construction_status}>
                  <SelectValue placeholder={t("properties.create.basicInfo.selectStatus")} />
                </SelectTrigger>
                <SelectContent>
                  {constructionStatusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors?.construction_status?.message ? t(errors.construction_status.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="availability_status">
            {t("properties.create.basicInfo.availabilityStatus")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="availability_status"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger className="mt-1" error={!!errors.availability_status}>
                  <SelectValue placeholder={t("properties.create.basicInfo.selectStatus")} />
                </SelectTrigger>
                <SelectContent>
                  {availabilityStatusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors?.availability_status?.message ? t(errors.availability_status.message as string) : undefined} />
        </div>

        <div>
          <Label htmlFor="status">
            {t("properties.create.basicInfo.status")} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger className="mt-1" error={!!errors.status}>
                  <SelectValue placeholder={t("properties.create.basicInfo.selectStatus")} />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors?.status?.message ? t(errors.status.message as string) : undefined} />
        </div>
      </div>

      <div className="mt-6">
        <Label htmlFor="description">{t("properties.create.basicInfo.description")}</Label>
        <Textarea
          id="description"
          {...register("description")}
          placeholder={t("properties.create.basicInfo.writeDescription")}
          className="mt-1 min-h-[80px]"
        />
      </div>
    </div>
  );
}