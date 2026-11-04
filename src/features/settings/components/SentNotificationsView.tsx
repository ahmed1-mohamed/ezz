"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { NotificationEventItem } from "../types";
import { INITIAL_NOTIFICATION_EVENTS } from "../data/mock-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Bell, Mail, Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { FieldError } from "@/components/ui/form-message";

const TEMPLATE_MAX = 5000;

export function SentNotificationsView() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";

  const [activeSubTab, setActiveSubTab] = useState<"bell" | "email">("bell");
  const [events, setEvents] = useState<NotificationEventItem[]>(INITIAL_NOTIFICATION_EVENTS);
  const [editingEvent, setEditingEvent] = useState<NotificationEventItem | null>(null);
  const [editErrors, setEditErrors] = useState<Record<string, string>>({});

  const filteredEvents = events.filter((e) => e.channel === activeSubTab);

  const handleToggle = (id: string, checked: boolean) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, enabled: checked } : e))
    );
    toast.success(
      checked
        ? isRTL
          ? "تم تفعيل الإشعار"
          : "Notification enabled"
        : isRTL
        ? "تم تعطيل الإشعار"
        : "Notification disabled"
    );
  };

  const validateEvent = (event: NotificationEventItem): Record<string, string> => {
    const errors: Record<string, string> = {};
    const check = (field: keyof NotificationEventItem, required: boolean, max: number) => {
      const value = String(event[field] ?? "").trim();
      if (!value) {
        if (required) errors[field] = t("validation.required");
      } else if (value.length > max) {
        errors[field] = t("validation.max_length", { max });
      }
    };
    check("title", true, 255);
    check("description", false, 2000);
    if (event.channel === "email") check("email_subject", true, 255);
    check("template", true, TEMPLATE_MAX);
    return errors;
  };

  const updateEditingField = (field: keyof NotificationEventItem, value: string) => {
    setEditingEvent((prev) => (prev ? { ...prev, [field]: value } : prev));
    if (editErrors[field]) {
      setEditErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const openEditor = (event: NotificationEventItem | null) => {
    setEditErrors({});
    setEditingEvent(event);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEvent) return;

    const errors = validateEvent(editingEvent);
    setEditErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setEvents((prev) =>
      prev.map((item) => (item.id === editingEvent.id ? editingEvent : item))
    );
    setEditingEvent(null);
    toast.success(isRTL ? "تم حفظ قالب الإشعار بنجاح" : "Notification template updated successfully");
  };

  return (
    <div className="flex-1 space-y-5 min-w-0">
      {/* Header */}
      <div className="pb-2 border-b border-gray-100 dark:border-neutral-800">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {isRTL ? "الإشعارات والبريد الإلكتروني" : "Notifications & Emails"}
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          {isRTL
            ? "كل ما يتم إرساله تلقائيًا في جرس الإشعارات وعبر البريد الإلكتروني — عدّل النصوص والعناوين وسيتم تطبيقها مباشرة"
            : "Everything sent automatically in the bell and by email — edit the text and title; changes apply to what is actually sent"}
        </p>
      </div>

      {/* Sub-tabs (Bell & Email) */}
      <div className="flex items-center gap-6 border-b border-gray-200 dark:border-neutral-800 pb-px">
        <button
          type="button"
          onClick={() => setActiveSubTab("bell")}
          className={cn(
            "pb-3 text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors relative cursor-pointer",
            activeSubTab === "bell"
              ? "text-teal-700 dark:text-teal-400 font-semibold"
              : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          )}
        >
          <Bell className="h-4 w-4" />
          <span>{isRTL ? "الجرس (داخل النظام)" : "Bell (in-app)"}</span>
          {activeSubTab === "bell" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 dark:bg-teal-400 rounded-full" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab("email")}
          className={cn(
            "pb-3 text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors relative cursor-pointer",
            activeSubTab === "email"
              ? "text-teal-700 dark:text-teal-400 font-semibold"
              : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          )}
        >
          <Mail className="h-4 w-4" />
          <span>{isRTL ? "البريد الإلكتروني" : "Email"}</span>
          {activeSubTab === "email" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 dark:bg-teal-400 rounded-full" />
          )}
        </button>
      </div>

      {/* Notice Banner */}
      <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/30 p-3.5 flex items-center gap-2.5">
        <Bell className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
        <p className="text-xs text-amber-900 dark:text-amber-200">
          {activeSubTab === "bell"
            ? isRTL
              ? "تظهر إشعارات الجرس في أيقونة الإشعارات باللوحة — يتم إطلاقها تلقائيًا عند أحداث النظام (تسجيل، رسالة، اعتماد مطور، رصيد...)."
              : "Bell notifications appear in the dashboard notifications icon — triggered automatically on system events (signup, message, developer approval, credits...)."
            : isRTL
            ? "يتم إرسال رسائل البريد الإلكتروني تلقائيًا عبر خوادم البريد — عدّل عنوان ومحتوى الرسالة بسهولة."
            : "Email notifications sent automatically via SMTP / SendGrid — edit the subject and body template."}
        </p>
      </div>

      {/* List of Notification Event Cards */}
      <div className="space-y-3">
        {filteredEvents.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-2xs space-y-2.5 hover:border-gray-300 dark:hover:border-neutral-700 transition-all"
          >
            {/* Top Row: Title + Description on Left, Switch + Edit Button on Right */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  {isRTL ? item.title_ar || item.title : item.title}
                </h4>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">
                  {isRTL ? item.description_ar || item.description : item.description}
                </span>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <Switch
                  checked={item.enabled}
                  onCheckedChange={(checked) => handleToggle(item.id, checked)}
                />

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openEditor(item)}
                  className="h-8 px-3 text-xs gap-1.5 rounded-lg border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer font-medium"
                >
                  <Pencil className="h-3.5 w-3.5 text-gray-500" />
                  <span>{isRTL ? "تعديل" : "Edit"}</span>
                </Button>
              </div>
            </div>

            {/* Preview Box with Variable Text */}
            <div className="rounded-lg bg-gray-50/80 dark:bg-neutral-950/50 border border-gray-100 dark:border-neutral-800/80 px-3.5 py-2.5">
              {item.channel === "email" && item.email_subject && (
                <div className="text-[11px] font-semibold text-gray-600 dark:text-gray-400 pb-1 mb-1 border-b border-gray-200/50 dark:border-neutral-800">
                  <span className="text-gray-400 dark:text-gray-500">{isRTL ? "الموضوع:" : "Subject:"}</span> {item.email_subject}
                </div>
              )}
              <p className="text-xs text-gray-600 dark:text-gray-300 font-mono leading-relaxed">
                {isRTL ? item.template_ar || item.template : item.template}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Notification Modal */}
      {editingEvent && (
        <Dialog open={!!editingEvent} onOpenChange={(open) => !open && openEditor(null)}>
          <DialogContent className="max-w-lg bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
            <DialogHeader>
              <DialogTitle className="text-base font-bold text-gray-900 dark:text-white">
                {isRTL ? "تعديل قالب الإشعار" : "Edit Notification Template"}
              </DialogTitle>
            </DialogHeader>

            <form noValidate onSubmit={handleSaveEdit} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">{isRTL ? "عنوان الإشعار" : "Notification Title"} <span className="text-red-500">*</span></Label>
                <Input
                  value={editingEvent.title}
                  onChange={(e) => updateEditingField("title", e.target.value)}
                  error={!!editErrors.title}
                  aria-invalid={!!editErrors.title}
                  className="h-9 text-xs"
                />
                <FieldError message={editErrors.title} />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">{isRTL ? "وصف الحدث" : "Event Description"}</Label>
                <Input
                  value={editingEvent.description}
                  onChange={(e) => updateEditingField("description", e.target.value)}
                  error={!!editErrors.description}
                  aria-invalid={!!editErrors.description}
                  className="h-9 text-xs"
                />
                <FieldError message={editErrors.description} />
              </div>

              {editingEvent.channel === "email" && (
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">{isRTL ? "عنوان البريد (Subject)" : "Email Subject"} <span className="text-red-500">*</span></Label>
                  <Input
                    value={editingEvent.email_subject || ""}
                    onChange={(e) => updateEditingField("email_subject", e.target.value)}
                    error={!!editErrors.email_subject}
                    aria-invalid={!!editErrors.email_subject}
                    className="h-9 text-xs"
                  />
                  <FieldError message={editErrors.email_subject} />
                </div>
              )}

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-semibold">{isRTL ? "نص القالب (مع المتغيرات)" : "Template Text"} <span className="text-red-500">*</span></Label>
                  <span className="text-[10px] text-gray-400">
                    {isRTL ? "المتغيرات المتاحة: {name}, {credits}, {package}, {amount}" : "Tags: {name}, {credits}, {package}, {amount}"}
                  </span>
                </div>
                <Textarea
                  rows={4}
                  value={editingEvent.template}
                  onChange={(e) => updateEditingField("template", e.target.value)}
                  error={!!editErrors.template}
                  aria-invalid={!!editErrors.template}
                  className="text-xs font-mono"
                />
                <FieldError message={editErrors.template} />
              </div>

              <DialogFooter className="pt-3 gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => openEditor(null)}
                  className="text-xs"
                >
                  {isRTL ? "إلغاء" : "Cancel"}
                </Button>
                <Button
                  type="submit"
                  className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold"
                >
                  {isRTL ? "حفظ القالب" : "Save Template"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
