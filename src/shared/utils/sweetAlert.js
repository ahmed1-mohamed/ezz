import Swal from 'sweetalert2';
import {
  ALLOWED_ERROR_STATUS_CODES,
  isAllowedErrorCode,
  isServerErrorCode,
  isServerError,
  containsTechnicalLeak,
  extractErrorMessage,
  canShowErrorInToaster,
  sanitizeErrorMessage,
  showSafeErrorToast
} from './errorHandler.js';

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
  if (cleanTitle === lastSuccessMessage && now - lastSuccessTime < 2000) return;
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

export const showErrorToast = (title = '', isRtl = true, status = null) => {
  return showSafeErrorToast(title, { isArabic: isRtl, status });
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

export {
  ALLOWED_ERROR_STATUS_CODES,
  isAllowedErrorCode,
  isServerErrorCode,
  isServerError,
  containsTechnicalLeak,
  extractErrorMessage,
  canShowErrorInToaster,
  sanitizeErrorMessage,
  showSafeErrorToast
};
