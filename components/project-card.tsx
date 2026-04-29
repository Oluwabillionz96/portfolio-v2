import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
  liveUrl: string;
  index: number;
}
const ProjectCard = ({
  imageSrc,
  imageAlt,
  projectName,
  projectDescription,
  projectLink,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <article className="relative">
      <div
        className={cn(
          "lg:p-16 h-160 lg:h-150 border bg-white overflow-hidden relative z-20 lg:z-0 lg:border-0 p-4 border-black space-y-8 lg:border-b-2",
          index % 2 === 0 ? "lg:border-r-2" : "lg:border-l-2",
        )}
      >
        <div className=" relative w-full lg:h-2/3 h-1/2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="lg:grayscale object-cover object-top hover:grayscale-0 transition-all duration-300 ease-in-out scale-100 hover:scale-105"
          />
        </div>
        <section className="flex-col flex justify-evenly h-1/2 lg:h-1/3">
          <h3 className="text-3xl font-medium font-space uppercase">
            {projectName}
          </h3>
          <p className="font-sans">{projectDescription}</p>

          <div className="flex gap-2 lg:justify-end justify-center">
            <Link
              href={liveUrl}
              className="flex justify-center py-2 md:justify-start bg-black text-white md:bg-transparent w-full md:text-black uppercase text-sm font-bold md:w-fit font-space items-center group transition-all duration-500 hover:underline hover:decoration-black hover:decoration-2 hover:gap-1"
            >
              View Project
              <ArrowUpRight
                className="group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
                size={20}
              />
            </Link>
            <Link
              href={projectLink}
              className="flex justify-center py-2 border border-black md:border-none md:justify-start uppercase text-sm font-bold w-full md:w-fit font-space items-center group transition-all duration-500 hover:underline hover:decoration-black hover:decoration-2 hover:gap-1"
            >
              Read Case Study
              <ChevronRight
                className="group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                size={20}
              />
            </Link>
          </div>
        </section>
      </div>
      <div className="border-black lg:hidden border-2 w-full h-160 absolute -top-4 -right-4" />
    </article>
  );
};

export default ProjectCard;
