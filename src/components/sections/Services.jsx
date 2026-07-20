import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { Calculator, FileSearch, Receipt, Briefcase, ArrowRight, ShieldCheck } from 'lucide-react';

const SERVICES_DATA = [
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    subtitle: "Financial Clarity & Compliance",
    description: "End-to-end accounting services compliant with Singapore Financial Reporting Standards (SFRS). We maintain precise ledgers, deliver monthly insights, and optimize reporting structures.",
    features: ["SFRS Compliant Ledger", "Management Reports", "Payroll Management"]
  },
  {
    icon: FileSearch,
    title: "Audit & Assurance",
    subtitle: "Risk Management & Integrity",
    description: "Independent audit solutions designed to reinforce stakeholder confidence, fulfill statutory ACRA obligations, and systematically identify operational risk factors.",
    features: ["Statutory Audits", "Internal Audits", "Risk Mitigation"]
  },
  {
    icon: Receipt,
    title: "Tax Advisory & Filing",
    subtitle: "IRAS Strategic Compliance",
    description: "Comprehensive corporate tax planning, Corporate Income Tax (Form C-S/C) filing, and GST compliance tailored to optimize tax positions under Singapore regulations.",
    features: ["Corporate Income Tax", "GST Filing & Planning", "Cross-Border Tax"]
  },
  {
    icon: Briefcase,
    title: "Corporate Secretarial",
    subtitle: "Governance & ACRA Administration",
    description: "Full-spectrum corporate secretarial administration ensuring full compliance with ACRA regulations, maintaining registers, and handling annual filings.",
    features: ["ACRA Compliance", "Company Incorporation", "Annual Returns"]
  }
];

// --- Interactive 3D Glassmorphic Service Card ---
function ServiceCard({ service, index }) {
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

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50, scale: 0.94, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 p-8 backdrop-blur-xl transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] flex flex-col justify-between transform-gpu hover:-translate-y-2"
    >
      {/* Light Reflection Sweep Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500">
            <Icon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 text-[#D4AF37]" />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Service 0{index + 1}
          </span>
        </div>

        <h3 className="font-sans text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-xs font-semibold text-[#FFD700] tracking-wider uppercase mb-4 drop-shadow-[0_0_6px_rgba(212,175,55,0.3)]">
          {service.subtitle}
        </p>

        <p className="font-sans text-sm text-slate-300/80 leading-relaxed mb-6 font-medium">
          {service.description}
        </p>

        <ul className="space-y-2 mb-8 border-t border-white/10 pt-4">
          {service.features.map((feature, fIdx) => (
            <motion.li
              key={fIdx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + fIdx * 0.08 }}
              className="flex items-center text-xs text-slate-200 font-medium"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] mr-2 shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="pt-4 border-t border-white/10">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300"
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#D4AF37]" />
        </a>
      </div>
    </motion.div>
  );
}

// --- Main Services Section ---
export default function ServicesSection() {
  const sectionRef = useRef(null);

  // Parallax Depth Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const labelText = "WHAT WE DELIVER";

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-28 sm:py-36 px-6 bg-transparent text-white overflow-hidden select-none"
    >
      {/* Soft Vignette Overlay for Contrast (Retains 3D Background Visibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <motion.div style={{ y: headerY }} className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Animated Category Label */}
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
            className="flex items-center justify-center gap-1 mb-3"
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

          {/* Heading with Metallic Gold Sweep */}
          <h2 className="font-sans text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Our Core{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Corporate Services
              <motion.span
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
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
            className="font-sans text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            We deliver high-precision financial, statutory, and corporate management solutions geared for Singapore enterprises and global multi-nationals.
          </motion.p>
        </motion.div>

        {/* 3D Interactive Service Cards Grid */}
        <motion.div style={{ y: cardsY }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}