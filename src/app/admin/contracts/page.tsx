import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Contracts | Property Adviser",
  description: "Track and manage sales contracts, signatures, and payment schedules.",
};

export default function ContractsPage() {
  return <ClientPage />;
}
