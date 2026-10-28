import Swal from 'sweetalert2'

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
    customClass: {
      container: '!z-[999999]',
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800 rounded-3xl shadow-2xl',
      title: 'dark:text-white',
      htmlContainer: 'dark:text-slate-400',
    }
  });

  return result.isConfirmed;
}

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
}

export const showSuccessToast = (title = '', isRtl = true) => {
  Swal.fire({
    toast: true,
    position: isRtl ? 'top-start' : 'top-end',
    icon: 'success',
    title: title,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.dir = isRtl ? 'rtl' : 'ltr';
    },
    customClass: {
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800',
      title: 'dark:text-white text-sm',
    }
  });
}

let lastSwalErrorMessage = '';
let lastSwalErrorTime = 0;

export const showErrorToast = (title = '', isRtl = true, status = null) => {
  // If status is provided and not in allowed list (400, 401, 403, 404), do not show
  if (status !== null && status !== undefined && ![400, 401, 403, 404].includes(Number(status))) {
    return;
  }

  // Detect technical leak or status code leak in string
  const rawText = typeof title === 'object' && title !== null
    ? (title.message || title.error || title.response?.data?.message || '')
    : String(title || '');

  const isTechnical = /status\s*code|server\s*error|internal\s*server|bad\s*gateway|should\s+not\s+exist|isString|isEmail|target\.constructor|\b(sql|database|query)\b/i.test(rawText);

  let cleanTitle = rawText.trim();
  if (!cleanTitle || isTechnical) {
    cleanTitle = isRtl
      ? 'يرجى التأكد من صحة البيانات المدخلة'
      : 'Please check the entered data.';
  }

  const now = Date.now();
  if (cleanTitle === lastSwalErrorMessage && now - lastSwalErrorTime < 2500) {
    return;
  }
  if (now - lastSwalErrorTime < 800) {
    return;
  }

  lastSwalErrorMessage = cleanTitle;
  lastSwalErrorTime = now;

  Swal.fire({
    toast: true,
    position: isRtl ? 'top-start' : 'top-end',
    icon: 'error',
    title: cleanTitle,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.dir = isRtl ? 'rtl' : 'ltr';
    },
    customClass: {
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800',
      title: 'dark:text-white text-sm',
    }
  });
}

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
}