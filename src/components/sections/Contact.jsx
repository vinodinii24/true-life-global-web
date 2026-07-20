import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Animation Variants
const letterContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const columnVariants = {
  hidden: { opacity: 0, x: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  // Scroll Parallax Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_8p6vfza",
        "template_agctxli",
        formRef.current,
        {
          publicKey: "8kCSjYMF5jaYT8bX9",
        }
      );
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const labelText = "ENGAGEMENT PORTAL // INSTITUTIONAL ACCESS";

  return (
    <>
      {/* Contact Section */}
      <section
        ref={sectionRef}
        id="contact"
        className="relative bg-transparent text-white py-28 sm:py-36 overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/40 to-transparent pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div style={{ y: headerY }} className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterContainerVariants}
              className="flex items-center justify-center gap-0.5 mb-4 flex-wrap"
            >
              {labelText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="font-sans text-[11px] sm:text-xs font-bold tracking-[4px] text-[#D4AF37] uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            <h2
              id="contact-heading"
              className="font-sans text-3xl sm:text-5xl font-black tracking-tight text-white mb-6"
            >
              Get in{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] overflow-hidden drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                Touch
                <motion.span
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
                />
              </span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6 shadow-[0_0_10px_#D4AF37]"
            />

            <p className="font-sans text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
              Reach out for a free consultation. We respond within 1 business day.
            </p>
          </motion.div>

          {/* Dual Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column - Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={columnVariants}
                className="bg-white/[0.04] backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.3)] flex-1 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: 'radial-gradient(circle at 10% 20%, rgba(212, 175, 55, 0.08), transparent 70%)' }}
                />

                <div className="relative z-10">
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                    Contact Information
                  </h3>

                  <div className="space-y-6 font-sans">
                    <div className="flex gap-4 items-start group/item">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 transition-all duration-300 group-hover/item:bg-[#D4AF37] group-hover/item:text-slate-950 group-hover/item:border-[#D4AF37] group-hover/item:shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase font-bold tracking-widest text-slate-400">Email</p>
                        <p className="text-base text-white font-semibold mt-0.5">To be confirmed</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group/item">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 transition-all duration-300 group-hover/item:bg-[#D4AF37] group-hover/item:text-slate-950 group-hover/item:border-[#D4AF37] group-hover/item:shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                        <Phone className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase font-bold tracking-widest text-slate-400">Phone</p>
                        <p className="text-base text-white font-semibold mt-0.5">To be confirmed</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start group/item">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 transition-all duration-300 group-hover/item:bg-[#D4AF37] group-hover/item:text-slate-950 group-hover/item:border-[#D4AF37] group-hover/item:shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                        <MapPin className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase font-bold tracking-widest text-slate-400">Registered Office</p>
                        <p className="text-sm sm:text-base text-white font-semibold mt-0.5 leading-relaxed">
                          1003 Toa Payoh Industrial Park, #07-1501, Singapore 319075
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex gap-4 items-start font-sans">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 shrink-0">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight mb-2">Operating Hours</h4>
                    <div className="text-xs text-slate-300/80 font-medium space-y-1">
                      <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
                      <p>Sat: 9:00 AM – 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={columnVariants}
                className="bg-white/[0.04] backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-500 relative overflow-hidden"
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 font-sans relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:bg-black/50 transition-all duration-300 shadow-inner"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:bg-black/50 transition-all duration-300 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:bg-black/50 transition-all duration-300 shadow-inner"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceNeeded" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Service Needed
                      </label>
                      <input
                        type="text"
                        id="serviceNeeded"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder="Accounting, Tax, Courier..."
                        className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:bg-black/50 transition-all duration-300 shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3 text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] focus:bg-black/50 transition-all duration-300 shadow-inner resize-none"
                    />
                  </div>

                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-semibold border ${
                        status.includes("successfully")
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                      }`}
                    >
                      {status.includes("successfully") ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 shrink-0" />
                      )}
                      <span>{status}</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] text-slate-950 font-bold tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#030712]/80 backdrop-blur-2xl text-slate-300 pt-20 pb-12 overflow-hidden border-t border-white/10 font-sans z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[5%] w-[30vw] h-[30vw] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            <div className="md:col-span-5 lg:col-span-6 space-y-4">
              <div>
                <h3 className="text-white text-xl font-bold tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                  True Life Global Pte. Ltd.
                </h3>
                <p className="text-xs text-[#D4AF37] font-semibold tracking-widest uppercase mt-1">
                  Singapore
                </p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-md">
                A specialized advisory and accounting firm committed to delivering enduring value through precision, compliance, and strategic clarity. Based in Singapore, serving clients worldwide.
              </p>
            </div>

            <div className="md:col-span-3 lg:col-span-3 space-y-4">
              <h4 className="text-white text-xs font-bold tracking-widest uppercase">Quick Links</h4>
              <ul className="space-y-2.5 text-sm font-medium">
                {['Home', 'About Us', 'Services', 'How We Work', 'Director', 'Careers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-400 hover:text-[#FFD700] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#FFD700] transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-3 space-y-4">
              <h4 className="text-white text-xs font-bold tracking-widest uppercase">Services</h4>
              <ul className="space-y-2.5 text-sm font-medium">
                {[
                  'Accounting & Bookkeeping',
                  'Auditing Services',
                  'Tax Consultancy',
                  'Courier Services',
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-slate-400 hover:text-[#FFD700] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#FFD700] transition-colors" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400 font-medium tracking-wide text-center sm:text-left">
              &copy; 2026 True Life Global Pte. Ltd. All rights reserved. Singapore Jurisdiction.
            </p>
            <div className="flex items-center gap-6 text-xs font-semibold">
              <a href="#privacy" className="text-slate-400 hover:text-[#FFD700] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-[#FFD700] transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}