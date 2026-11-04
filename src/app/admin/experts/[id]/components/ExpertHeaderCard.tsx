import { Mail, Phone, Star, Briefcase, CalendarCheck, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExpertHeaderCardProps {
  expert: {
    display_name?: string;
    name?: string;
    status?: string;
    rating_avg?: string | number;
    rating_count?: number;
    consultions?: number;
    total_bookings?: number;
    responded_bookings?: number;
    years_experience?: number;
    starting_from?: number;
    currency?: string;
    created_at?: string;
    image_url?: string | null;
    photo_url?: string | null;
    countries?: any[];
    categories?: any[];
    packages?: any[];
    experiences?: any[];
    email?: string;
    phone_number?: string;
    title?: string | null;
    user?: {
      email?: string;
      phone_number?: string;
      first_name?: string;
      last_name?: string;
    };
    [key: string]: any;
  };
  t: (key: string) => string;
}

export function ExpertHeaderCard({ expert, t }: ExpertHeaderCardProps) {
  const getInitials = (name?: string) => {
    if (!name) return "EX";
    return name
      .split(" ")
      .filter(Boolean)
      .map((n) => n.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2) || "EX";
  };

  const getRatingColor = (rating?: string | number) => {
    const num = typeof rating === "string" ? parseFloat(rating) : (rating || 0);
    if (num >= 4) return "text-green-600";
    if (num >= 3) return "text-yellow-600";
    return "text-red-600";
  };

  const getRatingBg = (rating?: string | number) => {
    const num = typeof rating === "string" ? parseFloat(rating) : (rating || 0);
    if (num >= 4) return "bg-green-50 border-green-200";
    if (num >= 3) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  const getStatusBadge = (status?: string) => {
    const styles: Record<string, string> = {
      approved: "bg-green-50 text-green-700 border-green-200",
      pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
      rejected: "bg-red-50 text-red-700 border-red-200",
    };
    const key = (status || "approved").toLowerCase();
    return (
      <Badge
        className={`${styles[key] || "bg-gray-50 text-gray-700 border-gray-200"
          } border text-xs capitalize`}
      >
        {status || "approved"}
      </Badge>
    );
  };

  const displayName = expert.display_name || expert.name || t("experts.columns.expert");
  const avatarUrl = expert.image_url || expert.photo_url || null;

  // Extract email from user, expert, or image storage url
  const extractedEmail = typeof expert.image_url === "string"
    ? expert.image_url.match(/experts\/([^/]+@[^/]+)\//)?.[1]
    : undefined;
  const email = expert.user?.email || expert.email || extractedEmail || t("experts.table.na");
  const phoneNumber = expert.user?.phone_number || expert.phone_number || expert.phone || t("experts.table.na");

  const primaryCategory = Array.isArray(expert.categories) && expert.categories.length > 0
    ? (typeof expert.categories[0] === "string" ? expert.categories[0] : expert.categories[0]?.name)
    : null;
  const subtitle = expert.title || primaryCategory || t("experts.details.defaultSubtitle");

  const totalBookings = expert.total_bookings ?? expert.consultions ?? 0;
  const respondedBookings = expert.responded_bookings ?? 0;
  const yearsExp = expert.years_experience ?? 0;
  const startingPrice = expert.starting_from ?? 0;
  const currency = expert.currency || "AED";

  const ratingAvg = typeof expert.rating_avg === "number" ? expert.rating_avg : parseFloat(expert.rating_avg || "0");
  const ratingDisplay = isNaN(ratingAvg) ? "0.0" : ratingAvg.toFixed(1);
  const ratingCount = expert.rating_count ?? 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={displayName}
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-500 shadow-sm flex-shrink-0"
              onError={(e) => {
                // Fallback to avatar placeholder on image error
                (e.currentTarget as HTMLElement).style.display = "none";
              }}
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-xl font-bold text-white flex-shrink-0 shadow-sm">
              {getInitials(displayName)}
            </div>
          )}
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-bold text-gray-900">
                {displayName}
              </h2>
              {getStatusBadge(expert.status)}
              {subtitle && (
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                  {subtitle}
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-teal-600" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-teal-600" />
                <span>{phoneNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Bookings Card */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {t("experts.details.totalConsultations")}
            </p>
            <CalendarCheck className="h-4 w-4 text-teal-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {totalBookings}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {respondedBookings} {t("experts.details.responded")}
          </p>
        </div>

        {/* Rating Card */}
        <div className={`p-4 rounded-lg border ${getRatingBg(expert.rating_avg)}`}>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {t("experts.details.rating")}
            </p>
            <Star
              className={`h-4 w-4 ${getRatingColor(expert.rating_avg)}`}
              fill="currentColor"
            />
          </div>
          <div className="flex items-baseline gap-1.5">
            <p className={`text-2xl font-bold ${getRatingColor(expert.rating_avg)}`}>
              {ratingDisplay}
            </p>
            <span className="text-xs text-gray-500">
              ({ratingCount} {t("experts.details.reviews")})
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            {ratingCount > 0 ? t("experts.details.verifiedFeedback") : t("experts.details.newExpert")}
          </p>
        </div>

        {/* Experience Card */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {t("experts.details.experience")}
            </p>
            <Briefcase className="h-4 w-4 text-teal-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {yearsExp} <span className="text-sm font-normal text-gray-600">{t("experts.details.years")}</span>
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {expert.experiences?.length || 0} {t("experts.details.certifications")}
          </p>
        </div>

        {/* Starting Price Card */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {t("experts.details.startingFrom")}
            </p>
            <Tag className="h-4 w-4 text-teal-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {startingPrice} <span className="text-sm font-normal text-gray-600">{currency}</span>
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {expert.packages?.length || 0} {t("experts.details.packages")}
          </p>
        </div>
      </div>
    </div>
  );
}