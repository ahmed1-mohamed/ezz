"use client";

import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { MarketingRecipientsSection } from "@/app/admin/marketing/components/MarketingRecipientsSection";
import { useSession } from "next-auth/react";

import { CampaignTypeSelector } from "./components/CampaignTypeSelector";
import { MessageContentForm } from "./components/MessageContentForm";
import { TemplateModal } from "./components/TemplateModal";
import { CampaignScheduleCard } from "./components/CampaignScheduleCard";
import { useWhatsappSmsCampaignForm } from "../../hooks/use-whatsapp-sms-campaign-form";
import { FormErrorAlert } from "@/components/ui/form-message";

export default function CreateWhatsappSmsPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const isRTL = language === "ar";
  const basePath = pathname.startsWith("/developer") ? "/developer" : "/admin";

  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  const {
    campaignType,
    setCampaignType,
    message,
    setMessage,
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
    handleSelectTemplate,
    handleSendCampaign,
  } = useWhatsappSmsCampaignForm({
    token,
    isRTL,
    basePath,
    router,
  });

  const onTemplateChosen = useCallback(
    (text: string) => {
      handleSelectTemplate(text);
      setIsTemplateModalOpen(false);
    },
    [handleSelectTemplate]
  );

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-8xl mx-auto text-start">
      {/* Page Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
          {isRTL ? "إرسال رسائل" : "Send messages"}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {isRTL
            ? "SMS عبر Twilio أو WhatsApp عبر Cloud API"
            : "SMS via Twilio or WhatsApp via the Cloud API"}
        </p>
      </div>

      <form onSubmit={handleSendCampaign} noValidate className="space-y-5">
        <FormErrorAlert message={generalError} />

        {/* 1. Channel */}
        <CampaignTypeSelector
          campaignType={campaignType}
          setCampaignType={setCampaignType}
          isRTL={isRTL}
        />

        {/* 2. Message */}
        <MessageContentForm
          message={message}
          setMessage={(val) => handleInputChange("content.body", val, setMessage)}
          onOpenTemplates={() => setIsTemplateModalOpen(true)}
          errorMsg={getFieldError(["content.body", "content.description"])}
        />

        {/* 3. Recipients (Number list vs Site audience) */}
        <MarketingRecipientsSection
          contactType={campaignType}
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

        {/* 4. Send timing */}
        <CampaignScheduleCard
          scheduleType={scheduleType}
          setScheduleType={setScheduleType}
          scheduleDate={scheduleDate}
          setScheduleDate={(val) => handleInputChange("scheduled_at", val, setScheduleDate)}
          scheduleTime={scheduleTime}
          setScheduleTime={(val) => handleInputChange("scheduled_at", val, setScheduleTime)}
          isRTL={isRTL}
          error={getFieldError(["scheduled_at"])}
        />

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2 justify-end">
          <Button
            type="button"
            disabled={isSubmitting}
            variant="outline"
            onClick={() => router.push(`${basePath}/marketing/whatsapp-sms`)}
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
              : (isRTL ? "إرسال الرسائل" : "Send messages")}
          </Button>
        </div>
      </form>

      <TemplateModal
        isOpen={isTemplateModalOpen}
        onClose={setIsTemplateModalOpen}
        onSelect={onTemplateChosen}
        isRTL={isRTL}
      />
    </div>
  );
}