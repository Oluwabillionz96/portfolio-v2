import { ArrowDown, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 md:py-24 md:px-8 space-y-12 md:space-y-16">
      <header className="space-y-4">
        <h1 className="uppercase font-bold font-space text-5xl sm:text-7xl md:text-8xl leading-tight">
          Goodluck Reuben
        </h1>
        <div className="flex gap-2 items-center text-muted-foreground">
          <MapPin size={16} />
          <p className="text-xs font-bold font-space uppercase tracking-wider">Uyo, Nigeria</p>
        </div>
      </header>
      <section className="space-y-4">
        <p className="text-xs font-bold font-space text-primary uppercase tracking-widest">
          Fullstack Developer & Systems Architect
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl w-full md:w-4/5 lg:w-3/5 font-bold font-space uppercase leading-tight">
          Building technical solutions with mathematical precision and artistic
          clarity.
        </h2>
      </section>
      <div className="flex gap-4 text-lg md:text-xl font-sans items-center hover:translate-y-2 transition-transform cursor-pointer">
        <ArrowDown className="animate-bounce" />
        <p className="font-medium">Selected Projects</p>
      </div>
    </section>
  );
};

export default HeroSection;
