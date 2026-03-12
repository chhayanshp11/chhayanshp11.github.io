"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import { useMobile } from "../hooks/useMobile";

type SectionWrapperProps = {
  offset: number;
  factor?: number;
  speed?: number;
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export default function SectionWrapper({
  offset,
  factor = 1,
  speed = 0,
  className = "",
  children,
  id,
}: SectionWrapperProps) {
  const isMobile = useMobile();

  if (isMobile) {
    // Render standard flowing block for mobile
    return (
      <section id={id} className={`w-full relative ${className}`}>
        {children}
      </section>
    );
  }

  // Render original Parallax block for desktop
  return (
    <ParallaxLayer
      offset={offset}
      factor={factor}
      speed={speed}
      className={className}
    >
      {children}
    </ParallaxLayer>
  );
}
