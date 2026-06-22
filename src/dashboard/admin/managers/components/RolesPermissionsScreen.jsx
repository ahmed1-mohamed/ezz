import { useState, useMemo } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Plus,
  X,
  Crown,
  Shield,
  Users,
  BookOpen
} from 'lucide-react'

export default function RolesPermissionsScreen({
  roles,
  selectedRole,
  rolesPermissions,
  isRtl,
  t,
  onSelectRole,
  onTogglePermission,
  onSavePermissions,
  onCancel,
  onAddNewRole
}) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft

  // Modal state for adding a role
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false)
  const [newRoleName, setNewRoleName] = useState('')

  // Selected role's active permissions with fallback to all-false for safety
  const activePermissions = useMemo(() => {
    const rolePerms = rolesPermissions[selectedRole] || {}
    return {
      userManagement: rolePerms.userManagement || { viewUsers: false, createUsers: false, editUsers: false, deleteUsers: false },
      groupManagement: rolePerms.groupManagement || { viewGroups: false, createGroups: false, editGroups: false, deleteGroups: false },
      courseManagement: rolePerms.courseManagement || { viewCourses: false, createCourses: false, editCourses: false, deleteCourses: false },
      reportsManagement: rolePerms.reportsManagement || { viewReports: false, createReports: false, editReports: false, deleteReports: false },
      fundsManagement: rolePerms.fundsManagement || { viewFinancials: false, createFinancials: false, editFinancials: false, deleteFinancials: false },
      systemSettings: rolePerms.systemSettings || { viewSettings: false, editSettings: false, manageIntegrations: false, configureSystem: false },
      scheduleSettings: rolePerms.scheduleSettings || { viewSchedule: false, editSchedule: false, manageSchedules: false, configureSchedule: false },
    }
  }, [rolesPermissions, selectedRole])

  // Calculate dynamic stats for the "معاينة نطاق الأذونات" (Preview Scope) box
  const previewStats = useMemo(() => {
    let granted = 0
    const totalOptions = 28 // 7 sections * 4 options each
    
    // Count all active 'true' entries
    Object.keys(activePermissions).forEach(sectionKey => {
      Object.keys(activePermissions[sectionKey]).forEach(optionKey => {
        if (activePermissions[sectionKey][optionKey]) {
          granted++
        }
      })
    })

    const denied = totalOptions - granted
    const accessLevel = Math.round((granted / totalOptions) * 100)

    return { granted, denied, accessLevel }
  }, [activePermissions])

  const handleAddNewRoleSubmit = (e) => {
    e.preventDefault()
    if (!newRoleName.trim()) return
    onAddNewRole(newRoleName.trim())
    setIsAddRoleModalOpen(false)
    setNewRoleName('')
  }

  const renderRoleIcon = (iconName, size = 18) => {
    switch (iconName) {
      case 'crown':
        return <Crown size={size} />
      case 'shield':
        return <Shield size={size} />
      case 'users':
        return <Users size={size} />
      case 'book':
        return <BookOpen size={size} />
      default:
        return <Shield size={size} />
    }
  }

  // Configuration for render categories matching mockup screenshots
  const categories = [
    {
      key: 'userManagement',
      title: t('adminDashboard.managers.permissionsScreen.sections.userManagement', 'إدارة المستخدمين'),
      options: [
        { key: 'viewUsers', label: t('adminDashboard.managers.permissionsScreen.options.viewUsers', 'عرض المستخدمين') },
        { key: 'createUsers', label: t('adminDashboard.managers.permissionsScreen.options.createUsers', 'إنشاء مستخدمين') },
        { key: 'editUsers', label: t('adminDashboard.managers.permissionsScreen.options.editUsers', 'تعديل المستخدمين') },
        { key: 'deleteUsers', label: t('adminDashboard.managers.permissionsScreen.options.deleteUsers', 'حذف المستخدمين') },
      ]
    },
    {
      key: 'groupManagement',
      title: t('adminDashboard.managers.permissionsScreen.sections.groupManagement', 'إدارة المجموعات'),
      options: [
        { key: 'viewGroups', label: t('adminDashboard.managers.permissionsScreen.options.viewGroups', 'عرض مجموعه') },
        { key: 'createGroups', label: t('adminDashboard.managers.permissionsScreen.options.createGroups', 'إنشاء مجموعة') },
        { key: 'editGroups', label: t('adminDashboard.managers.permissionsScreen.options.editGroups', 'تعديل مجموعة') },
        { key: 'deleteGroups', label: t('adminDashboard.managers.permissionsScreen.options.deleteGroups', 'حذف مجموعة') },
      ]
    },
    {
      key: 'courseManagement',
      title: t('adminDashboard.managers.permissionsScreen.sections.courseManagement', 'إدارة الكورسات'),
      options: [
        { key: 'viewCourses', label: t('adminDashboard.managers.permissionsScreen.options.viewCourses', 'عرض الكورس') },
        { key: 'createCourses', label: t('adminDashboard.managers.permissionsScreen.options.createCourses', 'إنشاء كورس') },
        { key: 'editCourses', label: t('adminDashboard.managers.permissionsScreen.options.editCourses', 'تعديل الكورس') },
        { key: 'deleteCourses', label: t('adminDashboard.managers.permissionsScreen.options.deleteCourses', 'حذف الكورس') },
      ]
    },
    {
      key: 'reportsManagement',
      title: t('adminDashboard.managers.permissionsScreen.sections.reportsManagement', 'إدارة التقارير والتحليلات'),
      options: [
        { key: 'viewReports', label: t('adminDashboard.managers.permissionsScreen.options.viewReports', 'عرض التقارير') },
        { key: 'createReports', label: t('adminDashboard.managers.permissionsScreen.options.createReports', 'إنشاء تقارير') },
        { key: 'editReports', label: t('adminDashboard.managers.permissionsScreen.options.editReports', 'تعديل التقارير') },
        { key: 'deleteReports', label: t('adminDashboard.managers.permissionsScreen.options.deleteReports', 'حذف التقارير') },
      ]
    },
    {
      key: 'fundsManagement',
      title: t('adminDashboard.managers.permissionsScreen.sections.fundsManagement', 'إدارة الأموال'),
      options: [
        { key: 'viewFinancials', label: t('adminDashboard.managers.permissionsScreen.options.viewFinancials', 'عرض التقارير الأموال') },
        { key: 'createFinancials', label: t('adminDashboard.managers.permissionsScreen.options.createFinancials', 'إنشاء تقارير الأموال') },
        { key: 'editFinancials', label: t('adminDashboard.managers.permissionsScreen.options.editFinancials', 'تعديل التقارير للأموال') },
        { key: 'deleteFinancials', label: t('adminDashboard.managers.permissionsScreen.options.deleteFinancials', 'حذف التقارير الموال') },
      ]
    },
    {
      key: 'systemSettings',
      title: t('adminDashboard.managers.permissionsScreen.sections.systemSettings', 'إعدادات النظام'),
      options: [
        { key: 'viewSettings', label: t('adminDashboard.managers.permissionsScreen.options.viewSettings', 'عرض الإعدادات') },
        { key: 'editSettings', label: t('adminDashboard.managers.permissionsScreen.options.editSettings', 'تعديل الإعدادات') },
        { key: 'manageIntegrations', label: t('adminDashboard.managers.permissionsScreen.options.manageIntegrations', 'إدارة التكاملات') },
        { key: 'configureSystem', label: t('adminDashboard.managers.permissionsScreen.options.configureSystem', 'تكوين النظام') },
      ]
    },
    {
      key: 'scheduleSettings',
      title: t('adminDashboard.managers.permissionsScreen.sections.scheduleSettings', 'إعدادات الجدول الدراسي'),
      options: [
        { key: 'viewSchedule', label: t('adminDashboard.managers.permissionsScreen.options.viewSchedule', 'عرض الجدول الدراسي') },
        { key: 'editSchedule', label: t('adminDashboard.managers.permissionsScreen.options.editSchedule', 'تعديل الجدول الدراسي') },
        { key: 'manageSchedules', label: t('adminDashboard.managers.permissionsScreen.options.manageSchedules', 'إدارة الجداول الدراسية') },
        { key: 'configureSchedule', label: t('adminDashboard.managers.permissionsScreen.options.configureSchedule', 'تكوين الجدول الدراسي') },
      ]
    }
  ]

  return (
    <div className="space-y-8">
      
      {/* Header Block */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all cursor-pointer hover:scale-105"
            title={t('adminDashboard.managers.permissionsScreen.backToList', 'العودة لقائمة المشرفين')}
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>
                {t('adminDashboard.managers.permissionsScreen.title', { roleName: selectedRole }, `أذونات ${selectedRole}`)}
              </span>
            </h1>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              {t('adminDashboard.managers.permissionsScreen.subtitle', { roleName: selectedRole }, `تكوين ما يمكن لمستخدمي ${selectedRole} الوصول إليه وفعله.`)}
            </p>
          </div>
        </div>
        
        <button
          onClick={onCancel}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold transition-all dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800"
        >
          {t('adminDashboard.managers.permissionsScreen.backToList', 'العودة لقائمة المشرفين')}
        </button>
      </div>

      {/* Two-Column Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Roles Sidebar (Takes 1/4 layout width on desktop) */}
        <div className="w-full lg:w-80 shrink-0 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
          <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">
            {t('adminDashboard.managers.permissionsScreen.rolesTitle', 'الأدوار')}
          </h3>
          
          {/* List of default/loaded roles */}
          <div className="space-y-1.5 mb-6">
            {roles.map((role) => {
              const isActive = selectedRole === role.name
              return (
                <button
                  key={role.id}
                  onClick={() => onSelectRole(role.name)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl w-full text-start transition-all ${
                    isActive
                      ? 'bg-[#e9f6f3] text-brand-700 dark:bg-brand-950/30 dark:text-brand-300 font-semibold border-e-4 border-brand-500 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}>
                      {renderRoleIcon(role.icon, 18)}
                    </div>
                    <span className="text-sm font-medium">{isRtl ? role.name : (role.nameEn || role.name)}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Add Role Button */}
          <button
            onClick={() => setIsAddRoleModalOpen(true)}
            className="w-full py-3 rounded-2xl bg-brand-50 hover:bg-brand-100 dark:bg-brand-950/20 text-brand-700 dark:text-brand-400 text-sm font-bold transition-all text-center flex items-center justify-center gap-2 border border-transparent hover:border-brand-500/20 active:scale-[0.98]"
          >
            <Plus size={16} />
            <span>{t('adminDashboard.managers.permissionsScreen.addNewRole', '+ إضافة دور جديد')}</span>
          </button>
        </div>

        {/* Permissions Lists & Preview scopes (Takes 3/4 layout width on desktop) */}
        <div className="flex-1 w-full space-y-6">
          
          {/* Render category sections cards */}
          {categories.map((cat) => (
            <div key={cat.key} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
              <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3">
                {cat.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {cat.options.map((opt) => {
                  const isActive = !!activePermissions[cat.key]?.[opt.key]
                  return (
                    <div
                      key={opt.key}
                      onClick={() => onTogglePermission(cat.key, opt.key)}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer select-none transition-all duration-200 ${
                        isActive
                          ? 'bg-[#eef4f2] border-brand-500/20 text-brand-700 dark:bg-brand-950/20 dark:text-brand-300 dark:border-brand-500/10 font-bold shadow-sm'
                          : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:border-slate-200 dark:hover:border-slate-700'
                      }`}
                    >
                      <span className="text-sm font-semibold">{opt.label}</span>
                      
                      {/* Checkbox selector */}
                      <div className={`h-5 w-5 rounded flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-brand-500 text-white'
                          : 'border-2 border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                      }`}>
                        {isActive && (
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Card: Permissions Scope Preview (معاينة نطاق الأذونات) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft">
            <h3 className="text-base font-bold text-slate-800 dark:text-white mb-5">
              {isRtl ? 'معاينة نطاق الأذونات' : 'Preview of Permissions Scope'}
            </h3>
            
            {/* Dynamic metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              
              {/* Access Level Card (Blue) */}
              <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/30 text-center">
                <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 mb-1">{previewStats.accessLevel}%</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {isRtl ? 'مستوى الوصول' : 'Access Level'}
                </p>
              </div>

              {/* Denied Permissions Card (Pink) */}
              <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100/50 dark:border-rose-900/30 text-center">
                <p className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 mb-1">{previewStats.denied}</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {isRtl ? 'الأذونات المرفوضة' : 'Denied Permissions'}
                </p>
              </div>

              {/* Granted Permissions Card (Green) */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-[#e9f6f3]/30 border border-emerald-100/50 dark:border-[#d3eee7]/30 text-center">
                <p className="text-3xl font-extrabold text-brand-600 dark:text-brand-400 mb-1">{previewStats.granted}</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {isRtl ? 'الأذونات الممنوحة' : 'Granted Permissions'}
                </p>
              </div>

            </div>

            {/* Warning Alert Banner */}
            <div className="p-4 rounded-2xl bg-[#fffbeb] dark:bg-amber-950/20 border border-[#fef3c7] dark:border-amber-900/30 flex items-start gap-3">
              <span className="text-amber-600 text-lg sm:text-xl font-bold shrink-0">⚠️</span>
              <div className="text-start">
                <p className="text-sm font-bold text-amber-800 dark:text-amber-400">
                  {isRtl ? 'ملاحظة مهمة' : 'Important Note'}
                </p>
                <p className="text-xs text-amber-700/90 dark:text-amber-500/90 mt-1 leading-relaxed">
                  {isRtl
                    ? 'ستؤثر التغييرات في الأذونات على جميع المستخدمين بهذا الدور على الفور. تأكد من المراجعة بعناية قبل الحفظ.'
                    : 'Changes to permissions will affect all users with this role immediately. Make sure to review carefully before saving.'}
                </p>
              </div>
            </div>

          </div>

          {/* Action buttons (Save changes / Cancel) */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => onSavePermissions(selectedRole)}
              className="flex-1 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-2xl transition-all shadow-md shadow-brand-500/10 active:scale-[0.98]"
            >
              {isRtl ? 'حفظ التغييرات' : 'Save Changes'}
            </button>
            <button
              onClick={onCancel}
              className="flex-1 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 active:scale-[0.98]"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
          </div>

        </div>

      </div>

      {/* MODAL: ADD NEW ROLE */}
      {isAddRoleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fadeIn">
          <div className="w-full max-w-md overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 animate-slideUp">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                {t('adminDashboard.managers.permissionsScreen.addNewRoleModalTitle', 'إضافة دور جديد')}
              </h3>
              <button
                onClick={() => setIsAddRoleModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors bg-slate-50 dark:bg-slate-800 rounded-full"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddNewRoleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  {t('adminDashboard.managers.permissionsScreen.roleNameLabel', 'اسم الدور الجديد')}
                </label>
                <input
                  type="text"
                  required
                  value={newRoleName}
                  onChange={(e) => setNewRoleName(e.target.value)}
                  className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500 focus:bg-white text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm"
                  placeholder={isRtl ? 'اسم الدور (مثال: مشرف معلمين)' : "Role Name (e.g. Teachers Supervisor)"}
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddRoleModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all font-semibold text-sm"
                >
                  {t('adminDashboard.managers.permissionsScreen.cancel', 'إلغاء')}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-brand-500 text-white hover:bg-brand-600 transition-all font-semibold text-sm shadow-md shadow-brand-500/10"
                >
                  {t('adminDashboard.managers.permissionsScreen.addRoleSubmit', 'إضافة دور')}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  )
}
