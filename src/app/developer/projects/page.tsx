import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Manage all your real estate development projects, phases, and units.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}