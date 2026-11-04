import { useQuery } from "@tanstack/react-query";
import { TeamService } from "../services/team.service";

export function useTeamPerformance() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["teamPerformance"],
    queryFn: TeamService.getTeamPerformance,
    staleTime: 60 * 1000,
  });

  return {
    overview: data?.overview,
    representatives: data?.representatives || [],
    isLoading,
    isError,
    error,
    refetch,
  };
}
