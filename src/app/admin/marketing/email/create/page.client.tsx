"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { MarketingRecipientsSection } from "@/app/admin/marketing/components/MarketingRecipientsSection";
import { useSession } from "next-auth/react";
import { useEmailCampaignForm } from "../../hooks/use-email-campaign-form";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { getTodayInputDate } from "../../utils/campaign-validation";

export default function CreateEmailCampaignPage() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const isRTL = language === "ar";
  const basePath = pathname.startsWith("/developer") ? "/developer" : "/admin";

  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const {
    campaignName,
    setCampaignName,
    senderName,
    setSenderName,
    senderEmail,
    setSenderEmail,
    subject,
    setSubject,
    emailBody,
    setEmailBody,
    recipientMode,
    setRecipientMode,
    selectedCountries,
    handleToggleCountry,
    siteAudience,
    setSiteAudience,
    contactsText,
    setContactsText,
    contactsFile,
    setContactsFile,
    recipientUserIds,
    setRecipientUserIds,
    scheduleType,
    setScheduleType,
    scheduleDate,
    setScheduleDate,
    scheduleTime,
    setScheduleTime,
    isSubmitting,
    generalError,
    getFieldError,
    handleInputChange,
    handleSendCampaign,
  } = useEmailCampaignForm({
    token,
    isRTL,
    basePath,
    router,
  });

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto text-start">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
          {isRTL ? "إرسال بريد إلكتروني" : "Send email"}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {isRTL
            ? "إنشاء وبث حملات بريد إلكتروني"
            : "Create and broadcast email campaigns"}
        </p>
      </div>

      <form onSubmit={handleSendCampaign} noValidate className="space-y-5">
        <FormErrorAlert message={generalError} />

        <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
              {isRTL ? "القناة" : "Channel"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-teal-500 bg-teal-50/20 dark:bg-teal-950/20 text-start">
                <div className="p-2.5 rounded-lg bg-teal-600 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-teal-700 dark:text-teal-400">{t("common.email")}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {isRTL ? "عبر خدمة البريد" : "via Mail Service"}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
              {isRTL ? "الرسالة" : "Message"}
            </h2>

            <div className="flex flex-col gap-1.5 text-start">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                {isRTL ? "اسم الحملة (اختياري)" : "Campaign Name (Optional)"}
              </label>
              <Input
                value={campaignName}
                onChange={(e) => handleInputChange("name", e.target.value, setCampaignName)}
                placeholder={isRTL ? "مثال: نشرة المستثمرين العقاريين" : "e.g. Global Investors Email Blast"}
                aria-invalid={!!getFieldError(["name"])}
                className={getFieldError(["name"]) ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
              />
              <FieldError message={getFieldError(["name"])} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-start">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                  {t("marketingEmail.create.senderName")} <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  value={senderName}
                  onChange={(e) => handleInputChange("content.sender_name", e.target.value, setSenderName)}
                  placeholder={t("marketingEmail.create.senderNamePlaceholder")}
                  aria-invalid={!!getFieldError(["content.sender_name"])}
                  className={getFieldError(["content.sender_name"]) ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
                />
                <FieldError message={getFieldError(["content.sender_name"])} />
              </div>
              <div className="flex flex-col gap-1.5 text-start">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                  {t("marketingEmail.create.senderEmail")} <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  type="email"
                  dir="ltr"
                  value={senderEmail}
                  onChange={(e) => handleInputChange("content.sender_email", e.target.value, setSenderEmail)}
                  placeholder="no-reply@domain.com"
                  aria-invalid={!!getFieldError(["content.sender_email"])}
                  className={getFieldError(["content.sender_email"]) ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
                />
                <FieldError message={getFieldError(["content.sender_email"])} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-start">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                {t("marketingEmail.create.subject")} <span className="text-red-500">*</span>
              </label>
              <Input
                required
                value={subject}
                onChange={(e) => handleInputChange("content.subject", e.target.value, setSubject)}
                placeholder={t("marketingEmail.create.subjectPlaceholder")}
                aria-invalid={!!getFieldError(["content.subject", "content.title", "subject"])}
                className={getFieldError(["content.subject", "content.title", "subject"]) ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
              />
              <FieldError message={getFieldError(["content.subject", "content.title", "subject"])} />
            </div>

            <div className="flex flex-col gap-1.5 text-start">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                {isRTL ? "المحتوى" : "Content"} <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={6}
                value={emailBody}
                onChange={(e) => handleInputChange("content.body", e.target.value, setEmailBody)}
                placeholder="<h1>Hello</h1><p>Explore our exclusive property offers...</p>"
                aria-invalid={!!getFieldError(["content.body", "content.description"])}
                className={`w-full p-3 border bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y font-mono ${getFieldError(["content.body", "content.description"])
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-200 dark:border-neutral-800"
                  }`}
              />
              <div className="flex items-center justify-between">
                <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold">
                  {isRTL ? "الأحرف:" : "Characters:"} {emailBody.length}
                </p>
                <FieldError message={getFieldError(["content.body", "content.description"])} className="mt-0" />
              </div>
            </div>
          </CardContent>
        </Card>

        <MarketingRecipientsSection
          contactType="email"
          recipientMode={recipientMode}
          onRecipientModeChange={setRecipientMode}
          contactsText={contactsText}
          onContactsTextChange={(text) => handleInputChange("contacts", text, setContactsText)}
          contactsFile={contactsFile}
          onContactsFileChange={(file) => setContactsFile(file)}
          selectedCountries={selectedCountries}
          onToggleCountry={handleToggleCountry}
          siteAudience={siteAudience}
          onSiteAudienceChange={setSiteAudience}
          recipientUserIds={recipientUserIds}
          onRecipientUserIdsChange={(val) => handleInputChange("recipient_user_ids", val, setRecipientUserIds)}
          contactsError={getFieldError(["contacts", "contacts_file", "recipient_contacts"])}
          recipientUserIdsError={getFieldError(["recipient_user_ids"])}
          countryError={getFieldError(["country"])}
        />

        <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
              {isRTL ? "توقيت الإرسال" : "Send timing"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setScheduleType("immediate")}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-start ${scheduleType === "immediate"
                    ? "border-teal-500 bg-teal-50/20 dark:bg-teal-950/20"
                    : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-gray-300 dark:hover:border-neutral-600"
                  }`}
              >
                <div
                  className={`p-2 rounded-lg ${scheduleType === "immediate"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 dark:bg-neutral-800 text-gray-500"
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <span
                  className={`text-sm font-bold ${scheduleType === "immediate"
                      ? "text-teal-700 dark:text-teal-400"
                      : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {isRTL ? "فوري" : "Immediate"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setScheduleType("scheduled")}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-start ${scheduleType === "scheduled"
                    ? "border-teal-500 bg-teal-50/20 dark:bg-teal-950/20"
                    : "border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-gray-300 dark:hover:border-neutral-600"
                  }`}
              >
                <div
                  className={`p-2 rounded-lg ${scheduleType === "scheduled"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 dark:bg-neutral-800 text-gray-500"
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                </div>
                <span
                  className={`text-sm font-bold ${scheduleType === "scheduled"
                      ? "text-teal-700 dark:text-teal-400"
                      : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {isRTL ? "مجدول" : "Scheduled"}
                </span>
              </button>
            </div>

            {scheduleType === "scheduled" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col gap-1.5 text-start">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                    {isRTL ? "التاريخ" : "Date"}
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
                    {isRTL ? "الوقت" : "Time"}
                  </label>
                  <select
                    required={scheduleType === "scheduled"}
                    value={scheduleTime}
                    onChange={(e) => handleInputChange("scheduled_at", e.target.value, setScheduleTime)}
                    aria-invalid={!!getFieldError(["scheduled_at"])}
                    className={`bg-white border ${getFieldError(["scheduled_at"]) ? "border-red-500" : "border-gray-200 dark:border-neutral-800"} dark:bg-neutral-950 focus:border-teal-500 focus:ring-teal-500 rounded-lg text-sm p-2 w-full h-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  >
                    <option value="">{isRTL ? "اختر الساعة" : "Select hour"}</option>
                    {Array.from({ length: 24 }).map((_, i) => {
                      const value = `${String(i).padStart(2, '0')}:00`;
                      const suffix = i >= 12 ? (isRTL ? "م" : "PM") : (isRTL ? "ص" : "AM");
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

        <div className="flex items-center gap-3 pt-2 justify-end">
          <Button
            type="button"
            disabled={isSubmitting}
            variant="outline"
            onClick={() => router.push(`${basePath}/marketing/email`)}
            className="border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 font-bold px-6 py-2.5 rounded-lg text-sm disabled:opacity-50"
          >
            {isRTL ? "إلغاء" : "Cancel"}
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-2.5 rounded-lg text-sm disabled:opacity-50"
          >
            {isSubmitting
              ? (isRTL ? "جاري الإرسال..." : "Sending...")
              : (isRTL ? "إرسال البريد" : "Send email")}
          </Button>
        </div>
      </form>
    </div>
  );
}