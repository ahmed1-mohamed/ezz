export interface PermissionActionDefinition {
  key: string;
  label: {
    ar: string;
    en: string;
  };
}

export interface PermissionGroupDefinition {
  name: {
    ar: string;
    en: string;
  };
  actions: PermissionActionDefinition[];
}

export const PERMISSIONS_LIST: Record<string, PermissionGroupDefinition> = {
  teachers: {
    name: { ar: 'إدارة المعلمين', en: 'Teachers Management' },
    actions: [
      { key: 'teachers.read', label: { ar: 'عرض المعلمين', en: 'View Teachers' } },
      { key: 'teachers.create', label: { ar: 'إضافة معلم', en: 'Add Teacher' } },
      { key: 'teachers.update', label: { ar: 'تحديث معلم', en: 'Update Teacher' } },
      { key: 'teachers.update_profit', label: { ar: 'تحديث أجر ساعة المعلم', en: 'Update Teacher Hourly Rate' } },
      { key: 'teachers.add_certificate', label: { ar: 'إضافة شهادة معلم', en: 'Add Teacher Certificate' } },
      { key: 'teachers.update_certificate', label: { ar: 'تحديث شهادة معلم', en: 'Update Teacher Certificate' } },
      { key: 'teachers.delete_certificate', label: { ar: 'حذف شهادة معلم', en: 'Delete Teacher Certificate' } },
      { key: 'teachers.delete', label: { ar: 'حذف معلم', en: 'Delete Teacher' } },
    ],
  },

  parents: {
    name: { ar: 'إدارة أولياء الأمور', en: 'Parents Management' },
    actions: [
      { key: 'parents.read', label: { ar: 'عرض أولياء الأمور', en: 'View Parents' } },
      { key: 'parents.create', label: { ar: 'إضافة ولي أمر', en: 'Add Parent' } },
      { key: 'parents.update', label: { ar: 'تحديث ولي أمر', en: 'Update Parent' } },
      { key: 'parents.delete', label: { ar: 'حذف ولي أمر', en: 'Delete Parent' } },
    ],
  },

  students: {
    name: { ar: 'إدارة الطلاب', en: 'Students Management' },
    actions: [
      { key: 'students.read', label: { ar: 'عرض الطلاب', en: 'View Students' } },
      { key: 'students.create', label: { ar: 'إضافة طالب', en: 'Add Student' } },
      { key: 'students.update', label: { ar: 'تحديث طالب', en: 'Update Student' } },
      { key: 'students.delete', label: { ar: 'حذف طالب', en: 'Delete Student' } },
    ],
  },

  studentLevels: {
    name: { ar: 'إدارة مستويات الطلاب', en: 'Student Levels Management' },
    actions: [
      { key: 'student_levels.read', label: { ar: 'عرض مستويات الطلاب', en: 'View Student Levels' } },
      { key: 'student_levels.create', label: { ar: 'إضافة مستوى طالب', en: 'Add Student Level' } },
      { key: 'student_levels.update', label: { ar: 'تحديث مستوى طالب', en: 'Update Student Level' } },
      { key: 'student_levels.delete', label: { ar: 'حذف مستوى طالب', en: 'Delete Student Level' } },
    ],
  },

  explanationLanguages: {
    name: { ar: 'إدارة لغات الشرح', en: 'Explanation Languages Management' },
    actions: [
      { key: 'explanation_languages.read', label: { ar: 'عرض لغات الشرح', en: 'View Explanation Languages' } },
      { key: 'explanation_languages.create', label: { ar: 'إضافة لغة شرح', en: 'Add Explanation Language' } },
      { key: 'explanation_languages.update', label: { ar: 'تحديث لغة شرح', en: 'Update Explanation Language' } },
      { key: 'explanation_languages.delete', label: { ar: 'حذف لغة شرح', en: 'Delete Explanation Language' } },
    ],
  },

  groups: {
    name: { ar: 'إدارة المجموعات الدراسية', en: 'Study Groups Management' },
    actions: [
      { key: 'groups.read', label: { ar: 'عرض المجموعات الدراسية', en: 'View Study Groups' } },
      { key: 'groups.create', label: { ar: 'إضافة مجموعة دراسية', en: 'Add Study Group' } },
      { key: 'groups.update', label: { ar: 'تحديث مجموعة دراسية', en: 'Update Study Group' } },
      { key: 'groups.delete', label: { ar: 'حذف مجموعة دراسية', en: 'Delete Study Group' } },
      { key: 'groups.update_schedule', label: { ar: 'تعديل الجدول الدراسي', en: 'Update Weekly Schedule' } },
      { key: 'groups.change_teacher', label: { ar: 'تغيير معلم المجموعة', en: 'Change Group Teacher' } },
      { key: 'groups.manage_students', label: { ar: 'إدارة طلاب المجموعة', en: 'Manage Group Students' } },
      { key: 'groups.change_status', label: { ar: 'تعديل حالة المجموعة', en: 'Change Group Status' } },
    ],
  },

  sessions: {
    name: { ar: 'إدارة الحصص الدراسية', en: 'Academic Sessions Management' },
    actions: [
      { key: 'sessions.read', label: { ar: 'عرض جدول الحصص الدراسية', en: 'View Academic Sessions' } },
      { key: 'sessions.create_extra', label: { ar: 'إضافة حصة تعويضية أو إضافية', en: 'Create Extra/Makeup Session' } },
      { key: 'sessions.reschedule', label: { ar: 'إعادة جدولة موعد حصة', en: 'Reschedule Session' } },
      { key: 'sessions.cancel', label: { ar: 'إلغاء حصة دراسية', en: 'Cancel Session' } },
      { key: 'sessions.manage_attendance', label: { ar: 'إدارة كشف الحضور والغياب', en: 'Manage Session Attendance' } },
      { key: 'sessions.update_topic', label: { ar: 'تحديث عنوان وموضوع الحصة', en: 'Update Session Topic' } },
    ],
  },

  timetable: {
    name: { ar: 'إدارة الجدول الدراسي', en: 'Academic Timetable Management' },
    actions: [
      { key: 'timetable.read', label: { ar: 'عرض الجدول الدراسي', en: 'View Academic Timetable' } },
    ],
  },

  curricula: {
    name: { ar: 'إدارة المناهج الدراسية', en: 'Educational Curricula Management' },
    actions: [
      { key: 'curricula.read', label: { ar: 'عرض المناهج', en: 'View Curricula' } },
      { key: 'curricula.create', label: { ar: 'إضافة منهج', en: 'Add Curriculum' } },
      { key: 'curricula.update', label: { ar: 'تحديث منهج', en: 'Update Curriculum' } },
      { key: 'curricula.delete', label: { ar: 'حذف منهج', en: 'Delete Curriculum' } },
    ],
  },

  packagesFaqs: {
    name: { ar: 'إدارة الباقات والأسئلة الشائعة', en: 'Packages and FAQs Management' },
    actions: [
      { key: 'packages_faqs.read', label: { ar: 'عرض الباقات والأسئلة الشائعة', en: 'View Packages and FAQs' } },
    ],
  },

  packages: {
    name: { ar: 'إدارة الباقات', en: 'Packages Management' },
    actions: [
      { key: 'packages.read', label: { ar: 'عرض الباقات', en: 'View Packages' } },
      { key: 'packages.create', label: { ar: 'إضافة باقة', en: 'Add Package' } },
      { key: 'packages.update', label: { ar: 'تحديث باقة', en: 'Update Package' } },
      { key: 'packages.delete', label: { ar: 'حذف باقة', en: 'Delete Package' } },
    ],
  },

  faqs: {
    name: { ar: 'إدارة الأسئلة الشائعة', en: 'FAQs Management' },
    actions: [
      { key: 'faqs.read', label: { ar: 'عرض الأسئلة الشائعة', en: 'View FAQs' } },
      { key: 'faqs.create', label: { ar: 'إضافة سؤال شائع', en: 'Add FAQ' } },
      { key: 'faqs.update', label: { ar: 'تحديث سؤال شائع', en: 'Update FAQ' } },
      { key: 'faqs.delete', label: { ar: 'حذف سؤال شائع', en: 'Delete FAQ' } },
    ],
  },

  rewardsSuggestions: {
    name: { ar: 'إدارة المكافآت والمقترحات', en: 'Rewards & Suggestions Management' },
    actions: [
      { key: 'rewards_suggestions.read', label: { ar: 'عرض المكافآت والمقترحات', en: 'View Rewards & Suggestions' } },
    ],
  },

  rewards: {
    name: { ar: 'إدارة المكافآت', en: 'Rewards Management' },
    actions: [
      { key: 'rewards.read', label: { ar: 'عرض المكافآت', en: 'View Rewards' } },
      { key: 'rewards.create', label: { ar: 'إضافة مكافأة', en: 'Add Reward' } },
      { key: 'rewards.update', label: { ar: 'تحديث مكافأة', en: 'Update Reward' } },
      { key: 'rewards.delete', label: { ar: 'حذف مكافأة', en: 'Delete Reward' } },
    ],
  },

  suggestedRewards: {
    name: { ar: 'إدارة المكافآت المقترحة', en: 'Suggested Rewards Management' },
    actions: [
      { key: 'suggested_rewards.read', label: { ar: 'عرض المكافآت المقترحة', en: 'View Suggested Rewards' } },
      { key: 'suggested_rewards.delete', label: { ar: 'حذف مكافأة مقترحة', en: 'Delete Suggested Reward' } },
      { key: 'suggested_rewards.accept', label: { ar: 'قبول مكافأة مقترحة', en: 'Accept Suggested Reward' } },
      { key: 'suggested_rewards.reject', label: { ar: 'رفض مكافأة مقترحة', en: 'Reject Suggested Reward' } },
    ],
  },

  coupons: {
    name: { ar: 'إدارة كوبونات الخصم', en: 'Discount Coupons Management' },
    actions: [
      { key: 'coupons.read', label: { ar: 'عرض كوبونات الخصم', en: 'View Discount Coupons' } },
      { key: 'coupons.create', label: { ar: 'إضافة كوبون خصم', en: 'Add Discount Coupon' } },
      { key: 'coupons.delete', label: { ar: 'حذف كوبون خصم', en: 'Delete Discount Coupon' } },
    ],
  },

  messages: {
    name: { ar: 'إدارة الرسائل', en: 'Messages Management' },
    actions: [
      { key: 'messages.read', label: { ar: 'عرض الرسائل', en: 'View Messages' } },
      { key: 'messages.delete', label: { ar: 'حذف الرسائل', en: 'Delete Messages' } },
    ],
  },

  complaintsSuggestions: {
    name: { ar: 'إدارة الشكاوى والمقترحات', en: 'Complaints & Suggestions Management' },
    actions: [
      { key: 'complaints_suggestions.read', label: { ar: 'عرض الشكاوى والمقترحات', en: 'View Complaints & Suggestions' } },
      { key: 'complaints_suggestions.update', label: { ar: 'الرد وتحديث حالة الشكاوى والمقترحات', en: 'Update & Respond to Complaints/Suggestions' } },
      { key: 'complaints_suggestions.delete', label: { ar: 'حذف الشكاوى والمقترحات', en: 'Delete Complaints & Suggestions' } },
    ],
  },

  logs: {
    name: { ar: 'إدارة السجلات', en: 'Logs Management' },
    actions: [
      { key: 'logs.read', label: { ar: 'عرض السجلات', en: 'View Logs' } },
    ],
  },

  contactUs: {
    name: { ar: 'إدارة تواصل معنا', en: 'Contact Us Management' },
    actions: [
      { key: 'contact_us.read', label: { ar: 'عرض رسائل تواصل معنا', en: 'View Contact Us Messages' } },
      { key: 'contact_us.update', label: { ar: 'تحديث رسائل تواصل معنا', en: 'Update Contact Us Messages' } },
    ],
  },

  eliteTeachers: {
    name: { ar: 'إدارة نخبة المعلمين', en: 'Elite Teachers Management' },
    actions: [
      { key: 'elite_teachers.read', label: { ar: 'عرض نخبة المعلمين', en: 'View Elite Teachers' } },
      { key: 'elite_teachers.create', label: { ar: 'إضافة معلم مميز', en: 'Add Elite Teacher' } },
      { key: 'elite_teachers.update', label: { ar: 'تحديث معلم مميز', en: 'Update Elite Teacher' } },
      { key: 'elite_teachers.delete', label: { ar: 'حذف معلم مميز', en: 'Delete Elite Teacher' } },
    ],
  },

  featuredStudents: {
    name: { ar: 'إدارة الطلبة المتميزين', en: 'Featured Students Management' },
    actions: [
      { key: 'featured_students.read', label: { ar: 'عرض الطلبة المتميزين', en: 'View Featured Students' } },
      { key: 'featured_students.create', label: { ar: 'إضافة طالب متميز', en: 'Add Featured Student' } },
      { key: 'featured_students.update', label: { ar: 'تحديث طالب متميز', en: 'Update Featured Student' } },
      { key: 'featured_students.delete', label: { ar: 'حذف طالب متميز', en: 'Delete Featured Student' } },
    ],
  },

  testimonials: {
    name: { ar: 'إدارة آراء ولي الأمر', en: 'Parent Reviews Management' },
    actions: [
      { key: 'testimonials.read', label: { ar: 'عرض آراء أولياء الأمور', en: 'View Parent Reviews' } },
      { key: 'testimonials.create', label: { ar: 'إضافة رأي ولي أمر', en: 'Add Parent Review' } },
      { key: 'testimonials.update', label: { ar: 'تحديث رأي ولي أمر', en: 'Update Parent Review' } },
      { key: 'testimonials.delete', label: { ar: 'حذف رأي ولي أمر', en: 'Delete Parent Review' } },
    ],
  },

  statistics: {
    name: { ar: 'إدارة الإحصائيات', en: 'Statistics Management' },
    actions: [
      { key: 'statistics.read', label: { ar: 'عرض الإحصائيات', en: 'View Statistics' } },
      { key: 'statistics.update', label: { ar: 'تحديث الإحصائيات', en: 'Update Statistics' } },
    ],
  },

  users: {
    name: { ar: 'إدارة المستخدمين', en: 'Users Management' },
    actions: [
      { key: 'users.read', label: { ar: 'عرض المستخدمين', en: 'View Users' } },
      { key: 'users.create', label: { ar: 'إضافة مستخدم', en: 'Add User' } },
      { key: 'users.update', label: { ar: 'تحديث مستخدم', en: 'Update User' } },
      { key: 'users.delete', label: { ar: 'حذف مستخدم', en: 'Delete User' } },
      { key: 'users.change_password', label: { ar: 'تغيير كلمة مرور المستخدم', en: 'Change User Password' } },
    ],
  },
};
