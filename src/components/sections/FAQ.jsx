import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What services do you provide?",
    answer: "True Life Global Pte. Ltd. provides accounting, bookkeeping, auditing, financial advisory, tax consultancy, and reliable courier services for businesses in Singapore."
  },
  {
    question: "Do you support international clients?",
    answer: "Yes. We support Singapore businesses and international clients who require professional financial and business service solutions."
  },
  {
    question: "How do you ensure compliance?",
    answer: "We follow Singapore regulatory requirements and maintain compliance-focused processes aligned with ACRA and IRAS standards."
  },
  {
    question: "How do we get started?",
    answer: "Contact our team for a consultation. We will understand your requirements and recommend the right solution for your business."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience supporting logistics, technology, professional services, SMEs, and businesses undergoing international expansion."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32 overflow-hidden border-t border-slate-200"
      aria-labelledby="faq-heading"
    >
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] -translate-y-1/2 bg-[radial-gradient(circle,rgba(29,78,216,0.01),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header Framework */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#1D4ED8] uppercase mb-3 block">
              Knowledge Base // Customer Operations
            </span>
            <h2 
              id="faq-heading" 
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-6"
            >
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-[#1D4ED8] rounded-full mx-auto mb-6" />
            <p className="font-sans text-base sm:text-lg text-[#64748B] leading-relaxed font-medium">
              Quick answers to common questions about our services.
            </p>
          </motion.div>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-slate border rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.01)] ${
                  isOpen ? 'border-[#1D4ED8] shadow-[0_10px_30px_rgba(29,78,216,0.03)]' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#1D4ED8] transition-colors duration-200 focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-button-${index}`}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-slate-400'}`} aria-hidden="true" />
                      {item.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen ? 'bg-[#1D4ED8] text-white border-[#1D4ED8]' : 'bg-slate-50 text-slate-500 border-slate-200'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 transition-transform duration-300" aria-hidden="true" />
                      ) : (
                        <Plus className="w-4 h-4 transition-transform duration-300" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-7 font-sans text-sm sm:text-base text-[#64748B] leading-relaxed font-medium pl-14 border-t border-slate-50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}