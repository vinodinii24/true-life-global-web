import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import founderImage from "../../assets/images/founder.jpg";

const highlightCards = [
  {
    title: "14+ Years Experience",
    description: "Progressive financial & operations leadership across global business environments.",
    icon: Briefcase
  },
  {
    title: "MBA Graduate",
    description: "Advanced master qualification reinforcing strategic commitment to business excellence.",
    icon: GraduationCap
  },
  {
    title: "Certified US GAAP Professional",
    description: "Formally certified through Ernst & Young (2026) for global regulatory environments.",
    icon: Award
  },
  {
    title: "Singapore Business Expert",
    description: "Specialized in structural frameworks, IRAS, and compliance metrics for local SMEs.",
    icon: ShieldCheck
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeUpVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

export default function Leadership() {
  return (
    <section 
      id="leadership" 
      className="relative bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32 overflow-hidden border-t border-slate-200"
      aria-labelledby="leadership-heading"
    >
      {/* Editorial Decorative Watermark Background */}
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 font-sans text-[18vw] font-black text-slate-200/40 select-none pointer-events-none tracking-tighter">
        TRUE LIFE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Structural Header */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-xs font-bold tracking-[6px] text-[#1D4ED8] uppercase mb-3 block">
              Our Leadership // Executive Governance
            </span>
            <h2 
              id="leadership-heading" 
              className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]"
            >
              Founder & CEO
            </h2>
            <div className="w-12 h-[2px] bg-[#1D4ED8] rounded-full mt-4" />
          </motion.div>
        </div>

        {/* Master Corporate Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Image & Identity Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative group w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-200">
              <img 
                src={founderImage} 
                alt="Soundarrajan Vaithiyanathan" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Sleek Gradient Overlay Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            <div className="mt-6 text-center lg:text-left w-full">
              <h3 className="font-sans text-2xl font-bold tracking-tight text-[#0F172A]">
                Soundarrajan Vaithiyanathan
              </h3>
              <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mt-1.5">
                Founder & Chief Executive Officer
              </p>
            </div>
          </motion.div>

          {/* Column 2: Biography & Strategic Matrices */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-base text-slate-600 leading-relaxed space-y-6 font-normal"
            >
              <p>
                Soundarrajan Vaithiyanathan is the visionary Founder and Chief Executive Officer of True Life Global Pte. Ltd., a Singapore-incorporated company delivering integrated accounting and logistics services. With over 14 years of progressive financial and operations experience across multinational corporations in Singapore and India, he brings deep expertise in financial management, compliance, and business operations to every client engagement.
              </p>
              <p>
                His professional journey spans industry leaders including Genpact, Capgemini, Teleperformance, and Rohlig Blue Service, where he managed high-volume financial transactions, led cross-functional teams, and implemented SAP ERP systems across global business environments.
              </p>
              <p>
                He is a certified US GAAP professional from Ernst & Young (2026) and holds a Master of Business Administration (MBA), reinforcing his commitment to professional excellence.
              </p>
              <p className="border-l-2 border-[#1D4ED8] pl-4 italic text-slate-700 bg-slate-50 py-3 rounded-r-xl">
                Driven by a passion for empowering SMEs and individuals with reliable financial guidance and seamless logistics solutions, Soundarrajan founded True Life Global to bridge the gap between professional financial services and everyday business needs in Singapore.
              </p>
            </motion.div>

            {/* Strategic Highlight Cards Grid Infrastructure */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-10 border-t border-slate-200"
            >
              {highlightCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.article
                    key={idx}
                    variants={fadeUpVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.02)] flex items-start space-x-4 transition-all duration-300 hover:border-slate-300 hover:shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[#1D4ED8] shrink-0">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-[#0F172A] tracking-tight">
                        {card.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
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