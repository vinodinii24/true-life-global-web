import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Layers, ShieldCheck, Banknote, Zap, Compass } from 'lucide-react';

const coreAdvantages = [
  {
    title: "Officially Registered in Singapore",
    content: "True Life Global Pte. Ltd. is a legitimate ACRA-registered private limited company (UEN: 202626385E), incorporated on 11 June 2026. You are working with a real, accountable business you can trust.",
    icon: Building2
  },
  {
    title: "Two Essential Services Under One Roof",
    content: "We provide Accounting, Auditing & Tax Consultancy together with Courier & Delivery Services, giving your business one dependable partner for both financial and logistics support.",
    icon: Layers
  },
  {
    title: "Fully Compliant & Accountable",
    content: "As a Singapore-registered company, we operate in line with ACRA and IRAS requirements, ensuring your finances and deliveries are managed with compliance, care, and professionalism.",
    icon: ShieldCheck
  },
  {
    title: "Transparent & Affordable Pricing",
    content: "No hidden charges and no unexpected costs. We offer clear, competitive pricing tailored for SMEs, startups, and growing businesses in Singapore.",
    icon: Banknote
  },
  {
    title: "Fast & Reliable Operations",
    content: "Whether it's handling tax submissions or delivering important documents, we work around your deadlines with speed, reliability, and attention to detail.",
    icon: Zap
  },
  {
    title: "Built for Singapore Businesses",
    content: "We understand the local business environment, from GST and ACRA compliance to last-mile delivery across Singapore. We provide practical solutions that match real business needs.",
    icon: Compass
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
  hidden: { y: 35, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 65, damping: 15 }
  }
};

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="relative bg-[#0B132B] text-white py-24 sm:py-32 overflow-hidden border-t border-slate-800"
      aria-labelledby="why-choose-heading"
    >
      {/* Background Micro Geometry Elements */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4FACFE_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header Framework */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-xs font-bold tracking-[6px] text-[#E2C044] uppercase mb-4 block">
              Strategic Value Proposition // Value Architecture
            </span>
            <h2 
              id="why-choose-heading" 
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
            >
              Why Choose True Life Global?
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E2C044] rounded-full mx-auto mb-6" />
            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A registered Singapore partner delivering trusted financial compliance expertise alongside agile logistics operations.
            </p>
          </motion.div>
        </div>

        {/* Advantage Infrastructure Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {coreAdvantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-[#1C2541]/60 backdrop-blur-sm border border-slate-800/80 p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-slate-700 hover:shadow-[0_15px_40px_rgba(29,78,216,0.15)]"
              >
                {/* Dynamic Accent Visual Overlay */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1D4ED8] to-[#4FACFE] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl origin-left" />

                {/* Badge Icon System */}
                <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-slate-800 flex items-center justify-center text-[#4FACFE] mb-6 transition-all duration-300 group-hover:bg-[#4FACFE] group-hover:text-[#0B132B]">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </div>

                {/* Text Block Content */}
                <h3 className="font-sans text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[#4FACFE] transition-colors duration-200">
                  {advantage.title}
                </h3>
                
                <p className="font-sans text-sm text-slate-300 leading-relaxed font-normal">
                  {advantage.content}
                </p>

                {/* Bottom Highlight Anchor */}
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[#E2C044] transition-colors duration-300" />
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}