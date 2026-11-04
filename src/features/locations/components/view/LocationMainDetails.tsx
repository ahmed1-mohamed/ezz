import { Building2, MapPin, Navigation, Compass, Globe } from "lucide-react";
import { InfoCard, DirectionCard } from "./SharedCards";
import { LocationDetail } from "../../types";
import { useLanguage } from "@/contexts/LanguageContext";

interface LocationMainDetailsProps {
  loc: LocationDetail;
  cityName: string;
  areaName: string;
  regionName: string;
  hasCoords: boolean;
}

export function LocationMainDetails({
  loc,
  cityName,
  areaName,
  regionName,
  hasCoords,
}: LocationMainDetailsProps) {
  const { t } = useLanguage();
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-teal-500" /> {t("locations.view.locationInfo")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InfoCard label={t("locations.form.city")} value={cityName} icon={Building2} />
          <InfoCard label={t("locations.form.area")} value={areaName} icon={MapPin} />
          <InfoCard label={t("areas.viewModal.region")} value={regionName} icon={Navigation} />
          <InfoCard label={t("locations.form.landmark")} value={loc.landmark} icon={Compass} />
          {hasCoords && (
            <>
              <InfoCard label={t("locations.form.latitude")} value={loc.latitude} icon={Navigation} />
              <InfoCard label={t("locations.form.longitude")} value={loc.longitude} icon={Navigation} />
            </>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4 flex items-center gap-2">
          <Compass className="w-4 h-4 text-teal-500" /> {t("locations.view.surroundingBorders")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <DirectionCard direction={t("locationExtractor.directions.north")} value={loc.north_side} />
          <DirectionCard direction={t("locationExtractor.directions.south")} value={loc.south_side} />
          <DirectionCard direction={t("locationExtractor.directions.east")} value={loc.east_side} />
          <DirectionCard direction={t("locationExtractor.directions.west")} value={loc.west_side} />
        </div>
      </div>
    </>
  );
}
