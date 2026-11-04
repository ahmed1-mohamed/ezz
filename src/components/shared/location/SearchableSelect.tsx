"use client";

import { useEffect, useState } from "react";
import { Check, ChevronsUpDown, Loader2, RotateCw, Search, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { LocationRef } from "@/lib/locations/matched-locations";
import { useDebounce } from "@/hooks/useDebounce";

export interface SearchableSelectProps {
  id?: string;
  value: LocationRef | null;
  onChange: (value: LocationRef | null) => void;
  options: LocationRef[];
  placeholder: string;
  searchPlaceholder: string;
  /** Shown in the list when nothing has been typed yet (server search needs text). */
  idleHint?: string;
  emptyText: string;
  errorText: string;
  retryText: string;
  clearText: string;
  /** Helper line under the search box (e.g. "type in English"). */
  footnote?: string;
  search: string;
  onSearchChange: (text: string) => void;
  /** Filter `options` locally (small static lists); otherwise the parent searches the server. */
  filterLocally?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  /** Increment to open the list programmatically (e.g. "now choose the area"). */
  openSignal?: number;
}

export function SearchableSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  searchPlaceholder,
  idleHint,
  emptyText,
  errorText,
  retryText,
  clearText,
  footnote,
  search,
  onSearchChange,
  filterLocally = false,
  isLoading = false,
  isError = false,
  onRetry,
  onOpenChange,
  disabled = false,
  invalid = false,
  className,
  openSignal = 0,
}: SearchableSelectProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (openSignal > 0 && !disabled) {
      setOpen(true);
      onOpenChange?.(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSignal, disabled]);

  const needle = search.trim().toLowerCase();
  const debouncedNeedle = useDebounce(needle);
  const filterOptions = (text: string) =>
    filterLocally && text ? options.filter((o) => o.name.toLowerCase().includes(text)) : options;
  const visible = filterOptions(debouncedNeedle);
  const showIdle = !filterLocally && !needle && !!idleHint;

  const setOpenState = (next: boolean) => {
    setOpen(next);
    onOpenChange?.(next);
    if (!next) onSearchChange("");
    setActive(0);
  };

  const choose = (option: LocationRef) => {
    onChange(option);
    setOpenState(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, visible.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      // Typed faster than the debounce: pick from the list matching the current text.
      const list = needle === debouncedNeedle ? visible : filterOptions(needle);
      if (list[active]) choose(list[active]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpenState}>
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-invalid={invalid}
          disabled={disabled}
          className={cn(
            "flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white px-3 text-start text-sm shadow-xs transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008081]/30 dark:border-neutral-700 dark:bg-neutral-950",
            "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-60 dark:disabled:bg-neutral-900",
            invalid && "border-red-400",
            className
          )}
        >
          <span className={cn("truncate", value ? "text-gray-900 dark:text-gray-100" : "text-gray-400")}>
            {value?.name || placeholder}
          </span>
          <span className="flex shrink-0 items-center gap-1">
            {value && !disabled && (
              <span
                role="button"
                tabIndex={0}
                aria-label={clearText}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    onChange(null);
                  }
                }}
                className="rounded p-0.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <X className="h-3.5 w-3.5" />
              </span>
            )}
            <ChevronsUpDown className="h-4 w-4 text-gray-400" />
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[var(--radix-popover-trigger-width)] min-w-[220px] p-0">
        <div className="flex items-center gap-2 border-b border-gray-100 px-3 dark:border-neutral-800">
          {isLoading ? (
            <Loader2 className="h-4 w-4 shrink-0 animate-spin text-[#008081]" />
          ) : (
            <Search className="h-4 w-4 shrink-0 text-gray-400" />
          )}
          <input
            autoFocus
            value={search}
            onChange={(e) => {
              onSearchChange(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>
        <div role="listbox" className="max-h-64 overflow-y-auto p-1">
          {isError ? (
            <div className="flex flex-col items-center gap-2 px-3 py-4 text-center">
              <p className="text-xs text-red-500">{errorText}</p>
              {onRetry && (
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-[#008081] hover:bg-teal-50 dark:hover:bg-teal-950/40"
                >
                  <RotateCw className="h-3 w-3" />
                  {retryText}
                </button>
              )}
            </div>
          ) : showIdle ? (
            <p className="px-3 py-4 text-center text-xs text-gray-500 dark:text-gray-400">{idleHint}</p>
          ) : isLoading && visible.length === 0 ? (
            <div className="flex justify-center py-4">
              <Loader2 className="h-4 w-4 animate-spin text-[#008081]" />
            </div>
          ) : visible.length === 0 ? (
            <p className="px-3 py-4 text-center text-xs text-gray-500 dark:text-gray-400">{emptyText}</p>
          ) : (
            visible.map((option, index) => {
              const selected = !!value && (value.id != null && option.id != null ? value.id === option.id : value.name === option.name);
              return (
                <button
                  key={`${option.id ?? ""}-${option.name}`}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => choose(option)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-start text-sm",
                    index === active ? "bg-teal-50 text-teal-900 dark:bg-teal-950/40 dark:text-teal-100" : "text-gray-700 dark:text-gray-200"
                  )}
                >
                  <Check className={cn("h-4 w-4 shrink-0 text-[#008081]", selected ? "opacity-100" : "opacity-0")} />
                  <span className="truncate">{option.name}</span>
                </button>
              );
            })
          )}
        </div>
        {footnote && (
          <p className="border-t border-gray-100 px-3 py-1.5 text-[11px] text-gray-400 dark:border-neutral-800">{footnote}</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
