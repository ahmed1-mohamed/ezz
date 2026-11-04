import { useState, useMemo, useEffect } from "react";
import { UseFormReturn, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search, ChevronDown, Check, Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { SeoFieldsSection } from "@/components/shared/SeoFieldsSection";
import { FieldError } from "@/components/ui/form-message";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectBasicInfoFormProps {
  form: UseFormReturn<CreateProjectInput>;
  developersData: any[];
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  isLoadingDevelopers?: boolean;
}

export function ProjectBasicInfoForm({
  form,
  developersData,
  isLoadingDevelopers = false,
}: ProjectBasicInfoFormProps) {
  const { register, watch, setValue, formState: { errors } } = form;
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const [isDeveloperOpen, setIsDeveloperOpen] = useState(false);
  const [developerSearch, setDeveloperSearch] = useState("");
  const debouncedDeveloperSearch = useDebounce(developerSearch);
  const [selectedDevName, setSelectedDevName] = useState("");

  const currentDevId = watch("developer_id");

  useEffect(() => {
    if (currentDevId && developersData && Array.isArray(developersData)) {
      const match = developersData.find(
        (d: any) => String(d.developer_id ?? d.id) === String(currentDevId)
      );
      if (match) {
        setSelectedDevName(match.developer_name || match.name || match.title || "");
      }
    }
  }, [currentDevId, developersData]);

  const filteredDevelopers = useMemo(() => {
    if (!developersData || !Array.isArray(developersData)) return [];
    if (!debouncedDeveloperSearch.trim()) return developersData;
    const q = debouncedDeveloperSearch.toLowerCase().trim();
    return developersData.filter((d: any) => {
      const name = (d.developer_name || d.name || d.title || "").toLowerCase();
      return name.includes(q);
    });
  }, [developersData, debouncedDeveloperSearch]);

  return (
    <div className="space-y-4">
      {/* ── Basic Information Card ─────────────────────────────────────── */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-5 sm:p-6 space-y-4 shadow-2xs">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
            {isAr ? "المعلومات الأساسية" : (t("projects.form.basicInfo.title"))}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Row 1: Project Name Ar & En */}
          <div id="error-project_name">
            <Label htmlFor="project-name" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {isAr ? "اسم المشروع (عربي)" : (t("projects.form.basicInfo.projectName"))} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="project-name"
              placeholder={isAr ? "اسم المشروع" : (t("projects.form.basicInfo.projectNamePlaceholder"))}
              className="mt-1 h-9 text-xs"
              error={!!errors.project_name}
              aria-invalid={!!errors.project_name}
              {...register("project_name")}
            />
            <FieldError message={t(errors.project_name?.message || "")} />
          </div>

          <div>
            <Label htmlFor="project-name-en" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {isAr ? "اسم المشروع (إنجليزي)" : "Project Name (English)"}
            </Label>
            <Input
              id="project-name-en"
              placeholder={isAr ? "اسم المشروع بالإنجليزية" : "Project name"}
              className="mt-1 h-9 text-xs"
              error={!!errors.project_name_en}
              aria-invalid={!!errors.project_name_en}
              {...register("project_name_en")}
            />
            <FieldError message={t(errors.project_name_en?.message || "")} />
          </div>

          {/* Row 2: Developer & Status */}
          <div id="error-developer_id">
            <Label htmlFor="developer" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {isAr ? "المطور" : (t("projects.form.basicInfo.developer"))} <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="developer_id"
              control={form.control}
              render={({ field }) => {
                const currentVal = field.value ? String(field.value) : "";
                const matchingDev = developersData?.find(
                  (d: any) => String(d.developer_id ?? d.id) === currentVal,
                );
                const displayName =
                  selectedDevName ||
                  matchingDev?.developer_name ||
                  matchingDev?.name ||
                  matchingDev?.title ||
                  (currentVal ? (isAr ? `مطور #${currentVal}` : `Developer #${currentVal}`) : "");

                return (
                  <Popover open={isDeveloperOpen} onOpenChange={setIsDeveloperOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        id="developer"
                        role="combobox"
                        aria-expanded={isDeveloperOpen}
                        aria-invalid={!!errors.developer_id}
                        className={cn(
                          "flex h-9 w-full items-center justify-between rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs shadow-none transition-colors mt-1 text-gray-900 dark:text-slate-200 text-start",
                          "hover:bg-accent/5 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                          errors.developer_id && "border-red-500 focus-visible:ring-red-500",
                          !displayName && "text-muted-foreground"
                        )}
                      >
                        <span className="truncate">
                          {displayName || (
                            isLoadingDevelopers
                              ? (isAr ? "جاري تحميل المطورين..." : "Loading developers...")
                              : (isAr ? "ابحث واختر المطور" : (t("projects.form.basicInfo.selectDeveloper")))
                          )}
                        </span>
                        <div className="flex items-center gap-1 shrink-0 ms-2">
                          {isLoadingDevelopers ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin opacity-50" />
                          ) : (
                            <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
                          )}
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-[var(--radix-popover-trigger-width)] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-md z-50"
                      align="start"
                    >
                      <div className="flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 px-3 py-2">
                        <Search className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                        <input
                          value={developerSearch}
                          onChange={(e) => setDeveloperSearch(e.target.value)}
                          placeholder={isAr ? "ابحث عن مطور..." : "Search developer..."}
                          className="w-full bg-transparent border-none text-xs outline-hidden text-gray-900 dark:text-white placeholder:text-gray-400"
                          autoFocus
                        />
                        {developerSearch && (
                          <button
                            type="button"
                            onClick={() => setDeveloperSearch("")}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      <div className="max-h-56 overflow-y-auto p-1 space-y-0.5">
                        {isLoadingDevelopers && (!developersData || developersData.length === 0) ? (
                          <div className="flex items-center justify-center p-4 text-xs text-gray-400 gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
                            <span>{isAr ? "جاري التحميل..." : "Loading..."}</span>
                          </div>
                        ) : filteredDevelopers.length === 0 ? (
                          <div className="p-4 text-center text-xs text-gray-500">
                            {isAr ? "لا يوجد مطورين مطابقة" : "No developers found"}
                          </div>
                        ) : (
                          filteredDevelopers.map((dev: any) => {
                            const id = String(dev.developer_id ?? dev.id ?? "");
                            const name = dev.developer_name || dev.name || dev.title || (isAr ? `مطور #${id}` : `Developer #${id}`);
                            const isSelected = currentVal === id;
                            return (
                              <button
                                key={id}
                                type="button"
                                onClick={() => {
                                  setSelectedDevName(name);
                                  field.onChange(id);
                                  setValue("developer_id", id, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
                                  setIsDeveloperOpen(false);
                                  setDeveloperSearch("");
                                }}
                                className={cn(
                                  "w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-md transition-colors text-start",
                                  isSelected
                                    ? "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 font-medium"
                                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                                )}
                              >
                                <span className="truncate">{name}</span>
                                {isSelected && <Check className="h-3.5 w-3.5 text-teal-600 shrink-0 ms-2" />}
                              </button>
                            );
                          })
                        )}
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              }}
            />
            <FieldError message={t(errors.developer_id?.message || "")} />
          </div>

          <div id="error-status">
            <Label htmlFor="status" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {isAr ? "حالة المشروع" : (t("projects.form.basicInfo.status"))} <span className="text-red-500">*</span>
            </Label>
            <Select
              value={watch("status") || "ongoing"}
              onValueChange={(value) => setValue("status", value as any, { shouldValidate: true })}
            >
              <SelectTrigger id="status" className="mt-1 h-9 text-xs" error={!!errors.status} aria-invalid={!!errors.status}>
                <SelectValue placeholder={isAr ? "قيد الإنشاء" : (t("projects.form.basicInfo.selectStatus"))} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ongoing" className="text-xs">{isAr ? "قيد الإنشاء" : (t("projects.form.basicInfo.underConstruction"))}</SelectItem>
                <SelectItem value="completed" className="text-xs">{isAr ? "مكتمل" : (t("projects.form.basicInfo.completed"))}</SelectItem>
                <SelectItem value="upcoming" className="text-xs">{isAr ? "قريباً" : (t("projects.form.basicInfo.upcoming"))}</SelectItem>
              </SelectContent>
            </Select>
            <FieldError message={t(errors.status?.message || "")} />
          </div>

          {/* Row 3: Description */}
          <div className="md:col-span-2">
            <Label htmlFor="description" className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {isAr ? "الوصف" : (t("projects.form.basicInfo.shortDescription"))}
            </Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder={isAr ? "اكتب وصف المشروع هنا" : (t("projects.form.basicInfo.descriptionPlaceholder"))}
              rows={2}
              error={!!errors.description}
              aria-invalid={!!errors.description}
              className={cn(
                "mt-1 min-h-[60px] text-xs py-2 resize-none bg-white dark:bg-neutral-950 dark:text-gray-100",
                !errors.description && "border-input dark:border-neutral-700"
              )}
            />
            <FieldError message={t(errors.description?.message || "")} />
          </div>
        </div>
      </div>

      <SeoFieldsSection
        register={register}
        setValue={setValue}
        watch={watch}
        nameFieldName="project_name"
        slugPlaceholder="my-property"
        compact={true}
      />
    </div>
  );
}