"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";

interface UsersLoadingStateProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  onRetry: () => void;
}

export function UsersLoadingState({
  isLoading,
  isError,
  error,
  onRetry,
}: UsersLoadingStateProps) {
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-[200px]" />
          <Skeleton className="h-10 w-[120px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center">
        <EmptyState
          type="error"
          message={getApiErrorMessage(error, t, t("common.failedToLoad"))}
        />
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="mt-4 border-gray-200 text-gray-700 hover:bg-gray-50"
        >
          {t("users.tryAgain")}
        </Button>
      </div>
    );
  }

  return null;
}
