import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Trash2, Check, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CouponDetailsModal({ isOpen, onClose, coupon, onDelete }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar') || true;
    const tWithFallback = (key, fallback) => {
        const trans = t(`adminDashboard.coupons.${key}`);
        return trans === `adminDashboard.coupons.${key}` ? fallback : trans;
    };

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!coupon?.code) return;
        navigator.clipboard.writeText(coupon.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!coupon) return null;

    const isActive = coupon.status === 'active' || new Date(coupon.expirationDate) >= new Date();
    // Use mocked progress for now since it's not in schema
    const currentUses = 15;
    const maxUses = 50;
    const progressPercent = Math.min(100, (currentUses / maxUses) * 100);

    const students = coupon.student ? (Array.isArray(coupon.student) ? coupon.student : [coupon.student]) : [];

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('en-CA');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir={isRtl ? 'rtl' : 'ltr'}>
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
                                >
                                    <Trash2 size={18} />
                                </button>
                                <button
                                    onClick={handleCopy}
                                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 transition-colors flex items-center justify-center"
                                >
                                    {copied ? <Check size={18} className="text-[#0f7a6c]" /> : <Copy size={18} />}
                                </button>
                            </div>

                            <div className="flex flex-col items-end gap-3">
                                <div className="flex items-center gap-2 text-xl font-black text-[#0f7a6c] dark:text-[#14a693] tracking-widest uppercase">
                                    {coupon.code}
                                    <Tag size={20} className="ms-1" />
                                </div>
                                <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold
                                    ${isActive
                                        ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                                        : 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                                    }`}
                                >
                                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                                    {isActive ? tWithFallback('active', 'نشط') : tWithFallback('expired', 'منتهي')}
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-8 py-4 space-y-8">

                            {/* Discount Card */}
                            <div className="bg-[#fcfaf5] dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-2xl p-8 flex flex-col items-center justify-center">
                                <span className="text-slate-500 dark:text-slate-400 font-bold mb-2">{tWithFallback('discountLabel', 'خصم')}</span>
                                <span className="text-5xl font-black text-amber-500">{coupon.discountPercentage}%</span>
                            </div>

                            {/* Usage Progress */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-300">
                                    <span>{currentUses}/{maxUses}</span>
                                    <span>{tWithFallback('usageLabel', 'الاستخدام')}</span>
                                </div>
                                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden" dir="ltr">
                                    <div
                                        className="h-full bg-[#0f7a6c] rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${progressPercent}%` }}
                                    ></div>
                                </div>
                                <div className="text-center text-sm font-medium text-slate-400 mt-2">
                                    {tWithFallback('expiresAt', 'ينتهي')} {formatDate(coupon.expirationDate)}
                                </div>
                            </div>

                            {/* Assigned Students */}
                            {students.length > 0 && (
                                <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                                    <table className="w-full text-sm text-center">
                                        <thead className="bg-[#0f7a6c] text-white">
                                            <tr>
                                                <th className="px-4 py-3 font-semibold w-12"></th>
                                                <th className="px-4 py-3 font-semibold">{tWithFallback('emailLabel', 'البريد')}</th>
                                                <th className="px-4 py-3 font-semibold text-start">{tWithFallback('studentNameLabel', 'اسم الطالب')}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                            {students.map((student, idx) => (
                                                <tr key={student.student_id || student.id || idx} className="bg-slate-50 dark:bg-slate-800/30">
                                                    <td className="px-4 py-3">
                                                        <Trash2 size={16} className="text-slate-300" /> {/* Disabled in view mode */}
                                                    </td>
                                                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300 font-medium" dir="ltr">{student.email}</td>
                                                    <td className="px-4 py-3 text-slate-800 dark:text-slate-200 font-bold text-start">{student.name}</td>
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
                                className="px-10 py-3 rounded-xl bg-slate-100 text-slate-500 font-bold hover:bg-slate-200 transition-colors"
                            >
                                {tWithFallback('closeBtn', 'اغلاق')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
