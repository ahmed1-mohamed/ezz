"use client";

import { Monitor, Smartphone, Globe, MapPin } from "lucide-react";

interface AdDetailsSectionProps {
  adDetails: any;
  ad: any;
}

export function AdDetailsSection({ adDetails, ad }: AdDetailsSectionProps) {
  const getPlatformIcon = (platform: string) => {
    switch (platform?.toLowerCase()) {
      case "web":
        return <Monitor className="w-4 h-4" />;
      case "mobile":
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };
  const getCountryName = (countryId: number | null | undefined) => {
    switch (countryId) {
      case 1:
        return "Egypt";
      case 2:
        return "UAE";
      case 3:
        return "Oman";
      default:
        return "Not set";
    }
  };
  const title = adDetails?.title || "Not set";
  const subtitle = adDetails?.subtitle || "Not set";
  const format = adDetails?.placement?.format || ad.type || "Not set";
  const platform = adDetails?.placement?.platform || ad.platform || "Not set";
  const country = getCountryName(adDetails?.country_id);
  const location = adDetails?.placement?.location || ad.location || "Not set";
  return (
    <div className="border-t pt-4">
      <h4 className="font-medium text-gray-900 mb-3">Ad Details</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Title</span>
          </div>
          <p className="font-medium text-gray-900">
            {title}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Subtitle</span>
          </div>
          <div 
            className="font-medium text-gray-900 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <span className="text-sm">Type/Format</span>
          </div>
          <p className="font-medium text-gray-900">
            {format}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            {getPlatformIcon(platform)}
            <span className="text-sm">Platform</span>
          </div>
          <p className="font-medium text-gray-900 capitalize">
            {platform}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Globe className="w-4 h-4" />
            <span className="text-sm">Country</span>
          </div>
          <p className="font-medium text-gray-900">
            {country}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Location</span>
          </div>
          <p className="font-medium text-gray-900 capitalize">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
