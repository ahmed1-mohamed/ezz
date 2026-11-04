"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { fetchAd, fetchV2Projects, fetchProjectsDropdown } from "@/data/api-client";
import { unpackProjectsResponse } from "@/features/projects/utils/map-project";
import { unpackDevelopersResponse } from "@/features/developers/utils/map-developer";
import { AdminDevelopersService } from "@/features/developers/services/AdminDevelopersService";
import { apiClient } from "@/lib/apiClient";
import { useDebounce } from "@/hooks/useDebounce";

interface Developer {
  id: number;
  name: string;
}

interface Project {
  id: number;
  name: string;
}

interface Property {
  id: number | string;
  name: string;
}

export function useAdQuery(adId: string | number | null, enabled: boolean = true) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  return useQuery({
    queryKey: ["ad", adId],
    queryFn: async () => {
      if (!adId || !token) return null;
      const response = await fetchAd(adId.toString(), token);
      return (response as any)?.data || response;
    },
    enabled: !!adId && !!token && enabled,
    staleTime: 0,
    gcTime: 0,
  });
}

export function useAdEditData(
  adId: string | number | null,
  isOpen: boolean,
  country: string,
  developerId?: string,
  linkTo?: string,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const [developerSearch, setDeveloperSearch] = useState("");
  const [projectSearch, setProjectSearch] = useState("");
  const [propertySearch, setPropertySearch] = useState("");

  const debouncedDeveloperSearch = useDebounce(developerSearch);
  const debouncedProjectSearch = useDebounce(projectSearch);
  const debouncedPropertySearch = useDebounce(propertySearch);

  useEffect(() => {
    setProjectSearch("");
    setPropertySearch("");
  }, [linkTo]);

  const parsedCountry = parseInt(country);
  const countryId = !isNaN(parsedCountry) ? parsedCountry.toString() :
    country === "Egypt" ? "1" :
    country === "UAE" ? "2" :
    country === "Oman" ? "3" : "1";

  const { data: adData, isLoading: loadingAd } = useAdQuery(adId, isOpen);

  const { data: developersData, isLoading: developersLoading } = useQuery({
    queryKey: ["developers", countryId, debouncedDeveloperSearch],
    queryFn: async () => {
      const countryParam = country && country !== "all" ? countryId : undefined;
      const data: any = await AdminDevelopersService.getDevelopersPaginated(
        1,
        50,
        debouncedDeveloperSearch || undefined,
        undefined,
        countryParam,
      );
      const { itemsArray } = unpackDevelopersResponse(data);
      return itemsArray
        .map((dev: any) => ({
          id: dev.developer_id || dev.id,
          name: dev.developer_name || dev.name || `Developer #${dev.developer_id || dev.id}`,
        }))
        .filter((dev: any) => dev.id) as Developer[];
    },
    enabled: !!token && isOpen,
    staleTime: 5 * 60 * 1000,
  });

  const { data: projectsData, isLoading: projectsLoading } = useQuery({
    queryKey: ["projects", developerId, countryId, debouncedProjectSearch],
    queryFn: async () => {
      const devIdNum = developerId ? parseInt(developerId) : undefined;

      const params: Record<string, any> = {
        page: 1,
        per_page: 100,
      };
      if (devIdNum && !isNaN(devIdNum)) {
        params.developer_id = devIdNum;
      }
      if (countryId) {
        params.country_id = countryId;
      }
      if (debouncedProjectSearch && debouncedProjectSearch.trim()) {
        params.search = debouncedProjectSearch.trim();
      }

      const results = await Promise.allSettled([
        apiClient.get("/dashboard/projects", { params }),
        fetchV2Projects(token!, 1, 100, devIdNum, debouncedProjectSearch || undefined),
        fetchProjectsDropdown(token!, devIdNum, debouncedProjectSearch || undefined, countryId),
      ]);

      const allItemsMap = new Map<string, Project>();

      results.forEach((res) => {
        if (res.status === "fulfilled" && res.value) {
          const val: any = (res.value as any)?.data || res.value;
          const { itemsArray } = unpackProjectsResponse(val);
          const devProjects = Array.isArray(val?.data?.projects)
            ? val.data.projects
            : Array.isArray(val?.projects)
              ? val.projects
              : Array.isArray(val?.data)
                ? val.data
                : [];

          const combined = [...itemsArray, ...devProjects];

          combined.forEach((proj: any) => {
            if (!proj) return;
            const rawId = proj.project_id || proj.id || proj.projectId || proj.value;
            const name =
              proj.project_name ||
              proj.name ||
              proj.title ||
              proj.projectName ||
              proj.label ||
              (rawId ? `Project #${rawId}` : "");

            // If a developer is selected, ensure the project belongs to this developer
            if (devIdNum) {
              const pDevId = proj.developer_id || proj.developer?.developer_id || proj.developer?.id || proj.developerId;
              if (pDevId && !isNaN(parseInt(pDevId)) && parseInt(pDevId) !== devIdNum) {
                return;
              }
            }

            if (rawId && name) {
              const id = typeof rawId === "number" ? rawId : parseInt(rawId);
              if (!isNaN(id)) {
                allItemsMap.set(id.toString(), { id, name });
              }
            }
          });
        }
      });

      return Array.from(allItemsMap.values());
    },
    enabled: !!token && isOpen && (linkTo === "PROJECTS" || !linkTo),
    staleTime: 5 * 60 * 1000,
  });

  const { data: propertiesData, isLoading: propertiesLoading } = useQuery({
    queryKey: ["properties", developerId, debouncedPropertySearch],
    queryFn: async () => {
      const devIdNum = developerId ? parseInt(developerId) : undefined;
      const params: Record<string, any> = {
        page: 1,
        per_page: 100,
      };
      if (devIdNum && !isNaN(devIdNum)) {
        params.developer_id = devIdNum;
      }
      if (debouncedPropertySearch && debouncedPropertySearch.trim()) {
        params.property_name = debouncedPropertySearch.trim();
      }

      const response = await apiClient.get("/dashboard/properties", { params });
      const raw: any = response.data;

      const propItems = (() => {
        if (!raw) return [];
        if (Array.isArray(raw)) return raw;
        if (Array.isArray(raw.data)) return raw.data;
        if (raw.data && Array.isArray(raw.data.data)) return raw.data.data;
        if (raw.data && Array.isArray(raw.data.properties)) return raw.data.properties;
        if (Array.isArray(raw.properties)) return raw.properties;
        return [];
      })();

      return propItems
        .filter((prop: any) => {
          if (!prop) return false;
          if (devIdNum) {
            const propDevId = prop.developer_id || prop.developer?.developer_id || prop.developer?.id || prop.developerId;
            if (propDevId && !isNaN(parseInt(propDevId)) && parseInt(propDevId) !== devIdNum) {
              return false;
            }
          }
          return true;
        })
        .map((prop: any) => {
          const propId = prop.property_id ?? prop.id ?? prop.property_no;
          const propName =
            (prop.property_name != null && String(prop.property_name).trim() !== ""
              ? String(prop.property_name)
              : null) ||
            (prop.name != null && String(prop.name).trim() !== "" ? String(prop.name) : null) ||
            (prop.title != null && String(prop.title).trim() !== "" ? String(prop.title) : null) ||
            (prop.property_no != null && String(prop.property_no).trim() !== ""
              ? String(prop.property_no)
              : null) ||
            (prop.unitNumber ? `Unit ${prop.unitNumber}` : "") ||
            `Property #${propId}`;

          return {
            id: propId,
            name: propName,
          };
        })
        .filter((prop: any) => prop.id !== undefined && prop.id !== null) as Property[];
    },
    enabled: !!token && isOpen && linkTo === "PROPERTIES",
    staleTime: 5 * 60 * 1000,
  });

  return {
    loadingAd,
    adData,
    developers: developersData || [],
    developerSearch,
    setDeveloperSearch,
    developersLoading,
    developerHasMore: false,
    projects: projectsData || [],
    properties: propertiesData || [],
    projectsLoading,
    propertiesLoading,
    projectSearch,
    setProjectSearch,
    propertySearch,
    setPropertySearch,
  };
}