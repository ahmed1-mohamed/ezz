import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Edit Developer",
  description: "Edit real estate developer profile, settings, and SEO information.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}
