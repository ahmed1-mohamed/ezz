import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Features",
  description: "Define and manage property and project features available for listings.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}