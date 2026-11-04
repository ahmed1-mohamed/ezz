import { BuildingInputType } from "@/validators/buildingSchema";
import { CreateProjectMediaInput } from "@/validators/create-project-media.schema";
import { CreateProjectInput } from "@/validators/create-project.schema";
import { EditProjectInput } from "@/validators/edit-project.schema";
import { MilestoneSchema } from "@/validators/milestone.schema";
import { PaymentPlanInput } from "@/validators/payment-plan.schema";
import {
  CreateProjectResponse,
  fetchData,
  fetchPaginatedData,
  postData,
  postDataImg,
  editData,
  deleteData,
  patchData,
  handleError,
} from "../client";
import { ENDPOINTS } from "../endpoints";
import { apiClient as apiClientClass } from "@/lib/apiClient";

export interface PaymentPlanItemInput {
  payment_plan_id: number;
  type: string;
  percentage: number;
  intervals: number;
}

export const fetchProjectsPaginated = (
  token: string,
  page: number = 1,
  per_page: number = 10,
  search?: string,
  status?: string,
  project_type?: string,
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: per_page.toString(),
  });

  if (search) params.append("search", search);
  if (status) params.append("status", status);
  if (project_type) params.append("project_type", project_type);

  return fetchPaginatedData(`${ENDPOINTS.PROJECTS.BASE}?${params.toString()}`, token);
};

export const fetchMileStones = (token: string) =>
  fetchData(ENDPOINTS.PROJECTS.MILESTONES, token);

export const fetchBuildings = (token: string) =>
  fetchData(ENDPOINTS.PROJECTS.BUILDINGS, token);

export const fetchProjectsDetails = (projectId: number, token: string) =>
  fetchData(ENDPOINTS.PROJECTS.DETAIL(projectId), token);

export const fetchMilestonesDetails = (projectId: number, token: string) =>
  fetchData(ENDPOINTS.PROJECTS.MILESTONE_DETAIL(projectId), token);

export const fetchBuildingsDetails = (buildingId: number, token: string) =>
  fetchData(ENDPOINTS.PROJECTS.BUILDING_DETAIL(buildingId), token);

export const fetchProjectFeatureDetails = (
  projectId: number,
  featureId: number,
  token: string,
) => fetchData(ENDPOINTS.PROJECTS.FEATURE_DETAIL(projectId, featureId), token);

export const fetchProjectMediaDetails = (mediaId: number, token: string) =>
  fetchData(ENDPOINTS.PROJECTS.MEDIA_DETAIL(mediaId), token);

export const fetchProjectPaymentDetails = (paymentId: number, token: string) =>
  fetchData(ENDPOINTS.PROJECTS.PAYMENT_PLAN_DETAIL(paymentId), token);

export const addProject = (
  data: CreateProjectInput,
  token: string,
): Promise<CreateProjectResponse> => {
  return postData(ENDPOINTS.PROJECTS.BASE, data, token).then((res: any) => res.data);
};

export const addMilestone = (milestoneData: MilestoneSchema, token: string) =>
  postData(ENDPOINTS.PROJECTS.MILESTONES, milestoneData, token);

export const addBuilding = (buildingData: BuildingInputType, token: string) =>
  postData(ENDPOINTS.PROJECTS.BUILDINGS, buildingData, token);

export const addProjectFeature = (projectFeatureData: any, token: string) =>
  postData(ENDPOINTS.PROJECTS.FEATURES, projectFeatureData, token);

export const addProjectMedia = (
  projectMediaData: CreateProjectMediaInput,
  token: string,
) => postDataImg(ENDPOINTS.PROJECTS.MEDIA_CREATE, projectMediaData, token);

export const fetchPaymentPlans = (token?: string) =>
  fetchData(ENDPOINTS.PROJECTS.PAYMENT_PLANS, token);

export const addProjectPayment = (
  projectPaymentData: PaymentPlanInput,
  token: string,
) => postData(ENDPOINTS.PROJECTS.PAYMENT_PLANS, projectPaymentData, token);

const ITEM_TYPE_STORAGE_KEY = "paymentPlanItemTypeSpellings";
let acceptedItemTypes: Record<string, string> | null = null;

const itemTypeKey = (type: string) => type.trim().toLowerCase().replace(/[\s_-]+/g, "_");

function getAcceptedItemTypes(): Record<string, string> {
  if (acceptedItemTypes) return acceptedItemTypes;
  try {
    acceptedItemTypes = JSON.parse(localStorage.getItem(ITEM_TYPE_STORAGE_KEY) || "{}") || {};
  } catch {
    acceptedItemTypes = {};
  }
  return acceptedItemTypes!;
}

function rememberItemType(type: string, accepted: string) {
  const map = getAcceptedItemTypes();
  map[itemTypeKey(type)] = accepted;
  try {
    localStorage.setItem(ITEM_TYPE_STORAGE_KEY, JSON.stringify(map));
  } catch {
  }
}

function itemTypeCandidates(type: string): string[] {
  const key = itemTypeKey(type);
  const words = key.split("_").filter(Boolean);
  const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);
  return Array.from(
    new Set(
      [
        getAcceptedItemTypes()[key],
        key.toUpperCase(),
        type,
        key,
        words.map(cap).join(" "),
        cap(words.join(" ")),
        words.join(" "),
        words.map(cap).join(""),
        words.join("-"),
      ].filter((c): c is string => !!c)
    )
  );
}

function isInvalidTypeError(error: unknown): boolean {
  const data = (error as any)?.response?.data;
  if (!data) return false;
  const errors = JSON.stringify(data.errors ?? "");
  return /"type"/.test(errors) || /selected type is invalid/i.test(String(data.message ?? ""));
}

