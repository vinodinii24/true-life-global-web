import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Sarah Lim",
    company: "Retail Business Owner",
    review: "True Life Global simplified our accounting process and helped us stay compliant with IRAS requirements. Their team is professional, responsive, and highly reliable.",
    rating: 5,
    glowColor: "rgba(212, 175, 55, 0.2)"
  },
  {
    name: "Jason Tan",
    company: "SME Director",
    review: "From bookkeeping to courier services, everything was handled efficiently. Having one trusted partner for multiple services saved us valuable time.",
    rating: 5,
    glowColor: "rgba(79, 172, 254, 0.2)"
  },
  {
    name: "Priya Nair",
    company: "Startup Founder",
    review: "Excellent customer service and transparent pricing. Their financial advice helped us make better business decisions during our company's growth.",
    rating: 5,
    glowColor: "rgba(212, 175, 55, 0.25)"
  }
];

// --- Interactive 3D Testimonial Card ---
function TestimonialCard({ item, index }) {
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

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 p-8 rounded-3xl backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] flex flex-col justify-between transition-all duration-500 transform-gpu overflow-hidden hover:-translate-y-2"
    >
      {/* Dynamic Radial Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none blur-xl z-0" 
        style={{ background: `radial-gradient(circle at 10% 10%, ${item.glowColor}, transparent 60%)` }}
      />

      {/* Light Reflection Sweep */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Top Accent Ribbon Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        {/* Header Node: Quote Icon & Rating Matrix */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/10 group-hover:text-[#FFD700] transition-all duration-300">
            <Quote className="w-4 h-4 fill-current" aria-hidden="true" />
          </div>
          <div className="flex space-x-1" aria-label={`Rated ${item.rating} out of 5 stars`}>
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700] drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]" aria-hidden="true" />
            ))}
          </div>
        </div>

        {/* Main Client Evaluation Content */}
        <p className="font-sans text-base text-slate-200/90 leading-relaxed mb-8 font-normal italic">
          "{item.review}"
        </p>
      </div>

      {/* Footer Node: Identity Information */}
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
        <div>
          <h3 className="font-sans text-base font-bold text-white tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
            {item.name}
          </h3>
          <p className="font-sans text-xs font-medium text-slate-400 mt-0.5">
            {item.company}
          </p>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FFD700] group-hover:shadow-[0_0_8px_#FFD700] transition-all duration-300" />
      </div>

    </motion.article>
  );
}

// --- Main Section Component ---
export default function Testimonials() {
  const sectionRef = useRef(null);

  // Scroll Parallax Depth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const contentY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  const labelText = "CLIENT EVALUATION // ECOSYSTEM VALIDATION";

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative bg-transparent text-white py-28 sm:py-36 px-6 overflow-hidden select-none"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient Depth Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <motion.div style={{ y: headerY }} className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Animated Subtitle Label */}
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
            id="testimonials-heading" 
            className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white mb-6"
          >
            What Our{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Clients Say
              <motion.span
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
              />
            </span>
          </h2>

          {/* Gold Accent Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6 shadow-[0_0_10px_#D4AF37]"
          />

          <p className="font-sans text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
            Businesses across Singapore trust True Life Global for dependable financial and logistics solutions.
          </p>
        </motion.div>

        {/* Testimonials 3D Grid Structure */}
        <motion.div 
          style={{ y: contentY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {testimonialsData.map((item, index) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}