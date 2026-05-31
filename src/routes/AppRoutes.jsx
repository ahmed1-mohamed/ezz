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
const TeacherProfile = lazy(() => import('../pages/TeacherProfile.jsx'))

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

const StudentLayout = lazy(() => import('../layouts/StudentLayout.jsx'))
const StudentHome = lazy(() => import('../features/student/presentation/screens/StudentHome.jsx'))
const StudentSchedule = lazy(() => import('../features/student/presentation/screens/StudentSchedule.jsx'))
const StudentLive = lazy(() => import('../features/student/presentation/screens/StudentLive.jsx'))
const StudentRecorded = lazy(() => import('../features/student/presentation/screens/StudentRecorded.jsx'))
const StudentTeachers = lazy(() => import('../features/student/presentation/screens/StudentTeachers.jsx'))
const StudentTeacherProfile = lazy(() => import('../features/student/presentation/screens/StudentTeacherProfile.jsx'))
const StudentAssignments = lazy(() => import('../features/student/presentation/screens/StudentAssignments.jsx'))
const StudentGrades = lazy(() => import('../features/student/presentation/screens/StudentGrades.jsx'))
const StudentAttendance = lazy(() => import('../features/student/presentation/screens/StudentAttendance.jsx'))
const StudentAchievements = lazy(() => import('../features/student/presentation/screens/StudentAchievements.jsx'))
const StudentMaterials = lazy(() => import('../features/student/presentation/screens/StudentMaterials.jsx'))
const StudentProfile = lazy(() => import('../features/student/presentation/screens/StudentProfile.jsx'))
const StudentSettings = lazy(() => import('../features/student/presentation/screens/StudentSettings.jsx'))

// Parent Dashboard components
const ParentLayout = lazy(() => import('../layouts/ParentLayout.jsx'))
const ParentDashboard = lazy(() => import('../features/parent/presentation/screens/ParentDashboard.jsx'))
const ParentRatings = lazy(() => import('../features/parent/presentation/screens/ParentRatings.jsx'))
const ParentComplaints = lazy(() => import('../features/parent/presentation/screens/ParentComplaints.jsx'))
const ParentChildrenList = lazy(() => import('../features/parent/presentation/screens/ParentChildrenList.jsx'))
const ParentChildren = lazy(() => import('../features/parent/presentation/screens/ParentChildren.jsx'))
const ParentCheckout = lazy(() => import('../features/parent/presentation/screens/ParentCheckout.jsx'))
const ParentSchedule = lazy(() => import('../features/parent/presentation/screens/ParentSchedule.jsx'))
const ParentAttendance = lazy(() => import('../features/parent/presentation/screens/ParentAttendance.jsx'))
const ParentReports = lazy(() => import('../features/parent/presentation/screens/ParentReports.jsx'))
const ParentAssignments = lazy(() => import('../features/parent/presentation/screens/ParentAssignments.jsx'))
const ParentAssignmentDetails = lazy(() => import('../features/parent/presentation/screens/ParentAssignmentDetails.jsx'))
const ParentSettings = lazy(() => import('../features/parent/presentation/screens/ParentSettings.jsx'))
import { ParentExams, ParentNotifications, ParentProfile } from '../features/parent/presentation/screens/Placeholders.jsx'


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
                            <Route path="teachers/:id" element={<TeacherProfile />} />
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
                                <Route element={<StudentLayout />}>
                                    <Route path="/dashboard/student" element={<AnimatedPage><StudentHome /></AnimatedPage>} />
                                    <Route path="/dashboard/student/schedule" element={<AnimatedPage><StudentSchedule /></AnimatedPage>} />
                                    <Route path="/dashboard/student/live" element={<AnimatedPage><StudentLive /></AnimatedPage>} />
                                    <Route path="/dashboard/student/recorded" element={<AnimatedPage><StudentRecorded /></AnimatedPage>} />
                                    <Route path="/dashboard/student/teachers" element={<AnimatedPage><StudentTeachers /></AnimatedPage>} />
                                    <Route path="/dashboard/student/teachers/:id" element={<AnimatedPage><StudentTeacherProfile /></AnimatedPage>} />
                                    <Route path="/dashboard/student/assignments" element={<AnimatedPage><StudentAssignments /></AnimatedPage>} />
                                    <Route path="/dashboard/student/grades" element={<AnimatedPage><StudentGrades /></AnimatedPage>} />
                                    <Route path="/dashboard/student/attendance" element={<AnimatedPage><StudentAttendance /></AnimatedPage>} />
                                    <Route path="/dashboard/student/achievements" element={<AnimatedPage><StudentAchievements /></AnimatedPage>} />
                                    <Route path="/dashboard/student/materials" element={<AnimatedPage><StudentMaterials /></AnimatedPage>} />
                                    <Route path="/dashboard/student/profile" element={<AnimatedPage><StudentProfile /></AnimatedPage>} />
                                    <Route path="/dashboard/student/settings" element={<AnimatedPage><StudentSettings /></AnimatedPage>} />
                                </Route>
                            </Route>

                            <Route element={<RoleBasedRoute allowedRoles={['Parent']} />}>
                                <Route element={<ParentLayout />}>
                                    <Route path="/dashboard/parent" element={<AnimatedPage><ParentDashboard /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/schedule" element={<AnimatedPage><ParentSchedule /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/children" element={<AnimatedPage><ParentChildrenList /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/child-details" element={<AnimatedPage><ParentChildren /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/attendance" element={<AnimatedPage><ParentAttendance /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/reports" element={<AnimatedPage><ParentReports /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/ratings" element={<AnimatedPage><ParentRatings /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/assignments" element={<AnimatedPage><ParentAssignments /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/assignments/:id" element={<AnimatedPage><ParentAssignmentDetails /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/complaints" element={<AnimatedPage><ParentComplaints /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/exams" element={<AnimatedPage><ParentExams /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/notifications" element={<AnimatedPage><ParentNotifications /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/profile" element={<AnimatedPage><ParentProfile /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/settings" element={<AnimatedPage><ParentSettings /></AnimatedPage>} />
                                    <Route path="/dashboard/parent/checkout" element={<AnimatedPage><ParentCheckout /></AnimatedPage>} />
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