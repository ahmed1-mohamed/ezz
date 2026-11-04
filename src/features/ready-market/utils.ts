import type { ReadyUnitFormValues } from "./schema";
import { PAYMENT_TYPES, type ReadyUnitDetails, type ReadyUnitRow, type ReadyUnitState } from "./types";

const hasValue = (v: unknown) => v !== undefined && v !== null && v !== "" && !(typeof v === "number" && Number.isNaN(v));

/**
 * Builds the multipart body for POST /dashboard/ready-units (create) and
 * POST /dashboard/ready-units/{id} (update).
 */
export function buildReadyUnitFormData(values: ReadyUnitFormValues, newImages: File[]): FormData {
  const fd = new FormData();
  const append = (key: string, value: unknown) => {
    if (hasValue(value)) fd.append(key, String(value));
  };

  append("property_name", values.property_name.trim());
  append("property_no", values.property_no?.trim());
  append("description", values.description);
  append("property_type_id", values.property_type_id);
  append("property_subtype_id", values.property_subtype_id);
  append("price", values.price);
  append("size", values.size);
  append("bedrooms", values.bedrooms);
  append("bathrooms", values.bathrooms);
  append("parking_spaces", values.parking_spaces);
  append("floor", values.floor);
  append("view", values.view?.trim());
  append("status", values.status);
  append("availability_status", values.availability_status);
  append("construction_status", values.construction_status);
  append("finishing_status", values.finishing_status);

  // UserPropertyRequest
  append("listing_type", values.listing_type);
  append("user_id", values.user_id);
  append("email", values.email.trim());
  append("phone_number", values.phone_number.trim());
  append("whatsapp_number", values.whatsapp_number.trim());
  append("year_built", values.year_built?.trim());

  // Nested location: city / area are names, resolved to ids by the API.
  append("location[google_map_link]", values.google_map_link.trim());
  append("location[latitude]", values.latitude);
  append("location[longitude]", values.longitude);
  append("location[city_id]", values.city?.trim());
  append("location[area_id]", values.area?.trim());
  append("location[description]", values.address?.trim());
  append("location[landmark]", values.address?.trim());

  // payment_plan is only sent with a payment type (required by the API when a plan is provided).
  if (values.payment_type) {
    append("payment_plan[name]", values.payment_name?.trim());
    append("payment_plan[payment_type]", values.payment_type);
    append(
      "payment_plan[total_cost]",
      hasValue(values.payment_total_cost) ? values.payment_total_cost : values.price
    );
    if (values.payment_type === "installments") {
      append("payment_plan[intervals]", values.payment_intervals);
      append("payment_plan[down_payment_price]", values.payment_down_payment);
    }
    append("payment_plan[description]", values.payment_description?.trim());
  }

  values.feature_ids.forEach((featureId, index) => {
    fd.append(`features[${index}][feature_id]`, String(featureId));
  });

  if (newImages.length > 0) {
    newImages.forEach((file) => fd.append("medias[]", file, file.name));
    fd.append(
      "media_meta",
      JSON.stringify(
        newImages.map((_, index) => ({
          file_index: index,
          media_type: "image",
          is_primary: index === 0 ? 1 : 0,
          my_order: index + 1,
        }))
      )
    );
  }

  return fd;
}

const toNumber = (v: unknown): number | undefined => {
  if (v === null || v === undefined || v === "") return undefined;
  const n = Number(v);
  return Number.isNaN(n) ? undefined : n;
};

export interface ReadyUnitPaymentPlan {
  name: string;
  payment_type: string;
  total_cost?: number;
  intervals?: number;
  down_payment_price?: number;
  description: string;
}

/** "Monthly installment" / "monthly-installment" → "monthly_installment" */
const normalizePaymentType = (v: unknown) =>
  typeof v === "string" ? v.trim().toLowerCase().replace(/[\s-]+/g, "_") : "";

const isPaymentType = (v: string): v is (typeof PAYMENT_TYPES)[number] =>
  (PAYMENT_TYPES as readonly string[]).includes(v);

/**
 * The unit's payment plan, read from `payment_plan` or, when the API returns the plans list
 * instead, the first entry of `payment_plans` (including its items). Null when there is none.
 */
