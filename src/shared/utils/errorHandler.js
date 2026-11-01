import toast from 'react-hot-toast';
import {
  ALLOWED_ERROR_STATUS_CODES,
  isAllowedErrorCode,
  canShowErrorInToaster,
  containsTechnicalLeak,
  extractErrorMessage,
  sanitizeErrorMessage
} from './sweetAlert.js';

let lastSafeToastMessage = '';
let lastSafeToastTime = 0;

export function showSafeErrorToast(errorOrMessage, options = {}) {
  const isArabic = options.isArabic !== undefined
    ? options.isArabic
    : (localStorage.getItem('appLanguage') || 'ar') === 'ar';
  let status = options.status;
  if (errorOrMessage && typeof errorOrMessage === 'object') {
    status = status ?? errorOrMessage.response?.status ?? errorOrMessage.status ?? errorOrMessage.statusCode ?? errorOrMessage.code;
  }
  if (!canShowErrorInToaster(errorOrMessage, { ...options, status })) {
    return null;
  }
  const safeMsg = sanitizeErrorMessage(errorOrMessage, status, isArabic);
  if (!safeMsg) return null;
  const now = Date.now();
  if (safeMsg === lastSafeToastMessage && now - lastSafeToastTime < 2000) {
    return null;
  }
  if (now - lastSafeToastTime < 400) {
    return null;
  }
  lastSafeToastMessage = safeMsg;
  lastSafeToastTime = now;
  if (errorOrMessage && typeof errorOrMessage === 'object') {
    errorOrMessage._toastShown = true;
  }
  return toast.error(safeMsg, {
    id: `app-toast-${safeMsg.slice(0, 25)}`,
    duration: 3500,
  });
}

// Global filter on toast.error from react-hot-toast across the entire project
if (typeof toast !== 'undefined' && typeof toast.error === 'function' && !toast._safeFilterInstalled) {
  const originalToastError = toast.error.bind(toast);
  toast._safeFilterInstalled = true;
  toast.error = function (message, options = {}) {
    if (!canShowErrorInToaster(message, options)) {
      return null;
    }
    const cleanMsg = typeof message === 'string'
      ? message
      : sanitizeErrorMessage(message, options?.status, (localStorage.getItem('appLanguage') || 'ar') === 'ar');
    if (!cleanMsg) {
      return null;
    }
    return originalToastError(cleanMsg, options);
  };
}

export {
  ALLOWED_ERROR_STATUS_CODES,
  isAllowedErrorCode,
  canShowErrorInToaster,
  containsTechnicalLeak,
  extractErrorMessage,
  sanitizeErrorMessage
};
