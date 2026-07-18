import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  // Generate a deterministic array of particles using useMemo to prevent re-renders on every state update
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: 25 + Math.random() * 20,
        delay: Math.random() * -20,
        // Alternate subtle opacities between blue and gold variants
        color: i % 2 === 0 ? "rgba(212, 175, 55, 0.25)" : "rgba(29, 53, 87, 0.2)",
      })),
    []
  );
  return (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">

    {/* 1. Slow Floating Corporate Blue Gradient Blob */}
    <motion.div
      animate={{
        x: ["-15vw", "15vw", "-15vw"],
        y: ["-10vh", "15vh", "-10vh"],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-[-20%] left-[-10%] w-[65vw] h-[65vw] rounded-full mix-blend-multiply opacity-60"
      style={{
        background:
          "radial-gradient(circle, rgba(29,53,87,0.07) 0%, rgba(29,53,87,0.02) 50%, transparent 70%)",
      }}
    />

    {/* Gold Blob */}
    <motion.div
      animate={{
        x: ["10vw", "-15vw", "10vw"],
        y: ["15vh", "-10vh", "15vh"],
        scale: [1.05, 0.95, 1.05],
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply opacity-60"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.06) 0%, rgba(212,175,55,0.01) 50%, transparent 70%)",
      }}
    />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #1D3557 1px, transparent 1px),
          linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
        `,
        backgroundSize: "5rem 5rem",
        maskImage:
          "radial-gradient(ellipse at center, black, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black, transparent 85%)",
      }}
    >
      <motion.div
        animate={{ y: ["0%", "100%"] }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-full h-full bg-gradient-to-b from-[#1D3557]/10 via-transparent to-transparent bg-[size:100%_5rem]"
      />
    </div>

    {/* Particles */}
    <div className="absolute inset-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: `${p.y}vh`,
          }}
          animate={{
            y: ["0vh", "-100vh"],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>

  </div>
);
  
}