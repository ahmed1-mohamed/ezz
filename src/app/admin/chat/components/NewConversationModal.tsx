"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { Loader2, Send, MessageSquarePlus, Tag } from "lucide-react";
import { toast } from "sonner";
import { ModalAttachmentUploader } from "./ModalAttachmentUploader";
import { FieldError } from "@/components/ui/form-message";
import { scrollToFirstInvalidField } from "@/lib/form-utils";

const SUBJECT_MAX_LENGTH = 255;

interface NewConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { subject?: string; body: string; attachment?: File | null }) => void;
  isLoading: boolean;
}

export function NewConversationModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
}: NewConversationModalProps) {
  const { t } = useLanguage();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ subject?: string; body?: string }>({});

  const handleClose = () => {
    if (!isLoading) {
      setSubject("");
      setBody("");
      setAttachment(null);
      setErrors({});
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    const trimmedBody = body.trim();
    const nextErrors: { subject?: string; body?: string } = {};
    if (subject.trim().length > SUBJECT_MAX_LENGTH) {
      nextErrors.subject = t("validation.max_length", { max: SUBJECT_MAX_LENGTH });
    }
    if (!trimmedBody && !attachment) {
      nextErrors.body = t("chat.emptyMessageError");
    }
    setErrors(nextErrors);
    const firstError = nextErrors.subject ?? nextErrors.body;
    if (firstError) {
      toast.error(firstError);
      scrollToFirstInvalidField(e.currentTarget);
      return;
    }

    onSubmit({
      subject: subject.trim() || undefined,
      body: trimmedBody,
      attachment,
    });
  };

  const canSubmit = (body.trim().length > 0 || attachment !== null) && !isLoading;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-100 dark:border-teal-900/40 shadow-xs">
            <MessageSquarePlus className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
              {t("chat.startNewConversation")}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">
              {t("chat.chatsTitle")}
            </p>
          </div>
        </div>
      }
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4 pt-2">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
              {t("chat.subjectOptional")}
            </label>
            <span className="text-[11px] text-gray-400 dark:text-gray-500 font-normal">
              {t("chat.subjectOptional")?.includes("Optional") ? "Optional" : ""}
            </span>
          </div>
          <Input
            placeholder={
              t("chat.subjectPlaceholder")
            }
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
            }}
            disabled={isLoading}
            error={!!errors.subject}
            aria-invalid={!!errors.subject}
            className={`text-sm h-10 bg-gray-50/70 dark:bg-gray-800/70 ${errors.subject ? "" : "border-gray-200 dark:border-gray-700"} text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-teal-500 focus-visible:bg-white dark:focus-visible:bg-gray-800 transition-colors`}
          />
          <FieldError message={errors.subject} />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
            {t("chat.initialMessage")} <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder={
              t("chat.initialMessagePlaceholder")
            }
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              if (errors.body) setErrors((prev) => ({ ...prev, body: undefined }));
            }}
            disabled={isLoading}
            aria-invalid={!!errors.body}
            className={`w-full rounded-xl border ${errors.body ? "border-red-500" : "border-gray-200 dark:border-gray-700"} bg-gray-50/70 dark:bg-gray-800/70 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:bg-white dark:focus-visible:bg-gray-800 disabled:opacity-50 resize-none transition-colors leading-relaxed`}
          />
          <FieldError message={errors.body} />
        </div>

        <ModalAttachmentUploader
          attachment={attachment}
          onAttachmentChange={(file) => {
            setAttachment(file);
            if (file && errors.body) setErrors((prev) => ({ ...prev, body: undefined }));
          }}
          disabled={isLoading}
        />

        <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100 dark:border-gray-800">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isLoading}
            className="text-xs h-9 px-4 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            {t("chat.cancel")}
          </Button>

          <Button
            type="submit"
            disabled={!canSubmit}
            className="bg-teal-600 hover:bg-teal-700 text-white gap-2 text-xs font-semibold h-9 px-5 shadow-xs cursor-pointer disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Send className="h-3.5 w-3.5 rtl:rotate-180" />
            )}
            <span>
              {isLoading
                ? t("chat.creatingConversation")
                : t("chat.startConversation")}
            </span>
          </Button>
        </div>
      </form>
    </Modal>
  );
}