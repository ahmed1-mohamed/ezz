import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Quotations | Property Adviser",
  description: "Create and manage property price quotes and payment plans for clients.",
};

export default function QuotationsPage() {
  return <ClientPage />;
}
