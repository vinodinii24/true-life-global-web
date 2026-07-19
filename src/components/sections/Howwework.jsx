import React from 'react';
import { motion } from 'framer-motion';
import { Eye, BarChart3, ShieldCheck, Headphones } from 'lucide-react';

const workflowData = [
  {
    step: "01",
    title: "Understanding Your Requirements",
    description: "Deep discovery sessions to understand your business goals, accounting needs, and compliance requirements.",
    icon: Eye,
    glowColor: "rgba(29, 81, 216, 0.08)"
  },
  {
    step: "02",
    title: "Structured Financial Review",
    description: "Comprehensive assessment of your current financial systems, processes, and regulatory status.",
    icon: BarChart3,
    glowColor: "rgba(79, 172, 254, 0.08)"
  },
  {
    step: "03",
    title: "Compliance & Execution",
    description: "Implementation of ACRA-compliant accounting, audit, tax, or courier solutions with precision and care.",
    icon: ShieldCheck,
    glowColor: "rgba(212, 175, 55, 0.08)"
  },
  {
    step: "04",
    title: "Continuous Advisory & Support",
    description: "Ongoing partnership with proactive guidance and responsive support for your Singapore business.",
    icon: Headphones,
    glowColor: "rgba(29, 81, 216, 0.08)"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 16 }
  }
};

export default function Howwework() {
  return (
    <section 
      id="how-we-work" 
      className="relative bg-transparent text-slate-800 py-24 sm:py-32 overflow-hidden border-t border-slate-200/60"
      aria-labelledby="workflow-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs font-bold tracking-[6px] text-[#D4AF37] uppercase mb-4 block">
              Execution Architecture // Deployment Path
            </span>
            <h2 
              id="workflow-heading" 
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D3557] mb-6"
            >
              How We Work
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#D4AF37] rounded-full mx-auto mb-6" />
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our structured engagement model ensures seamless collaboration and exceptional compliance results.
            </p>
          </motion.div>
        </div>

        {/* Chronological Grid Intersect Line Architecture */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting Backbone Line for Desktop Grid Layout */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#1D4ED8]/20 via-slate-200 to-[#D4AF37]/20 z-0" />

          {workflowData.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.article 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col items-start p-8 rounded-3xl bg-white border border-slate-200/60 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 hover:shadow-md"
              >
                {/* Subtle Hover Glow Backdrop Layer */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none blur-xl z-0" 
                  style={{ background: `radial-gradient(circle at 10% 10%, ${node.glowColor}, transparent 60%)` }}
                />

                <div className="w-full flex justify-between items-center mb-6 relative z-10">
                  {/* Icon Node Container */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-[#1D3557] group-hover:text-[#1D4ED8] transition-colors" />
                  </div>
                  
                  {/* Step Metric Notation */}
                  <span className="font-mono text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-[#1D3557]/15 to-transparent select-none">
                    {node.step}
                  </span>
                </div>

                {/* Content Block */}
                <div className="relative z-10">
                  <h3 className="font-sans text-lg font-bold text-[#1D3557] mb-3 tracking-tight group-hover:text-[#1D4ED8] transition-colors duration-300">
                    {node.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed font-medium">
                    {node.description}
                  </p>
                </div>

                {/* Vertical Decorative Border Slide-in Accent */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-[#1D4ED8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-l-3xl" />
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}