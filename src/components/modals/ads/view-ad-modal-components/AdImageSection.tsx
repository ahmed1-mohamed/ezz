"use client";

import { SafeImage } from "@/components/ui/safe-image";
import { Image as ImageIcon } from "lucide-react";

interface AdImageSectionProps {
  adDetails: any;
}

export function AdImageSection({ adDetails }: AdImageSectionProps) {
  const imageUrl = adDetails?.image_url;
  const title = adDetails?.title || "Ad image";
  if (!imageUrl) return null;
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).style.display = "none";
  };
  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">Image</h4>
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <ImageIcon className="w-4 h-4" />
          <span className="text-sm">Image URL</span>
        </div>
        <a
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-teal-600 hover:text-teal-700 break-all"
        >
          {imageUrl}
        </a>
        <div className="mt-3">
          <SafeImage
            src={imageUrl}
            alt={title}
            width={448}
            height={252}
            fallbackSrc="/images/default-logo.svg"
            className="max-w-full h-auto rounded-lg border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
