import { useState, useCallback } from "react";
import { toast } from "sonner";
import { createCampaign } from "@/data/api-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQueryClient } from "@tanstack/react-query";
import { parseAndNormalizePhoneContacts } from "../utils/campaignUtils";
import type { RecipientMode } from "../components/MarketingRecipientsSection";
import type { AudienceSegmentType } from "../components/MarketingAudienceCards";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { formatInvalidContacts, getInvalidPhoneContacts } from "../utils/campaign-validation";

// Error keys used by the page (backend keys); other backend keys are mapped onto them.
const MESSAGE_FORM_FIELDS = ["content.body", "contacts", "recipient_user_ids", "country", "scheduled_at"];
const MESSAGE_FIELD_MAP: Record<string, string> = {
  body: "content.body",
  message: "content.body",
  description: "content.body",
  "content.message": "content.body",
  "content.description": "content.body",
  contacts_file: "contacts",
  recipient_contacts: "contacts",
  phone_numbers: "contacts",
  phones: "contacts",
  recipients: "contacts",
  phone: "contacts",
  phone_number: "contacts",
  recipient: "contacts",
  contacts_list: "contacts",
  recipient_contacts_str: "contacts",
  "content.phone": "contacts",
  "content.phone_number": "contacts",
  "content.recipient": "contacts",
  "content.contacts": "contacts",
  "content.recipient_contacts": "contacts",
  "content.phone_numbers": "contacts",
  "content.phones": "contacts",
  "content.recipients": "contacts",
  user_ids: "recipient_user_ids",
  users: "recipient_user_ids",
};

interface UseWhatsappSmsCampaignFormProps {
  token: string | undefined;
  isRTL: boolean;
  basePath: string;
  router: { push: (url: string) => void; refresh?: () => void };
}

