import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, Shield, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  const navRef = useRef(null);

  const navigationLinks = [
    { label: "Home", path: "#" },
    { label: "About Us", path: "#about" },
    { label: "Services", path: "#services" },
    { label: "How We Work", path: "#how-we-work" },
    { label: "Director", path: "#leadership" },
    { label: "Why Us", path: "#why-choose-us" },
    { label: "Careers", path: "#careers" },
    { label: "Insights", path: "#insights" },
  ];

  // Scroll listener for sticky glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Safe DOM Section Tracking via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || "home");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const timer = setTimeout(() => {
      navigationLinks.forEach((link) => {
        if (link.path.startsWith("#") && link.path.length > 1) {
          const id = link.path.replace("#", "");
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Safe body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const isCurrentActive = (path) => {
    if (path === "#" && (activeSection === "home" || activeSection === "hero")) return true;
    return activeSection === path.replace("#", "");
  };

  const mobileContainerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.04,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, x: -8, transition: { duration: 0.15 } },
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 select-none ${
        scrolled
          ? "bg-[#050b18]/90 backdrop-blur-xl border-b border-[#D4AF37]/25 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#050b18]/40 backdrop-blur-md py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Company Identity Node */}
        <a href="#" className="flex items-center space-x-3 group relative z-50">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D3557] to-[#0A1128] border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:border-[#FFD700] transition-all duration-300">
            <Shield className="w-5 h-5 text-[#FFD700] group-hover:scale-105 transition-all duration-300" />
            <div className="absolute inset-0 rounded-xl bg-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-extrabold tracking-tight text-white leading-none group-hover:text-[#FFD700] transition-colors duration-300">
              TRUE LIFE GLOBAL
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#D4AF37] uppercase mt-1">
              Pte. Ltd. // Business Ecosystem
            </span>
          </div>
        </a>

        {/* Desktop Interface Navigation Matrix */}
        <div className="hidden lg:flex items-center space-x-1 font-sans text-[13px] font-bold tracking-wide">
          {navigationLinks.map((link, idx) => {
            const active = isCurrentActive(link.path);
            return (
              <div
                key={idx}
                className="relative px-3 py-2"
                onMouseEnter={() => link.children && setActiveDropdown(idx)}
                onMouseLeave={() => link.children && setActiveDropdown(null)}
              >
                <motion.a
                  href={link.path}
                  whileHover={{ y: -1 }}
                  className={`flex items-center gap-1.5 transition-colors duration-300 py-1 relative z-10 ${
                    active ? "text-[#FFD700]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.children && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </motion.a>

                {/* Smooth Sliding Active Indicator */}
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] shadow-[0_0_8px_#FFD700]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Sub-Level Dropdown */}
                {link.children && activeDropdown === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 min-w-[240px] bg-[#0A1128]/95 border border-[#D4AF37]/30 backdrop-blur-xl p-3 rounded-2xl mt-2 shadow-2xl shadow-black/80"
                  >
                    <div className="flex flex-col space-y-1">
                      {link.children.map((subLink, subIdx) => (
                        <a
                          key={subIdx}
                          href={subLink.path}
                          className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-[#FFD700] hover:bg-white/5 transition-all duration-200 block"
                        >
                          {subLink.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Global Operational Action Core */}
        <div className="flex items-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.02, y: -0.5 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#1D3557] border border-[#D4AF37]/50 text-white font-sans text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-300 inline-flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4 text-[#FFD700] group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#1D3557] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0" />
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white bg-[#0A1128] border border-[#D4AF37]/40 rounded-xl transition-colors hover:bg-[#1D3557] shadow-sm relative z-50"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5 text-[#FFD700]" /> : <Menu className="w-5 h-5 text-[#FFD700]" />}
          </motion.button>
        </div>
      </div>

      {/* Full Screen Dark Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-[#050b18]/95 backdrop-blur-2xl z-40 flex flex-col justify-between px-8 pt-28 pb-10 font-sans overflow-y-auto border-b border-[#D4AF37]/20"
          >
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((link, idx) => {
                const active = isCurrentActive(link.path);
                return (
                  <motion.div
                    variants={mobileItemVariants}
                    key={idx}
                    className="border-b border-white/10 pb-3"
                  >
                    <div className="flex flex-col">
                      <a
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`font-display text-xl font-bold transition-colors flex items-center justify-between ${
                          active ? "text-[#FFD700]" : "text-slate-200 hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                      </a>
                      {link.children && (
                        <div className="flex flex-col space-y-2 mt-2 pl-4 border-l border-[#D4AF37]/30">
                          {link.children.map((subLink, subIdx) => (
                            <a
                              key={subIdx}
                              href={subLink.path}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-slate-400 hover:text-[#FFD700] transition-colors"
                            >
                              {subLink.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={mobileItemVariants} className="flex flex-col space-y-4 mt-6">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1D3557] via-[#D4AF37] to-[#FFD700] text-[#050b18] font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="text-center text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase">
                SECURE_GATEWAY // EXECUTION STATE
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}