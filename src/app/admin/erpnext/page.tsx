import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "ERPNext | Property Adviser",
  description: "ERPNext embedded inside the dashboard.",
};

export default function ERPNextPage() {
  return <ClientPage />;
}
