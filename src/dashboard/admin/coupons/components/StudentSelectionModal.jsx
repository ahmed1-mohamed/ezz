import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Phone, User, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Spinner from '@/shared/components/Spinner';
import { studentsApi } from '@/shared/services/api/studentsApi';

export default function StudentSelectionModal({ isOpen, onClose, onAdd, alreadySelectedIds = [] }) {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language.startsWith('ar') || true;
    const tWithFallback = (key, fallback) => {
        const trans = t(`adminDashboard.coupons.${key}`);
        return trans === `adminDashboard.coupons.${key}` ? fallback : trans;
    };

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchFilter, setSearchFilter] = useState('name'); // 'name', 'email', 'phone'
    const [selectedStudents, setSelectedStudents] = useState([]);

    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSelectedStudents([]);
            setSearchQuery('');
            fetchStudents();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const fetchStudents = async () => {
        setLoading(true);
        try {
            const res = await studentsApi.fetchStudents();
            let studentList = [];
            if (Array.isArray(res)) studentList = res;
            else if (res?.data && Array.isArray(res.data)) studentList = res.data;
            else if (res?.data?.data && Array.isArray(res.data.data)) studentList = res.data.data;

            if (studentList.length > 0) {
                const available = studentList.filter(s => {
                    const sid = s.student_id || s._id || s.id;
                    return !alreadySelectedIds.includes(sid);
                });
                setStudents(available);
            }
        } catch (error) {
            console.error('Failed to fetch students', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleStudent = (student) => {
        const studentId = student.student_id || student._id || student.id;
        setSelectedStudents(prev =>
            prev.some(s => (s.student_id || s._id || s.id) === studentId)
                ? prev.filter(s => (s.student_id || s._id || s.id) !== studentId)
                : [...prev, student]
        );
    };

    const filteredStudents = students.filter(student => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();

        let target = '';
        if (searchFilter === 'name') target = typeof student.name === 'object' ? (student.name.ar || student.name.en) : student.name;
        if (searchFilter === 'email') target = student.email;
        if (searchFilter === 'phone') target = student.phone;

        return target?.toLowerCase().includes(query);
    });

    const filterOptions = [
        { id: 'name', label: tWithFallback('searchByName', 'بحث بالاسم') },
        { id: 'email', label: tWithFallback('searchByEmail', 'بحث بالبريد') },
        { id: 'phone', label: tWithFallback('searchByPhone', 'بحث بالجوال') },
    ];

    const getInitials = (name) => {
        if (!name) return 'S';
        const str = typeof name === 'object' ? (name.ar || name.en) : name;
        return str.charAt(0);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" dir={isRtl ? 'rtl' : 'ltr'}>
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
                        {/* Header area hidden but search bar is prominent based on design */}
                        <div className="p-6 pb-2 shrink-0">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50">
                                <div className="flex flex-wrap gap-2 justify-end mb-4">
                                    {filterOptions.map(opt => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setSearchFilter(opt.id)}
                                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${searchFilter === opt.id
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
                                        placeholder={tWithFallback('searchStudentPlaceholder', 'ابحث باسم الطالب...')}
                                        className="w-full bg-[#f8fafc] dark:bg-slate-900/60 rounded-xl ps-11 pe-4 py-3 text-sm outline-none text-slate-800 dark:text-slate-100 border border-transparent focus:border-[#0f7a6c] transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* List area */}
                        <div className="flex-1 overflow-y-auto p-6 pt-2">
                            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 p-6 min-h-[400px]">
                                <h3 className="text-slate-800 dark:text-white font-bold mb-6">
                                    {tWithFallback('availableStudents', 'الطلاب المتاحون')} ({filteredStudents.length})
                                </h3>

                                {loading ? (
                                    <div className="flex justify-center items-center h-40"><Spinner /></div>
                                ) : filteredStudents.length === 0 ? (
                                    <div className="text-center py-10 text-slate-500">{tWithFallback('noStudentsFound', 'لا يوجد طلاب مطابقين للبحث')}</div>
                                ) : (
                                    <div className="space-y-4">
                                        {filteredStudents.map(student => {
                                            const studentId = student.student_id || student._id || student.id;
                                            const isSelected = selectedStudents.some(s => (s.student_id || s._id || s.id) === studentId);
                                            const studentName = typeof student.name === 'object' ? (student.name.ar || student.name.en) : student.name;
                                            return (
                                                <div
                                                    key={studentId}
                                                    onClick={() => toggleStudent(student)}
                                                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${isSelected
                                                            ? 'border-[#0f7a6c] bg-[#0f7a6c]/5'
                                                            : 'border-slate-100 dark:border-slate-700 hover:border-[#0f7a6c]/30'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 ${isSelected ? 'bg-[#0f7a6c]' : 'bg-slate-400'}`}>
                                                            {isSelected ? <Check size={20} /> : getInitials(studentName)}
                                                        </div>
                                                        <div className="font-bold text-slate-800 dark:text-white text-base">
                                                            {studentName}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                                        <div className="flex items-center gap-2 bg-[#f8fafc] dark:bg-slate-900/60 p-2 rounded-lg text-slate-600 dark:text-slate-300">
                                                            <User size={14} className="text-slate-400 shrink-0" />
                                                            <span className="font-medium text-slate-500 shrink-0">{tWithFallback('ageLabel', 'العمر')}:</span>
                                                            <span className="font-bold">{student.age ? `${student.age} سنة` : '10 سنة'}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 bg-[#f8fafc] dark:bg-slate-900/60 p-2 rounded-lg text-slate-600 dark:text-slate-300" dir="ltr">
                                                            <Mail size={14} className="text-slate-400 shrink-0" />
                                                            <span className="font-medium text-slate-500 shrink-0" dir="rtl">{tWithFallback('emailLabel', 'البريد')}:</span>
                                                            <span className="font-bold truncate" title={student.email}>{student.email || 'student@email.com'}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 bg-[#f8fafc] dark:bg-slate-900/60 p-2 rounded-lg text-slate-600 dark:text-slate-300">
                                                            <span className="font-medium text-slate-500 shrink-0">{tWithFallback('levelLabel', 'المستوى')}:</span>
                                                            <span className="font-bold">{student.level?.name || 'متوسط'}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 bg-[#f8fafc] dark:bg-slate-900/60 p-2 rounded-lg text-slate-600 dark:text-slate-300" dir="ltr">
                                                            <Phone size={14} className="text-slate-400 shrink-0" />
                                                            <span className="font-medium text-slate-500 shrink-0" dir="rtl">{tWithFallback('phoneLabel', 'الجوال')}:</span>
                                                            <span className="font-bold truncate">{student.phone || '+96650000000'}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 bg-[#f8fafc] dark:bg-slate-900/60 p-2 rounded-lg text-slate-600 dark:text-slate-300 sm:col-span-2">
                                                            <span className="font-medium text-slate-500 shrink-0">{tWithFallback('groupLabel', 'المجموعة')}:</span>
                                                            <span className="font-bold">{student.group?.name || 'مجموعة القرآن أ'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-4 shrink-0 bg-[#f8fafc] dark:bg-slate-900 justify-between">
                            <button
                                type="button"
                                onClick={() => onAdd(selectedStudents)}
                                disabled={selectedStudents.length === 0}
                                className={`flex-1 py-3.5 rounded-xl font-bold transition-colors ${selectedStudents.length > 0
                                        ? 'bg-[#0f7a6c] text-white hover:bg-[#0d6b5e]'
                                        : 'bg-[#0f7a6c]/50 text-white cursor-not-allowed'
                                    }`}
                            >
                                {tWithFallback('addNStudentsBtn', `اضافة ${selectedStudents.length} طالب/طلاب لكوبون الخصم`)}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                            >
                                {tWithFallback('cancelBtn', 'إلغاء')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
