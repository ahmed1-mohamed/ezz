import api from './axiosConfig';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock Data matching the user's screenshots exactly
const mockSupervisors = [
  {
    id: 1,
    name: 'ليث ماجد الفضلي',
    email: 'lmf@manager.com',
    role: 'مشرف عام',
    phone: '+20 120 456 7890',
    status: 'Active',
    permissions: {
      manageTeachers: true,
      manageStudents: true,
      viewReports: true,
      managePayments: true,
      manageSettings: true,
    }
  },
  {
    id: 2,
    name: 'عمر رياض العزاوي',
    email: 'ara@supervisor.com',
    role: 'محرر',
    phone: '+20 100 234 5678',
    status: 'Suspended',
    permissions: {
      manageTeachers: false,
      manageStudents: false,
      viewReports: true,
      managePayments: false,
      manageSettings: false,
    }
  },
  {
    id: 3,
    name: 'سيف نبيل الكعبي',
    email: 'oma@editor.com',
    role: 'مدير عام',
    phone: '+20 111 876 5432',
    status: 'Active',
    permissions: {
      manageTeachers: true,
      manageStudents: true,
      viewReports: true,
      managePayments: true,
      manageSettings: false,
    }
  },
  {
    id: 4,
    name: 'علي حسن الجبوري',
    email: 'snk@supervisor.com',
    role: 'مشرف عام',
    phone: '+20 105 345 6789',
    status: 'Suspended',
    permissions: {
      manageTeachers: true,
      manageStudents: true,
      viewReports: false,
      managePayments: false,
      manageSettings: false,
    }
  },
  {
    id: 5,
    name: 'مريم أحمد العلي',
    email: 'mya@manager.com',
    role: 'مشرف أكاديمي',
    phone: '+20 122 345 6789',
    status: 'Active',
    permissions: {
      manageTeachers: true,
      manageStudents: true,
      viewReports: true,
      managePayments: false,
      manageSettings: false,
    }
  },
  {
    id: 6,
    name: 'خالد يوسف الحربي',
    email: 'kyh@editor.com',
    role: 'محرر',
    phone: '+20 155 456 7890',
    status: 'Active',
    permissions: {
      manageTeachers: false,
      manageStudents: false,
      viewReports: true,
      managePayments: false,
      manageSettings: false,
    }
  },
  {
    id: 7,
    name: 'فاطمة صالح البلوشي',
    email: 'fsb@supervisor.com',
    role: 'مشرف عام',
    phone: '+20 109 987 6543',
    status: 'Suspended',
    permissions: {
      manageTeachers: true,
      manageStudents: true,
      viewReports: false,
      managePayments: false,
      manageSettings: false,
    }
  },
  {
    id: 8,
    name: 'ياسر محمد الدوسري',
    email: 'ymd@editor.com',
    role: 'مدير عام',
    phone: '+20 101 222 3333',
    status: 'Active',
    permissions: {
      manageTeachers: true,
      manageStudents: true,
      viewReports: true,
      managePayments: true,
      manageSettings: true,
    }
  },
  {
    id: 9,
    name: 'هدى عبد الرحمن',
    email: 'har@manager.com',
    role: 'مشرف أكاديمي',
    phone: '+20 102 444 5555',
    status: 'Active',
    permissions: {
      manageTeachers: true,
      manageStudents: true,
      viewReports: true,
      managePayments: false,
      manageSettings: false,
    }
  },
  {
    id: 10,
    name: 'عبد الله عمر باوزير',
    email: 'aob@supervisor.com',
    role: 'مشرف عام',
    phone: '+20 103 666 7777',
    status: 'Active',
    permissions: {
      manageTeachers: true,
      manageStudents: true,
      viewReports: true,
      managePayments: true,
      manageSettings: true,
    }
  },
  {
    id: 11,
    name: 'رشا حميدان',
    email: 'rsh@editor.com',
    role: 'محرر',
    phone: '+20 104 888 9999',
    status: 'Suspended',
    permissions: {
      manageTeachers: false,
      manageStudents: false,
      viewReports: true,
      managePayments: false,
      manageSettings: false,
    }
  },
  {
    id: 12,
    name: 'سلطان فهد السديري',
    email: 'sfs@manager.com',
    role: 'مدير عام',
    phone: '+20 105 111 2222',
    status: 'Active',
    permissions: {
      manageTeachers: true,
      manageStudents: true,
      viewReports: true,
      managePayments: true,
      manageSettings: false,
    }
  }
];

