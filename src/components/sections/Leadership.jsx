import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { Award, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import founderImage from "../../assets/images/founder.jpg";

const highlightCards = [
  {
    title: "14+ Years Experience",
    description: "Progressive financial & operations leadership across global business environments.",
    icon: Briefcase,
    glowColor: "rgba(212, 175, 55, 0.2)"
  },
  {
    title: "MBA Graduate",
    description: "Advanced master qualification reinforcing strategic commitment to business excellence.",
    icon: GraduationCap,
    glowColor: "rgba(79, 172, 254, 0.2)"
  },
  {
    title: "Certified US GAAP Professional",
    description: "Formally certified through Ernst & Young (2026) for global regulatory environments.",
    icon: Award,
    glowColor: "rgba(212, 175, 55, 0.25)"
  },
  {
    title: "Singapore Business Expert",
    description: "Specialized in structural frameworks, IRAS, and compliance metrics for local SMEs.",
    icon: ShieldCheck,
    glowColor: "rgba(29, 78, 216, 0.2)"
  }
];

// --- Interactive 3D Card for Leadership Highlights ---
function StrategicCard({ card, index }) {
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

  const IconComponent = card.icon;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] flex items-start space-x-4 transition-all duration-300 transform-gpu overflow-hidden"
    >
      {/* Micro Radial Glow Layer */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none blur-xl z-0" 
        style={{ background: `radial-gradient(circle at 10% 10%, ${card.glowColor}, transparent 60%)` }}
      />

      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 p-2.5 rounded-xl bg-white/5 border border-white/10 text-white group-hover:text-[#FFD700] group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 shrink-0 transition-all duration-300 shadow-sm">
        <IconComponent className="w-5 h-5" aria-hidden="true" />
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
        <h4 className="font-sans text-sm font-bold text-white tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
          {card.title}
        </h4>
        <p className="font-sans text-xs text-slate-300/80 mt-1 leading-relaxed font-normal">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function Leadership() {
  const sectionRef = useRef(null);

  // Parallax Depth Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const labelText = "OUR LEADERSHIP // EXECUTIVE GOVERNANCE";

  return (
    <section 
      ref={sectionRef}
      id="leadership" 
      className="relative bg-transparent text-white py-28 sm:py-36 px-6 overflow-hidden select-none"
      aria-labelledby="leadership-heading"
    >
      {/* Ambient Depth Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

      {/* Editorial Decorative Background Watermark */}
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 font-sans text-[18vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        TRUE LIFE
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Structural Header */}
        <motion.div style={{ y: headerY }} className="mb-16 sm:mb-20">
          {/* Animated Subtitle */}
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
            className="flex items-center gap-1 mb-3"
          >
            {labelText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                className="font-sans text-xs font-bold tracking-[4px] text-[#D4AF37] uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <h2 
            id="leadership-heading" 
            className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Founder &{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              CEO
              <motion.span
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
              />
            </span>
          </h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-16 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent shadow-[0_0_8px_#D4AF37] origin-left" 
          />
        </motion.div>

        {/* Corporate Two-Column Grid */}
        <motion.div style={{ y: contentY }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Image & Identity Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative group w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-500">
              <img 
                src={founderImage} 
                alt="Soundarrajan Vaithiyanathan" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Sleek Gradient Overlay Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b18]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              {/* Gold Border Highlight Pulse */}
              <div className="absolute inset-0 rounded-3xl border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 transition-all duration-500 pointer-events-none" />
            </div>

            <div className="mt-6 text-center lg:text-left w-full">
              <h3 className="font-sans text-2xl font-bold tracking-tight text-white">
                Soundarrajan Vaithiyanathan
              </h3>
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#D4AF37] mt-1.5 drop-shadow-[0_0_6px_rgba(212,175,55,0.3)]">
                Founder & Chief Executive Officer
              </p>
            </div>
          </motion.div>

          {/* Column 2: Biography & Strategic Matrices */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-base text-slate-300/90 leading-relaxed space-y-6 font-normal"
            >
              <p>
                Soundarrajan Vaithiyanathan is the visionary Founder and Chief Executive Officer of True Life Global Pte. Ltd., a Singapore-incorporated company delivering integrated accounting and logistics services. With over 14 years of progressive financial and operations experience across multinational corporations in Singapore and India, he brings deep expertise in financial management, compliance, and business operations to every client engagement.
              </p>
              <p>
                His professional journey spans industry leaders including Genpact, Capgemini, Teleperformance, and Rohlig Blue Service, where he managed high-volume financial transactions, led cross-functional teams, and implemented SAP ERP systems across global business environments.
              </p>
              <p>
                He is a certified US GAAP professional from Ernst & Young (2026) and holds a Master of Business Administration (MBA), reinforcing his commitment to professional excellence.
              </p>
              <p className="border-l-2 border-[#D4AF37] pl-4 italic text-slate-200 bg-white/[0.03] backdrop-blur-md py-3 rounded-r-xl shadow-inner border-y border-r border-white/5">
                Driven by a passion for empowering SMEs and individuals with reliable financial guidance and seamless logistics solutions, Soundarrajan founded True Life Global to bridge the gap between professional financial services and everyday business needs in Singapore.
              </p>
            </motion.div>

            {/* Strategic Highlight Cards Grid Infrastructure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-10 border-t border-white/10">
              {highlightCards.map((card, idx) => (
                <StrategicCard key={idx} card={card} index={idx} />
              ))}
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}