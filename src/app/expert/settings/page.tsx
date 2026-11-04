import type { Metadata } from "next";
import TabsDemo from "@/components/dashboardExperts/Settings/TabsDemo";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your expert profile, availability, notification preferences, and account settings.",
};

export default function page() {
  return (
    <TabsDemo />
  );
}