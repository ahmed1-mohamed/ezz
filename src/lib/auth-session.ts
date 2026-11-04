"use client";

import { signOut } from "next-auth/react";

export const LOGIN_PATH = "/auth/signin";

let isLoggingOut = false;

/** Thrown by the token refresh when the session can't be renewed (not for rate limits or network errors). */
export class SessionExpiredError extends Error {
  constructor() {
    super("Session expired");
    this.name = "SessionExpiredError";
  }
}

/**
 * Ends the session and sends the user to the login page. Safe to call from many failing
 * requests at once: only the first call signs out and redirects.
 */
export async function logoutToLogin() {
  if (typeof window === "undefined" || isLoggingOut) return;
  if (window.location.pathname.startsWith("/auth")) return;
  isLoggingOut = true;
  try {
    await signOut({ redirect: false });
  } catch {
  }
  window.location.replace(`${LOGIN_PATH}?reason=session_expired`);
}
