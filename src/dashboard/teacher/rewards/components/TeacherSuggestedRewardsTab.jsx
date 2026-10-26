import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  Gift,
  Clock,
  CheckCircle2,
  XCircle,
  Layers,
  Award,
   Star,
  Trophy,
  Medal,
  Heart,
  Plus,
  RefreshCw,
} from 'lucide-react';
import { teacherRewardsApi } from '@/shared/services/api/teacherRewardsApi.js';

function renderIcon(icon) {
  if (!icon) return <span className="text-3xl">🎁</span>;
  const lower = String(icon).toLowerCase().trim();
  if (lower === 'star') return <Star className="w-8 h-8 text-amber-500 fill-amber-500" />;
  if (lower === 'trophy') return <Trophy className="w-8 h-8 text-amber-500 fill-amber-500" />;
  if (lower === 'award') return <Award className="w-8 h-8 text-amber-500" />;
  if (lower === 'medal') return <Medal className="w-8 h-8 text-amber-500" />;
  if (lower === 'heart') return <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />;
  return <span className="text-3xl">{icon}</span>;
}

export default function TeacherSuggestedRewardsTab({ onOpenSuggestModal }) {
  const { t } = useTranslation();

  const [activeFilter, setActiveFilter] = useState('all');

  const {
    data: suggestedRes,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['teacher-suggested-rewards', activeFilter],
    queryFn: () => teacherRewardsApi.fetchSuggestedRewards(activeFilter),
    staleTime: 60 * 1000,
  });

  const stats = useMemo(() => {
    if (suggestedRes?.stats) {
      return suggestedRes.stats;
    }
    const all = Array.isArray(suggestedRes?.data) ? suggestedRes.data : [];
    return {
      total: all.length,
      accepted: all.filter((s) => s.status === 'accepted').length,
      pending: all.filter((s) => s.status === 'pending').length,
      rejected: all.filter((s) => s.status === 'rejected').length,
    };
  }, [suggestedRes]);

  const suggestionsList = useMemo(() => {
    const apiList = suggestedRes?.data;
    if (Array.isArray(apiList)) {
      return apiList;
    }
    return [];
  }, [suggestedRes]);

  const statCards = [
    {
      id: 'all',
      label: t('teacher.suggestedRewardsCount', 'إجمالي المقترحات'),
      value: stats.total,
      icon: Layers,
      textColor: 'text-slate-800 dark:text-slate-100',
      bgIcon: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
      activeBorder: 'border-[#00594C] ring-2 ring-[#00594C]/20 bg-[#00594C]/5 dark:bg-[#00594C]/10',
    },
    {
      id: 'pending',
      label: t('teacher.pendingSuggestions', 'قيد المراجعة'),
      value: stats.pending,
      icon: Clock,
      textColor: 'text-amber-600 dark:text-amber-400',
      bgIcon: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
      activeBorder: 'border-amber-500 ring-2 ring-amber-500/25 bg-amber-50/60 dark:bg-amber-950/20',
    },
    {
      id: 'accepted',
      label: t('teacher.acceptedSuggestions', 'مقبولة'),
      value: stats.accepted,
      icon: CheckCircle2,
      textColor: 'text-emerald-600 dark:text-emerald-400',
      bgIcon: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
      activeBorder: 'border-emerald-500 ring-2 ring-emerald-500/25 bg-emerald-50/60 dark:bg-emerald-950/20',
    },
    {
      id: 'rejected',
      label: t('teacher.rejectedSuggestions', 'مرفوضة'),
      value: stats.rejected,
      icon: XCircle,
      textColor: 'text-rose-600 dark:text-rose-400',
      bgIcon: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300',
      activeBorder: 'border-rose-500 ring-2 ring-rose-500/25 bg-rose-50/60 dark:bg-rose-950/20',
    },
  ];

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'accepted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
            <CheckCircle2 size={13} className="text-emerald-600" />
            <span>{t('teacher.acceptedSuggestions', 'مقبولة')}</span>
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-50 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-800 shadow-2xs">
            <XCircle size={13} className="text-rose-600" />
            <span>{t('teacher.rejectedSuggestions', 'مرفوضة')}</span>
          </span>
        );
      case 'pending':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-50 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs">
            <Clock size={13} className="text-amber-600" />
            <span>{t('teacher.pendingSuggestions', 'قيد المراجعة')}</span>
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-100 dark:border-slate-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2.5">
            <span>{t('teacher.suggestedRewardsTab', 'المكافآت المقترحة')}</span>
            <span className="text-xl">🎁</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
            {t('teacher.suggestedRewardsSubtitle', 'تابع حالات مكافآتك المقترحة (قيد المراجعة، مقبولة، مرفوضة) أو اقترح مكافأة جديدة')}
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => refetch()}
            title="تحديث البيانات"
            className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <RefreshCw size={17} className={isFetching ? 'animate-spin' : ''} />
          </button>

          <button
            type="button"
            onClick={onOpenSuggestModal}
            className="py-3 px-5 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <Plus size={18} />
            <span>{t('teacher.suggestNewReward', 'اقترح مكافأة جديدة')}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          const isActive = activeFilter === card.id;

          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setActiveFilter(card.id)}
              className={`rounded-3xl p-5 border transition-all cursor-pointer shadow-xs hover:shadow-sm flex items-center justify-between text-start ${
                isActive
                  ? card.activeBorder
                  : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block">
                  {card.label}
                </span>
                <span className={`text-2xl sm:text-3xl font-black mt-1 block ${card.textColor}`}>
                  {card.value}
                </span>
              </div>
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs ${card.bgIcon}`}
              >
                <Icon size={22} />
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { key: 'all', label: t('teacher.allSuggestions', 'جميع الاقتراحات'), count: stats.total },
          { key: 'pending', label: t('teacher.pendingSuggestions', 'قيد المراجعة'), count: stats.pending },
          { key: 'accepted', label: t('teacher.acceptedSuggestions', 'المقبولة'), count: stats.accepted },
          { key: 'rejected', label: t('teacher.rejectedSuggestions', 'المرفوضة'), count: stats.rejected },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveFilter(tab.key)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeFilter === tab.key
                ? 'bg-[#00594C] text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                activeFilter === tab.key
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 animate-pulse space-y-4"
            >
              <div className="h-28 bg-slate-100 dark:bg-slate-800 rounded-2xl" />
              <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-2/3 mx-auto" />
              <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-5/6 mx-auto" />
            </div>
          ))}
        </div>
      ) : suggestionsList.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-12 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
            <Gift size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              {t('teacher.noSuggestionsInFilter', 'لا توجد مكافآت مقترحة في هذا التصنيف')}
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              {t('teacher.noSuggestionsInFilterDesc', 'يمكنك اقتراح مكافأة جديدة الآن وتقديمها للإدارة للاعتماد')}
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenSuggestModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-xs font-bold shadow-xs cursor-pointer"
          >
            <Plus size={16} />
            <span>{t('teacher.suggestNewReward', 'اقترح مكافأة جديدة')}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {suggestionsList.map((item) => {
            const itemId = item.id || item._id;
            const rewardName =
              typeof item.name === 'object' ? item.name?.ar || item.name?.en : item.name;
            const rewardDesc =
              typeof item.description === 'object'
                ? item.description?.ar || item.description?.en
                : item.description;

            return (
              <div
                key={itemId}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div
                  className="h-28 rounded-2xl flex items-center justify-center relative shadow-xs overflow-hidden transition-transform group-hover:scale-[1.01]"
                  style={{
                    backgroundColor: item.backgroundColor || '#4CAF50',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center relative z-10">
                    {renderIcon(item.icon)}
                  </div>

                  <div className="absolute top-3 end-3 z-10">
                    {renderStatusBadge(item.status)}
                  </div>
                </div>

                <div className="space-y-2 text-start flex-1">
                  <h3 className="text-base font-black text-slate-800 dark:text-white leading-snug">
                    {rewardName || t('teacher.rewardsTitle', 'مكافأة مقترحة')}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {rewardDesc || ''}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="flex items-center gap-1.5">
                    {item.status === 'accepted' ? (
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {t('teacher.acceptedByAdmin', 'معتمدة من الإدارة')}
                      </span>
                    ) : item.status === 'rejected' ? (
                      <span className="text-rose-600 dark:text-rose-400">
                        {t('teacher.rejectedByAdmin', 'مرفوضة من الإدارة')}
                      </span>
                    ) : (
                      <span className="text-amber-600 dark:text-amber-400">
                        {t('teacher.pendingAdminApproval', 'بانتظار موافقة الإدارة')}
                      </span>
                    )}
                  </span>

                  {item.teacher?.name && (
                    <span className="text-slate-400 font-medium text-[10px]">
                      {t('teacher.suggestedBy', 'المقترح:')} {item.teacher.name}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
