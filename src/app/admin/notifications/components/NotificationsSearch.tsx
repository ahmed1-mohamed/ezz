"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NotificationsSearchProps {
  language: string;
  t: (key: string) => string;
  onSearch: (query: string) => void;
  onClear: () => void;
}

export const NotificationsSearch = React.memo(function NotificationsSearch({
  language,
  t,
  onSearch,
  onClear,
}: NotificationsSearchProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = () => {
    onSearch(searchInput);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchInput);
    }
  };

  const handleClear = () => {
    setSearchInput("");
    onClear();
  };

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search
          className={`absolute ${
            language === "ar" ? "right-3" : "left-3"
          } top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500`}
        />
        <Input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("notifications.searchPlaceholder")}
          className={`bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-xl ${
            language === "ar" ? "pr-9 pl-3" : "pl-9 pr-3"
          }`}
        />
      </div>
      <Button
        onClick={handleSearchSubmit}
        className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-xs"
      >
        {t("notifications.search")}
      </Button>
      <Button
        onClick={handleClear}
        variant="outline"
        className="border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-xl"
      >
        {t("notifications.clear")}
      </Button>
    </div>
  );
});
