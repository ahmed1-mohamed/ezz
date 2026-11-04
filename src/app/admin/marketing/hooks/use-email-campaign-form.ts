import { useState, useCallback } from "react";
import { toast } from "sonner";
import { createCampaign } from "@/data/api-client";
import { useQueryClient } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";
import { parseAndNormalizeEmailContacts } from "../utils/campaignUtils";
import type { RecipientMode } from "../components/MarketingRecipientsSection";
import type { AudienceSegmentType } from "../components/MarketingAudienceCards";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import {
  CAMPAIGN_NAME_MAX_LENGTH,
  CAMPAIGN_TITLE_MAX_LENGTH,
  formatInvalidContacts,
  getInvalidEmailContacts,
  isValidEmail,
} from "../utils/campaign-validation";

// Error keys used by the page (backend keys); other backend keys are mapped onto them.
const EMAIL_FORM_FIELDS = [
  "name",
  "content.sender_name",
  "content.sender_email",
  "content.subject",
  "content.body",
  "contacts",
  "recipient_user_ids",
  "country",
  "scheduled_at",
];
const EMAIL_FIELD_MAP: Record<string, string> = {
  sender_name: "content.sender_name",
  sender_email: "content.sender_email",
  subject: "content.subject",
  "content.title": "content.subject",
  body: "content.body",
  "content.description": "content.body",
  contacts_file: "contacts",
  recipient_contacts: "contacts",
  emails: "contacts",
  recipients: "contacts",
  email: "contacts",
  contacts_list: "contacts",
  recipient_contacts_str: "contacts",
  "content.contacts": "contacts",
  "content.recipient_contacts": "contacts",
  "content.emails": "contacts",
  "content.recipients": "contacts",
  "content.email": "contacts",
  user_ids: "recipient_user_ids",
};

interface UseEmailCampaignFormProps {
  token: string | undefined;
  isRTL: boolean;
  basePath: string;
  router: { push: (url: string) => void; refresh?: () => void };
}

