import { Area } from "../components/AreasTable";

export function unpackAreasResponse(data: unknown): { itemsArray: any[]; totalItems: number } {
  const responseBody = (data as { data?: any })?.data || data;

  let itemsArray: any[] = [];
  let totalItems = 0;

  if (responseBody) {
    if (Array.isArray(responseBody)) {
      itemsArray = responseBody;
      totalItems = responseBody.length;
    } else if (responseBody.data && Array.isArray(responseBody.data)) {
      itemsArray = responseBody.data;
      totalItems = typeof responseBody.total === "number"
        ? responseBody.total
        : (responseBody.meta?.total ?? responseBody.data.length);
    } else if (responseBody.data && responseBody.data.data && Array.isArray(responseBody.data.data)) {
      itemsArray = responseBody.data.data;
      totalItems = typeof responseBody.data.total === "number"
        ? responseBody.data.total
        : (responseBody.data.meta?.total ?? responseBody.data.data.length);
    } else if (responseBody.areas && Array.isArray(responseBody.areas)) {
      itemsArray = responseBody.areas;
      totalItems = typeof responseBody.total === "number" ? responseBody.total : responseBody.areas.length;
    }
  }

  return { itemsArray, totalItems };
}

export function mapArea(area: any): Area {
  return {
    area_id: area.id || area.dld_area_id,
    area_name: area.dld_area_name || area.area_name || "N/A",
    latitude: area.latitude || "",
    longitude: area.longitude || "",
    description: area.description || "",
    created_at: area.created_at || "",
    updated_at: area.updated_at || "",
    deleted_at: area.deleted_at || null,
    dld_area_id: area.dld_area_id,
    locations_count: area.locations_count,
    projects_count: area.projects_count,
    status: !area.deleted_at,
  };
}
