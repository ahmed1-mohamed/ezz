import Swal from 'sweetalert2';

export const EARLY_JOIN_WINDOW_MINUTES = 5;
export const LATE_JOIN_WINDOW_MINUTES = 30;

export const SESSION_JOIN_RESTRICTION_MSG_AR =
  'لا يمكنك الانضمام الآن، يمكنك الدخول قبل موعد الحصة بـ 5 دقائق وحتى 30 دقيقة بعد انتهائها';
export const SESSION_JOIN_RESTRICTION_MSG_EN =
  'You cannot join now. You can enter 5 minutes before the session starts and up to 30 minutes after it ends.';

export function parseSessionDateTime(dateVal, timeVal) {
  if (!dateVal && !timeVal) return null;
  const timeStr = String(timeVal || '').trim();
  if (/^\d{4}-\d{2}-\d{2}T/.test(timeStr)) {
    const parsedTime = new Date(timeStr);
    if (!isNaN(parsedTime.getTime())) return parsedTime;
  }
  const dateStr = String(dateVal || '').trim();
  if (/^\d{4}-\d{2}-\d{2}T/.test(dateStr) && !timeVal) {
    const parsedDate = new Date(dateStr);
    if (!isNaN(parsedDate.getTime())) return parsedDate;
  }
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();
  if (dateStr) {
    const cleanDate = dateStr.split('T')[0];
    if (cleanDate.includes('-')) {
      const parts = cleanDate.split('-').map(Number);
      if (parts.length === 3) {
        year = parts[0];
        month = parts[1] - 1;
        day = parts[2];
      }
    } else if (cleanDate.includes('/')) {
      const parts = cleanDate.split('/').map(Number);
      if (parts.length === 3) {
        if (parts[2] > 1000) {
          day = parts[0];
          month = parts[1] - 1;
          year = parts[2];
        } else {
          year = parts[0];
          month = parts[1] - 1;
          day = parts[2];
        }
      }
    }
  }
  let hours = 0;
  let minutes = 0;
  if (timeStr) {
    const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})/);
    if (timeMatch) {
      hours = Number(timeMatch[1]);
      minutes = Number(timeMatch[2]);
    }
  }
  const result = new Date(year, month, day, hours, minutes, 0, 0);
  return isNaN(result.getTime()) ? null : result;
}

export function checkCanJoinSession(session) {
  if (!session) {
    return {
      canJoin: false,
      reason: 'no_session',
      message: 'لا توجد حصة محددة',
    };
  }
  const status = String(session.status || session.rawStatus || '').toLowerCase();
  if (status === 'cancelled' || status === 'canceled' || status === 'ملغاة' || status === 'ملغية') {
    return {
      canJoin: false,
      reason: 'cancelled',
      message: 'الحصة ملغاة ولا يمكن الانضمام إليها',
    };
  }
  if (status === 'completed' || status === 'مكتملة') {
    return {
      canJoin: false,
      reason: 'completed',
      message: 'الحصة مكتملة بالفعل',
    };
  }
  return {
    canJoin: true,
    isLive: status === 'live' || status === 'in_progress' || Boolean(session.canJoinNow),
  };
}

export function showSessionJoinAlert(customMessage, isRtl = true) {
  const messageText = customMessage || (isRtl ? SESSION_JOIN_RESTRICTION_MSG_AR : SESSION_JOIN_RESTRICTION_MSG_EN);
  Swal.fire({
    icon: 'warning',
    title: isRtl ? 'موعد بدء الحصة' : 'Session Schedule Notice',
    text: messageText,
    confirmButtonText: isRtl ? 'حسناً' : 'OK',
    confirmButtonColor: '#00594C',
    willOpen: (popup) => {
      const container = popup.closest('.swal2-container');
      if (container) {
        container.style.setProperty('z-index', '99999999', 'important');
      }
    },
    customClass: {
      container: '!z-[99999999]',
      popup: 'dark:bg-slate-900 dark:border dark:border-slate-800 rounded-3xl shadow-2xl',
      title: 'dark:text-white text-lg font-bold',
      htmlContainer: 'dark:text-slate-300 text-sm leading-relaxed',
      confirmButton: 'rounded-xl px-6 py-2.5 font-bold',
    },
  });
}

