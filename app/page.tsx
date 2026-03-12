/**
 * @name page.tsx
 * @type All
 */

"use client";
import { IParallax, Parallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import LoadingScreen from "./components/LoadingScreen";
import About from "./About";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import Photography from "./Photography";
import Footer from "./Footer";
import BackToTopButton from "./components/BackToTopButton";
import BackgroundColor from "./components/BackgroundColor";
import ExperienceEducation from "./ExperienceEducation";
import { useMobile, MobileProvider } from "./hooks/useMobile";

/**
 * @Home
 * Fonction d'entrée
 *
 * @description Contient l'entièreté du porte folio.
 *
 */
function HomeContent() {
  // Booléen qui indique si la page est entrain de se charger
  const [loading, setLoading] = useState(true);

  // Référence de l'objet parallax
  const parallaxRef = useRef<IParallax>(null);

  // Lorsque la page se charge, la variable est à false
  useEffect(() => {
    setLoading(false);
  }, []);

  // Indicateur pour savoir si on est en haut de la page
  const [isTop, setIsTop] = useState(true);
  const isMobile = useMobile();

  // Handle scroll to show/hide the back-to-top button
  useEffect(() => {
    const handleScrollDesktop = () => {
      if (parallaxRef.current && parallaxRef.current.container.current) {
        const scrollTop = parallaxRef.current.container.current.scrollTop;
        setIsTop(scrollTop < window.innerHeight * 0.5);
      }
    };

    const handleScrollMobile = () => {
      setIsTop(window.scrollY < window.innerHeight * 0.5);
    };

    if (isMobile) {
      window.addEventListener("scroll", handleScrollMobile);
      return () => window.removeEventListener("scroll", handleScrollMobile);
    } else {
      // Must wait for ref to be available using a microtask if it just mounted
      const setupDesktopListener = () => {
        const container = parallaxRef.current?.container.current;
        if (container) {
          container.addEventListener("scroll", handleScrollDesktop);
        }
      };
      
      const timeoutId = setTimeout(setupDesktopListener, 100);
      
      return () => {
        clearTimeout(timeoutId);
        const container = parallaxRef.current?.container.current;
        if (container) {
          container.removeEventListener("scroll", handleScrollDesktop);
        }
      };
    }
  }, [isMobile]);



  if (isMobile) {
    return (
      <main className="min-h-screen bg-blue-9 overflow-x-hidden w-full relative">
        {loading && <LoadingScreen />}

        <BackToTopButton
          parallaxRef={parallaxRef}
          className={isTop ? "translate-x-40 opacity-0" : "opacity-100"}
        />
        
        <div className="h-[100svh] w-full relative">
          <Parallax ref={parallaxRef} pages={1} style={{ top: "0", left: "0" }} className="p-animation bg-blue-9">
             <Hero parallaxRef={parallaxRef} />
          </Parallax>
        </div>

        <div className="relative z-10 w-full bg-blue-9 flex flex-col items-center">
           <About />
           <ExperienceEducation />
           <Skills />
           <Testimonials />
           <Projects />
           <Photography />
           <Footer />
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Ecran de chargement; visible uniquement avant le 1er rendu du Hero */}
      {loading && <LoadingScreen />}

      <BackToTopButton
        parallaxRef={parallaxRef}
        className={isTop ? "translate-x-40 opacity-0" : "opacity-100"}
      />
      <Parallax
        ref={parallaxRef}
        pages={9}
        style={{ top: "0", left: "0" }}
        className="p-animation bg-blue-9"
      >
        {/* Hero pour la page d'acceuil */}
        <Hero parallaxRef={parallaxRef} />

        {/* Fond uni */}
        <BackgroundColor color="#00131c" offset={1} />
        <BackgroundColor color="#00131c" offset={2} />
        <BackgroundColor color="#00131c" offset={3} />
        <BackgroundColor color="#00131c" offset={4} />
        <BackgroundColor color="#00131c" offset={5} />
        <BackgroundColor color="#00131c" offset={6} />

        {/* <ElementBackground /> */}

        <About />
        <ExperienceEducation />
        <Skills />
        <Testimonials />
        <Projects />
        <Photography />
        <Footer />
      </Parallax>
    </main>
  );
}

export default function Home() {
  return (
    <MobileProvider>
      <HomeContent />
    </MobileProvider>
  );
}
