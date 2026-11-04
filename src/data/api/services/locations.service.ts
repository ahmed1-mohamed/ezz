import { AddressDataType, DldAreasDataType } from "@/types";
import { AreaInput } from "@/validators/area.schema";
import { CityInput } from "@/validators/city.schema";
import { EditLocationInput, LocationInput } from "@/validators/location.schema";
import {
  fetchData,
  fetchDLDAreasData,
  fetchPaginatedData,
  fetchPropertiesIdData,
  postData,
  editData,
  deleteData,
} from "../client";
import { ENDPOINTS } from "../endpoints";

export const fetchDldAreas = (token: string) =>
  fetchDLDAreasData(ENDPOINTS.LOCATIONS.DASHBOARD_AREAS, token);

export const fetchAreas = (token: string, page?: number, perPage?: number) => {
  const endpoint = perPage
    ? `${ENDPOINTS.LOCATIONS.AREAS}?page=${page || 1}&per_page=${perPage}`
    : ENDPOINTS.LOCATIONS.AREAS;
  return fetchPropertiesIdData(endpoint, token);
};

export const fetchCities = (token: string) =>
  fetchData(ENDPOINTS.LOCATIONS.DASHBOARD_CITIES, token);

export const fetchCityDetails = (cityId: number, token: string) =>
  fetchData(ENDPOINTS.LOCATIONS.CITIES_DETAIL(cityId), token);

export const fetchCitiesWithParams = (
  token: string,
  page: number = 1,
  perPage: number = 10,
  search?: string,
) => {
  const params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("per_page", perPage.toString());
  if (search) params.append("search", search);
  return fetchPaginatedData(`${ENDPOINTS.LOCATIONS.DASHBOARD_CITIES}?${params.toString()}`, token);
};

export const fetchAreasByCountry = (countryName: string, token: string) =>
  fetchData(`${ENDPOINTS.LOCATIONS.AREAS_ALL}?country=${encodeURIComponent(countryName)}`, token);

export const fetchStatesByCountry = (countryName: string, token: string) =>
  fetchData(`${ENDPOINTS.LOCATIONS.STATES}?country=${encodeURIComponent(countryName)}`, token);

export const fetchAddresses = (token: string) =>
  fetchData(ENDPOINTS.LOCATIONS.ADDRESSES, token);

export const fetchAreaDetails = (areaId: number, token: string) =>
  fetchData(ENDPOINTS.LOCATIONS.AREAS_DETAIL(areaId), token);

export const fetchDldAreaDetails = (dldAreaId: number, token: string) =>
  fetchData(ENDPOINTS.LOCATIONS.DLD_AREAS_DETAIL(dldAreaId), token);

export const fetchLocationsDetails = (locationId: number, token: string) =>
  fetchData(ENDPOINTS.LOCATIONS.DASHBOARD_LOCATIONS_DETAIL(locationId), token);

export const fetchAddressDetails = (addressId: number, token: string) =>
  fetchData(ENDPOINTS.LOCATIONS.ADDRESSES_DETAIL(addressId), token);

export const addArea = (areaData: AreaInput, token: string) =>
  postData(ENDPOINTS.LOCATIONS.AREAS, areaData, token);

export const addCity = (cityData: CityInput, token: string) =>
  postData(ENDPOINTS.LOCATIONS.CITIES, cityData, token);

export const addDldArea = (dldAreaData: DldAreasDataType, token: string) =>
  postData(ENDPOINTS.LOCATIONS.DLD_AREAS, dldAreaData, token);

export const addLocation = (locationData: LocationInput, token: string) =>
  postData(ENDPOINTS.LOCATIONS.LOCATIONS, locationData, token);

export const addAddress = (addressData: AddressDataType, token: string) =>
  postData(ENDPOINTS.LOCATIONS.ADDRESSES, addressData, token);

export const editArea = (areaId: number, areaData: AreaInput, token: string) =>
  editData(ENDPOINTS.LOCATIONS.AREAS_DETAIL(areaId), areaData, token);

export const editCity = (cityId: number, cityData: CityInput, token: string) =>
  editData(ENDPOINTS.LOCATIONS.CITIES_DETAIL(cityId), cityData, token);

export const editDldarea = (
  dldAreaId: number,
  dldAreaData: DldAreasDataType,
  token: string,
) => editData(ENDPOINTS.LOCATIONS.DLD_AREAS_DETAIL(dldAreaId), dldAreaData, token);

export const editLocation = (
  locationId: number,
  locationData: EditLocationInput,
  token: string,
) => editData(ENDPOINTS.LOCATIONS.DASHBOARD_LOCATIONS_DETAIL(locationId), locationData, token);

