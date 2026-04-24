import { experiences } from "@/lib/utils";
import StickyContainer from "./ui/sticky-container";
import ExperienceCard from "./experience-card";

const WorkHistorySection = () => {
  return (
    <section
      className="lg:min-h-screen space-y-24 px-5 lg:px-8 border-t-2 border-b-2 border-black lg:py-40"
      id="work-history"
    >
      <StickyContainer>
        <h2 className="uppercase w-full text-xl sm:text-4xl lg:text-6xl font-bold font-space">
          Work History
        </h2>
      </StickyContainer>
      <section className="flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </section>
    </section>
  );
};

export default WorkHistorySection;
