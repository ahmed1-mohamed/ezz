"use client";

import { memo, useState } from "react";
import { FileText, Download, CheckCheck, Check, ZoomIn, Image as ImageIcon } from "lucide-react";
import { SupportMessage } from "@/data/api/services/chat.service";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalBlobUrl } from "../utils/localAttachmentCache";
import { isMessageMarkedAsRead } from "../utils/chatReadPersistence";
import { BASE_URL } from "@/data/config";

interface ChatMessageItemProps {
  message: SupportMessage;
  isOwn: boolean;
  formatTime: (dateString: string) => string;
  onPreviewImage: (url: string, name: string) => void;
}

export const ChatMessageItem = memo(function ChatMessageItem({
  message,
  isOwn,
  formatTime,
  onPreviewImage,
}: ChatMessageItemProps) {
  const { t } = useLanguage();
  const text = message.body || message.message_text;

  const isImageFile = (url?: string | null, name?: string | null) => {
    const rawType = (
      message.file_type ||
      (typeof message.attachment === "object" ? message.attachment?.mime_type : "") ||
      ""
    ).toLowerCase();

    if (rawType.startsWith("image/") || rawType.includes("image")) return true;

    const targetUrl = (url || "").toLowerCase();
    if (targetUrl.startsWith("data:image/")) return true;

    const targetName = (
      name ||
      message.file_name ||
      (typeof message.attachment === "object" ? message.attachment?.file_name : "") ||
      ""
    ).toLowerCase();

    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".bmp", ".ico", ".avif", ".heic"];
    const hasImageExt = imageExtensions.some((ext) => targetName.endsWith(ext) || targetUrl.includes(ext));
    if (hasImageExt) return true;

    if (targetUrl.startsWith("blob:")) {
      return true;
    }

    return false;
  };

  const getAttachmentUrl = (): string | null => {
    const msgId = message.id ?? message.message_id;
    const cachedByMsgId = getLocalBlobUrl(msgId);
    if (cachedByMsgId) return cachedByMsgId;

    let url: string | null = null;
    if (typeof message.attachment === "string") {
      url = message.attachment;
    } else if (typeof message.attachment === "object" && message.attachment) {
      url =
        message.attachment.url ||
        message.attachment.file_url ||
        message.attachment.original_url ||
        message.attachment.path ||
        (message.attachment as any).file_path ||
        null;
    }

    if (!url && message.attachment_url) url = message.attachment_url;
    if (!url && message.file_url) url = message.file_url;
    if (!url && (message as any).url) url = (message as any).url;
    if (!url && (message as any).photo_url) url = (message as any).photo_url;
    if (!url && (message as any).image_url) url = (message as any).image_url;
    if (!url && (message as any).media_url) url = (message as any).media_url;

    if (!url && typeof (message as any).file === "string") {
      url = (message as any).file;
    } else if (!url && typeof (message as any).file === "object" && (message as any).file) {
      const f = (message as any).file;
      url = f.url || f.file_url || f.path || f.original_url;
    }

    if (!url && typeof (message as any).photo === "string") url = (message as any).photo;

    if (!url && Array.isArray((message as any).attachments) && (message as any).attachments.length > 0) {
      const first = (message as any).attachments[0];
      url = typeof first === "string" ? first : (first?.url || first?.file_url || first?.path || first?.original_url);
    }

    if (!url && Array.isArray((message as any).media) && (message as any).media.length > 0) {
      const first = (message as any).media[0];
      url = typeof first === "string" ? first : (first?.url || first?.original_url || first?.file_url || first?.path);
    }

    const cachedByUrl = getLocalBlobUrl(url);
    if (cachedByUrl) return cachedByUrl;

    const cachedByName = getLocalBlobUrl(message.file_name || (typeof message.attachment === "object" ? message.attachment?.file_name : null));
    if (cachedByName) return cachedByName;

    if (url && typeof url === "string") {
      if (
        url.startsWith("http://") ||
        url.startsWith("https://") ||
        url.startsWith("blob:") ||
        url.startsWith("data:")
      ) {
        return url;
      }
      const cleanPath = url.startsWith("/") ? url : `/${url}`;
      return `${BASE_URL}${cleanPath}`;
    }
    return null;
  };

  const getAttachmentName = (url: string | null): string => {
    if (typeof message.attachment === "object" && message.attachment?.file_name) {
      return message.attachment.file_name;
    }
    if (message.file_name) return message.file_name;
    if ((message as any).name) return (message as any).name;
    if (url) {
      if (url.startsWith("blob:")) return t("chat.image");
      const cleanUrl = url.split("?")[0];
      const parts = cleanUrl.split("/");
      return parts[parts.length - 1] || "attachment";
    }
    return "attachment";
  };

  const attachmentUrl = getAttachmentUrl();
  const attachmentName = getAttachmentName(attachmentUrl);
  const isImage = attachmentUrl ? isImageFile(attachmentUrl, attachmentName) : false;

  const [hasImageError, setHasImageError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!attachmentUrl) return;

    if (attachmentUrl.startsWith("blob:") || attachmentUrl.startsWith("data:")) {
      const link = document.createElement("a");
      link.href = attachmentUrl;
      link.download = attachmentName || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    try {
      setIsDownloading(true);
      const res = await fetch(attachmentUrl, { mode: "cors" });
      if (res.ok) {
        const blob = await res.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = attachmentName || "download";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
        return;
      }
    } catch {
    } finally {
      setIsDownloading(false);
    }

    window.open(attachmentUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} group`}>
      <div className="max-w-[85%] sm:max-w-md md:max-w-lg transition-all">
        {!isOwn && (
          <div className="flex items-center gap-1.5 mb-0.5 px-1">
            <span className="text-[11px] font-semibold text-teal-700 dark:text-teal-400">
              {message.sender?.name ||
                (message.sender?.first_name
                  ? `${message.sender.first_name} ${message.sender.last_name || ""}`.trim()
                  : null) ||
                t("chat.supportAgent")}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-normal">
              {formatTime(message.created_at)}
            </span>
          </div>
        )}

        <div
          className={`rounded-xl px-3 py-2 sm:px-3.5 sm:py-2 shadow-2xs transition-all ${isOwn
            ? "bg-gradient-to-tr from-teal-600 to-teal-500 text-white rounded-ee-xs"
            : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200/60 dark:border-gray-800/60 rounded-es-xs"
            }`}
        >
          {text && (
            <p className="text-[13px] sm:text-[13.5px] whitespace-pre-wrap break-words leading-relaxed selection:bg-teal-200 dark:selection:bg-teal-800 selection:text-teal-900 dark:selection:text-teal-100">
              {text}
            </p>
          )}

          {attachmentUrl && (
            <div
              className={`${text ? "mt-2 pt-1.5 border-t" : ""} ${isOwn ? "border-teal-500/50" : "border-gray-100 dark:border-gray-800/50"
                }`}
            >
              {isImage && !hasImageError ? (
                <div
                  onClick={() => onPreviewImage(attachmentUrl, attachmentName)}
                  className="relative group/img overflow-hidden rounded-lg cursor-pointer border border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/20"
                >
                  <img
                    src={attachmentUrl}
                    alt={attachmentName}
                    loading="lazy"
                    onError={() => setHasImageError(true)}
                    className="max-h-56 sm:max-h-64 w-full object-cover rounded-lg group-hover/img:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                    <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-xs">
                      <ZoomIn className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  onClick={handleDownload}
                  className={`flex items-center gap-2.5 p-2 rounded-lg border transition-all cursor-pointer ${isOwn
                    ? "bg-teal-700/40 border-teal-400/30 text-white hover:bg-teal-700/60"
                    : "bg-gray-50 dark:bg-gray-800/60 border-gray-200/70 dark:border-gray-700/60 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  <div
                    className={`p-1.5 rounded-md ${isOwn
                      ? "bg-teal-800 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                  >
                    {isImage ? <ImageIcon className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">{attachmentName}</p>
                    <p
                      className={`text-[10px] ${isOwn ? "text-teal-200" : "text-gray-400 dark:text-gray-500"
                        }`}
                    >
                      {isDownloading ? t("chat.downloading") : t("chat.downloadFile")}
                    </p>
                  </div>
                  <Download className="h-3.5 w-3.5 flex-shrink-0 opacity-80 group-hover:opacity-100" />
                </div>
              )}
            </div>
          )}
        </div>

        {isOwn && (
          <div className="flex items-center justify-end gap-1 mt-0.5 px-1">
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
              {formatTime(message.created_at)}
            </span>
            {isMessageMarkedAsRead(message.conversation_id, message) ? (
              <CheckCheck className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 transition-colors" />
            ) : (
              <Check className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500 transition-colors" />
            )}
          </div>
        )}
      </div>
    </div>
  );
});