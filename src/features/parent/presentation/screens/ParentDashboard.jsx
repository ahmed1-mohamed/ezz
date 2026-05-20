import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Users,
  CheckCircle2,
  Calendar,
  Star,
  Clock,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ParentDashboard() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');
  const [selectedStudent, setSelectedStudent] = useState('');

  const stats = [
    {
      id: 1,
      label: t('parentDashboard.home.totalChildren'),
      value: '3',
      icon: Users,
      color: 'text-[#0f7a6c]',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      id: 2,
      label: t('parentDashboard.home.attendanceRate'),
      value: '94%',
      subtext: t('parentDashboard.home.attendanceSubtext'),
      subtextColor: 'text-emerald-500',
      icon: CheckCircle2,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      id: 3,
      label: t('parentDashboard.home.completedAssignments'),
      value: '42/45',
      icon: Calendar,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      id: 4,
      label: t('parentDashboard.home.averageRating'),
      value: '4.8',
      icon: Star,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
  ];

  const children = [
    {
      id: 'c1',
      name: t('parentDashboard.home.children.mohamed'),
      subject: t('parentDashboard.home.children.subject1'),
      remainingClasses: 3,
      totalClasses: 24,
      statusColor: 'bg-yellow-500' // yellow dot
    },
    {
      id: 'c2',
      name: t('parentDashboard.home.children.aisha'),
      subject: t('parentDashboard.home.children.subject2'),
      remainingClasses: 3,
      totalClasses: 24,
      statusColor: 'bg-red-500' // red dot
    }
  ];

  const upcomingClasses = [
    {
      id: 'cls1',
      title: t('parentDashboard.home.classesData.title1'),
      student: t('parentDashboard.home.children.fatima'),
      teacher: t('parentDashboard.home.classesData.teacher'),
      time: `${t('parentDashboard.home.classesData.today')} - 09:00 AM`,
      isLive: true,
      actionType: 'join'
    },
    {
      id: 'cls2',
      title: t('parentDashboard.home.classesData.title1'),
      student: t('parentDashboard.home.children.fatima'),
      teacher: t('parentDashboard.home.classesData.teacher'),
      time: `${t('parentDashboard.home.classesData.today')} - 09:00 AM`,
      isLive: true,
      actionType: 'join'
    },
    {
      id: 'cls3',
      title: t('parentDashboard.home.classesData.title2'),
      student: t('parentDashboard.home.children.fatima'),
      teacher: t('parentDashboard.home.classesData.teacher'),
      time: `${t('parentDashboard.home.classesData.today')} - 09:00 AM`,
      isLive: false,
      actionType: 'apologize',
      timer: '01:30:20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 font-sans"
    >

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div variants={itemVariants} key={stat.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-center text-center relative overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
            <div className={`absolute top-4 start-4 p-2 rounded-full ${stat.bgColor}`}>
              <stat.icon size={20} className={stat.color} />
            </div>

            <div className="mt-8 flex flex-col items-center">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                {stat.label}
              </span>
              <span className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </span>
              {stat.subtext && (
                <span className={`text-xs mt-2 ${stat.subtextColor}`}>
                  {stat.subtext}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Track Children Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.home.trackChildren')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {children.map((child) => (
            <div key={child.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md hover:border-slate-200 dark:hover:border-slate-600">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full shrink-0 ${child.statusColor}`} />
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{child.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{child.subject}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm items-center">
                  <span className="text-slate-500 dark:text-slate-400">{t('parentDashboard.home.remainingClasses')}</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    <span className="text-slate-900 dark:text-white text-base">{child.remainingClasses}</span> / {child.totalClasses}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden flex" dir="ltr">
                  {/* dir="ltr" inside so the progress always fills from left-to-right (or right-to-left if you prefer, but usually progress is LTR even in Arabic) */}
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(child.remainingClasses / child.totalClasses) * 100}%` }}
                  />
                </div>
              </div>

              <Link
                to={`/dashboard/parent/children?id=${child.id}`}
                className="block text-center w-full py-3 bg-emerald-50 text-[#0f7a6c] hover:bg-[#0f7a6c] hover:text-white dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-[#0f7a6c] dark:hover:text-white rounded-xl font-bold transition-colors"
              >
                {t('parentDashboard.home.showDetails')}
              </Link>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Classes Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.home.upcomingClasses')}
        </h2>

        <div className="space-y-4">
          {upcomingClasses.map((cls) => (
            <div key={cls.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-md">

              <div className="flex flex-col flex-grow w-full md:w-auto">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{cls.title}</h3>
                  {cls.isLive && (
                    <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-medium animate-pulse shrink-0">
                      {t('parentDashboard.home.liveNow')}
                    </span>
                  )}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 space-y-1.5">
                  <p className="flex gap-2"><span>{t('parentDashboard.home.student')}</span> <span className="text-slate-700 dark:text-slate-300 font-medium">{cls.student}</span></p>
                  <p className="flex gap-2"><span>{t('parentDashboard.home.teacher')}</span> <span className="text-slate-700 dark:text-slate-300 font-medium">{cls.teacher}</span></p>
                  <p className="flex items-center gap-1.5 mt-1 text-slate-600 dark:text-slate-400">
                    <Clock size={14} className="shrink-0" />
                    <span>{cls.time}</span>
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto shrink-0 flex flex-col items-center mt-2 md:mt-0">
                {cls.actionType === 'join' ? (
                  <button className="w-full md:w-48 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
                    {t('parentDashboard.home.liveStreamNow')}
                  </button>
                ) : (
                  <div className="flex flex-col items-center w-full md:w-48 space-y-1.5">
                    <button className="w-full py-2.5 border-2 border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-bold transition-colors text-sm">
                      {t('parentDashboard.home.cancelClass')}
                    </button>
                    {cls.timer && (
                      <span className="text-xs text-slate-400 font-medium text-center">
                        {t('parentDashboard.home.availableUntil', { time: cls.timer })}
                      </span>
                    )}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </motion.div>

      {/* Subscription Summary */}
      <motion.div variants={itemVariants} className="space-y-4 pb-10">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {t('parentDashboard.home.subscriptionSummary')}
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div className="w-full lg:w-1/3">
              <div className="w-full max-w-xs space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block">
                  {t('parentDashboard.home.selectStudent')}
                </label>
                <div className="relative">
                  <select
                    value={selectedStudent}
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl p-3 pe-10 focus:outline-none focus:ring-2 focus:ring-[#0f7a6c]/50 transition-shadow cursor-pointer font-medium"
                  >
                    <option value="" disabled>{t('parentDashboard.home.selectStudent')}</option>
                    <option value="c1">{t('parentDashboard.home.children.fatima')}</option>
                    <option value="c2">{t('parentDashboard.home.children.mohamed')}</option>
                  </select>
                  <ChevronDown size={18} className="absolute top-1/2 -translate-y-1/2 end-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">

              <div className="text-center sm:text-start flex-1">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('parentDashboard.home.currentPackage')}</p>
                <p className="font-bold text-lg text-slate-800 dark:text-slate-100">{t('parentDashboard.home.advancedPackage')}</p>
              </div>

              <div className="h-px w-full sm:h-12 sm:w-px bg-slate-200 dark:bg-slate-700 hidden sm:block mx-2" />

              <div className="text-center sm:text-start flex-1">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('parentDashboard.home.totalRemainingClasses')}</p>
                <p className="font-bold text-slate-800 dark:text-slate-100">
                  <span className="text-2xl text-[#0f7a6c] dark:text-emerald-400 me-1">29</span>
                  <span className="text-base">{t('parentDashboard.home.classes')}</span>
                </p>
              </div>

              <div className="w-full sm:w-auto mt-4 sm:mt-0 shrink-0">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
                  {t('parentDashboard.home.renewSubscription')}
                </button>
              </div>

            </div>

          </div>
        </div>
      </motion.div>

      {/* Subscription Renewal Detailed Section */}
      <motion.div variants={itemVariants} className="space-y-6 pt-6 border-t border-slate-100 dark:border-slate-700 pb-10">

        {/* Renewal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-start">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              {t('parentDashboard.childrenDetails.subscriptionRenewal.title')}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t('parentDashboard.childrenDetails.subscriptionRenewal.subtitle')}
            </p>
          </div>

          <button className="w-full sm:w-auto px-6 py-2.5 bg-[#d4a373] hover:bg-[#c39262] text-white rounded-xl font-bold transition-all shadow-sm text-sm flex items-center justify-center gap-2 active:translate-y-0.5">
            <svg className="w-4 h-4 shrink-0 transform -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18v3z" />
            </svg>
            <span>{t('parentDashboard.childrenDetails.subscriptionRenewal.renewCurrentBtn')}</span>
          </button>
        </div>

        {/* Current Package Block */}
        <div className="space-y-3 text-start">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
            {t('parentDashboard.childrenDetails.subscriptionRenewal.currentPackage')}
          </h3>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border-2 border-[#d4a373] dark:border-[#d4a373]/80 flex flex-col-reverse lg:flex-row justify-between items-stretch gap-6">

            {/* Left Side - Price */}
            <div className="flex flex-col items-start justify-center lg:border-e lg:border-slate-200 lg:dark:border-slate-700 lg:pe-6 shrink-0">
              <span className="text-2xl font-extrabold text-[#d4a373] dark:text-[#e5b383] block">
                {t('parentDashboard.childrenDetails.subscriptionRenewal.egpPerMonth', { price: 800 })}
              </span>
            </div>

            {/* Middle - Package details & benefits */}
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {t('parentDashboard.home.advancedPackage')}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                  {t('parentDashboard.childrenDetails.subscriptionRenewal.expiresOn', { date: '13-05-2026' })}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block">
                  {t('parentDashboard.childrenDetails.subscriptionRenewal.benefitsTitle')}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    t('parentDashboard.childrenDetails.subscriptionRenewal.currentBenefits.0'),
                    t('parentDashboard.childrenDetails.subscriptionRenewal.currentBenefits.1'),
                    t('parentDashboard.childrenDetails.subscriptionRenewal.currentBenefits.2'),
                    t('parentDashboard.childrenDetails.subscriptionRenewal.currentBenefits.3')
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 flex items-center justify-center shrink-0">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Remaining Classes */}
            <div className="flex flex-col items-center justify-center lg:border-s lg:border-slate-200 lg:dark:border-slate-700 lg:ps-6 shrink-0">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center min-w-[150px]">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wide">
                  {t('parentDashboard.childrenDetails.subscriptionRenewal.remainingClassesLabel')}
                </span>
                <span className="text-xl font-bold text-[#0f7a6c] dark:text-[#3ab795] mt-0.5">
                  {t('parentDashboard.childrenDetails.subscriptionRenewal.remainingClassesVal', { count: 29 })}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Available Packages Block */}
        <div className="space-y-4 text-start">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
            {t('parentDashboard.childrenDetails.subscriptionRenewal.availablePackages')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Package 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center gap-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900/50 text-[#0f7a6c] dark:text-[#3ab795] flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800 text-xl">
                💎
              </div>
              <div>

                <div className="flex items-baseline justify-center gap-1 mt-2">
                  <span className="text-2xl font-extrabold text-[#0f7a6c] dark:text-[#3ab795]">
                    {t('parentDashboard.childrenDetails.subscriptionRenewal.usdPerMonth', { price: 50 })}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 dark:bg-slate-700" />

              <div className="w-full space-y-2.5 my-2 text-start">
                {[
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.beginners.features.0'),
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.beginners.features.1'),
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.beginners.features.2'),
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.beginners.features.3')
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 flex items-center justify-center shrink-0 text-[10px]">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl font-bold transition-all shadow-sm text-sm active:translate-y-0.5 mt-auto">
                {t('parentDashboard.childrenDetails.subscriptionRenewal.subscribeNow')}
              </button>
            </div>

            {/* Package 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center gap-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900/50 text-[#0f7a6c] dark:text-[#3ab795] flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800 text-xl">
                💎
              </div>
              <div>

                <div className="flex items-baseline justify-center gap-1 mt-2">
                  <span className="text-2xl font-extrabold text-[#0f7a6c] dark:text-[#3ab795]">
                    {t('parentDashboard.childrenDetails.subscriptionRenewal.usdPerMonth', { price: 90 })}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 dark:bg-slate-700" />

              <div className="w-full space-y-2.5 my-2 text-start">
                {[
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.special.features.0'),
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.special.features.1'),
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.special.features.2'),
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.special.features.3')
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 flex items-center justify-center shrink-0 text-[10px]">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl font-bold transition-all shadow-sm text-sm active:translate-y-0.5 mt-auto">
                {t('parentDashboard.childrenDetails.subscriptionRenewal.subscribeNow')}
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center gap-4 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900/50 text-[#0f7a6c] dark:text-[#3ab795] flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800 text-xl">
                💎
              </div>
              <div>

                <div className="flex items-baseline justify-center gap-1 mt-2">
                  <span className="text-2xl font-extrabold text-[#0f7a6c] dark:text-[#3ab795]">
                    {t('parentDashboard.childrenDetails.subscriptionRenewal.usdPerMonth', { price: 130 })}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100 dark:bg-slate-700" />

              <div className="w-full space-y-2.5 my-2 text-start">
                {[
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.elite.features.0'),
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.elite.features.1'),
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.elite.features.2'),
                  t('parentDashboard.childrenDetails.subscriptionRenewal.packages.elite.features.3')
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 flex items-center justify-center shrink-0 text-[10px]">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl font-bold transition-all shadow-sm text-sm active:translate-y-0.5 mt-auto">
                {t('parentDashboard.childrenDetails.subscriptionRenewal.subscribeNow')}
              </button>
            </div>

          </div>
        </div>

        {/* Warning / Important note box */}
        <div className="bg-amber-50/70 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900/20 rounded-2xl p-4 text-start">
          <h4 className="text-sm font-bold text-amber-800 dark:text-amber-400 mb-1">
            {t('parentDashboard.childrenDetails.subscriptionRenewal.importantNoteTitle')}
          </h4>
          <p className="text-xs text-amber-700/90 dark:text-amber-500/90 leading-relaxed font-medium">
            {t('parentDashboard.childrenDetails.subscriptionRenewal.importantNoteText')}
          </p>
        </div>

      </motion.div>

    </motion.div>
  );
}
