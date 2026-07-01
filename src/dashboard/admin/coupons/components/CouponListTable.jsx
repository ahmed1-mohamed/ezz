import { useState } from 'react';
import { Edit2, Trash2, Copy, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function CouponListTable({ coupons, onDelete, onView }) {
    const { t } = useTranslation();
    const tWithFallback = (key, fallback) => {
        const trans = t(`adminDashboard.coupons.${key}`);
        return trans === `adminDashboard.coupons.${key}` ? fallback : trans;
    };

    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = (e, code, id) => {
        e.stopPropagation();
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('en-CA'); // format: YYYY-MM-DD
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-slate-500 dark:text-slate-400">
                <thead className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('code', 'الكود')}</th>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('discountValue', 'قيمة الخصم')}</th>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('studentsCount', 'عدد الطلاب')}</th>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('creationDate', 'تاريخ الإنشاء')}</th>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('expiryDate', 'تاريخ الانتهاء')}</th>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('status', 'الحالة')}</th>
                        <th scope="col" className="px-6 py-4 font-semibold">{tWithFallback('actions', 'الإجراءات')}</th>
                    </tr>
                </thead>
                <tbody>
                    {coupons.map((coupon) => {
                        const studentsCount = Array.isArray(coupon.student) ? coupon.student.length : (coupon.student ? 1 : 'الكل');
                        const isActive = coupon.status === 'active' || new Date(coupon.expirationDate) >= new Date();

                        return (
                            <motion.tr
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                key={coupon.id}
                                className="bg-white dark:bg-slate-900 border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                                onClick={() => onView(coupon)}
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2 font-bold text-[#0f7a6c] dark:text-[#14a693]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l8.58-8.58c.94-.94.94-2.48 0-3.42L12 2Z" /><path d="M7 7h.01" /></svg>
                                        {coupon.code}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-amber-500">
                                    {coupon.discountPercentage}%
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-[#14a693] font-semibold text-xs">
                                        {studentsCount}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{formatDate(coupon.createdAt || new Date().toISOString())}</td>
                                <td className="px-6 py-4">{formatDate(coupon.expirationDate)}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
                                        ${isActive
                                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                                            : 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                                        }`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                                        {isActive ? tWithFallback('active', 'نشط') : tWithFallback('expired', 'منتهي')}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={(e) => handleCopy(e, coupon.code, coupon.id)}
                                            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                            title={tWithFallback('copy', 'نسخ')}
                                        >
                                            {copiedId === coupon.id ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                                        </button>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); onDelete(coupon.id, coupon.code); }}
                                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                                            title={tWithFallback('delete', 'حذف')}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
