import { projects } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import fs from "fs";
import path from "path";
import TableOfContents from "@/components/table-of-contents";

import { ReactNode, ReactElement, isValidElement } from "react";

// Helper functions for parsing text out of React elements to generate IDs
const extractText = (node: ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (Array.isArray(node)) return node.map(extractText).join("");

  // Use isValidElement and provide a specific type for the props
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    if (element.props && element.props.children) {
      return extractText(element.props.children);
    }
  }

  return "";
};

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Goodluck Reuben",
      description: "View my web development case studies.",
    };
  }

  return {
    title: `${project.projectName} | Goodluck Reuben`,
    description: project.projectDescription,
    openGraph: {
      title: `${project.projectName} | Goodluck Reuben`,
      description: project.projectDescription,
      url: `https://goodluckreuben.netlify.app/project/${project.id}`,
      images: [
        {
          url: project.imageSrc,
          width: 1200,
          height: 630,
          alt: project.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.projectName} | Goodluck Reuben`,
      description: project.projectDescription,
      images: [project.imageSrc],
      creator: "@gudluck_reuben",
    },
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

  // Parse headers for Table of Contents
  const tocItems = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^(##|###)\s+(.*)/);
    if (match) {
      const level = match[1].length; // 2 or 3
      // Remove any markdown links from the header text for the TOC label
      const text = match[2].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
      const tocId = slugify(text);
      tocItems.push({ id: tocId, text, level });
    }
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
              className="rounded-none w-full md:w-fit font-space uppercase font-bold py-6 px-8 text-base border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
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
              className="rounded-none w-full md:w-fit font-space uppercase font-bold py-6 px-8 text-base border-2 border-black hover:bg-black hover:text-white transition-colors"
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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-16 w-full">
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
              h2: ({ children }) => {
                const text = extractText(children);
                return (
                  <h2
                    id={slugify(text)}
                    className="text-3xl md:text-4xl font-bold font-space uppercase mt-16 mb-8 border-b-2 border-black pb-4 scroll-mt-24"
                  >
                    {children}
                  </h2>
                );
              },
              h3: ({ children }) => {
                const text = extractText(children);
                return (
                  <h3
                    id={slugify(text)}
                    className="text-xl md:text-2xl font-bold font-space uppercase mt-8 mb-4 scroll-mt-24"
                  >
                    {children}
                  </h3>
                );
              },
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

        {/* Sidebar Table of Contents */}
        <aside className="relative">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </section>
  );
}
