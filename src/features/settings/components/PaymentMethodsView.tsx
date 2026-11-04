"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { PaymentMethodItem } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Save, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FieldError } from "@/components/ui/form-message";
import { validateCredentials } from "../validation";

interface PaymentMethodsViewProps {
  methods: PaymentMethodItem[];
  setMethods: React.Dispatch<React.SetStateAction<PaymentMethodItem[]>>;
}

export function PaymentMethodsView({
  methods,
  setMethods,
}: PaymentMethodsViewProps) {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const [expandedId, setExpandedId] = useState<string | null>("stripe");
  const [fieldValues, setFieldValues] = useState<Record<string, Record<string, string>>>(() => {
    const initial: Record<string, Record<string, string>> = {};
    methods.forEach((m) => {
      initial[m.id] = m.fields || {};
    });
    return initial;
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, Record<string, string>>>({});

  const handleFieldChange = (gatewayId: string, fieldKey: string, val: string) => {
    if (fieldErrors[gatewayId]?.[fieldKey]) {
      setFieldErrors((prev) => {
        const next = { ...(prev[gatewayId] || {}) };
        delete next[fieldKey];
        return { ...prev, [gatewayId]: next };
      });
    }
    setFieldValues((prev) => ({
      ...prev,
      [gatewayId]: {
        ...(prev[gatewayId] || {}),
        [fieldKey]: val,
      },
    }));
  };

  const handleSaveGateway = (gatewayId: string) => {
    const errors = validateCredentials(gatewayId, fieldValues[gatewayId] || {}, t);
    setFieldErrors((prev) => ({ ...prev, [gatewayId]: errors }));
    if (Object.keys(errors).length > 0) {
      toast.error(t("validation.fillRequiredFields"));
      return;
    }
    setMethods((prev) =>
      prev.map((m) => (m.id === gatewayId ? { ...m, fields: fieldValues[gatewayId] } : m))
    );
    toast.success(isRTL ? "تم حفظ بيانات البوابة بنجاح" : "Gateway credentials saved successfully");
  };

  return (
    <div className="flex-1 space-y-5 min-w-0">
      {/* Header */}
      <div className="pb-2 border-b border-gray-100 dark:border-neutral-800">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {isRTL ? "بوابات الدفع الإلكتروني" : "Payment Gateways"}
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          {isRTL
            ? "تفعيل وتهيئة بوابات الدفع — يتم حفظ بيانات الاعتماد مشفرة بأمان"
            : "Enable and configure gateways — credentials stored encrypted"}
        </p>
      </div>

      {/* List of Collapsible Gateway Rows */}
      <div className="space-y-3">
        {methods.map((method) => {
          const isExpanded = expandedId === method.id;
          const fields = fieldValues[method.id] || {};

          return (
            <div
              key={method.id}
              className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-2xs transition-all"
            >
              {/* Row Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : method.id)}
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
                    {method.name}
                  </span>

                  {method.enabled && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
                      {isRTL ? "مفعل" : "On"}
                    </span>
                  )}
                </div>

                <div onClick={(e) => e.stopPropagation()}>
                  <Switch
                    checked={method.enabled}
                    onCheckedChange={(checked) => {
                      setMethods((prev) =>
                        prev.map((m) => (m.id === method.id ? { ...m, enabled: checked } : m))
                      );
                      toast.success(
                        checked
                          ? isRTL
                            ? `تم تفعيل ${method.name}`
                            : `Enabled ${method.name}`
                          : isRTL
                          ? `تم تعطيل ${method.name}`
                          : `Disabled ${method.name}`
                      );
                    }}
                  />
                </div>
              </div>

              {/* Collapsible Form Body */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-gray-100 dark:border-neutral-800/80 bg-gray-50/30 dark:bg-neutral-950/30 space-y-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {method.description}
                  </p>

                  {/* Gateway Specific Form Inputs */}
                  {method.id === "stripe" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "المفتاح العام (Publishable Key)" : "Publishable Key"}</Label>
                        <Input
                          value={fields.publishable_key || ""}
                          onChange={(e) => handleFieldChange("stripe", "publishable_key", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["stripe"]?.publishable_key}
                          aria-invalid={!!fieldErrors["stripe"]?.publishable_key}
                          placeholder="pk_live_..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["stripe"]?.publishable_key} />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "المفتاح السري (Secret Key)" : "Secret Key"}</Label>
                        <Input
                          type="password"
                          value={fields.secret_key || ""}
                          onChange={(e) => handleFieldChange("stripe", "secret_key", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["stripe"]?.secret_key}
                          aria-invalid={!!fieldErrors["stripe"]?.secret_key}
                          placeholder="sk_live_..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["stripe"]?.secret_key} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "سر الـ Webhook" : "Webhook Secret"}</Label>
                        <Input
                          type="password"
                          value={fields.webhook_secret || ""}
                          onChange={(e) => handleFieldChange("stripe", "webhook_secret", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["stripe"]?.webhook_secret}
                          aria-invalid={!!fieldErrors["stripe"]?.webhook_secret}
                          placeholder="whsec_..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["stripe"]?.webhook_secret} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "العملة الافتراضية" : "Default Currency"}</Label>
                        <Input
                          value={fields.currency || "AED"}
                          onChange={(e) => handleFieldChange("stripe", "currency", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["stripe"]?.currency}
                          aria-invalid={!!fieldErrors["stripe"]?.currency}
                          placeholder="AED"
                          className="h-9 text-xs"
                        />
                        <FieldError message={fieldErrors["stripe"]?.currency} />
                      </div>
                    </div>
                  )}

                  {method.id === "paymob" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "مفتاح الـ API" : "API Key"}</Label>
                        <Input
                          type="password"
                          value={fields.api_key || ""}
                          onChange={(e) => handleFieldChange("paymob", "api_key", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["paymob"]?.api_key}
                          aria-invalid={!!fieldErrors["paymob"]?.api_key}
                          placeholder="ZXlKaGJHY2lPaUpJVX..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["paymob"]?.api_key} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف التكامل (Integration ID)" : "Integration ID"}</Label>
                        <Input
                          value={fields.integration_id || ""}
                          onChange={(e) => handleFieldChange("paymob", "integration_id", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["paymob"]?.integration_id}
                          aria-invalid={!!fieldErrors["paymob"]?.integration_id}
                          placeholder="e.g. 483921"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["paymob"]?.integration_id} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف الإطار (Iframe ID)" : "Iframe ID"}</Label>
                        <Input
                          value={fields.iframe_id || ""}
                          onChange={(e) => handleFieldChange("paymob", "iframe_id", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["paymob"]?.iframe_id}
                          aria-invalid={!!fieldErrors["paymob"]?.iframe_id}
                          placeholder="e.g. 192834"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["paymob"]?.iframe_id} />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "مفتاح HMAC Secret" : "HMAC Secret"}</Label>
                        <Input
                          type="password"
                          value={fields.hmac_secret || ""}
                          onChange={(e) => handleFieldChange("paymob", "hmac_secret", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["paymob"]?.hmac_secret}
                          aria-invalid={!!fieldErrors["paymob"]?.hmac_secret}
                          placeholder="HMAC secret hash..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["paymob"]?.hmac_secret} />
                      </div>
                    </div>
                  )}

                  {method.id === "paypal" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "معرف العميل (Client ID)" : "Client ID"}</Label>
                        <Input
                          value={fields.client_id || ""}
                          onChange={(e) => handleFieldChange("paypal", "client_id", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["paypal"]?.client_id}
                          aria-invalid={!!fieldErrors["paypal"]?.client_id}
                          placeholder="A219ks82..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["paypal"]?.client_id} />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "السر (Secret)" : "Client Secret"}</Label>
                        <Input
                          type="password"
                          value={fields.client_secret || ""}
                          onChange={(e) => handleFieldChange("paypal", "client_secret", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["paypal"]?.client_secret}
                          aria-invalid={!!fieldErrors["paypal"]?.client_secret}
                          placeholder="ELk19..."
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["paypal"]?.client_secret} />
                      </div>
                    </div>
                  )}

                  {method.id === "bank_transfer" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "اسم البنك" : "Bank Name"}</Label>
                        <Input
                          value={fields.bank_name || ""}
                          onChange={(e) => handleFieldChange("bank_transfer", "bank_name", e.target.value)}
                          error={!!fieldErrors["bank_transfer"]?.bank_name}
                          aria-invalid={!!fieldErrors["bank_transfer"]?.bank_name}
                          placeholder="e.g. Emirates NBD"
                          className="h-9 text-xs"
                        />
                        <FieldError message={fieldErrors["bank_transfer"]?.bank_name} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "اسم صاحب الحساب" : "Account Holder"}</Label>
                        <Input
                          value={fields.account_name || ""}
                          onChange={(e) => handleFieldChange("bank_transfer", "account_name", e.target.value)}
                          error={!!fieldErrors["bank_transfer"]?.account_name}
                          aria-invalid={!!fieldErrors["bank_transfer"]?.account_name}
                          placeholder="e.g. Property Adviser LLC"
                          className="h-9 text-xs"
                        />
                        <FieldError message={fieldErrors["bank_transfer"]?.account_name} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "رقم الآيبان (IBAN)" : "IBAN"}</Label>
                        <Input
                          value={fields.iban || ""}
                          onChange={(e) => handleFieldChange("bank_transfer", "iban", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["bank_transfer"]?.iban}
                          aria-invalid={!!fieldErrors["bank_transfer"]?.iban}
                          placeholder="AE00 0000 0000 0000 0000 00"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["bank_transfer"]?.iban} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "رمز السويفت (SWIFT)" : "SWIFT / BIC"}</Label>
                        <Input
                          value={fields.swift || ""}
                          onChange={(e) => handleFieldChange("bank_transfer", "swift", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["bank_transfer"]?.swift}
                          aria-invalid={!!fieldErrors["bank_transfer"]?.swift}
                          placeholder="EBILAEADXXX"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["bank_transfer"]?.swift} />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "تعليمات التحويل للعميل" : "Payment Instructions"}</Label>
                        <Textarea
                          rows={2}
                          value={fields.instructions || ""}
                          onChange={(e) => handleFieldChange("bank_transfer", "instructions", e.target.value)}
                          error={!!fieldErrors["bank_transfer"]?.instructions}
                          aria-invalid={!!fieldErrors["bank_transfer"]?.instructions}
                          className="text-xs"
                        />
                        <FieldError message={fieldErrors["bank_transfer"]?.instructions} />
                      </div>
                    </div>
                  )}

                  {method.id === "instapay" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "عنوان انستاباي (InstaPay IPA)" : "InstaPay Address (IPA)"}</Label>
                        <Input
                          value={fields.instapay_address || ""}
                          onChange={(e) => handleFieldChange("instapay", "instapay_address", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["instapay"]?.instapay_address}
                          aria-invalid={!!fieldErrors["instapay"]?.instapay_address}
                          placeholder="username@instapay"
                          className="h-9 text-xs font-mono"
                        />
                        <FieldError message={fieldErrors["instapay"]?.instapay_address} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "رقم الهاتف المرتبط" : "Linked Mobile Number"}</Label>
                        <Input
                          value={fields.mobile_number || ""}
                          onChange={(e) => handleFieldChange("instapay", "mobile_number", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["instapay"]?.mobile_number}
                          aria-invalid={!!fieldErrors["instapay"]?.mobile_number}
                          placeholder="+20 100 123 4567"
                          className="h-9 text-xs"
                        />
                        <FieldError message={fieldErrors["instapay"]?.mobile_number} />
                      </div>
                    </div>
                  )}

                  {method.id === "pay_at_office" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label className="text-xs font-semibold">{isRTL ? "عنوان الفرع والمكتب" : "Office Address"}</Label>
                        <Input
                          value={fields.office_address || ""}
                          onChange={(e) => handleFieldChange("pay_at_office", "office_address", e.target.value)}
                          error={!!fieldErrors["pay_at_office"]?.office_address}
                          aria-invalid={!!fieldErrors["pay_at_office"]?.office_address}
                          placeholder="Level 14, Tower 1, Downtown..."
                          className="h-9 text-xs"
                        />
                        <FieldError message={fieldErrors["pay_at_office"]?.office_address} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "ساعات العمل" : "Working Hours"}</Label>
                        <Input
                          value={fields.working_hours || ""}
                          onChange={(e) => handleFieldChange("pay_at_office", "working_hours", e.target.value)}
                          error={!!fieldErrors["pay_at_office"]?.working_hours}
                          aria-invalid={!!fieldErrors["pay_at_office"]?.working_hours}
                          placeholder="Sun - Thu, 9:00 AM - 6:00 PM"
                          className="h-9 text-xs"
                        />
                        <FieldError message={fieldErrors["pay_at_office"]?.working_hours} />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold">{isRTL ? "رقم الهاتف للتنسيق" : "Contact Phone"}</Label>
                        <Input
                          value={fields.contact_phone || ""}
                          onChange={(e) => handleFieldChange("pay_at_office", "contact_phone", e.target.value)}
                          dir="ltr"
                          error={!!fieldErrors["pay_at_office"]?.contact_phone}
                          aria-invalid={!!fieldErrors["pay_at_office"]?.contact_phone}
                          placeholder="+971 4 123 4567"
                          className="h-9 text-xs"
                        />
                        <FieldError message={fieldErrors["pay_at_office"]?.contact_phone} />
                      </div>
                    </div>
                  )}

                  {/* Save Credentials Button */}
                  <div className="pt-2 flex justify-end">
                    <Button
                      size="sm"
                      onClick={() => handleSaveGateway(method.id)}
                      className="h-8 px-3.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer"
                    >
                      <Save className="h-3.5 w-3.5" />
                      <span>{isRTL ? "حفظ الإعدادات" : "Save Credentials"}</span>
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
