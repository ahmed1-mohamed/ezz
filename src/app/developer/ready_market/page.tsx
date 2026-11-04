import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Ready Market",
  description: "Browse and manage ready-to-sell properties available in the current market.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}
