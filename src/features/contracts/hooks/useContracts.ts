import { useState, useMemo, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ContractsService } from "../services/contracts.service";
import { ContractStatus } from "../types";
import { toast } from "sonner";
import { useDebounce } from "@/hooks/useDebounce";

export function useContracts() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [status, setStatus] = useState<ContractStatus>("all");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const queryKey = ["contracts", { search: debouncedSearch, status, page, perPage }];

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey,
    queryFn: () => ContractsService.getContracts({ search: debouncedSearch, status, page, per_page: perPage }),
    staleTime: 30 * 1000,
  });

  const contracts = useMemo(() => data?.data || [], [data?.data]);
  const total = data?.total || 0;
  const totalPages = data?.total_pages || 1;

  const deleteMutation = useMutation({
    mutationFn: (id: string | number) => ContractsService.deleteContract(id),
    onSuccess: () => {
      toast.success("Contract deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["contracts"] });
    },
    onError: (err: any) => {
      toast.error(err?.message || "Failed to delete contract");
    },
  });

  return {
    contracts,
    total,
    page,
    perPage,
    totalPages,
    isLoading,
    isError,
    refetch,
    search,
    setSearch,
    status,
    setStatus: (val: ContractStatus) => {
      setStatus(val);
      setPage(1);
    },
    setPage,
    setPerPage,
    deleteContract: deleteMutation.mutate,
  };
}