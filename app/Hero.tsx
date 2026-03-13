/**
 * @name Hero.tsx
 * @type Page
 */

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

/**
 * @Hero
 *
 * @description Page Hero.
 *
 */
function Hero() {
  // Récupération du textes
  const texts = textsEn;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#a2fff4]">
      {/* Background layers - Fixed stack for non-parallax stability */}
      <BackgroundLayer path={img1Clouds} />
      <BackgroundLayer path={img2Mountains} />

      {/* Social Media Bar */}
      <SocialMediaBar />

      {/* More background layers */}
      <BackgroundLayer path={img3Mountains} />
      <BackgroundLayer path={img4Mountains} />
      <BackgroundLayer path={img5Birds} />
      <BackgroundLayer path={img6Birds} />

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
      <BackgroundLayer path={img7Bridge} />
      <BackgroundLayer path={img8Forest} />
      <BackgroundLayer path={img9Forest} />

      {/* Scroll Down Arrow */}
      <ScrollDownArrow />
    </div>
  );
}

export default Hero;
