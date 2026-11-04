import { Property } from "../types";

export function mapProperty(prop: any): Property {
  const areaName =
    prop.area_name ||
    prop.location?.area?.area_name ||
    prop.location?.area_name ||
    prop.area?.area_name ||
    prop.area?.name ||
    prop.zone_name ||
    "N/A";

  const unit = prop.country_dimension_unit || "sqm";
  const rawSize =
    prop.size ??
    prop.plot_size ??
    (typeof prop.area === "number" || (typeof prop.area === "string" && !isNaN(Number(prop.area))) ? prop.area : null);
  const sizeVal = rawSize != null && rawSize !== "" ? `${Number(rawSize).toLocaleString()} ${unit}` : "N/A";

  const currency = prop.country_currency || "AED";

  return {
    id: prop.property_id,
    unitNumber: prop.property_no || "N/A",
    type: prop.type || prop.property_subtype || "N/A",
    area: areaName,
    size: sizeVal,
    price: prop.price ? `${Number(prop.price).toLocaleString()} ${currency}` : "N/A",
    property_name: prop.property_name?.toString() || "N/A",
    ownerName: prop.owner_name || "N/A",
    status: prop.availability_status === "available" ? "Available" : "Reserved",
    listingStatus: prop.status || "",
  };
}
