/**
 * @name page.tsx
 * @type All
 */

"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import LoadingScreen from "./components/LoadingScreen";
import About from "./About";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import Photography from "./Photography";
import Footer from "./Footer";
import BackToTopButton from "./components/BackToTopButton";
import ExperienceEducation from "./ExperienceEducation";
import { MobileProvider } from "./hooks/useMobile";

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

  // Lorsque la page se charge, la variable est à false
  useEffect(() => {
    setLoading(false);
  }, []);

  // Indicateur pour savoir si on est en haut de la page
  const [isTop, setIsTop] = useState(true);

  // Handle scroll to show/hide the back-to-top button using native window scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#00131c] overflow-x-hidden w-full relative">
      {/* Ecran de chargement; visible uniquement avant le 1er rendu du Hero */}
      {loading && <LoadingScreen />}

      <BackToTopButton
        className={isTop ? "translate-x-40 opacity-0" : "opacity-100"}
      />

      {/* Hero section */}
      <Hero />

      {/* Main content flow */}
      <div className="relative z-10 w-full bg-[#00131c] flex flex-col items-center">
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

export default function Home() {
  return (
    <MobileProvider breakpoint={1024}>
      <HomeContent />
    </MobileProvider>
  );
}
