"use client";

import {
  DaySlots,
  ExceptionFormState,
  ExceptionModalFormProps,
  TabMode,
  TimeSlot,
} from "@/types/expertDashboard/availability";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  defaultSlot,
  formatDateLabel,
  getDatesInRange,
  toApiDateTime,
} from "./Format";
import { DashboardExpertService } from "@/data/api-client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TimeSlotRow } from "./TimeSlotRow";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { getApiErrorMessage, parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { scrollToFirstInvalidField } from "@/lib/form-utils";

type ExceptionFormErrors = {
  fromDate?: string;
  toDate?: string;
  /** Keyed by slotKey(mode, dayIdx, slotIdx). */
  slots: Record<string, string>;
};

const slotKey = (mode: TabMode, dayIdx: number, slotIdx: number) => `${mode}-${dayIdx}-${slotIdx}`;
const isValidDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
const noErrors = (): ExceptionFormErrors => ({ slots: {} });

export default function ExceptionModalForm({
  open,
  onClose,
  expertId,
  isEditing,
  initialState,
  editGroup,
}: ExceptionModalFormProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const [form, setForm] = useState<ExceptionFormState>(initialState);
  const [errors, setErrors] = useState<ExceptionFormErrors>(noErrors);
  const [generalError, setGeneralError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearFieldError = (field: "fromDate" | "toDate") => {
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const clearSlotError = (key: string) => {
    if (!errors.slots[key]) return;
    setErrors((e) => {
      const slots = { ...e.slots };
      delete slots[key];
      return { ...e, slots };
    });
  };

  const syncCustomDays = (
    fromDate: string,
    toDate: string,
    current: DaySlots[],
  ): DaySlots[] => {
    const dates = getDatesInRange(fromDate, toDate);
    return dates.map((d) => {
      const existing = current.find((cd) => cd.date === d);
      return (
        existing ?? {
          date: d,
          label: formatDateLabel(d),
          slots: [defaultSlot()],
        }
      );
    });
  };

  const setFromDate = (v: string) => {
    clearFieldError("fromDate");
    clearFieldError("toDate");
    setForm((f) => {
      const newCustomDays =
        f.tabMode === "custom"
          ? syncCustomDays(v, f.toDate, f.customDays)
          : f.customDays;
      return { ...f, fromDate: v, customDays: newCustomDays };
    });
  };

  const setToDate = (v: string) => {
    clearFieldError("toDate");
    setForm((f) => {
      const newCustomDays =
        f.tabMode === "custom"
          ? syncCustomDays(f.fromDate, v, f.customDays)
          : f.customDays;
      return { ...f, toDate: v, customDays: newCustomDays };
    });
  };

  const setTabMode = (mode: TabMode) => {
    setErrors((e) => ({ ...e, slots: {} }));
    setForm((f) => {
      const customDays =
        mode === "custom"
          ? syncCustomDays(f.fromDate, f.toDate, f.customDays)
          : f.customDays;
      return { ...f, tabMode: mode, customDays };
    });
  };

  const updateSameSlot = (i: number, updated: TimeSlot) => {
    clearSlotError(slotKey("same", 0, i));
    setForm((f) => {
      const s = [...f.sameSlots];
      s[i] = updated;
      return { ...f, sameSlots: s };
    });
  };

  const addSameSlot = () => {
    setForm((f) => ({ ...f, sameSlots: [...f.sameSlots, defaultSlot()] }));
  };

  const removeSameSlot = (i: number) => {
    setErrors((e) => ({ ...e, slots: {} }));
    setForm((f) => ({
      ...f,
      sameSlots: f.sameSlots.filter((_, idx) => idx !== i),
    }));
  };

  const updateCustomSlot = (
    dayIdx: number,
    slotIdx: number,
    updated: TimeSlot,
  ) => {
    clearSlotError(slotKey("custom", dayIdx, slotIdx));
    setForm((f) => {
      const days = f.customDays.map((d, di) =>
        di !== dayIdx
          ? d
          : {
            ...d,
            slots: d.slots.map((s, si) => (si !== slotIdx ? s : updated)),
          },
      );
      return { ...f, customDays: days };
    });
  };

  const addCustomSlot = (dayIdx: number) => {
    setForm((f) => {
      const days = f.customDays.map((d, di) =>
        di !== dayIdx ? d : { ...d, slots: [...d.slots, defaultSlot()] },
      );
      return { ...f, customDays: days };
    });
  };

  const removeCustomSlot = (dayIdx: number, slotIdx: number) => {
    setErrors((e) => ({ ...e, slots: {} }));
    setForm((f) => {
      const days = f.customDays.map((d, di) =>
        di !== dayIdx
          ? d
          : { ...d, slots: d.slots.filter((_, si) => si !== slotIdx) },
      );
      return { ...f, customDays: days };
    });
  };

  const createMutation = useMutation({
    mutationFn: (payload: {
      start_date: string;
      end_date: string;
      available: boolean;
    }) => DashboardExpertService.setAvailabilityException(expertId, payload),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["exceptions", expertId] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({
      exceptionId,
      payload,
    }: {
      exceptionId: number;
      payload: { start_date: string; end_date: string; available: boolean };
    }) =>
      DashboardExpertService.updateAvailabilityException(
        expertId,
        exceptionId,
        payload,
      ),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["exceptions", expertId] }),
  });

  const deleteSlotMutation = useMutation({
    mutationFn: (exceptionId: number) =>
      DashboardExpertService.deleteAvailabilityException(expertId, exceptionId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["exceptions", expertId] }),
  });

  /** Deletes a saved slot; returns false (after telling the user) when the request fails. */
  const deleteSavedSlot = async (exceptionId?: number): Promise<boolean> => {
    if (!exceptionId) return true;
    try {
      await deleteSlotMutation.mutateAsync(exceptionId);
      return true;
    } catch (error) {
      toast.error(getApiErrorMessage(error, t, t("experts.settings.timeOff.messages.deleteFailed")), {
        id: API_ERROR_TOAST_ID,
      });
      return false;
    }
  };

  const handleRemoveSameSlot = async (i: number) => {
    const slot = form.sameSlots[i];
    if (await deleteSavedSlot(slot?.exceptionId)) removeSameSlot(i);
  };

  const handleRemoveCustomSlot = async (dayIdx: number, slotIdx: number) => {
    const slot = form.customDays[dayIdx]?.slots[slotIdx];
    if (await deleteSavedSlot(slot?.exceptionId)) removeCustomSlot(dayIdx, slotIdx);
  };

  /**
   * Dates: "from" required, "to" (optional) not before "from". Slots: both times required and the
   * end after the start — per day in custom mode; in same-time mode only when the range is one day
   * (otherwise the slot ends on a later date).
   */
  const validate = (): ExceptionFormErrors => {
    const next = noErrors();
    if (!form.fromDate) next.fromDate = t("validation.required");
    else if (!isValidDate(form.fromDate)) next.fromDate = t("validation.date_invalid");
    if (form.toDate) {
      if (!isValidDate(form.toDate)) next.toDate = t("validation.date_invalid");
      else if (form.fromDate && form.toDate < form.fromDate) {
        next.toDate = t("experts.settings.timeOff.validation.toDateBeforeFrom");
      }
    }

    const checkSlot = (slot: TimeSlot, key: string, requireOrder: boolean) => {
      if (!slot.from || !slot.to) next.slots[key] = t("experts.messages.fillAllTimeFields");
      else if (requireOrder && slot.from >= slot.to) next.slots[key] = t("experts.messages.startTimeBeforeEndTime");
    };

    if (form.tabMode === "same") {
      const singleDay = !form.toDate || form.toDate === form.fromDate;
      form.sameSlots.forEach((slot, i) => checkSlot(slot, slotKey("same", 0, i), singleDay));
    } else {
      form.customDays.forEach((day, di) =>
        day.slots.forEach((slot, si) => checkSlot(slot, slotKey("custom", di, si), true)),
      );
    }
    return next;
  };

  const buildPayloads = (): {
    start_date: string;
    end_date: string;
    available: boolean;
  }[] => {
    if (form.tabMode === "same") {
      return form.sameSlots.map((slot) => ({
        start_date: toApiDateTime(form.fromDate, slot.from),
        end_date: toApiDateTime(form.toDate || form.fromDate, slot.to),
        available: true,
      }));
    }
    return form.customDays.flatMap((day) =>
      day.slots.map((slot) => ({
        start_date: toApiDateTime(day.date, slot.from),
        end_date: toApiDateTime(day.date, slot.to),
        available: true,
      })),
    );
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setGeneralError(undefined);

    const nextErrors = validate();
    setErrors(nextErrors);
    const firstError = nextErrors.fromDate ?? nextErrors.toDate ?? Object.values(nextErrors.slots)[0];
    if (firstError) {
      toast.error(firstError);
      scrollToFirstInvalidField();
      return;
    }

    setIsSubmitting(true);
    try {
      if (isEditing && editGroup) {
        const slots = form.tabMode === "same"
          ? form.sameSlots
          : form.customDays.flatMap((d) => d.slots);

        const payloads = buildPayloads();

        await Promise.all(
          payloads.map((p, i) => {
            const slotExceptionId = slots[i]?.exceptionId;

            if (slotExceptionId) {
              return updateMutation.mutateAsync({
                exceptionId: slotExceptionId,
                payload: p,
              });
            } else {
              return createMutation.mutateAsync(p);
            }
          }),
        );
      } else {
        const payloads = buildPayloads();
        await Promise.all(payloads.map((p) => createMutation.mutateAsync(p)));
      }

      toast.success(t("experts.settings.timeOff.messages.saveSuccess"));
      onClose();
    } catch (error) {
      // Some slots may have been saved already; refresh the list behind the dialog.
      queryClient.invalidateQueries({ queryKey: ["exceptions", expertId] });
      const { fieldErrors, generalMessage, summary } = parseApiError(error, {
        t,
        fallbackMessage: t("experts.settings.timeOff.messages.saveFailed"),
        fields: ["fromDate", "toDate"],
        fieldMap: { start_date: "fromDate", end_date: "toDate" },
      });
      setErrors((e) => ({
        ...e,
        fromDate: fieldErrors.fromDate ?? e.fromDate,
        toDate: fieldErrors.toDate ?? e.toDate,
      }));
      setGeneralError(generalMessage);
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPending =
    isSubmitting ||
    createMutation.isPending ||
    updateMutation.isPending ||
    deleteSlotMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && !isPending && onClose()}>
      <DialogContent className="max-w-[490px] p-0 gap-0 rounded-[12px] overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-[#F3F4F6]">
          <DialogTitle className="text-[18px] font-semibold text-[#15042B]">
            {isEditing ? t("experts.settings.timeOff.editTimeOff") : t("experts.settings.timeOff.add")}
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pt-5 flex flex-col gap-5">
          <FormErrorAlert message={generalError} />

          <div className="flex rounded-[8px] overflow-hidden border border-[#E5E7EB] w-full">
            <button
              type="button"
              onClick={() => setTabMode("custom")}
              className={`flex-1 py-2 text-[13px] font-[500] transition-colors ${form.tabMode === "custom"
                ? "bg-[#008081] text-white"
                : "bg-white text-[#374151] hover:bg-[#F9FAFB]"
                }`}
            >
              {t("experts.settings.timeOff.customTimes")}
            </button>
            <button
              type="button"
              onClick={() => setTabMode("same")}
              className={`flex-1 py-2 text-[13px] font-[500] transition-colors ${form.tabMode === "same"
                ? "bg-[#008081] text-white"
                : "bg-white text-[#374151] hover:bg-[#F9FAFB]"
                }`}
            >
              {t("experts.settings.timeOff.sameTime")}
            </button>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <Label className="text-[13px] font-[500] text-[#374151] mb-1.5 block">
                {t("experts.settings.timeOff.fromDate")} <span className="text-[#EF4444]">*</span>
              </Label>
              <Input
                type="date"
                dir="ltr"
                value={form.fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                error={!!errors.fromDate}
                className={`ps-9 text-[13px] h-10 ${errors.fromDate ? "" : "border-[#E5E7EB]"}`}
              />
              <FieldError message={errors.fromDate} />
            </div>
            <div className="flex-1">
              <Label className="text-[13px] font-[500] text-[#374151] mb-1.5 block">
                {t("experts.settings.timeOff.toDate")}
              </Label>
              <Input
                type="date"
                dir="ltr"
                value={form.toDate}
                min={form.fromDate}
                onChange={(e) => setToDate(e.target.value)}
                error={!!errors.toDate}
                className={`ps-9 text-[13px] h-10 ${errors.toDate ? "" : "border-[#E5E7EB]"}`}
              />
              <FieldError message={errors.toDate} />
            </div>
          </div>
        </div>

        <div className="px-6 py-5 flex flex-col gap-5 overflow-y-auto max-h-[50vh]">
          {form.tabMode === "same" && (
            <div className="flex flex-col gap-3">
              {form.sameSlots.map((slot, i) => (
                <TimeSlotRow
                  key={slot.exceptionId ?? `new-${i}`}
                  slot={slot}
                  onChange={(updated) => updateSameSlot(i, updated)}
                  onRemove={() => handleRemoveSameSlot(i)}
                  canRemove={form.sameSlots.length > 1 && !isPending}
                  isEditing={isEditing}
                  error={errors.slots[slotKey("same", 0, i)]}
                />
              ))}
              <button
                type="button"
                onClick={addSameSlot}
                className="w-full border border-dashed border-[#D1D5DB] rounded-[8px] py-2 text-[13px] text-[#6B7280] hover:bg-[#F9FAFB] transition-colors"
              >
                {t("experts.settings.timeOff.addSlot")}
              </button>
            </div>
          )}

          {form.tabMode === "custom" && (
            <div className="flex flex-col gap-5">
              {form.customDays.length === 0 && (
                <p className="text-[13px] text-[#9CA3AF] text-center py-4">
                  {t("experts.settings.timeOff.selectRange")}
                </p>
              )}
              {form.customDays.map((day, di) => (
                <div key={day.date} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#AD46FF]" />
                    <span className="text-[13px] font-[500] text-[#374151]">
                      {day.label}
                    </span>
                  </div>
                  {day.slots.map((slot, si) => (
                    <TimeSlotRow
                      key={slot.exceptionId ?? `new-${di}-${si}`}
                      slot={slot}
                      onChange={(updated) => updateCustomSlot(di, si, updated)}
                      onRemove={() => handleRemoveCustomSlot(di, si)}
                      canRemove={day.slots.length > 1 && !isPending}
                      isEditing={isEditing}
                      error={errors.slots[slotKey("custom", di, si)]}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => addCustomSlot(di)}
                    className="w-full border border-dashed border-[#D1D5DB] rounded-[8px] py-2 text-[13px] text-[#6B7280] hover:bg-[#F9FAFB] transition-colors"
                  >
                    {t("experts.settings.timeOff.addSlot")}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-[#F3F4F6] flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isPending}
            className="text-[13px] font-[500] border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB] px-5 h-9"
          >
            {t("experts.common.cancel")}
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isPending}
            className="text-[13px] font-[500] bg-[#008081] hover:bg-[#006667] text-white px-5 h-9"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 me-2 animate-spin" />
                {t("experts.common.saving")}
              </>
            ) : isEditing ? t("experts.common.save") : t("experts.settings.certifications.add")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}