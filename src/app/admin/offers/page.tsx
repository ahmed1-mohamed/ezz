import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Offers",
  description: "Manage promotional offers and special deals tied to properties and projects.",
};

export default function Page(props: any) {
  return <ClientPage {...props} />;
}