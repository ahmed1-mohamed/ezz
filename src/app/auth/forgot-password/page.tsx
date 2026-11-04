import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your Property Adviser account password.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}