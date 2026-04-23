import { projects } from "@/lib/utils";
import StickyContainer from "./ui/sticky-container";
import ProjectCard from "./project-card";

const ProjectsSection = () => {
  return (
    <section
      className="lg:min-h-screen border-t-2 border-black lg:py-32 px-5 lg:px-7"
      id="projects"
    >
      <StickyContainer>
        <h2 className="uppercase lg:pb-12 lg:border-b-2  border-black w-full text-xl sm:text-4xl lg:text-6xl font-bold font-space md:flex">
          Featured Projects
        </h2>
      </StickyContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-10 lg:gap-0">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
