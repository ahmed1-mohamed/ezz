"use client";

import { TableSettings } from "@/components/table/table-settings";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface OffersPageHeaderProps {
  tableSettings: any;
  onExportExcel: () => void;
  onExportPdf: () => void;
  onCreateClick: () => void;
}

export function OffersPageHeader({
  tableSettings,
  onExportExcel,
  onExportPdf,
  onCreateClick,
}: OffersPageHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{t("offers.title")}</h1>
      <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
        <TableSettings
          settings={tableSettings}
          onExportExcel={onExportExcel}
          onExportPdf={onExportPdf}
        />
        <Button
          className="bg-teal-600 hover:bg-teal-700 text-white gap-2 text-sm flex-1 sm:flex-none"
          onClick={onCreateClick}
        >
          <Plus className="h-4 w-4" />
          <span className="hidden xs:inline">{t("offers.createOffer")}</span>
          <span className="xs:hidden">{t("offers.createOffer").split(" ")[0]}</span>
        </Button>
      </div>
    </div>
  );
}
