"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Booking } from "../types";
import {
  User,
  Building2,
  Calendar,
  CreditCard,
  DollarSign,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReservationDetailsModalProps {
  booking: Booking | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationDetailsModal({
  booking,
  isOpen,
  onClose,
}: ReservationDetailsModalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const routePrefix = pathname.startsWith("/developer") ? "/developer" : "/admin";
  const { t } = useLanguage();

  if (!booking) return null;

  const rawRes = booking.raw?.reservation || {};
  const rawProp = booking.raw?.property || {};
  const rawProj = rawProp?.project || {};
  const rawDev = rawProj?.developer || {};
  const rawPlan = booking.payment_plan || booking.raw?.payment_plan || {};
  const rawUser = booking.raw?.user || {};

  const formatCurrency = (amount?: string | number) => {
    if (!amount || isNaN(Number(amount))) return "—";
    return (
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(amount)) + ` ${booking.currency || "AED"}`
    );
  };

  const getStatusBadge = (status: string) => {
    const raw = (status || "").toLowerCase().trim();
    const key = raw.replace(/\s+/g, "_");
    const statusKey = `reservations.statusMap.${key}`;
    const translatedStatus = t(statusKey);
    const label = translatedStatus !== statusKey ? translatedStatus : status || t("common.na");

    if (raw.includes("confirm") || raw.includes("complete") || raw.includes("approved")) {
      return (
        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium text-xs px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {label}
        </Badge>
      );
    }
    if (raw.includes("process") || raw.includes("pending") || raw.includes("review")) {
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 font-medium text-xs px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          {label}
        </Badge>
      );
    }
    if (raw.includes("cancel") || raw.includes("reject") || raw.includes("fail") || raw.includes("decline")) {
      return (
        <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 font-medium text-xs px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
          {label}
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 font-medium text-xs px-2.5 py-0.5 rounded-full">
        {label}
      </Badge>
    );
  };

  const rawType = (booking.status_type || "").toLowerCase().trim().replace(/\s+/g, "_");
  const typeKey = `reservations.typeMap.${rawType}`;
  const translatedType = t(typeKey);
  const statusTypeLabel = translatedType !== typeKey ? translatedType : booking.status_type || t("common.na");

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                  {booking.bookingNumber}
                </span>
                <span className="text-xs text-gray-400">{t("reservations.modal.idNumber", { id: booking.id })}</span>
              </div>
              <DialogTitle className="text-xl font-bold text-gray-900">
                {t("reservations.modal.title")}
              </DialogTitle>
            </div>
            <div className="flex items-center gap-2">
              {getStatusBadge(booking.status)}
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs px-2.5 py-0.5 capitalize">
                {statusTypeLabel}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6">
          <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-2xs">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-900">
              <User className="h-4 w-4 text-teal-600" />
              <span>{t("reservations.modal.clientInfo")}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.clientName")}</span>
                <span className="font-medium text-gray-900">{booking.user_name || "—"}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.email")}</span>
                <span className="font-medium text-gray-900">{booking.user_email || rawUser.email || "—"}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.phone")}</span>
                <span className="font-medium text-gray-900">{booking.user_phone || rawUser.phone_number || "—"}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.userId")}</span>
                <span className="font-medium text-gray-900">
                  {booking.user_id ? `#${booking.user_id}` : "—"}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-2xs">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-900">
              <Building2 className="h-4 w-4 text-teal-600" />
              <span>{t("reservations.modal.propertyProject")}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="sm:col-span-2">
                <span className="text-xs text-gray-500 block">{t("reservations.modal.propertyUnit")}</span>
                <span className="font-semibold text-gray-900">{booking.property_name || "—"}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.project")}</span>
                <span className="font-medium text-gray-900">{booking.project_name || "—"}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.developer")}</span>
                <span className="font-medium text-gray-900">{booking.developer_name || rawDev.name || "—"}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.country")}</span>
                <span className="font-medium text-gray-900 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  {booking.country || "—"}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.ids")}</span>
                <span className="font-medium text-gray-900">
                  {t("reservations.modal.unit")} #{booking.property_id || rawProp.property_id || "—"} / {t("reservations.modal.proj")} #{booking.project_id || rawProj.project_id || "—"}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-2xs">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-900">
              <DollarSign className="h-4 w-4 text-teal-600" />
              <span>{t("reservations.modal.financials")}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.unitPrice")}</span>
                <span className="text-base font-bold text-gray-900">
                  {formatCurrency(booking.price || rawProp.price)}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.priceAfterDiscount")}</span>
                <span className="text-base font-bold text-emerald-700">
                  {formatCurrency(booking.price_after_discount || rawProp.price_after_discount)}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.reservationFee")}</span>
                <span className="font-medium text-gray-900">
                  {formatCurrency(booking.reservation_fee || rawRes.reservation_fee)}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.serviceFee")}</span>
                <span className="font-medium text-gray-900">
                  {formatCurrency(booking.service_fee || rawRes.service_fee)}
                </span>
              </div>
              <div className="sm:col-span-2 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">{t("reservations.modal.totalPayments")}</span>
                <span className="font-semibold text-gray-900">
                  {booking.total_payment || rawRes.total_payments ? formatCurrency(booking.total_payment || rawRes.total_payments) : (t("reservations.modal.pending"))}
                </span>
              </div>
            </div>
          </div>

          {rawPlan?.name && (
            <div className="rounded-xl border border-teal-200/60 bg-teal-50/30 p-4 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-teal-900">
                  <CreditCard className="h-4 w-4 text-teal-600" />
                  <span>{t("reservations.modal.paymentPlan")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {rawPlan.payment_plan_id && (
                    <span className="text-[11px] font-mono font-medium text-teal-700 bg-white/80 px-1.5 py-0.5 rounded border border-teal-200">
                      {t("reservations.modal.idNumber", { id: rawPlan.payment_plan_id })}
                    </span>
                  )}
                  <Badge variant="outline" className="bg-teal-100/60 text-teal-800 border-teal-200 text-xs">
                    {rawPlan.name}
                  </Badge>
                </div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed bg-white/80 p-3 rounded-lg border border-teal-100/80 font-normal">
                {rawPlan.description || t("reservations.modal.defaultPlanDescription")}
              </p>
            </div>
          )}

          <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-2xs">
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-900">
              <Calendar className="h-4 w-4 text-teal-600" />
              <span>{t("reservations.modal.datesLifecycle")}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.reservationDate")}</span>
                <span className="font-mono text-xs font-medium text-gray-900">
                  {rawRes.reservation_date || booking.reservation_date || "—"}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t("reservations.modal.expiryDate")}</span>
                <span className="font-mono text-xs font-medium text-gray-900">
                  {rawRes.expiry_date || booking.expiry_date || "—"}
                </span>
              </div>
              {booking.comments ? (
                <div className="sm:col-span-2 pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-500 block mb-1">{t("reservations.modal.comments")}</span>
                  <p className="text-xs text-gray-700 bg-gray-50 p-2.5 rounded border border-gray-100">
                    {booking.comments}
                  </p>
                </div>
              ) : (
                <div className="sm:col-span-2 pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-400 block">{t("reservations.modal.noComments")}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="p-4 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-2 justify-end">
          <Button variant="outline" onClick={onClose}>
            {t("reservations.modal.close")}
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white gap-2"
            onClick={() => {
              onClose();
              router.push(`${routePrefix}/reservations/${booking.id}`);
            }}
          >
            <span>{t("reservations.modal.fullWorkflow")}</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}