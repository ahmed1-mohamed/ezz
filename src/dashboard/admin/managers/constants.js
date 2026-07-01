export const SYSTEM_PERMISSIONS = [
  {
    module: 'website_management',
    titleEn: 'Website Management',
    titleAr: 'إدارة الموقع',
    actions: [
      { key: 'contact_us.read', labelEn: 'View Contact Us Messages', labelAr: 'عرض رسائل تواصل معنا' },
      { key: 'contact_us.update', labelEn: 'Update Contact Us Messages', labelAr: 'تحديث رسائل تواصل معنا' },
      { key: 'elite_teachers.read', labelEn: 'View Elite Teachers', labelAr: 'عرض نخبة المعلمين' },
      { key: 'elite_teachers.create', labelEn: 'Create Elite Teacher', labelAr: 'إضافة معلم مميز' },
      { key: 'elite_teachers.update', labelEn: 'Update Elite Teacher', labelAr: 'تحديث معلم مميز' },
      { key: 'elite_teachers.delete', labelEn: 'Delete Elite Teacher', labelAr: 'حذف معلم مميز' },
    ]
  },
  {
    module: 'managers_management',
    titleEn: 'Managers Management',
    titleAr: 'إدارة المشرفين',
    actions: [
      { key: 'managers.read', labelEn: 'View Managers', labelAr: 'عرض المشرفين' },
      { key: 'managers.create', labelEn: 'Create Manager', labelAr: 'إضافة مشرف' },
      { key: 'managers.update', labelEn: 'Update Manager', labelAr: 'تحديث مشرف' },
      { key: 'managers.delete', labelEn: 'Delete Manager', labelAr: 'حذف مشرف' },
    ]
  },
  {
    module: 'students_management',
    titleEn: 'Students Management',
    titleAr: 'إدارة الطلاب',
    actions: [
      { key: 'students.read', labelEn: 'View Students', labelAr: 'عرض الطلاب' },
      { key: 'students.create', labelEn: 'Create Student', labelAr: 'إضافة طالب' },
      { key: 'students.update', labelEn: 'Update Student', labelAr: 'تحديث طالب' },
      { key: 'students.delete', labelEn: 'Delete Student', labelAr: 'حذف طالب' },
    ]
  },
  {
    module: 'teachers_management',
    titleEn: 'Teachers Management',
    titleAr: 'إدارة المعلمين',
    actions: [
      { key: 'teachers.read', labelEn: 'View Teachers', labelAr: 'عرض المعلمين' },
      { key: 'teachers.create', labelEn: 'Create Teacher', labelAr: 'إضافة معلم' },
      { key: 'teachers.update', labelEn: 'Update Teacher', labelAr: 'تحديث معلم' },
      { key: 'teachers.delete', labelEn: 'Delete Teacher', labelAr: 'حذف معلم' },
    ]
  },
  {
    module: 'settings_management',
    titleEn: 'Settings Management',
    titleAr: 'إدارة الإعدادات',
    actions: [
      { key: 'settings.read', labelEn: 'View Settings', labelAr: 'عرض الإعدادات' },
      { key: 'settings.update', labelEn: 'Update Settings', labelAr: 'تحديث الإعدادات' },
    ]
  }
];
