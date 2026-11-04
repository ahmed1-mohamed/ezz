"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { AdminPropertiesService } from "@/features/properties/services/AdminPropertiesService";
import { unpackProjectsResponse } from "@/features/projects/utils/map-project";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDebounce } from "@/hooks/useDebounce";

const PAGE_SIZE = 20;

/** Names of projects seen so far, so the trigger can show the selection without refetching. */
const projectNames = new Map<string, string>();

interface ProjectFilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * Project filter that loads one page of projects at a time (with server-side search) and only
 * once the dropdown is opened, instead of fetching every project when the page loads.
 */
export function ProjectFilterSelect({ value, onChange, className }: ProjectFilterSelectProps) {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search.trim());
  const observerRef = React.useRef<HTMLDivElement>(null);

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["projectsFilterOptions", debouncedSearch],
    queryFn: async ({ pageParam }) => {
      const response = await AdminPropertiesService.getProjects(pageParam, PAGE_SIZE, debouncedSearch);
      const { itemsArray, totalItems } = unpackProjectsResponse(response);
      return { items: itemsArray, total: totalItems, page: pageParam };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.items.length < PAGE_SIZE) return undefined;
      const loaded = allPages.reduce((acc, p) => acc + p.items.length, 0);
      return loaded < lastPage.total ? lastPage.page + 1 : undefined;
    },
    enabled: open,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  const options = React.useMemo(() => {
    const seen = new Set<string>();
    const list: { value: string; label: string }[] = [];
    data?.pages.forEach((page) =>
      page.items.forEach((item: any) => {
        const raw = item?.data || item;
        const id = raw?.project_id ?? raw?.id;
        if (id === undefined || id === null) return;
        const key = String(id);
        if (seen.has(key)) return;
        seen.add(key);
        const label = raw.project_name ?? raw.name ?? raw.title ?? key;
        projectNames.set(key, label);
        list.push({ value: key, label });
      })
    );
    return list;
  }, [data]);

  React.useEffect(() => {
    if (!open || !hasNextPage || isFetchingNextPage) return;
    const el = observerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchNextPage();
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [open, hasNextPage, isFetchingNextPage, fetchNextPage, options.length]);

  const isAll = !value || value === "all";
  const selectedLabel = isAll ? t("properties.filters.allProjects") : projectNames.get(value) ?? `#${value}`;

  const select = (next: string) => {
    onChange(next);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between h-9 px-3 text-xs font-normal bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-200",
            className
          )}
        >
          <span className="truncate">{selectedLabel}</span>
          <ChevronsUpDown className="ms-2 h-3.5 w-3.5 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[260px] p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput value={search} onValueChange={setSearch} placeholder={t("projects.filters.search")} />
          <CommandList className="max-h-[300px] overflow-y-auto">
            <CommandGroup>
              <CommandItem value="all" onSelect={() => select("all")} className="text-xs cursor-pointer">
                <Check className={cn("me-2 h-3.5 w-3.5", isAll ? "opacity-100" : "opacity-0")} />
                {t("properties.filters.allProjects")}
              </CommandItem>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.value}
                  onSelect={() => select(opt.value)}
                  className="text-xs cursor-pointer"
                >
                  <Check className={cn("me-2 h-3.5 w-3.5", value === opt.value ? "opacity-100" : "opacity-0")} />
                  <span className="truncate">{opt.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            {isLoading ? (
              <div className="p-3 flex justify-center">
                <Loader2 className="h-4 w-4 animate-spin text-teal-600" />
              </div>
            ) : isError ? (
              <div className="p-3 text-center text-xs text-red-500">{t("common.errorOccurred")}</div>
            ) : (
              options.length === 0 && <CommandEmpty>{t("common.noResults")}</CommandEmpty>
            )}

            {hasNextPage && (
              <div ref={observerRef} className="p-3 flex justify-center">
                {isFetchingNextPage && <Loader2 className="h-4 w-4 animate-spin text-teal-600" />}
              </div>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
