import { ArrowDown, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen py-24 px-8 space-y-16 ">
      <header className="space-y-4">
        <h1 className="uppercase font-bold font-space text-8xl">
          Goodluck Reuben
        </h1>
        <div className="flex gap-2 items-center">
          <MapPin size={16} />
          <p className="text-xs font-bold font-space uppercase">Uyo, Nigeria</p>
        </div>
      </header>
      <section className="space-y-4">
        <p className="text-xs font-bold font-space">
          Fullstack Developer & Systems Architect
        </p>
        <h2 className="text-6xl w-3/5 font-bold font-space uppercase">
          Building technical solutions with mathematical precision and artistic
          clarity.
        </h2>
      </section>
      <div className="flex gap-4 text-xl font-sans items-center">
        <ArrowDown />
        <p>Selected Projects</p>
      </div>
    </section>
  );
};

export default HeroSection;
