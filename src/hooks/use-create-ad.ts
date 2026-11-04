"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { AdminDevelopersService } from "@/features/developers/services/AdminDevelopersService";
import { unpackDevelopersResponse } from "@/features/developers/utils/map-developer";
import { unpackProjectsResponse } from "@/features/projects/utils/map-project";
import { fetchV2Projects } from "@/data/api-client";
import { apiClient } from "@/lib/apiClient";

// In-memory cache for clean queries
const developersCache = new Map<string, any[]>();
const projectsCache = new Map<string, any[]>();
const propertiesCache = new Map<string, any[]>();

export function useCreateAdData(
  isOpen: boolean,
  developerSearch: string,
  country: string,
  projectSearch?: string,
  propertySearch?: string,
  developerId?: string,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const [developers, setDevelopers] = useState<any[]>([]);
  const [projects, setProjects] = useState<{ id: number; name: string }[]>([]);
  const [properties, setProperties] = useState<{ id: number | string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [propertiesLoading, setPropertiesLoading] = useState(false);
  const [developerHasMore, setDeveloperHasMore] = useState(false);

  const loadDevelopers = useCallback(
    async (
      page: number = 1,
      perPage: number = 15,
      search?: string,
      isAppend: boolean = false,
    ) => {
      if (!token) return;

      const cacheKey = `${country || "all"}_${page}_${perPage}`;
      const isClean = !search || !search.trim();

      if (isClean && !isAppend && developersCache.has(cacheKey)) {
        const cached = developersCache.get(cacheKey)!;
        setDevelopers(cached);
        setDeveloperHasMore(cached.length >= perPage);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const countryParam = country && country !== "all" ? country : undefined;
        const data: any = await AdminDevelopersService.getDevelopersPaginated(
          page,
          perPage,
          search || undefined,
          undefined,
          countryParam,
        );

        const { itemsArray } = unpackDevelopersResponse(data) as any;

        const mappedDevelopers = itemsArray
          .map((dev: any) => ({
            id: dev.developer_id || dev.id,
            name: dev.developer_name || dev.name || `Developer #${dev.developer_id || dev.id}`,
          }))
          .filter((dev: any) => dev.id);

        if (isAppend) {
          setDevelopers((prev) => {
            const existingIds = new Set(prev.map((d: any) => d.id));
            const newUnique = mappedDevelopers.filter((d: any) => !existingIds.has(d.id));
            return [...prev, ...newUnique];
          });
        } else {
          setDevelopers(mappedDevelopers);
          if (isClean) {
            developersCache.set(cacheKey, mappedDevelopers);
          }
        }

        setDeveloperHasMore(itemsArray.length === perPage);
      } catch (error) {
        console.error("Error fetching developers:", error);
      } finally {
        setLoading(false);
      }
    },
    [token, country]
  );

  const loadProjects = useCallback(
    async (devId?: number, search?: string) => {
      if (!token) {
        setProjects([]);
        return;
      }

      const cacheKey = `${devId || "all"}`;
      const isClean = !search || !search.trim();

      if (isClean && projectsCache.has(cacheKey)) {
        setProjects(projectsCache.get(cacheKey)!);
        setProjectsLoading(false);
        return;
      }

      setProjectsLoading(true);
      try {
        const params: Record<string, any> = {
          page: 1,
          per_page: 100,
        };
        if (devId && !isNaN(devId)) {
          params.developer_id = devId;
        }
        if (search && search.trim()) {
          params.search = search.trim();
        }

        const results = await Promise.allSettled([
          apiClient.get("/dashboard/projects", { params }),
          fetchV2Projects(token, 1, 100, devId, search || undefined),
        ]);

        const allItemsMap = new Map<string, { id: number; name: string }>();

        results.forEach((res) => {
          if (res.status === "fulfilled" && res.value) {
            const val: any = (res.value as any)?.data || res.value;
            const { itemsArray } = unpackProjectsResponse(val);

            const devProjects = Array.isArray(val?.data?.projects)
              ? val.data.projects
              : Array.isArray(val?.projects)
              ? val.projects
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

              if (rawId && name) {
                const id = typeof rawId === "number" ? rawId : parseInt(rawId);
                if (!isNaN(id)) {
                  allItemsMap.set(id.toString(), { id, name });
                }
              }
            });
          }
        });

        let mappedProjects = Array.from(allItemsMap.values());

        if (isClean) {
          projectsCache.set(cacheKey, mappedProjects);
        }

        if (search && search.trim()) {
          const s = search.toLowerCase();
          mappedProjects = mappedProjects.filter((p) => p.name.toLowerCase().includes(s));
        }

        setProjects(mappedProjects);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setProjectsLoading(false);
      }
    },
    [token]
  );

  const loadProperties = useCallback(
    async (devId?: number, search?: string) => {
      if (!token) {
        setProperties([]);
        return;
      }

      const cacheKey = `${devId || "all"}`;
      const isClean = !search || !search.trim();

      if (isClean && propertiesCache.has(cacheKey)) {
        setProperties(propertiesCache.get(cacheKey)!);
        setPropertiesLoading(false);
        return;
      }

      setPropertiesLoading(true);
      try {
        const params: Record<string, any> = {
          page: 1,
          per_page: 100,
        };
        if (devId && !isNaN(devId)) {
          params.developer_id = devId;
        }
        if (search && search.trim()) {
          params.property_name = search.trim();
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

        const mappedProperties = propItems
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
          .filter((prop: any) => prop.id !== undefined && prop.id !== null);

        if (isClean) {
          propertiesCache.set(cacheKey, mappedProperties);
        }

        setProperties(mappedProperties);
      } catch (error) {
        console.error("Error fetching properties from /dashboard/properties:", error);
      } finally {
        setPropertiesLoading(false);
      }
    },
    [token]
  );

  useEffect(() => {
    if (isOpen && token) {
      loadDevelopers(1, 15, developerSearch || "", false);
    }
  }, [developerSearch, isOpen, token, country, loadDevelopers]);

  useEffect(() => {
    if (isOpen && developerId) {
      const devIdNum = parseInt(developerId);
      if (!isNaN(devIdNum)) {
        loadProjects(devIdNum, projectSearch || "");
      }
    } else {
      setProjects([]);
    }
  }, [isOpen, developerId, projectSearch, loadProjects]);

  useEffect(() => {
    if (isOpen && developerId) {
      const devIdNum = parseInt(developerId);
      if (!isNaN(devIdNum)) {
        loadProperties(devIdNum, propertySearch || "");
      }
    } else {
      setProperties([]);
    }
  }, [isOpen, developerId, propertySearch, loadProperties]);

  return {
    developers,
    projects,
    properties,
    loading,
    projectsLoading,
    propertiesLoading,
    developerHasMore,
    loadDevelopers,
    loadProjects,
    loadProperties,
  };
}