"use client";

import { useState, useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Search, ChevronDown, Check, Loader2, X, Building2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useAdEditData } from "@/hooks/use-ad-edit";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { useCountriesSelect } from "@/hooks/use-countries-select";
import { FieldError } from "@/components/ui/form-message";
import { isValidAdUrl } from "@/features/ads/utils/ad-form-validation";

interface SearchableSelectProps {
  value: string;
  onChange: (val: string) => void;
  options: { id: string | number; name: string }[];
  placeholder: string;
  searchPlaceholder: string;
  loading?: boolean;
  emptyText: string;
  isAr: boolean;
  disabled?: boolean;
}

function SearchableSelect({
  value,
  onChange,
  options,
  placeholder,
  searchPlaceholder,
  loading,
  emptyText,
  isAr,
  disabled,
}: SearchableSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const filteredOptions = useMemo(() => {
    if (!debouncedSearch.trim()) return options;
    const s = debouncedSearch.toLowerCase().trim();
    return options.filter(
      (opt) => opt.name.toLowerCase().includes(s) || opt.id.toString().includes(s)
    );
  }, [options, debouncedSearch]);

  const selectedOption = options.find((opt) => opt.id.toString() === value?.toString());

  return (
    <Popover open={open && !disabled} onOpenChange={(o) => !disabled && setOpen(o)}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          disabled={disabled}
          className={cn(
            "w-full justify-between bg-white dark:bg-neutral-800/60 border-gray-200 dark:border-neutral-700 h-11 text-xs sm:text-sm font-normal rounded-lg text-start px-3",
            disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-50 dark:hover:bg-neutral-800"
          )}
        >
          <span className={cn("truncate", !selectedOption && "text-gray-400 dark:text-neutral-500")}>
            {selectedOption ? selectedOption.name : placeholder}
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 text-gray-400 opacity-70" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-lg z-50"
        align="start"
      >
        <div className="flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 px-3 py-2.5">
          <Search className="h-4 w-4 text-gray-400 shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-transparent border-none text-xs sm:text-sm outline-hidden text-gray-900 dark:text-white placeholder:text-gray-400"
            autoFocus
          />
          {search && (
            <button type="button" onClick={() => setSearch("")} className="text-gray-400 hover:text-gray-600 p-0.5">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <div className="max-h-64 overflow-y-auto p-1.5 space-y-0.5">
          {loading ? (
            <div className="flex items-center justify-center p-6 text-xs text-gray-400 gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
              <span>{isAr ? "جاري التحميل..." : "Loading..."}</span>
            </div>
          ) : filteredOptions.length === 0 ? (
            <div className="p-6 text-center text-xs text-gray-500">{emptyText}</div>
          ) : (
            filteredOptions.map((opt) => {
              const isSelected = opt.id.toString() === value?.toString();
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => { onChange(opt.id.toString()); setOpen(false); setSearch(""); }}
                  className={cn(
                    "w-full text-start flex items-center justify-between px-3 py-2.5 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer",
                    isSelected
                      ? "bg-teal-50 dark:bg-teal-950/50 text-teal-900 dark:text-teal-200 font-semibold"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  )}
                >
                  <span className="truncate">{opt.name}</span>
                  {isSelected && <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 ms-2" />}
                </button>
              );
            })
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function AdTargetLinksCard() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { register, control, setValue, clearErrors, formState: { errors } } = useFormContext();

  const country = useWatch({ control, name: "country" }) || "Egypt";
  const developerId = useWatch({ control, name: "developerId" });
  const linkTo = useWatch({ control, name: "linkTo" }) || "PROJECTS";
  const projectId = useWatch({ control, name: "projectId" });

  const [openDevPopover, setOpenDevPopover] = useState(false);
  const [devSearchInput, setDevSearchInput] = useState("");
  const debouncedDevSearch = useDebounce(devSearchInput);

  const {
    developers,
    projects,
    properties,
    projectsLoading,
    propertiesLoading,
    developersLoading,
  } = useAdEditData(null, true, country, developerId, linkTo);

  const filteredDevs = useMemo(() => {
    if (!debouncedDevSearch.trim()) return developers;
    const s = debouncedDevSearch.toLowerCase().trim();
    return developers.filter((d: any) =>
      d.name.toLowerCase().includes(s) || d.id.toString().includes(s)
    );
  }, [developers, debouncedDevSearch]);

  const selectedDeveloper = developers.find(
    (d: any) => d.id?.toString() === developerId?.toString()
  );

  const DESTINATIONS = [
    { value: "PROJECTS", labelAr: "مشروع", labelEn: "Project" },
    { value: "PROPERTIES", labelAr: "وحدة عقارية", labelEn: "Property / Unit" },
    { value: "EXPERT", labelAr: "خبير", labelEn: "Expert" },
    { value: "URL", labelAr: "رابط خارجي", labelEn: "External Link" },
  ];

  const { countries, isLoading: isCountriesLoading } = useCountriesSelect();

  const handleDestinationChange = (val: string) => {
    setValue("linkTo", val, { shouldDirty: true, shouldValidate: true });
    setValue("projectId", "", { shouldDirty: true });
    clearErrors("projectId");
    clearErrors("developerId");
    clearErrors("ctaUrl");
    if (val !== "URL") {
      setValue("ctaUrl", "", { shouldDirty: true });
      setValue("cta_url", "", { shouldDirty: true });
    }
  };

  return (
    <div className="space-y-6">

      {/* ── 0. Select Real Estate Developer ── */}
      <Card id="ad-developer-card" className={cn(
        "shadow-sm border bg-white dark:bg-neutral-900 rounded-xl transition-colors",
        errors.developerId ? "border-red-400 dark:border-red-900/60" : "border-gray-200 dark:border-neutral-800"
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              {isAr ? "اختيار المطور العقاري" : "Select Real Estate Developer"}
            </CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            {isAr
              ? "اختر المطور أولاً لتصفية المشاريع والوحدات المرتبطة به"
              : "Select a developer first to filter their projects and properties"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
              {isAr ? "المطور العقاري" : "Real Estate Developer"}
            </Label>
            {developers.length > 0 && (
              <span className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                {isAr ? `${developers.length} مطور متاح` : `${developers.length} developers available`}
              </span>
            )}
          </div>

          <Popover open={openDevPopover} onOpenChange={setOpenDevPopover}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className={cn(
                  "w-full justify-between bg-white dark:bg-neutral-800 h-11 text-xs sm:text-sm font-normal rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 text-start px-3",
                  errors.developerId ? "border-red-500 ring-1 ring-red-500" : "border-gray-200 dark:border-neutral-700"
                )}
              >
                <span className={cn("truncate", !selectedDeveloper && "text-gray-400 dark:text-neutral-500")}>
                  {selectedDeveloper
                    ? selectedDeveloper.name
                    : developersLoading
                      ? (isAr ? "جاري التحميل..." : "Loading developers...")
                      : (isAr ? "اختر المطور العقاري..." : "Select Developer...")}
                </span>
                {developersLoading
                  ? <Loader2 className="h-4 w-4 shrink-0 text-gray-400 animate-spin" />
                  : <ChevronDown className="h-4 w-4 shrink-0 text-gray-400 opacity-70" />}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[var(--radix-popover-trigger-width)] p-0 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-lg z-50"
              align="start"
            >
              <div className="flex items-center gap-2 border-b border-gray-100 dark:border-neutral-800 px-3 py-2.5">
                <Search className="h-4 w-4 text-gray-400 shrink-0" />
                <input
                  value={devSearchInput}
                  onChange={(e) => setDevSearchInput(e.target.value)}
                  placeholder={isAr ? "اكتب للبحث بالاسم..." : "Type to search by name..."}
                  className="w-full bg-transparent border-none text-xs sm:text-sm outline-hidden text-gray-900 dark:text-white placeholder:text-gray-400"
                  autoFocus
                />
                {devSearchInput && (
                  <button type="button" onClick={() => setDevSearchInput("")} className="text-gray-400 hover:text-gray-600 p-0.5">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <div className="max-h-64 overflow-y-auto p-1.5 space-y-0.5">
                {developersLoading ? (
                  <div className="flex items-center justify-center p-6 text-xs text-gray-400 gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
                    <span>{isAr ? "جاري التحميل..." : "Loading..."}</span>
                  </div>
                ) : filteredDevs.length === 0 ? (
                  <div className="p-6 text-center text-xs text-gray-500">
                    {isAr ? "لا يوجد مطورين" : "No developers found"}
                  </div>
                ) : (
                  filteredDevs.map((dev: any) => {
                    const isSelected = dev.id.toString() === developerId?.toString();
                    return (
                      <button
                        key={dev.id}
                        type="button"
                        onClick={() => {
                          setValue("developerId", dev.id.toString(), { shouldDirty: true, shouldValidate: true });
                          setValue("projectId", "", { shouldDirty: true });
                          setOpenDevPopover(false);
                          setDevSearchInput("");
                        }}
                        className={cn(
                          "w-full text-start flex items-center justify-between px-3 py-2.5 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer",
                          isSelected
                            ? "bg-teal-50 dark:bg-teal-950/50 text-teal-900 dark:text-teal-200 font-semibold"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
                        )}
                      >
                        <span className="truncate">{dev.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 ms-2" />}
                      </button>
                    );
                  })
                )}
              </div>
            </PopoverContent>
          </Popover>

          {/* Selected badge + clear */}
          {selectedDeveloper && (
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-xs font-semibold text-teal-800 dark:text-teal-200 truncate">
                  {selectedDeveloper.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setValue("developerId", "", { shouldDirty: true });
                  setValue("projectId", "", { shouldDirty: true });
                }}
                className="text-teal-400 hover:text-red-500 transition-colors p-0.5 shrink-0 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {errors.developerId && (
            <p className="text-xs text-red-500 font-semibold mt-1">
              {errors.developerId.message as string}
            </p>
          )}
        </CardContent>
      </Card>

      {/* ── 1. Ad Destination ── */}

      <Card id="ad-destination-card" className={cn(
        "shadow-sm border bg-white dark:bg-neutral-900 rounded-xl transition-colors",
        errors.projectId || errors.ctaUrl ? "border-red-400 dark:border-red-900/60" : "border-gray-200 dark:border-neutral-800"
      )}>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {isAr ? "وجهة الإعلان" : "Ad Destination"}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            {isAr
              ? "ماذا يحدث عند الضغط على الإعلان؟ اربطه بعنصر داخلي أو برابط خارجي."
              : "What happens when the ad is clicked? Link it to an internal item or external link."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">

          {/* Destination pills */}
          <div className="flex flex-wrap items-center gap-2">
            {DESTINATIONS.map((dest) => {
              const isSelected = linkTo === dest.value;
              return (
                <button
                  key={dest.value}
                  type="button"
                  onClick={() => handleDestinationChange(dest.value)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border",
                    isSelected
                      ? "bg-teal-700 text-white border-teal-700 shadow-sm"
                      : "bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-neutral-700 hover:border-gray-300"
                  )}
                >
                  {isAr ? dest.labelAr : dest.labelEn}
                </button>
              );
            })}
          </div>

          {/* Destination-specific selectors */}
          <div className="pt-1 space-y-4">

            {/* PROJECTS */}
            {linkTo === "PROJECTS" && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {isAr ? "ابحث واختر المشروع *" : "Search & Select Project *"}
                    {!developerId && (
                      <span className="ms-2 text-xs font-normal text-amber-500">
                        {isAr ? "(اختر مطوراً أولاً)" : "(select developer first)"}
                      </span>
                    )}
                  </Label>
                  {projects.length > 0 && (
                    <span className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                      {isAr ? `${projects.length} مشروع` : `${projects.length} projects`}
                    </span>
                  )}
                </div>
                <SearchableSelect
                  value={projectId}
                  onChange={(val) => {
                    setValue("projectId", val, { shouldDirty: true, shouldValidate: true });
                    clearErrors("projectId");
                  }}
                  options={projects}
                  placeholder={
                    !developerId
                      ? (isAr ? "اختر مطوراً أولاً..." : "Select a developer first...")
                      : projectsLoading
                        ? (isAr ? "جاري التحميل..." : "Loading projects...")
                        : (isAr ? "اختر مشروع..." : "Select Project...")
                  }
                  searchPlaceholder={isAr ? "ابحث بالاسم أو الرقم..." : "Search by name or ID..."}
                  loading={projectsLoading}
                  emptyText={
                    !developerId
                      ? (isAr ? "يرجى اختيار مطور أولاً" : "Please select a developer first")
                      : (isAr ? "لا توجد مشاريع مطابقة" : "No matching projects found")
                  }
                  isAr={isAr}
                  disabled={!developerId}
                />
                {errors.projectId && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.projectId.message as string}
                  </p>
                )}
              </div>
            )}

            {/* PROPERTIES */}
            {linkTo === "PROPERTIES" && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {isAr ? "ابحث واختر الوحدة العقارية *" : "Search & Select Property *"}
                    {!developerId && (
                      <span className="ms-2 text-xs font-normal text-amber-500">
                        {isAr ? "(اختر مطوراً أولاً)" : "(select developer first)"}
                      </span>
                    )}
                  </Label>
                  {properties.length > 0 && (
                    <span className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                      {isAr ? `${properties.length} وحدة` : `${properties.length} properties`}
                    </span>
                  )}
                </div>
                <SearchableSelect
                  value={projectId}
                  onChange={(val) => {
                    setValue("projectId", val, { shouldDirty: true, shouldValidate: true });
                    clearErrors("projectId");
                  }}
                  options={properties}
                  placeholder={
                    !developerId
                      ? (isAr ? "اختر مطوراً أولاً..." : "Select a developer first...")
                      : propertiesLoading
                        ? (isAr ? "جاري التحميل..." : "Loading properties...")
                        : (isAr ? "اختر وحدة عقارية..." : "Select Property...")
                  }
                  searchPlaceholder={isAr ? "ابحث بالاسم أو الرقم..." : "Search by name or ID..."}
                  loading={propertiesLoading}
                  emptyText={
                    !developerId
                      ? (isAr ? "يرجى اختيار مطور أولاً" : "Please select a developer first")
                      : (isAr ? "لا توجد وحدات مطابقة" : "No matching properties found")
                  }
                  isAr={isAr}
                  disabled={!developerId}
                />
                {errors.projectId && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.projectId.message as string}
                  </p>
                )}
              </div>
            )}

            {/* EXPERT */}
            {linkTo === "EXPERT" && (
              <div className="space-y-1.5">
                <Label className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {isAr ? "ابحث واختر الخبير *" : "Search & Select Expert *"}
                </Label>
                <Input
                  placeholder={isAr ? "أدخل معرف أو اسم الخبير" : "Enter expert name or ID"}
                  {...register("projectId", {
                    onChange: () => clearErrors("projectId"),
                  })}
                  className={cn(
                    "bg-white dark:bg-neutral-800/60 h-11 text-xs sm:text-sm rounded-lg",
                    errors.projectId ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700"
                  )}
                />
                {errors.projectId && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.projectId.message as string}
                  </p>
                )}
              </div>
            )}

            {/* URL */}
            {linkTo === "URL" && (
              <div className="space-y-1.5">
                <Label className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {isAr ? "الرابط الخارجي (URL) *" : "External Link (URL) *"}
                </Label>
                <Input
                  placeholder="https://example.com/promotions"
                  dir="ltr"
                  inputMode="url"
                  aria-invalid={!!errors.ctaUrl}
                  {...register("ctaUrl", {
                    validate: (val) =>
                      !val?.trim() || isValidAdUrl(val) || t("ads.createStepTwo.ctaUrlInvalid"),
                    onChange: (e) => {
                      setValue("cta_url", e.target.value, { shouldDirty: true });
                      clearErrors("ctaUrl");
                    },
                  })}
                  className={cn(
                    "bg-white dark:bg-neutral-800/60 h-11 text-xs sm:text-sm rounded-lg",
                    errors.ctaUrl ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200 dark:border-neutral-700"
                  )}
                />
                {errors.ctaUrl && (
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    {errors.ctaUrl.message as string}
                  </p>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* ── 2. Target Countries ── */}
      <Card className="shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {isAr ? "الدول المستهدفة" : "Target Countries"}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            {isAr ? "يمكن اختيار أكثر من دولة" : "Select target countries"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-3">
            {isCountriesLoading ? (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Loader2 className="w-4 h-4 animate-spin" />
                {isAr ? "جاري التحميل..." : "Loading countries..."}
              </div>
            ) : (
              countries.map((c: any) => {
                const isSelected = country === c.country_id.toString();
                return (
                  <button
                    key={c.country_id}
                    type="button"
                    onClick={() => setValue("country", c.country_id.toString(), { shouldDirty: true, shouldValidate: true })}
                    className={cn(
                      "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border flex items-center gap-2",
                      isSelected
                        ? "border-teal-600 bg-teal-50/80 dark:bg-teal-950/40 text-teal-900 dark:text-teal-100 ring-2 ring-teal-600 shadow-xs"
                        : "bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-neutral-700 hover:border-gray-300"
                    )}
                  >
                    <span>{c.country_name}</span>
                  </button>
                );
              })
            )}
          </div>
          <FieldError message={errors.country?.message as string | undefined} className="font-semibold" />
        </CardContent>
      </Card>
    </div>
  );
}
