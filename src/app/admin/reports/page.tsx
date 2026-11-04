import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Reports",
  description: "Access analytics reports on properties, bookings, revenues, and platform performance.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}