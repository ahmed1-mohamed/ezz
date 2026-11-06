import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Star, Plus, CheckCircle2, Clock, XCircle, Paperclip, Send, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { parentApi } from '@/shared/services/api/parentApi';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 26 } }
};

export default function ParentComplaints() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [formValues, setFormValues] = useState({
    type: 'suggestion',
    title: '',
    details: '',
    attachments: []
  });
  const getStatusInfo = (status) => {
    const raw = String(status || '').toLowerCase().trim();
    if (raw === 'resolved' || raw === 'accepted' || raw === 'مقبول' || raw === 'تم الحل') {
      return {
        label: isRtl ? 'تم الحل' : 'Resolved',
        badgeClass: 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/30',
        icon: CheckCircle2,
        color: 'emerald'
      };
    }
    if (raw === 'rejected' || raw === 'مرفوض') {
      return {
        label: isRtl ? 'مرفوض' : 'Rejected',
        badgeClass: 'bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/30',
        icon: XCircle,
        color: 'rose'
      };
    }
    return {
      label: isRtl ? 'قيد المراجعة' : 'Under Review',
      badgeClass: 'bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/30',
      icon: Clock,
      color: 'amber'
    };
  };
  const loadComplaints = useCallback(async (tab = 'all') => {
    setIsLoading(true);
    try {
      const res = await parentApi.fetchComplaints(tab);
      if (res?.success && Array.isArray(res.data)) {
        setComplaints(res.data);
      } else {
        setComplaints([]);
      }
    } catch (err) {
      console.error('Failed to load complaints:', err);
      setComplaints([]);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    loadComplaints(activeTab);
  }, [loadComplaints, activeTab]);
  const handleOpenDetails = async (item) => {
    setSelectedComplaint(item);
    setIsLoadingDetails(true);
    try {
      const res = await parentApi.fetchComplaintById(item.id);
      if (res?.success && res.data) {
        setSelectedComplaint(res.data);
      }
    } catch (err) {
      console.error('Failed to fetch complaint details:', err);
    } finally {
      setIsLoadingDetails(false);
    }
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    setFormValues((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };
  const handleRemoveAttachment = (index) => {
    setFormValues((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValues.title.trim()) {
      toast.error(isRtl ? 'يرجى إدخال عنوان الطلب' : 'Please enter title');
      return;
    }
    if (!formValues.details.trim()) {
      toast.error(isRtl ? 'يرجى كتابة التفاصيل' : 'Please provide details');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await parentApi.createComplaint(formValues);
      if (res?.success) {
        toast.success(res.message || (isRtl ? 'تم إرسال الطلب بنجاح' : 'Submitted successfully'));
        setFormValues({ type: 'suggestion', title: '', details: '', attachments: [] });
        setIsFormOpen(false);
        loadComplaints(activeTab);
      } else {
        toast.error(res?.message || (isRtl ? 'تعذر إرسال الطلب' : 'Submission failed'));
      }
    } catch (err) {
      console.error('Submit complaint error:', err);
      toast.error(isRtl ? 'حدث خطأ أثناء الإرسال' : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  const filteredComplaints = complaints.filter((item) => {
    if (typeFilter !== 'all' && item.type !== typeFilter) return false;
    if (activeTab === 'pending' && (item.status === 'resolved' || item.status === 'accepted' || item.status === 'rejected')) return false;
    return true;
  });
  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-transparent min-h-screen"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">{t('parentDashboard.complaints.title', 'الشكاوى والمقترحات')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t('parentDashboard.complaints.subtitle', 'نسعد باستقبال ملاحظاتكم ومقترحاتكم لتحسين تجربتكم وتجربة أبنائكم')}
          </p>
        </div>
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-sm transition-all active:scale-95 ${
            isFormOpen
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200'
              : 'bg-[#0f7a6c] hover:bg-[#0c6156] text-white shadow-[#0f7a6c]/20'
          }`}
        >
          {isFormOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          <span>{isFormOpen ? (isRtl ? 'إغلاق النموذج' : 'Close Form') : (isRtl ? 'تقديم طلب جديد' : 'New Submission')}</span>
        </button>
      </motion.div>
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-md border border-slate-100 dark:border-slate-700 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4">
                <h2 className="font-extrabold text-lg text-slate-800 dark:text-slate-100">
                  {isRtl ? 'تقديم شكوى أو مقترح جديد' : 'Submit Complaint or Suggestion'}
                </h2>
                <span className="text-xs text-slate-400 font-medium">
                  {isRtl ? 'سيتم مراجعة طلبكم والرد خلال 24 ساعة' : 'Reviewed within 24 hours'}
                </span>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                  {isRtl ? 'نوع الطلب' : 'Submission Type'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setFormValues((prev) => ({ ...prev, type: 'suggestion' }))}
                    className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer border-2 transition-all ${
                      formValues.type === 'suggestion'
                        ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/20 shadow-sm'
                        : 'border-slate-100 dark:border-slate-700 hover:border-slate-200'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">{isRtl ? 'اقتراح وتطوير' : 'Suggestion'}</h4>
                      <p className="text-xs text-slate-400">{isRtl ? 'فكرة أو تحسين ترغب في إضافته' : 'Idea or enhancement'}</p>
                    </div>
                  </div>
                  <div
                    onClick={() => setFormValues((prev) => ({ ...prev, type: 'complaint' }))}
                    className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer border-2 transition-all ${
                      formValues.type === 'complaint'
                        ? 'border-[#0f7a6c] bg-emerald-50/50 dark:bg-emerald-950/20 shadow-sm'
                        : 'border-slate-100 dark:border-slate-700 hover:border-slate-200'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">{isRtl ? 'شكوى أو ملاحظة' : 'Complaint'}</h4>
                      <p className="text-xs text-slate-400">{isRtl ? 'مشكلة واجهتك أثناء الدراسة أو الخدمة' : 'Issue or inconvenience'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                  {isRtl ? 'عنوان الطلب' : 'Title'} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formValues.title}
                  onChange={(e) => setFormValues((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder={
                    formValues.type === 'suggestion'
                      ? (isRtl ? 'مثال: اقتراح إضافة تسجيلات الحصص في لوحة تحكم الطالب' : 'e.g. Suggestion to add session recordings')
                      : (isRtl ? 'مثال: ملاحظة بخصوص موعد الحصة الأسبوعية' : 'e.g. Note regarding weekly schedule')
                  }
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-3.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-[#0f7a6c]/40 transition-all placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                  {isRtl ? 'التفاصيل والشرح' : 'Details'} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formValues.details}
                  onChange={(e) => setFormValues((prev) => ({ ...prev, details: e.target.value }))}
                  placeholder={isRtl ? 'يرجى توضيح الموضوع بالتفصيل حتى نتمكن من مساعدتك بأسرع شكل...' : 'Please explain in detail...'}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-3.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-[#0f7a6c]/40 transition-all placeholder:text-slate-400 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                  {isRtl ? 'المرفقات (اختياري)' : 'Attachments (optional)'}
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 cursor-pointer text-xs font-bold text-slate-600 dark:text-slate-300 transition-colors">
                    <Paperclip className="w-4 h-4 text-slate-400" />
                    <span>{isRtl ? 'إرفاق ملف أو صورة' : 'Attach file'}</span>
                    <input type="file" multiple onChange={handleFileChange} className="hidden" />
                  </label>
                  {formValues.attachments.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200">
                      <FileText className="w-3.5 h-3.5 text-[#0f7a6c]" />
                      <span className="max-w-[140px] truncate">{file.name}</span>
                      <button type="button" onClick={() => handleRemoveAttachment(idx)} className="text-slate-400 hover:text-rose-500">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  {isRtl ? 'إلغاء' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-[#0f7a6c] hover:bg-[#0c6156] disabled:opacity-50 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 rtl:-scale-x-100" />
                  )}
                  <span>{isSubmitting ? (isRtl ? 'جاري الإرسال...' : 'Submitting...') : (isRtl ? 'إرسال الطلب' : 'Submit')}</span>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === 'all'
                ? 'bg-[#0f7a6c] text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isRtl ? 'جميع الطلبات' : 'All Requests'}
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === 'pending'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isRtl ? 'قيد المراجعة' : 'Pending'}
          </button>
          <button
            onClick={() => setActiveTab('resolved')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === 'resolved'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isRtl ? 'تم الحل / المقبولة' : 'Resolved'}
          </button>
          <button
            onClick={() => setActiveTab('rejected')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === 'rejected'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isRtl ? 'المرفوضة' : 'Rejected'}
          </button>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-400 font-medium">{isRtl ? 'النوع:' : 'Type:'}</span>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 outline-none cursor-pointer"
          >
            <option value="all">{isRtl ? 'الكل' : 'All'}</option>
            <option value="suggestion">{isRtl ? 'اقتراح' : 'Suggestion'}</option>
            <option value="complaint">{isRtl ? 'شكوى' : 'Complaint'}</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center py-24">
          <div className="w-9 h-9 rounded-full border-3 border-[#0f7a6c] border-t-transparent animate-spin" />
        </div>
      ) : filteredComplaints.length === 0 ? (
        <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-16 text-center border border-slate-100 dark:border-slate-700 shadow-sm space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-400 flex items-center justify-center mx-auto">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">{isRtl ? 'لا توجد طلبات مسجلة' : 'No requests found'}</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            {isRtl ? 'يمكنك تقديم شكوى أو اقتراح في أي وقت وسيقوم فريق الإدارة بمتابعتها سريعاً.' : 'You can submit suggestions or complaints anytime.'}
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredComplaints.map((item) => {
            const statusInfo = getStatusInfo(item.status);
            const isSuggestion = item.type === 'suggestion';
            return (
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    isSuggestion
                      ? 'bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400'
                      : 'bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/40 dark:text-emerald-400'
                  }`}>
                    {isSuggestion ? <Star className="w-6 h-6 fill-current" /> : <MessageSquare className="w-6 h-6" />}
                  </div>
                  <div className="space-y-1.5 flex-1 text-start">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${
                        isSuggestion
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300'
                          : 'bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/30 dark:text-emerald-300'
                      }`}>
                        {isSuggestion ? (isRtl ? 'اقتراح' : 'Suggestion') : (isRtl ? 'شكوى' : 'Complaint')}
                      </span>
                      <span className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${statusInfo.badgeClass}`}>
                        <statusInfo.icon className="w-3.5 h-3.5" />
                        <span>{statusInfo.label}</span>
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {formatDate(item.createdAt)}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {item.details}
                    </p>
                    {item.response && (
                      <div className="mt-3 p-3 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                        <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
                          {isRtl ? 'رد الإدارة:' : 'Admin Reply:'}
                        </span>
                        <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                          {item.response}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="shrink-0 flex items-center justify-end w-full md:w-auto">
                  <button
                    onClick={() => handleOpenDetails(item)}
                    className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/60 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs transition-colors shadow-sm"
                  >
                    {isRtl ? 'عرض التفاصيل' : 'View Details'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      <AnimatePresence>
        {selectedComplaint && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-6 text-start"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    selectedComplaint.type === 'suggestion'
                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300'
                      : 'bg-[#0f7a6c]/10 text-[#0f7a6c] dark:bg-emerald-950/40 dark:text-emerald-300'
                  }`}>
                    {selectedComplaint.type === 'suggestion' ? (isRtl ? 'اقتراح' : 'Suggestion') : (isRtl ? 'شكوى' : 'Complaint')}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusInfo(selectedComplaint.status).badgeClass}`}>
                    {getStatusInfo(selectedComplaint.status).label}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedComplaint(null)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl text-slate-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div>
                <span className="text-xs text-slate-400 font-semibold block mb-1">
                  {formatDate(selectedComplaint.createdAt)}
                </span>
                <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">
                  {selectedComplaint.title}
                </h2>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">
                  {isRtl ? 'تفاصيل الطلب:' : 'Details:'}
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                  {selectedComplaint.details}
                </p>
              </div>
              {Array.isArray(selectedComplaint.attachments) && selectedComplaint.attachments.length > 0 && (
                <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">
                    {isRtl ? 'المرفقات:' : 'Attachments:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedComplaint.attachments.map((fileUrl, i) => (
                      <a
                        key={i}
                        href={typeof fileUrl === 'string' ? fileUrl : '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-xs font-bold text-[#0f7a6c] dark:text-emerald-400 hover:underline"
                      >
                        <FileText className="w-4 h-4" />
                        <span>{isRtl ? `مرفق ${i + 1}` : `Attachment ${i + 1}`}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {selectedComplaint.response && (
                <div className="bg-emerald-50 dark:bg-emerald-950/40 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isRtl ? 'رد ومتابعة الإدارة:' : 'Admin Response:'}</span>
                  </div>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed whitespace-pre-line">
                    {selectedComplaint.response}
                  </p>
                </div>
              )}
              <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-700">
                <button
                  onClick={() => setSelectedComplaint(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  {isRtl ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
