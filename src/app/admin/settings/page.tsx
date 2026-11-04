import type { Metadata } from "next";
import SiteSettingsClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Site Settings | Dashboard",
  description: "Manage your site settings, app settings, countries, currencies, and policies.",
};

export default function Page() {
  return <SiteSettingsClientPage />;
}