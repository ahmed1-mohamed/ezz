import type { Metadata } from "next";
import CreateAdPage from "./page.client";

export const metadata: Metadata = {
  title: "Create Advertisement",
  description: "Create a new advertisement campaign",
};

export default function Page() {
  return <CreateAdPage />;
}
