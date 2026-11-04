import type { Metadata } from "next";
import ReadyMarketListPage from "@/features/ready-market/pages/ReadyMarketListPage";

export const metadata: Metadata = { title: "Ready Market" };

export default function Page() {
  return <ReadyMarketListPage />;
}
