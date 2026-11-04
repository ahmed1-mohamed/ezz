"use client";

import { toast } from "sonner";
import { ArrowUpRight, MessageCircle, MessageSquarePlus, Paperclip, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatChatTime } from "../utils/chatDateUtils";

export interface ChatNotificationLabels {
  newMessage: string;
  newConversation: string;
  open: string;
  dismiss: string;
  attachment: string;
  messagesCount: (count: number) => string;
}

export interface ChatNotificationInput {
  conversationId: string | number;
  kind: "message" | "conversation";
  senderName: string;
  title?: string | null;
  preview?: string | null;
  hasAttachment?: boolean;
  createdAt?: string | null;
  labels: ChatNotificationLabels;
  direction: "ltr" | "rtl";
  onOpen: () => void;
}

const pendingCounts = new Map<string, number>();

function initialsOf(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "?";
  return words
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

function ChatNotificationCard({
  input,
  count,
  onClose,
}: {
  input: ChatNotificationInput;
  count: number;
  onClose: () => void;
}) {
  const { kind, senderName, title, preview, hasAttachment, createdAt, labels, direction, onOpen } = input;
  const isConversation = kind === "conversation";
  const time = formatChatTime(createdAt || new Date().toISOString());
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
      <span
        className={cn(
          "absolute inset-y-0 start-0 w-1",
          isConversation ? "bg-gradient-to-b from-violet-500 to-teal-500" : "bg-teal-500"
        )}
      />

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
              "flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold text-white shadow-sm",
              isConversation
                ? "bg-gradient-to-br from-violet-500 to-violet-600"
                : "bg-gradient-to-br from-teal-500 to-teal-600"
            )}
          >
            {initialsOf(senderName)}
          </div>
          <span
            className={cn(
              "absolute -bottom-1 -end-1 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white dark:ring-neutral-900",
              isConversation ? "bg-violet-50 text-violet-600 dark:bg-violet-950" : "bg-teal-50 text-teal-600 dark:bg-teal-950"
            )}
          >
            {isConversation ? <MessageSquarePlus className="h-3 w-3" /> : <MessageCircle className="h-3 w-3" />}
          </span>
          <span className="absolute -top-0.5 -start-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-neutral-900" />
          </span>
        </div>

        <div className="min-w-0 flex-1 pe-5">
          <div className="flex items-center gap-1.5 text-[11px]">
            <span
              className={cn(
                "font-semibold uppercase tracking-wide",
                isConversation ? "text-violet-600 dark:text-violet-400" : "text-teal-600 dark:text-teal-400"
              )}
            >
              {isConversation ? labels.newConversation : labels.newMessage}
            </span>
            {time && (
              <>
                <span className="text-gray-300 dark:text-neutral-600">•</span>
                <span className="text-gray-400 dark:text-gray-500">{time}</span>
              </>
            )}
          </div>

          <p className="mt-0.5 truncate text-sm font-semibold text-gray-900 dark:text-gray-100">{senderName}</p>
          {title && title !== senderName && (
            <p className="truncate text-xs text-gray-500 dark:text-gray-400">{title}</p>
          )}

          {(preview || hasAttachment) && (
            <div className="mt-2 rounded-xl rounded-ss-sm bg-gray-50 px-3 py-2 text-[13px] leading-snug text-gray-700 dark:bg-neutral-800/80 dark:text-gray-300">
              {preview ? (
                <p className="line-clamp-2 break-words">{preview}</p>
              ) : (
                <p className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                  <Paperclip className="h-3.5 w-3.5" />
                  {labels.attachment}
                </p>
              )}
            </div>
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
                isConversation ? "bg-violet-600 hover:bg-violet-700" : "bg-teal-600 hover:bg-teal-700"
              )}
            >
              {labels.open}
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
            {count > 1 && (
              <span className="ms-auto rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-600 dark:bg-red-950/50 dark:text-red-400">
                {labels.messagesCount(count)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/** One card per conversation: a new message updates the existing card and bumps its counter. */
export function showChatNotification(input: ChatNotificationInput) {
  const id = `chat-notification-${input.conversationId}`;
  const count = (pendingCounts.get(id) ?? 0) + 1;
  pendingCounts.set(id, count);
  const clear = () => pendingCounts.delete(id);

  toast.custom(
    (toastId) => (
      <ChatNotificationCard
        input={input}
        count={count}
        onClose={() => {
          clear();
          toast.dismiss(toastId);
        }}
      />
    ),
    {
      id,
      duration: input.kind === "conversation" ? 9000 : 7000,
      position: input.direction === "rtl" ? "bottom-left" : "bottom-right",
      unstyled: true,
      onDismiss: clear,
      onAutoClose: clear,
    }
  );
}

export function showChatSummaryNotification({
  text,
  openLabel,
  direction,
  onOpen,
}: {
  text: string;
  openLabel: string;
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
          <MessageCircle className="h-4 w-4" />
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
          {openLabel}
        </button>
      </div>
    ),
    {
      id: "chat-notification-summary",
      duration: 7000,
      position: direction === "rtl" ? "bottom-left" : "bottom-right",
      unstyled: true,
    }
  );
}
