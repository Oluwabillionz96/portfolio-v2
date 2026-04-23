import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";

const HomePage = () => {
  return (
    <section className="space-y-10 lg:space-y-0 md:space-y-16">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </section>
  );
};

export default HomePage;
