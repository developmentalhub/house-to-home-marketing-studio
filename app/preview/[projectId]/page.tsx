import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PreviewProjectClient from "./PreviewProjectClient";

import {
  getPreviewProject,
  previewProjects,
} from "@/lib/previewProjects";

type PageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = getPreviewProject(projectId);

  if (!project) {
    return {};
  }

  return {
    title: `${project.shortName} Cabinetry Presentation Preview`,
    description: project.description,

    alternates: {
      canonical: `https://www.realestatemediahouse.net/preview/${project.id}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(previewProjects).map(
    (projectId) => ({
      projectId,
    }),
  );
}

export default async function PreviewProjectPage({
  params,
}: PageProps) {
  const { projectId } = await params;
  const project = getPreviewProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <PreviewProjectClient project={project} />
  );
}