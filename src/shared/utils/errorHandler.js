import toast from 'react-hot-toast';

export const DEDUPLICATION_WINDOW_MS = 2500;
export const MIN_TOAST_INTERVAL_MS = 400;
export const RECENT_SERVER_ERROR_WINDOW_MS = 2000;
export const API_TOAST_SUPPRESSION_WINDOW_MS = 1500;
export const TOAST_DURATION_MS = 3500;

export const ALLOWED_ERROR_STATUS_CODES = new Set([
  400, 401, 402, 403, 404, 405, 406, 408, 409, 410, 412, 413, 415, 422, 429
]);

const TECHNICAL_LEAK_PATTERNS = [
  /server\s*error/i,
  /internal\s*server/i,
  /bad\s*gateway/i,
  /gateway\s*timeout/i,
  /service\s*unavailable/i,
  /target\.constructor/i,
  /cannot\s+read\s+propert/i,
  /undefined\s+is\s+not/i,
  /null\s+is\s+not/i,
  /\bselect\s+\*|\binsert\s+into|\bupdate\s+\w+\s+set|\bdelete\s+from|\bdrop\s+table|\bsqlstate|\bsyntax\s*error|\bsql\b/i,
  /failed\s+with\s+status\s+code/i,
  /jwt|bearer|token\s+expired/i,
  /econnrefused|enotfound|etimedout/i,
  /network\s+error/i,
  /reference\s*error/i,
  /type\s*error/i,
  /(\/api\/|\bapi\/v\d+|\/v\d+\/)/i,
  /\b(cannot\s+(get|post|put|patch|delete))\b/i,
  /\b(route|endpoint)\s+.*not\s+found\b/i,
  /https?:\/\//i,
  /localhost(:\d+)?/i,
  /status\s*code\s*\d{3}/i,
];

const toastRegistry = {
  lastMessage: '',
  lastTime: 0,
};

const originalToastError = (typeof toast !== 'undefined' && typeof toast.error === 'function')
  ? toast.error.bind(toast)
  : null;

export function isAllowedErrorCode(status) {
  if (status === undefined || status === null || status === '') return false;
  const num = Number(status);
  if (Number.isNaN(num)) return false;
  return num >= 400 && num < 500;
}

export function isServerErrorCode(status) {
  if (status === undefined || status === null || status === '') return false;
  const num = Number(status);
  if (Number.isNaN(num)) return false;
  return num >= 500;
}

export function isServerError(errorOrMessage, options = {}) {
  if (!errorOrMessage && !options.status && !options.statusCode) return false;
  if (typeof errorOrMessage === 'object' && errorOrMessage !== null) {
    if (errorOrMessage._isServerError) return true;
    if (errorOrMessage.code === 'ERR_NETWORK' ||
        errorOrMessage.code === 'ECONNABORTED' ||
        errorOrMessage.code === 'ETIMEDOUT' ||
        errorOrMessage.code === 'ECONNREFUSED') {
      return true;
    }
    if (errorOrMessage.request && !errorOrMessage.response) return true;
  }
  let status = options.status ?? options.statusCode;
  if (typeof errorOrMessage === 'object' && errorOrMessage !== null) {
    status = status ?? errorOrMessage.response?.status ?? errorOrMessage.status ?? errorOrMessage.statusCode;
  }
  if (status !== undefined && status !== null && status !== '') {
    const num = Number(status);
    if (!Number.isNaN(num) && num >= 500) return true;
  }
  const text = typeof errorOrMessage === 'string'
    ? errorOrMessage
    : (errorOrMessage?.message || errorOrMessage?.response?.data?.message || '');
  if (typeof text === 'string' && text) {
    if (/\b(500|502|503|504)\b/i.test(text)) return true;
    if (/internal\s*server\s*error|server\s*error|bad\s*gateway|gateway\s*timeout|service\s*unavailable|network\s*error/i.test(text)) return true;
    if (/خطأ\s*في\s*الخادم|خطأ\s*داخلي|فشل\s*الاتصال\s*بالخادم|تعذر\s*الاتصال\s*بالخادم|خطأ\s*بالخادم|حدث\s*خطأ\s*في\s*الخادم/i.test(text)) return true;
  }
  return false;
}

