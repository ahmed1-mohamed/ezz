"use client";

import { memo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { type Booking } from "../types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface BookingsSectionProps {
  bookings: Booking[];
  className?: string;
}

const ITEMS_PER_PAGE = 5;

// Booking `status` values stay in English (they drive color lookups); only the rendered label is translated.
const STAGE_LABEL_KEYS: Record<string, string> = {
  Cancelled: "dashboardHome.charts.rejected",
  Identification: "dashboardHome.charts.identification",
  "Sales Offer": "dashboardHome.charts.salesOffer",
  "Down Payment": "dashboardHome.charts.downPayment",
  "Sales Purchase": "dashboardHome.charts.salesPurchase",
  Completed: "dashboardHome.charts.completed",
  Open: "dashboardHome.charts.open",
};

export function getStageLabel(status: string, t: (key: string) => string): string {
  const key = STAGE_LABEL_KEYS[status];
  return key ? t(key) : status;
}

export const BookingsSection = memo(function BookingsSection({ bookings, className = "" }: BookingsSectionProps) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const routePrefix = pathname?.startsWith("/developer") ? "/developer" : "/admin";

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE) || 1;
  const safePage = Math.min(currentPage, totalPages);

  const displayBookings = bookings.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-4 h-full flex flex-col justify-between ${className}`}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-teal-600" />
            <h3 className="text-sm font-semibold text-gray-800">
              {t("dashboardHome.bookings.title")}
            </h3>
          </div>
          <Link
            href={`${routePrefix}/reservations`}
            prefetch={false}
            className="text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            {t("dashboardHome.bookings.viewAll")}
          </Link>
        </div>

         <div className="space-y-0 min-h-[220px]">
          {displayBookings.length > 0 ? (
            displayBookings.map((booking) => {
              const bookingCode = `BK-${String(booking.id).padStart(7, "0")}`;
              const targetUrl = booking.id
                ? `${routePrefix}/reservations/${booking.id}`
                : `${routePrefix}/reservations`;
              return (
                <Link
                  key={booking.id}
                  href={targetUrl}
                  prefetch={false}
                  className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0 hover:bg-gray-50/70 transition-colors px-1.5 -mx-1.5 rounded-md group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 rounded-md bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                      <Calendar className="h-4 w-4 text-teal-600" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors block truncate">
                        {booking.name}
                      </span>
                      <span className="text-xs text-gray-400">{bookingCode}</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-orange-500 border border-orange-200 bg-orange-50 px-2 py-0.5 rounded flex-shrink-0">
                    {booking.status ? getStageLabel(booking.status, t) : t("dashboardHome.charts.open")}
                  </span>
                </Link>
              );
            })
          ) : (
            <div className="text-center text-xs text-gray-400 py-12">
              {t("dashboardHome.bookings.noBookings")}
            </div>
          )}
        </div>
      </div>

      {bookings.length > ITEMS_PER_PAGE && (
        <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-100 text-xs text-gray-500">
          <span>
            {(safePage - 1) * ITEMS_PER_PAGE + 1}-
            {Math.min(safePage * ITEMS_PER_PAGE, bookings.length)} / {bookings.length}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
            >
              <ChevronLeft className="h-3.5 w-3.5 rtl:rotate-180" />
            </Button>
            <span className="text-[11px] font-medium text-gray-700 px-1">
              {safePage} / {totalPages}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-500 hover:text-gray-900 disabled:opacity-30 p-0"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
            >
              <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
});