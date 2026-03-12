/**
 * @name Navigationbar.tsx
 * @type Component
 */

import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";
import "../style/navigationBar.css";
import { RefObject, useState } from "react";
import { cn } from "@/lib/utils";
import SwitchDark from "./DarkSwitch";
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
        "p-navigation-bar-text px-4 py-1 text-end max-sm:text-xl text-2xl text-blue-9 lg:px-12 lg:text-3xl max-sm:text-center",
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
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
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
        className="pointer-events-auto flex flex-col pt-4 lg:pt-8 w-full max-sm:px-4"
      >
        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden flex justify-end items-start w-full pr-2 relative z-[200]">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-blue-9 p-2 hover:bg-white/10 rounded-lg transition-colors flex justify-center items-center backdrop-blur-md bg-[#001520]/50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> :
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              }
            </svg>
          </button>
          
          {isOpen && (
             <div className="absolute top-14 right-2 flex flex-col items-end gap-3 bg-[#001520]/95 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-5 min-w-[200px]">
                <NavigationBarText text={texts.hero.nav.about} onClick={() => scrollToSection(1)} />
                <NavigationBarText text={texts.hero.nav.experience} onClick={() => scrollToSection(2, "experience")} />
                <NavigationBarText text={texts.hero.nav.education} onClick={() => scrollToSection(2, "education")} />
                <NavigationBarText text={texts.hero.nav.skills} onClick={() => scrollToSection(3)} />
                <NavigationBarText text={texts.hero.nav.beyondCode} onClick={() => scrollToSection(4.8)} />
             </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-col">
          {/* Navigation section About */}
          <NavigationBarText
            text={texts.hero.nav.about}
            onClick={() => scrollToSection(1)}
          ></NavigationBarText>

          {/* Navigation section Experience */}
          <NavigationBarText
            text={texts.hero.nav.experience}
            onClick={() => scrollToSection(2, "experience")}
          ></NavigationBarText>

          {/* Navigation section Education */}
          <NavigationBarText
            text={texts.hero.nav.education}
            onClick={() => scrollToSection(2, "education")}
          ></NavigationBarText>

          {/* Navigation section Skills */}
          <NavigationBarText
            text={texts.hero.nav.skills}
            onClick={() => scrollToSection(3)}
          ></NavigationBarText>

          {/* Navigation section Beyond Code */}
          <NavigationBarText
            text={texts.hero.nav.beyondCode}
            onClick={() => scrollToSection(4.8)}
          ></NavigationBarText>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default NavigationBar;
