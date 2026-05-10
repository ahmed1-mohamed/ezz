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
];

export function getRedirectPath(role) {
  switch (role) {
    case "Admin":
      return "/dashboard/admin";
    case "Manager":
      return "/dashboard/manager";
    case "Teacher":
      return "/dashboard/teacher";
    case "Student":
      return "/dashboard/student";
    default:
      return "/login";
  }
}
