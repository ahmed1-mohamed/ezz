"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePropertySubtypes, usePropertyTypes } from "@/hooks/use-property-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export interface AdvancedFilters {
  locationScope: "city" | "area";
  location: string;
  propertyTypeId: string;
  propertySubtypeId: string;
}

export const EMPTY_ADVANCED_FILTERS: AdvancedFilters = {
  locationScope: "city",
  location: "",
  propertyTypeId: "",
  propertySubtypeId: "",
};

interface AdvancedFiltersModalProps {
  initial: AdvancedFilters;
  onApply: (filters: AdvancedFilters) => void;
  onClose: () => void;
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-md border px-2.5 py-1 text-xs transition-colors",
        active
          ? "border-[#007b78] bg-[#007b78] text-white"
          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800"
      )}
    >
      {children}
    </button>
  );
}

/** Rendered only while open, so property types / subtypes are requested on demand. */
export function AdvancedFiltersModal({ initial, onApply, onClose }: AdvancedFiltersModalProps) {
  const { t } = useLanguage();
  const [draft, setDraft] = useState<AdvancedFilters>(initial);
  const { data: types = [] } = usePropertyTypes();
  const { data: subtypes = [] } = usePropertySubtypes();

  const selectedType = types.find((type) => String(type.id) === draft.propertyTypeId);
  const typeSubtypes = subtypes.filter((s: any) => String(s.property_type_id) === draft.propertyTypeId);

  return (
    <Modal
      isOpen
      onClose={onClose}
      size="md"
      title={
        <div className="flex items-center justify-between gap-3 pe-8">
          <span>{t("readyMarket.filters.advancedTitle")}</span>
          <button
            type="button"
            onClick={() => setDraft(EMPTY_ADVANCED_FILTERS)}
            className="rounded-md border border-gray-200 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-red-600 hover:bg-red-50 dark:border-neutral-700"
          >
            {t("readyMarket.filters.clearAll")}
          </button>
        </div>
      }
      footer={
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" size="sm" onClick={onClose}>
            {t("common.cancel")}
          </Button>
          <Button
            type="button"
            size="sm"
            className="bg-[#007b78] hover:bg-[#006664] text-white"
            onClick={() => onApply(draft)}
          >
            {t("readyMarket.filters.apply")}
          </Button>
        </div>
      }
    >
      <div className="space-y-5">
        <div>
          <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">{t("readyMarket.filters.location")}</p>
          <div className="flex rounded-lg border border-gray-200 dark:border-neutral-700">
            <Select
              value={draft.locationScope}
              onValueChange={(v) => setDraft((d) => ({ ...d, locationScope: v as AdvancedFilters["locationScope"] }))}
            >
              <SelectTrigger className="h-9 w-32 shrink-0 rounded-none rounded-s-lg border-0 border-e text-xs">
                <MapPin className="h-3.5 w-3.5 text-gray-400" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="city">{t("readyMarket.filters.city")}</SelectItem>
                <SelectItem value="area">{t("readyMarket.filters.area")}</SelectItem>
              </SelectContent>
            </Select>
            <input
              value={draft.location}
              onChange={(e) => setDraft((d) => ({ ...d, location: e.target.value }))}
              placeholder={t("common.search")}
              className="h-9 min-w-0 flex-1 rounded-e-lg bg-transparent px-3 text-xs outline-none"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">{t("readyMarket.filters.propertyType")}</p>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Chip
                key={type.id}
                active={draft.propertyTypeId === String(type.id)}
                onClick={() =>
                  setDraft((d) => ({
                    ...d,
                    propertyTypeId: d.propertyTypeId === String(type.id) ? "" : String(type.id),
                    propertySubtypeId: "",
                  }))
                }
              >
                {type.name}
              </Chip>
            ))}
          </div>
        </div>

        {selectedType && typeSubtypes.length > 0 && (
          <div>
            <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
              {t("readyMarket.filters.subTypeOf", { type: selectedType.name })}
            </p>
            <div className="flex flex-wrap gap-2">
              {typeSubtypes.map((subtype: any) => (
                <Chip
                  key={subtype.id}
                  active={draft.propertySubtypeId === String(subtype.id)}
                  onClick={() =>
                    setDraft((d) => ({
                      ...d,
                      propertySubtypeId: d.propertySubtypeId === String(subtype.id) ? "" : String(subtype.id),
                    }))
                  }
                >
                  {subtype.name}
                </Chip>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
