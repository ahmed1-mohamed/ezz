import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TargetsCommissionService } from "../services/targets.service";
import { RepTargetRow, TargetsCommissionMonthData } from "../types";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export function useTargetsCommission(initialMonth: string = "2026-08") {
  const queryClient = useQueryClient();
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [defaultRow, setDefaultRow] = useState<RepTargetRow | null>(null);
  const [repRows, setRepRows] = useState<RepTargetRow[]>([]);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["targetsCommission", selectedMonth],
    queryFn: () => TargetsCommissionService.getTargetsForMonth(selectedMonth),
    staleTime: 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      setDefaultRow(data.default_target);
      setRepRows(data.reps);
    }
  }, [data]);

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!defaultRow) return;
      await TargetsCommissionService.saveTargetsForMonth({
        month: selectedMonth,
        default_target: {
          target: Number(defaultRow.target) || 0,
          comm_rate: Number(defaultRow.comm_rate) || 0,
        },
        reps: repRows.map((r) => ({
          rep_id: r.rep_id!,
          target: Number(r.target) || 0,
          comm_rate: Number(r.comm_rate) || 0,
        })),
      });
    },
    onSuccess: () => {
      toast.success(
        isRTL
          ? "تم حفظ الأهداف والعمولات بنجاح!"
          : "Targets & commissions saved successfully!"
      );
      queryClient.invalidateQueries({ queryKey: ["targetsCommission"] });
    },
    onError: (err: any) => {
      toast.error(err?.message || "Failed to save targets");
    },
  });

  const updateDefaultTarget = (target: number | "") => {
    if (!defaultRow) return;
    setDefaultRow({ ...defaultRow, target });
  };

  const updateDefaultCommRate = (comm_rate: number | "") => {
    if (!defaultRow) return;
    setDefaultRow({ ...defaultRow, comm_rate });
  };

  const updateRepTarget = (repId: string | number, target: number | "") => {
    setRepRows((prev) =>
      prev.map((r) => (r.rep_id === repId ? { ...r, target } : r))
    );
  };

  const updateRepCommRate = (repId: string | number, comm_rate: number | "") => {
    setRepRows((prev) =>
      prev.map((r) => {
        if (r.rep_id === repId) {
          const rateNum = Number(comm_rate) || 0;
          const earned = r.achieved * (rateNum / 100);
          return { ...r, comm_rate, earned };
        }
        return r;
      })
    );
  };

  // Compute totals
  const totalTarget = repRows.reduce(
    (acc, r) => acc + (Number(r.target) || 0),
    0
  );
  const totalAchieved = repRows.reduce((acc, r) => acc + (r.achieved || 0), 0);
  const totalCommission = repRows.reduce((acc, r) => acc + (r.earned || 0), 0);

  return {
    selectedMonth,
    setSelectedMonth,
    defaultRow,
    repRows,
    totalTarget,
    totalAchieved,
    totalCommission,
    isLoading,
    isSaving: saveMutation.isPending,
    saveTargets: saveMutation.mutate,
    updateDefaultTarget,
    updateDefaultCommRate,
    updateRepTarget,
    updateRepCommRate,
    refetch,
  };
}
