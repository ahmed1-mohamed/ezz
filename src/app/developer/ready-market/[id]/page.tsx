import type { Metadata } from "next";
import ReadyUnitDetailsPage from "@/features/ready-market/pages/ReadyUnitDetailsPage";

export const metadata: Metadata = { title: "Ready Unit Details" };

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ReadyUnitDetailsPage id={Number(id)} />;
}
