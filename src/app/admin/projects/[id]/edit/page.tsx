import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Edit Project",
  description: "Edit real estate project information, units, pricing, location, and SEO settings.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}
