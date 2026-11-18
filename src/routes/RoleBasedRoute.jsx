import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/context/useAuth.jsx';
import { getRedirectPath } from '@/shared/services/authService.js';

function normalizePortalRole(value) {
  const roleValue = typeof value === 'object' && value !== null
    ? value.name || value.role || value.slug || value.key || ''
    : value;
  const role = String(roleValue || '').trim().toLowerCase();

  if (['admin', 'super_admin', 'superadmin'].includes(role)) return 'admin';
  if (['manager', 'supervisor'].includes(role)) return 'manager';
  if (['teacher'].includes(role) || role.includes('معلم') || role.includes('أستاذ')) return 'teacher';
  if (['student'].includes(role) || role.includes('طالب') || role.includes('تلميذ')) return 'student';
  if (['parent', 'guardian', 'wali'].includes(role) || role.includes('ولي') || role.includes('أمر')) return 'parent';

  return role;
}

export default function RoleBasedRoute({ allowedRoles }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userRole = normalizePortalRole(user.role || user.roleName || user.role_name || user.user_type);
  const routeRoles = allowedRoles.map(normalizePortalRole);
  const hasAccess = routeRoles.includes(userRole);

  if (!hasAccess) {
    return (
      <Navigate
        to={getRedirectPath(userRole)}
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}
