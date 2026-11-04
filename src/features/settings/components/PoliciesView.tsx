"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PolicySettings } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Save, ShieldCheck, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { FieldError } from "@/components/ui/form-message";
import { validateLongText } from "../validation";

type PolicyField = "privacy_policy_en" | "privacy_policy_ar" | "terms_of_service_en" | "terms_of_service_ar";
const POLICY_FIELDS: PolicyField[] = ["privacy_policy_en", "privacy_policy_ar", "terms_of_service_en", "terms_of_service_ar"];

interface PoliciesViewProps {
  policies: PolicySettings;
  onSave: (val: PolicySettings) => void;
}

export function PoliciesView({
  policies,
  onSave,
}: PoliciesViewProps) {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const [selectedLang, setSelectedLang] = useState<"en" | "ar">("en");
  const [form, setForm] = useState(policies);
  const [errors, setErrors] = useState<Partial<Record<PolicyField, string>>>({});

  const privacyField: PolicyField = selectedLang === "en" ? "privacy_policy_en" : "privacy_policy_ar";
  const termsField: PolicyField = selectedLang === "en" ? "terms_of_service_en" : "terms_of_service_ar";

  const updateField = (field: PolicyField, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<PolicyField, string>> = {};
    POLICY_FIELDS.forEach((field) => {
      const message = validateLongText(form[field], t);
      if (message) nextErrors[field] = message;
    });
    setErrors(nextErrors);
    const firstInvalid = POLICY_FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      // The other language's text isn't on screen, so switch to where the error is.
      setSelectedLang(firstInvalid.endsWith("_ar") ? "ar" : "en");
      toast.error(t("validation.fillRequiredFields"));
      return;
    }
    onSave(form);
    toast.success(isRTL ? "تم حفظ السياسات بنجاح" : "Policies saved successfully");
  };

  return (
    <div className="flex-1 space-y-5 min-w-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {isRTL ? "السياسات والشروط" : "Policies"}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {isRTL
              ? "سياسة الخصوصية والشروط — تُعرض في الصفحات العامة /privacy و /terms"
              : "Privacy Policy and Terms — shown on the public /privacy and /terms pages"}
          </p>
        </div>

        <Button
          onClick={handleSave}
          className="h-9 px-4 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg shadow-2xs gap-1.5 cursor-pointer self-start sm:self-auto"
        >
          <Save className="h-4 w-4" />
          <span>{isRTL ? "حفظ" : "Save"}</span>
        </Button>
      </div>

      {/* Language Switcher Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedLang("ar")}
          className={cn(
            "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer",
            selectedLang === "ar"
              ? "bg-teal-700 text-white font-semibold shadow-2xs"
              : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
          )}
        >
          العربية
        </button>

        <button
          type="button"
          onClick={() => setSelectedLang("en")}
          className={cn(
            "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer",
            selectedLang === "en"
              ? "bg-teal-700 text-white font-semibold shadow-2xs"
              : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
          )}
        >
          English
        </button>
      </div>

      {/* Card 1: Privacy Policy */}
      <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
            {selectedLang === "en" ? "Privacy Policy · EN" : "سياسة الخصوصية · AR"}
          </span>
        </div>

        <Textarea
          dir={selectedLang === "ar" ? "rtl" : "ltr"}
          rows={11}
          value={form[privacyField]}
          onChange={(e) => updateField(privacyField, e.target.value)}
          error={!!errors[privacyField]}
          aria-invalid={!!errors[privacyField]}
          placeholder={
            selectedLang === "en"
              ? "Write the privacy policy in English..."
              : "اكتب سياسة الخصوصية باللغة العربية..."
          }
          className={cn(
            "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors",
            !errors[privacyField] && "border-gray-200 dark:border-neutral-800"
          )}
        />
        <FieldError message={errors[privacyField]} />
      </div>

      {/* Card 2: Terms & Conditions */}
      <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
            {selectedLang === "en" ? "Terms & Conditions · EN" : "الشروط والأحكام · AR"}
          </span>
        </div>

        <Textarea
          dir={selectedLang === "ar" ? "rtl" : "ltr"}
          rows={11}
          value={form[termsField]}
          onChange={(e) => updateField(termsField, e.target.value)}
          error={!!errors[termsField]}
          aria-invalid={!!errors[termsField]}
          placeholder={
            selectedLang === "en"
              ? "Write the terms & conditions in English..."
              : "اكتب الشروط والأحكام باللغة العربية..."
          }
          className={cn(
            "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors",
            !errors[termsField] && "border-gray-200 dark:border-neutral-800"
          )}
        />
        <FieldError message={errors[termsField]} />
      </div>
    </div>
  );
}
