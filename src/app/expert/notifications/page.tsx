import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Notifications",
  description: "View platform notifications, reservation updates, and account alerts.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}
