/**
 * @name Hero.tsx
 * @type Page
 */

import { useRef, useEffect } from "react";
import BackgroundLayer from "./components/BackgroundLayer";
import Name from "./components/Name";
import ScrollDownArrow from "./components/ScrollDownArrow";
import SocialMediaBar from "./components/SocialMediaBar";
import NavigationBar from "./components/NavigationBar";
import PersonaToggle from "./components/ThemeSwitch";
import textsEn from "../lang/data-texts-en";

import img9Forest from "../public/img/background_layer/9_Forest.png";
import img8Forest from "../public/img/background_layer/8_Forest.png";
import img7Bridge from "../public/img/background_layer/7_Bridge.png";
import img6Birds from "../public/img/background_layer/6_Birds.png";
import img5Birds from "../public/img/background_layer/5_Birds.png";
import img4Mountains from "../public/img/background_layer/4_Mountains.png";
import img3Mountains from "../public/img/background_layer/3_Mountains.png";
import img2Mountains from "../public/img/background_layer/2_Mountains.png";
import img1Clouds from "../public/img/background_layer/1_Clouds.png";

function Hero() {
  const texts = textsEn;
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroRef.current) {
            // Prevent negative scroll values causing jumps (iOS bounce)
            const currentScroll = Math.max(0, window.scrollY);
            heroRef.current.style.setProperty('--hero-scroll', `${currentScroll}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initialize CSS var on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-[#a2fff4]"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      {/* Background layers - Diverging Parallax for the "sliding" effect */}
      <BackgroundLayer path={img1Clouds} speed={1.2} />
      <BackgroundLayer path={img2Mountains} speed={1.0} />

      {/* Social Media Bar */}
      <SocialMediaBar speed={0.5} />

      {/* More background layers */}
      <BackgroundLayer path={img3Mountains} speed={0.8} />
      <BackgroundLayer path={img4Mountains} speed={0.6} />
      <BackgroundLayer path={img5Birds} speed={-0.2} />
      <BackgroundLayer path={img6Birds} speed={-0.1} />

      {/* Navigation Bar */}
      <NavigationBar speed={0.55} />

      {/* Theme Switch */}
      <PersonaToggle speed={0.55} />

      {/* Hi / Greeting */}
      <Name
        text={texts.hero.hi}
        speed={0.65} // Slowed down from 1.1
        className="text-4xl text-blue-9 mb-44 lg:mr-[230px] lg:mb-56 max-sm:mb-28 max-sm:mr-16 max-sm:text-[1.7rem]"
      />

      {/* Name and Surname */}
      <Name
        text={texts.hero.arthur}
        speed={0.8} // Slowed down from 1.3
        className="text-6xl text-blue-7 lg:text-8xl w-full text-center max-sm:text-[2.6rem] max-sm:leading-[1.1] max-sm:mb-12 lg:mb-20 mb-16"
      />

      {/* Foreground layers - Slower positive or negative speeds for depth */}
      <BackgroundLayer path={img7Bridge} speed={0.4} />
      <BackgroundLayer path={img8Forest} speed={0.2} />
      <BackgroundLayer path={img9Forest} speed={0} />

      {/* Scroll Down Arrow */}
      <ScrollDownArrow />
    </div>
  );
}

export default Hero;
