"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LogsFiltersProps {
  search: string;
  onSearchChange: (val: string) => void;
  level: string;
  onLevelChange: (val: string) => void;
  category: string;
  onCategoryChange: (val: string) => void;
  availableCategories?: string[];
}

export function LogsFilters({
  search,
  onSearchChange,
  level,
  onLevelChange,
  category,
  onCategoryChange,
  availableCategories = ["integration", "whatsapp_no", "phone_call", "auth", "payment", "system"],
}: LogsFiltersProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      {/* 1. Search Input */}
      <div className="relative flex-1 min-w-[220px] max-w-md">
        <Search
          className={cn(
            "absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400",
            isRTL ? "right-3" : "left-3"
          )}
        />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={
            isRTL ? "البحث بالرسالة، الرابط أو الـ IP..." : "Search message, URL or IP..."
          }
          className={cn(
            "h-9 text-xs sm:text-sm bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 shadow-2xs rounded-lg",
            isRTL ? "pr-9 pl-3" : "pl-9 pr-3"
          )}
        />
      </div>

      {/* 2. Levels Dropdown */}
      <div className="w-full sm:w-[140px]">
        <Select value={level} onValueChange={onLevelChange}>
          <SelectTrigger className="h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 rounded-lg shadow-2xs">
            <SelectValue placeholder={isRTL ? "جميع المستويات" : "All levels"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{isRTL ? "جميع المستويات" : "All levels"}</SelectItem>
            <SelectItem value="warning">{isRTL ? "تحذير (Warning)" : "Warning"}</SelectItem>
            <SelectItem value="error">{isRTL ? "خطأ (Error)" : "Error"}</SelectItem>
            <SelectItem value="info">{isRTL ? "معلومات (Info)" : "Info"}</SelectItem>
            <SelectItem value="debug">{isRTL ? "تصحيح (Debug)" : "Debug"}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 3. Category Dropdown */}
      <div className="w-full sm:w-[130px]">
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger className="h-9 text-xs bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 rounded-lg shadow-2xs">
            <SelectValue placeholder={isRTL ? "الكل" : "All"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{isRTL ? "الكل (All)" : "All"}</SelectItem>
            {availableCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
