import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getApiErrorMessage, toUserMessage } from "./api-errors";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts a clean, user-safe error message from any API error or exception
 * (never status codes, field prefixes, stacks or other technical text).
 */
export function extractErrorMessage(
  error: unknown,
  fallbackMessage: string = "Something went wrong. Please try again."
): string {
  if (!error) return fallbackMessage;
  const err = error as any;
  if (err?.response || err?.request) return getApiErrorMessage(error, undefined, fallbackMessage);

  // A bare response body (`{ errors, message }`) or `{ message }` object.
  const data = err?.data || (typeof err === "object" ? err : null);
  if (data?.errors || data?.message || data?.error) {
    const message = getApiErrorMessage({ response: { status: 400, data } }, undefined, "");
    if (message) return message;
  }
  return (typeof err?.message === "string" && toUserMessage(err.message)) || fallbackMessage;
}
