import { projects } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

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
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
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

      <header className="space-y-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-bold font-space uppercase leading-tight">
          {project.projectName}
        </h1>
        <p className="text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed">
          {project.projectDescription}
        </p>
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
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ),
            // Custom Typography to match your theme
            h2: ({ children }) => (
              <h2 className="text-3xl md:text-4xl font-bold font-space uppercase mt-16 mb-8 border-b-2 border-black pb-4">
                {children}
              </h2>
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
            li: ({ children }) => (
              <li className="pl-2">{children}</li>
            ),
          }}
        >
          {project.content}
        </ReactMarkdown>
      </div>
    </section>
  );
}
