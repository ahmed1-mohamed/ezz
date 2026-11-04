import React from "react";
import { Monitor, Smartphone, Globe } from "lucide-react";

export const getPlatformIcon = (platform: string) => {
  switch (platform?.toLowerCase()) {
    case "web":
      return React.createElement(Monitor, { className: "w-4 h-4" });
    case "mobile":
      return React.createElement(Smartphone, { className: "w-4 h-4" });
    default:
      return React.createElement(Globe, { className: "w-4 h-4" });
  }
};

export const formatDate = (dateString: string | null | undefined, t: any) => {
  if (!dateString) return t("ads.details.notSet");
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getCountryName = (countryId: number | null | undefined, t: any) => {
  switch (countryId) {
    case 1:
      return t("common.countries.egypt");
    case 2:
      return t("common.countries.uae");
    case 3:
      return t("common.countries.oman");
    default:
      return t("ads.details.notSet");
  }
};