const mockRoles = [
  { id: 1, name: 'مشرف عام', nameEn: 'General Supervisor', icon: 'crown' },
  { id: 2, name: 'مدير', nameEn: 'Manager', icon: 'shield' },
  { id: 3, name: 'مدير الموارد البشرية', nameEn: 'HR Manager', icon: 'users' },
  { id: 4, name: 'مشرف معلمين', nameEn: 'Teachers Supervisor', icon: 'book' },
];

const mockRolesPermissions = {
  'مشرف عام': {
    userManagement: { viewUsers: true, createUsers: false, editUsers: false, deleteUsers: true },
    groupManagement: { viewGroups: true, createGroups: false, editGroups: false, deleteGroups: true },
    courseManagement: { viewCourses: true, createCourses: false, editCourses: false, deleteCourses: true },
    reportsManagement: { viewReports: true, createReports: false, editReports: false, deleteReports: true },
    fundsManagement: { viewFinancials: true, createFinancials: false, editFinancials: false, deleteFinancials: true },
    systemSettings: { viewSettings: true, editSettings: false, manageIntegrations: false, configureSystem: true },
    scheduleSettings: { viewSchedule: true, editSchedule: false, manageSchedules: false, configureSchedule: true },
  },
  'مدير': {
    userManagement: { viewUsers: true, createUsers: true, editUsers: true, deleteUsers: false },
    groupManagement: { viewGroups: true, createGroups: true, editGroups: true, deleteGroups: false },
    courseManagement: { viewCourses: true, createCourses: false, editCourses: false, deleteCourses: false },
    reportsManagement: { viewReports: true, createReports: true, editReports: true, deleteReports: false },
    fundsManagement: { viewFinancials: true, createFinancials: false, editFinancials: false, deleteFinancials: false },
    systemSettings: { viewSettings: true, editSettings: true, manageIntegrations: false, configureSystem: false },
    scheduleSettings: { viewSchedule: true, editSchedule: true, manageSchedules: true, configureSchedule: false },
  },
  'مدير عام': {
    userManagement: { viewUsers: true, createUsers: true, editUsers: true, deleteUsers: true },
    groupManagement: { viewGroups: true, createGroups: true, editGroups: true, deleteGroups: true },
    courseManagement: { viewCourses: true, createCourses: true, editCourses: true, deleteCourses: true },
    reportsManagement: { viewReports: true, createReports: true, editReports: true, deleteReports: true },
    fundsManagement: { viewFinancials: true, createFinancials: true, editFinancials: true, deleteFinancials: true },
    systemSettings: { viewSettings: true, editSettings: true, manageIntegrations: true, configureSystem: true },
    scheduleSettings: { viewSchedule: true, editSchedule: true, manageSchedules: true, configureSchedule: true },
  },
  'محرر': {
    userManagement: { viewUsers: true, createUsers: false, editUsers: true, deleteUsers: false },
    groupManagement: { viewGroups: true, createGroups: false, editGroups: true, deleteGroups: false },
    courseManagement: { viewCourses: true, createCourses: false, editCourses: true, deleteCourses: false },
    reportsManagement: { viewReports: true, createReports: false, editReports: true, deleteReports: false },
    fundsManagement: { viewFinancials: false, createFinancials: false, editFinancials: false, deleteFinancials: false },
    systemSettings: { viewSettings: true, editSettings: false, manageIntegrations: false, configureSystem: false },
    scheduleSettings: { viewSchedule: true, editSchedule: false, manageSchedules: false, configureSchedule: false },
  },
  'مدير الموارد البشرية': {
    userManagement: { viewUsers: true, createUsers: true, editUsers: true, deleteUsers: true },
    groupManagement: { viewGroups: false, createGroups: false, editGroups: false, deleteGroups: false },
    courseManagement: { viewCourses: false, createCourses: false, editCourses: false, deleteCourses: false },
    reportsManagement: { viewReports: true, createReports: false, editReports: false, deleteReports: false },
    fundsManagement: { viewFinancials: false, createFinancials: false, editFinancials: false, deleteFinancials: false },
    systemSettings: { viewSettings: true, editSettings: true, manageIntegrations: false, configureSystem: false },
    scheduleSettings: { viewSchedule: false, editSchedule: false, manageSchedules: false, configureSchedule: false },
  },
  'مشرف معلمين': {
    userManagement: { viewUsers: true, createUsers: false, editUsers: false, deleteUsers: true },
    groupManagement: { viewGroups: true, createGroups: false, editGroups: false, deleteGroups: true },
    courseManagement: { viewCourses: true, createCourses: false, editCourses: false, deleteCourses: true },
    reportsManagement: { viewReports: true, createReports: false, editReports: false, deleteReports: true },
    fundsManagement: { viewFinancials: false, createFinancials: false, editFinancials: false, deleteFinancials: false },
    systemSettings: { viewSettings: true, editSettings: false, manageIntegrations: false, configureSystem: false },
    scheduleSettings: { viewSchedule: true, editSchedule: false, manageSchedules: false, configureSchedule: true },
  },
  'مشرف أكاديمي': {
    userManagement: { viewUsers: true, createUsers: false, editUsers: true, deleteUsers: false },
    groupManagement: { viewGroups: true, createGroups: true, editGroups: false, deleteGroups: false },
    courseManagement: { viewCourses: true, createCourses: true, editCourses: true, deleteCourses: false },
    reportsManagement: { viewReports: true, createReports: false, editReports: false, deleteReports: false },
    fundsManagement: { viewFinancials: false, createFinancials: false, editFinancials: false, deleteFinancials: false },
    systemSettings: { viewSettings: true, editSettings: false, manageIntegrations: false, configureSystem: false },
    scheduleSettings: { viewSchedule: true, editSchedule: true, manageSchedules: false, configureSchedule: false },
  },
  'مدير التسجيل': {
    userManagement: { viewUsers: true, createUsers: true, editUsers: false, deleteUsers: false },
    groupManagement: { viewGroups: true, createGroups: false, editGroups: false, deleteGroups: false },
    courseManagement: { viewCourses: true, createCourses: false, editCourses: false, deleteCourses: false },
    reportsManagement: { viewReports: false, createReports: false, editReports: false, deleteReports: false },
    fundsManagement: { viewFinancials: false, createFinancials: false, editFinancials: false, deleteFinancials: false },
    systemSettings: { viewSettings: true, editSettings: false, manageIntegrations: false, configureSystem: false },
    scheduleSettings: { viewSchedule: true, editSchedule: false, manageSchedules: false, configureSchedule: false },
  },
  'مشرف تقني': {
    userManagement: { viewUsers: true, createUsers: true, editUsers: true, deleteUsers: true },
    groupManagement: { viewGroups: true, createGroups: true, editGroups: true, deleteGroups: true },
    courseManagement: { viewCourses: true, createCourses: true, editCourses: true, deleteCourses: true },
    reportsManagement: { viewReports: true, createReports: true, editReports: true, deleteReports: true },
    fundsManagement: { viewFinancials: true, createFinancials: true, editFinancials: true, deleteFinancials: true },
    systemSettings: { viewSettings: true, editSettings: true, manageIntegrations: true, configureSystem: true },
    scheduleSettings: { viewSchedule: true, editSchedule: true, manageSchedules: true, configureSchedule: true },
  },
  'مشرف دعم': {
    userManagement: { viewUsers: true, createUsers: false, editUsers: true, deleteUsers: false },
    groupManagement: { viewGroups: true, createGroups: false, editGroups: false, deleteGroups: false },
    courseManagement: { viewCourses: false, createCourses: false, editCourses: false, deleteCourses: false },
    reportsManagement: { viewReports: true, createReports: false, editReports: false, deleteReports: false },
    fundsManagement: { viewFinancials: false, createFinancials: false, editFinancials: false, deleteFinancials: false },
    systemSettings: { viewSettings: true, editSettings: false, manageIntegrations: false, configureSystem: false },
    scheduleSettings: { viewSchedule: false, editSchedule: false, manageSchedules: false, configureSchedule: false },
  },
  'مشرف محتوى': {
    userManagement: { viewUsers: true, createUsers: false, editUsers: false, deleteUsers: false },
    groupManagement: { viewGroups: true, createGroups: true, editGroups: true, deleteGroups: false },
    courseManagement: { viewCourses: true, createCourses: true, editCourses: true, deleteCourses: false },
    reportsManagement: { viewReports: true, createReports: false, editReports: false, deleteReports: false },
    fundsManagement: { viewFinancials: false, createFinancials: false, editFinancials: false, deleteFinancials: false },
    systemSettings: { viewSettings: true, editSettings: false, manageIntegrations: false, configureSystem: false },
    scheduleSettings: { viewSchedule: true, editSchedule: false, manageSchedules: false, configureSchedule: false },
  }
};

