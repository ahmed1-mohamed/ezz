import { PropertiesDataType, PropertySubtypeDataType, PropertyTypeDataType } from "@/types";
import { CreatePropertyMediaInput } from "@/validators/create-property-media.schema";
import { CreatePropertyFeatureInput } from "@/validators/property-feature.schema";
import { PropertiesInput } from "@/validators/propertiesSchema";
import {
  fetchData,
  fetchData2,
  fetchPropertiesCreateData,
  fetchPropertiesData,
  postData,
  postDataImg,
  editData,
  deleteData,
} from "../client";
import { ENDPOINTS } from "../endpoints";

export const fetchPropertyTypes = (token: string) =>
  fetchPropertiesCreateData(ENDPOINTS.PROPERTIES.TYPES, token);

export const fetchPropertySubtype = (token: string) =>
  fetchPropertiesCreateData(ENDPOINTS.PROPERTIES.SUBTYPES, token);

export const fetchPropertiesByDeveloper = (
  token: string,
  developer_id: number,
  status: string = "active",
  per_page: string = "all",
  search?: string,
) => {
  const params = new URLSearchParams({
    developer_id: developer_id.toString(),
    status,
    per_page,
  });
  if (search) {
    params.append("search", search);
  }
  return fetchData(`${ENDPOINTS.PROPERTIES.BASE}?${params.toString()}`, token);
};

export const fetchProperties = (
  sortBy: string[] = [],
  sortOrder: string[] = [],
  selectedCountries: number[] = [],
  selectedDevelopers: number[] = [],
  selectedProjects: number[] = [],
  per_page: number | string = "all",
  page?: number,
) =>
  fetchPropertiesData(
    ENDPOINTS.PROPERTIES.FILTER,
    sortBy,
    sortOrder,
    selectedCountries,
    selectedDevelopers,
    selectedProjects,
    per_page,
    page,
  );

export const fetchPropertiesSorted = (sortBy: string) =>
  fetchData2(`${ENDPOINTS.PROPERTIES.GET_PROPERTY}?sort_by=${sortBy}`);

export const fetchImportProperties = (token: string) =>
  fetchData(ENDPOINTS.PROPERTIES.BASE, token);

export const fetchPropertyTypesDetails = (
  propertyTypeId: number,
  token: string,
) => fetchData(ENDPOINTS.PROPERTIES.TYPE_DETAIL(propertyTypeId), token);

export const fetchPropertySubtypesDetails = (
  propertySubtypeId: number,
  token: string,
) => fetchData(ENDPOINTS.PROPERTIES.SUBTYPE_DETAIL(propertySubtypeId), token);

export const fetchPropertyDetails = (propertyId: number, token: string) =>
  fetchData(ENDPOINTS.PROPERTIES.DETAIL(propertyId), token);

export const fetchPropertyMediaDetails = (mediaId: number, token: string) =>
  fetchData(ENDPOINTS.PROPERTIES.MEDIA_DETAIL(mediaId), token);

export const fetchPropertyFeatureDetails = (
  propertyId: number,
  featureId: number,
  token: string,
) => fetchData(ENDPOINTS.PROPERTIES.FEATURE_DETAIL(propertyId, featureId), token);

export const addPropertyType = (
  propertyTypeData: PropertyTypeDataType,
  token: string,
) => postData(ENDPOINTS.PROPERTIES.TYPES_RAW, propertyTypeData, token);

export const addPropertySubtype = (
  propertySubtypeData: PropertySubtypeDataType,
  token: string,
) => postData(ENDPOINTS.PROPERTIES.SUBTYPES_RAW, propertySubtypeData, token);

export const addProperty = (propertyData: PropertiesInput, token: string) =>
  postData(ENDPOINTS.PROPERTIES.BASE, propertyData, token);

export const addPropertyFeature = (
  propertyFeatureData: CreatePropertyFeatureInput,
  token: string,
) => postData(ENDPOINTS.PROPERTIES.FEATURES, propertyFeatureData, token);

export const savePropertyFeaturesBulk = (
  propertyFeaturesData: {
    property_id: number;
    features: { feature_id: number; value?: string }[];
  },
  token: string,
) => postData(ENDPOINTS.PROPERTIES.FEATURES, propertyFeaturesData, token);

export const addPropertyMedia = (
  propertyMediaData: CreatePropertyMediaInput,
  token: string,
) => postDataImg(ENDPOINTS.PROPERTIES.MEDIA, propertyMediaData, token);

export const editPropertyType = (
  propertyTypeId: number,
  propertyTypeData: PropertyTypeDataType,
  token: string,
) => editData(ENDPOINTS.PROPERTIES.TYPE_DETAIL(propertyTypeId), propertyTypeData, token);

export const editPropertySubtype = (
  propertySubtypeId: number,
  propertySubtypeData: PropertySubtypeDataType,
  token: string,
) =>
  editData(
    ENDPOINTS.PROPERTIES.SUBTYPE_DETAIL(propertySubtypeId),
    propertySubtypeData,
    token,
  );

export const editProperty = (
  propertyId: number,
  propertyData: PropertiesDataType,
  token: string,
) => editData(ENDPOINTS.PROPERTIES.BY_ID(propertyId), propertyData, token);

export const editPropertyFeature = (
  propertyId: number,
  featureId: number,
  propertyFeatureData: { value: string },
  token: string,
) =>
  editData(
    ENDPOINTS.PROPERTIES.FEATURE_DETAIL(propertyId, featureId),
    propertyFeatureData,
    token,
  );

export const editPropertyMedia = (
  mediaId: number,
  propertyMediaData: {
    description: string;
    is_primary: boolean;
    my_order: boolean;
  },
  token: string,
) => editData(ENDPOINTS.PROPERTIES.MEDIA_DETAIL(mediaId), propertyMediaData, token);

export const deletePropertyType = (propertyTypeId: number, token: string) =>
  deleteData(ENDPOINTS.PROPERTIES.TYPE_DETAIL(propertyTypeId), token);

export const deletePropertySubtype = (
  propertySubtypeId: number,
  token: string,
) => deleteData(ENDPOINTS.PROPERTIES.SUBTYPE_DETAIL(propertySubtypeId), token);

export const deleteProperty = (propertyId: number, token: string) =>
  deleteData(ENDPOINTS.PROPERTIES.BY_ID(propertyId), token);

export const deletePropertyFeature = (
  propertyId: number,
  featureId: number,
  token: string,
) => deleteData(ENDPOINTS.PROPERTIES.FEATURE_DETAIL(propertyId, featureId), token);

export const deletePropertyMedia = (media_id: number, token: string) =>
  deleteData(ENDPOINTS.PROPERTIES.MEDIA_DETAIL(media_id), token);

export const deletePropertyPayment = (
  payment_id: number,
  propId: number,
  token: string,
) => deleteData(ENDPOINTS.PROJECTS.PAYMENT_PLAN_DETAIL(payment_id), token);
