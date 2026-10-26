import { User, Calendar, RotateCcw, Camera, Mail, Phone, Users, Video, GraduationCap, DollarSign } from 'lucide-react';

export default function TeacherProfileHeader({
  t,
  currentTimeStr,
  currentDateStr,
  loadingProfile,
  onReload,
  displayName,
  initialLetter,
  avatarUrl,
  onAvatarClick,
  fileInputRef,
  onAvatarChange,
  email,
  phoneWithoutCode,
  selectedDialCode,
  stats,
  activeTab,
  onTabChange,
  tabs,
}) {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-xs border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-tight flex items-center gap-3">
            <span className="p-2.5 bg-[#e8f7f3] dark:bg-emerald-950/50 rounded-2xl text-[#00594C] dark:text-emerald-400">
              <User size={24} />
            </span>
            <span>{t('teacherProfilePage.title', 'الملف الشخصي')}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
            {t('teacherProfilePage.subtitle', 'إدارة البيانات الشخصية وإعدادات الحساب والأمان')}
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#d2ede6] text-[#00594C] dark:bg-emerald-950/70 dark:text-emerald-300">
            {currentTimeStr}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <Calendar size={14} className="text-slate-400" />
            <span>{currentDateStr}</span>
          </div>

          <button
            onClick={onReload}
            disabled={loadingProfile}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-50"
            title={t('common.refresh', 'تحديث البيانات')}
          >
            <RotateCcw size={15} className={loadingProfile ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 dark:border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-start">
            <div className="relative group shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#00594C] text-white flex items-center justify-center font-black text-3xl shadow-md overflow-hidden ring-4 ring-[#00594C]/10">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={displayName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{initialLetter}</span>
                )}
              </div>
              <button
                type="button"
                onClick={onAvatarClick}
                className="absolute -bottom-1 -end-1 p-2 rounded-2xl bg-[#00594C] text-white hover:bg-[#00473d] shadow-md transition-all cursor-pointer ring-2 ring-white dark:ring-slate-900"
                title={t('teacherProfilePage.changeAvatar', 'تغيير الصورة الشخصية')}
              >
                <Camera size={16} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={onAvatarChange}
                className="hidden"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
                  {displayName}
                </h2>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {t('teacherProfilePage.verifiedTeacher', 'معلم معتمد')}
                </span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap text-xs text-slate-500 dark:text-slate-400 font-semibold">
                {email && (
                  <span className="inline-flex items-center gap-1.5">
                    <Mail size={13} className="text-slate-400" />
                    <span>{email}</span>
                  </span>
                )}
                {phoneWithoutCode && (
                  <span className="inline-flex items-center gap-1.5 font-mono" dir="ltr">
                    <Phone size={13} className="text-slate-400" />
                    <span>
                      {selectedDialCode} {phoneWithoutCode}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-1">
              <div className="flex items-center justify-center text-[#00594C] dark:text-emerald-400 mb-1">
                <Users size={18} />
              </div>
              <span className="block text-xl font-black text-slate-800 dark:text-white">
                {stats.activeGroups}
              </span>
              <span className="block text-[11px] font-bold text-slate-400">
                {t('teacherDashboard.groups', 'المجموعات')}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-1">
              <div className="flex items-center justify-center text-[#00594C] dark:text-emerald-400 mb-1">
                <Video size={18} />
              </div>
              <span className="block text-xl font-black text-slate-800 dark:text-white">
                {stats.totalSessions}
              </span>
              <span className="block text-[11px] font-bold text-slate-400">
                {t('teacherDashboard.sessions', 'الجلسات')}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-1">
              <div className="flex items-center justify-center text-[#00594C] dark:text-emerald-400 mb-1">
                <GraduationCap size={18} />
              </div>
              <span className="block text-xl font-black text-slate-800 dark:text-white">
                {stats.totalStudents}
              </span>
              <span className="block text-[11px] font-bold text-slate-400">
                {t('teacherDashboard.students', 'الطلاب')}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-1">
              <div className="flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-1">
                <DollarSign size={18} />
              </div>
              <span className="block text-xl font-black text-slate-800 dark:text-white" dir="ltr">
                ${Number(stats.totalEarnings || 0).toLocaleString('en-US')}
              </span>
              <span className="block text-[11px] font-bold text-slate-400">
                {t('teacherDashboard.earnings', 'الأرباح')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-6 overflow-x-auto">
          {tabs.map((tab) => {
            const isCurrent = activeTab === tab.key;
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onTabChange(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  isCurrent
                    ? 'bg-[#00594C] text-white'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}


