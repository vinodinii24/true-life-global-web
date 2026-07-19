import React from 'react';
import { motion } from "framer-motion";
import { Eye, Target, Building2 } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-[#1D3557]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Infrastructure */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="font-sans text-xs font-bold tracking-[6px] text-[#D4AF37] uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              True Life Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11]">Pte. Ltd.</span>
            </h2>
            
            {/* Animated Gold Underline */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"
            />
            
            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
              True Life Global Pte. Ltd. is a Singapore-based professional services company providing reliable accounting, auditing, tax consultancy, and corporate support solutions. We help businesses achieve compliance, operational efficiency, and sustainable growth through trusted expertise.
            </p>
          </motion.div>
        </div>

        {/* Three Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* Card 1: Our Company */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
            className="group relative rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/10 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 flex flex-col"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.06),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <Building2 className="w-5 h-5" aria-hidden="true" />
            </div>

            <h3 className="font-serif text-xl font-bold tracking-tight text-white mb-4">
              Our Company
            </h3>

            <p className="font-sans text-sm text-slate-300 leading-relaxed font-medium">
              We provide professional accounting, auditing, taxation, and corporate services with absolute integrity, accuracy, and corporate commitment.
            </p>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
            className="group relative rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/10 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 flex flex-col"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.06),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <Eye className="w-5 h-5" aria-hidden="true" />
            </div>

            <h3 className="font-serif text-xl font-bold tracking-tight text-white mb-4">
              Our Vision
            </h3>

            <p className="font-sans text-sm text-slate-300 leading-relaxed font-medium">
              To become a trusted global partner empowering enterprise ecosystems through modern financial intelligence and corporate solutions.
            </p>
          </motion.div>

          {/* Card 3: Our Mission */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
            className="group relative rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/10 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.06),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <Target className="w-5 h-5" aria-hidden="true" />
            </div>

            <h3 className="font-serif text-xl font-bold tracking-tight text-white mb-4">
              Our Mission
            </h3>

            <p className="font-sans text-sm text-slate-300 leading-relaxed font-medium">
              Deliver comprehensive, expert services that simplify regulatory compliance and help modern businesses scale with absolute confidence.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}