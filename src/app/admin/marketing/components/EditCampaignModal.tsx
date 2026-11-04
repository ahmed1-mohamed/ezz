"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Send,
  CheckCircle2,
  Eye,
  AlertTriangle,
  Calendar,
  Mail,
  Users,
  Target,
  BarChart3,
  Loader2,
} from "lucide-react";
import { getAudienceLabel } from "../utils/campaignUtils";
import { toast } from "sonner";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import {
  CAMPAIGN_DESCRIPTION_MAX_LENGTH,
  CAMPAIGN_NAME_MAX_LENGTH,
  CAMPAIGN_TITLE_MAX_LENGTH,
  isValidEmail,
} from "../utils/campaign-validation";

type EditCampaignField = "name" | "title" | "senderName" | "senderEmail" | "description" | "status";
const EDIT_CAMPAIGN_FIELDS: EditCampaignField[] = ["name", "title", "senderName", "senderEmail", "description", "status"];

interface CampaignCreator {
  user_id?: number | string;
  first_name?: string;
  last_name?: string;
  email?: string;
}

interface CampaignStats {
  id?: number | string;
  campaign_id?: number | string;
  total_sent?: number;
  delivered?: number;
  opened?: number;
  read?: number;
  failed?: number;
}

interface CampaignContent {
  id?: number | string;
  campaign_id?: number | string;
  title?: string;
  subject?: string;
  description?: string;
  body?: string;
  image_url?: string;
  platform?: string;
  channel?: string;
  sender_name?: string;
  sender_email?: string;
  target_entity_type?: string;
  target_entity_id?: number | string;
}

interface Campaign {
  id: string | number;
  name?: string;
  campaign_name?: string;
  type?: string;
  status?: string;
  country?: string | null;
  audience?: string;
  audience_segment?: string;
  scheduled_at?: string | null;
  created_by?: number | string;
  created_at?: string;
  date?: string;
  content?: CampaignContent;
  stats?: CampaignStats;
  creator?: CampaignCreator;
  specific_recipients?: Array<any>;
  contacts?: string[];

  // Fallback legacy properties
  sent?: number;
  received?: number;
  opened?: number;
  read?: number;
  failed?: number;
  platform?: string;
  channel?: string;
  sender_name?: string;
  sender_email?: string;
}

interface EditCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign | null;
  mode: "view" | "edit";
  type: "sms" | "email" | "notification";
  onSave: (id: string | number, updatedData: any) => Promise<void>;
}

const STATUS_CONFIG: Record<string, { label_en: string; label_ar: string; color: string }> = {
  completed: {
    label_en: "Completed",
    label_ar: "مكتملة",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
  },
  running: {
    label_en: "Running",
    label_ar: "جاري التشغيل",
    color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800",
  },
  scheduled: {
    label_en: "Scheduled",
    label_ar: "مجدولة",
    color: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800",
  },
  draft: {
    label_en: "Draft",
    label_ar: "مسودة",
    color: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
  },
  failed: {
    label_en: "Failed",
    label_ar: "فشلت",
    color: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800",
  },
};

const COUNTRY_NAMES: Record<string, { en: string; ar: string }> = {
  ae: { en: "UAE", ar: "الإمارات" },
  uae: { en: "UAE", ar: "الإمارات" },
  eg: { en: "Egypt", ar: "مصر" },
  om: { en: "Oman", ar: "عُمان" },
};

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5 text-start">
      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
        {label}
        {required && <span className="text-red-500 ms-0.5">*</span>}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  );
}

