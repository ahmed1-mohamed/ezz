"use client";

import { toast } from "sonner";
import {
  ArrowUpRight,
  Bell,
  Building2,
  FolderKanban,
  Megaphone,
  Pencil,
  Plus,
  PowerOff,
  Trash2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Notification } from "./NotificationCard";

export type ActivityEntity = "property" | "ad" | "project" | "other";
export type ActivityAction = "created" | "updated" | "deleted" | "deactivated" | "other";

const ENTITY_PATTERNS: [ActivityEntity, RegExp][] = [
  ["property", /propert|unit|عقار|وحدة/i],
  ["ad", /(^|[^a-z])ads?([^a-z]|$)|advert|إعلان/i],
  ["project", /project|مشروع/i],
];

const ACTION_PATTERNS: [ActivityAction, RegExp][] = [
  ["deleted", /delet|remov|حذف|إزالة/i],
  ["deactivated", /inactive|deactivat|disabl|suspend|غير نشط|إيقاف|تعطيل/i],
  ["created", /creat|added|(^|[^a-z])add([^a-z]|$)|(^|[^a-z])new([^a-z]|$)|إنشاء|إضافة|أضاف|جديد/i],
  ["updated", /updat|edit|modif|chang|تعديل|تحديث/i],
];

function detect<T extends string>(patterns: [T, RegExp][], sources: (string | undefined)[], fallback: T): T {
  for (const source of sources) {
    if (!source) continue;
    const match = patterns.find(([, re]) => re.test(source));
    if (match) return match[0];
  }
  return fallback;
}

/** Works out what the notification is about, preferring the API's type fields over free text. */
export function classifyNotification(n: Notification): { entity: ActivityEntity; action: ActivityAction } {
  const sources = [n.type, n.referenceType, n.title, n.description];
  return {
    entity: detect(ENTITY_PATTERNS, sources, "other"),
    action: detect(ACTION_PATTERNS, sources, "other"),
  };
}

const ENTITY_ICON = {
  property: Building2,
  ad: Megaphone,
  project: FolderKanban,
  other: Bell,
} as const;

const ACTION_ICON = {
  created: Plus,
  updated: Pencil,
  deleted: Trash2,
  deactivated: PowerOff,
  other: Bell,
} as const;

const ACTION_STYLE: Record<ActivityAction, { stripe: string; tile: string; text: string; button: string; badge: string }> = {
  created: {
    stripe: "bg-emerald-500",
    tile: "from-emerald-500 to-emerald-600",
    text: "text-emerald-600 dark:text-emerald-400",
    button: "bg-emerald-600 hover:bg-emerald-700",
    badge: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950",
  },
  updated: {
    stripe: "bg-sky-500",
    tile: "from-sky-500 to-sky-600",
    text: "text-sky-600 dark:text-sky-400",
    button: "bg-sky-600 hover:bg-sky-700",
    badge: "bg-sky-50 text-sky-600 dark:bg-sky-950",
  },
  deleted: {
    stripe: "bg-rose-500",
    tile: "from-rose-500 to-rose-600",
    text: "text-rose-600 dark:text-rose-400",
    button: "bg-rose-600 hover:bg-rose-700",
    badge: "bg-rose-50 text-rose-600 dark:bg-rose-950",
  },
  deactivated: {
    stripe: "bg-amber-500",
    tile: "from-amber-500 to-amber-600",
    text: "text-amber-600 dark:text-amber-400",
    button: "bg-amber-600 hover:bg-amber-700",
    badge: "bg-amber-50 text-amber-600 dark:bg-amber-950",
  },
  other: {
    stripe: "bg-teal-500",
    tile: "from-teal-500 to-teal-600",
    text: "text-teal-600 dark:text-teal-400",
    button: "bg-teal-600 hover:bg-teal-700",
    badge: "bg-teal-50 text-teal-600 dark:bg-teal-950",
  },
};

export interface ActivityNotificationLabels {
  entity: Record<ActivityEntity, string>;
  action: Record<ActivityAction, string>;
  view: string;
  dismiss: string;
}

export interface ActivityNotificationInput {
  notification: Notification;
  entity: ActivityEntity;
  action: ActivityAction;
  timeLabel: string;
  labels: ActivityNotificationLabels;
  direction: "ltr" | "rtl";
  onOpen: () => void;
}

