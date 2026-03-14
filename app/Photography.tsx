/**
 * @name Photography.tsx
 * @type Page Section
 *
 * @description Minimal "Beyond the Code" teaser on the main page.
 * Links to the full /photography travel timeline page.
 */

"use client";

import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useOnScreen } from "./hooks/useOnScreen";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./components/SectionWrapper";
import { useState, useEffect } from "react";

import mountainsImg from "../public/img/photography/mountains.png";
import streetImg from "../public/img/photography/street.png";
import austinImg from "../public/img/photography/austin.png";

const photos = [
  { src: mountainsImg, alt: "Himalayas — mountain pass" },
  { src: streetImg,   alt: "Rajasthan — street market" },
  { src: austinImg,   alt: "Austin — city at sunset" },
];

function Photography() {
  const [ref, visible] = useOnScreen<HTMLDivElement>();
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
    <SectionWrapper
      id="photography-section"
      fullHeight={false}
      className="pointer-events-auto flex items-center w-full"
    >
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-5xl px-6 py-16 text-center transition-all duration-700 ease-in-out",
          visible ? "" : "translate-y-10 opacity-0",
        )}
      >
        {/* Title */}
        <h2
          className={cn(
            "text-4xl lg:text-5xl text-[#f0c56d]",
            fontJersey15.className,
          )}
        >
          Beyond the Code
        </h2>
        <p
          className={cn(
            "mt-3 text-sm lg:text-base text-white/60 max-w-md mx-auto",
            fontInter.className,
          )}
        >
          When I&apos;m not building data pipelines, I&apos;m capturing the world through my lens.
        </p>

        {/* 3 preview photos */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative w-64 h-44 rounded-xl overflow-hidden group cursor-zoom-in"
              style={{ transitionDelay: `${i * 150}ms` }}
              onClick={() => setLightbox({ src: (photo.src as { src: string }).src ?? String(photo.src), alt: photo.alt })}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                placeholder="blur"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Link href="/photography">
          <button
            className={cn(
              "mt-10 px-8 py-3 rounded-full border border-[#f0c56d]/40 text-[#f0c56d] text-sm",
              "hover:bg-[#f0c56d]/10 hover:border-[#f0c56d]/70 hover:scale-105",
              "active:scale-95 transition-all duration-300",
              fontInter.className,
            )}
          >
            Explore My Journey →
          </button>
        </Link>
      </div>

      {/* Lightbox Modal */}
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
    </SectionWrapper>
  );
}

export default Photography;