export function EditCampaignModal({
  isOpen,
  onClose,
  campaign,
  mode,
  type,
  onSave,
}: EditCampaignModalProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const [errors, setErrors] = useState<Partial<Record<EditCampaignField, string>>>({});
  const [generalError, setGeneralError] = useState<string | undefined>();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("mobile");
  const [channel, setChannel] = useState("sms");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [status, setStatus] = useState("scheduled");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (campaign) {
      setName(campaign.name || campaign.campaign_name || "");
      setTitle(campaign.content?.title || campaign.content?.subject || campaign.name || "");
      setDescription(campaign.content?.description || campaign.content?.body || "");
      setPlatform(campaign.content?.platform || campaign.platform || "all");
      setChannel(campaign.content?.channel || campaign.channel || (type === "email" ? "mail" : "sms"));
      setSenderName(campaign.content?.sender_name || campaign.sender_name || "");
      setSenderEmail(campaign.content?.sender_email || campaign.sender_email || "");
      setStatus(campaign.status || "scheduled");
    }
    setErrors({});
    setGeneralError(undefined);
  }, [campaign, type]);

  // Updates a field and clears its error.
  const changeField = (field: EditCampaignField, setter: (value: string) => void) => (value: string) => {
    setter(value);
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = (): Partial<Record<EditCampaignField, string>> => {
    const next: Partial<Record<EditCampaignField, string>> = {};
    const maxLength = (max: number) => t("validation.max_length", { max });

    if (!name.trim()) next.name = t("validation.required");
    else if (name.trim().length > CAMPAIGN_NAME_MAX_LENGTH) next.name = maxLength(CAMPAIGN_NAME_MAX_LENGTH);

    if (type === "notification") {
      if (!title.trim()) next.title = t("validation.required");
      else if (title.trim().length > CAMPAIGN_TITLE_MAX_LENGTH) next.title = maxLength(CAMPAIGN_TITLE_MAX_LENGTH);
    }

    if (type === "email") {
      if (!senderName.trim()) next.senderName = t("validation.required");
      else if (senderName.trim().length > CAMPAIGN_NAME_MAX_LENGTH) next.senderName = maxLength(CAMPAIGN_NAME_MAX_LENGTH);

      if (!senderEmail.trim()) next.senderEmail = t("validation.required");
      else if (!isValidEmail(senderEmail) || senderEmail.trim().length > CAMPAIGN_NAME_MAX_LENGTH) {
        next.senderEmail = t("validation.email_invalid");
      }
    }

    if (!description.trim()) next.description = t("validation.required");
    else if (type !== "email" && description.trim().length > CAMPAIGN_DESCRIPTION_MAX_LENGTH) {
      next.description = maxLength(CAMPAIGN_DESCRIPTION_MAX_LENGTH);
    }

    return next;
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (mode === "view") return;

      setGeneralError(undefined);
      const validationErrors = validate();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) {
        toast.error(t("validation.fillRequiredFields"), { id: "campaign-validation-toast" });
        scrollToFirstInvalidField(e.currentTarget);
        return;
      }

      setIsSubmitting(true);
      try {
        const payload: any = {
          name: name.trim(),
          type: type === "sms" ? channel : type,
          status: status,
          audience_segment:
            (campaign?.audience_segment === "foreign_contacts" || campaign?.audience === "foreign_contacts")
              ? "specific"
              : campaign?.audience_segment || campaign?.audience || "all",
          content: {
            title: type === "notification" ? title.trim() : name.trim(),
            subject: type === "email" ? title.trim() : name.trim(),
            description: description.trim(),
            body: description.trim(),
            platform: type === "notification" ? platform : type === "email" ? "web" : "mobile",
            ...(type === "email"
              ? { sender_name: senderName.trim(), sender_email: senderEmail.trim() }
              : {}),
          },
        };
        await onSave(campaign!.id, payload);
        onClose();
      } catch (err) {
        const { fieldErrors, generalMessage, summary } = parseApiError(err, {
          t,
          fallbackMessage: t("marketingCampaigns.messages.updateFailed"),
          fields: EDIT_CAMPAIGN_FIELDS,
          fieldMap: {
            "content.description": "description",
            "content.body": "description",
            "content.sender_name": "senderName",
            "content.sender_email": "senderEmail",
            ...(type === "notification" ? { "content.title": "title", "content.subject": "title" } : {}),
            ...(type === "sms" ? { "content.title": "name", "content.subject": "name" } : {}),
            ...(type === "email" ? { "content.title": "name" } : {}),
          },
        });
        setErrors(fieldErrors);
        setGeneralError(generalMessage);
        toast.error(summary, { id: API_ERROR_TOAST_ID });
        if (Object.keys(fieldErrors).length > 0 || generalMessage) scrollToFirstInvalidField();
      } finally {
        setIsSubmitting(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode, name, title, description, platform, channel, senderName, senderEmail, status, type, campaign, onSave, onClose, t]
  );

  if (!campaign) return null;

  const isView = mode === "view";
  const campaignType = campaign.type || type;
  const statusKey = String(campaign.status || "scheduled").toLowerCase();
  const statusInfo = STATUS_CONFIG[statusKey] || STATUS_CONFIG.scheduled;

  // Extract Stats
  const totalSent = campaign.stats?.total_sent ?? campaign.sent ?? 0;
  const delivered = campaign.stats?.delivered ?? campaign.received ?? 0;
  const opened = campaign.stats?.opened ?? campaign.opened ?? 0;
  const read = campaign.stats?.read ?? campaign.read ?? 0;
  const failed = campaign.stats?.failed ?? campaign.failed ?? 0;

  const deliveryRate = totalSent > 0 ? ((delivered / totalSent) * 100).toFixed(1) : "0.0";
  const openRate = delivered > 0 ? (((opened || read) / delivered) * 100).toFixed(1) : "0.0";

  // Country Display
  const countryKey = (campaign.country || "").toLowerCase().trim();
  const countryName = COUNTRY_NAMES[countryKey]
    ? isRTL
      ? COUNTRY_NAMES[countryKey].ar
      : COUNTRY_NAMES[countryKey].en
    : campaign.country;

  const audienceKey = campaign.audience_segment || campaign.audience || "all";
  const audienceLabel = getAudienceLabel(audienceKey, isRTL);

  const creatorName = campaign.creator
    ? `${campaign.creator.first_name || ""} ${campaign.creator.last_name || ""}`.trim() || campaign.creator.email
    : null;

  const contentTitle = campaign.content?.title || campaign.content?.subject || campaign.name || "";
  const contentBody = campaign.content?.body || campaign.content?.description || "";
  const imageUrl = campaign.content?.image_url;

  return (
    <Dialog open={isOpen} onOpenChange={() => { if (!isSubmitting) onClose(); }}>
      <DialogContent className="max-w-2xl w-full mx-4 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <DialogHeader className="p-6 pb-4 border-b border-gray-100 dark:border-neutral-800 text-start">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <DialogTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {campaign.name || campaign.campaign_name || (isRTL ? "تفاصيل الحملة" : "Campaign Details")}
                </DialogTitle>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold border capitalize ${statusInfo.color}`}
                >
                  {isRTL ? statusInfo.label_ar : statusInfo.label_en}
                </span>
              </div>
              <DialogDescription className="text-xs text-gray-500 dark:text-gray-400">
                {isRTL ? "معرّف الحملة:" : "Campaign ID:"} #{campaign.id} • {campaignType.toUpperCase()}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {isView ? (
          /* View Mode */
          <div className="p-6 space-y-6 text-start">
            {/* 1. Quick Stats Grid */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                <BarChart3 className="h-3.5 w-3.5 text-teal-600" />
                <span>{isRTL ? "إحصائيات الأداء" : "Performance Metrics"}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-gray-50 dark:bg-neutral-950 p-3 rounded-xl border border-gray-100 dark:border-neutral-800">
                  <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                    <Send className="h-3 w-3 text-blue-500" />
                    <span>{isRTL ? "تم الإرسال" : "Sent"}</span>
                  </div>
                  <div className="text-base font-bold text-gray-900 dark:text-gray-100 mt-1">
                    {totalSent.toLocaleString()}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-950 p-3 rounded-xl border border-gray-100 dark:border-neutral-800">
                  <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    <span>{isRTL ? "تم الاستلام" : "Delivered"}</span>
                  </div>
                  <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                    {delivered.toLocaleString()}
                    <span className="text-[10px] text-gray-400 font-normal ms-1">({deliveryRate}%)</span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-950 p-3 rounded-xl border border-gray-100 dark:border-neutral-800">
                  <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                    <Eye className="h-3 w-3 text-teal-500" />
                    <span>{isRTL ? "تم الفتح/القراءة" : "Opened/Read"}</span>
                  </div>
                  <div className="text-base font-bold text-teal-600 dark:text-teal-400 mt-1">
                    {(opened || read).toLocaleString()}
                    <span className="text-[10px] text-gray-400 font-normal ms-1">({openRate}%)</span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-950 p-3 rounded-xl border border-gray-100 dark:border-neutral-800">
                  <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3 text-red-500" />
                    <span>{isRTL ? "فشلت" : "Failed"}</span>
                  </div>
                  <div className="text-base font-bold text-red-600 dark:text-red-400 mt-1">
                    {failed.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Message Content Details */}
            <div className="space-y-3 bg-gray-50/70 dark:bg-neutral-950/50 p-4 rounded-xl border border-gray-100 dark:border-neutral-800">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-teal-600" />
                <span>{isRTL ? "محتوى الرسالة" : "Message Content"}</span>
              </h3>

              {contentTitle && (
                <div>
                  <span className="text-[11px] font-semibold text-gray-400">
                    {isRTL ? "العنوان / الموضوع:" : "Title / Subject:"}
                  </span>
                  <div className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-0.5">
                    {contentTitle}
                  </div>
                </div>
              )}

              {contentBody && (
                <div>
                  <span className="text-[11px] font-semibold text-gray-400">
                    {isRTL ? "نص الرسالة:" : "Body / Description:"}
                  </span>
                  <div className="text-xs text-gray-700 dark:text-gray-300 mt-1 p-3 bg-white dark:bg-neutral-900 rounded-lg border border-gray-100 dark:border-neutral-800 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed font-sans">
                    {contentBody}
                  </div>
                </div>
              )}

              {imageUrl && (
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-gray-400 block mb-1.5">
                    {isRTL ? "صورة الإشعار:" : "Campaign Image:"}
                  </span>
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-800 max-h-44 bg-neutral-950 flex items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={contentTitle}
                      className="max-h-44 w-auto object-contain"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 3. Audience & Targeting Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 space-y-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5 text-teal-600" />
                  <span>{isRTL ? "الاستهداف" : "Targeting"}</span>
                </span>
                <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{isRTL ? "فئة الجمهور:" : "Audience:"}</span>
                    <span className="font-bold text-gray-900 dark:text-gray-100">{audienceLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{isRTL ? "الدولة:" : "Country:"}</span>
                    <span className="font-bold text-gray-900 dark:text-gray-100">
                      {countryName || (isRTL ? "جميع الدول" : "All Countries")}
                    </span>
                  </div>
                  {campaign.content?.platform && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">{isRTL ? "المنصة:" : "Platform:"}</span>
                      <span className="font-semibold capitalize text-gray-900 dark:text-gray-100">
                        {campaign.content.platform}
                      </span>
                    </div>
                  )}
                  {campaign.content?.target_entity_type && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">{isRTL ? "الجهة المرتبطة:" : "Target Entity:"}</span>
                      <span className="font-semibold text-teal-600 dark:text-teal-400">
                        {campaign.content.target_entity_type} #{campaign.content.target_entity_id}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 space-y-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-teal-600" />
                  <span>{isRTL ? "التاريخ والمنشئ" : "Timeline & Author"}</span>
                </span>
                <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{isRTL ? "تاريخ الإنشاء:" : "Created At:"}</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {campaign.created_at ? new Date(campaign.created_at).toLocaleString(isRTL ? "ar-EG" : "en-US") : "—"}
                    </span>
                  </div>
                  {campaign.scheduled_at && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">{isRTL ? "موعد الجدولة:" : "Scheduled At:"}</span>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">
                        {new Date(campaign.scheduled_at).toLocaleString(isRTL ? "ar-EG" : "en-US")}
                      </span>
                    </div>
                  )}
                  {creatorName && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">{isRTL ? "بواسطة:" : "Created By:"}</span>
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{creatorName}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Specific Recipients List if available */}
            {campaign.specific_recipients && campaign.specific_recipients.length > 0 && (
              <div className="p-3.5 rounded-xl border border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 space-y-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-teal-600" />
                  <span>
                    {isRTL ? "المستلمون المحددون" : "Specific Recipients"} ({campaign.specific_recipients.length})
                  </span>
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                  {campaign.specific_recipients.map((rec: any, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 text-[11px] text-gray-700 dark:text-gray-300 font-mono"
                    >
                      {typeof rec === "object" ? rec.name || rec.email || rec.id : rec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Edit Mode Form */
          <form onSubmit={handleSubmit} noValidate className="p-6 space-y-4">
            <FormErrorAlert message={generalError} />

            <FormField label={isRTL ? "اسم الحملة" : "Campaign Name"} required error={errors.name}>
              <Input
                value={name}
                onChange={(e) => changeField("name", setName)(e.target.value)}
                disabled={isSubmitting}
                error={!!errors.name}
                aria-invalid={!!errors.name}
                className={`bg-white dark:bg-neutral-950 ${errors.name ? "" : "dark:border-neutral-700"}`}
              />
            </FormField>

            {type === "notification" && (
              <>
                <FormField label={isRTL ? "عنوان الإشعار" : "Notification Title"} required error={errors.title}>
                  <Input
                    value={title}
                    onChange={(e) => changeField("title", setTitle)(e.target.value)}
                    disabled={isSubmitting}
                    error={!!errors.title}
                    aria-invalid={!!errors.title}
                    className={`bg-white dark:bg-neutral-950 ${errors.title ? "" : "dark:border-neutral-700"}`}
                  />
                </FormField>
                <FormField label={isRTL ? "المنصة" : "Platform"}>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full p-2 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="all">{isRTL ? "الكل" : "All"}</option>
                    <option value="mobile">{isRTL ? "جوال" : "Mobile"}</option>
                    <option value="web">{isRTL ? "ويب" : "Web"}</option>
                  </select>
                </FormField>
              </>
            )}

            {type === "email" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label={isRTL ? "اسم المرسل" : "Sender Name"} required error={errors.senderName}>
                  <Input
                    value={senderName}
                    onChange={(e) => changeField("senderName", setSenderName)(e.target.value)}
                    disabled={isSubmitting}
                    error={!!errors.senderName}
                    aria-invalid={!!errors.senderName}
                    className={`bg-white dark:bg-neutral-950 ${errors.senderName ? "" : "dark:border-neutral-700"}`}
                  />
                </FormField>
                <FormField label={isRTL ? "بريد المرسل" : "Sender Email"} required error={errors.senderEmail}>
                  <Input
                    type="email"
                    dir="ltr"
                    value={senderEmail}
                    onChange={(e) => changeField("senderEmail", setSenderEmail)(e.target.value)}
                    disabled={isSubmitting}
                    error={!!errors.senderEmail}
                    aria-invalid={!!errors.senderEmail}
                    className={`bg-white dark:bg-neutral-950 ${errors.senderEmail ? "" : "dark:border-neutral-700"}`}
                  />
                </FormField>
              </div>
            )}

            <FormField label={isRTL ? "محتوى الرسالة" : "Message Body"} required error={errors.description}>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => changeField("description", setDescription)(e.target.value)}
                disabled={isSubmitting}
                aria-invalid={!!errors.description}
                className={`w-full p-2.5 border ${errors.description ? "border-red-500" : "border-gray-200 dark:border-neutral-700"} bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none font-sans`}
              />
            </FormField>

            <FormField label={isRTL ? "الحالة" : "Status"} error={errors.status}>
              <select
                value={status}
                onChange={(e) => changeField("status", setStatus)(e.target.value)}
                aria-invalid={!!errors.status || undefined}
                disabled={isSubmitting}
                className="w-full p-2.5 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="scheduled">{isRTL ? "مجدولة" : "Scheduled"}</option>
                <option value="draft">{isRTL ? "مسودة" : "Draft"}</option>
                <option value="running">{isRTL ? "جاري التشغيل" : "Running"}</option>
                <option value="completed">{isRTL ? "مكتملة" : "Completed"}</option>
                <option value="failed">{isRTL ? "فشلت" : "Failed"}</option>
              </select>
            </FormField>

            <DialogFooter className="border-t pt-4 border-gray-100 dark:border-neutral-800 flex flex-col sm:flex-row gap-2 sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 w-full sm:w-auto"
              >
                {isRTL ? "إلغاء" : "Cancel"}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-700 hover:bg-teal-800 text-white font-bold w-full sm:w-auto"
              >
                {isSubmitting && <Loader2 className="h-4 w-4 me-2 animate-spin" />}
                {isSubmitting
                  ? isRTL ? "جاري الحفظ..." : "Saving..."
                  : isRTL ? "حفظ التغييرات" : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        )}

        {isView && (
          <DialogFooter className="p-4 px-6 border-t border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-950/40 flex justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 font-bold px-6"
            >
              {isRTL ? "إغلاق" : "Close"}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}