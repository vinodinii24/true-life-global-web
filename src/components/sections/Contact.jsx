import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.sendForm(
        "service_8p6vfza",
        "template_agctxli",
        formRef.current,
        {
          publicKey: "8kCSjYMF5jaYT8bX9",
        }
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: ""
        });
      })
      .catch((error) => {
        console.log(error);
        setStatus("Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* CONTACT SECTION (UNCHANGED)                                              */}
      {/* ========================================================================= */}
      <section 
        id="contact" 
        className="relative bg-transparent text-[#0F172A] py-24 sm:py-32 overflow-hidden border-t border-slate-200"
        aria-labelledby="contact-heading"
      >
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(29,78,216,0.015),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header Node Framework */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-sans text-xs font-bold tracking-[6px] text-[#1D4ED8] uppercase mb-4 block">
                Engagement Portal // Institutional Access
              </span>
              <h2 
                id="contact-heading" 
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6"
              >
                Get in Touch
              </h2>
              <div className="w-12 h-[2px] bg-[#1D4ED8] rounded-full mx-auto mb-6" />
              <p className="font-sans text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
                Reach out for a free consultation. We respond within 1 business day.
              </p>
            </motion.div>
          </div>

          {/* Dual Column Configuration Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column Architecture */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.015)] flex-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#0F172A] mb-8">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6 font-sans">
                    {/* Info Row 1 */}
                    <div className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0 transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8]">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase font-bold tracking-widest text-slate-400">Email</p>
                        <p className="text-base text-[#0F172A] font-semibold mt-0.5">To be confirmed</p>
                      </div>
                    </div>

                    {/* Info Row 2 */}
                    <div className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0 transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8]">
                        <Phone className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase font-bold tracking-widest text-slate-400">Phone</p>
                        <p className="text-base text-[#0F172A] font-semibold mt-0.5">To be confirmed</p>
                      </div>
                    </div>

                    {/* Info Row 3 */}
                    <div className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0 transition-colors duration-300 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8]">
                        <MapPin className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase font-bold tracking-widest text-slate-400">Registered Office</p>
                        <p className="text-sm sm:text-base text-[#0F172A] font-semibold mt-0.5 leading-relaxed">
                          1003 Toa Payoh Industrial Park, #07-1501, Singapore 319075
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operating Block Integration */}
                <div className="mt-10 pt-8 border-t border-slate-100 flex gap-4 items-start font-sans">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] tracking-tight mb-2">
                      Operating Hours
                    </h4>
                    <div className="text-xs text-[#64748B] font-semibold space-y-1">
                      <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
                      <p>Sat: 9:00 AM – 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column Architecture */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.015)] hover:border-slate-300/80 transition-all duration-300"
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 font-sans">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name Node */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-colors duration-200"
                      />
                    </div>

                    {/* Email Node */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company Name Node */}
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-colors duration-200"
                      />
                    </div>

                    {/* Service Needed Node */}
                    <div>
                      <label htmlFor="serviceNeeded" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                        Service Needed
                      </label>
                      <input
                        type="text"
                        id="serviceNeeded"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder="Accounting, Tax, Courier..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Message Node */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Status Message */}
                  {status && (
                    <p className={`text-center text-sm font-medium ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                      {status}
                    </p>
                  )}

                  {/* Send Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#1D4ED8] text-white font-bold disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </motion.button>

                </form>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW PREMIUM FOOTER COMPONENT (MATCHING YOUR IMAGE DETAILED LOOK)          */}
      {/* ========================================================================= */}
      <footer className="relative bg-[#0B132B] text-slate-300 pt-20 pb-12 overflow-hidden border-t border-slate-900 font-sans">
        
        {/* Soft Ambient Vector Lights matching the image circles */}
        <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-slate-700/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[5%] w-[30vw] h-[30vw] bg-slate-700/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[10%] right-[-10%] w-[25vw] h-[25vw] bg-slate-700/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Main Footer Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            
            {/* Branding Core Block */}
            <div className="md:col-span-5 lg:col-span-6 space-y-4">
              <div>
                <h3 className="text-white text-xl font-bold tracking-tight">
                  True Life Global Pte. Ltd.
                </h3>
                <p className="text-xs text-slate-500 font-medium tracking-wide mt-0.5">
                  Singapore
                </p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-md">
                A specialized advisory and accounting firm committed to delivering enduring value through precision, compliance, and strategic clarity. Based in Singapore, serving clients worldwide.
              </p>
            </div>

            {/* Quick Links Block */}
            <div className="md:col-span-3 lg:col-span-3 space-y-4">
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm font-medium">
                {['Home', 'About Us', 'Services', 'How We Work', 'Director', 'Careers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Matrix Block */}
            <div className="md:col-span-4 lg:col-span-3 space-y-4">
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm font-medium">
                {[
                  'Accounting & Bookkeeping',
                  'Auditing Services',
                  'Tax Consultancy',
                  'Courier Services'
                ].map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Copyright and Legal Terms Matrix Bar */}
          <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500 font-medium tracking-wide text-center sm:text-left">
              &copy; 2026 True Life Global Pte. Ltd. All rights reserved. Singapore Jurisdiction.
            </p>
            <div className="flex items-center gap-6 text-xs font-semibold">
              <a href="#privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}