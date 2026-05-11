import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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

            <div className="fixed inset-0 z-50 overflow-hidden">

                <div className="absolute left-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[#0F7A6C]/15 blur-3xl" />

                <div className="absolute bottom-[-140px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#005F54]/15 blur-3xl" />

                <div className="absolute left-1/2 top-[30%] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-[#FED65B]/20 blur-3xl" />

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