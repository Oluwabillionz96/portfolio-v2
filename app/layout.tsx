import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goodluckreuben.netlify.app"),
  title: "Goodluck Reuben",
  description:
    "Goodluck Reuben is a frontend developer who builds and ships production web applications.",
  keywords: [
    "Goodluck Reuben",
    "Frontend Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
  ],
  authors: [
    { name: "Goodluck Reuben", url: "https://github.com/oluwabillionz96" },
  ],
  creator: "Goodluck Reuben",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goodluckreuben.netlify.app",
    title: "Goodluck Reuben",
    description:
      "Goodluck Reuben is a frontend developer who builds and ships production web applications.",
    siteName: "Goodluck Reuben",
    images: [
      {
        url: "https://res.cloudinary.com/dlore0dyu/image/upload/v1777564782/Gemini_Generated_Image_jcas6pjcas6pjcas_oiqk5p.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Goodluck Reuben Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodluck Reuben",
    description:
      "Goodluck Reuben is a frontend developer who builds and ships production web applications.",
    creator: "@gudluck_reuben",
    images: [
      "https://res.cloudinary.com/dlore0dyu/image/upload/v1777564782/Gemini_Generated_Image_jcas6pjcas6pjcas_oiqk5p.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:border-2 focus:border-black focus:font-bold focus:uppercase focus:text-xs tracking-widest"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className=" py-10  max-w-[1440px] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
