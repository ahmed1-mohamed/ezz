import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Targets & Commission | Property Adviser",
  description: "Set sales targets, commission structures, and track monthly achievements.",
};

export default function TargetsCommissionPage() {
  return <ClientPage />;
}
