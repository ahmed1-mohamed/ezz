import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FollowUpsService } from "../services/follow-ups.service";
import { toast } from "sonner";

export function useFollowUps() {
  const queryClient = useQueryClient();
  const [isCalendarView, setIsCalendarView] = useState(false);
  const [completedIds, setCompletedIds] = useState<(string | number)[]>([]);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["follow-ups"],
    queryFn: FollowUpsService.getFollowUps,
    staleTime: 30 * 1000,
  });

  const activeFollowUps = useMemo(() => {
    const list = data?.data || [];
    return list.filter((item) => !completedIds.includes(item.id));
  }, [data?.data, completedIds]);

  const overdueFollowUps = useMemo(() => {
    return activeFollowUps.filter((item) => item.status === "overdue");
  }, [activeFollowUps]);

  const markDoneMutation = useMutation({
    mutationFn: (id: string | number) => FollowUpsService.markAsDone(id),
    onSuccess: (_, id) => {
      setCompletedIds((prev) => [...prev, id]);
      toast.success("Follow-up marked as done!");
      queryClient.invalidateQueries({ queryKey: ["follow-ups"] });
    },
    onError: (err: any) => {
      toast.error(err?.message || "Failed to mark follow-up as done");
    },
  });

  return {
    followUps: activeFollowUps,
    overdueFollowUps,
    overdueCount: overdueFollowUps.length,
    isLoading,
    isError,
    refetch,
    isCalendarView,
    setIsCalendarView,
    markAsDone: markDoneMutation.mutate,
    isMarkingDone: markDoneMutation.isPending,
  };
}