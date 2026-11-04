import type { Metadata } from "next";
import ReadyUnitEditPage from "@/features/ready-market/pages/ReadyUnitEditPage";

export const metadata: Metadata = { title: "Edit Ready Unit" };

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ReadyUnitEditPage id={Number(id)} />;
}
