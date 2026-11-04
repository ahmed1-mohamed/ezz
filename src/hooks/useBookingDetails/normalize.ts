import { BookingDetailsResponse } from "./types";

export function normalizeBookingDetails(data: any): BookingDetailsResponse {
  if (!data) {
    return {
      reservation: {
        reservation_id: 0,
        reservation_status_type: "identification",
        reservation_status: "in_process",
      },
      media: {},
      user: {},
      paymentPlan: {},
      payment_plan: {},
      country: { name: "UAE", currency: "AED" },
      property: {},
      project: {},
      developer: {},
    };
  }

  let root = data;
  if (root?.data && typeof root.data === "object" && !Array.isArray(root.data)) {
    if (
      root.data.reservation ||
      root.data.items ||
      root.data.user ||
      root.data.property ||
      root.data.id ||
      root.data.reservation_id
    ) {
      root = root.data;
    }
  }

  if (Array.isArray(root?.items) && root.items.length > 0) {
    root = root.items[0];
  } else if (Array.isArray(root) && root.length > 0) {
    root = root[0];
  }

  const rawReservation = root?.reservation || root;
  const innerReservation =
    rawReservation?.reservation && typeof rawReservation.reservation === "object"
      ? rawReservation.reservation
      : rawReservation;

  const reservation =
    innerReservation?.reservation_id ||
      innerReservation?.id ||
      innerReservation?.reservation_status ||
      innerReservation?.reservation_status_type
      ? innerReservation
      : rawReservation;

  const rawMedia =
    root?.media ||
    rawReservation?.media ||
    innerReservation?.media ||
    reservation?.media ||
    {};

  const media = {
    ...rawMedia,
    identification:
      rawMedia?.identification ||
      reservation?.identification ||
      rawReservation?.identification ||
      root?.identification ||
      null,
    selfie:
      rawMedia?.selfie ||
      reservation?.selfie ||
      rawReservation?.selfie ||
      root?.selfie ||
      null,
    sales_offer:
      rawMedia?.sales_offer ||
      reservation?.sales_offer ||
      rawReservation?.sales_offer ||
      root?.sales_offer ||
      null,
    down_payment:
      rawMedia?.down_payment ||
      reservation?.down_payment ||
      rawReservation?.down_payment ||
      root?.down_payment ||
      null,
    sales_purchase:
      rawMedia?.sales_purchase ||
      reservation?.sales_purchase ||
      rawReservation?.sales_purchase ||
      root?.sales_purchase ||
      null,
  };

  const user =
    root?.user ||
    rawReservation?.user ||
    innerReservation?.user ||
    root?.client ||
    reservation?.user ||
    reservation?.client ||
    {};

  const property =
    root?.property ||
    rawReservation?.property ||
    innerReservation?.property ||
    reservation?.property ||
    {};

  const project =
    property?.project ||
    root?.project ||
    rawReservation?.project ||
    innerReservation?.project ||
    reservation?.project ||
    {};

  const developer =
    project?.developer ||
    root?.developer ||
    rawReservation?.developer ||
    innerReservation?.developer ||
    reservation?.developer ||
    {};

  const country =
    project?.country ||
    root?.country ||
    rawReservation?.country ||
    innerReservation?.country ||
    reservation?.country ||
    { name: "UAE", currency: "AED" };

  const paymentPlan =
    root?.payment_plan ||
    root?.paymentPlan ||
    rawReservation?.payment_plan ||
    rawReservation?.paymentPlan ||
    innerReservation?.payment_plan ||
    innerReservation?.paymentPlan ||
    reservation?.payment_plan ||
    reservation?.paymentPlan ||
    {};

  const resId =
    innerReservation?.reservation_id ||
    innerReservation?.id ||
    rawReservation?.reservation_id ||
    rawReservation?.id ||
    root?.reservation_id ||
    root?.id ||
    0;

  const statusType =
    innerReservation?.reservation_status_type ||
    innerReservation?.status_type ||
    rawReservation?.reservation_status_type ||
    rawReservation?.status_type ||
    root?.reservation_status_type ||
    root?.status_type ||
    "identification";

  const status =
    innerReservation?.reservation_status ||
    innerReservation?.status ||
    rawReservation?.reservation_status ||
    rawReservation?.status ||
    root?.reservation_status ||
    root?.status ||
    "in_process";

  const normalizedReservation = {
    ...reservation,
    reservation_id: resId,
    id: resId,
    reservation_status_type: statusType,
    status_type: statusType,
    reservation_status: status,
    status: status,
    reservation_date:
      reservation?.reservation_date ||
      root?.reservation_date ||
      reservation?.created_at ||
      root?.created_at ||
      reservation?.updated_at ||
      root?.updated_at,
    expiry_date:
      reservation?.expiry_date ||
      root?.expiry_date,
    comments:
      reservation?.comments ||
      root?.comments,
    price:
      reservation?.price ||
      root?.price ||
      property?.price,
    currency:
      reservation?.currency ||
      root?.currency ||
      country?.currency ||
      "AED",
    reservation_fee:
      reservation?.reservation_fee ||
      root?.reservation_fee,
    service_fee:
      reservation?.service_fee ||
      root?.service_fee,
  };

  return {
    ...root,
    reservation: normalizedReservation,
    media,
    user,
    paymentPlan,
    payment_plan: paymentPlan,
    property: {
      ...property,
      project: {
        ...project,
        developer,
        country,
      },
    },
    project,
    developer,
    country,
  };
}
