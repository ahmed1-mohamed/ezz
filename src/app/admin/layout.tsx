import type { Metadata } from "next";
import DashboardLayout from "@/components/layout/dashboard-layout";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    template: "%s | Property Adviser",
    default: "Dashboard | Property Adviser",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}