export function useEmailCampaignForm({
  token,
  isRTL,
  basePath,
  router,
}: UseEmailCampaignFormProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const [campaignName, setCampaignName] = useState("");
  const [senderName, setSenderName] = useState("Property Advisor");
  const [senderEmail, setSenderEmail] = useState("newsletter@propertyadvisor.com");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [recipientMode, setRecipientMode] = useState<RecipientMode>("audience");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [siteAudience, setSiteAudience] = useState<AudienceSegmentType>("all");
  const [contactsText, setContactsText] = useState("");
  const [contactsFile, setContactsFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scheduleType, setScheduleType] = useState<"immediate" | "scheduled">("immediate");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [customChannel, setCustomChannel] = useState("mail");
  const [recipientUserIds, setRecipientUserIds] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | undefined>();

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

  const validateForm = useCallback((): boolean => {
    const errors: Record<string, string> = {};

    if (campaignName.trim().length > CAMPAIGN_NAME_MAX_LENGTH) {
      errors["name"] = t("validation.max_length", { max: CAMPAIGN_NAME_MAX_LENGTH });
    }

    if (!senderName.trim()) {
      errors["content.sender_name"] = isRTL
        ? "يرجى إدخال اسم المرسل"
        : "Sender name is required";
    } else if (senderName.trim().length > CAMPAIGN_NAME_MAX_LENGTH) {
      errors["content.sender_name"] = t("validation.max_length", { max: CAMPAIGN_NAME_MAX_LENGTH });
    }

    if (!senderEmail.trim()) {
      errors["content.sender_email"] = isRTL
        ? "يرجى إدخال البريد الإلكتروني للمرسل"
        : "Sender email is required";
    } else if (!isValidEmail(senderEmail) || senderEmail.trim().length > CAMPAIGN_NAME_MAX_LENGTH) {
      errors["content.sender_email"] = isRTL
        ? "البريد الإلكتروني للمرسل غير صحيح"
        : "Please enter a valid sender email address";
    }

    if (!subject.trim()) {
      errors["content.subject"] = isRTL
        ? "يرجى كتابة عنوان البريد الإلكتروني"
        : "Email subject is required";
    } else if (subject.trim().length > CAMPAIGN_TITLE_MAX_LENGTH) {
      errors["content.subject"] = t("validation.max_length", { max: CAMPAIGN_TITLE_MAX_LENGTH });
    }

    if (!emailBody.trim()) {
      errors["content.body"] = isRTL
        ? "يرجى كتابة محتوى الرسالة"
        : "Email body is required";
    }

    if (siteAudience === "specific") {
      if (!recipientUserIds.trim()) {
        errors["recipient_user_ids"] = isRTL
          ? "يرجى إدخال معرّفات المستخدمين"
          : "Please enter recipient user IDs";
      } else {
        const ids = recipientUserIds.split(",").map(id => id.trim()).filter(Boolean);
        if (ids.length === 0 || ids.some(id => isNaN(Number(id)))) {
          errors["recipient_user_ids"] = isRTL
            ? "يرجى إدخال معرّفات مستخدمين صالحة مفصولة بفاصلة"
            : "Please enter valid numeric user IDs separated by commas";
        }
      }
    }

    if (siteAudience === "foreign_contacts") {
      if (!contactsFile && !contactsText.trim()) {
        errors["contacts"] = isRTL
          ? "يرجى إدخال قائمة بريد إلكتروني أو رفع ملف CSV/TXT"
          : "Please enter email addresses or upload a CSV/TXT file";
      } else if (!contactsFile && contactsText.trim()) {
        const parsed = parseAndNormalizeEmailContacts(contactsText);
        const invalid = getInvalidEmailContacts(contactsText);
        if (parsed.length === 0) {
          errors["contacts"] = isRTL
            ? "لم يتم العثور على عناوين بريد إلكتروني صالحة. يرجى التأكد من التنسيق (مثال: user@example.com)"
            : "No valid email addresses found. Please ensure proper format (e.g. user@example.com)";
        } else if (invalid.length > 0) {
          errors["contacts"] = t("marketingCampaigns.validation.invalidEmails", {
            list: formatInvalidContacts(invalid),
          });
        }
      }
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
    campaignName,
    t,
    senderName,
    senderEmail,
    subject,
    emailBody,
    siteAudience,
    recipientUserIds,
    contactsFile,
    contactsText,
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

      const isSpecificAudience = siteAudience === "specific" || siteAudience === "foreign_contacts";

      const parsedContacts =
        isSpecificAudience && contactsText.trim()
          ? parseAndNormalizeEmailContacts(contactsText)
          : [];

      const recipientIds =
        isSpecificAudience && recipientUserIds.trim()
          ? recipientUserIds
            .split(",")
            .map((id) => parseInt(id.trim(), 10))
            .filter((id) => !isNaN(id))
          : [];

      const targetCountry = selectedCountries.length > 0 ? selectedCountries[0] : null;

      let requestData: any;

      const resolvedAudienceSegment =
        isSpecificAudience ? "specific" : siteAudience;

      if (isSpecificAudience && contactsFile) {
        const formData = new FormData();
        formData.append("name", campaignName.trim() || subject.trim());
        formData.append("type", "email");
        formData.append("audience_segment", "specific");
        formData.append("status", isScheduled ? "scheduled" : "running");
        if (targetCountry) formData.append("country", targetCountry);
        if (scheduledAt) formData.append("scheduled_at", scheduledAt);
        formData.append("contacts_file", contactsFile);

        if (parsedContacts.length > 0) {
          parsedContacts.forEach((contact) => {
            formData.append("contacts[]", contact);
            formData.append("recipient_contacts[]", contact);
            formData.append("emails[]", contact);
            formData.append("recipients[]", contact);
          });
          formData.append("email", parsedContacts[0]);
          formData.append("content[email]", parsedContacts[0]);
        }

        formData.append("content[sender_name]", senderName.trim());
        formData.append("content[sender_email]", senderEmail.trim());
        formData.append("content[subject]", subject.trim());
        formData.append("content[body]", emailBody);

        requestData = formData;
      } else {
        requestData = {
          name: campaignName.trim() || subject.trim(),
          type: "email",
          country: targetCountry,
          audience_segment: resolvedAudienceSegment,
          status: isScheduled ? "scheduled" : "running",
          ...(scheduledAt ? { scheduled_at: scheduledAt } : {}),
          ...(recipientIds.length > 0 ? { recipient_user_ids: recipientIds } : {}),
          ...(parsedContacts.length > 0
            ? {
              contacts: parsedContacts,
              recipient_contacts: parsedContacts,
              emails: parsedContacts,
              recipients: parsedContacts,
              email: parsedContacts[0],
              contacts_list: parsedContacts.join(","),
              recipient_contacts_str: parsedContacts.join(","),
            }
            : {}),
          content: {
            sender_name: senderName.trim(),
            sender_email: senderEmail.trim(),
            subject: subject.trim(),
            body: emailBody,
            ...(parsedContacts.length > 0
              ? {
                contacts: parsedContacts,
                recipient_contacts: parsedContacts,
                emails: parsedContacts,
                recipients: parsedContacts,
                email: parsedContacts[0],
              }
              : {}),
          },
        };
      }

      try {
        await createCampaign(requestData, token);
        toast.success(
          isRTL
            ? "تم إنشاء حملة البريد بنجاح!"
            : "Email campaign created successfully!",
        );
        await queryClient.invalidateQueries({ queryKey: ["campaigns"], refetchType: "all" });
        await queryClient.invalidateQueries({ queryKey: ["campaignStats"], refetchType: "all" });
        router.push(`${basePath}/marketing/email`);
        router.refresh?.();
      } catch (err: any) {
        const { fieldErrors, generalMessage, summary } = parseApiError(err, {
          t,
          fallbackMessage: t("marketingCampaigns.messages.createFailed"),
          fields: EMAIL_FORM_FIELDS,
          fieldMap: EMAIL_FIELD_MAP,
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
      recipientUserIds,
      selectedCountries,
      contactsFile,
      campaignName,
      subject,
      senderName,
      senderEmail,
      emailBody,
      isRTL,
      t,
      queryClient,
      router,
      basePath,
    ]
  );

  return {
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
    setSiteAudience: handleAudienceChange,
    contactsText,
    setContactsText,
    contactsFile,
    setContactsFile: handleContactsFileChange,
    isSubmitting,
    scheduleType,
    setScheduleType,
    scheduleDate,
    setScheduleDate,
    scheduleTime,
    setScheduleTime,
    customChannel,
    setCustomChannel,
    recipientUserIds,
    setRecipientUserIds,
    formErrors,
    generalError,
    getFieldError,
    handleInputChange,
    handleSendCampaign,
  };
}