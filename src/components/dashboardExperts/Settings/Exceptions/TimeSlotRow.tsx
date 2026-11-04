"use client";

import { Input } from "@/components/ui/input";
import { TimeSlot } from "@/types/expertDashboard/availability";
import { Clock, Trash2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FieldError } from "@/components/ui/form-message";

export function TimeSlotRow({
  slot,
  onChange,
  onRemove,
  canRemove,
  isEditing = false,
  error,
}: {
  slot: TimeSlot;
  onChange: (updated: TimeSlot) => void;
  onRemove: () => void;
  canRemove: boolean;
  isEditing?: boolean;
  /** Validation message for this slot (shown under the row, inputs highlighted). */
  error?: string;
}) {
  const { t } = useLanguage();

  const inputClass = `border rounded-md px-3 py-2 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:border-transparent ${error ? "border-red-500 focus:ring-red-500" : "border-[#E5E7EB] focus:ring-[#AD46FF]"}`;

  return (
    <div className="flex flex-col">
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <Input
          type="time"
          dir="ltr"
          value={slot.from}
          onChange={(e) => onChange({ ...slot, from: e.target.value })}
          error={!!error}
          className={inputClass}
        />
      </div>
      <span className="text-[13px] text-[#6B7280]">{t("experts.settings.timeOff.to")}</span>
      <div className="relative flex-1">
        <Input
          type="time"
          dir="ltr"
          value={slot.to}
          onChange={(e) => onChange({ ...slot, to: e.target.value })}
          error={!!error}
          className={inputClass}
        />
      </div>
      {isEditing && (
        <button
          type="button"
          onClick={onRemove}
          disabled={!canRemove}
          aria-label="Remove time slot"
          className="flex items-center justify-center w-8 h-8 rounded-[6px] bg-[#EF4444] hover:bg-[#DC2626] text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      )}
    </div>
    <FieldError message={error} />
    </div>
  );
}
