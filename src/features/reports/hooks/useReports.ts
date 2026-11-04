import { useQuery } from "@tanstack/react-query";
import { ReportsService } from "../services/reports.service";

export function useReports() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["performanceReports"],
    queryFn: ReportsService.getPerformanceReports,
    staleTime: 60 * 1000,
  });

  return {
    stats: data?.stats,
    stages: data?.stages || [],
    isLoading,
    isError,
    error,
    refetch,
  };
}
