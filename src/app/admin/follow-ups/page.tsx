import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Follow-ups | Property Adviser",
  description: "Schedule and manage follow-ups, calls, and meetings with clients.",
};

export default function FollowUpsPage() {
  return <ClientPage />;
}
