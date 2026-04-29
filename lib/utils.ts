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
    id: "photoverse",
    imageSrc:
      "https://res.cloudinary.com/dlore0dyu/image/upload/v1777311287/Macbook-Air-1558.998291015625x975_qqcnzd.png",
    imageAlt: "Desktop screenshot of Photoverse landing page",
    projectName: "Photoverse",
    projectDescription: `A photo storage app that lets you store, organize, and access your photos without relying on device storage. Built, broken, and rebuilt with real-world lessons`,
    projectLink: "/project/photoverse",
    liveUrl: "https://photoverse-eight.vercel.app/",
    repoUrl: "https://github.com/Oluwabillionz96/photoverse",
  },
  {
    id: "chaindustry-app",
    imageSrc:
      "https://res.cloudinary.com/dlore0dyu/image/upload/v1777300524/portfoilio-chaindustry-v2_l08ev7.png",
    imageAlt: "Desktop screenshot of Chaindustry App hero section",
    projectName: "Chaindustry App",
    projectDescription: `Chaindustry is a task-to-earn platform where users complete micro-tasks and earn rewards through structured task creation, review, and delegation systems.`,
    projectLink: "/project/chaindustry-app",
    liveUrl: "https://app.chaindustry.io",
  },
];

export const experiences = [
  {
    year: { from: 2025, to: Date.now() },
    position: "Frontend Developer",
    desc: "Working on frontend development across multiple Adom Labs products, building core layouts, pages, and reusable components. Integrating APIs and developing responsive interfaces across features, collaborating with other developers to ship and refine product experiences.",
    company: {
      name: "Adom Labs",
      websiteUrl: "https://adomlabs.com",
    },
  },
  {
    year: { from: 2025, to: 2026 },
    position: "Frontend Developer",
    desc: "Improved Chaindustry’s app UI across mobile and desktop, fixing responsiveness issues and building clean, usable interfaces used by 10K+ users. Built a delegation feature that spread out task reviews and reduced review bottlenecks, alongside shipping features like in-app academy onboarding and improving overall UX.",
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
