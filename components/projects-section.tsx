import { projects } from "@/lib/utils";
import StickyContainer from "./ui/sticky-container";
import ProjectCard from "./project-card";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section
      className="lg:min-h-screen border-t-2 border-black lg:py-32 px-5 lg:px-7"
      id="projects"
    >
      <StickyContainer className="lg:pb-12 lg:border-b-2 lg:border-black flex justify-between items-center">
        <h2 className="uppercase w-full text-xl sm:text-4xl lg:text-6xl font-bold font-space md:flex">
          Featured Projects
        </h2>
        <Link
          href={"/archive"}
          className="font-space text-sm lg:flex hidden gap-2 hover:underline decoration-2 group items-center whitespace-nowrap font-semibold"
        >
          View Full Project Archive{" "}
          <ArrowUpRight className="group-hover:rotate-45 hover:translate-x-2 transition-all duration-300" />
        </Link>
      </StickyContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-10 lg:gap-0">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
      <Link
        href={"/archive"}
        className="flex gap-1 text-sm underline decoration-2 justify-end mt-10  lg:hidden font-sans items-center"
      >
        <p className="font-medium">View Full Project Archive</p>
        <ArrowRight size={16} className="animate-shake" />
      </Link>
    </section>
  );
};

export default ProjectsSection;
