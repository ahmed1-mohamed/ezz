"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError, FormErrorAlert } from "@/components/ui/form-message";
import { DashboardExpertService } from "@/data/api-client";
import { toDatetimeLocal } from "@/utlis/format";
import { parseApiError } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";

const MIN_MINUTES = 1;

type RescheduleField = "startTime" | "minutes";

interface RescheduleFormProps {
  bookingId: number;
  currentStartTime: string;
  currentMinutes: number;
  setOpen: (open: boolean) => void;
}

export function RescheduleForm({
  bookingId,
  currentStartTime,
  currentMinutes,
  setOpen,
}: RescheduleFormProps) {
  const queryClient = useQueryClient();
  const { t } = useLanguage();
  const [startTime, setStartTime] = useState(toDatetimeLocal(currentStartTime));
  const [minutes, setMinutes] = useState(currentMinutes ? String(currentMinutes) : "");
  const [errors, setErrors] = useState<Partial<Record<RescheduleField, string>>>({});
  const [generalError, setGeneralError] = useState<string | undefined>();

  const rescheduleMutation = useMutation({
    mutationFn: (data: { start_time: string; minutes: number }) =>
      DashboardExpertService.rescheduleBookings(bookingId, data),

    onSuccess: () => {
      toast.success(t("experts.messages.rescheduleSuccess"));
      queryClient.invalidateQueries({ queryKey: ["BookingsData"] });
      setOpen(false);
    },

    onError: (err: unknown) => {
      const { fieldErrors, generalMessage, summary } = parseApiError(err, {
        t,
        fallbackMessage: t("experts.messages.rescheduleFailed"),
        fields: ["startTime", "minutes"],
        fieldMap: { start_time: "startTime", date: "startTime", time: "startTime" },
      });
      setErrors(fieldErrors);
      setGeneralError(generalMessage);
      toast.error(summary, { id: API_ERROR_TOAST_ID });
    },
  });

  const validate = (): Partial<Record<RescheduleField, string>> => {
    const next: Partial<Record<RescheduleField, string>> = {};
    const start = startTime ? new Date(startTime) : null;
    if (!startTime) next.startTime = t("validation.required");
    else if (!start || Number.isNaN(start.getTime())) next.startTime = t("validation.date_invalid");
    else if (start.getTime() <= Date.now()) next.startTime = t("experts.booking.validation.startTimeFuture");

    const trimmedMinutes = minutes.trim();
    if (!trimmedMinutes) next.minutes = t("validation.required");
    else if (!/^\d+$/.test(trimmedMinutes)) next.minutes = t("validation.positive_integer");
    else if (Number(trimmedMinutes) < MIN_MINUTES) {
      next.minutes = t("experts.booking.validation.minDuration", { min: MIN_MINUTES });
    }
    return next;
  };

  const handleSubmit = () => {
    if (rescheduleMutation.isPending) return;
    setGeneralError(undefined);
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      toast.error(t("experts.messages.fillAllFields"));
      return;
    }

    rescheduleMutation.mutate({
      start_time: startTime.replace("T", " ") + ":00",
      minutes: Number(minutes),
    });
  };

  const clearError = (field: RescheduleField) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="flex flex-col gap-5 pt-2">
      <FormErrorAlert message={generalError} />

      <div className="flex flex-col gap-2">
        <Label htmlFor="reschedule-start-time">
          {t("experts.booking.newDateTime")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="reschedule-start-time"
          type="datetime-local"
          dir="ltr"
          value={startTime}
          min={toDatetimeLocal(new Date().toISOString())}
          onChange={(e) => {
            setStartTime(e.target.value);
            clearError("startTime");
          }}
          error={!!errors.startTime}
          aria-invalid={!!errors.startTime}
        />
        <FieldError message={errors.startTime} className="mt-0" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="reschedule-minutes">
          {t("experts.booking.duration")} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="reschedule-minutes"
          type="number"
          inputMode="numeric"
          dir="ltr"
          min={MIN_MINUTES}
          step={15}
          value={minutes}
          placeholder={t("experts.booking.durationPlaceholder")}
          onChange={(e) => {
            setMinutes(e.target.value);
            clearError("minutes");
          }}
          error={!!errors.minutes}
          aria-invalid={!!errors.minutes}
        />
        <FieldError message={errors.minutes} className="mt-0" />
      </div>

      <div className="flex gap-3 justify-end pt-2">
        <Button
          variant="outline"
          disabled={rescheduleMutation.isPending}
          onClick={() => setOpen(false)}
        >
          {t("experts.common.cancel")}
        </Button>
        <Button
          disabled={rescheduleMutation.isPending}
          className="bg-[#7826EA] text-white hover:bg-[#6a1fd4]"
          onClick={handleSubmit}
        >
          {rescheduleMutation.isPending ? (
            <>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              {t("experts.common.saving")}
            </>
          ) : (
            t("experts.booking.confirmReschedule")
          )}
        </Button>
      </div>
    </div>
  );
}
