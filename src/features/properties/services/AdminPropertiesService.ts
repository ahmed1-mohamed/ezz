import { apiClient } from "@/lib/apiClient";
import { PropertiesInput, PropertiesUpdateInput } from "@/validators/propertiesSchema";
import type {
  PropertyTypeDataType,
  PropertySubtypeDataType,
  ProjectsDataType,
} from "@/types";
import { unpackProjectsResponse } from "@/features/projects/utils/map-project";

export interface AvailableFeature {
  feature_id: number;
  feature_name: string;
  is_amenity: number;
  icons?: string | null;
}

export interface PropertyFeatureItemInput {
  feature_id: number;
  value?: string;
}

export interface SavePropertyFeaturesPayload {
  property_id: number;
  features: PropertyFeatureItemInput[];
}

export interface PropertiesFilterParams {
  page?: number;
  per_page?: number;
  search?: string;
  status?: string;
  project_id?: number | number[];
  country_id?: number | number[];
  developer_id?: number | number[];
  property_type_id?: number;
  sort_by?: string[];
  sort_order?: string[];
}

export const AdminPropertiesService = {
  getProperties: async (params: PropertiesFilterParams) => {
    const queryParams = new URLSearchParams();

    if (params.page) queryParams.append("page", params.page.toString());
    if (params.per_page)
      queryParams.append("per_page", params.per_page.toString());
    if (params.search) queryParams.append("property_name", params.search);
    if (params.status) queryParams.append("availability_status", params.status);
    if (params.sort_by) {
      params.sort_by.forEach((s) => queryParams.append("sort_by[]", s));
    }
    if (params.sort_order) {
      params.sort_order.forEach((s) => queryParams.append("sort_order[]", s));
    }

    if (Array.isArray(params.project_id)) {
      params.project_id.forEach((id) =>
        queryParams.append("project_id[]", id.toString()),
      );
    } else if (params.project_id) {
      queryParams.append("project_id", params.project_id.toString());
    }
    if (Array.isArray(params.country_id)) {
      params.country_id.forEach((id) =>
        queryParams.append("country_id[]", id.toString()),
      );
    } else if (params.country_id) {
      queryParams.append("country_id", params.country_id.toString());
    }
    if (Array.isArray(params.developer_id)) {
      params.developer_id.forEach((id) =>
        queryParams.append("developer_id[]", id.toString()),
      );
    } else if (params.developer_id) {
      queryParams.append("developer_id", params.developer_id.toString());
    }
    if (params.property_type_id) {
      queryParams.append(
        "property_type_id",
        params.property_type_id.toString(),
      );
    }

    const response = await apiClient.get(
      `/dashboard/properties?${queryParams.toString()}`,
    );
    return response.data;
  },

  getPropertyTypes: async () => {
    const response = await apiClient.get("/dashboard/propertyTypes");
    return response.data as PropertyTypeDataType[];
  },

  getPropertySubtypes: async () => {
    const response = await apiClient.get("/dashboard/propertySubtypes");
    return response.data as PropertySubtypeDataType[];
  },

  getAllProjects: async (search?: string) => {
    try {
      const params = new URLSearchParams({ page: "1", per_page: "100" });
      if (search) params.append("search", search);

      const firstRes = await apiClient.get(`/projects?${params.toString()}`);
      const firstData = (firstRes as any)?.data ?? firstRes;
      const { itemsArray, totalItems } = unpackProjectsResponse(firstData);

      const perPage = Number(firstData?.per_page || 100);
      const total = Number(totalItems || firstData?.total || itemsArray.length);
      const totalPages = Math.ceil(total / perPage);

      if (!totalPages || totalPages <= 1) {
        return itemsArray as ProjectsDataType[];
      }

      const pagePromises = [];
      for (let p = 2; p <= totalPages; p++) {
        const pageParams = new URLSearchParams({ page: p.toString(), per_page: perPage.toString() });
        if (search) pageParams.append("search", search);
        pagePromises.push(
          apiClient
            .get(`/projects?${pageParams.toString()}`)
            .catch(() => null)
        );
      }

      const otherResponses = await Promise.all(pagePromises);
      const allItems = [...itemsArray];
      for (const res of otherResponses) {
        if (!res) continue;
        const resData = (res as any)?.data ?? res;
        const { itemsArray: batchItems } = unpackProjectsResponse(resData);
        allItems.push(...batchItems);
      }

      return allItems as ProjectsDataType[];
    } catch {
      return [] as ProjectsDataType[];
    }
  },

  getProjects: async (page?: number, perPage?: number, search?: string) => {
    if (page === undefined && perPage === undefined) {
      return AdminPropertiesService.getAllProjects(search);
    }
    const params = new URLSearchParams();
    if (page !== undefined) params.append("page", page.toString());
    if (perPage !== undefined) params.append("per_page", perPage.toString());
    if (search) params.append("search", search);

    const response = await apiClient.get(`/projects?${params.toString()}`);
    return response.data as ProjectsDataType[];
  },

  createProperty: async (data: PropertiesInput) => {
    const payload = buildPayload(data);
    const response = await apiClient.post("/dashboard/properties", payload);
    return response.data;
  },

  deleteProperty: async (propertyId: number) => {
    const response = await apiClient.delete(`/dashboard/properties/${propertyId}`);
    return response.data;
  },

  getProperty: async (propertyId: number) => {
    const response = await apiClient.get(`/dashboard/properties/${propertyId}`);
    return response.data;
  },

  updateProperty: async (propertyId: number, data: PropertiesUpdateInput) => {
    const payload = buildPayload(data);
    const response = await apiClient.put(`/dashboard/properties/${propertyId}`, payload);
    return response.data;
  },

  addPropertyMedia: async (propertyId: number, file: File, isPrimary: boolean = false) => {
    const formData = new FormData();
    formData.append("property_id", propertyId.toString());
    formData.append("media_type", "image");
    formData.append("media_url", file);
    formData.append("is_primary", isPrimary ? "1" : "0");
    formData.append("my_order", "1");
    const response = await apiClient.post("/dashboard/properties/medias", formData);
    return response.data;
  },

  addPropertyFloorPlan: async (propertyId: number, file: File) => {
    const formData = new FormData();
    formData.append("property_id", propertyId.toString());
    formData.append("medias[0]", file);
    formData.append("meta[0][media_type]", "floor_plan");
    formData.append("meta[0][description]", "Floor Plan");
    formData.append("meta[0][is_primary]", "0");
    formData.append("meta[0][my_order]", "1");
    const response = await apiClient.post("/dashboard/properties/medias", formData);
    return response.data;
  },

  deletePropertyMedia: async (mediaId: number) => {
    const response = await apiClient.delete(`/dashboard/properties/medias/${mediaId}`);
    return response.data;
  },

  getAvailableFeatures: async (): Promise<AvailableFeature[]> => {
    const response = await apiClient.get<any>("/dashboard/features");
    const raw = response.data;
    if (Array.isArray(raw)) return raw;
    if (Array.isArray(raw?.data)) return raw.data;
    if (Array.isArray(raw?.data?.data)) return raw.data.data;
    return [];
  },

  getPropertyFeature: async (propertyId: number, featureId: number) => {
    const response = await apiClient.get<any>(
      `/dashboard/properties/${propertyId}/features/${featureId}`
    );
    return response.data;
  },

  savePropertyFeatures: async (
    propertyId: number,
    features: PropertyFeatureItemInput[]
  ) => {
    const response = await apiClient.post<any>("/dashboard/properties/features", {
      property_id: propertyId,
      features,
    });
    return response.data;
  },

  deletePropertyFeature: async (propertyId: number, featureId: number) => {
    const response = await apiClient.delete<any>(
      `/dashboard/properties/${propertyId}/features/${featureId}`
    );
    return response.data;
  },
};

function buildPayload(data: Partial<PropertiesInput>): Record<string, unknown> {
  const { property_name_en, ...rest } = data;
  return Object.fromEntries(
    Object.entries(rest).filter(([, v]) => v !== undefined && v !== ""),
  );
}