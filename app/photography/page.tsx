/**
 * @name photography/page.tsx
 * @type Page
 *
 * @description Dedicated photography page with a vertical travel timeline.
 */

"use client";

import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/* ────────────────────── Trip Data ────────────────────── */

type Trip = {
  id: number;
  destination: string;
  country: string;
  date: string;
  description: string;
  photos: string[]; // paths in /img/photography/
};

const trips: Trip[] = [
  {
    id: 1,
    destination: "Austin",
    country: "USA",
    date: "2024",
    description: "Moved to Austin for work at LPL Financial. Fell in love with the live music scene, food trucks on South Congress, and those stunning sunset views over Lady Bird Lake.",
    photos: ["/img/photography/austin.png"],
  },
  {
    id: 2,
    destination: "New England",
    country: "USA",
    date: "2023",
    description: "A fall road trip through Vermont and New Hampshire. The autumn foliage was unreal — rivers of gold and crimson as far as the eye could see.",
    photos: ["/img/photography/aerial.png"],
  },
  {
    id: 3,
    destination: "Himalayas",
    country: "India",
    date: "2022",
    description: "Rode through the highest motorable passes in the world. Spiti Valley, Rohtang, and Manali — the mountains humbled me at every turn.",
    photos: ["/img/photography/mountains.png", "/img/photography/snow.png"],
  },
  {
    id: 4,
    destination: "Rajasthan",
    country: "India",
    date: "2021",
    description: "The land of kings. From the blue streets of Jodhpur to the golden dunes of Jaisalmer — chaos, color, and camels everywhere.",
    photos: ["/img/photography/street.png", "/img/photography/desert.png"],
  },
  {
    id: 5,
    destination: "Kashmir",
    country: "India",
    date: "2020",
    description: "Paradise on earth. Stayed on a houseboat in Dal Lake, explored Pahalgam meadows, and drank the best kahwa of my life.",
    photos: ["/img/photography/lake.png"],
  },
  {
    id: 6,
    destination: "South India",
    country: "India",
    date: "2019",
    description: "Temple runs through Tamil Nadu and Kerala. Ancient Dravidian architecture, backwaters, and the most incredible filter coffee.",
    photos: ["/img/photography/temple.png", "/img/photography/beach.png"],
  },
];

/* ────────────────────── Timeline Node ────────────────────── */

