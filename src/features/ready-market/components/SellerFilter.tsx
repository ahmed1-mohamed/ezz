"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Check, ChevronDown, Loader2, Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { fetchDashboardUsers } from "@/data/api/services/users.service";
import { useDebounce } from "@/hooks/useDebounce";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export interface SellerValue {
  id: string;
  name: string;
}

interface SellerFilterProps {
  value: SellerValue | null;
  onChange: (value: SellerValue | null) => void;
}

const toSellers = (body: any): SellerValue[] => {
  const page = body?.data && !Array.isArray(body.data) && Array.isArray(body.data.data) ? body.data : body;
  const items: any[] = Array.isArray(page?.data) ? page.data : Array.isArray(page) ? page : [];
  return items
    .map((u) => {
      const user = u?.data ?? u;
      const id = user?.user_id ?? user?.id;
      const name = user?.name ?? [user?.first_name, user?.last_name].filter(Boolean).join(" ");
      return id ? { id: String(id), name: name || `#${id}` } : null;
    })
    .filter((u): u is SellerValue => u !== null);
};

/** Searchable seller dropdown; users are only requested while it is open. */
export function SellerFilter({ value, onChange }: SellerFilterProps) {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const { data: sellers = [], isFetching } = useQuery({
    queryKey: ["readyMarket", "sellers", debouncedSearch],
    queryFn: () => fetchDashboardUsers(token!, 1, 20, debouncedSearch),
    select: toSellers,
    enabled: !!token && open,
    staleTime: 5 * 60 * 1000,
  });

  const select = (seller: SellerValue | null) => {
    onChange(seller);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-xs font-normal transition-colors",
            value
              ? "border-[#007b78] bg-teal-50/50 text-[#007b78] dark:border-teal-700 dark:bg-teal-950/40 dark:text-teal-300"
              : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800"
          )}
        >
          <span className="max-w-[140px] truncate">{value?.name ?? t("readyMarket.filters.seller")}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-60 p-2">
        <div className="relative mb-2">
          <Search className="absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          <input
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("common.search")}
            className="h-8 w-full rounded-md border border-gray-200 bg-gray-50 ps-8 pe-2 text-xs outline-none focus:border-teal-400 dark:border-neutral-700 dark:bg-neutral-800"
          />
        </div>
        <div className="max-h-60 overflow-y-auto">
          <button
            type="button"
            onClick={() => select(null)}
            className="flex w-full items-center justify-between rounded px-2 py-1.5 text-start text-xs hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            {t("readyMarket.filters.all")}
            {!value && <Check className="h-3.5 w-3.5 text-teal-600" />}
          </button>
          {isFetching && sellers.length === 0 ? (
            <div className="flex justify-center py-3">
              <Loader2 className="h-4 w-4 animate-spin text-teal-600" />
            </div>
          ) : sellers.length === 0 ? (
            <p className="px-2 py-3 text-center text-xs text-gray-500">{t("readyMarket.filters.noSellers")}</p>
          ) : (
            sellers.map((seller) => (
              <button
                key={seller.id}
                type="button"
                onClick={() => select(seller)}
                className="flex w-full items-center justify-between rounded px-2 py-1.5 text-start text-xs hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                <span className="truncate">{seller.name}</span>
                {value?.id === seller.id && <Check className="h-3.5 w-3.5 shrink-0 text-teal-600" />}
              </button>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
