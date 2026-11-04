import { Developer, DeveloperApiResponse } from "../types";
export function unpackDevelopersResponse(devData: unknown): { itemsArray: DeveloperApiResponse[]; totalItems: number } {
  const rawData = (devData as { data?: unknown })?.data;
  let itemsArray: DeveloperApiResponse[] = [];

  if (Array.isArray(rawData)) {
    itemsArray = rawData as DeveloperApiResponse[];
  } else {
    const nested = (rawData as { developers?: unknown } | undefined)?.developers;
    if (Array.isArray(nested)) itemsArray = nested as DeveloperApiResponse[];
  }

  let totalItems = itemsArray.length;
  if (typeof (devData as { total?: number })?.total === "number") {
    totalItems = (devData as { total: number }).total;
  } else if (rawData && typeof rawData === "object" && "total" in rawData) {
    totalItems = (rawData as { total: number }).total;
  }

  return { itemsArray, totalItems };
}


export function mapDeveloper(dev: DeveloperApiResponse, na: string = "N/A"): Developer {
  return {
    id: dev.developer_id,
    name: dev.developer_name || na,
    countries: dev.countries || na,
    cities: dev.cities || na,
    projects: dev.projects_count || 0,
    website: dev.website || na,
    email: dev.email || na,
    contact: dev.phone_number || na,
    status: dev.status === "active" || Boolean(dev.is_active),
    logo: dev.logo,
  };
}