export const editAddress = (
  addressId: number,
  addressData: AddressDataType,
  token: string,
) => editData(ENDPOINTS.LOCATIONS.ADDRESSES_DETAIL(addressId), addressData, token);

export const deleteArea = (areaId: number, token: string) =>
  deleteData(ENDPOINTS.LOCATIONS.AREAS_DETAIL(areaId), token);

export const deleteDldArea = (dldAreaId: number, token: string) =>
  deleteData(ENDPOINTS.LOCATIONS.DLD_AREAS_DETAIL(dldAreaId), token);

export const deleteLocation = (locationId: number, token: string) =>
  deleteData(ENDPOINTS.LOCATIONS.DASHBOARD_LOCATIONS_DETAIL(locationId), token);

export const deleteAddress = (addressId: number, token: string) =>
  deleteData(ENDPOINTS.LOCATIONS.ADDRESSES_DETAIL(addressId), token);

import { apiClient } from "@/lib/apiClient";
import { CitiesDataType } from "@/types";

export const AdminLocationsService = {
  getLocations: (page: number = 1, perPage: number = 10, search?: string, city?: string, status?: string) => {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    });
    if (search && search.trim() !== "") params.append("search", search.trim());
    if (city && city !== "all") params.append("city_name", city);
    if (status && status !== "all") params.append("status", status);
    return apiClient.get(`/dashboard/locations?${params.toString()}`);
  },
  getLocation: (locationId: number) => {
    return apiClient.get(`/dashboard/locations/${locationId}`);
  },
  createLocation: (data: FormData | Record<string, unknown>) => {
    return apiClient.post("/dashboard/locations", data);
  },
  updateLocation: (locationId: number, data: FormData) => {
    return apiClient.put(`/dashboard/locations/${locationId}`, data);
  },
  deleteLocation: (locationId: number) => {
    return apiClient.delete(`/dashboard/locations/${locationId}`);
  },
};

export const AdminAreasService = {
  getAreas: (page: number = 1, perPage: number = 15, search?: string, status?: string) => {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      request: perPage.toString(),
    });
    if (search && search.trim() !== "") params.append("search", search.trim());
    if (status && status !== "all") params.append("status", status);
    return apiClient.get(`/dashboard/dldAreas?${params.toString()}`);
  },
  getAreasByCountry: (country: string) => {
    return apiClient.get(`/dashboard/areas/all?country=${country}`);
  },
  getArea: (areaId: number) => {
    return apiClient.get(`/dashboard/dldAreas/${areaId}`);
  },
  createArea: (data: AreaInput) => {
    return apiClient.post("/dashboard/dldAreas", data);
  },
  updateArea: (areaId: number, data: AreaInput) => {
    return apiClient.put(`/dashboard/dldAreas/${areaId}`, data);
  },
  deleteArea: (areaId: number) => {
    return apiClient.delete(`/dashboard/dldAreas/${areaId}`);
  },
};

export const AdminCitiesService = {
  getAllCities: async (): Promise<CitiesDataType[]> => {
    const response = await apiClient.get("/dashboard/cities/all");
    const envelope = response.data as { data: CitiesDataType[] };
    return envelope.data;
  },
  getCitiesByCountry: (country: string) => {
    return apiClient.get(`/dashboard/cities/all?country=${country}`);
  },
  getCities: (page: number = 1, perPage: number = 10, search?: string) => {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    });
    if (search && search.trim() !== "") params.append("search", search.trim());
    return apiClient.get(`/dashboard/cities?${params.toString()}`);
  },
  getCity: (cityId: number) => {
    return apiClient.get(`/dashboard/cities/${cityId}`);
  },
  createCity: (data: CityInput) => {
    return apiClient.post("/dashboard/cities", data);
  },
  updateCity: (cityId: number, data: CityInput) => {
    return apiClient.put(`/dashboard/cities/${cityId}`, data);
  },
  deleteCity: (cityId: number) => {
    return apiClient.delete(`/dashboard/cities/${cityId}`);
  },
};

export const AdminDldAreasService = {
  getAllDldAreas: async (): Promise<DldAreasDataType[]> => {
    const response = await apiClient.get("/dashboard/areas");
    const envelope = response.data as { data: DldAreasDataType[] };
    return envelope.data;
  },
  getDldArea: (dldAreaId: number) => {
    return apiClient.get(`/dldAreas/${dldAreaId}`);
  },
  createDldArea: (data: DldAreasDataType) => {
    return apiClient.post("/dldAreas", data);
  },
  updateDldArea: (dldAreaId: number, data: DldAreasDataType) => {
    return apiClient.put(`/dldAreas/${dldAreaId}`, data);
  },
  deleteDldArea: (dldAreaId: number) => {
    return apiClient.delete(`/dldAreas/${dldAreaId}`);
  },
};

