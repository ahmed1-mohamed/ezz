export const SYSTEM_PERMISSIONS = [
  {
    module: 'teachers',
    titleAr: 'إدارة المعلمين',
    titleEn: 'Teachers Management',
    actions: [
      {
        key: 'READ_TEACHERS',
        labelAr: 'عرض المعلمين',
        labelEn: 'View Teachers',
        aliases: ['teachers.read']
      },
      {
        key: 'WRITE_TEACHERS',
        labelAr: 'إدارة وتعديل المعلمين',
        labelEn: 'Manage Teachers',
        aliases: [
          'teachers.create',
          'teachers.update',
          'teachers.delete',
          'teachers.update_profit',
          'teachers.add_certificate',
          'teachers.update_certificate',
          'teachers.delete_certificate',
          'teachers.write'
        ]
      }
    ]
  },
  {
    module: 'curricula',
    titleAr: 'إدارة المناهج الدراسية',
    titleEn: 'Curricula Management',
    actions: [
      {
        key: 'READ_CURRICULA',
        labelAr: 'عرض المناهج الدراسية',
        labelEn: 'View Curricula',
        aliases: ['curricula.read', 'curriculums.read']
      },
      {
        key: 'WRITE_CURRICULA',
        labelAr: 'إدارة وتعديل المناهج',
        labelEn: 'Manage Curricula',
        aliases: [
          'curricula.create',
          'curricula.update',
          'curricula.delete',
          'curricula.write',
          'curriculums.create',
          'curriculums.update',
          'curriculums.delete'
        ]
      }
    ]
  },
  {
    module: 'students',
    titleAr: 'إدارة الطلاب',
    titleEn: 'Students Management',
    actions: [
      {
        key: 'READ_STUDENTS',
        labelAr: 'عرض الطلاب',
        labelEn: 'View Students',
        aliases: ['students.read']
      },
      {
        key: 'WRITE_STUDENTS',
        labelAr: 'إدارة وتعديل الطلاب',
        labelEn: 'Manage Students',
        aliases: ['students.create', 'students.update', 'students.delete', 'students.write']
      }
    ]
  },
  {
    module: 'studentLevels',
    titleAr: 'إدارة مستويات الطلاب',
    titleEn: 'Student Levels Management',
    actions: [
      {
        key: 'READ_STUDENT_LEVELS',
        labelAr: 'عرض مستويات الطلاب',
        labelEn: 'View Student Levels',
        aliases: ['student_levels.read']
      },
      {
        key: 'WRITE_STUDENT_LEVELS',
        labelAr: 'إدارة وتعديل مستويات الطلاب',
        labelEn: 'Manage Student Levels',
        aliases: ['student_levels.create', 'student_levels.update', 'student_levels.delete', 'student_levels.write']
      }
    ]
  },
  {
    module: 'parents',
    titleAr: 'إدارة أولياء الأمور',
    titleEn: 'Parents Management',
    actions: [
      {
        key: 'READ_PARENTS',
        labelAr: 'عرض أولياء الأمور',
        labelEn: 'View Parents',
        aliases: ['parents.read']
      },
      {
        key: 'WRITE_PARENTS',
        labelAr: 'إدارة وتعديل أولياء الأمور',
        labelEn: 'Manage Parents',
        aliases: ['parents.create', 'parents.update', 'parents.delete', 'parents.write']
      }
    ]
  },
  {
    module: 'explanationLanguages',
    titleAr: 'إدارة لغات الشرح',
    titleEn: 'Explanation Languages Management',
    actions: [
      {
        key: 'READ_EXPLANATION_LANGUAGES',
        labelAr: 'عرض لغات الشرح',
        labelEn: 'View Explanation Languages',
        aliases: ['explanation_languages.read']
      },
      {
        key: 'WRITE_EXPLANATION_LANGUAGES',
        labelAr: 'إدارة وتعديل لغات الشرح',
        labelEn: 'Manage Explanation Languages',
        aliases: ['explanation_languages.create', 'explanation_languages.update', 'explanation_languages.delete', 'explanation_languages.write']
      }
    ]
  },
  {
    module: 'groups',
    titleAr: 'إدارة المجموعات الدراسية',
    titleEn: 'Study Groups Management',
    actions: [
      {
        key: 'READ_GROUPS',
        labelAr: 'عرض المجموعات الدراسية',
        labelEn: 'View Study Groups',
        aliases: ['groups.read']
      },
      {
        key: 'WRITE_GROUPS',
        labelAr: 'إدارة وتعديل المجموعات',
        labelEn: 'Manage Groups',
        aliases: [
          'groups.create',
          'groups.update',
          'groups.delete',
          'groups.update_schedule',
          'groups.change_teacher',
          'groups.manage_students',
          'groups.change_status',
          'groups.write'
        ]
      }
    ]
  },
  {
    module: 'sessions',
    titleAr: 'إدارة الحصص الدراسية',
    titleEn: 'Sessions Management',
    actions: [
      {
        key: 'READ_SESSIONS',
        labelAr: 'عرض جدول الحصص الدراسية',
        labelEn: 'View Sessions',
        aliases: ['sessions.read']
      },
      {
        key: 'WRITE_SESSIONS',
        labelAr: 'إدارة وجدولة الحصص الدراسية',
        labelEn: 'Manage Sessions',
        aliases: [
          'sessions.create_extra',
          'sessions.reschedule',
          'sessions.cancel',
          'sessions.manage_attendance',
          'sessions.update_topic',
          'sessions.write'
        ]
      }
    ]
  },
  {
    module: 'timetable',
    titleAr: 'إدارة الجدول الدراسي',
    titleEn: 'Timetable Management',
    actions: [
      {
        key: 'READ_TIMETABLE',
        labelAr: 'عرض الجدول الدراسي',
        labelEn: 'View Timetable',
        aliases: ['timetable.read']
      },
      {
        key: 'WRITE_TIMETABLE',
        labelAr: 'تعديل الجدول الدراسي',
        labelEn: 'Manage Timetable',
        aliases: ['timetable.write', 'timetable.update']
      }
    ]
  },
  {
    module: 'packages',
    titleAr: 'إدارة الباقات والأسئلة الشائعة',
    titleEn: 'Packages & FAQs Management',
    actions: [
      {
        key: 'READ_PACKAGES',
        labelAr: 'عرض الباقات والأسئلة الشائعة',
        labelEn: 'View Packages & FAQs',
        aliases: ['packages.read', 'packages_faqs.read', 'faqs.read']
      },
      {
        key: 'WRITE_PACKAGES',
        labelAr: 'إدارة وتعديل الباقات والأسئلة',
        labelEn: 'Manage Packages & FAQs',
        aliases: [
          'packages.create',
          'packages.update',
          'packages.delete',
          'packages.write',
          'faqs.create',
          'faqs.update',
          'faqs.delete'
        ]
      }
    ]
  },
  {
    module: 'coupons',
    titleAr: 'إدارة كوبونات الخصم',
    titleEn: 'Coupons Management',
    actions: [
      {
        key: 'READ_COUPONS',
        labelAr: 'عرض كوبونات الخصم',
        labelEn: 'View Discount Coupons',
        aliases: ['coupons.read']
      },
      {
        key: 'WRITE_COUPONS',
        labelAr: 'إدارة وتعديل كوبونات الخصم',
        labelEn: 'Manage Discount Coupons',
        aliases: ['coupons.create', 'coupons.delete', 'coupons.write']
      }
    ]
  },
  {
    module: 'rewards',
    titleAr: 'إدارة المكافآت والمقترحات',
    titleEn: 'Rewards & Suggestions Management',
    actions: [
      {
        key: 'READ_REWARDS',
        labelAr: 'عرض المكافآت والمقترحات',
        labelEn: 'View Rewards & Suggestions',
        aliases: ['rewards.read', 'rewards_suggestions.read', 'suggested_rewards.read']
      },
      {
        key: 'WRITE_REWARDS',
        labelAr: 'إدارة وتعديل المكافآت والمقترحات',
        labelEn: 'Manage Rewards & Suggestions',
        aliases: [
          'rewards.create',
          'rewards.update',
          'rewards.delete',
          'rewards.write',
          'suggested_rewards.delete',
          'suggested_rewards.accept',
          'suggested_rewards.reject'
        ]
      }
    ]
  },
  {
    module: 'messages',
    titleAr: 'إدارة الرسائل',
    titleEn: 'Messages Management',
    actions: [
      {
        key: 'READ_MESSAGES',
        labelAr: 'عرض الرسائل',
        labelEn: 'View Messages',
        aliases: ['messages.read']
      },
      {
        key: 'WRITE_MESSAGES',
        labelAr: 'إدارة وحذف الرسائل',
        labelEn: 'Manage Messages',
        aliases: ['messages.delete', 'messages.write']
      }
    ]
  },
  {
    module: 'complaints',
    titleAr: 'إدارة الشكاوى والمقترحات',
    titleEn: 'Complaints & Suggestions Management',
    actions: [
      {
        key: 'READ_COMPLAINTS',
        labelAr: 'عرض الشكاوى والمقترحات',
        labelEn: 'View Complaints & Suggestions',
        aliases: ['complaints_suggestions.read', 'complaints.read']
      },
      {
        key: 'WRITE_COMPLAINTS',
        labelAr: 'إدارة والرد على الشكاوى',
        labelEn: 'Manage Complaints & Suggestions',
        aliases: [
          'complaints_suggestions.update',
          'complaints_suggestions.delete',
          'complaints_suggestions.write',
          'complaints.update'
        ]
      }
    ]
  },
  {
    module: 'logs',
    titleAr: 'سجلات النظام والأنشطة',
    titleEn: 'System Logs & Activity',
    actions: [
      {
        key: 'READ_LOGS',
        labelAr: 'عرض سجلات النظام',
        labelEn: 'View System Logs',
        aliases: ['logs.read']
      },
      {
        key: 'WRITE_LOGS',
        labelAr: 'إدارة سجلات النظام',
        labelEn: 'Manage Logs',
        aliases: ['logs.write']
      }
    ]
  },
  {
    module: 'users',
    titleAr: 'إدارة المشرفين والمستخدمين',
    titleEn: 'Supervisors & Users Management',
    actions: [
      {
        key: 'READ_USERS',
        labelAr: 'عرض المشرفين وإدارة الصلاحيات',
        labelEn: 'View Supervisors & Roles',
        aliases: ['users.read', 'admins.read', 'managers.read']
      },
      {
        key: 'WRITE_USERS',
        labelAr: 'إضافة وتعديل المشرفين والصلاحيات',
        labelEn: 'Manage Supervisors & Roles',
        aliases: [
          'users.create',
          'users.update',
          'users.delete',
          'users.change_password',
          'users.write',
          'admins.create',
          'admins.update',
          'admins.delete',
          'managers.create',
          'managers.update',
          'managers.delete'
        ]
      }
    ]
  },
  {
    module: 'website',
    titleAr: 'إدارة محتوى الموقع التعريفي',
    titleEn: 'Landing Website Management',
    actions: [
      {
        key: 'READ_WEBSITE',
        labelAr: 'عرض محتوى الموقع التعريفي',
        labelEn: 'View Website Content',
        aliases: [
          'contact_us.read',
          'elite_teachers.read',
          'featured_students.read',
          'statistics.read',
          'testimonials.read',
          'website.read'
        ]
      },
      {
        key: 'WRITE_WEBSITE',
        labelAr: 'تعديل وإدارة محتوى الموقع',
        labelEn: 'Manage Website Content',
        aliases: [
          'contact_us.update',
          'elite_teachers.create',
          'elite_teachers.update',
          'elite_teachers.delete',
          'featured_students.create',
          'featured_students.update',
          'featured_students.delete',
          'statistics.update',
          'testimonials.create',
          'testimonials.update',
          'testimonials.delete',
          'website.write'
        ]
      }
    ]
  },
  {
    module: 'reports',
    titleAr: 'التقارير والإحصائيات',
    titleEn: 'Reports & Statistics',
    actions: [
      {
        key: 'READ_REPORTS',
        labelAr: 'عرض التقارير والإحصائيات',
        labelEn: 'View Reports & Statistics',
        aliases: ['reports.read']
      },
      {
        key: 'WRITE_REPORTS',
        labelAr: 'إدارة وتصدير التقارير',
        labelEn: 'Manage & Export Reports',
        aliases: ['reports.write']
      }
    ]
  },
  {
    module: 'earnings',
    titleAr: 'الأرباح والمالية',
    titleEn: 'Earnings & Finance',
    actions: [
      {
        key: 'READ_EARNINGS',
        labelAr: 'عرض الأرباح والمالية',
        labelEn: 'View Financial Earnings',
        aliases: ['earnings.read']
      },
      {
        key: 'WRITE_EARNINGS',
        labelAr: 'إدارة الحسابات المالية',
        labelEn: 'Manage Finance',
        aliases: ['earnings.write']
      }
    ]
  },
  {
    module: 'payments',
    titleAr: 'المدفوعات والاشتراكات',
    titleEn: 'Payments & Subscriptions',
    actions: [
      {
        key: 'READ_PAYMENTS',
        labelAr: 'عرض عمليات الدفع والاشتراكات',
        labelEn: 'View Payments',
        aliases: ['payments.read']
      },
      {
        key: 'WRITE_PAYMENTS',
        labelAr: 'تأكيد وإدارة عمليات الدفع',
        labelEn: 'Manage Payments',
        aliases: ['payments.write']
      }
    ]
  }
];
