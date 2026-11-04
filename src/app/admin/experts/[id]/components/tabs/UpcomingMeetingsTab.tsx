"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, CheckCircle, XCircle } from "lucide-react";

interface UpcomingMeetingsTabProps {
  loadingBookings: boolean;
  bookingsData: any;
  processingBookingId: number | null;
  handleConfirm: (id: number) => void;
  handleDecline: (id: number) => void;
  handleReschedule: (id: number) => void;
  t: (key: string) => string;
  formatDate: (date: string) => string;
}

export function UpcomingMeetingsTab({
  loadingBookings,
  bookingsData,
  processingBookingId,
  handleConfirm,
  handleDecline,
  handleReschedule,
  t,
  formatDate,
}: UpcomingMeetingsTabProps) {
  return (
    <div className="space-y-4">
      {loadingBookings ? (
        <div className="flex items-center justify-center py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-teal-600 border-e-transparent"></div>
        </div>
      ) : bookingsData?.data && bookingsData.data.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">
                {bookingsData.data.length}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("experts.details.totalBookings")}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">
                {
                  bookingsData.data.filter(
                    (b: any) => new Date(b.start_time) >= new Date(),
                  ).length
                }
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("experts.details.upcomingMeetings")}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {bookingsData.data.map((booking: any, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-semibold">
                      {booking.customer?.first_name?.charAt(0) || "C"}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {booking.customer?.first_name} {booking.customer?.last_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {booking.customer?.email}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : booking.status === "completed"
                        ? "bg-blue-100 text-blue-800"
                        : booking.status === "cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }
                  >
                    {booking.status}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>
                      {booking.start_time ? formatDate(booking.start_time) : t("experts.table.na")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>
                      {booking.minutes ? `${booking.minutes} ${t("experts.details.minAbbr")}` : "-"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="h-4 w-4 text-gray-400" />
                    <span>{booking.meeting_provider || t("experts.table.na")}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    disabled={processingBookingId === booking.booking_id}
                    onClick={() => handleConfirm(booking.booking_id)}
                  >
                    <CheckCircle className="h-4 w-4 me-1" />
                    {t("experts.details.confirm")}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                    disabled={processingBookingId === booking.booking_id}
                    onClick={() => handleDecline(booking.booking_id)}
                  >
                    <XCircle className="h-4 w-4 me-1" />
                    {t("experts.details.decline")}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-200 text-gray-600 hover:bg-gray-50"
                    disabled={processingBookingId === booking.booking_id}
                    onClick={() => handleReschedule(booking.booking_id)}
                  >
                    <Clock className="h-4 w-4 me-1" />
                    {t("experts.details.reschedule")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t("experts.details.upcomingMeetings")}
          </h3>
          <p className="text-sm text-gray-500 mb-6 text-center max-w-sm">
            {t("experts.details.noMeetings")}
          </p>
        </div>
      )}
    </div>
  );
}
