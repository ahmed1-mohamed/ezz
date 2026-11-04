import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Team | Property Adviser",
  description: "Manage sales team members, agents, and individual performance.",
};

export default function TeamPage() {
  return <ClientPage />;
}
