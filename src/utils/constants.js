export const ROLE_ADMIN = "Admin";
export const ROLE_MANAGER = "Manager";
export const ROLE_EMPLOYEE = "Employee";
export const ROLE_CUSTOMER = "Customer";

export const ROLE_NAVIGATION = {
  Admin: [
    { label: "Overview", path: "/dashboard/admin" },
    { label: "Users", path: "/dashboard/admin/users" },
    { label: "Settings", path: "/dashboard/admin/settings" },
  ],
  Manager: [
    { label: "Overview", path: "/dashboard/manager" },
    { label: "Projects", path: "/dashboard/manager/projects" },
    { label: "Reports", path: "/dashboard/manager/reports" },
  ],
  Employee: [
    { label: "Overview", path: "/dashboard/employee" },
    { label: "Tasks", path: "/dashboard/employee/tasks" },
    { label: "Schedule", path: "/dashboard/employee/schedule" },
  ],
  Customer: [
    { label: "Overview", path: "/dashboard/customer" },
    { label: "Orders", path: "/dashboard/customer/orders" },
    { label: "Support", path: "/dashboard/customer/support" },
  ],
};
