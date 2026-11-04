"use client";

import { useState } from "react";
import { LayoutTemplate, ZoomIn, Copy, Check, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SafeImage } from "@/components/ui/safe-image";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface PropertyFloorPlanProps {
  floorPlanUrl?: string | null;
}

export function PropertyFloorPlan({ floorPlanUrl }: PropertyFloorPlanProps) {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const cleanUrl = floorPlanUrl ? floorPlanUrl.trim().replace(/\\+/g, "") : null;
  if (!cleanUrl) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanUrl);
    setIsCopied(true);
    toast.success(t("properties.floorPlan.urlCopied"));
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <>
      <Card className="border border-gray-200 dark:border-neutral-800 shadow-xs overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between gap-2 pb-3 border-b border-gray-100 dark:border-neutral-800/80">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
              <LayoutTemplate className="h-4 w-4" />
            </div>
            <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {t("properties.create.floorPlan.title")}
            </CardTitle>
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="h-8 text-xs gap-1.5 cursor-pointer dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800"
            >
              {isCopied ? (
                <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">
                {isCopied ? t("properties.media.copied") : t("properties.media.copyUrl")}
              </span>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              asChild
              className="h-8 text-xs px-2 cursor-pointer dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800"
              title={t("properties.floorPlan.openInNewTab")}
            >
              <a href={cleanUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-5 space-y-3">
          <button
            type="button"
            onClick={() => setIsDialogOpen(true)}
            className="group relative w-full overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50/60 dark:bg-neutral-800/40 cursor-zoom-in transition-all hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-md block"
            title={t("properties.floorPlan.clickToExpandTitle")}
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
              <SafeImage
                src={cleanUrl}
                alt={t("properties.create.floorPlan.title")}
                fill
                className="object-contain p-3 sm:p-4"
                fallbackSrc="/images/default-logo.svg"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 dark:group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 dark:bg-neutral-900/95 rounded-full p-2.5 shadow-lg backdrop-blur-xs flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-gray-200">
                <ZoomIn className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                <span>{t("properties.floorPlan.expandPlan")}</span>
              </div>
            </div>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-500 pt-1">
            <span className="text-[11px] text-gray-400 dark:text-gray-500">
              {t("properties.floorPlan.clickToExpand")}
            </span>
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-[11px] font-semibold text-gray-400 shrink-0">URL:</span>
              <code
                className="font-mono text-[11px] text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border border-teal-200/50 dark:border-teal-800/50 px-2 py-0.5 rounded truncate max-w-[260px] sm:max-w-xs md:max-w-md select-all cursor-pointer"
                onClick={handleCopy}
                title={cleanUrl}
              >
                {cleanUrl}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-4 sm:p-6 dark:bg-neutral-900 dark:border-neutral-800">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100 text-base sm:text-lg">
              <LayoutTemplate className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              {t("properties.create.floorPlan.title")}
            </DialogTitle>
          </DialogHeader>

          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-gray-50 dark:bg-neutral-800/80 mt-2 border border-gray-100 dark:border-neutral-800">
            <SafeImage
              src={cleanUrl}
              alt={t("properties.floorPlan.fullSizeAlt")}
              fill
              className="object-contain p-2 sm:p-4"
              fallbackSrc="/images/default-logo.svg"
              sizes="(max-width: 1200px) 95vw, 1200px"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-neutral-800 mt-2">
            <code className="text-xs font-mono text-gray-500 truncate max-w-sm sm:max-w-md select-all">
              {cleanUrl}
            </code>
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={handleCopy}
                className="h-8 text-xs dark:border-neutral-700"
              >
                {isCopied ? (
                  <Check className="w-3.5 h-3.5 text-teal-600 me-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 me-1" />
                )}
                {isCopied ? t("properties.media.copied") : t("properties.media.copyUrl")}
              </Button>
              <Button
                type="button"
                size="sm"
                asChild
                className="h-8 text-xs bg-teal-600 hover:bg-teal-700 text-white"
              >
                <a href={cleanUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 me-1" />
                  {t("properties.media.openOriginal")}
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
