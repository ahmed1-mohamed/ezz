"use client";

import { useEffect, useRef } from "react";
import { useSonner } from "sonner";
import {
  installAudioUnlock,
  pickLoudestCategory,
  playNotificationSound,
  type SoundCategory,
} from "@/lib/notification-sound";

type SonnerToast = ReturnType<typeof useSonner>["toasts"][number];

const ID_PREFIX_CATEGORY: [string, SoundCategory][] = [
  ["chat-notification-summary", "message"],
  ["chat-notification-", "message"],
  ["activity-notification", "system"],
];

function categoryOf(toast: SonnerToast): SoundCategory | null {
  if (toast.type === "loading") return null;
  if (typeof toast.id === "string") {
    const match = ID_PREFIX_CATEGORY.find(([prefix]) => (toast.id as string).startsWith(prefix));
    if (match) return match[1];
  }
  switch (toast.type) {
    case "success":
    case "error":
    case "warning":
    case "info":
      return toast.type;
    default:
      return "info";
  }
}

/**
 * Single place that turns notifications into sound: every toast shown anywhere in the app
 * (sonner `toast.*`, including the chat and activity notification cards) is heard here.
 * Each create/update yields a new toast object, so a WeakSet tells new events from re-renders.
 */
export function NotificationSoundManager() {
  const { toasts } = useSonner();
  const seenRef = useRef(new WeakSet<object>());

  useEffect(() => installAudioUnlock(), []);

  useEffect(() => {
    const categories: SoundCategory[] = [];
    for (const toast of toasts) {
      if (seenRef.current.has(toast)) continue;
      seenRef.current.add(toast);
      const category = categoryOf(toast);
      if (category) categories.push(category);
    }
    const category = pickLoudestCategory(categories);
    if (category) playNotificationSound(category);
  }, [toasts]);

  return null;
}
