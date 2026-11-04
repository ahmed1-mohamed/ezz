import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Subscriptions",
  description: "Manage platform subscriptions, plans, and billing information.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}