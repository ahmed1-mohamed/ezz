"use client";

import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";

import { CampaignsTableProps } from "./campaigns-table/types";
import { TableRowSkeleton } from "./campaigns-table/TableRowSkeleton";
import { CampaignsTableHeader } from "./campaigns-table/CampaignsTableHeader";
import { CampaignRow } from "./campaigns-table/CampaignRow";

export const CampaignsTable = React.memo(function CampaignsTable({
  campaigns,
  isLoadingCampaigns,
  type,
  handleToggleStatus,
  handleView,
  handleEdit,
  handleDelete,
}: CampaignsTableProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const colSpan = type === "email" ? 8 : 9;

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[950px]">
        <CampaignsTableHeader type={type} isRTL={isRTL} />

        <TableBody>
          {isLoadingCampaigns ? (
            Array.from({ length: 5 }).map((_, i) => (
              <TableRowSkeleton key={i} cols={colSpan} />
            ))
          ) : campaigns.length === 0 ? (
            <TableRow>
              <TableCell colSpan={colSpan} className="p-0">
                <EmptyState
                  type="no_results"
                  title={isRTL ? "لا توجد حملات حتى الآن" : "No campaigns found"}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            campaigns.map((camp) => (
              <CampaignRow
                key={camp.id}
                camp={camp}
                type={type}
                isRTL={isRTL}
                handleView={handleView}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
});