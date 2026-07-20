import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { Eye, BarChart3, ShieldCheck, Headphones } from 'lucide-react';

const WORKFLOW_DATA = [
  {
    step: "01",
    title: "Understanding Your Requirements",
    description: "Deep discovery sessions to understand your business goals, accounting needs, and compliance requirements.",
    icon: Eye,
    glowColor: "rgba(212, 175, 55, 0.2)"
  },
  {
    step: "02",
    title: "Structured Financial Review",
    description: "Comprehensive assessment of your current financial systems, processes, and regulatory status.",
    icon: BarChart3,
    glowColor: "rgba(79, 172, 254, 0.2)"
  },
  {
    step: "03",
    title: "Compliance & Execution",
    description: "Implementation of ACRA-compliant accounting, audit, tax, or courier solutions with precision and care.",
    icon: ShieldCheck,
    glowColor: "rgba(212, 175, 55, 0.25)"
  },
  {
    step: "04",
    title: "Continuous Advisory & Support",
    description: "Ongoing partnership with proactive guidance and responsive support for your Singapore business.",
    icon: Headphones,
    glowColor: "rgba(29, 78, 216, 0.2)"
  }
];

// --- Interactive 3D Step Card Component ---
function WorkflowCard({ node, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const IconComponent = node.icon;

  return (
    <motion.article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50, scale: 0.94, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 p-8 backdrop-blur-xl transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] overflow-hidden transform-gpu hover:-translate-y-2"
    >
      {/* Light Reflection Sweep on Hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Micro Radial Glow Layer */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none blur-xl z-0" 
        style={{ background: `radial-gradient(circle at 10% 10%, ${node.glowColor}, transparent 60%)` }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <div className="w-full flex justify-between items-center mb-6">
          {/* Icon Node Badge */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] shadow-sm">
            <IconComponent className="w-5 h-5 text-white group-hover:text-[#FFD700] transition-colors duration-300" aria-hidden="true" />
          </div>
          
          {/* Step Metric Notation */}
          <span className="font-mono text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/30 to-white/5 select-none group-hover:from-[#FFD700] group-hover:to-[#AA7C11] transition-all duration-500">
            {node.step}
          </span>
        </div>

        {/* Content Block */}
        <div>
          <h3 className="font-sans text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
            {node.title}
          </h3>
          <p className="font-sans text-sm text-slate-300/80 leading-relaxed font-medium">
            {node.description}
          </p>
        </div>
      </div>

      {/* Vertical Interactive Accent Bar */}
      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#FFD700] via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.article>
  );
}

// --- Main How We Work Section ---
export default function HowWeWorkSection() {
  const sectionRef = useRef(null);

  // Parallax Depth Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const labelText = "EXECUTION ARCHITECTURE";

  return (
    <section 
      ref={sectionRef}
      id="how-we-work" 
      className="relative bg-transparent text-white py-28 sm:py-36 px-6 overflow-hidden select-none"
      aria-labelledby="workflow-heading"
    >
      {/* Soft Vignette Overlay for Contrast (Retains 3D Background Visibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Header Structure */}
        <motion.div style={{ y: headerY }} className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Animated Execution Label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.03 },
              },
            }}
            className="flex items-center justify-center gap-1 mb-4"
          >
            {labelText.split("").map((char, index) => (
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

          <h2 
            id="workflow-heading" 
            className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white mb-6"
          >
            How We{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Work
              <motion.span
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
              />
            </span>
          </h2>

          {/* Animated Gold Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6 shadow-[0_0_10px_#D4AF37]"
          />

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal"
          >
            Our structured engagement model ensures seamless collaboration and exceptional compliance results.
          </motion.p>
        </motion.div>

        {/* Workflow Grid Layout */}
        <motion.div 
          style={{ y: cardsY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Animated Desktop Interconnecting Gold Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#D4AF37]/10 via-[#FFD700]/60 to-[#D4AF37]/10 z-0 origin-left shadow-[0_0_8px_rgba(212,175,55,0.4)]" 
          />

          {WORKFLOW_DATA.map((node, index) => (
            <WorkflowCard key={index} node={node} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}