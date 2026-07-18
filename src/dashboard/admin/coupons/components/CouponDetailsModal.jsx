import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Trash2, Check, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';

const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-CA');
};

const isCouponActive = (coupon) =>
    coupon.status === 'active' || new Date(coupon.expirationDate) >= new Date();

const resolveStudentName = (name) =>
    typeof name === 'object' ? name?.ar || name?.en || '' : name || '';

function CouponDetailsModal({ isOpen, onClose, coupon, onDelete }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!coupon?.code) return;
        navigator.clipboard.writeText(coupon.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!coupon) return null;

    const isActive = isCouponActive(coupon);
    const students = coupon.student
        ? Array.isArray(coupon.student)
            ? coupon.student
            : [coupon.student]
        : [];

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    dir={isRtl ? 'rtl' : 'ltr'}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/40 dark:bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 12 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        <div className="p-8 pb-4 flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => onDelete(coupon.id, coupon.code)}
                                    className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-500/10 text-red-500 hover:bg-red-100 transition-colors flex items-center justify-center"
                                    title={t('adminDashboard.coupons.delete')}
                                >
                                    <Trash2 size={18} />
                                </button>
                                <button
                                    onClick={handleCopy}
                                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 transition-colors flex items-center justify-center"
                                    title={t('adminDashboard.coupons.copy')}
                                >
                                    {copied ? (
                                        <Check size={18} className="text-[#0f7a6c]" />
                                    ) : (
                                        <Copy size={18} />
                                    )}
                                </button>
                            </div>

                            <div className="flex flex-col items-end gap-3">
                                <div className="flex items-center gap-2 text-xl font-black text-[#0f7a6c] dark:text-[#14a693] tracking-widest uppercase">
                                    {coupon.code}
                                    <Tag size={20} className="ms-1" />
                                </div>
                                <span
                                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold ${
                                        isActive
                                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                                            : 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                                    }`}
                                >
                                    <span
                                        className={`w-2 h-2 rounded-full ${
                                            isActive ? 'bg-emerald-500' : 'bg-red-500'
                                        }`}
                                    />
                                    {isActive
                                        ? t('adminDashboard.coupons.active')
                                        : t('adminDashboard.coupons.expired')}
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-8 py-4 space-y-8">
                            <div className="bg-[#fcfaf5] dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-2xl p-8 flex flex-col items-center justify-center">
                                <span className="text-slate-500 dark:text-slate-400 font-bold mb-2">
                                    {t('adminDashboard.coupons.discountLabel')}
                                </span>
                                <span className="text-5xl font-black text-amber-500">
                                    {coupon.discountPercentage}%
                                </span>
                            </div>

                            <div className="text-center text-sm font-medium text-slate-400">
                                {t('adminDashboard.coupons.expiresAt')}{' '}
                                {formatDate(coupon.expirationDate)}
                            </div>

                            {students.length > 0 && (
                                <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                                    <table className="w-full text-sm text-center">
                                        <thead className="bg-[#0f7a6c] text-white">
                                            <tr>
                                                <th className="px-4 py-3 font-semibold">
                                                    {t('adminDashboard.coupons.emailLabel')}
                                                </th>
                                                <th className="px-4 py-3 font-semibold text-start">
                                                    {t('adminDashboard.coupons.studentNameLabel')}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                            {students.map((student, idx) => (
                                                <tr
                                                    key={student.student_id || student.id || idx}
                                                    className="bg-slate-50 dark:bg-slate-800/30"
                                                >
                                                    <td
                                                        className="px-4 py-3 text-slate-600 dark:text-slate-300 font-medium"
                                                        dir="ltr"
                                                    >
                                                        {student.email}
                                                    </td>
                                                    <td className="px-4 py-3 text-slate-800 dark:text-slate-200 font-bold text-start">
                                                        {resolveStudentName(student.name)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>

                        <div className="px-8 py-5 border-t border-slate-100/60 dark:border-slate-800/60 flex gap-4 shrink-0 bg-white dark:bg-slate-900 justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-10 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                {t('adminDashboard.coupons.closeBtn')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}

export default memo(CouponDetailsModal);
