import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BriefcaseBusiness, UsersRound } from 'lucide-react';

const careerBenefits = [
  {
    title: "Growth & Learning",
    description: "Structured support, guidance, and skill development in Singapore accounting.",
    icon: GraduationCap
  },
  {
    title: "Real Exposure",
    description: "Hands-on work across ACRA-compliant accounting and courier operations.",
    icon: BriefcaseBusiness
  },
  {
    title: "Mentorship",
    description: "Learn alongside experienced Singapore business professionals.",
    icon: UsersRound
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 65, damping: 15 }
  }
};

export default function Careers() {
  return (
    <section 
      id="careers" 
      className="relative bg-slate-50 text-[#0F172A] py-24 sm:py-32 overflow-hidden border-t border-slate-200"
      aria-labelledby="careers-heading"
    >
      {/* Background Radial Element */}
      <div className="absolute inset-y-0 right-0 w-[50vw] bg-[radial-gradient(circle,rgba(29,78,216,0.015),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Editorial Description */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-sans text-xs font-bold tracking-[6px] text-[#1D4ED8] uppercase mb-4 block">
                Human Capital // Ecosystem Expansion
              </span>
              <h2 
                id="careers-heading" 
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6"
              >
                Join True Life Global Pte. Ltd.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#64748B] font-normal mb-8 leading-relaxed">
                A place to grow, learn, and build a meaningful career backed by real-world Singapore business exposure.
              </p>
              
              <div className="w-12 h-[2px] bg-[#1D4ED8] rounded-full mb-8" />
              
              <div className="space-y-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-normal">
                <p className="text-[#0F172A] font-bold text-lg tracking-tight">
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
          </div>

          {/* Right Column: Stacked Benefit Architecture cards */}
          <div className="lg:col-span-7">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {careerBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.article
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 6, transition: { duration: 0.2, ease: "easeOut" } }}
                    className="group relative bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.01)] flex flex-col sm:flex-row items-start gap-6 transition-all duration-300 hover:border-[#1D4ED8] hover:shadow-[0_15px_40px_rgba(15,23,42,0.03)]"
                  >
                    {/* Badge Icon infrastructure */}
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0 transition-all duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8]">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-sans text-lg font-bold text-[#0F172A] tracking-tight">
                          {benefit.title}
                        </h3>
                        <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-slate-400">
                          Pillar 0{index + 1}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-[#64748B] leading-relaxed font-normal">
                        {benefit.description}
                      </p>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-4 w-1 h-8 rounded-full bg-slate-200 group-hover:bg-[#D4AF37] transition-colors duration-300 hidden sm:block" />
                  </motion.article>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}