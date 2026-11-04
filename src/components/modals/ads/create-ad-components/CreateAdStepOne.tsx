import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Calendar,
  Layers,
  Clock,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

const LOCATIONS = [
  { value: "home", key: "ads.createStepOne.locHome", defaultLabel: "Home Page (home)" },
  { value: "home_top", key: "ads.createStepOne.locHomeTop", defaultLabel: "Home Top (home_top)" },
  { value: "home_bottom", key: "ads.createStepOne.locHomeBottom", defaultLabel: "Home Bottom (home_bottom)" },
  { value: "featured_cards", key: "ads.createStepOne.locFeaturedCards", defaultLabel: "Featured Cards (featured_cards)" },
  { value: "project_listing", key: "ads.createStepOne.locProjectListing", defaultLabel: "Project Listing (project_listing)" },
  { value: "unit_listing", key: "ads.createStepOne.locUnitListing", defaultLabel: "Unit Listing (unit_listing)" },
  { value: "developer_listing", key: "ads.createStepOne.locDeveloperListing", defaultLabel: "Developer Listing (developer_listing)" },
  { value: "expert_listing", key: "ads.createStepOne.locExpertListing", defaultLabel: "Expert Listing (expert_listing)" },
  { value: "podcast_listing", key: "ads.createStepOne.locPodcastListing", defaultLabel: "Podcast Listing (podcast_listing)" },
];

interface StepOneProps {
  dateErrors: {
    startDate?: string;
    endDate?: string;
    general?: string;
  };
  validateDateTimeRange: (start: string, end: string) => void;
}