export function stripEndpointAndUrls(text) {
  if (typeof text !== 'string') return '';
  let cleaned = text;
  cleaned = cleaned.replace(/https?:\/\/[^\s"'`<>]+/gi, '');
  cleaned = cleaned.replace(/\/?api\/v\d+\/[^\s"'`<>]+/gi, '');
  cleaned = cleaned.replace(/\/?api\/[^\s"'`<>]+/gi, '');
  cleaned = cleaned.replace(/\bCannot\s+(GET|POST|PUT|PATCH|DELETE)\s+[^\s"'`<>]+/gi, '');
  cleaned = cleaned.replace(/\b(Route|Endpoint)\s+[^\s"'`<>]*\s*not\s+found\b/gi, '');
  cleaned = cleaned.replace(/["'{}[\]]/g, '');
  cleaned = cleaned.replace(/^[\s:,-]+|[\s:,-]+$/g, '').trim();
  return cleaned;
}

export function containsTechnicalLeak(text) {
  if (typeof text !== 'string') return true;
  const trimmed = text.trim();
  if (!trimmed) return true;
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) return true;
  if (/^\d{3}\s+(bad request|unauthorized|forbidden|not found|internal|server error)/i.test(trimmed)) return true;
  return TECHNICAL_LEAK_PATTERNS.some((pattern) => pattern.test(trimmed));
}

export function extractErrorMessage(rawInput, isArabic = true) {
  if (!rawInput) return '';
  if (typeof rawInput === 'object' && rawInput !== null) {
    if (rawInput.response?.data) {
      return extractErrorMessage(rawInput.response.data, isArabic);
    }
    if (rawInput.message !== undefined && rawInput.message !== null) {
      if (typeof rawInput.message === 'string') {
        const msg = rawInput.message.trim();
        if (!/^Request failed with status code/i.test(msg)) return msg;
      } else if (Array.isArray(rawInput.message)) {
        const joined = rawInput.message.map(m => extractErrorMessage(m, isArabic)).filter(Boolean).join(' - ');
        if (joined) return joined;
      } else if (typeof rawInput.message === 'object') {
        const localized = isArabic ? (rawInput.message.ar || rawInput.message.en) : (rawInput.message.en || rawInput.message.ar);
        if (localized) return localized;
        const vals = Object.values(rawInput.message).map(v => extractErrorMessage(v, isArabic)).filter(Boolean);
        if (vals.length > 0) return vals.join(' - ');
      }
    }
    if (rawInput.errors && typeof rawInput.errors === 'object') {
      if (Array.isArray(rawInput.errors)) {
        const joined = rawInput.errors.map(e => extractErrorMessage(e, isArabic)).filter(Boolean).join(' - ');
        if (joined) return joined;
      } else {
        const values = Object.values(rawInput.errors);
        const flattened = values.flatMap(v => Array.isArray(v) ? v : [v]);
        const joined = flattened.map(e => extractErrorMessage(e, isArabic)).filter(Boolean).join(' - ');
        if (joined) return joined;
      }
    }
    if (rawInput.ar || rawInput.en) {
      return isArabic ? (rawInput.ar || rawInput.en) : (rawInput.en || rawInput.ar);
    }
    if (typeof rawInput.error === 'string') {
      const errStr = rawInput.error.trim();
      if (!/^(Bad Request|Internal Server Error|Unauthorized|Forbidden|Not Found)$/i.test(errStr)) {
        return errStr;
      }
    } else if (rawInput.error && typeof rawInput.error === 'object') {
      const extracted = extractErrorMessage(rawInput.error, isArabic);
      if (extracted) return extracted;
    }
    if (typeof rawInput.detail === 'string') return rawInput.detail.trim();
    if (typeof rawInput.msg === 'string') return rawInput.msg.trim();
  }
  if (Array.isArray(rawInput)) {
    const joined = rawInput.map(item => extractErrorMessage(item, isArabic)).filter(Boolean).join(' - ');
    if (joined) return joined;
  }
  if (typeof rawInput === 'string') {
    const trimmed = rawInput.trim();
    if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
      try {
        const parsed = JSON.parse(trimmed);
        return extractErrorMessage(parsed, isArabic);
      } catch {
        return trimmed;
      }
    }
    return trimmed;
  }
  return String(rawInput || '').trim();
}

export function canShowErrorInToaster(errorOrMessage, options = {}) {
  if (!errorOrMessage && !options.status && !options.statusCode) return false;
  if (isServerError(errorOrMessage, options)) return false;
  if (typeof errorOrMessage === 'object' && errorOrMessage !== null) {
    if (errorOrMessage._suppressToast || errorOrMessage._toastShown) return false;
  }
  let status = options.status ?? options.statusCode;
  if (typeof errorOrMessage === 'object' && errorOrMessage !== null) {
    status = status ?? errorOrMessage.response?.status ?? errorOrMessage.status ?? errorOrMessage.statusCode;
  }
  if (status !== undefined && status !== null && status !== '') {
    const num = Number(status);
    if (!Number.isNaN(num)) {
      if (num >= 500) return false;
      if (num < 400) return false;
    }
  }
  if (typeof window !== 'undefined' && window.__lastServerErrorTime) {
    const timeDiff = Date.now() - window.__lastServerErrorTime;
    if (timeDiff < RECENT_SERVER_ERROR_WINDOW_MS) {
      const numStatus = Number(status);
      if (!numStatus || numStatus < 400 || numStatus >= 500) return false;
    }
  }
  const text = extractErrorMessage(errorOrMessage, true);
  if (typeof text === 'string' && text && containsTechnicalLeak(text)) {
    const numStatus = Number(status);
    if (!numStatus || numStatus < 400 || numStatus >= 500) return false;
  }
  return true;
}

export function sanitizeErrorMessage(rawInput, status, isArabic = true) {
  if (!canShowErrorInToaster(rawInput, { status })) return '';
  const candidate = extractErrorMessage(rawInput, isArabic);
  let resolvedStatus = status;
  if (rawInput && typeof rawInput === 'object' && rawInput !== null) {
    resolvedStatus = resolvedStatus ?? rawInput.response?.status ?? rawInput.status ?? rawInput.statusCode;
  }
  const numStatus = Number(resolvedStatus);
  if (!candidate || containsTechnicalLeak(candidate)) {
    if (numStatus === 400) return isArabic ? 'البيانات المدخلة غير صحيحة، يرجى التحقق والمحاولة مجدداً' : 'Invalid data entered. Please verify and try again.';
    if (numStatus === 401) return isArabic ? 'انتهت الجلسة أو بيانات الدخول غير صحيحة، يرجى تسجيل الدخول مجدداً' : 'Session expired or unauthorized. Please sign in again.';
    if (numStatus === 403) return isArabic ? 'ليس لديك الصلاحية لتنفيذ هذا الإجراء' : 'You do not have permission to perform this action.';
    if (numStatus === 404) return isArabic ? 'العنصر أو الصفحة المطلوبة غير موجودة' : 'The requested resource was not found.';
    if (numStatus === 409) return isArabic ? 'البيانات مسجلة مسبقاً أو يوجد تعارض في العملية' : 'Data conflict. The resource already exists.';
    if (numStatus === 413) return isArabic ? 'حجم الملف أكبر من الحد المسموح به' : 'File size exceeds maximum allowed limit.';
    if (numStatus === 415) return isArabic ? 'صيغة الملف غير مدعومة' : 'Unsupported file format.';
    if (numStatus === 422) return isArabic ? 'يرجى مراجعة وتصحيح الحقول المطلوبة' : 'Please check and correct the required fields.';
    if (numStatus === 429) return isArabic ? 'تم تجاوز عدد المحاولات المسموح به، يرجى الانتظار قليلاً' : 'Too many requests. Please wait a moment.';
    if (numStatus >= 400 && numStatus < 500) return isArabic ? 'تعذر إتمام العملية، يرجى مراجعة البيانات والمحاولة مجدداً' : 'Unable to complete operation. Please verify data and try again.';
    return '';
  }
  return candidate;
}

export function showSafeErrorToast(errorOrMessage, options = {}) {
  const isArabic = options.isArabic !== undefined
    ? options.isArabic
    : (localStorage.getItem('appLanguage') || 'ar') === 'ar';
  let status = options.status;
  if (errorOrMessage && typeof errorOrMessage === 'object') {
    status = status ?? errorOrMessage.response?.status ?? errorOrMessage.status ?? errorOrMessage.statusCode ?? errorOrMessage.code;
  }
  if (isServerError(errorOrMessage, { ...options, status })) {
    if (errorOrMessage && typeof errorOrMessage === 'object') {
      errorOrMessage._isServerError = true;
      errorOrMessage._suppressToast = true;
      errorOrMessage._toastShown = true;
    }
    return null;
  }
  if (!canShowErrorInToaster(errorOrMessage, { ...options, status })) {
    return null;
  }
  const safeMsg = typeof errorOrMessage === 'string'
    ? errorOrMessage.trim()
    : sanitizeErrorMessage(errorOrMessage, status, isArabic);
  if (!safeMsg) return null;
  const now = Date.now();
  if (safeMsg === toastRegistry.lastMessage && now - toastRegistry.lastTime < DEDUPLICATION_WINDOW_MS) {
    if (errorOrMessage && typeof errorOrMessage === 'object') {
      errorOrMessage._toastShown = true;
    }
    return null;
  }
  if (now - toastRegistry.lastTime < MIN_TOAST_INTERVAL_MS) {
    return null;
  }
  toastRegistry.lastMessage = safeMsg;
  toastRegistry.lastTime = now;
  if (errorOrMessage && typeof errorOrMessage === 'object') {
    errorOrMessage._toastShown = true;
    errorOrMessage._toastMessage = safeMsg;
  }
  if (typeof window !== 'undefined') {
    window.__lastApiErrorToasted = { time: now, message: safeMsg, status: status };
  }
  const toastFn = originalToastError || (typeof toast !== 'undefined' && toast.error);
  if (!toastFn) return safeMsg;
  return toastFn(safeMsg, {
    id: `app-toast-${safeMsg.slice(0, 30)}`,
    duration: TOAST_DURATION_MS,
    ...options,
  });
}

if (typeof toast !== 'undefined' && typeof toast.error === 'function' && !toast._safeFilterInstalled) {
  toast._safeFilterInstalled = true;
  toast.error = function (message, options = {}) {
    if (isServerError(message, options)) return null;
    if (message && typeof message === 'object' && (message._toastShown || message._suppressToast)) return null;
    if (typeof window !== 'undefined' && window.__lastApiErrorToasted) {
      const timeSinceApiToast = Date.now() - (window.__lastApiErrorToasted.time || 0);
      if (timeSinceApiToast < API_TOAST_SUPPRESSION_WINDOW_MS) return null;
    }
    if (!canShowErrorInToaster(message, options)) return null;
    const isArabic = options?.isArabic !== undefined
      ? options.isArabic
      : (localStorage.getItem('appLanguage') || 'ar') === 'ar';
    const cleanMsg = typeof message === 'string'
      ? message.trim()
      : sanitizeErrorMessage(message, options?.status, isArabic);
    if (!cleanMsg) return null;
    const now = Date.now();
    if (cleanMsg === toastRegistry.lastMessage && now - toastRegistry.lastTime < DEDUPLICATION_WINDOW_MS) {
      if (message && typeof message === 'object') message._toastShown = true;
      return null;
    }
    if (now - toastRegistry.lastTime < MIN_TOAST_INTERVAL_MS) return null;
    toastRegistry.lastMessage = cleanMsg;
    toastRegistry.lastTime = now;
    if (message && typeof message === 'object') message._toastShown = true;
    if (!originalToastError) return cleanMsg;
    return originalToastError(cleanMsg, {
      id: `app-toast-${cleanMsg.slice(0, 30)}`,
      duration: TOAST_DURATION_MS,
      ...options,
    });
  };
}

export const getApiErrorText = (err, fallback) => {
  const isArabic = (localStorage.getItem('appLanguage') || 'ar') === 'ar';
  let status = null;
  if (err && typeof err === 'object' && err !== null) {
    status = err.response?.status ?? err.status ?? err.statusCode;
  }
  const sanitized = sanitizeErrorMessage(err, status, isArabic);
  if (sanitized && !containsTechnicalLeak(sanitized)) {
    const cleanSanitized = stripEndpointAndUrls(sanitized);
    if (cleanSanitized && !containsTechnicalLeak(cleanSanitized)) return cleanSanitized;
  }
  const rawMsg = extractErrorMessage(err, isArabic);
  const clean = stripEndpointAndUrls(rawMsg);
  if (clean && !containsTechnicalLeak(clean)) {
    return clean;
  }
  if (fallback) {
    const cleanFallback = stripEndpointAndUrls(typeof fallback === 'string' ? fallback : '');
    if (cleanFallback && !containsTechnicalLeak(cleanFallback)) {
      return cleanFallback;
    }
  }
  return isArabic
    ? 'حدث خطأ أثناء تحميل البيانات، يرجى المحاولة لاحقاً'
    : 'An error occurred while loading data. Please try again later.';
};
