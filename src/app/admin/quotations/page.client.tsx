"use client";

import { useQuotations } from "@/features/quotations/hooks/useQuotations";
import { QuotationsPageHeader } from "@/features/quotations/components/QuotationsPageHeader";
import { QuotationsFilters } from "@/features/quotations/components/QuotationsFilters";
import { QuotationsTable } from "@/features/quotations/components/QuotationsTable";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Quotation } from "@/features/quotations/types";

export default function QuotationsClient() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const {
    quotations,
    isLoading,
    search,
    setSearch,
    status,
    setStatus,
  } = useQuotations();

  const handleExport = () => {
    toast.success(isRTL ? "تم تصدير عروض الأسعار بنجاح!" : "Quotations exported successfully!");
  };

  const handleNewQuotation = () => {
    toast.info(isRTL ? "فتح نموذج إنشاء عرض سعر جديد..." : "Create new quotation modal...");
  };

  const handleViewQuotation = (quote: Quotation) => {
    toast.info(
      isRTL
        ? `عرض تفاصيل عرض السعر: ${quote.code}`
        : `Opening quotation details: ${quote.code}`
    );
  };

  return (
    <div className="p-6 space-y-5 max-w-full overflow-hidden">
      <QuotationsPageHeader
        onExport={handleExport}
        onNewQuotation={handleNewQuotation}
      />

      <QuotationsFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      <QuotationsTable
        quotations={quotations}
        isLoading={isLoading}
        onView={handleViewQuotation}
      />
    </div>
  );
}