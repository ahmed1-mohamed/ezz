"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { fetchDashboardUsers, fetchUsersDetails } from "@/data/api/services/users.service";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDebounce } from "@/hooks/useDebounce";

interface UserSelectProps {
  selectedId: number | null;
  onChange: (id: number | null) => void;
  hasError?: boolean;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

function UserAvatar({ src, label }: { src?: string; label: string }) {
  const [hasError, setHasError] = React.useState(false);

  if (!src || hasError) {
    return <span>{getInitials(label)}</span>;
  }

  return (
    <img
      src={src}
      alt={label}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className="h-full w-full object-cover"
    />
  );
}

export function UserSelect({ selectedId, onChange, hasError }: UserSelectProps) {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search);

  const observerRef = React.useRef<HTMLDivElement>(null);

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["dashboardUsersInfinite", debouncedSearch],
    queryFn: ({ pageParam = 1 }) =>
      fetchDashboardUsers(token!, pageParam, 20, debouncedSearch),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage?.total || 0;
      const loadedCount = allPages.reduce((acc, p) => acc + (p?.data?.length || 0), 0);
      return loadedCount < total ? allPages.length + 1 : undefined;
    },
    // The options list is only rendered inside the popover; load it on first open.
    // The selected user's label is resolved by the detail query below.
    enabled: !!token && open,
  });

  const { data: selectedUserData } = useQuery({
    queryKey: ["dashboardUserDetail", selectedId],
    queryFn: () => fetchUsersDetails(selectedId!, token!),
    enabled: !!token && !!selectedId,
  });

  const users = React.useMemo(() => {
    return data?.pages.flatMap((page) => page?.data || []) || [];
  }, [data]);

  const options = React.useMemo(() => {
    return users.map((user: any) => {
      const id = user.id || user.user_id;
      const name =
        [user.first_name, user.last_name].filter(Boolean).join(" ") ||
        user.name ||
        user.email ||
        `User ${id}`;
      return {
        value: Number(id),
        label: name,
        email: user.email,
        role: user.role?.role_name || user.role_name,
        avatar: user.profile_picture,
      };
    });
  }, [users]);

  const selectedLabel = React.useMemo(() => {
    const found = options.find((o) => o.value === selectedId);
    if (found) return found.label;

    if (selectedUserData) {
      const userObj = selectedUserData?.data || selectedUserData;
      if (userObj) {
        const id = userObj.id || userObj.user_id;
        if (Number(id) === selectedId) {
          return (
            [userObj.first_name, userObj.last_name].filter(Boolean).join(" ") ||
            userObj.name ||
            userObj.email ||
            `User ${id}`
          );
        }
      }
    }
    return null;
  }, [options, selectedId, selectedUserData]);

  React.useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    const el = observerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-invalid={hasError || undefined}
          className={cn(
            "w-full justify-between h-auto min-h-12 py-3 px-3 font-normal bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 text-start",
            hasError && "border-red-400 focus:ring-red-500 focus:border-red-500",
            !selectedId && "text-muted-foreground"
          )}
        >
          <span className="truncate flex-1">{selectedLabel || t("userSelect.placeholder")}</span>
          <ChevronsUpDown className="ms-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput
            value={search}
            onValueChange={setSearch}
            placeholder={t("userSelect.searchPlaceholder")}
          />
          <CommandList className="max-h-[300px] overflow-y-auto">
            {isLoading ? (
              <div className="p-2 space-y-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 py-2.5">
                    <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-neutral-800 animate-pulse flex-shrink-0" />
                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="h-4 w-24 bg-gray-100 dark:bg-neutral-800 rounded animate-pulse" />
                      <div className="h-3 w-40 bg-gray-100 dark:bg-neutral-800 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            ) : isError ? (
              <div className="text-sm text-red-500 p-3 text-center">
                {t("userSelect.error")}
              </div>
            ) : (
              <>
                {options.length === 0 && <CommandEmpty>{t("userSelect.empty")}</CommandEmpty>}
                <CommandGroup>
                  {options.map((opt: any) => (
                    <CommandItem
                      key={opt.value}
                      value={String(opt.value)}
                      onSelect={() => {
                        onChange(opt.value === selectedId ? null : opt.value);
                        setOpen(false);
                      }}
                      className="flex items-center justify-between cursor-pointer px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 flex items-center justify-center text-xs font-semibold overflow-hidden border border-teal-200/50 dark:border-teal-800/30">
                          <UserAvatar src={opt.avatar} label={opt.label} />
                        </div>
                        <div className="flex flex-col min-w-0 text-start">
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                            {opt.label}
                          </span>
                          {opt.email && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                              {opt.email} {opt.role ? `• ${opt.role}` : ""}
                            </span>
                          )}
                        </div>
                      </div>
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0 transition-opacity",
                          selectedId === opt.value ? "opacity-100 text-teal-600 dark:text-teal-400" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>

                {hasNextPage && (
                  <div ref={observerRef} className="p-3 flex justify-center text-xs text-gray-500">
                    {isFetchingNextPage ? (
                      <Loader2 className="h-4 w-4 animate-spin text-teal-600" />
                    ) : (
                      t("userSelect.loadMore")
                    )}
                  </div>
                )}
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
