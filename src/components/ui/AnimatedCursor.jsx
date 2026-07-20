import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (window.matchMedia('(max-width: 768px)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Set initial position out of view with zero opacity
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    // High performance GSAP quickTo setters
    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.3, ease: "power3.out" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.3, ease: "power3.out" });

    let isVisible = false;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y, target } = e;

      if (!isVisible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
        isVisible = true;
      }

      xDotTo(x);
      yDotTo(y);
      xRingTo(x);
      yRingTo(y);

      // Event Delegation: Check if hovered element or parent is interactive
      const isInteractive = target && (
        target.closest('a, button, input, select, textarea, [role="button"]') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      );

      if (isInteractive) {
        gsap.to(ring, {
          scale: 1.8,
          backgroundColor: 'rgba(212, 175, 55, 0.15)',
          borderColor: '#FFD700',
          duration: 0.2,
          overwrite: "auto"
        });
        gsap.to(dot, { scale: 0, duration: 0.2, overwrite: "auto" });
      } else {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(212, 175, 55, 0.6)',
          duration: 0.2,
          overwrite: "auto"
        });
        gsap.to(dot, { scale: 1, duration: 0.2, overwrite: "auto" });
      }
    };

    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
      isVisible = false;
    };

    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.7, borderColor: '#FFD700', duration: 0.15 });
      gsap.to(dot, { scale: 1.5, backgroundColor: '#FFD700', duration: 0.15 });
    };

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(212, 175, 55, 0.6)', duration: 0.2 });
      gsap.to(dot, { scale: 1, backgroundColor: '#D4AF37', duration: 0.2 });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Center Gold Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#D4AF37] rounded-full pointer-events-none z-[999999] hidden md:block shadow-[0_0_12px_#FFD700]"
      />

      {/* Dynamic Gold Orbit Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#D4AF37]/60 rounded-full pointer-events-none z-[999998] hidden md:block"
      >
        {/* 🧪 DEBUG TEST ANIMATION: Gold Orbiting Satellite Dot inside cursor */}
        <span 
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-ping pointer-events-none" 
        />
      </div>
    </>
  );
}