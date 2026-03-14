import Image from "next/image";
import "../style/timeline.css";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useOnScreen } from "../hooks/useOnScreen";
import textsEn from "../../lang/data-texts-en";
import { useMobile } from "../hooks/useMobile";

// Propriétés de Timeline
type Props = {
  className?: string;
};

// Propriétés de TimelineText
type TimelineTextProps = {
  name: string;
  desc: string;
  date?: string;
  location?: string;
  right?: boolean;
  subRoles?: { title: string; date: string }[];
  tab?: string;
  targetId?: string;
};

// Propriétés de TimelineStep
type TimelineStepProps = {
  name: string;
  desc: string;
  date: string;
  location?: string;
  right?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  subRoles?: { title: string; date: string }[];
  logoSrc?: string;
  tab?: string;
  targetId?: string;
};

// Propriétés de TimelineDate
type TimelineDateProps = {
  date: string;
  right?: boolean;
};

/**
 * @TimelineText
 *
 * @description Affiche le titre et la description de l'étape.
 */
const TimelineText = ({
  name,
  desc,
  date,
  location,
  right = false,
  subRoles,
  tab,
  targetId,
}: TimelineTextProps) => {
  const isMobile = useMobile();
  const effectiveRight = isMobile ? true : right;

  const handleTimelineClick = () => {
    if (!tab) return;

    // 1. Dispatch event to switch tab in ExperienceEducation
    window.dispatchEvent(new CustomEvent("setExperienceTab", { detail: tab }));

    // 2. Scroll to ExperienceEducation section
    const expSection = document.getElementById("experience-education");
    if (expSection) {
      expSection.scrollIntoView({ behavior: "smooth" });
    }

    // 3. Scroll specific card into view after a delay
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Optional: briefly highlight it
          element.classList.add("ring-2", "ring-[#a2fff4]", "ring-offset-4", "ring-offset-transparent");
          setTimeout(() => {
            element.classList.remove("ring-2", "ring-[#a2fff4]", "ring-offset-4", "ring-offset-transparent");
          }, 2000);
        }
      }, 800);
    }
  };

  return (
    <div
      onClick={handleTimelineClick}
      className={cn(
        "p-fluide-anim flex flex-col hover:scale-105 transition-all cursor-pointer group/item",
        isMobile ? "w-full pl-4 items-start py-2" : "w-20 md:w-72 lg:min-h-24 items-center",
        effectiveRight
          ? "timeline-end hover:translate-x-3"
          : "timeline-start hover:-translate-x-3",
      )}
    >
      {isMobile && date && (
        <span className="text-xs text-white/40 mb-1 font-medium tracking-wider uppercase">
          {date}
        </span>
      )}

      {/* Company / Institution name */}
      <span
        className={cn(
          "text-lg/5 opacity-90 lg:text-xl/5 group-hover/item:text-[#a2fff4] transition-colors",
          isMobile ? "text-left" : "text-center",
          fontJersey15.className,
        )}
      >
        {name}
      </span>

      {/* Location */}
      {location && (
        <span className={cn("text-xs text-[#a2fff4]/40 mt-0.5", isMobile ? "text-left" : "text-center", fontInter.className)}>
          📍 {location}
        </span>
      )}

      {/* Position title */}
      <div
        className={cn(
          "mt-1.5 text-sm text-[#a2fff4]/80",
          isMobile ? "text-left mb-2" : "text-center hidden md:inline-block",
          fontInter.className,
        )}
      >
        {desc}
      </div>
      {/* Sub-roles for grouped entries (e.g. LPL) */}
      {subRoles && subRoles.length > 0 && (
        <div className={cn("mt-2.5 w-full", isMobile ? "block" : "hidden md:block")}>
          {subRoles.map((role, i) => (
            <div
              key={i}
              className={cn(
                "flex items-baseline justify-between py-1",
                i < subRoles.length - 1 ? "border-b border-[#6aceff]/10" : "",
                fontInter.className,
              )}
            >
              <span className={cn("text-sm text-[#c4ebff]/90", isMobile && "text-xs")}>{role.title}</span>
              <span className="text-xs opacity-40 ml-2 shrink-0">{role.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * @TimelineMiddle
 *
 * @description Logo or dot on the timeline line.
 */
const TimelineMiddle = ({ logoSrc }: { logoSrc?: string }) => {
  return (
    <div className="timeline-middle">
      {logoSrc ? (
        <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-md overflow-hidden relative">
          <Image 
            src={logoSrc} 
            alt="logo" 
            fill
            className="object-cover rounded-full" 
          />
        </div>
      ) : (
        <div className="w-3 h-3 rounded-full bg-[#a2fff4] shadow-[0_0_8px_rgba(162,255,244,0.6)]" />
      )}
    </div>
  );
};

/**
 * @TimelineDate
 */
const TimelineDate = ({ date, right = false }: TimelineDateProps) => {
  const isMobile = useMobile();
  if (isMobile) return null; // Date is handled inside TimelineText on mobile

  return (
    <div
      className={cn(
        "text-xs opacity-75",
        right ? "timeline-end" : "timeline-start",
      )}
    >
      {date}
    </div>
  );
};

/**
 * @TimelineStep
 */
const TimelineStep = ({
  name,
  desc,
  date,
  location,
  right = false,
  isFirst = false,
  isLast = false,
  subRoles,
  logoSrc,
  tab,
  targetId,
}: TimelineStepProps) => {
  return (
    <li>
      <hr className={cn(isFirst ? "first-hr" : "", "dark:invert")} />
      <TimelineMiddle logoSrc={logoSrc} />
      <TimelineText
        name={name}
        desc={desc}
        date={date}
        location={location}
        right={right}
        subRoles={subRoles}
        tab={tab}
        targetId={targetId}
      />
      <TimelineDate date={date} right={!right} />
      <hr className={cn(isLast ? "last-hr" : "", "dark:invert")} />
    </li>
  );
};

/**
 * @Timeline
 * Fonction principale
 */
function Timeline({ className = "" }: Props) {
  const isMobile = useMobile();
  // Référence pour l'apparition au scroll
  const [lineRef, lineVisible] = useOnScreen<HTMLUListElement>();

  // Récupération du textes
  const texts = textsEn;

  return (
    <ul
      ref={lineRef}
      className={cn(
        "timeline transition-[transform,opacity] duration-700 ease-out lg:timeline-vertical max-lg:timeline-vertical max-lg:px-4",
        isMobile ? "timeline-snap-icon" : "",
        className,
        lineVisible
          ? ""
          : "translate-y-8 opacity-0 lg:translate-y-0 lg:-translate-x-20",
      )}
    >
      {/* LPL Financial — grouped with sub-roles */}
      <TimelineStep
        name="LPL Financial"
        desc=""
        date="2023 - Present"
        location={texts.about.timeline.lpl0.location}
        isFirst
        logoSrc="https://www.google.com/s2/favicons?domain=lpl.com&sz=128"
        tab="experience"
        targetId="lpl-financial"
        subRoles={[
          { title: texts.about.timeline.lpl0.desc, date: texts.about.timeline.lpl0.date },
          { title: texts.about.timeline.lpl1.desc, date: texts.about.timeline.lpl1.date },
          { title: texts.about.timeline.lpl2.desc, date: texts.about.timeline.lpl2.date },
          { title: texts.about.timeline.lpl3.desc, date: texts.about.timeline.lpl3.date },
        ]}
      />

      {/* Education (UTD) */}
      <TimelineStep
        name={texts.about.timeline.utd.name}
        desc={texts.about.timeline.utd.desc}
        date={texts.about.timeline.utd.date}
        location={texts.about.timeline.utd.location}
        right
        logoSrc="https://www.google.com/s2/favicons?domain=utdallas.edu&sz=128"
        tab="education"
        targetId="university-of-texas-at-dallas"
      />

      {/* Infosys */}
      <TimelineStep
        name={texts.about.timeline.oxyl.name}
        desc={texts.about.timeline.oxyl.desc}
        date={texts.about.timeline.oxyl.date}
        location={texts.about.timeline.oxyl.location}
        logoSrc="https://www.google.com/s2/favicons?domain=infosys.com&sz=128"
        tab="experience"
        targetId="infosys-limited"
      />

      {/* Worldsoft Technologies */}
      <TimelineStep
        name={texts.about.timeline.sopra.name}
        desc={texts.about.timeline.sopra.desc}
        date={texts.about.timeline.sopra.date}
        location={texts.about.timeline.sopra.location}
        right
        logoSrc="https://www.google.com/s2/favicons?domain=worldsoftit.com&sz=128"
        tab="experience"
        targetId="worldsoft-technologies"
      />

      {/* Jabalpur Engineering College */}
      <TimelineStep
        name={texts.about.timeline.jec.name}
        desc={texts.about.timeline.jec.desc}
        date={texts.about.timeline.jec.date}
        location={texts.about.timeline.jec.location}
        isLast
        logoSrc="/img/jec_logo.png"
        tab="education"
        targetId="jabalpur-engineering-college"
      />
    </ul>
  );
}

export default Timeline;
