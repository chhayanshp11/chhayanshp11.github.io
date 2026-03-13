/**
 * @name Navigationbar.tsx
 * @type Component
 */

import { fontJersey15 } from "@/lib/font";
import "../style/navigationBar.css";
import { cn } from "@/lib/utils";
import textsEn from "../../lang/data-texts-en";

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
        "p-navigation-bar-text px-4 py-1 text-end max-sm:text-[19px] text-2xl text-blue-9 lg:px-12 lg:text-3xl max-sm:pr-2 max-sm:pl-0 max-sm:py-[1px] max-sm:leading-tight cursor-pointer",
        fontJersey15.className,
        className,
      )}
    >
      {text}
    </span>
  );
}

type Props = {
  speed?: number;
};

function NavigationBar({ speed = 0 }: Props = {}) {
  const scrollToSection = (sectionId: string, tab?: "experience" | "education") => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    if (tab) {
      window.dispatchEvent(new CustomEvent('setExperienceTab', { detail: tab }));
    }
  };

  // Récupération du textes
  const texts = textsEn;

  return (
    <nav
      id="navigation-bar-container"
      className="absolute top-0 right-0 pointer-events-none flex justify-end w-full"
      style={{ transform: `translateY(calc(var(--hero-scroll, 0px) * ${speed}))`, willChange: "transform" }}
    >
      <div
        id="navigation-bar"
        className="pointer-events-auto flex flex-col pt-4 lg:pt-8 w-full items-end"
      >
        {/* Navigation list - Visible on all screens */}
        <div className="flex flex-col items-end w-full">
          <NavigationBarText
            text={texts.hero.nav.about}
            onClick={() => scrollToSection("about-section")}
          />
          <NavigationBarText
            text={texts.hero.nav.experience}
            onClick={() => scrollToSection("experience-education", "experience")}
          />
          <NavigationBarText
            text={texts.hero.nav.education}
            onClick={() => scrollToSection("experience-education", "education")}
          />
          <NavigationBarText
            text={texts.hero.nav.skills}
            onClick={() => scrollToSection("skills-section")}
          />
          <NavigationBarText
            text={texts.hero.nav.beyondCode}
            onClick={() => scrollToSection("projects-section")}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
