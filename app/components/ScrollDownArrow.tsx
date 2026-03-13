/**
 * @name ScrollDownArrow.tsx
 * @type Component
 */

import Image from "next/image";
import { useEffect, useState } from "react";
import "../style/scrollDownArrow.css";
import { cn } from "@/lib/utils";

import chevronImg from "../../public/img/chevron.svg";

// Propriétés de ScrollDownArrow
// Propriétés de Chevron et ThreeChevron
type PropsAgain = {
  className?: string;
};

/**
 * @Chevron
 *
 * @description Simple chevron.
 *
 * @param className: Classe supplémentaire à appliquer au bouton
 *
 */
function Chevron({ className = " " }: PropsAgain) {
  return (
    <Image
      src={chevronImg}
      alt=""
      className={cn(className, "rotate-90 w-5 h-5")}
    />
  );
}

/**
 * @ThreeChevron
 *
 * @description Trois chevron les uns au dessus des autres.
 *
 * @param className: Classe supplémentaire à appliquer au bouton
 *
 */
function ThreeChevron({ className = " " }: PropsAgain) {
  return (
    <div
      className={cn(
        "p-fluide-anim absolute bottom-0 px-7 py-5 sm:px-12 sm:py-7",
        className,
      )}
    >
      <Chevron className="chevron-1" />
      <Chevron className="chevron-2" />
      <Chevron className="chevron-3" />
    </div>
  );
}

function ScrollDownArrow() {
  const [isVisible, setIsVisible] = useState(true);

  // Simple visibility check based on window scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <button
        onClick={() => {
          const element = document.getElementById("about-section");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={cn(
          "p-fluide-anim relative h-screen w-full rounded-full p-2 text-white/50 transition-colors hover:bg-white-1/10 hover:text-white pointer-events-auto",
          isVisible ? "opacity-100" : "opacity-0",
        )}
        aria-label="Scroll down"
      >
        <ThreeChevron className="left-0" />
        <ThreeChevron className="right-0" />
      </button>
    </div>
  );
}

export default ScrollDownArrow;
