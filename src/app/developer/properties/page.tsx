import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "My Properties",
  description: "Manage property listings associated with your development projects.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}