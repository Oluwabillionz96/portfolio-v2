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
  { title: "Work History", href: "#work-history" },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const projects = [
  {
    imageSrc:
      "https://res.cloudinary.com/dlore0dyu/image/upload/v1777298622/portfolio-photoverse_p7jj6z.png",
    imageAlt: "Desktop screenshot of Photoverse landing page",
    projectName: "Photoverse",
    projectDescription: `A photo storage app that lets you store, organize, and access your photos without relying on device storage. Built, broken, and rebuilt with real-world lessons`,
    projectLink: "#",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dlore0dyu/image/upload/v1777300524/portfoilio-chaindustry-v2_l08ev7.png",
    imageAlt: "Desktop screenshot of Chaindustry App hero section",
    projectName: "Chaindustry App",
    projectDescription: `A headless content management system specifically engineered for
high-end fashion boutiques requiring extreme uptime and speed.`,
    projectLink: "#",
  },
];

export const experiences = [
  {
    year: { from: 2025, to: Date.now() },
    position: "Frontend Developer",
    desc: "Developing, maintaining and shipping production code for Digemart, one of Adom labs product.",
    company: {
      name: "Adom Labs",
      websiteUrl: "https://adomlabs.com",
    },
  },
  {
    year: { from: 2025, to: 2026 },
    position: "Frontend Developer",
    desc: "Collaborate with a cross-functional team of developers and designers to build and maintain critical UI components used to power the Chaindustry App",
    company: {
      name: "Chaindustry",
      websiteUrl: "https://www.chaindustry.io",
    },
  },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/oluwabillionz96" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/goodluck-reuben-45502930a",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100095272218539",
  },
];
