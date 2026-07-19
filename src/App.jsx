import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  // Cinematic high-performance scroll tracking via Framer Motion
  const { scrollYProgress } = useScroll();
  
  // Creates an ultra-smooth spring effect similar to Apple/Linear site scrollbars
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Presentation variant configuration applied to stage sections smoothly on scroll
  const presentationVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const viewportConfig = { once: true, amount: 0.12 };

  return (
    <>
      {/* Premium Top Scroll Progress Bar - High Performance GPU Bound */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-slate-100/50 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-[#1D3557] via-[#1D4ED8] to-[#D4AF37] origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Global Background Animation */}
      <BackgroundAnimation />

      {/* Main Website Content - Smooth Entrance Presentation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-transparent antialiased selection:bg-[#1D4ED8]/10 selection:text-[#1D3557]"
      >
        <Navbar />

        <HeroSection />

        <WaveDivider />

        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <AboutSection />
        </motion.div>

        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <Services />
        </motion.div>

        <WaveDivider />

        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <Howwework />
        </motion.div>

        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <Leadership />
        </motion.div>

        <WaveDivider />

        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <WhyChooseUs />
        </motion.div>

        {/* Keeping the first "What Our Clients Say" section component */}
        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <VisionMission />
        </motion.div>

        <WaveDivider />

        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <Insights />
        </motion.div>

        <WaveDivider />

        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <Careers />
        </motion.div>

        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <FAQ />
        </motion.div>

        <WaveDivider />

        <motion.div 
          variants={presentationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="will-change-transform"
        >
          <Contact />
        </motion.div>
      </motion.div>
    </>
  );
}

export default App;