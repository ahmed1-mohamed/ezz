/**
 * Turns failed API calls into messages that are safe to show users.
 *
 * Backend validation errors come as `errors: { field: ["msg"] }`, `errors: [{ field: "msg" }]`,
 * `errors: [{ field, message }]`, `errors: ["msg"]`, or just `message`. A 2xx response with
 * `status: false` is rejected by the API client with the same shape, so it's handled like a 400.
 */

type Translate = (key: string, values?: Record<string, string | number>) => string;

const TECHNICAL_MESSAGE_PATTERNS = [
  /request failed with status/i,
  /status code/i,
  /business logic error/i,
  // Class-name style only ("QueryException:", "NullPointerException"), so domain words like
  // "time-off exception" (expert availability exceptions) still get through.
  /\b[A-Z]\w*Exception\b|stack ?trace|traceback/,
  /\b(sql|sqlstate|sequelize|prisma|mongo\w*|query failed)\b/i,
  /cannot read propert|is not a function|^(ReferenceError: )?[\w$]+ is not defined$/i,
  /<\/?[a-z][^>]*>/i,
  /^\s*[[{]/,
  /^\s*at\s+\S+/m,
  /internal server error|\bon line \d+|\bat line \d+/i,
  /^(bad request|unprocessable entity|operation failed|error|network error)\.?$/i,
];

/** Returns a message that is safe to show a user, or null for technical/raw text. */
export function toUserMessage(value: unknown): string | null {
  const raw = Array.isArray(value) ? value[0] : value;
  if (typeof raw !== "string") return null;
  // Strip "field_name: " prefixes some endpoints put in front of the message.
  const msg = raw.replace(/^([a-zA-Z0-9_.-]+:\s*)+/, "").trim();
  if (!msg || msg.length > 300) return null;
  // Check the raw text too: the prefix strip above would remove e.g. "QueryException: ".
  if (TECHNICAL_MESSAGE_PATTERNS.some((pattern) => pattern.test(msg) || pattern.test(raw))) return null;
  return msg;
}

/** Flattens the backend's error shapes into [field | null, message] pairs. */
function collectBackendErrors(data: any): Array<[string | null, unknown]> {
  const entries: Array<[string | null, unknown]> = [];
  const errors = data?.errors;

  if (Array.isArray(errors)) {
    errors.forEach((item) => {
      if (typeof item === "string") {
        entries.push([null, item]);
      } else if (item && typeof item === "object") {
        const field = item.field ?? item.path ?? item.param;
        const message = item.message ?? item.msg;
        if (typeof field === "string" && message !== undefined) {
          entries.push([field, message]);
        } else {
          Object.entries(item).forEach(([key, value]) => entries.push([key, value]));
        }
      }
    });
  } else if (errors && typeof errors === "object") {
    Object.entries(errors).forEach(([key, value]) => entries.push([key, value]));
  }

  if (entries.length === 0) {
    if (data?.message) entries.push([null, data.message]);
    else if (typeof data?.error === "string") entries.push([null, data.error]);
  }
  return entries;
}

export interface ParseApiErrorOptions {
  /** Used for the generic network/server/permission messages. Omit to fall back to `fallbackMessage`. */
  t?: Translate;
  /** Already-translated message used when the error carries nothing safe to show. */
  fallbackMessage: string;
  /** The form's field names; backend errors for other keys become general messages. */
  fields?: Iterable<string>;
  /** Backend field name → form field name, for keys that differ. */
  fieldMap?: Record<string, string>;
}

export interface ParsedApiError {
  /** Form field → message, in the order the backend listed them. */
  fieldErrors: Record<string, string>;
  /** Message for a form-level banner; undefined when every error belongs to a field. */
  generalMessage?: string;
  /** Message for a toast: the backend's messages, or a generic one. */
  summary: string;
}

/**
 * Parses a failed request. 400/409/422 validation errors are mapped to `fields` where possible;
 * other statuses use the backend's message when it is human-readable, else a translated one.
 * Raw or technical backend text is never returned.
 */
export function parseApiError(
  error: unknown,
  { t, fallbackMessage, fields = [], fieldMap = {} }: ParseApiErrorOptions
): ParsedApiError {
  const err = error as { response?: { status?: number; data?: unknown }; request?: unknown; code?: string };
  const tr = (key: string) => (t ? t(key) : fallbackMessage);
  const general = (message: string): ParsedApiError => ({ fieldErrors: {}, generalMessage: message, summary: message });
  const response = err?.response;

  if (!response) {
    const isNetworkError = !!err?.request || err?.code === "ERR_NETWORK" || err?.code === "ECONNABORTED";
    if (isNetworkError) return general(tr("validation.api.network"));
    // An error thrown by our own code (e.g. `throw new Error(t("..."))`) carries a message meant for users.
    return general((error instanceof Error && toUserMessage(error.message)) || fallbackMessage);
  }

  const status = response.status ?? 0;
  const data = response.data as { message?: unknown; error?: unknown } | undefined;
  const backendMessage = toUserMessage(data?.message) ?? toUserMessage(data?.error);
  if (status >= 500) return general(backendMessage ?? tr("validation.api.server"));
  if (status === 401 || status === 403) return general(backendMessage ?? tr("validation.api.forbidden"));
  if (status === 404 || status === 405) return general(backendMessage ?? fallbackMessage);

  const knownFields = new Set(fields);
  const resolveField = (key: string): string | null => {
    const base = key.split(".")[0];
    const mapped = fieldMap[key] ?? fieldMap[base];
    if (mapped) return mapped;
    if (knownFields.has(key)) return key;
    if (knownFields.has(base)) return base;
    return null;
  };

  const fieldErrors: Record<string, string> = {};
  const fieldMessages: string[] = [];
  const generalMessages: string[] = [];

  collectBackendErrors(response.data).forEach(([key, value]) => {
    const field = key ? resolveField(key) : null;
    const message = toUserMessage(value);
    if (field) {
      if (field in fieldErrors) return;
      fieldErrors[field] = message ?? tr("validation.api.invalidValue");
      if (message && !fieldMessages.includes(message)) fieldMessages.push(message);
    } else if (message && !generalMessages.includes(message)) {
      generalMessages.push(message);
    }
  });

  const hasFieldErrors = Object.keys(fieldErrors).length > 0;
  const generalMessage =
    generalMessages.length > 0 || !hasFieldErrors ? generalMessages.join(" ") || fallbackMessage : undefined;
  // The toast repeats the backend's own messages so the user sees what went wrong at a glance.
  const summary =
    [...fieldMessages, ...generalMessages].join(" • ") ||
    (hasFieldErrors ? tr("validation.api.fixFields") : fallbackMessage);

  return { fieldErrors, generalMessage, summary };
}

/** Toast-ready message for a failed request (for actions with no form fields). */
export function getApiErrorMessage(error: unknown, t: Translate | undefined, fallbackMessage: string): string {
  return parseApiError(error, { t, fallbackMessage }).summary;
}
