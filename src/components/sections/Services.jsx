import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ClipboardCheck, TrendingUp, Truck } from 'lucide-react';

const servicesData = [
  {
    title: "Accounting & Bookkeeping",
    description: "Accurate, timely bookkeeping and financial record management to keep your accounts in perfect order and ready for IRAS reporting.",
    icon: Calculator,
    color: "#1D4ED8", // Solid corporate blue for light background visibility
    gradient: "from-[#1D4ED8]/10 to-transparent"
  },
  {
    title: "Auditing Services",
    description: "Independent audits conducted with rigor and corporate transparency, ensuring your financial statements meet Singapore statutory standards.",
    icon: ClipboardCheck,
    color: "#4FACFE", 
    gradient: "from-[#4FACFE]/10 to-transparent"
  },
  {
    title: "Financial Advisory",
    description: "Practical financial planning and structural business advisory support to help you make informed decisions and grow with confidence.",
    icon: TrendingUp,
    color: "#D4AF37", 
    gradient: "from-[#D4AF37]/10 to-transparent"
  },
  {
    title: "Courier Services",
    description: "Reliable document and parcel delivery within Singapore ideal for businesses needing secure, time-sensitive corporate solutions.",
    icon: Truck,
    color: "#1E3A8A", 
    gradient: "from-[#1E3A8A]/10 to-transparent"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16
    }
  }
};

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative bg-transparent text-slate-800 py-24 sm:py-32 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header Framework */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="font-sans text-xs font-bold tracking-[6px] text-[#D4AF37] uppercase mb-4 block">
              Capabilities Layer
            </span>
            <h2 
              id="services-heading" 
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D3557] mb-6"
            >
              Our Services
            </h2>
            
            {/* Animated Underline Element */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#D4AF37] rounded-full mb-6" />
            
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Professional business solutions designed to help Singapore enterprises operate efficiently, remain fully compliant, and achieve sustainable growth.
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
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/60 backdrop-blur-xl overflow-hidden shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
              >
                {/* Micro Ambient Card Radial Glow */}
                <div className={`absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Dynamic Modular Badge Icon */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative border border-slate-100 transition-transform duration-500 group-hover:rotate-6 bg-slate-50"
                  >
                    <div 
                      className="absolute inset-0 opacity-5 rounded-2xl blur-sm group-hover:blur-md transition-all"
                      style={{ backgroundColor: service.color }} 
                    />
                    <IconComponent 
                      className="w-6 h-6 transition-colors duration-300" 
                      style={{ color: service.color }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Context Info Typography */}
                  <h3 className="font-sans text-xl font-bold text-[#1D3557] mb-4 tracking-tight transition-colors duration-300 group-hover:text-[#1D4ED8]">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-slate-500 leading-relaxed font-medium">
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