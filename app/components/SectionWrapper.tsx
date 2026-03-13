"use client";

type SectionWrapperProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export default function SectionWrapper({
  className = "",
  children,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full min-h-screen relative flex flex-col items-center justify-center py-20 scroll-snap-align-start scroll-snap-stop-always ${className}`}
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      {children}
    </section>
  );
}
