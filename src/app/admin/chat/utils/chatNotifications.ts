const MAX_KEYS = 500;
const notifiedKeys = new Set<string>();

/**
 * Returns true the first time a conversation/message pair is seen, so the realtime handler
 * and the background watcher never notify about the same message twice.
 */
export function claimChatNotification(conversationId: string | number, messageKey?: string | number | null): boolean {
  const key = `${conversationId}:${messageKey ?? "conversation"}`;
  if (notifiedKeys.has(key)) return false;
  notifiedKeys.add(key);
  if (notifiedKeys.size > MAX_KEYS) {
    const oldest = notifiedKeys.values().next().value;
    if (oldest !== undefined) notifiedKeys.delete(oldest);
  }
  return true;
}

/** Shows a system notification when the tab is in the background and permission was granted. */
export function showBrowserNotification(title: string, body: string, onClick: () => void) {
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission !== "granted" || document.visibilityState === "visible") return;
  try {
    const notification = new Notification(title, { body, icon: "/images/logo.svg", tag: title });
    notification.onclick = () => {
      window.focus();
      onClick();
      notification.close();
    };
  } catch {
  }
}

export function requestBrowserNotificationPermission() {
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission === "default") Notification.requestPermission().catch(() => {});
}
