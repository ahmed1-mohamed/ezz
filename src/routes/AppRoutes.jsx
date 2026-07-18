import { Suspense, lazy, memo } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuth } from '@/shared/context/useAuth.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import RoleBasedRoute from './RoleBasedRoute.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'
import { getCookie } from '@/shared/utils/cookieUtils.js'
import PublicLayout from '../layouts/PublicLayout.jsx'
import Login from '../pages/auth/Login.jsx'
import ForgotPassword from '../pages/auth/ForgotPassword.jsx'
import ResetPassword from '../pages/auth/ResetPassword.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'

const Home = lazy(() => import('../pages/public/Home.jsx'))
const About = lazy(() => import('../pages/public/About.jsx'))
const Courses = lazy(() => import('../pages/public/Courses.jsx'))
const Curriculums = lazy(() => import('../pages/public/Curriculums.jsx'))
const Pricing = lazy(() => import('../pages/public/Pricing.jsx'))
const Teachers = lazy(() => import('../pages/public/Teachers.jsx'))
const Contact = lazy(() => import('../pages/public/Contact.jsx'))
const SchedulePage = lazy(() => import('../pages/public/SchedulePage.jsx'))
const TeacherProfile = lazy(() => import('../pages/public/TeacherProfile.jsx'))

const AdminDashboard = lazy(() => import('../dashboard/admin/overview/AdminDashboard.jsx'))
const AdminManagers = lazy(() => import('../dashboard/admin/managers/AdminManagers.jsx'))
const AdminStudents = lazy(() => import('../dashboard/admin/students/AdminStudents.jsx'))
const AdminStudentLevels = lazy(() => import('../dashboard/admin/levels/AdminStudentLevels.jsx'))
const AdminTeachers = lazy(() => import('../dashboard/admin/teachers/AdminTeachers.jsx'))
const AdminReports = lazy(() => import('../dashboard/admin/reports/AdminReports.jsx'))
const AdminSettings = lazy(() => import('../dashboard/admin/settings/AdminSettings.jsx'))
const AdminParents = lazy(() => import('../dashboard/admin/parents/AdminParents.jsx'))
const AdminGroups = lazy(() => import('../dashboard/admin/groups/AdminGroups.jsx'))
const AdminSessions = lazy(() => import('../dashboard/admin/sessions/AdminSessions.jsx'))
const AdminSchedule = lazy(() => import('../dashboard/admin/schedule/AdminSchedule.jsx'))
const AdminPackages = lazy(() => import('../dashboard/admin/packages/AdminPackages.jsx'))
const AdminEarnings = lazy(() => import('../dashboard/admin/earnings/AdminEarnings.jsx'))
const AdminPayments = lazy(() => import('../dashboard/admin/payments/AdminPayments.jsx'))
const AdminRewards = lazy(() => import('../dashboard/admin/rewards/AdminRewards.jsx'))
const AdminAssignments = lazy(() => import('../dashboard/admin/assignments/AdminAssignments.jsx'))
const AdminWebsite = lazy(() => import('../dashboard/admin/website/AdminWebsite.jsx'))
const AdminLogs = lazy(() => import('../dashboard/admin/logs/AdminLogs.jsx'))
const AdminMessages = lazy(() => import('../dashboard/admin/messages/AdminMessages.jsx'))
const AdminCoupons = lazy(() => import('../dashboard/admin/coupons/AdminCoupons.jsx'))
const AdminExplanationLanguages = lazy(() => import('../dashboard/admin/explanation_languages/AdminExplanationLanguages.jsx'))
const AdminCurriculums = lazy(() => import('../dashboard/admin/curriculums/AdminCurriculums.jsx'))
const AdminCurriculumDetails = lazy(() => import('../dashboard/admin/curriculums/AdminCurriculumDetails.jsx'))

