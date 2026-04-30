"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section that is intersecting
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // Root margin to trigger when the header reaches the top 20% of the screen
      { rootMargin: "0px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset if you have a sticky header (optional)
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-32 space-y-4 font-sans hidden lg:block">
      <p className="font-space font-bold uppercase text-sm tracking-widest text-black">
        Contents
      </p>
      <div className="border-l-2 border-black/10 flex flex-col relative">
        {/* Dynamic active indicator line */}
        <div 
          className="absolute left-[-2px] w-[2px] bg-black transition-all duration-300"
          style={{
            top: items.findIndex(i => i.id === activeId) > -1 
              ? `${items.findIndex(i => i.id === activeId) * 32}px` 
              : '0px',
            height: '32px',
            opacity: activeId ? 1 : 0
          }}
        />
        
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(e, item.id)}
            className={cn(
              "block py-1.5 text-sm transition-colors duration-200 h-[32px] flex items-center",
              item.level === 3 ? "pl-8" : "pl-4",
              activeId === item.id
                ? "text-black font-bold"
                : "text-muted-foreground hover:text-black hover:bg-black/5"
            )}
          >
            <span className="line-clamp-1">{item.text}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
