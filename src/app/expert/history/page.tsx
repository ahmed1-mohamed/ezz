import type { Metadata } from "next";
import HistoryData from "@/components/dashboardExperts/history/HistoryData";

export const metadata: Metadata = {
  title: "History",
  description: "Your complete history of past bookings, consultations, and completed engagements.",
};

export default function page() {
  return (
    <HistoryData />
  );
}
