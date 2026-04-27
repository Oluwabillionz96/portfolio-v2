import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h2 className="text-4xl md:text-6xl font-bold font-space uppercase mb-4">
        Project Not Found
      </h2>
      <p className="text-xl text-muted-foreground font-sans mb-8">
        The project you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/#projects"
        className="flex items-center gap-2 text-sm font-bold font-space uppercase hover:gap-3 transition-all border-2 border-black px-6 py-3"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>
    </section>
  );
}
