import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview of property management activity, recent transactions, bookings, and key performance metrics.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}