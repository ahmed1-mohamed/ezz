"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";

interface AdsLoadingStateProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  onRetry: () => void;
}

export function AdsLoadingState({
  isLoading,
  isError,
  error,
  onRetry,
}: AdsLoadingStateProps) {
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="space-y-4 w-full animate-pulse">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg p-4 shadow-xs flex flex-col justify-between h-[108px]"
            >
              <div className="flex items-center justify-between">
                <div className="h-3 w-20 bg-gray-200 dark:bg-neutral-800 rounded" />
                <div className="h-8 w-8 bg-gray-100 dark:bg-neutral-800 rounded-lg" />
              </div>
              <div className="space-y-1.5 mt-2">
                <div className="h-6 w-28 bg-gray-200 dark:bg-neutral-800 rounded" />
                <div className="h-2.5 w-16 bg-gray-100 dark:bg-neutral-800 rounded" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 w-full">
          <div className="flex-1 min-w-[240px] max-w-xl h-9 bg-gray-100 dark:bg-neutral-800 rounded-lg" />
          <div className="grid grid-cols-3 sm:flex sm:items-center gap-2">
            <div className="h-9 w-full sm:w-[140px] bg-gray-100 dark:bg-neutral-800 rounded-lg" />
            <div className="h-9 w-full sm:w-[150px] bg-gray-100 dark:bg-neutral-800 rounded-lg" />
            <div className="h-9 w-full sm:w-[140px] bg-gray-100 dark:bg-neutral-800 rounded-lg" />
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
          <div className="h-10 bg-gray-50 dark:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800 flex items-center px-4 gap-4">
            <div className="h-4 w-4 bg-gray-200 dark:bg-neutral-700 rounded" />
            <div className="h-3 w-28 bg-gray-200 dark:bg-neutral-700 rounded" />
            <div className="h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded hidden sm:block" />
            <div className="h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded hidden md:block" />
            <div className="h-3 w-20 bg-gray-200 dark:bg-neutral-700 rounded hidden lg:block" />
            <div className="ms-auto h-3 w-16 bg-gray-200 dark:bg-neutral-700 rounded" />
          </div>

          <div className="divide-y divide-gray-100 dark:divide-neutral-800">
            {[1, 2, 3, 4, 5, 6].map((row) => (
              <div key={row} className="h-14 px-4 flex items-center gap-4">
                <div className="h-4 w-4 bg-gray-100 dark:bg-neutral-800 rounded" />
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="h-3.5 w-44 bg-gray-200 dark:bg-neutral-800 rounded" />
                  <div className="h-2.5 w-24 bg-gray-100 dark:bg-neutral-800 rounded" />
                </div>
                <div className="h-5 w-16 bg-gray-100 dark:bg-neutral-800 rounded hidden sm:block" />
                <div className="h-5 w-14 bg-gray-100 dark:bg-neutral-800 rounded hidden md:block" />
                <div className="h-3.5 w-12 bg-gray-100 dark:bg-neutral-800 rounded hidden lg:block" />
                <div className="h-3.5 w-12 bg-gray-100 dark:bg-neutral-800 rounded hidden lg:block" />
                <div className="h-5 w-14 bg-gray-200 dark:bg-neutral-800 rounded" />
                <div className="flex gap-1.5 ms-2">
                  <div className="h-7 w-7 bg-gray-100 dark:bg-neutral-800 rounded" />
                  <div className="h-7 w-7 bg-gray-100 dark:bg-neutral-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-800">
            <strong>{t("ads.errorLabel")}</strong>{" "}
            {getApiErrorMessage(error, t, t("ads.failedLoad"))}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="mt-2 border-red-200 text-red-700 hover:bg-red-100"
        >
          {t("ads.messages.tryAgain")}
        </Button>
      </div>
    );
  }

  return null;
}
