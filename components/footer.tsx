import { socials } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:py-14 bg-white text-black md:py-10 py-6 flex-col md:flex-row px-8 border-t-2 border-black flex md:justify-between justify-center items-center gap-2 md:gap-0">
      <div className="flex gap-8">
        {socials.map((social) => (
          <Link
            href={social.href}
            key={social.name}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-xs font-medium font-space hover:underline"
          >
            {social.name}
          </Link>
        ))}
      </div>

      <p>
        &copy; {new Date().getFullYear()} -{" "}
        <Link href={"/"} className="hover:underline">
          Goodluck Reuben
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
