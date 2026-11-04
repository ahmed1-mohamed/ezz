import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Transactions",
  description: "View your financial transaction history, payments received, and settlement records.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}