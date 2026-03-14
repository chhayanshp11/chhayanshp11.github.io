"use client";

import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
  fullHeight?: boolean;
};

export default function SectionWrapper({
  className = "",
  children,
  id,
  fullHeight = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full relative flex flex-col items-center justify-center",
        fullHeight && "min-h-screen py-20",
        className
      )}
    >
      {children}
    </section>
  );
}