export function useWhatsappSmsCampaignForm({
  token,
  isRTL,
  basePath,
  router,
}: UseWhatsappSmsCampaignFormProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const [campaignType, setCampaignType] = useState<"sms" | "whatsapp">("sms");
  const [campaignName, setCampaignName] = useState("");
  const [message, setMessage] = useState("");
  const [recipientMode, setRecipientMode] = useState<RecipientMode>("audience");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [siteAudience, setSiteAudience] = useState<AudienceSegmentType>("all");
  const [contactsText, setContactsText] = useState("");
  const [contactsFile, setContactsFile] = useState<File | null>(null);
  const [recipientUserIds, setRecipientUserIds] = useState("");
  const [scheduleType, setScheduleType] = useState<"immediate" | "scheduled">("immediate");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | undefined>();

  const handleCampaignTypeChange = useCallback((type: "sms" | "whatsapp") => {
    setCampaignType(type);
    if (type === "whatsapp") {
      setSiteAudience((prev) => (prev === "all" || prev === "visitors" ? "foreign_contacts" : prev));
    }
  }, []);

  const getFieldError = useCallback((fields: string[]) => {
    for (const field of fields) {
      if (field === "recipient_user_ids") {
        const matchKey = Object.keys(formErrors).find(k => k.startsWith("recipient_user_ids"));
        if (matchKey) return formErrors[matchKey];
      }
      if (formErrors[field]) return formErrors[field];
    }
    return undefined;
  }, [formErrors]);

  const handleInputChange = useCallback((field: string, val: string, setter: (v: string) => void) => {
    setter(val);
    setFormErrors(prev => {
      const next = { ...prev };
      delete next[field];
      if (field === "recipient_user_ids") {
        Object.keys(next).forEach(k => {
          if (k.startsWith("recipient_user_ids")) delete next[k];
        });
      }
      if (field === "contacts") {
        delete next["contacts_file"];
        delete next["recipient_contacts"];
      }
      return next;
    });
  }, []);

  const handleToggleCountry = useCallback((code: string) => {
    setSelectedCountries(prev => (prev.includes(code) ? [] : [code]));
    setFormErrors(prev => {
      const next = { ...prev };
      delete next["country"];
      return next;
    });
  }, []);

  const handleContactsFileChange = useCallback((file: File | null) => {
    setContactsFile(file);
    setFormErrors(prev => {
      const next = { ...prev };
      delete next["contacts"];
      delete next["contacts_file"];
      delete next["recipient_contacts"];
      return next;
    });
  }, []);

  const handleAudienceChange = useCallback((aud: AudienceSegmentType) => {
    setSiteAudience(aud);
    setFormErrors(prev => {
      const next = { ...prev };
      delete next["contacts"];
      delete next["contacts_file"];
      delete next["recipient_user_ids"];
      return next;
    });
  }, []);

  const handleSelectTemplate = useCallback((templateText: string) => {
    setMessage(templateText);
    setFormErrors(prev => {
      const next = { ...prev };
      delete next["content.body"];
      delete next["content.description"];
      return next;
    });
    toast.success(isRTL ? "تم اختيار القالب بنجاح" : "Template selected successfully");
  }, [isRTL]);

  const validateForm = useCallback((): boolean => {
    const errors: Record<string, string> = {};

    if (!message.trim()) {
      errors["content.body"] = isRTL
        ? "يرجى كتابة نص الرسالة"
        : "Message text is required";
    }

    if (siteAudience === "foreign_contacts") {
      const hasNumbers = !!contactsText.trim() || !!contactsFile;
      if (!hasNumbers) {
        errors["contacts"] = isRTL
          ? "يرجى إدخال رقم الهاتف أو رفع ملف أرقام"
          : "Please enter a phone number or upload numbers file";
      } else if (contactsText.trim() && !contactsFile) {
        const parsed = parseAndNormalizePhoneContacts(contactsText, selectedCountries[0]);
        const invalid = getInvalidPhoneContacts(contactsText, selectedCountries[0]);
        if (parsed.length === 0) {
          errors["contacts"] = isRTL
            ? "لم يتم العثور على أرقام هواتف صالحة. يرجى التأكد من كتابة الرقم بالصيغة الصحيحة (مثل: +201001234567 أو 01001234567)"
            : "No valid phone numbers found. Please provide valid numbers (e.g. +201001234567)";
        } else if (invalid.length > 0) {
          errors["contacts"] = t("marketingCampaigns.validation.invalidPhones", {
            list: formatInvalidContacts(invalid),
          });
        }
      }
    }

    if (siteAudience === "specific") {
      if (!recipientUserIds.trim()) {
        errors["recipient_user_ids"] = isRTL
          ? "يرجى اختيار مستخدم من القائمة"
          : "Please select a user from the list";
      }
    }

    if (campaignType === "whatsapp" && siteAudience !== "foreign_contacts" && siteAudience !== "specific") {
      errors["contacts"] = isRTL
        ? "تتطلب حملات واتساب تحديد جهات اتصال خارجية أو اختيار مستخدمين"
        : "WhatsApp campaigns require foreign contacts or specific users";
      // The contacts input isn't shown for this audience, so surface it in the form banner too.
      setGeneralError(errors["contacts"]);
    }

    if (scheduleType === "scheduled") {
      if (!scheduleDate || !scheduleTime) {
        errors["scheduled_at"] = isRTL
          ? "يرجى تحديد تاريخ ووقت الجدولة"
          : "Please select schedule date and time";
      } else {
        const scheduledDateTime = new Date(`${scheduleDate}T${scheduleTime}:00`);
        if (isNaN(scheduledDateTime.getTime())) {
          errors["scheduled_at"] = t("validation.date_invalid");
        } else if (scheduledDateTime.getTime() <= Date.now()) {
          errors["scheduled_at"] = isRTL
            ? "يجب أن يكون وقت الجدولة في المستقبل"
            : "Schedule time must be in the future";
        }
      }
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];
      toast.error(firstError, { id: "campaign-validation-toast" });
      return false;
    }

    return true;
  }, [
    t,
    message,
    siteAudience,
    recipientUserIds,
    contactsFile,
    contactsText,
    selectedCountries,
    campaignType,
    scheduleType,
    scheduleDate,
    scheduleTime,
    isRTL,
  ]);

  const handleSendCampaign = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setGeneralError(undefined);

      if (!validateForm()) {
        scrollToFirstInvalidField(e.currentTarget);
        return;
      }

      if (!token) {
        toast.error(isRTL ? "جلسة العمل منتهية" : "Session expired");
        return;
      }

      setIsSubmitting(true);

      const isScheduled = scheduleType === "scheduled";
      const scheduledAt = isScheduled && scheduleDate && scheduleTime
        ? `${scheduleDate} ${scheduleTime}:00`
        : null;

      const parsedContacts =
        siteAudience === "foreign_contacts" && contactsText.trim()
          ? parseAndNormalizePhoneContacts(contactsText, selectedCountries[0])
          : [];

      const recipientIds =
        siteAudience === "specific" && recipientUserIds.trim()
          ? recipientUserIds
            .split(",")
            .map((id) => parseInt(id.trim(), 10))
            .filter((id) => !isNaN(id))
          : [];

      const targetCountry = selectedCountries.length > 0 ? selectedCountries[0] : null;

      const displayName = campaignName.trim() || (message.length > 50 ? `${message.substring(0, 50)}...` : message.trim());

      let requestData: any;

      const targetAudienceSegment =
        siteAudience === "foreign_contacts"
          ? "foreign_contacts"
          : (siteAudience === "specific" ? "specific" : siteAudience);

      if (siteAudience === "foreign_contacts" && contactsFile) {
        const formData = new FormData();
        formData.append("name", displayName);
        formData.append("type", campaignType);
        formData.append("audience_segment", "foreign_contacts");
        formData.append("audience", "foreign_contacts");
        formData.append("status", isScheduled ? "scheduled" : "running");
        if (targetCountry) formData.append("country", targetCountry);
        if (scheduledAt) formData.append("scheduled_at", scheduledAt);
        formData.append("contacts_file", contactsFile);

        if (parsedContacts.length > 0) {
          parsedContacts.forEach((contact) => {
            formData.append("contacts[]", contact);
            formData.append("recipient_contacts[]", contact);
            formData.append("phone_numbers[]", contact);
            formData.append("phones[]", contact);
            formData.append("recipients[]", contact);
          });
          formData.append("phone", parsedContacts[0]);
          formData.append("phone_number", parsedContacts[0]);
          formData.append("recipient", parsedContacts[0]);
          formData.append("content[phone]", parsedContacts[0]);
          formData.append("content[phone_number]", parsedContacts[0]);
        }

        formData.append("content[channel]", campaignType);
        formData.append("content[title]", displayName);
        formData.append("content[subject]", displayName);
        formData.append("content[description]", message.trim());
        formData.append("content[body]", message.trim());
        formData.append("content[message]", message.trim());

        requestData = formData;
      } else {
        requestData = {
          name: displayName,
          type: campaignType,
          country: targetCountry,
          audience_segment: targetAudienceSegment,
          audience: targetAudienceSegment,
          status: isScheduled ? "scheduled" : "running",
          ...(scheduledAt ? { scheduled_at: scheduledAt } : {}),
          ...(siteAudience === "specific" && recipientIds.length > 0
            ? {
              recipient_user_ids: recipientIds,
              user_ids: recipientIds,
              users: recipientIds,
            }
            : {}),
          ...(siteAudience === "foreign_contacts" && parsedContacts.length > 0
            ? {
              contacts: parsedContacts,
              recipient_contacts: parsedContacts,
              phone_numbers: parsedContacts,
              phones: parsedContacts,
              recipients: parsedContacts,
              phone: parsedContacts[0],
              phone_number: parsedContacts[0],
              recipient: parsedContacts[0],
              contacts_list: parsedContacts.join(","),
              recipient_contacts_str: parsedContacts.join(","),
            }
            : {}),
          content: {
            channel: campaignType,
            title: displayName,
            subject: displayName,
            description: message.trim(),
            body: message.trim(),
            message: message.trim(),
            ...(siteAudience === "foreign_contacts" && parsedContacts.length > 0
              ? {
                phone: parsedContacts[0],
                phone_number: parsedContacts[0],
                recipient: parsedContacts[0],
                contacts: parsedContacts,
                recipient_contacts: parsedContacts,
                phone_numbers: parsedContacts,
                phones: parsedContacts,
                recipients: parsedContacts,
                contacts_list: parsedContacts.join(","),
                recipient_contacts_str: parsedContacts.join(","),
              }
              : {}),
          },
        };
      }

      try {
        await createCampaign(
          requestData,
          token
        );
        toast.success(
          isRTL
            ? `تم إنشاء حملة ${campaignType === "sms" ? "SMS" : "WhatsApp"} بنجاح!`
            : `${campaignType.toUpperCase()} campaign created successfully!`
        );
        await queryClient.invalidateQueries({ queryKey: ["campaigns"], refetchType: "all" });
        await queryClient.invalidateQueries({ queryKey: ["campaignStats"], refetchType: "all" });
        router.push(`${basePath}/marketing/whatsapp-sms`);
        router.refresh?.();
      } catch (err: any) {
        const { fieldErrors, generalMessage, summary } = parseApiError(err, {
          t,
          fallbackMessage: t("marketingCampaigns.messages.createFailed"),
          fields: MESSAGE_FORM_FIELDS,
          fieldMap: MESSAGE_FIELD_MAP,
        });
        setFormErrors(fieldErrors);
        setGeneralError(generalMessage);
        toast.error(summary, { id: API_ERROR_TOAST_ID });
        if (Object.keys(fieldErrors).length > 0 || generalMessage) scrollToFirstInvalidField();
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      validateForm,
      token,
      scheduleType,
      scheduleDate,
      scheduleTime,
      siteAudience,
      contactsText,
      selectedCountries,
      recipientUserIds,
      campaignName,
      message,
      campaignType,
      contactsFile,
      isRTL,
      t,
      queryClient,
      router,
      basePath,
    ]
  );

  return {
    campaignType,
    setCampaignType: handleCampaignTypeChange,
    campaignName,
    setCampaignName,
    message,
    setMessage,
    recipientMode,
    setRecipientMode,
    selectedCountries,
    handleToggleCountry,
    siteAudience,
    setSiteAudience: handleAudienceChange,
    contactsText,
    setContactsText,
    contactsFile,
    setContactsFile: handleContactsFileChange,
    recipientUserIds,
    setRecipientUserIds,
    scheduleType,
    setScheduleType,
    scheduleDate,
    setScheduleDate,
    scheduleTime,
    setScheduleTime,
    isSubmitting,
    formErrors,
    generalError,
    getFieldError,
    handleInputChange,
    handleSelectTemplate,
    handleSendCampaign,
  };
}