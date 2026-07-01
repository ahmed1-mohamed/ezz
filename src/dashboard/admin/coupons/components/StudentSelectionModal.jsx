import { useState, useEffect, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Phone, User, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Spinner from '@/shared/components/Spinner';
import { studentsApi } from '@/shared/services/api/studentsApi';

const SEARCH_FILTERS = ['name', 'email', 'phone'];

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
            className={`flex items-center gap-2 bg-[#f8fafc] dark:bg-slate-900/60 p-2 rounded-lg text-slate-600 dark:text-slate-300 ${
                isLtr ? 'flex-row-reverse justify-end' : ''
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
    const studentId = getStudentId(student);
    const studentName = resolveStudentName(student.name);

    return (
        <div
            onClick={() => onToggle(student)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                isSelected
                    ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                    : 'border-slate-100 dark:border-slate-700 hover:border-[#0f7a6c]/30'
            }`}
        >
            <div className="flex items-center gap-4 mb-4">
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${
                        isSelected ? 'bg-[#0f7a6c]' : 'bg-slate-400'
                    }`}
                >
                    {isSelected ? <Check size={20} /> : getInitials(studentName)}
                </div>
                <div className="font-bold text-slate-800 dark:text-white text-base">
                    {studentName}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {student.age && (
                    <StudentInfoRow
                        icon={User}
                        label={t('adminDashboard.coupons.ageLabel')}
                        value={student.age}
                    />
                )}
                {student.email && (
                    <StudentInfoRow
                        icon={Mail}
                        label={t('adminDashboard.coupons.emailLabel')}
                        value={student.email}
                        isLtr
                    />
                )}
                {student.level?.name && (
                    <StudentInfoRow
                        label={t('adminDashboard.coupons.levelLabel')}
                        value={student.level.name}
                    />
                )}
                {student.phone && (
                    <StudentInfoRow
                        icon={Phone}
                        label={t('adminDashboard.coupons.phoneLabel')}
                        value={student.phone}
                        isLtr
                    />
                )}
                {student.group?.name && (
                    <div className="sm:col-span-2">
                        <StudentInfoRow
                            label={t('adminDashboard.coupons.groupLabel')}
                            value={student.group.name}
                        />
                    </div>
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
    const [searchFilter, setSearchFilter] = useState('name');
    const [selectedStudents, setSelectedStudents] = useState([]);

    useEffect(() => {
        if (!isOpen) return;
        setSelectedStudents([]);
        setSearchQuery('');
        fetchStudents();
    }, [isOpen]);

    const fetchStudents = async () => {
        setLoading(true);
        try {
            const res = await studentsApi.fetchStudents();
            let studentList = [];
            if (Array.isArray(res)) studentList = res;
            else if (Array.isArray(res?.data)) studentList = res.data;
            else if (Array.isArray(res?.data?.data)) studentList = res.data.data;

            const available = studentList.filter(
                (s) => !alreadySelectedIds.includes(getStudentId(s))
            );
            setStudents(available);
        } finally {
            setLoading(false);
        }
    };

    const toggleStudent = (student) => {
        const studentId = getStudentId(student);
        setSelectedStudents((prev) =>
            prev.some((s) => getStudentId(s) === studentId)
                ? prev.filter((s) => getStudentId(s) !== studentId)
                : [...prev, student]
        );
    };

    const filteredStudents = useMemo(() => {
        if (!searchQuery) return students;
        const query = searchQuery.toLowerCase();
        return students.filter((student) => {
            let target = '';
            if (searchFilter === 'name') target = resolveStudentName(student.name);
            else if (searchFilter === 'email') target = student.email || '';
            else if (searchFilter === 'phone') target = student.phone || '';
            return target.toLowerCase().includes(query);
        });
    }, [students, searchQuery, searchFilter]);

    const filterOptions = useMemo(
        () =>
            SEARCH_FILTERS.map((id) => ({
                id,
                label: t(`adminDashboard.coupons.searchBy${id.charAt(0).toUpperCase() + id.slice(1)}`),
            })),
        [t]
    );

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
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                                <div className="flex flex-wrap gap-2 justify-end mb-4">
                                    {filterOptions.map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setSearchFilter(opt.id)}
                                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                                                searchFilter === opt.id
                                                    ? 'bg-[#0f7a6c] text-white'
                                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                            }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                        <Search size={18} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder={t('adminDashboard.coupons.searchStudentPlaceholder')}
                                        className="w-full bg-[#f8fafc] dark:bg-slate-900/60 rounded-xl ps-11 pe-4 py-3 text-sm outline-none text-slate-800 dark:text-slate-100 border border-transparent focus:border-[#0f7a6c] transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 pt-2">
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 p-6 min-h-[400px]">
                                <h3 className="text-slate-800 dark:text-white font-bold mb-6">
                                    {t('adminDashboard.coupons.availableStudents')} (
                                    {filteredStudents.length})
                                </h3>

                                {loading ? (
                                    <div className="flex justify-center items-center h-40">
                                        <Spinner />
                                    </div>
                                ) : filteredStudents.length === 0 ? (
                                    <div className="text-center py-10 text-slate-500">
                                        {t('adminDashboard.coupons.noStudentsFound')}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {filteredStudents.map((student) => {
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
                                className="flex-1 py-3.5 rounded-xl font-bold transition-colors bg-[#0f7a6c] text-white hover:bg-[#0d6b5e] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {t('adminDashboard.coupons.addNStudentsBtn', {
                                    count: selectedStudents.length,
                                })}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                            >
                                {t('adminDashboard.coupons.cancelBtn')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default memo(StudentSelectionModal);
