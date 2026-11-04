import type { Metadata } from "next";
import DashboardLayout from "@/components/layout/dashboard-layout";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    template: "%s | Property Adviser",
    default: "Developer Portal | Property Adviser",
  },
};

export default function DeveloperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
