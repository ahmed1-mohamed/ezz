import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Leads | Property Adviser",
  description: "Track and manage sales leads, status, and inquiries.",
};

export default function LeadsPage() {
  return <ClientPage />;
}
