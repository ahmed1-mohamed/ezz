import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Cities",
  description: "Manage cities and regional data used across property and project listings.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}