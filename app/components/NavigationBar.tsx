/**
 * @name Navigationbar.tsx
 * @type Component
 */

import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";
import "../style/navigationBar.css";
import { RefObject } from "react";
import { cn } from "@/lib/utils";
import { useMobile } from "../hooks/useMobile";
import textsEn from "../../lang/data-texts-en";

// Propriétés de NavigationBar
type Props = {
  speed: number;
  parallaxRef: RefObject<IParallax | null>;
};

// Propriétés de NavigationBarText
type PropsAgain = {
  text: string;
  className?: string;
  onClick?: () => void;
};

/**
 * @NavigationBarText
 *
 * @description Texte qui va servir de lien cliquable
 * afin de renvoyer aux autre section du porte folio.
 *
 * @param text: Texte qui sera affiché
 * @param className: Classe supplémentaire à appliquer au bouton
 * @param onClick: Fonction qui va etre réalisé lors du clique sur le texte
 *
 */
function NavigationBarText({
  text,
  className = "",
  onClick = () => {},
}: PropsAgain) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "p-navigation-bar-text px-4 py-1 text-end max-sm:text-[19px] text-2xl text-blue-9 lg:px-12 lg:text-3xl max-sm:pr-2 max-sm:pl-0 max-sm:py-[1px] max-sm:leading-tight",
        fontJersey15.className,
        className,
      )}
    >
      {text}
    </span>
  );
}

/**
 * @NavigationBar
 *
 * @description Barre de navigation qui comportera des liens pour
 * aller aux autres sections du porte folio, sur sa proche couche parallax.
 *
 * @param speed: Vitesse à transmettre à la couche parallax
 * @param parallaxRef: Référence de l'élément global parallax
 *
 */
function NavigationBar({ speed, parallaxRef }: Props) {
  const isMobile = useMobile();

  const scrollToSection = (sectionOffset: number, tab?: "experience" | "education") => {
    if (isMobile) {
      // Find relative section height since sections just stack
      const targetY = sectionOffset * window.innerHeight;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    } else {
      parallaxRef.current?.scrollTo(sectionOffset);
    }
    if (tab) {
      window.dispatchEvent(new CustomEvent('setExperienceTab', { detail: tab }));
    }
  };

  // Récupération du textes
  const texts = textsEn;

  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="pointer-events-none flex justify-end w-full"
    >
      <div
        id="navigation-bar"
        className="pointer-events-auto flex flex-col pt-4 lg:pt-8 w-full items-end"
      >
        {/* Navigation list - Visible on all screens */}
        <div className="flex flex-col items-end w-full">
          <NavigationBarText
            text={texts.hero.nav.about}
            onClick={() => scrollToSection(1)}
          />
          <NavigationBarText
            text={texts.hero.nav.experience}
            onClick={() => scrollToSection(2, "experience")}
          />
          <NavigationBarText
            text={texts.hero.nav.education}
            onClick={() => scrollToSection(2, "education")}
          />
          <NavigationBarText
            text={texts.hero.nav.skills}
            onClick={() => scrollToSection(3)}
          />
          <NavigationBarText
            text={texts.hero.nav.beyondCode}
            onClick={() => scrollToSection(4.8)}
          />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default NavigationBar;
