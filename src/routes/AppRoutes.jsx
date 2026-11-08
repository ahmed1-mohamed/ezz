import { Suspense, lazy, memo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '@/shared/context/useAuth.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import RoleBasedRoute from './RoleBasedRoute.jsx'
import PermissionRoute from './PermissionRoute.jsx'
import { getRedirectPath } from '@/shared/services/authService.js'
import { getCookie } from '@/shared/utils/cookieUtils.js'
const PublicLayout = lazy(() => import('../layouts/PublicLayout.jsx'))
const Login = lazy(() => import('../pages/auth/Login.jsx'))
const Register = lazy(() => import('../pages/auth/Register.jsx'))
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword.jsx'))
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword.jsx'))
const AdminLayout = lazy(() => import('../layouts/AdminLayout.jsx'))

const Home = lazy(() => import('../pages/public/Home.jsx'))
const About = lazy(() => import('../pages/public/About.jsx'))
const Courses = lazy(() => import('../pages/public/Courses.jsx'))
const Curriculums = lazy(() => import('../pages/public/Curriculums.jsx'))
const Pricing = lazy(() => import('../pages/public/Pricing.jsx'))
const Teachers = lazy(() => import('../pages/public/Teachers.jsx'))
const Contact = lazy(() => import('../pages/public/Contact.jsx'))
const SchedulePage = lazy(() => import('../pages/public/SchedulePage.jsx'))
const TeacherProfile = lazy(() => import('../pages/public/TeacherProfile.jsx'))
const TrialSession = lazy(() => import('../pages/public/TrialSession.jsx'))

const AdminDashboard = lazy(() => import('../dashboard/admin/overview/AdminDashboard.jsx'))
const AdminManagers = lazy(() => import('../dashboard/admin/managers/AdminManagers.jsx'))
const AdminStudents = lazy(() => import('../dashboard/admin/students/AdminStudents.jsx'))
const AdminStudentDetails = lazy(() => import('../dashboard/admin/students/AdminStudentDetails.jsx'))
const AdminAddStudent = lazy(() => import('../dashboard/admin/students/AdminAddStudent.jsx'))
const AdminEditStudent = lazy(() => import('../dashboard/admin/students/AdminEditStudent.jsx'))
const AdminStudentLevels = lazy(() => import('../dashboard/admin/levels/AdminStudentLevels.jsx'))
const AdminTeachers = lazy(() => import('../dashboard/admin/teachers/AdminTeachers.jsx'))
const AdminTeacherDetails = lazy(() => import('../dashboard/admin/teachers/AdminTeacherDetails.jsx'))
const AdminTeacherEvaluations = lazy(() => import('../dashboard/admin/teachers/AdminTeacherEvaluations.jsx'))
const AdminReports = lazy(() => import('../dashboard/admin/reports/AdminReports.jsx'))
const AdminSettings = lazy(() => import('../dashboard/admin/settings/AdminSettings.jsx'))
const AdminParents = lazy(() => import('../dashboard/admin/parents/AdminParents.jsx'))
const AdminAddParent = lazy(() => import('../dashboard/admin/parents/AdminAddParent.jsx'))
const AdminParentDetails = lazy(() => import('../dashboard/admin/parents/AdminParentDetails.jsx'))
const AdminGroups = lazy(() => import('../dashboard/admin/groups/AdminGroups.jsx'))
const AdminAddGroup = lazy(() => import('../dashboard/admin/groups/AdminAddGroup.jsx'))
const AdminPrivateGroups = lazy(() => import('../dashboard/admin/groups/AdminPrivateGroups.jsx'))
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
const AdminComplaints = lazy(() => import('../dashboard/admin/complaints/AdminComplaints.jsx'))
const AdminCoupons = lazy(() => import('../dashboard/admin/coupons/AdminCoupons.jsx'))
const AdminExplanationLanguages = lazy(() => import('../dashboard/admin/explanation_languages/AdminExplanationLanguages.jsx'))
const AdminCurriculums = lazy(() => import('../dashboard/admin/curriculums/AdminCurriculums.jsx'))
const AdminCurriculumDetails = lazy(() => import('../dashboard/admin/curriculums/AdminCurriculumDetails.jsx'))
const AdminTrialSessions = lazy(() => import('../dashboard/admin/trial_sessions/AdminTrialSessions.jsx'))

const TeacherLayout = lazy(() => import('../layouts/TeacherLayout.jsx'))
const StudentLayout = lazy(() => import('../layouts/StudentLayout.jsx'))
const ParentLayout = lazy(() => import('../layouts/ParentLayout.jsx'))

const ManagerDashboard = lazy(() => import('../dashboard/manager/overview/ManagerDashboard.jsx'))
const ManagerCourses = lazy(() => import('../dashboard/manager/courses/ManagerCourses.jsx'))
const ManagerSchedule = lazy(() => import('../dashboard/manager/schedules/ManagerSchedule.jsx'))
const ManagerReports = lazy(() => import('../dashboard/manager/reports/ManagerReports.jsx'))

const TeacherDashboard = lazy(() => import('../dashboard/teacher/overview/TeacherDashboard.jsx'))
const TeacherSchedule = lazy(() => import('../dashboard/teacher/schedules/TeacherSchedule.jsx'))
const TeacherLive = lazy(() => import('../dashboard/teacher/live/TeacherLive.jsx'))
const TeacherSessions = lazy(() => import('../dashboard/teacher/sessions/TeacherSessions.jsx'))
 const TeacherCourses = lazy(() => import('../dashboard/teacher/students/TeacherCourses.jsx'))
const TeacherGroups = lazy(() => import('../dashboard/teacher/groups/TeacherGroups.jsx'))
const TeacherGroupDetails = lazy(() => import('../dashboard/teacher/groups/TeacherGroupDetails.jsx'))
const TeacherComplaints = lazy(() => import('../dashboard/teacher/complaints/TeacherComplaints.jsx'))
const TeacherRewards = lazy(() => import('../dashboard/teacher/rewards/TeacherRewards.jsx'))
const TeacherEvaluations = lazy(() => import('../dashboard/teacher/student_evaluations/TeacherEvaluations.jsx'))
const CreateHomework = lazy(() => import('../dashboard/teacher/homework/CreateHomework.jsx'))
const HomeworkSubmissions = lazy(() => import('../dashboard/teacher/homework/HomeworkSubmissions.jsx'))
const TeacherSubmissionDetailsPage = lazy(() => import('../dashboard/teacher/homework/TeacherSubmissionDetailsPage.jsx'))
const TeacherProfileSettings = lazy(() => import('../dashboard/teacher/settings/TeacherProfile.jsx'))
const TeacherCurricula = lazy(() => import('../dashboard/teacher/curricula/TeacherCurricula.jsx'))
const TeacherEarnings = lazy(() => import('../dashboard/teacher/earnings/TeacherEarnings.jsx'))
const TeacherPayouts = lazy(() => import('../dashboard/teacher/payouts/TeacherPayouts.jsx'))
const TeacherPaymentMethods = lazy(() => import('../dashboard/teacher/payment_methods/TeacherPaymentMethods.jsx'))

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

const ParentDashboard = lazy(() => import('../dashboard/parent/overview/ParentDashboard.jsx'))
const ParentRatings = lazy(() => import('../dashboard/parent/students/ParentRatings.jsx'))
const ParentComplaints = lazy(() => import('../dashboard/parent/settings/ParentComplaints.jsx'))
const ParentChildrenList = lazy(() => import('../dashboard/parent/students/ParentChildrenList.jsx'))
const ParentChildren = lazy(() => import('../dashboard/parent/students/ParentChildren.jsx'))
const ParentPackages = lazy(() => import('../dashboard/parent/packages/ParentPackages.jsx'))
const ParentCheckout = lazy(() => import('../dashboard/parent/packages/ParentCheckout.jsx'))
const ParentSubscriptions = lazy(() => import('../dashboard/parent/packages/ParentSubscriptions.jsx'))
const ParentPaymentStatus = lazy(() => import('../dashboard/parent/packages/ParentPaymentStatus.jsx'))
const ParentSchedule = lazy(() => import('../dashboard/parent/schedules/ParentSchedule.jsx'))
const ParentAttendance = lazy(() => import('../dashboard/parent/schedules/ParentAttendance.jsx'))

const ParentAssignments = lazy(() => import('../dashboard/parent/overview/ParentAssignments.jsx'))
const ParentAssignmentDetails = lazy(() => import('../dashboard/parent/overview/ParentAssignmentDetails.jsx'))
const ParentExcuses = lazy(() => import('../dashboard/parent/schedules/ParentExcuses.jsx'))
const ParentSettings = lazy(() => import('../dashboard/parent/settings/ParentSettings.jsx'))
import { ParentExams, ParentNotifications } from '../dashboard/parent/components/Placeholders.jsx'


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
    return (
        <div className="min-h-screen">
            <Suspense
                fallback={
                    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
                        <div className="w-8 h-8 rounded-full border-2 border-[#0f7a6c] border-t-transparent animate-spin" />
                    </div>
                }
            >
                <Routes>
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
                            <Route path="trial-session" element={<TrialSession />} />
                            <Route path="trial" element={<Navigate to="/trial-session" replace />} />
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
                            path="/register"
                            element={
                                (user && getCookie('access_token')) ? (
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
                        <Route
                            path="/signup"
                            element={<Navigate to="/register" replace />}
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
                                        element={<PermissionRoute permission="users.read"><AdminManagers /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/managers/add"
                                        element={<PermissionRoute permission="users.create"><AdminManagers /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/managers/permissions"
                                        element={<PermissionRoute permission="users.read"><AdminManagers /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/managers/roles"
                                        element={<PermissionRoute permission="users.read"><AdminManagers /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/managers/:id"
                                        element={<PermissionRoute permission="users.read"><AdminManagers /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/managers/:id/edit"
                                        element={<PermissionRoute permission="users.update"><AdminManagers /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/managers/edit/:id"
                                        element={<PermissionRoute permission="users.update"><AdminManagers /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/managers/:id/permissions"
                                        element={<PermissionRoute permission="users.update"><AdminManagers /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/students"
                                        element={<PermissionRoute permission="students.read"><AdminStudents /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/students/add"
                                        element={<PermissionRoute permission="students.create"><AdminAddStudent /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/students/:id"
                                        element={<PermissionRoute permission="students.read"><AdminStudentDetails /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/students/:id/edit"
                                        element={<PermissionRoute permission="students.update"><AdminEditStudent /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/student-levels"
                                        element={<PermissionRoute permission="student_levels.read"><AdminStudentLevels /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/teachers"
                                        element={<PermissionRoute permission="teachers.read"><AdminTeachers /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/teachers/:id"
                                        element={<PermissionRoute permission="teachers.read"><AdminTeacherDetails /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/teacher-evaluations"
                                        element={<PermissionRoute permissions={['teacher_evaluations.read', 'teachers.read']}><AdminTeacherEvaluations /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/reports"
                                        element={<PermissionRoute permissions={['reports.read', 'dashboard.reports.read']}><AdminReports /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/settings"
                                        element={<AdminSettings />}
                                    />
                                    <Route
                                        path="/dashboard/admin/parents"
                                        element={<PermissionRoute permission="parents.read"><AdminParents /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/parents/add"
                                        element={<PermissionRoute permission="parents.create"><AdminAddParent /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/parents/:id"
                                        element={<PermissionRoute permission="parents.read"><AdminParentDetails /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/explanation-languages"
                                        element={<PermissionRoute permission="explanation_languages.read"><AdminExplanationLanguages /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/groups"
                                        element={<PermissionRoute permission="groups.read"><AdminGroups /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/groups/add"
                                        element={<PermissionRoute permission="groups.create"><AdminAddGroup /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/groups/create"
                                        element={<PermissionRoute permission="groups.create"><AdminAddGroup /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/groups/:id/edit"
                                        element={<PermissionRoute permission="groups.update"><AdminGroups /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/groups/edit/:id"
                                        element={<PermissionRoute permission="groups.update"><AdminGroups /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/private-groups"
                                        element={<PermissionRoute permission="groups.read"><AdminPrivateGroups /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/private-groups/add"
                                        element={<PermissionRoute permission="groups.create"><AdminAddGroup /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/private-groups/create"
                                        element={<PermissionRoute permission="groups.create"><AdminAddGroup /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/private-groups/:id/edit"
                                        element={<PermissionRoute permission="groups.update"><AdminPrivateGroups /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/private-groups/edit/:id"
                                        element={<PermissionRoute permission="groups.update"><AdminPrivateGroups /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/sessions"
                                        element={<PermissionRoute permission="sessions.read"><AdminSessions /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/messages"
                                        element={<PermissionRoute permission="messages.read"><AdminMessages /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/complaints"
                                        element={<PermissionRoute permission="complaints_suggestions.read"><AdminComplaints /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/schedule"
                                        element={<PermissionRoute permission="timetable.read"><AdminSchedule /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/packages"
                                        element={<PermissionRoute permissions={['packages_faqs.read', 'packages.read', 'faqs.read']}><AdminPackages /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/coupons"
                                        element={<PermissionRoute permission="coupons.read"><AdminCoupons /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/earnings"
                                        element={<PermissionRoute permissions={['earnings.read', 'dashboard.earnings.read']}><AdminEarnings /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/payments"
                                        element={<PermissionRoute permissions={['packages.subscriptions', 'payments.read']}><AdminPayments /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/rewards"
                                        element={<PermissionRoute permissions={['rewards_suggestions.read', 'rewards.read', 'suggested_rewards.read']}><AdminRewards /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/assignments"
                                        element={<AdminAssignments />}
                                    />
                                    <Route
                                        path="/dashboard/admin/website"
                                        element={<PermissionRoute permissions={['contact_us.read', 'elite_teachers.read', 'featured_students.read', 'statistics.read', 'testimonials.read']}><AdminWebsite /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/curriculums"
                                        element={<PermissionRoute permission="curricula.read"><AdminCurriculums /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/curriculums/:id"
                                        element={<PermissionRoute permission="curricula.read"><AdminCurriculumDetails /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/trial-sessions"
                                        element={<PermissionRoute permission="trial_sessions.read"><AdminTrialSessions /></PermissionRoute>}
                                    />
                                    <Route
                                        path="/dashboard/admin/logs"
                                        element={<PermissionRoute permission="logs.read"><AdminLogs /></PermissionRoute>}
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
                                <Route element={<TeacherLayout />}>
                                    <Route
                                        path="/dashboard/teacher"
                                        element={<TeacherDashboard />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/groups"
                                        element={<TeacherGroups />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/groups/:id"
                                        element={<TeacherGroupDetails />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/schedule"
                                        element={<TeacherSchedule />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/live"
                                        element={<TeacherLive />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/live/room/:sessionId"
                                        element={<TeacherLive />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/live/room"
                                        element={<TeacherLive />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/sessions"
                                        element={<TeacherSessions />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/classes"
                                        element={<TeacherGroups />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/classes/:id"
                                        element={<TeacherGroupDetails />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/courses"
                                        element={<TeacherCourses />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/complaints"
                                        element={<TeacherComplaints />}
                                    />
                                    <Route
                                        path="/dashboard/teacher/rewards"
                                        element={<TeacherRewards />}
                                    />
                                    <Route
                                         path="/dashboard/teacher/evaluations"
                                         element={<TeacherEvaluations />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/student-evaluations"
                                         element={<TeacherEvaluations />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/assignments/create"
                                         element={<CreateHomework />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/assignments/submissions"
                                         element={<HomeworkSubmissions />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/assignments/submissions/:id"
                                         element={<TeacherSubmissionDetailsPage />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/homework/submissions/:id"
                                         element={<TeacherSubmissionDetailsPage />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/assignments/:id"
                                         element={<HomeworkSubmissions />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/homework/:id"
                                         element={<HomeworkSubmissions />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/homework/create"
                                         element={<CreateHomework />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/homework/submissions"
                                         element={<HomeworkSubmissions />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/profile"
                                         element={<TeacherProfileSettings />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/settings"
                                         element={<TeacherProfileSettings />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/curricula"
                                         element={<TeacherCurricula />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/earnings"
                                         element={<TeacherEarnings />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/payouts"
                                         element={<TeacherPayouts />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/withdrawals"
                                         element={<TeacherPayouts />}
                                     />
                                     <Route
                                         path="/dashboard/teacher/payment-methods"
                                         element={<TeacherPaymentMethods />}
                                     />
                                </Route>
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
                                    <Route path="/dashboard/student/settings" element={<StudentProfile />} />
                                </Route>
                            </Route>
                            <Route element={<RoleBasedRoute allowedRoles={['Parent', 'parent', 'guardian', 'wali', 'admin', 'super_admin']} />}>
                                <Route element={<ParentLayout />}>
                                    <Route path="/dashboard/parent" element={<ParentDashboard />} />
                                    <Route path="/dashboard/parent/schedule" element={<ParentSchedule />} />
                                    <Route path="/dashboard/parent/children" element={<ParentChildrenList />} />
                                    <Route path="/dashboard/parent/students" element={<ParentChildrenList />} />
                                    <Route path="/dashboard/parent/child-details" element={<ParentChildren />} />
                                    <Route path="/dashboard/parent/children/:studentId" element={<ParentChildren />} />
                                    <Route path="/dashboard/parent/students/:studentId" element={<ParentChildren />} />
                                    <Route path="/dashboard/parent/child-details/:studentId" element={<ParentChildren />} />
                                    <Route path="/dashboard/parent/attendance" element={<ParentAttendance />} />
                                    <Route path="/dashboard/parent/ratings" element={<ParentRatings />} />
                                    <Route path="/dashboard/parent/assignments" element={<ParentAssignments />} />
                                    <Route path="/dashboard/parent/assignments/:id" element={<ParentAssignmentDetails />} />
                                    <Route path="/dashboard/parent/excuses" element={<ParentExcuses />} />
                                    <Route path="/dashboard/parent/complaints" element={<ParentComplaints />} />
                                    <Route path="/dashboard/parent/exams" element={<ParentExams />} />
                                    <Route path="/dashboard/parent/notifications" element={<ParentNotifications />} />
                                    <Route path="/dashboard/parent/profile" element={<ParentSettings />} />
                                    <Route path="/dashboard/parent/settings" element={<ParentSettings />} />
                                    <Route path="/dashboard/parent/packages" element={<ParentPackages />} />
                                    <Route path="/dashboard/parent/checkout" element={<ParentCheckout />} />
                                    <Route path="/dashboard/parent/subscriptions" element={<ParentSubscriptions />} />
                                    <Route path="/dashboard/parent/checkout/status" element={<ParentPaymentStatus />} />
                                    <Route path="/dashboard/parent/packages/checkout/status" element={<ParentPaymentStatus />} />
                                </Route>
                            </Route>
                        </Route>
                        <Route path="/teacher/sessions" element={<Navigate to="/dashboard/teacher/sessions" replace />} />
                        <Route path="/teacher/live" element={<Navigate to="/dashboard/teacher/live" replace />} />
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
            </Suspense>
        </div>
    )
}
