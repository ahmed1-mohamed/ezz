import { useState, useMemo, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { LeadsService } from "../services/leads.service";
import { LeadStatus, Lead } from "../types";
import { toast } from "sonner";
import { useDebounce } from "@/hooks/useDebounce";

export function useLeads() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [status, setStatus] = useState<LeadStatus>("all");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isPipelineView, setIsPipelineView] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const queryKey = ["leads", { search: debouncedSearch, status, page, perPage }];

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey,
    queryFn: () => LeadsService.getLeads({ search: debouncedSearch, status, page, per_page: perPage }),
    staleTime: 30 * 1000,
  });

  const leads = useMemo(() => data?.data || [], [data?.data]);
  const total = data?.total || 0;
  const totalPages = data?.total_pages || 1;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(leads.map((l) => String(l.id)));
    } else {
      setSelectedLeads([]);
    }
  };

  const handleSelectOne = (id: string, checked: boolean) => {
    setSelectedLeads((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const deleteMutation = useMutation({
    mutationFn: (id: string | number) => LeadsService.deleteLead(id),
    onSuccess: () => {
      toast.success("Lead deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
    onError: (err: any) => {
      toast.error(err?.message || "Failed to delete lead");
    },
  });

  return {
    leads,
    total,
    page,
    perPage,
    totalPages,
    isLoading,
    isError,
    error,
    refetch,
    search,
    setSearch,
    status,
    setStatus: (val: LeadStatus) => {
      setStatus(val);
      setPage(1);
    },
    setPage,
    setPerPage,
    isPipelineView,
    setIsPipelineView,
    selectedLeads,
    handleSelectAll,
    handleSelectOne,
    deleteLead: deleteMutation.mutate,
  };
}