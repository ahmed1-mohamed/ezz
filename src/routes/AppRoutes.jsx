import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuth } from '../context/useAuth.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import RoleBasedRoute from './RoleBasedRoute.jsx'
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
const AdminStudents = lazy(() => import('../dashboards/admin/AdminStudents.jsx'))
const AdminTeachers = lazy(() => import('../dashboards/admin/AdminTeachers.jsx'))
const AdminReports = lazy(() => import('../dashboards/admin/AdminReports.jsx'))

const ManagerDashboard = lazy(() => import('../dashboards/manager/ManagerDashboard.jsx'))
const ManagerCourses = lazy(() => import('../dashboards/manager/ManagerCourses.jsx'))
const ManagerSchedule = lazy(() => import('../dashboards/manager/ManagerSchedule.jsx'))
const ManagerReports = lazy(() => import('../dashboards/manager/ManagerReports.jsx'))

const TeacherDashboard = lazy(() => import('../dashboards/teacher/TeacherDashboard.jsx'))
const TeacherSchedule = lazy(() => import('../dashboards/teacher/TeacherSchedule.jsx'))
const TeacherClasses = lazy(() => import('../dashboards/teacher/TeacherClasses.jsx'))
const TeacherCourses = lazy(() => import('../dashboards/teacher/TeacherCourses.jsx'))

const StudentDashboard = lazy(() => import('../dashboards/student/StudentDashboard.jsx'))
const StudentCourses = lazy(() => import('../dashboards/student/StudentCourses.jsx'))
const StudentSchedule = lazy(() => import('../dashboards/student/StudentSchedule.jsx'))
const StudentGrades = lazy(() => import('../dashboards/student/StudentGrades.jsx'))

// Parent Dashboard components
const ParentLayout = lazy(() => import('../layouts/ParentLayout.jsx'))
const ParentDashboard = lazy(() => import('../features/parent/presentation/screens/ParentDashboard.jsx'))
const ParentRatings = lazy(() => import('../features/parent/presentation/screens/ParentRatings.jsx'))
const ParentComplaints = lazy(() => import('../features/parent/presentation/screens/ParentComplaints.jsx'))
import { ParentChildren, ParentAttendance, ParentAssignments, ParentReports, ParentSchedule, ParentSettings, ParentExams, ParentNotifications, ParentProfile } from '../features/parent/presentation/screens/Placeholders.jsx'


const NotFound = lazy(() => import('../pages/NotFound.jsx'))
const Unauthorized = lazy(() => import('../pages/Unauthorized.jsx'))

function AnimatedPage({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.45,
                ease: 'easeOut',
            }}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    )
}

export default function AppRoutes() {
    const { user } = useAuth()
    const location = useLocation()

    return (
        <div className="min-h-screen bg-[#FFFFFF] text-[#111827]">

            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,122,108,0.04),transparent_45%)]" />

            </div>

            <Suspense
                fallback={
                    <div className="flex min-h-screen items-center justify-center bg-white">
                        <Spinner />
                    </div>
                }
            >
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>

                        <Route
                            path="/"
                            element={
                                <AnimatedPage>
                                    <PublicLayout />
                                </AnimatedPage>
                            }
                        >
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
                            element={
                                user ? (
                                    <Navigate
                                        to={getRedirectPath(user.role)}
                                        replace
                                    />
                                ) : (
                                    <AnimatedPage>
                                        <Login />
                                    </AnimatedPage>
                                )
                            }
                        />

                        <Route
                            path="/register"
                            element={
                                user ? (
                                    <Navigate
                                        to={getRedirectPath(user.role)}
                                        replace
                                    />
                                ) : (
                                    <AnimatedPage>
                                        <Register />
                                    </AnimatedPage>
                                )
                            }
                        />

                        <Route element={<ProtectedRoute />}>
                            <Route
                                path="/dashboard"
                                element={
                                    <Navigate
                                        to={
                                            user
                                                ? getRedirectPath(user.role)
                                                : '/login'
                                        }
                                        replace
                                    />
                                }
                            />

                            <Route element={<RoleBasedRoute allowedRoles={['Admin']} />}>
                                <Route
                                    path="/dashboard/admin"
                                    element={<AnimatedPage><AdminDashboard /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/admin/students"
                                    element={<AnimatedPage><AdminStudents /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/admin/teachers"
                                    element={<AnimatedPage><AdminTeachers /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/admin/reports"
                                    element={<AnimatedPage><AdminReports /></AnimatedPage>}
                                />
                            </Route>

                            <Route element={<RoleBasedRoute allowedRoles={['Manager']} />}>
                                <Route
                                    path="/dashboard/manager"
                                    element={<AnimatedPage><ManagerDashboard /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/manager/courses"
                                    element={<AnimatedPage><ManagerCourses /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/manager/schedule"
                                    element={<AnimatedPage><ManagerSchedule /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/manager/reports"
                                    element={<AnimatedPage><ManagerReports /></AnimatedPage>}
                                />
                            </Route>

                            <Route element={<RoleBasedRoute allowedRoles={['Teacher']} />}>
                                <Route
                                    path="/dashboard/teacher"
                                    element={<AnimatedPage><TeacherDashboard /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/teacher/schedule"
                                    element={<AnimatedPage><TeacherSchedule /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/teacher/classes"
                                    element={<AnimatedPage><TeacherClasses /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/teacher/courses"
                                    element={<AnimatedPage><TeacherCourses /></AnimatedPage>}
                                />
                            </Route>

                            <Route element={<RoleBasedRoute allowedRoles={['Student']} />}>
                                <Route
                                    path="/dashboard/student"
                                    element={<AnimatedPage><StudentDashboard /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/student/courses"
                                    element={<AnimatedPage><StudentCourses /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/student/schedule"
                                    element={<AnimatedPage><StudentSchedule /></AnimatedPage>}
                                />
                                <Route
                                    path="/dashboard/student/grades"
                                    element={<AnimatedPage><StudentGrades /></AnimatedPage>}
                                />
                            </Route>

                            <Route element={<RoleBasedRoute allowedRoles={['Parent']} />}>
                                <Route element={<ParentLayout />}>
                                    <Route path="/dashboard/parent" element={<AnimatedPage><ParentDashboard /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/children" element={<AnimatedPage><ParentChildren /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/schedule" element={<AnimatedPage><ParentSchedule /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/attendance" element={<AnimatedPage><ParentAttendance /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/reports" element={<AnimatedPage><ParentReports /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/ratings" element={<AnimatedPage><ParentRatings /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/assignments" element={<AnimatedPage><ParentAssignments /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/complaints" element={<AnimatedPage><ParentComplaints /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/exams" element={<AnimatedPage><ParentExams /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/notifications" element={<AnimatedPage><ParentNotifications /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/profile" element={<AnimatedPage><ParentProfile /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/settings" element={<AnimatedPage><ParentSettings /></AnimatedPage>} />
                                </Route>
                            </Route>
                        </Route>

                        <Route
                            path="/unauthorized"
                            element={
                                <AnimatedPage>
                                    <Unauthorized />
                                </AnimatedPage>
                            }
                        />

                        <Route
                            path="*"
                            element={
                                <AnimatedPage>
                                    <NotFound />
                                </AnimatedPage>
                            }
                        />

                    </Routes>
                </AnimatePresence>
            </Suspense>
        </div>
    )
}