function ActivityNotificationCard({ input, onClose }: { input: ActivityNotificationInput; onClose: () => void }) {
  const { notification, entity, action, timeLabel, labels, direction, onOpen } = input;
  const style = ACTION_STYLE[action];
  const EntityIcon = ENTITY_ICON[entity];
  const ActionIcon = ACTION_ICON[action];
  const open = () => {
    onOpen();
    onClose();
  };

  return (
    <div
      dir={direction}
      role="alert"
      onClick={open}
      className="group relative w-[360px] max-w-[calc(100vw-2rem)] cursor-pointer overflow-hidden rounded-2xl border border-gray-200/80 bg-white/95 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.28)] backdrop-blur-sm transition-shadow hover:shadow-[0_20px_48px_-12px_rgba(15,23,42,0.36)] dark:border-neutral-800 dark:bg-neutral-900/95 dark:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)]"
    >
      <span className={cn("absolute inset-y-0 start-0 w-1", style.stripe)} />

      <button
        type="button"
        aria-label={labels.dismiss}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-2.5 end-2.5 flex h-6 w-6 items-center justify-center rounded-full text-gray-400 opacity-70 transition hover:bg-gray-100 hover:text-gray-700 hover:opacity-100 dark:hover:bg-neutral-800 dark:hover:text-gray-200"
      >
        <X className="h-3.5 w-3.5" />
      </button>

      <div className="flex gap-3 p-4 ps-5">
        <div className="relative shrink-0">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
              style.tile
            )}
          >
            <EntityIcon className="h-5 w-5" />
          </div>
          <span
            className={cn(
              "absolute -bottom-1 -end-1 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white dark:ring-neutral-900",
              style.badge
            )}
          >
            <ActionIcon className="h-3 w-3" />
          </span>
        </div>

        <div className="min-w-0 flex-1 pe-5">
          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            {entity !== "other" && (
              <span className="rounded-md bg-gray-100 px-1.5 py-0.5 font-medium text-gray-600 dark:bg-neutral-800 dark:text-gray-300">
                {labels.entity[entity]}
              </span>
            )}
            <span className={cn("font-semibold uppercase tracking-wide", style.text)}>{labels.action[action]}</span>
            {timeLabel && (
              <>
                <span className="text-gray-300 dark:text-neutral-600">•</span>
                <span className="text-gray-400 dark:text-gray-500">{timeLabel}</span>
              </>
            )}
          </div>

          <p className="mt-1 line-clamp-1 text-sm font-semibold text-gray-900 dark:text-gray-100">{notification.title}</p>
          {notification.description && (
            <p className="mt-0.5 line-clamp-2 text-[13px] leading-snug text-gray-600 dark:text-gray-400">
              {notification.description}
            </p>
          )}

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                open();
              }}
              className={cn(
                "inline-flex h-7 items-center gap-1 rounded-lg px-3 text-xs font-medium text-white shadow-xs transition-colors",
                style.button
              )}
            >
              {labels.view}
              <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="inline-flex h-7 items-center rounded-lg px-2.5 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-200"
            >
              {labels.dismiss}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function showActivityNotification(input: ActivityNotificationInput) {
  toast.custom(
    (toastId) => <ActivityNotificationCard input={input} onClose={() => toast.dismiss(toastId)} />,
    {
      id: `activity-notification-${input.notification.id}`,
      duration: 9000,
      position: input.direction === "rtl" ? "bottom-left" : "bottom-right",
      unstyled: true,
    }
  );
}

export function showActivitySummaryNotification({
  text,
  viewLabel,
  direction,
  onOpen,
}: {
  text: string;
  viewLabel: string;
  direction: "ltr" | "rtl";
  onOpen: () => void;
}) {
  toast.custom(
    (toastId) => (
      <div
        dir={direction}
        className="flex w-[360px] max-w-[calc(100vw-2rem)] items-center gap-3 rounded-2xl border border-gray-200/80 bg-white/95 px-4 py-3 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.28)] backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/95"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400">
          <Bell className="h-4 w-4" />
        </span>
        <p className="flex-1 text-sm font-medium text-gray-800 dark:text-gray-200">{text}</p>
        <button
          type="button"
          onClick={() => {
            onOpen();
            toast.dismiss(toastId);
          }}
          className="inline-flex h-7 items-center rounded-lg bg-teal-600 px-3 text-xs font-medium text-white hover:bg-teal-700"
        >
          {viewLabel}
        </button>
      </div>
    ),
    {
      id: "activity-notification-summary",
      duration: 9000,
      position: direction === "rtl" ? "bottom-left" : "bottom-right",
      unstyled: true,
    }
  );
}
