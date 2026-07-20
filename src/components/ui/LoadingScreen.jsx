import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);
  const screenRef = useRef(null);
  const fillRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (screenRef.current) {
            screenRef.current.style.pointerEvents = 'none';
          }
          gsap.to(screenRef.current, {
            opacity: 0,
            scale: 1.02,
            duration: 0.8,
            ease: 'power4.inOut',
            onComplete: () => {
              setIsFinished(true);
              if (onComplete) onComplete();
            },
          });
        },
      });

      const counter = { value: 0 };

      // High performance 60fps direct DOM manipulation (no React re-renders)
      tl.to(counter, {
        value: 100,
        duration: 2.0,
        ease: 'power3.out',
        onUpdate: () => {
          const currentProgress = Math.floor(counter.value);

          if (fillRef.current) {
            fillRef.current.style.width = `${currentProgress}%`;
          }
          if (numberRef.current) {
            numberRef.current.innerText = `${currentProgress}%`;
          }
        },
      });

      tl.fromTo(
        [textRef.current, statsRef.current],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        0
      );
    });

    return () => context.revert();
  }, [onComplete]);

  // Completely unmount layer from DOM after completion
  if (isFinished) return null;

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050b18] font-sans overflow-hidden select-none"
    >
      {/* Background Radial Navy & Gold Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-sm px-6 relative z-10">
        <div ref={textRef} className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-ping" />
            <span className="font-display text-sm font-bold tracking-widest text-white uppercase">
              TRUE LIFE GLOBAL
            </span>
          </div>
          <span className="font-mono text-xs tracking-wider text-[#D4AF37]">
            SYS_INIT
          </span>
        </div>

        {/* Progress Track */}
        <div className="relative w-full h-[3px] bg-[#1D3557]/50 rounded-full overflow-hidden mb-4 border border-[#D4AF37]/30">
          <div
            ref={fillRef}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#E6C200] rounded-full shadow-[0_0_15px_#FFD700]"
            style={{ width: '0%' }}
          />
        </div>

        <div
          ref={statsRef}
          className="flex justify-between items-center font-mono text-[10px] tracking-widest text-slate-400 uppercase"
        >
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SECURE_LINK // CONNECTED</span>
          </div>
          <div>
            <span ref={numberRef} className="text-[#FFD700] font-bold">
              0%
            </span>
          </div>
        </div>
      </div>

      {/* 🧪 DEBUG TEST ANIMATION: Gold Pulse Badge */}
      <div className="absolute bottom-6 z-20 pointer-events-none flex items-center gap-1.5 bg-[#050b18]/90 border border-[#D4AF37]/60 px-3 py-1 rounded-full text-[10px] text-[#FFD700] font-mono shadow-[0_0_12px_rgba(212,175,55,0.3)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-ping" />
        LOADER OK
      </div>
    </div>
  );
}