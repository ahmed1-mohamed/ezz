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