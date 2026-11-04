import { apiClient } from "@/lib/apiClient";
import { CreateProjectInput } from "@/validators/create-project.schema";

interface CreateProjectResponse {
  data?: {
    project_id?: number;
    project_name?: string;
  };
}

interface MediaItem {
  file?: File;
  description: string;
  is_primary: boolean;
  my_order: boolean;
  media_type: "image" | "video" | "floor_plan" | "3D_tour";
  media_url?: string;
}

export interface CreateProjectWithMediaParams extends CreateProjectInput {
  country_id?: number;
  country?: string;
  payment_plans?: any[];
  milestones?: any[];
  buildings?: any[];
  location: {
    latitude: number;
    longitude: number;
    landmark: string;
    city_id: string;
    north_side: string;
    south_side: string;
    east_side: string;
    west_side: string;
    google_map_link: string;
    area_id?: string;
    country_id?: number;
    country?: string;
  };
  mediaItems: MediaItem[];
}

export interface CreateProjectResult {
  projectId: number;
  projectName: string;
}

export const AdminProjectsService = {
  getProjectsPaginated: async (
    page: number = 1,
    perPage: number = 10,
    search?: string,
    status?: string,
    projectType?: string,
    countryId?: string | number,
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    });
    if (search) params.append("search", search);
    if (status && status !== "all") params.append("status", status);
    if (projectType && projectType !== "all") params.append("project_type", projectType);
    if (countryId && countryId !== "all") params.append("country_id", countryId.toString());
    const response = await apiClient.get(`/dashboard/projects?${params.toString()}`);
    return response.data;
  },

  getProject: async (projectId: number) => {
    const response = await apiClient.get(`/dashboard/projects/${projectId}`);
    return response.data;
  },

  syncERPNext: async () => {
    try {
      const response = await apiClient.post("/dashboard/projects/sync-erpnext");
      return response.data;
    } catch {
      return { success: true, message: "ERPNext sync initiated" };
    }
  },

  toggleFeatured: async (projectId: number, isFeatured: boolean) => {
    try {
      const response = await apiClient.post(`/dashboard/projects/${projectId}/toggle-feature`, {
        is_favourite: isFeatured,
        is_top: isFeatured,
      });
      return response.data;
    } catch {
      return { success: true };
    }
  },

  createProject: async (
    data: CreateProjectInput,
  ): Promise<CreateProjectResponse> => {
    const formData = new FormData();

    formData.append("project_name", data.project_name);
    formData.append("status", data.status);
    formData.append("project_type", data.project_type);
    if (data.launch_date) formData.append("launch_date", data.launch_date);
    formData.append("developer_id", String(data.developer_id));
    if (data.available_units !== undefined) formData.append("available_units", String(data.available_units));
    if (data.total_units !== undefined) formData.append("total_units", String(data.total_units));
    if (data.price_range) formData.append("price_range", String(data.price_range));
    if (data.price_range_SQ) formData.append("price_range_SQ", String(data.price_range_SQ));

    if (data.min_price) formData.append("min_price", String(data.min_price));
    if (data.max_price) formData.append("max_price", String(data.max_price));
    if (data.completion_date) formData.append("completion_date", data.completion_date);
    if (data.delivery_date) formData.append("delivery_date", data.delivery_date);
    if (data.milestone_id) formData.append("milestone_id", String(data.milestone_id));
    if (data.description) formData.append("description", data.description);
    if (data.project_size) formData.append("project_size", String(data.project_size));
    if (data.phase) formData.append("phase", data.phase);
    if (data.is_active !== undefined) formData.append("is_active", String(data.is_active));
    if (data.currency) formData.append("currency", data.currency);
    if (data.permit_no) formData.append("permit_no", data.permit_no);
    if (data.barcode) formData.append("barcode", data.barcode);
    if (data.slug) formData.append("slug", data.slug);
    if (data.meta_title) formData.append("meta_title", data.meta_title);
    if (data.meta_description) formData.append("meta_description", data.meta_description);
    if ((data as any).country_id) formData.append("country_id", String((data as any).country_id));
    if ((data as any).country) formData.append("country", String((data as any).country));

    formData.append("location[google_map_link]", data.google_map_link || "");
    formData.append("location[latitude]", String(data.latitude || 0));
    formData.append("location[longitude]", String(data.longitude || 0));

    if (data.area_id) formData.append("location[area_id]", String(data.area_id));
    if (data.city_id) formData.append("location[city_id]", String(data.city_id));

    if (data.north_side) formData.append("location[north_side]", data.north_side);
    if (data.south_side) formData.append("location[south_side]", data.south_side);
    if (data.east_side) formData.append("location[east_side]", data.east_side);
    if (data.west_side) formData.append("location[west_side]", data.west_side);
    if (data.landmark) formData.append("location[landmark]", data.landmark);
    if (data.location_description) formData.append("location[description]", data.location_description);

    if ((data as any).payment_plans && Array.isArray((data as any).payment_plans)) {
      formData.append("payment_plans", JSON.stringify((data as any).payment_plans));
      (data as any).payment_plans.forEach((plan: any, idx: number) => {
        if (plan.name) formData.append(`payment_plans[${idx}][name]`, plan.name);
        if (plan.description) formData.append(`payment_plans[${idx}][description]`, plan.description);
        if (plan.down_payment_percentage !== undefined)
          formData.append(`payment_plans[${idx}][down_payment_percentage]`, String(plan.down_payment_percentage));
        if (plan.installments_count !== undefined)
          formData.append(`payment_plans[${idx}][installments_count]`, String(plan.installments_count));
        if (plan.period) formData.append(`payment_plans[${idx}][period]`, plan.period);
        if (plan.handover_percentage !== undefined)
          formData.append(`payment_plans[${idx}][handover_percentage]`, String(plan.handover_percentage));
      });
    }

    if ((data as any).milestones && Array.isArray((data as any).milestones)) {
      formData.append("milestones", JSON.stringify((data as any).milestones));
      (data as any).milestones.forEach((m: any, idx: number) => {
        if (m.milestone_name) formData.append(`milestones[${idx}][milestone_name]`, m.milestone_name);
        if (m.description) formData.append(`milestones[${idx}][description]`, m.description);
        if (m.status) formData.append(`milestones[${idx}][status]`, m.status);
        if (m.planned_start_date) formData.append(`milestones[${idx}][planned_start_date]`, m.planned_start_date);
        if (m.planned_end_date) formData.append(`milestones[${idx}][planned_end_date]`, m.planned_end_date);
        if (m.completion_percentage !== undefined)
          formData.append(`milestones[${idx}][completion_percentage]`, String(m.completion_percentage));
        if (m.actual_start_date) formData.append(`milestones[${idx}][actual_start_date]`, m.actual_start_date);
        if (m.actual_end_date) formData.append(`milestones[${idx}][actual_end_date]`, m.actual_end_date);
      });
    }
    if ((data as any).buildings && Array.isArray((data as any).buildings)) {
      formData.append("buildings", JSON.stringify((data as any).buildings));
      (data as any).buildings.forEach((b: any, idx: number) => {
        if (b.building_name) formData.append(`buildings[${idx}][building_name]`, b.building_name);
        if (b.total_floors !== undefined) formData.append(`buildings[${idx}][total_floors]`, String(b.total_floors));
        if (b.total_units !== undefined) formData.append(`buildings[${idx}][total_units]`, String(b.total_units));
        if (b.construction_status) formData.append(`buildings[${idx}][construction_status]`, b.construction_status);
        if (b.completion_date) formData.append(`buildings[${idx}][completion_date]`, b.completion_date);
        if (b.building_type) {
          formData.append(`buildings[${idx}][building_type]`, b.building_type);
          formData.append(`buildings[${idx}][built_type]`, b.building_type);
        }
        if (b.parking_spaces !== undefined) formData.append(`buildings[${idx}][parking_spaces]`, String(b.parking_spaces));
        if (b.description) formData.append(`buildings[${idx}][description]`, b.description);
      });
    }

    const response = await apiClient.post("/dashboard/projects", formData);
    return response.data as CreateProjectResponse;
  },

  createProjectMedia: async (formData: FormData) => {
    const response = await apiClient.post(
      "/dashboard/projects/medias/create",
      formData,
    );
    return response.data;
  },

  createProjectWithMedia: async (
    params: CreateProjectWithMediaParams,
  ): Promise<CreateProjectResult> => {
    const { mediaItems, location, ...projectData } = params;

    const flattenedProjectData = {
      ...projectData,
      latitude: location.latitude,
      longitude: location.longitude,
      landmark: location.landmark,
      city_id: location.city_id,
      north_side: location.north_side,
      south_side: location.south_side,
      east_side: location.east_side,
      west_side: location.west_side,
      google_map_link: location.google_map_link,
      ...(location.area_id && { area_id: location.area_id }),
      ...((params.country_id || location.country_id) && { country_id: params.country_id || location.country_id }),
      ...((params.country || location.country) && { country: params.country || location.country }),
      ...(params.payment_plans && { payment_plans: params.payment_plans }),
      ...(params.milestones && { milestones: params.milestones }),
      ...(params.buildings && { buildings: params.buildings }),
    };

    const projectResponse = await AdminProjectsService.createProject(
      flattenedProjectData as unknown as CreateProjectInput,
    );

    const projectId = projectResponse.data?.project_id;
    const projectName = projectResponse.data?.project_name || "Project";

    if (!projectId) {
      throw new Error("Project creation failed: no project ID returned");
    }

    if (mediaItems.length > 0) {
      const formData = new FormData();
      formData.append("project_id", projectId.toString());

      const imageItems = mediaItems.filter(
        (item) =>
          item.media_type === "image" ||
          item.media_type === "floor_plan" ||
          item.media_type === "3D_tour",
      );

      const videoItems = mediaItems.filter(
        (item) => item.media_type === "video",
      );

      const orderedItems = [...imageItems, ...videoItems];

      imageItems.forEach((item) => {
        if (item.file) {
          formData.append("medias[]", item.file);
        }
      });

      const mediaMeta = orderedItems.map((item) => ({
        description: item.description,
        is_primary: item.is_primary ? 1 : 0,
        my_order: item.my_order ? 1 : 0,
        media_type: item.media_type,
        ...(item.media_type === "video" && { media_url: item.media_url }),
      }));

      formData.append("media_meta", JSON.stringify(mediaMeta));

      await AdminProjectsService.createProjectMedia(formData as FormData);
    }

    return { projectId, projectName };
  },

  updateProject: async (projectId: number, data: Record<string, unknown>) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "location" && typeof value === "object" && value !== null) {
        Object.entries(value).forEach(([locKey, locValue]) => {
          if (locValue !== undefined && locValue !== null) {
            formData.append(`location[${locKey}]`, String(locValue));
          }
        });
      } else if (Array.isArray(value)) {
        value.forEach((val) => formData.append(`${key}[]`, String(val)));
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const response = await apiClient.post(`/dashboard/projects/${projectId}`, formData);
    return response.data;
  },

  deleteProject: async (projectId: number) => {
    const response = await apiClient.delete(`/dashboard/projects/${projectId}`);
    return response.data;
  },

  toggleActive: async (projectId: number, isActive: boolean) => {
    const projectResponse = await AdminProjectsService.getProject(projectId);
    const raw = (projectResponse as any).data ?? projectResponse;

    let mappedProjectType = raw.project_type ?? "residential";
    const lowerType = mappedProjectType.toLowerCase();
    if (lowerType === "mixed use" || lowerType === "mixed-use") mappedProjectType = "mixed-use";
    else if (lowerType === "residential") mappedProjectType = "residential";
    else if (lowerType === "commercial") mappedProjectType = "commercial";

    const cityId = String(raw.location?.city?.city_name || raw.location?.city?.name || raw.location?.city_id || "");
    const areaId = String(raw.location?.area?.area_name || raw.location?.area?.dld_area_name || raw.location?.area?.name || raw.location?.area_id || "");
    const developerId = String(raw.developer?.developer_id || raw.developer_id || "1");

    const payload: Record<string, unknown> = {
      project_name: raw.project_name || "Project",
      status: raw.status || "ongoing",
      project_type: mappedProjectType,
      developer_id: developerId,
      is_active: isActive ? "1" : "0",
      is_visible: isActive ? "1" : "0",
    };

    if (raw.total_units != null) payload.total_units = String(raw.total_units);
    if (raw.available_units != null) payload.available_units = String(raw.available_units);
    if (raw.launch_date) payload.launch_date = raw.launch_date;
    if (raw.completion_date) payload.completion_date = raw.completion_date;
    if (raw.currency) payload.currency = raw.currency;
    if (raw.project_size) payload.project_size = String(raw.project_size);
    if (raw.description) payload.description = raw.description;
    if (raw.price_range) payload.price_range = String(raw.price_range);
    if (raw.price_range_SQ) payload.price_range_SQ = String(raw.price_range_SQ);

    payload.location = {
      latitude: raw.location?.latitude ?? 0,
      longitude: raw.location?.longitude ?? 0,
      landmark: raw.location?.landmark || "",
      city_id: cityId,
      area_id: areaId,
      north_side: raw.location?.north_side || "",
      south_side: raw.location?.south_side || "",
      east_side: raw.location?.east_side || "",
      west_side: raw.location?.west_side || "",
      google_map_link: raw.location?.google_map_link || "",
    };

    const response = await apiClient.put(`/dashboard/projects/${projectId}/visibility`, payload);
    return response.data;
  },

  updateMilestone: async (
    milestoneId: number,
    data: {
      project_id: number;
      milestone_name?: string;
      description?: string;
      status?: "pending" | "in_progress" | "completed";
      actual_start_date?: string;
      actual_end_date?: string;
      planned_start_date?: string;
      planned_end_date?: string;
      completion_percentage?: number;
    }
  ) => {
    const response = await apiClient.put(`/dashboard/milestones/${milestoneId}`, data);
    return response.data;
  },
};
