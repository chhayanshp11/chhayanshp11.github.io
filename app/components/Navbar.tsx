"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconSun, IconMoon } from "@tabler/icons-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Beyond Code", href: "#photography" },
];

function PersonaToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const isPhotography = pathname === "/photography";

  const navigateWithTransition = useCallback(
    (href: string) => {
      if ((href === "/" && !isPhotography) || (href === "/photography" && isPhotography)) return;
      const content = document.querySelector(".page-content");
      if (content) {
        content.classList.add("page-exit");
        setTimeout(() => router.push(href), 250);
      } else {
        router.push(href);
      }
    },
    [isPhotography, router],
  );

  return (
    <div
      className={cn(
        "flex h-8 items-center gap-0 rounded-full border backdrop-blur-sm",
        isPhotography
          ? "border-[#f0c56d]/30 bg-zinc-900/60"
          : "border-zinc-300 dark:border-zinc-500 bg-white/60 dark:bg-zinc-700/60",
      )}
    >
      <button
        onClick={() => navigateWithTransition("/")}
        className={cn(
          "flex items-center gap-1.5 px-3 h-full rounded-full transition-all duration-300 text-xs font-medium cursor-pointer",
          !isPhotography
            ? "bg-accent/20 text-accent dark:bg-accent/30 dark:text-blue-300"
            : "text-white/40 hover:text-white/70",
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        Engineer
      </button>
      <div className={cn("h-3 w-px", isPhotography ? "bg-[#f0c56d]/20" : "bg-zinc-300 dark:bg-zinc-500")} />
      <button
        onClick={() => navigateWithTransition("/photography")}
        className={cn(
          "flex items-center gap-1.5 px-3 h-full rounded-full transition-all duration-300 text-xs font-medium cursor-pointer",
          isPhotography
            ? "bg-[#f0c56d]/20 text-[#f0c56d]"
            : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-white",
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        Explorer
      </button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isPhotography = pathname === "/photography";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark || isPhotography);
  }, [dark, isPhotography]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <PersonaToggle />

        {/* Desktop links */}
        {isHome && (
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          {!isPhotography && (
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
            </button>
          )}
          {isHome && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isHome && menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
