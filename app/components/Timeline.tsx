/**
 * @name Timeline.tsx
 * @type Component
 */


import "../style/timeline.css";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useOnScreen } from "../hooks/useOnScreen";
import { useLanguage } from "../contexts/language-context";

// Propriétés de Timeline
type Props = {
  className?: string;
};

// Propriétés de TimelineText
type TimelineTextProps = {
  name: string;
  desc: string;
  right?: boolean;
  subRoles?: { title: string; date: string }[];
};

// Propriétés de TimelineStep
type TimelineStepProps = {
  name: string;
  desc: string;
  date: string;
  right?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  subRoles?: { title: string; date: string }[];
  logoSrc?: string;
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
const TimelineText = ({ name, desc, right = false, subRoles }: TimelineTextProps) => {
  return (
    <div
      className={cn(
        "p-fluide-anim flex w-20 flex-col items-center hover:scale-105 md:w-72 lg:min-h-24 transition-all cursor-pointer",
        right
          ? "timeline-end hover:translate-x-3"
          : "timeline-start hover:-translate-x-3",
      )}
    >
      {/* Company / Institution name */}
      <span
        className={cn(
          "text-center text-base/4 opacity-90 lg:text-xl/5",
          fontJersey15.className,
        )}
      >
        {name}
      </span>
      {/* Position title */}
      <div
        className={cn(
          "mt-1.5 text-center text-xs text-[#a2fff4]/80 hidden md:inline-block",
          fontInter.className,
        )}
      >
        {desc}
      </div>
      {/* Sub-roles for grouped entries (e.g. LPL) */}
      {subRoles && subRoles.length > 0 && (
        <div className="mt-2.5 w-full hidden md:block">
          {subRoles.map((role, i) => (
            <div
              key={i}
              className={cn(
                "flex items-baseline justify-between py-1",
                i < subRoles.length - 1 ? "border-b border-[#6aceff]/10" : "",
                fontInter.className,
              )}
            >
              <span className="text-xs text-[#c4ebff]/90">{role.title}</span>
              <span className="text-[10px] opacity-40 ml-2 shrink-0">{role.date}</span>
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
        <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-md overflow-hidden">
          <img src={logoSrc} alt="logo" className="w-full h-full object-cover rounded-full" />
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
  right = false,
  isFirst = false,
  isLast = false,
  subRoles,
  logoSrc,
}: TimelineStepProps) => {
  return (
    <li>
      <hr className={cn(isFirst ? "first-hr" : "", "dark:invert")} />
      <TimelineMiddle logoSrc={logoSrc} />
      <TimelineText name={name} desc={desc} right={right} subRoles={subRoles} />
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
  // Référence pour l'apparition au scroll
  const [lineRef, lineVisible] = useOnScreen<HTMLUListElement>();

  // Récupération du textes
  const { texts } = useLanguage();

  return (
    <ul
      ref={lineRef}
      className={cn(
        "delay-400 timeline transition-all duration-1000 ease-in-out lg:timeline-vertical",
        className,
        lineVisible
          ? ""
          : "-translate-y-20 opacity-0 lg:-translate-x-20 lg:-translate-y-0",
      )}
    >
      {/* LPL Financial — grouped with sub-roles */}
      <TimelineStep
        name="LPL Financial"
        desc="Austin, TX"
        date="2023 - Present"
        isFirst
        logoSrc="https://www.google.com/s2/favicons?domain=lpl.com&sz=128"
        subRoles={[
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
        right
        logoSrc="https://www.google.com/s2/favicons?domain=utdallas.edu&sz=128"
      />

      {/* Infosys */}
      <TimelineStep
        name={texts.about.timeline.oxyl.name}
        desc={texts.about.timeline.oxyl.desc}
        date={texts.about.timeline.oxyl.date}
        logoSrc="https://www.google.com/s2/favicons?domain=infosys.com&sz=128"
      />

      {/* Worldsoft Technologies */}
      <TimelineStep
        name={texts.about.timeline.sopra.name}
        desc={texts.about.timeline.sopra.desc}
        date={texts.about.timeline.sopra.date}
        right
        logoSrc="https://www.google.com/s2/favicons?domain=worldsoftit.com&sz=128"
      />

      {/* Jabalpur Engineering College */}
      <TimelineStep
        name={texts.about.timeline.jec.name}
        desc={texts.about.timeline.jec.desc}
        date={texts.about.timeline.jec.date}
        isLast
        logoSrc="/img/jec_logo.png"
      />
    </ul>
  );
}

export default Timeline;
