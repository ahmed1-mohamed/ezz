import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Chat",
  description: "Internal messaging and communication between platform users.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}