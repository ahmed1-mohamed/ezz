import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Property Adviser account to access your dashboard.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}