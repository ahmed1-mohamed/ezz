"use client";

import { Badge } from "@/components/ui/badge";

interface AdHeaderProps {
  adDetails: any;
  ad: any;
}

export function AdHeader({ adDetails, ad }: AdHeaderProps) {
  const format = adDetails?.placement?.format || ad.type || "A";
  const title = adDetails?.title || ad.creative_title;
  const creativeId = adDetails?.creative_id || ad.creative_id;
  const status = adDetails?.status || ad.status;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center">
          <span className="text-teal-600 font-semibold text-lg">
            {format.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
          <p className="text-sm text-gray-500">
            ID: {creativeId}
          </p>
        </div>
      </div>
      <Badge
        variant={status === "active" ? "success" : "secondary"}
        className={status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
      >
        {status === "active" ? "Active" : "Inactive"}
      </Badge>
    </div>
  );
}
