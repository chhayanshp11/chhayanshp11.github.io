/**
 * @name Name.tsx
 * @type Component
 */

import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";

// Propriétés
type Props = {
  text: string;
  className?: string;
  speed?: number;
};

/**
 * @Name
 * Fonction principale
 *
 * @description Affiche un text au centre de l'écran.
 *
 * @param text: Texte à afficher
 * @param className: Classe supplémentaire à appliquer
 * 
 */
function Name({ text, className = "", speed = 0 }: Props) {
  return (
    <div 
      className="absolute inset-0 pointer-events-none flex w-full h-full flex-col justify-center items-center"
      style={{ transform: `translate3d(0, calc(var(--hero-scroll, 0px) * ${speed}), 0)`, willChange: "transform" }}
    >
      <div
        className={cn(
          "pointer-events-auto transition-all duration-200 ease-in-out",
          fontJersey15.className,
          className,
        )}
      >
        {text}
      </div>
    </div>
  );
}

export default Name;
