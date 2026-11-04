import { useCallback, useEffect, useRef, useState } from "react";


export interface FirebaseMessage {
  notification?: {
    title?: string;
    body?: string;
    image?: string;
  };
  data?: Record<string, string>;
}

interface UseFirebaseMessagingOptions {
  /**
   * When true, Firebase is not initialised on mount; call `requestToken()` (e.g. on the
   * first form interaction) to load Firebase, ask for permission and fetch the FCM token.
   */
  lazy?: boolean;
}

export function useFirebaseMessaging({ lazy = false }: UseFirebaseMessagingOptions = {}) {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [message, setMessage] = useState<FirebaseMessage | null>(null);
  const [error, setError] = useState<string | null>(null);

  const initPromiseRef = useRef<Promise<string | null> | null>(null);
  const unsubscribeRef = useRef<(() => void) | undefined>(undefined);
  const mountedRef = useRef(true);

  // Initialises Firebase messaging once per mount and resolves with the FCM token (or null).
  const requestToken = useCallback((): Promise<string | null> => {
    if (typeof window === "undefined") return Promise.resolve(null);
    if (initPromiseRef.current) return initPromiseRef.current;

    const initFirebase = async (): Promise<string | null> => {
      const { messaging, getToken, onMessage } = await import("@/lib/firebase-config");

      if (!messaging) return null;

      const requestPermissionAndGetToken = async (): Promise<string | null> => {
        try {
          if (typeof window === "undefined" || typeof Notification === "undefined") {
            return null;
          }
          const permission = await Notification.requestPermission();

          if (permission === "granted") {
            const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
            if (!vapidKey) {
              console.warn("VAPID key not configured");
              return null;
            }

            const token = await getToken(messaging, { vapidKey });
            if (token) {
              setFcmToken(token);
              return token;
            }
          } else {
            setError("Notification permission denied");
          }
        } catch (err) {
          console.error("Error getting FCM token:", err);
          setError(
            err instanceof Error ? err.message : "Failed to get FCM token"
          );
        }
        return null;
      };

      const tokenPromise = requestPermissionAndGetToken();

      const unsubscribe = onMessage(messaging, (payload) => {
        setMessage(payload as FirebaseMessage);

        if (payload.notification && typeof Notification !== "undefined") {
          new Notification(payload.notification.title || "New Message", {
            body: payload.notification.body,
            icon: payload.notification.image || "/images/next.svg",
          });
        }
      });
      if (mountedRef.current) {
        unsubscribeRef.current = unsubscribe;
      } else {
        unsubscribe();
      }

      return tokenPromise;
    };

    initPromiseRef.current = initFirebase().catch((err) => {
      console.error("Firebase messaging initialisation failed:", err);
      return null;
    });
    return initPromiseRef.current;
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    if (!lazy) {
      requestToken();
    }

    return () => {
      mountedRef.current = false;
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = undefined;
      }
    };
  }, [lazy, requestToken]);

  return { fcmToken, message, error, requestToken };
}