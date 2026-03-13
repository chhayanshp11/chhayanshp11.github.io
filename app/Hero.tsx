/**
 * @name Hero.tsx
 * @type Page
 */

import { useState, useEffect } from "react";
import BackgroundLayer from "./components/BackgroundLayer";
import Name from "./components/Name";
import ScrollDownArrow from "./components/ScrollDownArrow";
import SocialMediaBar from "./components/SocialMediaBar";
import NavigationBar from "./components/NavigationBar";
import PersonaToggle from "./components/ThemeSwitch";
import textsEn from "../lang/data-texts-en";

// ... (imports for images stay same)

function Hero() {
  const texts = textsEn;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Only track scroll if Hero is potentially visible
      if (window.scrollY < window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-[#a2fff4]"
      style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      {/* Background layers - Localized parallax for the "sliding" effect */}
      <BackgroundLayer path={img1Clouds} scrollOffset={scrollY} speed={0.1} />
      <BackgroundLayer path={img2Mountains} scrollOffset={scrollY} speed={0.2} />

      {/* Social Media Bar */}
      <SocialMediaBar />

      {/* More background layers */}
      <BackgroundLayer path={img3Mountains} scrollOffset={scrollY} speed={0.3} />
      <BackgroundLayer path={img4Mountains} scrollOffset={scrollY} speed={0.4} />
      <BackgroundLayer path={img5Birds} scrollOffset={scrollY} speed={0.45} />
      <BackgroundLayer path={img6Birds} scrollOffset={scrollY} speed={0.5} />

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Theme Switch */}
      <PersonaToggle />

      {/* Hi / Greeting */}
      <Name
        text={texts.hero.hi}
        className="text-4xl text-blue-9 mb-44 lg:mr-[230px] lg:mb-56 max-sm:mb-28 max-sm:mr-16 max-sm:text-[1.7rem]"
      />

      {/* Name and Surname */}
      <Name
        text={texts.hero.arthur}
        className="text-6xl text-blue-7 lg:text-8xl w-full text-center max-sm:text-[2.6rem] max-sm:leading-[1.1] max-sm:mb-12 lg:mb-20 mb-16"
      />

      {/* Foreground layers */}
      <BackgroundLayer path={img7Bridge} scrollOffset={scrollY} speed={0.6} />
      <BackgroundLayer path={img8Forest} scrollOffset={scrollY} speed={0.7} />
      <BackgroundLayer path={img9Forest} scrollOffset={scrollY} speed={0.8} />

      {/* Scroll Down Arrow */}
      <ScrollDownArrow />
    </div>
  );
}

export default Hero;
