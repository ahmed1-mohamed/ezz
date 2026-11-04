"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GeneralSettings } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Save } from "lucide-react";
import { FieldError } from "@/components/ui/form-message";
import { validateGeneralSettings } from "../validation";

interface GeneralSettingsViewProps {
  settings: GeneralSettings;
  onSave: (val: GeneralSettings) => void;
}

export function GeneralSettingsView({
  settings,
  onSave,
}: GeneralSettingsViewProps) {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const [form, setForm] = useState(settings);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = <K extends keyof GeneralSettings>(field: K, value: GeneralSettings[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSave = () => {
    const nextErrors = validateGeneralSettings(form, t);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      toast.error(t("validation.fillRequiredFields"));
      return;
    }
    onSave(form);
    toast.success(isRTL ? "تم حفظ الإعدادات العامة بنجاح" : "General settings saved successfully");
  };

  return (
    <div className="flex-1 space-y-6 min-w-0">
      <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {isRTL ? "إعدادات عامة" : "General Settings"}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {isRTL ? "تعديل بيانات وهوية المنصة الأساسية" : "Manage fundamental platform information & branding"}
          </p>
        </div>

        <Button
          onClick={handleSave}
          className="h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer"
        >
          <Save className="h-4 w-4" />
          <span>{isRTL ? "حفظ" : "Save"}</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">{isRTL ? "اسم الموقع (EN)" : "Site Name (EN)"} <span className="text-red-500">*</span></Label>
          <Input
            value={form.site_name}
            onChange={(e) => updateField("site_name", e.target.value)}
            className="h-9 text-xs"
            error={!!errors.site_name}
            aria-invalid={!!errors.site_name}
          />
          <FieldError message={errors.site_name} />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">{isRTL ? "اسم الموقع (AR)" : "Site Name (AR)"}</Label>
          <Input
            value={form.site_name_ar || ""}
            onChange={(e) => updateField("site_name_ar", e.target.value)}
            className="h-9 text-xs"
            error={!!errors.site_name_ar}
            aria-invalid={!!errors.site_name_ar}
          />
          <FieldError message={errors.site_name_ar} />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label className="text-xs font-semibold">{isRTL ? "شعار المنصة / الوصف" : "Site Tagline"}</Label>
          <Input
            value={form.site_tagline}
            onChange={(e) => updateField("site_tagline", e.target.value)}
            className="h-9 text-xs"
            error={!!errors.site_tagline}
            aria-invalid={!!errors.site_tagline}
          />
          <FieldError message={errors.site_tagline} />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">{isRTL ? "بريد التواصل والدعم" : "Contact Email"} <span className="text-red-500">*</span></Label>
          <Input
            type="email"
            value={form.contact_email}
            onChange={(e) => updateField("contact_email", e.target.value)}
            dir="ltr"
            className="h-9 text-xs"
            error={!!errors.contact_email}
            aria-invalid={!!errors.contact_email}
          />
          <FieldError message={errors.contact_email} />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">{isRTL ? "رقم الهاتف الرسمي" : "Contact Phone"}</Label>
          <Input
            value={form.contact_phone}
            onChange={(e) => updateField("contact_phone", e.target.value)}
            dir="ltr"
            className="h-9 text-xs"
            error={!!errors.contact_phone}
            aria-invalid={!!errors.contact_phone}
          />
          <FieldError message={errors.contact_phone} />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">{isRTL ? "رقم الواتساب للدعم" : "WhatsApp Support Number"}</Label>
          <Input
            value={form.whatsapp_number}
            onChange={(e) => updateField("whatsapp_number", e.target.value)}
            dir="ltr"
            className="h-9 text-xs"
            error={!!errors.whatsapp_number}
            aria-invalid={!!errors.whatsapp_number}
          />
          <FieldError message={errors.whatsapp_number} />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">{isRTL ? "المنطقة الزمنية" : "Timezone"} <span className="text-red-500">*</span></Label>
          <Input
            value={form.timezone}
            onChange={(e) => updateField("timezone", e.target.value)}
            dir="ltr"
            className="h-9 text-xs"
            error={!!errors.timezone}
            aria-invalid={!!errors.timezone}
          />
          <FieldError message={errors.timezone} />
        </div>
      </div>
    </div>
  );
}
