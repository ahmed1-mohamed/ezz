"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { IntegrationItem } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Save, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FieldError } from "@/components/ui/form-message";
import { validateCredentials } from "../validation";

interface IntegrationsViewProps {
  integrations: IntegrationItem[];
  setIntegrations?: React.Dispatch<React.SetStateAction<IntegrationItem[]>>;
}

export function IntegrationsView({
  integrations,
  setIntegrations,
}: IntegrationsViewProps) {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const [items, setItems] = useState<IntegrationItem[]>(integrations);
  const [expandedId, setExpandedId] = useState<string | null>("twilio_sms");
  const [fieldValues, setFieldValues] = useState<Record<string, Record<string, string>>>(() => {
    const initial: Record<string, Record<string, string>> = {};
    integrations.forEach((item) => {
      initial[item.id] = item.fields || {};
    });
    return initial;
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, Record<string, string>>>({});

  const handleFieldChange = (integrationId: string, fieldKey: string, val: string) => {
    if (fieldErrors[integrationId]?.[fieldKey]) {
      setFieldErrors((prev) => {
        const next = { ...(prev[integrationId] || {}) };
        delete next[fieldKey];
        return { ...prev, [integrationId]: next };
      });
    }
    setFieldValues((prev) => ({
      ...prev,
      [integrationId]: {
        ...(prev[integrationId] || {}),
        [fieldKey]: val,
      },
    }));
  };

  const handleSaveIntegration = (integrationId: string) => {
    const errors = validateCredentials(integrationId, fieldValues[integrationId] || {}, t);
    setFieldErrors((prev) => ({ ...prev, [integrationId]: errors }));
    if (Object.keys(errors).length > 0) {
      toast.error(t("validation.fillRequiredFields"));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === integrationId ? { ...item, fields: fieldValues[integrationId] } : item
      )
    );
    if (setIntegrations) {
      setIntegrations((prev) =>
        prev.map((item) =>
          item.id === integrationId ? { ...item, fields: fieldValues[integrationId] } : item
        )
      );
    }
    toast.success(isRTL ? "تم حفظ بيانات الربط بنجاح" : "Integration credentials saved successfully");
  };

  const handleToggle = (integrationId: string, checked: boolean) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === integrationId
          ? {
              ...item,
              enabled: checked,
              status: checked ? "connected" : "disconnected",
            }
          : item
      )
    );
    if (setIntegrations) {
      setIntegrations((prev) =>
        prev.map((item) =>
          item.id === integrationId
            ? {
                ...item,
                enabled: checked,
                status: checked ? "connected" : "disconnected",
              }
            : item
        )
      );
    }
    toast.success(
      checked
        ? isRTL
          ? "تم تفعيل الخدمة"
          : "Integration enabled"
        : isRTL
        ? "تم تعطيل الخدمة"
        : "Integration disabled"
    );
  };

  return (
    <div className="flex-1 space-y-5 min-w-0">
      {/* Header */}
      <div className="pb-2 border-b border-gray-100 dark:border-neutral-800">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {isRTL ? "الربط والتكامل" : "Integrations"}
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          {isRTL
            ? "تهيئة مزودي الرسائل والبريد والتحليلات — يتم حفظ المفاتيح مشفرة بأمان"
            : "Configure messaging & email providers — keys stored encrypted"}
        </p>
      </div>

      {/* List of Collapsible Integration Rows */}
      <div className="space-y-3">
        {items.map((item) => {
          const isExpanded = expandedId === item.id;
          const fields = fieldValues[item.id] || {};

          return (
            <div
              key={item.id}
              className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-2xs transition-all"
            >
              {/* Row Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50/60 dark:hover:bg-neutral-800/40 transition-colors select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 dark:text-gray-500">
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isExpanded ? "transform rotate-0" : "-rotate-90"
                      )}
                    />
                  </span>

                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </span>

                  {item.enabled && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
                      {isRTL ? "مفعل" : "On"}
                    </span>
                  )}
                </div>

                <div onClick={(e) => e.stopPropagation()}>
                  <Switch
                    checked={item.enabled}
                    onCheckedChange={(checked) => handleToggle(item.id, checked)}
                  />
                </div>
              </div>

              {/* Collapsible Form Body */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-neutral-800/80 bg-gray-50/30 dark:bg-neutral-950/30 space-y-4">
                  {/* Twilio SMS Form */}
                  {item.id === "twilio_sms" && (
                    <div className="space-y-3.5">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف الحساب (Account SID)" : "Account SID"}</Label>
                        <Input
                          value={fields.account_sid || ""}
                          onChange={(e) => handleFieldChange("twilio_sms", "account_sid", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["twilio_sms"]?.account_sid}
                          aria-invalid={!!fieldErrors["twilio_sms"]?.account_sid}
                          placeholder="AC2ced3cfef91e97804ec42f6b1f4004d7"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["twilio_sms"]?.account_sid} />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Label className="text-xs font-semibold">{isRTL ? "رمز التفويض (Auth Token)" : "Auth Token"}</Label>
                          {fields.auth_token && (
                            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                              ✓ saved
                            </span>
                          )}
                        </div>
                        <Input
                          type="password"
                          value={fields.auth_token || ""}
                          onChange={(e) => handleFieldChange("twilio_sms", "auth_token", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["twilio_sms"]?.auth_token}
                          aria-invalid={!!fieldErrors["twilio_sms"]?.auth_token}
                          placeholder="••••••••"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["twilio_sms"]?.auth_token} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "رقم الإرسال (Sender Number)" : "Sender Number"}</Label>
                        <Input
                          value={fields.sender_number || ""}
                          onChange={(e) => handleFieldChange("twilio_sms", "sender_number", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["twilio_sms"]?.sender_number}
                          aria-invalid={!!fieldErrors["twilio_sms"]?.sender_number}
                          placeholder="+18458510609"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["twilio_sms"]?.sender_number} />
                      </div>
                    </div>
                  )}

                  {/* WhatsApp Cloud API Form */}
                  {item.id === "whatsapp_cloud" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف رقم الهاتف (Phone Number ID)" : "Phone Number ID"}</Label>
                        <Input
                          value={fields.phone_number_id || ""}
                          onChange={(e) => handleFieldChange("whatsapp_cloud", "phone_number_id", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["whatsapp_cloud"]?.phone_number_id}
                          aria-invalid={!!fieldErrors["whatsapp_cloud"]?.phone_number_id}
                          placeholder="109283746592834"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["whatsapp_cloud"]?.phone_number_id} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف حساب الأعمال (WABA ID)" : "WhatsApp Business Account ID"}</Label>
                        <Input
                          value={fields.waba_id || ""}
                          onChange={(e) => handleFieldChange("whatsapp_cloud", "waba_id", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["whatsapp_cloud"]?.waba_id}
                          aria-invalid={!!fieldErrors["whatsapp_cloud"]?.waba_id}
                          placeholder="928374659283741"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["whatsapp_cloud"]?.waba_id} />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "رمز الوصول الدائم (System User Token)" : "Access Token"}</Label>
                        <Input
                          type="password"
                          value={fields.access_token || ""}
                          onChange={(e) => handleFieldChange("whatsapp_cloud", "access_token", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["whatsapp_cloud"]?.access_token}
                          aria-invalid={!!fieldErrors["whatsapp_cloud"]?.access_token}
                          placeholder="EAAK..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["whatsapp_cloud"]?.access_token} />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "رمز التحقق للـ Webhook (Verify Token)" : "Webhook Verify Token"}</Label>
                        <Input
                          value={fields.webhook_verify_token || ""}
                          onChange={(e) => handleFieldChange("whatsapp_cloud", "webhook_verify_token", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["whatsapp_cloud"]?.webhook_verify_token}
                          aria-invalid={!!fieldErrors["whatsapp_cloud"]?.webhook_verify_token}
                          placeholder="custom_verify_token"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["whatsapp_cloud"]?.webhook_verify_token} />
                      </div>
                    </div>
                  )}

                  {/* SendGrid Email Form */}
                  {item.id === "sendgrid_email" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "مفتاح SendGrid API" : "SendGrid API Key"}</Label>
                        <Input
                          type="password"
                          value={fields.api_key || ""}
                          onChange={(e) => handleFieldChange("sendgrid_email", "api_key", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["sendgrid_email"]?.api_key}
                          aria-invalid={!!fieldErrors["sendgrid_email"]?.api_key}
                          placeholder="SG.e83912..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["sendgrid_email"]?.api_key} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "بريد المرسل (From Email)" : "From Email Address"}</Label>
                        <Input
                          type="email"
                          value={fields.from_email || ""}
                          onChange={(e) => handleFieldChange("sendgrid_email", "from_email", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["sendgrid_email"]?.from_email}
                          aria-invalid={!!fieldErrors["sendgrid_email"]?.from_email}
                          placeholder="noreply@propertyadviser.site"
                          className="h-9 text-xs"
                        />
                        <FieldError message={fieldErrors["sendgrid_email"]?.from_email} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "اسم المرسل (From Name)" : "From Name"}</Label>
                        <Input
                          value={fields.from_name || ""}
                          onChange={(e) => handleFieldChange("sendgrid_email", "from_name", e.target.value)}
                          error={!!fieldErrors["sendgrid_email"]?.from_name}
                          aria-invalid={!!fieldErrors["sendgrid_email"]?.from_name}
                          placeholder="Property Adviser"
                          className="h-9 text-xs"
                        />
                        <FieldError message={fieldErrors["sendgrid_email"]?.from_name} />
                      </div>
                    </div>
                  )}

                  {/* Facebook Lead Ads Form */}
                  {item.id === "facebook_lead_ads" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف تطبيق فيسبوك (App ID)" : "Facebook App ID"}</Label>
                        <Input
                          value={fields.app_id || ""}
                          onChange={(e) => handleFieldChange("facebook_lead_ads", "app_id", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["facebook_lead_ads"]?.app_id}
                          aria-invalid={!!fieldErrors["facebook_lead_ads"]?.app_id}
                          placeholder="84920194829104"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["facebook_lead_ads"]?.app_id} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "سر التطبيق (App Secret)" : "App Secret"}</Label>
                        <Input
                          type="password"
                          value={fields.app_secret || ""}
                          onChange={(e) => handleFieldChange("facebook_lead_ads", "app_secret", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["facebook_lead_ads"]?.app_secret}
                          aria-invalid={!!fieldErrors["facebook_lead_ads"]?.app_secret}
                          placeholder="••••••••"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["facebook_lead_ads"]?.app_secret} />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "رمز وصول الصفحة (Page Access Token)" : "Page Access Token"}</Label>
                        <Input
                          type="password"
                          value={fields.page_access_token || ""}
                          onChange={(e) => handleFieldChange("facebook_lead_ads", "page_access_token", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["facebook_lead_ads"]?.page_access_token}
                          aria-invalid={!!fieldErrors["facebook_lead_ads"]?.page_access_token}
                          placeholder="EAAB..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["facebook_lead_ads"]?.page_access_token} />
                      </div>
                    </div>
                  )}

                  {/* Agora Video Calls Form */}
                  {item.id === "agora_video" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف تطبيق Agora (App ID)" : "Agora App ID"}</Label>
                        <Input
                          value={fields.app_id || ""}
                          onChange={(e) => handleFieldChange("agora_video", "app_id", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["agora_video"]?.app_id}
                          aria-invalid={!!fieldErrors["agora_video"]?.app_id}
                          placeholder="9a8b7c6d5e4f..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["agora_video"]?.app_id} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "شهادة التطبيق (App Certificate)" : "App Certificate"}</Label>
                        <Input
                          type="password"
                          value={fields.app_certificate || ""}
                          onChange={(e) => handleFieldChange("agora_video", "app_certificate", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["agora_video"]?.app_certificate}
                          aria-invalid={!!fieldErrors["agora_video"]?.app_certificate}
                          placeholder="••••••••"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["agora_video"]?.app_certificate} />
                      </div>
                    </div>
                  )}

                  {/* Google Analytics Form */}
                  {item.id === "google_analytics" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف القياس (Measurement ID)" : "Measurement ID"}</Label>
                        <Input
                          value={fields.measurement_id || ""}
                          onChange={(e) => handleFieldChange("google_analytics", "measurement_id", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["google_analytics"]?.measurement_id}
                          aria-invalid={!!fieldErrors["google_analytics"]?.measurement_id}
                          placeholder="G-XXXXXXXXXX"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["google_analytics"]?.measurement_id} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "سر واجهة برمجة القياس (API Secret)" : "Measurement Protocol API Secret"}</Label>
                        <Input
                          type="password"
                          value={fields.api_secret || ""}
                          onChange={(e) => handleFieldChange("google_analytics", "api_secret", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["google_analytics"]?.api_secret}
                          aria-invalid={!!fieldErrors["google_analytics"]?.api_secret}
                          placeholder="••••••••"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["google_analytics"]?.api_secret} />
                      </div>
                    </div>
                  )}

                  {/* Microsoft Clarity Form */}
                  {item.id === "microsoft_clarity" && (
                    <div className="space-y-3.5">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف المشروع (Project ID)" : "Project ID / Tracking Code"}</Label>
                        <Input
                          value={fields.project_id || ""}
                          onChange={(e) => handleFieldChange("microsoft_clarity", "project_id", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["microsoft_clarity"]?.project_id}
                          aria-invalid={!!fieldErrors["microsoft_clarity"]?.project_id}
                          placeholder="e.g. k9s8d7f6"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["microsoft_clarity"]?.project_id} />
                      </div>
                    </div>
                  )}

                  {/* Save Button */}
                  <div className="pt-2">
                    <Button
                      size="sm"
                      onClick={() => handleSaveIntegration(item.id)}
                      className="h-8 px-3.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer"
                    >
                      <Save className="h-3.5 w-3.5" />
                      <span>{isRTL ? "حفظ" : "Save"}</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
