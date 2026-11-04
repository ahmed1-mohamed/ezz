import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { useLanguage } from "@/contexts/LanguageContext";
import { getApiErrorMessage } from "@/lib/api-errors";

interface ProjectsErrorProps {
  error: unknown;
  onRetry: () => void;
}

export function ProjectsError({ error, onRetry }: ProjectsErrorProps) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center">
      <EmptyState
        type="error"
        message={getApiErrorMessage(error, t, t("projects.messages.loadFailed"))}
      />
      <Button
        variant="outline"
        size="sm"
        onClick={onRetry}
        className="mt-4 border-gray-200 text-gray-700 hover:bg-gray-50"
      >
        {t("projects.tryAgain")}
      </Button>
    </div>
  );
}
