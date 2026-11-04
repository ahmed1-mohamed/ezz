"use client";

import { useFormContext, useWatch } from "react-hook-form";
import {
  HelpCircle,
  ImageIcon,
  CreditCard,
  LayoutTemplate,
  AppWindow,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { FieldError } from "@/components/ui/form-message";

interface LocationOption {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  available: number;
  total: number;
}

const LOCATION_OPTIONS: LocationOption[] = [
  {
    id: "home",
    nameAr: "الصفحة الرئيسية (Home)",
    nameEn: "Home page (home)",
    descAr: "الصفحة الرئيسية بالكامل",
    descEn: "Home page",
    available: 15,
    total: 20,
  },
  {
    id: "home_top",
    nameAr: "الصفحة الرئيسية — أعلى (Home Top)",
    nameEn: "Top section of home page (home_top)",
    descAr: "الجزء العلوي من الصفحة الرئيسية",
    descEn: "Top section of home page",
    available: 15,
    total: 20,
  },
  {
    id: "home_bottom",
    nameAr: "الصفحة الرئيسية — أسفل (Home Bottom)",
    nameEn: "Bottom section of home page (home_bottom)",
    descAr: "الجزء السفلي من الصفحة الرئيسية",
    descEn: "Bottom section of home page",
    available: 15,
    total: 20,
  },
  {
    id: "featured_cards",
    nameAr: "قسم البطاقات المميزة (Featured Cards)",
    nameEn: "Featured cards section (featured_cards)",
    descAr: "قسم البطاقات المميزة في الموقع",
    descEn: "Featured cards section",
    available: 10,
    total: 20,
  },
  {
    id: "project_listing",
    nameAr: "صفحة قائمة المشاريع (Project Listing)",
    nameEn: "Project listing page (project_listing)",
    descAr: "صفحة عرض واستكشاف المشاريع",
    descEn: "Project listing page",
    available: 17,
    total: 20,
  },
  {
    id: "unit_listing",
    nameAr: "صفحة قائمة الوحدات (Unit Listing)",
    nameEn: "Unit listing page (unit_listing)",
    descAr: "صفحة عرض واستكشاف الوحدات والعقارات",
    descEn: "Unit listing page",
    available: 12,
    total: 20,
  },
  {
    id: "developer_listing",
    nameAr: "صفحة قائمة المطورين (Developer Listing)",
    nameEn: "Developer listing page (developer_listing)",
    descAr: "صفحة عرض واستكشاف المطورين العقاريين",
    descEn: "Developer listing page",
    available: 8,
    total: 20,
  },
  {
    id: "expert_listing",
    nameAr: "صفحة قائمة الخبراء (Expert Listing)",
    nameEn: "Expert listing page (expert_listing)",
    descAr: "صفحة عرض واستكشاف الخبراء العقاريين",
    descEn: "Expert listing page",
    available: 19,
    total: 20,
  },
  {
    id: "podcast_listing",
    nameAr: "صفحة قائمة البودكاست (Podcast Listing)",
    nameEn: "Podcast listing page (podcast_listing)",
    descAr: "صفحة استكشاف وحلقات البودكاست",
    descEn: "Podcast listing page",
    available: 14,
    total: 20,
  },
];

export function AdPlacementCard() {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { watch, setValue, control, formState: { errors }, clearErrors } = useFormContext();

  const selectedType = (useWatch({ control, name: "type" }) || "banner").toLowerCase();
  const selectedPlatform = (useWatch({ control, name: "platform" }) || "all").toLowerCase();
  const rawLocations = useWatch({ control, name: "location" });
  const selectedLocations = Array.isArray(rawLocations) ? rawLocations : (rawLocations ? [rawLocations] : []);

  const AD_TYPES = [
    {
      value: "banner",
      title: t("ads.filters.banner"),
      icon: ImageIcon,
    },
    {
      value: "card",
      title: t("ads.filters.card"),
      icon: CreditCard,
    },
    {
      value: "native",
      title: t("ads.filters.native"),
      icon: LayoutTemplate,
    },
    {
      value: "pop_up",
      title: t("ads.filters.popUp"),
      icon: AppWindow,
    },
  ];

  const PLATFORM_OPTIONS = [
    {
      value: "all",
      labelAr: "الموقع والتطبيق",
      labelEn: "Web & App",
    },
    {
      value: "web",
      labelAr: "الموقع",
      labelEn: "Website",
    },
    {
      value: "mobile",
      labelAr: "التطبيق",
      labelEn: "Mobile App",
    },
  ];

  const selectLocation = (locId: string) => {
    setValue("location", [locId], { shouldDirty: true, shouldValidate: true, shouldTouch: true });
    clearErrors("location");
  };

  const getPlatformBadge = () => {
    if (selectedPlatform === "web") return isAr ? "ويب" : "Web";
    return isAr ? "تطبيق" : "App";
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {isAr ? "نوع الإعلان" : "Ad Type"}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            {isAr ? "لكل نوع أماكن عرض وحقول مختلفة" : "Each type has different display placements and fields"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {AD_TYPES.map((adType) => {
              const isSelected = selectedType === adType.value;
              const Icon = adType.icon;
              return (
                <button
                  key={adType.value}
                  type="button"
                  onClick={() => setValue("type", adType.value, { shouldDirty: true, shouldValidate: true })}
                  aria-invalid={!!errors.type || undefined}
                  className={cn(
                    "p-3.5 sm:p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer space-y-2",
                    isSelected
                      ? "border-teal-600 bg-teal-50/80 dark:bg-teal-950/40 text-teal-950 dark:text-teal-100 ring-2 ring-teal-600 shadow-xs"
                      : "border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-gray-300 dark:hover:border-neutral-700 text-gray-700 dark:text-gray-300"
                  )}
                >
                  <div className={cn("p-2 rounded-lg", isSelected ? "text-teal-600 dark:text-teal-400" : "text-gray-400 dark:text-neutral-500")}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{adType.title}</div>
                  </div>
                </button>
              );
            })}
          </div>
          <FieldError message={errors.type?.message as string | undefined} className="font-semibold" />
        </CardContent>
      </Card>

      <Card className="shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {isAr ? "المنصة" : "Platform"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2.5">
            {PLATFORM_OPTIONS.map((plat) => {
              const isSelected = selectedPlatform === plat.value;
              return (
                <button
                  key={plat.value}
                  type="button"
                  onClick={() => setValue("platform", plat.value, { shouldDirty: true, shouldValidate: true })}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border",
                    isSelected
                      ? "bg-teal-700 text-white border-teal-700 shadow-sm"
                      : "bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-neutral-700 hover:border-gray-300"
                  )}
                >
                  {isAr ? plat.labelAr : plat.labelEn}
                </button>
              );
            })}
          </div>

        </CardContent>
      </Card>

      <Card id="ad-placement-card" className="shadow-sm border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1">
            <span>{isAr ? "مكان العرض" : "Display Placement"}</span>
            <span className="text-red-500">*</span>
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            {isAr
              ? "الأماكن المتاحة تعتمد على المنصة ونوع الإعلان. لكل مكان سعة قصوى — عند امتلائه لا يمكن الإضافة إليه."
              : "Available locations depend on platform and ad type. Each place has a maximum capacity."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {LOCATION_OPTIONS.map((loc) => {
              const isSelected = selectedLocations.some((s: string) => {
                const normalized = (s || "").toLowerCase().trim().replace(/\s+/g, "_");
                if (loc.id === "unit_listing") {
                  return normalized === "unit_listing" || normalized === "property_listing";
                }
                return normalized === loc.id;
              });

              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => selectLocation(loc.id)}
                  aria-invalid={!!errors.location || undefined}
                  className={cn(
                    "p-3.5 sm:p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer select-none text-start w-full",
                    isSelected
                      ? "border-teal-700 bg-teal-50/60 dark:bg-teal-950/40 ring-2 ring-teal-700 shadow-xs"
                      : "border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-gray-300 dark:hover:border-neutral-700"
                  )}
                >
                  <div className="space-y-1.5 text-start">
                    <div className="font-bold text-sm sm:text-base text-gray-900 dark:text-white flex items-center gap-2">
                      <span>{isAr ? loc.nameAr : loc.nameEn}</span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                      )}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-neutral-400 font-normal">
                      {isAr ? loc.descAr : loc.descEn}
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                        {isAr
                          ? `متاح ${loc.available} من ${loc.total}`
                          : `${loc.available} of ${loc.total} available`}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col items-end gap-1.5 ms-2">
                    <code className="text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 font-mono font-medium">
                      {loc.id}
                    </code>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
                      {getPlatformBadge()}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
          {errors.location && (
            <FieldError
              message={String(errors.location.message || (isAr ? "يرجى اختيار مكان العرض" : "Please select a display location"))}
              className="font-semibold"
            />
          )}


          {selectedType === "pop_up" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4 bg-gray-50 dark:bg-neutral-800/40 rounded-xl border border-gray-100 dark:border-neutral-800">
              <div>
                <Label className="flex items-center gap-1 mb-1.5 font-medium text-xs text-gray-700 dark:text-gray-300">
                  {t("ads.createStepOne.popUpDimensions")} <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                </Label>
                <Select
                  value={watch("width")}
                  onValueChange={(val) => setValue("width", val, { shouldDirty: true })}
                >
                  <SelectTrigger className="bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 h-10 text-xs sm:text-sm">
                    <SelectValue placeholder={t("ads.createStepOne.selectWidth")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">{t("ads.form.widthSmall")}</SelectItem>
                    <SelectItem value="medium">{t("ads.form.widthMedium")}</SelectItem>
                    <SelectItem value="large">{t("ads.form.widthLarge")}</SelectItem>
                    <SelectItem value="full">{t("ads.form.widthFull")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="flex items-center gap-1 mb-1.5 font-medium text-xs text-gray-700 dark:text-gray-300">
                  {t("ads.createStepOne.position")} <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                </Label>
                <Select
                  value={watch("position")}
                  onValueChange={(val) => setValue("position", val, { shouldDirty: true })}
                >
                  <SelectTrigger className="bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 h-10 text-xs sm:text-sm">
                    <SelectValue placeholder={t("ads.createStepOne.selectPosition")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top_left">{t("ads.createStepOne.posTopLeft")}</SelectItem>
                    <SelectItem value="top_right">{t("ads.createStepOne.posTopRight")}</SelectItem>
                    <SelectItem value="center">{t("ads.form.positionCenter")}</SelectItem>
                    <SelectItem value="bottom_left">{t("ads.createStepOne.posBottomLeft")}</SelectItem>
                    <SelectItem value="bottom_right">{t("ads.createStepOne.posBottomRight")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}