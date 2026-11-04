import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Areas",
  description: "Manage geographic areas and districts used to categorize property listings.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}