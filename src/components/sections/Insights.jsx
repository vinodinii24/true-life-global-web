import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { ShieldCheck, BadgeDollarSign, CalendarCheck, Users } from 'lucide-react';

const insightsData = [
  {
    title: "Compliance-First",
    description: "Every process is designed with regulatory requirements at the core, ensuring your business meets statutory obligations with confidence and precision.",
    icon: ShieldCheck,
    glowColor: "rgba(212, 175, 55, 0.2)"
  },
  {
    title: "Transparent Pricing",
    description: "Clear cost structures with no hidden fees or unexpected charges, providing complete financial clarity and predictable engagement costs.",
    icon: BadgeDollarSign,
    glowColor: "rgba(79, 172, 254, 0.2)"
  },
  {
    title: "Monthly Discipline",
    description: "Consistent monthly close processes for reliable financial insights, timely reporting cycles, and proactive financial management.",
    icon: CalendarCheck,
    glowColor: "rgba(212, 175, 55, 0.25)"
  },
  {
    title: "Personalized Service",
    description: "Tailored solutions that adapt to your unique business requirements, growth trajectory, and evolving compliance needs.",
    icon: Users,
    glowColor: "rgba(29, 78, 216, 0.2)"
  }
];

// --- Interactive 3D Insights Card ---
function InsightCard({ insight, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

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

  const IconComponent = insight.icon;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 p-8 rounded-3xl backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] flex flex-col justify-between transition-all duration-500 transform-gpu overflow-hidden hover:-translate-y-2"
    >
      {/* Light Reflection Sweep Overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Dynamic Radial Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none blur-xl z-0" 
        style={{ background: `radial-gradient(circle at 10% 10%, ${insight.glowColor}, transparent 60%)` }}
      />

      {/* Dynamic Gold Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        {/* Badge Icon Infrastructure */}
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 transition-all duration-500 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          <IconComponent className="w-5 h-5 text-white group-hover:text-[#FFD700] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        </div>

        <h3 className="font-sans text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
          {insight.title}
        </h3>
        
        <p className="font-sans text-sm text-slate-300/80 leading-relaxed font-normal">
          {insight.description}
        </p>
      </div>

      {/* Sub-Level Technical Info Footer */}
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-slate-400 group-hover:text-[#D4AF37] transition-colors duration-300">
          Framework // 0{index + 1}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FFD700] group-hover:shadow-[0_0_8px_#FFD700] transition-all duration-300" />
      </div>
    </motion.article>
  );
}

// --- Main Insights Section Component ---
export default function Insights() {
  const sectionRef = useRef(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const contentY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  const labelText = "STRATEGIC METHODOLOGY // CORE PARADIGM";

  return (
    <section 
      ref={sectionRef}
      id="insights" 
      className="relative bg-transparent text-white py-28 sm:py-36 px-6 overflow-hidden select-none"
      aria-labelledby="insights-heading"
    >
      {/* Ambient Depth Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header Framework */}
        <motion.div style={{ y: headerY }} className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Kinetic Letter-by-Letter Tag */}
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
            className="flex items-center justify-center gap-0.5 mb-4 flex-wrap"
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
            id="insights-heading" 
            className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white mb-6"
          >
            Key{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Insights
              <motion.span
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
              />
            </span>
          </h2>

          {/* Gold Accent Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6 shadow-[0_0_10px_#D4AF37]"
          />

          <p className="font-sans text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
            What sets us apart in the accounting and advisory landscape.
          </p>
        </motion.div>

        {/* Dynamic Card Architecture Grid */}
        <motion.div 
          style={{ y: contentY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
        >
          {insightsData.map((insight, index) => (
            <InsightCard key={index} insight={insight} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}