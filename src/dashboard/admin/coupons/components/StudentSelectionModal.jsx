import { useState, useEffect, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Phone, User, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Spinner from '@/shared/components/Spinner';
import { studentsApi } from '@/shared/services/api/studentsApi';

const resolveStudentName = (name) =>
    typeof name === 'object' ? name?.ar || name?.en || '' : name || '';

const getStudentId = (student) =>
    student.student_id || student._id || student.id;

const getInitials = (name) => {
    const str = resolveStudentName(name);
    return str.charAt(0).toUpperCase() || 'S';
};

function StudentInfoRow({ icon: Icon, label, value, isLtr = false }) {
    return (
        <div
            className={`flex items-center gap-2 bg-[#f8fafc] dark:bg-slate-900/60 p-2 rounded-lg text-slate-655 dark:text-slate-300 ${isLtr ? 'flex-row-reverse justify-end' : ''
                }`}
            dir={isLtr ? 'ltr' : undefined}
        >
            {Icon && <Icon size={14} className="text-slate-400 shrink-0" />}
            <span className="font-medium text-slate-500 shrink-0" dir="auto">
                {label}:
            </span>
            <span className="font-bold truncate" title={value}>
                {value}
            </span>
        </div>
    );
}

function StudentCard({ student, isSelected, onToggle, t }) {
    const studentName = resolveStudentName(student.name);
    const studentImage = student.image || student.profileImage || student.avatar;

    return (
        <div
            onClick={() => onToggle(student)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${isSelected
                    ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                    : 'border-slate-100 dark:border-slate-700 hover:border-[#0f7a6c]/30'
                }`}
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="relative w-10 h-10 shrink-0">
                    {studentImage ? (
                        <img
                            src={studentImage}
                            alt={studentName}
                            className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
                        />
                    ) : (
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${isSelected ? 'bg-[#0f7a6c]' : 'bg-slate-400'
                                }`}
                        >
                            {isSelected ? <Check size={20} /> : getInitials(studentName)}
                        </div>
                    )}
                    {isSelected && studentImage && (
                        <div className="absolute inset-0 bg-[#0f7a6c]/80 rounded-full flex items-center justify-center text-white backdrop-blur-[1px]">
                            <Check size={20} />
                        </div>
                    )}
                </div>
                <div className="font-bold text-slate-800 dark:text-white text-base truncate">
                    {studentName}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-start">
                {student.age && (
                    <StudentInfoRow
                        icon={User}
                        label={t('adminDashboard.coupons.ageLabel', 'العمر')}
                        value={student.age}
                    />
                )}
                {student.email && (
                    <StudentInfoRow
                        icon={Mail}
                        label={t('adminDashboard.coupons.emailLabel', 'البريد')}
                        value={student.email}
                        isLtr
                    />
                )}
                {student.level?.name && (
                    <StudentInfoRow
                        label={t('adminDashboard.coupons.levelLabel', 'المستوى')}
                        value={student.level.name}
                    />
                )}
                {student.phone && (
                    <StudentInfoRow
                        icon={Phone}
                        label={t('adminDashboard.coupons.phoneLabel', 'الهاتف')}
                        value={student.phone}
                        isLtr
                    />
                )}
            </div>
        </div>
    );
}

function StudentSelectionModal({ isOpen, onClose, onAdd, alreadySelectedIds = [] }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar');

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStudents, setSelectedStudents] = useState([]);

    const fetchStudents = useCallback(async (query = '', isInitial = false) => {
        if (isInitial) setLoading(true);
        try {
            const res = await studentsApi.fetchStudents({ search: query });
            let studentList = [];
            if (Array.isArray(res)) studentList = res;
            else if (Array.isArray(res?.data)) studentList = res.data;
            else if (Array.isArray(res?.data?.data)) studentList = res.data.data;

            const available = studentList.filter(
                (s) => !alreadySelectedIds.includes(getStudentId(s))
            );
            setStudents(available);
        } catch (error) {
            console.error('Failed to fetch students:', error);
        } finally {
            if (isInitial) setLoading(false);
        }
    }, [alreadySelectedIds]);

    useEffect(() => {
        if (!isOpen) return;
        setSelectedStudents([]);
        setSearchQuery('');
        fetchStudents('', true);
    }, [isOpen, fetchStudents]);

    const toggleStudent = (student) => {
        const studentId = getStudentId(student);
        setSelectedStudents((prev) =>
            prev.some((s) => getStudentId(s) === studentId)
                ? []
                : [student]
        );
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchStudents(searchQuery, false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4"
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
                        className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#f8fafc] dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col border border-slate-100 dark:border-slate-800/60 overflow-hidden"
                    >
                        <div className="p-6 pb-2 shrink-0">
                            <form onSubmit={handleSearchSubmit} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 flex gap-2 items-center">
                                <div className="relative flex-1">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                        <Search size={18} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder={t('adminDashboard.coupons.searchStudentPlaceholder', 'بحث عن طالب بالاسم، البريد أو الهاتف...')}
                                        className="w-full bg-[#f8fafc] dark:bg-slate-900/60 rounded-xl ps-11 pe-4 py-3 text-sm outline-none text-slate-800 dark:text-slate-100 border border-transparent focus:border-[#0f7a6c] transition-all text-start"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-5 py-3 bg-[#0f7a6c] hover:bg-[#0d6b5e] text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                >
                                    {t('common.search', 'بحث')}
                                </button>
                            </form>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 pt-2">
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 p-6 min-h-[400px]">
                                <h3 className="text-slate-855 dark:text-white font-bold mb-6 text-start">
                                    {t('adminDashboard.coupons.availableStudents', 'الطلاب المتاحون')} ({students.length})
                                </h3>

                                {loading ? (
                                    <div className="flex justify-center items-center h-40">
                                        <Spinner />
                                    </div>
                                ) : students.length === 0 ? (
                                    <div className="text-center py-10 text-slate-500">
                                        {t('adminDashboard.coupons.noStudentsFound', 'لا يوجد طلاب')}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {students.map((student) => {
                                            const studentId = getStudentId(student);
                                            const isSelected = selectedStudents.some(
                                                (s) => getStudentId(s) === studentId
                                            );
                                            return (
                                                <StudentCard
                                                    key={studentId}
                                                    student={student}
                                                    isSelected={isSelected}
                                                    onToggle={toggleStudent}
                                                    t={t}
                                                />
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-4 shrink-0 bg-[#f8fafc] dark:bg-slate-900 justify-between">
                            <button
                                type="button"
                                onClick={() => onAdd(selectedStudents)}
                                disabled={selectedStudents.length === 0}
                                className="flex-1 py-3.5 rounded-xl font-bold transition-colors bg-[#0f7a6c] text-white hover:bg-[#0d6b5e] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {selectedStudents.length === 1
                                    ? (isRtl ? 'إضافة الطالب المحدد للكوبون' : 'Add Selected Student')
                                    : (isRtl ? 'إضافة طالب' : 'Add Student')}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-655 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer border border-slate-100 dark:border-slate-800"
                            >
                                {t('adminDashboard.coupons.cancelBtn', 'إلغاء')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default memo(StudentSelectionModal);
