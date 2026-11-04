"use client";

import NextImage, { ImageProps } from "next/image";
import { useState } from "react";
import { BASE_URL } from "@/data/config";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src: string | null | undefined;
  fallbackSrc?: string;
};

export function SafeImage({
  src,
  fallbackSrc = "/images/default-avatar.svg",
  alt,
  ...props
}: SafeImageProps) {
  const getFullUrl = (url: string | null | undefined) => {
    if (!url || url === "U" || url.trim() === "") return fallbackSrc;
    // Strip escaped slashes and backslashes (e.g. https:\/\/storage.googleapis.com\/...)
    const clean = url.trim().replace(/\\+/g, "");
    if (!clean) return fallbackSrc;

    let finalUrl = clean;
    if (
      clean.startsWith("http://") ||
      clean.startsWith("https://") ||
      clean.startsWith("data:") ||
      clean.startsWith("blob:") ||
      (clean.startsWith("/") && !clean.startsWith("/storage") && !clean.startsWith("/uploads"))
    ) {
      finalUrl = clean;
    } else {
      const formatted = clean.startsWith("/") ? clean : `/${clean}`;
      finalUrl = `${BASE_URL}${formatted}`;
    }

    try {
      return encodeURI(decodeURI(finalUrl));
    } catch {
      try {
        return encodeURI(finalUrl);
      } catch {
        return finalUrl;
      }
    }
  };

  const resolvedSrc = getFullUrl(src);
  // Remember which resolved src failed so a new src is tried again without a sync effect.
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const imageSrc = failedSrc === resolvedSrc ? fallbackSrc : resolvedSrc;

  const handleError = () => {
    if (imageSrc !== fallbackSrc) {
      setFailedSrc(resolvedSrc);
    }
  };

  const isRemote = imageSrc.startsWith("http://") || imageSrc.startsWith("https://");

  return (
    <NextImage
      {...props}
      src={imageSrc}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
      unoptimized={imageSrc.startsWith("blob:") || imageSrc.startsWith("data:") || isRemote || imageSrc.toLowerCase().includes(".svg")}
    />
  );
}