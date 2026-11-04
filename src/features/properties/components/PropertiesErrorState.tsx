"use client";

import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";

interface PropertiesErrorStateProps {
  error: unknown;
  onRetry: () => void;
}

export function PropertiesErrorState({ error, onRetry }: PropertiesErrorStateProps) {
  const { t } = useLanguage();

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
        className="mt-4 border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:text-gray-200"
      >
        {t("properties.tryAgain")}
      </Button>
    </div>
  );
}