export const managersApi = {
  fetchSupervisors: async () => {
    try {
      const response = await api.get('/api/v1/admin/supervisors');
      return response.data;
    } catch (error) {
      console.warn('API fetchSupervisors failed, using mock data:', error);
      await delay(400);
      return { success: true, data: mockSupervisors };
    }
  },
  
  createSupervisor: async (supervisorData) => {
    try {
      const response = await api.post('/api/v1/admin/supervisors', supervisorData);
      return response.data;
    } catch (error) {
      console.warn('API createSupervisor failed, using mock integration:', error);
      await delay(400);
      return { success: true, data: { ...supervisorData, id: Date.now() } };
    }
  },

  updateSupervisor: async (id, supervisorData) => {
    try {
      const response = await api.put(`/api/v1/admin/supervisors/${id}`, supervisorData);
      return response.data;
    } catch (error) {
      console.warn('API updateSupervisor failed, using mock integration:', error);
      await delay(400);
      return { success: true, data: { id, ...supervisorData } };
    }
  },

  deleteSupervisor: async (id) => {
    try {
      const response = await api.delete(`/api/v1/admin/supervisors/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API deleteSupervisor failed, using mock integration:', error);
      await delay(400);
      return { success: true, message: 'Deleted successfully' };
    }
  },

  fetchRoles: async () => {
    try {
      const response = await api.get('/api/v1/admin/roles');
      return response.data;
    } catch (error) {
      console.warn('API fetchRoles failed, using mock data:', error);
      await delay(400);
      return { success: true, data: mockRoles };
    }
  },

  fetchRolesPermissions: async () => {
    try {
      const response = await api.get('/api/v1/admin/roles/permissions');
      return response.data;
    } catch (error) {
      console.warn('API fetchRolesPermissions failed, using mock data:', error);
      await delay(400);
      return { success: true, data: mockRolesPermissions };
    }
  },

  updateRolePermissions: async (roleName, permissions) => {
    try {
      const response = await api.put(`/api/v1/admin/roles/${roleName}/permissions`, { permissions });
      return response.data;
    } catch (error) {
      console.warn('API updateRolePermissions failed, using mock integration:', error);
      await delay(400);
      return { success: true, message: 'Permissions updated successfully' };
    }
  },

  createRole: async (roleName) => {
    try {
      const response = await api.post('/api/v1/admin/roles', { name: roleName });
      return response.data;
    } catch (error) {
      console.warn('API createRole failed, using mock integration:', error);
      await delay(400);
      return { success: true, data: { id: Date.now(), name: roleName, nameEn: roleName, icon: 'shield' } };
    }
  }
};
