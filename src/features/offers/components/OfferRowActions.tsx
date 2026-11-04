"use client";

import { memo } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import type { Offer } from "@/features/offers/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface OfferRowActionsProps {
  offer: Offer;
  onView: (o: Offer) => void;
  onEdit: (o: Offer) => void;
  onDelete: (o: Offer) => void;
}

export const OfferRowActions = memo(function OfferRowActions({
  offer,
  onView,
  onEdit,
  onDelete,
}: OfferRowActionsProps) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center justify-center gap-1">
      <button
        onClick={() => onView(offer)}
        title={t("offers.table.view")}
        className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
      >
        <Eye className="h-3.5 w-3.5" />
      </button>

      <button
        onClick={() => onEdit(offer)}
        title={t("common.edit")}
        className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
      >
        <Edit className="h-3.5 w-3.5" />
      </button>

      <button
        onClick={() => onDelete(offer)}
        title={t("common.delete")}
        className="p-1.5 hover:bg-red-50 dark:hover:bg-red-950/30 rounded text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
    </div>
  );
});
