"use client";

import { ChevronDown, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  label: string;
  allLabel: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
  /** Called when the menu opens/closes, so callers can load options lazily. */
  onOpenChange?: (open: boolean) => void;
  isLoading?: boolean;
}

/** Toolbar dropdown: shows the filter name, or the selected option when one is active. */
export function FilterSelect({ label, allLabel, value, options, onChange, onOpenChange, isLoading }: FilterSelectProps) {
  const selected = options.find((o) => o.value === value);

  return (
    <DropdownMenu onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-xs font-normal transition-colors",
            value
              ? "border-[#007b78] bg-teal-50/50 text-[#007b78] dark:border-teal-700 dark:bg-teal-950/40 dark:text-teal-300"
              : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800"
          )}
        >
          <span className="max-w-[140px] truncate">{selected?.label ?? label}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[160px] max-h-72 overflow-y-auto">
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          <DropdownMenuRadioItem value="" className="text-xs">
            {allLabel}
          </DropdownMenuRadioItem>
          {isLoading ? (
            <div className="flex justify-center py-3">
              <Loader2 className="h-4 w-4 animate-spin text-teal-600" />
            </div>
          ) : (
            options.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value} className="text-xs">
                {option.label}
              </DropdownMenuRadioItem>
            ))
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
