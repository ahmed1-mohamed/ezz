import { UseFormSetError, UseFormGetValues, FieldValues, Path } from "react-hook-form";
import { parseApiError } from "./api-errors";

/** Key under `errors.root` holding an API error that belongs to no single field. */
export const ROOT_SERVER_ERROR = "root.server" as const;

interface ApplyApiFormErrorsOptions<T extends FieldValues> {
  setError: UseFormSetError<T>;
  /** Used to tell which backend keys are real form fields (the form's top-level values). */
  getValues: UseFormGetValues<T>;
  t: (key: string, values?: Record<string, string | number>) => string;
  /** Backend field name → form field name, for keys that differ. */
  fieldMap?: Record<string, Path<T>>;
  /** Translated message used when the error carries nothing safe to show. */
  fallbackMessage: string;
}

export interface ApiFormErrorResult {
  /** Number of form fields that received a backend error. */
  fieldErrorCount: number;
  /** Message for a toast: the backend's messages, or a generic one. */
  summary: string;
}

/**
 * Applies a failed submit's error to a react-hook-form form (see `parseApiError`): backend
 * validation errors go under their inputs (the first one is focused), and anything that can't be
 * tied to a field goes to `errors.root.server`. Returns the toast message.
 */
export function applyApiFormErrors<T extends FieldValues>(
  error: unknown,
  { setError, getValues, t, fieldMap, fallbackMessage }: ApplyApiFormErrorsOptions<T>
): ApiFormErrorResult {
  const { fieldErrors, generalMessage, summary } = parseApiError(error, {
    t,
    fallbackMessage,
    fields: Object.keys(getValues() ?? {}),
    fieldMap,
  });

  Object.entries(fieldErrors).forEach(([field, message]) => {
    setError(field as Path<T>, { type: "server", message });
  });
  if (generalMessage) {
    setError(ROOT_SERVER_ERROR, { type: "server", message: generalMessage });
  }
  if (Object.keys(fieldErrors).length > 0 || generalMessage) {
    scrollToFirstInvalidField();
  }
  return { fieldErrorCount: Object.keys(fieldErrors).length, summary };
}

const INVALID_FIELD_SELECTOR = '[aria-invalid="true"], [data-field-error]';
const FOCUSABLE_SELECTOR =
  'input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled]), button:not([disabled]), [contenteditable="true"], [tabindex]:not([tabindex="-1"])';

const TEXT_ENTRY_SELECTOR =
  'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([disabled]), textarea:not([disabled]), [contenteditable="true"]';

function isRendered(el: Element): boolean {
  if (el.getClientRects().length === 0) return false;
  // Skips e.g. an editor's hidden tooltip input, which still has a box.
  return getComputedStyle(el).visibility !== "hidden";
}

/** Where to look for invalid fields: the form/dialog the event came from, else the open dialog, else the page. */
function resolveScope(origin?: EventTarget | null): ParentNode {
  // A form inside a tab that the invalid handler switched away from is no longer in the page.
  if (origin instanceof Element && origin.isConnected) {
    const scope = origin.closest("form") ?? origin.closest('[role="dialog"]');
    if (scope) return scope;
  }
  const dialogs = document.querySelectorAll('[role="dialog"][data-state="open"], [role="dialog"]:not([data-state])');
  return dialogs.length > 0 ? dialogs[dialogs.length - 1] : document;
}

/** The element to focus for an invalid match: itself, a focusable inside it, or the input its error message belongs to. */
function focusTargetFor(el: Element): HTMLElement | null {
  if (el.hasAttribute("data-form-error")) return null;
  if (el.hasAttribute("data-field-error")) {
    // The error message sits under its input: take the closest focusable before it in its field wrapper.
    let container = el.parentElement;
    for (let depth = 0; container && depth < 3; depth++, container = container.parentElement) {
      const before = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (c) => isRendered(c) && el.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_PRECEDING
      );
      if (before.length > 0) return before[before.length - 1];
    }
    return null;
  }
  if (el.matches(FOCUSABLE_SELECTOR)) return el as HTMLElement;
  // An invalid wrapper (e.g. a rich text editor): prefer where you type over toolbar buttons.
  return (
    Array.from(el.querySelectorAll<HTMLElement>(TEXT_ENTRY_SELECTOR)).find(isRendered) ??
    Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).find(isRendered) ??
    null
  );
}

/**
 * Scrolls the first invalid field on screen into view and focuses it. Invalid fields are found
 * in document order by `aria-invalid="true"` or a rendered `FieldError`, so it also works for
 * Controller-based inputs (selects, editors, uploads) that react-hook-form can't focus itself.
 * Waits for the error state to render (and for tabs/sections an invalid handler opened).
 */
export function scrollToFirstInvalidField(origin?: EventTarget | null) {
  if (typeof window === "undefined") return;

  const attempt = (retriesLeft: number) => {
    const scope = resolveScope(origin);
    const target =
      Array.from(scope.querySelectorAll(INVALID_FIELD_SELECTOR)).find(isRendered) ??
      Array.from(scope.querySelectorAll("[data-form-error]")).find(isRendered);
    if (!target) {
      if (retriesLeft > 0) window.setTimeout(() => attempt(retriesLeft - 1), 150);
      return;
    }
    const focusTarget = focusTargetFor(target);
    // Scroll the visible field (an sr-only file input has no useful position of its own).
    const scrollTarget =
      focusTarget && focusTarget.getBoundingClientRect().width > 1 ? focusTarget : target;
    scrollTarget.scrollIntoView({ behavior: "smooth", block: "center" });
    focusTarget?.focus({ preventScroll: true });
  };

  requestAnimationFrame(() => requestAnimationFrame(() => attempt(2)));
}
