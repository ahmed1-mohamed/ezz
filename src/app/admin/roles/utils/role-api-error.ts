/**
 * The roles endpoints may return validation errors under `status` (e.g. `{ status: { role_name: ["..."] } }`)
 * instead of `errors`. This copies them to `errors` so the shared API error helpers can map them to fields.
 */
export function normalizeRoleApiError(error: unknown): unknown {
  const err = error as { response?: { data?: Record<string, unknown> } } | undefined;
  const data = err?.response?.data;
  const status = data?.status;
  if (!data || data.errors || !status || typeof status !== "object" || Array.isArray(status)) {
    return error;
  }
  return { ...err, response: { ...err!.response, data: { ...data, errors: status } } };
}
