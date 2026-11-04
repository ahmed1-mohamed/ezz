import type { Metadata } from "next";
import Transactions from "@/components/dashboardExperts/Transactions/Transactions";

export const metadata: Metadata = {
  title: "My Transactions",
  description: "Review your earnings, commission records, and financial transaction history.",
};

export default function page() {
  return (
    <Transactions />
  );
}
