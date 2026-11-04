import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Meetings",
  description: "Schedule, view, and manage meetings between clients, experts, and property teams.",
};

export const dynamic = "force-dynamic";

export default function Page(props: any) {
  return <ClientPage {...props} />;
}
