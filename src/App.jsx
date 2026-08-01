import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";

// Living 3D Animated Background Engine
import GlobalBackground from "./components/background/GlobalBackground";

// UI Components
import WaveDivider from "./components/ui/WaveDivider";
import AnimatedCursor from "./components/ui/AnimatedCursor";
import LoadingScreen from "./components/ui/LoadingScreen";

// Sections
import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import Services from "./components/sections/Services";
import Howwework from "./components/sections/Howwework";
import Leadership from "./components/sections/Leadership";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import VisionMission from "./components/sections/VisionMission";
import Insights from "./components/sections/Insights";
import Careers from "./components/sections/Careers";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

function App() {
  // Initialize dynamic global smooth scroll momentum tracking via Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Cinematic scroll progress bar tracking
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Interactive Custom Cursor */}
      <AnimatedCursor />

      {/* Initial Page Loading Presentation */}
      <LoadingScreen />

      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-slate-900/40">
        <motion.div
          className="h-full bg-gradient-to-r from-[#1D3557] via-[#D4AF37] to-[#FFD700] shadow-[0_0_10px_#D4AF37]"
          style={{ scaleX, transformOrigin: "0% 50%" }}
        />
      </div>

      {/* Global Living 3D Animated Background (Globe + Waves + Particles) */}
      <GlobalBackground />

      {/* Main Floating Website Content Layer */}
      <div className="relative z-10 bg-transparent antialiased text-slate-100 selection:bg-[#D4AF37]/20 selection:text-[#FFD700] overflow-x-clip">
        <Navbar />

        <main>
          <HeroSection />
          <WaveDivider />

          <AboutSection />
          <Services />
          <WaveDivider />

          <Howwework />
          <Leadership />
          <WaveDivider />

          <WhyChooseUs />
          <VisionMission />
          <WaveDivider />

          <Insights />
          <WaveDivider />

          <Careers />
          <FAQ />
          <WaveDivider />

          <Contact />
        </main>
      </div>

      {/* Status Badge */}
      <div
        className="fixed top-20 right-5 z-[9999] pointer-events-none flex items-center justify-center gap-2 bg-[#050b18]/90 border border-[#D4AF37]/50 rounded-full px-3 py-1 shadow-[0_0_15px_rgba(212,175,55,0.3)] backdrop-blur-md"
        aria-hidden="true"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
        </span>
        <span className="text-[10px] tracking-widest text-[#FFD700] font-semibold uppercase">APP ONLINE</span>
      </div>
    </>
  );
}

export default App;