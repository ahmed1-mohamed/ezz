import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Properties",
  description: "View and manage all property listings, unit types, pricing, and availability.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}