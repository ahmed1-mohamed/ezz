"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ContractContentSettings } from "../types";
import {
  SUGGESTED_CONTRACT_ARABIC,
  SUGGESTED_CONTRACT_ENGLISH,
} from "../data/mock-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Save, FileText, RotateCcw, Sparkles } from "lucide-react";
import { FieldError } from "@/components/ui/form-message";
import { cn } from "@/lib/utils";
import { validateLongText } from "../validation";

type TextField = "arabic_text" | "english_text";

interface ContractContentViewProps {
  settings: ContractContentSettings;
  onSave: (val: ContractContentSettings) => void;
}

export function ContractContentView({
  settings,
  onSave,
}: ContractContentViewProps) {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const [form, setForm] = useState(settings);
  const [errors, setErrors] = useState<Partial<Record<TextField, string>>>({});

  const updateField = (field: TextField, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSave = () => {
    const nextErrors: Partial<Record<TextField, string>> = {
      arabic_text: validateLongText(form.arabic_text, t),
      english_text: validateLongText(form.english_text, t),
    };
    setErrors(nextErrors);
    if (nextErrors.arabic_text || nextErrors.english_text) {
      toast.error(t("validation.fillRequiredFields"));
      return;
    }
    onSave(form);
    toast.success(isRTL ? "تم حفظ محتوى العقد بنجاح" : "Contract content saved successfully");
  };

  const handleRestoreArabic = () => {
    updateField("arabic_text", SUGGESTED_CONTRACT_ARABIC);
    toast.info(isRTL ? "تمت استعادة نص العقد العربي المقترح" : "Restored suggested Arabic contract text");
  };

  const handleRestoreEnglish = () => {
    updateField("english_text", SUGGESTED_CONTRACT_ENGLISH);
    toast.info(isRTL ? "تمت استعادة نص العقد الإنجليزي المقترح" : "Restored suggested English contract text");
  };

  return (
    <div className="flex-1 space-y-5 min-w-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {isRTL ? "محتوى العقد" : "Contract Content"}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {isRTL
              ? "جميع بنود العقد المعروضة في صفحة العقد ومستند الطباعة"
              : "All contract clauses shown on the contract page and its printout"}
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

      {/* Suggested Content Notice Banner */}
      <div className="rounded-xl border border-teal-200/70 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/30 p-3.5 flex items-center gap-3">
        <Sparkles className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
        <p className="text-xs text-gray-700 dark:text-gray-300">
          {isRTL
            ? "هذا محتوى مقترح وجاهز ومخصص للقطاع العقاري — يمكنك تعديله ليناسب شركتك. يظهر تلقائيًا في المستندات المطبوعة."
            : "This is ready, real-estate-specific suggested content — edit it to fit your company. It appears automatically on printed documents."}
        </p>
      </div>

      {/* 1. Arabic Text Box */}
      <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
              {isRTL ? "النص العربي" : "Arabic text"}
            </span>
          </div>

          <button
            type="button"
            onClick={handleRestoreArabic}
            className="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>{isRTL ? "استعادة المقترح" : "Restore suggested"}</span>
          </button>
        </div>

        <Textarea
          dir="rtl"
          rows={11}
          value={form.arabic_text}
          onChange={(e) => updateField("arabic_text", e.target.value)}
          error={!!errors.arabic_text}
          aria-invalid={!!errors.arabic_text}
          className={cn(
            "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors",
            !errors.arabic_text && "border-gray-200 dark:border-neutral-800"
          )}
        />
        <FieldError message={errors.arabic_text} />
      </div>

      {/* 2. English Text Box */}
      <div className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
              {isRTL ? "النص الإنجليزي" : "English text"}
            </span>
          </div>

          <button
            type="button"
            onClick={handleRestoreEnglish}
            className="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>{isRTL ? "استعادة المقترح" : "Restore suggested"}</span>
          </button>
        </div>

        <Textarea
          dir="ltr"
          rows={11}
          value={form.english_text}
          onChange={(e) => updateField("english_text", e.target.value)}
          error={!!errors.english_text}
          aria-invalid={!!errors.english_text}
          className={cn(
            "w-full text-xs sm:text-sm leading-relaxed p-3.5 rounded-lg bg-gray-50/40 dark:bg-neutral-950/40 text-gray-800 dark:text-gray-200 font-sans focus:bg-white dark:focus:bg-neutral-900 transition-colors",
            !errors.english_text && "border-gray-200 dark:border-neutral-800"
          )}
        />
        <FieldError message={errors.english_text} />
      </div>
    </div>
  );
}
