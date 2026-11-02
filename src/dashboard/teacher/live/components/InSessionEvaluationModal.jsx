import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { X, Star, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { teacherEvaluationsApi } from '@/shared/services/api/teacherEvaluationsApi';

const RATING_STARS = [1, 2, 3, 4, 5];

function resolveStudentName(student, isRtl) {
  if (!student) return '-';
  if (typeof student === 'string') return student;
  if (typeof student.name === 'object' && student.name !== null) {
    return isRtl ? (student.name.ar || student.name.en) : (student.name.en || student.name.ar);
  }
  return student.name || student.studentName || '-';
}

export default function InSessionEvaluationModal({ isOpen, onClose, session }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [rating, setRating] = useState(5);
  const [notes, setNotes] = useState('');
  const [validationError, setValidationError] = useState('');

  const studentsList = useMemo(() => {
    if (!session) return [];
    const raw = Array.isArray(session.attendance)
      ? session.attendance
      : Array.isArray(session.students)
      ? session.students
      : Array.isArray(session.group?.students)
      ? session.group.students
      : [];
    return raw.map((item, index) => {
      const studentObj = item.student || item.user || item;
      const id = studentObj._id || studentObj.student_id || studentObj.id || `student-${index}`;
      const name = resolveStudentName(studentObj, isRtl);
      return { id, name };
    });
  }, [session, isRtl]);

  const handleClose = () => {
    setSelectedStudentId('');
    setRating(5);
    setNotes('');
    setValidationError('');
    onClose();
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const sessionId = session?.id || session?._id;
      return teacherEvaluationsApi.createStudentEvaluation(sessionId, {
        student: selectedStudentId,
        rating: Number(rating),
        notes: notes.trim(),
      });
    },
    onSuccess: (res) => {
      if (res.success) {
        toast.success(res.message || t('teacherLive.evaluationSuccess', 'تم تسجيل تقييم الطالب بنجاح'));
        handleClose();
      } else {
        toast.error(res.message || t('teacherLive.evaluationError', 'تعذر تسجيل التقييم'));
      }
    },
    onError: (err) => {
      const serverMsg = err.response?.data?.message || err.message;
      toast.error(serverMsg || t('teacherLive.evaluationError', 'تعذر تسجيل التقييم'));
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedStudentId || !rating) {
      setValidationError(t('teacherLive.selectStudentAndRating', 'يرجى تحديد الطالب والتقييم بالنجوم'));
      return;
    }
    setValidationError('');
    mutation.mutate();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0f7a6c]/10 text-[#0f7a6c] flex items-center justify-center">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">
                {t('teacherLive.inSessionEvalTitle', 'تقييم طالب أثناء الحصة')}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('teacherLive.inSessionEvalSubtitle', 'تسجيل التقييم فوري ومباشر دون التأثير على البث')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {validationError && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block">
              {t('teacherLive.chooseStudentLabel', 'اختر الطالب')} *
            </label>
            <select
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
              required
            >
              <option value="">{t('teacherLive.selectStudentPlaceholder', '-- اختر طالباً --')}</option>
              {studentsList.map((stu) => (
                <option key={stu.id} value={stu.id}>
                  {stu.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block">
              {t('teacherLive.ratingLabel', 'التقييم بالنجوم (1 إلى 5)')} *
            </label>
            <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl justify-center">
              {RATING_STARS.map((starVal) => {
                const isFilled = starVal <= rating;
                return (
                  <button
                    type="button"
                    key={starVal}
                    onClick={() => setRating(starVal)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        isFilled
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-300 dark:text-slate-600'
                      }`}
                    />
                  </button>
                );
              })}
              <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 ms-2">
                {rating} / 5
              </span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block">
              {t('teacherLive.evaluationNotesLabel', 'ملاحظات التقييم والتلاوة')}
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('teacherLive.notesPlaceholder', 'اكتب ملاحظاتك للطالب عن أدائه والتجويد...')}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={handleClose}
              disabled={mutation.isPending}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors"
            >
              {t('common.cancel', 'إلغاء')}
            </button>
            <button
              type="submit"
              disabled={mutation.isPending || !selectedStudentId}
              className="px-5 py-2 rounded-xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              {mutation.isPending && (
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              <span>{t('teacherLive.saveEvaluationButton', 'حفظ التقييم')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
