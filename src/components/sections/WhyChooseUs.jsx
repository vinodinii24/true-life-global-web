import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { Building2, Layers, ShieldCheck, Banknote, Zap, Compass } from 'lucide-react';

const coreAdvantages = [
  {
    title: "Officially Registered in Singapore",
    content: "True Life Global Pte. Ltd. is a legitimate ACRA-registered private limited company (UEN: 202626385E), incorporated on 11 June 2026. You are working with a real, accountable business you can trust.",
    icon: Building2,
    glowColor: "rgba(212, 175, 55, 0.2)"
  },
  {
    title: "Two Essential Services Under One Roof",
    content: "We provide Accounting, Auditing & Tax Consultancy together with Courier & Delivery Services, giving your business one dependable partner for both financial and logistics support.",
    icon: Layers,
    glowColor: "rgba(79, 172, 254, 0.2)"
  },
  {
    title: "Fully Compliant & Accountable",
    content: "As a Singapore-registered company, we operate in line with ACRA and IRAS requirements, ensuring your finances and deliveries are managed with compliance, care, and professionalism.",
    icon: ShieldCheck,
    glowColor: "rgba(212, 175, 55, 0.25)"
  },
  {
    title: "Transparent & Affordable Pricing",
    content: "No hidden charges and no unexpected costs. We offer clear, competitive pricing tailored for SMEs, startups, and growing businesses in Singapore.",
    icon: Banknote,
    glowColor: "rgba(29, 78, 216, 0.2)"
  },
  {
    title: "Fast & Reliable Operations",
    content: "Whether it's handling tax submissions or delivering important documents, we work around your deadlines with speed, reliability, and attention to detail.",
    icon: Zap,
    glowColor: "rgba(255, 215, 0, 0.25)"
  },
  {
    title: "Built for Singapore Businesses",
    content: "We understand the local business environment, from GST and ACRA compliance to last-mile delivery across Singapore. We provide practical solutions that match real business needs.",
    icon: Compass,
    glowColor: "rgba(79, 172, 254, 0.2)"
  }
];

// --- Interactive 3D Advantage Card ---
function AdvantageCard({ advantage, index }) {
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

  const Icon = advantage.icon;

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
      className="group relative bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 p-8 rounded-3xl backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 transform-gpu overflow-hidden hover:-translate-y-2 flex flex-col justify-between"
    >
      {/* Light Reflection Sweep */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Dynamic Radial Glow Layer */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none blur-xl z-0" 
        style={{ background: `radial-gradient(circle at 10% 10%, ${advantage.glowColor}, transparent 60%)` }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        {/* Dynamic Accent Top Line */}
        <div className="absolute -top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Badge Icon System */}
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 transition-all duration-500 group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          <Icon className="w-5 h-5 text-white group-hover:text-[#FFD700] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        </div>

        {/* Text Block Content */}
        <h3 className="font-sans text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
          {advantage.title}
        </h3>
        
        <p className="font-sans text-sm text-slate-300/80 leading-relaxed font-medium">
          {advantage.content}
        </p>
      </div>

      {/* Bottom Gold Highlight Dot */}
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 flex justify-end mt-4">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FFD700] group-hover:shadow-[0_0_8px_#FFD700] transition-all duration-300" />
      </div>
    </motion.article>
  );
}

// --- Main Why Choose Us Section ---
export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  // Parallax Depth Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  const labelText = "STRATEGIC VALUE PROPOSITION // VALUE ARCHITECTURE";

  return (
    <section 
      ref={sectionRef}
      id="why-choose-us" 
      className="relative bg-transparent text-white py-28 sm:py-36 px-6 overflow-hidden select-none"
      aria-labelledby="why-choose-heading"
    >
      {/* Ambient Vignette Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header Framework */}
        <motion.div style={{ y: headerY }} className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Animated Kinetic Label */}
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
            id="why-choose-heading" 
            className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white mb-6"
          >
            Why Choose{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              True Life Global?
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
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6 shadow-[0_0_10px_#D4AF37]"
          />

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal"
          >
            A registered Singapore partner delivering trusted financial compliance expertise alongside agile logistics operations.
          </motion.p>
        </motion.div>

        {/* Advantage Infrastructure Grid */}
        <motion.div 
          style={{ y: cardsY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {coreAdvantages.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}