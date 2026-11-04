import type { Metadata } from "next";
import DashboardExpertHome from "@/components/dashboardExperts/Home/DashboardExpertHome";

export const metadata: Metadata = {
  title: "Expert Dashboard",
  description: "Your expert portal overview — upcoming bookings, recent transactions, and performance summary.",
};

export default function page() {
  return (
    <DashboardExpertHome />
  );
}
