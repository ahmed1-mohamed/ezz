import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Experts",
  description: "Manage real estate experts — view profiles, bookings, transactions, and performance reviews.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}