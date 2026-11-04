import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Developers",
  description: "Manage real estate developer profiles, projects, and associated property listings.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}