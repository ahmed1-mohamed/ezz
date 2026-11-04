import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Offers",
  description: "Manage special offers and promotional deals for your property listings.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}
