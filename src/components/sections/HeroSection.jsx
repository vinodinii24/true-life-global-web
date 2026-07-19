import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Shield, ArrowRight } from 'lucide-react';

// Vite Image Imports
import singapore1 from "../../assets/images/singapore img1.jpg";
import singapore2 from "../../assets/images/singapore img2.jpg";
import singapore3 from "../../assets/images/singapore img3.jpg";

function Counter({ target, suffix }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toLocaleString() + suffix;
  });
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, parseFloat(target), {
      duration: 2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [count, target]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function HeroSection({ containerRef }) {
  const images = [singapore1, singapore2, singapore3];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const statItems = [
    { target: "4", suffix: "", label: "Core Services" },
    { target: "100", suffix: "K", label: "Paid-Up Capital SGD" },
    { target: "1", suffix: "", label: "ACRA Registered" },
    { target: "100", suffix: "%", label: "Compliance Focus" }
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const writingVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 overflow-hidden select-none bg-[#0f172a]"
    >
      {/* Cinematic Overlapping Slider Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{ 
              backgroundImage: `url(${images[currentIdx]})`
            }}
          />
        </AnimatePresence>
      </div>

      {/* High-Fidelity Multi-gradient Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-[#0f172a]/40 z-10 pointer-events-none" />

      {/* Background Interactive Ambient Lighting Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1D4ED8]/10 rounded-full blur-[120px] pointer-events-none z-10 animate-pulse" />

      {/* Main Hero Content Frame */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full mx-auto px-6 relative z-20 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-9 flex flex-col justify-center items-start text-left">
          
          {/* Small Premium Corporate Badge */}
          <motion.div 
            variants={writingVariants}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-xl w-fit mb-6 shadow-xl relative z-10"
          >
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-sans text-xs font-bold tracking-wider text-slate-200 uppercase">
              ACRA Registered Singapore Company
            </span>
          </motion.div>

          {/* Heading Component Stack */}
          <motion.h1 
            variants={writingVariants} 
            className="tracking-tight leading-none mb-6 relative z-10 font-sans"
          >
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              True Life Global
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-clip-text text-transparent py-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Pte. Ltd.
            </span>
          </motion.h1>

          {/* Subheading Identity */}
          <motion.h2 
            variants={writingVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6 tracking-wide relative z-10 font-sans"
          >
            Clarity Today. Growth Tomorrow.
          </motion.h2>

          {/* Corporate Paragraph Matrix */}
          <motion.p 
            variants={writingVariants}
            className="font-sans text-base sm:text-lg text-slate-200/90 max-w-2xl leading-relaxed mb-10 font-medium relative z-10"
          >
            True Life Global Pte. Ltd. is an ACRA-registered Singapore firm offering professional accounting, auditing, tax consultancy, and comprehensive corporate support services designed for global enterprises.
          </motion.p>
          
          {/* Action Interactive Triggers */}
          <motion.div 
            variants={writingVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-10 w-full sm:w-auto"
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0f172a] font-sans text-sm font-bold shadow-lg shadow-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            
            <motion.a 
              href="#services"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(25, 255, 255, 0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-white font-sans text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group hover:border-white/20"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

        </div>
      </motion.div>

      {/* Metrics Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full mx-auto px-6 relative z-20 mt-auto pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
      >
        {statItems.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(212, 175, 55, 0.3)" }}
            className="stat-item p-5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="stat-number text-white text-3xl sm:text-4xl font-black tracking-tight">
              <Counter target={item.target} suffix={item.suffix} />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-2 font-sans tracking-wider uppercase">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}