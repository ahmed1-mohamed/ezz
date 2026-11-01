import Swal from 'sweetalert2';

export const showDeleteConfirm = async (isRtl = true, itemName = '') => {
  const result = await Swal.fire({
    title: isRtl ? 'تأكيد الحذف' : 'Confirm Delete',
    html: isRtl
      ? `هل أنت متأكد من رغبتك في حذف <b>${itemName || 'هذا العنصر'}</b>؟<br/><span style="font-size: 0.875rem; color: #ef4444; margin-top: 8px; display: block;">هذا الإجراء لا يمكن التراجع عنه.</span>`
      : `Are you sure you want to delete <b>${itemName || 'this item'}</b>?<br/><span style="font-size: 0.875rem; color: #ef4444; margin-top: 8px; display: block;">This action cannot be undone.</span>`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ef4444',
    cancelButtonColor: '#94a3b8',
    confirmButtonText: isRtl ? 'نعم، احذف!' : 'Yes, delete it!',
    cancelButtonText: isRtl ? 'إلغاء' : 'Cancel',
    reverseButtons: isRtl,
    willOpen: (popup) => {
      const c = popup.closest('.swal2-container');
      if (c) {
        c.style.setProperty('z-index', '99999999', 'important');
      }
    },
    customClass: {
      container: '!z-[999999]',
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800 rounded-3xl shadow-2xl',
      title: 'dark:text-white',
      htmlContainer: 'dark:text-slate-400',
    }
  });
  return result.isConfirmed;
};

export const showNotesPrompt = async ({ isRtl = true, title = '', confirmText = '', confirmColor = '#0f7a6c' } = {}) => {
  const result = await Swal.fire({
    title,
    input: 'textarea',
    inputPlaceholder: isRtl ? 'اكتب ملاحظاتك هنا...' : 'Write your notes here...',
    inputAttributes: { dir: isRtl ? 'rtl' : 'ltr' },
    showCancelButton: true,
    confirmButtonColor: confirmColor,
    cancelButtonColor: '#94a3b8',
    confirmButtonText: confirmText || (isRtl ? 'تأكيد' : 'Confirm'),
    cancelButtonText: isRtl ? 'إلغاء' : 'Cancel',
    reverseButtons: isRtl,
    inputValidator: (value) => (value && value.trim() ? null : (isRtl ? 'الملاحظات مطلوبة' : 'Notes are required')),
    customClass: {
      container: '!z-[999999]',
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800 rounded-3xl shadow-2xl',
      title: 'dark:text-white',
      input: 'dark:bg-slate-800 dark:text-white',
    }
  });
  return result.isConfirmed ? result.value.trim() : null;
};

let lastSuccessMessage = '';
let lastSuccessTime = 0;

export const showSuccessToast = (title = '', isRtl = true) => {
  const cleanTitle = typeof title === 'object' && title !== null
    ? (title.message || (isRtl ? title.ar : title.en) || '')
    : String(title || '').trim();
  if (!cleanTitle) return;
  const now = Date.now();
  if (cleanTitle === lastSuccessMessage && now - lastSuccessTime < 2000) {
    return;
  }
  lastSuccessMessage = cleanTitle;
  lastSuccessTime = now;
  Swal.fire({
    toast: true,
    position: isRtl ? 'top-start' : 'top-end',
    icon: 'success',
    title: cleanTitle,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toastEl) => {
      toastEl.dir = isRtl ? 'rtl' : 'ltr';
    },
    customClass: {
      container: '!z-[99999999]',
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800 !z-[99999999]',
      title: 'dark:text-white text-sm font-medium',
    }
  });
};

export const ALLOWED_ERROR_STATUS_CODES = new Set([400, 401, 403, 404]);

export function isAllowedErrorCode(status) {
  if (status === undefined || status === null || status === '') return false;
  const num = Number(status);
  return ALLOWED_ERROR_STATUS_CODES.has(num);
}

const TECHNICAL_LEAK_PATTERNS = [
  /server\s*error/i,
  /internal\s*server/i,
  /bad\s*gateway/i,
  /gateway\s*timeout/i,
  /service\s*unavailable/i,
  /target\.constructor/i,
  /cannot\s+read\s+propert/i,
  /\b(sql|select|insert|database|query)\b/i,
  /failed\s+with\s+status\s+code/i,
  /jwt|bearer|token\s+expired/i,
  /econnrefused|enotfound|etimedout/i,
  /network\s+error/i,
  /syntax\s*error/i,
  /reference\s*error/i,
  /type\s*error/i,
];

export function containsTechnicalLeak(text) {
  if (typeof text !== 'string') return true;
  const trimmed = text.trim();
  if (!trimmed) return true;
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) return true;
  if (/^\d{3}\b/.test(trimmed)) return true;
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
        if (!/^Request failed with status code/i.test(msg)) {
          return msg;
        }
      } else if (Array.isArray(rawInput.message)) {
        const joined = rawInput.message
          .map(m => extractErrorMessage(m, isArabic))
          .filter(Boolean)
          .join(' - ');
        if (joined) return joined;
      } else if (typeof rawInput.message === 'object') {
        const localized = isArabic ? (rawInput.message.ar || rawInput.message.en) : (rawInput.message.en || rawInput.message.ar);
        if (localized) return localized;
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
    }
    if (typeof rawInput.message === 'string') {
      return rawInput.message.trim();
    }
  }
  if (Array.isArray(rawInput)) {
    const joined = rawInput
      .map(item => extractErrorMessage(item, isArabic))
      .filter(Boolean)
      .join(' - ');
    if (joined) return joined;
  }
  if (typeof rawInput === 'string') {
    const trimmed = rawInput.trim();
    if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
      try {
        const parsed = JSON.parse(trimmed);
        return extractErrorMessage(parsed, isArabic);
      } catch {
        // keep as is
      }
    }
    return trimmed;
  }
  return String(rawInput || '').trim();
}

