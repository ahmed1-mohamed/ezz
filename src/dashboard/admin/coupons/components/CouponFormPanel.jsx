import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Spinner from '@/shared/components/Spinner';
import StudentSelectionModal from './StudentSelectionModal';

const EMPTY_COUPON = {
    code: '',
    discountPercentage: '',
    expirationDate: '',
    students: []
};

export default function CouponFormPanel({ isOpen, onClose, onSave }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar') || true;
    const tWithFallback = (key, fallback) => {
        const trans = t(`adminDashboard.coupons.${key}`);
        return trans === `adminDashboard.coupons.${key}` ? fallback : trans;
    };

    const [form, setForm] = useState(EMPTY_COUPON);
    const [saving, setSaving] = useState(false);
    const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

    const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);

    useEffect(() => {
        if (isOpen && isOpen !== prevIsOpen) {
            setPrevIsOpen(isOpen);
            setForm(EMPTY_COUPON);
        } else if (!isOpen && isOpen !== prevIsOpen) {
            setPrevIsOpen(isOpen);
        }
    }, [isOpen, prevIsOpen]);

    const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

    const handleRemoveStudent = (studentId) => {
        setField('students', form.students.filter(s => s.student_id !== studentId && s.id !== studentId));
    };

    const handleAddStudents = (selectedStudents) => {
        const currentIds = form.students.map(s => s.student_id || s.id);
        const newStudents = selectedStudents.filter(s => !currentIds.includes(s.student_id || s._id || s.id));

        const mappedNewStudents = newStudents.map(s => ({
            student_id: s.student_id || s._id || s.id,
            name: s.name,
            email: s.email
        }));

        setField('students', [...form.students, ...mappedNewStudents]);
        setIsStudentModalOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        const payload = {
            code: form.code,
            discountPercentage: Number(form.discountPercentage),
            expirationDate: form.expirationDate,
            ...(form.students.length > 0 && {
                student: form.students[0].student_id || form.students[0].id
            })
        };
        await onSave(payload);
        setSaving(false);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center p-4" dir={isRtl ? 'rtl' : 'ltr'}>
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
                            className="relative z-50 w-full max-w-2xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col border border-slate-100 dark:border-slate-800/60 overflow-hidden"
                        >
                            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100/60 dark:border-slate-800/60 shrink-0 bg-white dark:bg-slate-900">
                                <h2 className="font-bold text-slate-800 dark:text-white text-lg">
                                    {tWithFallback('createCouponTitle', 'إنشاء كود خصم جديد')}
                                </h2>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
                                <div>
                                    <label htmlFor="code" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{tWithFallback('codeLabel', 'الكود')}</label>
                                    <input
                                        id="code"
                                        required
                                        value={form.code}
                                        onChange={(e) => setField('code', e.target.value)}
                                        placeholder="مثال: RAMADAN50"
                                        className="w-full bg-[#f8fafc] dark:bg-slate-800/50 rounded-xl px-4 py-3 text-sm outline-none placeholder-slate-400 text-slate-800 dark:text-slate-100 border border-transparent focus:border-[#0f7a6c] focus:ring-1 focus:ring-[#0f7a6c] transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="discountPercentage" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{tWithFallback('discountPercentageLabel', 'قيمة الخصم المئوية')}</label>
                                    <div className="relative">
                                        <input
                                            id="discountPercentage"
                                            type="number"
                                            min="1"
                                            max="100"
                                            required
                                            value={form.discountPercentage}
                                            onChange={(e) => setField('discountPercentage', e.target.value)}
                                            placeholder="20%"
                                            className="w-full bg-[#f8fafc] dark:bg-slate-800/50 rounded-xl px-4 py-3 text-sm outline-none placeholder-slate-400 text-slate-800 dark:text-slate-100 border border-transparent focus:border-[#0f7a6c] focus:ring-1 focus:ring-[#0f7a6c] transition-all"
                                        />
                                        <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none text-slate-400 font-medium">%</div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="expirationDate" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{tWithFallback('expirationDateLabel', 'تاريخ الإنتهاء')}</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                            <Calendar size={18} className="text-slate-400" />
                                        </div>
                                        <input
                                            id="expirationDate"
                                            type="date"
                                            required
                                            value={form.expirationDate}
                                            onChange={(e) => setField('expirationDate', e.target.value)}
                                            className="w-full bg-[#f8fafc] dark:bg-slate-800/50 rounded-xl ps-11 pe-4 py-3 text-sm outline-none text-slate-800 dark:text-slate-100 border border-transparent focus:border-[#0f7a6c] focus:ring-1 focus:ring-[#0f7a6c] transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsStudentModalOpen(true)}
                                        className="w-full py-2.5 bg-[#0f7a6c] text-white rounded-xl text-sm font-bold hover:bg-[#0d6b5e] transition-colors"
                                    >
                                        {tWithFallback('addStudentsBtn', 'إضافة طلاب للكوبون')}
                                    </button>

                                    {form.students.length > 0 && (
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
                                                    {form.students.map((student, idx) => (
                                                        <tr key={student.student_id || student.id || idx} className="bg-slate-50 dark:bg-slate-800/30">
                                                            <td className="px-4 py-3">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleRemoveStudent(student.student_id || student.id)}
                                                                    className="text-slate-400 hover:text-red-500 transition-colors"
                                                                >
                                                                    <Trash2 size={16} />
                                                                </button>
                                                            </td>
                                                            <td className="px-4 py-3 text-slate-600 dark:text-slate-300 font-medium" dir="ltr">{student.email}</td>
                                                            <td className="px-4 py-3 text-slate-800 dark:text-slate-200 font-bold text-start">
                                                                {typeof student.name === 'object' ? (student.name?.ar || student.name?.en) : student.name}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </form>

                            <div className="px-8 py-5 border-t border-slate-100/60 dark:border-slate-800/60 flex gap-4 shrink-0 bg-white dark:bg-slate-900 justify-end">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    {tWithFallback('cancelBtn', 'إلغاء')}
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={saving || form.students.length === 0}
                                    className="px-6 py-2.5 rounded-xl bg-[#0f7a6c] text-white text-sm font-bold hover:bg-[#0d6b5e] transition-colors disabled:opacity-60 flex items-center gap-2"
                                >
                                    {saving && <Spinner />}
                                    {tWithFallback('createCodeBtn', 'إنشاء الكود')}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <StudentSelectionModal
                isOpen={isStudentModalOpen}
                onClose={() => setIsStudentModalOpen(false)}
                onAdd={handleAddStudents}
                alreadySelectedIds={form.students.map(s => s.student_id || s.id)}
            />
        </>
    );
}