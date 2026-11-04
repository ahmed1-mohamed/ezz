import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Ads",
  description: "Create and manage promotional ads for your property and project listings.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}
