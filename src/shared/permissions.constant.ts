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

  logs: {
    name: { ar: 'إدارة السجلات', en: 'Logs Management' },
    actions: [
      { key: 'logs.read', label: { ar: 'عرض السجلات', en: 'View Logs' } },
    ],
  },

  messages: {
    name: { ar: 'إدارة الرسائل', en: 'Messages Management' },
    actions: [
      { key: 'messages.read', label: { ar: 'عرض الرسائل', en: 'View Messages' } },
      { key: 'messages.delete', label: { ar: 'حذف الرسائل', en: 'Delete Messages' } },
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

  parents: {
    name: { ar: 'إدارة أولياء الأمور', en: 'Parents Management' },
    actions: [
      { key: 'parents.read', label: { ar: 'عرض أولياء الأمور', en: 'View Parents' } },
      { key: 'parents.create', label: { ar: 'إضافة ولي أمر', en: 'Add Parent' } },
      { key: 'parents.update', label: { ar: 'تحديث ولي أمر', en: 'Update Parent' } },
      { key: 'parents.delete', label: { ar: 'حذف ولي أمر', en: 'Delete Parent' } },
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

  statistics: {
    name: { ar: 'إدارة الإحصائيات', en: 'Statistics Management' },
    actions: [
      { key: 'statistics.read', label: { ar: 'عرض الإحصائيات', en: 'View Statistics' } },
      { key: 'statistics.update', label: { ar: 'تحديث الإحصائيات', en: 'Update Statistics' } },
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

  students: {
    name: { ar: 'إدارة الطلاب', en: 'Students Management' },
    actions: [
      { key: 'students.read', label: { ar: 'عرض الطلاب', en: 'View Students' } },
      { key: 'students.create', label: { ar: 'إضافة طالب', en: 'Add Student' } },
      { key: 'students.update', label: { ar: 'تحديث طالب', en: 'Update Student' } },
      { key: 'students.delete', label: { ar: 'حذف طالب', en: 'Delete Student' } },
    ],
  },

  teachers: {
    name: { ar: 'إدارة المعلمين', en: 'Teachers Management' },
    actions: [
      { key: 'teachers.read', label: { ar: 'عرض المعلمين', en: 'View Teachers' } },
      { key: 'teachers.create', label: { ar: 'إضافة معلم', en: 'Add Teacher' } },
      { key: 'teachers.update', label: { ar: 'تحديث معلم', en: 'Update Teacher' } },
      { key: 'teachers.delete', label: { ar: 'حذف معلم', en: 'Delete Teacher' } },
    ],
  },

  testimonials: {
    name: { ar: 'إدارة الشهادات', en: 'Testimonials Management' },
    actions: [
      { key: 'testimonials.read', label: { ar: 'عرض الشهادات', en: 'View Testimonials' } },
      { key: 'testimonials.create', label: { ar: 'إضافة شهادة', en: 'Add Testimonial' } },
      { key: 'testimonials.update', label: { ar: 'تحديث شهادة', en: 'Update Testimonial' } },
      { key: 'testimonials.delete', label: { ar: 'حذف شهادة', en: 'Delete Testimonial' } },
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

  coupons: {
    name: { ar: 'إدارة كوبونات الخصم', en: 'Discount Coupons Management' },
    actions: [
      { key: 'coupons.read', label: { ar: 'عرض كوبونات الخصم', en: 'View Discount Coupons' } },
      { key: 'coupons.create', label: { ar: 'إضافة كوبون خصم', en: 'Add Discount Coupon' } },
      { key: 'coupons.delete', label: { ar: 'حذف كوبون خصم', en: 'Delete Discount Coupon' } },
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

  curricula: {
    name: { ar: 'إدارة المناهج الدراسية', en: 'Educational Curricula Management' },
    actions: [
      { key: 'curricula.read', label: { ar: 'عرض المناهج', en: 'View Curricula' } },
      { key: 'curricula.create', label: { ar: 'إضافة منهج', en: 'Add Curriculum' } },
      { key: 'curricula.update', label: { ar: 'تحديث منهج', en: 'Update Curriculum' } },
      { key: 'curricula.delete', label: { ar: 'حذف منهج', en: 'Delete Curriculum' } },
    ],
  },
};
