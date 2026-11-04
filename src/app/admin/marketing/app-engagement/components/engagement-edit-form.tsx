"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FieldError } from "@/components/ui/form-message";
import { scrollToFirstInvalidField } from "@/lib/form-utils";
import { validateEngagementTemplate, type EngagementTemplateErrors } from "../engagement-validation";

interface TriggeredTemplate {
  id: string;
  titleAr: string;
  titleEn: string;
  event: string;
  subject: string;
  body: string;
  actionLink: string;
  active: boolean;
  iconType?: "home" | "heart" | "flame" | "party" | "chart" | "none";
}

interface EngagementEditFormProps {
  template: TriggeredTemplate;
  onSave: (id: string, updatedFields: Partial<TriggeredTemplate>) => void;
  onCancel: () => void;
  language: string;
  t: (key: string, values?: Record<string, string | number>) => string;
}

const SHORT_CODES = [
  "{{roi}}",
  "{{days}}",
  "{{time}}",
  "{{date}}",
  "{{location}}",
  "{{new_price}}",
  "{{old_price}}",
  "{{property_name}}",
  "{{name}}"
];

export default function EngagementEditForm({
  template,
  onSave,
  onCancel,
  language,
  t
}: EngagementEditFormProps) {
  const isRTL = language === "ar";

  const [titleAr, setTitleAr] = useState(template.titleAr);
  const [titleEn, setTitleEn] = useState(template.titleEn);
  const [subject, setSubject] = useState(
    template.subject.startsWith("SUBJECT ") ? template.subject.replace("SUBJECT ", "") : template.subject
  );
  const [body, setBody] = useState(template.body);
  const [actionLink, setActionLink] = useState(template.actionLink);
  const [errors, setErrors] = useState<EngagementTemplateErrors>({});

  const clearError = (field: keyof EngagementTemplateErrors) =>
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });

  const handleInsertShortcode = (code: string) => {
    const textarea = document.getElementById(`textarea-${template.id}`) as HTMLTextAreaElement;
    if (!textarea) {
      setBody((prev) => prev + code);
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const newText = text.substring(0, start) + code + text.substring(end);
    setBody(newText);
    clearError("body");

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + code.length, start + code.length);
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateEngagementTemplate({ subject, body, actionLink }, t);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      scrollToFirstInvalidField(e.currentTarget);
      return;
    }

    const updatedSubject = template.subject.includes("SUBJECT ")
      ? `SUBJECT ${subject.trim()}`
      : subject.trim();

    onSave(template.id, {
      titleAr: titleAr.trim(),
      titleEn: titleEn.trim(),
      subject: updatedSubject,
      body: body.trim(),
      actionLink: actionLink.trim()
    });
  };

  return (
    <Card className="border-teal-500/30 dark:border-teal-500/20 bg-teal-50/5 dark:bg-teal-950/5 shadow-md rounded-xl overflow-hidden text-start">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 dark:hover:bg-neutral-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100/60 text-teal-800 dark:bg-teal-950 dark:text-teal-400">
              {template.event}
            </span>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 text-base">
              {isRTL ? template.titleAr : template.titleEn}
            </h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 block text-start">
                CTA Button Text
              </label>
              <Input
                type="text"
                value={actionLink}
                onChange={(e) => {
                  setActionLink(e.target.value);
                  clearError("actionLink");
                }}
                placeholder="e.g. Complete Profile"
                error={!!errors.actionLink}
                aria-invalid={!!errors.actionLink}
                className={`bg-white dark:bg-neutral-950 ${errors.actionLink ? "" : "border-gray-200 dark:border-neutral-800"}`}
              />
              <FieldError message={errors.actionLink} />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 block text-start">
                Subject Line
              </label>
              <Input
                type="text"
                required
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  clearError("subject");
                }}
                placeholder="e.g. Complete Your Profile"
                error={!!errors.subject}
                aria-invalid={!!errors.subject}
                className={`bg-white dark:bg-neutral-950 ${errors.subject ? "" : "border-gray-200 dark:border-neutral-800"}`}
              />
              <FieldError message={errors.subject} />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 block text-start">
              Message Body
            </label>
            <textarea
              id={`textarea-${template.id}`}
              required
              rows={4}
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                clearError("body");
              }}
              placeholder="Write template message body here..."
              aria-invalid={!!errors.body}
              className={`w-full p-3 border ${errors.body ? "border-red-500" : "border-gray-200 dark:border-neutral-800"} bg-white dark:bg-neutral-950 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500`}
            />
            <FieldError message={errors.body} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400 font-medium">
                {isRTL ? "انقر للإدراج — SHORT CODES" : "Click to insert — SHORT CODES"}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 justify-end">
              {SHORT_CODES.map((code) => (
                <button
                  type="button"
                  key={code}
                  onClick={() => handleInsertShortcode(code)}
                  className="px-2.5 py-1 text-xs font-semibold bg-teal-50/50 hover:bg-teal-50 text-teal-700 border border-teal-100/50 rounded-lg dark:bg-teal-950/20 dark:hover:bg-teal-950/50 dark:text-teal-400 dark:border-teal-900 transition-colors font-mono"
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 justify-start">
            <Button
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-5 py-2 rounded-lg text-xs transition-colors"
            >
              {t("marketingAppEngagement.modal.save")}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-900 font-bold px-5 py-2 rounded-lg text-xs"
            >
              {t("marketingAppEngagement.modal.cancel")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}