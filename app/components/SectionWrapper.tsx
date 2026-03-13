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
    <section id={id} className={`w-full relative ${className}`}>
      {children}
    </section>
  );
}
