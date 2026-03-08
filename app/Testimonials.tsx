/**
 * @name Testimonials.tsx
 * @type Page Section
 *
 * @description Section for displaying LinkedIn recommendations in a horizontal carousel
 */

"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import { fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useOnScreen } from "./hooks/useOnScreen";
import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin: string;
  text: string;
};

// Real data transcribed from LinkedIn recommendations
const testimonialsData: Testimonial[] = [
  {
    name: "Zoran Konrad",
    role: "VP, Data Services Engineer Manager",
    company: "LPL Financial",
    image: "https://ui-avatars.com/api/?name=Zoran+Konrad&background=0D8BFF&color=fff",
    linkedin: "https://www.linkedin.com/in/zorankonrad",
    text: "I had the pleasure of working with Chhayansh Purohit during his internship as a Data Engineer. His dedication and enthusiasm were evident from day one. Here are some key points that make me highly recommend him:\n\n1. Technical Competence: Chhayansh possesses a strong grasp of data engineering concepts. His ability to analyze complex data sets has been instrumental in driving successful projects within our team.\n2. Project Management: Chhayansh demonstrated exceptional project management skills. He effectively coordinated data pipelines, ensuring timely delivery and accuracy.\n3. Collaborative Spirit: Chhayansh is a team player. He actively participated in brainstorming sessions, contributed fresh ideas, and collaborated seamlessly with colleagues.\n4. Master's Degree Pursuit: Chhayansh is currently completing his master's degree in information technology and management. His commitment to continuous learning and academic excellence is commendable.\n\nI enthusiastically recommend Chhayansh for his dedication, technical prowess, and positive attitude and look forward to having him join my data engineering team at LPL Financial.",
  },
  {
    name: "Kory Bliss",
    role: "Senior IT Internal Auditor",
    company: "LPL Financial",
    image: "https://ui-avatars.com/api/?name=Kory+Bliss&background=025C99&color=fff",
    linkedin: "https://www.linkedin.com/in/kory-bliss",
    text: "Chhayansh did a fantastic job during his time as an IT internal audit intern. He was able to quickly pickup concepts and put them into practice. Questions or concerns that were raised during the testing of controls were well thought out and showed an overall understanding of the purpose of the testing we were performing. It was a pleasure working with Chhayansh and I wish him the very best in all his future endeavors!",
  },
  {
    name: "Steve Spittler, CPA, CISA",
    role: "VP, Technology, Cyber and Product Risk",
    company: "LPL Financial",
    image: "https://ui-avatars.com/api/?name=Steve+Spittler&background=003b64&color=fff",
    linkedin: "https://www.linkedin.com/in/steve-spittler-cpa-cisa-02862495",
    text: "It was a pleasure to have Chhayansh intern with our IT Internal Audit team this Summer. He had a great work ethic, completing his testing ahead of schedule. He also knew when to raise questions to his Seniors and manage his workload with minimal oversight. Chhayansh also volunteered to take on extra work to help team members during a busy time. He has a bright future ahead and will make a great addition to any Internal Audit team or Data Analytics function.",
  },
  {
    name: "Amit Bhatt",
    role: "Product Manager",
    company: "ESEM Infostreamz",
    image: "https://ui-avatars.com/api/?name=Amit+Bhatt&background=0077b5&color=fff",
    linkedin: "https://www.linkedin.com/in/amit-bhatt-3809871b",
    text: '"I had the privilege of working with Chhayansh during an internship at ESEM Infostreamz where we focused on Google Cloud solutions. Chhayansh demonstrated exceptional technical proficiency and a deep understanding of cloud computing technologies.\n\nThroughout the internship, Chhayansh played a key role in several projects and was instrumental in driving their success. Chhayansh consistently demonstrated the ability to work independently, as well as in a team, and brought fresh perspectives and innovative solutions to the table.\n\nChhayansh has a strong work ethic and is always eager to take on new challenges. Strong communication and interpersonal skills make Chhayansh an asset to any team and their technical expertise in Google Cloud solutions makes them a valuable resource in the field.\n\nI highly recommend Chhayansh for future employment opportunities and believe they will continue to make a positive impact in their career. If you have any questions about Chhayansh\'s performance or potential, please don\'t hesitate to reach out."',
  },
];

function Testimonials() {
  const [ref, visible] = useOnScreen<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth +
        24 /* gap-6 = 24px */
      : 1;
    setActiveIndex(Math.round(scrollLeft / cardWidth));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollTo = useCallback((direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;
    container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  }, []);

  return (
    <ParallaxLayer
      offset={4}
      speed={0}
      className="flex items-center justify-center pointer-events-auto"
    >
      <div
        ref={ref}
        className={cn(
          "w-full max-w-7xl mx-auto px-6 md:px-12 py-12 transition-all duration-700 ease-in-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className={cn("text-[#a2fff4] mt-4 flex items-center gap-2", fontInter.className)}>
            Recommendations from my{" "}
            <a
              href="https://www.linkedin.com/in/chhayanshp11/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 bg-[#0077b5]/20 text-[#0077b5] border border-[#0077b5]/50 rounded-full hover:bg-[#0077b5]/30 transition-colors flex items-center gap-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn Profile
            </a>
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative group/carousel">
          {/* Left arrow */}
          <button
            onClick={() => scrollTo("left")}
            aria-label="Previous testimonial"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#a2fff4]/20 hover:text-[#a2fff4] hover:border-[#a2fff4]/40 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100",
              activeIndex === 0 && "!opacity-0 pointer-events-none"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollTo("right")}
            aria-label="Next testimonial"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#a2fff4]/20 hover:text-[#a2fff4] hover:border-[#a2fff4]/40 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100",
              activeIndex >= testimonialsData.length - 1 && "!opacity-0 pointer-events-none"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonialsData.map((t, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[85vw] sm:w-[70vw] md:w-[550px] lg:w-[600px] rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 md:p-8 flex flex-col hover:border-[#a2fff4]/20 hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <a href={t.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full overflow-hidden bg-white/10 shrink-0 ring-2 ring-transparent hover:ring-[#0077b5] transition-all">
                    <Image src={t.image} alt={t.name} width={48} height={48} className="object-cover w-full h-full" />
                  </a>
                  <div>
                    <a href={t.linkedin} target="_blank" rel="noreferrer" className={cn("text-white font-semibold hover:text-[#0077b5] transition-colors inline-flex items-center gap-1.5", fontInter.className)}>
                      {t.name}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#0077b5] opacity-60">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <div className={cn("text-white/40 text-xs", fontInter.className)}>
                      {t.role} at <span className="text-[#a2fff4]/80">{t.company}</span>
                    </div>
                  </div>
                </div>

                <div className="relative flex-1">
                  <svg className="absolute -top-2 -left-2 w-6 h-6 text-[#a2fff4]/10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className={cn("text-white/60 text-sm leading-relaxed relative z-10 italic mt-6 whitespace-pre-line", fontInter.className)}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === i
                    ? "bg-[#a2fff4] w-6"
                    : "bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Testimonials;

