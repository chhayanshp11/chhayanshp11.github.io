"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("page-exit");
    el.style.opacity = "0";
    requestAnimationFrame(() => {
      el.style.opacity = "";
      el.classList.remove("page-fade-in");
      void el.offsetWidth;
      el.classList.add("page-fade-in");
    });
  }, [pathname]);

  return (
    <div ref={ref} className="page-content">
      {children}
    </div>
  );
}
