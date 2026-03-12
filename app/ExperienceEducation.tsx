/**
 * @name ExperienceEducation.tsx
 * @type Page Section
 *
 * @description Tabbed section showing detailed Experience and Education cards
 * with bullet point achievements, logos, locations, and dates.
 */

"use client";

import { fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import SectionWrapper from "./components/SectionWrapper";
import { useOnScreen } from "./hooks/useOnScreen";
import { useState, useEffect } from "react";
import Image from "next/image";

/* ────────────────────── Types ────────────────────── */

type Role = {
  title: string;
  type: string;
  date: string;
  location: string;
  bullets: string[];
};

type ExperienceEntry = {
  company: string;
  logoSrc: string;
  date: string;
  location: string;
  skills: string[];
  roles: Role[];
};

type EducationEntry = {
  school: string;
  logoSrc: string;
  degree: string;
  field: string;
  date: string;
  location: string;
  skills: string[];
  highlights: string[];
};

type PublicationEntry = {
  title: string;
  conference: string;
  date: string;
  link: string;
};

type CertificationEntry = {
  name: string;
  issuer: string;
  icon: string;
  date: string;
  credentialId?: string;
  link: string;
  skills?: string[];
};

/* ────────────────────── Data ────────────────────── */

const experienceData: ExperienceEntry[] = [
  {
    company: "LPL Financial",
    logoSrc: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://lpl.com&size=128",
    date: "2023 – Present",
    location: "Austin, TX",
    skills: ["AWS", "PySpark", "Redshift", "Terraform", "Python"],
    roles: [
      {
        title: "Senior Engineer, Data",
        type: "Full-time",
        date: "March 2026 – Present",
        location: "Austin, TX",
        bullets: [
          "Architecting and optimizing modern data engineering pipelines",
        ],
      },
      {
        title: "Data Engineer 2",
        type: "Full-time",
        date: "2024 – March 2026",
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
        date: "2023 – 2024",
        location: "Fort Mill, SC",
        bullets: [
          "Built automated data quality frameworks validating 50M+ records across pipelines",
          "Developed Python-based monitoring dashboards for tracking ETL job performance metrics",
          "Created reusable Terraform modules for provisioning AWS infrastructure (Glue, S3, RDS)",
        ],
      },
      {
        title: "IT Audit Intern",
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
    company: "Infosys Limited",
    logoSrc: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128",
    date: "2021 – 2022",
    location: "Pune, India",
    skills: ["Hadoop", "Hive", "Python", "Tableau"],
    roles: [
      {
        title: "Data Engineer",
        type: "Full-time",
        date: "2021 – 2022",
        location: "Pune, India",
        bullets: [
          "Designed and implemented Hadoop-based data processing pipelines using Hive, Pig, and Sqoop",
          "Ingested and processed 10K+ records daily from RDBMS to HDFS for analytics workloads",
          "Integrated HDFS with Tableau for real-time forecasting dashboards with 92% prediction accuracy",
          "Mentored junior engineers on big data best practices and ETL design patterns",
        ],
      },
    ],
  },
  {
    company: "Worldsoft Technologies",
    logoSrc: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://worldsoftit.com&size=128",
    date: "2019 – 2021",
    location: "Jabalpur, India",
    skills: ["AWS VPC", "IAM", "Cloud Migration"],
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
];

const educationData: EducationEntry[] = [
  {
    school: "University of Texas at Dallas",
    logoSrc: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://utdallas.edu&size=128",
    degree: "Master of Science",
    field: "Information Technology & Management",
    date: "2022 – 2024",
    location: "Richardson, TX",
    skills: ["Cloud Architecture", "Big Data", "Machine Learning"],
    highlights: [
      "Graduated with a focus on Data Engineering and Cloud Computing",
      "Relevant coursework: Big Data Analytics, Database Design, Cloud Architecture, Machine Learning",
      "Built capstone project analyzing YouTube data pipelines using AWS (S3, Glue, Lambda, Redshift, Athena)",
    ],
  },
  {
    school: "Jabalpur Engineering College",
    logoSrc: "/img/jec_logo.png",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    date: "2017 – 2021",
    location: "Jabalpur, India",
    skills: ["Data Structures", "Algorithms", "C++", "DBMS"],
    highlights: [
      "Core studies in Data Structures, Algorithms, DBMS, and Operating Systems",
      "Completed projects in healthcare data management and rules engine development",
      "Active in technical clubs and competitive programming",
    ],
  },
];

const publicationsData: PublicationEntry[] = [
  {
    title: "Trusted Infrastructure Design for Secure Virtualization in Cloud Computing: A Review",
    conference: "Research Publication",
    date: "2020",
    link: "https://drive.google.com/file/d/1-z8awntspUi6jXWzPtyf5B5UOwZFOhkg/view",
  },
  {
    title: "An informative analysis of Encryption algorithms using quantitative Fitness Function",
    conference: "ICEMCI 2019",
    date: "2019",
    link: "https://drive.google.com/file/d/12y8NXK9zguL4gWpENO27K7V3c59w3dwQ/view",
  }
];

/* ────────────────────── ExperienceCard ────────────────────── */

function ExperienceCard({ entry, isFeatured }: { entry: ExperienceEntry, isFeatured?: boolean }) {
  const [expanded, setExpanded] = useState(isFeatured || false);

  return (
    <div
      id={entry.company.toLowerCase().replace(/\s+/g, '-')}
      className={cn(
        "rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 md:p-6 transition-all duration-300 hover:border-[#a2fff4]/20 hover:bg-white/[0.05] cursor-pointer group flex flex-col flex-grow",
        isFeatured ? "w-full" : "w-full md:w-[calc(50%-12px)]"
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden shrink-0 mt-1">
            <Image src={entry.logoSrc} alt={entry.company} width={28} height={28} className="object-contain rounded-full" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 sm:gap-3 items-start">
              <h3 className={cn("text-lg font-semibold text-white group-hover:text-[#a2fff4] transition-colors flex items-center gap-2", fontInter.className)}>
                {entry.company}
                <span className="text-[#a2fff4]/50 bg-[#a2fff4]/10 p-1 rounded-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-transform duration-300", expanded ? "rotate-180" : "rotate-0")}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {entry.skills?.map(skill => (
                  <span key={skill} className={cn("px-2 py-0.5 rounded-md bg-[#a2fff4]/10 text-[#a2fff4] text-[10px] font-medium border border-[#a2fff4]/20", fontInter.className)}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dates and Location (Right Aligned, tied to Company) */}
        <div className={cn("text-white/40 text-xs sm:text-right mt-1 sm:mt-0 pl-13 sm:pl-0", fontInter.className)}>
          <div>{entry.date}</div>
          <div>📍 {entry.location}</div>
        </div>
      </div>

      {/* Roles Container */}
      <div className={cn(
        "grid transition-all duration-300 ease-in-out flex-1 break-words",
        expanded ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"
      )}>
        <div className="overflow-hidden">
          {entry.roles.map((role, i) => (
            <div key={i} className={cn("pl-3 border-l-2 border-[#a2fff4]/20 mb-5 last:mb-0", i > 0 ? "mt-5" : "")}>
              <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-1">
                <div>
                  <h4 className={cn("text-[#a2fff4] font-medium text-base leading-tight", fontInter.className)}>
                    {role.title}
                  </h4>
                  <span className={cn("text-white/30 text-xs", fontInter.className)}>
                    {role.type}
                  </span>
                </div>
                <div className={cn("text-white/40 text-xs xl:text-right mt-1 xl:mt-0", fontInter.className)}>
                  <div>{role.date}</div>
                  <div>📍 {role.location}</div>
                </div>
              </div>

              <ul className="mt-3 space-y-2">
                {role.bullets.map((bullet, j) => (
                  <li key={j} className={cn("text-white/55 text-sm leading-relaxed flex gap-2", fontInter.className)}>
                    <span className="text-[#a2fff4]/60 mt-1 shrink-0 text-sm">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

/* ────────────────────── EducationCard ────────────────────── */

function EducationCard({ entry }: { entry: EducationEntry }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      id={entry.school.toLowerCase().replace(/\s+/g, '-')}
      className={cn(
        "rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 md:p-6 transition-all duration-300 hover:border-[#a2fff4]/20 hover:bg-white/[0.05] cursor-pointer group flex flex-col flex-grow",
        "w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
      )}
      onClick={() => setExpanded(!expanded)}
    >
      {/* School header with dates on the right */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
            <Image src={entry.logoSrc} alt={entry.school} width={28} height={28} className="object-contain rounded-full" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 sm:gap-3 items-start">
              <h3 className={cn("text-lg font-semibold text-white group-hover:text-[#a2fff4] transition-colors flex items-center gap-2", fontInter.className)}>
                {entry.school}
                <span className="text-[#a2fff4]/50 bg-[#a2fff4]/10 p-1 rounded-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-transform duration-300", expanded ? "rotate-180" : "rotate-0")}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </h3>
              <div className={cn("text-[#a2fff4]/80 text-[15px]", fontInter.className)}>
                {entry.degree}, {entry.field}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {entry.skills?.map(skill => (
                  <span key={skill} className={cn("px-2 py-0.5 rounded-md bg-[#a2fff4]/10 text-[#a2fff4] text-[10px] font-medium border border-[#a2fff4]/20", fontInter.className)}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dates and Location (Right Aligned) */}
        <div className={cn("text-white/40 text-xs sm:text-right mt-1 sm:mt-0 pl-13 sm:pl-0", fontInter.className)}>
          <div>{entry.date}</div>
          <div>📍 {entry.location}</div>
        </div>
      </div>

      {/* Education Details Container */}
      <div className={cn(
        "grid transition-all duration-300 ease-in-out flex-1",
        expanded ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"
      )}>
        <div className="pl-3 border-l-2 border-[#a2fff4]/20 overflow-hidden space-y-2">
          <ul className="space-y-2">
            {entry.highlights.map((h, i) => (
              <li key={i} className={cn("text-white/55 text-sm leading-relaxed flex gap-2", fontInter.className)}>
                <span className="text-[#a2fff4]/60 mt-1 shrink-0 text-sm">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── PublicationCard ────────────────────── */

function PublicationCard({ entry }: { entry: PublicationEntry }) {
  return (
    <div className="w-full md:w-[calc(50%-12px)] flex flex-col p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] transition-all duration-300 hover:border-[#a2fff4]/20 hover:bg-white/[0.05] relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#a2fff4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      <div className="flex flex-col h-full z-10">
        <h3 className={cn("text-white font-bold text-lg md:text-xl leading-tight mb-3 group-hover:text-[#a2fff4] transition-colors", fontInter.className)}>
          {entry.title}
        </h3>
        <p className={cn("text-white/60 font-medium text-sm md:text-base mb-1", fontInter.className)}>
          {entry.conference} <span className="text-white/20 mx-2">|</span> {entry.date}
        </p>

        <div className="mt-auto pt-6">
          <a
            href={entry.link}
            target="_blank"
            rel="noreferrer"
            className={cn("inline-flex items-center gap-2 text-[#a2fff4]/70 hover:text-[#a2fff4] font-medium text-sm transition-colors", fontInter.className)}
          >
            View Publication
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Certifications Data & Card ────────────────────── */

const certificationsData: CertificationEntry[] = [
  {
    name: "AWS Certified Data Engineer - Associate",
    issuer: "Amazon Web Services (AWS)",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://aws.amazon.com&size=128",
    date: "May 2025 – May 2028",
    credentialId: "85811273ec554fee998e95e4be2ffc41",
    link: "#",
    skills: ["AWS", "Data Engineering"],
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://google.com&size=128",
    date: "Apr 2024",
    credentialId: "287482361",
    link: "#",
    skills: ["Google Analytics"],
  },
  {
    name: "Amazon Web Services Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://aws.amazon.com&size=128",
    date: "May 2023",
    credentialId: "8BM190E17B44QG54",
    link: "#",
    skills: ["AWS"],
  },
  {
    name: "IBM Cybersecurity Analyst Professional Certificate",
    issuer: "IBM",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://ibm.com&size=128",
    date: "Oct 2020",
    link: "#",
    skills: ["AWS", "Linux"],
  },
  {
    name: "Continuous Delivery and DevOps",
    issuer: "University of Virginia",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://virginia.edu&size=128",
    date: "Aug 2020",
    credentialId: "37NX93LEDFLL",
    link: "#",
  },

  {
    name: "RedHat OpenShift Applications",
    issuer: "Red Hat",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://redhat.com&size=128",
    date: "Jun 2020",
    link: "#",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://aws.amazon.com&size=128",
    date: "Jun 2020",
    link: "#",
    skills: ["AWS", "Linux"],
  },
  {
    name: "Cyber Security",
    issuer: "New York University",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://nyu.edu&size=128",
    date: "Apr 2020",
    credentialId: "UG9CAE24BG4N",
    link: "#",
    skills: ["Linux"],
  },
  {
    name: "CISCO Networking Basics",
    issuer: "Cisco",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://cisco.com&size=128",
    date: "Aug 2019",
    link: "#",
  },
  {
    name: "AWS Fundamentals Specialization",
    issuer: "Amazon Web Services (AWS)",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://aws.amazon.com&size=128",
    date: "Jun 2020",
    credentialId: "D6L8BNUKG4L4",
    link: "#",
    skills: ["AWS"],
  },
  {
    name: "Cisco Networking Basics Specialization",
    issuer: "Cisco Networking Academy",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://netacad.com&size=128",
    date: "Aug 2019",
    credentialId: "ALVJ6MMCVDWE",
    link: "#",
    skills: ["Linux"],
  },
  {
    name: "Programming Through Python",
    issuer: "University of Michigan",
    icon: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://umich.edu&size=128",
    date: "Jul 2019",
    credentialId: "XPPZXLSLK6D2",
    link: "#",
  },

];

function CertificationCard({ entry }: { entry: CertificationEntry }) {
  return (
    <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col p-5 rounded-2xl border border-white/[0.06] bg-white/[0.03] transition-all duration-300 hover:border-[#a2fff4]/20 hover:bg-white/[0.05] group">
      {/* Header with icon */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden shrink-0 mt-0.5">
          <Image src={entry.icon} alt={entry.issuer} width={24} height={24} className="object-contain rounded" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={cn("text-white font-semibold text-sm md:text-base leading-tight group-hover:text-[#a2fff4] transition-colors", fontInter.className)}>
            {entry.name}
          </h3>
          <p className={cn("text-white/50 text-xs mt-0.5", fontInter.className)}>
            {entry.issuer}
          </p>
        </div>
      </div>
      <p className={cn("text-white/30 text-xs mb-3 pl-12", fontInter.className)}>
        {entry.date}
        {entry.credentialId && (
          <span className="block text-white/20 text-[10px] mt-0.5">ID: {entry.credentialId}</span>
        )}
      </p>
      {entry.skills && entry.skills.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3 pl-12">
          {entry.skills.map(s => (
            <span key={s} className={cn("px-2 py-0.5 rounded-md bg-[#a2fff4]/10 text-[#a2fff4] text-[10px] font-medium border border-[#a2fff4]/20", fontInter.className)}>
              {s}
            </span>
          ))}
        </div>
      )}
      <div className="mt-auto pt-2 pl-12">
        <a
          href={entry.link}
          target="_blank"
          rel="noreferrer"
          className={cn("inline-flex items-center gap-1.5 text-[#a2fff4]/60 hover:text-[#a2fff4] font-medium text-xs transition-colors", fontInter.className)}
        >
          Show Credential
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ────────────────────── Main Section ────────────────────── */

type TabType = "experience" | "education" | "publications" | "certifications";

const TABS: { id: TabType; label: string; icon: React.ReactNode }[] = [
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    id: "education",
    label: "Education",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
  },
  {
    id: "publications",
    label: "Publications",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  }
];

function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<TabType>("experience");
  const [ref, visible] = useOnScreen<HTMLDivElement>();

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<TabType>;
      if (TABS.map(t => t.id).includes(customEvent.detail)) {
        setActiveTab(customEvent.detail);
      }
    };
    window.addEventListener('setExperienceTab', handleTabChange);
    return () => window.removeEventListener('setExperienceTab', handleTabChange);
  }, []);

  return (
    <SectionWrapper
      id="experience-education"
      offset={2}
      factor={2}
      speed={0}
      className="flex items-start justify-center bg-blue-9 dark:bg-blue-4 pointer-events-auto"
    >
      <div
        ref={ref}
        className={cn(
          "w-full max-w-7xl mx-auto px-6 md:px-12 py-12 transition-all duration-700 ease-in-out",
          visible ? "" : "translate-y-10 opacity-0",
        )}
      >
        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center rounded-3xl sm:rounded-full bg-white/[0.04] border border-white/[0.08] p-1 gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  fontInter.className,
                  activeTab === tab.id
                    ? "bg-[#a2fff4]/20 text-[#a2fff4] shadow-[0_0_15px_rgba(162,255,244,0.15)]"
                    : "text-white/40 hover:text-white/60",
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 items-stretch justify-center">
          {activeTab === "experience" && experienceData.map((entry, i) => <ExperienceCard key={i} entry={entry} isFeatured={i === 0} />)}
          {activeTab === "education" && educationData.map((entry, i) => <EducationCard key={i} entry={entry} />)}
          {activeTab === "publications" && publicationsData.map((entry, i) => <PublicationCard key={i} entry={entry} />)}
          {activeTab === "certifications" && certificationsData.map((entry, i) => <CertificationCard key={i} entry={entry} />)}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ExperienceEducation;
