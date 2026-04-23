import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  { title: "Experience", href: "#experience" },
  {
    title: "Contact",
    href: "#contact",
  },
];
