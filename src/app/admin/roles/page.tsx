import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Roles & Permissions",
  description: "Configure user roles and access permissions across the platform.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}