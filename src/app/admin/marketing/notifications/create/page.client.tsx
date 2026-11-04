"use client";

import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { EntityDeveloperSelector } from "@/app/admin/marketing/components/EntityDeveloperSelector";
import { AudienceSelector } from "@/app/admin/marketing/components/AudienceSelector";
import { PlatformSelector } from "@/app/admin/marketing/components/PlatformSelector";
import { MessageDetailsForm } from "@/app/admin/marketing/components/MessageDetailsForm";
import { UserSelect } from "@/components/shared/user-select";
import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNotificationCampaignForm } from "../../hooks/use-notification-campaign-form";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { getTodayInputDate } from "../../utils/campaign-validation";

export default function CreateNotificationPage() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const isRTL = language === "ar";
  const basePath = pathname.startsWith("/developer") ? "/developer" : "/admin";

  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const {
    platform,
    setPlatform,
    title,
    setTitle,
    description,
    setDescription,
    selectedCountry,
    setSelectedCountry,
    imageFile,
    setImageFile,
    activeEntityTab,
    setActiveEntityTab,
    selectedEntity,
    setSelectedEntity,
    selectedAudience,
    setSelectedAudience,
    recipientUserIds,
    setRecipientUserIds,
    isSubmitting,
    scheduleType,
    setScheduleType,
    scheduleDate,
    setScheduleDate,
    scheduleTime,
    setScheduleTime,
    generalError,
    getFieldError,
    handleInputChange,
    getActiveItems,
    handleSendNotification,
    countries,
    isLoadingEntities,
  } = useNotificationCampaignForm({
    token,
    isRTL,
    basePath,
    router,
  });

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-[900px] mx-auto">
      <button
        onClick={() => router.push(`${basePath}/marketing/notifications`)}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors font-medium"
      >
        <ArrowLeft className={`h-4 w-4 ${isRTL && "rotate-180"}`} />
        {t("marketingNotifications.create.backToCampaigns")}
      </button>

      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {t("marketingNotifications.create.createNewNotification")}
      </h1>

      <form onSubmit={handleSendNotification} noValidate className="space-y-6">
        <FormErrorAlert message={generalError} />

        <PlatformSelector platform={platform} setPlatform={setPlatform} />

        <MessageDetailsForm
          title={title}
          setTitle={(val) => handleInputChange("name", val, setTitle)}
          description={description}
          setDescription={(val) => handleInputChange("content.description", val, setDescription)}
          selectedCountry={selectedCountry}
          setSelectedCountry={(val) => handleInputChange("country", val, setSelectedCountry)}
          countries={countries}
          imageFile={imageFile}
          setImageFile={setImageFile}
          titleError={getFieldError(["name", "content.title", "content.subject"])}
          descError={getFieldError(["content.description", "content.body"])}
          countryError={getFieldError(["country"])}
        />

        <EntityDeveloperSelector
          activeEntityTab={activeEntityTab}
          setActiveEntityTab={setActiveEntityTab}
          selectedEntity={selectedEntity}
          setSelectedEntity={setSelectedEntity}
          items={getActiveItems()}
          isLoading={isLoadingEntities}
        />

        <AudienceSelector
          selectedAudience={selectedAudience}
          setSelectedAudience={setSelectedAudience}
          translationPrefix="marketingNotifications"
        />

        {selectedAudience === "specific" && (
          <div className="flex flex-col gap-1.5 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
            <label className="text-sm font-bold text-gray-900 dark:text-gray-100">
              {t("marketingNotifications.create.recipientUserIds")}
            </label>
            <p className="text-xs text-gray-400">
              {t("marketingNotifications.create.recipientUserIdsDesc")}
            </p>
            <UserSelect
              selectedId={recipientUserIds ? Number(recipientUserIds) : null}
              onChange={(id) => handleInputChange("recipient_user_ids", id ? String(id) : "", setRecipientUserIds)}
              hasError={!!getFieldError(["recipient_user_ids"])}
            />
            <FieldError message={getFieldError(["recipient_user_ids"])} />
          </div>
        )}

        <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
              {t("marketingNotifications.create.sendSchedule")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setScheduleType("immediate")}
                className={`flex items-center justify-between p-4 cursor-pointer rounded-lg border transition-all duration-200 ${scheduleType === "immediate"
                  ? "bg-teal-700 border-teal-700 text-white dark:bg-teal-800 dark:border-teal-800"
                  : "bg-white border-gray-200 text-gray-600 dark:bg-neutral-950 dark:border-neutral-800 dark:text-gray-400 hover:border-gray-300 dark:hover:border-neutral-700"
                  }`}
              >
                <div className="space-y-0.5 text-start">
                  <div className="text-sm font-bold">
                    {t("marketingNotifications.create.immediate")}
                  </div>
                  <div className={`text-xs ${scheduleType === "immediate" ? "text-teal-100" : "text-gray-400"}`}>
                    {t("marketingNotifications.create.immediateDesc")}
                  </div>
                </div>
                <Clock className={`h-5 w-5 ${scheduleType === "immediate" ? "text-white" : "text-gray-400"}`} />
              </div>

              <div
                onClick={() => setScheduleType("scheduled")}
                className={`flex items-center justify-between p-4 cursor-pointer rounded-lg border transition-all duration-200 ${scheduleType === "scheduled"
                  ? "bg-teal-700 border-teal-700 text-white dark:bg-teal-800 dark:border-teal-800"
                  : "bg-white border-gray-200 text-gray-600 dark:bg-neutral-950 dark:border-neutral-800 dark:text-gray-400 hover:border-gray-300 dark:hover:border-neutral-700"
                  }`}
              >
                <div className="space-y-0.5 text-start">
                  <div className="text-sm font-bold">
                    {t("marketingNotifications.create.scheduled")}
                  </div>
                  <div className={`text-xs ${scheduleType === "scheduled" ? "text-teal-100" : "text-gray-400"}`}>
                    {t("marketingNotifications.create.scheduledDesc")}
                  </div>
                </div>
                <Calendar className={`h-5 w-5 ${scheduleType === "scheduled" ? "text-white" : "text-gray-400"}`} />
              </div>
            </div>

            {scheduleType === "scheduled" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex flex-col gap-1.5 text-start">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                    {t("marketingNotifications.create.date")}
                  </label>
                  <Input
                    type="date"
                    required={scheduleType === "scheduled"}
                    value={scheduleDate}
                    min={getTodayInputDate()}
                    onChange={(e) => handleInputChange("scheduled_at", e.target.value, setScheduleDate)}
                    error={!!getFieldError(["scheduled_at"])}
                    aria-invalid={!!getFieldError(["scheduled_at"])}
                    className={`bg-white dark:bg-neutral-950 focus:border-teal-500 focus:ring-teal-500 w-full ${getFieldError(["scheduled_at"]) ? "" : "border-gray-200 dark:border-neutral-800"}`}
                  />
                  <FieldError message={getFieldError(["scheduled_at"])} />
                </div>

                <div className="flex flex-col gap-1.5 text-start">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                    {t("marketingNotifications.create.time")}
                  </label>
                  <select
                    required={scheduleType === "scheduled"}
                    value={scheduleTime}
                    onChange={(e) => handleInputChange("scheduled_at", e.target.value, setScheduleTime)}
                    aria-invalid={!!getFieldError(["scheduled_at"])}
                    className={`bg-white border ${getFieldError(["scheduled_at"]) ? "border-red-500" : "border-gray-200 dark:border-neutral-800"} dark:bg-neutral-950 focus:border-teal-500 focus:ring-teal-500 rounded-lg text-sm p-2 w-full h-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  >
                    <option value="">{t("marketingNotifications.create.selectHour")}</option>
                    {Array.from({ length: 24 }).map((_, i) => {
                      const value = `${String(i).padStart(2, '0')}:00`;
                      const suffix = i >= 12 ? t("marketingNotifications.create.pm") : t("marketingNotifications.create.am");
                      const displayHour = i % 12 === 0 ? 12 : i % 12;
                      const label = `${String(displayHour).padStart(2, '0')}:00 ${suffix}`;
                      return (
                        <option key={i} value={value}>
                          {label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-2.5 rounded-lg text-sm disabled:opacity-50 w-full sm:w-auto"
          >
            {isSubmitting
              ? t("marketingNotifications.create.sending")
              : t("marketingNotifications.create.sendNotification")}
          </Button>
          <Button
            type="button"
            disabled={isSubmitting}
            variant="outline"
            onClick={() => router.push(`${basePath}/marketing/notifications`)}
            className="border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 font-bold px-6 py-2.5 rounded-lg text-sm disabled:opacity-50 w-full sm:w-auto"
          >
            {t("marketingNotifications.create.cancel")}
          </Button>
        </div>
      </form>
    </div>
  );
}