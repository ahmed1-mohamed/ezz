"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface ImportNextStepsProps {
  hasErrors: boolean;
}

export function ImportNextSteps({ hasErrors }: ImportNextStepsProps) {
  const { t } = useLanguage();

  if (!hasErrors) return null;

  return (
    <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20 p-4">
      <h3 className="mb-2 font-medium text-blue-900 dark:text-blue-200">
        {t("reportsPage.nextSteps") || "📝 Next Steps"}
      </h3>
      <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
        <li>{t("reportsPage.stepReviewErrors") || "• Review the error details above and fix the data issues"}</li>
        <li>{t("reportsPage.stepEnsurePrice") || "• Ensure price fields contain valid numeric values"}</li>
        <li>{t("reportsPage.stepVerifyReferences") || "• Verify building community references are valid"}</li>
        <li>{t("reportsPage.stepCheckDates") || "• Check date formats for completion dates"}</li>
        <li>{t("reportsPage.stepReimport") || "• Re-import the corrected data"}</li>
      </ul>
    </div>
  );
}
