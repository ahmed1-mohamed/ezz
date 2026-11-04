import { memo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Booking } from "../types";
import { useRouter, usePathname } from "next/navigation";
import { useTableSettings } from "@/hooks/use-table-settings";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmptyState } from "@/components/ui/empty-state";
import { Eye, Edit, Trash2 } from "lucide-react";
import { ReservationDetailsModal } from "./ReservationDetailsModal";

interface ReservationTableProps {
  settings: ReturnType<typeof useTableSettings>;
  bookings: Booking[];
  selectedBookings: number[];
  onSelectAll: (checked: boolean) => void;
  onSelectBooking: (id: number, checked: boolean) => void;
}

export const ReservationTable = memo(function ReservationTable({
  settings,
  bookings,
  selectedBookings,
  onSelectAll,
  onSelectBooking,
}: ReservationTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();
  const [viewingBooking, setViewingBooking] = useState<Booking | null>(null);

  const getDensityClass = () => {
    switch (settings.settings.density) {
      case "compact": return "py-2 px-3";
      case "spacious": return "py-4 px-4";
      case "comfortable":
      default: return "py-3 px-3";
    }
  };

  const densityClass = getDensityClass();

  const getStatusBadge = (status: string) => {
    const raw = (status || "").toLowerCase().trim();
    const key = raw.replace(/\s+/g, "_");
    const statusKey = `reservations.statusMap.${key}`;
    const translatedStatus = t(statusKey);
    const label = translatedStatus !== statusKey ? translatedStatus : status || t("common.na");

    if (raw.includes("confirm") || raw.includes("complete") || raw.includes("approved")) {
      return (
        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium text-xs px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {label}
        </Badge>
      );
    }
    if (raw.includes("process") || raw.includes("pending") || raw.includes("review")) {
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 font-medium text-xs px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          {label}
        </Badge>
      );
    }
    if (raw.includes("cancel") || raw.includes("reject") || raw.includes("fail") || raw.includes("decline")) {
      return (
        <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 font-medium text-xs px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
          {label}
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 font-medium text-xs px-2.5 py-0.5 rounded-full shadow-2xs">
        {label}
      </Badge>
    );
  };

  const getStatusTypeBadge = (statusType: string) => {
    const raw = (statusType || "").toLowerCase().trim().replace(/\s+/g, "_");
    const typeKey = `reservations.typeMap.${raw}`;
    const translatedType = t(typeKey);
    const label = translatedType !== typeKey ? translatedType : statusType || t("common.na");
    return (
      <Badge variant="outline" className="bg-purple-50/80 text-purple-700 border-purple-200/80 font-medium text-xs px-2.5 py-0.5 rounded-md shadow-2xs">
        {label}
      </Badge>
    );
  };

  const visibleColumnsCount =
    1 + // checkbox
    (settings.isColumnVisible("client") ? 1 : 0) +
    (settings.isColumnVisible("project") ? 1 : 0) +
    (settings.isColumnVisible("price") ? 1 : 0) +
    (settings.isColumnVisible("status") ? 1 : 0) +
    (settings.isColumnVisible("statusType") ? 1 : 0) +
    (settings.isColumnVisible("reservationDate") ? 1 : 0) +
    (settings.isColumnVisible("expiryDate") ? 1 : 0) +
    (settings.isColumnVisible("country") ? 1 : 0) +
    (settings.isColumnVisible("actions") ? 1 : 0);

  return (
    <>
      <div className="rounded-xl border border-gray-200/90 bg-white shadow-2xs overflow-hidden overflow-x-auto w-full transition-all">
        <Table className="w-full min-w-[950px]">
          <TableHeader>
            <TableRow className="bg-gray-50/80 hover:bg-gray-50/80 border-b border-gray-200">
              <TableHead className="w-[40px] px-3 text-center">
                <Checkbox
                  checked={
                    bookings.length > 0 &&
                    selectedBookings.length === bookings.length
                  }
                  onCheckedChange={onSelectAll}
                  aria-label={t("reservations.table.selectAll")}
                />
              </TableHead>
              {settings.isColumnVisible("client") && (
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 min-w-[150px] px-3 text-[11px] uppercase tracking-wider text-center">
                  {t("reservations.columns.client")}
                </TableHead>
              )}
              {settings.isColumnVisible("project") && (
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 min-w-[220px] px-3 text-[11px] uppercase tracking-wider text-center">
                  {t("reservations.columns.project")}
                </TableHead>
              )}
              {settings.isColumnVisible("price") && (
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[130px] px-3 text-[11px] uppercase tracking-wider text-center">
                  {t("reservations.columns.price")}
                </TableHead>
              )}
              {settings.isColumnVisible("status") && (
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[130px] px-3 text-[11px] uppercase tracking-wider text-center">
                  {t("reservations.columns.status")}
                </TableHead>
              )}
              {settings.isColumnVisible("statusType") && (
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[170px] px-3 text-[11px] uppercase tracking-wider text-center">
                  {t("reservations.columns.statusType")}
                </TableHead>
              )}
              {settings.isColumnVisible("reservationDate") && (
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[120px] px-3 text-[11px] uppercase tracking-wider text-center">
                  {t("reservations.columns.reservationDate")}
                </TableHead>
              )}
              {settings.isColumnVisible("expiryDate") && (
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[120px] px-3 text-[11px] uppercase tracking-wider text-center">
                  {t("reservations.columns.expiryDate")}
                </TableHead>
              )}
              {settings.isColumnVisible("country") && (
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 w-[100px] px-3 text-[11px] uppercase tracking-wider text-center">
                  {t("reservations.columns.country")}
                </TableHead>
              )}
              {settings.isColumnVisible("actions") && (
                <TableHead className="font-semibold text-gray-500 dark:text-gray-400 text-center w-[120px] px-3 text-[11px] uppercase tracking-wider">
                  {t("reservations.columns.actions")}
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={visibleColumnsCount}
                  className="p-0"
                >
                  <EmptyState
                    type="bookings"
                    title={t("reservations.table.noReservations")}
                  />
                </TableCell>
              </TableRow>
            ) : (
              bookings.map((booking) => (
                <TableRow
                  key={booking.id}
                  className="cursor-pointer hover:bg-gray-50/70 transition-colors border-b border-gray-100 last:border-0"
                  onClick={() => setViewingBooking(booking)}
                >
                  <TableCell className={`${densityClass} text-center`} onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={selectedBookings.includes(booking.id)}
                      onCheckedChange={(checked) =>
                        onSelectBooking(booking.id, checked as boolean)
                      }
                      aria-label={t("reservations.table.selectReservation", { number: booking.bookingNumber })}
                    />
                  </TableCell>

                  {/* 2. Client Name & Contact */}
                  {settings.isColumnVisible("client") && (
                    <TableCell className={`text-center ${densityClass}`}>
                      <div className="flex flex-col items-center justify-center">
                        <span className="font-medium text-gray-900 text-sm">
                          {booking.user_name || "—"}
                        </span>
                        {(booking.user_phone || booking.user_email) && (
                          <span className="text-[11px] text-gray-500 font-mono">
                            {booking.user_phone || booking.user_email}
                          </span>
                        )}
                      </div>
                    </TableCell>
                  )}

                  {/* 3. Property & Project & Developer */}
                  {settings.isColumnVisible("project") && (
                    <TableCell className={`text-center ${densityClass}`}>
                      <div className="flex flex-col items-center justify-center max-w-[240px] mx-auto">
                        <span className="font-semibold text-gray-900 text-xs truncate max-w-full" title={booking.property_name}>
                          {booking.property_name || "—"}
                        </span>
                        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-0.5">
                          {booking.project_name && booking.project_name !== "N/A" && (
                            <span className="text-[11px] text-gray-500 truncate max-w-[130px]" title={booking.project_name}>
                              {booking.project_name}
                            </span>
                          )}
                          {booking.developer_name && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 font-medium bg-gray-100 text-gray-700 border-gray-200">
                              {booking.developer_name}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                  )}

                  {/* 4. Unit Price */}
                  {settings.isColumnVisible("price") && (
                    <TableCell className={`text-center ${densityClass}`}>
                      <div className="flex flex-col items-center justify-center">
                        <span className="font-semibold text-gray-900 text-sm font-mono">
                          {booking.price && !isNaN(Number(booking.price))
                            ? `${new Intl.NumberFormat("en-US").format(Number(booking.price))} ${booking.currency || "AED"}`
                            : "—"}
                        </span>
                        {booking.price_after_discount &&
                          booking.price &&
                          Number(booking.price_after_discount) < Number(booking.price) && (
                            <span className="text-[11px] text-emerald-600 font-medium">
                              {t("reservations.discount")}: {new Intl.NumberFormat("en-US").format(Number(booking.price_after_discount))}
                            </span>
                          )}
                      </div>
                    </TableCell>
                  )}

                  {/* 5. Status */}
                  {settings.isColumnVisible("status") && (
                    <TableCell className={`text-center ${densityClass}`}>
                      {getStatusBadge(booking.status || booking.reservation_status || "in_process")}
                    </TableCell>
                  )}

                  {/* 6. Stage / Type */}
                  {settings.isColumnVisible("statusType") && (
                    <TableCell className={`text-center ${densityClass}`}>
                      {getStatusTypeBadge(booking.status_type || booking.reservation_status_type || "identification")}
                    </TableCell>
                  )}

                  {/* 7. Reservation Date */}
                  {settings.isColumnVisible("reservationDate") && (
                    <TableCell className={`text-gray-700 text-sm text-center ${densityClass}`}>
                      <span className="font-mono text-xs">{booking.reservation_date || "—"}</span>
                    </TableCell>
                  )}

                  {/* 8. Expiry Date */}
                  {settings.isColumnVisible("expiryDate") && (
                    <TableCell className={`text-gray-700 text-sm text-center ${densityClass}`}>
                      <span className="font-mono text-xs">{booking.expiry_date || "—"}</span>
                    </TableCell>
                  )}

                  {/* 9. Country */}
                  {settings.isColumnVisible("country") && (
                    <TableCell className={`text-gray-900 text-sm text-center ${densityClass}`}>
                      {booking.country || "—"}
                    </TableCell>
                  )}

                  {/* 11. Actions */}
                  {settings.isColumnVisible("actions") && (
                    <TableCell className={`text-center px-3 ${densityClass}`} onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => setViewingBooking(booking)}
                          title={t("reservations.view")}
                          className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => router.push(`${routePrefix}/reservations/${booking.id}`)}
                          title={t("common.edit")}
                          className="h-7 w-7 inline-flex items-center justify-center rounded text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Edit className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => { }}
                          title={t("common.delete")}
                          className="h-7 w-7 inline-flex items-center justify-center rounded text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Modal for the rest of the reservation data */}
      <ReservationDetailsModal
        booking={viewingBooking}
        isOpen={!!viewingBooking}
        onClose={() => setViewingBooking(null)}
      />
    </>
  );
});

