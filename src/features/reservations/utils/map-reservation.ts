import { Booking } from "../types";

export function unpackReservationsResponse(
  data: unknown,
  fallbackPerPage: number = 10,
  currentPageFallback: number = 1,
): {
  itemsArray: any[];
  totalItems: number;
  currentPage: number;
  lastPage: number;
  perPage: number;
} {
  const safeFallbackPerPage = fallbackPerPage >= 5 ? fallbackPerPage : 10;

  if (!data) {
    return {
      itemsArray: [],
      totalItems: 0,
      currentPage: currentPageFallback,
      lastPage: 1,
      perPage: safeFallbackPerPage,
    };
  }

  const res = data as any;
  const rawItems: any[] = Array.isArray(res)
    ? res
    : Array.isArray(res?.items)
      ? res.items
      : Array.isArray(res?.data?.items)
        ? res.data.items
        : Array.isArray(res?.data?.data)
          ? res.data.data
          : Array.isArray(res?.data)
            ? res.data
            : [];

  const isServerPaginated =
    typeof res?.current_page === "number" ||
    typeof res?.data?.current_page === "number" ||
    typeof res?.last_page === "number" ||
    typeof res?.data?.last_page === "number";

  const totalItems =
    typeof res?.total === "number"
      ? res.total
      : typeof res?.data?.total === "number"
        ? res.data.total
        : rawItems.length;

  const currentPage =
    typeof res?.current_page === "number"
      ? res.current_page
      : typeof res?.data?.current_page === "number"
        ? res.data.current_page
        : currentPageFallback;

  const rawPerPage =
    typeof res?.per_page === "number"
      ? res.per_page
      : typeof res?.data?.per_page === "number"
        ? res.data.per_page
        : safeFallbackPerPage;

  const perPage = rawPerPage >= 5 ? rawPerPage : safeFallbackPerPage;

  const lastPage =
    typeof res?.last_page === "number"
      ? res.last_page
      : typeof res?.data?.last_page === "number"
        ? res.data.last_page
        : Math.max(1, Math.ceil(totalItems / (perPage || 1)));

  let itemsArray = rawItems;
  if (!isServerPaginated && rawItems.length > perPage) {
    const start = (currentPage - 1) * perPage;
    itemsArray = rawItems.slice(start, start + perPage);
  }

  return { itemsArray, totalItems, currentPage, lastPage, perPage };
}

export function mapReservation(booking: any): Booking {
  const resObj = booking?.reservation || booking || {};
  const userObj = booking?.user || {};
  const propObj = booking?.property || {};
  const projObj = propObj?.project || booking?.project || {};
  const devObj = projObj?.developer || booking?.developer || {};
  const planObj = booking?.payment_plan || booking?.paymentPlan || {};

  const id = Number(resObj.reservation_id || booking.reservation_id || booking.id || 0);
  const status =
    resObj.reservation_status ||
    resObj.status ||
    booking.status ||
    booking.reservation_status ||
    "in_process";
  const statusType =
    resObj.reservation_status_type ||
    resObj.status_type ||
    booking.status_type ||
    booking.reservation_status_type ||
    "identification";

  const rawDate =
    resObj.reservation_date ||
    booking.reservation_date ||
    booking.last_log?.time ||
    booking.updated_at;

  let formattedDate = "N/A";
  if (rawDate) {
    try {
      const d = new Date(rawDate);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toISOString().split("T")[0];
      }
    } catch {
      formattedDate = String(rawDate);
    }
  }

  const rawExpiry = resObj.expiry_date || booking.expiry_date;
  let formattedExpiry = "N/A";
  if (rawExpiry) {
    try {
      const d = new Date(rawExpiry);
      if (!isNaN(d.getTime())) {
        formattedExpiry = d.toISOString().split("T")[0];
      }
    } catch {
      formattedExpiry = String(rawExpiry);
    }
  }

  const countryName =
    projObj?.country?.name ||
    booking?.country?.name ||
    (typeof booking?.country === "string" ? booking.country : "") ||
    (typeof resObj?.country === "string" ? resObj.country : "") ||
    "UAE";

  const clientName =
    userObj.first_name
      ? `${userObj.first_name}${userObj.last_name ? ` ${userObj.last_name}` : ""}`
      : userObj.name ||
        userObj.user_name ||
        booking.user_name ||
        "N/A";

  const projectName = projObj.project_name || booking.project_name || "N/A";
  const propertyName = propObj.property_name || booking.property_name || "N/A";

  return {
    id,
    bookingNumber: `BK-${id}`,
    status,
    status_type: statusType,
    last_log: booking.last_log || null,

    user_name: clientName,
    user_email: userObj.email || booking.email,
    user_phone: userObj.phone_number || booking.phone_number,
    user_id: userObj.user_id || booking.user_id,

    project_name: projectName,
    project_id: projObj.project_id || booking.project_id,
    property_name: propertyName,
    property_id: propObj.property_id || booking.property_id,
    developer_name: devObj.name || booking.developer_name,
    developer_id: devObj.developer_id || booking.developer_id,

    price: propObj.price || booking.price,
    price_after_discount: propObj.price_after_discount || booking.price_after_discount,

    country: countryName,
    currency: projObj?.country?.currency || (countryName === "UAE" ? "AED" : "USD"),
    reservation_date: formattedDate,
    expiry_date: formattedExpiry,
    reservation_status_type: statusType,
    types: propObj.property_type?.property_type_name || booking.types || "Apartment",
    last_status: status,

    comments: resObj.comments ?? booking.comments ?? null,
    reservation_fee: resObj.reservation_fee || booking.reservation_fee,
    reservation_status: status,
    service_fee: resObj.service_fee || booking.service_fee,
    total_payment: resObj.total_payments || resObj.total_payment || booking.total_payment,
    updated_at: resObj.updated_at || booking.updated_at,
    vat: resObj.vat || booking.vat,

    payment_plan: {
      payment_plan_id: planObj.payment_plan_id,
      name: planObj.name,
      description: planObj.description,
    },
    raw: booking,
  };
}

