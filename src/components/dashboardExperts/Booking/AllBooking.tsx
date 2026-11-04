"use client";

import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getApiErrorMessage } from "@/lib/api-errors";
import { API_ERROR_TOAST_ID } from "@/config/toast-config";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DashboardExpertService } from "@/data/api-client";
import { Booking, BookingStats } from "@/types/expertDashboard/bookings";
import EmptyPage from "../EmptyPage";
import { BookingSkeleton } from "./BookingSkeleton";
import { BookingCard } from "./BookingCard";
import { RescheduleForm } from "./RescheduleForm";
import { useBookings } from "@/hooks/dashboardExpert/useBookings";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PER_PAGE = 10;

export default function AllBooking() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<BookingStats | "all">("all");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search);

  const { data, isLoading, isError } = useBookings({
    page,
    per_page: PER_PAGE,
    status: status === "all" ? undefined : status,
    search: debouncedSearch || undefined,
  });

  const bookingData: Booking[] = data?.data?.data ?? [];
  const isInitialLoading = isLoading && !data;

  const [rescheduleDialogOpen, setRescheduleDialogOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<Booking | null>(null);

  const [loadingId, setLoadingId] = useState<number | null>(null);

  const confirmMutation = useMutation({
    mutationFn: (bookingId: number) =>
      DashboardExpertService.confirmBooking(bookingId),
    onSuccess: () => {
      toast.success(t("experts.messages.bookingConfirmSuccess"));
      queryClient.invalidateQueries({ queryKey: ["BookingsData"] });
    },
    onError: (err: unknown) => {
      toast.error(getApiErrorMessage(err, t, t("experts.messages.bookingConfirmFailed")), {
        id: API_ERROR_TOAST_ID,
      });
    },
  });

  const cancelMutation = useMutation({
    mutationFn: (bookingId: number) =>
      DashboardExpertService.declineBooking(bookingId),
    onSuccess: () => {
      toast.success(t("experts.messages.bookingCancelSuccess"));
      queryClient.invalidateQueries({ queryKey: ["BookingsData"] });
    },
    onError: (err: unknown) => {
      toast.error(getApiErrorMessage(err, t, t("experts.messages.bookingCancelFailed")), {
        id: API_ERROR_TOAST_ID,
      });
    },
  });

  const handleJoin = (session: Booking) => {
    if (!session.meeting_join_expert) {
      toast.error(t("experts.messages.meetingNotReady"));
      return;
    }
    router.push(`/expert/meeting/${session.meeting_join_expert}`);
  };

  const handleOpenReschedule = (session: Booking) => {
    setSelectedSession(session);
    setRescheduleDialogOpen(true);
  };

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, status]);

  if (isError) {
    return (
      <div className="container mx-auto p-6 max-w-4xl text-center">
        <p className="text-red-500">{t("experts.common.failedToLoad")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#15042B]">
        {t("experts.booking.title")}
      </h2>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px] max-w-sm">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

          <Input
            placeholder={t("experts.booking.searchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ps-9 bg-muted/40 focus-visible:ring-1 focus-visible:ring-[#7826EA]"
          />
        </div>

        <Select
          value={status}
          onValueChange={(val) => setStatus(val as BookingStats | "all")}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder={t("experts.common.allStatus")} />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">{t("experts.common.allStatus")}</SelectItem>
            <SelectItem value="completed">
              {t("experts.common.status.completed")}
            </SelectItem>
            <SelectItem value="confirmed">
              {t("experts.common.status.confirmed")}
            </SelectItem>
            <SelectItem value="pending">
              {t("experts.common.status.pending")}
            </SelectItem>
            <SelectItem value="canceled">
              {t("experts.common.status.canceled")}
            </SelectItem>
            <SelectItem value="ongoing">
              {t("experts.common.status.ongoing")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {isInitialLoading ? (
          <BookingSkeleton showActions />
        ) : bookingData.length ? (
          bookingData.map((session) => (
            <div key={session.booking_id}>
              <BookingCard
                session={session}
                actions={
                  <div className="flex flex-col gap-2">
                    <Button
                      size="sm"
                      onClick={() => {
                        setLoadingId(session.booking_id);
                        confirmMutation.mutate(session.booking_id, {
                          onSettled: () => setLoadingId(null),
                        });
                      }}
                      disabled={
                        loadingId === session.booking_id ||
                        session.status !== "pending"
                      }
                      className="bg-[#008081] text-white"
                    >
                      {loadingId === session.booking_id
                        ? t("experts.booking.confirming")
                        : t("experts.booking.confirm")}
                    </Button>

                    <Button
                      size="sm"
                      onClick={() => handleJoin(session)}
                      disabled={
                        loadingId === session.booking_id ||
                        session.status !== "ongoing"
                      }
                      className="col-span-2 bg-[#7826EA] text-white"
                    >
                      {loadingId === session.booking_id
                        ? 'joining...'
                        : t("experts.booking.joinSession")}
                    </Button>
                    {/* 
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleOpenReschedule(session)}
                      disabled={
                        !["confirmed", "pending", "ongoing"].includes(
                          session.status,
                        )
                      }
                    >
                      {t("experts.booking.reschedule")}
                    </Button> */}

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setLoadingId(session.booking_id);
                        cancelMutation.mutate(session.booking_id, {
                          onSettled: () => setLoadingId(null),
                        });
                      }}
                      disabled={
                        loadingId === session.booking_id ||
                        !["pending", "confirmed"].includes(session.status)
                      }
                      className="col-span-2 text-[#D03801]"
                    >
                      {loadingId === session.booking_id
                        ? t("experts.booking.declining")
                        : t("experts.booking.decline")}
                    </Button>
                  </div>
                }
              />
            </div>
          ))
        ) : search ? (
          <EmptyPage
            title={t("experts.common.noResults")}
            description={t("experts.common.noResultsDesc")}
          />
        ) : (
          <div className="flex items-center justify-center py-16 ">
            <EmptyPage
              title={t("experts.booking.noReservations")}
              description={t("experts.booking.noReservationsDesc")}
            />
          </div>
        )}
      </div>

      <Dialog
        open={rescheduleDialogOpen}
        onOpenChange={setRescheduleDialogOpen}
      >
        <DialogContent className="sm:max-w-md rounded-xl">
          <DialogHeader>
            <DialogTitle>{t("experts.booking.rescheduleTitle")}</DialogTitle>
          </DialogHeader>

          {selectedSession && (
            <RescheduleForm
              key={selectedSession.booking_id}
              bookingId={selectedSession.booking_id}
              currentStartTime={selectedSession.start_time}
              currentMinutes={selectedSession.minutes}
              setOpen={setRescheduleDialogOpen}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
