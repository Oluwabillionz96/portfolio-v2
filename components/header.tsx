"use client";

import { navLinks } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Check if it's an internal hash link
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
        });
        // Update url without jumping
        window.history.pushState(null, "", href);
      }
    }
  };

  if (pathname !== "/") return null;
  return (
    <header className="md:flex hidden z-50 bg-white border-b font-space justify-between py-6 px-8 fixed w-full top-0 left-0 right-0">
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="uppercase text-black hover-fill-right py-2 px-3 hover:text-white text-sm font-bold"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <Button
        className="uppercase hover-fill-top text-black hover:text-white bg-transparent hover:bg-transparent rounded-none border-2 border-black py-2 px-6 text-sm font-bold"
        variant="outline"
      >
        Resume
      </Button>
    </header>
  );
};

export default Header;