export function canShowErrorInToaster(errorOrMessage, options = {}) {
  if (!errorOrMessage && !options.status && !options.statusCode) return false;
  if (errorOrMessage && typeof errorOrMessage === 'object') {
    if (errorOrMessage._isServerError || errorOrMessage._suppressToast) return false;
  }
  let status = options.status ?? options.statusCode;
  if (errorOrMessage && typeof errorOrMessage === 'object') {
    status = status ?? errorOrMessage.response?.status ?? errorOrMessage.status ?? errorOrMessage.statusCode ?? errorOrMessage.code;
  }
  if (status !== undefined && status !== null && status !== '') {
    const num = Number(status);
    if (!Number.isNaN(num)) {
      if (num === 500 || num >= 500) return false;
      if (!ALLOWED_ERROR_STATUS_CODES.has(num)) return false;
    }
  }
  if (typeof window !== 'undefined' && window.__lastApiError) {
    const timeDiff = Date.now() - (window.__lastApiError.time || 0);
    if (timeDiff < 1500) {
      const lastStatus = Number(window.__lastApiError.status);
      if (lastStatus === 500 || lastStatus >= 500 || !ALLOWED_ERROR_STATUS_CODES.has(lastStatus)) {
        return false;
      }
    }
  }
  const text = extractErrorMessage(errorOrMessage, true);
  if (typeof text === 'string' && text) {
    if (/\b500\b|internal\s*server\s*error|server\s*error|خطأ\s*في\s*الخادم|خطأ\s*داخلي|فشل\s*الاتصال\s*بالخادم/i.test(text)) {
      return false;
    }
    if (containsTechnicalLeak(text)) {
      if (!status || !ALLOWED_ERROR_STATUS_CODES.has(Number(status))) {
        return false;
      }
    }
  }
  return true;
}

export function sanitizeErrorMessage(rawInput, status, isArabic = true) {
  if (!canShowErrorInToaster(rawInput, { status })) return '';
  const candidate = extractErrorMessage(rawInput, isArabic);
  let resolvedStatus = status;
  if (rawInput && typeof rawInput === 'object') {
    resolvedStatus = resolvedStatus ?? rawInput.response?.status ?? rawInput.status ?? rawInput.statusCode;
  }
  const numStatus = Number(resolvedStatus);
  if (!candidate || containsTechnicalLeak(candidate)) {
    if (numStatus === 400) {
      return isArabic ? 'يرجى التأكد من صحة البيانات المدخلة' : 'Please verify the entered data.';
    }
    if (numStatus === 401) {
      return isArabic ? 'انتهت الجلسة أو غير مصرح، يرجى تسجيل الدخول مجدداً' : 'Session expired or unauthorized. Please sign in again.';
    }
    if (numStatus === 403) {
      return isArabic ? 'ليس لديك الصلاحية لتنفيذ هذا الإجراء' : 'You do not have permission to perform this action.';
    }
    if (numStatus === 404) {
      return isArabic ? 'العنصر أو الصفحة المطلوبة غير موجودة' : 'The requested resource was not found.';
    }
    return '';
  }
  return candidate;
}

let lastSwalErrorMessage = '';
let lastSwalErrorTime = 0;

export const showErrorToast = (title = '', isRtl = true, status = null) => {
  if (!canShowErrorInToaster(title, { status })) return;
  const cleanTitle = sanitizeErrorMessage(title, status, isRtl);
  if (!cleanTitle) return;
  const now = Date.now();
  if (cleanTitle === lastSwalErrorMessage && now - lastSwalErrorTime < 2000) return;
  if (now - lastSwalErrorTime < 400) return;
  lastSwalErrorMessage = cleanTitle;
  lastSwalErrorTime = now;
  Swal.fire({
    toast: true,
    position: isRtl ? 'top-start' : 'top-end',
    icon: 'error',
    title: cleanTitle,
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toastEl) => {
      toastEl.dir = isRtl ? 'rtl' : 'ltr';
    },
    customClass: {
      container: '!z-[99999999]',
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800 !z-[99999999]',
      title: 'dark:text-white text-sm font-medium',
    }
  });
};

export const showRewardDetails = (reward, isRtl = true) => {
  const name = typeof reward.name === 'object' ? (isRtl ? reward.name.ar : reward.name.en) : reward.name;
  const description = typeof reward.description === 'object' ? (isRtl ? reward.description.ar : reward.description.en) : reward.description;
  const emoji = reward.icon || reward.emoji || '🎁';
  const bgColor = reward.backgroundColor || reward.bgColor || '#f3f4f6';
  Swal.fire({
    html: `
      <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
        <div style="width: 80px; height: 80px; border-radius: 20px; background-color: ${bgColor}; display: flex; align-items: center; justify-content: center; font-size: 40px; margin-bottom: 20px;">
          ${emoji}
        </div>
        <h3 style="font-size: 20px; font-weight: bold; color: inherit; margin: 0 0 10px 0;">${name}</h3>
        <p style="font-size: 14px; color: #64748b; margin: 0;">${description || ''}</p>
      </div>
    `,
    showConfirmButton: true,
    confirmButtonText: isRtl ? 'إغلاق' : 'Close',
    confirmButtonColor: '#0f7a6c',
    customClass: {
      container: '!z-[999999]',
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800 rounded-3xl shadow-2xl',
      htmlContainer: 'dark:text-white',
    }
  });
};
