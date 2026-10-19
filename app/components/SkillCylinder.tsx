/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import skills from "@/lang/data-skills-en";

const ROWS = 7;
const RADIUS = 180;
const ROW_HEIGHT = 38;

export default function SkillCylinder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const rafRef = useRef<number>(0);

  const allSkills = skills.flatMap((cat) =>
    cat.subSkills.map((s) => ({ name: s.name, image: s.image, url: s.url })),
  );

  const perRow = Math.ceil(allSkills.length / ROWS);
  const cylinderHeight = ROWS * ROW_HEIGHT;

  const render = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>("[data-cyl]");
    const angle = rotationRef.current;

    items.forEach((el) => {
      const row = Number(el.dataset.row);
      const col = Number(el.dataset.col);
      const colCount = Number(el.dataset.colcount);
      const baseAngle = (col / colCount) * Math.PI * 2;
      const stagger = row % 2 === 1 ? Math.PI / colCount : 0;
      const a = baseAngle + stagger + angle;

      const x = RADIUS * Math.sin(a);
      const z = RADIUS * Math.cos(a);
      const y = (row - (ROWS - 1) / 2) * ROW_HEIGHT;

      const perspective = 500;
      const scale = perspective / (perspective + z);
      const projX = x * scale;
      const projY = y * scale;

      const normZ = (z + RADIUS) / (2 * RADIUS);
      const opacity = 0.15 + 0.85 * normZ;

      el.style.transform = `translate(-50%, -50%) translate(${projX}px, ${projY}px) scale(${scale})`;
      el.style.opacity = String(opacity);
      el.style.zIndex = String(Math.round(normZ * 100));
      el.style.pointerEvents = normZ > 0.4 ? "auto" : "none";
    });
  }, []);

  useEffect(() => {
    const animate = () => {
      rotationRef.current += 0.004;
      render();
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [render]);

  const distributed: { skill: (typeof allSkills)[0]; row: number; col: number; colCount: number }[] = [];
  let idx = 0;
  for (let r = 0; r < ROWS; r++) {
    const count = r < allSkills.length % ROWS ? perRow : Math.floor(allSkills.length / ROWS);
    for (let c = 0; c < count && idx < allSkills.length; c++, idx++) {
      distributed.push({ skill: allSkills[idx], row: r, col: c, colCount: count });
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden"
      style={{ height: cylinderHeight + 40 }}
    >
      {distributed.map(({ skill, row, col, colCount }) => (
        <a
          key={skill.name}
          data-cyl
          data-row={row}
          data-col={col}
          data-colcount={colCount}
          href={skill.url}
          target="_blank"
          rel="noreferrer"
          className="absolute left-1/2 top-1/2 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 shadow-sm whitespace-nowrap"
        >
          <Image
            src={skill.image}
            alt={skill.name}
            width={14}
            height={14}
            className="object-contain w-3.5 h-3.5"
          />
          <span className="text-[10px] font-medium text-zinc-700 dark:text-zinc-300">
            {skill.name}
          </span>
        </a>
      ))}
    </div>
  );
}
