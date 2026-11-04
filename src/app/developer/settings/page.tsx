import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your developer account settings, company profile, and notification preferences.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}
