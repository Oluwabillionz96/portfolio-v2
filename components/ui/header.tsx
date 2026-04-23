import { navLinks } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="md:flex hidden bg-white border-b font-space justify-between py-6 px-8 fixed w-full top-0 left-0 right-0">
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href} className="py-1 px-3">
            <a href={link.href} className="uppercase text-sm font-bold">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <Button
        className="uppercase rounded-none border-2 border-black py-2 px-6 text-sm font-bold"
        variant="outline"
      >
        Resume
      </Button>
    </header>
  );
};

export default Header;
