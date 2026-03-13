/**
 * @name SocialmediaBar.tsx
 * @type Component
 */

import { useEffect } from "react";
import SocialMedia from "./SocialMedia";
import githubBadge from "../../public/img/social_media/github-badge.svg";
import linkedinBadge from "../../public/img/social_media/linkedin-badge.svg";
import mailBadge from "../../public/img/social_media/mail-badge.svg";
import textsEn from "../../lang/data-texts-en";

// Propriétés
type Props = {
  speed?: number;
};

export default function SocialMediaBar({ speed = 0 }: Props = {}) {
  // Effectué uniquement au début
  useEffect(() => {
    headerSetup();
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  function headerSetup() {
    const selecteur = document.getElementById("social-media-selecteur");
    const selecteurText = document.getElementById("social-media-selecteur-text");
    const allSocialMedia = document.getElementsByClassName("p-social-media-badge");

    for (const socialMedia of Array.from(allSocialMedia) as HTMLElement[]) {
      socialMedia.addEventListener("mouseenter", () => {
        const num = parseInt(socialMedia.dataset.num ?? "0");
        const offset = socialMedia?.offsetLeft ?? 0;
        const firstBadge = document.getElementById(`social-media-badge-${1}`);
        const offset_first = firstBadge?.offsetLeft ?? 0;

        if (selecteur) {
          selecteur.style.width = `${socialMedia.clientWidth}px`;
          selecteur.style.left = `${offset - offset_first}px`;
        }

        if (selecteurText) {
          switch (num) {
            case 1: selecteurText.textContent = texts.footer.git; break;
            case 2: selecteurText.textContent = texts.footer.linkedin; break;
            case 3: selecteurText.textContent = texts.footer.mail; break;
          }
        }
      });

      socialMedia.addEventListener("mouseleave", () => {
        if (selecteur) {
          selecteur.style.width = `100%`;
          selecteur.style.left = `0`;
        }
        if (selecteurText) {
          selecteurText.textContent = " ";
        }
      });
    }
  }

  const texts = textsEn;
  
  return (
    <div
      id="social-media-layer"
      className="absolute top-4 left-0 w-full flex justify-center max-sm:hidden z-20"
      style={{ transform: `translateY(calc(var(--hero-scroll, 0px) * ${speed}))`, willChange: "transform" }}
    >
      <div id="social-media-outer" className="flex flex-col gap-2 p-3">
        <div className="flex flex-row gap-7 max-sm:gap-3 lg:gap-10">
          <SocialMedia
            svgSrc={githubBadge}
            num="1"
            href="https://github.com/chhayanshp11"
            alt={texts.hero.social.altGit}
          />
          <SocialMedia
            svgSrc={linkedinBadge}
            num="2"
            href="https://www.linkedin.com/in/chhayanshp11/"
            alt={texts.hero.social.altLinkedin}
          />
          <SocialMedia
            svgSrc={mailBadge}
            num="3"
            href="mailto:chhayanshp11@gmail.com"
            alt={texts.hero.social.altMail}
          />
        </div>

        <div
          id="social-media-selecteur"
          className="flex flex-col items-center rounded-full"
        >
          <div
            id="social-media-selecteur-text"
            className="mt-2 text-nowrap text-center text-sm text-blue-8"
          ></div>
        </div>
      </div>
    </div>
  );
}
