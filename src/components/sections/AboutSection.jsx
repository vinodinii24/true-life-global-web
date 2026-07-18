import { motion } from "framer-motion";
import { Eye, Target, Building2 } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#0B1936] via-[#0F234D] to-[#0B1936] text-white py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Premium Ambient Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.035),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.025),transparent_70%)] pointer-events-none" />

      {/* Abstract Luxury Accent Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#D4AF37" strokeWidth="1" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#D4AF37" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Infrastructure */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-sans text-xs font-bold tracking-[6px] text-[#D4AF37] uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              True Life Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA7C11]">Pvt. Ltd.</span>
            </h2>
            
            {/* Animated Gold Underline */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8"
            />
            
            <p className="font-sans text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal max-w-3xl mx-auto">
              True Life Global Pte. Ltd. is a Singapore-based professional services company providing reliable accounting, auditing, tax consultancy and courier solutions. We help businesses achieve compliance, efficiency and sustainable growth through trusted expertise.
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
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.05)" }}
            className="group relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 flex flex-col"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Building2 className="w-5 h-5" aria-hidden="true" />
            </div>

            <h3 className="font-serif text-xl font-bold tracking-tight text-white mb-4">
              Our Company
            </h3>

            <p className="font-sans text-sm text-slate-400 leading-relaxed font-medium">
              We provide professional accounting, auditing, taxation and courier services with integrity, accuracy and commitment.
            </p>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.05)" }}
            className="group relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 flex flex-col"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Eye className="w-5 h-5" aria-hidden="true" />
            </div>

            <h3 className="font-serif text-xl font-bold tracking-tight text-white mb-4">
              Our Vision
            </h3>

            <p className="font-sans text-sm text-slate-400 leading-relaxed font-medium">
              To become a trusted global partner empowering businesses through reliable financial and business solutions.
            </p>
          </motion.div>

          {/* Card 3: Our Mission */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.05)" }}
            className="group relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Target className="w-5 h-5" aria-hidden="true" />
            </div>

            <h3 className="font-serif text-xl font-bold tracking-tight text-white mb-4">
              Our Mission
            </h3>

            <p className="font-sans text-sm text-slate-400 leading-relaxed font-medium">
              Deliver expert services that simplify compliance and help businesses grow confidently.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}