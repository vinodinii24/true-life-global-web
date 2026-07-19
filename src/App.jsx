import React, { useEffect, useState } from "react";
import BackgroundAnimation from "./components/BackgroundAnimation";
import WaveDivider from "./components/WaveDivider";

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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Premium Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-slate-100">
        <div
          className="h-full bg-gradient-to-r from-[#1D3557] via-[#1D4ED8] to-[#D4AF37] transition-all duration-75 ease-out will-change-transform"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Global Background Animation */}
      <BackgroundAnimation />

      {/* Main Website Content */}
      <div className="relative z-10 bg-transparent antialiased selection:bg-[#1D4ED8]/10 selection:text-[#1D3557]">
        <Navbar />

        <HeroSection />

        <WaveDivider />

        <AboutSection />

        <Services />

        <WaveDivider />

        <Howwework />

        <Leadership />

        <WaveDivider />

        <WhyChooseUs />

        {/* Keeping the first "What Our Clients Say" section component */}
        <VisionMission />

        <WaveDivider />

        <Insights />

        <WaveDivider />

        <Careers />

        <FAQ />

        <WaveDivider />

        <Contact />
      </div>
    </>
  );
}

export default App;