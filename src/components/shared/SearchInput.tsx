"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder,
  className = "",
}: SearchInputProps) {
  const { t } = useLanguage();
  const resolvedPlaceholder = placeholder ?? t("common.search");

  return (
    <div className={`relative w-full ${className}`}>
      <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        placeholder={resolvedPlaceholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={resolvedPlaceholder}
        className="ps-10 bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 dark:text-slate-200 dark:placeholder-slate-400"
      />
    </div>
  );
}
