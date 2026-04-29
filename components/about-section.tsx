import StickyContainer from "./ui/sticky-container";

const AboutSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-start lg:gap-20 lg:py-32 px-6 lg:px-8 gap-4"
      id="about"
    >
      <StickyContainer>
        <h2 className="uppercase text-xl sm:text-4xl lg:text-6xl font-bold font-space md:flex">
          The Philosophy
        </h2>
      </StickyContainer>

      <section>
        <div className="text-lg md:text-xl  font-sans leading-relaxed space-y-8">
          <p>
            I build frontend systems that behave the way users expect them to,
            especially under real conditions, not just in development.
          </p>
          <p>
            I learned quickly that things rarely break in obvious ways. I ran
            into an issue where authentication worked in development but failed
            in production due to how cookies behave across subdomains. Fixing it
            meant stepping back from the UI and rethinking the architecture,
            eventually introducing a proxy layer to make the system consistent.
            That experience shaped how I approach problems: don’t patch
            symptoms, understand the system.
          </p>
          <p>
            Since then, I’ve focused on building features that hold up in
            practice, with attention to edge cases, error handling, and the
            details that define user experience. I care about structure because
            clear systems are easier to reason about and harder to break.
          </p>
          <p>
            My approach is simple: keep things straightforward. Not everything
            needs to be clever or over-engineered. The best solutions tend to be
            the ones that work reliably without drawing attention to themselves.
          </p>
          <p>
            I own features end-to-end and follow them through to completion. If
            I say I’ll handle something, it gets done.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
