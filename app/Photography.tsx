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

import mountainsImg from "../public/img/photography/mountains.png";
import streetImg from "../public/img/photography/street.png";
import austinImg from "../public/img/photography/austin.png";

function Photography() {
  const [ref, visible] = useOnScreen<HTMLDivElement>();

  return (
    <SectionWrapper
      id="photography-section"
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
          {[mountainsImg, streetImg, austinImg].map((src, i) => (
            <div
              key={i}
              className="relative w-64 h-44 rounded-xl overflow-hidden group"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Image
                src={src}
                alt="Travel preview"
                placeholder="blur"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
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
    </SectionWrapper>
  );
}

export default Photography;
