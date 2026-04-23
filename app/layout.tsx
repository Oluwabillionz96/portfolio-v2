import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "GoodLuck Reuben",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans selection:bg-black selection:text-white",
        inter.variable,
        spaceGrotesk.variable,
      )}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:border-2 focus:border-black focus:font-bold focus:uppercase focus:text-xs tracking-widest"
        >
          Skip to content
        </a>
        <Header />
        <main
          id="main-content"
          className="md:mt-20 py-10  max-w-[1440px] mx-auto"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
