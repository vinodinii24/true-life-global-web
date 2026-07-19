import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonialsData = [
  {
    name: "Sarah Lim",
    company: "Retail Business Owner",
    review: "True Life Global simplified our accounting process and helped us stay compliant with IRAS requirements. Their team is professional, responsive, and highly reliable.",
    rating: 5
  },
  {
    name: "Jason Tan",
    company: "SME Director",
    review: "From bookkeeping to courier services, everything was handled efficiently. Having one trusted partner for multiple services saved us valuable time.",
    rating: 5
  },
  {
    name: "Priya Nair",
    company: "Startup Founder",
    review: "Excellent customer service and transparent pricing. Their financial advice helped us make better business decisions during our company's growth.",
    rating: 5
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="relative bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32 overflow-hidden border-t border-slate-200"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Micro Ambience Layer */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(29,78,216,0.015),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#1D4ED8] uppercase mb-3 block">
              Client Evaluation // Ecosystem Validation
            </span>
            <h2 
              id="testimonials-heading" 
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6"
            >
              What Our Clients Say
            </h2>
            <div className="w-12 h-1 bg-[#1D4ED8] rounded-full mx-auto mb-6" />
            <p className="font-sans text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
              Businesses across Singapore trust True Life Global for dependable financial and logistics solutions.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Static Grid Structure */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {testimonialsData.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative bg-slate border border-[#E2E8F0] p-8 rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.015)] flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.04)]"
            >
              {/* Card Ribbon Accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate group-hover:bg-[#1D4ED8] rounded-t-3xl transition-colors duration-300" />

              <div>
                {/* Header Node: Quote & Rating Matrix */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1D4ED8] group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                    <Quote className="w-4 h-4 fill-current" aria-hidden="true" />
                  </div>
                  <div className="flex space-x-0.5" aria-label={`Rated ${item.rating} out of 5 stars`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                {/* Main Client Evaluation Content */}
                <p className="font-sans text-base text-slate-600 leading-relaxed mb-8 font-medium italic">
                  "{item.review}"
                </p>
              </div>

              {/* Footer Node: Identity Information */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-[#0F172A] tracking-tight">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-slate-400 mt-0.5">
                    {item.company}
                  </p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate group-hover:bg-[#D4AF37] transition-colors duration-300" />
              </div>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}