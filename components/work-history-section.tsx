import { experiences } from "@/lib/utils";
import StickyContainer from "./ui/sticky-container";
import ExperienceCard from "./experience-card";

const WorkHistorySection = () => {
  return (
    <section
      className="lg:min-h-screen lg:space-y-24 space-y-4 px-5 lg:px-8 border-t-2 border-b-2 border-black lg:py-40 py-4"
      id="work-history"
    >
      <StickyContainer>
        <h2 className="uppercase w-full text-xl sm:text-4xl lg:text-6xl font-bold font-space">
          Work History
        </h2>
      </StickyContainer>
      <section className=" gap-6 lg:gap-0 grid md:grid-cols-2 lg:grid-cols-1">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </section>
    </section>
  );
};

export default WorkHistorySection;
