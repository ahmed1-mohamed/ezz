import { MapPin, Calendar, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReservationInfo {
  project_name?: string;
  country?: string;
  expiry_date?: string;
}

interface PropertyInfo {
  project_name?: string;
}

interface PropertySummaryCardProps {
  reservation?: ReservationInfo;
  property?: PropertyInfo;
}

export function PropertySummaryCard({
  reservation,
  property,
}: PropertySummaryCardProps) {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const formattedExpiry = reservation?.expiry_date
    ? new Date(reservation.expiry_date).toLocaleDateString(
        isRtl ? "ar-EG" : "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      )
    : "—";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-3 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
        <Building2 className="h-4 w-4" /> {t("reservations.details.property")}
      </h2>
      <p className="text-base font-medium text-gray-900">
        {reservation?.project_name ?? property?.project_name ?? "—"}
      </p>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <MapPin className="h-3.5 w-3.5" />
        {reservation?.country ?? "—"}
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Calendar className="h-3.5 w-3.5" />
        {t("reservations.details.expires")} {formattedExpiry}
      </div>
    </div>
  );
}