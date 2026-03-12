"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const MobileContext = createContext(false);

export function MobileProvider({ children, breakpoint = 768 }: { children: React.ReactNode, breakpoint?: number }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return <MobileContext.Provider value={hasMounted ? isMobile : false}>{children}</MobileContext.Provider>;
}

export function useMobile() {
  return useContext(MobileContext);
}
