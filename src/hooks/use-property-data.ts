"use client";

import { useQuery } from "@tanstack/react-query";
import { AdminPropertiesService } from "@/features/properties/services/AdminPropertiesService";
import { unpackProjectsResponse } from "@/features/projects/utils/map-project";
import type {
  PropertyTypeDataType,
  PropertySubtypeDataType,
  ProjectsDataType,
} from "@/types";

export function usePropertyTypes() {
  return useQuery({
    queryKey: ["PropertiesType"],
    queryFn: () => AdminPropertiesService.getPropertyTypes(),
    select: (response: any) => {
      let arr = response?.data || response || [];
      if (arr && typeof arr === "object" && !Array.isArray(arr) && Array.isArray(arr.data)) {
        arr = arr.data;
      }
      if (!Array.isArray(arr)) return [];
      return arr.map((item: any) => {
        const raw = item?.data || item;
        return {
          ...raw,
          id: raw.id ?? raw.property_type_id ?? raw.type_id,
          name: (raw.name ?? raw.property_type_name ?? raw.type_name ?? String(raw.id ?? raw.property_type_id ?? raw.type_id ?? "")).trim(),
        };
      }) as PropertyTypeDataType[];
    },
  });
}

export function usePropertySubtypes() {
  return useQuery({
    queryKey: ["PropertiesSubtype"],
    queryFn: () => AdminPropertiesService.getPropertySubtypes(),
    select: (response: any) => {
      const arr = response?.data || response || [];
      if (!Array.isArray(arr)) return [];
      return arr.map((item: any) => {
        const raw = item?.data || item;
        return {
          ...raw,
          id: raw.id ?? raw.property_subtype_id,
          name: (raw.name ?? raw.property_subtype_name ?? raw.subtype_name ?? String(raw.id ?? "")).trim(),
          property_type_id: raw.property_type_id ?? raw.type_id,
        };
      }) as PropertySubtypeDataType[];
    },
  });
}

export function useProjectsForSelect(
  page?: number,
  perPage?: number,
  search: string = "",
) {
  return useQuery({
    queryKey: ["Projects", page ?? "all", perPage ?? "all", search],
    queryFn: () =>
      page !== undefined && perPage !== undefined
        ? AdminPropertiesService.getProjects(page, perPage, search)
        : AdminPropertiesService.getAllProjects(search),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    select: (response: any) => {
      const { itemsArray } = unpackProjectsResponse(response);
      const rawList =
        itemsArray.length > 0
          ? itemsArray
          : Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response)
          ? response
          : [];
      if (!Array.isArray(rawList)) return [];
      return rawList.map((item: any) => {
        const raw = item?.data || item;
        return {
          ...raw,
          project_id: raw.project_id ?? raw.id,
          project_name: raw.project_name ?? raw.name ?? raw.title ?? String(raw.project_id ?? raw.id ?? ""),
        };
      }) as ProjectsDataType[];
    },
  });
}