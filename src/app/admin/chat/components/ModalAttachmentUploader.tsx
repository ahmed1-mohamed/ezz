"use client";

import { useState, useRef, useEffect, DragEvent } from "react";
import {
  X,
  FileText,
  Image as ImageIcon,
  UploadCloud,
  CheckCircle,
  FileSpreadsheet,
  File as GenericFileIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface ModalAttachmentUploaderProps {
  attachment: File | null;
  onAttachmentChange: (file: File | null) => void;
  disabled?: boolean;
}

const ALLOWED_EXTENSIONS = ["jpeg", "jpg", "png", "pdf", "doc", "docx"];
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export function ModalAttachmentUploader({
  attachment,
  onAttachmentChange,
  disabled = false,
}: ModalAttachmentUploaderProps) {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (attachment && attachment.type.startsWith("image/")) {
      const url = URL.createObjectURL(attachment);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [attachment]);

  const processSelectedFile = (file: File) => {
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

    onAttachmentChange(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processSelectedFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      processSelectedFile(file);
    }
  };

  const removeAttachment = () => {
    onAttachmentChange(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (file: File) => {
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (["jpg", "jpeg", "png"].includes(ext)) {
      return <ImageIcon className="h-5 w-5 text-teal-600" />;
    }
    if (["pdf"].includes(ext)) {
      return <FileText className="h-5 w-5 text-red-500" />;
    }
    if (["doc", "docx"].includes(ext)) {
      return <FileSpreadsheet className="h-5 w-5 text-blue-500" />;
    }
    return <GenericFileIcon className="h-5 w-5 text-gray-500" />;
  };

  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
        {t("chat.attachmentOptional")}
      </label>

      <input
        ref={fileInputRef}
        type="file"
        accept=".jpeg,.jpg,.png,.pdf,.doc,.docx"
        onChange={handleFileChange}
        disabled={disabled}
        className="hidden"
        id="modal-attachment-file-input"
      />

      {!attachment ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !disabled && fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-1.5 ${isDragging
            ? "border-teal-500 bg-teal-50/70 dark:bg-teal-950/40 scale-[0.99]"
            : "border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500 hover:bg-teal-50/30 dark:hover:bg-teal-950/20 bg-gray-50/50 dark:bg-gray-800/40"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <div className="h-9 w-9 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center">
            <UploadCloud className="h-5 w-5" />
          </div>
          <div className="text-xs">
            <span className="font-semibold text-teal-600 dark:text-teal-400 hover:underline">
              {t("chat.clickToUpload")}
            </span>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              {t("chat.orDragAndDrop")}
            </span>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            {t("chat.fileTypesLimit")}
          </p>
        </div>
      ) : (
        <div className="relative border border-teal-200 dark:border-teal-800/60 bg-teal-50/50 dark:bg-teal-950/30 rounded-xl p-3 flex items-center gap-3">
          {previewUrl ? (
            <div className="h-14 w-14 rounded-lg overflow-hidden border border-teal-200 dark:border-teal-800 flex-shrink-0 bg-white dark:bg-gray-800">
              <img
                src={previewUrl}
                alt={attachment.name}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="h-12 w-12 rounded-lg bg-white dark:bg-gray-800 border border-teal-200 dark:border-teal-800 flex items-center justify-center flex-shrink-0">
              {getFileIcon(attachment)}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                {attachment.name}
              </p>
              <CheckCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
              <span>{formatFileSize(attachment.size)}</span>
              <span>•</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                {t("chat.readyToSend")}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={removeAttachment}
            disabled={disabled}
            className="h-8 w-8 rounded-lg text-gray-400 hover:text-red-500 hover:bg-white dark:hover:bg-gray-800 transition-colors flex items-center justify-center border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            title={t("chat.removeAttachment")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}