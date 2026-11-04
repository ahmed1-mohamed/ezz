"use client";

import { ExternalLink } from "lucide-react";

interface CtaDetailsSectionProps {
  adDetails: any;
}

export function CtaDetailsSection({ adDetails }: CtaDetailsSectionProps) {
  const label = adDetails?.cta_label || "Not set";
  const url = adDetails?.cta_url;
  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">CTA Details</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">CTA Label</span>
          </div>
          <p className="font-medium text-gray-900">
            {label}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">CTA URL</span>
          </div>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-600 hover:text-teal-700 break-all"
            >
              {url}
            </a>
          ) : (
            <p className="font-medium text-gray-900">Not set</p>
          )}
        </div>
      </div>
    </div>
  );
}
