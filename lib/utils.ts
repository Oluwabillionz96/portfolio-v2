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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiNlwB50Pd-mo2_lWxinXr0amuoFGVWI8P_vUVXP3bXyt1To4weo34idIQoV3D7OgTZc3zo-xR-_5x2YJCtcJGfHULNA7urKRfvYV5orMhq5-GTZL32PoXDyHsORjnYuolPeSWJiR_hrso65HhWSoIeQFpGN3fkd5yjvbi0mjRbMHt-F6QlgyHl-EWyqmfK4UbmQD1ItJXluHjfrVXIDKOyQ7H_9WQTZTQ7JLn_a-RB4qvteYjeWX44FAKDSOsnE2TX_I6qDZf_Nk",
    imageAlt: "Aether Protocol Dashboard",
    projectName: "Aether Protocol",
    projectDescription: `High-frequency trading interface built for sub-50ms latency. Optimized
for complex data visualization and real-time decision making.`,
    projectLink: "#",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwx6xkr9nMqd7PzcSndxBndOFlM3_0ITI2fO7atenKdEVUSYHyDrHig4mJ8-io0DONHiTB_5xzpqF1ElT_3MzfA5wmAQRHWAWcJS-DvHMfUgnb7elj-l6Jjx-_2S1ovIpYqFTDzSLO4l3MEP9VIUncREHn70Dg9HtPBXaZDgQ5t6I5BoMqDgLVJZj_DgaoxV69hhjCMudA1WifG3pNADAKd4wbxjRnzh2yEUEHfcVdN6S3HgX9Ac757b7BQjcBR6sspUXljFe8MKc",
    imageAlt: "",
    projectName: "Kinetic CMS",
    projectDescription: `A headless content management system specifically engineered for
high-end fashion boutiques requiring extreme uptime and speed.`,
    projectLink: "#",
  },
];

export const experiences = [
  {
    year: { from: 2025, to: Date.now() },
    position: "Frontend Developer",
    desc: "Collaborate with a cross-functional team of developers and designers to build and maintain critical UI components used to power the Chaindustry App",
    company: {
      name: "Chaindustry",
      websiteUrl: "https://www.chaindustry.io",
    },
  },
  {
    year: { from: 2025, to: Date.now() },
    position: "Frontend Developer",
    desc: "Developing, maintaining and shipping production code for Digemart, one of Adom labs product.",
    company: {
      name: "Adom Labs",
      websiteUrl: "https://adomlabs.com",
    },
  },
];
