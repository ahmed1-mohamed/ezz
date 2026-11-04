import { useLanguage } from "@/contexts/LanguageContext";

interface BookingInfoCardsProps {
  bookingData: any;
  formatPrice: (price: string, currency?: string) => string;
}

export function BookingInfoCards({
  bookingData,
  formatPrice,
}: BookingInfoCardsProps) {
  const { t } = useLanguage();
  const reservation = bookingData?.reservation || bookingData || {};
  const user = bookingData?.user || {};
  const paymentPlan = bookingData?.payment_plan || bookingData?.paymentPlan || {};
  const property = bookingData?.property || {};
  const project = property?.project || bookingData?.project || {};
  const developer = project?.developer || bookingData?.developer || {};
  const country = project?.country || bookingData?.country || { name: "UAE", currency: "AED" };

  const unitPrice = property.price || property.property_price || "0";
  const currencyStr = country.currency || (country.name === "UAE" ? "AED" : "USD");

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return t("common.na");
    try {
      const d = new Date(dateStr);
      return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString();
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t("reservations.modal.clientInfo")}
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.modal.clientName")}</span>
            <span className="text-gray-900 font-medium">
              {user.user_name || `${user.first_name || ""} ${user.last_name || ""}`.trim() || user.name || t("common.na")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.modal.email")}</span>
            <span className="text-gray-900 font-medium">{user.email || t("common.na")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.modal.phone")}</span>
            <span className="text-gray-900 font-medium">
              {user.phone_number || t("common.na")}
            </span>
          </div>
          {user.user_id && (
            <div className="flex justify-between">
              <span className="text-gray-600">{t("reservations.modal.userId")}</span>
              <span className="text-gray-900 font-medium">#{user.user_id}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.infoCards.createdDate")}</span>
            <span className="text-gray-900 font-medium">
              {formatDate(reservation.reservation_date)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.modal.expiryDate")}</span>
            <span className="text-gray-900 font-medium">
              {formatDate(reservation.expiry_date)}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t("reservations.infoCards.unitInformation")}
        </h3>
        <div className="text-center mb-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(Number(unitPrice))} {currencyStr}
          </p>
          <p className="text-sm text-gray-600 mt-1">{t("reservations.modal.unitPrice")}</p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.modal.project")}</span>
            <span className="text-gray-900 font-medium">
              {project.project_name || property.property_name || t("common.na")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.modal.propertyUnit")}</span>
            <span className="text-gray-900 font-medium">
              {property.property_name || t("common.na")}
            </span>
          </div>
          {developer.name && (
            <div className="flex justify-between">
              <span className="text-gray-600">{t("reservations.modal.developer")}</span>
              <span className="text-gray-900 font-medium">
                {developer.name}
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.modal.country")}</span>
            <span className="text-gray-900 font-medium">{country.name || "UAE"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.columns.status")}</span>
            <span className="text-gray-900 font-medium capitalize">
              {reservation.reservation_status || t("common.na")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{t("reservations.columns.statusType")}</span>
            <span className="text-gray-900 font-medium capitalize">
              {reservation.reservation_status_type || t("common.na")}
            </span>
          </div>
          {reservation.reservation_fee && (
            <div className="flex justify-between">
              <span className="text-gray-600">{t("reservations.modal.reservationFee")}</span>
              <span className="text-gray-900 font-medium">
                {reservation.reservation_fee} {currencyStr}
              </span>
            </div>
          )}
          {reservation.service_fee && (
            <div className="flex justify-between">
              <span className="text-gray-600">{t("reservations.modal.serviceFee")}</span>
              <span className="text-gray-900 font-medium">
                {reservation.service_fee} {currencyStr}
              </span>
            </div>
          )}
        </div>

        {paymentPlan.name && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-900">
                {t("reservations.modal.paymentPlan")}
              </h4>
              <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                {paymentPlan.name}
              </span>
            </div>
            {paymentPlan.description && (
              <p className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-2.5 rounded border border-gray-100">
                {paymentPlan.description}
              </p>
            )}
          </div>
        )}
      </div>

      {(bookingData?.media?.identification ||
        bookingData?.media?.selfie ||
        bookingData?.media?.sales_offer ||
        bookingData?.media?.down_payment ||
        bookingData?.media?.sales_purchase) && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t("reservations.infoCards.mediaDocuments")}
          </h3>
          <div className="space-y-3 text-sm">
            {bookingData.media.identification && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{t("reservations.typeMap.identification")}</span>
                <a
                  href={bookingData.media.identification}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-600 font-medium hover:underline"
                >
                  {t("reservations.view")}
                </a>
              </div>
            )}
            {bookingData.media.selfie && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{t("reservations.infoCards.selfie")}</span>
                <a
                  href={bookingData.media.selfie}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-600 font-medium hover:underline"
                >
                  {t("reservations.view")}
                </a>
              </div>
            )}
            {bookingData.media.sales_offer && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{t("reservations.typeMap.sales_offer")}</span>
                <a
                  href={bookingData.media.sales_offer}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-600 font-medium hover:underline"
                >
                  {t("reservations.view")}
                </a>
              </div>
            )}
            {bookingData.media.down_payment && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{t("reservations.typeMap.down_payment")}</span>
                <a
                  href={bookingData.media.down_payment}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-600 font-medium hover:underline"
                >
                  {t("reservations.view")}
                </a>
              </div>
            )}
            {bookingData.media.sales_purchase && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{t("reservations.infoCards.spa")}</span>
                <a
                  href={bookingData.media.sales_purchase}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-600 font-medium hover:underline"
                >
                  {t("reservations.view")}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