const ManagerDashboard = lazy(() => import('../dashboard/manager/overview/ManagerDashboard.jsx'))
const ManagerCourses = lazy(() => import('../dashboard/manager/courses/ManagerCourses.jsx'))
const ManagerSchedule = lazy(() => import('../dashboard/manager/schedules/ManagerSchedule.jsx'))
const ManagerReports = lazy(() => import('../dashboard/manager/reports/ManagerReports.jsx'))

const TeacherDashboard = lazy(() => import('../dashboard/teacher/overview/TeacherDashboard.jsx'))
const TeacherSchedule = lazy(() => import('../dashboard/teacher/schedules/TeacherSchedule.jsx'))
const TeacherClasses = lazy(() => import('../dashboard/teacher/students/TeacherClasses.jsx'))
const TeacherCourses = lazy(() => import('../dashboard/teacher/students/TeacherCourses.jsx'))

const StudentLayout = lazy(() => import('../layouts/StudentLayout.jsx'))
const StudentHome = lazy(() => import('../dashboard/student/overview/StudentHome.jsx'))
const StudentSchedule = lazy(() => import('../dashboard/student/schedule/StudentSchedule.jsx'))
const StudentLive = lazy(() => import('../dashboard/student/schedule/StudentLive.jsx'))
const StudentRecorded = lazy(() => import('../dashboard/student/courses/StudentRecorded.jsx'))
const StudentTeachers = lazy(() => import('../dashboard/student/overview/StudentTeachers.jsx'))
const StudentTeacherProfile = lazy(() => import('../dashboard/student/components/StudentTeacherProfile.jsx'))
const StudentAssignments = lazy(() => import('../dashboard/student/courses/StudentAssignments.jsx'))
const StudentGrades = lazy(() => import('../dashboard/student/grades/StudentGrades.jsx'))
const StudentAttendance = lazy(() => import('../dashboard/student/schedule/StudentAttendance.jsx'))
const StudentAchievements = lazy(() => import('../dashboard/student/grades/StudentAchievements.jsx'))
const StudentMaterials = lazy(() => import('../dashboard/student/courses/StudentMaterials.jsx'))
const StudentProfile = lazy(() => import('../dashboard/student/settings/StudentProfile.jsx'))
const StudentSettings = lazy(() => import('../dashboard/student/settings/StudentSettings.jsx'))

const ParentLayout = lazy(() => import('../layouts/ParentLayout.jsx'))
const ParentDashboard = lazy(() => import('../dashboard/parent/overview/ParentDashboard.jsx'))
const ParentRatings = lazy(() => import('../dashboard/parent/students/ParentRatings.jsx'))
const ParentComplaints = lazy(() => import('../dashboard/parent/settings/ParentComplaints.jsx'))
const ParentChildrenList = lazy(() => import('../dashboard/parent/students/ParentChildrenList.jsx'))
const ParentChildren = lazy(() => import('../dashboard/parent/students/ParentChildren.jsx'))
const ParentCheckout = lazy(() => import('../dashboard/parent/packages/ParentCheckout.jsx'))
const ParentSchedule = lazy(() => import('../dashboard/parent/schedules/ParentSchedule.jsx'))
const ParentAttendance = lazy(() => import('../dashboard/parent/schedules/ParentAttendance.jsx'))
const ParentReports = lazy(() => import('../dashboard/parent/overview/ParentReports.jsx'))
const ParentAssignments = lazy(() => import('../dashboard/parent/overview/ParentAssignments.jsx'))
const ParentAssignmentDetails = lazy(() => import('../dashboard/parent/overview/ParentAssignmentDetails.jsx'))
const ParentSettings = lazy(() => import('../dashboard/parent/settings/ParentSettings.jsx'))
import { ParentExams, ParentNotifications, ParentProfile } from '../dashboard/parent/components/Placeholders.jsx'


const NotFound = lazy(() => import('../pages/public/NotFound.jsx'))
const Unauthorized = lazy(() => import('../pages/public/Unauthorized.jsx'))

const pageTransition = { duration: 0.3, ease: 'easeOut' }
const pageInitial = { opacity: 0, y: 12 }
const pageAnimate = { opacity: 1, y: 0 }
const pageExit = { opacity: 0, y: -12 }

