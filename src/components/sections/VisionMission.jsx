import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const strategicPillars = [
  {
    title: "Our Vision",
    content: "To become one of Singapore's most trusted business service providers by delivering reliable accounting, auditing, financial advisory, and courier solutions that help businesses grow with confidence.",
    icon: Eye,
    accentGradient: "from-[#1D4ED8] to-[#3B82F6]"
  },
  {
    title: "Our Mission",
    content: "To provide professional, transparent, and customer-focused financial and logistics services while maintaining the highest standards of integrity, compliance, and operational excellence.",
    icon: Target,
    accentGradient: "from-[#D4AF37] to-[#F59E0B]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

export default function VisionMission() {
  return (
    <section 
      id="vision" 
      className="relative bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32 overflow-hidden border-t border-slate-200"
      aria-labelledby="vision-mission-heading"
    >
      {/* Background Graphic Architecture Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(29,78,216,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#1D4ED8] uppercase mb-3 block">
              Corporate Directives // Strategic Core
            </span>
            <h2 
              id="vision-mission-heading" 
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6"
            >
              Our Vision & Mission
            </h2>
            <div className="w-12 h-1 bg-[#1D4ED8] rounded-full mx-auto mb-6" />
            <p className="font-sans text-base sm:text-lg text-[#64748B] leading-relaxed font-medium">
              Building trusted financial and logistics solutions for businesses across Singapore.
            </p>
          </motion.div>
        </div>

        {/* Binary Column Pillars Implementation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {strategicPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative bg-slate border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.015)] flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.04)]"
              >
                {/* Structural Primary Identification Ribbon Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#1D4ED8] rounded-t-3xl" />

                <div>
                  {/* Icon Node Matrix with Secondary Accent Backdrop */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1D4ED8] mb-8 transition-transform duration-500 group-hover:scale-105 group-hover:bg-slate-900 group-hover:text-white">
                    <IconComponent className="w-6 h-6 transition-transform duration-500" aria-hidden="true" />
                  </div>

                  {/* Typography Hierarchy */}
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-4 tracking-tight group-hover:text-[#1D4ED8] transition-colors duration-200">
                    {pillar.title}
                  </h3>
                  
                  <p className="font-sans text-base text-[#64748B] leading-relaxed font-medium">
                    {pillar.content}
                  </p>
                </div>

                {/* Micro Ambient Structural Detail Node */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Governance // Operational Pillar 0{index + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate group-hover:bg-[#D4AF37] transition-colors duration-300" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}