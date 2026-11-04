"use client";

import { useRef, useCallback } from "react";
import { Send, Paperclip, X, FileText, Image as ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface ChatInputProps {
  messageInput: string;
  setMessageInput: (value: string) => void;
  attachment: File | null;
  setAttachment: (file: File | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
}

const ALLOWED_EXTENSIONS = ["jpeg", "jpg", "png", "pdf", "doc", "docx"];
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export function ChatInput({
  messageInput,
  setMessageInput,
  attachment,
  setAttachment,
  onSubmit,
  isPending,
}: ChatInputProps) {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      toast.error(
        t("chat.invalidFileType")
      );
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      toast.error(t("chat.fileTooLarge"));
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setAttachment(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeAttachment = () => {
    setAttachment(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if ((messageInput.trim().length > 0 || attachment !== null) && !isPending) {
          onSubmit(e as any);
        }
      }
    },
    [messageInput, attachment, isPending, onSubmit]
  );

  const isImageAttachment = attachment?.type.startsWith("image/");
  const canSubmit = (messageInput.trim().length > 0 || attachment !== null) && !isPending;

  return (
    <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-2.5 sm:p-3.5 flex-shrink-0">
      {attachment && (
        <div className="mb-2.5 flex items-center gap-2 p-2 bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 rounded-xl max-w-fit shadow-2xs animate-in zoom-in-95">
          <div className="p-1.5 bg-teal-600 text-white rounded-lg">
            {isImageAttachment ? (
              <ImageIcon className="h-4 w-4" />
            ) : (
              <FileText className="h-4 w-4" />
            )}
          </div>
          <div className="text-xs">
            <p className="font-semibold text-gray-900 dark:text-white max-w-[160px] sm:max-w-[220px] truncate">
              {attachment.name}
            </p>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">
              {formatFileSize(attachment.size)}
            </p>
          </div>
          <button
            type="button"
            onClick={removeAttachment}
            className="p-1 text-gray-400 hover:text-red-500 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors ms-1"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <form onSubmit={onSubmit} className="flex items-center gap-1.5 sm:gap-2">
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpeg,.jpg,.png,.pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
          id="chat-file-attachment-input"
        />

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => fileInputRef.current?.click()}
          disabled={isPending}
          className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/40 border-gray-200 dark:border-gray-700 cursor-pointer rounded-xl"
          title={t("chat.attachFile")}
        >
          <Paperclip className="h-4 w-4" />
        </Button>

        <div className="flex-1 min-w-0">
          <input
            placeholder={t("chat.writeReply")}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isPending}
            className="w-full bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 h-9 sm:h-10 px-3.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-gray-800 transition-colors"
          />
        </div>

        <Button
          type="submit"
          disabled={!canSubmit}
          className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4 flex-shrink-0 shadow-xs cursor-pointer disabled:opacity-50 rounded-xl"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4 rtl:rotate-180" />
          )}
          <span className="hidden sm:inline text-xs font-semibold">
            {t("chat.sendMessage")}
          </span>
        </Button>
      </form>
    </div>
  );
}