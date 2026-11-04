import { useState, useCallback } from "react";
import { toast } from "sonner";
import { createCampaign } from "@/data/api-client";
import { useQueryClient } from "@tanstack/react-query";
import { useEntityData } from "@/hooks/useEntityData";
import { useLanguage } from "@/contexts/LanguageContext";
import { AudienceType } from "../components/AudienceSelector";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { CAMPAIGN_DESCRIPTION_MAX_LENGTH, CAMPAIGN_TITLE_MAX_LENGTH } from "../utils/campaign-validation";

// Error keys used by the page (backend keys); other backend keys are mapped onto them.
const NOTIFICATION_FORM_FIELDS = ["name", "content.description", "country", "recipient_user_ids", "scheduled_at"];
const NOTIFICATION_FIELD_MAP: Record<string, string> = {
  title: "name",
  subject: "name",
  "content.title": "name",
  "content.subject": "name",
  description: "content.description",
  body: "content.description",
  "content.body": "content.description",
  "content.country": "country",
  user_ids: "recipient_user_ids",
};

interface UseNotificationCampaignFormProps {
  token: string | undefined;
  isRTL: boolean;
  basePath: string;
  router: { push: (url: string) => void; refresh?: () => void };
}

export function useNotificationCampaignForm({
  token,
  isRTL,
  basePath,
  router,
}: UseNotificationCampaignFormProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const [platform, setPlatform] = useState<"all" | "mobile" | "web">("all");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [activeEntityTab, setActiveEntityTab] = useState<"developer" | "project" | "unit">("developer");
  const [selectedEntity, setSelectedEntity] = useState("");
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>("all");
  const [recipientUserIds, setRecipientUserIds] = useState("");
  const [customChannel, setCustomChannel] = useState("fcm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scheduleType, setScheduleType] = useState<"immediate" | "scheduled">("immediate");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | undefined>();

  // Project / unit lists are only requested once their tab is opened.
  const [openedEntityTabs, setOpenedEntityTabs] = useState({ project: false, unit: false });
  if (activeEntityTab !== "developer" && !openedEntityTabs[activeEntityTab]) {
    setOpenedEntityTabs((prev) => ({ ...prev, [activeEntityTab]: true }));
  }
  const { developers, projects, countries, units, isLoadingEntities } = useEntityData({
    projects: openedEntityTabs.project || activeEntityTab === "project",
    units: openedEntityTabs.unit || activeEntityTab === "unit",
  });

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
      return next;
    });
  }, []);

  const getActiveItems = useCallback(() => {
    if (activeEntityTab === "developer") return developers;
    if (activeEntityTab === "project") return projects;
    if (activeEntityTab === "unit") return units;
    return [];
  }, [activeEntityTab, developers, projects, units]);

  const handleSendNotification = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setGeneralError(undefined);

      const errors: Record<string, string> = {};
      const trimmedTitle = title.trim();
      if (!trimmedTitle) {
        errors["name"] = t("marketingNotifications.create.titleRequired");
      } else if (trimmedTitle.length > CAMPAIGN_TITLE_MAX_LENGTH) {
        errors["name"] = t("validation.max_length", { max: CAMPAIGN_TITLE_MAX_LENGTH });
      }
      const trimmedDescription = description.trim();
      if (!trimmedDescription) {
        errors["content.description"] = t("marketingNotifications.create.descRequired");
      } else if (trimmedDescription.length > CAMPAIGN_DESCRIPTION_MAX_LENGTH) {
        errors["content.description"] = t("validation.max_length", { max: CAMPAIGN_DESCRIPTION_MAX_LENGTH });
      }
      if (selectedAudience === "specific") {
        const ids = recipientUserIds.split(",").map(id => id.trim()).filter(id => id);
        if (!recipientUserIds.trim()) {
          errors["recipient_user_ids"] = t("marketingNotifications.create.recipientUserIdsRequired");
        } else if (ids.length === 0 || ids.some(id => isNaN(Number(id)))) {
          errors["recipient_user_ids"] = t("marketingNotifications.create.recipientUserIdsInvalid");
        }
      }
      if (scheduleType === "scheduled") {
        if (!scheduleDate || !scheduleTime) {
          errors["scheduled_at"] = t("marketingNotifications.create.scheduleDateTimeRequired");
        } else {
          const scheduledDateTime = new Date(`${scheduleDate}T${scheduleTime}:00`);
          if (isNaN(scheduledDateTime.getTime())) {
            errors["scheduled_at"] = t("validation.date_invalid");
          } else if (scheduledDateTime.getTime() <= Date.now()) {
            errors["scheduled_at"] = t("marketingNotifications.create.scheduleDateTimeFuture");
          }
        }
      }

      setFormErrors(errors);
      if (Object.keys(errors).length > 0) {
        toast.error(Object.values(errors)[0], { id: "campaign-validation-toast" });
        scrollToFirstInvalidField(e.currentTarget);
        return;
      }

      if (!customChannel.trim()) {
        toast.error(t("marketingNotifications.create.channelRequired"));
        return;
      }

      if (!token) {
        toast.error(t("marketingNotifications.create.unauthorized"));
        return;
      }

      setIsSubmitting(true);

      const entityTypeMap: Record<string, string> = {
        developer: "developer",
        project: "project",
        unit: "unit",
      };

      const hasEntity = !!selectedEntity;
      const resolvedEntityType = hasEntity ? (entityTypeMap[activeEntityTab] ?? activeEntityTab) : null;
      const resolvedEntityId = hasEntity ? parseInt(selectedEntity, 10) : null;

      const effectiveCountryId = selectedCountry;
      const countryObj = countries.find((c: any) => c.id === effectiveCountryId) as any;
      const countryValue = countryObj ? countryObj.code : (effectiveCountryId || undefined);

      const recipientIds =
        selectedAudience === "specific" && recipientUserIds.trim()
          ? recipientUserIds
            .split(",")
            .map((id) => parseInt(id.trim(), 10))
            .filter((id) => !isNaN(id))
          : [];

      const isScheduled = scheduleType === "scheduled";
      const scheduledAt = isScheduled && scheduleDate && scheduleTime
        ? `${scheduleDate}T${scheduleTime}:00`
        : null;

      const payload = {
        name: title,
        type: "notification",
        audience_segment: selectedAudience,
        channel: customChannel,
        content: {
          title: title,
          subject: title,
          description: description,
          body: description,
          platform: platform,
          image_url: "",
          ...(countryValue ? { country: countryValue } : {}),
          ...(resolvedEntityType ? {
            target_entity_type: resolvedEntityType,
            target_entity_id: resolvedEntityId
          } : {})
        },
        ...(recipientIds.length > 0 ? { recipient_user_ids: recipientIds } : {}),
        ...(isScheduled && scheduledAt ? { scheduled_at: scheduledAt } : {}),
      };

      try {
        await createCampaign(payload, token);
        toast.success(t("marketingNotifications.create.createSuccess"));
        await queryClient.invalidateQueries({ queryKey: ["campaigns"], refetchType: "all" });
        await queryClient.invalidateQueries({ queryKey: ["campaignStats"], refetchType: "all" });
        router.push(`${basePath}/marketing/notifications`);
        router.refresh?.();
      } catch (err: any) {
        const { fieldErrors, generalMessage, summary } = parseApiError(err, {
          t,
          fallbackMessage: t("marketingCampaigns.messages.createFailed"),
          fields: NOTIFICATION_FORM_FIELDS,
          fieldMap: NOTIFICATION_FIELD_MAP,
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
      title,
      description,
      customChannel,
      selectedAudience,
      recipientUserIds,
      scheduleType,
      scheduleDate,
      scheduleTime,
      token,
      isRTL,
      t,
      activeEntityTab,
      selectedEntity,
      selectedCountry,
      countries,
      platform,
      basePath,
      router,
      queryClient,
    ],
  );

  return {
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
    customChannel,
    setCustomChannel,
    isSubmitting,
    scheduleType,
    setScheduleType,
    scheduleDate,
    setScheduleDate,
    scheduleTime,
    setScheduleTime,
    formErrors,
    generalError,
    getFieldError,
    handleInputChange,
    getActiveItems,
    handleSendNotification,
    countries,
    isLoadingEntities,
  };
}