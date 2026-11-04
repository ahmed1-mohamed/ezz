"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/safe-image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  ExternalLink,
  Copy,
  Check,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Layers,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

export interface MediaItem {
  media_id?: number;
  media_url?: string;
  url?: string;
  image_url?: string;
  file_path?: string;
  media_type?: string;
  entity_type?: string;
  entity_id?: number;
  is_primary?: number | boolean;
  description?: string | null;
  created_at?: string;
}

interface PropertyMediaProps {
  medias?: (MediaItem | string)[];
  projectMedias?: (MediaItem | string)[];
  propertyName: string;
}

function resolveMediaUrl(m: MediaItem | string | null | undefined): string {
  if (!m) return "";
  const raw = typeof m === "string" ? m : m.media_url || m.url || m.image_url || m.file_path || "";
  if (!raw) return "";
  return raw.trim().replace(/\\+/g, "");
}

export function PropertyMedia({ medias, projectMedias, propertyName }: PropertyMediaProps) {
  const { t } = useLanguage();

  // Normalize all media items from both property and parent project
  const rawMediaList: MediaItem[] = [
    ...(medias ?? []).map((m) =>
      typeof m === "string"
        ? { media_url: resolveMediaUrl(m), media_type: "image", entity_type: "PROPERTIES" }
        : { ...m, media_url: resolveMediaUrl(m), entity_type: m.entity_type || "PROPERTIES" }
    ),
    ...(projectMedias ?? []).map((m) =>
      typeof m === "string"
        ? { media_url: resolveMediaUrl(m), media_type: "image", entity_type: "PROJECTS" }
        : { ...m, media_url: resolveMediaUrl(m), entity_type: m.entity_type || "PROJECTS" }
    ),
  ].filter((m) => !!m.media_url);

  // Deduplicate by media_url
  const seenUrls = new Set<string>();
  const allMediaList: MediaItem[] = [];
  for (const item of rawMediaList) {
    if (item.media_url && !seenUrls.has(item.media_url)) {
      seenUrls.add(item.media_url);
      allMediaList.push(item);
    }
  }

  // Filter image items for the gallery view
  const imageMediaList = allMediaList.filter(
    (m) => (m.media_type || "").toLowerCase() === "image" || !m.media_type
  );
  const displayMediaList = imageMediaList.length > 0 ? imageMediaList : allMediaList;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const activeMedia = displayMediaList[activeIndex] || displayMediaList[0];
  const activeUrl = resolveMediaUrl(activeMedia);

  const handleCopy = (url: string) => {
    if (!url) return;
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    toast.success(t("properties.media.urlCopied"));
    setTimeout(() => {
      setCopiedUrl(null);
    }, 2500);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : displayMediaList.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev < displayMediaList.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="space-y-6">
      {/* ── Main Media Visual Showcase ─────────────────────────────────── */}
      <Card className="overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-xs">
        <CardContent className="p-0">
          {displayMediaList.length > 0 ? (
            <div className="space-y-2">
              {/* Featured Active Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900 group overflow-hidden">
                <SafeImage
                  src={activeUrl}
                  alt={`${propertyName} - ${activeIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  fallbackSrc="/images/default-logo.svg"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Action buttons on top of active image */}
                <div className="absolute top-3 end-3 flex items-center gap-1 z-10 bg-black/40 backdrop-blur-md p-1 rounded-xl border border-white/15 shadow-lg">
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy(activeUrl)}
                    className="h-7 sm:h-8 text-xs text-white hover:bg-white/20 hover:text-white dark:hover:bg-white/20 px-2 sm:px-2.5 gap-1.5 cursor-pointer"
                    title={t("properties.media.copyMediaUrl")}
                  >
                    {copiedUrl === activeUrl ? (
                      <Check className="w-3.5 h-3.5 text-teal-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span className="hidden sm:inline">
                      {copiedUrl === activeUrl ? t("properties.media.copied") : t("properties.media.copyUrl")}
                    </span>
                  </Button>

                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    asChild
                    className="h-7 sm:h-8 text-xs text-white hover:bg-white/20 hover:text-white dark:hover:bg-white/20 px-2 cursor-pointer"
                    title={t("properties.media.openLinkInNewTab")}
                  >
                    <a href={activeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>

                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsLightboxOpen(true)}
                    className="h-7 sm:h-8 text-xs text-white hover:bg-white/20 hover:text-white dark:hover:bg-white/20 px-2 cursor-pointer"
                    title={t("properties.media.expandImage")}
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </Button>
                </div>

                {/* Navigation Arrows for multi-images */}
                {displayMediaList.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute start-3 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer opacity-80 sm:opacity-70 group-hover:opacity-100 z-10"
                      aria-label={t("properties.media.previousImage")}
                    >
                      <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute end-3 top-1/2 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer opacity-80 sm:opacity-70 group-hover:opacity-100 z-10"
                      aria-label={t("properties.media.nextImage")}
                    >
                      <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                    </button>
                  </>
                )}

                {/* Bottom Bar on Featured Image: Index & Badges */}
                <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white text-xs z-10 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-black/60 text-white border-none backdrop-blur-sm text-[11px] px-2 py-0.5">
                      {activeIndex + 1} / {displayMediaList.length}
                    </Badge>
                    {activeMedia?.is_primary === 1 && (
                      <Badge className="bg-teal-600 text-white border-none text-[11px] px-2 py-0.5">
                        {t("properties.media.primary")}
                      </Badge>
                    )}
                  </div>

                  <span
                    className="hidden sm:inline-block text-[11px] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md truncate max-w-[280px] md:max-w-[400px] font-mono select-all pointer-events-auto cursor-pointer hover:bg-black/80 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(activeUrl);
                    }}
                    title={activeUrl}
                  >
                    {activeUrl}
                  </span>
                </div>
              </div>

              {/* Thumbnails Strip */}
              {displayMediaList.length > 1 && (
                <div className="flex items-center gap-2 p-2 overflow-x-auto pb-2 scrollbar-thin">
                  {displayMediaList.map((media, index) => {
                    const u = resolveMediaUrl(media);
                    const isSelected = index === activeIndex;

                    return (
                      <button
                        key={media.media_id ?? index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`relative w-16 sm:w-24 aspect-[4/3] shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${isSelected
                            ? "border-teal-500 ring-2 ring-teal-500/20 shadow-xs scale-[1.02]"
                            : "border-transparent opacity-70 hover:opacity-100 hover:border-gray-300 dark:hover:border-neutral-700"
                          }`}
                      >
                        <SafeImage
                          src={u}
                          alt={t("properties.media.thumbnailAlt", { index: index + 1 })}
                          fill
                          className="object-cover"
                          fallbackSrc="/images/default-logo.svg"
                          sizes="96px"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="aspect-[16/10] sm:aspect-[16/9] bg-muted/30 dark:bg-neutral-800/30 flex flex-col items-center justify-center rounded-lg text-center p-6">
              <Building2 className="h-14 w-14 text-muted-foreground/30 mb-2" />
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {t("properties.media.noMedia")}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ── Media Assets & URLs Detail Section ─────────────────────────── */}
      {allMediaList.length > 0 && (
        <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-gray-100 dark:border-neutral-800/80">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400">
                <ImageIcon className="w-4 h-4" />
              </div>
              <div>
                <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {t("properties.media.mediaUrlsTitle")}
                </CardTitle>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t("properties.media.mediaUrlsSubtitle")}
                </p>
              </div>
            </div>

            <Badge variant="outline" className="text-xs">
              <Layers className="w-3 h-3 me-1" />
              {allMediaList.length} {t("properties.media.assets")}
            </Badge>
          </CardHeader>

          <CardContent className="p-3 sm:p-4 space-y-2.5">
            {allMediaList.map((media, index) => {
              const url = resolveMediaUrl(media);
              const isCopied = copiedUrl === url;
              const isPrimary = media.is_primary === 1 || media.is_primary === true;
              const mediaType = media.media_type || "image";

              return (
                <div
                  key={media.media_id ?? index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 dark:border-neutral-800 bg-gray-50/70 dark:bg-neutral-800/40 hover:border-gray-200 dark:hover:border-neutral-700 transition-colors"
                >
                  {/* Left: Thumbnail and Media Metadata */}
                  <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-700 shrink-0 border border-gray-200 dark:border-neutral-700">
                      <SafeImage
                        src={url}
                        alt={t("properties.media.mediaAlt", { id: media.media_id ?? index + 1 })}
                        fill
                        className="object-cover"
                        fallbackSrc="/images/default-logo.svg"
                        sizes="56px"
                      />
                    </div>

                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {media.media_id && (
                          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                            #{media.media_id}
                          </span>
                        )}
                        <Badge
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0 h-4 uppercase tracking-wider font-semibold"
                        >
                          {mediaType}
                        </Badge>
                        {isPrimary && (
                          <Badge className="bg-teal-600 text-white text-[10px] px-1.5 py-0 h-4">
                            {t("properties.media.primary")}
                          </Badge>
                        )}
                        {media.entity_type === "PROJECTS" && (
                          <Badge
                            variant="outline"
                            className="text-[10px] px-1.5 py-0 h-4 border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300 bg-teal-50/50 dark:bg-teal-950/40"
                          >
                            {t("properties.media.project")}
                          </Badge>
                        )}
                        {media.created_at && (
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 hidden sm:inline">
                            {new Date(media.created_at).toLocaleDateString()}
                          </span>
                        )}
                      </div>

                      {/* URL Display */}
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-[10px] sm:text-[11px] font-semibold text-gray-400 shrink-0">
                          media_url:
                        </span>
                        <code
                          className="text-xs text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border border-teal-200/50 dark:border-teal-800/50 px-2 py-0.5 rounded font-mono truncate select-all flex-1 min-w-0 cursor-pointer"
                          onClick={() => handleCopy(url)}
                          title={url}
                        >
                          {url}
                        </code>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-neutral-800 w-full sm:w-auto justify-end">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopy(url)}
                      className="h-8 text-xs px-2.5 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 cursor-pointer gap-1"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{isCopied ? t("properties.media.copied") : t("properties.media.copy")}</span>
                    </Button>

                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-8 text-xs px-2 hover:bg-white dark:hover:bg-neutral-800 cursor-pointer text-gray-600 dark:text-gray-300"
                      title={t("properties.media.openUrl")}
                    >
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {/* ── Fullscreen Lightbox Dialog ─────────────────────────────────── */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl w-full p-4 dark:bg-neutral-900 dark:border-neutral-800">
          <DialogHeader className="flex flex-row items-center justify-between pb-2 border-b border-gray-100 dark:border-neutral-800">
            <DialogTitle className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 truncate pe-6">
              {propertyName} - {activeIndex + 1} / {displayMediaList.length}
            </DialogTitle>
          </DialogHeader>

          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/90 mt-2">
            <SafeImage
              src={activeUrl}
              alt={t("properties.media.fullSizeAlt")}
              fill
              className="object-contain"
              fallbackSrc="/images/default-logo.svg"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100 dark:border-neutral-800 mt-2">
            <p className="text-xs text-gray-500 font-mono truncate select-all max-w-md">
              {activeUrl}
            </p>
            <div className="flex items-center gap-1.5 shrink-0">
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => handleCopy(activeUrl)}
                className="h-8 text-xs dark:border-neutral-700"
              >
                {copiedUrl === activeUrl ? (
                  <Check className="w-3.5 h-3.5 text-teal-600 me-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 me-1" />
                )}
                {copiedUrl === activeUrl ? t("properties.media.copied") : t("properties.media.copyUrl")}
              </Button>
              <Button type="button" size="sm" asChild className="h-8 text-xs bg-teal-600 hover:bg-teal-700 text-white">
                <a href={activeUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 me-1" />
                  {t("properties.media.openOriginal")}
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

