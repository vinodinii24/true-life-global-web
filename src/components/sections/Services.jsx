import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ClipboardCheck, TrendingUp, Truck } from 'lucide-react';

const servicesData = [
  {
    title: "Accounting & Bookkeeping",
    description: "Accurate, timely bookkeeping and financial record management to keep your accounts in order and ready for IRAS reporting.",
    icon: Calculator,
    color: "#00F2FE", // Cyan
    gradient: "from-primary/20 to-accent/5"
  },
  {
    title: "Auditing Services",
    description: "Independent audits conducted with rigor and transparency, ensuring your financial statements meet Singapore regulatory standards.",
    icon: ClipboardCheck,
    color: "#4FACFE", // Blue
    gradient: "from-[#4FACFE]/20 to-[#00F2FE]/5"
  },
  {
    title: "Financial Advisory",
    description: "Practical financial planning and business advisory support to help you make informed decisions and grow with confidence.",
    icon: TrendingUp,
    color: "#D4AF37", // Gold
    gradient: "from-[#D4AF37]/20 to-accent/5"
  },
  {
    title: "Courier Services",
    description: "Reliable document and parcel delivery within Singapore ideal for businesses needing secure, time-sensitive courier solutions.",
    icon: Truck,
    color: "#00F2FE", // Cyan Accent
    gradient: "from-primary/20 to-[#D4AF37]/5"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15
    }
  }
};

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative bg-background text-[#f3f4f6] py-24 sm:py-32 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Structural Ambient Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(79,172,254,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header Framework */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-xs font-semibold tracking-widest text-[#00F2FE] uppercase mb-3">
              Core Capabilities // Capabilities Layer
            </span>
            <h2 
              id="services-heading" 
              className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-6"
            >
              Our Services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
            <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed font-medium">
              Professional business solutions designed to help Singapore businesses operate efficiently, remain compliant, and achieve sustainable growth.
            </p>
          </motion.div>
        </div>

        {/* Tactical Services Architecture Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-slate/[0.02] border border-border backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-blue-50"
              >
                {/* Micro Ambient Card Radial Glow */}
                <div className={`absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Dynamic Modular Badge Icon */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative border border-border transition-transform duration-500 group-hover:rotate-6"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                  >
                    <div 
                      className="absolute inset-0 opacity-10 rounded-2xl blur-sm group-hover:blur-md transition-all"
                      style={{ backgroundColor: service.color }} 
                    />
                    <IconComponent 
                      className="w-6 h-6 transition-colors duration-300" 
                      style={{ color: service.color }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Context Info Typography */}
                  <h3 className="font-display text-xl font-bold text-text-primary mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#9ca3af] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-[#9ca3af] leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                

                {/* Master Interactive High-Fidelity Outer Border Highlight */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundImage: `linear-gradient(to right, ${service.color}, transparent)` }}
                />
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}