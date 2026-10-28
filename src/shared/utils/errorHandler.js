import toast from 'react-hot-toast';

export const ALLOWED_ERROR_STATUS_CODES = new Set([400, 401, 403, 404]);

const TECHNICAL_LEAK_PATTERNS = [
  /status\s*code/i,
  /server\s*error/i,
  /internal\s*server/i,
  /bad\s*gateway/i,
  /gateway\s*timeout/i,
  /service\s*unavailable/i,
  /should\s+not\s+exist/i,
  /property\s+.+\s+should/i,
  /isString|isNotEmpty|isEmail|isNumber|isBoolean|isDefined|isArray/i,
  /target\.constructor/i,
  /cannot\s+read\s+propert/i,
  /\b(sql|select|insert|update|delete|table|column|database|query)\b/i,
  /failed\s+with\s+status\s+code/i,
  /jwt|bearer|token\s+expired/i,
  /econnrefused|enotfound|etimedout/i,
  /network\s+error/i,
  /validation\s+failed/i,
  /class-validator/i,
  /syntax\s*error/i,
  /reference\s*error/i,
  /type\s*error/i,
  /dto/i,
];

let lastToastMessage = '';
let lastToastTime = 0;
const DEDUPLICATION_INTERVAL_MS = 2500;

export function isAllowedErrorCode(status) {
  if (status === undefined || status === null) return true;
  const num = Number(status);
  return ALLOWED_ERROR_STATUS_CODES.has(num);
}

export function containsTechnicalLeak(text) {
  if (typeof text !== 'string') return true;
  const trimmed = text.trim();
  if (!trimmed) return true;
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) return true;
  if (/^\d{3}\b/.test(trimmed)) return true; // Starts with 500, 400 etc
  return TECHNICAL_LEAK_PATTERNS.some((pattern) => pattern.test(trimmed));
}

export function sanitizeErrorMessage(rawInput, status, isArabic = true) {
  let candidate = '';

  if (Array.isArray(rawInput)) {
    // If array of validation errors, pick first string candidate
    const firstString = rawInput.find((item) => typeof item === 'string' && item.trim());
    candidate = firstString || '';
  } else if (typeof rawInput === 'string') {
    candidate = rawInput.trim();
  } else if (typeof rawInput === 'object' && rawInput !== null) {
    if (typeof rawInput.message === 'string') {
      candidate = rawInput.message;
    } else if (Array.isArray(rawInput.message)) {
      candidate = rawInput.message.find((m) => typeof m === 'string') || '';
    } else if (rawInput.ar || rawInput.en) {
      candidate = isArabic ? (rawInput.ar || rawInput.en) : (rawInput.en || rawInput.ar);
    } else if (typeof rawInput.error === 'string') {
      candidate = rawInput.error;
    }
  }

  // Check if status is specifically 401, 403, 404
  const numStatus = Number(status);

  if (numStatus === 401) {
    return isArabic
      ? 'انتهت الجلسة أو غير مصرح، يرجى تسجيل الدخول مجدداً'
      : 'Session expired or unauthorized. Please sign in again.';
  }

  if (numStatus === 403) {
    return isArabic
      ? 'ليس لديك الصلاحية لتنفيذ هذا الإجراء'
      : 'You do not have permission to perform this action.';
  }

  if (numStatus === 404) {
    return isArabic
      ? 'العنصر أو الصفحة المطلوبة غير موجودة'
      : 'The requested resource was not found.';
  }

  // If candidate is technical or leaks server/validation schema
  if (!candidate || containsTechnicalLeak(candidate)) {
    if (numStatus === 400) {
      return isArabic
        ? 'يرجى التأكد من صحة البيانات المدخلة'
        : 'Please verify the entered data.';
    }
    return isArabic
      ? 'حدث خطأ، يرجى المحاولة مرة أخرى لاحقاً'
      : 'An error occurred, please try again later.';
  }

  // Specific user-friendly translations for known business error codes
  if (candidate.includes('FEATURE_ITEM_LENGTH') || candidate.includes('feature_item_length')) {
    return isArabic
      ? 'يجب ألا يقل طول نص كل ميزة عن 3 أحرف'
      : 'Each feature must be at least 3 characters.';
  }

  return candidate;
}

export function showSafeErrorToast(errorOrMessage, options = {}) {
  const isArabic = options.isArabic !== undefined
    ? options.isArabic
    : (localStorage.getItem('appLanguage') || 'ar') === 'ar';

  let status = options.status;
  let rawMsg = errorOrMessage;

  if (errorOrMessage && typeof errorOrMessage === 'object' && !(errorOrMessage instanceof String)) {
    if (errorOrMessage.response) {
      status = errorOrMessage.response.status;
      rawMsg = errorOrMessage.response.data?.message || errorOrMessage.response.data?.error || errorOrMessage.response.data;
    } else if (errorOrMessage.status) {
      status = errorOrMessage.status;
    }
  }

  // CRITICAL RULE: Only display error messages for HTTP status codes 400, 401, 403, 404.
  // Never show toasts for 500, 502, 503, 504 or unknown status codes.
  if (status !== undefined && status !== null && !isAllowedErrorCode(status)) {
    return null;
  }

  const safeMsg = sanitizeErrorMessage(rawMsg, status, isArabic);
  if (!safeMsg) return null;

  const now = Date.now();
  if (safeMsg === lastToastMessage && now - lastToastTime < DEDUPLICATION_INTERVAL_MS) {
    // Suppress spamming of the exact same error toast
    return null;
  }

  // Global rate limiter: suppress rapid cascading toasts (within 800ms)
  if (now - lastToastTime < 800) {
    return null;
  }

  lastToastMessage = safeMsg;
  lastToastTime = now;

  // Mark error object so caller know it was handled
  if (errorOrMessage && typeof errorOrMessage === 'object') {
    errorOrMessage._toastShown = true;
  }

  return toast.error(safeMsg, {
    id: 'app-global-error-toast',
    duration: options.duration || 4000,
  });
}
