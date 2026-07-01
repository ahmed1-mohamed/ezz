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
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800 rounded-3xl shadow-2xl',
      title: 'dark:text-white',
      htmlContainer: 'dark:text-slate-400',
    }
  });

  return result.isConfirmed;
}

export const showSuccessToast = (title = '', isRtl = true) => {
  Swal.fire({
    toast: true,
    position: 'top-right',
    icon: 'success',
    title: title,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800',
      title: 'dark:text-white text-sm',
    }
  });
}

export const showErrorToast = (title = '', isRtl = true) => {
  Swal.fire({
    toast: true,
    position: 'top-right',
    icon: 'error',
    title: title,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
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
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800 rounded-3xl shadow-2xl',
      htmlContainer: 'dark:text-white',
    }
  });
}