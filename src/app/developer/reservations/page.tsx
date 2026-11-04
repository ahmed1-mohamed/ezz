import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Track client reservations for your properties and development projects.",
};

export default function Page(props: any) {

  return <ClientPage {...props} />;
}