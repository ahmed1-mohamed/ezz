import type { Metadata } from "next";
import ReadyUnitCreatePage from "@/features/ready-market/pages/ReadyUnitCreatePage";

export const metadata: Metadata = { title: "Create Ready Unit" };

export default function Page() {
  return <ReadyUnitCreatePage />;
}
