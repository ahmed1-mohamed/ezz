import { useState, useMemo, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { QuotationsService } from "../services/quotations.service";
import { QuotationStatus } from "../types";
import { toast } from "sonner";
import { useDebounce } from "@/hooks/useDebounce";

export function useQuotations() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [status, setStatus] = useState<QuotationStatus>("all");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const queryKey = ["quotations", { search: debouncedSearch, status, page, perPage }];

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey,
    queryFn: () => QuotationsService.getQuotations({ search: debouncedSearch, status, page, per_page: perPage }),
    staleTime: 30 * 1000,
  });

  const quotations = useMemo(() => data?.data || [], [data?.data]);
  const total = data?.total || 0;
  const totalPages = data?.total_pages || 1;

  const deleteMutation = useMutation({
    mutationFn: (id: string | number) => QuotationsService.deleteQuotation(id),
    onSuccess: () => {
      toast.success("Quotation deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["quotations"] });
    },
    onError: (err: any) => {
      toast.error(err?.message || "Failed to delete quotation");
    },
  });

  return {
    quotations,
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
    setStatus: (val: QuotationStatus) => {
      setStatus(val);
      setPage(1);
    },
    setPage,
    setPerPage,
    deleteQuotation: deleteMutation.mutate,
  };
}