async function sendPlanItem(
  endpoint: string,
  method: "post" | "patch",
  item: PaymentPlanItemInput,
  token: string,
) {
  apiClientClass.syncToken(token);
  let lastError: unknown;
  for (const type of itemTypeCandidates(item.type)) {
    try {
      const response = await apiClientClass[method](endpoint, { ...item, type });
      rememberItemType(item.type, type);
      return response.data;
    } catch (error) {
      lastError = error;
      if (!isInvalidTypeError(error)) break;
    }
  }
  return handleError(lastError, endpoint);
}

export const addPaymentPlanItem = (
  paymentPlanItemData: PaymentPlanItemInput,
  token: string,
) => sendPlanItem(ENDPOINTS.PROJECTS.PAYMENT_PLAN_ITEMS, "post", paymentPlanItemData, token);

export const fetchPaymentPlanItems = (token?: string) =>
  fetchData(ENDPOINTS.PROJECTS.PAYMENT_PLAN_ITEMS, token);

export const updatePaymentPlanItem = (
  paymentPlanItemId: number,
  paymentPlanItemData: PaymentPlanItemInput,
  token: string,
) => sendPlanItem(ENDPOINTS.PROJECTS.PAYMENT_PLAN_ITEM_DETAIL(paymentPlanItemId), "patch", paymentPlanItemData, token);

export const deletePaymentPlan = (paymentPlanId: number, token: string) =>
  deleteData(ENDPOINTS.PROJECTS.PAYMENT_PLAN_DETAIL(paymentPlanId), token);

export const updatePaymentPlan = (
  paymentPlanId: number,
  paymentPlanData: any,
  token: string,
) => patchData(ENDPOINTS.PROJECTS.PAYMENT_PLAN_DETAIL(paymentPlanId), paymentPlanData, token);

export const editProject = (
  projectId: number,
  projectData: EditProjectInput,
  token: string,
) => editData(ENDPOINTS.PROJECTS.DETAIL(projectId), projectData, token);

export const editMilestone = (
  milestoneId: number,
  milestoneData: MilestoneSchema,
  token: string,
) => editData(ENDPOINTS.PROJECTS.MILESTONE_DETAIL(milestoneId), milestoneData, token);

export const editBuilding = (
  buildingId: number,
  buildingData: BuildingInputType,
  token: string,
) => editData(ENDPOINTS.PROJECTS.BUILDING_DETAIL(buildingId), buildingData, token);

export const editProjectFeature = (
  projectId: number,
  featureId: number,
  projectFeatureData: { value: string; description: string },
  token: string,
) =>
  editData(
    ENDPOINTS.PROJECTS.FEATURE_DETAIL(projectId, featureId),
    projectFeatureData,
    token,
  );

export const editProjectMedia = (
  mediaId: number,
  projectMediaData: {
    description: string;
    is_primary: boolean;
    my_order: boolean;
  },
  token: string,
) => editData(ENDPOINTS.PROJECTS.MEDIA_DASHBOARD_DETAIL(mediaId), projectMediaData, token);

export const editProjectPayment = (
  paymentId: number,
  projectPaymentData: {
    name?: string;
    payment_plan_type?: string;
    description?: string;
    total_cost?: number;
    period_by_years?: number;
    status?: string;
    user_id?: string;
    developerId?: number;
    [key: string]: any;
  },
  token: string,
) => patchData(ENDPOINTS.PROJECTS.PAYMENT_PLAN_DETAIL(paymentId), projectPaymentData, token);

export const deleteProject = (projectId: number, token: string) =>
  deleteData(ENDPOINTS.PROJECTS.RAW_DETAIL(projectId), token);

export const deleteMilestone = (milestoneId: number, token: string) =>
  deleteData(ENDPOINTS.PROJECTS.MILESTONE_DETAIL(milestoneId), token);

export const deleteBuilding = (buildingId: number, token: string) =>
  deleteData(ENDPOINTS.PROJECTS.BUILDING_DETAIL(buildingId), token);

export const deleteProjectFeature = (
  projectId: number,
  featureId: number,
  token: string,
) => deleteData(ENDPOINTS.PROJECTS.FEATURE_DETAIL(projectId, featureId), token);

export const deleteProjectMedia = (media_id: number, token: string) =>
  deleteData(ENDPOINTS.PROJECTS.MEDIA_DASHBOARD_DETAIL(media_id), token);

export const deleteProjectPayment = (
  payment_id: number,
  projectId: number,
  token: string,
) => deleteData(ENDPOINTS.PROJECTS.PAYMENT_PLAN_DETAIL(payment_id), token);

export const fetchProjectsDropdown = (
  token?: string,
  developerId?: number | string,
  search?: string,
  countryId?: string,
) => {
  const params = new URLSearchParams();
  if (developerId) params.append("developer_id", developerId.toString());
  if (search) params.append("search", search);
  if (countryId) params.append("country_id", countryId);

  const queryStr = params.toString() ? `?${params.toString()}` : "";
  return fetchData(`${ENDPOINTS.PROJECTS.DROPDOWN}${queryStr}`, token);
};

export const fetchV2Projects = (
  token?: string,
  page: number = 1,
  per_page: number = 12,
  developerId?: number | string,
  search?: string,
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: per_page.toString(),
  });
  if (developerId) params.append("developer_id", developerId.toString());
  if (search) params.append("search", search);

  return fetchData(`/v2/projects?${params.toString()}`, token);
};
