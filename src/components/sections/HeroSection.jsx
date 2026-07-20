import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence, useInView, useSpring } from 'framer-motion';
import { ArrowUpRight, Shield, ArrowRight, ChevronDown } from 'lucide-react';

// Vite Image Imports
import singapore1 from "../../assets/images/singapore img1.jpg";
import singapore2 from "../../assets/images/singapore img2.jpg";
import singapore3 from "../../assets/images/singapore img3.jpg";

const SLIDER_IMAGES = [singapore1, singapore2, singapore3];

const STAT_ITEMS = [
  { target: 4, suffix: "", label: "Core Services" },
  { target: 100, suffix: "K", label: "Paid-Up Capital SGD" },
  { target: 1, suffix: "", label: "ACRA Registered" },
  { target: 100, suffix: "%", label: "Compliance Focus" }
];

function Counter({ target, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, count, target]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// Magnetic Button Wrapper
function MagneticButton({ children, className, href }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

// Canvas Floating Gold Particles Component with DPI Scaling
function FloatingGoldParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const dpr = window.devicePixelRatio || 1;

    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas) return;
      const currentDpr = window.devicePixelRatio || 1;
      width = canvas.width = window.innerWidth * currentDpr;
      height = canvas.height = window.innerHeight * currentDpr;
      ctx.scale(currentDpr, currentDpr);
    };

    window.addEventListener('resize', handleResize);

    const particleCount = 45;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.5 - 0.2,
    }));

    const render = () => {
      const clientWidth = window.innerWidth;
      const clientHeight = window.innerHeight;

      ctx.clearRect(0, 0, clientWidth, clientHeight);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = clientHeight;
          p.x = Math.random() * clientWidth;
        }
        if (p.x < 0) p.x = clientWidth;
        if (p.x > clientWidth) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-15 opacity-70 w-full h-full"
    />
  );
}

export default function HeroSection({ containerRef }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Parallax Values for subtle mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 20 });
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth - 0.5);
    mouseY.set(e.clientY / innerHeight - 0.5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % SLIDER_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const writingVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 overflow-hidden select-none bg-[#050b18]"
    >
      {/* Cinematic Ken Burns Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns transform-gpu will-change-transform"
            style={{
              backgroundImage: `url(${SLIDER_IMAGES[currentIdx]})`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Floating Gold Canvas Particles */}
      <FloatingGoldParticles />

      {/* Soft Moving Light Beams & Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-[#1D3557]/30 to-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none z-10 spotlight-beam" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#1D4ED8]/15 rounded-full blur-[130px] pointer-events-none z-10" />

      {/* Multi-gradient Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#050b18]/75 to-[#050b18]/50 z-10 pointer-events-none" />

      {/* Animated Glowing Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1D4ED8] to-transparent animate-pulse delay-700" />
      </div>

      {/* Main Hero Content Frame with Parallax */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full mx-auto px-6 relative z-20 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1"
      >
        <div className="lg:col-span-9 flex flex-col justify-center items-start text-left">
          
          {/* Small Premium Corporate Badge */}
          <motion.div
            variants={writingVariants}
            className="inline-flex items-center space-x-2 bg-white/5 border border-[#D4AF37]/30 backdrop-blur-2xl px-4 py-2 rounded-xl w-fit mb-6 shadow-2xl relative z-10"
          >
            <Shield className="w-4 h-4 text-[#FFD700]" />
            <span className="font-sans text-xs font-bold tracking-wider text-slate-200 uppercase">
              ACRA Registered Singapore Company
            </span>
          </motion.div>

          {/* Heading Stack with Gold Light Sweep */}
          <motion.h1
            variants={writingVariants}
            className="tracking-tight leading-none mb-6 relative z-10 font-sans"
          >
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              True Life Global
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black gold-sweep-text py-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              Pte. Ltd.
            </span>
          </motion.h1>

          {/* Subheading Identity */}
          <motion.h2
            variants={writingVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6 tracking-wide relative z-10 font-sans"
          >
            Clarity Today. Growth Tomorrow.
          </motion.h2>

          {/* Corporate Paragraph */}
          <motion.p
            variants={writingVariants}
            className="font-sans text-base sm:text-lg text-slate-200/90 max-w-2xl leading-relaxed mb-10 font-medium relative z-10"
          >
            True Life Global Pte. Ltd. is an ACRA-registered Singapore firm offering professional accounting, auditing, tax consultancy, and comprehensive corporate support services designed for global enterprises.
          </motion.p>
          
          {/* Action Triggers with Magnetic Buttons */}
          <motion.div
            variants={writingVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-10 w-full sm:w-auto"
          >
            <MagneticButton
              href="#contact"
              className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#AA7C11] text-[#050b18] font-sans text-sm font-bold shadow-xl shadow-[#D4AF37]/20 btn-glow transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            
            <MagneticButton
              href="#services"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-xl text-white font-sans text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group hover:border-[#D4AF37]/50 hover:bg-white/10"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#D4AF37]" />
            </MagneticButton>
          </motion.div>

        </div>
      </motion.div>

      {/* Metrics Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full mx-auto px-6 relative z-20 mt-auto pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
      >
        {STAT_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(212, 175, 55, 0.4)" }}
            className="p-5 rounded-2xl glass-card transition-all duration-300 flex flex-col justify-between border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <div className="text-white text-3xl sm:text-4xl font-black tracking-tight">
              <Counter target={item.target} suffix={item.suffix} />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-2 font-sans tracking-wider uppercase">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-400 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold">Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}