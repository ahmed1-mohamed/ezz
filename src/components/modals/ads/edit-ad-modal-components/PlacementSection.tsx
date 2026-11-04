"use client";

import { Label } from "@/components/ui/label";
import { ChevronDown, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const LOCATIONS = [
  { value: "Home Top", key: "ads.createStepOne.locHomeTop", defaultLabel: "Home Top" },
  { value: "Home Bottom", key: "ads.createStepOne.locHomeBottom", defaultLabel: "Home Bottom" },
  { value: "Featured Cards", key: "ads.createStepOne.locFeaturedCards", defaultLabel: "Featured Cards" },
  { value: "Project Listing", key: "ads.createStepOne.locProjectListing", defaultLabel: "Project Listing" },
  { value: "property Listing", key: "ads.createStepOne.locPropertyListing", defaultLabel: "Property Listing" },
  { value: "Unit Listing", key: "ads.createStepOne.locUnitListing", defaultLabel: "Unit Listing" },
  { value: "Developer Listing", key: "ads.createStepOne.locDeveloperListing", defaultLabel: "Developer Listing" },
];

interface PlacementSectionProps {
  watch: any;
  setValue: any;
}

export function PlacementSection({ watch, setValue }: PlacementSectionProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const type = watch("type") || "banner";
  const platform = watch("platform") || "web";
  const width = watch("width") || "medium";
  const position = watch("position") || "bottom_right";
  const country = watch("country") || "Egypt";
  const selectedLocations = (watch("location") || []) as string[];

  const toggleLocation = (locationVal: string) => {
    const current = Array.isArray(selectedLocations) ? selectedLocations : [];
    const updated = current.includes(locationVal)
      ? current.filter((l) => l !== locationVal)
      : [...current, locationVal];
    setValue("location", updated, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
  };

  const getLocationLabel = (locValue: string) => {
    const found = LOCATIONS.find((l) => l.value.toLowerCase() === locValue.toLowerCase());
    if (found) {
      const translated = t(found.key);
      return translated && translated !== found.key ? translated : (isAr ? (found.value === "Home" ? "الصفحة الرئيسية" : found.defaultLabel) : found.defaultLabel);
    }
    return locValue;
  };

  return (
    <div className="bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
        <Layers className="h-4 w-4 text-teal-600 dark:text-teal-400" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
          {t("ads.createStepOne.placementAudience")}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {t("ads.createStepOne.adFormat")}{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Select
            value={type}
            onValueChange={(val) => setValue("type", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true })}
          >
            <SelectTrigger className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm">
              <SelectValue placeholder={t("ads.createStepOne.selectFormat")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="banner">{t("ads.createStepOne.formatBanner")}</SelectItem>
              <SelectItem value="card">{t("ads.createStepOne.formatCard")}</SelectItem>
              <SelectItem value="pop_up">{t("ads.createStepOne.formatPopUp")}</SelectItem>
              <SelectItem value="full_page">{t("ads.createStepOne.formatFullPage")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {t("ads.createStepOne.targetPlatform")}{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Select
            value={platform}
            onValueChange={(val) => setValue("platform", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true })}
          >
            <SelectTrigger className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm">
              <SelectValue placeholder={t("ads.createStepOne.selectPlatform")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">{t("ads.createStepOne.platformWeb")}</SelectItem>
              <SelectItem value="mobile">{t("ads.createStepOne.platformMobile")}</SelectItem>
              <SelectItem value="android">{t("ads.createStepOne.platformAndroid")}</SelectItem>
              <SelectItem value="ios">{t("ads.createStepOne.platformIos")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {type === "pop_up" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-neutral-100/60 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700 rounded-lg">
          <div>
            <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
              {t("ads.createStepOne.popUpDimensions")}
            </Label>
            <Select
              value={width}
              onValueChange={(val) => setValue("width", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true })}
            >
              <SelectTrigger className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-8 text-xs">
                <SelectValue placeholder={t("ads.createStepOne.selectWidth")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full_screen">{t("ads.createStepOne.dimensionFullScreen")}</SelectItem>
                <SelectItem value="large">{t("ads.createStepOne.dimensionLarge")}</SelectItem>
                <SelectItem value="medium">{t("ads.createStepOne.dimensionMedium")}</SelectItem>
                <SelectItem value="small">{t("ads.createStepOne.dimensionSmall")}</SelectItem>
                <SelectItem value="custom">{t("ads.createStepOne.dimensionCustom")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
              {t("ads.createStepOne.screenPosition")}
            </Label>
            <Select
              value={position}
              onValueChange={(val) => setValue("position", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true })}
            >
              <SelectTrigger className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-8 text-xs">
                <SelectValue placeholder={t("ads.createStepOne.selectPosition")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top_center">{t("ads.createStepOne.posTopCenter")}</SelectItem>
                <SelectItem value="middle_center">{t("ads.createStepOne.posMiddleCenter")}</SelectItem>
                <SelectItem value="bottom_center">{t("ads.createStepOne.posBottomCenter")}</SelectItem>
                <SelectItem value="bottom_right">{t("ads.createStepOne.posBottomRight")}</SelectItem>
                <SelectItem value="bottom_left">{t("ads.createStepOne.posBottomLeft")}</SelectItem>
                <SelectItem value="top_right">{t("ads.createStepOne.posTopRight")}</SelectItem>
                <SelectItem value="top_left">{t("ads.createStepOne.posTopLeft")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {t("ads.createStepOne.placementLocations")}{" "}
            <span className="text-red-500">*</span>
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 font-normal hover:bg-white dark:hover:bg-neutral-900 text-start h-9 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200"
              >
                <span className="truncate">
                  {selectedLocations.length > 0
                    ? `${selectedLocations.length} ${t("ads.createStepOne.locationsCount")} (${selectedLocations.map(getLocationLabel).join(", ")})`
                    : t("ads.createStepOne.selectPages")}
                </span>
                <ChevronDown className="h-4 w-4 opacity-50 flex-shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60" align="start">
              {LOCATIONS.map((loc) => (
                <DropdownMenuCheckboxItem
                  key={loc.value}
                  checked={selectedLocations.includes(loc.value)}
                  onCheckedChange={() => toggleLocation(loc.value)}
                  className="text-xs"
                >
                  {getLocationLabel(loc.value)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {t("ads.createStepOne.country")}{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Select
            value={country}
            onValueChange={(val) => {
              setValue("country", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
              setValue("developerId", "", { shouldDirty: true });
              setValue("projectId", "", { shouldDirty: true });
            }}
          >
            <SelectTrigger className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs sm:text-sm">
              <SelectValue placeholder={t("ads.createStepOne.selectCountry")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Egypt">{t("ads.createStepOne.countryEgypt")}</SelectItem>
              <SelectItem value="UAE">{t("ads.createStepOne.countryUAE")}</SelectItem>
              <SelectItem value="Oman">{t("ads.createStepOne.countryOman")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
