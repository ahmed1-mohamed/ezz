import { useState, useEffect, useMemo } from 'react';
import { Plus, Search, Filter, Users, Sparkles } from 'lucide-react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChildDetailsView from '../components/child_details/ChildDetailsView';
import ChildCard from './components/children/ChildCard';
import ChildrenStatsBar from './components/children/ChildrenStatsBar';
import BookTrialSessionModal from './components/trial/BookTrialSessionModal';
import { parentApi } from '@/shared/services/api/parentApi';
import useDebounce from '@/shared/hooks/useDebounce';

export default function ParentChildrenList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const isTrialAction = searchParams.get('action') === 'trial';
  const teacherIdParam = searchParams.get('teacherId');
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;
  const [isLoading, setIsLoading] = useState(true);
  const [childrenList, setChildrenList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 350);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('all');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(() => isTrialAction);
  const [selectedTrialChildId, setSelectedTrialChildId] = useState(null);
  useEffect(() => {
    if (isTrialAction) {
      setIsTrialModalOpen(true);
    }
  }, [isTrialAction]);
  const selectedChildId = location.state?.childId || null;
  const handleSelectChild = (child) => {
    const studentId = child?.student_id || child?.id || child?.user_id;
    if (studentId) {
      navigate(`/dashboard/parent/children/${studentId}`);
    }
  };
  const handleClearInlineChild = () => {
    const newState = { ...location.state };
    delete newState.childId;
    navigate('.', { state: newState, replace: true });
  };
  useEffect(() => {
    let isMounted = true;
    const fetchChildrenData = async () => {
      setIsLoading(true);
      try {
        const params = {};
        if (debouncedSearch.trim()) params.search = debouncedSearch.trim();
        const res = await parentApi.fetchStudents(params);
        if (isMounted) {
          const list = res?.success && Array.isArray(res.data) ? res.data : [];
          setChildrenList(list);
        }
      } catch (err) {
        console.error('Failed to load parent students:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchChildrenData();
    return () => {
      isMounted = false;
    };
  }, [debouncedSearch]);
  const filteredChildren = useMemo(() => {
    return childrenList.filter((child) => {
      const levelNorm = String(child.studentLevel || '').toLowerCase();
      return selectedLevelFilter === 'all'
        || (selectedLevelFilter === 'middle' && (levelNorm.includes('middle') || levelNorm.includes('إعداد')))
        || (selectedLevelFilter === 'primary' && (levelNorm.includes('primary') || levelNorm.includes('ابتدائ')))
        || (selectedLevelFilter === 'high' && (levelNorm.includes('high') || levelNorm.includes('ثانو')));
    });
  }, [childrenList, selectedLevelFilter]);
  if (selectedChildId) {
    return (
      <div className="p-4 md:p-8 max-w-7xl mx-auto font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
        <ChildDetailsView
          childId={selectedChildId}
          onBack={handleClearInlineChild}
        />
      </div>
    );
  }
  return (
    <div
      className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-8 font-sans min-h-screen"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-start space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#0f7a6c] dark:text-emerald-400">
            <Users className="w-4 h-4" />
            <span>{t('parent.childrenList.title', 'أبنائي المسجلون')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white">
            {t('parent.childrenList.title', 'قائمة الأبناء')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            {t('parent.childrenList.subtitle', 'متابعة الحضور، رصيد الحصص، والمجموعات الدراسية لكل ابن')}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <button
            type="button"
            onClick={() => {
              setSelectedTrialChildId(null);
              setIsTrialModalOpen(true);
            }}
            className="flex-1 md:flex-none px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-black shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>{isRtl ? 'احجز حصة تجريبية مجانية' : 'Book a Free Trial'}</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard/parent/packages')}
            className="flex-1 md:flex-none px-5 py-3 rounded-2xl bg-[#0f7a6c] hover:bg-[#0c6156] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#0f7a6c]/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{t('parent.childrenList.addNew', 'إضافة ابن جديد / اشتراك باقة')}</span>
          </button>
        </div>
      </div>
      {!isLoading && childrenList.length > 0 && (
        <ChildrenStatsBar childrenList={childrenList} />
      )}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('parent.childrenList.searchPlaceholder', 'ابحث باسم الابن أو المجموعة...')}
            className="w-full ps-10 pe-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0f7a6c]/40 transition-shadow"
          />
          <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <select
            value={selectedLevelFilter}
            onChange={(e) => setSelectedLevelFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#0f7a6c]"
          >
            <option value="all">{t('parent.childrenList.allLevels', 'جميع المراحل')}</option>
            <option value="middle">{t('parent.childrenList.middleLevel', 'المرحلة الإعدادية')}</option>
            <option value="primary">{t('parent.childrenList.primaryLevel', 'المرحلة الابتدائية')}</option>
            <option value="high">{t('parent.childrenList.highLevel', 'المرحلة الثانوية')}</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="h-80 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 animate-pulse space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-36 bg-slate-200 dark:bg-slate-800 rounded-md" />
                  <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded-md" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-2xl bg-slate-100 dark:bg-slate-800" />
                <div className="h-16 rounded-2xl bg-slate-100 dark:bg-slate-800" />
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full" />
              <div className="h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-xl" />
            </div>
          ))}
        </div>
      ) : filteredChildren.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xs space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-base text-slate-700 dark:text-slate-200">
            {t('parent.childrenList.empty', 'لا يوجد أبناء مسجلين حالياً.')}
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            {searchQuery
              ? t('common.noSearchResults', 'لا توجد نتائج تطابق بحثك الحالي، يرجى تجربة كلمات أخرى.')
              : t('parent.childrenList.subtitle', 'يمكنك إضافة ابن جديد أو الاشتراك في باقة دراسية.')}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredChildren.map((child) => {
            const studentId = child.student_id || child.id || child.user_id;
            return (
              <ChildCard
                key={studentId}
                child={child}
                onViewDetails={handleSelectChild}
                onBookTrial={(c) => {
                  setSelectedTrialChildId(c.student_id || c.id || c.user_id);
                  setIsTrialModalOpen(true);
                }}
              />
            );
          })}
        </div>
      )}
      <BookTrialSessionModal
        isOpen={isTrialModalOpen}
        onClose={() => {
          setIsTrialModalOpen(false);
          if (isTrialAction) {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete('action');
            newParams.delete('teacherId');
            setSearchParams(newParams, { replace: true });
          }
        }}
        childrenList={childrenList}
        initialChildId={selectedTrialChildId}
        initialTeacherId={teacherIdParam}
        onSuccess={() => {
          // Success callback
        }}
      />
    </div>
  );
}