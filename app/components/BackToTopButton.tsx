/**
 * @name BackToTopButton.tsx
 * @type Component
 */

import "../style/backToTop.css";
import { cn } from "@/lib/utils";
import { IParallax } from "@react-spring/parallax";
import { RefObject } from "react";
import { IconChevronUp } from "@tabler/icons-react";
import { useMobile } from "../hooks/useMobile";
import textsEn from "../../lang/data-texts-en";

// Propriétés
type Props = {
  className?: string;
  parallaxRef: RefObject<IParallax | null>;
};

/**
 * @BackToTopButton
 * Fonction principale
 *
 * @description Bouton qui permet de revenir à la première page,
 * ce bouton n'apparait que lorsque l'on quitte la première page
 * et est toujours positionné en haut à droite.
 *
 * @param className: Classe supplémentaire à appliquer au bouton
 * @param parallaxRef: Référence de l'élément global parallax
 *
 */
function BackToTopButton({ className = "", parallaxRef }: Props) {
  const isMobile = useMobile();

  const handleClick = () => {
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      parallaxRef.current?.scrollTo(0);
    }
  };

  // Récupération du textes
  const texts = textsEn;

  return (
    <button
      onClick={handleClick}
      aria-label={texts.hero.nav.backToTop}
      className={cn(
        "fixed bottom-12 right-7 sm:right-12 z-[500] flex flex-col items-center justify-center transition-all duration-500",
        "text-white/40 hover:text-[#a2fff4] active:scale-90",
        "back-to-top-glow",
        className,
      )}
    >
      <div className="flex flex-col -space-y-2">
        <IconChevronUp className="h-5 w-5 btt-chevron-1" />
        <IconChevronUp className="h-5 w-5 btt-chevron-2" />
        <IconChevronUp className="h-5 w-5 btt-chevron-3" />
      </div>
    </button>
  );
}

export default BackToTopButton;
