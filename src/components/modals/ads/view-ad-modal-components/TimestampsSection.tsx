"use client";

import { Calendar } from "lucide-react";

interface TimestampsSectionProps {
  adDetails: any;
}

export function TimestampsSection({ adDetails }: TimestampsSectionProps) {
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "Not set";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const createdAt = formatDate(adDetails?.created_at);
  const updatedAt = formatDate(adDetails?.updated_at);
  const deletedAt = adDetails?.deleted_at ? formatDate(adDetails.deleted_at) : null;
  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">Timestamps</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Created At</span>
          </div>
          <p className="font-medium text-gray-900">
            {createdAt}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Updated At</span>
          </div>
          <p className="font-medium text-gray-900">
            {updatedAt}
          </p>
        </div>
        {deletedAt && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Deleted At</span>
            </div>
            <p className="font-medium text-gray-900">
              {deletedAt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
