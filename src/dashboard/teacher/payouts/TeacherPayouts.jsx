import { Navigate } from 'react-router-dom';

export default function TeacherPayouts() {
  return <Navigate to="/dashboard/teacher/earnings?tab=payouts" replace />;
}
