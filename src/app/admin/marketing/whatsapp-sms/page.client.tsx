"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCampaignPage } from "@/hooks/useCampaignPage";
import { MarketingStatsCards } from "../components/MarketingStatsCards";
import { CampaignsTable } from "../components/CampaignsTable";
import { Pagination } from "@/components/shared/Pagination";
import dynamic from "next/dynamic";
const EditCampaignModal = dynamic(() => import("../components/EditCampaignModal").then(mod => mod.EditCampaignModal), { ssr: false });

export default function WhatsappSmsDashboard() {
  const router = useRouter();

  const {
    t,
    isRTL,
    basePath,
    isLoadingStats,
    displayStats,
    campaigns,
    isLoadingCampaigns,
    totalCampaigns,
    totalPages,
    page,
    perPage,
    setPage,
    setPerPage,
    selectedCampaign,
    isModalOpen,
    modalMode,
    closeModal,
    handleToggleStatus,
    handleView,
    handleEdit,
    handleSaveCampaign,
    handleDelete,
  } = useCampaignPage({ type: "sms", queryType: "sms,whatsapp" });

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-[1600px] mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="breadcrumb">
        <Link prefetch={false} href={`${basePath}/home`} className="hover:text-teal-600 transition-colors">
          {t("sidebar.home")}
        </Link>
        <ChevronRight className={`h-4 w-4 flex-shrink-0 ${isRTL && "rotate-180"}`} />
        <span>{t("sidebar.marketingGroup")}</span>
        <ChevronRight className={`h-4 w-4 flex-shrink-0 ${isRTL && "rotate-180"}`} />
        <span className="text-gray-900 dark:text-gray-100 font-medium truncate">
          {t("sidebar.whatsappSms")}
        </span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t("marketingWhatsappSms.title")}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {t("marketingWhatsappSms.campaignsThisMonth", { count: displayStats.displayTotalCampaignsThisMonth ?? displayStats.displayTotalCampaigns })}
          </p>
        </div>
        <Button
          onClick={() => router.push(`${basePath}/marketing/whatsapp-sms/create`)}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium gap-2 px-5 py-2.5 rounded-lg transition-all self-start sm:self-auto"
        >
          <Plus className="h-5 w-5" />
          {t("marketingWhatsappSms.newMessage")}
        </Button>
      </div>

      <MarketingStatsCards
        isLoadingStats={isLoadingStats}
        displayTotalCampaigns={displayStats.displayTotalCampaigns}
        displayTotalCampaignsThisMonth={displayStats.displayTotalCampaignsThisMonth}
        displayTotalSent={displayStats.displayTotalSent}
        displayTotalSentChangePercent={displayStats.displayTotalSentChangePercent}
        displayTotalSentDirection={displayStats.displayTotalSentDirection}
        displayDeliveryRate={displayStats.displayDeliveryRate}
        displayDeliveryRateLabel={displayStats.displayDeliveryRateLabel}
        displayReadRate={displayStats.displayReadRate}
        displayReadRateLabel={displayStats.displayReadRateLabel}
        type="sms"
      />

      <CampaignsTable
        campaigns={campaigns}
        isLoadingCampaigns={isLoadingCampaigns}
        type="sms"
        handleToggleStatus={handleToggleStatus}
        handleView={handleView}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        perPage={perPage}
        totalItems={totalCampaigns}
        currentItemsCount={campaigns.length}
        onPageChange={setPage}
        onPerPageChange={setPerPage}
      />

      {isModalOpen && (
        <EditCampaignModal
          isOpen={isModalOpen}
          onClose={closeModal}
          campaign={selectedCampaign}
          mode={modalMode}
          type="sms"
          onSave={handleSaveCampaign}
        />
      )}
    </div>
  );
}