export function CreateAdStepOne({ dateErrors, validateDateTimeRange }: StepOneProps) {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const { register, setValue, clearErrors, control, formState: { errors } } = useFormContext();

  const type = useWatch({ control, name: "type" }) || "banner";
  const platform = useWatch({ control, name: "platform" }) || "web";
  const width = useWatch({ control, name: "width" }) || "medium";
  const position = useWatch({ control, name: "position" }) || "bottom_right";
  const selectedLocations = (useWatch({ control, name: "location" }) || []) as string[];
  const country = useWatch({ control, name: "country" });
  const status = useWatch({ control, name: "status" }) || "draft";
  const billing_unit = useWatch({ control, name: "billing_unit" }) || "impression";
  const startDate = useWatch({ control, name: "startDate" });
  const endDate = useWatch({ control, name: "endDate" });

  const toggleLocation = (loc: string) => {
    const current = Array.isArray(selectedLocations) ? selectedLocations : [];
    const updated = current.includes(loc)
      ? current.filter((l) => l !== loc)
      : [...current, loc];
    setValue("location", updated, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    if (updated.length > 0) {
      clearErrors("location");
    }
  };

  const getLocationLabel = (locValue: string) => {
    const norm = locValue?.toLowerCase().replace(/\s+/g, "_");
    const found = LOCATIONS.find(
      (l) => l.value.toLowerCase() === norm || l.defaultLabel.toLowerCase() === locValue.toLowerCase()
    );
    if (found) {
      const translated = t(found.key);
      return translated && translated !== found.key ? translated : found.defaultLabel;
    }
    return locValue;
  };

  return (
    <div className="space-y-4">
      {/* Section 1: Campaign Overview */}
      <div className="bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
          <Sparkles className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
            {t("ads.createStepOne.campaignOverview")}
          </h3>
        </div>

        <div>
          <Label className="flex items-center justify-between text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
            <span>
              {t("ads.createStepOne.adTitle")} <span className="text-red-500">*</span>
            </span>
            <span className="text-[11px] text-neutral-400 font-normal">
              {t("ads.createStepOne.adTitleHint")}
            </span>
          </Label>
          <Input
            placeholder={t("ads.createStepOne.adTitlePlaceholder")}
            {...register("title", {
              required: t("ads.createStepOne.adTitleRequired"),
              minLength: { value: 2, message: t("ads.createStepOne.adTitleMinLength") },
            })}
            error={!!errors.title}
            className={`bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.title
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-neutral-200 dark:border-neutral-700 focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/30"
              }`}
          />
          <FieldError
            message={errors.title ? String(errors.title.message || (isAr ? "عنوان الإعلان مطلوب" : "Ad Title is required")) : undefined}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
          <div>
            <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
              {t("ads.createStepOne.initialStatus")} <span className="text-red-500">*</span>
            </Label>
            <Select
              value={status}
              onValueChange={(val) => setValue("status", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true })}
            >
              <SelectTrigger className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs">
                <SelectValue placeholder={t("ads.createStepOne.selectStatus")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">{t("ads.createStepOne.statusActive")}</SelectItem>
                <SelectItem value="draft">{t("ads.createStepOne.statusDraft")}</SelectItem>
                <SelectItem value="paused">{t("ads.createStepOne.statusPaused")}</SelectItem>
                <SelectItem value="ended">{t("ads.createStepOne.statusEnded")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
              {t("ads.createStepOne.priorityLevel")} <span className="text-red-500">*</span>
            </Label>
            <Input
              type="number"
              min="1"
              max="10"
              placeholder="1"
              {...register("priority", {
                required: t("ads.createStepOne.priorityRequired"),
                min: { value: 1, message: t("ads.createStepOne.priorityMin") },
                max: { value: 10, message: t("ads.createStepOne.priorityMax") },
              })}
              error={!!errors.priority}
              className={`bg-white dark:bg-neutral-900 h-9 text-xs ${errors.priority
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-neutral-200 dark:border-neutral-700"
                }`}
            />
            <FieldError
              message={errors.priority ? String(errors.priority.message || (isAr ? "يجب أن تكون الأولوية بين 1 و 10" : "Priority must be 1-10")) : undefined}
            />
          </div>

          <div>
            <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
              {t("ads.createStepOne.billingUnit")} <span className="text-red-500">*</span>
            </Label>
            <Select
              value={billing_unit}
              onValueChange={(val) => setValue("billing_unit", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true })}
            >
              <SelectTrigger className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs">
                <SelectValue placeholder={t("ads.createStepOne.selectBilling")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="impression">{t("ads.createStepOne.billingImpression")}</SelectItem>
                <SelectItem value="click">{t("ads.createStepOne.billingClick")}</SelectItem>
                <SelectItem value="view">{t("ads.createStepOne.billingView")}</SelectItem>
                <SelectItem value="month">{t("ads.createStepOne.billingMonth")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Section 2: Placement & Audience */}
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
              {t("ads.createStepOne.adFormat")} <span className="text-red-500">*</span>
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
              {t("ads.createStepOne.targetPlatform")} <span className="text-red-500">*</span>
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
              {t("ads.createStepOne.placementLocations")} <span className="text-red-500">*</span>
            </Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  aria-invalid={!!errors.location || undefined}
                  className={`w-full justify-between bg-white dark:bg-neutral-900 font-normal hover:bg-white dark:hover:bg-neutral-900 text-start h-9 text-xs sm:text-sm ${errors.location
                    ? "border-red-500 text-red-500"
                    : "border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
                    }`}
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
                    checked={selectedLocations.some((s: string) => (s || "").toLowerCase().replace(/\s+/g, "_") === loc.value)}
                    onCheckedChange={() => toggleLocation(loc.value)}
                    className="text-xs"
                  >
                    {getLocationLabel(loc.value)}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <FieldError
              message={errors.location ? String(errors.location.message || t("ads.createStepOne.locationRequired")) : undefined}
            />
          </div>

          <div>
            <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
              {t("ads.createStepOne.country")} <span className="text-red-500">*</span>
            </Label>
            <Select
              value={country || undefined}
              onValueChange={(val) => {
                setValue("country", val, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
                setValue("developerId", "", { shouldDirty: true });
                setValue("projectId", "", { shouldDirty: true });
                clearErrors("country");
                clearErrors("developerId");
                clearErrors("projectId");
              }}
            >
              <SelectTrigger error={!!errors.country} className={`bg-white dark:bg-neutral-900 h-9 text-xs sm:text-sm ${errors.country ? "border-red-500" : "border-neutral-200 dark:border-neutral-700"}`}>
                <SelectValue placeholder={t("ads.createStepOne.selectCountry")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Egypt">{t("ads.createStepOne.countryEgypt")}</SelectItem>
                <SelectItem value="UAE">{t("ads.createStepOne.countryUAE")}</SelectItem>
                <SelectItem value="Oman">{t("ads.createStepOne.countryOman")}</SelectItem>
              </SelectContent>
            </Select>
            <FieldError
              message={errors.country ? String(errors.country.message || t("ads.createStepOne.countryRequired")) : undefined}
            />
          </div>
        </div>
      </div>

      {/* Section 3: Schedule & Duration */}
      <div className="bg-neutral-50/60 dark:bg-neutral-900/40 rounded-xl p-4 sm:p-5 border border-neutral-200/80 dark:border-neutral-800 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
          <Clock className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
            {t("ads.createStepOne.campaignSchedule")}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block" htmlFor="startDate">
              {t("ads.createStepOne.startDate")} <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="startDate"
                type="date"
                {...register("startDate", { required: t("ads.createStepOne.startDateRequired") })}
                error={!!(dateErrors.startDate || errors.startDate)}
                className={`bg-white dark:bg-neutral-900 ps-10 h-9 text-xs sm:text-sm ${dateErrors.startDate || errors.startDate
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-neutral-200 dark:border-neutral-700"
                  }`}
                onChange={(e) => {
                  register("startDate").onChange(e);
                  clearErrors("startDate");
                  validateDateTimeRange(e.target.value, endDate || "");
                }}
              />
              <Calendar className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
            </div>
            <FieldError
              message={
                dateErrors.startDate || errors.startDate
                  ? dateErrors.startDate || String(errors.startDate?.message || t("ads.createStepOne.startDateRequired"))
                  : undefined
              }
            />
          </div>

          <div>
            <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center justify-between" htmlFor="endDate">
              <span>{t("ads.createStepOne.endDate")}</span>
              <span className="text-[11px] text-neutral-400 font-normal">
                {t("ads.createStepOne.endDateHint")}
              </span>
            </Label>
            <div className="relative">
              <Input
                id="endDate"
                type="date"
                {...register("endDate")}
                error={!!dateErrors.endDate}
                className={`bg-white dark:bg-neutral-900 ps-10 h-9 text-xs sm:text-sm ${dateErrors.endDate
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-neutral-200 dark:border-neutral-700"
                  }`}
                min={startDate || undefined}
                onChange={(e) => {
                  register("endDate").onChange(e);
                  validateDateTimeRange(startDate || "", e.target.value);
                }}
              />
              <Calendar className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
            </div>
            <FieldError message={dateErrors.endDate} />
          </div>
        </div>

        {dateErrors.general && (
          <div
            className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400"
            role="alert"
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>{dateErrors.general}</span>
          </div>
        )}
      </div>
    </div>
  );
}
