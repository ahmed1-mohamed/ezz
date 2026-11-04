"use client";

import { useContracts } from "@/features/contracts/hooks/useContracts";
import { ContractsPageHeader } from "@/features/contracts/components/ContractsPageHeader";
import { ContractsFilters } from "@/features/contracts/components/ContractsFilters";
import { ContractsTable } from "@/features/contracts/components/ContractsTable";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Contract } from "@/features/contracts/types";

export default function ContractsClient() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const {
    contracts,
    isLoading,
    search,
    setSearch,
    status,
    setStatus,
  } = useContracts();

  const handleExport = () => {
    toast.success(isRTL ? "تم تصدير العقود بنجاح!" : "Contracts exported successfully!");
  };

  const handleNewContract = () => {
    toast.info(isRTL ? "فتح نموذج إنشاء عقد جديد..." : "Create new contract modal...");
  };

  const handleViewContract = (contract: Contract) => {
    toast.info(
      isRTL
        ? `عرض تفاصيل العقد: ${contract.code}`
        : `Opening contract details: ${contract.code}`
    );
  };

  return (
    <div className="p-6 space-y-5 max-w-full overflow-hidden">
      <ContractsPageHeader
        onExport={handleExport}
        onNewContract={handleNewContract}
      />

      <ContractsFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      <ContractsTable
        contracts={contracts}
        isLoading={isLoading}
        onView={handleViewContract}
      />
    </div>
  );
}