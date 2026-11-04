import { UsersClient } from "./UsersClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "Manage platform users, assign roles, and control access permissions.",
};

export default function UsersPage() {
  return <UsersClient />;
}