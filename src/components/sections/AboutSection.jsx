import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { Building2, Compass, Target } from 'lucide-react';

// --- Floating 3D Interactive Glassmorphic Card ---
function AboutCard({ card, index }) {
  const cardRef = useRef(null);

  // Mouse tilt motion hooks
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 180, damping: 18 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = card.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      // Staggered Entrance: Pop up + Spring + Blur -> Clear + Scale
      initial={{ opacity: 0, y: 60, scale: 0.92, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.2, // Staggered delay (0s, 0.2s, 0.4s)
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 p-8 backdrop-blur-xl transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] flex flex-col transform-gpu hover:-translate-y-2"
    >
      {/* Dynamic Floating Animation Loop */}
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        className="h-full flex flex-col justify-between relative z-10"
      >
        {/* Reflection Movement on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div style={{ transform: "translateZ(30px)" }}>
          {/* Icon Badge with Subtle Glow & Float */}
          <div className="mb-6 inline-flex">
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-500"
            >
              <Icon className="w-7 h-7 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 text-[#D4AF37]" />
            </motion.div>
          </div>

          {/* Card Title */}
          <h3 className="font-sans text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
            {card.title}
          </h3>

          {/* Card Description */}
          <p className="font-sans text-sm text-slate-300/80 leading-relaxed font-normal">
            {card.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Main About Section Component ---
export default function AboutSection() {
  const sectionRef = useRef(null);

  // Parallax Scroll Tracking for Z-Depth Effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const descY = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const aboutLabelText = "ABOUT US";
  const titlePart1 = "True Life Global";
  const descriptionText = "True Life Global Pte. Ltd. is a premier Singapore-based corporate solutions firm providing end-to-end accounting, audit, tax, and corporate secretarial services. We empower businesses to navigate statutory compliance, optimize financial operations, and scale with confidence in Singapore and across Asia.";

  const cardsData = [
    {
      title: "Our Company",
      icon: Building2,
      description: "A trusted corporate service provider in Singapore committed to precision, statutory governance, and strategic enterprise advisory.",
    },
    {
      title: "Our Vision",
      icon: Compass,
      description: "To be Asia's most dependable partner for corporate growth, setting gold standards in statutory compliance and financial innovation.",
    },
    {
      title: "Our Mission",
      icon: Target,
      description: "To deliver high-precision corporate secretarial, tax, and audit solutions that simplify complex regulations for modern businesses.",
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="relative py-28 sm:py-36 px-6 bg-transparent text-white overflow-hidden select-none"
    >
      {/* Soft Gradient Mask for Scannability (Doesn't hide 3D background) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header Container */}
        <div className="max-w-3xl mb-20">
          
          {/* --- ABOUT US LABEL (LETTER-BY-LETTER REVEAL) --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.04 },
              },
            }}
            className="flex items-center gap-1 mb-4"
          >
            {aboutLabelText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                className="font-sans text-xs font-bold tracking-[6px] text-[#D4AF37] uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* --- HEADING WITH LIVING TYPOGRAPHY & GOLD SHINE --- */}
          <motion.div style={{ y: headingY }} className="relative mb-6">
            
            {/* Animated Gold Line Reveal */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="h-[2px] w-24 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-transparent origin-left mb-4 shadow-[0_0_10px_#D4AF37]"
            />

            <h2 className="font-sans text-4xl sm:text-6xl font-black text-white tracking-tight flex flex-wrap items-center gap-x-4 gap-y-2">
              
              {/* Letter-by-Letter Reveal for "True Life Global" */}
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.2 } },
                }}
                className="inline-flex"
              >
                {titlePart1.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 },
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>

              {/* Gold Metallic Text with Periodic Sweeping Shine */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              >
                Pte. Ltd.
                
                {/* Gold Shine Sweep */}
                <motion.span
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
                />
              </motion.span>
            </h2>
          </motion.div>

          {/* --- DESCRIPTION (STAGGERED WORD-BY-WORD REVEAL) --- */}
          <motion.p
            style={{ y: descY }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.012, delayChildren: 0.9 } },
            }}
            className="font-sans text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal flex flex-wrap"
          >
            {descriptionText.split(" ").map((word, index) => {
              const isGoldWord = ["Singapore-based", "accounting,", "audit,", "tax,", "compliance,"].includes(word);
              return (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`mr-[0.28em] inline-block ${isGoldWord ? "text-[#FFD700] font-semibold drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" : ""}`}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.p>
        </div>

        {/* --- 3D FLOATING GLASS CARDS GRID WITH PARALLAX --- */}
        <motion.div style={{ y: cardsY }} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cardsData.map((card, index) => (
            <AboutCard key={index} card={card} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}