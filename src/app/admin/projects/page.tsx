import { ProjectsClient } from "./ProjectsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse and manage all real estate projects — view details, buildings, units, and payment plans.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}