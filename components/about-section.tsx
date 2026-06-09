import Link from "next/link";
import StickyContainer from "./ui/sticky-container";

const AboutSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-start lg:gap-20 lg:py-32 px-6 lg:px-8 gap-4"
      id="about"
    >
      <StickyContainer>
        <h2 className="uppercase text-xl sm:text-4xl lg:text-6xl font-bold font-space md:flex">
          My Approach
        </h2>
      </StickyContainer>

      <section>
        <div className="text-lg md:text-xl  font-sans leading-relaxed space-y-8">
          <p>
            My approach is shaped by simplicity and unpredictable user behavior.
          </p>
          <p>
            I believe software should be kept as simple as possible, free from
            complexity that doesn&apos;t add value. Not every algorithm needs to
            be clever, and not every screen needs animations, gradients, or
            visual effects. Simplicity makes products easier to understand,
            easier to use, and easier to maintain.
          </p>
          <p>
            I learned this the hard way while building{" "}
            <Link href="/project/photoverse" className="underline">
              Photoverse
            </Link>
            . I overloaded the interface with animations and heavy assets, and
            the product became noticeably slow and harder to use. On some
            devices, the experience degraded further, and users often mentioned
            slow startup and feeling overwhelmed on first load.
          </p>
          <p>
            That experience changed how I think about frontend work. Performance
            and clarity are not separate from design; they are part of it.
          </p>
          <p>The second pillar is unpredictability.</p>
          <p>
            Users are unpredictable. They&apos;ll click the wrong thing, enter
            unexpected data, lose connection, refresh at the worst possible
            moment, and somehow uncover a bug you never considered.
          </p>
          <p>
            That's why I pay close attention to edge cases. Building a feature
            is one thing. Building a feature that survives user interactions is
            another.
          </p>
          <p>
            Finally, I believe in ownership.{" "}
            <strong>If I say I&apos;ll handle something, it gets done</strong>.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
