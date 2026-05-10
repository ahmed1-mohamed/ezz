import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from '../context/useAuth.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import Spinner from '../components/ui/Spinner.jsx'
import { getRedirectPath } from '../services/authService.js'
import PublicLayout from '../layouts/PublicLayout.jsx'

const Home = lazy(() => import('../pages/Home.jsx'))
const About = lazy(() => import('../pages/About.jsx'))
const Courses = lazy(() => import('../pages/Courses.jsx'))
const Curriculums = lazy(() => import('../pages/Curriculums.jsx'))
const Pricing = lazy(() => import('../pages/Pricing.jsx'))
const Teachers = lazy(() => import('../pages/Teachers.jsx'))
const Contact = lazy(() => import('../pages/Contact.jsx'))
const SchedulePage = lazy(() => import('../pages/SchedulePage.jsx'))
const Login = lazy(() => import('../pages/Login.jsx'))
const Register = lazy(() => import('../pages/Register.jsx'))
const AdminDashboard = lazy(() => import('../dashboards/admin/AdminDashboard.jsx'))
const ManagerDashboard = lazy(() => import('../dashboards/manager/ManagerDashboard.jsx'))
const EmployeeDashboard = lazy(() => import('../dashboards/employee/EmployeeDashboard.jsx'))
const CustomerDashboard = lazy(() => import('../dashboards/customer/CustomerDashboard.jsx'))
const TeacherDashboard = lazy(() => import('../dashboards/teacher/TeacherDashboard.jsx'))
const StudentDashboard = lazy(() => import('../dashboards/student/StudentDashboard.jsx'))
const NotFound = lazy(() => import('../pages/NotFound.jsx'))

export default function AppRoutes() {
    const { user } = useAuth()

    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="curriculums" element={<Curriculums />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="teachers" element={<Teachers />} />
                    <Route path="schedule" element={<SchedulePage />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route
                    path="/login"
                    element={user ? <Navigate to={getRedirectPath(user.role)} replace /> : <Login />}
                />
                <Route
                    path="/register"
                    element={user ? <Navigate to={getRedirectPath(user.role)} replace /> : <Register />}
                />
                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/dashboard"
                        element={<Navigate to={user ? getRedirectPath(user.role) : '/login'} replace />}
                    />
                    <Route path="/dashboard/admin" element={<AdminDashboard />} />
                    <Route path="/dashboard/manager" element={<ManagerDashboard />} />
                    <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
                    <Route path="/dashboard/customer" element={<CustomerDashboard />} />
                    <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
                    <Route path="/dashboard/student" element={<StudentDashboard />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}