const AnimatedPage = memo(function AnimatedPage({ children }) {
    return (
        <motion.div
            initial={pageInitial}
            animate={pageAnimate}
            exit={pageExit}
            transition={pageTransition}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    )
})

export default function AppRoutes() {
    const { user } = useAuth()
    const location = useLocation()

    return (
        <div className="min-h-screen">
            <Suspense
                fallback={
                    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
                        <div className="w-8 h-8 rounded-full border-2 border-[#0f7a6c] border-t-transparent animate-spin" />
                    </div>
                }
            >
                <AnimatePresence mode="wait">
                    <Routes location={location}>

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
                                (user && getCookie('access_token')) ? (
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
                            path="/forgot-password"
                            element={
                                (user && getCookie('access_token')) ? (
                                    <Navigate
                                        to={getRedirectPath(user.role)}
                                        replace
                                    />
                                ) : (
                                    <AnimatedPage>
                                        <ForgotPassword />
                                    </AnimatedPage>
                                )
                            }
                        />

                        <Route
                            path="/reset-password"
                            element={
                                (user && getCookie('access_token')) ? (
                                    <Navigate
                                        to={getRedirectPath(user.role)}
                                        replace
                                    />
                                ) : (
                                    <AnimatedPage>
                                        <ResetPassword />
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

                            <Route element={<RoleBasedRoute allowedRoles={['Admin', 'super_admin']} />}>
                                <Route element={<AdminLayout />}>
                                    <Route
                                        path="/dashboard/admin"
                                        element={<AdminDashboard />}
                                    />
                                    <Route
                                        path="/dashboard/admin/managers"
                                        element={<AdminManagers />}
                                    />
                                    <Route
                                        path="/dashboard/admin/students"
                                        element={<AdminStudents />}
                                    />
                                    <Route
                                        path="/dashboard/admin/student-levels"
                                        element={<AdminStudentLevels />}
                                    />
                                    <Route
                                        path="/dashboard/admin/teachers"
                                        element={<AdminTeachers />}
                                    />
                                    <Route
                                        path="/dashboard/admin/reports"
                                        element={<AdminReports />}
                                    />
                                    <Route
                                        path="/dashboard/admin/settings"
                                        element={<AdminSettings />}
                                    />
                                    <Route
                                        path="/dashboard/admin/parents"
                                        element={<AdminParents />}
                                    />
                                    <Route
                                        path="/dashboard/admin/explanation-languages"
                                        element={<AdminExplanationLanguages />}
                                    />
                                    <Route
                                        path="/dashboard/admin/groups"
                                        element={<AdminGroups />}
                                    />
                                    <Route
                                        path="/dashboard/admin/sessions"
                                        element={<AdminSessions />}
                                    />
                                    <Route
                                        path="/dashboard/admin/messages"
                                        element={<AdminMessages />}
                                    />
                                    <Route
                                        path="/dashboard/admin/schedule"
                                        element={<AdminSchedule />}
                                    />
                                    <Route
                                        path="/dashboard/admin/packages"
                                        element={<AdminPackages />}
                                    />
                                    <Route
                                        path="/dashboard/admin/coupons"
                                        element={<AdminCoupons />}
                                    />
                                    <Route
                                        path="/dashboard/admin/earnings"
                                        element={<AdminEarnings />}
                                    />
                                    <Route
                                        path="/dashboard/admin/payments"
                                        element={<AdminPayments />}
                                    />
                                    <Route
                                        path="/dashboard/admin/rewards"
                                        element={<AdminRewards />}
                                    />
                                    <Route
                                        path="/dashboard/admin/assignments"
                                        element={<AdminAssignments />}
                                    />
                                    <Route
                                        path="/dashboard/admin/website"
                                        element={<AdminWebsite />}
                                    />
                                    <Route
                                        path="/dashboard/admin/curriculums"
                                        element={<AdminCurriculums />}
                                    />
                                    <Route
                                        path="/dashboard/admin/curriculums/:id"
                                        element={<AdminCurriculumDetails />}
                                    />
                                    <Route
                                        path="/dashboard/admin/logs"
                                        element={<AdminLogs />}
                                    />
                                </Route>
                            </Route>

                            <Route element={<RoleBasedRoute allowedRoles={['Manager']} />}>
                                <Route
                                    path="/dashboard/manager"
                                    element={<ManagerDashboard />}
                                />
                                <Route
                                    path="/dashboard/manager/courses"
                                    element={<ManagerCourses />}
                                />
                                <Route
                                    path="/dashboard/manager/schedule"
                                    element={<ManagerSchedule />}
                                />
                                <Route
                                    path="/dashboard/manager/reports"
                                    element={<ManagerReports />}
                                />
                            </Route>

                            <Route element={<RoleBasedRoute allowedRoles={['Teacher']} />}>
                                <Route
                                    path="/dashboard/teacher"
                                    element={<TeacherDashboard />}
                                />
                                <Route
                                    path="/dashboard/teacher/schedule"
                                    element={<TeacherSchedule />}
                                />
                                <Route
                                    path="/dashboard/teacher/classes"
                                    element={<TeacherClasses />}
                                />
                                <Route
                                    path="/dashboard/teacher/courses"
                                    element={<TeacherCourses />}
                                />
                            </Route>

                            <Route element={<RoleBasedRoute allowedRoles={['Student']} />}>
                                <Route element={<StudentLayout />}>
                                    <Route path="/dashboard/student" element={<StudentHome />} />
                                    <Route path="/dashboard/student/schedule" element={<StudentSchedule />} />
                                    <Route path="/dashboard/student/live" element={<StudentLive />} />
                                    <Route path="/dashboard/student/recorded" element={<StudentRecorded />} />
                                    <Route path="/dashboard/student/teachers" element={<StudentTeachers />} />
                                    <Route path="/dashboard/student/teachers/:id" element={<StudentTeacherProfile />} />
                                    <Route path="/dashboard/student/assignments" element={<StudentAssignments />} />
                                    <Route path="/dashboard/student/grades" element={<StudentGrades />} />
                                    <Route path="/dashboard/student/attendance" element={<StudentAttendance />} />
                                    <Route path="/dashboard/student/achievements" element={<StudentAchievements />} />
                                    <Route path="/dashboard/student/materials" element={<StudentMaterials />} />
                                    <Route path="/dashboard/student/profile" element={<StudentProfile />} />
                                    <Route path="/dashboard/student/settings" element={<StudentSettings />} />
                                </Route>
                            </Route>

                            <Route element={<RoleBasedRoute allowedRoles={['Parent']} />}>
                                <Route element={<ParentLayout />}>
                                    <Route path="/dashboard/parent" element={<ParentDashboard />} />
                                    <Route path="/dashboard/parent/schedule" element={<ParentSchedule />} />
                                    <Route path="/dashboard/parent/children" element={<ParentChildrenList />} />
                                    <Route path="/dashboard/parent/child-details" element={<ParentChildren />} />
                                    <Route path="/dashboard/parent/attendance" element={<ParentAttendance />} />
                                    <Route path="/dashboard/parent/reports" element={<ParentReports />} />
                                    <Route path="/dashboard/parent/ratings" element={<ParentRatings />} />
                                    <Route path="/dashboard/parent/assignments" element={<ParentAssignments />} />
                                    <Route path="/dashboard/parent/assignments/:id" element={<ParentAssignmentDetails />} />
                                    <Route path="/dashboard/parent/complaints" element={<ParentComplaints />} />
                                    <Route path="/dashboard/parent/exams" element={<ParentExams />} />
                                    <Route path="/dashboard/parent/notifications" element={<ParentNotifications />} />
                                    <Route path="/dashboard/parent/profile" element={<ParentProfile />} />
                                    <Route path="/dashboard/parent/settings" element={<ParentSettings />} />
                                    <Route path="/dashboard/parent/checkout" element={<ParentCheckout />} />
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