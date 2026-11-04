import { PropertiesInput } from "@/validators/propertiesSchema";

export type EditTabId =
  | "basic_info"
  | "pricing_media"
  | "unit_details"
  | "location"
  | "amenities"
  | "payment_plans"
  | "licenses";

export interface EditTabConfig {
  id: EditTabId;
  translationKey: string;
  fields: (keyof PropertiesInput)[];
}

export const EDIT_TABS: EditTabConfig[] = [
  {
    id: "basic_info",
    translationKey: "properties.create.tabLabels.basicInfo",
    fields: [
      "property_name",
      "property_no",
      "project_id",
      "property_type_id",
      "property_subtype_id",
      "availability_status",
      "construction_status",
      "status",
      "building_name",
      "description",
      "slug",
      "meta_title",
      "meta_description",
    ],
  },
  {
    id: "pricing_media",
    translationKey: "properties.create.tabLabels.pricingMedia",
    fields: ["price", "currency", "price_per_m2", "price_description"],
  },
  {
    id: "unit_details",
    translationKey: "properties.create.tabLabels.unitDetails",
    fields: [
      "size",
      "bedrooms",
      "bathrooms",
      "floor",
      "view",
      "finishing_status",
      "furnish_status",
      "ownership_type",
      "plot_size",
      "bua_size",
      "maid_room",
    ],
  },
  {
    id: "location",
    translationKey: "properties.create.tabLabels.location",
    fields: ["zone_name", "city_name", "area_name", "landmark", "maps_url", "latitude", "longitude"],
  },
  {
    id: "amenities",
    translationKey: "properties.create.tabLabels.amenities",
    fields: [],
  },
  {
    id: "payment_plans",
    translationKey: "properties.create.tabLabels.paymentPlans",
    fields: [],
  },
  {
    id: "licenses",
    translationKey: "properties.create.tabLabels.licenses",
    fields: [
      "broker_license",
      "agent_license",
      "dld_permit_number",
      "dld_barcode",
      "reference_listed",
      "parking_spaces",
    ],
  },
];
