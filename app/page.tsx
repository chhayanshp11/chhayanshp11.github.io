"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFileText,
  IconExternalLink,
  IconChevronDown,
  IconChevronUp,
  IconMapPin,
  IconArrowUp,
  IconBriefcase,
  IconSchool,
} from "@tabler/icons-react";
import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "./components/Navbar";

import skills from "@/lang/data-skills-en";
import projects from "@/lang/data-projects-en";
import textsEn from "@/lang/data-texts-en";

import selfie from "../public/img/selfie_v1.jpg";
import mountainsImg from "../public/img/photography/mountains.png";
import streetImg from "../public/img/photography/street.png";
import austinImg from "../public/img/photography/austin.png";
import aerialImg from "../public/img/photography/aerial.png";
import lakeImg from "../public/img/photography/lake.png";
import templeImg from "../public/img/photography/temple.png";

/* ═══════════════════════ Scroll animation hook ═══════════════════════ */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

/* ═══════════════════════ Section wrapper ═══════════════════════ */

function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white mb-10">
      {children}
    </h2>
  );
}

/* ═══════════════════════ HERO ═══════════════════════ */

function Hero() {
  return (
    <section id="skills" className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: profile info */}
          <div className="flex-1 text-center md:text-left">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto md:mx-0 mb-8 ring-2 ring-zinc-200 dark:ring-zinc-700">
              <Image
                src={selfie}
                alt="Chhayansh Purohit"
                width={112}
                height={112}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-4">
              Chhayansh Purohit
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-300 mb-8">
              Data engineer. Photographer.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <SocialLink
                href="https://github.com/chhayanshp11"
                label="GitHub"
                icon={<IconBrandGithub size={20} />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/chhayanshp11/"
                label="LinkedIn"
                icon={<IconBrandLinkedin size={20} />}
              />
              <SocialLink
                href="mailto:chhayanshp11@gmail.com"
                label="Email"
                icon={<IconMail size={20} />}
              />
              <SocialLink
                href="/resume.pdf"
                label="Resume"
                icon={<IconFileText size={20} />}
              />
            </div>
          </div>
          {/* Right: skill sphere */}
          <div className="flex-shrink-0 translate-x-10 md:translate-x-16">
            <SkillSphere />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") || href.startsWith("/") ? undefined : "_blank"}
      rel="noreferrer"
      aria-label={label}
      className="p-3 rounded-full text-zinc-500 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
    >
      {icon}
    </a>
  );
}

/* ═══════════════════════ ABOUT ═══════════════════════ */

function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Section id="about" className="py-20 md:py-28">
      <div
        ref={ref}
        className={cn(
          "transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        <SectionTitle>About</SectionTitle>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base md:text-lg">
          {textsEn.about.desc}
        </p>
      </div>
    </Section>
  );
}

/* ═══════════════════════ EXPERIENCE - Unified Journey ═══════════════════════ */

type Role = {
  title: string;
  type: string;
  date: string;
  location: string;
  bullets: string[];
};

type JourneyEntry = {
  kind: "work" | "education";
  sortYear: number;
  org: string;
  initials: string;
  logo?: string;
  subtitle: string;
  date: string;
  location: string;
  roles?: Role[];
};

