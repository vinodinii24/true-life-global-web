import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const statsContainerRef = useRef(null);

  useEffect(() => {
    const ctxTimeline = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Clean setup fading in the overarching content structures gracefully
      tl.fromTo(badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

      if (headlineRef.current) {
        tl.fromTo(headlineRef.current.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, stagger: 0.15 },
          '-=0.6'
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.7'
        );
      }

      if (descRef.current) {
        tl.fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(ctaRef.current.children,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1 },
          '-=0.5'
        );
      }

      // Smooth structural stagger for the glass metrics metrics items
      tl.fromTo('.stat-item',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.9, 
          stagger: 0.12,
          onComplete: () => {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
              const targetStr = counter.getAttribute('data-target');
              const target = parseInt(targetStr, 10);
              const suffix = counter.getAttribute('data-suffix') || '';
              const obj = { val: 0 };
              
              gsap.to(obj, {
                val: target,
                duration: 1.8,
                ease: 'power3.out',
                onUpdate: () => {
                  counter.innerText = Math.floor(obj.val) + suffix;
                }
              });
            });
          }
        },
        '-=0.6'
      );
    }, containerRef);

    return () => ctxTimeline.revert();
  }, []);

  const statItems = [
    { value: "4", target: "4", suffix: "", label: "Core Services" },
    { value: "100K", target: "100", suffix: "K", label: "Paid-Up Capital SGD" },
    { value: "1", target: "1", suffix: "", label: "ACRA Registered" },
    { value: "100%", target: "100", suffix: "%", label: "Compliance Focus" }
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-transparent flex flex-col justify-between pt-36 pb-16 z-10 select-none"
    >
      {/* Structural layout wrapper to house corporate branding typography */}
      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-9 flex flex-col justify-center text-left">
          
          {/* Small Premium Corporate Badge */}
          <div 
            ref={badgeRef}
            className="inline-flex items-center space-x-2 bg-[#1D3557]/5 border border-[#1D3557]/10 backdrop-blur-md px-4 py-2 rounded-full w-fit mb-6 shadow-sm"
          >
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-sans text-xs font-semibold tracking-wide text-[#1D3557]">
              ACRA Registered Singapore Company
            </span>
          </div>

          {/* Heading Component Stack */}
          <h1 ref={headlineRef} className="tracking-tight leading-none mb-4">
            <span className="block text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#1D3557]">
              True Life Global
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#1D4ED8] via-[#1D3557] to-[#D4AF37] bg-clip-text text-transparent py-1">
              Pte. Ltd.
            </span>
          </h1>

          {/* Subheading Identity */}
          <h2 
            ref={subtitleRef}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6 tracking-wide"
          >
            Clarity Today. Growth Tomorrow.
          </h2>

          {/* Corporate Paragraph Matrix */}
          <p 
            ref={descRef} 
            className="font-sans text-base sm:text-lg text-[#1D3557]/80 max-w-2xl leading-relaxed mb-10 font-medium"
          >
            True Life Global Pvt. Ltd. is an ACRA-registered Singapore firm offering professional accounting, auditing, tax consultancy, and courier services.
          </p>
          
          {/* Action Interactive Triggers */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <motion.a
  href="#contact"
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="animated-gradient group relative overflow-hidden px-8 py-4 rounded-xl text-white ..."
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
          </div>

        </div>
      </div>

      {/* Metrics Layout Grid with Glassmorphic Elements */}
      <div
        ref={statsContainerRef}
        className="max-w-7xl w-full mx-auto px-6 relative z-10 mt-auto pt-8 border-t border-[#1D3557]/10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {statItems.map((item, index) => (
          <div 
            key={index}
            className="stat-item p-5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div 
              className="stat-number text-[#1D3557] text-3xl sm:text-4xl font-extrabold tracking-tight"
              data-target={item.target}
              data-suffix={item.suffix}
            >
              {item.value}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#1D3557]/70 mt-2 font-sans tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}