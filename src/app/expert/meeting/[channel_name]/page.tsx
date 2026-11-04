import type { Metadata } from "next";
import MeetingClient from "@/components/dashboardExperts/Meeting/MeetingClient";

export const metadata: Metadata = {
  title: "Meeting",
  description: "Join your video consultation session.",
};

export default function page() {
  return (
    <MeetingClient />
  );
}
