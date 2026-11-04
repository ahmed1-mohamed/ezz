import { useState, useCallback } from "react";
import { toast } from "sonner";
import { User } from "@/features/users/types";
import { GetUserDataType } from "@/types";
import { mapUser } from "@/features/users/utils/map-user";
import { useLanguage } from "@/contexts/LanguageContext";

export function useExportUsers(
  debouncedSearch: string | undefined,
  filters: { status: string; user_type: string }
) {
  const { t } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);

  const runExport = useCallback(
    async (format: "excel" | "csv" | "pdf") => {
      if (isExporting) return;
      setIsExporting(true);

      toast.info(
        t("users.messages.preparingExport"),
        { duration: 3000 }
      );

      try {
        let allExportedUsers: User[] = [];
        let currentPage = 1;
        let totalPagesToFetch = 1;
        const batchSize = 100;
        const { AdminUsersService } = await import("@/features/users/services/AdminUsersService");

        do {
          const response: any = await AdminUsersService.getUsers(
            currentPage,
            batchSize,
            debouncedSearch || undefined,
            filters.status !== "all" ? filters.status : undefined,
            filters.user_type !== "all" ? filters.user_type : undefined
          );

          let batch: GetUserDataType[] = [];
          let currentTotal = 0;

          const rawData = response?.data || response;
          if (Array.isArray(rawData)) {
            batch = rawData;
            totalPagesToFetch = 1;
          } else {
            const nested = rawData as { data?: unknown; total?: number; meta?: any } | undefined;
            if (Array.isArray(nested?.data)) {
              batch = nested.data as GetUserDataType[];
              currentTotal = nested.total ?? nested.meta?.total ?? batch.length;
            } else {
              const doublyNested = nested?.data as { data?: unknown; total?: number } | undefined;
              if (Array.isArray(doublyNested?.data)) {
                batch = doublyNested.data as GetUserDataType[];
                currentTotal = doublyNested.total ?? batch.length;
              }
            }
            totalPagesToFetch = currentTotal > 0 ? Math.ceil(currentTotal / batchSize) : 1;
          }

          allExportedUsers = [...allExportedUsers, ...batch.map((u) => mapUser(u))];
          currentPage++;
        } while (currentPage <= totalPagesToFetch);

        if (allExportedUsers.length === 0) {
          toast.info(t("users.messages.noExportData"));
          setIsExporting(false);
          return;
        }

        const exportModule = await import("@/lib/exports/export-users");
        if (format === "excel") {
          await exportModule.usersExportToExcel(allExportedUsers);
        } else if (format === "csv") {
          exportModule.usersExportToCsv(allExportedUsers);
        } else if (format === "pdf") {
          await exportModule.usersExportToPDF(allExportedUsers);
        }

        toast.success(t("users.messages.exportSuccess"));
      } catch {
        toast.error(t("users.messages.exportFailed"));
      } finally {
        setIsExporting(false);
      }
    },
    [debouncedSearch, filters.status, filters.user_type, isExporting, t]
  );

  const handleExportExcel = useCallback(() => runExport("excel"), [runExport]);
  const handleExportCsv = useCallback(() => runExport("csv"), [runExport]);
  const handleExportPdf = useCallback(() => runExport("pdf"), [runExport]);

  return {
    isExporting,
    handleExportExcel,
    handleExportCsv,
    handleExportPdf,
  };
}
