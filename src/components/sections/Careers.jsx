import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { GraduationCap, BriefcaseBusiness, UsersRound } from 'lucide-react';

const careerBenefits = [
  {
    title: "Growth & Learning",
    description: "Structured support, guidance, and skill development in Singapore accounting.",
    icon: GraduationCap,
    glowColor: "rgba(212, 175, 55, 0.2)"
  },
  {
    title: "Real Exposure",
    description: "Hands-on work across ACRA-compliant accounting and courier operations.",
    icon: BriefcaseBusiness,
    glowColor: "rgba(79, 172, 254, 0.2)"
  },
  {
    title: "Mentorship",
    description: "Learn alongside experienced Singapore business professionals.",
    icon: UsersRound,
    glowColor: "rgba(212, 175, 55, 0.25)"
  }
];

// --- Interactive 3D Benefit Card ---
function BenefitCard({ benefit, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const IconComponent = benefit.icon;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] flex flex-col sm:flex-row items-start gap-6 transition-all duration-500 transform-gpu overflow-hidden hover:-translate-y-1"
    >
      {/* Dynamic Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none blur-xl z-0" 
        style={{ background: `radial-gradient(circle at 10% 10%, ${benefit.glowColor}, transparent 60%)` }}
      />

      {/* Light Reflection Sweep */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Dynamic Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Badge Icon Infrastructure */}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 transition-all duration-500 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
        <IconComponent className="w-5 h-5 text-white group-hover:text-[#FFD700] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
      </div>
      
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-sans text-lg font-bold text-white tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
            {benefit.title}
          </h3>
          <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-slate-400 group-hover:text-[#D4AF37] transition-colors duration-300">
            Pillar 0{index + 1}
          </span>
        </div>
        <p className="font-sans text-sm text-slate-300/80 leading-relaxed font-normal">
          {benefit.description}
        </p>
      </div>

      {/* Vertical Side Accent Pill */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 w-1 h-8 rounded-full bg-white/10 group-hover:bg-[#FFD700] group-hover:shadow-[0_0_8px_#FFD700] transition-all duration-300 hidden sm:block" />
    </motion.article>
  );
}

// --- Main Careers Section Component ---
export default function Careers() {
  const sectionRef = useRef(null);

  // Scroll Parallax Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftColumnY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const labelText = "HUMAN CAPITAL // ECOSYSTEM EXPANSION";

  return (
    <section 
      ref={sectionRef}
      id="careers" 
      className="relative bg-transparent text-white py-28 sm:py-36 px-6 overflow-hidden select-none"
      aria-labelledby="careers-heading"
    >
      {/* Ambient Depth Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Content */}
          <motion.div style={{ y: leftColumnY }} className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Kinetic Animated Category Label */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.02 },
                  },
                }}
                className="flex items-center gap-0.5 mb-4 flex-wrap"
              >
                {labelText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    className="font-sans text-[11px] sm:text-xs font-bold tracking-[4px] text-[#D4AF37] uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>

              <h2 
                id="careers-heading" 
                className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white mb-6"
              >
                Join{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  True Life Global
                  <motion.span
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
                  />
                </span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-slate-300/90 font-normal mb-8 leading-relaxed">
                A place to grow, learn, and build a meaningful career backed by real-world Singapore business exposure.
              </p>
              
              {/* Gold Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="h-[2px] w-20 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8 origin-left shadow-[0_0_10px_#D4AF37]"
              />
              
              <div className="space-y-4 text-slate-300/80 font-sans text-sm sm:text-base leading-relaxed font-normal">
                <p className="text-white font-bold text-lg tracking-tight">
                  More than a job, it's an opportunity.
                </p>
                <p>
                  Becoming a part of True Life Global Pte. Ltd. is not merely about securing employment; it is about building your career in a Singapore-registered, ACRA-compliant professional services environment.
                </p>
                <p>
                  Whether you are an experienced professional or a recent graduate eager to launch your career, True Life Global presents outstanding prospects for growth in accounting, tax, and business services.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Cards */}
          <motion.div style={{ y: rightColumnY }} className="lg:col-span-7">
            <div className="space-y-6">
              {careerBenefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}