const journeyData: JourneyEntry[] = [
  {
    kind: "education",
    sortYear: 2026,
    org: "UT Austin, McCombs School of Business",
    initials: "UT",
    logo: "/img/utaustin-logo.svg",
    subtitle: "Post Graduate Program - AI/ML with GenAI Specialization",
    date: "Feb 2026 - Dec 2026",
    location: "Austin, TX",
  },
  {
    kind: "work",
    sortYear: 2023,
    org: "LPL Financial",
    initials: "LPL",
    logo: "/img/lpl-logo.avif",
    subtitle: "Senior Engineer, Data",
    date: "2023 - Present",
    location: "Austin, TX",
    roles: [
      {
        title: "Senior Engineer, Data",
        type: "Full-time",
        date: "March 2026 - Present",
        location: "Austin, TX",
        bullets: [
          "Architecting and optimizing modern data engineering pipelines",
        ],
      },
      {
        title: "Data Engineer 2",
        type: "Full-time",
        date: "2024 - March 2026",
        location: "Austin, TX",
        bullets: [
          "Engineered scalable AWS Glue ETL pipelines using PySpark for processing TBs of financial data daily",
          "Automated Lambda triggers for real-time event-driven data workflows, reducing manual intervention by 80%",
          "Optimized Redshift query performance through distribution keys and sort keys, achieving 40% faster analytics",
          "Architected data lake solutions on S3 with proper partitioning and lifecycle management",
        ],
      },
      {
        title: "Data Engineering Intern",
        type: "Internship",
        date: "2023 - 2024",
        location: "Fort Mill, SC",
        bullets: [
          "Built automated data quality frameworks validating 50M+ records across pipelines",
          "Developed Python-based monitoring dashboards for tracking ETL job performance metrics",
          "Created reusable Terraform modules for provisioning AWS infrastructure (Glue, S3, RDS)",
        ],
      },
      {
        title: "IT Audit - Data Analytics Engineer",
        type: "Internship",
        date: "2023",
        location: "Fort Mill, SC",
        bullets: [
          "Conducted SOX compliance audits for data access controls across financial systems",
          "Automated audit evidence collection using Python scripts, saving 20+ hours per audit cycle",
        ],
      },
    ],
  },
  {
    kind: "education",
    sortYear: 2022,
    org: "University of Texas at Dallas",
    initials: "UTD",
    logo: "/img/utd-logo.svg",
    subtitle: "Master of Science - Information Technology & Management",
    date: "2022 - 2024",
    location: "Richardson, TX",
  },
  {
    kind: "work",
    sortYear: 2021,
    org: "Infosys Limited",
    initials: "IN",
    logo: "/img/infosys-logo.png",
    subtitle: "Data Engineer",
    date: "2021 - 2022",
    location: "Pune, India",
    roles: [
      {
        title: "Data Engineer",
        type: "Full-time",
        date: "2021 - 2022",
        location: "Pune, India",
        bullets: [
          "Designed and implemented Hadoop-based data processing pipelines using Hive, Pig, and Sqoop",
          "Ingested and processed 10K+ records daily from RDBMS to HDFS for analytics workloads",
          "Integrated HDFS with Tableau for real-time forecasting dashboards with 92% prediction accuracy",
        ],
      },
    ],
  },
  {
    kind: "work",
    sortYear: 2019,
    org: "Worldsoft Technologies",
    initials: "WT",
    subtitle: "Cloud Engineer Associate",
    date: "2019 - 2021",
    location: "Jabalpur, India",
    roles: [
      {
        title: "Cloud Engineer Associate",
        type: "Internship",
        date: "2019",
        location: "Jabalpur, India",
        bullets: [
          "Assisted in cloud migration of on-premise applications to AWS infrastructure",
          "Configured VPCs, security groups, and IAM policies for enterprise clients",
        ],
      },
    ],
  },
  {
    kind: "education",
    sortYear: 2017,
    org: "Jabalpur Engineering College",
    initials: "JEC",
    logo: "/img/jec_logo.png",
    subtitle: "Bachelor of Technology - Computer Science & Engineering",
    date: "2017 - 2021",
    location: "Jabalpur, India",
  },
];

