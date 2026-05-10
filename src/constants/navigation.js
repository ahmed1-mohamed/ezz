import {
  ROLE_ADMIN,
  ROLE_MANAGER,
  ROLE_TEACHER,
  ROLE_STUDENT,
} from "./roles.js";

export const roleNavigation = {
  [ROLE_ADMIN]: [
    { label: "dashboard.overview", path: "/dashboard/admin" },
    { label: "dashboard.students", path: "/dashboard/admin/students" },
    { label: "dashboard.teachers", path: "/dashboard/admin/teachers" },
    { label: "dashboard.reports", path: "/dashboard/admin/reports" },
  ],
  [ROLE_MANAGER]: [
    { label: "dashboard.overview", path: "/dashboard/manager" },
    {
      label: "dashboard.courses",
      path: "/dashboard/manager/courses?sort=latest",
    },
    { label: "dashboard.schedule", path: "/dashboard/manager/schedule" },
    { label: "dashboard.reports", path: "/dashboard/manager/reports" },
  ],
  [ROLE_TEACHER]: [
    { label: "dashboard.overview", path: "/dashboard/teacher" },
    { label: "dashboard.schedule", path: "/dashboard/teacher/schedule" },
    { label: "dashboard.classes", path: "/dashboard/teacher/classes" },
    {
      label: "dashboard.courses",
      path: "/dashboard/teacher/courses?status=active",
    },
  ],
  [ROLE_STUDENT]: [
    { label: "dashboard.overview", path: "/dashboard/student" },
    {
      label: "dashboard.courses",
      path: "/dashboard/student/courses?status=active",
    },
    { label: "dashboard.schedule", path: "/dashboard/student/schedule" },
    { label: "dashboard.grades", path: "/dashboard/student/grades" },
  ],
};
