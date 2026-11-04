"use client";

import { memo } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { OfferRowActions } from "@/features/offers/components/OfferRowActions";
import {
  offerName,
  offerDiscount,
  offerDiscountType,
  formatDate,
} from "@/features/offers/components/offer-table-helpers";
import type { Offer } from "@/features/offers/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface OfferTableRowProps {
  offer: Offer;
  isSelected: boolean;
  isUpdating: boolean;
  isColVisible: (col: string) => boolean;
  onSelect: (id: string, checked: boolean) => void;
  onStatusToggle: (o: Offer, checked: boolean) => void;
  onView: (o: Offer) => void;
  onEdit: (o: Offer) => void;
  onDelete: (o: Offer) => void;
}

export const OfferTableRow = memo(function OfferTableRow({
  offer,
  isSelected,
  isUpdating,
  isColVisible,
  onSelect,
  onStatusToggle,
  onView,
  onEdit,
  onDelete,
}: OfferTableRowProps) {
  const { t } = useLanguage();
  const id = String(offer.offer_id ?? offer.id);
  const name = offerName(offer, t);
  const linkedName = offer.linked_name || "—";
  const validFrom = formatDate(offer.valid_from || offer.starts_at);
  const validTo = formatDate(offer.valid_to || offer.ends_at);

  return (
    <TableRow className="border-b border-gray-100 dark:border-neutral-800/80 hover:bg-gray-50/50 dark:hover:bg-neutral-800/50 transition-colors">
      <TableCell className="px-3 py-2.5" onClick={(e) => e.stopPropagation()}>
        <Checkbox
          checked={isSelected}
          onCheckedChange={(v) => onSelect(id, v as boolean)}
        />
      </TableCell>

      <TableCell className="px-3 py-2.5">
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <button
            onClick={() => onView(offer)}
            className="text-gray-900 dark:text-gray-100 text-xs font-bold hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer text-start focus:outline-none tracking-tight truncate max-w-[240px]"
            title={name}
          >
            {name}
          </button>
          {offer.description && (
            <span
              className="text-[11px] text-gray-400 dark:text-gray-500 truncate max-w-[240px]"
              title={offer.description}
            >
              {offer.description}
            </span>
          )}
        </div>
      </TableCell>

      {isColVisible("linked_to") && (
        <TableCell className="px-3 py-2.5">
          <div className="flex flex-col gap-0.5 overflow-hidden">
            <span className="text-[11px] text-gray-400 dark:text-gray-500 capitalize truncate">
              {offer.linked_type || "—"}
            </span>
            <span
              className="text-xs text-gray-700 dark:text-gray-300 font-medium truncate max-w-[160px]"
              title={linkedName}
            >
              {linkedName}
            </span>
          </div>
        </TableCell>
      )}

      {isColVisible("type") && (
        <TableCell className="px-3 py-2.5">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800 capitalize truncate">
            {offerDiscountType(offer)}
          </span>
        </TableCell>
      )}

      {isColVisible("discount") && (
        <TableCell className="px-3 py-2.5">
          <span className="text-xs font-bold text-teal-600 dark:text-teal-400 truncate">
            {offerDiscount(offer)}
          </span>
        </TableCell>
      )}

      {isColVisible("validity") && (
        <TableCell className="px-3 py-2.5">
          <div className="flex flex-col gap-0.5 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <span title={validFrom}>{validFrom}</span>
            {(offer.valid_to || offer.ends_at) && (
              <span className="text-gray-400 dark:text-gray-500" title={`→ ${validTo}`}>
                {"→ "}{validTo}
              </span>
            )}
          </div>
        </TableCell>
      )}

      {isColVisible("clicks") && (
        <TableCell className="px-3 py-2.5 text-center text-xs font-medium text-gray-700 dark:text-gray-200">
          {(offer.clicks ?? 0).toLocaleString()}
        </TableCell>
      )}

      {isColVisible("views") && (
        <TableCell className="px-3 py-2.5 text-center text-xs font-medium text-gray-700 dark:text-gray-200">
          {(offer.views ?? 0).toLocaleString()}
        </TableCell>
      )}

      {isColVisible("status") && (
        <TableCell className="px-3 py-2.5 text-center" onClick={(e) => e.stopPropagation()}>
          <Switch
            checked={offer.is_active === true}
            onCheckedChange={(v) => onStatusToggle(offer, v)}
            disabled={isUpdating}
            className="data-[state=checked]:bg-teal-600 data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-neutral-700 mx-auto"
          />
        </TableCell>
      )}

      <TableCell className="px-3 py-2.5 text-center" onClick={(e) => e.stopPropagation()}>
        <OfferRowActions
          offer={offer}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </TableCell>
    </TableRow>
  );
});