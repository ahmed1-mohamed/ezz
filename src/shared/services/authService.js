export const users = [
  {
    id: 1,
    name: "Amina Hassan",
    email: "admin@eduplatform.com",
    password: "Admin@123",
    role: "Admin",
  },
  {
    id: 2,
    name: "Malik Omar",
    email: "manager@eduplatform.com",
    password: "Manager@123",
    role: "Manager",
  },
  {
    id: 3,
    name: "Layla Nasser",
    email: "teacher@eduplatform.com",
    password: "Teacher@123",
    role: "Teacher",
  },
  {
    id: 4,
    name: "Sara Khaled",
    email: "student@eduplatform.com",
    password: "Student@123",
    role: "Student",
  },
  {
    id: 5,
    name: "Ahmed Mohamed",
    email: "parent@eduplatform.com",
    password: "Parent@123",
    role: "Parent",
  },
];

export function getRedirectPath(role) {
  if (!role) return "/login";
  switch (role.toLowerCase()) {
    case "admin":
    case "super_admin":
    case "superadmin":
      return "/dashboard/admin";
    case "manager":
      return "/dashboard/manager";
    case "teacher":
      return "/dashboard/teacher";
    case "student":
      return "/dashboard/student";
    case "parent":
      return "/dashboard/parent";
    default:
      return "/login";
  }
}
