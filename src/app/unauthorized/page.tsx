import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Unauthorized",
  description: "You do not have permission to access this page.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}