export function getReadyUnitPaymentPlan(unit: ReadyUnitDetails): ReadyUnitPaymentPlan | null {
  const anyUnit = unit as any;
  const list = anyUnit.payment_plans ?? anyUnit.paymentPlans ?? anyUnit.paymentplans;
  const plan: any =
    anyUnit.payment_plan ?? anyUnit.paymentPlan ?? (Array.isArray(list) && list.length > 0 ? list[0] : null);
  if (!plan || typeof plan !== "object") return null;

  const items: any[] = plan.paymentplanitems ?? plan.payment_plan_items ?? plan.paymentPlanItems ?? plan.items ?? [];
  const itemTypes = (Array.isArray(items) ? items : []).map((item) => ({ item, type: normalizePaymentType(item?.type) }));
  const installmentItem = itemTypes.find(({ type }) => type.includes("installment"))?.item;
  const downPaymentItem = itemTypes.find(({ type }) => type === "down_payment")?.item;

  const ownType = normalizePaymentType(plan.payment_type ?? plan.payment_method);
  const itemType =
    installmentItem && downPaymentItem
      ? "installments"
      : itemTypes.find(({ type }) => isPaymentType(type))?.type ?? "";
  // Plans saved without a type keep it only in the generated name / description,
  // e.g. name "Cash", description "Cash payment for property".
  const nameType = normalizePaymentType(plan.name);
  const description = normalizePaymentType(plan.description);
  const descriptionType = [...PAYMENT_TYPES]
    .sort((a, b) => b.length - a.length)
    .find((type) => description === type || description.startsWith(`${type}_`));
  const payment_type = isPaymentType(ownType)
    ? ownType
    : itemType || (isPaymentType(nameType) ? nameType : descriptionType ?? "");

  const total_cost = toNumber(plan.total_cost ?? plan.total_price);
  const downPaymentFromItem = (() => {
    if (!downPaymentItem) return undefined;
    const amount = toNumber(downPaymentItem.price ?? downPaymentItem.amount);
    if (amount !== undefined) return amount;
    const percentage = toNumber(downPaymentItem.percentage);
    const base = total_cost ?? toNumber(unit.price);
    return percentage !== undefined && base !== undefined ? (base * percentage) / 100 : undefined;
  })();

  const result: ReadyUnitPaymentPlan = {
    name: typeof plan.name === "string" ? plan.name : "",
    payment_type,
    total_cost,
    intervals: toNumber(plan.intervals ?? plan.installments_count ?? installmentItem?.intervals),
    down_payment_price: toNumber(plan.down_payment_price ?? plan.down_payment) ?? downPaymentFromItem,
    description: typeof plan.description === "string" ? plan.description : "",
  };
  const hasData =
    result.payment_type || result.name || result.description ||
    result.total_cost !== undefined || result.intervals !== undefined || result.down_payment_price !== undefined;
  if (!hasData) return null;
  // The form only shows (and saves) a plan that has a payment type.
  if (!result.payment_type) result.payment_type = "other";
  return result;
}

