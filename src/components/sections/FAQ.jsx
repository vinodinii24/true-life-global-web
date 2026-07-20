import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
  const sectionRef = useRef(null);

  // Scroll Parallax Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const labelText = "KNOWLEDGE BASE // CUSTOMER OPERATIONS";

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="relative bg-transparent text-white py-28 sm:py-36 px-6 overflow-hidden select-none"
      aria-labelledby="faq-heading"
    >
      {/* Ambient Depth Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-20">
        
        {/* Section Header Framework */}
        <motion.div style={{ y: headerY }} className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Kinetic Animated Category Label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.02 },
              },
            }}
            className="flex items-center justify-center gap-0.5 mb-4 flex-wrap"
          >
            {labelText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                className="font-sans text-[11px] sm:text-xs font-bold tracking-[4px] text-[#D4AF37] uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <h2 
            id="faq-heading" 
            className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white mb-6"
          >
            Frequently Asked{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Questions
              <motion.span
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
              />
            </span>
          </h2>

          {/* Gold Accent Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6 shadow-[0_0_10px_#D4AF37]"
          />

          <p className="font-sans text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
            Quick answers to common questions about our services.
          </p>
        </motion.div>

        {/* Accordion List Container */}
        <motion.div style={{ y: contentY }} className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group bg-white/[0.04] backdrop-blur-xl rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? 'border-[#D4AF37] shadow-[0_10px_35px_rgba(212,175,55,0.15)] bg-white/[0.07]' 
                    : 'border-white/10 hover:border-white/30 hover:bg-white/[0.06]'
                }`}
              >
                {/* Expand Glow Accent */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 blur-xl ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ background: 'radial-gradient(circle at 10% 20%, rgba(212, 175, 55, 0.12), transparent 70%)' }}
                />

                {/* Top Accent Ribbon Bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-transform duration-500 origin-left ${
                  isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />

                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="relative z-10 w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 font-sans text-base sm:text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300 focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-button-${index}`}
                  >
                    <span className="flex items-center gap-3.5">
                      <HelpCircle 
                        className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                          isOpen ? 'text-[#FFD700] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]' : 'text-slate-400 group-hover:text-slate-200'
                        }`} 
                        aria-hidden="true" 
                      />
                      {item.question}
                    </span>

                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#D4AF37] text-slate-950 border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.5)]' 
                        : 'bg-white/5 text-slate-300 border-white/10 group-hover:border-white/30 group-hover:bg-white/10'
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
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-7 font-sans text-sm sm:text-base text-slate-300/85 leading-relaxed font-normal pl-12 sm:pl-14 border-t border-white/10 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}