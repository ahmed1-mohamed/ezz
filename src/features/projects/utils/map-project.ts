import { Project } from "../types";

export function unpackProjectsResponse(rawData: unknown): { itemsArray: any[]; totalItems: number } {
  let itemsArray: any[] = [];

  if (!rawData) return { itemsArray: [], totalItems: 0 };

  if (Array.isArray(rawData)) {
    itemsArray = rawData;
  } else if (typeof rawData === "object") {
    const obj = rawData as any;
    if (Array.isArray(obj.data)) {
      itemsArray = obj.data;
    } else if (Array.isArray(obj.projects)) {
      itemsArray = obj.projects;
    } else if (Array.isArray(obj.items)) {
      itemsArray = obj.items;
    } else if (obj.data && typeof obj.data === "object") {
      if (Array.isArray(obj.data.data)) {
        itemsArray = obj.data.data;
      } else if (Array.isArray(obj.data.projects)) {
        itemsArray = obj.data.projects;
      } else if (Array.isArray(obj.data.items)) {
        itemsArray = obj.data.items;
      }
    }
  }

  let totalItems = itemsArray.length;
  if (Array.isArray(rawData)) {
    totalItems = rawData.length;
  } else if (rawData && typeof (rawData as any).total === "number") {
    totalItems = (rawData as any).total;
  } else if (rawData && typeof (rawData as any).data?.total === "number") {
    totalItems = (rawData as any).data.total;
  }

  return { itemsArray, totalItems };
}

export function mapProject(p: any): Project {
  const countryName =
    (p.country_name as string) ||
    p.country?.name ||
    p.country?.country_name ||
    (p.country_id === 2 ? "UAE" : p.country_id === 1 ? "Egypt" : p.country_id === 3 ? "Oman" : "") ||
    "";

  const countryCode =
    p.country?.code ||
    p.country?.country_code ||
    (countryName.toLowerCase().includes("uae") || p.country_id === 2
      ? "AE"
      : countryName.toLowerCase().includes("egypt") || p.country_id === 1
        ? "EG"
        : countryName.toLowerCase().includes("oman") || p.country_id === 3
          ? "OM"
          : "");

  const developerName =
    (p.developer_name as string) ||
    p.developer?.name ||
    p.developer?.developer_name ||
    (typeof p.developer === "string" ? p.developer : "") ||
    "-";

  const projectCurrency = (p.project_currency || p.currency || "") as string;
  const countryCurrency = (p.country_currency || "") as string;
  const effectiveCurrency = projectCurrency || countryCurrency || "";

  return {
    ...p,
    id: (p.project_id ?? p.id) as number,
    name: (p.project_name ?? p.name ?? p.title) as string,
    developer_name: developerName,
    country_name: countryName,
    country_code: countryCode,
    city_name: (p.city?.name ?? p.city_name ?? p.city ?? "") as string,
    area_name: (p.area?.name ?? p.area_name ?? p.area ?? "") as string,
    price_range: (p.price_range ?? p.price ?? "") as string,
    price_range_SQ: (p.price_range_SQ ?? p.price_range_sq ?? "") as string,
    project_currency: projectCurrency,
    country_currency: countryCurrency,
    currency: effectiveCurrency,
    country_dimension_unit: (p.country_dimension_unit ?? "") as string,
    location_landmark: (p.location_landmark ?? "") as string,
    properties_count: (p.properties_count ?? p.total_units ?? 0) as number,
    projectType: (p.project_type ?? p.type ?? "") as string,
    is_active: Boolean(p.is_active),
    is_favourite: Boolean(p.is_favourite),
    status: (p.status ?? "Ongoing") as string,
    created_at: (p.created_at ?? "") as string,
  };
}