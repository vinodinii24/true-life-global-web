import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon, Shield, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const theme = "dark";
  const toggleTheme = () => {};
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const navigationLinks = [
  { label: "Home", path: "#" },
  { label: "About Us", path: "#about" },
  { label: "Services", path: "#services" },
  { label: "How We Work", path: "#how-we-work" },
  { label: "Director", path: "#director" },
  { label: "Why Us", path: "#why-us" },
  { label: "Careers", path: "#careers" },
  { label: "Insights", path: "#insights" },
];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
? 'bg-white/95 backdrop-blur-xl border-b border-[#D4AF37]/30 py-3 shadow-lg'
: 'bg-white py-5 border-b border-[#D4AF37]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Company Identity Node */}
        <a href="#" className="flex items-center space-x-3 group relative z-50">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D3557]/10 to-[#D4AF37]/20 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(0,242,254,0.1)] group-hover:border-[#00f2fe]/60 transition-all duration-300">
            <Shield className="w-5 h-5 text-[#1D3557] group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-xl bg-[#00f2fe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-extrabold tracking-tight text-[#1D3557] leading-none">
              TRUE LIFE GLOBAL<span className="text-[#1D3557]">.</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase mt-1">
              Pte. Ltd. // Architecture Matrix
            </span>
          </div>
        </a>

        {/* Desktop Interface Navigation Matrix */}
        <div className="hidden md:flex items-center space-x-1 font-sans text-[13px] font-semibold tracking-wide text-[#1D3557]">
          {navigationLinks.map((link, idx) => (
            <div
              key={idx}
              className="relative px-3 py-2 group"
              onMouseEnter={() => link.children && setActiveDropdown(idx)}
              onMouseLeave={() => link.children && setActiveDropdown(null)}
            >
              <a
                href={link.path}
                className="flex items-center gap-1.5 hover:text-[#1D3557] transition-colors duration-300 py-1"
              >
                <span>{link.label}</span>
                {link.children && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </a>

              {/* High-Fidelity Micro Indicator Accent */}
              <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#1D3557] to-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Sub-Level Infrastructure Dropdown Grid */}
              {link.children && activeDropdown === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: 'power3.out' }}
                  className="absolute top-full left-0 min-w-[240px] bg-[#0b1329]/95 border border-white/10 backdrop-blur-xl p-3 rounded-2xl mt-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex flex-col space-y-1">
                    {link.children.map((subLink, subIdx) => (
                      <a
                        key={subIdx}
                        href={subLink.path}
                        className="px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-text
                        
                      -primary-primary-primary hover:bg-white transition-all duration-200 block"
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Global Operational Action Core */}
        <div className="flex items-center space-x-5">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-border bg-white text-gray-500 hover:text-[#1D3557] hover:border-white/10 hover:bg-[#1D3557]/10 transition-all duration-300"
            aria-label="Toggle structural theme state"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1D3557] to-[#D4AF37] text-[#030712] font-sans text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#00f2fe]/10 hover:shadow-[#00f2fe]/20 transition-all duration-300 hover:scale-[1.03]">
            <span className="relative z-10 flex items-center gap-1.5">
              Get a Free Quote <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" />
          </button>
        </div>

        {/* Mobile Control Anchor */}
        <div className="xl:hidden flex items-center space-x-4 z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white border border-border text-gray-500"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#1D3557] bg-white border border-border rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full Screen Tactical Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-white z-40 flex flex-col justify-between px-8 pt-32 pb-12 font-sans overflow-y-auto"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,242,254,0.05),transparent_60%)] pointer-events-none" />

            <div className="flex flex-col space-y-5">
              {navigationLinks.map((link, idx) => (
                <div key={idx} className="border-b border-border pb-3">
                  <div className="flex flex-col">
                    <a
                      href={link.path}
                      onClick={() => !link.children && setIsOpen(false)}
                      className="font-display text-2xl font-bold text-[#1D3557] hover:text-[#1D3557] transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                    </a>
                    {link.children && (
                      <div className="flex flex-col space-y-2 mt-3 pl-4 border-l border-[#00f2fe]/20">
                        {link.children.map((subLink, subIdx) => (
                          <a
                            key={subIdx}
                            href={subLink.path}
                            onClick={() => setIsOpen(false)}
                            className="text-base text-gray-500 hover:text-[#1D3557] transition-colors"
                          >
                            {subLink.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4 mt-8">
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1D3557] to-[#D4AF37] text-[#030712] font-bold text-center flex items-center justify-center gap-2">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-gray-500 font-mono tracking-widest uppercase">
                SECURE_GATEWAY // EXECUTION STATE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}