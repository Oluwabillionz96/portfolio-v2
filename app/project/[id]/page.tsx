import { projects } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(
    (project) => project.id.toLowerCase() === id.toLowerCase(),
  );
  return {
    title: project ? project.projectName : "Not Found",
    description: project ? project.projectDescription : "Project Not Found",
  };
}

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const project = projects.find(
    (project) => project.id.toLowerCase() === id.toLowerCase(),
  );

  if (!project) {
    notFound();
  }
  return <div className="uppercase">{project.projectName}</div>;
};

export default ProjectPage;
