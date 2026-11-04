import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Activity Log",
  description: "Monitor platform-wide user activity, system events, and audit trail entries.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}