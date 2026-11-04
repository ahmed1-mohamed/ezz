/** `is_active` values returned by the API for ready units. */
export const READY_UNIT_STATE = {
  REJECTED: 0,
  ACCEPTED: 1,
  PENDING: 2,
} as const;

export type ReadyUnitState = (typeof READY_UNIT_STATE)[keyof typeof READY_UNIT_STATE];
export type ListingType = "sale" | "rent";

export interface ReadyUnitMedia {
  media_id: number;
  media_url: string;
  media_type?: string;
  is_primary?: number | boolean;
}

export interface ReadyUnitFeature {
  feature_id: number;
  feature_name?: string;
  name?: string;
  pivot?: { value?: string | null };
}

/** Raw property model returned by GET /dashboard/ready-units/{id} (fields used by the UI). */
export interface ReadyUnitDetails {
  property_id: number;
  property_name: string;
  property_no?: string | null;
  description?: string | null;
  price: number | string;
  size: number | string;
  bedrooms?: number | null;
  bathrooms?: number | null;
  parking_spaces?: number | null;
  floor?: number | string | null;
  view?: string | null;
  status?: string;
  is_active?: number;
  availability_status?: string;
  construction_status?: string;
  finishing_status?: string;
  furnish_status?: string | null;
  ownership_type?: string | null;
  maid_room?: boolean | number | null;
  bua_size?: number | string | null;
  plot_size?: number | string | null;
  market_type?: string | null;
  slug?: string | null;
  reference_listed?: string | null;
  broker_license?: string | null;
  agent_license?: string | null;
  zone_name?: string | null;
  dld_permit_number?: string | null;
  dld_barcode?: string | null;
  project?: { project_id?: number; project_name?: string } | null;
  payment_plans?: unknown[];
  property_type_id?: number;
  property_subtype_id?: number;
  property_type?: { id: number; name: string } | null;
  property_subtype?: { id: number; name: string } | null;
  building?: { building_id: number; building_name: string } | string | null;
  location?: {
    location_id?: number;
    latitude?: number | string | null;
    longitude?: number | string | null;
    google_map_link?: string | null;
    landmark?: string | null;
    north_side?: string | null;
    south_side?: string | null;
    east_side?: string | null;
    west_side?: string | null;
    description?: string | null;
    city?: { id?: number; name?: string; city_name?: string; country?: { id?: number; name?: string } | null } | null;
    area?: { name?: string; area_name?: string } | null;
  } | null;
  features?: ReadyUnitFeature[];
  medias?: ReadyUnitMedia[];
  payment_plan?: {
    name?: string | null;
    payment_type?: string | null;
    total_cost?: number | string | null;
    intervals?: number | null;
    down_payment_price?: number | string | null;
    description?: string | null;
  } | null;
  user_property?: {
    id: number;
    user_id: number;
    built_year?: string | null;
    year_built?: string | null;
    listing_type?: ListingType;
    whatsapp_number?: string | null;
    user?: {
      user_id?: number;
      id?: number;
      name?: string;
      first_name?: string | null;
      last_name?: string | null;
      email?: string;
      phone?: string;
      phone_number?: string | null;
      profile_picture?: string | null;
      user_type?: string | null;
    } | null;
    address?: {
      street_address?: string | null;
      email?: string | null;
      phone_number?: string | null;
      whatsapp_number?: string | null;
    } | null;
  } | null;
  views?: number | null;
  views_count?: number | null;
  created_at?: string;
  updated_at?: string;
}

/** Row shape rendered by the Ready Market table. */
export interface ReadyUnitRow {
  id: number;
  unitNumber: string;
  name: string;
  owner: string;
  location: string;
  size: number | null;
  /** e.g. "SQFT" / "SQM" (country_dimension_unit). */
  sizeUnit: string;
  price: number | null;
  currency: string;
  availability: string;
  /** Listing status: "active" | "inactive". */
  status: string;
  createdAt: string | null;
  listingType?: ListingType;
  /** Review state (is_active); null when the list response does not include it. */
  state: ReadyUnitState | null;
}

export const PAYMENT_TYPES = [
  "cash",
  "installments",
  "down_payment",
  "booking",
  "reservation",
  "monthly_installment",
  "quarterly_installment",
  "half_year_installment",
  "yearly_installment",
  "handover",
  "maintenance",
  "other",
] as const;

export const AVAILABILITY_STATUSES = ["available", "reserved", "sold"] as const;
export const CONSTRUCTION_STATUSES = ["ready", "under-construction", "off-plan"] as const;
export const FINISHING_STATUSES = ["finished", "semi-finished", "unfinished"] as const;
