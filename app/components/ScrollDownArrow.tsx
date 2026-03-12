/**
 * @name ScrollDownArrow.tsx
 * @type Component
 */

import Image from "next/image";
import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { RefObject, useEffect, useState } from "react";
import "../style/scrollDownArrow.css";
import { cn } from "@/lib/utils";
import { useMobile } from "../hooks/useMobile";

import chevronImg from "../../public/img/chevron.svg";

// Propriétés de ScrollDownArrow
type Props = {
  margin_bottom?: number;
  margin_side?: number;
  scrollThreshold?: number;
  parallaxRef: RefObject<IParallax | null>;
};

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

/**
 * @ScrollDownArrow
 * Fonction principale
 *
 * @description A droite et à gauche, en bas de l'écran, des chevrons animé
 * indique a l'utilisateur qu'il peut scroll vers le bas,
 * ces chevron disparaissent lorsque l'on quitte la 1ère page.
 *
 * @param scrollThreshold: Seuil avant que les chevrons disparaissent 
 * @param parallaxRef: Référence de l'élément global parallax
 *
 */
function ScrollDownArrow({ scrollThreshold = 30, parallaxRef }: Props) {

  // Défini si le threshold doit être visible ou pas
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useMobile();

  // Exécuté uniquement au début
  useEffect(() => {
    /**
     * Check la position du scroll et set visible à true uniquement
     * si l'on ne dépasse pas le threshold.
     */
    const checkScrollPosition = () => {
      if (parallaxRef.current) {
        const currentScrollPos = parallaxRef.current.current;
        setIsVisible(currentScrollPos < scrollThreshold);
      }
    };

    // Appel cette fonction toute les secondes
    const intervalId = setInterval(checkScrollPosition, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [scrollThreshold, parallaxRef]);

  return (
    <ParallaxLayer className="pointer-events-none">
      <button
        onClick={() => {
          if (isMobile) {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          } else {
            parallaxRef.current?.scrollTo(1);
          }
        }}
        className={cn(
          "p-fluide-anim relative h-dvh w-full rounded-full p-2 text-white/50 transition-colors hover:bg-white-1/10 hover:text-white",
          isVisible ? "opacity-100" : "opacity-0",
        )}
        aria-label="Scroll down"
      >
        <ThreeChevron className="left-0" />
        <ThreeChevron className="right-0" />
      </button>
    </ParallaxLayer>
  );
}

export default ScrollDownArrow;
