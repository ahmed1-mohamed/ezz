'use client';

import { DashboardExpertService } from "@/data/api-client";
import { AvailabilityException, DaySlots, ExceptionFormState, GroupedEntry, TimeSlot } from "@/types/expertDashboard/availability";
import { useQueries } from "@tanstack/react-query";
import { emptyForm, formatDateLabel, fromApiDateTime, getDatesInRange } from "./Format";
import ExceptionModalForm from "./ExceptionModalForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExceptionModalProps {
  open: boolean;
  onClose: () => void;
  expertId: number;
  editGroup?: GroupedEntry;
}

function buildFormStateFromExceptions(exceptions: AvailabilityException[]): ExceptionFormState {
  if (exceptions.length === 0) return emptyForm();

  const dayMap = new Map<string, { label: string; slots: TimeSlot[] }>();

  let globalFromDate = "";
  let globalToDate = "";

  for (const ex of exceptions) {
    const { date: startDate, time: st } = fromApiDateTime(ex.start_date);
    const { date: endDate, time: et } = fromApiDateTime(ex.end_date);

    if (!globalFromDate || startDate < globalFromDate) globalFromDate = startDate;
    if (!globalToDate || endDate > globalToDate) globalToDate = endDate;

    const dates = getDatesInRange(startDate, endDate);

    if (dates.length > 1) {
      for (const d of dates) {
        if (!dayMap.has(d)) {
          dayMap.set(d, { label: formatDateLabel(d), slots: [] });
        }
        dayMap.get(d)!.slots.push({
          from: st,
          to: et,
          exceptionId: d === startDate ? ex.exception_id : undefined,
        });
      }
    } else {
      if (!dayMap.has(startDate)) {
        dayMap.set(startDate, { label: formatDateLabel(startDate), slots: [] });
      }
      dayMap.get(startDate)!.slots.push({
        from: st,
        to: et,
        exceptionId: ex.exception_id,
      });
    }
  }

  const uniqueDates = Array.from(dayMap.keys()).sort();
  const firstDate = uniqueDates[0];
  const lastDate = uniqueDates[uniqueDates.length - 1];

  const fromDate = globalFromDate || firstDate;
  const toDate = globalToDate || lastDate;


  if (uniqueDates.length === 1 && fromDate === toDate) {
    const firstSlots = dayMap.get(firstDate)!.slots;
    return {
      fromDate,
      toDate,
      tabMode: "same",
      sameSlots: firstSlots,
      customDays: [
        {
          date: firstDate,
          label: dayMap.get(firstDate)!.label,
          slots: firstSlots,
        },
      ],
    };
  }

  const customDays: DaySlots[] = uniqueDates.map((d) => ({
    date: d,
    label: dayMap.get(d)!.label,
    slots: dayMap.get(d)!.slots,
  }));

  return {
    fromDate,
    toDate,
    tabMode: "custom",
    sameSlots: dayMap.get(firstDate)!.slots,
    customDays,
  };
}

export default function ExceptionModal({ open, onClose, expertId, editGroup }: ExceptionModalProps) {
  const { t } = useLanguage();
  const isEditing = !!editGroup;

  const exceptionIds = editGroup?.exceptions.map((e) => e.exception_id) ?? [];

  const queries = useQueries({
    queries: exceptionIds.map((id) => ({
      queryKey: ["exception", expertId, id],
      queryFn: () => DashboardExpertService.getSingleAvailabilityException(expertId, id),
      enabled: open && isEditing,
    })),
  });

  const isLoadingFresh = isEditing && queries.some((q) => q.isLoading);
  const isErrorFresh = isEditing && queries.some((q) => q.isError);

  const initialState = (() => {
    if (!isEditing) return emptyForm();
    if (isLoadingFresh || isErrorFresh) return emptyForm();

    const freshRecords = queries
      .map((q) => q.data?.data)
      .filter((d): d is AvailabilityException => !!d);

    return freshRecords.length > 0
      ? buildFormStateFromExceptions(freshRecords)
      : emptyForm();
  })();

  if (isEditing && isLoadingFresh) {
    return (
      <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
        <DialogContent className="max-w-[490px] p-0 gap-0 rounded-[12px] overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-[#F3F4F6]">
            <DialogTitle className="text-[18px] font-semibold text-[#15042B]">
              {t("experts.settings.timeOff.editTimeOff")}
            </DialogTitle>
          </DialogHeader>
          <div className="px-6 py-8 flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-9 rounded-[8px] bg-[#F3F4F6] animate-pulse" />
            ))}
          </div>
          <div className="px-6 py-4 border-t border-[#F3F4F6] flex justify-end gap-3">
            <Button variant="outline" onClick={onClose} className="text-[13px] border-[#E5E7EB] px-5 h-9">
              {t("experts.common.cancel")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const formKey = editGroup ? editGroup.key : "add";

  return (
    <ExceptionModalForm
      key={formKey}
      open={open}
      onClose={onClose}
      expertId={expertId}
      isEditing={isEditing}
      initialState={initialState}
      editGroup={editGroup}
    />
  );
}