import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowUpRight, Shield, ArrowRight } from 'lucide-react';

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
  const statItems = [
    { target: "4", suffix: "", label: "Core Services" },
    { target: "100", suffix: "K", label: "Paid-Up Capital SGD" },
    { target: "1", suffix: "", label: "ACRA Registered" },
    { target: "100", suffix: "%", label: "Compliance Focus" }
  ];

  // Container configuration to stagger the child text-writing sequences
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Writing/Fade-up variant applied across typography elements on mount/refresh
  const writingVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-transparent flex flex-col justify-between pt-36 pb-16 z-10 select-none"
    >
      {/* Structural layout wrapper to house corporate branding typography */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full mx-auto px-6 relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-9 flex flex-col justify-center text-left relative">
          
          {/* Small Premium Corporate Badge */}
          <motion.div 
            variants={writingVariants}
            className="inline-flex items-center space-x-2 bg-[#1D3557]/5 border border-[#1D3557]/10 backdrop-blur-md px-4 py-2 rounded-full w-fit mb-6 shadow-sm relative z-10"
          >
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-sans text-xs font-semibold tracking-wide text-[#1D3557]">
              ACRA Registered Singapore Company
            </span>
          </motion.div>

          {/* Heading Component Stack with Advanced Text Glow Styling */}
          <motion.h1 
            variants={writingVariants} 
            className="tracking-tight leading-none mb-4 relative z-10"
          >
            <span 
              className="block text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#1D3557] drop-shadow-[0_0_25px_rgba(29,53,87,0.2)]"
              style={{ textShadow: "0 0 40px rgba(29, 53, 87, 0.15)" }}
            >
              True Life Global
            </span>
            <span 
              className="block text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#1D4ED8] via-[#1D3557] to-[#D4AF37] bg-clip-text text-transparent py-1 drop-shadow-[0_0_30px_rgba(212,175,85,0.35)]"
              style={{ textShadow: "0 0 35px rgba(212, 175, 55, 0.25)" }}
            >
              Pte. Ltd.
            </span>
          </motion.h1>

          {/* Subheading Identity */}
          <motion.h2 
            variants={writingVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6 tracking-wide relative z-10"
          >
            Clarity Today. Growth Tomorrow.
          </motion.h2>

          {/* Corporate Paragraph Matrix */}
          <motion.p 
            variants={writingVariants}
            className="font-sans text-base sm:text-lg text-[#1D3557]/80 max-w-2xl leading-relaxed mb-10 font-medium relative z-10"
          >
            True Life Global Pte. Ltd. is an ACRA-registered Singapore firm offering professional accounting, auditing, tax consultancy, and corporate support services.
          </motion.p>
          
          {/* Action Interactive Triggers */}
          <motion.div 
            variants={writingVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-10"
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-[#1D3557] to-[#1D4ED8] text-white font-sans text-sm font-bold shadow-lg shadow-[#1D3557]/10 hover:shadow-[#1D4ED8]/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            
            <motion.a 
              href="#services"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(29, 53, 87, 0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-[#1D3557]/5 border border-[#1D3557]/10 backdrop-blur-md text-[#1D3557] font-sans text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

        </div>
      </motion.div>

      {/* Metrics Layout Grid with Glassmorphic Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl w-full mx-auto px-6 relative z-10 mt-auto pt-8 border-t border-[#1D3557]/10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {statItems.map((item, index) => (
          <div 
            key={index}
            className="stat-item p-5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="stat-number text-[#1D3557] text-3xl sm:text-4xl font-extrabold tracking-tight">
              <Counter target={item.target} suffix={item.suffix} />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#1D3557]/70 mt-2 font-sans tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}