/** Pre-fills the edit form from GET /dashboard/ready-units/{id}. */
export function readyUnitToFormValues(unit: ReadyUnitDetails): Partial<ReadyUnitFormValues> {
  const up = unit.user_property;
  const owner = up?.user;
  const plan = getReadyUnitPaymentPlan(unit);
  return {
    listing_type: up?.listing_type === "rent" ? "rent" : "sale",
    property_name: unit.property_name ?? "",
    property_no: unit.property_no ?? "",
    description: unit.description ?? "",
    property_type_id: String(unit.property_type?.id ?? unit.property_type_id ?? ""),
    property_subtype_id: String(unit.property_subtype?.id ?? unit.property_subtype_id ?? ""),
    price: toNumber(unit.price) as number,
    size: toNumber(unit.size) as number,
    bedrooms: toNumber(unit.bedrooms) as number,
    bathrooms: toNumber(unit.bathrooms) as number,
    parking_spaces: toNumber(unit.parking_spaces),
    floor: toNumber(unit.floor),
    view: unit.view ?? "",
    year_built: up?.built_year ?? up?.year_built ?? "",
    payment_name: plan?.name ?? "",
    payment_type: plan?.payment_type ?? "",
    payment_total_cost: plan?.total_cost,
    payment_description: plan?.description ?? "",
    payment_intervals: plan?.intervals,
    payment_down_payment: plan?.down_payment_price,
    user_id: up?.user_id ?? owner?.user_id ?? owner?.id ?? null,
    email: up?.address?.email ?? owner?.email ?? "",
    phone_number: up?.address?.phone_number ?? owner?.phone_number ?? owner?.phone ?? "",
    whatsapp_number: up?.address?.whatsapp_number ?? up?.whatsapp_number ?? "",
    status: unit.status === "inactive" ? "inactive" : "active",
    availability_status: (["available", "reserved", "sold"].includes(unit.availability_status ?? "")
      ? unit.availability_status
      : "available") as ReadyUnitFormValues["availability_status"],
    construction_status: (["ready", "under-construction", "off-plan"].includes(unit.construction_status ?? "")
      ? unit.construction_status
      : "ready") as ReadyUnitFormValues["construction_status"],
    finishing_status: (["finished", "semi-finished", "unfinished"].includes(unit.finishing_status ?? "")
      ? unit.finishing_status
      : "finished") as ReadyUnitFormValues["finishing_status"],
    google_map_link: unit.location?.google_map_link ?? "",
    latitude: toNumber(unit.location?.latitude) as number,
    longitude: toNumber(unit.location?.longitude) as number,
    country: unit.location?.city?.country?.name ?? "",
    city: unit.location?.city?.name ?? unit.location?.city?.city_name ?? "",
    area: unit.location?.area?.name ?? unit.location?.area?.area_name ?? "",
    address: unit.location?.description ?? unit.location?.landmark ?? up?.address?.street_address ?? "",
    feature_ids: (unit.features ?? []).map((f) => Number(f.feature_id)).filter((id) => !Number.isNaN(id)),
  };
}

const toState = (v: unknown): ReadyUnitState | null => {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return n === 0 || n === 1 || n === 2 ? (n as ReadyUnitState) : null;
};

/**
 * Normalizes one item of the list response into a table row. The list returns flat fields:
 * property_id, property_no, property_name, owner_name, area_name, size, country_dimension_unit,
 * price, country_currency, availability_status, status, created_at.
 */
export function toReadyUnitRow(raw: any): ReadyUnitRow {
  const item = raw?.data && typeof raw.data === "object" && !Array.isArray(raw.data) ? raw.data : raw;
  const owner = item?.user_property?.user ?? item?.user ?? item?.owner;
  const id = Number(item?.property_id ?? item?.id);
  const propertyNo = item?.property_no;
  return {
    id,
    // property_no is "0" when no unit number was entered; fall back to the ID.
    unitNumber: propertyNo && String(propertyNo) !== "0" ? String(propertyNo) : `#${id}`,
    name: item?.property_name ?? "",
    owner: item?.owner_name ?? owner?.name ?? item?.user_name ?? "-",
    location: item?.area_name ?? item?.location?.area?.name ?? item?.city_name ?? item?.location?.city?.name ?? "-",
    size: toNumber(item?.size) ?? null,
    sizeUnit: item?.country_dimension_unit ?? "",
    price: toNumber(item?.price) ?? null,
    currency: item?.country_currency ?? "",
    availability: item?.availability_status ?? "",
    status: item?.status ?? "",
    createdAt: item?.created_at ?? null,
    listingType: item?.user_property?.listing_type ?? item?.listing_type,
    state: toState(item?.is_active),
  };
}

/** Extracts rows + total from a paginated list response (Laravel paginator or `{ data, total }`). */
export function unpackReadyUnitsList(body: any): { rows: ReadyUnitRow[]; total: number } {
  const page = body?.data && !Array.isArray(body.data) && Array.isArray(body.data.data) ? body.data : body;
  const items: any[] = Array.isArray(page?.data) ? page.data : Array.isArray(page) ? page : [];
  const total = Number(page?.total ?? page?.meta?.total ?? body?.total ?? items.length) || 0;
  return { rows: items.map(toReadyUnitRow).filter((r) => !Number.isNaN(r.id)), total };
}
