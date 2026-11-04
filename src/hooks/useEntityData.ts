import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

interface EntityItem {
  id: string;
  name: string;
  code?: string;
}

interface UseEntityDataReturn {
  developers: EntityItem[];
  projects: EntityItem[];
  countries: (EntityItem & { code: string })[];
  units: EntityItem[];
  isLoadingDevelopers: boolean;
  isLoadingProjects: boolean;
  isLoadingCountries: boolean;
  isLoadingUnits: boolean;
  isLoadingEntities: boolean;
}

// Distinct sub-key: other hooks cache different response shapes under the bare ["countries"],
// ["projects"], etc. keys, while prefix invalidations of those keys still refresh these lists.
const ENTITY_OPTIONS = "entityOptions";

function dedupe<T extends { id: string }>(arr: T[]): T[] {
  return arr.filter((item, idx, self) => self.findIndex((x) => x.id === item.id) === idx);
}

// Optional per-list gates (all default to true) so callers can defer a list until the UI that shows it is visible.
export interface UseEntityDataOptions {
  developers?: boolean;
  projects?: boolean;
  countries?: boolean;
  units?: boolean;
}

export function useEntityData(options: UseEntityDataOptions = {}): UseEntityDataReturn {
  const {
    developers: developersEnabled = true,
    projects: projectsEnabled = true,
    countries: countriesEnabled = true,
    units: unitsEnabled = true,
  } = options;

  const { data: developers = [], isLoading: isLoadingDevelopers } = useQuery<EntityItem[]>({
    queryKey: ["developers", ENTITY_OPTIONS],
    queryFn: async () => {
      const res = (await apiClient.get("/all-developers")) as any;
      const list: any[] = res?.data?.data ?? res?.data ?? [];
      return dedupe(
        list.map((dev: any) => {
          const d = dev?.data ?? dev;
          return { id: d.id?.toString() ?? "", name: d.name || d.company_name || `Developer ${d.id}` };
        })
      );
    },
    staleTime: 5 * 60 * 1000,
    enabled: developersEnabled,
  });

  const { data: projects = [], isLoading: isLoadingProjects } = useQuery<EntityItem[]>({
    queryKey: ["projects", ENTITY_OPTIONS],
    queryFn: async () => {
      const res = (await apiClient.get("/projects")) as any;
      const list: any[] = res?.data?.data ?? res?.data ?? [];
      return dedupe(
        list.map((proj: any) => {
          const p = proj?.data ?? proj;
          return {
            id: (p.project_id ?? p.id)?.toString() ?? "",
            name: p.project_name || p.name || `Project ${p.project_id ?? p.id}`,
          };
        })
      );
    },
    staleTime: 5 * 60 * 1000,
    enabled: projectsEnabled,
  });

  const { data: countries = [], isLoading: isLoadingCountries } = useQuery<(EntityItem & { code: string })[]>({
    queryKey: ["countries", ENTITY_OPTIONS],
    queryFn: async () => {
      const res = (await apiClient.get("/dashboard/countries")) as any;
      const list: any[] = res?.data?.data ?? res?.data ?? [];
      return dedupe(
        list.map((c: any) => {
          const rawCode = c.code || c.iso2;
          let resolvedCode = "";
          if (rawCode) {
            resolvedCode = rawCode.toLowerCase();
          } else {
            const n = c.name?.toLowerCase() || "";
            if (n.includes("egypt")) resolvedCode = "eg";
            else if (n.includes("uae") || n.includes("united arab emirates") || n.includes("emirates")) resolvedCode = "ae";
            else resolvedCode = n;
          }
          return {
            id: c.id?.toString() ?? "",
            name: c.name || `Country ${c.id}`,
            code: resolvedCode,
          };
        })
      );
    },
    staleTime: 10 * 60 * 1000,
    enabled: countriesEnabled,
  });

  const { data: units = [], isLoading: isLoadingUnits } = useQuery<EntityItem[]>({
    queryKey: ["properties", ENTITY_OPTIONS],
    queryFn: async () => {
      const res = (await apiClient.get("/properties")) as any;
      const list: any[] = res?.data?.data ?? res?.data ?? [];
      return dedupe(
        list.map((unit: any) => {
          const u = unit?.data ?? unit;
          const id = (u.property_id ?? u.unit_id ?? u.id)?.toString() ?? "";
          const name = u.city_name || u.title || `Unit ${id}`;
          return { id, name };
        })
      );
    },
    staleTime: 5 * 60 * 1000,
    enabled: unitsEnabled,
  });

  return {
    developers,
    projects,
    countries,
    units,
    isLoadingDevelopers,
    isLoadingProjects,
    isLoadingCountries,
    isLoadingUnits,
    isLoadingEntities: isLoadingDevelopers || isLoadingProjects || isLoadingCountries || isLoadingUnits,
  };
}