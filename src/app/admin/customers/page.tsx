import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Customers | Property Adviser",
  description: "View and manage active buyers, clients, and customer history.",
};

export default function CustomersPage() {
  return <ClientPage />;
}
