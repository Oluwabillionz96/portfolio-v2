import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import WorkHistorySection from "@/components/work-history-section";
import ContactSection from "@/components/contact-section";

const HomePage = () => {
  return (
    <section className="space-y-10 lg:space-y-0 md:space-y-16 md:pt-20">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WorkHistorySection />
      <ContactSection />
    </section>
  );
};

export default HomePage;
