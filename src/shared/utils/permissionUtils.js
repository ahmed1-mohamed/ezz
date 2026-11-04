export const PERMISSION_MAPPINGS = {
  // Teachers
  READ_TEACHERS: ['teachers.read'],
  WRITE_TEACHERS: [
    'teachers.read',
    'teachers.create',
    'teachers.update',
    'teachers.delete',
    'teachers.update_profit',
    'teachers.add_certificate',
    'teachers.update_certificate',
    'teachers.delete_certificate',
    'teachers.payouts',
    'teachers.write'
  ],

  // Curricula
  READ_CURRICULA: ['curricula.read', 'curriculums.read'],
  WRITE_CURRICULA: [
    'curricula.read',
    'curricula.create',
    'curricula.update',
    'curricula.delete',
    'curricula.write',
    'curriculums.read',
    'curriculums.create',
    'curriculums.update',
    'curriculums.delete'
  ],

  // Students
  READ_STUDENTS: ['students.read'],
  WRITE_STUDENTS: ['students.read', 'students.create', 'students.update', 'students.delete', 'students.write'],

  // Student Levels
  READ_STUDENT_LEVELS: ['student_levels.read'],
  WRITE_STUDENT_LEVELS: ['student_levels.read', 'student_levels.create', 'student_levels.update', 'student_levels.delete', 'student_levels.write'],

  // Parents
  READ_PARENTS: ['parents.read'],
  WRITE_PARENTS: ['parents.read', 'parents.create', 'parents.update', 'parents.delete', 'parents.write'],

  // Explanation Languages
  READ_EXPLANATION_LANGUAGES: ['explanation_languages.read'],
  WRITE_EXPLANATION_LANGUAGES: ['explanation_languages.read', 'explanation_languages.create', 'explanation_languages.update', 'explanation_languages.delete', 'explanation_languages.write'],

  // Groups
  READ_GROUPS: ['groups.read'],
  WRITE_GROUPS: [
    'groups.read',
    'groups.create',
    'groups.update',
    'groups.delete',
    'groups.update_schedule',
    'groups.change_teacher',
    'groups.manage_students',
    'groups.change_status',
    'groups.write'
  ],

  // Sessions
  READ_SESSIONS: ['sessions.read'],
  WRITE_SESSIONS: [
    'sessions.read',
    'sessions.create_extra',
    'sessions.reschedule',
    'sessions.cancel',
    'sessions.manage_attendance',
    'sessions.update_topic',
    'sessions.write'
  ],

  // Timetable
  READ_TIMETABLE: ['timetable.read'],
  WRITE_TIMETABLE: ['timetable.read', 'timetable.write', 'timetable.update'],

  // Packages & FAQs
  READ_PACKAGES: ['packages.read', 'packages_faqs.read', 'faqs.read'],
  WRITE_PACKAGES: [
    'packages.read',
    'packages.create',
    'packages.update',
    'packages.delete',
    'packages.subscriptions',
    'packages.write',
    'packages_faqs.read',
    'faqs.read',
    'faqs.create',
    'faqs.update',
    'faqs.delete'
  ],

  // Coupons
  READ_COUPONS: ['coupons.read'],
  WRITE_COUPONS: ['coupons.read', 'coupons.create', 'coupons.delete', 'coupons.write'],

  // Rewards
  READ_REWARDS: ['rewards.read', 'rewards_suggestions.read', 'suggested_rewards.read'],
  WRITE_REWARDS: [
    'rewards.read',
    'rewards.create',
    'rewards.update',
    'rewards.delete',
    'rewards.write',
    'rewards_suggestions.read',
    'suggested_rewards.read',
    'suggested_rewards.delete',
    'suggested_rewards.accept',
    'suggested_rewards.reject'
  ],

  // Messages
  READ_MESSAGES: ['messages.read'],
  WRITE_MESSAGES: ['messages.read', 'messages.delete', 'messages.write'],

  // Complaints
  READ_COMPLAINTS: ['complaints_suggestions.read', 'complaints.read'],
  WRITE_COMPLAINTS: [
    'complaints_suggestions.read',
    'complaints_suggestions.update',
    'complaints_suggestions.delete',
    'complaints_suggestions.write',
    'complaints.read',
    'complaints.update'
  ],

  // Logs
  READ_LOGS: ['logs.read'],
  WRITE_LOGS: ['logs.read', 'logs.write'],

  // Users & Managers & Admins
  READ_USERS: ['users.read', 'admins.read', 'managers.read'],
  WRITE_USERS: [
    'users.read',
    'users.create',
    'users.update',
    'users.delete',
    'users.change_password',
    'users.write',
    'admins.read',
    'admins.create',
    'admins.update',
    'admins.delete',
    'managers.read',
    'managers.create',
    'managers.update',
    'managers.delete'
  ],
  READ_ADMINS: ['users.read', 'admins.read', 'managers.read'],
  WRITE_ADMINS: ['users.read', 'users.create', 'users.update', 'users.delete', 'users.change_password', 'users.write'],
  READ_MANAGERS: ['users.read', 'admins.read', 'managers.read'],
  WRITE_MANAGERS: ['users.read', 'users.create', 'users.update', 'users.delete', 'users.change_password', 'users.write'],

  // Website Content
  READ_WEBSITE: [
    'contact_us.read',
    'elite_teachers.read',
    'featured_students.read',
    'statistics.read',
    'testimonials.read',
    'website.read'
  ],
  WRITE_WEBSITE: [
    'contact_us.read',
    'contact_us.update',
    'elite_teachers.read',
    'elite_teachers.create',
    'elite_teachers.update',
    'elite_teachers.delete',
    'featured_students.read',
    'featured_students.create',
    'featured_students.update',
    'featured_students.delete',
    'statistics.read',
    'statistics.update',
    'testimonials.read',
    'testimonials.create',
    'testimonials.update',
    'testimonials.delete',
    'website.read',
    'website.write'
  ],

  // Reports
  READ_REPORTS: ['reports.read', 'dashboard.reports.read'],
  WRITE_REPORTS: ['reports.read', 'reports.write', 'dashboard.reports.read'],

  // Earnings & Finance
  READ_EARNINGS: ['earnings.read', 'dashboard.earnings.read'],
  WRITE_EARNINGS: ['earnings.read', 'earnings.write', 'dashboard.earnings.read'],

  // Dashboard & Analytics
  READ_DASHBOARD: ['dashboard.analytics.read', 'dashboard.earnings.read', 'dashboard.reports.read'],

  // Payments
  READ_PAYMENTS: ['payments.read', 'packages.subscriptions'],
  WRITE_PAYMENTS: ['payments.read', 'payments.write', 'packages.subscriptions'],
};

