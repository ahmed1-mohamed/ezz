"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  imageName?: string;
}

export function ImageLightboxModal({
  isOpen,
  onClose,
  imageUrl,
  imageName,
}: ImageLightboxModalProps) {
  const { t } = useLanguage();
  const displayName = imageName || t("chat.image");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 transition-all duration-200 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-between gap-4 mb-3 text-white">
          <p className="text-xs font-medium truncate max-w-xs sm:max-w-md text-gray-300">
            {displayName}
          </p>

          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={displayName}
              className="h-8 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{t("chat.download")}</span>
            </a>

            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>{t("chat.openFile")}</span>
            </a>

            <button
              onClick={onClose}
              className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors ms-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 max-h-[80vh] flex items-center justify-center">
          <img
            src={imageUrl}
            alt={imageName}
            className="max-h-[80vh] max-w-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}