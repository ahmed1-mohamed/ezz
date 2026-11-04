"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

interface CampaignSettingsSectionProps {
  register: any;
  watch: any;
  setValue: any;
  dateErrors: {
    startDate?: string;
    endDate?: string;
    general?: string;
  };
  /** The priority input failed validation (it has no message of its own). */
  priorityInvalid?: boolean;
  validateDateTimeRange: (startDate: string, endDate: string) => boolean;
}

export function CampaignSettingsSection({
  register,
  watch,
  setValue,
  dateErrors,
  priorityInvalid = false,
  validateDateTimeRange,
}: CampaignSettingsSectionProps) {
  const { t } = useLanguage();

  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const status = watch("status") || "draft";
  const billingUnit = watch("billing_unit") || "impression";

  return (
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
            {t("ads.createStepOne.startDate")}{" "}
            <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <Input
              id="startDate"
              type="date"
              {...register("startDate", { required: true })}
              error={!!dateErrors.startDate}
              className={`bg-white dark:bg-neutral-900 ps-10 h-9 text-xs sm:text-sm ${
                dateErrors.startDate
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-neutral-200 dark:border-neutral-700"
              }`}
              onChange={(e) => {
                register("startDate").onChange(e);
                validateDateTimeRange(e.target.value, endDate);
              }}
            />
            <Calendar className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
          </div>
          <FieldError message={dateErrors.startDate} />
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
              className={`bg-white dark:bg-neutral-900 ps-10 h-9 text-xs sm:text-sm ${
                dateErrors.endDate
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-neutral-200 dark:border-neutral-700"
              }`}
              min={startDate || undefined}
              onChange={(e) => {
                register("endDate").onChange(e);
                validateDateTimeRange(startDate, e.target.value);
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
        <div>
          <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {t("ads.createStepOne.initialStatus")}{" "}
            <span className="text-red-500">*</span>
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
            {t("ads.createStepOne.priorityLevel")}{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Input
            type="number"
            min="1"
            max="10"
            placeholder="1"
            {...register("priority", {
              required: true,
              min: 1,
              max: 10,
            })}
            error={priorityInvalid}
            className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 h-9 text-xs"
          />
        </div>

        <div>
          <Label className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block">
            {t("ads.createStepOne.billingUnit")}{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Select
            value={billingUnit}
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
  );
}
