/**
 * @name Skills.tsx
 * @type Page
 */

"use client";

import { useOnScreen } from "./hooks/useOnScreen";
import SectionWrapper from "./components/SectionWrapper";
import { cn } from "@/lib/utils";
import { fontInter } from "@/lib/font";
import Image from "next/image";

// Import all skill data
import skillsData from "../lang/data-skills-en";

function Skills() {
  const [ref, visible] = useOnScreen<HTMLDivElement>();

  // Flatten the grouped skills data into a single array for the grid
  const allSkills = skillsData.flatMap(category => category.subSkills);

  return (
    <SectionWrapper
      id="skills-section"
      className="min-[600px] flex flex-col items-center justify-center bg-blue-9 dark:bg-blue-4 pointer-events-auto w-full"
    >
      <div
        ref={ref}
        className={cn(
          "w-full max-w-5xl px-6 md:px-12 py-24 transition-all duration-1000 ease-in-out flex flex-col items-center",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-white mb-4", fontInter.className)}>
            Technical Expertise
          </h2>
          <p className={cn("text-white/50 text-sm md:text-base", fontInter.className)}>
            A refined selection of my proficiency in modern data and development tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-12 max-w-4xl mx-auto">
          {allSkills.map((skill, index) => (
            <a 
              key={`${skill.name}-${index}`}
              href={skill.url || "#"}
              target={skill.url ? "_blank" : "_self"}
              rel={skill.url ? "noopener noreferrer" : ""}
              className={cn(
                "group flex flex-col items-center gap-3 w-20 md:w-24 transition-all duration-300 hover:-translate-y-1",
                !skill.url && "cursor-default pointer-events-none"
              )}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center relative transition-all duration-300 drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Image 
                  src={skill.image} 
                  alt={skill.name} 
                  fill
                  className="object-contain"
                />
              </div>
              <span className={cn("text-white/40 group-hover:text-white text-[10px] md:text-xs font-medium text-center transition-colors duration-300", fontInter.className)}>
                {skill.name}
              </span>
            </a>
          ))}
        </div>

        <div className={cn("text-white/30 text-[10px] mt-24 text-center tracking-wide", fontInter.className)}>
          Constantly refining and expanding my technical skillset.
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