function RoleCard({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pl-5">
      {/* Dot on the sub-timeline */}
      <div className="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600 z-10" />

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left cursor-pointer group/role"
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-medium text-sm text-zinc-800 dark:text-zinc-200 group-hover/role:text-accent transition-colors">
              {role.title}
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-1 mt-0.5">
              {role.type} <span className="mx-1">&middot;</span>{" "}
              <IconMapPin size={12} /> {role.location}
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-xs text-zinc-400 dark:text-zinc-500">
              {role.date}
            </span>
            {expanded ? (
              <IconChevronUp size={12} className="text-zinc-400" />
            ) : (
              <IconChevronDown size={12} className="text-zinc-400" />
            )}
          </div>
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          expanded
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0 mt-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1.5">
            {role.bullets.map((bullet, j) => (
              <li
                key={j}
                className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed flex gap-2"
              >
                <span className="text-zinc-300 dark:text-zinc-600 mt-1.5 shrink-0 text-[8px]">
                  ●
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function JourneyNode({
  entry,
  isLast,
  index,
}: {
  entry: JourneyEntry;
  isLast: boolean;
  index: number;
}) {
  const hasRoles = entry.roles && entry.roles.length > 0;
  const multipleRoles = hasRoles && entry.roles!.length > 1;

  return (
    <div
      className="relative flex gap-4 md:gap-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className={cn(
            "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 ring-4 ring-surface dark:ring-surface-dark z-10 overflow-hidden",
            entry.logo
              ? "bg-white dark:bg-zinc-800"
              : entry.kind === "work"
                ? "bg-accent/10 text-accent"
                : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
          )}
        >
          {entry.logo ? (
            <Image
              src={entry.logo}
              alt={entry.org}
              width={36}
              height={36}
              className="object-contain w-9 h-9"
            />
          ) : (
            <span className="text-xs font-bold">{entry.initials}</span>
          )}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-zinc-200 dark:bg-zinc-800 min-h-[24px]" />
        )}
      </div>

      {/* Content */}
      <div className={cn("pb-8 md:pb-10 flex-1 min-w-0", isLast && "pb-0")}>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 md:p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-heading font-semibold text-zinc-900 dark:text-white text-sm md:text-base">
                  {entry.org}
                </h3>
                {entry.kind === "work" ? (
                  <IconBriefcase size={14} className="text-zinc-400 dark:text-zinc-500" />
                ) : (
                  <IconSchool size={14} className="text-zinc-400 dark:text-zinc-500" />
                )}
              </div>
              {!multipleRoles && (
                <p className="text-sm text-zinc-500 dark:text-zinc-300 mt-1">
                  {entry.subtitle}
                </p>
              )}
              <p className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-1 mt-1.5">
                <IconMapPin size={12} /> {entry.location}
              </p>
            </div>
            <span className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap shrink-0 mt-0.5">
              {entry.date}
            </span>
          </div>

          {/* Roles - always visible for multi-role entries */}
          {multipleRoles && (
            <div className="mt-4 relative space-y-4">
              <div className="absolute left-[3px] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-700" />
              {entry.roles!.map((role, i) => (
                <RoleCard key={i} role={role} />
              ))}
            </div>
          )}

          {/* Single role - bullets expandable */}
          {hasRoles && !multipleRoles && (
            <RoleCard role={entry.roles![0]} />
          )}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Section id="experience" className="py-20 md:py-28">
      <div
        ref={ref}
        className={cn(
          "transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        <SectionTitle>The Journey</SectionTitle>
        <div>
          {journeyData.map((entry, i) => (
            <JourneyNode
              key={i}
              entry={entry}
              isLast={i === journeyData.length - 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════ PROJECTS ═══════════════════════ */

function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Section id="projects" className="py-20 md:py-28">
      <div
        ref={ref}
        className={cn(
          "transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        <SectionTitle>Projects</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 hover:border-accent/40 dark:hover:border-accent/40 transition-all cursor-pointer"
            >
              <div className="w-full h-40 rounded-lg overflow-hidden mb-4 bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image_path}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading font-semibold text-zinc-900 dark:text-white group-hover:text-accent transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                View project <IconExternalLink size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════ SKILLS - 3D Sphere ═══════════════════════ */

function SkillSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: -0.3, y: 0 });
  const dragRef = useRef({ active: false, lastX: 0, lastY: 0 });
  const velocityRef = useRef({ x: 0.001, y: 0.003 });
  const rafRef = useRef<number>(0);

  const allSkills = skills.flatMap((cat) =>
    cat.subSkills.map((s) => ({
      name: s.name,
      image: s.image,
      url: s.url,
    })),
  );

  const positionsRef = useRef<{ theta: number; phi: number }[]>([]);
  if (positionsRef.current.length === 0) {
    const n = allSkills.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (2 * (i + 0.5)) / n;
      const theta = Math.acos(y);
      const phi = goldenAngle * i;
      positionsRef.current.push({ theta, phi });
    }
  }

  const render = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { x: rotX, y: rotY } = rotationRef.current;
    const items = container.querySelectorAll<HTMLElement>("[data-skill]");
    const radius = 240;
    const perspective = 700;

    items.forEach((el, i) => {
      const { theta, phi } = positionsRef.current[i];

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.cos(theta);
      const z = radius * Math.sin(theta) * Math.sin(phi);

      // Rotate around Y axis
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;

      // Rotate around X axis
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y1 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const scale = perspective / (perspective + z2);
      const projX = x1 * scale;
      const projY = y1 * scale;

      const normZ = (z2 + radius) / (2 * radius);
      const opacity = 0.3 + 0.7 * normZ;
      const size = 0.6 + 0.5 * normZ;

      el.style.transform = `translate(-50%, -50%) translate(${projX}px, ${projY}px) scale(${size})`;
      el.style.opacity = String(opacity);
      el.style.zIndex = String(Math.round(normZ * 100));
    });
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!dragRef.current.active) {
        velocityRef.current.y *= 0.998;
        velocityRef.current.x *= 0.998;
        if (Math.abs(velocityRef.current.y) < 0.001) velocityRef.current.y = 0.003;
        if (Math.abs(velocityRef.current.x) < 0.0005) velocityRef.current.x = 0.001;
        rotationRef.current.y += velocityRef.current.y;
        rotationRef.current.x += velocityRef.current.x;
      }
      render();
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [render]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { active: true, lastX: e.clientX, lastY: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.lastX;
    const dy = e.clientY - dragRef.current.lastY;
    rotationRef.current.y += dx * 0.005;
    rotationRef.current.x += dy * 0.005;
    velocityRef.current = { x: dy * 0.002, y: dx * 0.002 };
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
  };

  const onPointerUp = () => {
    dragRef.current.active = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[500px] h-[500px] mx-auto cursor-grab active:cursor-grabbing select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {allSkills.map((skill) => (
        <a
          key={skill.name}
          data-skill
          href={skill.url}
          target="_blank"
          rel="noreferrer"
          className="absolute left-1/2 top-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md hover:border-accent/50 transition-shadow whitespace-nowrap pointer-events-auto"
          onClick={(e) => {
            if (Math.abs(velocityRef.current.x) > 0.003 || Math.abs(velocityRef.current.y) > 0.005) {
              e.preventDefault();
            }
          }}
        >
          <Image
            src={skill.image}
            alt={skill.name}
            width={20}
            height={20}
            className="object-contain w-5 h-5"
          />
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {skill.name}
          </span>
        </a>
      ))}
    </div>
  );
}


/* ═══════════════════════ PHOTOGRAPHY ═══════════════════════ */

const photoGrid = [
  { src: mountainsImg, alt: "Himalayas - mountain pass" },
  { src: streetImg, alt: "Rajasthan - street market" },
  { src: austinImg, alt: "Austin - city at sunset" },
  { src: aerialImg, alt: "Aerial view of coastline" },
  { src: lakeImg, alt: "Serene mountain lake" },
  { src: templeImg, alt: "Ancient temple at dawn" },
];

function Photography() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <Section id="photography" className="py-20 md:py-28">
      <div
        ref={ref}
        className={cn(
          "transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        <div className="flex items-end justify-between mb-10">
          <div>
            <SectionTitle>Photography</SectionTitle>
            <p className="text-zinc-500 dark:text-zinc-300 text-sm -mt-6">
              When I&apos;m not building data pipelines, I&apos;m capturing the
              world through my lens.
            </p>
          </div>
          <Link
            href="/photography"
            className="text-sm text-accent hover:underline shrink-0 hidden md:block"
          >
            View travel journal &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photoGrid.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-zoom-in group"
              onClick={() =>
                setLightbox({
                  src:
                    (photo.src as unknown as { src: string }).src ??
                    String(photo.src),
                  alt: photo.alt,
                })
              }
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                placeholder="blur"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>

        <div className="mt-6 md:hidden text-center">
          <Link
            href="/photography"
            className="text-sm text-accent hover:underline"
          >
            View travel journal &rarr;
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1400}
              height={1000}
              className="object-contain max-w-[90vw] max-h-[90vh] w-auto h-auto"
              priority
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-3 text-white/80 text-sm">
              {lightbox.alt}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */

type Testimonial = {
  name: string;
  role: string;
  company: string;
  linkedin: string;
  text: string;
};

const testimonialsData: Testimonial[] = [
  {
    name: "Zoran Konrad",
    role: "VP, Data Services Engineer Manager",
    company: "LPL Financial",
    linkedin: "https://www.linkedin.com/in/zorankonrad",
    text: "I had the pleasure of working with Chhayansh Purohit during his internship as a Data Engineer. His dedication and enthusiasm were evident from day one. Chhayansh possesses a strong grasp of data engineering concepts and his ability to analyze complex data sets has been instrumental in driving successful projects within our team.",
  },
  {
    name: "Kory Bliss",
    role: "Senior IT Internal Auditor",
    company: "LPL Financial",
    linkedin: "https://www.linkedin.com/in/kory-bliss",
    text: "Chhayansh did a fantastic job during his time as an IT internal audit intern. He was able to quickly pickup concepts and put them into practice. Questions or concerns that were raised during the testing of controls were well thought out and showed an overall understanding of the purpose of the testing we were performing.",
  },
  {
    name: "Steve Spittler, CPA, CISA",
    role: "VP, Technology, Cyber and Product Risk",
    company: "LPL Financial",
    linkedin:
      "https://www.linkedin.com/in/steve-spittler-cpa-cisa-02862495",
    text: "It was a pleasure to have Chhayansh intern with our IT Internal Audit team this Summer. He had a great work ethic, completing his testing ahead of schedule. He also knew when to raise questions to his Seniors and manage his workload with minimal oversight.",
  },
  {
    name: "Amit Bhatt",
    role: "Product Manager",
    company: "ESEM Infostreamz",
    linkedin: "https://www.linkedin.com/in/amit-bhatt-3809871b",
    text: "I had the privilege of working with Chhayansh during an internship where we focused on Google Cloud solutions. Chhayansh demonstrated exceptional technical proficiency and a deep understanding of cloud computing technologies. He consistently brought fresh perspectives and innovative solutions to the table.",
  },
];

function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Section id="testimonials" className="py-20 md:py-28">
      <div
        ref={ref}
        className={cn(
          "transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        <SectionTitle>Testimonials</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6"
            >
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-semibold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-zinc-900 dark:text-white hover:text-accent transition-colors"
                  >
                    {t.name}
                  </a>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════ FOOTER ═══════════════════════ */

function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          Chhayansh Purohit
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/chhayanshp11"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            <IconBrandGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/chhayanshp11/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            <IconBrandLinkedin size={18} />
          </a>
          <a
            href="mailto:chhayanshp11@gmail.com"
            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            <IconMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════ BACK TO TOP ═══════════════════════ */

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer",
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
      aria-label="Back to top"
    >
      <IconArrowUp size={18} />
    </button>
  );
}

/* ═══════════════════════ HOME ═══════════════════════ */

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Photography />
      <Testimonials />
      <Footer />
      <BackToTop />
    </main>
  );
}
