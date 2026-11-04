import { DeveloperDataType } from "@/types";
import { CreateDeveloperFeatureInput } from "@/validators/developer-feature.shema";
import { apiClient as apiClientClass } from "@/lib/apiClient";
import {
  fetchData,
  fetchDevelopersData,
  postData,
  postDataImg,
  editData,
  editDataImg,
  patchData,
  deleteData,
  handleError,
} from "../client";
import { ENDPOINTS } from "../endpoints";

export interface FetchDevelopersParams {
  page?: number;
  per_page?: number;
  search?: string;
  status?: string;
}

export interface FetchDevelopersResult {
  developers: DeveloperDataType[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

export const fetchDevelopersPaginated = async (
  token: string,
  params: FetchDevelopersParams = {},
): Promise<FetchDevelopersResult> => {
  const { page = 1, per_page = 10, search, status } = params;

  const urlParams = new URLSearchParams({
    page: page.toString(),
    per_page: per_page.toString(),
  });

  if (search) urlParams.append("search", search);
  if (status) urlParams.append("status", status);

  try {
    apiClientClass.syncToken(token);

    const response = await apiClientClass.get(
      `${ENDPOINTS.COMMON.DEVELOPERS}?${urlParams.toString()}`,
    );

    const responseData: any = response.data;

    return {
      developers: responseData.data || [],
      pagination: {
        page: responseData.page || page,
        per_page: responseData.per_page || per_page,
        total: responseData.total || 0,
        total_pages:
          responseData.total_pages ||
          Math.ceil((responseData.total || 0) / per_page),
      },
    };
  } catch (error) {
    handleError(error, ENDPOINTS.COMMON.DEVELOPERS);
    throw error;
  }
};

export const fetchDevelopers = (
  token: string,
  page: number,
  per_page: number,
  search?: string,
  status?: string,
  country_id?: string,
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: per_page.toString(),
  });

  if (search) params.append("search", search);
  if (status) params.append("status", status);
  if (country_id) params.append("country_id", country_id);
  return fetchData(`${ENDPOINTS.COMMON.DASHBOARD_DEVELOPERS}?${params.toString()}`, token);
};

export const fetchDeveloperDetails = (developerId: number, token: string) =>
  fetchDevelopersData(`/developers/${developerId}`, token);

export const fetchDeveloperFeaturesDetails = (
  developerFeatureId: number,
  token: string,
) => fetchData(`/feature-developers/${developerFeatureId}`, token);

export const fetchDeveloperFeatureDetails = (
  developerId: number,
  featureId: number,
  token: string,
) => fetchData(`/developers/${developerId}/features/${featureId}`, token);

export const addDeveloper = (developerData: FormData, token: string) =>
  postDataImg(ENDPOINTS.COMMON.DEVELOPERS, developerData, token);

export const addDeveloperFeature = (
  developerFeatureData: CreateDeveloperFeatureInput,
  token: string,
) => postData(`/developers/features/create`, developerFeatureData, token);

export const editDeveloper = (
  developerId: number,
  developerData: FormData,
  token: string,
) => editDataImg(`/developers/${developerId}`, developerData, token);

export const toggleDeveloperStatus = (
  developerId: number,
  newStatus: string,
  token: string,
) => patchData(`/developers/${developerId}/toggle-status`, newStatus, token);

export const editDeveloperFeature = (
  developerId: number,
  featureId: number,
  developerFeatureData: { value: string },
  token: string,
) =>
  editData(
    `/developers/${developerId}/features/${featureId}`,
    developerFeatureData,
    token,
  );

export const deleteDeveloper = (developerId: number, token: string) =>
  deleteData(`/developers/${developerId}`, token);

export const deleteDeveloperFeature = (
  developerId: number,
  featureId: number,
  token: string,
) => deleteData(`/developers/${developerId}/features/${featureId}`, token);
