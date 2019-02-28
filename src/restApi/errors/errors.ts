export interface DetailError extends Error {
  code: number;
  reason: string;
  details?: string;
}

export function createError(code: number, reason: string, details?: string) {
  const error = new Error(reason) as DetailError;
  error.code = code;
  error.reason = reason;
  if (details) {
    error.details = details;
  }
  return error;
}

export function internal(details: string) {
  return createError(500, "INTERNAL_SERVER_ERROR", details);
}

export function notFound() {
  return createError(404, "NOT_FOUND");
}
