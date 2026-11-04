"use client";

import React from "react";
import {
  Clock,
  CalendarCheck,
  Building2,
  User,
  DollarSign,
  Bell,
  AlertCircle,
  Flame,
  Info,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface Notification {
  id: number;
  userId?: number;
  type?: string;
  title: string;
  description: string;
  time: string;
  rawTime: string;
  isRead: boolean;
  priority?: "low" | "medium" | "high" | "urgent" | string;
  status?: string;
  referenceType?: string;
  referenceId?: number;
  link?: {
    text: string;
    href: string;
  };
}

interface NotificationCardProps {
  notification: Notification;
  onClick: () => void;
}

export const NotificationCard = React.memo(function NotificationCard({
  notification,
  onClick,
}: NotificationCardProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  // 1. Resolve Type Configuration (Icon, Color, Label)
  const typeConfig = React.useMemo(() => {
    const rawType = (notification.type || notification.referenceType || "").toLowerCase();
    if (rawType.includes("booking") || rawType.includes("reservation")) {
      return {
        label: isRTL ? "حجز عقاري" : "Booking Update",
        icon: CalendarCheck,
        containerBg: "bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800",
        badge: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800",
      };
    }
    if (rawType.includes("property") || rawType.includes("unit")) {
      return {
        label: isRTL ? "تحديث عقار" : "Property",
        icon: Building2,
        containerBg: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
        badge: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800",
      };
    }
    if (rawType.includes("user") || rawType.includes("client") || rawType.includes("lead") || rawType.includes("customer")) {
      return {
        label: isRTL ? "مستخدم / عميل" : "Client / User",
        icon: User,
        containerBg: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800",
        badge: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800",
      };
    }
    if (rawType.includes("payment") || rawType.includes("transaction")) {
      return {
        label: isRTL ? "معاملة مالية" : "Transaction",
        icon: DollarSign,
        containerBg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
      };
    }
    return {
      label: isRTL ? "إشعار نظام" : "System Notification",
      icon: Bell,
      containerBg: "bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-gray-300 border-gray-200 dark:border-neutral-700",
      badge: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
    };
  }, [notification.type, notification.referenceType, isRTL]);

  // 2. Resolve Status Pill
  const statusConfig = React.useMemo(() => {
    if (!notification.status) return null;
    const s = notification.status.toLowerCase();
    if (s.includes("pending") || s.includes("wait")) {
      return {
        label: isRTL ? "قيد الانتظار" : "Pending",
        className: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60",
        dotColor: "bg-amber-500",
      };
    }
    if (s.includes("approved") || s.includes("confirm") || s.includes("completed") || s.includes("success")) {
      return {
        label: isRTL ? "معتمد" : "Approved",
        className: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
        dotColor: "bg-emerald-500",
      };
    }
    if (s.includes("reject") || s.includes("cancel") || s.includes("fail")) {
      return {
        label: isRTL ? "ملغي" : "Cancelled",
        className: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60",
        dotColor: "bg-rose-500",
      };
    }
    if (s.includes("process")) {
      return {
        label: isRTL ? "قيد المعالجة" : "In Process",
        className: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/60",
        dotColor: "bg-sky-500",
      };
    }
    return {
      label: notification.status,
      className: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
      dotColor: "bg-gray-400",
    };
  }, [notification.status, isRTL]);

  // 3. Resolve Priority Pill
  const priorityConfig = React.useMemo(() => {
    if (!notification.priority) return null;
    const p = notification.priority.toLowerCase();
    if (p.includes("high") || p.includes("urgent")) {
      return {
        label: isRTL ? "أولوية عالية" : "High Priority",
        className: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800",
        icon: Flame,
      };
    }
    if (p.includes("medium")) {
      return {
        label: isRTL ? "أولوية متوسطة" : "Medium Priority",
        className: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        icon: AlertCircle,
      };
    }
    if (p.includes("low")) {
      return {
        label: isRTL ? "أولوية عادية" : "Low Priority",
        className: "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-900/50 dark:text-slate-400 dark:border-slate-800",
        icon: Info,
      };
    }
    return null;
  }, [notification.priority, isRTL]);

  // 4. Render Message with highlighted hash numbers (e.g. #531)
  const formattedDescription = React.useMemo(() => {
    if (!notification.description) return null;
    const parts = notification.description.split(/(#\d+)/g);
    return parts.map((part, index) => {
      if (part.startsWith("#") && !isNaN(Number(part.slice(1)))) {
        return (
          <span
            key={index}
            className="font-mono font-semibold text-teal-700 dark:text-teal-400 bg-teal-50/70 dark:bg-teal-950/50 px-1.5 py-0.5 rounded border border-teal-200 dark:border-teal-800 mx-0.5 inline-block text-xs"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  }, [notification.description]);

  const TypeIcon = typeConfig.icon;
  const PriorityIcon = priorityConfig?.icon;

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl border transition-all duration-200 p-4 sm:p-5 cursor-pointer text-start select-none ${
        notification.isRead
          ? "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 hover:shadow-sm"
          : "bg-gradient-to-r from-teal-50/40 via-white to-white dark:from-teal-950/20 dark:via-neutral-900 dark:to-neutral-900 border-teal-200 dark:border-teal-900/60 shadow-xs hover:shadow-md hover:border-teal-400 dark:hover:border-teal-700"
      }`}
    >
      {/* Unread Left Accent Pill */}
      {!notification.isRead && (
        <div
          className={`absolute top-0 bottom-0 ${
            isRTL ? "right-0 rounded-r-2xl" : "left-0 rounded-l-2xl"
          } w-1.5 bg-teal-600 dark:bg-teal-500`}
        />
      )}

      <div className="flex items-start gap-3.5 sm:gap-4">
        {/* Type Icon Container */}
        <div
          className={`h-11 w-11 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center border shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-xs ${typeConfig.containerBg}`}
        >
          <TypeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Header Bar: Category, Status, Priority, Unread Dot, Time */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {/* Category Pill */}
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${typeConfig.badge}`}
              >
                {typeConfig.label}
              </span>

              {/* Status Pill */}
              {statusConfig && (
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md border ${statusConfig.className}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dotColor}`} />
                  {statusConfig.label}
                </span>
              )}

              {/* Priority Pill */}
              {priorityConfig && (
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md border ${priorityConfig.className}`}
                >
                  {PriorityIcon && <PriorityIcon className="h-3 w-3 shrink-0" />}
                  {priorityConfig.label}
                </span>
              )}

              {/* Unread Badge */}
              {!notification.isRead && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-500 text-white animate-pulse">
                  {isRTL ? "جديد" : "NEW"}
                </span>
              )}
            </div>

            {/* Time Stamp */}
            <div
              title={notification.rawTime}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium whitespace-nowrap"
            >
              <Clock className="h-3.5 w-3.5 shrink-0" />
              <span>{notification.time}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-snug">
            {notification.title}
          </h3>

          {/* Message Description */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {formattedDescription}
          </p>
        </div>
      </div>
    </div>
  );
});