function TimelineNode({
  trip,
  isLeft,
  index,
  onPhotoClick,
}: {
  trip: Trip;
  isLeft: boolean;
  index: number;
  onPhotoClick: (src: string, alt: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex w-full items-start transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        "mb-16 md:mb-24",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* ── Desktop: alternating layout ── */}
      <div className="hidden md:flex w-full items-start">
        {isLeft ? (
          <>
            {/* isLeft=true: [TripCard | dot | Year] */}
            <div className="w-5/12">
              <TripCard trip={trip} align="right" onPhotoClick={onPhotoClick} />
            </div>
            <div className="flex flex-col items-center w-2/12">
              <div className="w-4 h-4 rounded-full bg-[#f0c56d] shadow-[0_0_15px_rgba(240,197,109,0.5)] z-10" />
              <div className="w-px flex-1 bg-gradient-to-b from-[#f0c56d]/60 to-[#f0c56d]/10 min-h-[200px]" />
            </div>
            <div className="w-5/12 flex justify-start pl-8 mt-[-6px]">
              <span className={cn("text-3xl lg:text-4xl text-white/20 leading-none", fontJersey15.className)}>
                {trip.date}
              </span>
            </div>
          </>
        ) : (
          <>
            {/* isLeft=false: [Year | dot | TripCard] */}
            <div className="w-5/12 flex justify-end pr-8 mt-[-6px]">
              <span className={cn("text-3xl lg:text-4xl text-white/20 leading-none", fontJersey15.className)}>
                {trip.date}
              </span>
            </div>
            <div className="flex flex-col items-center w-2/12">
              <div className="w-4 h-4 rounded-full bg-[#f0c56d] shadow-[0_0_15px_rgba(240,197,109,0.5)] z-10" />
              <div className="w-px flex-1 bg-gradient-to-b from-[#f0c56d]/60 to-[#f0c56d]/10 min-h-[200px]" />
            </div>
            <div className="w-5/12">
              <TripCard trip={trip} align="left" onPhotoClick={onPhotoClick} />
            </div>
          </>
        )}
      </div>

      {/* ── Mobile: single column ── */}
      <div className="flex md:hidden w-full items-start gap-4">
        {/* Line + dot */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#f0c56d] shadow-[0_0_12px_rgba(240,197,109,0.5)] z-10" />
          <div className="w-px flex-1 bg-gradient-to-b from-[#f0c56d]/60 to-[#f0c56d]/10 min-h-[150px]" />
        </div>
        {/* Card */}
        <div className="flex-1">
          <TripCard trip={trip} align="left" onPhotoClick={onPhotoClick} />
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── Trip Card ────────────────────── */

function TripCard({
  trip,
  align,
  onPhotoClick,
}: {
  trip: Trip;
  align: "left" | "right";
  onPhotoClick: (src: string, alt: string) => void;
}) {
  return (
    <div
      className={cn(
        "group",
        align === "right" ? "text-right pr-8" : "pl-0 md:pl-8",
      )}
    >
      {/* Location */}
      <h3 className={cn("text-2xl lg:text-3xl text-[#f0c56d]", fontJersey15.className)}>
        {trip.destination}
      </h3>
      <div className={cn("text-xs text-white/40 mt-0.5", fontInter.className)}>
        📍 {trip.country} · {trip.date}
      </div>

      {/* Description */}
      <p className={cn("mt-3 text-sm text-white/60 leading-relaxed max-w-md", fontInter.className, align === "right" ? "ml-auto" : "")}>
        {trip.description}
      </p>

      {/* Photos */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {trip.photos.map((photo, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in group/photo"
            onClick={() => onPhotoClick(photo, `${trip.destination} photo ${i + 1}`)}
          >
            <Image
              src={photo}
              alt={`${trip.destination} photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover/photo:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/20 transition-colors duration-300" />
            {/* zoom hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────── Page ────────────────────── */

export default function PhotographyPage() {
  const router = useRouter();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <main className="min-h-screen bg-[#00131c]">
      {/* Hero header */}
      <div className="relative pt-12 pb-16 text-center">
        {/* Persona Toggle — Traveller active */}
        <div className="absolute top-2.5 left-2.5 md:top-6 md:left-6 flex h-8 md:h-10 flex-row items-center gap-0 rounded-full border border-[#f0c56d]/30 bg-[#00131c]/60 backdrop-blur-sm">
          {/* Engineer — navigates to main page */}
          <div
            onClick={() => router.push("/")}
            className={cn(
              "flex items-center gap-1 md:gap-1.5 px-2 md:px-4 h-full rounded-full transition-all duration-300 cursor-pointer",
              "text-white/40 hover:text-[#a2fff4] hover:bg-[#a2fff4]/10",
              fontInter.className,
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span className="font-medium text-[8px] md:text-sm">Engineer</span>
          </div>
          <div className="h-3 w-px bg-[#f0c56d]/20" />
          {/* Traveller — active */}
          <div
            className={cn(
              "flex items-center gap-1 md:gap-1.5 px-2 md:px-4 h-full rounded-full transition-all duration-300",
              "bg-[#f0c56d]/20 text-[#f0c56d]",
              fontInter.className,
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span className="font-medium text-[8px] md:text-sm">Traveller</span>
          </div>
        </div>

        <h1 className={cn("text-5xl lg:text-7xl text-[#f0c56d] mt-8", fontJersey15.className)}>
          My Travel Journey
        </h1>
        <p className={cn("mt-4 text-base text-white/50 max-w-lg mx-auto", fontInter.className)}>
          Places I&apos;ve been, moments I&apos;ve captured, and stories from the road.
        </p>

        {/* Decorative line from title to timeline */}
        <div className="mt-10 mx-auto w-px h-16 bg-gradient-to-b from-transparent via-[#f0c56d]/40 to-[#f0c56d]/60" />
      </div>

      {/* Travel Timeline */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {trips.map((trip, i) => (
          <TimelineNode key={trip.id} trip={trip} isLeft={i % 2 === 0} index={i} onPhotoClick={(src, alt) => setLightbox({ src, alt })} />
        ))}

        {/* End marker */}
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full border-2 border-[#f0c56d]/40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#f0c56d]" />
          </div>
          <p className={cn("mt-4 text-sm text-white/30", fontInter.className)}>
            More adventures coming soon...
          </p>
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
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
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            {/* Caption */}
            <div className={cn("absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-3 text-white/80 text-sm", fontInter.className)}>
              {lightbox.alt}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
