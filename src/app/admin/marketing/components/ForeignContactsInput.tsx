"use client";

import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload, FileText, X, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { getContactsFileError } from "../utils/campaign-validation";

interface ForeignContactsInputProps {
  type: "email" | "sms" | "whatsapp" | "notification";
  contactsText: string;
  onContactsTextChange: (text: string) => void;
  contactsFile: File | null;
  onContactsFileChange: (file: File | null) => void;
  error?: string;
}

export function ForeignContactsInput({
  type,
  contactsText,
  onContactsTextChange,
  contactsFile,
  onContactsFileChange,
  error,
}: ForeignContactsInputProps) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileError, setFileError] = useState<string | undefined>();

  const isEmail = type === "email";
  const shownError = fileError || error;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) {
      // CSV/TXT only, max 10MB
      const fileValidationError = getContactsFileError(file, t);
      if (fileValidationError) {
        setFileError(fileValidationError);
        toast.error(fileValidationError, { id: "contacts-file-toast" });
        return;
      }

      setFileError(undefined);
      onContactsFileChange(file);
    }
  };

  const handleRemoveFile = () => {
    setFileError(undefined);
    onContactsFileChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="border-gray-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-900 rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-start">
            {isEmail
              ? isRTL
                ? "قائمة البريد الإلكتروني الخارجية / اليدوية"
                : "Foreign / Manual Email Contacts"
              : isRTL
              ? "قائمة أرقام الهواتف الخارجية / اليدوية"
              : "Foreign / Manual Phone Numbers"}
          </h2>
          <span className="text-xs text-gray-400 font-normal">
            {isRTL ? "يدعم إدخال يدوي أو ملف CSV/TXT" : "Supports manual input or CSV/TXT file"}
          </span>
        </div>

        {/* Option 1: File Upload */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 block text-start">
            {isRTL ? "خيار 1: رفع ملف جهات اتصال (CSV أو TXT)" : "Option 1: Upload Contacts File (CSV or TXT)"}
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.txt,text/csv,text/plain"
            className="hidden"
            onChange={handleFileSelect}
          />

          {!contactsFile ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-200 hover:border-teal-500 dark:border-neutral-800 dark:hover:border-teal-500 rounded-xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors bg-gray-50/50 dark:bg-neutral-800/50"
            >
              <div className="p-2.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400">
                <Upload className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {isRTL
                  ? "انقر لرفع ملف (.csv أو .txt) — بحد أقصى 10MB"
                  : "Click to upload (.csv or .txt) — Max 10MB"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center max-w-md">
                {isEmail
                  ? isRTL
                    ? "الصيغ المدعومة: سطر لكل بريد (user@example.com) أو مع الاسم (Name, user@example.com). يتم كشف الترويسة وتنسيق الأقواس وعلامات التنصيص وحذف التكرار تلقائياً."
                    : "Supported: One email per line or with names (Name, email@example.com). Auto-detects headers, trims brackets/quotes, and merges duplicates."
                  : isRTL
                  ? "الصيغ المدعومة: أرقام دولية (+966501234567 أو 00447911123456). يتم التطبيع تلقائياً إلى صيغة E.164 مع إزالة التكرار والمسافات."
                  : "Supported: International numbers (+12025550123 or 00447911123456). Auto-normalized to E.164, stripping non-digits and merging duplicates."}
              </p>
            </div>
          ) : (
            <div className="border border-teal-200 bg-teal-50/30 dark:border-teal-900/40 dark:bg-teal-950/20 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileText className="h-5 w-5 text-teal-600" />
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                    {contactsFile.name}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {(contactsFile.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={handleRemoveFile}
                className="h-7 w-7 text-gray-400 hover:text-red-500"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-gray-200 dark:border-neutral-800" />
          <span className="flex-shrink mx-3 text-xs text-gray-400 font-medium">
            {isRTL ? "أو" : "OR"}
          </span>
          <div className="flex-grow border-t border-gray-200 dark:border-neutral-800" />
        </div>

        {/* Option 2: Manual Textarea Input */}
        <div className="space-y-1.5 text-start">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 block">
            {isRTL
              ? "خيار 2: كتابة أو لصق جهات الاتصال يدوياً"
              : "Option 2: Enter or Paste Contacts Manually"}
          </label>
          <Textarea
            rows={4}
            value={contactsText}
            onChange={(e) => onContactsTextChange(e.target.value)}
            disabled={!!contactsFile}
            dir="ltr"
            error={!!error}
            aria-invalid={!!error}
            placeholder={
              isEmail
                ? isRTL
                  ? "alex@example.com, sarah@invest.sg\njohn.doe@company.com"
                  : "alex@example.com, sarah@invest.sg\njohn.doe@company.com"
                : isRTL
                ? "+966501234567, +971501234567\n+201001234567"
                : "+12025550123, +447911123456\n+966501234567"
            }
            className="text-xs font-mono bg-gray-50/50 hover:bg-white focus:bg-white dark:bg-neutral-800"
          />
          <p className="text-[11px] text-gray-400">
            {isRTL
              ? "يمكنك الفصل بين العناوين/الأرقام بفواصل أو بأسطر جديدة."
              : "Separate contacts by commas or line breaks."}
          </p>
        </div>

        {shownError && (
          <div role="alert" className="flex items-center gap-1.5 text-xs text-red-500 pt-1">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>{shownError}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
