"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { OfferTableRow } from "@/features/offers/components/OfferTableRow";
import type { Offer } from "@/features/offers/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";

interface OffersTableProps {
  offers: Offer[];
  selectedOffers: string[];
  updatingOfferId: string | null;
  isColVisible: (col: string) => boolean;
  handleSelectAll: (checked: boolean) => void;
  handleSelectOne: (id: string, checked: boolean) => void;
  handleStatusToggle: (offer: Offer, checked: boolean) => void;
  onDeleteClick: (offer: Offer) => void;
  onViewClick: (offer: Offer) => void;
  onEditClick: (offer: Offer) => void;
}

export function OffersTable({
  offers,
  selectedOffers,
  updatingOfferId,
  isColVisible,
  handleSelectAll,
  handleSelectOne,
  handleStatusToggle,
  onDeleteClick,
  onViewClick,
  onEditClick,
}: OffersTableProps) {
  const { t } = useLanguage();
  const allSelected = offers.length > 0 && selectedOffers.length === offers.length;

  let visibleColsCount = 3; // checkbox, details, actions
  if (isColVisible("linked_to")) visibleColsCount++;
  if (isColVisible("type")) visibleColsCount++;
  if (isColVisible("discount")) visibleColsCount++;
  if (isColVisible("validity")) visibleColsCount++;
  if (isColVisible("clicks")) visibleColsCount++;
  if (isColVisible("views")) visibleColsCount++;
  if (isColVisible("status")) visibleColsCount++;

  return (
    <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden overflow-x-auto w-full">
      <Table className="w-full min-w-[950px]">
        <TableHeader>
          <TableRow className="bg-gray-50/80 dark:bg-neutral-800/60 hover:bg-gray-50/80 dark:hover:bg-neutral-800/60 border-b border-gray-200 dark:border-neutral-800">
            <TableHead className="w-[40px] px-3">
              <Checkbox
                checked={allSelected}
                onCheckedChange={(v) => handleSelectAll(v as boolean)}
              />
            </TableHead>

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider min-w-[220px] text-start">
              {t("offers.columns.offerDetails")}
            </TableHead>

            {isColVisible("linked_to") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider min-w-[140px]">
                {t("offers.columns.linkedTo")}
              </TableHead>
            )}

            {isColVisible("type") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider w-[110px]">
                {t("offers.columns.type")}
              </TableHead>
            )}

            {isColVisible("discount") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider w-[110px]">
                {t("offers.columns.discount")}
              </TableHead>
            )}

            {isColVisible("validity") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider min-w-[130px]">
                {t("offers.columns.validity")}
              </TableHead>
            )}

            {isColVisible("clicks") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-center w-[90px]">
                {t("offers.columns.clicks")}
              </TableHead>
            )}

            {isColVisible("views") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-center w-[90px]">
                {t("offers.columns.views")}
              </TableHead>
            )}

            {isColVisible("status") && (
              <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-center w-[90px]">
                {t("offers.columns.status")}
              </TableHead>
            )}

            <TableHead className="font-semibold text-gray-500 dark:text-gray-400 px-3 text-[11px] tracking-wider text-center w-[110px]">
              {t("offers.columns.actions")}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {offers.length === 0 ? (
            <TableRow>
              <TableCell colSpan={visibleColsCount} className="p-0">
                <EmptyState
                  type="no_results"
                  title={t("offers.table.noOffers")}
                  className="py-12"
                />
              </TableCell>
            </TableRow>
          ) : (
            offers.map((offer, index) => (
              <OfferTableRow
                key={offer.offer_id ?? index}
                offer={offer}
                isSelected={selectedOffers.includes(String(offer.offer_id ?? offer.id))}
                isUpdating={updatingOfferId === String(offer.offer_id)}
                isColVisible={isColVisible}
                onSelect={handleSelectOne}
                onStatusToggle={handleStatusToggle}
                onView={onViewClick}
                onEdit={onEditClick}
                onDelete={onDeleteClick}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}