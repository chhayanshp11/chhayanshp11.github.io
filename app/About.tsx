/**
 * @name About.tsx
 * @type Page
 */

import Image from "next/image";
import SectionWrapper from "./components/SectionWrapper";
import Timeline from "./components/Timeline";
import "./style/about.css";
import Button from "./components/Button";
import Link from "next/link";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";
import SocialMedia from "./components/SocialMedia";

import selfieImg from "../public/img/selfie_v1.jpg";
import githubBadge from "../public/img/social_media/github-badge.svg";
import linkedinBadge from "../public/img/social_media/linkedin-badge.svg";
import mailBadge from "../public/img/social_media/mail-badge.svg";
import textsEn from "../lang/data-texts-en";

/**
 * @About
 * Fonction principale
 *
 * @description Page About.
 *
 */
function About() {
  // Références pour l'apparition au scroll
  const [aboutRef, aboutVisible] = useOnScreen<HTMLDivElement>();
  const [imgRef, imgVisible] = useOnScreen<HTMLImageElement>();
  const [descRef, descVisible] = useOnScreen<HTMLDivElement>();
  const [cvRef, cvVisible] = useOnScreen<HTMLButtonElement>();
  const [contactRef, contactVisible] = useOnScreen<HTMLDivElement>();

  // Récupération du textes
  const texts = textsEn;

  return (
    <SectionWrapper
      id="about-section"
      className="relative flex min-h-[600px] flex-col items-center justify-evenly bg-blue-9 dark:bg-blue-4 lg:flex-row"
    >
      <div className="absolute top-0 -z-10 hidden h-32 w-full flex-col items-center bg-blue-9 dark:flex">
        <div className="half-ellipse absolute bg-blue-8"></div>
        <div className="half-ellipse absolute top-2 bg-blue-7"></div>
        <div className="half-ellipse absolute top-4 bg-blue-5"></div>
        <div className="half-ellipse absolute top-6 bg-blue-6"></div>
        <div className="half-ellipse absolute top-8 bg-blue-4"></div>
      </div>

      {/* Cadre contenant les infos principales */}
      <div
        ref={aboutRef}
        className={cn(
          "mx-4 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-white-1/65 to-blue-5/45 transition-all duration-500 ease-in-out lg:mx-0 dark:from-blue-9 lg:h-[642px] dark:to-blue-5",
          aboutVisible ? "" : "opacity-0",
        )}
      >
        <div className="lg:gap0 m-px flex flex-col items-center justify-evenly gap-8 rounded-2xl bg-blue-9/95 py-8 lg:h-full  lg:py-0 dark:bg-blue-1/85">
          <div className="relative mx-auto mt-4 mb-4 z-10">
            <div className={cn("relative z-10 transition-all duration-500 ease-in-out", imgVisible ? "" : "translate-x-40 opacity-0")}>
              <Image
                ref={imgRef}
                id="img-selfie"
                src={selfieImg}
                alt={texts.about.altPicture}
                placeholder="blur"
                className="w-40 h-40 lg:w-64 lg:h-64 rounded-full object-cover shadow-[0_0_30px_rgba(162,255,244,0.15)] ring-4 ring-white/5"
              />
            </div>
            
            {/* AWS Cloud Practitioner Badge */}
            <div className={cn(
                "absolute -left-2 top-4 lg:-left-3 lg:top-8 w-12 h-12 lg:w-16 lg:h-16 z-20 transition-all duration-700 delay-300 ease-out max-sm:-left-0",
                imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
              <div 
                className="relative w-full h-full transition-transform duration-300 ease-out hover:scale-[2.5] hover:z-50 cursor-pointer pointer-events-auto origin-center drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:[animation-play-state:paused]"
                style={{ animation: "badgeFloat1 3s ease-in-out infinite" }}
              >
                <Image 
                  src="/img/badges/aws-cp.png" 
                  alt="AWS Certified Cloud Practitioner" 
                  width={64} height={64} 
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* AWS Data Engineer Badge */}
            <div className={cn(
                "absolute -right-2 bottom-4 lg:-right-3 lg:bottom-10 w-12 h-12 lg:w-16 lg:h-16 z-20 transition-all duration-700 delay-500 ease-out max-sm:-right-0",
                imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
              <div 
                className="relative w-full h-full transition-transform duration-300 ease-out hover:scale-[2.5] hover:z-50 cursor-pointer pointer-events-auto origin-center drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:[animation-play-state:paused]"
                style={{ animation: "badgeFloat2 3.5s ease-in-out 0.5s infinite" }}
              >
                <Image 
                  src="/img/badges/aws-cda.png" 
                  alt="AWS Certified Data Engineer" 
                  width={64} height={64} 
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Description de moi même */}
          <div
            ref={descRef}
            className={cn(
              "mx-12 max-w-[400px] text-sm transition-all duration-500 ease-in-out lg:text-base",
              descVisible ? "" : "-translate-x-40 opacity-0",
            )}
          >
            {texts.about.desc}
          </div>

          {/* Bouton qui fait télécharger le CV */}
          <Link href="/resume.pdf" target="_blank">
            <Button
              ref={cvRef}
              text={texts.about.seeCV}
              className={cn(
                "transition-all duration-500 ease-in-out",
                cvVisible ? "" : "translate-x-40 opacity-0",
              )}
            />
          </Link>

          <div
            ref={contactRef}
            className={cn(
              "flex flex-row gap-4 transition-all duration-500 ease-in-out",
              contactVisible ? "" : "-translate-x-40 opacity-0",
            )}
          >
            <div className="rounded-full bg-gradient-to-tr from-blue-1 to-blue-6 p-px duration-150 hover:scale-125">
              <SocialMedia
                svgSrc={githubBadge}
                num="1"
                href="https://github.com/chhayanshp11"
                alt={texts.hero.social.altGit}
              />
            </div>

            {/* Badge Linkedin */}
            <div className="rounded-full bg-gradient-to-tr from-blue-1 to-blue-6 p-px duration-150 hover:scale-125">
              <SocialMedia
                svgSrc={linkedinBadge}
                num="2"
                href="https://www.linkedin.com/in/chhayanshp11/"
                alt={texts.hero.social.altLinkedin}
              />
            </div>

            {/* Badge Mail */}
            <div className="rounded-full bg-gradient-to-tr from-blue-1 to-blue-6 p-px duration-150 hover:scale-125">
              <SocialMedia
                svgSrc={mailBadge}
                num="3"
                href="mailto:chhayanshp11@gmail.com"
                alt={texts.hero.social.altMail}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline sur mon parcours */}
      <Timeline className="scale-90 lg:scale-110" />
    </SectionWrapper>
  );
}

export default About;
