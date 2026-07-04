import { useState, memo } from 'react';
import { Trash2, Copy, Check, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-CA');
};

const isCouponActive = (coupon) =>
    coupon.status === 'active' || new Date(coupon.expirationDate) >= new Date();

const getStudentName = (student, isRtl) => {
    if (!student) return '-';
    const nameVal = student.name;
    if (typeof nameVal === 'object' && nameVal !== null) {
        return isRtl ? nameVal.ar || nameVal.en : nameVal.en || nameVal.ar;
    }
    return nameVal || '-';
};

const getStudentAvatar = (student) => {
    if (!student) return null;
    return student.image || student.profileImage || student.avatar;
};

function CouponListTable({ coupons, onDelete, onView }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = (e, code, id) => {
        e.stopPropagation();
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-slate-500 dark:text-slate-400">
                <thead className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-semibold text-center">
                            {t('adminDashboard.coupons.code', 'رمز الكوبون')}
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-center">
                            {t('adminDashboard.coupons.discountValue', 'قيمة الخصم')}
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-center">
                            {t('adminDashboard.coupons.studentLabel', 'الطالب')}
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-center">
                            {t('adminDashboard.coupons.savedAmountLabel', 'المبلغ الموفر')}
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-center">
                            {t('adminDashboard.coupons.expiryDate', 'تاريخ الانتهاء')}
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-center">
                            {t('adminDashboard.coupons.status', 'الحالة')}
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold text-center">
                            {t('adminDashboard.coupons.actions', 'إجراءات')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {coupons.map((coupon) => {
                        const isActive = isCouponActive(coupon);
                        const studentName = getStudentName(coupon.student, isRtl);
                        const studentAvatar = getStudentAvatar(coupon.student);
                        const initials = studentName.trim().charAt(0) || 'ط';

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
                                        <Tag size={16} />
                                        {coupon.code}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-amber-500">
                                    {coupon.discountPercentage}%
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2.5">
                                        {studentAvatar ? (
                                            <img
                                                src={studentAvatar}
                                                alt={studentName}
                                                className="w-8 h-8 rounded-full object-cover border border-slate-200"
                                            />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-[#0f7a6c]/10 text-[#0f7a6c] dark:text-brand-400 flex items-center justify-center font-bold text-xs">
                                                {initials}
                                            </div>
                                        )}
                                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                                            {studentName}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-350">
                                    {coupon.savedAmount && Number(coupon.savedAmount) > 0 ? (
                                        <span className="text-emerald-600 dark:text-emerald-400">
                                            {coupon.savedAmount} {isRtl ? 'ريال' : 'SAR'}
                                        </span>
                                    ) : (
                                        <span className="text-slate-400 dark:text-slate-600">-</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {formatDate(coupon.expirationDate)}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                                            isActive
                                                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                                                : 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                                        }`}
                                    >
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full ${
                                                isActive ? 'bg-emerald-500' : 'bg-red-500'
                                            }`}
                                        />
                                        {isActive
                                            ? t('adminDashboard.coupons.active')
                                            : t('adminDashboard.coupons.expired')}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={(e) => handleCopy(e, coupon.code, coupon.id)}
                                            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                                            title={t('adminDashboard.coupons.copy')}
                                        >
                                            {copiedId === coupon.id ? (
                                                <Check size={16} className="text-emerald-500" />
                                            ) : (
                                                <Copy size={16} />
                                            )}
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDelete(coupon.id, coupon.code);
                                            }}
                                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                                            title={t('adminDashboard.coupons.delete')}
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

export default memo(CouponListTable);