// Build reverse map for instant lookups
const REVERSE_PERMISSION_MAPPINGS = {};
Object.entries(PERMISSION_MAPPINGS).forEach(([backendKey, frontendKeys]) => {
  frontendKeys.forEach(fKey => {
    if (!REVERSE_PERMISSION_MAPPINGS[fKey]) {
      REVERSE_PERMISSION_MAPPINGS[fKey] = [];
    }
    if (!REVERSE_PERMISSION_MAPPINGS[fKey].includes(backendKey)) {
      REVERSE_PERMISSION_MAPPINGS[fKey].push(backendKey);
    }
  });
});

/**
 * Expands a set or array of keys with all related mapped keys.
 * E.g., ['READ_TEACHERS'] expands to include 'teachers.read'.
 */
export function expandPermissionKeys(sourceKeys) {
  const expanded = new Set();
  if (!sourceKeys) return expanded;

  const rawList = Array.isArray(sourceKeys) ? sourceKeys : Array.from(sourceKeys);

  rawList.forEach(key => {
    if (typeof key !== 'string') return;
    const cleanKey = key.trim();
    if (!cleanKey) return;

    expanded.add(cleanKey);

    // Expand backend to frontend keys
    const mapped = PERMISSION_MAPPINGS[cleanKey];
    if (mapped) {
      mapped.forEach(m => expanded.add(m));
    }

    // Expand frontend to backend keys
    const revMapped = REVERSE_PERMISSION_MAPPINGS[cleanKey];
    if (revMapped) {
      revMapped.forEach(r => expanded.add(r));
    }
  });

  return expanded;
}

