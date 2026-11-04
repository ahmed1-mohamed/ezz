"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { AdminProjectsService } from "../services/AdminProjectsService";
import { unpackProjectsResponse, mapProject } from "../utils/map-project";
import { useMemo } from "react";

export default function useProjects(
  page: number = 1,
  perPage: number = 10,
  search?: string,
  status?: string,
  projectType?: string,
  countryId?: string | number,
  enabled: boolean = true,
) {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const queryClient = useQueryClient();

  const paginatedProjectsData = useQuery({
    queryKey: ["projects", page, perPage, search, status, projectType, countryId],
    queryFn: () =>
      AdminProjectsService.getProjectsPaginated(
        page,
        perPage,
        search,
        status,
        projectType,
        countryId,
      ),
    retry: false,
    enabled: !!token && enabled,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const deleteProjectMutation = useMutation({
    mutationFn: (id: number) => AdminProjectsService.deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  const toggleActiveMutation = useMutation({
    mutationFn: ({ id, isActive }: { id: number; isActive: boolean }) =>
      AdminProjectsService.toggleActive(id, isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  const toggleFeaturedMutation = useMutation({
    mutationFn: ({ id, isFeatured }: { id: number; isFeatured: boolean }) =>
      AdminProjectsService.toggleFeatured(id, isFeatured),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  const { itemsArray, totalItems } = useMemo(() => {
    return unpackProjectsResponse(paginatedProjectsData.data);
  }, [paginatedProjectsData.data]);

  const projects = useMemo(() => itemsArray.map(mapProject), [itemsArray]);

  return {
    paginatedProjectsData,
    projects,
    totalProjects: totalItems,
    deleteProjectMutation,
    toggleActiveMutation,
    toggleFeaturedMutation,
  };
}
