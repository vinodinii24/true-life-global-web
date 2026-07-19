import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ClipboardCheck, TrendingUp, Truck } from 'lucide-react';

const servicesData = [
  {
    title: "Accounting & Bookkeeping",
    description: "Accurate, timely bookkeeping and financial record management to keep your accounts in perfect order and ready for IRAS reporting.",
    icon: Calculator,
    color: "#1D4ED8", 
    gradient: "from-[#1D4ED8]/15 via-[#1D4ED8]/5 to-transparent"
  },
  {
    title: "Auditing Services",
    description: "Independent audits conducted with rigor and corporate transparency, ensuring your financial statements meet Singapore statutory standards.",
    icon: ClipboardCheck,
    color: "#4FACFE", 
    gradient: "from-[#4FACFE]/15 via-[#4FACFE]/5 to-transparent"
  },
  {
    title: "Financial Advisory",
    description: "Practical financial planning and structural business advisory support to help you make informed decisions and grow with confidence.",
    icon: TrendingUp,
    color: "#D4AF37", 
    gradient: "from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent"
  },
  {
    title: "Courier Services",
    description: "Reliable document and parcel delivery within Singapore ideal for businesses needing secure, time-sensitive corporate solutions.",
    icon: Truck,
    color: "#1E3A8A", 
    gradient: "from-[#1E3A8A]/15 via-[#1E3A8A]/5 to-transparent"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.97 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 0.9
    }
  }
};

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative bg-transparent text-slate-800 py-24 sm:py-32 overflow-hidden perspective-1000"
      aria-labelledby="services-heading"
    >
      {/* Dynamic Background Fluidity Rings */}
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.08, 1] 
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-slate-100/40 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          x: [0, 30, 0],
          scale: [1, 1.15, 1] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-[#1D4ED8]/5 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header Framework */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="font-sans text-xs font-bold tracking-[6px] text-[#D4AF37] uppercase mb-4 block">
              Capabilities Layer
            </span>
            <h2 
              id="services-heading" 
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D3557] mb-6"
            >
              Our Services
            </h2>
            
            {/* Animated Underline Element */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "80px", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#D4AF37] rounded-full mb-6" 
            />
            
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
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateX: 3,
                  rotateY: -3,
                  boxShadow: "0 20px 40px -15px rgba(29, 53, 87, 0.15)"
                }}
                whileTap={{ scale: 0.99 }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/70 backdrop-blur-xl overflow-hidden shadow-sm transition-all duration-300 transform-style-3d hover:border-slate-300/90"
              >
                {/* Micro Ambient Card Radial Glow */}
                <div className={`absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="transform-translate-z">
                  {/* Dynamic Modular Badge Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.08, rotate: 6 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative border border-slate-100 bg-slate-50 transition-colors duration-300 group-hover:bg-white shadow-sm"
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl blur-md transition-all duration-300"
                      style={{ backgroundColor: service.color }} 
                    />
                    <IconComponent 
                      className="w-6 h-6 transition-transform duration-300" 
                      style={{ color: service.color }}
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Context Info Typography */}
                  <h3 className="font-sans text-xl font-bold text-[#1D3557] mb-4 tracking-tight transition-colors duration-300 group-hover:text-[#1D4ED8]">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-slate-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Master Interactive High-Fidelity Outer Border Highlight */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left pointer-events-none"
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