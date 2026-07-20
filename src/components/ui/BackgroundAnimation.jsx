import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);

  // High-Performance Lightweight Canvas Particle System with Mouse Attraction
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Deterministic particle pool (no SSR hydration mismatch)
    const particleCount = width < 768 ? 22 : 40;
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: Math.random() * 0.35 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      color: i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#D4AF37" : "#3B82F6",
      alpha: Math.random() * 0.5 + 0.2,
      maxAlpha: Math.random() * 0.6 + 0.3,
      alphaStep: Math.random() * 0.006 + 0.002,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Subtle drift
        p.y -= p.speedY;
        p.x += p.speedX;

        // Gentle cursor interaction vector
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          p.x += (dx / dist) * 0.15;
          p.y += (dy / dist) * 0.15;
        }

        // Wrap boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Pulse alpha opacity
        p.alpha += p.alphaStep;
        if (p.alpha > p.maxAlpha || p.alpha < 0.15) {
          p.alphaStep = -p.alphaStep;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#050b18]">
      {/* 1. Dynamic Deep Navy Ambient Glow Orb */}
      <motion.div
        animate={{
          x: ["-5vw", "5vw", "-5vw"],
          y: ["-5vh", "5vh", "-5vh"],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-50 blur-[100px] transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(29, 78, 216, 0.35) 0%, rgba(13, 27, 62, 0.18) 55%, transparent 75%)",
        }}
      />

      {/* 2. Dynamic Gold Ambient Glow Orb */}
      <motion.div
        animate={{
          x: ["5vw", "-5vw", "5vw"],
          y: ["5vh", "-5vh", "5vh"],
          scale: [1.1, 0.95, 1.1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[65vw] h-[65vw] rounded-full opacity-35 blur-[120px] transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.28) 0%, rgba(180, 140, 30, 0.1) 50%, transparent 75%)",
        }}
      />

      {/* 3. Tech Grid Mask Overlay with Motion Scanline */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212,175,55,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          maskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 90%)",
        }}
      >
        <motion.div
          animate={{ y: ["0%", "100%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-b from-[#D4AF37]/20 via-transparent to-transparent bg-[size:100%_8rem]"
        />
      </div>

      {/* 4. Canvas Floating Interactive Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}