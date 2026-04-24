import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ExperienceCardProps {
  year: { from: number; to: number };
  position: string;
  desc: string;
  company: {
    name: string;
    websiteUrl: string;
  };
}

const ExperienceCard = ({
  year,
  position,
  desc,
  company,
}: ExperienceCardProps) => {
  return (
    
    <article className="flex  lg:flex-row flex-col border-2 lg:border-0 py-12 px-4 lg:px-0 gap-4 lg:border-b-2 border-black">
      <div className="flex-1 flex items-start">
        <p className="font-bold text-xs font-space uppercase">
          {year.from} —{" "}
          {new Date(year.to).getFullYear() ===
          new Date(Date.now()).getFullYear()
            ? "Present"
            : year.to}
        </p>
      </div>
      <div className="flex-2 space-y-2">
        <h3 className="lg:text-4xl text-3xl uppercase font-medium font-space tracking-[-0.32px]">
          {position}
        </h3>
        <p className="font-sans text-sm md:text-base">{desc}</p>
      </div>
      <div className="flex-1 flex justify-end">
        <Link
          href={company.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-xs h-fit flex gap-1 whitespace-nowrap group font-space hover:underline decoration-2 decoration-black  uppercaser"
        >
          {company.name}
          <ArrowUpRight
            size={18}
            className="lg:invisible group-hover:visible"
          />
        </Link>
      </div>
    </article>
  );
};

export default ExperienceCard;
