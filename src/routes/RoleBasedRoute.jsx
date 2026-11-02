import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { useAdminPermissions } from '@/shared/hooks/useAdminPermissions';

export default function RoleBasedRoute({ allowedRoles }) {
  const { user } = useAuth();
  const location = useLocation();
  const { isSuperAdmin, hasPermission } = useAdminPermissions();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  const rawRole = (typeof user?.role === 'string'
    ? user.role
    : (user?.role?.name || user?.roleName || user?.role_name || user?.user_type || ''));
  const normalizedUserRole = rawRole.toLowerCase();
  const isParentTarget = allowedRoles.some((r) => r.toLowerCase() === 'parent');
  const hasParentPermission = isParentTarget && (
    hasPermission('parents.read') ||
    hasPermission('parents.write') ||
    hasPermission('READ_PARENTS') ||
    hasPermission('WRITE_PARENTS') ||
    hasPermission('*')
  );
  const isStudentTarget = allowedRoles.some((r) => r.toLowerCase() === 'student');
  const hasStudentPermission = isStudentTarget && (
    hasPermission('students.read') ||
    hasPermission('students.write') ||
    hasPermission('READ_STUDENTS') ||
    hasPermission('WRITE_STUDENTS') ||
    hasPermission('*')
  );
  const isTeacherTarget = allowedRoles.some((r) => r.toLowerCase() === 'teacher');
  const hasTeacherPermission = isTeacherTarget && (
    hasPermission('teachers.read') ||
    hasPermission('teachers.write') ||
    hasPermission('READ_TEACHERS') ||
    hasPermission('WRITE_TEACHERS') ||
    hasPermission('*')
  );
  const hasAccess =
    isSuperAdmin ||
    hasParentPermission ||
    hasStudentPermission ||
    hasTeacherPermission ||
    allowedRoles.some((role) => {
      const r = role.toLowerCase();
      if (r === normalizedUserRole) return true;
      if (r === 'parent' && (normalizedUserRole.includes('parent') || normalizedUserRole.includes('guard') || normalizedUserRole.includes('wali') || normalizedUserRole.includes('ولي'))) return true;
      if (r === 'student' && (normalizedUserRole.includes('stud') || normalizedUserRole.includes('طالب'))) return true;
      if (r === 'teacher' && (normalizedUserRole.includes('teach') || normalizedUserRole.includes('معلم'))) return true;
      if (r === 'manager' && (normalizedUserRole.includes('manage') || normalizedUserRole.includes('supervisor') || normalizedUserRole.includes('admin'))) return true;
      if (r === 'admin' && (normalizedUserRole.includes('admin') || normalizedUserRole.includes('super_admin') || normalizedUserRole.includes('superadmin'))) return true;
      return false;
    });
  if (!hasAccess) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
