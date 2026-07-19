import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BadgeDollarSign, CalendarCheck, Users } from 'lucide-react';

const insightsData = [
  {
    title: "Compliance-First",
    description: "Every process is designed with regulatory requirements at the core, ensuring your business meets statutory obligations with confidence and precision.",
    icon: ShieldCheck
  },
  {
    title: "Transparent Pricing",
    description: "Clear cost structures with no hidden fees or unexpected charges, providing complete financial clarity and predictable engagement costs.",
    icon: BadgeDollarSign
  },
  {
    title: "Monthly Discipline",
    description: "Consistent monthly close processes for reliable financial insights, timely reporting cycles, and proactive financial management.",
    icon: CalendarCheck
  },
  {
    title: "Personalized Service",
    description: "Tailored solutions that adapt to your unique business requirements, growth trajectory, and evolving compliance needs.",
    icon: Users
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 16 }
  }
};

export default function Insights() {
  return (
    <section 
      id="insights" 
      className="relative bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32 overflow-hidden border-t border-slate-200"
      aria-labelledby="insights-heading"
    >
      {/* Background Micro Geometry Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(29,78,216,0.01),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header Framework */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-xs font-bold tracking-[6px] text-[#1D4ED8] uppercase mb-3 block">
              Strategic Methodology // Core Paradigm
            </span>
            <h2 
              id="insights-heading" 
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6"
            >
              Key Insights
            </h2>
            <div className="w-12 h-[2px] bg-[#1D4ED8] rounded-full mx-auto mb-6" />
            <p className="font-sans text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
              What sets us apart in the accounting and advisory landscape.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Card Architecture Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
        >
          {insightsData.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                className="group relative bg-white border border-slate-200 p-8 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.01)] flex flex-col justify-between transition-all duration-300 hover:border-[#1D4ED8] hover:shadow-[0_20px_50px_rgba(15,23,42,0.03)]"
              >
                <div>
                  {/* Badge Icon Infrastructure */}
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-6 transition-all duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8]">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </div>

                  <h3 className="font-sans text-lg font-bold text-[#0F172A] mb-3 tracking-tight transition-colors duration-200">
                    {insight.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-[#64748B] leading-relaxed font-normal">
                    {insight.description}
                  </p>
                </div>

                {/* Card Sub-Level Technical Info Nodes */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-slate-400">
                    Framework // 0{index + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#D4AF37] transition-colors duration-300" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}