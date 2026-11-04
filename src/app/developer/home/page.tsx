import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Developer Dashboard",
  description: "Your developer portal overview — active projects, properties, reservations, and key metrics.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}