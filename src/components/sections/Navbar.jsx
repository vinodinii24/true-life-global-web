import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight, Shield, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  
  const navRef = useRef(null);

  // 🎯 FIXED: Updated paths to match the exact structural HTML IDs used in sections
  const navigationLinks = [
    { label: "Home", path: "#" },
    { label: "About Us", path: "#about" },
    { label: "Services", path: "#services" },
    { label: "How We Work", path: "#how-we-work" },
    { label: "Director", path: "#leadership" },    // Matches id="leadership" in Leadership.jsx
    { label: "Why Us", path: "#why-choose-us" },  // Matches id="why-choose-us" in WhyChooseUs.jsx
    { label: "Careers", path: "#careers" },
    { label: "Insights", path: "#insights" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      // Calculate global scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || 'home');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Track targets based on navigation items
    navigationLinks.forEach((link) => {
      if (link.path.startsWith('#') && link.path.length > 1) {
        const el = document.getElementById(link.path.replace('#', ''));
        if (el) observer.observe(el);
      } else if (link.path === '#') {
        const el = document.querySelector('section') || document.getElementById('hero');
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isCurrentActive = (path) => {
    if (path === '#' && (activeSection === 'home' || activeSection === 'hero')) return true;
    return activeSection === path.replace('#', '');
  };

  // Framer Motion Animation Variants for Mobile Dropdown
  const mobileContainerVariants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
      opacity: 1,
      backdropFilter: "blur(24px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
        staggerChildren: 0.04,
        staggerDirection: -1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 select-none will-change-transform ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-slate-200/40 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.03)]'
          : 'bg-white/20 backdrop-blur-md py-5 border-b border-slate-200/10'
      }`}
    >
      {/* Dynamic Scroll Progress Bar Line indicator */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#1D3557] via-[#1D4ED8] to-[#D4AF37] transition-all duration-100 ease-out will-change-transform"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Company Identity Node */}
        <a href="#" className="flex items-center space-x-3 group relative z-50">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D3557]/10 to-[#D4AF37]/20 border border-[#D4AF37]/30 shadow-sm group-hover:border-[#1D4ED8]/40 transition-all duration-300">
            <Shield className="w-5 h-5 text-[#1D3557] group-hover:scale-105 group-hover:text-[#1D4ED8] transition-all duration-300" />
            <div className="absolute inset-0 rounded-xl bg-[#1D4ED8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-extrabold tracking-tight text-[#1D3557] leading-none transition-colors group-hover:text-[#1D4ED8] duration-300">
              TRUE LIFE GLOBAL
            </span>
            <span className="font-mono text-[9px] tracking-widest text-slate-400 uppercase mt-1">
              Pte. Ltd. // Business Ecosystem
            </span>
          </div>
        </a>

        {/* Desktop Interface Navigation Matrix */}
        <div className="hidden md:flex items-center space-x-1 font-sans text-[13px] font-bold tracking-wide">
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
                  className={`flex items-center gap-1.5 transition-colors duration-300 py-1 relative z-10 transition-transform ${
                    active ? 'text-[#1D4ED8]' : 'text-[#1D3557]/80 hover:text-[#1D3557]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.children && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </motion.a>

                {/* Smooth Sliding Layout Indicator */}
                {active && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#D4AF37]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Sub-Level Infrastructure Dropdown Grid */}
                {link.children && activeDropdown === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 min-w-[240px] bg-white/95 border border-slate-200/80 backdrop-blur-md p-3 rounded-2xl mt-2 shadow-xl"
                  >
                    <div className="flex flex-col space-y-1">
                      {link.children.map((subLink, subIdx) => (
                        <a
                          key={subIdx}
                          href={subLink.path}
                          className="px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[#1D3557] hover:bg-slate-50 transition-all duration-200 block"
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
        <div className="flex items-center space-x-5">
          <motion.a
            whileHover={{ scale: 1.02, y: -0.5 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#1D3557] text-white font-sans text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg shadow-[#1D3557]/10 transition-all duration-300 inline-flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1D4ED8] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0" />
          </motion.a>
          
          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1D3557] bg-white border border-slate-200/80 rounded-xl transition-colors hover:bg-slate-50 shadow-sm relative z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Full Screen Tactical Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-white/95 z-40 flex flex-col justify-between px-8 pt-32 pb-12 font-sans overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link, idx) => {
                const active = isCurrentActive(link.path);
                return (
                  <motion.div 
                    variants={mobileItemVariants}
                    key={idx} 
                    className="border-b border-slate-100 pb-3"
                  >
                    <div className="flex flex-col">
                      <a
                        document-target="mobile-anchor"
                        href={link.path}
                        onClick={() => !link.children && setIsOpen(false)}
                        className={`font-display text-2xl font-bold transition-colors flex items-center justify-between transition-transform duration-200 ${
                          active ? 'text-[#1D4ED8]' : 'text-[#1D3557]'
                        }`}
                      >
                        <span>{link.label}</span>
                      </a>
                      {link.children && (
                        <div className="flex flex-col space-y-2 mt-3 pl-4 border-l border-slate-200">
                          {link.children.map((subLink, subIdx) => (
                            <a
                              key={subIdx}
                              href={subLink.path}
                              onClick={() => setIsOpen(false)}
                              className="text-base text-slate-500 hover:text-[#1D3557] transition-colors"
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

            <motion.div variants={mobileItemVariants} className="flex flex-col space-y-4 mt-8">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1D3557] via-[#1D4ED8] to-[#D4AF37] text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="text-center text-xs text-slate-400 font-mono tracking-widest uppercase">
                SECURE_GATEWAY // EXECUTION STATE
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}