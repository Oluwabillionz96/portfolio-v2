import { projects } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import fs from "fs";
import path from "path";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  return {
    title: project
      ? `${project.projectName} | GoodLuck Reuben`
      : "Project Not Found",
    description:
      project?.projectDescription || "View my web development case studies.",
  };
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Load markdown content from file
  let content = "";
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      "projects",
      `${id}.md`,
    );
    content = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error("Error reading project content:", error);
    content = "Content coming soon...";
  }

  return (
    <section className="py-16 px-6 lg:py-32 lg:px-8 flex flex-col items-start gap-8 max-w-5xl mx-auto">
      <Link
        href="/#projects"
        className="flex items-center gap-2 text-sm font-bold font-space uppercase hover:gap-3 transition-all mb-8"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <header className="space-y-8 mb-12 w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-space uppercase leading-tight">
            {project.projectName}
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed">
            {project.projectDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          {project.liveUrl && (
            <Button
              asChild
              className="rounded-none font-space uppercase font-bold py-6 px-8 text-base border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
                <ExternalLink className="ml-2" size={18} />
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button
              asChild
              variant="outline"
              className="rounded-none font-space uppercase font-bold py-6 px-8 text-base border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code <Code2 className="ml-2" size={18} />
              </Link>
            </Button>
          )}
        </div>
      </header>

      <div className="w-full max-w-none">
        <ReactMarkdown
          components={{
            // Custom Image rendering
            img: ({ src, alt }) => (
              <div className="relative w-full aspect-video my-12 group overflow-hidden border-2 border-black">
                <Image
                  src={src as string}
                  alt={alt || ""}
                  fill
                  className="object-cover object-top-left transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ),
            // Custom Typography to match your theme
            h2: ({ children }) => (
              <h2 className="text-3xl md:text-4xl font-bold font-space uppercase mt-16 mb-8 border-b-2 border-black pb-4">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl md:text-2xl font-bold font-space uppercase mt-8 mb-4">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-lg md:text-xl font-sans leading-relaxed mb-8">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-4 mb-8 font-sans text-lg">
                {children}
              </ul>
            ),
            li: ({ children }) => <li className="pl-2">{children}</li>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
}
