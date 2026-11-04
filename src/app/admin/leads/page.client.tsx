"use client";

import { useLeads } from "@/features/leads/hooks/useLeads";
import { LeadsPageHeader } from "@/features/leads/components/LeadsPageHeader";
import { LeadsFilters } from "@/features/leads/components/LeadsFilters";
import { LeadsTable } from "@/features/leads/components/LeadsTable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Lead } from "@/features/leads/types";

export default function LeadsClient() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const {
    leads,
    total,
    page,
    perPage,
    totalPages,
    isLoading,
    search,
    setSearch,
    status,
    setStatus,
    setPage,
    isPipelineView,
    setIsPipelineView,
    selectedLeads,
    handleSelectAll,
    handleSelectOne,
    refetch,
  } = useLeads();

  const handleImport = () => {
    toast.info(isRTL ? "جاري فتح نموذج استيراد البيانات..." : "Opening import modal...");
  };

  const handleExport = () => {
    toast.success(isRTL ? "تم تصدير العملاء المحتملين بنجاح!" : "Leads exported successfully!");
  };

  const handleSync = () => {
    refetch();
    toast.success(isRTL ? "تم تحديث البيانات!" : "Data synchronized!");
  };

  const handleAddLead = () => {
    toast.info(isRTL ? "إضافة عميل محتمل جديد..." : "Create new lead modal...");
  };

  const handleViewLead = (lead: Lead) => {
    toast.info(
      isRTL
        ? `فتح ملف العميل: ${lead.customer_name}`
        : `Opening lead profile: ${lead.customer_name}`
    );
  };

  const startCount = total === 0 ? 0 : (page - 1) * perPage + 1;
  const endCount = Math.min(page * perPage, total);

  return (
    <div className="p-6 space-y-5 max-w-full overflow-hidden">
      <LeadsPageHeader
        isPipelineView={isPipelineView}
        onPipelineToggle={setIsPipelineView}
        onImport={handleImport}
        onExport={handleExport}
        onSync={handleSync}
        onAddLead={handleAddLead}
      />

      <LeadsFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      <LeadsTable
        leads={leads}
        isLoading={isLoading}
        selectedLeads={selectedLeads}
        onSelectAll={handleSelectAll}
        onSelectOne={handleSelectOne}
        onView={handleViewLead}
      />

      <div className="flex items-center justify-between pt-2 text-xs text-gray-500 dark:text-gray-400">
        <div>
          {isRTL
            ? `عرض ${startCount}–${endCount} من ${total}`
            : `Showing ${startCount}–${endCount} of ${total}`}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page <= 1}
            className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {isRTL ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>

          <span className="font-medium text-gray-700 dark:text-gray-300">
            {page}/{totalPages}
          </span>

          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page >= totalPages}
            className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {isRTL ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}